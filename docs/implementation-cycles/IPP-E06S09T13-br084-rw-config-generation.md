---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T13 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T13-rw-install-mode-c-rw-config-generation-br084.md`](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T13-rw-install-mode-c-rw-config-generation-br084.md) **(E06:S09:T13)**  
**Planning for:** [BR-084](../project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md) · [GitHub #16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16)  
**Status:** Implemented (2026-06-03 — shipped **v0.6.9.13+2**, pending user verification)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `generate_rw_config_yaml` emits `task_doc_pattern` when `use_kanban: true` | BR-084 |
| RF2 | Emit `fr_br_root` when `fr-br/` exists under kanban tree (project-root-relative path) | BR-084 |
| RF3 | Reuse T12 epic/story detection; add task pattern defaults | BR-084 |
| RF4 | Mode C: no silent persist of 0-match epic/story when kanban root exists | BR-084 |
| RF5 | Integration test: fresh layout → YAML with epic match ≥1 + `task_doc_pattern` | BR-084 |
| RF6 | Update INSTALL post-kanban snippet with full kanban keys | BR-084 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | `--config` load path unchanged |
| RNF2 | Reuse `preview_pattern_matches` / `FRESH_KANBAN_*` constants |

### 1.3 Invariants and boundaries

- **In scope:** `install_release_workflow.py`, tests, install/schema docs.
- **Out of scope:** T12 epic/story prompt work (shipped); kanban fresh install layout changes; auto-pip.

---

## 2. Specification

### 2.1 Goal

After fresh kanban + RW mode C, adopters get a complete `rw-config.yaml` kanban section including `task_doc_pattern` and `fr_br_root`, with guardrails against persisting zero-match epic/story patterns.

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — installer UX; [rw-validators-consumer-layout.md](../packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md).

---

## 3. Test design

| ID | Behavior | Check |
| -- | -------- | ----- |
| T1 | `generate_rw_config_yaml` with kanban | Contains `task_doc_pattern`, `fr_br_root` when set |
| T2 | `detect_kanban_supplementary_defaults` on fresh tree | Epic score ≥1; task pattern returned |
| T3 | E2E config build + YAML parse | Keys present; epic preview ≥1 |
| T4 | `strict_zero_match` + mock input | Rejects 0-match without "use anyway" |
| T5 | INSTALL doc | Full kanban snippet includes `task_doc_pattern` |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T13 TODO → IN PROGRESS |
| 2 | `detect_kanban_supplementary_defaults`, constants, mode C wiring |
| 3 | `strict_zero_match` on epic/story prompts |
| 4 | `generate_rw_config_yaml` extended keys + warning comments |
| 5 | Tests in `test_install_release_workflow_patterns.py` + `test_install_release_workflow_rw_config.py` |
| 6 | INSTALL, README, rw-config-schema |
| **N** | COMPLETE (pending verification) + RW E06:S09:T13 --art |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `docs/implementation-cycles/IPP-E06S09T13-*.md` | CREATE |
| D3 | `install_release_workflow.py` | UPDATE |
| D5 | `INSTALL_IN_YOUR_PROJECT.md` | UPDATE |
| D6 | `rw-config-schema.md` | UPDATE |

---

## 7. Success / verification criteria

- [ ] Generated rw-config includes `task_doc_pattern` (+ `fr_br_root` when dir exists)
- [ ] Book replay / GitHub #16 verified by user

## References

- [BR-084](../project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md)
- [IPP-E06S09T12](../implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults.md)
