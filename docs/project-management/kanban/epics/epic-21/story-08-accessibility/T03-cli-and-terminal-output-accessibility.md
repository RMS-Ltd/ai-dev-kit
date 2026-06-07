---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 8, Task 3: CLI and terminal output accessibility (Layer 1)

**Task ID:** E21:S08:T03  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Layer:** 1 (CLI — **initial delivery scope**)  
**Last updated:** 2026-06-07 (v0.21.8.3+1 — Layer 1 CLI accessibility shipped)  
**Version:** v0.21.8.3+1  
**Code:** E21S08T03

**Planning:** [IPP-E21S08T03](../../../../../implementation-cycles/IPP-E21S08T03-cli-terminal-accessibility.md)

---

## Task ID

**Full Task ID:** `E21:S08:T03`

---

## Scope

Implement Layer 1 CLI accessibility per [IPP-E21S08T01](../../../../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md) §3 and [IPP-E21S08T03](../../../../../implementation-cycles/IPP-E21S08T03-cli-terminal-accessibility.md):

- Text labels on `print_*` helpers (not emoji-only)
- `NO_COLOR` / `--no-color` support
- FR-108 structured errors without colour-only signalling
- `docs/governance/standards/cli-accessibility-conventions.md`
- CLI adopter notes in user docs

**Blocked by:** E21:S08:T02 COMPLETE

---

## Input

- [ADR-025](../../../../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) (Layer 1 exit criteria L1-1–L1-8)
- [T01 baseline audit](../../../../../knowledge/analysis/adk-accessibility-baseline-layer1-cli.md)
- [IPP-E21S08T03](../../../../../implementation-cycles/IPP-E21S08T03-cli-terminal-accessibility.md)
- [FR-115](../../../../fr-br/FR-115-accessibility-standards-compatibility.md)

---

## Deliverable

- `cli/utils.py` — text-first `print_*`, `NO_COLOR` support, stderr warnings ✅
- `cli/main.py` — global `--no-color` flag ✅
- ASCII glyph remediation in `migrate.py`, `remove.py`, `exceptions.py` ✅
- [cli-accessibility-conventions.md](../../../../../governance/standards/cli-accessibility-conventions.md) ✅
- `tests/test_cli_accessibility.py` ✅
- CLI adopter notes in [framework-dependency-cli-reference.md](../../../../../documentation/user-docs/framework-dependency-cli-reference.md) ✅

---

## Acceptance Criteria

- [x] `print_*` emit redundant text labels; emoji suppressed when `NO_COLOR=1`
- [x] FR-108 errors remain structured and plain-language (`adk_install_errors.py` unchanged)
- [x] `tests/test_cli_accessibility.py` green
- [x] CLI conventions doc published — [cli-accessibility-conventions.md](../../../../../governance/standards/cli-accessibility-conventions.md)
- [x] Layer 1 exit criteria from ADR-025 L1-1–L1-8 satisfied

---

## Kanban-init intake

**Trigger:** `RW -k E21:S08:T03 --art --dpz`  
**Target version anchor:** `v0.21.8.3+0`
