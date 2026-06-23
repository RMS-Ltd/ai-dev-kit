---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-032: FBU intake directory convention (`fbu/`)

**Status:** Accepted  
**Date:** 2026-06-23  
**Deciders:** Maintainer (via E04:S19:T14 / UXR-032)  
**Related:** [UXR-032](../../kanban/fbu/UXR-032-fr-br-directory-rename-to-fbu.md), [FR-086](../../kanban/fbu/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md), [fbu-directory-migration-guide.md](fbu-directory-migration-guide.md), [ADR-015](ADR-015-kanban-epic-story-path-lowercase-convention.md)

---

## Context

FR-086 / UXR-008 adopted **FBU** as the collective term for Feature Requests, Bug Reports, and User Experience Research in prose, boards, and ledgers (`intake-structure.md`, `kboard.md`). The on-disk intake directory remained `docs/kanban/fbu/` and `rw-config.yaml` used `fbu_root` — daily terminology drift for operators and agents.

Individual issue files correctly retain native prefixes (`FR-*.md`, `BR-*.md`, `UXR-*.md`); only the **parent directory** and **config key** are misaligned.

---

## Decision

1. **Write-default (new installs and migrated corpora):**
   - Intake directory: `{kanban_root}/fbu/` (ai-dev-kit: `docs/kanban/fbu/`).
   - rw-config key: `fbu_root` (project-root-relative path, e.g. `docs/kanban/fbu`).

2. **Read-tolerance (one release cycle):**
   - Tooling MUST accept legacy `fbu_root` in `rw-config.yaml` and on-disk `{kanban_root}/fbu/` when `fbu/` is absent.
   - Prefer `fbu/` when both exist.

3. **Out of scope:** Renaming individual `FR-` / `BR-` / `UXR-` filenames; renaming `FR_BR_INTAKE_GUIDE.md`; filesystem symlink stub at `fbu/`.

4. **Implementation source of truth:** `packages/frameworks/kanban/scripts/kanban_paths.py` — `DEFAULT_FBU_SUBDIR`, `resolve_fbu_root_path`, `resolve_fbu_root_config_relative`.

5. **Phased rollout (ai-dev-kit):**
   - **Wave 1:** Framework resolvers, install emit `fbu_root`, read-compat for `fbu/`.
   - **Wave 2:** ai-dev-kit corpus `git mv` + link sweep + `rw-config.yaml`; drift validator strict on active trees.

---

## Alternatives considered

| Option | Rejected because |
| ------ | ---------------- |
| Keep `fbu/` | Terminology drift vs FBU collective (FR-086) |
| Symlink `fr-br` → `fbu` | Dual-path agent confusion |
| Dual-key emit (`fbu_root` + `fbu_root`) | Perpetuates legacy key in new installs |

---

## Consequences

- **Positive:** On-disk layout matches FBU terminology; shorter paths; install/RW detection align.
- **Negative:** Large link sweep in ai-dev-kit (Wave 2); brownfield adopters must update `rw-config.yaml` or run migration helper.
- **Supersedes:** `fbu_root` examples in `rw-config-schema` and intake guides (content updated in Wave 1–2).

---

## References

- [IPP-E04S19T14](../../implementation-cycles/IPP-E04S19T14-fr-br-directory-rename-to-fbu.md)
- [kanban_paths.py](../../../packages/frameworks/kanban/scripts/kanban_paths.py)
