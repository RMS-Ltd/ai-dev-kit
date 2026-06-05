---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 7: Tests CI `requests` dependency (**BR-092**)

**Task ID:** E08:S03:T07  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.7+2 — post-CI verification docs)  
**Version Anchor:** ✅ COMPLETE (v0.8.3.7+1)  
**Version:** v0.8.3.7+2
**Code:** E08S03T07

**Upstream:** [BR-092 — Tests CI missing `requests` dev dependency](../../../fr-br/BR-092-tests-ci-missing-requests-dev-dependency.md)  
**Planning:** [IPP-E08S03T07-tests-ci-requests-dependency-br092.md](../../../../../implementation-cycles/IPP-E08S03T07-tests-ci-requests-dependency-br092.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [BR-092](../../../fr-br/BR-092-tests-ci-missing-requests-dev-dependency.md)
- [`setup.py`](../../../../../../setup.py) — `[dev]` extras
- [`requirements.txt`](../../../../../../requirements.txt)
- [`.github/workflows/tests.yml`](../../../../../../.github/workflows/tests.yml)
- [E08:S03:T04 — CI test workflow (BR-058)](./T04-ci-test-workflow-pytest-remediation-br058.md)

---

## Deliverable

Ensure **`pip install -e ".[dev]"`** satisfies all test collection imports — specifically **`requests`** for `tests/test_framework_install_slug.py`.

**Preferred fix:** Add `requests>=2.28.0` to `setup.py` `extras_require["dev"]`.

---

## Acceptance criteria

- [x] Clean venv: `pip install -e ".[dev]"` + `pytest tests/` — no collection errors.
- [x] **BR-092 CI path verified:** GitHub Actions [run 26986650468](https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/26986650468) — `requests` installed from `[dev]` extras; `test_framework_install_slug.py` **PASSED** (no `ModuleNotFoundError`).
- [x] **BR-092** acceptance criteria satisfied (collection / import path). *Note:* two unrelated epic 22/23 template test failures remain on `dev` (out of scope).

---

## References

- [BR-092](../../../fr-br/BR-092-tests-ci-missing-requests-dev-dependency.md)
- [BR-058](../../../fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)
