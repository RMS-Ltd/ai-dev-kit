---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 39: AI Dev Kit Project Review and Legacy Clean-Up

**Task ID:** E5:S01:T39  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-02-19  
**Last updated:** 2026-02-19 (v0.5.1.39+3 – Legacy clean-up: SoT refs, scripts, adopter docs)  
**Version:** v0.5.1.39+3  
**Code:** E5S01T39

**Repository Pattern:** FR-039 = E5:S01:T39 (abstract space will be v0.5.1.39+0)

---

## Scope

Repository anchor task for **FR-039: AI Dev Kit Project Review and Legacy Clean-Up**. This task tracks the work of performing a **read-only review** of the ai-dev-kit repository and producing a **review report + clean-up checklist** that will drive a future implementation task.

**Problem Statement:**

- ai-dev-kit has evolved through multiple iterations of frameworks and local policies.
- Some documents and scripts are legacy, duplicated, or partially superseded.
- For adopters (and the book), we want a **lean, clearly-structured reference repo**.

**Solution (at this task’s level):**

- Create FR-039 and this Task to anchor the work in the FR Repo.
- Survey the repository in line with the \"AI Dev Kit Project Review & Clean-Up Plan\".
- Produce:
  - A top-level inventory of major areas.
  - Notes on framework/package legacy vs canonical artefacts.
  - Duplication findings between framework and dev-kit-local docs/scripts.
  - A consolidated review report and ordered clean-up checklist.


Actual clean-up (archiving/removal/moves) will be handled by a **separate implementation task** once the review is approved.

---

## Input

- **FR-039:** [`FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md`](../../../fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- **Project Review Plan:** `~/.cursor/plans/ai-dev-kit-project-review_*.plan.md` (IDE-local plan describing the detailed review steps).
- **Framework packages:** `packages/frameworks/*`
- **Dev-kit-local policies:** `docs/architecture/standards-and-adrs/*`
- **Kanban:** `docs/project-management/kanban/*`
- **Versioning & changelog:** `src/fynd_deals/version.py`, `rw-config.yaml`, `CHANGELOG.md`, `docs/changelog-and-release-notes/changelog-archive/*`
- **Scripts:** `scripts/*`

---

## Deliverable

1. **This task document** – Repository anchor for FR-039 (E5:S01:T39).
2. **Review report markdown** in `docs/architecture/standards-and-adrs/ai-dev-kit-project-review.md` summarising findings.
3. **Ordered clean-up checklist** within that report suitable for a follow-up implementation Task.

---

## Acceptance Criteria

- [ ] FR-039 exists and is linked to this Task.
- [ ] Review report file (`ai-dev-kit-project-review.md`) exists and covers:
  - Inventory and classification of major folders.
  - Framework package sanity notes.
  - Duplication findings between framework and dev-kit-local artefacts.
  - Kanban and workflow doc review notes.
  - Versioning/changelog consistency notes.
  - Scripts/helpers catalogue at a high level.

- [ ] Clean-up checklist is present at the end of the review report and can be used to define a follow-up implementation task.

---

## Version Anchor

**Forensic Marker:**  
- Initial review release for this Task created at **v0.5.1.39+1** (planning-only release for FR-039 and initial review report).

---

## Related Work

- **FR-039:** AI Dev Kit Project Review and Legacy Clean-Up.
- **FR-040:** RW Update Kanban Board on Task Completion.
- **FR-037:** Kanban Policy – Task Prioritisation and Queue/Stack.
- **FR-038:** RW Step 7 – Scoped Kanban Sync (UKW Mode).

---

## References

- **FR Repo Story:** [`Story-001-fr-repo.md`](../Story-001-fr-repo.md)
- **FR-039:** [`docs/project-management/kanban/fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md`](../../../fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)

