# Changelog: v0.5.1.39+3

**Release Date:** 2026-02-19 00:00:00 UTC  
**Epic:** 5 (FR Repo)  
**Story:** 1 (FR Repo)  
**Task:** 39 (AI Dev Kit Project Review and Legacy Clean-Up)  
**Internal Version:** 0.5.1.39+3  
**Related:** FR-039

---

## Summary

Legacy clean-up implementation (T39): clarified SoT vs specialisation in dev-kit policies, rationalised scripts, added adopter-facing repo structure doc.

---

## Added

- **Repo structure for adopters:** `docs/documentation/user-docs/repo-structure-for-adopters.md` — concise guide to framework packages (SoT), dev-kit specialisations (examples), and which scripts/docs adopters should copy vs reference.
- **Scripts README:** `scripts/README.md` — directory structure and distinction between framework scripts and project utilities.
- **Internal scripts README:** `scripts/internal/README.md` — description of dev-kit-specific utilities (`scan_tasks_for_moscow.py`, `validate_cli.py`).

---

## Changed

- **SoT references in dev-kit policies:** Added "Based on Framework" notes and links to canonical framework docs in:
  - `docs/architecture/standards-and-adrs/changelog-management-policy.md` (CMW/workflow mgt)
  - `docs/architecture/standards-and-adrs/changelog-archival-policy.md` (CMW archival)
  - `docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md` (numbering & versioning)
  - `docs/architecture/standards-and-adrs/dual-versioning-package-managers.md` (numbering & versioning)
- **Scripts layout:** Moved `scripts/scan_tasks_for_moscow.py` and `scripts/validate_cli.py` into `scripts/internal/`; created `scripts/internal/` and `scripts/legacy/` directories for future organisation.

---

## References

- **Review report:** `docs/architecture/standards-and-adrs/ai-dev-kit-project-review.md`
- **FR:** `docs/project-management/kanban/fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md`
- **Task:** `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T39-ai-dev-kit-project-review-and-legacy-cleanup.md`
