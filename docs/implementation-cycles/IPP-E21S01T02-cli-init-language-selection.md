---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S01:T02 — Planning: CLI init language selection (IPW)

**Host Task:** [`T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init.md`](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init.md) **(E21:S01:T02)**  
**Planning for:** [FR-006 Phase 1](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S01T01](IPP-E21S01T01-template-language-selection-github.md)  
**Status:** Complete — released `v0.21.1.2+1` (`RW E21:S01:T02 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## Scope decision (operator-confirmed)

**Interactive CLI slice:** `ai-dev-kit init` prompts for UK/US English before creating `.ai-dev-kit.yaml`. Selection persists to **`ai-dev-kit-config.yaml` only**. Thin helpers in `cli/localisation.py`; **E21:S01:T05** extracts shared utilities for installers.

---

## 1. Requirements (summary)

| ID | Requirement |
| -- | ----------- |
| RF1 | Language prompt first in `ai-dev-kit init` |
| RF3 | Persist to `ai-dev-kit-config.yaml` (T01 schema) |
| RF5 | `--non-interactive`, `--language en-GB\|en-US` |
| RF6 | `--force` overwrites existing localisation config |

---

## 2. Specification

Config contract: `localisation.language` + `localisation.variant` per [IPP-E21S01T01](IPP-E21S01T01-template-language-selection-github.md).

**ADR:** EXEMPT

---

## 3. Test design (T1–T8)

| ID | Check |
| -- | ----- |
| T1 | `--non-interactive` → en-GB |
| T2 | `--language en-US` |
| T3–T4 | Interactive 2 / default |
| T5–T6 | Existing file guard / `--force` |
| T7 | `.ai-dev-kit.yaml` regression |
| T8 | Invalid `--language` argparse |

---

## 4. Implementation plan

| Step | Status |
| ---- | ------ |
| `cli/localisation.py` | Done |
| `cli/commands/init.py` | Done |
| `tests/test_commands.py` | Done |
| CLI reference docs | Done |
| `RW E21:S01:T02 --art` | Pending |

---

## References

- [T01 @ v0.21.1.1+2](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T01-add-language-selection-prompt-to-template-setup-github-templ.md)
- [cli/commands/init.py](../../cli/commands/init.py)
- [cli/localisation.py](../../cli/localisation.py)
