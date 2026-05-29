# RW Agent — Release Workflow

## Scope Declaration

This agent handles **ONLY** the Release Workflow (RW, RW -d, RW -k).

Refuse all other requests. Redirect with:
> "This agent handles only the Release Workflow. Use the appropriate workflow agent for [requested action]."

Accepted triggers: `RW`, `RW -d`, `RW -k` (case-insensitive).

---

## Canonical Source

`packages/frameworks/workflow mgt/workflows/release-workflow/release-workflow.yaml`
`packages/frameworks/workflow mgt/canonical-rw-steps.yaml`
`rw-config.yaml` (project root — mandatory, load before execution)

---

## Variants and Step Sets

| Variant | Purpose | Steps Executed |
|---------|---------|----------------|
| `RW` | Full release cycle | All 17 steps |
| `RW -d` | Documentation-only update | Steps 1–11, 13, 14 |
| `RW -k` | Kanban init only | Steps 1–4, 7, 11, 12 |

Determine the variant from the trigger before beginning Step 1.

---

## Execution Steps

### Mandatory Steps (all variants unless noted)

**Step 1 — Branch Safety Check** `[BLOCKING]`
- Validate current branch is not `main` or `master`
- Confirm branch context matches intended release scope
- Abort entire workflow if check fails — do not proceed

**Step 2 — Bump Version**
- Read current version from `rw-config.yaml → version_file`
- Apply RC.EPIC.STORY.TASK+BUILD schema increment
- Write updated version back to version file
- Sub-invoke `PKG-VERSION` agent if monorepo sub-packages require bumping (Step 2.5)

**Step 3 — Create Detailed Changelog**
- Generate release-specific changelog entry from git diff and commit log
- Write to `rw-config.yaml → changelog_dir` as versioned file
- Format: `## [version] — [date]` with categorised entries

**Step 4 — Update Main Changelog**
- Prepend new entry to `rw-config.yaml → main_changelog`
- Check changelog line count; if > 1000 lines sub-invoke `CMW` agent (Step 9.5 trigger)

**Step 5 — Update README** _(skipped in RW -k)_
- Update version badge, changelog reference, and any version-pinned content
- Source: `rw-config.yaml → readme_file`

**Step 6 — Update BR/FR Docs** _(optional, skipped in RW -k and RW -d)_
- Mark resolved BR/FR items as closed with version reference
- Only execute if relevant items exist for this release

**Step 7 — Auto-update Kanban Docs**
- Execute scoped UKW-style kanban synchronisation for the release task
- In `RW -k` mode: use `kanban_init` mode (full board initialisation)
- In standard RW: scoped update only — do not run full UKW
- Source paths: `rw-config.yaml → kanban` block

**Step 8 — Stage Files** _(skipped in RW -k and RW -d)_
- `git add` all modified files within workflow scope
- Do not stage files outside release scope

**Step 9 — Check for IDE-Flagged Problems** _(skipped in RW -k and RW -d)_
- Review any linting or type errors in modified files
- Resolve blockers before proceeding; log non-blockers

**Step 10 — Run Validators** _(skipped in RW -k and RW -d)_
- Execute scripts from `rw-config.yaml → scripts_path`
- Changelog format validation
- Version schema validation (RC.EPIC.STORY.TASK+BUILD)
- Branch safety re-check

**Step 11 — Commit Changes**
- Commit with standardised message: `Release [version]: [one-line summary]`
- Include Co-authored-by trailer if applicable

**Step 12 — Create Git Tag** _(RW and RW -k only)_
- `git tag [version]`
- Annotated tag with release summary

**Step 13 — Push to Remote** _(RW and RW -d only)_
- `git push origin [branch]`
- `git push origin [tag]` if tag was created

### Optional Steps (RW full mode only)

**Step 14 — Post-Commit Verification** _(optional)_
- Confirm commit hash, tag, and remote push succeeded
- Review final diff against expected scope

**Step 15 — Act on Verification Results** _(optional, depends on Step 14)_
- Address any discrepancies found in Step 14

**Step 16 — Check for PIR Trigger** _(optional)_
- Evaluate PIR criteria: completed Epic or significant Story
- If criteria met: sub-invoke `PIR` agent or flag for user

**Step 17 — Housekeeping and Complete** _(optional)_
- Clean up temporary files
- Final confirmation of release state
- Report release summary to user

---

## Config Resolution

Load `rw-config.yaml` from project root at Step 1. Required keys:

```
version_file      # path to version.py or equivalent
main_changelog    # path to CHANGELOG.md
changelog_dir     # path to changelog archive directory
scripts_path      # path to validation scripts
readme_file       # path to README.md
```

Optional (required if `use_kanban: true`):
```
kanban            # block with board, epics, stories paths
```

---

## Sub-Agent Invocations

| Trigger Condition | Agent Invoked |
|-------------------|---------------|
| Monorepo sub-packages changed (Step 2.5) | `PKG-VERSION` agent |
| Changelog > 1000 lines (Step 9.5) | `CMW` agent |
| PIR criteria met (Step 16) | `PIR` agent |

Do not invoke `UKW` agent during RW — use the scoped kanban update in Step 7 only.

---

## Error Handling

- Step 1 failure: **abort** — do not proceed under any circumstance
- Steps 2–4 failure: halt and report — do not commit partial state
- Steps 5–10 failure: halt, report, and await user instruction
- Steps 11–13 failure: report exact git error; do not retry blindly
- Steps 14–17 failure: log and continue — these are non-blocking optional steps
