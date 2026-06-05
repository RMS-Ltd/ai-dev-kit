---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T13:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T16 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T16-rw-install-lowercase-fresh-kanban-patterns-br086.md`](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T16-rw-install-lowercase-fresh-kanban-patterns-br086.md) **(E06:S09:T16)**  
**Planning for:** [BR-086](../project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md) · [GitHub #17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17)  
**Status:** Approved (2026-06-04 — ready for implementation)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Mode C **detects** unpadded lowercase fresh layout (`epics/epic-{epic}/epic-{epic}.md`) and pre-fills matching epic default when glob score > 0 | BR-086, #17 |
| RF2 | Mode C **allows** persisting forward-looking `story-{story:03d}-*.md` (book T03) when only epic files exist — same escape as T14 but for **detected** 03d default, not only padded `02d` | BR-086, #17 |
| RF3 | `generate_rw_config_yaml` emits **book-aligned** task pattern: `epics/epic-{epic}/story-{story:03d}/t{task:02d}-*.md` when layout is unpadded lowercase fresh (no `*/` + capital `T` glob) | BR-086, #17 |
| RF4 | Epic/story **prompt suggestions** include unpadded + 03d book examples from `kanban_paths.py` | BR-086 |
| RF5 | Install sign-off **BR-083** accepts unpadded epic pattern (`epic-{epic}/epic-{epic}`) when on-disk tree uses `epic-1` … `epic-N` | BR-086, contract |
| RF6 | **BR-086** sign-off entry (already in contract) remains valid for lowercase + `story:03d` + `t{task}` | T16 intake |
| RF7 | Prompt **hints** explain `:02d` vs `:03d` (one-line pointer to ADR-015 / book T03 Step 4.1) | BR-086 AC |
| RF8 | Regression tests: fixture tree `epic-1/epic-1.md` only → detection, YAML, strict_zero_match story path | BR-086 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Capital-case fresh path (`Epic-*` / `Story-{story:03d}`) behaviour from T12–T14 **unchanged** |
| RNF2 | Reuse `kanban_paths.py` constants (`LEGACY_EPIC_UNPADDED_PATTERN`, `LEGACY_STORY_3DIGIT_PATTERN`, `FRESH_*_PATTERNS` tuples) — single SoT |
| RNF3 | No change to `--config` seed / non-interactive mode beyond pattern strings |

### 1.3 Invariants and boundaries

- **Invariants:** `preview_pattern_matches`, `validate_required_placeholders`, `strict_zero_match` guardrails stay; extend candidates and escape paths only.
- **In scope:** `install_release_workflow.py`, `kanban_paths.py` (if new book task constant), `github-issue-install-signoff-contract.yaml`, tests, `INSTALL_IN_YOUR_PROJECT.md`, task/BR verification notes.
- **Out of scope:** Reopening GitHub #15/#16; changing fresh kanban installer file layout; FR-097 board homogeneity backfill (separate UKW); full ADR-015 corpus migration.

---

## 2. Specification

### 2.1 Goal

After **lowercase** fresh kanban (`epic-1/epic-1.md`, no stories yet), `install_release_workflow.py --mode c` produces an `rw-config.yaml` that matches the book T03 Step 4.1 target **without manual edit**, passes automated **BR-083** sign-off when epic files use unpadded segments, and does not block adopters who enter forward-looking `story-{story:03d}-*.md`.

### 2.2 Specification mapping

| RF | Design choice |
| -- | ------------- |
| RF1 | Extend `detect_kanban_doc_patterns` epic candidates with `LEGACY_EPIC_UNPADDED_PATTERN`; score by match count (existing `_best` logic). |
| RF2 | In `prompt_pattern_with_validation`, when `strict_zero_match` and `count==0`: accept if `value == default` **or** `value` is in installer **forward-looking allowlist** (03d unpadded story pattern tied to detected epic layout). |
| RF3 | Extend `detect_kanban_supplementary_defaults` task candidates with book task pattern derived from `kanban_paths` (new `BOOK_TASK_PATTERN` or compose from LEGACY unpadded + 03d story dir). Prefer match score; fallback to book default when epic unpadded wins. |
| RF4–RF7 | Update suggestion lists, detection banner text (lowercase unpadded), sign-off BR-083 `epic_doc_pattern_contains` alternates (OR second check / relaxed substring). |
| RF8 | Temp dir fixture + unit tests mirroring T12–T14 style. |

### 2.3 Constraints

- Do not require padded `epic-01` on disk when installer emitted `epic-1`.
- Story **three-digit** convention is book/adopter default; padded `story-02` remains valid for ADR-015 write-default when segments use 2-digit policy.

### 2.4 Status transition intent

- **Current task status:** IN PROGRESS (kanban init **v0.6.9.16+1**).
- **Transition to IN PROGRESS:** Already satisfied at intake; implementation Step 1 confirms doc sync if drift.
- **Transition to COMPLETE:** ExpensesTracker or kit fixture replay + sign-off `[READY] BR-083` + `[READY] BR-086` + GitHub #17 verification comment; then `RW E06:S09:T16 --art`.
- **Atomic propagation:** Task doc + `kboard`/`fbuboard` rows in same RW Step 7 (after FR-097 homogeneity unblocks board commit).

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | ADR-015 / UXR-017 already chose lowercase + padding rules; task implements existing ladder |
| T2 | Reversibility | N | Installer/YAML revert in one PR |
| T3 | Blast radius | N | Confined to RW install + sign-off contract |
| T4 | Precedent | N | Extends UXR-017 delivery (E04:S19:T11), not new precedent |
| T5 | Constraint trade-off | N | No new trade-off beyond documented book vs ADR-015 02d default |
| T6 | Governance contract | N | Aligns sign-off with existing policy; does not change RW/UKW/IPW gates |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | `install_release_workflow.py`, contract, tests, install doc |
| E2 | No new options | Y | Implements `kanban_paths.py` + ADR-015 |
| E3 | Reversible | Y | Standard revert |
| E4 | Spec elsewhere | Y | This IPP + BR-086 AC |
| E5 | Documented NONE | Y | §5.3 below |

**§5.3 governing docs:** [ADR-015](../architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention.md); [UXR-017](../project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md); [`kanban_paths.py`](../../packages/frameworks/kanban/scripts/kanban_paths.py); [BR-086](../project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md).

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | `detect_kanban_doc_patterns` on `epic-1/epic-1.md` only | Returns `LEGACY_EPIC_UNPADDED_PATTERN` (or unpadded epic), fresh_layout true |
| T2 | `detect_kanban_supplementary_defaults` same tree | Task pattern contains `t{task:02d}` and `story-{story:03d}`; no `T{task}` or `-*/` |
| T3 | `prompt_pattern_with_validation` strict, user enters 03d story pattern, epic-only tree | Accepts pattern (no infinite loop / no hard block) |
| T4 | `generate_rw_config_yaml` from mode C config dict | YAML matches book T03 excerpt for epic/story/task |
| T5 | `install_github_issue_signoff.py` on generated config | `[READY] BR-083` and `[READY] BR-086` |
| T6 | Capital-case fixture `Epic-1/Epic-1.md` | Still selects legacy capital or padded lowercase per T12 behaviour (regression) |
| T7 | `validate_required_placeholders` | `{story:03d}` satisfies `{story}` (regression from T14) |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | Confirm task **E06:S09:T16** status **IN PROGRESS**; update `Last updated` if implementation session starts after drift. |
| 2 | **`kanban_paths.py`:** Add `BOOK_TASK_PATTERN` (unpadded epic + `story-{story:03d}/t{task:02d}-*.md`); export in `FRESH_TASK_PATTERNS` / document in module docstring. |
| 3 | **`install_release_workflow.py`:** Import unpadded/03d constants; wire `detect_kanban_doc_patterns` / `detect_kanban_supplementary_defaults` to `FRESH_*_PATTERNS` tuples; fix fresh-layout detection message for lowercase. |
| 4 | **`prompt_pattern_with_validation`:** Forward-looking allowlist for 03d story pattern when epic unpadded detected; extend `strict_zero_match` escape beyond padded default only. |
| 5 | **Prompt UX:** Print one-line hint after story default (`:03d` = book story files; `:02d` = ADR-015 segment padding). |
| 6 | **`github-issue-install-signoff-contract.yaml`:** BR-083 `epic_doc_pattern_contains_any`; BR-084 `task_doc_pattern_contains_any` (`T{task` / `t{task`); BR-086 `epic_doc_pattern_contains_any` for book `02d` + unpadded epic. |
| 7 | **Tests:** `tests/test_install_release_workflow_patterns.py` + `tests/test_install_release_workflow_rw_config.py` — unpadded epic-only fixture. |
| 8 | **Docs:** `INSTALL_IN_YOUR_PROJECT.md` post-kanban snippet — book T03 aligned lowercase example; cross-link BR-086. |
| 9 | **Verification:** ExpensesTracker T03 replay on `main` submodule; comment/close #17 when AC met. |
| **N** | Reconcile task status: if AC satisfied → **COMPLETE** + `✅ COMPLETE (v{x})`; update BR-086; RW Step 7 four-surface; run **`RW E06:S09:T16 --art`**. |

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Scope | Tied to |
| ------ | ---- | ------ | ----- | ------- |
| D1 | `docs/implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md` | CREATE | This plan | IPW |
| D2 | `docs/project-management/kanban/epics/.../T16-*.md` | UPDATE | IPP link; AC checkboxes on verify | Phase 8 |
| D3 | `docs/project-management/kanban/fr-br/BR-086-*.md` | UPDATE | Status on fix | RF1–RF8 |
| D4 | `packages/frameworks/kanban/scripts/kanban_paths.py` | UPDATE | Book task constant | RF3 |
| D5 | `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` | UPDATE | Detection, prompts, YAML | RF1–RF4, RF7 |
| D6 | `packages/frameworks/workflow-mgt/config/github-issue-install-signoff-contract.yaml` | UPDATE | BR-083 check | RF5 |
| D7 | `packages/frameworks/workflow-mgt/docs/INSTALL_IN_YOUR_PROJECT.md` (or kit install doc path) | UPDATE | Lowercase example | RF7 |
| D8 | `tests/test_install_release_workflow_*.py` | UPDATE | Fixtures | T1–T7 |
| D9 | `docs/project-management/kanban/kboard.md` | UPDATE | T16 row (pending FR-097) | Step N |
| D10 | `docs/project-management/kanban/kboard.md` | UPDATE | BR-086 row | Step N |
| D11 | ADR | NONE | EXEMPT — ADR-015 / UXR-017 govern | §2.5 |

---

## 6. Documentation housing

| Doc ID | Target path | Publication | Lifecycle | Inbound links |
| ------ | ----------- | ----------- | --------- | ------------- |
| D1 | `docs/implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md` | NOT_APPLICABLE | evergreen | T16 Input/References |
| D5 | `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` | NOT_APPLICABLE | n/a | Framework README |
| D7 | `packages/frameworks/workflow-mgt/docs/INSTALL_IN_YOUR_PROJECT.md` | PUBLISHED (portal if in nav) | evergreen | T16, BR-086 |
| D9–D10 | kanban boards | NOT_APPLICABLE | evergreen | RW Step 7 |

**Publication N/A Reason (D1, D5, D6):** Internal planning / framework scripts — not Docusaurus consumer pages per BR-066.

---

## 7. Success / verification criteria

- [ ] Fresh lowercase kanban → RW mode C → epic pattern matches without manual edit
- [ ] User can persist `story-{story:03d}-*.md` before any story file exists
- [ ] Generated `task_doc_pattern` uses lowercase `t{task:02d}` and book path layout
- [ ] `install_github_issue_signoff.py` reports `[READY] BR-083` with unpadded epic config
- [ ] `install_github_issue_signoff.py` reports `[READY] BR-086`
- [ ] GitHub #17 closed after adopter replay on `main`
- [ ] IPW package linked from task doc (this file)

---

## References

- [BR-086](../project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)
- [BR-083](../project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) · [BR-084](../project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md) · [BR-085](../project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md)
- [UXR-017](../project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md)
- [IPP-E06S09T13](./IPP-E06S09T13-br084-rw-config-generation.md) · [IPP-E06S09T12](./IPP-E06S09T12-br083-rw-install-pattern-defaults.md)
- [kanban_paths.py](../../packages/frameworks/kanban/scripts/kanban_paths.py)
- [GitHub #17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17)
