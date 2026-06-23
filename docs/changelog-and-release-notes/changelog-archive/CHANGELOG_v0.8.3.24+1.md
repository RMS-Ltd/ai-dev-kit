# Changelog — v0.8.3.24+1

**Release Date:** 2026-06-23 10:21:56 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 24  
**SemVer:** v0.4.1203  
**Task:** E08:S03:T24 — CLI package test coverage gap closure (FR-138) — kanban-init

---

## Summary

**Kanban documentation setup:** Atomic intake for **FR-138** — raise `cli/` pytest coverage from **54%** baseline to a maintained **≥70%** floor via phased backend/command tests. Task doc, FR report, story checklist, and `kboard.md` row wired.

---

## Added

- `docs/kanban/fr-br/FR-138-cli-package-test-coverage-gap-closure.md` — feature request (coverage gap closure + CI floor)
- `docs/kanban/epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md` — implementing task

## Changed

- `docs/kanban/epics/epic-08/story-03-automation-scripts.md` — T24 checklist row
- `docs/kanban/kboard.md` — Could Have row for E08:S03:T24

### Coherence gate follow-on (ADR-031)

- **`validate_release_coherence.py`**, **`validate_rw_split_brain_streak.py`:** compare SemVer **core** when README/changelog still carry legacy `+BUILD` display (Option B tags); restores split-brain streak after core-only policy.
- **Greenfield mirror** synced.

## Related

- [FR-138](docs/kanban/fr-br/FR-138-cli-package-test-coverage-gap-closure.md) · [UXR-030](docs/kanban/fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) · [E08:S03:T21](docs/kanban/epics/epic-08/story-03-automation-scripts/T21-cli-pytest-coverage-dedicated-target-uxr030.md)
