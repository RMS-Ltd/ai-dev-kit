---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:30:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-016 Migration Guide — Embedded Tasks to Discrete Task Documents

**Task:** E04:S11:T07  
**Audience:** Maintainers and adopters running or verifying FR-016 migration  
**Status:** Published (Wave 5 — 2026-06-05)  
**Related:** [Migration plan](migration-plan-embedded-to-discrete-tasks.md) · [Completion report](migration-completion-report.md) · [IPP](../../../../implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration.md)

---

## 1. When to use this guide

- **Verify** an ai-dev-kit (or adopter) kanban tree is FR-016 structurally compliant (no embedded task bodies in Story files).
- **Migrate** remaining embedded tasks in a Story after adding new inline task sections (should not happen under current policy — use discrete docs + doc-init per FR-017).
- **Onboard** contributors to the canonical script paths under `packages/frameworks/workflow-mgt/scripts/kanban/`.

**ai-dev-kit repo (2026-06-05):** Migration **complete** — 92 stories, **0** embedded sections, **636** discrete `T*.md` files. See [completion report](migration-completion-report.md) for metrics and exceptions.

---

## 2. Canonical tooling

| Script | Path | Purpose |
|--------|------|---------|
| `extract_embedded_tasks.py` | `packages/frameworks/workflow-mgt/scripts/kanban/extract_embedded_tasks.py` | Parse embedded `### E:S:T` sections from a Story file |
| `generate_task_doc.py` | `packages/frameworks/workflow-mgt/scripts/kanban/generate_task_doc.py` | Emit discrete `T{nn}-{slug}.md` from extracted task dict |
| `update_story_refs.py` | `packages/frameworks/workflow-mgt/scripts/kanban/update_story_refs.py` | Wire checklist links; remove embedded bodies |
| `migrate_story.py` | `packages/frameworks/workflow-mgt/scripts/kanban/migrate_story.py` | **Orchestrator** — extract → generate → update Story |
| `validate_migration.py` | `packages/frameworks/workflow-mgt/scripts/kanban/validate_migration.py` | Full-repo or per-story post-migration validation |
| `test_migrate_embedded_tasks.py` | `packages/frameworks/workflow-mgt/scripts/kanban/test_migrate_embedded_tasks.py` | Unit/integration tests (T1–T12) |

**Template:** `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`

---

## 3. Migrate a single Story

From repository root:

```bash
# Dry-run (no writes)
python packages/frameworks/workflow-mgt/scripts/kanban/migrate_story.py \
  --story docs/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md \
  --dry-run

# Execute migration (writes T*.md + updates Story)
python packages/frameworks/workflow-mgt/scripts/kanban/migrate_story.py \
  --story docs/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md
```

**Output layout:** Discrete docs land in `epics/epic-{NN}/story-{NN}-{slug}/T{task:02d}-{slug}.md` alongside the Story file.

**Idempotency:** Re-running on an already-migrated Story skips existing `T*.md` files and leaves embedded count at 0.

---

## 4. Validate after migration

```bash
# Full kanban tree
python packages/frameworks/workflow-mgt/scripts/kanban/validate_migration.py \
  docs/kanban

# Regression tests
python -m pytest packages/frameworks/workflow-mgt/scripts/kanban/test_migrate_embedded_tasks.py -q
```

**PASS criteria:** exit code 0; `embedded_task_count: 0`; `broken_task_links: 0`.

**RW Step 1 spot-check** (sample tasks):

```bash
python packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_complete.py \
  --requested "E04:S11:T07"
```

Releasability failures on `TODO` tasks are expected; discovery failures (no task doc) are not.

---

## 5. Grandfathered hygiene (completed 2026-06-05)

| Item | Resolution |
|------|------------|
| Legacy `**Task:**` without `**Task ID:**` | **40 docs** normalized with `**Task ID:**` lines (RW Step 1c discovery) |
| E01:S01 checklist-only | **T01–T03** backfilled under `epic-01/story-01-vibe-dev-kit-kanban-and-versioning/` |
| Scope placeholders | Remaining `[To be filled during migration]` — fill during task implementation |

Full history: [completion report §4](migration-completion-report.md#4-documented-exceptions).

---

## 6. Release workflow integration

- Ship migration waves via **`RW E04:S11:T07 --art`** (or host-project equivalent task).
- Use normal BUILD +1 on same E:S:T; never `--doc-policy-zero` for post-ship verification waves ([BR-097](../../../fbu/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)).
- RW Step 7 four-surface reconciliation: task doc, story, FR-016, `kboard.md`.

---

## 7. New tasks (post-migration policy)

1. Create discrete `T{nn}-{slug}.md` **before** implementation ([FR-017](../../../fbu/FR-017-versioning-policy-hardening-doc-init-build.md) doc-init).
2. Use `**Task ID:**` header (required for RW Step 1c discovery).
3. Add checklist entry on Story with link to discrete doc.
4. Do **not** embed task bodies in Story files.

---

## 8. References

- [FR-016](../../../fbu/FR-016-kanban-granularity-discrete-task-docs.md)
- [Migration plan](migration-plan-embedded-to-discrete-tasks.md)
- [Migration completion report](migration-completion-report.md)
- [Kanban governance policy](../../../../rituals/policy/kanban-governance-policy.md)
