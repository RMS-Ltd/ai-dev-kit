---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T23:45:00Z
expires_at: null
housekeeping_policy: keep
---

# IDE whitelist — UAT and integration evidence log

**Task:** [E06:S07:T107](../project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md)  
**ADR:** [ADR-013](../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md)  
**Append-only:** Add new entries at the top of [Evidence entries](#evidence-entries).

---

## Evidence schema

| Field | Required | Description |
| ----- | -------- | ----------- |
| `date_utc` | Yes | ISO-8601 UTC timestamp |
| `scenario` | Yes | What was tested (e.g. RW mini-sequence, Cursor allowlist setup) |
| `expected` | Yes | Expected behavior |
| `observed` | Yes | What happened |
| `prompts_before` | UAT only | Approval prompt count before catalog applied in Cursor |
| `prompts_after` | UAT only | Approval prompt count after maintainer configured allowlist |
| `result` | Yes | `pass` \| `fail` \| `blocked` \| `partial` |
| `notes` | No | Tool version, follow-ups |

---

## Research spike — Cursor integration (2026-05-30)

| Field | Value |
| ----- | ----- |
| `date_utc` | 2026-05-30T23:45:00Z |
| `scenario` | Product integration spike — does Cursor load `.cursor/whitelist-patterns.yaml`? |
| `expected` | Repo catalog consumed automatically or documented hook |
| `observed` | **No.** Cursor does not read this YAML. Command approval uses **Cursor Settings** (Agents / Auto-Run / sandbox allowlist — exact labels vary by version). Maintainers map regex families from the catalog into UI rules manually. |
| `result` | `pass` (honest model documented in ADR-013 + guide) |
| `notes` | Optional future: Cursor hooks if API stabilizes. Does **not** fix [BR-039](../project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) (Windsurf/Cascade vendor). |

---

## Evidence entries

### Entry 001 — Automated catalog validation (2026-05-30)

| Field | Value |
| ----- | ----- |
| `date_utc` | 2026-05-30T23:50:00Z |
| `scenario` | `validate_whitelist_patterns.py` + pytest on repo catalog |
| `expected` | Exit 0; all `examples` match; no `/Users/` in YAML |
| `observed` | PASS; 4 pytest cases green |
| `result` | `pass` |
| `notes` | [test_validate_whitelist_patterns.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/test_validate_whitelist_patterns.py) |

### Entry 002 — Live prompt reduction (maintainer UAT — pending)

| Field | Value |
| ----- | ----- |
| `date_utc` | 2026-06-01T17:30:00Z |
| `scenario` | Repo `.cursor/permissions.json` applied from catalog; Run Mode Allowlist required on maintainer machine |
| `expected` | Fewer repeated approvals for validation/git command families vs concrete-string allowlist |
| `observed` | **Repo configured:** `terminalAllowlist` prefixes in [`.cursor/permissions.json`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/permissions.json). **Pending:** maintainer enables Allowlist run mode and records prompt counts on next RW mini-sequence |
| `prompts_before` | TBD |
| `prompts_after` | TBD |
| `result` | `partial` |
| `notes` | Deliberately omits blanket `git` prefix (avoids auto-allowing `git push --force`). Uses `git push origin` instead. |

### Entry 003 — permissions.json catalog mapping (2026-06-01)

| Field | Value |
| ----- | ----- |
| `date_utc` | 2026-06-01T17:30:00Z |
| `scenario` | Map [whitelist-patterns.yaml](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/whitelist-patterns.yaml) families → [permissions.json](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/permissions.json) per Cursor docs |
| `expected` | Prefix entries cover validation scripts, framework scripts, git RW subset, gh, rg, find |
| `observed` | File committed in repo; Cursor hot-reloads on change |
| `result` | `pass` |
| `notes` | See updated [ide-whitelist-guide.md](ide-whitelist-guide.md) § Cursor integration |
