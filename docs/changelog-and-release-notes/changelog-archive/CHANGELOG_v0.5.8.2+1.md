# Changelog: v0.5.8.2+1

**Release Date:** 2026-02-20 13:23:43 UTC  
**Epic:** 5 (Documentation Management)  
**Story:** 8 (Knowledge Base)  
**Task:** 2 (Notion hub, Knowledge Base container, and KB index)  
**Internal Version:** 0.5.8.2+1  
**Attribution:** E5:S08:T02

---

## Summary

Notion project hub and Knowledge Base container (RMS Teamspace), repo wired via `notion_hub_url`, and full project KB index for optimization and migration. E5:S08 story renamed to "Knowledge Base".

---

## Added

- **Notion – AI Dev Kit hub page** (RMS Teamspace): purpose (single entry point for project context), repo and docs links, Knowledge Base section, quick links placeholder.
- **Notion – Knowledge Base container page** (child of hub): purpose (decisions, patterns, reference, how-tos), area placeholders; linked from hub.
- **`rw-config.yaml`** – `notion_hub_url` (Notion project hub URL).
- **`.cursorrules`** – File Paths: Notion project hub reference via `notion_hub_url`.
- **`scripts/kb_index.py`** – KB index generator: walks `docs/`, collects path/size/word count/frontmatter, emits Markdown and optional JSON; changelog archive summarized by default.
- **`docs/knowledge/KB-INDEX.md`** – Human-readable KB index (section summary, optimization signals, full inventory).
- **`docs/knowledge/KB-INDEX.json`** – Machine-readable KB index for migration tooling.
- **E5:S08:T02** – Task doc: Notion hub, KB container, KB index; Story 008 task checklist and Epic-5 Story 8 section updated.

---

## Changed

- **E5:S08** – Story renamed from "Persistent Knowledge Base Investigation" to "Knowledge Base"; story file `Story-008-knowledge-base.md`; Epic-5 checklist and Story 8 section updated.

---

## References

- **Task:** `docs/project-management/kanban/epics/Epic-5/Story-008-knowledge-base/T02-notion-hub-and-kb-index.md`
- **Story:** `docs/project-management/kanban/epics/Epic-5/Story-008-knowledge-base.md`
