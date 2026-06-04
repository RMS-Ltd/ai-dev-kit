---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 19: RW install version_file scaffold (BR-088)

**Task ID:** E06:S09:T19  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05  
**Code:** E06S09T19

**Upstream:** [BR-088](../../../fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md)  
**Related:** [BR-086](../../../fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md) · [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17) · [#18](https://github.com/RMS-Ltd/ai-dev-kit/issues/18)

---

## Input

- [BR-088](../../../fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md)
- [GitHub #18](https://github.com/RMS-Ltd/ai-dev-kit/issues/18)
- `install_release_workflow.py` — mode C `version_file` prompt and post-write hooks
- `INSTALL_IN_YOUR_PROJECT.md` — greenfield / submodule-only spine

---

## Scope

When mode C configures `version_file` and the path does not exist:

1. Create parent directories and a minimal `version.py` stub matching project versioning schema (or template from kit), **or**
2. Exit with a blocking, copy-pasteable next step (no silent success).

Update install docs and optional `github-issue-install-signoff-contract.yaml` entry for **BR-088**.

**Out of scope:** Full application `src/` scaffolding beyond version file; unrelated kanban pattern work (**E06:S09:T16** / #17).

---

## Deliverable

- [ ] `install_release_workflow.py` scaffold or explicit blocker for missing `version_file`
- [ ] Tests under `tests/test_install_release_workflow_*.py`
- [ ] `INSTALL_IN_YOUR_PROJECT.md` (and book cross-link note if applicable)

---

## Acceptance Criteria

- [ ] Greenfield repo without `src/` → after mode C, `version_file` exists on disk **or** install stops with mandatory next step
- [ ] Sign-off / docs reference scaffold behaviour when `src/` absent
- [ ] **BR-088** / GitHub **#18** closable after adopter replay

---

## Version Anchor

📋 TODO — run **`RW -k E06:S09:T19 --art`** after intake lands on `dev`
