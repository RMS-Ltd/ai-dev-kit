# Changelog v0.2.16.6+17

**Release Date:** 2026-06-16 14:19:51 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**SemVer:** v0.4.1191+17

---

## Summary

E02:S16:T06 Wave 9 — Repair AI autofix PR [#70](https://github.com/RMS-Ltd/ai-dev-kit/pull/70) CI regression in `tests/release_state/test_allocate.py`: move `sys.path` setup into `tests/release_state/conftest.py` so module-level `release_state` imports work for all tests; retain parallel-test registry seeding.

---

## Change implemented

### Tests

- Added [`tests/release_state/conftest.py`](../../../tests/release_state/conftest.py) — shared pytest `sys.path` hook for `release_state` integration tests.
- Restored module-level imports in [`tests/release_state/test_allocate.py`](../../../tests/release_state/test_allocate.py); fixes `NameError: parse_internal_version` on `test_parse_internal` after Copilot autofix moved imports into `saa_db` fixture only.
- Kept parallel-test `import_registry_yaml` seeding from the autofix PR.

### Verification (local)

| Check | Result |
| ----- | ------ |
| `pytest tests/release_state/test_allocate.py` | **9 passed** |
| PR #70 branch pushed | `f16c0ae8` |

**Context:** GitHub Code Quality autofix applied suggested lazy-import pattern but broke tests that do not depend on `saa_db`. Conftest is the pytest-idiomatic path setup.

---

## Related

- [E02:S16:T06 — GitHub Security & Code Quality health (Perpetual)](../../../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md)
- [PR #70 — AI findings autofix](https://github.com/RMS-Ltd/ai-dev-kit/pull/70)
- [CHANGELOG v0.2.16.6+14](CHANGELOG_v0.2.16.6+14.md) (Wave 8b)
