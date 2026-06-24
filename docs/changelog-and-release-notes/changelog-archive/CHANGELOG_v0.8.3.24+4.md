# Changelog — v0.8.3.24+4

**Release Date:** 2026-06-24 12:20:06 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 24  
**SemVer:** v0.4.1218+4  
**Task:** E08:S03:T24 — CLI package test coverage gap closure (FR-138) follow-on

---

## Summary

Release workflow follow-on for **E08:S03:T24** with `--art` version re-anchor after cross-epic drift (`version.py` had advanced to E07:S01:T14). No functional code changes in this build; kanban and version surfaces reconciled to the completed FR-138 delivery (**82%** aggregate CLI coverage @ v0.8.3.24+3).

---

## Changed

- `src/ai_dev_kit/version.py` — re-anchored to **0.8.3.24+4** (`--art`).
- `docs/kanban/epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md` — version anchor **v0.8.3.24+4**.
- `docs/kanban/epics/epic-08/story-03-automation-scripts.md` — T24 version marker.
- `docs/kanban/epics/epic-08/epic-08.md` — story checklist version sync.
- `docs/kanban/fbu/FR-138-cli-package-test-coverage-gap-closure.md` — release traceability @ **v0.8.3.24+4**.

## Verification

- Prior build **v0.8.3.24+3** deliverables remain in tree (`tests/cli/test_wave4_hardening.py`, **82%** aggregate per Phase 2 closure).

## Related

- [FR-138](docs/kanban/fbu/FR-138-cli-package-test-coverage-gap-closure.md)
- [IPP E08:S03:T24](docs/implementation-cycles/IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md)
- [CHANGELOG_v0.8.3.24+3](CHANGELOG_v0.8.3.24+3.md)
