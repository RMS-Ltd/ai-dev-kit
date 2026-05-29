---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E5:S01:T74 – Kanban Intake: Atomic KG-R2 & Semantic Placement KG-R6

**Task ID:** E5:S01:T74  
**Status:** COMPLETE  
**Priority:** HIGH  
**Version Anchor:** v0.5.1.74+3 *(+1 FR-074 KG-R2/KG-R6; +2/+3 FR-073 board / epic/6 reconciliation)*  
**Feature Request:** [FR-074 – Kanban intake governance](../../../fr-br/FR-074-kanban-intake-atomic-kg-r2-kg-r6-governance.md)

---

## Scope

Ship documentation/policy updates that **harden intake**: **KG-R2** (every FR/BR/UXR + task + links **same session**), **KG-R6** (primary task under semantically appropriate story; optional id symmetry). Touch framework governance, intake guide, Cursor **intake-process** skill, packaged intake workflow YAML, workflow README, ai-dev-kit **rituals** policy §1.2, **kanban/README**, **fr-br-uxr-board**, **T73** alignment. No runtime code.

---

## Input

- Uncommitted or drafted edits across listed paths.  
- [`kanban-governance-policy.md` (framework package)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md) (framework canonical).  
- [FR-074](../../../fr-br/FR-074-kanban-intake-atomic-kg-r2-kg-r6-governance.md).

---

## Deliverable

1. **KG-R2** / **KG-R6** in framework policy **frontmatter** and narrative.  
2. **`FR_BR_INTAKE_GUIDE.md`** v1.1+ with atomic flow and UXR.  
3. **`intake-process` SKILL** with mandatory ordering.  
4. **`intake-workflow.yaml`** description + workflow **README** note.  
5. **Rituals** `kanban-governance-policy.md` §**1.2** + **kanban/README** workflow.  
6. **fr-br-uxr-board** / **T73** text consistent with **KG-R6**.

---

## Acceptance Criteria

- [x] **AC1:** **`validate_branch_context`** / **`validate_version_bump`** pass for doc-only release on **`epic/5-documentation-management`**.  
- [x] **AC2:** **RW** records **`0.5.1.74+1`** for **T74** with changelog summary for **FR-074**.  
- [x] **AC3:** Bidirectional **FR-074** ↔ **T74** and **Story-001** checklist row present.

---

## Pre-identified task mapping

N/A — this task **is** the filing anchor for **FR-074**.

---

## Approach

1. Apply policy/guide/skill edits.  
2. **`git add`**; run validators.  
3. **`RW E5:S01:T74`** (or **`RW -k`** if only doc-init placeholder—here expect **`+1`** after substantive doc merge).

---

## Dependencies

- Depends on: **FR-074** approval narrative.  
- Related: **E5:S01:T73** / **FR-073** (intake plan board).

---

## References

- [`kanban-governance-policy.md` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md)
- [`FR_BR_INTAKE_GUIDE.md` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md)
- [`intake-process` skill (source)](https://github.com/earlution/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md)
