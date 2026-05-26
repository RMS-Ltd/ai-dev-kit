# ADK workflow skill pack (ECC-compatible)

This directory hosts **portable `SKILL.md` files** for optional integration with the ECC harness layer ([FR-098](../../../../docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)).

## Bridge field

Copy `packages/frameworks/workflow mgt/config/ecc-adk-bridge.yaml.template` to your project root as `ecc-adk-bridge.yaml` and set:

- **`adk_skill_pack_path`** → `packages/frameworks/workflow mgt/skills/`

That path is the canonical location of this pack within the AI Dev Kit framework checkout.

## Skills

| Slug | Role |
|------|------|
| `adk-release-workflow` | RW agent execution pattern |
| `adk-kanban-sync` | UKW agent execution pattern |
| `adk-implementation-planning` | IPW / planning package wiring |
| `adk-intake-fr-br-uxr` | FR/BR/UXR intake workflow |
| `adk-version-bump` | Internal schema + RW Step 2 alignment |

## Validation

From the repository root:

```bash
python "packages/frameworks/workflow mgt/scripts/validation/validate_adk_ecc_skill_pack.py"
python "packages/frameworks/workflow mgt/scripts/validation/validate_ecc_adk_bridge.py"
```

Optional ECC install (dry-run by default):

```bash
"packages/frameworks/workflow mgt/scripts/install/install_ecc_harness_optional.sh" --copy-bridge
```
