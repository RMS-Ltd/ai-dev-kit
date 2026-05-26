# Changelog v0.6.9.6+3

**Release Date:** 2026-05-26 14:59:56 UTC  
**Epic | Story | Task:** E6:S09:T06 (`--art`)  
**SemVer (task_touch):** v0.4.808+3  

## Summary

**E6:S09:T06 closure:** dogfood T8 recorded (ECC dry-run on disposable branch; bridge/skill validators PASS). Install helper fix: `--copy-bridge` copies template even in dry-run. Cheatsheet hook dry-run caveat; gitignore for local `ecc-adk-bridge.yaml`.

## Change implemented

### Tooling

- **`install_ecc_harness_optional.sh`** — `--copy-bridge` always copies when missing (dry-run no longer blocks bridge write)

### Documentation & hygiene

- [T06 task doc](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098.md) — T8 dogfood checklist complete; task **COMPLETE**
- [ECC + ADK cheatsheet](../../documentation/user-docs/ecc-adk-integration-cheatsheet.md) — dry-run still lists hooks despite `--without baseline:hooks`
- `.gitignore` — `ecc-adk-bridge.yaml` (adopter-local bridge copy)

### Dogfood evidence (throwaway branch)

- `npx ecc-install … --dry-run` — 342 planned ops; hooks + `common-git-workflow.mdc` require review before `--execute`
- `validate_ecc_adk_bridge.py` / `validate_adk_ecc_skill_pack.py` — PASS after bridge copy

## References

- [FR-098](../../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [IPP-E6S09T06](../../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md)
