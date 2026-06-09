---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Obsidian maintainer editor profiles (FR-121)

**Authority:** Git remains the **sole source of truth** for maintainer documentation. Obsidian is an optional **local editor** on the repository vault — never authoritative. See [ADR-026](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md).

Configuration key: `maintainer_editor_profile` in `rw-config.yaml` (set at greenfield / RW install).

---

## Profile comparison

| Profile | Use when | What install creates | Git policy |
| ------- | -------- | -------------------- | ---------- |
| `none` | Default; IDE or any editor | Nothing | N/A |
| `obsidian-personal` | Solo maintainer; local Obsidian prefs | `docs/maintainer/OBSIDIAN-QUICKSTART.md` | Entire `.obsidian/` gitignored |
| `obsidian-team` | Team shares editor defaults | `.obsidian/` stable JSON (`app.json`, `appearance.json`, `community-plugins.json`) | Commit stable config; gitignore workspace, cache, plugin binaries |

---

## none (default)

No Obsidian scaffolding. Author maintainer docs at git paths (`docs/knowledge/`, `docs/maintenance/`, `docs/analysis/`, etc.) with your preferred editor.

---

## obsidian-personal

1. Run RW install and choose **obsidian-personal**, or set `maintainer_editor_profile: obsidian-personal` in `rw-config.yaml`.
2. Open the repository root as an Obsidian vault.
3. Read [`OBSIDIAN-QUICKSTART.md`](OBSIDIAN-QUICKSTART.md) for first-run steps.

**Gitignore:** `.obsidian/` — workspace layout, plugins, and cache stay local.

---

## obsidian-team

1. Run RW install and choose **obsidian-team**, or set `maintainer_editor_profile: obsidian-team`.
2. Commit the scaffolded `.obsidian/*.json` files so teammates share baseline settings.
3. Each developer opens the repo as a vault; local workspace state is not committed.

**Gitignore (appended by installer):**

```gitignore
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.obsidian/cache/
.obsidian/plugins/
```

Add community plugin IDs to `community-plugins.json` when the team agrees; plugin downloads remain local under `.obsidian/plugins/`.

---

## Install surfaces

- **RW installer:** `install_release_workflow.py` — interactive prompt or `--maintainer-editor-profile`
- **Greenfield orchestrator:** `install_greenfield_path.py --maintainer-editor-profile …`
- **Non-interactive default:** `none` (no Obsidian files)

---

## References

- [FR-121](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [ADR-026](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
