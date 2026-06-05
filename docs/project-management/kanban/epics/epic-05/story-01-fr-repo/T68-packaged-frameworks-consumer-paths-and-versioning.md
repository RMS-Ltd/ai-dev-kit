---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-25T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 68: Packaged Frameworks — Consumer Paths and Versioning Hygiene

**Task ID:** E05:S01:T68  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-03-25  
**Last updated:** 2026-03-30 (Release v0.5.1.68+2 — consumer RW layout doc; kanban/numbering README; packages semver policy)  
**Version:** v0.5.1.68+2  
**Version Anchor:** Forensic release `v0.5.1.68+2` — `rw-validators-consumer-layout.md`; workflow mgt + packages README; numbering + kanban cross-links  
**Code:** E05S01T68

**Repository Pattern:** Internal scaffold (no FR yet).

---

## Scope

After merging **Epic 5** RW/validator/doc work to **main**, consumers copying **`packages/frameworks/*`** need a coherent story for:

1. **Paths** — `rw-config.yaml` `kanban_root`, `scripts_path`, and validation scripts (`validate_rw_task_intent`, `validate_rw_task_complete`) relative to their repo layout.
2. **Cross-package mentions** — Kanban / numbering / doc-lifecycle READMEs: pointers to workflow mgt when RW validators or `.cursorrules` fragments are installed.
3. **Versioning** — When to bump **framework package** version fields in README frontmatter (e.g. workflow mgt `2.2.0`) vs **ai-dev-kit** repo version; optional short **release checklist** for publishing or tagging framework drops.

This task is **scoping + documentation + checklist**, not a full dependency architecture change (see Epic 6 ADRs if needed).

---

## Input

- [Framework Dependency Architecture](../../../../../architecture/standards-and-adrs/framework-dependency-architecture.md) (if present).
- [`packages/README.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/README.md).
- [E05:S01:T47](T47-install-logging-for-framework-dependencies.md) / FR-047 (install logging overlap).

---

## Deliverable

- **Consumer checklist** or **“Installing workflow mgt from package”** appendix: config keys, validator invocation, Kanban optional.
- **Cross-readme audit** (kanban, numbering, doc-lifecycle): add or fix links where RW/validators are assumed.
- **Versioning note** for maintainers: when a merge to main should trigger a **framework README version** bump.

---

## Acceptance Criteria

- [x] Single **entry-point doc** ([`rw-validators-consumer-layout.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md)) that answers: “I copied `workflow mgt/` — what do I configure for RW validators?”
- [x] At least **two** non–workflow-mgt framework READMEs updated (**kanban**, **numbering**) for FR-060 triggers and consumer-relative validator paths.
- [x] **Explicit decision** recorded: [packages/README.md — Framework README version fields (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/README.md#framework-readme-version-fields) (manual bump policy).

---

## Related Work

- **E05:S01:T65** — workflow mgt README count alignment.
- **E05:S01:T67** — install docs RW token.
- **E05:S01:T56** / **FR-056** — broader doc standardization.

---

_Story:_ [`story-01-fr-repo.md`](../story-01-fr-repo.md)
