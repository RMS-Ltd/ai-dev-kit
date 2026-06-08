---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T09 – FR-050 Workflows Directory Reorganization

**Task ID:** E02:S13:T09  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (✅ COMPLETE **v0.2.13.9+1**)  
**Version:** v0.2.13.9+1  
**Code:** E02S13T09  
**Version Anchor:** ✅ COMPLETE (v0.2.13.9+1)

---

## Associated FR

- [FR-050: Workflows Directory Structure Reorganization](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md) — **IMPLEMENTED** (v0.2.13.9+1)

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

- IPP: [`IPP-E02S13T09-fr050-workflows-directory-reorganization.md`](../../../../implementation-cycles/IPP-E02S13T09-fr050-workflows-directory-reorganization.md)
- [E02:S13:T05 gap log](T05-create-gap-log-and-risk-assessment.md) — Gap 1 (GAP-WFMGT-STRUCT-001)
- [E07:S07:T01 report §5 H2](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [E02:S13:T06 RC sign-off](T06-define-rc-sign-off-criteria-and-remediation-tasks.md) — remediation package R1
- [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md)

---

## Deliverable

- Flat workflow YAML duplicates deprecated or removed; nested SoT authoritative
- Registry and docs aligned with nested layout
- FR-050 acceptance criteria satisfied

---

## Acceptance Criteria

- [x] All seven flat `workflows/*.yaml` copies addressed (deprecated stub or removed) ✅
- [x] Nested workflow directories are documented as SoT in package README ✅
- [x] `workflow-registry.yaml` references match actual directory tree ✅
- [x] No adopter-facing doc points adopters at flat copies as authoritative ✅
- [x] IPP linked before code implementation (FR-083) ✅

---

## Verification (TD1–TD6)

| ID | Result |
| -- | ------ |
| TD1 | Registry ↔ filesystem parity: PASS |
| TD2 | Seven flat stubs with DEPRECATED + redirect + `steps: []`: PASS |
| TD3 | KB/README cite nested paths as SoT: PASS |
| TD4 | Intake flat merged into nested before stubbing: PASS |
| TD5 | `validate-workflow-docs.py` exit 0: PASS |
| TD6 | Installer targets `workflows/release-workflow/release-workflow.yaml`: PASS |

---

## Dependencies

- **Feeds:** E02:S13:T06 Criterion 6 (HIGH gap filed)

---

## References

- IPP: [`IPP-E02S13T09-fr050-workflows-directory-reorganization.md`](../../../../implementation-cycles/IPP-E02S13T09-fr050-workflows-directory-reorganization.md)
- [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md)
- [T06 RC sign-off](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T05 gap log — Gap 1](T05-create-gap-log-and-risk-assessment.md)
