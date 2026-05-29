---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# RW trigger: dual-source parity (ai-dev-kit)

**Purpose:** Keep the **canonical** repo [`.cursorrules`](../../../../.cursorrules) RW trigger block and the **portable** excerpt [`cursorrules-rw-trigger-section.md`](../cursorrules-rw-trigger-section.md) aligned so adopters who paste only the package file do not drift from **FR-060**, **BR-056**, **FR-038**, and ABORT semantics.

**Related governance:** [E2:S16:T03](../../../../docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) (RW maintenance perpetual)—this doc is **consumer parity**, not a duplicate of T103 procedure.

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
- [ ] **Todo templates** — `todo_write` examples list **1b, 1c, 1d** as **separate** todos in correct order (not “intent only” for 1b).
- [ ] **Step 7** — Scoped Kanban / UKW wording references **FR-038** and `invocation_context` / `rw_step_7` where the full guide does.
- [ ] **Script paths** — Example commands use `packages/frameworks/workflow mgt/scripts/validation/` (or project-customized paths in consumer repos).
- [ ] **Changelog / claims** — No “verified fixed” language unless policy allows; align with vwmp release guide.
- [ ] **BR-074 (Step 3 + Step 9)** — Step 3 changelog creation includes “never overwrite existing archive changelog” and “use post-bump version in header” guards. Step 9 validator list includes `validate_changelog_archive_links.py` (non-blocking).
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

---

## References

- **FR-060** — mandatory RW task id ([FR-060](../../../../docs/project-management/kanban/fr-br/FR-060-rw-task-argument-requirement.md))
- **FR-038** — RW Step 7 scoped UKW ([FR-038](../../../../docs/project-management/kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md))
- **Release workflow agent execution** — `KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (under this package tree)
