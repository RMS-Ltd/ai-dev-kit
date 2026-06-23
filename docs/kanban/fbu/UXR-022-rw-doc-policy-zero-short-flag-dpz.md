---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: RW `--doc-policy-zero` short flag (`--dpz`)

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-05  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** COMPLETE  
**Code:** UXR-022  

**Implementing Task:** [E02:S16:T19](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md)

**Related:** [BR-067](BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) (BUILD +0 policy), [BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) (BUILD increment guards), [UXR-015](UXR-015-workflow-initiation-cheatsheet.md) (workflow cheatsheet), [workflow-initiation-cheatsheet.md](../../guides/workflow-initiation-cheatsheet.md)

---

## Summary

The RW flag `--doc-policy-zero` is accurate but unwieldy for day-to-day invocation. Maintainers should type **`--dpz`** as the canonical short form, with **`--doc-policy-zero`** retained as a backward-compatible alias.

---

## Research Objective

**Primary question:** Does shortening the RW doc-init BUILD +0 override flag improve recall, typing ergonomics, and cheatsheet scanability without weakening policy clarity?

**Secondary questions:**

1. Which surfaces currently document or parse `--doc-policy-zero` (agent rules, validators, cheatsheet, packaged framework)?
2. Should `--dpz` be **write-default** in new docs while parsers accept both forms?
3. Are there collision risks with other RW/UKW flags (`-d`, `--art`, `--confirmed-override`)?

---

## Methodology

**Research Method:** Maintainer heuristic review of RW invocation patterns and cheatsheet flag matrix ([UXR-015](UXR-015-workflow-initiation-cheatsheet.md)).  
**Participants:** User (maintainer) + agent-assisted corpus grep.  
**Duration:** Single intake session (2026-06-05).  
**Artifacts reviewed:**

- [`docs/guides/workflow-initiation-cheatsheet.md`](../../guides/workflow-initiation-cheatsheet.md) §2
- [`.cursorrules`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules) RW Step 2 / Step 9
- [`packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py)
- [`packages/frameworks/workflow-mgt/scripts/version/resolve_rw_build.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/version/resolve_rw_build.py)
- [BR-067](BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) policy table

---

## Key Findings

### Finding 1: Long flag name hurts invocation ergonomics (Severity: Medium)

| Flag | Length | Typical invocation |
| ---- | ------ | ------------------ |
| `--doc-policy-zero` | 17 chars | `RW -d E02:S16:Txx --art --doc-policy-zero` |
| Proposed `--dpz` | 5 chars | `RW -d E02:S16:Txx --art --dpz` |

Other RW flags are already short: `-d`, `-k`, `--art`. The doc-policy flag is an outlier and is easy to mistype or omit when copying from memory.

### Finding 2: Semantics are stable — only the token needs shortening (Severity: Low)

`--doc-policy-zero` semantics are well-defined under [BR-067](BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md):

- User must **explicitly** type the flag in the RW trigger.
- Applies only when BUILD=0 doc-init path is intended on an **existing** E:S:T anchor.
- Blocked when HEAD BUILD is already tagged ([BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)).

Renaming the **surface token** does not change policy; cheatsheet and agent docs should expand `--dpz` → “doc policy zero / BUILD +0” on first use.

### Finding 3: No lexical collision with existing flags (Severity: Low)

- `--dpz` does not collide with `-d` (docs-only release mode), `--art`, or `--confirmed-override`.
- Parsers live in deterministic scripts (`resolve_rw_build.py`, `validate_version_bump.py`); both forms can be accepted via argparse `dest` aliasing.

---

## User Pain Points

- **Typing friction:** Long flag discourages correct explicit invocation; maintainers may skip it and get BUILD +1 by default.
- **Cheatsheet clutter:** RW matrix row for `--doc-policy-zero` wraps awkwardly in narrow views.
- **Recall gap:** “dpz” maps mnemonically to **d**oc-**p**olicy-**z**ero; the long form is not memorable under time pressure.

---

## Recommendations

- [x] **R1 — Canonical short flag:** Add **`--dpz`** as the **preferred** RW trigger token for BUILD +0 explicit override (same semantics as `--doc-policy-zero`).
- [x] **R2 — Backward compatibility:** Parsers and validators accept **both** `--dpz` and `--doc-policy-zero`; do not remove the long form in v1.
- [x] **R3 — Cheatsheet update (mandatory):** Update [`docs/guides/workflow-initiation-cheatsheet.md`](../../guides/workflow-initiation-cheatsheet.md) — primary human quick-reference under `docs/guides/` ([UXR-015](UXR-015-workflow-initiation-cheatsheet.md)). See **Proposed cheatsheet updates** below.
- [x] **R3b — Write-default in agent SoT:** `.cursorrules`, `.claude/commands/rw.md`, and RW execution guides show `--dpz` first with long-form alias in parentheses.
- [x] **R4 — Script parity:** Update `resolve_rw_build.py` and `validate_version_bump.py` argparse + tests; mirror `greenfield-install/` packaged copies.
- [x] **R5 — Dual-source parity:** Update `cursorrules-rw-trigger-section.md` and `rw-trigger-dual-source-parity.md` checklist per FR-060 maintainer contract.

**Priority order:**

1. R1 + R2 (parser acceptance — behavior unchanged)  
2. R4 (tests green)  
3. R3 (cheatsheet — `docs/guides/`)  
4. R3b + R5 (agent SoT + packaged parity)

---

## Proposed cheatsheet updates (`docs/guides/workflow-initiation-cheatsheet.md`)

Mandatory deliverable for **E02:S16:T19**. File: [`workflow-initiation-cheatsheet.md`](../../guides/workflow-initiation-cheatsheet.md) (maintained under [UXR-015](UXR-015-workflow-initiation-cheatsheet.md); this UXR amends §2 only).

### Header / provenance

| Location | Current | Target |
| -------- | ------- | ------ |
| **Last verified against** (line 11) | `BR-067 RW -d --doc-policy-zero` | `BR-067 RW -d --dpz` (alias: `--doc-policy-zero`) |
| **Task / UXR footer** (line 15) | T15 / UXR-015 only | Add pointer: [E02:S16:T19](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md) · [UXR-022](UXR-022-rw-doc-policy-zero-short-flag-dpz.md) |

### §2 Release Workflow (RW) — flag matrix

| Row | Current invocation column | Target |
| --- | ------------------------- | ------ |
| `RW -d …` | `… optionally --doc-policy-zero` | `… optionally --dpz` (`--doc-policy-zero` alias) |
| BUILD +0 override | `… --doc-policy-zero` | `… --dpz` — BUILD +0 only when **you** typed it … (alias: `--doc-policy-zero`) |

**Example invocation** (add or fold into `RW -d` row prose):

```text
RW -d E02:S16:T19 --art --dpz
```

### §2 Flag disambiguation table (optional enhancement)

Add row if not redundant with existing `-d` row:

| Flag | Workflow | Meaning |
| ---- | -------- | ------- |
| `--dpz` | **RW** | **D**oc-**p**olicy-**z**ero — explicit BUILD +0 override (alias: `--doc-policy-zero`) |

### Post-change verification

- [ ] No remaining cheatsheet **primary** references to `--doc-policy-zero` without `--dpz` first.
- [ ] [BR-067](BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) link retained on `--dpz` row.
- [ ] `docs/guides/README.md` entry unchanged (still points at same cheatsheet path).

---

## Affected Areas

**Affected components:**

- [x] Documentation (cheatsheet, agent rules, RW execution guide)
- [x] User flows (RW `-d` docs-only + BUILD +0 path)
- [x] Features (validators, build resolver)
- [ ] UI components

**Specific surfaces:**

- **`docs/guides/workflow-initiation-cheatsheet.md`** — mandatory §2 RW matrix + header updates (see **Proposed cheatsheet updates**)
- `docs/guides/README.md` — no structural change; cheatsheet link remains canonical entry point
- `.cursorrules`, `.claude/commands/rw.md`, `CLAUDE.md` / `AGENTS.md` binding pointers
- `packages/frameworks/workflow-mgt/scripts/version/resolve_rw_build.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py`
- `packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md`
- `greenfield-install/packages/frameworks/workflow-mgt/` mirrors

---

## Acceptance criteria (implementation — E02:S16:T19)

- [x] **AC1:** `resolve_rw_build.py` and `validate_version_bump.py` accept `--dpz` and `--doc-policy-zero` with identical behavior.
- [x] **AC2:** Unit tests cover both flag forms (at least one positive and one blocked path per script).
- [x] **AC3:** `docs/guides/workflow-initiation-cheatsheet.md` updated per **Proposed cheatsheet updates** — `--dpz` primary in §2 RW matrix; `--doc-policy-zero` documented as alias; header/footer provenance includes UXR-022 / T19.
- [x] **AC4:** `.cursorrules`, `rw.md`, and RW execution guide use `--dpz` with alias note; dual-source parity doc updated.
- [x] **AC5:** UXR-022 ↔ E02:S16:T19 bidirectional links and story checklist entry present.

---

## Dependencies

**Blocks:**

- None

**Blocked by:**

- None (orthogonal to BR-067 / BR-097 policy — token rename only)

**Related work:**

- [BR-067](BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) — BUILD +0 policy (semantics unchanged)
- [UXR-015](UXR-015-workflow-initiation-cheatsheet.md) — cheatsheet maintenance
- [FR-060](FR-060-rw-task-argument-requirement.md) — RW trigger dual-source parity

---

## Intake Decision

**Intake status:** ACCEPTED  
**Intake date:** 2026-06-05  
**Intake by:** Agent (atomic intake)

**Decision flow results:**

- [x] Story match found: Epic 2, Story 16 → Task 19 (perpetual workflow operations / RW ergonomics)

**Assigned to:**

- Epic: 2 — Workflow Management Framework  
- Story: 16 — Perpetual ongoing workflow operations  
- Task: 19 — RW `--dpz` short flag for doc-policy-zero (UXR-022)  
- Version: v0.2.16.19+2 (implementation complete)

**Kanban links:**

- Epic: [`epic-02.md`](../epics/epic-02/epic-02.md)
- Story: [`story-16-perpetual-ongoing-workflow-operations.md`](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md)
- Task: [`T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md`](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md)

---

## Notes

- **Mnemonic:** **D**oc-**P**olicy-**Z**ero → `--dpz`.
- **Not in scope:** Changing when BUILD +0 applies; agents must still not infer `--dpz` from “docs-only” alone ([BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)).
- Per [UXR-014](UXR-014-two-digit-est-identifier-default-formatting.md), examples use padded E/S/T (`E02:S16:T19`).

---

## References

- [Workflow initiation cheatsheet](../../guides/workflow-initiation-cheatsheet.md)
- [BR-067 — RW doc-init BUILD +0 policy](BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)
- [Release Workflow agent execution guide](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
