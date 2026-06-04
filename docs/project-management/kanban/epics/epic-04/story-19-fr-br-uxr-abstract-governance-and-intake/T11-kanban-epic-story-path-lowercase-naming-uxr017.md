---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 11: Kanban epic/story path lowercase naming (UXR-017)

**Task ID:** E04:S19:T11  
**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Estimated Effort:** Large (cross-cutting migration)  
**Created:** 2026-06-04  
**Last updated:** 2026-06-04  
**Version:** v0.4.19.11+1 (SemVer v0.4.867+1)  
**Code:** E04S19T11  

**Publication Status:** NOT_APPLICABLE

**Upstream:** [UXR-017 — Kanban Epic/Story Path Lowercase Naming](../../../fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md)  
**Planning package:** [IPP-E04S19T11](../../../../implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming.md)

---

## Scope

Establish and implement lowercase **2-digit-padded** path segments (`epic-04/`, `story-19-…`, `T01-…`; **3-digit** when segment ID > 99) for the kanban tree, replacing capitalised `Epic-` / `Story-` segments and legacy 3-digit story dirs (`story-019-`) in framework defaults, install output, governance policy, and the ai-dev-kit corpus.

**Trigger context:** User installing ADK on **Expenses Tracker** observed capitalised epic/story dirs and files under `kanban/` as inconsistent with expected lowercase structural tokens.

---

## Input

- [IPP-E04S19T11](../../../../implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming.md)
- [UXR-017](../../../fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md) findings and acceptance criteria
- Framework scripts: `migrate_structure.py`, `task_creator.py`, `validate_installation.py`
- RW install pattern detection ([BR-083](../../../fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) / E06:S09:T12)
- Completed [UXR-011](../../../fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md) (task `Txx` only)

---

## Deliverable

- Normative lowercase path policy in kanban governance + `rw-config` schema
- Framework templates and install/migrate scripts emitting lowercase paths by default
- Transition rules (read-tolerance for legacy `Epic-/Story-`, migration mapping)
- Validator warnings/errors for capitalised epic/story segments (phased)
- Adopter verification notes (Expenses Tracker replay)
- **Installer normalization** — packaged templates + post-install sign-off aligned with ADR-015 (see below)

---

## Installer normalization and GitHub Issue sign-off

**Purpose:** Keep the **AI Dev Kit installer** (kanban + RW) aligned with lowercase padded path conventions and avoid **orphaned** upstream GitHub Issues that wait for adopter install proof.

**Delivered in this task (pre-RW):**

- Framework **template pack** migrated (`packages/frameworks/kanban/templates/` → `epic-NN/`, `story-NN-…`, `TNN-…`)
- **Sign-off contract:** `packages/frameworks/workflow-mgt/config/github-issue-install-signoff-contract.yaml`
- **Evaluator:** `install_github_issue_signoff.py` — report by default; `--close-github-issues` only with explicit flag + `gh` auth
- **Installer hooks:** end of `install_kanban_framework.py` and `install_release_workflow.py` print contract-driven READY / NOT READY
- **Docs:** [github-issue-install-signoff.md](../../../../documentation/user-docs/github-issue-install-signoff.md), [adk-install-expenses-tracker-fresh-repo.md](../../../../guides/adk-install-expenses-tracker-fresh-repo.md)

**Follow-up when GitHub Issues are closed**

After maintainer or adopter replay closes install-blocking issues on **RMS-Ltd/ai-dev-kit** (e.g. [#12](https://github.com/RMS-Ltd/ai-dev-kit/issues/12)–[#16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16) via `--close-github-issues` or manual close):

1. **Normalize the contract** — set resolved entries to `status: closed` or remove from active `issues:` list; keep history in BR/UXR docs.
2. **Remove label drift** — ensure `awaiting-adopter-signoff` is cleared on closed issues (orphan scan should return zero).
3. **Re-run sign-off on ai-dev-kit** — `install_github_issue_signoff.py --project-root .` should not report READY for closed issue numbers unless checks are re-opened intentionally.
4. **Optional:** add UXR-017 GitHub issue number to contract when filed (currently `number: null`).

**Note:** Closing issues on the **kit repo** does not replace **Expenses Tracker AC5** evidence on the adopter repo; record ET `signoff-report.json` separately below.

---

## Acceptance Criteria

- [x] **AC1:** Governance + schema document lowercase `epic-*` / `story-*` as write-default (UXR-017 AC1–AC3).
- [x] **AC2:** Fresh install / canonical adoption scripts emit lowercase paths without manual rename (UXR-017 AC2).
- [x] **AC3:** RW install detection prefers lowercase; legacy patterns tolerated per transition doc (UXR-017 AC3).
- [x] **AC4:** ai-dev-kit kanban tree migrated; `rw-config.yaml` lowercase padded patterns (UXR-017 AC4).
- [x] **AC4b:** Packaged kanban templates + install sign-off contract/hooks (installer normalization; see section above).
- [ ] **AC5:** Adopter replay documented (Expenses Tracker checklist below) (UXR-017 AC5).
- [ ] **AC5b:** Upstream GH install issues closed or contract updated after close (installer normalization follow-up).
- [x] **AC6:** UXR-017 ↔ T11 wiring; boards updated on RW Step 7 (this RW).

---

## Dependencies

**Coordinates with:** UXR-011 (task filenames), UXR-014 (inline E:S:T padding), UXR-008 (board filenames), E06:S09:T12 (RW install pattern defaults).

**Blocked by:** IPW / explicit user implementation authorization (P-IPW-GATE).

---

## Expenses Tracker verification (AC5)

**Context (2026-06-04):** Fresh blank GitHub repo; prior local Expenses Tracker clone removed. Re-verify from clean install.

Guide: [adk-install-expenses-tracker-fresh-repo.md](../../../../guides/adk-install-expenses-tracker-fresh-repo.md)

After ADK kanban install on **Expenses Tracker**:

- [x] Packaged templates emit lowercase padded paths (ai-dev-kit `packages/frameworks/kanban/templates/` — `epic-04/`, `story-19-…`, `T11-…`)
- [ ] `docs/project-management/kanban/epics/epic-*/epic-*.md` layout (no `Epic-*` / `Story-*` path segments)
- [ ] `rw-config.yaml` uses lowercase padded patterns (`epic-{epic:02d}`, `story-{story:02d}`, `T{task:02d}`)
- [ ] `validate_kanban_naming.py --strict` passes on installed tree
- [ ] `validate_rw_task_intent.py` resolves a sample task doc under lowercase paths

Record evidence (`ls` of first epic dir + rw-config snippet) in this section when verified.

---

## Links

- [IPP-E04S19T11](../../../../implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming.md)
- [ADR-015](../../../../architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention.md)
- [epic-story-path-migration-guide](../../../../architecture/standards-and-adrs/epic-story-path-migration-guide.md)
- [UXR-017](../../../fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md)
- [github-issue-install-signoff.md](../../../../documentation/user-docs/github-issue-install-signoff.md)
- [Story 019](../story-19-fr-br-uxr-abstract-governance-and-intake.md)
- [Epic 4](../epic-04.md)
