---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# IDE command whitelist guide

**Version:** 1.1 (2026-05-30) · **ADR:** [ADR-013](../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md) · **Task:** [E06:S07:T107](../project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md)

---

## Overview

This guide explains the **pattern catalog + validator + Cursor playbook** model for reducing agent terminal approval friction. It does **not** claim that YAML alone auto-approves commands in Cursor.

| Layer | File | Role |
| ----- | ---- | ---- |
| Catalog | [`.cursor/whitelist-patterns.yaml`](../../.cursor/whitelist-patterns.yaml) | Regex SoT with examples |
| Cursor apply | [`.cursor/permissions.json`](../../.cursor/permissions.json) | **Terminal allowlist** Cursor loads automatically (prefix rules) |
| Proof | `validate_whitelist_patterns.py` | Ensures patterns compile and examples match |
| Playbook | This guide | Tune `permissions.json`; optional IDE UI for gaps |
| Evidence | [ide-whitelist-uat-log.md](ide-whitelist-uat-log.md) | UAT and integration spike entries |

**Out of scope:** [BR-039](../project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) (Cascade/Windsurf vendor whitelist). See [E06:S06:T57](../project-management/kanban/epics/epic-06/story-06-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md).

---

## Friction analysis (AC1)

| Friction class | Example | Why it hurts |
| -------------- | ------- | ------------ |
| Concrete storage | `validate_branch_context.py --strict` vs same script without flag | Each variant is a new approval |
| Version tokens | Tags/changelog strings with `v0.6.7.101+33` | Unique strings per release |
| Path variants | Absolute paths vs repo-relative | Duplicated allowlist rows |
| Parameter drift | `--requested "E06:S07:T107"` vs other E:S:T | RW guard scripts need per-task strings |
| Product behavior | Cursor stores literal approved strings | No import of repo YAML by default |

---

## Cursor integration (enforcement truth)

| Question | Answer |
| -------- | ------ |
| Does Cursor load `whitelist-patterns.yaml`? | **No** — regex catalog is repo SoT only |
| Does Cursor load `.cursor/permissions.json`? | **Yes** — [permissions.json reference](https://cursor.com/docs/reference/permissions). Terminal entries use **prefix** matching on the full command string. |
| What should maintainers do? | 1) Enable **Run Mode → Allowlist** (or Allowlist with Sandbox). 2) Commit/use [`.cursor/permissions.json`](../../.cursor/permissions.json) (already mapped from the catalog). 3) After catalog changes, update `permissions.json` prefixes and re-run the validator. |
| What does the repo automate? | `validate_whitelist_patterns.py` — YAML coherence; `permissions.json` is maintained alongside the catalog (see maintainer workflow). |

### One-time setup (this machine)

**Open the correct settings panel**

| Panel | Shortcut (macOS) | Has Run Mode / Agents? |
| ----- | ---------------- | ---------------------- |
| **Cursor Settings** | `Cmd+Shift+J` | **Yes** — use this one |
| Editor Settings (VS Code) | `Cmd+,` | No — fonts, format on save, etc. |

In **Cursor Settings**, use the **left sidebar** (not General / Privacy only). Scroll until you see **Agents** (sometimes under **Features** or **Beta**, depending on version).

**Run Mode (Cursor 3.6+)**

| Mode | Use with `permissions.json`? |
| ---- | ---------------------------- |
| **Auto-review** (common default) | **Yes** — allowlisted terminal commands run immediately; others go to classifier |
| **Allowlist** | **Yes** — strictest; only allowlisted commands auto-run |
| **Allowlist (with Sandbox)** | **Yes** — allowlisted outside sandbox; rest sandboxed |
| **Run Everything** | Allowlist still defined but everything runs (not recommended) |

You do **not** have to switch away from Auto-review if that is already selected. The repo [`.cursor/permissions.json`](../../.cursor/permissions.json) supplies the terminal allowlist in all modes above except deprecated “Ask every time”.

**If you still cannot find Agents**

1. **Settings search** (top of Cursor Settings) → type `Run Mode` or `allowlist` or `terminal`.
2. **Update Cursor** to 3.6+ (Help → Check for Updates).
3. **Verify the file loaded:** with this repo open, Agent runs `git status` — use **Add to allowlist** on the prompt once; if `permissions.json` is active, Settings should note allowlist is file-controlled.
4. **Fallback:** only `~/.cursor/permissions.json` + repo file merge; no UI section required for prefixes to apply once Run Mode is enabled.

**Confirm**

- Terminal allowlist shows entries from `permissions.json` (read-only in UI when file defines `terminalAllowlist`).
- Smoke test: `python "packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py" --strict` from repo root.

---

## Running the validator

From repository root:

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py"
```

With explicit root:

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py" --project-root /path/to/ai-dev-kit
```

Pytest (global **pytest-django** from other projects must be blocked — plain `python -m pytest …/test_validate_*.py` may fail):

```bash
bash "packages/frameworks/workflow-mgt/scripts/validation/run_isolated_pytest.sh"
```

Or any of:

```bash
python "packages/frameworks/workflow-mgt/scripts/validation/test_validate_whitelist_patterns.py"
python "packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py" --run-tests
```

All of the above set `PYTEST_DISABLE_PLUGIN_AUTOLOAD=1` and skip `pytest_django`.

---

## Pattern catalog highlights

### Python validation (RW Step 9)

```yaml
python_validation_scripts:
  pattern: '^python "packages/frameworks/workflow-mgt/scripts/validation/validate_[a-z0-9_]+\.py"(\s+.*)?$'
```

Covers all `validate_*.py` invocations with optional flags (`--strict`, `--requested`, `--art`, etc.).

### Git (RW Steps 8–12)

```yaml
git_rw_operations:
  pattern: '^git (add|status|commit|push|tag|checkout|branch|log|diff|restore|show|merge|pull|fetch)(\s+.*)?$'
```

**Security:** Do not add blanket `git push --force` to Cursor allowlist. Review force-push manually.

### Project find

Use `{PROJECT_ROOT}` in examples — substitute your clone path when configuring IDE rules:

```bash
find {PROJECT_ROOT} -name "validate_*.py"
```

---

## Maintainer workflow

1. Add or refine a pattern in `.cursor/whitelist-patterns.yaml` with `examples` and optional `negative_examples`.
2. Run `validate_whitelist_patterns.py` (must pass).
3. Add matching **prefix** line(s) to `.cursor/permissions.json` → `terminalAllowlist` (see [Cursor prefix rules](https://cursor.com/docs/reference/permissions#terminal-allowlist-format)).
4. Append a row to [ide-whitelist-uat-log.md](ide-whitelist-uat-log.md) if measuring prompt counts.
5. Release via `RW` on the host task when changing catalog or permissions in a versioned delivery.

---

## Security guidelines

- Forbidden in catalog: `^.*$`, maintainer home paths (`/Users/…`).
- Prefer narrow script paths over generic `python .*`.
- Group patterns in `contexts` (high / medium / low) when deciding Cursor approval tiers.

---

## Implementation status

- [x] Configuration file (catalog v1.1)
- [x] Core patterns for validation, git, semver, find, pytest
- [x] Documentation (this guide + ADR-013)
- [x] Automated validator + pytest
- [x] Integration spike documented (UAT log)
- [x] Repo `.cursor/permissions.json` (prefix allowlist from catalog)
- [ ] Live prompt-count UAT (maintainer — Entry 002 in UAT log)
- [ ] Team training (optional walkthrough)

---

## Support

1. This guide and [ADR-013](../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md)
2. [IPP-E06S07T107](../implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md)
3. [T107 task doc](../project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md)

**Last updated:** 2026-05-30
