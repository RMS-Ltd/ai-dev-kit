---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Install RC checklist (release candidate gate)

**Machine-readable contract:** [`install-rc-checklist.yaml`](../../../packages/frameworks/workflow-mgt/config/install-rc-checklist.yaml)  
**Validator:** `validate_install_rc.py`  
**Task:** [E06:S09:T36](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) · **UXR:** [UXR-029](../../kanban/fr-br/UXR-029-adk-install-path-experiment.md) · **Evidence:** [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)

---

## Purpose

**Install RC** is the adopter **install-complete** gate — distinct from the GitHub Issue **sign-off contract** (`install_github_issue_signoff.py`). Attempt 09 showed **7 sign-off READY** while Install RC was **~50% FAIL**; this checklist closes that gap.

**Rule:** No **first domain RW** until Install RC passes for the chosen adoption path (unless operator documents explicit waiver in task doc).

---

## Profiles

| Profile | When | Blocking rows |
| ------- | ---- | ------------- |
| `greenfield` | Empty/template repo (FR-080) | Cross-cutting + greenfield |
| `arm-a` | Brownfield in-place (Path 1) | Cross-cutting + arm-a |
| `arm-b` | Shell + KMA (Path 2) | Cross-cutting + arm-b |
| `strangler` | Path 3 coexist sub-mode | Cross-cutting + strangler |

---

## Cross-cutting (all paths)

| ID | Requirement |
| -- | ----------- |
| `rc-rw-config` | `rw-config.yaml` exists with required Mode C keys when kanban enabled |
| `rc-sqlite-before-rw` | When `release_state_backend: sqlite`, `.adk/release-state.db` exists **before** first RW |
| `rc-docs-schema` | `documentation_surfaces` in rw-config **or** operator linked [DOCUMENTATION_SCHEMA.md](DOCUMENTATION_SCHEMA.md) |
| `rc-version-file` | `version_file` from rw-config exists on disk |
| `rc-changelog` | `main_changelog` exists on disk |
| `rc-single-kanban-board` | Sole active board `kboard.md` under `kanban_root` (ADR-018) |

---

## Arm B additional (Path 2)

| ID | Requirement |
| -- | ----------- |
| `rc-legacy-archived` | Legacy PM/docs archived outside active `kanban_root` (e.g. `docs-pre-ai-dev-kit/`) |
| `rc-kanban-v4` | Kanban tree uses v4 catalogue / `validate_v4_template_completeness --strict` when map present |
| `rc-kma-migration-map` | When KMA ran: `validate_migration_map.py` exit 0 |
| `rc-zero-adhoc-kma` | No ad-hoc KMA helper scripts under host `scripts/` or `tools/` matching `*kma*` / `*migrate*kanban*` |
| `rc-comprehension` | Install receipt or `COMPREHENSION.md` states: kanban root, docs authority, version truth, **restore ≠ migrate** |

---

## Arm A additional (Path 1)

| ID | Requirement |
| -- | ----------- |
| `rc-in-place-continuity` | Production tags / version history documented in install task doc |
| `rc-incremental-kma` | If legacy kanban exists: KMA proposal signed off before writes |

---

## Usage

```bash
# After layered install, before first domain RW
python packages/frameworks/workflow-mgt/scripts/validation/validate_install_rc.py \
  --project-root /path/to/adopter \
  --profile arm-b \
  --strict

# JSON report for FR-079 scorecard
python packages/frameworks/workflow-mgt/scripts/validation/validate_install_rc.py \
  --project-root . --profile arm-b --report-json /tmp/install-rc.json
```

**Orchestrator:** `install_greenfield_path.py --run-install-rc --adoption-path arm-b`

---

## Programme targets

| Attempt | Repo | Profile | RC target |
| ------- | ---- | ------- | --------- |
| 10 | Starborn Legacy | `arm-b` | **PASS** (0 ad-hoc KMA scripts) |
| 1 | fynd.deals | `arm-a` | PASS after recon |
| 1 | Confidentia | `arm-a` | PASS after recon |

See [adopter-install-attempt-preflight.md](../../guides/adopter-install-attempt-preflight.md).
