---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:57:51Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 7, Task 1: Implement Policy Documents Machine-Readable Salience Section (FR-022)

**Task ID:** E05:S07:T01  
**Status:** ✅ COMPLETE (V0.5.7.1+1)  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (UKW -u — archived from active kboard; FR-022 IMPLEMENTED)  
**Version:** v0.5.7.1+1  
**Code:** E05S07T01

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E05:S07:T01`

---

## Scope

Define and implement a standardized "Policy Salience" section for policy documents that captures key rules, enforcement points, decision criteria, and scope in machine-readable format (YAML). Create schema, template, and update existing policy documents.

---

## Input

FR-022 requirements, existing policy documents

---

## Deliverable

Policy salience schema, template, updated policy documents, parser tooling

---

## Acceptance Criteria

- [x] ✅ Policy Salience schema/template defined and documented
- [x] ✅ Policy salience section is machine-readable (YAML format)
- [x] ✅ Policy salience section is human-readable
- [x] ✅ Policy salience section includes key rules/principles
- [x] ✅ Policy salience section includes decision criteria
- [x] ✅ Policy salience section defines scope
- [x] ✅ Policy salience section includes validation rules
- [x] ✅ Policy salience section links to related policies
- [x] ✅ Agent parser can extract policy salience programmatically
- [x] ✅ Key policy documents updated with salience sections (Documentation Maintenance, Kanban Governance)
- [x] ✅ Policy salience template available for new documents
- [x] ✅ Documentation explains how to create/maintain salience sections

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-05/story-07-policy-documentation-structure.md`

