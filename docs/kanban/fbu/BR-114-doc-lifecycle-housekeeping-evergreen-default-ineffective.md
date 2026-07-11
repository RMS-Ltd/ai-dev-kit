---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-11T11:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-114: Document lifecycle housekeeping ineffective — evergreen default renders metadata inert

**Type:** Bug Report (BR)  
**Submitted:** 2026-07-11  
**Submitted By:** Operator (review of doc housekeeping policy usage)  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** OPEN (REOPENED task — remediation not yet implemented)  
**Last updated:** 2026-07-11 (RW E02:S04:T07 --art — **v0.2.4.7+2** / SemVer v0.4.1249)  
**Version:** v0.2.4.7+2

**Implementing Task:** [E02:S04:T07](../epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T07-apply-lifecycle-metadata-to-all-existing-documentation.md) (reopened — original mass-apply task; no prior FBU existed)

**Related:** Epic 10 Document Lifecycle Framework · [doc-lifecycle-policy.md](../../architecture/standards-and-adrs/doc-lifecycle-policy.md) · [doc-lifecycle-metadata-spec.md](../../architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md) · [E10:S01:T08](../epics/epic-10/story-01-document-lifecycle-package-implementation-review/T08-implement-doc-housekeeping-workflow-and-scripts.md) (DHKW scripts shipped; not operationalized)

---

## Summary

Lifecycle frontmatter was applied repo-wide, but classification defaults to `evergreen` almost everywhere, so TTL/housekeeping never fires and the Doc Housekeeping Workflow (DHKW) is unused in practice.

---

## Description

**What should happen**

- Agents classify new KB docs as `evergreen` / `timeboxed` / `transient` per the type→lifecycle mapping.
- Temporary docs (IPP/ICW plans, analysis, verification evidence, handovers) get TTLs and become eligible for archive/delete.
- DHKW (`housekeeping_scanner.py` + `doc-housekeeping-workflow.yaml`) runs on a cadence and acts on expired docs.

**What actually happens**

- Nearly all frontmatter uses `lifecycle: evergreen` + `housekeeping_policy: keep` + `ttl_days: null`.
- Policy principle **“Default to Evergreen”** plus agent habit means classification is ceremonial, not operational.
- ~1.5k `docs/**/*.md` files still lack frontmatter entirely; of those with `lifecycle:`, ~1855 are evergreen vs ~15 timeboxed/transient.
- Non-schema values appear (`proposed`, `draft`, `ephemeral`, `project`) — validators/agents are not consistently enforcing the enum.
- DHKW tooling exists (E10:S01:T08) but is not wired into RW/UKW cadence or operator schedule; expired scan yields nothing useful when almost nothing expires.

**Historical note:** Original work had **no FBU** — package/policy (2025-12-04) + [E02:S04:T07](../epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T07-apply-lifecycle-metadata-to-all-existing-documentation.md) mass-apply (v0.2.4.7+1). This BR is the intake surface for the reopen.

---

## Affected Component

**Primary Component:** Document Lifecycle framework (`packages/frameworks/doc-lifecycle/`)  
**Affected Areas:**
- [x] Documentation
- [x] Other: Agent rules (`.cursorrules`), RW/UKW integration, Epic 10 operationalization

**Root Cause (if known):**
1. Policy explicitly defaults uncertain docs to evergreen (“easier to archive later”).
2. Mass-apply (T07) classified standards/kanban/templates/packages as evergreen by design; subsequent agents copied that template.
3. Mapping table (IPP → transient, analysis → timeboxed) is not enforced at creation time.
4. Housekeeping automation was built later (T08) but never scheduled or gated.

---

## Steps to Reproduce

1. Sample `docs/**/*.md` frontmatter: count `lifecycle:` values.
2. Observe ~1855 `evergreen` vs ~8 `timeboxed` / ~7 `transient` under `docs/` (2026-07-11 sample).
3. Note IPP/ICW and maintenance evidence docs stamped evergreen (e.g. many `docs/implementation-cycles/IPP-*.md`).
4. Run `python3 packages/frameworks/doc-lifecycle/scripts/housekeeping_scanner.py --filter-expired --root docs` — little or no actionable expired set because evergreen docs never expire.
5. Confirm DHKW is not referenced from RW Step list or operator cheatsheet as a scheduled workflow.

**Expected:** Meaningful mix of lifecycles; expired transient/timeboxed docs eligible for archive/delete.  
**Actual:** Metadata present but inert; housekeeping cannot reduce bloat.

---

## Environment

**Environment:** Development (ai-dev-kit)  
**Version:** Current `dev` / epic worktrees as of 2026-07-11  
**Package:** `packages/frameworks/doc-lifecycle/` @ post-E10:S01:T08

---

## Impact

**User Impact:**
- [x] Medium - Some functionality affected

**Business Impact:**
Documentation bloat continues; lifecycle metadata tax (frontmatter on every file) without operational payoff. Agents spend tokens on headers that never drive cleanup.

**Workaround:**
Manual archive/delete; ignore lifecycle fields.

---

## Acceptance Criteria (Fix Requirements)

- [ ] **BR-114-AC1:** Policy and agent rules no longer treat “default evergreen” as the path of least resistance for planning/analysis/IPP/ICW/maintenance evidence — type→lifecycle mapping is mandatory for those classes.
- [ ] **BR-114-AC2:** Spot-check corpus: IPPs, verification evidence, and analysis docs use `timeboxed`/`transient` with real `ttl_days`/`expires_at` (not null), or an explicit justified evergreen exception is documented.
- [ ] **BR-114-AC3:** Invalid `lifecycle` enum values (`proposed`, `draft`, `ephemeral`, …) are rejected or migrated; validator/`--strict` path is wired where docs are created.
- [ ] **BR-114-AC4:** DHKW has an operator invocation path (cheatsheet / RW optional step / scheduled note) and at least one dry-run evidence log showing expired candidates after reclassification.
- [ ] **BR-114-AC5:** Decide and document: mass reclassify existing evergreen-misfiled docs vs forward-only enforcement (with rationale).

**Verification Method:**
- [x] Manual testing
- [ ] Test suite execution

**Fix Verification Status:**
- [ ] Attempted Fix (pending verification)

---

## Fix Attempt History

### Attempt 1: E02:S04:T07 (v0.2.4.7+1) — 2025-12-04 → REOPENED 2026-07-11

**Fix Description:**
Applied lifecycle frontmatter to 161 markdown files at the time. Standards, Kanban, templates, package docs → evergreen; analysis → timeboxed (90d). Created package policies/spec.

**Result:**
- [x] Bug Not Fixed (coverage achieved; classification + housekeeping never became operational at repo scale)

**Lessons Learned:**
- Frontmatter coverage ≠ effective lifecycle management.
- “Default to evergreen” + bulk evergreen apply poisoned the signal.
- Automation (scanner/workflow) shipped later under E10:S01:T08 but was never run as a product habit.

**Next Steps:**
- Reopen T07; revise defaults and agent enforcement; reclassify high-churn trees; operationalize DHKW.

### Attempt 2: E10:S01:T08 (v0.10.1.8+1) — 2026-06-06 — related, not sufficient

**Fix Description:**
Implemented `validate_lifecycle_metadata.py`, `housekeeping_scanner.py`, `doc-housekeeping-workflow.yaml`.

**Result:**
- [x] Bug Partially Fixed (tooling exists; corpus still evergreen-dominated; workflow unused)

---

## Dependencies

**Blocks:**
- Meaningful use of Epic 10 housekeeping value proposition

**Blocked By:**
- None for planning; implementation needs IPW/IDW authorization

**Related Work:**
- [FR-139](FR-139-unified-documentation-governance-strategy.md) (lifecycle orthogonal to doc-class taxonomy)
- [FR-058](FR-058-markdown-maintenance-workflow.md) (MMW — related markdown debt, not the same)
- Epic 10 S02 installation evaluation (still TODO)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-07-11  
**Intake By:** Agent (operator-directed reopen + review)

**Decision Flow Results:**
- [x] Story Match Found: Epic 2, Story 4 → Task T07 **reopened** (original mass-apply; no prior FBU)
- Delivery owner for package remains Epic 10; remediation may spawn E10 follow-on tasks after IPW without abandoning T07 history

**Assigned To:**
- Epic: 02 — Workflow Management / historical apply task
- Story: 04 — RW Installer & Plug-and-Play Adoption (task reopen only)
- Task: E02:S04:T07
- Version: `v0.2.4.7+2` (intake/reopen release; remediation pending IPW/IDW)

**Kanban Links:**
- Task: [E02:S04:T07](../epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption/T07-apply-lifecycle-metadata-to-all-existing-documentation.md)
- Package: `packages/frameworks/doc-lifecycle/`
- Policy SoT: `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md`

---

## Review findings (2026-07-11)

| Finding | Evidence |
|---------|----------|
| No original FBU | Package proposal + T07 only; this BR fills the gap |
| Evergreen dominance | ~1855 evergreen vs ~15 timeboxed/transient under `docs/` |
| Coverage incomplete | ~1584 `docs/**/*.md` with no frontmatter |
| Enum drift | `proposed` (39), `ephemeral` (13), `draft` (9), etc. |
| Policy self-sabotage | “Default to Evergreen” §1 of policy |
| Tooling idle | DHKW present post-T08; not in cheatsheet/RW cadence |
| IPP misclassified | Sample IPPs stamped evergreen despite mapping → transient/timeboxed |

**Recommended remediation themes (planning only — no implementation until IPW/IDW):**
1. Invert agent default for known ephemeral classes (IPP/ICW, maintenance evidence, handovers, analysis).
2. Soften or retire “default evergreen” for those paths; keep evergreen for standards/ADRs/kanban structure.
3. Wire DHKW dry-run into maintainer cadence; optional RW hook.
4. One-shot reclassify pass for `docs/implementation-cycles/` + `docs/maintenance/` + `docs/knowledge/analysis/`.
5. Align `.cursorrules` + templates + validator enum strictly.
