# Kanban migration experiment report — attempt 06 (maintainer synopsis)

**Status:** Maintainer mirror on ADK. The adopter-original lived in SBL-local gitignored logs and was not recovered before SBL branch revert ([#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)).

**Session:** `20260610-attempt-06` · **ADK pin:** `v0.4.1140+2` → `256259fb2`

## Headline findings (from adopter sign-off + triage)

| Finding | Detail |
|---------|--------|
| Tool pipeline | Detected **0/80+** legacy stories via scripted structure detection |
| Agentic migration | **72 stories** migrated into canonical E01–E10 + domain E21–E28 |
| Dual kanban | Legacy `KB/PM_and_Portfolio/` preserved alongside ADK `docs/kanban/` |
| Upstream filed | **F22** → [FR-127](../../../docs/kanban/fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) / [T31](../../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md) |
| Upstream filed | **F23** → [BR-108](../../../docs/kanban/fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md) / [T32](../../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T32-detect-structure-zero-padded-epic-br108.md) |

## References

- [IPP-E06S09T31](../../../docs/implementation-cycles/IPP-E06S09T31-agentic-kanban-migration-agent-fr127.md)
- [attempt-06 maintainer index](../README.md)
- [starborn-legacy-install-triage-matrix](../../../docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)
