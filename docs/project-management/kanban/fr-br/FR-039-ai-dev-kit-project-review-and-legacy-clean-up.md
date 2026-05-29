---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: AI Dev Kit Project Review and Legacy Clean-Up

**Type:** Feature Request (FR)  
**Submitted:** 2026-02-19  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** IN PROGRESS  
**Assigned Task:** E5:S01:T39  
**GitHub Issue:** [TBD]  

---

## Summary

Perform a **full AI Dev Kit repository review** to identify and then eliminate or mitigate **legacy, redundant, and confusing artefacts** (docs, scripts, configs, examples) so that ai-dev-kit is a clean, coherent reference implementation for adopters and for the accompanying book.\n+
---

## Description

### What is the Feature?

Establish a **systematic, documented review** of the ai-dev-kit repository that:

1. Audits framework packages, dev-kit-local docs, Kanban, workflows, and scripts.
2. Clearly distinguishes **framework sources of truth** from **dev-kit-specific specialisations**.
3. Identifies **legacy, duplicated, or confusing** artefacts and produces a **concrete clean-up plan** (what to keep, consolidate, archive, or remove).

This FR is **review-only**; actual deletions/moves/edits will be performed under a follow-up implementation task once the review report and clean-up checklist are approved.

### What Problem Does This Solve?

- Over time, ai-dev-kit has accumulated:
  - Historic copies of policies that were later extracted into framework packages.
  - Multiple RW/UKW/CMW docs representing earlier iterations.
  - Legacy or experimental scripts alongside canonical workflow tooling.

- For adopters and for the book, we want ai-dev-kit to look like a **sharp, minimal reference**:
  - Clear canonical docs.
  - Minimal duplication.
  - Obvious paths for installing and using frameworks.


This FR ensures we **understand and document** what should change before any structural clean-up is done.

### What is the Use Case?

- **Adopters:** Projects (like Starborn Legacy, Confidentia, fynd.deals) using ai-dev-kit as a reference or submodule should see one coherent set of docs and tools.
- **Book project:** We want to be able to say “this repo is the canonical example” without tripping over historic artefacts in every chapter.
- **Framework evolution:** Future changes to frameworks should be easier to propagate when the current layout is clean and clearly documented.

---

## Requirements

### Functional Requirements

- [ ] **FR-039:R01** – Create a **top-level inventory** of major ai-dev-kit directories, classifying them as:
  - Framework SoT.
  - Dev-kit-local specialisation.
  - Likely legacy or transitional.

- [ ] **FR-039:R02** – Review each core framework package (`numbering & versioning`, `workflow mgt`, `kanban`, etc.) for:
  - Legacy or superseded docs.
  - Redundant examples or partial drafts.

- [ ] **FR-039:R03** – Identify and document **duplication** between framework docs/scripts and dev-kit-local copies (policies, RW docs, Kanban governance, etc.).
- [ ] **FR-039:R04** – Review Kanban and workflow documentation (RW/UKW/CMW) for:
  - Outdated patterns.
  - Conflicting narratives or overlapping guides.

- [ ] **FR-039:R05** – Review versioning and changelog artefacts (version file, `rw-config.yaml`, `CHANGELOG.md`, archive) for:
  - Consistency with the current dev-kit versioning policy.
  - Stray or obsolete files.

- [ ] **FR-039:R06** – Catalogue scripts and helpers, tagging each as:
  - Core framework/RW/UKW tooling.
  - Project utility.
  - Legacy/experimental.

- [ ] **FR-039:R07** – Produce a **single markdown review report** summarising findings and proposing:
  - What to keep as canonical.
  - What to consolidate or merge.
  - What to archive as historical.
  - What to remove.

- [ ] **FR-039:R08** – Derive from the report a **sequenced clean-up checklist** suitable for a follow-up implementation task.

### Non-Functional Requirements

- [ ] **FR-039:NF01** – The review itself is **non-destructive**: it must not delete/move files; it only reads and reports.
- [ ] **FR-039:NF02** – The report must be **clear enough** that an implementation task can follow it without re-discovering context.
- [ ] **FR-039:NF03** – The review should **favour clarity over perfection**: it’s acceptable to mark some items as “requires human judgement” in the clean-up checklist.

---

## Scope Analysis

**Problem Domain:** Repository hygiene, framework/documentation structure, adoptability  
**Affected Areas:**
- `packages/frameworks/*`
- `docs/architecture/standards-and-adrs/*`
- `docs/project-management/kanban/*`
- `src/fynd_deals/version.py`, `rw-config.yaml`
- `CHANGELOG.md` and `docs/changelog-and-release-notes/changelog-archive/*`
- `scripts/*`

**Estimated Complexity:** Medium (wide read-only survey + one coherent report).\n+
---

## Acceptance Criteria

- [ ] Inventory of major directories with classification (framework SoT / dev-kit-local / likely legacy).
- [ ] Per-framework notes on legacy/superseded docs/scripts.
- [ ] Documented list of duplicated policies/docs/scripts and suggested consolidation targets.
- [ ] Summary of Kanban and workflow docs, with outdated/conflicting items flagged.
- [ ] Versioning/changelog consistency check with any stray files listed.
- [ ] Script/helper catalogue with legacy/experimental items flagged.
- [ ] A markdown review report and ordered clean-up checklist exist and are referenced from this FR and its Task.

---

## Dependencies

**Blocks:**
- Confidently using ai-dev-kit as the canonical reference for adopters and for the book.

**Blocked By:**
- None (this is review-only; implementation clean-up work will be a separate task).

**Related Work:**
- Framework policies and implementation guides under `packages/frameworks/*`.
- RW/UKW/CMW agent execution guides.
- FR Repo tasks for prior policy and workflow hardening.

---

## Release History

- **v0.5.1.39+3** (2026-02-19) – Legacy clean-up implementation: SoT references in dev-kit policies, scripts moved to `scripts/internal/`, adopter-facing repo structure doc.
- **v0.5.1.39+2** (2026-02-19) – Latest-only changelog policy and CMW mode; CHANGELOG.md keeps only Unreleased + newest release.
- **v0.5.1.39+1** (2026-02-19) – Initial review release for AI Dev Kit project review and legacy clean-up (planning and review docs only).

