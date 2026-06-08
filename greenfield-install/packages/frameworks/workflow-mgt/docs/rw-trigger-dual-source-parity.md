---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# RW trigger: dual-source parity (ai-dev-kit)

**Purpose:** Keep the **canonical** repo [`.cursorrules`](../../../../.cursorrules) RW trigger block and the **portable** excerpt [`cursorrules-rw-trigger-section.md`](../cursorrules-rw-trigger-section.md) aligned so adopters who paste only the package file do not drift from **FR-060**, **BR-056**, **FR-038**, and ABORT semantics.

**Related governance:** [E2:S16:T03](../../../../docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) (RW maintenance perpetual)—this doc is **consumer parity**, not a duplicate of T103 procedure.

---

## Source-of-truth order (maintainers)

1. **Edit the repo root [`.cursorrules`](../../../../.cursorrules)** RW section first when changing RW guardrails, step text, or ABORT rules.
2. **Port the same semantics** into [`cursorrules-rw-trigger-section.md`](../cursorrules-rw-trigger-section.md): Step **1 → 1b → 1c → 1d** before any file modifications; matching script invocations and `--mode rw-k` behavior for **`RW -k`**.
3. **Update this checklist** if new mandatory gates or FR cross-links are added.
4. **Append a line to [Delta log](#delta-log)** when you complete a parity pass.

Adopters copy **`cursorrules-rw-trigger-section.md`** into their `.cursorrules`; they do not receive automatic merges from ai-dev-kit unless they update the package.

---

## Parity checklist (copy before merging RW doc changes)

- [ ] **Step 1** — `validate_branch_context.py --strict`; non-zero = ABORT; no edits before pass.
- [ ] **Step 1b (FR-060 / E5:S01:T63)** — Parse `E…S…T…` from the **same user message** as the RW trigger; missing token = **RW ABORTED** (do not substitute `validate_rw_task_intent` without `--requested`).
- [ ] **Step 1c (FR-060)** — `validate_rw_task_complete.py --requested "<parsed_id>"`; add **`--mode rw-k`** only for **`RW -k`**; non-zero = ABORT.
- [ ] **Step 1d (BR-056 / E6:S06:T56)** — `validate_rw_task_intent.py --requested "<parsed_id>"`; add **`--mode rw-k`** only for **`RW -k`**; **`--art` allowed in all RW modes** for explicit canonical adoption; non-zero = ABORT; `--confirmed-override` only after explicit user confirmation.
- [ ] **Step 9 (`--art` propagation)** — when trigger includes `--art`, run Step 9 validators with `--requested "<parsed_id>" --art` on `validate_branch_context.py` and `validate_version_bump.py` so guardrails stay consistent with Step 1d adoption intent.
- [ ] **Workflow Step Tracker templates** — step tracker examples list **1b, 1c, 1d** as **separate** steps in correct order; reference [Workflow Step Tracker Contract](../KB/Documentation/Developer_Docs/vwmp/workflow-step-tracker-contract.md) (Cursor `todo_write` is adapter example only).
- [ ] **Todo templates** — (legacy label) same as Workflow Step Tracker templates above.
- [ ] **Step 7** — Scoped Kanban / UKW wording references **FR-038** and `invocation_context` / `rw_step_7` where the full guide does.
- [ ] **Script paths** — Example commands use `packages/frameworks/workflow-mgt/scripts/validation/` (or project-customized paths in consumer repos).
- [ ] **Changelog / claims** — No “verified fixed” language unless policy allows; align with vwmp release guide.
- [ ] **BR-074 (Step 3 + Step 9)** — Step 3 changelog creation includes “never overwrite existing archive changelog” and “use post-bump version in header” guards. Step 9 validator list includes `validate_changelog_archive_links.py` (non-blocking).
- [ ] **FR-097 / FR-092 (Step 9)** — Step 9 includes `check_changelog_size.py` (non-blocking; triggers 9.5), `validate_board_stamp_diff.py` (**blocking**, Step 7 snapshots), `validate_kanban_state_icons.py` (**strict**), `validate_release_readiness.py` Gates 1–9; `--dpz` (alias: `--doc-policy-zero`) on `validate_version_bump.py` when applicable.
- [ ] **Step 9.5 / 9.6 / 12.5 / 13** — Portable excerpt and `.claude/commands/rw.md` document CMW 9.5, IDE 9.6, GitHub release 12.5, Housekeeping 13 consistent with root `.cursorrules`.
- [ ] **UXR-024 (Step 12 / 12.5)** — Default full RW skips push + GitHub release; **`--push`** opt-in only when user typed it; `RW COMPLETE (local)` vs `(pushed)`; operator batch push in cheatsheet §2; `canonical-rw-steps.yaml` `full_release` vs `full_release_push`.
- [ ] **Step 7 FR-092** — Scoped kanban self-sufficient wording (four-surface contract; no UKW handoff debt) in portable excerpt.
- [ ] **`.claude/commands/rw.md`** — Step 9 command block matches portable excerpt validator set and `--art` / `--dpz` propagation.
- [ ] **BR-097 (Step 2 + Step 9/11)** — `resolve_rw_build.py` before `version.py` write; `finalize_rw_semver_registry.py` after `version.py` when `task_touch`; FORBIDDEN force-tag list; `validate_release_tag_immutability.py` + `validate_task_touch_release_contract.py` in Step 9; Step 11 never `git tag -f`; task_touch SemVer collision recovery ≠ BUILD-only.
- [ ] **Numbering** — Root `.cursorrules` may label gates **6b/6c/6d**; the portable file may use **5b/5c/5d**. That difference is **cosmetic** if prose and commands match.

---

## Delta log

### 2026-03-30 — E5:S01:T66 parity pass

| Area | Before | After |
|------|--------|--------|
| Portable `todo_write` (full RW) | `rw-step-1b` incorrectly described **intent** only; **1c/1d** omitted | **1b** = task token (FR-060); **1c** = `validate_rw_task_complete`; **1d** = `validate_rw_task_intent`; then Step 2 |
| Portable `RW -k` todos | **1b** pointed at `validate_rw_task_intent` only | **1b → 1c → 1d** with `--mode rw-k` on **both** validators where applicable |
| Portable `RW -d` todos | **1b** = intent only | **1b → 1c → 1d** for full guardrail chain (no `rw-k` unless trigger is `RW -k`) |
| FR citations | **5b** FR-060 only | **5b** adds **E5:S01:T63**; **5d** adds **E6:S06:T56** (traceability with root) |
| Doc metadata | Stale **Last Updated** / **Version** on portable excerpt | Bumped on excerpt header |

**Versioning note:** Forensic release for this task is **v0.5.1.66+2**; **+1** was already used by the prior **RW -k** kanban marker for T66.

**Substantive policy mismatch remaining:** None identified after this pass—the portable excerpt matches the canonical **1/1b/1c/1d** ABORT semantics and FR-038 Step 7 wording in the shared trigger header.

### 2026-05-17 — E2:S01:T21 parity pass (BR-074)

| Area | Before | After |
|------|--------|-------|
| Step 3 changelog guards | No immutability guard against overwriting prior-build archive changelogs | Added "never overwrite/delete existing `CHANGELOG_v{version}.md`" and "use post-bump version in `Internal Version` header" guards to both `.cursorrules` and portable excerpt |
| Step 9 validators | Four validators listed (`branch_context`, `changelog_format`, `version_bump`, `check_changelog_size`) | Five validators listed; added `validate_changelog_archive_links.py` (non-blocking, BR-074) to both `.cursorrules` and portable excerpt |
| Canonical step guide | Step 3 had no BR-074 guards; Step 10 had no archive link validator | `release-workflow-agent-execution.md` Step 3 EXECUTE/VALIDATE sections include BR-074 guards; Step 10 EXECUTE includes `validate_changelog_archive_links.py` |
| RW command file | Step 3 had no immutability guards; Step 9 had four validators | `.claude/commands/rw.md` Step 3 includes BR-074 guards; Step 9 includes archive link validator (non-blocking) |

**Versioning note:** Forensic release for BR-074 is **v0.2.1.21+{build}** (Epic 2, Story 1, Task 21).

**Substantive policy mismatch remaining:** None identified after this pass.

### 2026-06-05 — task_touch finalize + release contract parity pass

| Area | Before | After |
|------|--------|--------|
| Step 2 task_touch | Registry finalize only at tag time (`get_rw_tag_info(finalize=True)`) | `finalize_rw_semver_registry.py` after `version.py` write; staged in release commit |
| Step 9 task_touch | `validate_semver_registry_injective.py` only | Added blocking `validate_task_touch_release_contract.py` |
| Tag collision recovery | "bump BUILD (+1)" for all strategies | Strategy-aware: internal tag → BUILD+1; task_touch SemVer core → new PATCH via finalize + re-RW |
| Portable excerpt / `rw.md` | No finalize or contract validator | Aligned with root `.cursorrules` and vwmp Step 2 / Step 9 |

**Substantive policy mismatch remaining:** None identified after this pass.

### 2026-06-03 — E02:S13:T08 parity pass (FR-097 / FR-092 Step 9)

| Area | Before | After |
|------|--------|--------|
| Portable + `rw.md` Step 9 | Four validators + archive links only | Full set: branch, changelog, version_bump, check_changelog_size, archive_links, board_stamp_diff, kanban_state_icons, release_readiness |
| Steps 9.5 / 9.6 / 12.5 / 13 | Missing or incomplete in portable numbered list | Added CMW, IDE, GitHub release, Housekeeping |
| `canonical-rw-steps.yaml` | 17-step legacy model (kanban at step 6) | v2.0.0 — 12-step agent model + 9.5/9.6/12.5 + step 13 Housekeeping |
| `release-workflow.yaml` (flat) | Legacy `confidentia` paths | Deprecated stub → subdirectory SoT |
| `workflow-registry.yaml` | RW steps: 17, UKW steps: 8 | RW steps: 12 (+ sub-steps note), UKW steps: 9 (+ Step 2.5 note) |

**Versioning note:** Forensic release via **`RW E02:S13:T08`**.

**Substantive policy mismatch remaining:** None identified after this pass — portable excerpt and `rw.md` match root Step 9 semantics.

### 2026-06-05 — E02:S01:T24 parity pass (BR-097)

| Area | Before | After |
|------|--------|-------|
| Step 2 BUILD | Agent-inferred BUILD / doc-only skip | `resolve_rw_build.py` mandatory before `version.py` write; FORBIDDEN force-tag + tagged BUILD reuse |
| Step 9 validators | No tag immutability scan | `validate_release_tag_immutability.py` added (blocking) |
| Step 11 | No explicit force-tag ban | FORBIDDEN `git tag -f` / force-push on release tags |
| IPW / PLAN template | Could prescribe post-ship `--dpz` | Verification/FBU waves: `RW E:S:T --art` only |

**Versioning note:** Forensic release target **v0.2.1.24+1** via `RW E02:S01:T24 --art`.

### 2026-06-05 — E02:S16:T21 parity pass (UXR-024)

| Area | Before | After |
|------|--------|-------|
| Default full RW Step 12 / 12.5 | Mandatory push + GitHub Release every run | **Skipped** unless user typed **`--push`** |
| Git policy | Commit/push only via RW | Commit/tag via RW; operator batch push or `RW --push` |
| `canonical-rw-steps.yaml` | `full_release` included 12, 12.5 | v2.1.0 — `full_release` local-only; `full_release_push` for `--push` |
| Cheatsheet §2 | Full RW implied push | Local-default + operator batch push runbook + `--push` flag |
| Completion message | `RW COMPLETE` only | `RW COMPLETE (local)` vs `(pushed)` |

**Versioning note:** Doc wave under **E02:S16:T21**; forensic RW pending implementation wave.

---

## References

- **FR-060** — mandatory RW task id ([FR-060](../../../../docs/kanban/fr-br/FR-060-rw-task-argument-requirement.md))
- **FR-038** — RW Step 7 scoped UKW ([FR-038](../../../../docs/kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md))
- **Release workflow agent execution** — `KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (under this package tree)
