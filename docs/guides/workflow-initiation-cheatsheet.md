---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow initiation cheatsheet

**Last verified against:** 2026-05-30 (`.cursorrules`, `.claude/commands/rw.md`, `ukw.md`, `ipw.md`; FR-085 `UKW --rp` / ADR-009; BR-067 `RW -d --doc-policy-zero`)

> **Agent source of truth:** If this cheatsheet and [`.cursorrules`](../../.cursorrules) or [`.claude/commands/`](../../.claude/commands/) diverge, **`.cursorrules` wins** for agent behavior. This page is a human quick-reference for *which command to type* — not full execution steps.

**Task:** [E02:S16:T15](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md) · [UXR-015](../project-management/kanban/fr-br/UXR-015-workflow-initiation-cheatsheet.md)

---

## 1. Quick decision tree

| I want to… | Type |
| ---------- | ---- |
| Release completed work | `RW E02:S16:T15` (full), `RW -d E02:S16:T15` (docs-only), or `RW -k E02:S16:T15` (kanban-init) |
| Plan before implementing | `IPW E02:S16:T15` (**plan mode first**) or `/ipw E02:S16:T15` — then explicit **implement** (IPW/IPP gate) |
| Sync all kanban docs (global) | `UKW` then `RW` |
| Fix suspected kanban drift (specific) | `UKW -ad <targets>` then `RW` — **planned** (not yet in `.cursorrules`) |
| Maintain changelog size/order | `CMW` then `RW` |
| Bump package versions | `PVW` (or automatic at RW Step 2.5) |

**Examples use padded E/S/T** ([UXR-014](../project-management/kanban/fr-br/UXR-014-two-digit-est-identifier-default-formatting.md)): `E02:S16:T15`, compact `E02S16T15`.

---

## 2. Release Workflow (RW)

| Invocation | Meaning |
| ---------- | ------- |
| `RW E02:S16:T15` / `/rw E02:S16:T15` | Full release (version, changelog, kanban, commit, tag, push) |
| `RW -d E02:S16:T15` | **Docs-only release** (documentation path; not kanban drift repair). On an **existing** E:S:T use `--art` and optionally `--doc-policy-zero` (BUILD +0 policy; see [BR-067](../project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)) |
| `RW -k E02:S16:T15` | Kanban-init release |
| `… --art` | Adopt requested E:S:T as canonical version anchor |
| `… --confirmed-override` | Step 1d intent override (after explicit user confirmation) |

| | |
| --- | --- |
| **Prerequisites** | Tool/bash access; on correct epic branch; task token in message |
| **Blocking gates (before edits)** | Step 1 branch safety → 1b task token → 1c task complete → 1d task intent |
| **Handoff** | Commits and tags via RW only — do not `git commit` / `git push` outside RW |
| **Blocked session** | `RW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.` |

**Deep dive:** [`.claude/commands/rw.md`](../../.claude/commands/rw.md) · [Release Workflow agent execution guide](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)

---

## 3. Update Kanban Workflow (UKW)

| Invocation | Meaning |
| ---------- | ------- |
| `UKW` / `/ukw` | **Comprehensive** — bookkeeping + priorities + gap discovery (Step 2.5) |
| `UKW -u` | Bookkeeping only (no MoSCOW reprioritization; no Step 2.5) |
| `UKW -p` | Update MoSCOW priorities only |
| `UKW -a E02:S16:T15` | Assign priorities to target(s) only — **not** drift repair |
| `UKW -u -p`, `UKW -u -a <target>`, etc. | Combined sub-workflows per flag matrix |
| `UKW -ad <targets>` | **Address Drift** — targeted project-state kanban reconciliation — **planned** |
| `UKW --rp` | **Deep reprioritization** (standalone) — intent/dependency/blocker/impact analysis on kboard + fbuboard; emits rationale ([ADR-009](../architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md)). **Not** combinable with `-u`, `-p`, or `-a` |

**Flag disambiguation (easy to confuse):**

| Flag | Workflow | Meaning |
| ---- | -------- | ------- |
| `-d` | **RW** | Docs-only **release** |
| `-a` | **UKW** | Assign **priorities** to targets |
| `-ad` | **UKW** (planned) | **Address** kanban **d**rift vs project state |
| `--rp` | **UKW** | **RePrioritise** — standalone deep MoSCOW reorder (not `RW -d`, not `UKW -a`; distinct from `UKW -p`) |

**`-a` target syntax:** single task `E02:S16:T15`; multiple `E02:S16:T13,E02:S16:T14`; range `E02:S16:T13-E02:S16:T15`; story `E02:S16`; epic `E02`; all unprioritized `all` or `*`.

| | |
| --- | --- |
| **Prerequisites** | Tool/bash access |
| **Handoff** | UKW stages kanban files; you run **`RW`** to commit (attributes perpetual UKW task) |
| **Blocked session** | `UKW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.` |

**Deep dive:** [`.claude/commands/ukw.md`](../../.claude/commands/ukw.md) · [Update Kanban Workflow agent execution guide](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)

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
| **Handoff** | Produces `docs/implementation-cycles/IPP-E…S…T…-*.md` (or ICW trio); link from task; **no code/docs implementation until IPW complete + user says implement**; then **`RW E02:S16:T15`** |
| **Planning package** | [IPP-E02S16T15-workflow-initiation-cheatsheet.md](../implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md) (example) |
| **Blocked (plan mode)** | `IPW BLOCKED: plan mode required. Type /plan to enter plan mode, then invoke /ipw again from within the plan session.` |
| **Blocked (tools)** | `IPW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.` |

**Deep dive:** [`.claude/commands/ipw.md`](../../.claude/commands/ipw.md) · [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)

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
| **Deep dive** | `.cursorrules` CMW section · [FR-057](../project-management/kanban/fr-br/FR-057-update-changelog-workflow.md) |

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
| `IPW E02:S16:T15` → implement → `RW E02:S16:T15` | New work with planning gate |
| `UKW` → `RW` | Global kanban sync then commit |
| `CMW` → `RW` | Changelog maintenance then commit |
| `UKW -ad kboard,fbuboard` → `RW` | Targeted drift repair (**planned**) |
| `UKW --rp` → `RW` | Periodic priority realignment then commit (perpetual UKW task attribution) |

**UKW → RW / CMW → RW context:** RW Step 2 detects prior workflow and attributes BUILD to the wired perpetual task (UKW or CMW).

---

## 8. Canonical deep links

| Resource | Path |
| -------- | ---- |
| Agent trigger spec (SoT) | [`.cursorrules`](../../.cursorrules) |
| RW slash command | [`.claude/commands/rw.md`](../../.claude/commands/rw.md) |
| UKW slash command | [`.claude/commands/ukw.md`](../../.claude/commands/ukw.md) |
| IPW slash command | [`.claude/commands/ipw.md`](../../.claude/commands/ipw.md) |
| Claude routing | [`CLAUDE.md`](../../CLAUDE.md) |
| Config paths | [`rw-config.yaml`](../../rw-config.yaml) |
| Guides index | [`docs/guides/README.md`](README.md) |

---

## Related workflows (not detailed here)

- **Intake** — FR/BR/UXR → task in same session ([`FR_BR_INTAKE_GUIDE.md`](../../packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md), [intake-process skill](../../.cursor/skills/intake-process/SKILL.md)); never primary tasks on **`S00`** ([BR-076](../project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md))
- **ICW** — legacy Cursor planning trigger (prefer **IPW**)
- **Global implementation gate** — IPW/IPP required before implementation edits ([`AGENTS.md`](../../AGENTS.md), `.cursorrules`)
