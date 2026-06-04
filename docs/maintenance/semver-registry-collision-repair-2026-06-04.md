---
lifecycle: evergreen
created_at: 2026-06-04T22:30:00Z
housekeeping_policy: keep
---

# SemVer registry collision repair (2026-06-04)

**Task:** E03:S02:T12 · **FR-045** / **FR-046** / **BR-061  
**Manifest:** [semver-registry-collision-repair-manifest.yaml](semver-registry-collision-repair-manifest.yaml)

## Policy

Registry and converter fixes only (**RF7**). Remote Git tags are **not** moved. `v0.4.870` may still point at commit `d6053e5` (UXR-018) while canonical internal `0.6.9.17+1` maps to `0.4.870+1` at `a492597`.

## Before

| PATCH | Internal versions |
|-------|-------------------|
| 789 | `0.2.16.4+8`, `0.2.16.10+1` |
| 806 | `0.6.9.5+4`, `0.6.9.6+1` |
| 869 | `0.5.1.76+2`, `0.5.9.12+2` |
| 870 | `0.5.9.12+3`, `0.6.9.17+1` |

## Actions applied

| Action | Target | Result |
|--------|--------|--------|
| Remove duplicate orphan | `0.5.1.76+2` | Dropped (same semver as `0.5.9.12+2`) |
| Reassign | `0.2.16.4+8` | PATCH 789 → **871**, `0.4.871+8` |
| Reassign | `0.6.9.5+4` | PATCH 806 → **872**, `0.4.872+4` |
| Reassign | `0.5.9.12+3` | PATCH 870 → **873**, `0.4.873+3` |
| Keep canonical | `0.2.16.10+1`, `0.6.9.6+1`, `0.5.9.12+2`, `0.6.9.17+1` | Unchanged |

**`task_touch_counter`:** 870 → **873**

## After

Audit: **0** PATCH/core collisions (`audit_semver_registry_collisions.py` exit 0).

## Tooling

```bash
python "packages/frameworks/workflow mgt/scripts/version/audit_semver_registry_collisions.py"
python "packages/frameworks/workflow mgt/scripts/version/repair_semver_registry_collisions.py" \
  --manifest docs/maintenance/semver-registry-collision-repair-manifest.yaml
python "packages/frameworks/workflow mgt/scripts/validation/validate_semver_registry_injective.py"
```

## Converter hardening (wave 2)

`semver_converter.py` finalize now rejects duplicate **PATCH** and **SemVer core** (`MAJOR.MINOR.PATCH`), not only full `semver+BUILD` strings.
