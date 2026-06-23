---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow initiation cheatsheet

**Last verified against:** 2026-06-10 (`.cursorrules`, `.claude/commands/rw.md`, `ukw.md`, `ipw.md`, `idw.md`, `mwf.md`; MWF `delivery` recipe; IDW `--rw` chain; FR-124; FR-085 `UKW --rp` / ADR-009; FR-102 `UKW -c` / ADR-010; BR-067 `RW -d --dpz`; UXR-022; UXR-024 local-default RW)

> **Agent source of truth:** If this cheatsheet and [`.cursorrules` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules) or [`.claude/commands/` (source)](https://github.com/RMS-Ltd/ai-dev-kit/tree/main/.claude/commands) diverge, **`.cursorrules` wins** for agent behavior. This page is a human quick-reference for *which command to type* — not full execution steps.

**Task:** [E02:S16:T15](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md) · [UXR-015](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/UXR-015-workflow-initiation-cheatsheet.md) · [E02:S16:T19](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md) · [UXR-022](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/UXR-022-rw-doc-policy-zero-short-flag-dpz.md) · [E02:S16:T21](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T21-rw-local-release-default-no-push-uxr024.md) · [UXR-024](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/UXR-024-rw-local-release-default-no-push-batch-operator-push.md)

---

## 1. Quick decision tree

| I want to… | Type |
| ---------- | ---- |
| Release completed work | `RW E02:S16:T15` (full), `RW -d E02:S16:T15` (docs-only), or `RW -k E02:S16:T15` (kanban-init) |
| Plan before implementing | `IPW E02:S16:T15` (**plan mode first**) or `/ipw E02:S16:T15` |
| Implement from IPP | `IDW E02:S16:T15` or `/idw E02:S16:T15` (implementation mode; linked IPP required) |
| Full pipeline (plan → implement → release) | `MWF E02:S16:T15 delivery` — orchestrates IPW → IDW `--rw` (continuous; sub-agent legs) |
| Implement + release (chain) | `IDW E02:S16:T15 --rw` — local-complete RW after `IDW COMPLETE` |
| Sync all kanban docs (global) | `UKW` then `RW` |
| Clear completed rows from active boards (archive to completed ledgers) | `UKW -c` then `RW` |
| Fix suspected kanban drift (specific) | `UKW -ad <targets>` then `RW` — **planned** (not yet in `.cursorrules`) |
| Maintain changelog size/order | `CMW` then `RW` |
| Bump package versions | `PVW` (or automatic at RW Step 2.5) |
| Reduce Cursor terminal approval friction | See [IDE whitelist guide](../developer-tools/ide-whitelist-guide.md) (pattern catalog + validator; [E06:S07:T107](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md)) |

**Examples use padded E/S/T** ([UXR-014](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/UXR-014-two-digit-est-identifier-default-formatting.md)): `E02:S16:T15`, compact `E02S16T15`.

---

## 2. Release Workflow (RW)

| Invocation | Meaning |
| ---------- | ------- |
| `RW E02:S16:T15` / `/rw E02:S16:T15` | **Local-complete release** (version, changelog, kanban, commit, tag) — **no push** ([UXR-024](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/UXR-024-rw-local-release-default-no-push-batch-operator-push.md)) |
| `RW E02:S16:T15 --push` | Full release **with** Step 12 push + Step 12.5 GitHub Release |
| `RW -d E02:S16:T15` | **Docs-only release** (documentation path; not kanban drift repair). On an **existing** E:S:T use `--art` and optionally `--dpz` (`--doc-policy-zero` alias; BUILD +0 policy; see [BR-067](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)) |
| `RW -k E02:S16:T15` | Kanban-init release (local-default; add `--push` for immediate remote) |
| `… --art` | Adopt requested E:S:T as canonical version anchor |
| `… --dpz` | BUILD +0 only when **you** typed it, HEAD BUILD is **untagged**, and BUILD=0 doc-init path (alias: `--doc-policy-zero`; [BR-067](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)) |
| `… --push` | Opt-in Step 12 + 12.5 (remote push + GitHub Release) — **you must type it** |
| `… --confirmed-override` | Step 1d intent override (after explicit user confirmation) |

**Same-task follow-on release (BR-097):** Default is **BUILD +1** (`RW E02:S16:T15 --art`). Never reuse a tagged BUILD; never `git tag -f` on release tags — bump BUILD and re-RW instead.

**CQG ≠ CI ship gate:** Local CodeQL (CQG at IDW Phase 6b) and GitHub CodeQL workflows do **not** replace **Tests**, **Docusaurus**, or **Greenfield install**. RW Step **9.7** (`validate_actions_ci_parity.py`) is the release ship gate for workflow checks ([BR-104](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md)).

**Operator batch push (after local RW runs):** Run local parity **and** remote no-red-ship check on the commit(s) you are about to publish, then push branch once and each pending release tag explicitly — never `git push origin {branch} --tags`.

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_actions_ci_parity.py" --strict --all
python "packages/frameworks/workflow-mgt/scripts/validation/validate_github_actions_remote.py" --strict --branch "$(git branch --show-current)"
git push origin "$(git branch --show-current)"
git push origin refs/tags/v{internal_version}   # repeat per local RW not yet pushed
# task-touch mode: also git push origin refs/tags/v{semver_core}
```

Or per release: `python packages/frameworks/workflow-mgt/scripts/version/push_rw_release.py --branch "{branch}" --internal-version "{internal_version}"`. Sync remote tags first: `git fetch origin --tags --force`.

**Step 12 (`--push` only):** Same rules — never `--tags`; use `push_rw_release.py` or `refs/tags/v{release}`.

| | |
| --- | --- |
| **Prerequisites** | Tool/bash access; on correct epic branch; task token in message |
| **Blocking gates (before edits)** | Step 1 branch safety → 1b task token → 1c task complete → 1d task intent |
| **Blocking gates (before commit)** | Step **9.7** Actions CI parity (`validate_actions_ci_parity.py --strict`; use `--allow-path-skip` only for `RW -d` docs-only) |
| **Handoff** | Commits + local tags via RW; **never push by default**; **push** only after Step 9.7 `--strict --all` **and** `validate_github_actions_remote.py --strict` pass |
| **Completion** | `RW COMPLETE (local)` default · `RW COMPLETE (pushed)` when `--push` used |
| **Blocked session** | `RW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.` |

**Deep dive:** [`.claude/commands/rw.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/rw.md) · [Release Workflow agent execution guide](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)

---

## 3. Update Kanban Workflow (UKW)

| Invocation | Meaning |
| ---------- | ------- |
| `UKW` / `/ukw` | **Comprehensive** — bookkeeping + priorities + gap discovery (Step 2.5); Step 6 **Part B.1** enumerates all open story-checklist tasks onto MoSCOW ([BR-059](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/BR-059-ukw-moscow-incomplete-story-task-coverage.md)) |
| `UKW -u` | Bookkeeping only (no MoSCOW reprioritization; no Step 2.5) |
| `UKW -p` | Update MoSCOW priorities only |
| `UKW -a E02:S16:T15` | Assign priorities to target(s) only — **not** drift repair |
| `UKW -u -p`, `UKW -u -a <target>`, etc. | Combined sub-workflows per flag matrix |
| `UKW -ad <targets>` | **Address Drift** — targeted project-state kanban reconciliation — **planned** |
| `UKW --rp` | **Deep reprioritization** (standalone) — intent/dependency/blocker/impact analysis on kboard + fbuboard; emits rationale ([ADR-009](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md)). **Not** combinable with `-u`, `-p`, or `-a` |
| `UKW -c` | **Archive completed** (standalone) — upsert `.adk/kanban-completed.db` via `append_kanban_completed.py`, refresh `kanban-completed.pdf`, append [intake-completed.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/intake-completed.md), then remove terminal MoSCOW rows ([ADR-010](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md), [FR-134](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/FR-134-kanban-completed-sqlite-ledger-pdf-report.md)). **Not** combinable with `-u`, `-p`, `-a`, or `--rp` |

**Flag disambiguation (easy to confuse):**

| Flag | Workflow | Meaning |
| ---- | -------- | ------- |
| `-d` | **RW** | Docs-only **release** |
| `--dpz` | **RW** | **D**oc-**p**olicy-**z**ero — explicit BUILD +0 override (alias: `--doc-policy-zero`) |
| `--push` | **RW** | Opt-in Step 12 + 12.5 (remote push + GitHub Release); default RW is local-only ([UXR-024](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/UXR-024-rw-local-release-default-no-push-batch-operator-push.md)) |
| `-a` | **UKW** | Assign **priorities** to targets |
| `-ad` | **UKW** (planned) | **Address** kanban **d**rift vs project state |
| `--rp` | **UKW** | **RePrioritise** — standalone deep MoSCOW reorder (not `RW -d`, not `UKW -a`; distinct from `UKW -p`) |
| `-c` | **UKW** | **Archive completed** — move terminal rows to completed ledgers (not `RW -d`, not `UKW -a`) |
| `--rw` | **IDW** | Chain **local-complete RW** after `IDW COMPLETE` (lowercase; not an RW flag) |
| `--push` / `--art` | **MWF** | Forward to IDW `--rw` leg when using `MWF E:S:T delivery` |

**`-a` target syntax:** single task `E02:S16:T15`; multiple `E02:S16:T13,E02:S16:T14`; range `E02:S16:T13-E02:S16:T15`; story `E02:S16`; epic `E02`; all unprioritized `all` or `*`.

| | |
| --- | --- |
| **Prerequisites** | Tool/bash access |
| **Handoff** | UKW stages kanban files; you run **`RW`** to commit (attributes perpetual UKW task) |
| **Blocked session** | `UKW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.` |

**Deep dive:** [`.claude/commands/ukw.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ukw.md) · [Update Kanban Workflow agent execution guide](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)

---

## 4. Implementation Planning Workflow (IPW) / ICW

| Invocation | Meaning |
| ---------- | ------- |
| `IPW E02:S16:T15` / `/ipw E02:S16:T15` | Implementation planning for host task (Claude Code) |
| `IPW E02:S16:T15 --skip-tests` | Skip test-design section (doc-only tasks; justification required in IPP) |
| `ICW E02:S16:T15` | Cursor legacy alias — same planning contract as IPW |

| | |
| --- | --- |
| **Prerequisites** | **Plan mode required** (Cursor `/plan` or Claude plan session); tool access |
| **Handoff** | Produces `docs/implementation-cycles/IPP-E…S…T…-*.md` (or ICW trio); link from task; then **`IDW E02:S16:T15`** (or `implement`) — **IPW does not chain to IDW/RW by default** |
| **Planning package** | [IPP-E2S16T15-workflow-initiation-cheatsheet.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md) (example) |
| **Blocked (plan mode)** | `IPW BLOCKED: plan mode required. Type /plan to enter plan mode, then invoke /ipw again from within the plan session.` |
| **Blocked (tools)** | `IPW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.` |

**Deep dive:** [`.claude/commands/ipw.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ipw.md) · [FR-042](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/FR-042-implementation-planning-workflow-ipw.md)

---

## 4b. Implementation Delivery Workflow (IDW)

| Invocation | Meaning |
| ---------- | ------- |
| `IDW E02:S16:T15` / `/idw E02:S16:T15` | Execute linked IPP for host task (tests, code, docs, status reconciliation) |
| `IDW E02:S16:T15 --rw` | IDW then **local-complete** `RW` for same task |
| `IDW E02:S16:T15 --rw --push` | IDW then RW with Step 12 push + 12.5 GitHub Release |
| `IDW E02:S16:T15 --rw --art` | IDW then RW with `--art` version adoption |

| | |
| --- | --- |
| **Prerequisites** | **Implementation mode** (not plan mode); tool access; linked IPP/ICW on task; branch safety gate |
| **Authorization** | Invoking **`IDW E:S:T`** satisfies FR-083 implementation gate (no separate `implement` required) |
| **Blocking gate (Phase 6b)** | **CQG** (`validate_code_quality_gate.py --strict`) when Python in scope; `--skip` for docs-only ([ADR-022](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md) v0.0.2) |
| **Handoff** | **`IDW COMPLETE`** → `RW E02:S16:T15` when not using `--rw`; or automatic RW when `--rw` |
| **Blocked (plan mode)** | `IDW BLOCKED: plan mode is active. Exit plan mode, then invoke /idw again.` |
| **Blocked (tools)** | `IDW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.` |

**Flags:** lowercase long form (`--rw`, `--push`, `--art`). `--push` requires `--rw`.

**Deep dive:** [`.claude/commands/idw.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/idw.md) · [implementation-delivery-workflow-agent-execution.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-delivery-workflow-agent-execution.md)

---

## 4c. Meta-Workflow (MWF)

| Invocation | Meaning |
| ---------- | ------- |
| `MWF E02:S03:T09 delivery` / `/mwf E02:S03:T09 delivery` | Full pipeline: IPW (if no IPP) → IDW `--rw` (continuous; sub-agent legs per BR-102) |
| `MWF E02:S03:T09 ipw,idw,rw` | Alias for `delivery` |
| `MWF E02:S03:T09 delivery --art` | Forward `--art` to IDW `--rw` leg |
| `MWF E02:S03:T09 delivery --push` | Forward `--push` to IDW `--rw` leg |

| | |
| --- | --- |
| **Prerequisites** | Tool access; parseable `E:S:T` and recipe |
| **Orchestration** | MWF delegates legs via sub-agent or inline command guide — **no** operator mode-switch handoff ([BR-102](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md)) |
| **Resume** | When IPP already linked on task, skip IPW; run IDW `--rw` only |
| **vs IDW `--rw`** | **MWF** = multi-leg (IPW→IDW→RW); **IDW `--rw`** = two-leg (impl→RW) |
| **Blocked (tools)** | `MWF BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.` |

**Deep dive:** [`.claude/commands/mwf.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/mwf.md) · [workflow-encapsulation-contract.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-encapsulation-contract.md) · [meta-workflow-agent-execution.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md) · [FR-124](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/FR-124-meta-workflow-orchestration-composite-workflow-chains.md)

---

## 5. Changelog Management Workflow (CMW)

| Invocation | Meaning |
| ---------- | ------- |
| `CMW` | Manual changelog archive, ordering, and hygiene |
| (automatic) | RW Step 9.5 when `check_changelog_size.py` threshold exceeded (non-blocking) |

| | |
| --- | --- |
| **Prerequisites** | Tool access for manual runs |
| **Handoff** | **`CMW` then `RW`** — attributes perpetual CMW task |
| **Deep dive** | `.cursorrules` CMW section · [FR-057](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/FR-057-update-changelog-workflow.md) |

---

## 6. Package Version Workflow (PVW)

| Invocation | Meaning |
| ---------- | ------- |
| `PVW` | Manual package version bumps |
| (automatic) | RW Step 2.5 after project version bump |

| | |
| --- | --- |
| **Prerequisites** | Tool access for manual runs |
| **Handoff** | Feeds into RW changelog (Step 3); usually part of full **`RW`** |
| **Deep dive** | `.cursorrules` PVW section |

---

## 7. Common sequences

| Sequence | When |
| -------- | ---- |
| `MWF E02:S16:T15 delivery` | **Preferred** full pipeline (IPW → IDW → RW); no manual mode-switch between legs |
| `IPW E02:S16:T15` → `IDW E02:S16:T15` → `RW E02:S16:T15` | New work with planning gate (manual three-step) |
| `IPW E02:S16:T15` → `IDW E02:S16:T15 --rw` | Plan, implement, local release (manual; IDW chains RW) |
| `MWF E02:S16:T15 delivery` (IPP exists) | Resume: IDW `--rw` only (skips IPW leg) |
| `UKW` → `RW` | Global kanban sync then commit |
| `CMW` → `RW` | Changelog maintenance then commit |
| `UKW -ad kboard,fbuboard` → `RW` | Targeted drift repair (**planned**) |
| `UKW --rp` → `RW` | Periodic priority realignment then commit (perpetual UKW task attribution) |

**UKW → RW / CMW → RW context:** RW Step 2 detects prior workflow and attributes BUILD to the wired perpetual task (UKW or CMW).

---

## 8. Canonical deep links

| Resource | Path |
| -------- | ---- |
| Agent trigger spec (SoT) | [`.cursorrules` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules) |
| RW slash command | [`.claude/commands/rw.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/rw.md) |
| UKW slash command | [`.claude/commands/ukw.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ukw.md) |
| IPW slash command | [`.claude/commands/ipw.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ipw.md) |
| IDW slash command | [`.claude/commands/idw.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/idw.md) |
| MWF slash command | [`.claude/commands/mwf.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/mwf.md) |
| Claude routing | [`CLAUDE.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CLAUDE.md) |
| Config paths | [`rw-config.yaml` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/rw-config.yaml) |
| Guides index | [`docs/guides/README.md`](README.md) |

---

## Related workflows (not detailed here)

- **Intake** — FR/BR/UXR → task in same session ([`FR_BR_INTAKE_GUIDE.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md), [intake-process skill (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md)); never primary tasks on **`S00`** ([BR-076](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/BR-076-e7-s00-must-not-host-concrete-tasks.md))
- **ICW** — legacy Cursor planning trigger (prefer **IPW**)
- **Global implementation gate** — IPW/IPP required; **`IDW E:S:T`** or `implement` to execute ([`AGENTS.md` (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md), `.cursorrules`)
