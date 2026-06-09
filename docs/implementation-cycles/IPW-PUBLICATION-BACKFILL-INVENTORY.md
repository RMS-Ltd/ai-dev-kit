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
- Scanned task docs under `docs/kanban/epics/**` for explicit markdown links to those artifact basenames.
- Marked artifacts as **missing wiring** when basename was not referenced by any kanban task doc.
- Phase 2 (2026-06-02): run `validate_ipw_publication_wiring.py --audit-inventory` for authoritative unwired list.

## Phase 1 baseline (2026-04-14)

- Task-addressed artifacts scanned: 45
- Missing task-doc wiring references: **16**

### Phase 1 missing wiring sample

- `ICW-E10S1T1-specification.md`
- `ICW-E11S1T1-specification.md`
- `ICW-E1S6T1-specification.md`
- `ICW-E4S11T7-specification.md`
- `ICW-E5S1T35-implementation-plan.md`
- `ICW-E5S1T35-package-summary.md`
- `ICW-E5S1T35-specification.md`
- `ICW-E5S1T35-test-design.md`
- `ICW-E5S1T46-specification.md`
- `ICW-E5S1T46-test-design.md`
- `ICW-E6S7T106-specification.md`
- `ICW-E6S7T18-specification.md`
- `ICW-E7S1T7-implementation-plan.md`
- `ICW-E7S1T7-specification.md`
- `ICW-E7S1T7-test-design.md`
- `ICW-E8S4T1-specification.md`

## Phase 2 targeted backfill (2026-06-02)

Wired the Phase 1 sample set from host task docs or story task anchors:

| Artifact | Host surface |
| -------- | ------------- |
| `ICW-E5S1T35-*` (+ package-summary) | `epic-05/story-01-fr-repo/T35-task-template-cross-wiring-section.md` |
| `ICW-E5S1T46-*` (+ existing IPP plan) | `epic-05/story-01-fr-repo/T46-rw-semver-tag-task-touch-mode.md` |
| `ICW-E6S7T106-specification.md` | `epic-06/.../T106-windsurf-migration-cursorrules-to-workflows.md` |
| `ICW-E6S7T18-specification.md` | `epic-06/.../T18-tool-agnostic-workflow-step-tracking-and-runlogs.md` |
| `ICW-E7S1T7-*` | `epic-07/.../T07-markdown-maintenance-workflow.md` |
| `ICW-E1S6T1-specification.md` | `epic-01/.../T01-setup-byob-badges-for-private-repository.md` |
| `ICW-E4S11T7-specification.md` | `epic-04/.../T07-planning-spec-tests-impl.md` |
| `ICW-E10S1T1-specification.md` | `epic-10/story-01-document-lifecycle-package-implementation-review.md` (T01 anchor) |
| `ICW-E11S1T1-specification.md` | `epic-11/story-01-debug-path-package-implementation-review.md` (T01 anchor) |
| `ICW-E8S4T1-specification.md` | `epic-08/story-04-tooling-automation-package-implementation-review.md` (T01 anchor) |

**Quick win (Phase 1):** `E02:S01:T17` ICW trio already wired in `T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md`.

## Post–Phase 2 audit

Re-run from repo root:

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_ipw_publication_wiring.py" --audit-inventory
```

Record the printed **scanned** and **missing wiring** counts below after each maintenance wave.

| Date | Scanned | Unwired | Notes |
| ---- | ------- | ------- | ----- |
| 2026-06-02 | 109 | 28 | Phase 1 sample (16 rows) wired; audit uses EST+kind alias matching (padded vs unpadded link targets). Remaining 28 unwired artifacts need future waves. |
| 2026-06-03 | 114 | **0** | Phase 3 corpus tail ([IPP-E2S15T1-br066-corpus-tail-phase3.md](IPP-E02S15T01-br066-corpus-tail-phase3.md)): bulk host wiring + relative-path repair; **BR-066 RESOLVED**. |

## Phased plan (ongoing)

1. **Phase 1 (complete):** Contract + single-task validator + inventory baseline.
2. **Phase 2 (complete):** Bulk audit mode, tests, targeted wiring for inventory sample ([IPP-E2S15T1-br066-publication-backfill-phase2.md](IPP-E02S15T01-br066-corpus-tail-phase3.md)).
3. **Phase 3 (complete):** Corpus tail closure — **0** unwired ([IPP-E2S15T1-br066-corpus-tail-phase3.md](IPP-E02S15T01-br066-corpus-tail-phase3.md)); optional blocking RW gate still EXEMPT.
4. **Phase 4 (maintenance):** Periodic `--audit-inventory` in UKW/RW ops cadence.
