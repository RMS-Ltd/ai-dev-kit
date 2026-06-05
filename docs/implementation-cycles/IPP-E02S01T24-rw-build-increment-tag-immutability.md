---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T24 — Planning: RW BUILD increment enforcement and tag immutability (IPW)

**Host Task:** [`T24-rw-build-increment-enforcement-and-tag-immutability-br097.md`](../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097.md) **(E02:S01:T24)**  
**Planning for:** [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)  
**Status:** Implemented (v0.2.1.24+1)  
**Functional release target:** `v0.2.1.24+1` via `RW E02:S01:T24 --art` (not `--doc-policy-zero`)

---

## 1. Requirements

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Same E:S:T follow-on release defaults to `BUILD = HEAD_BUILD + 1` | BR-097 AC2 |
| RF2 | `--doc-policy-zero` only when user typed it in RW trigger **and** no git tag exists for that BUILD | BR-097 AC1, AC7 |
| RF3 | Tag push / create collision → **RW ABORTED**; recovery = bump BUILD and re-RW | BR-097 AC4, AC5 |
| RF4 | IPW must never prescribe `--doc-policy-zero` for post-ship verification/FBU waves | BR-097 AC3 |
| RF5 | Deterministic Step 2 resolver before `version.py` write | BR-097 AC2 |
| RF6 | Recovery doc: single path (bump BUILD; never force-tag release tags) | BR-097 AC5 |
| RF7 | Extend tagged-BUILD guard coverage (all same-task paths, including BUILD≥1 `--doc-policy-zero` rejection) | T24 prior-work §B |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Fail **before** changelog/kanban edits when BUILD choice is wrong (Step 2, not Step 9) |
| RNF2 | Dual-source parity: `.cursorrules` ↔ `cursorrules-rw-trigger-section.md` ↔ `.claude/commands/rw.md` |
| RNF3 | Idempotent resolver output for clean-tree re-runs |

### 1.3 Out of scope

- Historical tag rewrite (`v0.5.9.14+2` → `0ebf2cf`)
- Task-touch / registry changes (E03:S02:T12 complete)
- Perpetual-task ordering (BR-075 / T22 complete)

---

## 2. Specification

### 2.1 Goal

Make wrong BUILD choice **impossible at Step 2** and force-tag recovery **explicitly forbidden**.

### 2.2 Step 2 decision tree

```
RW triggered with E:S:T
├─ User typed --doc-policy-zero in trigger?
│  ├─ Yes → BUILD stays at HEAD only if untagged AND BUILD=0 path
│  └─ No  → same E:S:T → BUILD = HEAD_BUILD + 1
└─ New task / out-of-order → existing RW Step 2 rules
```

### 2.3 ADR necessity

| Outcome | Action |
| ------- | ------ |
| **REQUIRED** | Update `dev-kit-versioning-policy.md` (remove force-tag guidance); optional ADR-019 |

---

## 3. Test design

| ID | Requirement | Test method | Expected |
| -- | ----------- | ----------- | -------- |
| T1 | RF5 resolver | `test_resolve_rw_build.py` — same task, tagged HEAD BUILD | `next_build = head+1` |
| T2 | RF5 resolver | untagged HEAD, `--doc-policy-zero`, BUILD=0 | `next_build = head` |
| T3 | RF1/RF2 | `test_resolve_rw_build.py` — tagged HEAD + `--doc-policy-zero` | exit non-zero |
| T4 | RF3 | `test_validate_release_tag_immutability.py` — journal with `tag -f` | non-zero |
| T5 | RF7 | `test_validate_version_bump.py` — BUILD≥1 + `--doc-policy-zero` | FAIL |
| T6 | RNF2 | dual-source parity checklist | PASS |
| T7 | RF4 | IPP template / ipw.md — no verification-wave `--doc-policy-zero` | PASS |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** `TODO → IN PROGRESS`; update `Last updated` | Task doc |
| 2 | Agent FORBIDDEN block (BUILD+1 default; no `git tag -f` on `v*` tags) | `.cursorrules`, `rw.md`, `AGENTS.md` |
| 3 | `resolve_rw_build.py` + RW Step 2 integration | `scripts/version/` |
| 4 | `validate_release_tag_immutability.py` + Step 9/11 wiring | `scripts/validation/` |
| 5 | IPW template — verification wave: `RW E:S:T --art` only | `ipw.md`, `PLAN_DOC_TEMPLATE.md` |
| 6 | Recovery + versioning policy + cheatsheet | journals, governance, guides |
| 7 | Dual-source parity checklist | `rw-trigger-dual-source-parity.md` |
| 8 | Tests T1–T7 | pytest |
| 9 | `RW E02:S01:T24 --art` → **v0.2.1.24+1** | Release |
| **10** | **[MANDATORY]** Reconcile T24 → `COMPLETE` + BR-097 AC closure | Task doc, kboard, fbuboard |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-IPP | `docs/implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md` | CREATE |
| D-RW | `.claude/commands/rw.md`, `release-workflow-agent-execution.md` | UPDATE |
| D-IPW | `.claude/commands/ipw.md`, `PLAN_DOC_TEMPLATE.md` | UPDATE |
| D-AGENTS | `AGENTS.md`, `.cursorrules` | UPDATE |
| D-POL | `dev-kit-versioning-policy.md` | UPDATE |
| D-REC | `docs/journals/RECOVERY_PROCEDURE.md` | UPDATE |
| D-CHT | `workflow-initiation-cheatsheet.md` | UPDATE |
| D-PAR | `rw-trigger-dual-source-parity.md` | UPDATE |
| D-BR | `BR-097` | UPDATE |
| D-ADR | `ADR-019-rw-build-increment-and-tag-immutability.md` | CREATE |

---

## 6. Documentation housing

| Doc ID | Canonical path | Lifecycle |
| ------ | -------------- | --------- |
| D-IPP | `docs/implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md` | evergreen |
| D-ADR | `docs/architecture/standards-and-adrs/ADR-019-rw-build-increment-and-tag-immutability.md` | evergreen |

---

## 7. Success criteria

- [x] AC1–AC7 on BR-097 checked with evidence
- [x] E05:S09:T14 scenario: `--doc-policy-zero` at tagged +2 fails at **Step 2** (resolver) — `test_doc_policy_zero_blocked_when_tag_exists`
- [x] Agent docs contain explicit FORBIDDEN list for `git tag -f`
- [x] IPP template has no post-ship `--doc-policy-zero` pattern
- [x] `RW E02:S01:T24 --art` at **v0.2.1.24+1** with pytest green

---

## References

- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
- [CHANGELOG_v0.5.9.14+3](../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.9.14+3.md) — partial Step 9 guard (do not re-implement)
- [BR-067](../project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)
