---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-115: Changelog Structured Store — Database-Backed CMW

**Type:** Feature Request (FR)  
**ID:** FR-115  
**Submitted:** 2026-06-07  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** IMPLEMENTED (**v0.2.1.25+1** — pending operator verification)  
**IPP:** [`IPP-E02S01T25-release-metadata-async-ingest-umbrella.md`](../../implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md)  
**Implementing Task:** **E02:S01:T25** — [`T25-changelog-structured-store-database-backed-cmw-fr115.md`](../epics/epic-02/story-01-rw-agent-execution-and-docs/T25-changelog-structured-store-database-backed-cmw-fr115.md)

**Related (shared infrastructure):** [FR-116](FR-116-semver-registry-structured-store-shared-release-metadata.md) — `semver-registry.yaml` structured store; **same embedded DB module** if both proceed

---

## Summary

Add a **structured changelog read model** (SQLite default) built by **async ingestion** from existing RW markdown outputs — **without moving RW write path off `.md`**. Git-committed `CHANGELOG.md` and archive files remain canonical; the database enables query, analytics, and (optionally) smarter CMW triggers while **reducing IPW/RW scope creep**.

---

## Problem Statement

The current changelog maintenance model (FR-025 / FR-057 / CMW) treats `CHANGELOG.md` as both **operational SoT** and **human-readable surface**. As release volume grows:

1. **Arbitrary line threshold** — `check_changelog_size.py` fires CMW when `CHANGELOG.md` exceeds `size_threshold_lines` (default **1,000**). Line count is a poor proxy for usability: dense entries, link blocks, and multi-paragraph release notes inflate lines without changing navigability semantics.
2. **Reactive archival** — CMW runs opportunistically at RW Step 9.5 (non-blocking). Operators discover bloat late; archival scripts must parse markdown, dedupe, and reorder — fragile at scale.
3. **Dual maintenance burden** — Main changelog, per-build detailed archives (`CHANGELOG_v{version}.md`), and `CHANGELOG_ARCHIVE.md` index must stay consistent. BR-074 class defects show markdown-as-database is error-prone under agentic RW.
4. **Query limitations** — Finding releases by epic/story/task, date range, or change category requires grep/text tools, not structured filters.

The project now has **substantial changelog history** (main file + large archive tree). The threshold model feels increasingly clunky relative to the forensic precision elsewhere in ADK (version schema, semver registry, kanban four-surface reconciliation).

---

## Proposed Direction (operator-preferred: async ingestion)

**Canonical SoT (unchanged):** RW continues to create/update markdown exactly as today:

- `CHANGELOG.md` (Step 4)
- `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md` (Step 3)
- `CHANGELOG_ARCHIVE.md` index

**Derived read model (new):** A background **ingestion job** (cron / scheduled CI — not RW Step hot path) parses committed markdown into SQLite:

```
RW → writes .md (git) → [async] ingest job → SQLite read model
```

### Core schema (conceptual — ingest target)

| Entity | Key fields |
| ------ | ---------- |
| `release` | `internal_version`, `source_path`, `content_hash`, `release_date_utc`, `epic`, `story`, `task`, `build`, `ingested_at` |
| `release_section` | `release_id`, `section` (`Added`/`Changed`/`Fixed`/…) |
| `release_item` | `section_id`, `body_md`, `verification_status`, `linked_est`, `linked_fr_br` |
| `ingest_cursor` | last processed commit / file mtime / manifest hash (idempotent replays) |

**Indexing (changelog tables):** `UNIQUE(internal_version)`; indexes on `(epic, story, task)`, `release_date_utc`, `content_hash`; optional FTS on `body_md` deferred to Phase 2. Join key to FR-116: `internal_version`. See FR-116 **Indexing strategy** for semver-side indexes.

### Workflow integration (minimal RW touch)

| Workflow | Change |
| -------- | ------ |
| **RW Steps 3–4** | **No change** to write semantics (markdown generation stays in RW) |
| **RW Step 9** | Existing markdown validators remain blocking; optional **non-blocking** `validate_changelog_ingest_freshness.py` (warn if DB lags HEAD by N commits) |
| **Ingest job** | Scheduled (`ingest_release_metadata.py` or equivalent): parse main + archive tree → upsert store; record `content_hash` for idempotency |
| **CMW** | May **consume DB metrics** (entry count, age histogram) instead of crude line threshold; archival **still edits markdown** unless a later FR moves compaction |
| **Adopters** | Store path in `rw-config.yaml`; DB **gitignored by default** (local/CI artifact); markdown remains portable SoT |

### What async ingestion solves vs defers

| Solved now | Deferred (optional later phases) |
| ---------- | -------------------------------- |
| Query/filter by E:S:T, date, category | RW writing DB directly |
| Indexed history without parsing 2k+ lines on each validator run | Cron regenerating slim `CHANGELOG.md` from DB |
| Shared ingest pipeline with FR-116 | Replacing 1000-line threshold with DB-only gate |
| Forensic joins (with semver ingest) | Real-time consistency (eventual: post-commit/cron lag) |

---

## Options Analysis

| Approach | Pros | Cons |
| -------- | ---- | ---- |
| **E. Async ingest — markdown SoT, DB read model (operator-preferred)** | **Minimal RW/IPW scope**; git markdown unchanged; query layer added incrementally; shared cron with FR-116; adopters without cron still work | Eventual consistency; ingest parser must track RW format drift; line-threshold/Cmw may remain until Phase 2 |
| **A. SQLite store as RW write path** | Write-time constraints; single transaction with semver; no ingest lag | **High RW/IPW scope**; changes critical release path; DB in git policy debates |
| **B. JSON/JSONL store** | Git-diff friendly | Weak schema; same RW-scope issues if write path |
| **C. Keep markdown only, improve metrics** | Zero new infra | No query layer; threshold pain remains |
| **D. External DB (Postgres, etc.)** | Multi-repo scale | Overkill (FR-110) |

**Recommendation:** **Option E** for v1. IPP defines ingest job contract, idempotency, and cron placement (see below). **Option A** remains a documented Phase 2 only if ingest proves insufficient (e.g. write-time immutability enforcement in DB).

### Ingest job placement (IPW decision)

| Host | Pros | Cons |
| ---- | ---- | ---- |
| **GitHub Actions `schedule`** | No maintainer machine; runs on `main`/default branch | Needs workflow; DB artifact storage/ephemeral |
| **Local cron** (`launchd`/crontab) | Simple for solo operator | Machine must be on; not adopter-default |
| **Post-push hook** (optional accelerator) | Near-real-time | Not a substitute for scheduled reconciliation; hook fatigue |

Default proposal: **scheduled GHA** on ai-dev-kit + **manual CLI** (`python ingest_release_metadata.py --full`) for adopters; RW does **not** invoke ingest.

---

## Requirements

### Functional

- [ ] **FR-115-F1:** Define changelog ingest schema + `rw-config.yaml` keys (`release_metadata_store.path`, `ingest.changelog_paths`, `ingest.schedule`).
- [ ] **FR-115-F2:** **Ingest CLI** parses `CHANGELOG.md` + archive tree into store (idempotent via `content_hash` / cursor).
- [ ] **FR-115-F3:** **Scheduled job** (GHA cron default) runs ingest on cadence; manual `--full` replay for recovery.
- [ ] **FR-115-F4:** RW Steps 3–4 **unchanged** — markdown remains write path; no new RW steps required for v1.
- [ ] **FR-115-F5:** Optional query CLI or script (`query_changelog_store.py`) for E:S:T / date filters (maintainer tooling).
- [ ] **FR-115-F6:** Phase 2 (optional): CMW/threshold may **read DB metrics**; not required for v1 acceptance.
- [ ] **FR-115-F7:** Adopter documentation + `greenfield-install/` parity (FR-106); cron documented as optional.

### Non-Functional

- [ ] **FR-115-NF1:** Store file **< 5 MB** for ai-dev-kit corpus after full ingest.
- [ ] **FR-115-NF2:** Embedded SQLite only; **no RW runtime dependency** on DB presence.
- [ ] **FR-115-NF3:** Ingest preserves parsed `release_date_utc` from markdown (BR-074 — detect drift vs source, do not rewrite source).
- [ ] **FR-115-NF4:** Deterministic ingest — same markdown corpus → same store rows (stable ordering).
- [ ] **FR-115-NF5:** Ingest failure **non-blocking** for RW; log + alert only.

---

## Scope Analysis

**Problem Domain:** Release Workflow / Changelog Management (CMW)  
**Affected Areas:**

- [x] Backend/scripts (`packages/frameworks/workflow-mgt/scripts/changelog/`)
- [x] RW agent docs (Step 3, 4, 9, 9.5)
- [x] Database/Schema (SQLite file)
- [x] Documentation (`changelog-archival-policy.md`, governance standards)
- [x] Testing (migration + round-trip export tests)
- [ ] Frontend/UI

**Complexity:** Medium (ingest pipeline + shared store; **low RW churn**)

**Dependencies / Related:**

- [FR-025](FR-025-changelog-management-and-archival-workflow.md) — IMPLEMENTED (markdown-era CMW; this FR supersedes threshold-centric policy)
- [FR-057](FR-057-update-changelog-workflow.md) — CMW perpetual wiring
- [BR-074](BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md) — immutability lessons
- [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — lean footprint constraint
- [FR-106](FR-106-packaged-workflows-sync-with-live-repo-implementation.md) — greenfield-install parity
- Policy: [`docs/governance/standards/changelog-archival-policy.md`](../../governance/standards/changelog-archival-policy.md) — CHANGELOG-ARCH-R1 (1000 lines) requires revision
- [FR-116](FR-116-semver-registry-structured-store-shared-release-metadata.md) — sibling structured-store FR; coordinate IPPs for unified `release_metadata_store`

---

## Coordination with FR-116

If both FRs proceed, prefer a **single SQLite read model** with `changelog_*` and `semver_*` table groups fed by **one ingest job** (parse `CHANGELOG*.md` + `semver-registry.yaml`). Benefits: one cron, joinable queries, no RW hot-path coupling. IPW for T25 should cross-reference T13 IPP **§0 Shared ingest architecture** before implementation.

---

## Acceptance Criteria

- [ ] **AC1:** IPP approved with ingest contract, cron placement, and rollback (delete DB + re-ingest).
- [ ] **AC2:** RW Steps 3–4 behavior **unchanged**; markdown files remain git SoT.
- [ ] **AC3:** Full ai-dev-kit archive ingests without losing version ordering or release dates.
- [ ] **AC4:** Scheduled ingest runs on ai-dev-kit; manual `--full` replay documented.
- [ ] **AC5:** Query tooling demonstrates E:S:T lookup from store (maintainer-facing).
- [ ] **AC6:** Adopter guide: optional cron, gitignored DB path, markdown-only fallback.

---

## Open Questions (for IPW)

1. **Cron cadence:** Daily vs post-merge webhook accelerator vs weekly (balance freshness vs Actions minutes)?
2. **DB artifact:** Gitignored local path only vs optional GHA artifact upload for maintainers?
3. **Phase 2 threshold:** When (if ever) does CMW read DB metrics instead of `check_changelog_size.py` line count?
4. **Parser ownership:** Reuse `validate_changelog_format.py` parsers vs dedicated ingest parser module?

---

## References

- `packages/frameworks/workflow-mgt/scripts/changelog/check_changelog_size.py`
- `packages/frameworks/workflow-mgt/scripts/changelog/identify_archival_entries.py`
- `docs/governance/standards/changelog-archival-policy.md`
- `.cursor/skills/cmw-maintain/SKILL.md`
