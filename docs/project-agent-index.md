---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Project agent index (human bootstrap mirror)

**Machine contract:** [`project-agent-manifest.json`](project-agent-manifest.json) · **Schema:** [`project-agent-manifest.schema.json`](project-agent-manifest.schema.json) · **ADR:** [ADR-012](architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)

---

## Read order (cold start)

**One step for agents:** read repo-root [`AGENTS.md`](../AGENTS.md) through the ascertainment rule. Routing, keywords, `loadFirst`, binding rules, and open-work snapshot live there — **not** in a second manifest read.

[`project-agent-manifest.json`](project-agent-manifest.json) is the machine mirror for validators and automation. Keep it aligned when editing the routing table in `AGENTS.md`.

**Skip triage when the operator provides:** `Track: <id> | File: <path> | Task: E##:S##:T##`

---

## Tracks (summary)

| Track ID | Label | Entry |
| -------- | ----- | ----- |
| `workflows` | RW, UKW, IPW, CMW, PVW | [Workflow cheatsheet](guides/workflow-initiation-cheatsheet.md) |
| `kanban` | Boards + intake | [kboard.md](project-management/kanban/kboard.md) |
| `governance` | Policies + ADRs | [docs/governance/README.md](governance/README.md) |
| `frameworks` | Packaged frameworks | [workflow mgt README](../packages/frameworks/workflow-mgt/README.md) |
| `planning` | IPW / IPP / ICW | [.claude/commands/ipw.md](../.claude/commands/ipw.md) |
| `meta` | Bootstrap architecture | [ADR-012](architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md) |

Full routing table: [`AGENTS.md`](../AGENTS.md) § Task routing (mirror: manifest `taskRouting[]`).

---

## Anti-patterns (do not cold-load)

- Entire [`CHANGELOG.md`](../CHANGELOG.md) archive tree or `docs/changelog-and-release-notes/changelog-archive/` unless doing changelog work.
- [`docs/journals/`](../docs/journals/) unless forensic/RW recovery is routed.
- Full [`fbuboard.md`](project-management/kanban/fbuboard.md) MoSCOW scan unless kanban/FBU track matched.
- Agent transcripts or plan folders outside the repo.
- Full [`.cursorrules`](../.cursorrules) ingest before reading [`AGENTS.md`](../AGENTS.md) — load workflow sections when `workflows` track matches.
- [`project-agent-manifest.json`](project-agent-manifest.json) on cold start (routing is in `AGENTS.md`).

---

## Validate manifest

```bash
# Syntax
python3 -m json.tool docs/project-agent-manifest.json > /dev/null

# Schema (requires jsonschema: pip install jsonschema)
python3 -c "
import json
from pathlib import Path
try:
    import jsonschema
except ImportError:
    raise SystemExit('pip install jsonschema')
manifest = json.loads(Path('docs/project-agent-manifest.json').read_text())
schema = json.loads(Path('docs/project-agent-manifest.schema.json').read_text())
jsonschema.validate(manifest, schema)
print('OK')
"

# Path existence (from repo root)
python3 scripts/validate-project-agent-manifest-paths.py
```

---

## Maintenance

| Manifest section | How to update |
| ---------------- | ------------- |
| `introduction`, `protocol`, `taskRouting`, `tracks` | Edit JSON in PR; keep aligned with `AGENTS.md` track table |
| `canon[]`, `openWork[]` | Manual curation v1; generator deferred (FR-103) |

When adding a recurring operator workflow, add a `taskRouting[]` row within one week (ADR-012).

---

## Cold-start verification

See [agent-cold-start-checklist.md](guides/agent-cold-start-checklist.md).

---

## Related

- [FR-103](project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing.md) · [E02:S16:T17](project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103.md)
- [Kanban workflow agents](project-management/kanban/AGENTS.md)
