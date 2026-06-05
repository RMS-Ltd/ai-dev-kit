---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-05T14:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8: Tooling & Automation

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2025-12-05  
**Last updated:** 2026-06-05 (RW E08:S03:T16 — T16 Wave 0 baseline)
**Branch:** `epic/8-tooling-automation`  
**Version Schema:** `0.8.S.T+B`  
**Production URL:** [N/A for this repo]

---

## Story Checklist

- [x] **E8:S01 – Code Generators** - ✅ COMPLETE (v0.8.1.3+1 – All tasks complete)
  - Story: [`story-01-code-generators.md`](story-01-code-generators.md)

- [x] **E8:S02 – Additional Validators** - ✅ COMPLETE (v0.8.2.3+1 – All tasks complete)
  - Story: [`story-02-additional-validators.md`](story-02-additional-validators.md)

- [ ] **E8:S03 – Automation Scripts** - IN PROGRESS (v0.8.3.16+1 – T16 Wave 0 baseline; T12–T14 backlog active; T15 CI triage)
  - Story: [`story-03-automation-scripts.md`](story-03-automation-scripts.md)

- [ ] **E8:S04 – Tooling & Automation Package Implementation Review** - TODO (v0.8.4.0+0)
  - Story: [`story-04-tooling-automation-package-implementation-review.md`](story-04-tooling-automation-package-implementation-review.md)

- [ ] **E8:S05 – Tooling & Automation Package Installation Evaluation** - TODO (v0.8.5.0+0)
  - Story: [`story-05-tooling-automation-package-installation-evaluation.md`](story-05-tooling-automation-package-installation-evaluation.md)


---

## Overview

Epic 8 owns the **Tooling & Automation** framework for the ai-dev-kit repository. This epic provides additional tools, validators, and automation scripts to support framework adoption and maintenance.

---

## Goals

1. **Build Code Generators**
   - Create generators for common framework patterns
   - Build template-based code generation tools
   - Establish generator framework

2. **Develop Additional Validators**
   - Create validators beyond current 3
   - Build framework-specific validation tools
   - Establish validation framework

3. **Implement Automation Scripts**
   - Create automation scripts for common tasks
   - Build workflow automation tools
   - Establish automation framework

---

## Stories (Initial)

### Story 1: Code Generators

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Last updated:** 2026-06-05 (RW E08:S03:T16 — T16 Wave 0 baseline)

**Goal:**  
Build code generators for common framework patterns and templates.

**Tasks:**
- [x] E08:S01:T01 – Create generator framework ✅ COMPLETE (v0.8.1.1+1)
- [x] E08:S01:T02 – Build template-based generators ✅ COMPLETE (v0.8.1.2+1)
- [x] E08:S01:T03 – Establish generator patterns ✅ COMPLETE (v0.8.1.3+1)

**Story:** [`story-01-code-generators.md`](story-01-code-generators.md)

---

### Story 2: Additional Validators

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Last updated:** 2026-06-05 (RW E08:S03:T16 — T16 Wave 0 baseline)

**Goal:**  
Develop additional validators beyond the current 3 validation scripts.

**Tasks:**
- [x] E08:S02:T01 – Create validator framework ✅ COMPLETE (v0.8.2.1+1)
- [ ] E08:S02:T02 – Build framework-specific validators
- [ ] E08:S02:T03 – Establish validation patterns

**Story:** [`story-02-additional-validators.md`](story-02-additional-validators.md)

---

### Story 3: Automation Scripts

**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-06-05 (RW E08:S03:T16 — T16 Wave 0 baseline)

**Goal:**  
Implement automation scripts for common development and maintenance tasks.

**Tasks:**
- [ ] E08:S03:T01 – Create automation framework
- [ ] E08:S03:T02 – Build workflow automation scripts
- [ ] E08:S03:T03 – Establish automation patterns

**Story:** [`story-03-automation-scripts.md`](story-03-automation-scripts.md)

---

## Dependencies

**Blocks:**
- Framework adoption efficiency

**Blocked By:**
- None

**Coordinates With:**
- Epic 5 (Documentation Management) - Documentation for tools
- Epic 6 (Framework Management) - Framework tooling
- Epic 7 (Examples & Adoption) - Tool usage examples

---

## References

- `docs/project-management/kanban/README.md`
- `packages/frameworks/workflow-mgt/scripts/`

