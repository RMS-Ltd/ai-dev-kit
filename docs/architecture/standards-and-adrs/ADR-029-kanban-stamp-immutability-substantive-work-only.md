---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-029: Kanban Stamp Immutability — Timestamps Reflect Substantive Task Work Only

**Status:** Accepted  
**Date:** 2026-06-12  
**Accepted:** 2026-06-12  
**Deciders:** Maintainer  
**Implementing task:** [E02:S15:T14](../../kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T14-kanban-stamp-immutability-adr029-framework-defaults-fr130.md)  
**Origin FR:** [FR-130](../../kanban/fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)  
**Origin:** Drafted at Starborn Legacy during [E06:S09:T26](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) (ADK install program). **ADK numbering:** ADR-029 — [ADR-028](ADR-028-agentic-kanban-migration-brownfield-fr127.md) is reserved for agentic KMA brownfield migration.  
**Related:** [FR-097](../../kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) · [ADR-009](ADR-009-ukw-deep-reprioritization-rp-flag.md) · [UXR-009](../../kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)

---

## Context

Kanban MoSCOW row `| Last modified:` timestamps serve two functions:

1. **Forensic triage** — when was meaningful progress last made on this task?
2. **Staleness detection** — which tasks have gone untouched?

In practice, timestamps are overwritten by:

- **Structure-only passes**: board-hygiene scripts, alias migrations, MoSCOW reorder, deduplication, path normalization, archive pruning
- **Migration events**: legacy-to-v3.2 struct conversion, pre-ADK install transforms, canonical-epic adoption
- **Agentic board updates**: UKW/RW runs that touch rows for meta-work (synthesis, narrative, status inference) but do not advance the task itself

Each of these operations can stamp every touched row with `now()`, even when zero substantive work occurred on the linked task. The result is a board where all timestamps converge on "last script run" — making staleness and forensic analysis impossible.

### The root cause

No previous ADR has formally defined the boundary between **substantive work** and **meta-work** for the purpose of timestamp writes at the **architectural invariant** layer. [FR-097](../../kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) (Board stamp authority) and `enforce_moscow_row_timestamps_with_stats` introduced evidence modes (`non_substantive`, `gated`, `work_authoritative`) but:

- The default `evidence_mode` on `enforce_moscow_row_timestamps_with_stats` and `apply_canonical_row_transform_pipeline` remains `work_authoritative` (stamp-friendly)
- No architectural invariant prohibits stamping during meta-work at the framework default layer
- Workflows (RW Step 7, UKW) still invoke paths that inherit the permissive default unless callers override explicitly
- Individual agents and operators are expected to "remember" the rule, which fails in practice (observed at SBL during ADK install)

**ADK note:** `normalize_board_row_timestamps.py` was **removed** in v0.2.15.8+3 (see [kanban-governance-policy.md](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md)). The mandates below apply to all **current and future** row-stamp entrypoints — principally `enforce_moscow_row_timestamps_with_stats`, `apply_canonical_row_transform_pipeline`, and migration/install paths — not to restoring the deleted script.

### Meta-work vs substantive work

| Category | Examples | Is timestamp update allowed? |
|----------|----------|------------------------------|
| **Substantive** | Code delivered, bug fixed, FR implemented, design signed off, test written, documentation of task-completion evidence | Yes |
| **Meta-work** | Board hygiene, alias migration, path normalization, v3.2 struct conversion, MoSCOW reorder, deduplication, icon normalization, synthesis/narrative updates, archive pruning | **No** |
| **Migration** | Legacy-to-v3.2 struct conversion, pre-ADK install transform, canonical-epic adoption, KMA corpus transforms | **No** — structural, not task-progress |

---

## Decision

### Principle (the invariant)

> **Kanban MoSCOW row `| Last modified:` timestamps are effectively immutable. They may be updated only when the operation performing the write constitutes substantive work on the linked task — advancing the task toward its stated objective. Meta-work, structure-only passes, migration, and any operation whose primary output is administrative rather than task-progress must not modify timestamps.**

### Specific mandates

1. **All ADK scripts** that touch MoSCOW row timestamps MUST default to `non_substantive` evidence mode (preserve existing stamps). The only way to stamp is with an explicit affirmative assertion at invocation time:
   - **CLI:** `--stamp-substantive` (or equivalent)
   - **Python API:** `evidence_mode=work_authoritative` passed explicitly by the caller

2. **Row-stamp normalization entrypoints** (including any successor to the removed `normalize_board_row_timestamps.py`) MUST refuse to update timestamps unless called with `--stamp-substantive` / `evidence_mode=work_authoritative`. Without that flag, they perform a dry-run (report what would change) but write nothing.

3. **`enforce_moscow_row_timestamps_with_stats`** and **`apply_canonical_row_transform_pipeline`** MUST ship with `non_substantive` as the default `evidence_mode` (the current default `work_authoritative` is the wrong default for the general case). Callers that genuinely advance tasks (e.g. RW Step 7 marking release-scope tasks COMPLETE with evidence) pass `work_authoritative` explicitly.

4. **All ADK workflows** (RW, UKW, MWF, KMA board-touch legs, etc.) MUST invoke timestamp operations in `non_substantive` mode by default. Only the specific RW Step 7 sub-step that marks tasks COMPLETE with release evidence may use `work_authoritative`.

5. **`validate_board_stamp_diff.py`** ([FR-097](../../kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) Wave 2) is **mandatory and blocking** in all workflows that touch boards — not advisory. A stamp delta without matching evidence in the same change set aborts the workflow.

6. **Migration scripts** (`install_kanban_framework.py` migration modes, struct converters, KMA write phases, etc.) MUST NOT stamp rows. They may set timestamps to `null` or omit them entirely; they may not fabricate `now()`.

### Definition of substantive work (binding)

For the purpose of timestamp writes, **substantive work** means:

> A change to the codebase, design, or documentation that directly advances the linked task's stated objective. Examples: code commit that implements the feature, bug-fix patch, signed-off design document, test that validates the acceptance criteria.

**Meta-work** is everything else, including but not limited to:

- Board restructuring (any format or schema change to Kanban docs)
- Migration between struct versions (e.g. legacy → v3.2)
- Path normalization, alias resolution, padding changes
- MoSCOW re-prioritization (already covered by [ADR-009](ADR-009-ukw-deep-reprioritization-rp-flag.md) §7)
- Synthesis, narrative update, status inference (UKW core work)
- Icon normalization, cosmetic corrections
- Deduplication, archive pruning, hygiene passes
- Any operation whose output is primarily to Kanban docs (admin) rather than to the task's deliverable

---

## Consequences

### Positive

- **Forensic integrity restored**: timestamps reliably indicate when a task was last substantively advanced
- **Staleness detection works**: tasks with old timestamps are genuinely stale, not just "last touched by a script"
- **Universal invariant**: the rule lives at the ADK architectural layer, not in an agent's instructions
- **Trickle-down by design**: downstream projects (SBL, any adopter) inherit this through `update_adk_packages.py` and framework installer defaults
- **Testable**: after the ADK release containing this ADR's implementation, adopters' timestamp call sites should show `non_substantive` defaults unless explicitly substantive

### Negative / trade-offs

- **Existing timestamps may be "wrong"** (set by prior meta-work) and won't self-correct. Backfill ([FR-097](../../kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) Wave 4 / `backfill_board_row_stamps.py`) addresses this; it is a separate operation.
- **Agents doing legitimate substantive work** must pass `--stamp-substantive` / `work_authoritative` explicitly (or the workflow step handles it). Training/onboarding cost.
- **Breaking change**: any adopter workflow that relied on automatic timestamp updates will see them stop. Mitigation: the flag is additive; existing scripts don't break, they preserve stamps.

### Risks

- **Flag fatigue**: explicit substantive assertion may be forgotten. Mitigation: workflow handlers (RW, UKW) are the primary invocation paths and will be updated centrally; manual invocations are rare.
- **False negatives**: substantive work without the flag leaves the board stamp unchanged. Acceptable — git commit timestamps and changelogs remain authoritative; board stamps are supplementary.
- **Downstream lag**: adopters won't see defaults change until they update their ADK vendor pin and re-run framework install. By design — validates trickle-down.

---

## Compliance (implementation checklist)

| Item | Status |
| ---- | ------ |
| `enforce_moscow_row_timestamps_with_stats` default → `non_substantive` | Done (v0.2.15.14+1) |
| `apply_canonical_row_transform_pipeline` default → `non_substantive` | Done (v0.2.15.14+1) |
| `enforce_moscow_row_timestamps` thin wrapper passes explicit mode or inherits safe default | Done (inherits safe default) |
| RW Step 7 / UKW default invocations → `non_substantive`; release-complete sub-step → `work_authoritative` only | Done (RW `update_kanban_board` explicit; UKW via `enforce_terminal_timestamps_on_boards` default) |
| CLI `--stamp-substantive` on any stamp-normalization entrypoint (if reintroduced) | Deferred (no normalization entrypoint; use `evidence_mode=` API) |
| Migration / KMA paths: no `now()` row stamps | Done (inherits defaults; KMA agent contract in ADR-028) |
| `validate_board_stamp_diff.py` blocking on all board-touching workflows (verify no advisory bypass) | Done (FR-097; unchanged) |
| [kanban-governance-policy.md](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md) cross-link ADR-029 | Done (v0.2.15.14+1) |
| FR-097: ADR-029 supersedes permissive default edges (Wave 3 hardening now mandated) | Done |
| **Release** | **v0.2.15.14+1** — [FR-130](../../kanban/fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md) / [E02:S15:T14](../../kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T14-kanban-stamp-immutability-adr029-framework-defaults-fr130.md) |

---

## References

- [FR-097: Board stamp authority, blocking validation, and forensic timestamp recovery](../../kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)
- [ADR-009: UKW deep reprioritization (`--rp` flag)](ADR-009-ukw-deep-reprioritization-rp-flag.md) — §7: no batch rewrite of row `Last modified` stamps
- [UXR-009: Last-modified stamp forensic integrity and drift protection](../../kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)
- [kanban-governance-policy.md](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md) — Board Stamp Authority section
- [update_kanban_docs.py](../../../packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py) — `enforce_moscow_row_timestamps_with_stats`, `EVIDENCE_MODE_*`
- [validate_board_stamp_diff.py](../../../packages/frameworks/workflow-mgt/scripts/validation/validate_board_stamp_diff.py)
- [backfill_board_row_stamps.py](../../../packages/frameworks/workflow-mgt/scripts/kanban/backfill_board_row_stamps.py)
- [E06:S09:T26 — Starborn Legacy ADK install program](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) — origin context
