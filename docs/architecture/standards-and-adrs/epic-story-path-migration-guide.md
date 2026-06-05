---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic/Story path migration guide (lowercase segments)

**Date:** 2026-06-04  
**Change:** Kanban epic/story **directories and filenames** use lowercase `epic-\{n\}` / `story-{nnn}-` instead of `Epic-\{n\}` / `Story-{nnn}-`  
**Policy:** [ADR-015](ADR-015-kanban-epic-story-path-lowercase-convention.md), `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

## Summary

Path segments only — not document titles or inline `E04:S19:T11` notation (see [task-naming-migration-guide.md](task-naming-migration-guide.md) and UXR-014).

**Write-default example:**

```text
docs/project-management/kanban/epics/epic-04/epic-04.md
docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake.md
docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-*.md
```

---

## rw-config.yaml

After migration, set (relative to `kanban_root`):

```yaml
epic_doc_pattern: epics/epic-{epic:02d}/epic-{epic:02d}.md
story_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*.md
task_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*/T{task:02d}-*.md
```

(`format()` uses integer epic/story/task; segments > 99 render with three digits naturally.)

---

## Adopter migration steps

1. **Backup** the kanban tree.
2. Run (from repo root, dry-run first):

   ```bash
   python packages/frameworks/kanban/scripts/rename_kanban_epic_story_paths.py \
     --kanban-root docs/project-management/kanban --dry-run
   python packages/frameworks/kanban/scripts/rename_kanban_epic_story_paths.py \
     --kanban-root docs/project-management/kanban
   ```

3. Normalize segment padding (2-digit epic/story/task when ≤ 99):

   ```bash
   python packages/frameworks/kanban/scripts/migrate_kanban_segment_padding.py \
     --root docs/project-management/kanban --dry-run
   python packages/frameworks/kanban/scripts/migrate_kanban_segment_padding.py \
     --root docs/project-management/kanban
   python packages/frameworks/kanban/scripts/migrate_kanban_segment_padding.py \
     --root docs --content-only
   ```

3b. **Framework template pack** (maintainers; `packages/frameworks/kanban/templates/`):

   ```bash
   python packages/frameworks/kanban/scripts/case_rename_epic_story.py \
     packages/frameworks/kanban/templates
   python packages/frameworks/kanban/scripts/migrate_kanban_segment_padding.py \
     --root packages/frameworks/kanban/templates --template-pack
   ```

4. Update `rw-config.yaml` patterns (above).
5. Grep for broken links: `Epic-`, `Story-`, unpadded `epic-4/`, `story-019/` under `docs/` and fix remaining references.
6. Run `python packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_naming.py --strict`.

### Case-insensitive macOS (two-step rename)

If `git mv epic-04 epic-04` fails silently:

```bash
git mv epic-04 epic-04-tmp
git mv epic-04-tmp epic-04
```

Apply the same pattern for `Story-*` directories and files.

---

## Expenses Tracker verification checklist

After ADK kanban fresh install or migration on Expenses Tracker:

- [ ] `epics/epic-*/epic-*.md` exists (no `Epic-*` dirs unless legacy tolerance period)
- [ ] Story files use `story-{nnn}-` prefix
- [ ] `rw-config.yaml` uses lowercase patterns
- [ ] RW `validate_rw_task_intent.py` resolves task doc paths

Record evidence (path listing or screenshot) in the implementing task doc.

---

## Tooling read-tolerance window

Until migration completes, framework scripts accept both casings via `kanban_paths.resolve_epic_dir()` and dual glob patterns. New installs from updated framework versions emit **lowercase only**.

---

## References

- [ADR-015](ADR-015-kanban-epic-story-path-lowercase-convention.md)
- [UXR-017](../../project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md)
- `packages/frameworks/kanban/scripts/kanban_paths.py`
