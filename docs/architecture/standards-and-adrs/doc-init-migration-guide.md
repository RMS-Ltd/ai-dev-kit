---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Doc-Init (+0) Migration Guide for Existing Projects

**Status:** Draft  
**Version:** 0.1.0  
**Last Updated:** 2025-12-12  
**Epic:** Epic 2 - Workflow Management  
**Story:** E2:S10 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T  
**Related:** FR-017, FR-018, FR-020, E2:S09, E4:S11

---

## 1. Overview

This guide describes how to migrate an existing project to use **doc-init builds (`+0`)** for new Epic/Story/Task (E/S/T) documentation while maintaining compatibility with the `RC.EPIC.STORY.TASK+BUILD` versioning scheme.

Doc-init builds establish a **forensic version anchor** for E/S/T documentation in an **abstract space** (`+0`) before any functional work begins.

---

## 2. Preconditions

Before enabling doc-init in an existing project:

1. **Kanban Granularity (FR-016 / E4:S11 / E2:S09)**
   - Discrete Task documents exist (separate file or delimited section)
   - Release Workflow (RW) Step 1/2 can locate Task docs reliably

2. **Versioning Policy Updates (E2:S10:T04)**
   - Project adopts the updated dev-kit versioning policy:
     - `+0` for doc-init builds
     - `+1` or higher for functional work

3. **RW & Validator Updates (E2:S10:T01/T02/T05/T06)**
   - RW Step 2 supports doc-init path
   - Validators understand doc-init + abstract space (`+0`)
   - RW docs include doc-init logic and examples

---

## 3. Migration Strategy (High-Level)

1. **Adopt Versioning Policy Changes**
   - Align your project’s versioning with dev-kit policy (`RC.EPIC.STORY.TASK+BUILD`)
   - Ensure BUILD semantics match:
     - `+0` → doc-init (docs-only, first-time E/S/T doc)
     - `+1`+ → functional work

2. **Enable Doc-Init Path in RW**
   - Use updated RW Step 2 behavior:
     - New E/S/T doc + docs-only changes → `+0`
     - Subsequent functional changes → `+1`, `+2`, ...

3. **Introduce Doc-Init for New E/S/T Docs Only**
   - Do **not** retroactively re-anchor existing E/S/T docs
   - Use doc-init for **new** Epics/Stories/Tasks going forward

4. **Update Changelog Practices**
   - Document doc-init releases clearly in main + detailed changelog
   - Use `📋 Doc Init:` entries in `CHANGELOG.md`

---

## 4. Concrete Migration Steps

### Step 1: Verify Prerequisites

- [ ] E/S/T docs follow discrete Task doc pattern (FR-016)
- [ ] E2:S09 integration work is adopted (Task doc presence in RW)
- [ ] Dev-kit versioning policy docs are in effect for your project
- [ ] RW scripts updated to include:
  - Doc-init detection (Step 2)
  - Doc-init validation (`validate_version_bump.py`, `validate_branch_context.py`)

### Step 2: Configure RW for Doc-Init

1. **RW Step 2 (Bump Version):**
   - Ensure agent follows updated Step 2 procedure (E2:S10:T01)
   - Doc-init detection logic:
     - New E/S/T doc file or new delimited Task section
     - No prior version for that E/S/T
     - Docs-only changes in diff

2. **Validators:**
   - BUILD=0 → **must** be docs-only
   - BUILD=0 → **must** be first-time E/S/T doc
   - BUILD>=1 → functional work; doc-init checks do not apply

### Step 3: Start Using Doc-Init for New E/S/T

For **new** work going forward:

1. Create new E/S/T documentation via Kanban templates
2. Run RW for that Task:
   - RW Step 2 should emit `RC.EPIC.STORY.TASK+0`
   - Validators must pass docs-only checks
3. Document the release as **Doc Init** in changelog.

**Example:**
- New Story `E2:S11:T00` doc created → `0.2.11.0+0`
- First functional change for that Story → `0.2.11.0+1`

### Step 4: Do *Not* Re-anchor Existing Work

For existing E/S/T docs already in use:

- **Do not** attempt to backfill doc-init builds
- Continue using normal `+1`+ functional increments
- Doc-init is **forward-looking** and used only for new E/S/T anchors

---

## 5. Testing Checklist (Doc-Init)

Use this checklist when validating your doc-init migration:

### A. New E/S/T Doc-init Scenarios

- [ ] New Epic doc → RW run → `RC.EPIC.0.0+0`
- [ ] New Story doc under existing Epic → `RC.EPIC.STORY.0+0`
- [ ] New Task doc under existing Story → `RC.EPIC.STORY.TASK+0`
- [ ] RW validators pass when only docs are changed

### B. Docs-Only Enforcement

- [ ] Add non-doc change (e.g., `.py` file) during `+0` run
- [ ] Run RW → validator **must fail** with clear message listing offending files

### C. Functional Builds After Doc-Init

- [ ] Make first functional change linked to doc-init Task
- [ ] RW emits `+1` for that Task
- [ ] Validators do **not** treat this as doc-init; normal rules apply

### D. Edge Cases

- [ ] Multiple new E/S/T docs in single RW run
  - At least: new Story + new Task
  - Validate behavior and audit changelog entries
- [ ] Doc-init outside canonical RW context (if applicable)
  - Validate that tooling either blocks or clearly warns

---

## 6. Changelog & Policy Alignment

When migrating:

1. **Changelogs**
   - Use `📋 Doc Init: E\{epic\}:S\{story\}:T\{task\} - [Description]` for `+0` entries in `CHANGELOG.md`
   - In detailed changelog archive (`CHANGELOG_vX.Y.Z.T+0.md`), include:
     - `**Build Type:** Doc-Init (+0)`
     - `**Type:** 📋 Doc Init`

2. **Policy Documents**
   - Ensure the following docs are consistent with doc-init behavior:
     - Dev-kit versioning policy
     - Framework versioning policy
     - RW Agent Execution Guide
     - Kanban governance policy
     - Documentation maintenance / lifecycle policies

---

## 7. Migration Anti-Patterns

Avoid these:

- ❌ Backfilling fake doc-init releases for old tasks
- ❌ Mixing doc-init (`+0`) and functional changes in the same RW
- ❌ Using `+0` for anything other than first-time E/S/T doc creation
- ❌ Skipping Task docs (FR-016 still applies)

---

## 8. References

- **E2:S10 Story:** `docs/project-management/kanban/epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md`
- **FR-017:** Doc-Init Build (+0) for New E/S/T
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs
- **FR-020:** Version Validator Abstract Space Awareness
- **Versioning Policy (Dev-Kit):** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Versioning Policy (Framework):** `packages/frameworks/numbering & versioning/versioning-policy.md`
- **RW Agent Execution Guide:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Changelog Implementation Guide:** `packages/frameworks/numbering & versioning/IMPLEMENTATION_GUIDE.md`
