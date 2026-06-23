---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FBU directory migration guide

**Authority:** [ADR-032](ADR-032-fbu-intake-directory-convention.md)  
**Related:** [UXR-032](../../kanban/fbu/UXR-032-fr-br-directory-rename-to-fbu.md), [epic-story-path-migration-guide.md](epic-story-path-migration-guide.md)

---

## Summary

Rename the kanban intake directory from `fbu/` to `fbu/` and update `rw-config.yaml` to use `fbu_root` instead of `fbu_root`. Individual `FR-*.md` / `BR-*.md` / `UXR-*.md` filenames are unchanged.

---

## Fresh install (greenfield)

After ADK kanban + RW install (mode C), expect:

```yaml
fbu_root: docs/kanban/fbu
```

The installer creates `{kanban_root}/fbu/` when seeding intake reports.

---

## Brownfield migration

### 1. Framework update

Install or sync the latest `packages/frameworks/kanban` and `workflow-mgt` packages so resolvers support both paths during transition.

### 2. Directory rename

From project root:

```bash
git mv docs/kanban/fbu docs/kanban/fbu
```

Or use the packaged helper:

```bash
python packages/frameworks/kanban/scripts/rename_fbu_directory.py --kanban-root docs/kanban --apply
```

Dry-run first (default): omit `--apply`.

### 3. rw-config.yaml

Replace:

```yaml
fbu_root: docs/kanban/fbu
```

with:

```yaml
fbu_root: docs/kanban/fbu
```

Legacy `fbu_root` is read-tolerated until the next major framework release after your migration.

### 4. Link sweep

Update relative links in kanban docs, task docs, and skills:

- `fbu/` → `fbu/`
- `../../fbu/` → `../../fbu/`

Exclude immutable changelog archives if your policy treats them as frozen.

### 5. Verification

```bash
python packages/frameworks/workflow-mgt/scripts/validation/validate_fbu_directory.py --strict
```

---

## Rollback

Revert the `git mv`, restore `fbu_root` in `rw-config.yaml`, and re-run link sweep. Framework read-tolerance supports `fbu/` without symlink.
