---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T09 – FR-050 Workflows Directory Reorganization

**Task ID:** E02:S13:T09  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (filed from E02:S13:T06 RC remediation — GAP-WFMGT-STRUCT-001)  
**Version:** v0.2.13.9+0  
**Code:** E02S13T09

---

## Associated FR

- [FR-050: Workflows Directory Structure Reorganization](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md)

---

## Scope

Execute [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md) to resolve **GAP-WFMGT-STRUCT-001** (flat workflow YAML duplicates nested SoT). Deprecate or remove seven non-deprecated flat `workflows/*.yaml` copies; establish nested directories as the single authoritative source per workflow (following the RW flat-stub deprecation pattern from E02:S13:T08).

**In scope:**

- Deprecation headers on flat YAML copies (or removal where safe)
- Update `workflow-registry.yaml` and discovery references
- Adopter-facing documentation for nested SoT layout
- Validation that workflow discovery still resolves correctly

**Out of scope:**

- Kanban transform consolidation (see [E02:S13:T10](T10-kanban-transform-consolidation.md))
- Package code changes outside workflow directory layout and references

---

## Input

- [E02:S13:T05 gap log](T05-create-gap-log-and-risk-assessment.md) — Gap 1 (GAP-WFMGT-STRUCT-001)
- [E07:S07:T01 report §5 H2](../../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [E02:S13:T06 RC sign-off](T06-define-rc-sign-off-criteria-and-remediation-tasks.md) — remediation package R1
- [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md)

---

## Deliverable

- Flat workflow YAML duplicates deprecated or removed; nested SoT authoritative
- Registry and docs aligned with nested layout
- FR-050 acceptance criteria satisfied (requires separate IPP before implementation per FR-083)

---

## Acceptance Criteria

- [ ] All seven flat `workflows/*.yaml` copies addressed (deprecated stub or removed)
- [ ] Nested workflow directories are documented as SoT in package README
- [ ] `workflow-registry.yaml` references match actual directory tree
- [ ] No adopter-facing doc points adopters at flat copies as authoritative
- [ ] IPP linked before code implementation (FR-083)

---

## Dependencies

- **Blocked by:** IPP for this task (not yet created — run `/ipw E02:S13:T09` before implementation)
- **Feeds:** E02:S13:T06 Criterion 6 (HIGH gap filed)

---

## References

- [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md)
- [T06 RC sign-off](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T05 gap log — Gap 1](T05-create-gap-log-and-risk-assessment.md)
