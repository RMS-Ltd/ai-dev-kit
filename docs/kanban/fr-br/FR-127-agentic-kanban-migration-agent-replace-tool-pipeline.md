---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-11T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-127: Agentic kanban migration agent (replace detect→analyze→migrate pipeline)

**Type:** Feature Request (FR)  
**ID:** FR-127  
**Submitted:** 2026-06-11  
**Submitted By:** Starborn Legacy adopter (attempt 06 FR-079 package)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** IMPLEMENTED (v0.6.9.31+1 — E06:S09:T31)

**Implementing Task:** [E06:S09:T31](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md)

**Related:** [FR-081](FR-081-brownfield-modular-adopter-integration.md) · [UXR-025](UXR-025-starborn-legacy-greenfield-install-diary.md) · [E06:S09:T26](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) · triage **F22**

**SBL evidence:** `starborn_legacy/logs/ai-dev-kit/install/attempt-06/feedback-package/kanban-migration-experiment-report.md` · `feedback-payload.json` (`requested_improvements[0–1]`)

---

## Summary

Replace the Kanban **migration tool pipeline** (`detect_existing_structure.py` → `analyze_structure.py` → `migrate_structure.py` migration modes) with an **agentic migration agent** that ingests a legacy corpus, proposes a domain-optimised target structure, executes after operator review, and validates the result.

Starborn Legacy attempt 06 proved the tool pipeline detected **0/80+** stories while an agentic approach migrated **72 stories** into E01–E10 + E21–E28.

---

## Problem Statement

The current migration toolchain assumes canonical ADK naming and semantic similarity to framework epics. Domain-specific adopters (games, vertical products) have:

- Non-canonical story filenames (`E{epic}-S{story}.md` in `stories/` subdirs)
- Inline task tokens instead of separate task files
- Legacy epic numbering that does not map 1:1 to v3.2 framework epics
- Content that requires **synthesis** (merge/split epics), not verbatim copy

Attempt 06 experiment: semantic matcher scored all SBL epics below 21% against framework templates; detector found 0 stories.

---

## Requirements

### Functional

- [x] **FR-127-F1:** Agent ingests full legacy kanban corpus (epic docs, story files, task references, board state) — not directory listing only.
- [x] **FR-127-F2:** Agent proposes target structure optimised for **project domain**, with explicit keep/drop/merge rationale.
- [x] **FR-127-F3:** Operator review gate before file writes; refinements via dialogue.
- [x] **FR-127-F4:** Agent executes migration (synthesised epic docs, renamed stories, cross-references) and runs sign-off validation.
- [x] **FR-127-F5:** Deprecate or gate migration modes on the legacy tool pipeline; document `--mode fresh` as the retained automated path.

### Non-functional

- [x] **FR-127-NF1:** Preserve legacy source tree (dual-tree / archive) per FR-081 brownfield contract.
- [x] **FR-127-NF2:** Kboard template shipped via [UXR-028](UXR-028-kboard-v3dot2-packaged-template-alignment.md) / [E04:S19:T13](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T13-kboard-v3dot2-packaged-template-uxr028.md). Populated example optional on T13.

---

## Acceptance criteria

- [x] SBL-style legacy corpus — minimal fixture + optional full replay test (`SBL_LEGACY_KANBAN_ROOT`); SBL attempt 06 evidence retained.
- [x] Tool pipeline migration modes gated; deprecation guide published.
- [x] INSTALL / brownfield guide updated with agentic migration profile (KMA).

**Delivered:** v0.6.9.31+1 · [ADR-028](../../architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md) · [KMA guide](../../../packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md)
