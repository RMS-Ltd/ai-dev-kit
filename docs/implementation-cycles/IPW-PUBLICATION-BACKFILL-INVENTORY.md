---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# IPW Publication Backfill Inventory (BR-066)

## Method

- Scanned `docs/implementation-cycles/` for task-addressed planning artifacts matching `ICW-E*S*T*` or `IPW-E*S*T*`.
- Scanned task docs under `docs/project-management/kanban/epics/**/T*.md` for explicit links to those artifact basenames.
- Marked artifacts as **missing wiring** when basename was not referenced by any task doc.

## Initial Results

- Task-addressed artifacts scanned: 45
- Missing task-doc wiring references: 16

### Missing wiring sample (first 25)

- `ICW-E10S01T01-specification.md`
- `ICW-E11S01T01-specification.md`
- `ICW-E1S06T01-specification.md`
- `ICW-E4S11T07-specification.md`
- `ICW-E5S01T35-implementation-plan.md`
- `ICW-E5S01T35-package-summary.md`
- `ICW-E5S01T35-specification.md`
- `ICW-E5S01T35-test-design.md`
- `ICW-E5S01T46-specification.md`
- `ICW-E5S01T46-test-design.md`
- `ICW-E6S07T106-specification.md`
- `ICW-E6S07T18-specification.md`
- `ICW-E7S01T07-implementation-plan.md`
- `ICW-E7S01T07-specification.md`
- `ICW-E7S01T07-test-design.md`
- `ICW-E8S04T01-specification.md`

## Phased Backfill Plan

1. **Phase 1 (quick wins):** Wire high-confidence known gaps used in active governance work (starting with `E2:S01:T17` and adjacent FR-077 lineage).
2. **Phase 2 (bulk):** Run validator-driven sweep per story, add task-level links for each artifact package.
3. **Phase 3 (enforcement):** Gate release closure for applicable tasks on `validate_ipw_publication_wiring.py --requested E:S:T` pass (or explicit `NOT_APPLICABLE` with reason).
4. **Phase 4 (maintenance):** Add periodic audit in UKW/RW ops cadence to prevent drift recurrence.
