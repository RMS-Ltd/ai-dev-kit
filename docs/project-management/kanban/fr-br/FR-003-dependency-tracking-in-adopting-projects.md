---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T19:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Dependency Tracking in Adopting Projects

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-07  
**Submitted By:** RMS  
**Priority:** MEDIUM  
**Status:** COMPLETE (v0.1.2.14+1 — RW E01:S02:T14)

**Implementing Task:** [E01:S02:T14](../epics/epic-01/story-02-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003.md)  
**Historical registry:** E05:S01:T03  
**Implementation plan:** [IPP-E01S02T14](../../../implementation-cycles/IPP-E01S02T14-adopter-external-dependency-tracking.md)

---

## Summary

When projects using ai-dev-kit are incepted, responsibility for tracking external dependencies (Best-README-Template, Keep a Changelog, Shields.io) should switch to those adopting projects, eliminating ai-dev-kit as an unnecessary middleman.

---

## Description

Early intake referenced Epic 7 “README template” story tasks for **ai-dev-kit–side** upstream tracking. That approach was rejected: it would make ai-dev-kit a middleman between adopters and third-party style guides.

**Problem:**
- ai-dev-kit would need to track updates to external resources
- Adopting projects would then need to track updates from ai-dev-kit
- This adds an extra layer of indirection and maintenance overhead
- Each adopting project should directly track the resources they use

**Solution (delivered under E01:S02:T14):**
- ai-dev-kit does **not** track Best-README / Keep a Changelog / Shields for adopters
- Adopter guide + copy-paste templates under `docs/documentation/user-docs/`
- Adopting projects maintain their own register and review cadence
- Aligns with the "copy, don't reference" principle from the versioning framework

**Use Case:**
- Project adopts ai-dev-kit and uses README/changelog/badge patterns
- Project directly tracks Best-README-Template, Keep a Changelog, and Shields.io for updates
- No need to wait for ai-dev-kit to update and propagate changes
- Project has direct control over when and how to incorporate upstream changes

---

## Requirements

### Functional Requirements
- [x] No ai-dev-kit responsibility to track external README/style upstreams for adopters (policy in adopter guide)
- [x] Guidance documentation for adopting projects on how to track external dependencies
- [x] Example copy-paste templates for dependency tracking in adopting projects (`user-docs/examples/`)
- [x] README template work remains separate ([FR-002](FR-002-update-been-there-readme.md) / E01:S02:T13); this FR covers **tracking** only

### Non-Functional Requirements
- [x] Documentation is clear and actionable
- [x] Tooling is simple copy-paste (not maintained bots in ai-dev-kit)
- [x] Approach aligns with framework principles (copy, don't reference)

---

## Scope Analysis

**Problem Domain:** Framework Adoption & Dependency Management  
**Affected Areas:**
- [x] Documentation
- [x] Framework Templates
- [x] Adoption Guides
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Testing

**Estimated Complexity:**
- [x] Simple (1-3 days)
- [ ] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**
A project adopts ai-dev-kit and uses README/changelog/badge patterns. The project directly tracks Best-README-Template, Keep a Changelog, and Shields.io for updates, incorporating changes when appropriate without waiting for ai-dev-kit updates.

**Additional Use Cases:**
- Project wants to customize dependency tracking approach for their specific needs
- Project wants to track additional dependencies beyond the standard three
- Project wants to automate dependency update notifications (optional templates provided)

---

## Acceptance Criteria

- [x] Historical E07:S04 “README + upstream tracking in kit” intent **not** implemented in ai-dev-kit; E07:S04 is [maintenance automation and tooling](../epics/epic-07/story-04-maintenance-automation-and-tooling.md) (unrelated, already complete)
- [x] Documentation created: [`adopter-external-resource-dependency-tracking.md`](../../../documentation/user-docs/adopter-external-resource-dependency-tracking.md)
- [x] Example templates: [`user-docs/examples/`](../../../documentation/user-docs/examples/) (`adopter-upstream-register.md`, `adopter-upstream-check.yml`, `adopter-upstream-check.sh`)
- [x] Clear separation: ai-dev-kit provides guidance/templates; adopting projects track dependencies
- [x] **Implementing Task** ↔ **E01:S02:T14** bidirectional links

---

## Dependencies

**Blocks:**
- None

**Blocked By:**
- None

**Related Work:**
- [FR-002](FR-002-update-been-there-readme.md) — README template (E01:S02:T13); complementary
- [E01:S02:T14](../epics/epic-01/story-02-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003.md) — semantic delivery task
- [INSTALL_IN_YOUR_PROJECT.md](../../../INSTALL_IN_YOUR_PROJECT.md) — adoption index

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-07  
**Intake By:** RMS

**Delivery (2026-06-04):**
- Re-housed to **E01:S02:T14** (Epic 1 package & repo architecture)
- Canonical guide and examples shipped per [IPP-E01S02T14](../../../implementation-cycles/IPP-E01S02T14-adopter-external-dependency-tracking.md)

**Kanban Links:**
- Epic: [`epic-01.md`](../epics/epic-01/epic-01.md)
- Story: [`story-02-package-and-repo-architecture.md`](../epics/epic-01/story-02-package-and-repo-architecture.md)
- Task: [E01:S02:T14](../epics/epic-01/story-02-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003.md)

---

## Notes

**Kanban hygiene:** 2025 intake referenced `story-04-readme-template-based-on-best-readme-template.md` and E07:S04:T04–T07 for kit-side tracking. That story file was superseded; Epic 7 Story 4 on disk is maintenance automation. This FR’s delivery is **adopter-side** tracking only.

1. **Eliminates unnecessary middleman:** No ai-dev-kit propagation of Best-README / Keep a Changelog / Shields updates
2. **Aligns with framework principles:** "Copy, don't reference" — projects own their dependencies
3. **Reduces maintenance overhead:** ai-dev-kit focuses on framework quality, not third-party doc polling
4. **Gives projects control:** Projects decide when and how to incorporate upstream changes

---

## References

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Keep a Changelog](https://keepachangelog.com/)
- [Shields.io](https://shields.io/)
- [Adopter external resource dependency tracking](../../../documentation/user-docs/adopter-external-resource-dependency-tracking.md)
- [IPP-E01S02T14](../../../implementation-cycles/IPP-E01S02T14-adopter-external-dependency-tracking.md)

---

_This template is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._
