# Changelog — v0.2.16.5+13

**Release Date:** 2026-06-17 16:49:35 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 5 (perpetual)  
**SemVer:** v0.4.1201+13  
**Task:** E02:S16:T05 — Install error docs sync + MDX-safe ADK-I01.S06 (FR-111)

---

## Summary

**Change implemented:** Restored `test_install_error_docs_sync` parity — ADK-I01.S06 remediation in canonical `install-error-codes.yaml` uses inline backticks (MDX-safe `<path>` inside code span); regenerated `{/* ADK-ERROR-CODES:* */}` block in troubleshooting guide. Greenfield mirror synced.

---

## Changed

- `packages/frameworks/workflow-mgt/config/install-error-codes.yaml` — ADK-I01.S06 remediation backticks
- `docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md` — regenerated install error codes appendix
- `greenfield-install/packages/frameworks/workflow-mgt/config/install-error-codes.yaml` — mirror (FR-110)

## Verification

- `pytest tests/workflow_mgt/test_install_error_docs_sync.py` — 2 passed
- `portal/npm run build` — SUCCESS

## Related

- [FR-111](docs/kanban/fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md) · [E02:S16:T05](docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md)
