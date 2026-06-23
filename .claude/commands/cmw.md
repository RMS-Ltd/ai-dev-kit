# Changelog Management Workflow (CMW) — Slash Command

**Invocation:** `/cmw`  
**Arguments:** `$ARGUMENTS` (optional flags — v1: none)  
**Plain-text alias:** `CMW` / `cmw` (case-insensitive)

---

## Environment Check (AC3)

- If Bash tool calls are **NOT** available: **`CMW BLOCKED: tool execution is unavailable in this session.`**
- If available: proceed.

---

## Execution contract (FR-126 encapsulation)

| Property | Value |
| -------- | ----- |
| **Mode** | implementation |
| **Terminal states** | `CMW COMPLETE`, `CMW ABORTED` |
| **Delegation SoT** | This file + `.cursorrules` CMW section (dual-source — keep aligned) |
| **KB** | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/` (RW Step 9.5 integration) |

---

## Triggers

| Invocation | Meaning |
| ---------- | ------- |
| `CMW` / `/cmw` | Manual changelog archive, ordering, hygiene |
| (automatic) | RW Step 9.5 when `check_changelog_size.py` exit code 1 (non-blocking) |

**Handoff:** `CMW` then `RW` — attributes perpetual CMW task (project-specific).

---

## Steps (5)

1. **Validate** — changelog format (`validate_changelog_format.py`)
2. **Order** — canonical version ordering
3. **Archive** — move entries per `rw-config.yaml` `changelog_archival` policy
4. **Consistency** — main ↔ archive links
5. **Report** — `CMW COMPLETE` with summary

Load `rw-config.yaml` for `main_changelog`, `changelog_dir`, `changelog_archival.mode`.

**Skill reference:** `.cursor/skills/cmw-maintain/SKILL.md`

---

## Abort protocol

- Non-blocking inside RW Step 9.5 (RW continues).
- Standalone: failures → **`CMW ABORTED`** with reason.

---

## References

- [FR-025](docs/kanban/fbu/FR-025-changelog-management-and-archival-workflow.md)
- [workflow-encapsulation-contract.md](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-encapsulation-contract.md)
