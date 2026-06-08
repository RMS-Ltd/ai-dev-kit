---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-07T12:30:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-116: SemVer Registry Structured Store — Shared Release Metadata

**Type:** Feature Request (FR)  
**ID:** FR-116  
**Submitted:** 2026-06-07  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** IMPLEMENTED (**v0.2.1.25+1** — pending operator verification)  
**IPP:** [`IPP-E02S01T25-release-metadata-async-ingest-umbrella.md`](../../implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md)  
**Implementing Task:** **E03:S02:T13** — [`T13-semver-registry-structured-store-shared-release-metadata-fr116.md`](../epics/epic-03/story-02-versioning-cookbook-and-examples/T13-semver-registry-structured-store-shared-release-metadata-fr116.md)

**Related (shared infrastructure):** [FR-115](FR-115-changelog-structured-store-database-backed-cmw.md) — changelog structured store; **same embedded DB module** if both proceed

---

## Summary

Add a **structured SemVer read model** (SQLite default) via **async ingestion** from `semver-registry.yaml` — **RW keeps writing YAML** on finalize. The database enables indexed lookup and collision analytics while **sharing ingest infrastructure** with [FR-115](FR-115-changelog-structured-store-database-backed-cmw.md); **blocking injectivity checks remain on YAML** at RW Step 9 in v1.

---

## Problem Statement

`semver-registry.yaml` at repo root is the canonical SoT for **task-touch SemVer mapping** ([FR-045](FR-045-adr-002-task-touch-derived-mapping.md), [FR-046](FR-046-rw-semver-tag-task-touch-mode.md)). It contains:

- `epic_to_minor` / `story_to_patch` coordinate maps
- `task_touch_mode.epic_count`, `task_touch_counter`
- `mapping_history` — one row per internal→SemVer release mapping (dominant growth driver)

As RW release volume increases:

1. **YAML-as-database** — Every RW finalize appends to `mapping_history`; the file is now **~2,500 lines** and grows ~1 entry per release. Git diffs are noisy; merge conflicts on busy branches are likely.
2. **Validation cost** — `validate_semver_registry_injective.py` and collision repair (BR-061, BR-073, BR-097 waves) must scan the full history to detect PATCH/core collisions — O(n) on a flat YAML list.
3. **Query limitations** — Lookup by internal version, SemVer core, tag, or E:S:T requires linear search or external tooling; no indexed uniqueness constraints at write time.
4. **Operational fragility** — Manual registry patches (retrospective collision fixes) are error-prone YAML surgery, similar to changelog markdown editing (BR-074 class).

The registry suffers the **same architectural smell** as `CHANGELOG.md`: a human-readable serialization format forced to act as a transactional database.

---

## Proposed Direction (operator-preferred: async ingestion)

**Canonical SoT (unchanged):** RW / `finalize_rw_semver_registry.py` continues to append **`semver-registry.yaml`** (task_touch mode). Existing Step 9 validators (`validate_semver_registry_injective.py`, etc.) remain **blocking on YAML**.

**Derived read model (new):** Same background ingest job as FR-115 parses YAML into SQLite:

```
RW finalize → writes semver-registry.yaml (git) → [async] ingest job → semver_* tables
```

### Shared ingest store (with FR-115)

Single SQLite file (e.g. `adk-release-metadata.sqlite`) with namespaced tables:

| Table group | Ingest source | FR owner |
| ----------- | ------------- | -------- |
| `semver_*` | `semver-registry.yaml` | **FR-116** |
| `changelog_*` | `CHANGELOG.md` + archive tree | **FR-115** |

**Benefits:**

- **No RW hot-path DB writes** — aligns with FR-115 scope reduction
- One cron / GHA schedule ingests both corpora
- **Joinable queries** — internal version → SemVer mapping + changelog body
- DB UNIQUE indexes support **offline collision audits** and maintainer reports (complement YAML validators, not replace in v1)

### Indexing strategy (prudent — IPP must specify)

Today `validate_semver_registry_injective.py` and ad-hoc lookups scan **O(n)** over ~1,000+ `mapping_history` rows in YAML. The ingest read model should make common queries **O(log n)** via SQLite indexes.

**`semver_mapping` (core table — illustrative)**

| Index | Columns | Purpose |
| ----- | ------- | ------- |
| `PK` / `UNIQUE` | `internal_version` | Primary lookup: `0.2.1.24+3` → SemVer row |
| `UNIQUE` | `semver_patch` | Injective PATCH audit (FR-045:NF02); collision detection |
| `UNIQUE` | `semver_core` | Injective `MAJOR.MINOR.PATCH` audit |
| `INDEX` | `epic, story, task` | Filter releases by E:S:T |
| `INDEX` | `ingested_at` | Incremental ingest / “since last run” windows |
| `INDEX` | `content_hash` | Idempotent upsert skip |

**Supporting tables:** `epic_to_minor` and `story_to_patch` keyed by `(epic)` and `(epic, story)` respectively (small cardinality — table scan acceptable; index optional).

**Query patterns to optimize (v1 tooling):**

1. `internal_version` → full mapping row (converter parity checks)
2. `semver_core` or `semver_patch` → all internal versions sharing that SemVer (collision forensics)
3. `E:S:T` → all builds/releases for a task
4. Join `semver_mapping.internal_version` = `changelog_release.internal_version` (shared parent key — see FR-115)

**Performance target (NF):** Point lookups &lt; **5 ms** on ai-dev-kit corpus (~2,500 YAML lines → ~1k mapping rows); full collision audit &lt; **100 ms** on same corpus (indexed GROUP BY / UNIQUE violation scan).

**Why not skip indexes:** At 1k rows YAML scan is merely annoying; at 10k+ releases (multi-year perpetual RW/UKW) unindexed audit scripts become CI-visible latency. Indexes are cheap in SQLite (B-tree, negligible file size).

### Phase 2 (optional — not v1)

- Slim YAML (counters + maps only); history DB-only
- Validators read store instead of scanning 2,500-line YAML
- Write-path DB with RW transaction (former Option A — only if ingest proves insufficient)

### Alternatives (documented in IPP, not preferred)

| Option | Note |
| ------ | ---- |
| **A. RW writes DB directly** | Higher scope; deferred to Phase 2 |
| **B. Separate SQLite per domain** | Allowed if shared ingest rejected |

---

## Requirements

### Functional

- [ ] **FR-116-F1:** Define `semver_*` ingest schema: counters, coordinate maps, `mapping` rows with `content_hash` / `source_line` provenance.
- [ ] **FR-116-F2:** **Ingest parser** for `semver-registry.yaml` (idempotent; shares job with FR-115).
- [ ] **FR-116-F3:** `finalize_rw_semver_registry.py` **unchanged** for v1 — still writes YAML only.
- [ ] **FR-116-F4:** `semver_converter.py` / `get_rw_tag_info()` **unchanged** for v1 — still read YAML (DB for tooling/queries only).
- [ ] **FR-116-F5:** Optional `audit_semver_store_collisions.py` reads DB indexes (maintainer report; non-blocking).
- [ ] **FR-116-F6:** Shared `release_metadata_store` module with FR-115; one ingest entrypoint.
- [ ] **FR-116-F7:** Schema migrations create indexes listed in **Indexing strategy** (UNIQUE + lookup indexes); documented in IPP DDL.

### Non-Functional

- [ ] **FR-116-NF1:** RW finalize path unchanged; no DB dependency at tag-creation time.
- [ ] **FR-116-NF2:** Embedded SQLite only (FR-110); DB gitignored by default.
- [ ] **FR-116-NF3:** `greenfield-install/` parity (FR-106).
- [ ] **FR-116-NF4:** Ingest drift detector: compare DB row count vs YAML `mapping_history` length (alert on mismatch).
- [ ] **FR-116-NF5:** Indexed point lookups meet performance target on ai-dev-kit corpus (see Indexing strategy).

---

## Scope Analysis

**Problem Domain:** Versioning / SemVer task-touch / RW tag finalization  
**Affected Areas:**

- [x] `semver-registry.yaml` (remains git SoT in v1)
- [x] Ingest scripts + shared store module (new)
- [x] `packages/frameworks/workflow-mgt/scripts/version/` (read path unchanged v1)
- [ ] RW hot-path changes (deferred Phase 2)
- [x] `rw-config.yaml` schema
- [x] Epic 3 versioning docs / cookbook
- [ ] Changelog tables (FR-115 scope — coordinate only)

**Complexity:** Medium (ingest + shared store; **RW finalize unchanged** in v1)

**Dependencies / Related:**

- [FR-115](FR-115-changelog-structured-store-database-backed-cmw.md) — **shared store infrastructure** (coordinate IPPs)
- [FR-045](FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](FR-046-rw-semver-tag-task-touch-mode.md) — current YAML SoT model
- [E03:S02:T12](../epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) — task-touch implementation (COMPLETE; this FR evolves storage)
- [BR-061](BR-061-semver-task-touch-counter-increments-too-often.md) · [BR-073](BR-073-semver-task-touch-collision-retrospective-fix.md) · [BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) — collision classes the store must prevent at write time

---

## Acceptance Criteria

- [ ] **AC1:** IPP approved; shared ingest architecture with FR-115 documented.
- [ ] **AC2:** Full `semver-registry.yaml` ingests without row loss; ordering preserved.
- [ ] **AC3:** RW finalize behavior **unchanged**; YAML validators still blocking at Step 9.
- [ ] **AC4:** Ingest + optional collision audit script runs on schedule; manual replay documented.
- [ ] **AC5:** Query demo: lookup internal_version → SemVer from store.
- [ ] **AC6:** Single config key (`release_metadata_store.path`) and one ingest CLI for changelog + semver.

---

## Coordination with FR-115

| Decision | Recommendation |
| -------- | -------------- |
| Proceed with both? | Single IPW **umbrella** with **§0 Shared async ingest** |
| Schema ownership | FR-116 → `semver_*`; FR-115 → `changelog_*`; optional `release` parent on `internal_version` for joins |
| RW integration | **None in v1** — both corpora ingested post-commit by cron |
| Git commit policy | Markdown + YAML committed; DB **gitignored** (regenerable from ingest) |

**Anti-pattern:** RW Step N "sync to DB" hooks — increases release-path risk; defer to Phase 2 only with explicit FR amendment.

---

## Open Questions (for IPW)

1. **Ingest trigger:** GHA `schedule` only vs add `workflow_run` after RW merge?
2. **Slim YAML Phase 2:** When to stop appending full `mapping_history` to git?
3. **Parent `release` row** keyed by `internal_version` for joins — yes/no in v1 schema?
4. **Collision audit:** Should ingest job fail CI if DB detects injectivity violation YAML validators missed?

---

## References

- `semver-registry.yaml` (repo root)
- `packages/frameworks/workflow-mgt/scripts/version/finalize_rw_semver_registry.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py`
- `docs/governance/standards/dev-kit-versioning-policy.md`
