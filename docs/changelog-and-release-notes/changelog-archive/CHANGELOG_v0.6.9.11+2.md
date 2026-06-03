# Changelog v0.6.9.11+2

**Release Date:** 2026-06-03 19:19:22 UTC  
**Epic | Story | Task:** E06:S09:T11 (`RW --art`)  
**SemVer (task_touch):** v0.4.857+2  

## Summary

**Attempted fix (BR-082):** RW installer fails fast with actionable PyYAML guidance before interactive install; `--check-deps` preflight; greenfield/submodule docs list venv deps before Step 3/4.

## Change implemented

### Framework (RW installer)

- **`check_dependencies()`** / **`format_dependency_help()`** — `importlib.util.find_spec`; no import-time PyYAML crash
- **`--check-deps`** — non-interactive preflight (exit 0/1)
- **`get_yaml()`** — lazy PyYAML import after dependency check

### Tests

- **`tests/test_install_release_workflow_deps.py`** — 5 tests (missing dep message, `--check-deps` OK, dry-run with config, INSTALL doc ordering)

### Documentation

- **`INSTALL_IN_YOUR_PROJECT.md`** — Installer venv dependencies + Method 2 Step 3b before RW install
- **`packages/frameworks/workflow mgt/README.md`** — PyYAML hard dep + preflight snippet

## References

- [BR-082](../project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight.md)
- [IPP-E06S09T11](../implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md)
- GitHub [#14](https://github.com/RMS-Ltd/ai-dev-kit/issues/14)
