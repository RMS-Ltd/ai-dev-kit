---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T08 – Sync Packaged Workflows With Live Repo Implementation

**Task ID:** E02:S13:T08  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium–Large  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03  
**Epic:** E02 – Workflow Management Framework  
**Story:** E02:S13 – Workflow Management Package Implementation Review  
**Code:** E02S13T08  
**Version Anchor:** ✅ COMPLETE (v0.2.13.8+2)  
**Source FR:** [FR-106](../../../fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md)

---

## Scope

Reconcile **packaged workflow artefacts** under `packages/frameworks/workflow mgt/` with the **live agent execution spec** used in ai-dev-kit (root `.cursorrules`, `.claude/commands/`, `KB/.../vwmp/*-agent-execution.md`, validators). Adopters copy the package and portable rule excerpts; drift causes wrong RW/UKW behavior, stale validator lists, and inconsistent step numbering.

**In scope:**

1. **RW dual-source parity (extend [T66](../../Epic-5/Story-001-fr-repo/T66-cursorrules-vs-packaged-rw-trigger-parity.md) pass):** Port post-BR-074 / FR-097 / FR-092 Step 9 validators from root `.cursorrules` into `cursorrules-rw-trigger-section.md` and `.claude/commands/rw.md`; update [`rw-trigger-dual-source-parity.md`](../../../../../../packages/frameworks/workflow%20mgt/docs/rw-trigger-dual-source-parity.md) checklist + delta log.
2. **`canonical-rw-steps.yaml`:** Refresh step definitions, ordering, and execution paths to match live RW semantics (BR/FR step, scoped Step 7 kanban, Step 9 validator set, sub-steps 9.5 / 9.6 / 12.5).
3. **Workflow YAML:** Align `workflows/release-workflow/release-workflow.yaml` (registry SoT) with live RW; remove or redirect stale flat copy `workflows/release-workflow.yaml`; fix legacy default paths (`confidentia/version.py`, old kanban paths); expand Step 10 validator list to match live spec.
4. **`workflow-registry.yaml`:** Correct step counts and descriptions where they disagree with YAML + vwmp guides (e.g. UKW, PKG-VERSION).
5. **UKW portable excerpt:** Verify `cursorrules-ukw-trigger-section.md` still matches root `.cursorrules` UKW block (flags, Step 2.5, FR-097 stamp rules, BR-059 coverage).
6. **Validation / evidence:** Run `validate_canonical_steps.py`, `validate-workflow-docs.py`, and document results; optional: tighten `validate_canonical_steps.py` id-matching (`step-N` vs `step-N:` false positives).

**Out of scope (separate tasks):**

- Full E02:S13:T02–T06 RC review sequence (this task **implements** sync; T05 may consume its gap notes).
- FR-050 workflows directory reorganization (pending intake) unless trivial dedup is required for T08 ACs.
- Runtime validator or script behavior changes unless required to reflect corrected packaged docs/YAML.

---

## Problem statement

Live workflow behavior evolves in repo-root agent specs and vwmp guides, while packaged YAML, `canonical-rw-steps.yaml`, and adopter-facing rule excerpts lag. Known drift includes: incomplete Step 9 validator lists in portable RW excerpt and `release-workflow.yaml`; duplicate `release-workflow.yaml` versions; stale canonical step ordering; registry step-count mismatches. **E05:S01:T66** closed RW guardrail parity (1b/1c/1d) but subsequent FR-097 additions were not ported.

---

## Inputs

- **IPP:** [`IPP-E02S13T08-sync-packaged-workflows-live-spec.md`](../../../../implementation-cycles/IPP-E02S13T08-sync-packaged-workflows-live-spec.md)
- Live spec: `.cursorrules`, `.claude/commands/rw.md`, `.claude/commands/ukw.md`, `.claude/commands/ipw.md`
- Packaged: `packages/frameworks/workflow mgt/workflows/`, `canonical-rw-steps.yaml`, `cursorrules-*-trigger-section.md`, `workflow-registry.yaml`
- vwmp guides: `KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`, `update-kanban-workflow-agent-execution.md`
- Parity doc: `packages/frameworks/workflow mgt/docs/rw-trigger-dual-source-parity.md`
- Baseline: [E02:S13:T01](./T01-expectations-baseline.md)
- Related completed work: [E05:S01:T56](../../Epic-5/Story-001-fr-repo/T56-standardize-packaged-workflow-documentation-and-instructions.md), [E05:S01:T66](../../Epic-5/Story-001-fr-repo/T66-cursorrules-vs-packaged-rw-trigger-parity.md)
- Perpetual maintenance overlap: [E02:S16:T03](../Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)

---

## Deliverables

1. Updated packaged workflow YAML(s) and `workflow-registry.yaml` aligned with live RW/UKW semantics.
2. Refreshed `canonical-rw-steps.yaml` consistent with live step model.
3. Dual-source RW parity pass documented in `rw-trigger-dual-source-parity.md` (checklist items + delta log entry).
4. Updated portable rule excerpts and `.claude/commands/rw.md` (and UKW excerpt if deltas found).
5. Short **sync report** section in this task doc (or linked note): surfaces touched, before/after summary, validator run output.

---

## Approach

1. Diff live RW Step 9 + Step 7 wording against portable excerpt, Claude command, YAML, and `canonical-rw-steps.yaml`.
2. Apply updates package-side; dedupe or deprecate flat `workflows/release-workflow.yaml` with README/registry pointer to subdirectory SoT.
3. Refresh registry metadata and any affected workflow READMEs (minimal — only where step counts or validator lists changed).
4. Run packaged validators; fix any false-positive issues in `validate_canonical_steps.py` if blocking honest green runs.
5. Cross-link T08 from Story-013 and note dependency for T03/T05.

---

## Acceptance Criteria

- [x] **AC1:** `cursorrules-rw-trigger-section.md` Step 9 validator list matches root `.cursorrules` (including `check_changelog_size.py`, `validate_changelog_archive_links.py`, `validate_board_stamp_diff.py`, `validate_kanban_state_icons.py`, `validate_release_readiness.py` where applicable).
- [x] **AC2:** `.claude/commands/rw.md` Step 9 matches the same validator set and `--art` propagation rules as root `.cursorrules`.
- [x] **AC3:** `canonical-rw-steps.yaml` step order/names reflect live RW (BR/FR update, scoped kanban Step 7, staging, validators, CMW 9.5, IDE 9.6, commit/tag/push/housekeeping); `validate_canonical_steps.py` reports zero warnings OR warnings are documented as intentional with fix ticket.
- [x] **AC4:** Single authoritative `release-workflow.yaml` (subdirectory); stale flat copy removed or clearly deprecated; Step 10 validators and config paths use ai-dev-kit placeholders / `rw-config` patterns, not legacy `confidentia` paths.
- [x] **AC5:** `workflow-registry.yaml` step counts/descriptions match updated YAML for RW, UKW, and PKG-VERSION at minimum.
- [x] **AC6:** `rw-trigger-dual-source-parity.md` checklist extended for Step 9 FR-097/FR-092 validators + `.claude/commands/rw.md`; delta log entry appended for T08 pass.
- [x] **AC7:** `validate-workflow-docs.py` still passes (0 errors) after README touch-ups.

---

## Dependencies

- **Soft:** [E02:S13:T01](./T01-expectations-baseline.md) (baseline expectations).
- **Coordination:** [E02:S16:T03](../Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) for ongoing dual-source maintenance after T08 ships.
- **IPW gate:** Satisfied — [IPP-E02S13T08](../../../../implementation-cycles/IPP-E02S13T08-sync-packaged-workflows-live-spec.md) linked; implementation complete pending **`RW E02:S13:T08`** for version marker.

---

## Related Work

- **[FR-106](../../../fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md)** — source feature request (implementing task)
- [FR-049](../../../fr-br/FR-049-canonical-rw-step-list-single-source-of-truth.md) — canonical step list refreshed (`canonical-rw-steps.yaml` v2.0.0, 2026-06-03)
- [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md) — directory reorg (pending intake)
- [FR-056](../../../fr-br/FR-056-standardize-packaged-workflow-documentation-and-instructions.md) — packaged README standardization (complete)
- [E02:S13:T03–T05](./T01-expectations-baseline.md) — validation / gap log (may reference T08 evidence)

---

## Sync report (E02:S13:T08)

**Surfaces touched:** `cursorrules-rw-trigger-section.md`, `.claude/commands/rw.md`, `canonical-rw-steps.yaml`, `workflows/release-workflow/release-workflow.yaml`, flat `workflows/release-workflow.yaml` (deprecated), `workflow-registry.yaml`, `rw-trigger-dual-source-parity.md`, `cursorrules-ukw-trigger-section.md`, `workflows/release-workflow/README.md`, `release-workflow-agent-execution.md` (tracker + numbering callout).

**Step 9 validator set (aligned):** `validate_branch_context.py`, `validate_changelog_format.py`, `validate_version_bump.py`, `check_changelog_size.py`, `validate_changelog_archive_links.py`, `validate_board_stamp_diff.py`, `validate_kanban_state_icons.py`, `validate_release_readiness.py`.

**Validator runs (2026-06-03):**

- `validate_canonical_steps.py` — exit 0 (matcher fix: `id: step-N` in YAML)
- `validate-workflow-docs.py` — exit 0 (0 errors, 0 warnings)

---

## References

- **IPP:** [`IPP-E02S13T08-sync-packaged-workflows-live-spec.md`](../../../../implementation-cycles/IPP-E02S13T08-sync-packaged-workflows-live-spec.md)
- Package root: `packages/frameworks/workflow mgt/`
- Story: [`Story-013-workflow-management-package-implementation-review.md`](../Story-013-workflow-management-package-implementation-review.md)
