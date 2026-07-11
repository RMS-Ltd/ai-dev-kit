---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:49:59Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 4, Task 7: Apply lifecycle metadata to all existing documentation

**Task ID:** E02:S04:T07  
**Status:** 🔁 REOPENED / IN PROGRESS — Prior attempt v0.2.4.7+1 was coverage-only; reopen release **v0.2.4.7+2** (BR-114 intake)  
**Priority:** HIGH  
**Created:** 2025-12-04  
**Last updated:** 2026-07-11 (RW E02:S04:T07 --art — v0.2.4.7+2 / SemVer v0.4.1249)  
**Version:** v0.2.4.7+2  
**Code:** E02S04T07

**Associated BR:** [BR-114](../../../fbu/BR-114-doc-lifecycle-housekeeping-evergreen-default-ineffective.md)

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S04:T07`

---

## REOPENED (2026-07-11)

**Why:** Operator review found lifecycle frontmatter is nearly always `evergreen` / `keep` / `ttl_days: null`, so TTL-based housekeeping never runs. Original work had **no FBU**; BR-114 is the intake surface.

**Previous attempt (v0.2.4.7+1):**
- Mass-applied frontmatter to 161 files (then-current corpus).
- Classified standards/kanban/templates/packages as evergreen; analysis as timeboxed.
- Package policies/spec created under `packages/frameworks/doc-lifecycle/`.

**Current evidence (2026-07-11):**
- `docs/` sample: ~1855 `evergreen` vs ~8 `timeboxed` / ~7 `transient`; ~1584 files with no frontmatter.
- Invalid enum values in the wild (`proposed`, `draft`, `ephemeral`, …).
- DHKW scripts exist via [E10:S01:T08](../../epic-10/story-01-document-lifecycle-package-implementation-review/T08-implement-doc-housekeeping-workflow-and-scripts.md) but are not operationalized.
- Policy §“Default to Evergreen” encourages the failure mode.

**Package owner:** Epic 10 remains SoT for `doc-lifecycle`; this task owns the original apply + reopen remediation coordination. Follow-on E10 tasks may be filed after IPW without abandoning this history.

---

## Scope (reopen)

Remediate ineffective lifecycle classification and operationalize housekeeping so metadata drives cleanup:

1. Revise agent/policy defaults for ephemeral doc classes (IPP/ICW, maintenance evidence, analysis, handovers).
2. Reclassify (or define forward-only policy) for high-churn trees currently misfiled as evergreen.
3. Enforce lifecycle enum; migrate invalid values.
4. Operator path for DHKW (dry-run evidence + cadence).
5. Align `.cursorrules`, templates, validators with five-field spec + type→lifecycle mapping.

**Out of scope until IPW:** Mass file edits / script changes (FR-083 gate).

---

## Input

- Document Lifecycle Management package (`packages/frameworks/doc-lifecycle/`)
- [doc-lifecycle-policy.md](../../../../architecture/standards-and-adrs/doc-lifecycle-policy.md)
- [doc-lifecycle-metadata-spec.md](../../../../architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md)
- [BR-114](../../../fbu/BR-114-doc-lifecycle-housekeeping-evergreen-default-ineffective.md)
- E10:S01 behavior/gap reports (T03–T05) and T08 DHKW implementation

---

## Deliverable

**Prior (v0.2.4.7+1):** ✅ Frontmatter coverage on then-161 files.

**Reopen target:** Effective classification + runnable housekeeping per BR-114 AC1–AC5.

---

## Acceptance Criteria

### Original (v0.2.4.7+1) — historical

- [x] All KB markdown files have lifecycle metadata (at time of apply)
- [x] All package markdown files have lifecycle metadata
- [x] Proper lifecycle classification applied (as then understood)
- [x] 100% coverage achieved (161/161)

### Reopen (BR-114) — open

- [ ] BR-114-AC1 through AC5 satisfied (see BR)
- [ ] IPP linked before implementation (FR-083)
- [ ] Bidirectional wiring BR-114 ↔ this task maintained

---

## Version Anchor

**Forensic Marker:** `🔄 REOPENED / IN PROGRESS (v0.2.4.7+2)` — SemVer **v0.4.1249**

Last historical COMPLETE: `✅ COMPLETE (v0.2.4.7+1)` (coverage-only; superseded by BR-114 reopen)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption.md`
