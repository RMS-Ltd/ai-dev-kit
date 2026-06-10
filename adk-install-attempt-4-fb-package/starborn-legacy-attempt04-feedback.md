---
lifecycle: ephemeral
created_at: 2026-06-10T17:05:00Z
project: starborn_legacy
adk_tag: v0.4.1131
session_id: 20260610-attempt-04
related_uxr: UXR-025
status: draft
---

# Install feedback: Starborn Legacy attempt 04

**Submitted by:** Starborn Legacy adopter (via install diary / feedback package)
**Context:** Post–attempt-03 rollback host; re-attempting greenfield RW + Kanban install on `v0.4.1131` to verify whether ADK resolved F17 (v1 catalog), F10 (skip-Kanban), and related findings.

---

## Executive summary

**CRITICAL (F17):** ADK v0.4.1131 still installs Kanban v1 catalog via `--mode fresh`. The epic-05 template title is "# Epic 5: FR Implementation" — identical to attempts 1–3 (UXR-025 F9). ADK has **not shipped** the Kanban v3.2 package rewrite. Migration test from Starborn Legacy legacy E/S/T kanban to ADK v3.2 remains **blocked**.

### What improved since attempt 03

| Area | Improvement |
|------|-------------|
| BR-084 (task_doc_pattern) | Now READY — patterns in rw-config.yaml are OK |
| UXR-017 (lowercase paths) | READY — `no_capitalised_kanban_segments` and `kanban_paths_padding` pass |
| RW installer | Mode a works cleanly for RW-only bootstrap |
| Dual-kanban | Reliable 4-step sequence: RW mode a → legacy restore → kanban fresh → RW mode C |

### What did not improve

| Area | Status |
|------|--------|
| F17 (v1 catalog) | **BLOCKER** — same v1 templates |
| BR-086 (pattern specificity) | NOT READY — contract expects `{story:03d}` / `t{task`, fresh install uses `{story:02d}` / `T{task}` |
| Orchestrator `--skip-kanban` | Not added |
| `--non-interactive` EOFError | Fixed by using `--config` path instead of `--non-interactive` (workaround) |

## New findings (F18–F20)

### F18 — BR-086 contract vs reality mismatch

| Signal | Contract expects | Fresh install produces |
|--------|-----------------|----------------------|
| `story_doc_pattern` | `story-{story:03d}` | `story-{story:02d}` |
| `task_doc_pattern` | `t{task` (lowercase) | `T{task` (uppercase) |

The kanban fresh install creates `epic-05`, `story-02`, `T01` paths (02d zero-padded, uppercase T). The BR-086 contract expects 03d padding and lowercase task prefix. Either the contract or the installer template is wrong.

### F19 — `--non-interactive` EOFError on version_file prompt

`install_release_workflow.py --non-interactive` still prompts: *"Create minimal version file at src/myproject/version.py (initial 0.1.1.1+1)? [Y/n]:"* — then crashes with `EOFError: EOF when reading a line`. Workaround: pre-create version file and use `--config` instead.

### F20 — Default version_file path

Mode a generates `version_file: src/myproject/version.py` regardless of project name. Adopter must manually correct to `src/starborn_legacy/version.py`.

---

## Key re-checks vs attempt 03

### F17 — v1 catalog vs Kanban v3.2

| Check | Result |
|-------|--------|
| `docs/kanban/epics/epic-05/epic-05.md` title | **"# Epic 5: FR Implementation"** — v1 catalog confirmed |
| v3.2 remap (FR→E04:S02) | Not present — FR is still standalone epic 5 |
| ADK upstream templates on `main` | No change — `epic-05-FR-Implementation.md` still shipped |

### F10 — orchestrator skip-Kanban

| Check | Result |
|-------|--------|
| Orchestrator `--skip-kanban` flag | Not available |
| `use_kanban: false` honored | Yes, but only via `--mode a` RW direct, not orchestrator |

### BR-086 — lowercase pattern alignment

| Check | Result |
|-------|--------|
| `story_doc_pattern` contains `story-{story:03d}` | **No** — uses `{story:02d}` (matches actual on-disk layout) |
| `task_doc_pattern` contains `t{task` | **No** — uses `T{task:02d}` (matches actual on-disk layout) |

---

## Environment

- **OS:** Darwin 25.3.0 (arm64)
- **Python:** 3.9.6 (`.venv-adk`)
- **Disk:** ~29 GiB free at preflight
- **ADK:** `v0.4.1131` tarball, sha256 verified

---

## References

- Attempt 04 diary: `../greenfield-install-diary.md`
- Attempt 03 diary + FB: `../attempt-03/`
- UXR-025 triage: ADK `docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md`
