# Release Workflow (RW) — Slash Command

**Invocation:** `/rw <task-id> [flags]`  
**Arguments:** `$ARGUMENTS` — the task ID and optional flags (e.g. `E2:S01:T19 --art`, `E2:S01:T19`, `-d E2:S01:T19`, `-k E6:S01:T38 --art`)

**Plain-text alias:** `RW $ARGUMENTS` is treated identically to this command.

---

## Environment Check (AC3 — MANDATORY FIRST)

Before executing any step, confirm that Bash/tool execution is available in this session.

- If Bash tool calls are NOT available: respond with **`RW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.`** — do not proceed further.
- If Bash tool calls ARE available: proceed to Step 1.

---

## Trigger Parsing

Parse `$ARGUMENTS` to determine:

1. **Variant:** `RW` (full), `RW -d` (docs-only), or `RW -k` (kanban-init) — derived from presence of `-d` or `-k` flag.
2. **Task token:** Extract `E…S…T…` identifier (e.g. `E2:S01:T19`, `E2S01T19`). Flexible parsing — colons and zero-padding optional.
3. **`--art` flag:** Present or absent. Valid for all variants.
4. **`--confirmed-override` flag:** Present or absent (Step 1d override only, after explicit user confirmation).

**If no parseable `E…S…T…` token is found:** **RW ABORTED** — tell the user to re-send with an explicit task id (e.g. `/rw E2:S01:T19`). Do not substitute `validate_rw_task_intent.py` without `--requested`.

**Load config (MANDATORY before Step 1):** Check for `rw-config.yaml` in the project root. If present, load it as the single source of truth for all project-specific paths. If absent, use fallback paths from the `File Paths` section below.

---

## Recovery Journal (E6:S06:T63)

The RW execution layer now maintains a deterministic per-run journal.

**Initialization (after Step 1d passes):**
```python
from pathlib import Path
import sys
sys.path.insert(0, str(Path("packages/frameworks/workflow mgt/scripts")))
from journal import RWJournal

journal = RWJournal(task_id="<parsed_id>")
run_id = journal.start_run(version_before=current_version)
```

**Step-boundary logging:** After each execution step (Steps 2–13), log:
```python
journal.log_step(
    name="Step N — <Description>",
    status="success" | "failed" | "aborted",
    exit_code=exit_code,
    commands=["command executed"],
    touched_files=["relative/path/to/file"],
)
```

**Finish on success:**
```python
path = journal.finish_run(status="success", version_after=new_version)
```

**Recovery report on abort:** If any step fails and the workflow aborts:
```python
from journal import RecoveryReport

report = RecoveryReport.from_journal(journal)
md_path, json_path = report.write()
# Emit paths to operator
```

**Graceful degradation:** If `docs/journals/` is unwritable, log a warning and continue without journaling. The RW must not abort solely due to journal I/O failure.

**Documentation references:**
- `docs/journals/RECOVERY_PROCEDURE.md` — operator rerun guide
- `docs/journals/ROLLBACK_CONTRACT.md` — automatic vs manual rollback surfaces
- `docs/journals/JOURNAL_SCHEMA.md` — JSON schema reference

---

## Mandatory Gates (Steps 1 → 1b → 1c → 1d)

All four gates MUST pass before any file modifications. Failure at any gate = **RW ABORTED**.

### Step 1 — Branch Safety Check (BLOCKING)

```bash
python "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict
```

- Exit 0 → pass, proceed to Step 1b.
- Non-zero exit → **RW ABORTED**. Mark all `rw-step-*` TODOs as `cancelled`. Output error. Stop immediately.
- Do NOT skip, bypass, or ignore this step.

### Step 1b — Task Token Required (FR-060)

Parse `$ARGUMENTS` for the `E…S…T…` token (already done in Trigger Parsing above).

- Token found → proceed to Step 1c.
- Token absent → **RW ABORTED**. User must re-send with explicit task id.

### Step 1c — Task Document Releasable (FR-060)

```bash
python "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "<parsed_id>"
# For RW -k: append --mode rw-k
```

Releasable statuses: `IN PROGRESS`, `COMPLETE`, or perpetual maintenance task.

- Exit 0 → pass, proceed to Step 1d.
- Non-zero exit → **RW ABORTED**. Print script output.

### Step 1d — Task Intent Guard (BR-056)

```bash
python "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "<parsed_id>"
# For RW -k: append --mode rw-k
# If --art present: append --art
# If --confirmed-override present: append --confirmed-override (only after explicit user confirmation)
```

- Exit 0 → pass, proceed to Step 2.
- Non-zero exit → **RW ABORTED**. Print script output. User must confirm intent or use `--confirmed-override` on re-send after explicit confirmation.

---

## Execution Steps

After all four gates pass, create a TODO list for all steps (`rw-step-1` through `rw-step-13`) and execute **autonomously without stopping for user guidance**. Follow the `ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED` pattern for each step.

**Selected execution path by variant:**

| Step | Full RW | RW -d | RW -k |
|------|---------|-------|-------|
| 1–1d (gates) | ✅ | ✅ | ✅ |
| 2 Bump Version | ✅ | ✅ | ✅ |
| 3 Create Detailed Changelog | ✅ | ✅ | ✅ |
| 4 Update Main Changelog | ✅ | ✅ | ✅ |
| 5 Update README | ✅ | ✅ | ❌ |
| 6 Update BR/FR Docs | ✅ | ✅ | ❌ |
| 7 Scoped Kanban Reconciliation | ✅ | ✅ | ✅ (limited) |
| 8 Stage Files | ✅ | ✅ | ✅ |
| 9 Run Validators | ✅ | ✅ | ✅ |
| 9.5 CMW (if triggered) | ✅ | ✅ | ❌ |
| 9.6 IDE Diagnostics | ✅ | ✅ | ❌ |
| 10 Commit | ✅ | ✅ | ✅ |
| 11 Create Git Tag | ✅ | ❌ | ✅ |
| 12 Push to Remote | ✅ | ✅ | ❌ |
| 12.5 GitHub Release | ✅ | ❌ | ❌ |
| 13 Housekeeping | ✅ | ✅ | ✅ |

### Step 2 — Bump Version

Load config. Read current version from `version_file`. Identify completed task from Story file. Determine version bump (EPIC.STORY.TASK+BUILD schema). Update version file. Validate before and after.

**UKW/CMW context detection:** If RW was triggered immediately after UKW or CMW, attribute to the relevant perpetual task and increment BUILD only.

### Step 3 — Create Detailed Changelog

Create detailed changelog entry in `changelog_dir`. Use full timestamp (`YYYY-MM-DD HH:MM:SS UTC`). Timestamp is IMMUTABLE once written.

**Changelog immutability guards (BR-074):**
- **Never overwrite or delete** an existing `CHANGELOG_v{version}.md` in `changelog-archive/`; always create a new file.
- **Use the post-bump version** (the version just written to `version.py`) for the `Internal Version` header, not the pre-bump version.

**Language rule:** Use "Attempted fix" / "Change implemented" until user verifies; use "Fixed" only after confirmation.

### Step 4 — Update Main Changelog

Prepend `## [version] - DD-MM-YY` entry to `main_changelog`. Follow Keep a Changelog format.

### Step 5 — Update README

Run `semver_converter.py` to get SemVer. Update `readme_file` version badge and text.

```bash
python "packages/frameworks/workflow mgt/scripts/version/semver_converter.py" "<internal_version>"
```

### Step 6 — Update BR/FR Docs

Update bug report and/or feature request documents tied to this release with fix/resolution status and version reference.

### Step 7 — Scoped Kanban Reconciliation

Self-sufficient scoped reconciliation. Four-surface contract (task doc → FR/BR/UXR doc → `kboard.md` → `fbuboard.md`). RW Step 7 must finish release-scope reconciliation autonomously — no deferred UKW handoff.

Prefer `update_kanban_docs.py` when applicable. Emit "touched surfaces + why" audit report.

See `release-workflow-agent-execution.md` Step 7 for canonical detail.

### Step 8 — Stage Files

```bash
git add -A
```

### Step 9 — Run Validators

```bash
python "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" [--requested "<parsed_id>"] [--art]
python "packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py"
python "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py" [--requested "<parsed_id>"] [--art]
python "packages/frameworks/workflow mgt/scripts/validation/check_changelog_size.py"
python "packages/frameworks/workflow mgt/scripts/validation/validate_changelog_archive_links.py"
```

If `--art` was in `$ARGUMENTS`, propagate `--requested "<parsed_id>" --art` to `validate_branch_context.py` and `validate_version_bump.py`.

`check_changelog_size.py` exit 1 is non-blocking — triggers Step 9.5.

`validate_changelog_archive_links.py` is non-blocking — reports dangling links in `CHANGELOG_ARCHIVE.md` with line numbers but does not abort the workflow.

### Step 9.5 — CMW (Conditional)

Run CMW if `check_changelog_size.py` indicated threshold exceeded. CMW failures are non-blocking.

### Step 9.6 — IDE Diagnostics (Recommended)

Check for linter/type errors in modified files. Fix where practical and re-stage. Non-blocking.

### Step 10 — Commit

```bash
git commit -m "Release v{version}: {summary}

Epic: {epic} | Story: {story} | Task: {task}"
```

### Step 11 — Create Git Tag

Use `semver_converter.get_rw_tag_info(internal_version, finalize=True)` to determine tags. Create annotated primary tag `v{internal_version}` and SemVer tag `vX.Y.Z` on the same commit.

### Step 12 — Push to Remote

```bash
git push origin {branch} --tags
```

### Step 12.5 — GitHub Release

```bash
python "packages/frameworks/workflow mgt/scripts/create_github_release.py" \
  --semver-tag "v{semver}" --internal-version "v{internal_version}" \
  --summary "{summary}" --epic "{epic}" --story "{story}" --task "{task}" \
  --repo "earlution/ai-dev-kit"
```

Script auto-loads `GITHUB_TOKEN` from `.env.local`. Non-blocking if token absent.

### Step 13 — Housekeeping

Mark all `rw-step-*` TODOs as `cancelled`. Clean up temporary artifacts.

---

## Abort / Completion Protocol

- Always end in **`RW COMPLETE`** or **`RW ABORTED (Step X: reason)`** — never ambiguous.
- On abort at any step: mark remaining TODOs `cancelled`, output abort reason, stop.
- **Recovery report:** If a journal was initialized, emit a recovery report before stopping:
  ```python
  from journal import RecoveryReport
  report = RecoveryReport.from_journal(journal)
  md_path, json_path = report.write()
  ```
  Include the recovery report paths in the abort message.
- Never silently stop mid-workflow after modifying files.
- Never start a new RW while previous RW TODOs are still `pending` or `in_progress`.

---

## `--art` Flag Semantics

`--art` (Adopt Requested Task) allows the requested `E:S:T` to be adopted as the canonical release anchor even when it differs from the current `version.py` context. Valid in all RW modes. Must propagate to Step 9 validators.

---

## File Paths (ai-dev-kit)

Use `rw-config.yaml` values when present. Fallbacks:

- Version file: `src/fynd_deals/version.py`
- Main changelog: `CHANGELOG.md`
- Changelog archive: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md`
- Validators: `packages/frameworks/workflow mgt/scripts/validation/`
- README: `README.md`
- Kanban root: `docs/project-management/kanban/`

---

## Reference Documentation

- Canonical step guide: `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- Versioning policy: `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- RW trigger section: `.cursorrules` → `## 🚀 RELEASE WORKFLOW (RW) TRIGGER`
- Dual-source parity: `packages/frameworks/workflow mgt/docs/rw-trigger-dual-source-parity.md`
