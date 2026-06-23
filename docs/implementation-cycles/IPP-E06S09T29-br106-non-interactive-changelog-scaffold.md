---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T29 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T29-rw-install-non-interactive-changelog-prompt-br106.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T29-rw-install-non-interactive-changelog-prompt-br106.md) **(E06:S09:T29)**  
**Planning for:** [BR-106](../kanban/fbu/BR-106-rw-install-non-interactive-changelog-prompt-eof.md) · triage **F19**  
**Status:** Approved (2026-06-10 — ready for implementation)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `--non-interactive` RW install must not call `input()` / `prompt_yes_no` for CHANGELOG scaffold | BR-106, F19 |
| RF2 | Same for `version_file` scaffold (regression guard — same wiring bug) | BR-106, attempt 04/05 |
| RF3 | Non-interactive path auto-creates minimal `CHANGELOG.md` stub when missing (deterministic default) | BR-106 expected |
| RF4 | Existing files are never overwritten | T19 RNF1 |
| RF5 | Emit `ADK-I03.E12` when `version_file` cannot be created unattended (decline / blocking) | FR-108, existing contract |
| RF6 | `INSTALL_IN_YOUR_PROJECT.md` documents non-interactive scaffold behaviour | T29 AC |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Minimal diff — fix `interactive=` wiring in `main()`; reuse existing scaffold helpers |
| RNF2 | Greenfield install mirror synced per FR-110 |
| RNF3 | No new ADR — extends T19 / BR-088 pattern |

### 1.3 Root cause

`main()` passes `interactive=not bool(args.config)` to `ensure_version_file_scaffold` and `ensure_main_changelog_scaffold`. `--non-interactive` without `--config` leaves `interactive=True`, causing EOFError on stdin.

**Fix:** derive scaffold interactivity from `args.non_interactive`, locale tag, or pre-supplied `--config` (same signals as config collection).

---

## 2. Specification

### 2.1 Goal

`install_release_workflow.py --mode a|c --non-interactive` on a clean project root completes scaffold steps without stdin prompts; missing `CHANGELOG.md` and `version_file` are created with deterministic stubs.

### 2.2 Design

Introduce `scaffold_interactive` boolean in `main()`:

```python
scaffold_interactive = not (
    args.non_interactive or bool(_locale_tag) or bool(args.config)
)
```

Pass `interactive=scaffold_interactive` to both scaffold calls (live + dry-run paths).

Scaffold helpers already default `create=True` when `interactive=False` — no helper signature change required.

### 2.3 ADR necessity decision

**Outcome:** `EXEMPT` — bug fix extending BR-088 / T19 scaffold contract.

---

## 3. Test design

| ID | Behavior | Expected |
| -- | -------- | -------- |
| T1 | `ensure_main_changelog_scaffold(..., interactive=False)` on empty dir | Creates `CHANGELOG.md` (existing) |
| T2 | `ensure_version_file_scaffold(..., interactive=False)` on empty dir | Creates version file (existing) |
| T3 | CLI `main()` with `--non-interactive --mode c` in temp dir, stdin mocked to raise EOF | Exit without EOFError; `CHANGELOG.md` created |
| T4 | CLI `main()` with `--non-interactive --mode c` in temp dir | `version_file` created without prompt |

File: extend `tests/test_install_release_workflow_changelog_scaffold.py` and add `tests/test_install_release_workflow_non_interactive_scaffold.py` (or combined module).

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | Transition task **E06:S09:T29** status **TODO → IN PROGRESS**; update `Last updated`. |
| 2 | Add `scaffold_interactive` in `install_release_workflow.py` `main()`; wire both scaffold call sites. |
| 3 | Add integration tests T3–T4 (mock stdin EOF; assert files created). |
| 4 | `python scripts/sync_greenfield_install.py` — mirror installer to `greenfield-install/`. |
| 5 | Update `INSTALL_IN_YOUR_PROJECT.md` — non-interactive auto-scaffold note. |
| 6 | Run targeted pytest on scaffold + non-interactive tests. |
| **N** | Reconcile task status → **COMPLETE** if AC met; update BR-106; RW Step 7; **`RW E06:S09:T29 --art`**. |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `docs/implementation-cycles/IPP-E06S09T29-*.md` | CREATE |
| D2 | `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` | UPDATE |
| D3 | `greenfield-install/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` | UPDATE (FR-110) |
| D4 | `tests/test_install_release_workflow_non_interactive_scaffold.py` | CREATE |
| D5 | `INSTALL_IN_YOUR_PROJECT.md` | UPDATE |
| D6 | `docs/kanban/fbu/BR-106-*.md` | UPDATE on fix |

---

## 6. Documentation housing

| Doc ID | Target | Publication |
| ------ | ------ | ----------- |
| D1 | `docs/implementation-cycles/` | NOT_APPLICABLE |
| D5 | repo-root install doc | PUBLISHED (adopter) |

---

## 7. Success / verification criteria

- [ ] `--non-interactive` mode C on empty tree creates `CHANGELOG.md` without EOF
- [ ] Same path creates `version_file` without EOF
- [ ] Pytest T1–T4 pass
- [ ] Greenfield mirror synced
- [ ] BR-106 status updated after RW
