---
lifecycle: timeboxed
ttl_days: 365
created_at: 2026-05-26T18:30:00Z
expires_at: null
housekeeping_policy: archive
---

# ADR: OpenClaw process sentinel skill (agent orphan detection)

**Status:** Proposed  
**Date:** 2026-05-26  
**Decision owner:** Maintainer  
**Disposition:** Transient sketch — intended for relocation into OpenClaw workspace or external notes; not host-project runtime policy.

**Triggering incident:** Orphaned Xcode Python 3.9 (PID 96535) ran at ~95% CPU for ~6 days (~42h cumulative CPU time) after an academic-paper build heredoc; parent shell gone (PPID 1); CWD in `~/.Trash/docs.repo-backup-20260522/academic`.

---

## Context

Agentic development workflows (Cursor agents, OpenClaw shell tools, inline heredoc scripts, CI scripts) routinely spawn short-lived child processes. When the parent terminal or agent session exits without reaping children, orphans reparent to `launchd` (PPID 1) and may spin indefinitely. Activity Monitor shows a generic **Python** (or **node**, **bash**) with no script name — diagnosis requires manual `ps`, `lsof`, and `sample`.

Generic personal assistants do not monitor host process health. OpenClaw is **local-first**, **always-on**, supports **cron**, **shell tools**, and **multi-channel alerts** — a natural home for a lightweight **process sentinel**.

This ADR records the intended design for an OpenClaw **workspace skill**. No `SKILL.md` is created here; this document is the sole artifact until filed elsewhere.

---

## Decision

Adopt a **Process Sentinel** OpenClaw skill that:

1. Runs on a **cron schedule** (default: every 15 minutes).
2. Detects **sustained high-CPU** processes matching **orphan / agent-leak heuristics**.
3. **Enriches** findings with cwd, elapsed time, open files, and optional 1s stack sample.
4. **Classifies** severity and recommended action.
5. **Alerts** via configured channel(s) with human-readable summary.
6. **Remediates** only per explicit policy tier (default: alert-only; never auto-kill without opt-in).

---

## Skill identity (OpenClaw workspace)

| Field | Value |
|-------|-------|
| **Skill name** | `process-sentinel` |
| **Display name** | Process Sentinel |
| **Trigger** | Cron (`process-sentinel-scan`) + on-demand (`/sentinel`, “check runaway processes”) |
| **Runtime** | Host shell (macOS primary; Linux optional later) |
| **Dependencies** | `ps`, `lsof`, `sample` (macOS), `awk`; no Python required for scanner |

### Agent instructions (SOUL / skill preamble)

When invoked, the agent MUST:

- Run the deterministic scan script first; do not improvise detection logic in prose.
- Never `kill` without presenting enrichment output and receiving explicit user confirmation (unless `auto_remediate: aggressive` is enabled — see Policy tiers).
- Prefer **explain → confirm → act** over silent remediation.
- Log every alert and action to the workspace audit file.

---

## Detection pipeline

### Phase 1 — Candidate enumeration

```bash
# Pseudocode contract (implement as scripts/process-sentinel-scan.sh)
ps -eo pid,ppid,pcpu,etime,comm -r \
  | awk '$3 >= CPU_THRESHOLD { print }'
```

Defaults:

| Parameter | Default | Rationale |
|-----------|---------|-----------|
| `CPU_THRESHOLD` | 50 | Ignore idle-ish background work |
| `SUSTAINED_MINUTES` | 30 | Require persistence across ≥2 cron ticks |
| `MIN_ELAPSED` | 1h | Ignore fresh builds still warming up |

**Sustained CPU:** store `(pid → first_seen_high_cpu)` in workspace state file `~/.openclaw/workspace/process-sentinel/state.json`. Alert only when threshold exceeded continuously for `SUSTAINED_MINUTES`.

### Phase 2 — Enrichment (per candidate PID)

Collect:

| Signal | Command / source | Purpose |
|--------|------------------|---------|
| Full command | `ps -p $PID -o command=` | Binary + args (often bare for heredocs) |
| Parent | `ps -p $PPID -o comm=` | Orphan vs live parent |
| CWD | `lsof -p $PID \| grep cwd` | Trash / temp / agent workspace |
| CPU time | `ps -p $PID -o time=` | Cumulative burn |
| Elapsed | `ps -p $PID -o etime=` | Wall-clock age |
| Open stdin | `lsof -p $PID \| grep -E '^\S+\s+\d+.*\s0r'` | Heredoc / deleted temp file |
| Sample (optional) | `sample $PID 1` | Confirm tight eval loop vs I/O wait |

### Phase 3 — Heuristic scoring

Each candidate receives a **leak score** (0–100). Alert at ≥ 60; auto-kill candidate at ≥ 85 only with aggressive policy.

| Rule | Points | Notes |
|------|--------|-------|
| PPID == 1 | +25 | Orphaned (reparented to launchd) |
| `%CPU >= 80` | +20 | |
| `etime >= 24h` | +15 | |
| CWD matches `~/.Trash` or `/private/tmp` | +20 | |
| `comm` in `{Python, python3, node, bash, zsh}` generic name | +10 | |
| No controlling TTY (`lsof` lacks `tty`) | +10 | |
| CPU time / elapsed ratio > 0.5 | +15 | Mostly compute, not idle |
| CWD under known agent project + high CPU + PPID 1 | +10 | Cursor/OpenClaw collateral |
| Parent is `Cursor`, `Code Helper`, `openclaw`, `node` (gateway) | −30 | May be intentional; downgrade to warn |
| Process name includes `language-server`, `pyright`, `ruff` | −40 | Exclude LSP |

**Classification labels:**

| Score | Label | Default action |
|-------|-------|----------------|
| 85–100 | `critical-leak` | Alert + offer one-tap kill |
| 60–84 | `probable-leak` | Alert only |
| 40–59 | `watch` | Log; digest in daily summary |
| < 40 | `ignore` | No alert |

---

## Remediation policy tiers

Configure in workspace JSON (`process-sentinel.config.json`):

```json
{
  "auto_remediate": "alert-only",
  "cpu_threshold": 50,
  "sustained_minutes": 30,
  "channels": ["telegram", "webchat"],
  "exclude_comm": ["kernel_task", "WindowServer"],
  "exclude_path_prefixes": ["/System/", "/Library/Audio"]
}
```

| Tier | `auto_remediate` | Behaviour |
|------|------------------|-----------|
| **0 — alert-only** (default) | `alert-only` | Notify; user confirms kill |
| **1 — soft kill** | `soft-kill` | `kill $PID` on `critical-leak` after 2nd consecutive scan |
| **2 — aggressive** | `aggressive` | `kill -9` on `critical-leak` ≥ 90 score; use only on dedicated dev machine |

**Never** auto-kill processes whose parent is an active user shell (PPID ≠ 1 and parent has TTY).

---

## Alert templates

### Telegram / multi-channel (probable-leak)

```
🦞 Process Sentinel — probable leak

PID:     96535
Process: Python (Xcode 3.9)
CPU:     97.8% sustained 6 days
CPU time: 42h 32m
CWD:     ~/.Trash/docs.repo-backup-20260522/academic
PPID:    1 (orphan)
Score:   92 — critical-leak

Likely cause: orphaned inline Python heredoc from shell build script.

Reply KILL 96535 to terminate, or IGNORE to suppress 24h.
```

### WebChat / Canvas companion

Render a small table: PID, CPU%, elapsed, cwd, score, [Kill] [Ignore] [Details] buttons via Live Canvas when available.

---

## Cron integration (OpenClaw)

```yaml
# Illustrative cron entry — exact OpenClaw cron schema per installed version
id: process-sentinel-scan
schedule: "*/15 * * * *"
agent: default
message: |
  Run process-sentinel skill: execute scan script, diff against state,
  send alerts for new/changed candidates scoring >= 60.
  Do not kill unless config auto_remediate != alert-only.
```

**Daily digest** (optional, 09:00 local): top 5 CPU processes, new orphans in last 24h, suppressed PIDs.

---

## Workspace layout (when implemented in OpenClaw)

```
~/.openclaw/workspace/process-sentinel/
├── process-sentinel.config.json    # policy tier + thresholds
├── state.json                      # pid → first_seen, last_score, alert_count
├── suppress.json                   # user IGNORE ttl entries
├── audit.log                       # append-only actions
└── scripts/
    ├── scan.sh                     # Phase 1–3; emits JSON to stdout
    ├── enrich.sh                   # single-PID enrichment
    └── remediate.sh                # kill with guardrails
```

### `scan.sh` output contract (JSON)

```json
{
  "scan_at": "2026-05-26T17:57:00Z",
  "candidates": [
    {
      "pid": 96535,
      "ppid": 1,
      "comm": "Python",
      "pcpu": 97.8,
      "etime": "5-23:24:32",
      "cpu_time": "42:32:50",
      "cwd": "/Users/rms/.Trash/docs.repo-backup-20260522/academic",
      "score": 92,
      "label": "critical-leak",
      "recommended_action": "kill-with-confirmation"
    }
  ]
}
```

Agent parses JSON; no free-form detection in LLM turn.

---

## Incident replay (acceptance scenario)

Given the 2026-05-26 orphan Python incident, a correct sentinel run would:

1. **First cron after 30m sustained high CPU:** score ≥ 85, alert sent.
2. **Enrichment** cites Trash cwd + PPID 1 + bare Python binary.
3. **User replies** `KILL 96535` → agent runs `kill 96535`, verifies exit, logs audit entry.
4. **No second alert** for same PID after termination.

---

## Relationship to host dev workflows

| Concern | Role |
|---------|------|
| IDE / agent sessions spawning shells | **Risk source** — sentinel is external host hygiene |
| Project release or validation scripts | Unchanged; do not embed sentinel in project CI by default |
| This ADR | **Transient** wherever filed initially; relocate to OpenClaw workspace when implemented |

---

## Consequences

### Positive

- Catches agent orphan leaks within minutes–hours, not days.
- Deterministic scan reduces LLM token burn (agent interprets JSON, not raw `ps`).
- Reusable pattern for any always-on local assistant with shell + cron.

### Negative / limits

- Heuristics false-positive on intentional long builds (mitigate via `MIN_ELAPSED`, parent downgrade).
- macOS `sample` unavailable on Linux — degrade gracefully without stack hint.
- Cannot see script source for stdin-fed heredocs after temp file deletion (cwd + timing still diagnostic).
- Another always-on daemon uses baseline CPU/RAM (minimal if cron + shell only).

### Out of scope (v1)

- cgroup / container-aware monitoring
- Windows/WSL support
- Integration with Activity Monitor GUI
- Automatic post-mortem linking to IDE session IDs

---

## Implementation checklist (OpenClaw play session)

- [ ] `openclaw onboard` — baseline gateway + one alert channel
- [ ] Create workspace `process-sentinel/` layout above
- [ ] Implement `scan.sh` + JSON contract; test against synthetic `yes > /dev/null` orphan
- [ ] Register cron `process-sentinel-scan`
- [ ] Wire skill preamble into workspace agent instructions
- [ ] Dry-run with `auto_remediate: alert-only`
- [ ] Document `KILL` / `IGNORE` reply grammar in channel
- [ ] Relocate this ADR to OpenClaw workspace or personal notes

---

## References

- OpenClaw: [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw) — cron, skills, multi-channel inbox
- OpenClaw docs: [docs.openclaw.ai/tools/skills](https://docs.openclaw.ai/tools/skills)
- Triggering diagnosis session: 2026-05-26 — orphan PID 96535, Xcode Python 3.9, academic paper assemble heredoc

---

## Revision history

| Date | Change |
|------|--------|
| 2026-05-26 | Initial proposed sketch |
| 2026-05-26 | Renumbered to project-agnostic title (no ADR index) |
