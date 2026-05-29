# RW Recovery Procedure

**Applies to:** Release Workflow (RW) runs that fail or abort mid-sequence.  
**Prerequisite:** A recovery report has been emitted to `docs/journals/`.

---

## 1. Immediate Actions

1. **Locate the recovery report.**
   ```bash
   python -m "packages/frameworks/workflow mgt/scripts/journal" list
   ```
   Identify the most recent failed run.

2. **Read the Markdown recovery report.**
   Open `docs/journals/rw-{run_id}-{timestamp}-recovery.md`.

3. **Identify the failed step.**
   The report names the exact step and its exit code.

## 2. Assess Touched Artifacts

The recovery report splits touched files into two categories:

### 2.1 Automatic Revertible

These are typically uncommitted working-tree changes.

- Unstage if staged: `git reset HEAD <file>`
- Revert if modified: `git checkout -- <file>`
- Delete if untracked: `rm <file>`

> **Safety rule:** Never revert files that have already been committed and pushed.

### 2.2 Manual Reconciliation Required

These require operator review before retry:

- Committed version bumps
- Changelog / README edits
- Created git tags (even if not yet pushed)
- Pushed commits or tags

For each item:
1. Inspect the change (`git show`, `git diff`, `git log`).
2. Decide whether to keep, amend, or revert with a follow-up commit.
3. If a tag was created but not pushed, delete it locally: `git tag -d <tag>`.

## 3. Fix the Root Cause

Before retrying:
- Address the failure reason (fix script, update config, resolve merge conflict, etc.).
- Verify the fix in isolation if possible.

## 4. Deterministic Rerun

Re-invoke the Release Workflow with the **same task token**:

```bash
RW E6:S06:T63
```

> **Why the same token?** The RW uses the task ID to determine version bump semantics and kanban reconciliation scope. Using a different token would create an unintended release anchor.

### 4.1 If the failure occurred before Step 10 (Commit)

Usually a clean working tree is sufficient after reverting auto-revertible files.

### 4.2 If the failure occurred at Step 10+ (Commit, Tag, Push)

Inspect git history first:
```bash
git log --oneline -10
git tag -l
```

- If the commit exists locally but was not pushed: amend or reset as needed.
- If the commit was pushed: do **not** force-push. Create a revert commit or a follow-up fix.
- If a tag was pushed to remote: do **not** delete the remote tag. Create a new release with a corrected tag.

## 5. Verify Clean Recovery

After the rerun succeeds:
1. Confirm `docs/journals/` contains a new **success** journal.
2. Review the new recovery report (it should be absent or state "no failed steps").
3. Confirm the kanban board and task doc reflect the completed release.

## 6. Forensic Retention

Failed run journals are **not automatically deleted**. They remain in `docs/journals/` for post-mortem analysis. If you need to clean up:

```bash
# Archive old journals (optional)
mkdir -p docs/journals/archive
mv docs/journals/rw-*-2026-01-* docs/journals/archive/
```

---

**Related:**
- `ROLLBACK_CONTRACT.md` — detailed automatic vs manual rollback surfaces.
- `JOURNAL_SCHEMA.md` — JSON schema reference for programmatic consumers.
