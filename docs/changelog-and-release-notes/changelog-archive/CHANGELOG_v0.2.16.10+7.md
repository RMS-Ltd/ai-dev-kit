# Changelog v0.2.16.10+7

**Release Date:** 2026-06-08 15:25:09 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 10 | **Build:** 7  
**SemVer:** v0.4.11+7  
**Summary:** Retire `project-management/kanban/` stale subtree; fix active links

---

## Release scope

E02:S16:T10 — **Change implemented:** Complete FR-118 shell retirement — delete stale `docs/project-management/kanban/` duplicates (`kboard.md`, orphan T16 task doc); tighten `project-management/README.md` to redirect-only; repoint `README.md` and IDW guide links to `docs/kanban/`; note RETIRED disposition in `book-repo-docs-scope.md`. SemVer **v0.4.11+7**.

---

## Changes

### Repository infrastructure

- **Deleted** `docs/project-management/kanban/` (stale post-FR-118 drift).
- **Updated** `docs/project-management/README.md` — RETIRED redirect stub only.
- **Updated** `README.md` — Kanban + FR links → `docs/kanban/`.
- **Updated** `implementation-delivery-workflow-agent-execution.md` (packages + greenfield-install) — FR-083/FR-077 paths.
- **Updated** `docs/maintenance/book-repo-docs-scope.md` — FR-118 path disposition.

---

## Verification

- `rg 'docs/project-management/kanban' README.md` — clean (INSTALL migration section retains historical path text by design).
