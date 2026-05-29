---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# RW validators and consumer layout

**Audience:** You copied **`workflow mgt/`** into your own repository (with or without **`kanban/`** from the same distribution). You need Release Workflow (RW) validators to resolve paths correctly and to match **FR-060** (mandatory task token).

**See also:** [INSTALL_IN_YOUR_PROJECT.md](../../../../INSTALL_IN_YOUR_PROJECT.md) (repo root), [PACKAGE_INSTALLATION_GUIDE.md](PACKAGE_INSTALLATION_GUIDE.md), [Framework dependency architecture](../../../../docs/architecture/standards-and-adrs/framework-dependency-architecture.md), [rw-config schema](../config/rw-config-schema.md), [cursorrules-rw-trigger-section.md](../cursorrules-rw-trigger-section.md). Install logging overlap: [E5:S01:T47](../../../../docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T47-install-logging-for-framework-dependencies.md).

---

## 1. `rw-config.yaml` is the path SoT

All paths are **relative to your project root** (where `rw-config.yaml` lives). After `install_release_workflow.py`, open the generated file and verify:

| Key | Purpose |
|-----|---------|
| `version_file` | Your `version.py` (or equivalent). |
| `main_changelog` | Root `CHANGELOG.md` (or your main changelog). |
| `changelog_dir` | Directory for archived per-release changelog files. |
| `scripts_path` | Directory whose **`validation/`** subdirectory contains validator scripts (e.g. `validate_branch_context.py`, `validate_changelog_format.py`, `validate_version_bump.py`, `validate_rw_task_complete.py`, `validate_rw_task_intent.py`). Typically the folder that contains `scripts/` from this package after copy. |
| `readme_file` | Project README for RW Step 5 (optional path). |
| `use_kanban` | `true` if Kanban paths below are valid; `false` to skip Kanban-driven steps and many task-doc checks. |
| `kanban_root` | Root of Kanban docs (when `use_kanban: true`). |
| `epic_doc_pattern`, `story_doc_pattern`, `task_doc_pattern` | Patterns under `kanban_root`; use `{epic}`, `{story}` placeholders as in schema examples. |

Validators invoked by RW read **`rw-config.yaml`** when present; path mistakes show up as “file not found” in Step 1 or Step 9.

---

## 2. Invoking validators manually (examples)

Replace **`{scripts_path}`** with the value from your config (folder that **contains** `validation/`, not the `validation` folder itself — scripts resolve `validation/*.py` internally).

```bash
# From project root
python "{scripts_path}/validation/validate_branch_context.py" --strict
python "{scripts_path}/validation/validate_rw_task_complete.py" --requested "E5:S01:T01"
python "{scripts_path}/validation/validate_rw_task_intent.py" --requested "E5:S01:T01"
```

For **`RW -k`**, pass **`--mode rw-k`** on both `validate_rw_task_complete.py` and `validate_rw_task_intent.py` per your `.cursorrules` / portable excerpt.

If your tree does **not** use `packages/frameworks/workflow mgt/...`, do **not** keep that prefix in examples — use your copied layout (e.g. `tools/workflow_mgt/scripts`).

---

## 3. FR-060 and agent execution

RW in Cursor (or another assistant) must include a parseable **Epic/Story/Task** id **in the same message** as `RW`, `RW -k`, or `RW -d`. Examples: `RW E5S01T68`, `RW E5:S01:T68`.

Full gate order (branch safety, task token, task releasable, intent): [Release Workflow agent execution](../KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) (Steps 1, 1.3–1.5).

---

## 4. Kanban optional (`use_kanban: false`)

If Kanban is not installed:

- Configure `use_kanban: false` and omit or ignore Kanban patterns if your installer allows.
- `validate_rw_task_complete.py` / intent behavior may still apply if your project adopts FR-060 task docs elsewhere; with Kanban off, many adopters use a minimal task-doc layout or adjust governance — see your project’s Kanban policy.

If **`use_kanban: true`**, you must have real task documents under `kanban_root` matching the task id you pass to RW.

---

## 5. Maintainer note: framework README version vs repo version

**Framework package** `Version:` in this README (e.g. workflow mgt **2.2.x**) describes the **packaged framework** for adopters. **ai-dev-kit** repo version (`src/fynd_deals/version.py`) tracks the **monorepo** release. They are **not** forced to bump together.

Policy detail: [packages/README.md (Framework README version fields)](../../../../packages/README.md#framework-readme-version-fields).
