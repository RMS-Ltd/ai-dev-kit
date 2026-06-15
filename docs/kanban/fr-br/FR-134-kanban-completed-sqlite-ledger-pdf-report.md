---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-15T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-134: SQLite completed-task ledger with UKW-generated PDF report

**Type:** Feature Request (FR)  
**ID:** FR-134  
**Submitted:** 2026-06-15  
**Submitted By:** Operator (kanban ledger architecture discussion)  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Status:** IMPLEMENTED  
**Version:** v0.4.14.12+2 (delivery)

**Implementing Task:** [E04:S14:T12](../epics/epic-04/story-14-kanban-framework-maintenance/T12-kanban-completed-sqlite-ledger-pdf-report-fr134.md)

**Related:** [FR-049](FR-049-enhanced-kanban-completed-with-timestamps-and-recent-tasks.md) · [FR-102](FR-102-ukw-archive-completed-board-rows.md) · [FR-109](FR-109-ukw-lean-active-board-contract.md) · [release-state-sqlite-mode](../../../packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md) · [E02:S17](../epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/) (`.adk/release-state.db` precedent)

---

## Summary

Replace agent-maintained **`kanban-completed.md`** with a committed **SQLite ledger** (`.adk/kanban-completed.db`) as the source of truth for archived completed tasks; regenerate a single static **`kanban-completed.pdf`** human snapshot at the end of each **UKW** run (overwrite in place).

---

## Problem Statement

`kanban-completed.md` (~1,400 lines and growing) is an append-only markdown ledger updated by agent skills during **UKW `-c`** and **RW Step 7**:

| Pain | Symptom |
| ---- | ------- |
| Agent freestyle writes | Duplicate rows, skewed “recent 20” dashboard, ordering drift |
| Dual representation | Recent dashboard + epic sections duplicate the same facts |
| No structural integrity | No primary key on `E:S:T`; idempotent upsert is convention-only |
| Scale | File grows without bound; every archival is a large markdown edit |
| Query | “When did E06:S09:T32 complete?” requires grep, not a keyed lookup |

Task documents remain authoritative for **COMPLETE** status; the ledger is forensic/operator history. The ledger format should be **machine-owned**, like `.adk/release-state.db`, not hand-edited prose.

**Out of scope (v1):** `intake-completed.md` — same pattern may follow in a sibling FR; this FR covers **task** completions only.

---

## Proposed Solution

### Source of truth

- **SQLite file:** `.adk/kanban-completed.db` (committed; same class as `release-state.db`)
- **Primary key:** `(epic, story, task)` — one row per `E:S:T`
- **Core columns (v1):** `internal_version`, `completed_at` (ISO 8601 UTC), `completing_agent`, `summary`, `archived_at`, optional `kboard_row_snapshot`

### Write path

- Deterministic CLI: `append_kanban_completed.py` (upsert on `E:S:T`)
- **UKW `-c`** and **RW Step 7** call the CLI after `archive_completed.py` identifies candidates — **ledger before kboard prune** (unchanged contract per FR-102 / FR-109)
- Retire agent skill maintenance of markdown body; skill becomes thin wrapper or is superseded by CLI docs

### Human-readable report (replaces markdown skim surface)

SQLite has no built-in reporting; export is application-layer:

```
UKW (end of run, all modes that touch archival — at minimum comprehensive UKW and UKW -c)
  → upserts in .adk/kanban-completed.db (during archival steps)
  → export_kanban_completed_report.py --pdf
  → overwrite docs/kanban/kanban-completed.pdf
```

- **PDF** is regenerated and **replaced** each UKW run (publish-only artifact; not diff-reviewed in git)
- Report sections: metadata header (generated at, row count), **20 most recent** (`ORDER BY completed_at DESC LIMIT 20`), full ledger grouped by epic/story
- GitHub in-browser PDF preview replaces markdown browsing

### Migration

- One-time import from existing `kanban-completed.md` into SQLite
- Archive or redirect legacy markdown (redirect stub pointing to PDF + DB path)
- Update cross-references in templates, governance policy, validators, and greenfield-install mirror

---

## Requirements

### Functional

- [ ] **FR-134-F1:** Define `kanban_completed` schema + `rw-config.yaml` keys (`kanban_completed_db` default `.adk/kanban-completed.db`, `kanban_completed_pdf` default `docs/kanban/kanban-completed.pdf`).
- [ ] **FR-134-F2:** `append_kanban_completed.py` — idempotent upsert; validates `E:S:T`, version, ISO timestamp.
- [ ] **FR-134-F3:** `init_kanban_completed_db.py` + `import_kanban_completed_md.py` — brownfield migration from current markdown.
- [ ] **FR-134-F4:** `export_kanban_completed_report.py --pdf` — template render; overwrite PDF atomically.
- [ ] **FR-134-F5:** UKW agent contract — invoke PDF export at Step 9 (or terminal archival step); stage DB + PDF.
- [ ] **FR-134-F6:** RW Step 7 / UKW `-c` — ledger writes via CLI only; update `archive_completed.py` integration docs.
- [ ] **FR-134-F7:** `validate_kanban_completed.py --strict` — PK uniqueness, required fields, PDF freshness vs last UKW (advisory or blocking per IPP).
- [ ] **FR-134-F8:** Retire `kanban-completed.md` as SoT; leave redirect stub; update `KANBAN_*_TEMPLATE.md`, kanban governance policy, `.cursor/skills/kanban-completed-update`, greenfield-install (FR-106).

### Non-functional

- [ ] **FR-134-NF1:** Embedded SQLite only; no new server dependency.
- [ ] **FR-134-NF2:** PDF dependency kept minimal (e.g. `reportlab` or `fpdf2`); document in dev requirements if not already present.
- [ ] **FR-134-NF3:** Adopter greenfield: empty DB + placeholder PDF or “no completions yet” first page.
- [ ] **FR-134-NF4:** Deterministic export — same DB rows → same PDF structure (stable ordering).

---

## Acceptance Criteria

- [ ] **AC1:** No workflow path appends to `kanban-completed.md` body; CLI upsert is the only write API.
- [ ] **AC2:** Comprehensive **UKW** and **`UKW -c`** end with refreshed `kanban-completed.pdf` on disk.
- [ ] **AC3:** Brownfield import preserves existing completion rows (row-count parity ± documented skips).
- [ ] **AC4:** `validate_active_kanban_board` / FR-102 ledger-before-prune contract still passes with SQLite ledger.
- [ ] **AC5:** Greenfield-install mirror and packaged UKW/RW docs updated (FR-106).

---

## Scope Analysis

**Problem Domain:** Kanban Framework / UKW completed-task archival  
**Affected Areas:**

- [x] Backend/scripts (`packages/frameworks/workflow-mgt/scripts/kanban/`)
- [x] Database/Schema (SQLite under `.adk/`)
- [x] Documentation (governance, UKW/RW guides, templates)
- [x] Testing (import, upsert, export, UKW integration)
- [ ] Frontend/UI

**Estimated Complexity:** Medium (1 week)

---

## Dependencies

**Blocks:** None

**Blocked By:** None (IPW recommended before implementation)

**Related Work:**

- [FR-049](FR-049-enhanced-kanban-completed-with-timestamps-and-recent-tasks.md) — superseded ledger format (markdown era)
- [FR-102](FR-102-ukw-archive-completed-board-rows.md) — archival workflow contract preserved
- [E02:S17](../epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/) — `.adk/*.db` operational precedent

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-15  
**Intake By:** Agent (atomic intake)

**Decision Flow Results:**

- [x] Story Match Found: Epic 4, Story 14 (Kanban Framework Maintenance) → Task T12

**Assigned To:**

- Epic: E04 — Kanban Framework
- Story: S14 — Kanban Framework Maintenance
- Task: T12 — SQLite kanban-completed ledger + PDF report
- Version: _(pending IPW / RW)_

**Kanban Links:**

- Story: [`story-14-kanban-framework-maintenance.md`](../epics/epic-04/story-14-kanban-framework-maintenance.md)
- Task: [`T12-kanban-completed-sqlite-ledger-pdf-report-fr134.md`](../epics/epic-04/story-14-kanban-framework-maintenance/T12-kanban-completed-sqlite-ledger-pdf-report-fr134.md)

---

## Notes

- **Reporting model:** SQLite stores data; Python renders PDF. No enterprise “reporting services” in-engine.
- **Future:** Mirror for `intake-completed.md` → `.adk/intake-completed.db` + PDF (separate FR unless IPP expands scope).
- **Optional later:** Markdown export for adopters who prefer git-diffable summaries (not required for v1).

---

## References

- [`kanban-completed.md`](../kanban-completed.md) (legacy SoT until migration)
- [`packages/frameworks/workflow-mgt/scripts/kanban/archive_completed.py`](../../../packages/frameworks/workflow-mgt/scripts/kanban/archive_completed.py)
- [Kanban governance policy](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md) — ledger-before-prune
