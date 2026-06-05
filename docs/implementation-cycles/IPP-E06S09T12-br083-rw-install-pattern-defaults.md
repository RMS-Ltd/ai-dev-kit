---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T12 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T12-rw-install-pattern-defaults-br083.md`](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T12-rw-install-pattern-defaults-br083.md) **(E06:S09:T12)**  
**Planning for:** [BR-083](../project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) · [GitHub #15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15)  
**Status:** Implemented (2026-06-03 — pending user verification / RW)

---

## 1. Requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Mode C defaults/detect `epics/Epic-\{epic\}/Epic-\{epic\}.md` when fresh kanban present | BR-083 |
| RF2 | Mode C defaults/detect `epics/Epic-\{epic\}/Story-{story:03d}-*.md` | BR-083 |
| RF3 | Install doc copy-paste `rw-config` kanban keys | BR-083 AC |
| RF4 | Prefer `kboard.md` as board default when present | Book dry-run |

**Out of scope (E06:S09:T13 / #16):** `task_doc_pattern`, `generate_rw_config_yaml`, “use anyway” persistence guardrails.

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T12 **TODO → IN PROGRESS** |
| 2 | `detect_kanban_doc_patterns()` + `detect_kanban_board_default()` |
| 3 | Wire mode C prompts to detected defaults + suggestion order |
| 4 | `INSTALL_IN_YOUR_PROJECT.md` + workflow mgt README |
| 5 | Extend `tests/test_install_release_workflow_patterns.py` |
| **N** | Status reconcile + **RW E06:S09:T12 --art** |

---

## 7. Success criteria

- [ ] Fresh kanban → mode C epic/story prompts show ≥1 match without manual pattern edit
- [ ] Book replay confirms #15

## References

- [BR-083](../project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md)
- [BR-084](../project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md) (follow-on)
