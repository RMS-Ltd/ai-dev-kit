---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T30 — RW architectural contract & release transaction (FR-122)

**Task ID:** E02:S01:T30  
**Status:** ✅ COMPLETE (**v0.2.1.30+8** — FR-122 program sign-off; streak **13/10**)  
**Priority:** CRITICAL  
**Estimated Effort:** Very Large (multi-wave meta program)  
**Created:** 2026-06-09  
**Last updated:** 2026-06-10 (RW **v0.2.1.30+8** — FR-122 AC4 sign-off)  
**Version Anchor:** v0.2.1.30+8  
**Code:** E02S01T30

Publication Status: NOT_APPLICABLE

---

## Scope

Own the **meta program** for [FR-122](../../../fbu/FR-122-release-workflow-architectural-contract-release-transaction.md): define what RW *must* guarantee as a release transaction, produce a gap matrix against today's bolted-on reality, and deliver incremental waves (contract doc → gates → optional orchestrator) — same shape as [FR-092](../../../fbu/FR-092-canonical-rw-ukw-kanban-consistency-program.md) / [E02:S15:T07](../../story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md).

**Triggering incident:** RW `0.6.9.26+2` (E06:S09:T26) — internal tag OK, README/CHANGELOG wrong SemVer (`v0.4.11+2`), truncated allocator DB, agent bypassed `create_rw_tags()`.

**Goal:** Prevent split-brain releases and codify RW invariants before more reactive gate FRs accrue.

---

## Associated FR/BR/UXR

| ID | Role |
| -- | ---- |
| [FR-122](../../../fbu/FR-122-release-workflow-architectural-contract-release-transaction.md) | **Primary** — meta architectural contract |
| [FR-120](../../../fbu/FR-120-semver-allocation-authority-transactional-mapping-black-box.md) | Allocator authority (RW must enforce health) |
| [FR-092](../../../fbu/FR-092-canonical-rw-ukw-kanban-consistency-program.md) | Kanban four-surface atomicity (F4) |
| [BR-097](../../../fbu/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) | Tag immutability / BUILD discipline |
| [UXR-024](../../../fbu/UXR-024-rw-local-release-default-no-push-batch-operator-push.md) | Local-complete publish policy |
| [FR-146](../../../fbu/FR-146-publish-main-workflow-pmw-readme-from-rw.md) / [E02:S03:T15](../story-03-additional-workflows-and-examples/T15-publish-main-workflow-pmw-fr146.md) | **Follow-on:** README SemVer disclosure moves to PMW when `readme_update_owner: publish` — amends FR-122 F2/F10 README-in-RW assumptions |

---

## Input

- **[IPP-E02S01T30](../../../../implementation-cycles/IPP-E02S01T30-rw-architectural-contract-release-transaction.md)** — specification, test design, waves 0–5 (IPW 2026-06-09)
- User RW architecture experiment (2026-06-09) — draft contract, gap matrix, IPP skeleton
- [FR-122](../../../fbu/FR-122-release-workflow-architectural-contract-release-transaction.md) — requirements F1–F10, NF1–NF5
- `.cursorrules` · `.claude/commands/rw.md` · `release-workflow-agent-execution.md` · `canonical-rw-steps.yaml`
- `packages/frameworks/workflow-mgt/scripts/version/create_rw_tags.py` · `semver_converter.py`
- `docs/maintenance/saa-operator-verification-e03s02t14.md` — allocator bootstrap gate (ops doc only today)

---

## Deliverable

1. **Wave 0:** RW architectural contract doc + gap matrix + proposed ADR-027
2. **Wave 1:** Allocator preflight + git-tag occupancy gates (Step 1e/1f); Step 11 `create_rw_tags` enforcement
3. **Wave 2:** `validate_release_coherence.py` (README ↔ DB ↔ `version.py`)
4. **Wave 3+:** Policy parity (`.cursorrules`, agent guide); optional `rw-contract.yaml` manifest
5. **IPP** under `docs/implementation-cycles/` (via `IPW E02:S01:T30` in plan mode)

---

## Implementation waves

| Wave | Deliverable | Status |
| ---- | ----------- | ------ |
| **0** | Contract doc + gap matrix + ADR-027 draft | ✅ COMPLETE (**v0.2.1.30+1**) |
| **1** | `validate_allocator_health.py`, `validate_git_tag_occupancy.py`, Step 1e/1f wiring | ✅ COMPLETE (**v0.2.1.30+2**) |
| **2** | `validate_release_coherence.py` | ✅ COMPLETE (**v0.2.1.30+3**) |
| **3** | Step 11 tag-authority hard gate + dual-source RW trigger parity | ✅ COMPLETE (**v0.2.1.30+4**) |
| **4** | `rw-contract.yaml` machine manifest | ✅ COMPLETE (**v0.2.1.30+5**) |
| **5** | Optional thin `rw_orchestrator.py` (PREFLIGHT/VALIDATE/PUBLISH deterministic shell) | ✅ COMPLETE (**v0.2.1.30+5**) |
| **8** | Split-brain streak auditor + sign-off evidence | ✅ COMPLETE (**v0.2.1.30+8**); streak **13/10** @ dev |

---

## Acceptance Criteria

Mirror [FR-122 AC](../../../fbu/FR-122-release-workflow-architectural-contract-release-transaction.md#acceptance-criteria). **All ACs satisfied** @ v0.2.1.30+8.

---

## Out of scope

- Replacing intelligent agent RW with a single deterministic script
- UKW redesign
- Corrective release for `0.6.9.26+2` SemVer surfaces (separate hygiene / follow-on RW)

---

## References

- [IPP-E02S01T30](../../../../implementation-cycles/IPP-E02S01T30-rw-architectural-contract-release-transaction.md)
- [FR-092 / E02:S15:T07](../../story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) — precedent meta program

---

## Planning artifacts

| Artifact | Path | Status |
| -------- | ---- | ------ |
| IPP | [`IPP-E02S01T30-rw-architectural-contract-release-transaction.md`](../../../../implementation-cycles/IPP-E02S01T30-rw-architectural-contract-release-transaction.md) | ✅ Published (IPW 2026-06-09) |
