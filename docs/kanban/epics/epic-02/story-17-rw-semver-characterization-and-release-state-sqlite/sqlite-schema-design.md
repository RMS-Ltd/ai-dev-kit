# SQLite Release-State Schema Design (E02:S17:T03)

**Version:** v1.0 (2026-06-07)  
**Story:** [E02:S17](../story-17-rw-semver-characterization-and-release-state-sqlite.md)  
**IPP:** [IPP-E02S17T03-sqlite-release-state-schema.md](../../../../implementation-cycles/IPP-E02S17T03-sqlite-release-state-schema.md)

---

## 1. Design goals

1. **Parity:** Every field read/written by `semver_converter.py`, `finalize_rw_semver_registry.py`, and Step 9 validators must round-trip through SQLite.
2. **Performance:** Indexed lookup by `internal_version` and `patch` — target **<5ms p95** (baseline YAML load ~188ms, RW-V04).
3. **Finalize boundary:** Counter increment + mapping insert occur in one transaction at RW Step 2.5 (RW-S04 invariant).
4. **rc-scoped:** Mirror `rc_0` YAML nesting; `release_candidate` column on all registry tables (Pattern 3).

---

## 2. Database location and config

| Key | Default | Description |
| --- | ------- | ----------- |
| `release_state_backend` | `legacy` | `legacy` \| `sqlite` |
| `release_state_db` | `.adk/release-state.db` | Path relative to repo root |

**Pragma:** `journal_mode=WAL`, `foreign_keys=ON`, `synchronous=NORMAL`.

---

## 3. Schema DDL

```sql
-- schema_version: single-row migration tracker
CREATE TABLE schema_version (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  version INTEGER NOT NULL,
  applied_at TEXT NOT NULL  -- ISO 8601 UTC
);

-- semver_rc: one row per release candidate (rc_0, rc_1, …)
CREATE TABLE semver_rc (
  rc INTEGER PRIMARY KEY,
  epic_count INTEGER,
  updated_at TEXT NOT NULL
);

-- epic_to_minor: maps epic → SemVer MINOR component
CREATE TABLE epic_to_minor (
  rc INTEGER NOT NULL REFERENCES semver_rc(rc),
  epic INTEGER NOT NULL,
  minor INTEGER NOT NULL,
  PRIMARY KEY (rc, epic)
);

-- story_to_patch: maps (epic, story) → base patch offset (legacy registry)
CREATE TABLE story_to_patch (
  rc INTEGER NOT NULL REFERENCES semver_rc(rc),
  epic INTEGER NOT NULL,
  story INTEGER NOT NULL,
  patch INTEGER NOT NULL,
  PRIMARY KEY (rc, epic, story)
);

-- task_touch_state: counter + metadata (rc_0.task_touch_mode)
CREATE TABLE task_touch_state (
  rc INTEGER PRIMARY KEY REFERENCES semver_rc(rc),
  epic_count INTEGER NOT NULL,
  task_touch_counter INTEGER NOT NULL,
  max_patch INTEGER NOT NULL,
  updated_at TEXT NOT NULL
);

-- task_touch_mapping: mapping_history entries (injective on patch)
CREATE TABLE task_touch_mapping (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rc INTEGER NOT NULL REFERENCES semver_rc(rc),
  internal_version TEXT NOT NULL,
  semver_full TEXT NOT NULL,
  patch INTEGER NOT NULL,
  epic INTEGER NOT NULL,
  story INTEGER NOT NULL,
  task INTEGER NOT NULL,
  build INTEGER NOT NULL,
  finalized_at TEXT,           -- NULL until tag boundary finalize
  git_tag_primary TEXT,
  git_tag_internal TEXT,
  UNIQUE (rc, internal_version),
  UNIQUE (rc, patch)
);

CREATE INDEX idx_ttm_internal ON task_touch_mapping(rc, internal_version);
CREATE INDEX idx_ttm_patch ON task_touch_mapping(rc, patch);

-- changelog_entry: archive + main changelog rows
CREATE TABLE changelog_entry (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  internal_version TEXT NOT NULL UNIQUE,
  semver_full TEXT NOT NULL,
  release_date TEXT NOT NULL,   -- IMMUTABLE once written (RW Step 3)
  short_date TEXT NOT NULL,       -- DD-MM-YY for main CHANGELOG
  epic INTEGER NOT NULL,
  story INTEGER NOT NULL,
  task INTEGER NOT NULL,
  summary TEXT NOT NULL,
  detailed_path TEXT,             -- relative path to archive MD (legacy export)
  body_markdown TEXT,             -- full archive content (SQLite-native)
  created_at TEXT NOT NULL
);

CREATE INDEX idx_changelog_version ON changelog_entry(internal_version);
CREATE INDEX idx_changelog_release_date ON changelog_entry(release_date DESC);

-- release_metadata: RW forensic row per release
CREATE TABLE release_metadata (
  internal_version TEXT PRIMARY KEY,
  branch TEXT,
  commit_sha TEXT,
  rw_task_token TEXT,
  semver_strategy TEXT NOT NULL DEFAULT 'task_touch',
  exported_registry_hash TEXT,   -- SHA256 of last YAML export
  created_at TEXT NOT NULL
);
```

---

## 4. Finalize semantics (Step 2.5)

```
BEGIN TRANSACTION;
  SELECT task_touch_counter FROM task_touch_state WHERE rc = ? FOR UPDATE;
  -- if mapping exists for internal_version: ROLLBACK (idempotent return)
  -- else:
  UPDATE task_touch_state SET task_touch_counter = counter + 1, max_patch = counter + 1;
  INSERT INTO task_touch_mapping (... patch = new_counter ...);
COMMIT;
```

Matches `finalize_rw_semver_registry.py`: counter increments only when mapping row is **created**; re-finalize is idempotent (RW-S06).

---

## 5. Query patterns (RW Steps 2–11)

| Step | Operation | SQL pattern |
| ---- | --------- | ----------- |
| 2 | Resolve BUILD | Read `version.py` (unchanged); registry read optional |
| 2.5 | Finalize | Transaction above |
| 3 | Write changelog | `INSERT INTO changelog_entry` |
| 5 | README SemVer | `SELECT semver_full FROM task_touch_mapping WHERE internal_version = ?` |
| 9 | Injective check | `SELECT patch, COUNT(*) FROM task_touch_mapping GROUP BY patch HAVING COUNT(*) > 1` |
| 9 | Contract strict | Verify mapping row exists + staged export hash |
| 11 | Tag names | `SELECT git_tag_primary, git_tag_internal FROM task_touch_mapping` |

---

## 6. Legacy compatibility layer

When `release_state_backend: legacy` (default): existing YAML/MD paths unchanged.

When `sqlite`:

- **Read path:** `load_semver_registry()` queries DB → builds in-memory dict matching YAML structure for validators.
- **Write path:** Step 2.5 writes DB; optional `--export-legacy` flag writes YAML for git diff during transition.
- **Export:** Full YAML regeneration from tables for round-trip (T03 AC3).

---

## 7. Stress cases from T02 baseline

| Pattern | Schema implication |
| ------- | ------------------ |
| Pattern 3 (rc_0 nesting) | `rc` column on all registry tables |
| Pattern 9 (~188ms YAML) | Indexed `internal_version` / `patch` lookups |
| RW-S05 collision | `UNIQUE (rc, patch)` enforced at INSERT |
| RW-V03 changelog size | `changelog_entry` row count query replaces line-count scan |
| RW-V04 benchmark | Compare `yaml.safe_load` vs `SELECT semver_full WHERE internal_version = ?` |

---

## 8. Open items (T04)

- ADR-025 formal decision record
- Whether `story_to_patch` / `epic_to_minor` remain populated in task_touch-only mode or become export-only legacy fields
- Changelog `latest_only` mode: export filter for main `CHANGELOG.md`
