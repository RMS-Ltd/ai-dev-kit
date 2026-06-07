---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 1: Add language selection prompt to template setup (GitHub template)

**Task ID:** E21:S01:T01  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.1.1+2 — docs-first Step 0 + config example)  
**Version:** v0.21.1.1+2  
**Code:** E21S01T01

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T01`

---

## Scope

Document UK/US English language selection as **Step 0** in the GitHub-template post-setup path. Provide a canonical `ai-dev-kit-config.yaml` example adopters copy to the project root. **No installer scripting** in this task — automation deferred to E21:S01:T05.

---

## Input

- GitHub template setup process ([post-template guide](../../../../documentation/user-docs/framework-dependency-post-template-setup-guide.md))
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md) Phase 1 requirements
- [IPP-E21S01T01](../../../../implementation-cycles/IPP-E21S01T01-template-language-selection-github.md)

---

## Deliverable

- **Step 0** in post-template setup guide (language choice before other customization)
- Example config: `packages/frameworks/workflow-mgt/config/examples/ai-dev-kit-config.example.yaml`
- Cross-links in INSTALL and installation guide
- Adopter instructions to create `ai-dev-kit-config.yaml` at project root

---

## Acceptance Criteria

- [x] Language selection prompt appears at start of template setup — ✅ COMPLETE (v0.21.1.1+2)
- [x] Options: UK English, US English — ✅ COMPLETE (v0.21.1.1+2)
- [x] Selection persists in configuration — ✅ COMPLETE (v0.21.1.1+2)
- [x] Setup process documented — ✅ COMPLETE (v0.21.1.1+2)

---

## Verification (V1–V6)

| ID | Check | Result |
| -- | ----- | ------ |
| V1 | Post-template Step 0 before Step 1 | Pass |
| V2 | INSTALL + installation guide link Step 0 | Pass |
| V3 | Example config with en-GB and en-US documented | Pass |
| V4 | Default en-GB explicit | Pass |
| V5 | Task doc + IPP bidirectionally linked | Pass |
| V6 | T05 handoff noted | Pass |

---

## Downstream handoff

- **E21:S01:T05** — configuration read/write utilities and installer prompts
- **E21:S01:T04/T06** — content generation using `localisation.language` (after T05)

---

## Kanban-init intake

**Branch:** `epic/21-internationalisation-localisation` (kanban filed from `dev` via `--art`)

**Released:** `v0.21.0.1+1` — RW -k (2026-06-06; **mis-numbered S00** — canonical **E21:S01:T01**; tag retained) | **Target:** `v0.21.1.1+1`

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## References

- [IPP-E21S01T01](../../../../implementation-cycles/IPP-E21S01T01-template-language-selection-github.md)
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [story-01-language-selection-at-setup.md](../story-01-language-selection-at-setup.md)
- [Post-Template Setup Guide](../../../../documentation/user-docs/framework-dependency-post-template-setup-guide.md)
- [ai-dev-kit-config.example.yaml](../../../../../../packages/frameworks/workflow-mgt/config/examples/ai-dev-kit-config.example.yaml)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-21/story-01-language-selection-at-setup.md`
