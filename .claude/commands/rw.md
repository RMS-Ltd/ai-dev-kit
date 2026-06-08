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
sys.path.insert(0, str(Path("packages/frameworks/workflow-mgt/scripts")))
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
python "packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py" --strict
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
python "packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_complete.py" --requested "<parsed_id>"
# For RW -k: append --mode rw-k
```

Releasable statuses: `IN PROGRESS`, `COMPLETE`, or perpetual maintenance task.

- Exit 0 → pass, proceed to Step 1d.
- Non-zero exit → **RW ABORTED**. Print script output.

### Step 1d — Task Intent Guard (BR-056)

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_intent.py" --requested "<parsed_id>"
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
| 12 Push to Remote | ❌* | ❌ | ❌* |
| 12.5 GitHub Release | ❌* | ❌ | ❌* |
| 13 Housekeeping | ✅ | ✅ | ✅ |

\* Step 12 / 12.5 run **only** when the user typed **`--push`** in the RW trigger ([UXR-024](docs/kanban/fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md)). Default full RW / `RW -k` complete **locally** — report `RW COMPLETE (local)`.

### Step 2 — Bump Version

Load config. Read current version from `version_file`. Identify completed task from Story file. Determine version bump (EPIC.STORY.TASK+BUILD schema). Update version file. Validate before and after.

**🚨 BUILD resolver (BR-097 — run BEFORE writing `version_file`):**

```bash
python "packages/frameworks/workflow-mgt/scripts/version/resolve_rw_build.py" --requested "<parsed_id>" [--art] [--dpz] [--perpetual-same-task]
```

- Non-zero exit → **RW ABORTED** at Step 2.
- Same E:S:T default: `BUILD = HEAD_BUILD + 1`.
- `--dpz` (alias: `--doc-policy-zero`) only if **user typed it** in trigger AND HEAD BUILD is untagged AND BUILD=0 path.

**Finalize task_touch registry (when `semver_mapping_strategy: task_touch` — after `version_file` write, before changelog/README SemVer):**

```bash
python "packages/frameworks/workflow-mgt/scripts/version/finalize_rw_semver_registry.py" --internal-version "<resolved_internal_version>"
```

Stage `semver-registry.yaml` in the release commit. Step 9 `validate_task_touch_release_contract.py` blocks if the row is missing.

**FORBIDDEN (BR-097):** Reusing tagged BUILDs; `git tag -f` / `git push -f` / `git push origin +v*` on release tags; inferring `--dpz` from docs-only or COMPLETE status; post-ship verification waves with `--dpz` / `--doc-policy-zero` (use `RW E:S:T --art`).

**UKW/CMW context detection:** If RW was triggered immediately after UKW or CMW, attribute to the relevant perpetual task, pass `--perpetual-same-task`, and increment BUILD only.

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
python "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py" "<internal_version>"
```

### Step 6 — Update BR/FR Docs

Update bug report and/or feature request documents tied to this release with fix/resolution status and version reference.

### Step 7 — Scoped Kanban Reconciliation

Self-sufficient scoped reconciliation. Four-surface contract (task doc → FR/BR/UXR doc → `kboard.md` → `kboard.md`). RW Step 7 must finish release-scope reconciliation autonomously — no deferred UKW handoff.

Prefer `update_kanban_docs.py` when applicable. Emit "touched surfaces + why" audit report.

See `release-workflow-agent-execution.md` Step 7 for canonical detail.

### Step 8 — Stage Files

```bash
git add -A
```

### Step 9 — Run Validators

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py" --strict [--requested "<parsed_id>"] [--art]
python "packages/frameworks/workflow-mgt/scripts/validation/validate_changelog_format.py"
python "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py" --strict [--requested "<parsed_id>"] [--art] [--dpz]
python "packages/frameworks/workflow-mgt/scripts/validation/validate_release_tag_immutability.py" --strict [--journal "<rw_journal_path>"]
python "packages/frameworks/workflow-mgt/scripts/changelog/check_changelog_size.py"
python "packages/frameworks/workflow-mgt/scripts/validation/validate_changelog_archive_links.py"
python "packages/frameworks/workflow-mgt/scripts/validation/validate_board_stamp_diff.py" --before "<snapshot_dir>/kboard.md" --after "<kanban_root>/kboard.md" --strict
python "packages/frameworks/workflow-mgt/scripts/validation/validate_board_stamp_diff.py" --before "<snapshot_dir>/kboard.md" --after "<kanban_root>/kboard.md" --strict
python "packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_state_icons.py" --project-root . --strict
python "packages/frameworks/workflow-mgt/scripts/validation/validate_release_readiness.py"
python "packages/frameworks/workflow-mgt/scripts/validation/validate_active_kanban_board.py" --strict
```

When `semver_mapping_strategy: task_touch`, also run (blocking):

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py" --strict
python "packages/frameworks/workflow-mgt/scripts/validation/validate_task_touch_release_contract.py" --strict
```

If `--art` was in `$ARGUMENTS`, propagate `--requested "<parsed_id>" --art` to `validate_branch_context.py` and `validate_version_bump.py`.

For docs-only **BUILD +0** on an existing E/S/T, add `--dpz` to `validate_version_bump.py` (alias: `--doc-policy-zero`; see BR-067).

`check_changelog_size.py` exit 1 is non-blocking — triggers Step 9.5.

`validate_changelog_archive_links.py` is non-blocking — reports dangling links in `CHANGELOG_ARCHIVE.md` with line numbers but does not abort the workflow.

`validate_board_stamp_diff.py` (FR-097) and `validate_release_readiness.py` Gates 1–9 are **blocking** on failure.

### Step 9.5 — CMW (Conditional)

Run CMW if `check_changelog_size.py` indicated threshold exceeded. CMW failures are non-blocking.

### Step 9.6 — IDE Diagnostics (Recommended)

Check for linter/type errors in modified files. Fix where practical and re-stage. Non-blocking.

### Step 9.7 — Actions CI Parity Gate (BLOCKING — E08:S03:T15 / FR-112)

**Purpose:** Local-complete RW must not ship commits that will fail required GitHub Actions on `dev`/`main`. Default RW **never pushes** (UXR-024); this gate makes local releases **push-ready**.

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_actions_ci_parity.py" --strict
```

- Mirrors `.github/workflows/` checks (Tests, Docusaurus build, Greenfield install drift, workflow-scripts pytest) for **paths touched** by the release diff.
- **Non-zero exit → RW ABORTED** at Step 9.7. Do not commit, tag, or push.
- **CQG (`validate_code_quality_gate.py`) does not substitute** for Actions CI parity.
- Skipped when `actions_ci_parity.enabled: false` in `rw-config.yaml`.

**Before Step 12 (`--push`) or operator batch push:** re-run with **`--strict --all`** (full parity suite).

### Step 10 — Commit

```bash
git commit -m "Release v{version}: {summary}

Epic: {epic} | Story: {story} | Task: {task}"
```

### Step 11 — Create Git Tag

**FORBIDDEN (BR-097):** Never `git tag -f` or force-push release tags. Internal tag collision → BUILD+1 and re-RW. **task_touch** SemVer core collision → finalize registry + re-RW (BUILD+1 allocates new PATCH / new `vX.Y.Z` tag).

Use `semver_converter.get_rw_tag_info(internal_version, finalize=True)` to determine tags. Create annotated primary tag `v{internal_version}` and SemVer tag `vX.Y.Z` on the same commit.

### Step 12 — Push to Remote (UXR-024: **NEVER** unless `--push`)

**Default:** **SKIP** — **no `git push`**. Unless **`--push`** appears in the user's RW trigger message, report **`RW COMPLETE (local)`** and point operator to batch push runbook (cheatsheet §2).

**Pre-push gate (mandatory when pushing):**

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_actions_ci_parity.py" --strict --all
```

Non-zero exit → **RW ABORTED** — do not push.

**When `--push` is present:**

**🚨 FORBIDDEN:** `git push origin {branch} --tags` — pushes every local tag; divergent stale SemVer tags cause false push failures.

```bash
python "packages/frameworks/workflow-mgt/scripts/version/push_rw_release.py" \
  --branch "{branch}" --internal-version "{internal_version}"
```

Manual: push branch, then `git push origin refs/tags/v{internal}` (+ SemVer-core tag in task-touch mode). Never `--tags`.

**Operator batch push (after local-only RW runs):** push branch once, then each pending `refs/tags/v{internal}` (+ SemVer-core in task-touch mode).

### Step 12.5 — GitHub Release (UXR-024: `--push` only)

**Default:** **SKIP** unless **`--push`** in trigger. When skipped with Step 12, operator may run `create_github_release.py` after batch push.

**When `--push` is present:**

```bash
python "packages/frameworks/workflow-mgt/scripts/create_github_release.py" \
  --semver-tag "v{semver}" --internal-version "v{internal_version}" \
  --summary "{summary}" --epic "{epic}" --story "{story}" --task "{task}" \
  --repo "RMS-Ltd/ai-dev-kit"
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
- Validators: `packages/frameworks/workflow-mgt/scripts/validation/`
- README: `README.md`
- Kanban root: `docs/kanban/`

---

## Reference Documentation

- Canonical step guide: `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- Versioning policy: `docs/governance/standards/dev-kit-versioning-policy.md`
- RW trigger section: `.cursorrules` → `## 🚀 RELEASE WORKFLOW (RW) TRIGGER`
- Dual-source parity: `packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md`
