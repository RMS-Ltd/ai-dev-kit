---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 004 – Repository Branding and Renaming

**Status:** IN PROGRESS
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-07  
**Last updated:** 2026-05-26 (v0.1.4.3+1 – Kanban documentation setup)
**Version:** v0.1.4.3+1
**Code:** E1S04

---

## Task Checklist

- [x] **E1:S04:T01 – Execute repository rename from vibe-dev-kit to ai-dev-kit** - COMPLETE ✅ (Executed immediately - remote repo was deleted, no migration needed)
- [x] **E1:S04:T02 – Plan repository rename from ai-dev-kit to head-first-ai-dev-kit (conditional on O'Reilly acceptance)** - ⏭️ SUPERSEDED → **FR-099 / ADR-006** (2026-05-26: public ADK stays `ai-dev-kit`; Head First context private `hf-ai-dev-kit` only — do not execute)
- [x] **E1:S04:T03 – Spin off book epic to private repository (FR-099)** - ✅ COMPLETE (**v0.1.4.3+1** — Phase 2 genesis; Phases 3–4 pending)
  - Task: [`T03-spin-off-book-epic-private-repo-fr099.md`](Story-004-repository-branding-and-renaming/T03-spin-off-book-epic-private-repo-fr099.md) | [FR-099](../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md) | [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)

---

## Overview

This story plans and executes **repository naming and separation** between the public AI Dev Kit product and the private book project.

1. **Phase 1:** `vibe-dev-kit` → `ai-dev-kit` ✅ **COMPLETE**
2. **Phase 2 (superseded):** `ai-dev-kit` → `head-first-ai-dev-kit` on O'Reilly acceptance — **cancelled 2026-05-26** ([FR-099](../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md), [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md))
3. **Phase 3 (active):** Option C migration — privatize/rename → `hf-ai-dev-kit`, genesis public rebirth of **`ai-dev-kit`** (**E1:S04:T03**)

**Phase 1 Status:** ✅ **COMPLETE** — all references updated from `vibe-dev-kit` to `ai-dev-kit`.

---

## Goal

Establish clear repository boundaries: **public `ai-dev-kit`** (neutral frameworks) and **private `hf-ai-dev-kit`** (book IP, Epic 24, Head First context), with minimal disruption during cutover.

---

## Tasks

### E1:S04:T01 – Execute repository rename from vibe-dev-kit to ai-dev-kit ✅ COMPLETE

**Input:** Current repository structure, all references to `vibe-dev-kit`  
**Deliverable:** ✅ **COMPLETE** - All references updated to `ai-dev-kit`  
**Dependencies:** None  
**Blocker:** None  
**Status:** IN PROGRESS

**Problem Statement:**
The repository was named `vibe-dev-kit`, but the book focus has shifted to "Head First AI-Assisted Development". To align branding, we renamed to `ai-dev-kit`. Since the remote repository was deleted, we were able to execute the rename immediately without migration concerns.

**Approach:**

**Approach (Executed):**

1. **✅ Inventory All References:**
   - Searched codebase for all occurrences of `vibe-dev-kit` (found 91 files)
   - Identified file paths, URLs, documentation references
   - Cataloged CLI tool names, package names, import paths
   - Documented all configuration files referencing the name

2. **✅ Execute Rename:**
   - Updated all references from `vibe-dev-kit` to `ai-dev-kit` using bulk replacement
   - Updated all references from `Vibe Dev Kit` to `AI Dev Kit`
   - Renamed configuration file: `rw-config-vibe-dev-kit.yaml` → `rw-config-ai-dev-kit.yaml`
   - Updated version.py, documentation, framework READMEs, Kanban docs
   - Verified no remaining references to old name

3. **✅ Verification:**
   - Confirmed all references updated (0 remaining matches)
   - Ready to create new GitHub repository with `ai-dev-kit` name
   - No migration needed (remote repo was deleted)

**Deliverables:**
- ✅ All codebase references updated from `vibe-dev-kit` to `ai-dev-kit`
- ✅ All "Vibe Dev Kit" references updated to "AI Dev Kit"
- ✅ Configuration file renamed
- ✅ Ready for new GitHub repository creation

**Success Criteria:**
- ✅ All references to `vibe-dev-kit` updated to `ai-dev-kit`
- ✅ All "Vibe Dev Kit" references updated to "AI Dev Kit"
- ✅ Configuration files updated
- ✅ Documentation updated
- ✅ Ready to create new GitHub repository

**Related Work:**
- Epic 6 (Framework Management) - Framework dependency references
- Epic 5 (Documentation Management) - Documentation updates
- Epic 9 (Book Related Work) - Book branding alignment

---

### E1:S04:T02 – Plan repository rename from ai-dev-kit to head-first-ai-dev-kit (conditional on O'Reilly acceptance) ⏭️ SUPERSEDED

**Status:** IN PROGRESS
**Superseded by:** [FR-099](../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md), [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md), [E1:S04:T03](Story-004-repository-branding-and-renaming/T03-spin-off-book-epic-private-repo-fr099.md)

**Rationale:** Clear separation requires public **AI Dev Kit** to remain neutral (`ai-dev-kit`). Head First / O'Reilly branding applies to **private `hf-ai-dev-kit`** only, not a public toolkit rename.

Historical task spec retained below for traceability only.

**Input:** Repository rename plan from T01, O'Reilly book acceptance confirmation  
**Deliverable:** Conditional rename plan for O'Reilly branding alignment  
**Dependencies:** E1:S04:T01, O'Reilly book acceptance  
**Blocker:** O'Reilly book acceptance

**Problem Statement:**
If the book is accepted by O'Reilly for the "Head First" series, the repository should be renamed to `head-first-ai-dev-kit` to align with Head First series naming conventions (following patterns like `head-first-csharp`, `head-first-git`, etc.). This requires planning the second rename phase.

**Approach:**

1. **Review Phase 1 Rename:**
   - Assess what worked well in Phase 1 rename
   - Identify any issues or improvements needed
   - Update rename procedures based on Phase 1 experience

2. **Plan Phase 2 Rename:**
   - Inventory all references to `ai-dev-kit`
   - Identify additional considerations for "Head First" branding
   - Plan GitHub template repository setup (if applicable)
   - Consider O'Reilly-specific requirements or guidelines

3. **Create Conditional Plan:**
   - Detailed rename procedure for Phase 2
   - Communication plan for O'Reilly announcement
   - Update book references and documentation
   - Plan for template repository setup (if readers should use as template)

4. **Document O'Reilly Alignment:**
   - How the rename aligns with Head First series conventions
   - Repository description and branding updates
   - Template repository configuration (if applicable)
   - Book-repo integration documentation

**Deliverables:**
- `docs/architecture/standards-and-adrs/repository-rename-plan-head-first-ai-dev-kit.md` - Phase 2 rename plan
- `docs/architecture/standards-and-adrs/oreilly-branding-alignment.md` - O'Reilly branding alignment guide
- Updated migration guide for Phase 2
- Template repository setup guide (if applicable)

**Success Criteria:**
- Phase 2 rename plan complete and ready for execution
- O'Reilly branding alignment documented
- Template repository setup planned (if applicable)
- All documentation updated for Head First branding
- Plan ready for execution upon O'Reilly acceptance

**Related Work:**
- E1:S04:T01 (Phase 1 rename) - Foundation for Phase 2
- Epic 9 (Book Related Work) - O'Reilly book acceptance
- Epic 5 (Documentation Management) - Documentation updates

**Note:** This task is conditional on O'Reilly book acceptance. Do not execute until confirmation.

---

### E1:S04:T03 – Spin off book epic to private repository (FR-099)

**Input:** Epic 24 Kanban tree, `docs/book-proj/` assets, public repo cross-references  
**Deliverable:** Migration ADR + phased extraction of book IP to private repository  
**Dependencies:** None for Phase 0 inventory  
**Blocker:** Maintainer approval of private repo name and history policy (Phase 1+)

**Problem Statement:**  
Unpublished book content and Epic 24 Kanban live in the public ai-dev-kit repository, creating IP exposure and adopter confusion. Book work should move to a private project that consumes public ADK frameworks.

**Approach:** See [T03 task document](Story-004-repository-branding-and-renaming/T03-spin-off-book-epic-private-repo-fr099.md), [FR-099](../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md), and [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md).

**Related Work:**

- [FR-099](../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
- E1:S04:T02 — superseded (public Head First rename cancelled)
- Epic 24 — remains in private repo after cutover

---

## Dependencies

**Blocks:**
- None (planning task)

**Blocked By:**
- None

**Coordinates With:**
- Epic 6 (Framework Management) - Framework dependency references
- Epic 5 (Documentation Management) - Documentation updates
- Epic 9 (Book Related Work) - Book branding and O'Reilly acceptance

---

## References

- `docs/project-management/kanban/epics/Epic-1/Epic-1.md`
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- `docs/project-management/rituals/policy/kanban-governance-policy.md`

---

