# RW Journal JSON Schema Reference

**Schema version:** `1.0.0`  
**Last updated:** 2026-05-17  
**Applies to:** `packages/frameworks/workflow mgt/scripts/journal/rw_journal.py`

---

## Overview

Each RW execution produces exactly one journal file in `docs/journals/`. The file is written atomically when the run finishes (success, failure, or abort). During the run, the journal is held in memory and appended step-by-step.

## File Naming Convention

```
rw-{run_id}-{started_at}.json
```

- `run_id` — UUIDv4, no hyphens stripped.
- `started_at` — ISO-8601 timestamp with colons replaced by dashes for filesystem safety.

Example:
```
rw-a1b2c3d4-e5f6-7890-abcd-ef1234567890-2026-05-17T15-30-00Z.json
```

## Top-Level Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `run_id` | string | yes | UUIDv4 identifying this run. |
| `task_id` | string | yes | The E:S:T token (e.g. `E6:S06:T63`). |
| `started_at` | string (ISO-8601) | yes | When the run began. |
| `ended_at` | string \| null | no | When the run finished. |
| `status` | string | yes | `"started"`, `"success"`, `"failed"`, or `"aborted"`. |
| `version_before` | string \| null | no | Version string before the run. |
| `version_after` | string \| null | no | Version string after the run. |
| `steps` | array of Step | yes | Ordered list of step records. |

## Step Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Human-readable step name. |
| `status` | string | yes | `"started"`, `"success"`, `"failed"`, `"aborted"`. |
| `timestamp` | string (ISO-8601) | yes | When this step was logged. |
| `exit_code` | integer \| null | no | Exit code if a subprocess ran. |
| `commands` | array of string | no | Commands executed in this step. |
| `touched_files` | array of string | no | Relative paths of files modified. |
| `notes` | string | no | Free-form operator or agent notes. |

## Example Journal

```json
{
  "run_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "task_id": "E6:S06:T63",
  "started_at": "2026-05-17T15:30:00Z",
  "ended_at": "2026-05-17T15:31:45Z",
  "status": "failed",
  "version_before": "0.6.1.38+3",
  "version_after": null,
  "steps": [
    {
      "name": "Step 1d — Task Intent Guard",
      "status": "success",
      "timestamp": "2026-05-17T15:30:02Z",
      "exit_code": 0,
      "commands": [
        "python validate_rw_task_intent.py --requested E6:S06:T63 --art"
      ],
      "touched_files": [],
      "notes": ""
    },
    {
      "name": "Step 2 — Bump Version",
      "status": "success",
      "timestamp": "2026-05-17T15:30:05Z",
      "exit_code": 0,
      "commands": [
        "python bump_version.py"
      ],
      "touched_files": [
        "src/ai_dev_kit/version.py"
      ],
      "notes": ""
    },
    {
      "name": "Step 3 — Create Detailed Changelog",
      "status": "failed",
      "timestamp": "2026-05-17T15:31:45Z",
      "exit_code": 1,
      "commands": [
        "python update_changelog.py"
      ],
      "touched_files": [],
      "notes": "Missing changelog template for task E6:S06:T63"
    }
  ]
}
```

## Versioning Policy

- Schema version `1.0.0` is current.
- Future fields may be added; old fields will not be removed without a major version bump.
- Consumers must ignore unknown fields (tolerant reader pattern).
- Recovery report JSON schema is versioned independently (`recovery_report.RECOVERY_SCHEMA_VERSION`).
