# Changelog: v0.5.8.2+3

**Release Date:** 2026-02-20 16:00:00 UTC  
**Epic:** 5 (Documentation Management)  
**Story:** 8 (Knowledge Base)  
**Task:** 2 (Notion hub, Knowledge Base container, and KB index)  
**Internal Version:** 0.5.8.2+3  
**Attribution:** E5:S08:T02

---

## Summary

KB migration tooling: added `--emit-mcp-args` to `kb_push_to_notion.py`; generates MCP-compatible argument JSON files for remaining mapped pages. Enables manual or scripted execution via `call_mcp_tool`.

---

## Added

- **`scripts/kb_push_to_notion.py --emit-mcp-args`** – Writes `docs/knowledge/kb-migration-mcp-args/*.json` (26 files). Each contains `{server, toolName, arguments}` for `call_mcp_tool` with notion-update-page.
- **`docs/knowledge/kb-migration-mcp-args/`** – Directory of MCP-ready JSON files for remaining KB pages.

---

## Changed

- **`scripts/kb_push_to_notion.py`** – Added `SKIP_PATHS` for completed migrations; new `--emit-mcp-args` mode.
- **`docs/knowledge/kb-migration-log.md`** – Updated Tools section with MCP args script usage.

---

## References

- **Task:** `docs/project-management/kanban/epics/Epic-5/Story-008-knowledge-base/T02-notion-hub-and-kb-index.md`
- **Story:** `docs/project-management/kanban/epics/Epic-5/Story-008-knowledge-base.md`
- **Migration log:** `docs/knowledge/kb-migration-log.md`
