# Starborn Legacy install — triage matrix (attempt 04 addendum)

**Extends:** [UXR-025](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md) · attempt 03 triage (F10–F17)
**ADK pin:** `v0.4.1131` tarball
**Session:** `20260610-attempt-04`
**Feedback package:** `./starborn-legacy-attempt04-feedback.md`

---

## Disposition summary

| ID | Finding | Severity | Disposition | Suggested outcome |
|----|---------|----------|-------------|-------------------|
| F18 | **BR-086 contract expects `{story:03d}` but fresh install produces `{story:02d}`** — mismatch between sign-off contract and `install_kanban_framework.py --mode fresh` output | MEDIUM | **CODE** | Align contract or installer — fresh produces `epic-05` / `story-02` / `T01` at `{epic:02d}`/`{story:02d}` |
| F19 | **`--non-interactive` crashes on version_file prompt** — `EOFError` despite `--non-interactive` flag | HIGH | **CODE** | Fix `prompt_yes_no` to respect `--non-interactive` when `ensure_version_file_scaffold` runs |
| F20 | **Default `version_file` path `src/myproject/version.py`** — not project-aware in mode a | MEDIUM | **CODE** | Derive from project name or project-root structure |

---

## Re-checks from attempt 03

| ID | Finding (brief) | Attempt-03 status | Attempt-04 result |
|----|-----------------|-------------------|-------------------|
| F9/F17 | v1 catalog installed instead of v3.2 | **CRITICAL / BLOCKER** | **BLOCKER — still v1 in v0.4.1131** |
| F10 | No skip-Kanban path | HIGH | **Not addressed** — orchestrator unchanged |
| F11 | `use_kanban: false` post-install no docs/ | HIGH | **Mitigated by sequencing** — RW mode a → kanban fresh |
| F12 | Legacy vs ADK kanban path confusion | MEDIUM | **Doc gap remains** — adopter still needs manual dual-tree setup |
| F14 | Dual kanban manual 4-step sequence | MEDIUM | **Workaround documented** in diary, but no orchestrated profile |
| BR-086 | Pattern mismatch (story/task doc pattern) | NOT READY | **NOT READY** — narrower gap but still mismatched |
