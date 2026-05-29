---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-25T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Task T06 – CMW Epic 5 execution context (FR-063)

**Task ID:** E5:S02:T06  
**Status:** ✅ COMPLETE (intake + CMW baseline; FR-063 R01–R04 implementation follow-up)  
**Priority:** MEDIUM  
**Estimated Effort:** Medium (1–2 days)  
**Created:** 2026-03-25  
**Last updated:** 2026-03-25 (v0.5.2.6+1 – RW)

**Associated FR:** [FR-063](../../../fr-br/FR-063-cmw-epic-5-execution-context.md)

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E5:S02:T06`

**Repository Pattern:** FR-063 = E5:S02:T06

---

## Scope

Implement [FR-063](../../../fr-br/FR-063-cmw-epic-5-execution-context.md): **document and enforce Epic 5 execution context for standalone Changelog Management Workflow (CMW)** so branch/`version.py` alignment matches **Release Workflow (RW)** branch safety, while **RW Step 9.5** continues to run CMW on the **active RW epic branch**.

**Includes:**

- Documentation updates (CMW workflow YAML, `scripts/changelog/README.md`, `.cursor/skills/cmw-maintain/SKILL.md`, RW Step 9.5 / agent execution guide).
- **`cmw.py` (or helper):** blocking precondition for standalone runs; **opt-out / flag** for RW Step 9.5 caller.
- **`rw-config.yaml` / `cmw-config`:** configurable required epic and branch pattern; documented adopter overrides.

**Coordinates with:** [E2:S16:T03](../../../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) (perpetual CMW maintenance — reconcile messaging in docs).

---

## Input

- [FR-063](../../../fr-br/FR-063-cmw-epic-5-execution-context.md)
- `packages/frameworks/workflow mgt/scripts/changelog/cmw.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- Epic 5 branch: `epic/5-documentation-management` ([Epic-5.md](../Epic-5.md))

---

## Deliverable

**Shipped (v0.5.2.6+1):**

- [x] FR-063 filed; implementing task linked; prioritization board + Epic 5 story updated.
- [x] CMW (`latest_only`) executed on `epic/5-documentation-management` (main changelog + `CHANGELOG_ARCHIVE.md`).

**Follow-up (FR-063 / future build):**

- [ ] Standalone `cmw.py` fails fast when branch/version epic ≠ configured Epic 5 context (with clear errors).
- [ ] RW Step 9.5 path documented and implemented (no false E5 requirement during RW on other epics).
- [ ] Config keys and defaults documented for ai-dev-kit and adopters.
- [ ] All FR-063 documentation requirements satisfied (packaged workflow YAML, skill, execution guide).

---

## Acceptance Criteria

- [x] Task listed in [Story-002-documentation-maintenance-framework.md](../Story-002-documentation-maintenance-framework.md) checklist; FR-063 links to this task.
- [ ] FR-063 acceptance criteria AC1–AC4 satisfied (see FR) — **implementation pending**.

---

## Version Anchor

**Forensic Marker:** ✅ COMPLETE (v0.5.2.6+1) — intake + CMW baseline only.

---

## References

- **FR-063:** [FR-063-cmw-epic-5-execution-context.md](../../../fr-br/FR-063-cmw-epic-5-execution-context.md)
- **CMW perpetual task:** [T102 — CMW](../../../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
