---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T25 — Planning: Release Metadata Async Ingest (Umbrella IPW)

**Host Task:** [`T25-changelog-structured-store-database-backed-cmw-fr115.md`](../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T25-changelog-structured-store-database-backed-cmw-fr115.md) **(E02:S01:T25)**  
**Co-deliverable:** [`T13-semver-registry-structured-store-shared-release-metadata-fr116.md`](../project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T13-semver-registry-structured-store-shared-release-metadata-fr116.md) **(E03:S02:T13)**  
**Planning for:** [FR-115](../project-management/kanban/fr-br/FR-115-changelog-structured-store-database-backed-cmw.md) · [FR-116](../project-management/kanban/fr-br/FR-116-semver-registry-structured-store-shared-release-metadata.md)  
**Status:** Approved (pending implementation authorization)

> **Umbrella IPW:** Single planning package for shared async-ingest read model. Implementation order: **shared foundation → T13 semver → T25 changelog → cron/tooling**. RW hot path **unchanged** in v1.

---

## 0. Shared async ingest architecture (frozen contract)

### 0.1 SoT vs read model

| Layer | Role | v1 artifacts |
| ----- | ---- | ------------ |
| **Canonical SoT (git)** | RW writes; validators block on these | `CHANGELOG.md`, archive `CHANGELOG_v*.md`, `semver-registry.yaml` |
| **Derived read model (local/CI)** | Async ingest; query + audit only | `.data/adk-release-metadata.sqlite` (gitignored) |

```
RW → markdown/YAML (git) → [daily GHA + manual CLI] → SQLite → query/audit CLIs
```

### 0.2 IPW decisions (open questions resolved)

| Question | Decision | Rationale |
| -------- | -------- | --------- |
| Cron cadence | **Daily 03:00 UTC** GHA `schedule` + `workflow_dispatch` manual | Balance freshness vs Actions minutes; no RW hook |
| DB in git | **Gitignored** at `release_metadata_store.path`; optional **7-day GHA artifact** | Regenerable from SoT; avoids noisy binary diffs |
| Parent `release` row | **Yes** — `internal_version` PK hub for semver + changelog joins | Enables forensic joins in v1 |
| Parser strategy | **Dedicated ingest parsers** sharing regex/helpers from `validate_changelog_format.py` / YAML loader — not validator imports in hot path | Avoid circular deps; validators stay markdown/YAML |
| Collision audit CI fail | **Advisory default**; `--strict` on dedicated audit step fails workflow | Ingest non-blocking; strict opt-in for maintainers |
| Phase 2 (RW writes DB, slim YAML, CMW DB metrics) | **Documented backlog only** — out of v1 scope | Scope control per operator direction |

### 0.3 `rw-config.yaml` keys (new)

```yaml
release_metadata_store:
  path: .data/adk-release-metadata.sqlite   # relative to project root
  gitignore: true

ingest:
  enabled: true
  semver_registry_file: semver-registry.yaml
  # changelog paths inherit main_changelog + changelog_dir when omitted
  changelog_main: null                      # default: main_changelog
  changelog_archive_dir: null             # default: changelog_dir
  incremental: true                           # use content_hash + ingest_cursor
```

### 0.4 Schema DDL (v1)

**Module:** `packages/frameworks/workflow-mgt/scripts/release_metadata/`

```sql
-- Join hub
CREATE TABLE release (
  internal_version TEXT PRIMARY KEY,
  epic INTEGER, story INTEGER, task INTEGER, build INTEGER,
  rc INTEGER DEFAULT 0,
  release_date_utc TEXT,
  ingested_at TEXT NOT NULL
);

-- Semver (FR-116)
CREATE TABLE semver_state (
  singleton_id INTEGER PRIMARY KEY CHECK (singleton_id = 1),
  epic_count INTEGER NOT NULL,
  task_touch_counter INTEGER NOT NULL,
  source_file_hash TEXT NOT NULL,
  ingested_at TEXT NOT NULL
);

CREATE TABLE semver_epic_to_minor (
  epic INTEGER PRIMARY KEY,
  minor INTEGER NOT NULL
);

CREATE TABLE semver_story_to_patch (
  epic INTEGER NOT NULL,
  story INTEGER NOT NULL,
  patch INTEGER NOT NULL,
  PRIMARY KEY (epic, story)
);

CREATE TABLE semver_mapping (
  internal_version TEXT PRIMARY KEY REFERENCES release(internal_version),
  semver TEXT NOT NULL,
  semver_core TEXT NOT NULL,
  patch INTEGER NOT NULL,
  rc INTEGER, epic INTEGER, story INTEGER, task INTEGER, build INTEGER,
  source_line INTEGER,
  row_hash TEXT NOT NULL,
  ingested_at TEXT NOT NULL
);

CREATE UNIQUE INDEX idx_semver_mapping_patch ON semver_mapping(patch);
CREATE UNIQUE INDEX idx_semver_mapping_core ON semver_mapping(semver_core);
CREATE INDEX idx_semver_mapping_est ON semver_mapping(epic, story, task);

-- Changelog (FR-115)
CREATE TABLE changelog_release (
  internal_version TEXT PRIMARY KEY REFERENCES release(internal_version),
  source_path TEXT NOT NULL,
  summary TEXT,
  release_date_utc TEXT,
  row_hash TEXT NOT NULL,
  ingested_at TEXT NOT NULL
);

CREATE TABLE changelog_section (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  internal_version TEXT NOT NULL REFERENCES changelog_release(internal_version),
  section_name TEXT NOT NULL,
  sort_order INTEGER NOT NULL
);

CREATE TABLE changelog_item (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  section_id INTEGER NOT NULL REFERENCES changelog_section(id),
  body_md TEXT NOT NULL,
  sort_order INTEGER NOT NULL,
  verification_status TEXT,
  linked_est TEXT,
  linked_fr_br TEXT
);

CREATE INDEX idx_changelog_release_date ON changelog_release(release_date_utc);
CREATE INDEX idx_changelog_release_est ON changelog_release(internal_version);

-- Ingest bookkeeping
CREATE TABLE ingest_cursor (
  domain TEXT PRIMARY KEY,
  last_git_sha TEXT,
  last_manifest_hash TEXT,
  last_run_at TEXT NOT NULL,
  rows_upserted INTEGER DEFAULT 0
);

CREATE TABLE ingest_run_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  started_at TEXT NOT NULL,
  finished_at TEXT,
  mode TEXT NOT NULL,
  status TEXT NOT NULL,
  message TEXT
);
```

### 0.5 CLI contract

| Command | Purpose |
| ------- | ------- |
| `python -m release_metadata.ingest --full` | Rebuild store from SoT (idempotent) |
| `python -m release_metadata.ingest --incremental` | Default cron mode |
| `python -m release_metadata.query --version 0.2.1.24+3` | Join semver + changelog |
| `python -m release_metadata.query --est E02:S01:T25` | Filter by E:S:T |
| `python -m release_metadata.audit_semver` | Collision report from indexes |
| `python -m release_metadata.audit_semver --strict` | Exit 1 on injectivity violation |

Entry shim: `packages/frameworks/workflow-mgt/scripts/release_metadata/ingest_release_metadata.py` (RW config loader wrapper).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Shared SQLite read model; gitignored path from `rw-config.yaml` | FR-115-F1, FR-116-F6 |
| RF2 | Ingest `semver-registry.yaml` idempotently with provenance (`row_hash`, `source_line`) | FR-116-F1, F2 |
| RF3 | Ingest `CHANGELOG.md` + archive tree idempotently | FR-115-F2 |
| RF4 | Single ingest CLI (`--full`, `--incremental`) for both domains | FR-115-F3, FR-116-F6 |
| RF5 | Daily GHA scheduled ingest + `workflow_dispatch` | FR-115-F3, IPW §0.2 |
| RF6 | Query CLI: `internal_version` and E:S:T lookups with semver↔changelog join | FR-115-F5, FR-116 AC5 |
| RF7 | Semver collision audit from DB indexes; advisory default, `--strict` optional | FR-116-F5 |
| RF8 | Drift detector: YAML `mapping_history` count vs DB `semver_mapping` count | FR-116-NF4 |
| RF9 | RW Steps 3–4 and `finalize_rw_semver_registry.py` **unchanged** | FR-115-F4, FR-116-F3 |
| RF10 | `semver_converter` / Step 9 YAML validators **unchanged** (read YAML) | FR-116-F4 |
| RF11 | Optional non-blocking `validate_ingest_freshness.py` (warn if DB older than N days) | FR-115 Step 9 note |
| RF12 | `greenfield-install/` parity for new module | FR-106 |
| RF13 | Parent `release` hub row per `internal_version` when either domain ingests | IPW §0.2 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Store < 5 MB for ai-dev-kit full ingest | FR-115-NF1 |
| RNF2 | RW has **zero** runtime dependency on DB file existing | FR-115-NF2, FR-116-NF1 |
| RNF3 | Deterministic ingest: same SoT bytes → same row hashes/order | FR-115-NF4 |
| RNF4 | Point lookup < 5 ms; full semver collision audit < 100 ms (ai-dev-kit corpus) | FR-116-NF5 |
| RNF5 | Ingest failure non-blocking for RW | FR-115-NF5 |
| RNF6 | Parse `release_date_utc` from markdown; never rewrite source files | FR-115-NF3, BR-074 |
| RNF7 | Embedded SQLite only (stdlib `sqlite3`) | FR-110 |

### 1.3 Invariants and boundaries

- **Invariants:** Git markdown/YAML remain canonical; DB is regenerable via `--full`; injectivity blocking stays on YAML validators in v1.
- **In scope:** Shared store, semver ingest (T13), changelog ingest (T25), cron, query/audit CLIs, tests, ADR, adopter doc.
- **Out of scope (v1):** RW DB writes; slim `semver-registry.yaml`; CMW threshold replacement; FTS on changelog bodies; Postgres; committing `.sqlite` to git.

---

## 2. Specification

### 2.1 Goal

Deliver a **unified release-metadata read model** ingested asynchronously from existing RW outputs, enabling indexed semver/changelog queries and offline collision audits **without modifying the RW release hot path**.

### 2.2 Specification mapping

RF1–RF13 map to §0 DDL + CLI contract. T13 implements RF2, RF7, RF8, RF10; T25 implements RF3, RF6, RF11; shared steps implement RF1, RF4, RF5, RF12, RF13.

### 2.3 Constraints

- Implementation waves: **foundation → T13 → T25 → ops** (no parallel schema forks).
- Verification release: `RW E02:S01:T25 --art` (primary version anchor); T13 AC closure in same change set.
- Post-ship FBU: `RW E02:S01:T25 --art` only (BR-097).

### 2.4 Status transition intent

| Task | Current | IN PROGRESS trigger | COMPLETE trigger |
| ---- | ------- | ------------------- | ---------------- |
| **E02:S01:T25** | TODO | Step 1 of §4 (first implementation commit) | All T25 ACs + evidence |
| **E03:S02:T13** | TODO | Same change set as T25 Step 1 | All T13 ACs + evidence |

**Atomic propagation:** Task doc status + `kboard.md` row + IPP segment updated in same RW Step 7 scope.

### 2.5 ADR necessity decision (FR-100)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **Y** | Async ingest vs RW write-path DB; GHA vs local cron; gitignored vs committed DB |
| T2 | Reversibility | N | Delete `.data/*.sqlite` + re-ingest restores state |
| T3 | Blast radius | **Y** | New config keys; changelog + semver + GHA; adopter optional path |
| T4 | Precedent | N | No existing ADR for release-metadata read model |
| T5 | Constraint trade-off | **Y** | Eventual consistency accepted to keep RW simple |
| T6 | Governance contract | **Y** | `rw-config.yaml` schema; archival policy cross-reference |
| T7 | Supersedes | N | Evolves FR-025/045 patterns; does not retire ADR-002 |

**Outcome:** **REQUIRED** — create [ADR-025](../architecture/standards-and-adrs/ADR-025-release-metadata-async-ingest-read-model.md) during implementation (§5 D-C1).

---

## 3. Test design

| ID | RF/RNF | Behavior | Expected |
| -- | ------ | -------- | -------- |
| T1 | RF2 | Ingest ai-dev-kit `semver-registry.yaml` `--full` | Row count = `mapping_history` length; no UNIQUE violations |
| T2 | RF3 | Ingest main + sample archive changelogs | `release_date_utc` preserved; ordering stable |
| T3 | RNF3 | Run `--full` twice | Identical `row_hash` sets; zero duplicate upserts |
| T4 | RF7 | `audit_semver --strict` on clean corpus | Exit 0 |
| T5 | RF7 | Inject duplicate `patch` in test fixture DB | `--strict` exit 1 |
| T6 | RF6 | `query --version 0.3.2.12+2` | Returns semver + changelog when both ingested |
| T7 | RF8 | Drift: delete one mapping row | Drift detector reports mismatch |
| T8 | RNF4 | Benchmark point lookup + audit on fixture | < 5 ms / < 100 ms (or skip with margin on CI) |
| T9 | RF9 | RW integration smoke | No new imports of `release_metadata` in `finalize_rw_semver_registry.py` |
| T10 | RF4 | `ingest --incremental` after single file change | Only affected domain rows updated |
| T11 | RNF2 | Missing DB file | Query CLI clear error; RW validators unaffected |

---

## 4. Implementation plan

| Step | Action | Owner | Deliverable |
| ---- | ------ | ----- | ----------- |
| **1** | **[MANDATORY]** Transition **E02:S01:T25** and **E03:S02:T13** `TODO → IN PROGRESS`; update `Last updated`; link IPP on both task docs + story checklists; update `kboard.md` IPP segments | Both | Task docs, kboard |
| 2 | Create `release_metadata/` package: schema migrations, `store.py`, config loader | Shared | `scripts/release_metadata/` |
| 3 | Add `rw-config.yaml` keys + `.gitignore` entry for `.data/` | Shared | config, gitignore |
| 4 | **T13:** `ingest_semver.py` parser + upsert + indexes | T13 | semver ingest |
| 5 | **T13:** `audit_semver.py` + drift detector | T13 | audit CLI |
| 6 | **T13:** Tests T1, T4, T5, T7, T8 (semver) | T13 | pytest |
| 7 | **T25:** `ingest_changelog.py` parser (main + archive glob) | T25 | changelog ingest |
| 8 | **T25:** `query.py` join CLI | T25 | query CLI |
| 9 | **T25:** Tests T2, T3, T6, T10, T11 (changelog + shared) | T25 | pytest |
| 10 | `ingest_release_metadata.py` shim; wire `--full` / `--incremental` | Shared | CLI entry |
| 11 | GHA `.github/workflows/release-metadata-ingest.yml` (schedule + dispatch + artifact) | Shared | CI |
| 12 | Optional `validate_ingest_freshness.py` (non-blocking, Step 9 advisory) | T25 | validator |
| 13 | **ADR-025** + adopter guide + `rw-config-schema` doc update | Shared | docs |
| 14 | `greenfield-install/` mirror (FR-106) | Shared | vendor parity |
| 15 | Full corpus ingest on ai-dev-kit; manual verification checklist | Both | ops evidence |
| 16 | `RW E02:S01:T25 --art` — ship umbrella release | T25 host | version tag |
| **17** | **[MANDATORY]** Reconcile **T25** and **T13** to actual state (`COMPLETE` + `✅ COMPLETE (v{version})` if ACs met); update FR-115/116 status; kboard Step 7 | Both | kanban four-surface |

### 4.1 Files to create or modify

**Create:**

- `packages/frameworks/workflow-mgt/scripts/release_metadata/` (package)
- `packages/frameworks/workflow-mgt/scripts/release_metadata/ingest_release_metadata.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_ingest_freshness.py` (optional)
- `packages/frameworks/workflow-mgt/tests/test_release_metadata_ingest.py`
- `.github/workflows/release-metadata-ingest.yml`
- `docs/architecture/standards-and-adrs/ADR-025-release-metadata-async-ingest-read-model.md`
- `packages/frameworks/workflow-mgt/docs/release-metadata-ingest-guide.md`
- `greenfield-install/` mirrors of above scripts

**Modify:**

- `rw-config.yaml` — `release_metadata_store`, `ingest` keys
- `.gitignore` — `.data/` or configured store path
- Task docs T25, T13; FR-115, FR-116 (status); story checklists; `kboard.md`
- `docs/governance/standards/changelog-archival-policy.md` — cross-link read model (Phase 2 note)

**Explicitly not modified (v1):**

- `finalize_rw_semver_registry.py` write path
- RW Steps 3–4 agent docs (beyond optional Step 9 advisory note)
- `semver_converter.py` read path

### 4.2 Dependency order

1. Shared schema + store module (Step 2–3)
2. **T13 semver ingest** (Step 4–6) — proves pipeline
3. **T25 changelog ingest** (Step 7–9) — reuses pipeline
4. Ops + docs + release (Step 10–17)

### 4.3 Documentation implementation steps

1. ADR-025 (before adopter guide — architecture SoT)
2. `release-metadata-ingest-guide.md` (operator)
3. `rw-config` schema fragment in workflow-mgt docs
4. Changelog archival policy cross-link (one paragraph + Phase 2 pointer)

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `rw-config.yaml` | Add `release_metadata_store`, `ingest` | RF1, Step 3 |
| D-U2 | `.gitignore` | Ignore `.data/` | Step 3 |
| D-U3 | `docs/governance/standards/changelog-archival-policy.md` | Read-model cross-link; Phase 2 | RF11 backlog |
| D-U4 | Task T25, T13 docs | IPP link, status, AC evidence | Step 1, 17 |
| D-U5 | FR-115, FR-116 | Status → ACCEPTED when implementation starts; IPP link | Step 1 |
| D-U6 | `kboard.md` | IPP segments for T25, T13 | Step 1, 17 |
| D-U7 | Story E02:S01, E03:S02 checklists | IPP links | Step 1 |

### 5.2 New documents to create

| Doc ID | Path | Purpose | Tied to |
| ------ | ---- | ------- | ------- |
| D-C1 | `docs/architecture/standards-and-adrs/ADR-025-release-metadata-async-ingest-read-model.md` | Architecture SoT | §2.5 |
| D-C2 | `packages/frameworks/workflow-mgt/docs/release-metadata-ingest-guide.md` | Operator/adopter guide | RF12 |
| D-C3 | `.github/workflows/release-metadata-ingest.yml` | Scheduled ingest | RF5 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Docusaurus public publish for ingest guide | **NONE** — maintainer/framework doc only (FR-114) |
| RW execution guide full Step 9 rewrite | **NONE** v1 — optional one-line advisory validator note only |
| Phase 2 slim YAML / CMW DB metrics | **NONE** — backlog paragraph in ADR-025 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle | Inbound links |
| ------ | -------------- | ----------- | --------- | ------------- |
| D-C1 | `docs/architecture/standards-and-adrs/ADR-025-*.md` | NOT_APPLICABLE (GitHub ADR stub per ADR-024) | evergreen | ADR index, IPP §2.5 |
| D-C2 | `packages/frameworks/workflow-mgt/docs/release-metadata-ingest-guide.md` | NOT_APPLICABLE | evergreen | workflow-mgt README, IPP |
| D-C3 | `.github/workflows/release-metadata-ingest.yml` | NOT_APPLICABLE | evergreen | ingest guide |
| IPP | `docs/implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md` | NOT_APPLICABLE | evergreen | T25, T13, FR-115, FR-116 |

---

## 7. Success / verification criteria

- [ ] Full ai-dev-kit `semver-registry.yaml` ingests; T1 passes
- [ ] Full changelog archive ingests; T2 passes
- [ ] `query --version` returns joined row for sample release
- [ ] GHA workflow runs on schedule and `workflow_dispatch`
- [ ] RW smoke: no new DB dependency in finalize/changelog steps (T9)
- [ ] ADR-025 published; ingest guide linked from task docs
- [ ] T25 AC1–AC7 and T13 AC1–AC6 satisfied with evidence
- [ ] `RW E02:S01:T25 --art` completes locally
- [ ] All §5 deliverables implemented or deferred with reason in changelog

### Phase 2 backlog (document only)

- CMW reads DB entry metrics instead of `check_changelog_size.py` line threshold
- Slim `semver-registry.yaml` (counters + maps; history DB-only)
- Validators optionally read store with YAML drift check
- RW write-path DB (former Option A)

---

## References

- [FR-115](../project-management/kanban/fr-br/FR-115-changelog-structured-store-database-backed-cmw.md)
- [FR-116](../project-management/kanban/fr-br/FR-116-semver-registry-structured-store-shared-release-metadata.md)
- [T25](../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T25-changelog-structured-store-database-backed-cmw-fr115.md)
- [T13](../project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T13-semver-registry-structured-store-shared-release-metadata-fr116.md)
- [BR-074](../project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md)
- [ADR-002](../architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping.md)
- `packages/frameworks/workflow-mgt/scripts/changelog/check_changelog_size.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py`
- `docs/governance/standards/specification-and-planning-artifacts-policy.md`
