---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 11, Task 1: Update Kanban Governance Policy to Mandate 3-Tier Structure

**Status:** COMPLETE  
**Priority:** HIGH  
**Last updated:** 2025-12-11 (v0.4.11.1+1 – Policy updates complete)  
**Started:** 2025-12-11  
**Completed:** 2025-12-11  
**Version:** v0.4.11.1+1  
**Code:** E4S11T01

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}` (e.g., `E4:S11:T01`)

**Full Task ID:** `E4:S11:T01`

---

## Scope

Update all three Kanban governance policy documents to mandate explicit 3-tier structure (Epic → Story → Task) and require discrete Task documents. This establishes the policy foundation for FR-016: Kanban Granularity & Discrete Task Docs.

---

## Input

- Current Kanban governance policy documents:
  - `packages/frameworks/kanban/policies/kanban-governance-policy.md` (canonical SoT)
  - `docs/project-management/rituals/policy/kanban-governance-policy.md` (dev-kit local)
  - `packages/frameworks/numbering & versioning/kanban-governance-policy.md` (framework)
- FR-016 requirements
- E4:S11:T01 task definition

---

## Deliverable

Updated Kanban governance policy documents that:
- Explicitly mandate 3-tier structure (Epic → Story → Task)
- Require discrete Task documents (or clearly delimited sections)
- Define required Task document fields
- Prohibit implicit/inline tasks
- Update FR/BR → Task → Story → Epic flow documentation
- Add validation requirements for Task doc presence

---

## Acceptance Criteria

- [x] Kanban governance policy explicitly mandates 3-tier structure
- [x] Policy requires discrete Task docs (or clearly delimited sections)
- [x] Required Task doc fields are documented
- [x] Implicit/inline tasks are prohibited
- [x] All three policy documents updated consistently

---

## Approach

1. Review current Kanban governance policy documents
2. Add explicit requirement for 3-tier structure (Epic → Story → Task)
3. Mandate discrete Task documents (or clearly delimited sections using Task ID)
4. Define required Task doc fields:
   - Task ID (`E{epic}:S{story}:T{task}`)
   - Scope
   - Acceptance criteria
   - Status
   - Version anchor (for doc-init support, see FR-017)
   - Completion date
   - Related BR/FR links
   - Input
   - Deliverable
   - Dependencies
   - Blocker
   - Parallel Development Candidacy
5. Prohibit implicit/inline tasks (must be explicit at task tier)
6. Update FR/BR → Task → Story → Epic flow documentation
7. Add validation requirements for Task doc presence

---

## Dependencies

**Depends On:**
- None (can proceed independently)

**Blocks:**
- E2:S09:T02 (RW Step 1 Task doc presence) - requires policy requirements
- E2:S09:T03 (Validators) - requires policy requirements
- E2:S09:T04 (RW Agent Execution Guide) - requires policy requirements

**Blocked By:**
- None

**Parallel Development Candidacy:** Safe (documentation only)

---

## Related Work

**Related BR/FR Links:**
- [FR-016: Kanban Granularity & Discrete Task Docs (3-Tier Structure)](../../docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md)
- [FR-017: Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T](../../docs/project-management/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md)

**Related Tasks:**
- E4:S11:T02: Create Task Document Template and Update Story Template (next task)

**Related Stories:**
- [E4:S11: Kanban Granularity & Discrete Task Docs (Kanban Framework)](../../docs/project-management/kanban/epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md)
- [E2:S09: Kanban Granularity & Discrete Task Docs (Workflow Management)](../../docs/project-management/kanban/epics/Epic-2/Story-009-kanban-granularity-discrete-task-docs.md)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.11.1+1)`)

**When Task is Complete:**
- ✅ Forensic marker added to Task document
- ✅ Forensic marker added to Story checklist
- ✅ Version file updated with task completion
- ✅ Changelog updated with task completion

---

## Notes

This task establishes the policy foundation for discrete Task documents. All three policy documents were updated consistently to ensure alignment across:
- Canonical framework policy (project-agnostic)
- Dev-kit local policy (project-specific adaptation)
- Numbering & versioning framework policy (integration layer)

The policy updates enable subsequent tasks (T02: templates, T03: versioning policy) to build on this foundation.

---

## Completion Summary

**What was delivered:**
- All three Kanban governance policy documents updated with 3-tier structure requirements
- Task document requirements clearly defined
- FR/BR flow updated to reference Task documents
- Validation requirements documented

**Lessons learned:**
- Consistency across all three policy documents is critical for framework adoption
- Clear examples and prohibited patterns help prevent anti-patterns

**Metrics achieved:**
- 3 policy documents updated
- 12 required Task document fields defined
- 4 prohibited patterns documented

---

## References

- [Kanban Governance Policy (Canonical)](../policies/kanban-governance-policy.md)
- [Kanban Governance Policy (Dev-Kit Local)](../../docs/project-management/rituals/policy/kanban-governance-policy.md)
- [Kanban Governance Policy (Numbering & Versioning)](../../packages/frameworks/numbering & versioning/kanban-governance-policy.md)
- [FR-016: Kanban Granularity & Discrete Task Docs](../../docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md)

---

## Next Actions

- [ ] Proceed to T02: Create Task Document Template and Update Story Template

