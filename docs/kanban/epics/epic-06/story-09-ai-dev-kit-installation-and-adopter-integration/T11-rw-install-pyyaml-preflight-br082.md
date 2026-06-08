---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 11: RW install PyYAML preflight (BR-082)

**Task ID:** E06:S09:T11  
**Status:** ✅ COMPLETE (verified 2026-06-05 — BR-082 FIXED; #14 closed)  
**Priority:** HIGH  
**Created:** 2026-06-03  
**Code:** E06S09T11

**Upstream:** [BR-082](../../../fr-br/BR-082-rw-install-missing-pyyaml-preflight.md) · [GitHub #14](https://github.com/RMS-Ltd/ai-dev-kit/issues/14)

## Version Anchor

**Version:** v0.6.9.11+2 (RW --art)

---

## Scope

Improve `install_release_workflow.py` first-run UX: preflight or docs for `pyyaml` (and minimal venv deps) before interactive install.

---

## Input

- [BR-082](../../../fr-br/BR-082-rw-install-missing-pyyaml-preflight.md)
- `install_release_workflow.py` and RW install docs
- **IPW:** [IPP-E6S9T11-br082-rw-install-pyyaml-preflight.md](../../../../implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md) — **Publication Status: PUBLISHED**

---

## Deliverable

- Actionable preflight or documented `pip install` one-liner before mode C install

---

## Acceptance Criteria

- [x] Actionable preflight or documented deps before mode C install (`--check-deps`, `check_dependencies()`).
- [x] Book/submodule-only path references minimal `pip install` one-liner (`INSTALL_IN_YOUR_PROJECT.md` Step 3b).

## Implementation notes (2026-06-03)

- `check_dependencies()`, `format_dependency_help()`, `--check-deps` in `install_release_workflow.py`.
- Tests: `tests/test_install_release_workflow_deps.py`.
- **Verification:** ✅ Operator confirmed (2026-06-05) — expenses-tracker install path resolved; **BR-082** FIXED; GitHub #14 closed.

---

## Links

- [BR-082](../../../fr-br/BR-082-rw-install-missing-pyyaml-preflight.md)
- [IPP-E6S9T11](../../../../implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md)
- [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md)
