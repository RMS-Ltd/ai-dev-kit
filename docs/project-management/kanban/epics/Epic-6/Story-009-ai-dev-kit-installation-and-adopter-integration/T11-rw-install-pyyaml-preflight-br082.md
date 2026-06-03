---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 11: RW install PyYAML preflight (BR-082)

**Task ID:** E06:S09:T11  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-06-03  
**Code:** E06S09T11

**Upstream:** [BR-082](../../../fr-br/BR-082-rw-install-missing-pyyaml-preflight.md) · [GitHub #14](https://github.com/RMS-Ltd/ai-dev-kit/issues/14)

## Version Anchor

**Version:** v0.6.9.11+1 (RW -k)

---

## Scope

Improve `install_release_workflow.py` first-run UX: preflight or docs for `pyyaml` (and minimal venv deps) before interactive install.

---

## Input

- [BR-082](../../../fr-br/BR-082-rw-install-missing-pyyaml-preflight.md)
- `install_release_workflow.py` and RW install docs
- **IPW:** [IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md](../../../../../implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md) — **Publication Status: PUBLISHED**

---

## Deliverable

- Actionable preflight or documented `pip install` one-liner before mode C install

---

## Acceptance Criteria

- [ ] Actionable preflight or documented deps before mode C install.
- [ ] Book/submodule-only path references minimal `pip install` one-liner.

---

## Links

- [BR-082](../../../fr-br/BR-082-rw-install-missing-pyyaml-preflight.md)
- [IPP-E06S09T11](../../../../../implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md)
- [Story 009](../Story-009-ai-dev-kit-installation-and-adopter-integration.md)
