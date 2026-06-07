---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 2: Add language selection prompt to CLI tool (`ai-dev-kit init`)

**Task ID:** E21:S01:T02  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.1.2+1 — CLI init language selection)  
**Version:** v0.21.1.2+1  
**Code:** E21S01T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T02`

---

## Scope

Add UK/US English language selection as the **first interactive step** in `ai-dev-kit init`. Persist choice to `ai-dev-kit-config.yaml` (T01 contract). Introduce `cli/localisation.py` seed helpers; **E21:S01:T05** extracts shared utilities for installers.

---

## Input

- CLI tool ([`cli/commands/init.py`](../../../../../../cli/commands/init.py))
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md) Phase 1 CLI requirements
- [IPP-E21S01T01](../../../../implementation-cycles/IPP-E21S01T01-template-language-selection-github.md) config contract
- [IPP-E21S01T02](../../../../implementation-cycles/IPP-E21S01T02-cli-init-language-selection.md)

---

## Deliverable

- Interactive language prompt (or `--language` / `--non-interactive` flags) in `ai-dev-kit init`
- `ai-dev-kit-config.yaml` written at project root before `.ai-dev-kit.yaml`
- Updated CLI reference documentation
- Pytest coverage (T1–T8)

---

## Acceptance Criteria

- [x] Language selection prompt appears first in CLI tool — ✅ COMPLETE (v0.21.1.2+1)
- [x] Options: UK English, US English — ✅ COMPLETE (v0.21.1.2+1)
- [x] Selection persists in configuration — ✅ COMPLETE (v0.21.1.2+1)
- [x] CLI documentation updated — ✅ COMPLETE (v0.21.1.2+1)

---

## Verification (T1–T8)

| ID | Check | Result |
| -- | ----- | ------ |
| T1 | `--non-interactive` → en-GB | Pass |
| T2 | `--language en-US` | Pass |
| T3 | Interactive `2` → en-US | Pass |
| T4 | Interactive default → en-GB | Pass |
| T5 | Existing file without `--force` fails | Pass |
| T6 | `--force` overwrites | Pass |
| T7 | `.ai-dev-kit.yaml` still created | Pass |
| T8 | Invalid `--language` argparse | Pass |

---

## Downstream handoff

- **E21:S01:T05** — extract `cli/localisation.py` into shared config utilities
- **E21:S01:T03** — reuse prompt/write for RW installer

---

## Kanban-init intake

**Released:** `v0.21.1.2+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S01:T02 --art --dpz
```

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## References

- [IPP-E21S01T02](../../../../implementation-cycles/IPP-E21S01T02-cli-init-language-selection.md)
- [IPP-E21S01T01](../../../../implementation-cycles/IPP-E21S01T01-template-language-selection-github.md)
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [cli/localisation.py](../../../../../../cli/localisation.py)
- [CLI reference](../../../../documentation/user-docs/framework-dependency-cli-reference.md)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-01-language-selection-at-setup.md`
