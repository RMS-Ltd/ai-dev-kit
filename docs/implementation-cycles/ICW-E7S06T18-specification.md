---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW E7:S06:T18 — Specification (UXR-007)

**Host task:** E7:S06:T18 — Interactive installer Kanban pattern prompt clarity  
**UXR:** [UXR-007](../project-management/kanban/fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity.md)  
**Release anchor:** `v0.7.6.18+1`

---

## 1. Goal

Make interactive installer Kanban prompts self-explanatory, enforce placeholder-safe pattern input, and produce consistent end-to-end install-state messaging across chained installer runs.

## 2. Functional requirements

- **F1:** Epic pattern input must require `{epic}` and reject literal one-epic paths (for example `Epic-01/Epic-01.md`).
- **F2:** Story pattern input must require both `{epic}` and `{story}`.
- **F3:** Prompt copy must explain paths are relative to selected `kanban_root`, with concrete examples.
- **F4:** Installer must provide immediate match-preview feedback (match count and sample matches) for pattern-based inputs.
- **F5:** When pattern validation fails, installer must emit remediation with nearest valid examples derived from discovered files.
- **F6:** Kanban root selected during RW install config must be reused by Kanban framework installation flow unless explicitly overridden.
- **F7:** End-of-run output for chained installs must expose one canonical outcome (`SUCCESS`, `PARTIAL`, `FAILED`, `CANCELLED`) instead of mixed completion signals.
- **F8:** If `.cursorrules` already contains RW trigger section, installer must provide guided reconciliation (clear next action, optional diff path).

## 3. Non-functional requirements

- **N1:** Validation feedback should be fast enough for interactive use (no noticeable pause on typical repo sizes).
- **N2:** New validation must be deterministic and avoid false acceptance of malformed templates.
- **N3:** UX messaging must be consistent across dry-run and real execution paths.
- **N4:** Changes must preserve backward compatibility for non-Kanban modes (`A`/`B`) and explicit `--kanban-path` usage.

## 4. Out of scope

- Full redesign of installer architecture or replacing existing CLI scripts.
- Refactoring every workflow installer to a single shared engine in this task.
- Auto-fixing malformed external `release-workflow.yaml` files beyond reporting and state clarity.

## 5. Status transition intent (FR-077)

- First non-planning implementation commit for this task should move status `TODO -> IN PROGRESS`.
- Move `IN PROGRESS -> COMPLETE` only after acceptance evidence is captured in task/UXR references.

---

## 6. Success / verification criteria (planning)

- [x] Epic/story pattern prompts reject non-templated inputs with clear remediation — **implemented** in [`install_release_workflow.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/install_release_workflow.py) via `prompt_pattern_with_validation` / `validate_required_placeholders`.
- [x] Users get immediate match feedback and alternatives before config is written — **implemented** via `preview_pattern_matches`, sample output, zero-match suggestions, and optional “Use this pattern anyway?”.
- [x] Chained installer flows validate the intended kanban root, not default-only paths — **implemented** via `load_rw_kanban_root` / adoption of `rw-config.yaml` `kanban_root` in Kanban installer ([`install_kanban_framework.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py)).
- [x] End-of-run state is unambiguous (`SUCCESS`/`PARTIAL`/`FAILED`/`CANCELLED`) — **implemented**: RW installer emits `Final status: SUCCESS|PARTIAL`; Kanban installer returns canonical status tuple and prints final status lines.
- [x] `T18` and `UXR-007` include cross-linked implementation evidence — **implemented** via task doc, UXR links, and this retrospective planning package.

## 7. As-delivered verification (`v0.7.6.18+1`)

Evidence is **repository-based** (code + tests); end-user verification in arbitrary consumer repos is out of scope for this subsection.

| Id | Requirement | As-delivered note |
| -- | ----------- | ----------------- |
| F1–F5 | Prompts + preview | `prompt_pattern_with_validation`, `preview_pattern_matches`, remediation strings and suggestion lists in RW installer ([`install_release_workflow.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/install_release_workflow.py)). |
| F6 | Root propagation | `load_rw_kanban_root` and messaging when Kanban path is sourced from `rw-config.yaml` ([`install_kanban_framework.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py)). |
| F7 | Canonical final status | RW installer: `Final status: SUCCESS` / `PARTIAL` from `install_warnings`; Kanban installer aggregates `SUCCESS`/`PARTIAL`/`CANCELLED`. |
| F8 | Existing `.cursorrules` | **Partial:** duplicate RW trigger detected → skip append, print reconciliation message, add warning → **PARTIAL** outcome. Optional diff artifact path was **not** implemented; manual review remains. |

Regression tests added for placeholder validation and preview globbing: [`tests/test_install_release_workflow_patterns.py`](../../tests/test_install_release_workflow_patterns.py).
