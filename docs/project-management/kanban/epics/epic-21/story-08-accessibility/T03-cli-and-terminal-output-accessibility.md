---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 8, Task 3: CLI and terminal output accessibility (Layer 1)

**Task ID:** E21:S08:T03  
**Status:** TODO  
**Priority:** MEDIUM  
**Layer:** 1 (CLI — **initial delivery scope**)  
**Last updated:** 2026-06-07 (Layered plan — CLI-first scope)  
**Version:** v0.21.8.3+0  
**Code:** E21S08T03

---

## Scope

Implement Layer 1 CLI accessibility per [IPP-E21S08T01](../../../../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md) §3:

- Text labels on `print_*` helpers (not emoji-only)
- `NO_COLOR` / `--no-color` support
- FR-108 structured errors without colour-only signalling
- `docs/governance/standards/cli-accessibility-conventions.md`
- CLI adopter notes in user docs

**Blocked by:** E21:S08:T02 COMPLETE

---

## Acceptance Criteria

- [ ] `print_*` emit redundant text labels; emoji suppressed when `NO_COLOR=1`
- [ ] FR-108 errors remain structured and plain-language
- [ ] `tests/test_cli_accessibility.py` (or equivalent) green
- [ ] CLI conventions doc published
- [ ] Layer 1 exit criteria from ADR satisfied

---

## Kanban-init intake

**Trigger:** `RW -k E21:S08:T03 --art --dpz`  
**Target version anchor:** `v0.21.8.3+0`
