---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T10:14:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T24 — CLI package test coverage gap closure (FR-138)

**Task ID:** E08:S03:T24  
**Status:** ✅ COMPLETE @ **v0.8.3.24+3** (Phase 1 **74.73%** + Phase 2 **82%** aggregate)  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Created:** 2026-06-23  
**Last updated:** 2026-06-23 (MWF Phase 2 delivery — Wave 4 hardening)  
**Version:** v0.8.3.24+3  
**Version Anchor:** v0.8.3.24+3  
**Code:** E08S03T24

**Upstream:** [FR-138 — CLI package test coverage gap closure](../../../fbu/FR-138-cli-package-test-coverage-gap-closure.md)  
**Related:** [E08:S03:T21](T21-cli-pytest-coverage-dedicated-target-uxr030.md) · [E08:S03:T22](T22-pytest-warning-cleanup-uxr030-wave2.md) · [UXR-030](../../../fbu/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) · [FR-030](../../../fbu/FR-030-ai-dev-kit-cli-tool.md)

Publication Status: NOT_APPLICABLE
Publication N/A Reason: Internal kanban task and implementation artifact references; no adopter-facing publication required.

---

## Scope

**Phase 1 (complete @ v0.8.3.24+2):** Raise **`cli/`** from **54%** → **74.73%**; enforce **`--cov-fail-under=70`** in `pytest-cli-cov.ini`.

**Phase 2 (complete @ v0.8.3.24+3):** Wave 4 per-module hardening — aggregate **82%**, all module targets met.

---

## Input

- [FR-138](../../../fbu/FR-138-cli-package-test-coverage-gap-closure.md) (Phase 1 + Phase 2 / Wave 4)
- **IPP:** [`IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md`](../../../../implementation-cycles/IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md)
- [`pytest-cli-cov.ini`](../../../../../pytest-cli-cov.ini) · [`scripts/run_cli_pytest_coverage.sh`](../../../../../scripts/run_cli_pytest_coverage.sh)

---

## Deliverable

### Phase 1 — Waves 1–3 ✅ @ v0.8.3.24+2

- Floor **70%** enforced; 11 new `tests/cli/test_*.py` modules
- See [CHANGELOG_v0.8.3.24+2](../../../../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.24+2.md)

### Phase 2 — Wave 4 hardening ✅ @ v0.8.3.24+3

| Module | Final cover | Target |
| ------ | ----------- | ------ |
| `cli/migration.py` | 91% | ≥70% |
| `cli/backends/git_submodule.py` | 75% | ≥75% |
| `cli/backends/git_subtree.py` | 76% | ≥75% |
| `cli/backends/package_manager.py` | 76% | ≥75% |
| `cli/commands/install.py` | 87% | ≥75% |
| `cli/commands/remove.py` | 80% | ≥75% |
| `cli/adk_install_errors_bridge.py` | 96% | ≥85% |
| `cli/commands/logs.py` | 81% | ≥80% |

- `tests/cli/test_wave4_hardening.py` (57 tests)
- See [CHANGELOG_v0.8.3.24+3](../../../../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.24+3.md)

---

## Acceptance Criteria

### Phase 1 ✅

- [x] **AC1:** `bash scripts/run_cli_pytest_coverage.sh` → **`cli/` aggregate ≥70%**.
- [x] **AC2:** No module from FR-138 baseline table remains **&lt;40%**; Wave 1/2 per-file targets met.
- [x] **AC3:** `cli-coverage` CI job fails on coverage regression below floor.
- [x] **AC4:** FR-138 ↔ T24 bidirectional links; RW version anchor **v0.8.3.24+2**.
- [x] **AC5:** Linked IPP before Phase 1 implementation.

### Phase 2 ✅

- [x] **AC6:** Phase 2 module targets met (see deliverable table).
- [x] **AC7:** Aggregate **82%**; no Phase 1 module **≥80%** regressed.
- [x] **AC8:** IPP Wave 4 amendment + closure RW @ **v0.8.3.24+3**.

---

## Associated Feature Request

- [FR-138 — CLI package test coverage gap closure](../../../fbu/FR-138-cli-package-test-coverage-gap-closure.md) (primary — Phase 1 + Phase 2)

---

## References

- [IPP-E08S03T24 — Planning package](../../../../implementation-cycles/IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md)
- [CHANGELOG_v0.8.3.24+2 — Phase 1](../../../../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.24+2.md)
- [CHANGELOG_v0.8.3.24+3 — Phase 2](../../../../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.24+3.md)
- [E08:S03:T21](T21-cli-pytest-coverage-dedicated-target-uxr030.md) · [E08:S03:T22](T22-pytest-warning-cleanup-uxr030-wave2.md)
