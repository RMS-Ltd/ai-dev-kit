---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-066 - IPW missing Docusaurus filing for planning artifacts

**Status:** OPEN  
**Priority:** HIGH  
**Severity:** HIGH - planning/spec artifacts are assumed published but are not discoverable in the Docusaurus documentation system.  
**Created:** 2026-04-14  
**Last updated:** 2026-04-14 (v0.2.15.1+1 – publication contract/validator/backfill inventory shipped under E2:S15:T01)  
**Version:** v0.2.15.1+1  
**Code:** BR-066  
**Implementing Task:** [E2:S15:T01](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md)

---

## Problem Statement

IPW execution produced durable planning artifacts in repository docs (for example under `docs/implementation-cycles/`) but did not file or wire those artifacts into the Docusaurus documentation system (`portal/` navigation/content surfaces).

This creates a false-positive expectation that specifications are published/discoverable when they are only stored in repo-local markdown.

---

## Confirmed Example

- IPW target: `E2:S01:T17` (FR-077)
- Plan file: `~/.cursor/plans/ipw_e2s01t17_0af57720.plan.md`
- Durable artifacts exist:
  - `docs/implementation-cycles/ICW-E2S01T17-specification.md`
  - `docs/implementation-cycles/ICW-E2S01T17-test-design.md`
  - `docs/implementation-cycles/ICW-E2S01T17-implementation-plan.md`
- No corresponding Docusaurus filing/wiring was present for this IPW item at verification time.

---

## Expected Behavior

When IPW indicates documentation filing responsibilities (especially spec artifacts), workflow completion must include:

1. durable artifact persistence in repo docs, and
2. deterministic filing/wiring into Docusaurus documentation surfaces (or explicit, validated "not applicable" path).

---

## Observed Behavior

- IPW/T17 implementation and release completed successfully.
- Artifacts were stored in `docs/implementation-cycles/`.
- Docusaurus filing was not performed, despite expectation that it was part of IPW responsibilities.

---

## Impact

- Readers and maintainers cannot reliably find planning/spec artifacts in published docs.
- Operational decisions may be made under incorrect assumptions about what has been documented publicly.
- Documentation traceability is weakened across plan -> implementation -> published docs.

---

## Investigation Scope

1. Define exact ownership for "Docusaurus filing" in IPW lifecycle:
   - IPW itself
   - implementation execution
   - RW Step 7 or another release step
2. Inventory prior IPW runs and identify artifacts not filed into Docusaurus.
3. Determine intended Docusaurus targets (pages, category index, sidebar wiring).
4. Define failure semantics:
   - blocking vs non-blocking when filing is missing
   - required remediation output
5. Design deterministic validation checks for future enforcement.

---

## Hardening Goals

- Add explicit IPW contract language for documentation filing obligations.
- Add validator/audit check(s) that detect "durable artifact exists but Docusaurus filing missing" for applicable tasks.
- Add release-time guard or warning path so filing gaps are surfaced before closure.
- Add regression tests and a migration checklist for legacy IPW artifacts.

---

## Proposed Resolution

1. Create implementing task(s) to:
   - codify the filing contract,
   - implement deterministic checks,
   - backfill missing Docusaurus entries for identified historical IPWs.
2. Update IPW/RW/Documentation guides to remove ambiguity on filing ownership.
3. Add evidence checklist item in host task docs requiring Docusaurus filing verification (or justified N/A).

---

## Related

- [FR-042](FR-042-implementation-planning-workflow-ipw.md)
- [FR-077](FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [E2:S01:T17](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md)
- `docs/implementation-cycles/ICW-E2S01T17-*`


## Backfill Inventory and Phasing

- Inventory report: `docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md`.
- Phase 1: wire known high-impact missing links (starting with E2:S01:T17).
- Phase 2: complete historical backlog using deterministic validator-driven sweeps.


## Release Evidence

- Release anchor: `v0.2.15.1+1` (`v0.4.739+1` SemVer).
- Deterministic validator: `validate_ipw_publication_wiring.py`.
- Backfill inventory: `docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md`.
