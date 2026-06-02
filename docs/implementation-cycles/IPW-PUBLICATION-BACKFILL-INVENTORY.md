---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# IPW Publication Backfill Inventory (BR-066)

## Method

- Scanned `docs/implementation-cycles/` for task-addressed planning artifacts matching `ICW-E*S*T*`, `IPW-E*S*T*`, or `IPP-E*S*T*`.
- Scanned task docs under `docs/project-management/kanban/epics/**` for explicit markdown links to those artifact basenames.
- Marked artifacts as **missing wiring** when basename was not referenced by any kanban task doc.
- Phase 2 (2026-06-02): run `validate_ipw_publication_wiring.py --audit-inventory` for authoritative unwired list.

## Phase 1 baseline (2026-04-14)

- Task-addressed artifacts scanned: 45
- Missing task-doc wiring references: **16**

### Phase 1 missing wiring sample

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

## Phase 2 targeted backfill (2026-06-02)

Wired the Phase 1 sample set from host task docs or story task anchors:

| Artifact | Host surface |
| -------- | ------------- |
| `ICW-E5S01T35-*` (+ package-summary) | `Epic-5/Story-001-fr-repo/T35-task-template-cross-wiring-section.md` |
| `ICW-E5S01T46-*` (+ existing IPP plan) | `Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md` |
| `ICW-E6S07T106-specification.md` | `Epic-6/.../T106-windsurf-migration-cursorrules-to-workflows.md` |
| `ICW-E6S07T18-specification.md` | `Epic-6/.../T18-tool-agnostic-workflow-step-tracking-and-runlogs.md` |
| `ICW-E7S01T07-*` | `Epic-7/.../T07-markdown-maintenance-workflow.md` |
| `ICW-E1S06T01-specification.md` | `Epic-1/.../T01-setup-byob-badges-for-private-repository.md` |
| `ICW-E4S11T07-specification.md` | `Epic-4/.../T07-planning-spec-tests-impl.md` |
| `ICW-E10S01T01-specification.md` | `Epic-10/Story-001-document-lifecycle-package-implementation-review.md` (T01 anchor) |
| `ICW-E11S01T01-specification.md` | `Epic-11/Story-001-debug-path-package-implementation-review.md` (T01 anchor) |
| `ICW-E8S04T01-specification.md` | `Epic-8/Story-004-tooling-automation-package-implementation-review.md` (T01 anchor) |

**Quick win (Phase 1):** `E02:S01:T17` ICW trio already wired in `T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md`.

## Post–Phase 2 audit

Re-run from repo root:

```bash
python "packages/frameworks/workflow mgt/scripts/validation/validate_ipw_publication_wiring.py" --audit-inventory
```

Record the printed **scanned** and **missing wiring** counts below after each maintenance wave.

| Date | Scanned | Unwired | Notes |
| ---- | ------- | ------- | ----- |
| 2026-06-02 | 109 | 28 | Phase 1 sample (16 rows) wired; audit uses EST+kind alias matching (padded vs unpadded link targets). Remaining 28 unwired artifacts need future waves. |

## Phased plan (ongoing)

1. **Phase 1 (complete):** Contract + single-task validator + inventory baseline.
2. **Phase 2 (complete):** Bulk audit mode, tests, targeted wiring for inventory sample ([IPP-E02S15T01-br066-publication-backfill-phase2.md](./IPP-E02S15T01-br066-publication-backfill-phase2.md)).
3. **Phase 3 (optional):** Gate release closure for applicable tasks on `--requested` pass (ADR not filed — EXEMPT in Phase 2).
4. **Phase 4 (maintenance):** Periodic `--audit-inventory` in UKW/RW ops cadence.
