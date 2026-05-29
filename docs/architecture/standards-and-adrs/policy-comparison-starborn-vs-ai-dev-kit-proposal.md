---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-23T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Policy Comparison: Starborn Legacy vs AI Dev Kit — Proposal for Updates

**Status:** Proposal  
**Purpose:** Compare interrelated policies from Starborn Legacy with ai-dev-kit and propose updates.  
**Focus:** Implementation cycle (spec + TDD), changelog language, git restrictions, perpetual tasks.

---

## 1. Summary of Gaps and Recommendations

| Area | Starborn | AI Dev Kit | Recommendation |
|------|----------|------------|----------------|
| **Git commit/push** | Explicit top-of-file prohibition (FORBIDDEN/ALLOWED, when to use RW) | Short "Git Workflow Restrictions" section | Optional: add brief top-of-file reminder; keep existing section. |
| **Changelog language** | In .cursorrules: no "Fixed" until user verified; "Attempted fix" required | In RW agent guide only | **Add** short changelog-language reminder to .cursorrules so agents see it. |
| **Implementation cycle (TDD)** | Mandatory 5-step cycle in .cursorrules + IMPLEMENTATION_CYCLE_SOP.md + Kanban refs | Not in .cursorrules; TDD mentioned in tasks/docs only | **Add** adoptable Implementation Cycle section to .cursorrules; add framework SoP for adopters. |
| **IDE pre-commit** | Step 7.5: fix IDE-flagged errors/warnings before commit | No equivalent step in .cursorrules | Optional: add "Check IDE-flagged problems before commit" as recommended practice or optional step. |
| **Perpetual tasks** | Task document MUST be updated with context (what changed, why, version) each run | Perpetual task range and behaviour documented; no "update task doc" requirement | **Add** perpetual-task update requirement to Kanban Governance Policy. |
| **BUILD=0 / COMPLETE** | BUILD=0: task stays in MoSCOW; BUILD≥1: move to COMPLETE | RW Step 7 describes story/epic update; BUILD=0 behaviour in versioning policy | Already aligned; no change needed. |

---

## 2. Implementation Cycle (Spec + TDD) — Detail

Starborn defines a **mandatory** implementation cycle in three places:

1. **.cursorrules** — "MANDATORY IMPLEMENTATION CYCLE - TDD COMPLIANCE" with 5 steps and a pre-implementation checklist.
2. **KANBAN_GOVERNANCE.md** — "Implementation Cycle (MANDATORY)" under Task-Level Requirements; references SoP and .cursorrules.
3. **docs/IMPLEMENTATION_CYCLE_SOP.md** — Full SoP: Requirement doc → Task creation → **Specification & Test Creation (BLOCKING)** → Implementation (Red-Green-Refactor) → RW.

**Blocking rule:** Step 3 (Specification & Test Creation) is **BLOCKING**. Implementation cannot proceed without failing tests (Red phase) in place.

**Proposal for ai-dev-kit:**

- **.cursorrules:** Add a new section "Implementation Cycle (Adoptable Pattern)" that:
  - Describes the same 5 steps (Requirement doc → Task creation → Spec & tests (blocking) → Implementation → RW).
  - States that Step 3 (Spec & Test Creation) is blocking when the pattern is adopted.
  - References framework SoP for projects that adopt it (e.g. `packages/frameworks/workflow mgt/docs/.../implementation-cycle-sop.md` or equivalent).
  - Frames it as the **recommended/adoptable** pattern for projects using this framework (not necessarily mandatory for the framework repo itself, but required for adopters who choose it).
- **Framework package:** Add an `implementation-cycle-sop.md` (or equivalent) under workflow mgt (or shared docs) so installing projects get the same SoP. Content can be framework-agnostic (e.g. "test file" not "test_file_test.dart").
- **Kanban Governance Policy:** Add a short "Implementation Cycle (optional/adoptable)" subsection that references the SoP and .cursorrules, and states that projects may require this cycle for all task implementations.

---

## 3. Changelog Language — Detail

Starborn .cursorrules:

- **FORBIDDEN:** "Fixed", "Resolved", "Completed" until user has verified.
- **REQUIRED:** "Attempted fix", "Attempted resolution", "Change implemented" until verified.
- Section names: "### Attempted Fixes" for unverified; "### Fixed" only after verification.

AI Dev Kit already has this in **release-workflow-agent-execution.md** (validation, commit message rules, etc.) but not in .cursorrules.

**Proposal:** Add a short "Changelog language — no false claims" block to .cursorrules (e.g. under or near Release Workflow) so agents see it without opening the long RW doc. Point to the RW agent guide for full validation rules.

---

## 4. Git Commit/Push Restrictions

Starborn: Very prominent "ABSOLUTE PROHIBITION" at top of .cursorrules with FORBIDDEN/ALLOWED lists and "when to use RW".

AI Dev Kit: "Git Workflow Restrictions" section with strict rules and prohibited operations; no top-of-file callout.

**Proposal:** Optionally add a brief top-of-file reminder (e.g. "Commit/push only via RW") and keep the existing Git Workflow Restrictions section as the canonical list. Low priority if we want to avoid .cursorrules churn.

---

## 5. Perpetual Task — Update Task Document

Starborn KANBAN_GOVERNANCE.md:

- When using a perpetual task, the **task document itself MUST be updated** with: what was changed, why, and the version of the release. This ensures forensic traceability for each run.

**Proposal:** In ai-dev-kit's Kanban Governance Policy, in the **Perpetual Task** subsection, add a **Required** bullet: for each run of a perpetual task, add a brief record in the task document (or designated subsection) describing what changed, why, and the release version. Reference forensic traceability.

---

## 6. Optional: IDE Pre-Commit Step (Step 7.5)

Starborn: Step 7.5 — "Check for and Address IDE-Flagged Problems" before commit (fix errors, warnings, info-level).

**Proposal:** Mention as a **recommended practice** in .cursorrules (e.g. "Before triggering RW, address IDE-flagged errors/warnings where possible") rather than adding a new numbered RW step, to avoid renumbering and workflow drift. Alternatively, add as optional "Step 9.5" in the RW description if we want it as a formal step.

---

## 7. Versioning and Doc-Init

Starborn VERSIONING_POLICY includes:

- Doc-init build (+0) for new E/S/T docs; abstract space; task document requirements; S00 repository stories.

AI Dev Kit already has doc-init, abstract space, and task document requirements in versioning policy and RW agent guide. **No change proposed** for versioning schema or doc-init.

---

## 8. Files to Touch (Implementation)

1. **.cursorrules**
   - Add "Changelog language — no false claims" reminder (concise).
   - Add "Implementation Cycle (Adoptable Pattern)" section with 5 steps, blocking Step 3, and reference to framework SoP.
   - Optionally: brief git reminder at top; optional IDE pre-commit sentence.

2. **packages/frameworks/kanban/policies/kanban-governance-policy.md**
   - In Perpetual Task section: add requirement to update task document with context (what changed, why, version) for each run.

3. **New file (framework):**  
   `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md`  
   - Framework-agnostic Implementation Cycle SoP (language-agnostic test file names, "Run tests" not "flutter test") so adopters can use it as-is or adapt.

4. **Kanban Governance Policy**
   - Add short subsection or bullet on "Implementation Cycle (adoptable)" referencing .cursorrules and the new SoP.

---

## 9. References

- Starborn: `docs/VERSIONING_POLICY.md`, `docs/KANBAN_GOVERNANCE.md`, `docs/release-workflow-agent-execution.md`, `docs/IMPLEMENTATION_CYCLE_SOP.md`, `.cursorrules`.
- AI Dev Kit: `.cursorrules`, `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`, `packages/frameworks/kanban/policies/kanban-governance-policy.md`, `packages/frameworks/workflow mgt/.../release-workflow-agent-execution.md`.
