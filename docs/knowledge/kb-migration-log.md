# KB to Notion Migration Log

**Generated:** 2026-02-20  
**Target:** Engineering KB 3.1 AI Dev Kit  
**Source:** docs/ (excluding changelog-archive)

## Migration Summary

| Phase | Section | Target | Files | Status |
|-------|---------|--------|-------|--------|
| 0 | Changelog archive summary | 3.1.4 | 1 page | ✅ |
| 1a | maintenance/, changelog (non-archive) | 3.1.4 | 7 | ✅ |
| 1b | analysis/ | 3.1.5 | 9 | ✅ |
| 1c | documentation/, guides/, root | 3.1.1 | 31 | ✅ |
| 2a | architecture/ | 3.1.2 | 84 | ✅ |
| 2b | knowledge/ (excl. changelog-archive) | 3.1.3 | 60 | ✅ |
| 3 | project-management/ | 3.1.7 | 273 | ✅ |
| 4 | Path→URL map, navigation | - | - | ✅ |

**Total pages under 3.1.x:** ~484

## Full-Content Migration (In Progress)

Full content is being pushed to Notion pages via Notion MCP (`replace_content`). Repo markdown is used as source.

### Updated with full content

- analysis/package-management-investigation-report.md (~38KB)
- analysis/package-management-prioritization-review.md (~37KB)
- documentation/user-docs/framework-dependency-installation-guide.md (~28KB)
- maintenance/README.md, BUILD_AND_UPLOAD.md, BUILD_PACKAGES.md, BUILD_PACKAGES_COMMANDS.md, UPLOAD_PACKAGES.md
- changelog-and-release-notes/README.md, semver-tag-v0.5.39+2-correction.md
- guides/README.md, getting-started/README.md, framework-consumption/README.md
- documentation/ai-dev-kit-vision-and-purpose.md
- documentation/engineering-and-platform/open-kb-starter-map.md, knowledge-service-vision.md, versioning-task-ordering-anti-pattern.md
- analysis/cmw-ordering-flaw-analysis.md, ukw-versioning-reasoning-analysis.md, repository-story-abstract-space-contradiction-analysis.md, task-template-system-analysis.md

### Stub pages — full content migration 2026-02-20

All stub pages below were pushed with **full content** via `call_mcp_tool` (notion-update-page):

**Pushed this session:**
- Epic 5 Story 000 FR Repo, Epic 5 Story 001 FR Repo
- Epic 6 Story 000 BR Repo, Epic 6 Story 001 BR Repo
- Epic 7 Story 000 UXR Repo
- Epic 24 Story 001 Book Content Development
- Epic 1 Story 002 Package and Repo Architecture
- Reopening BR and Tasks Guide
- FR-031 Multi-Agent Coordination (2 calls; fix truncated push)
- Epic 6 T35 RW Housekeeping Step (2 calls; fix truncated push)

**Pushed 2026-02-20 (full content via call_mcp_tool):**
- analysis/package-management-implementation-plan.md
- documentation/templates/epic-pir-template.md
- _push_ architecture/legacy-repo-analysis (re-push FULL if truncated)

**Pushed 2026-02-20 (session 2 - full content via call_mcp_tool):**
- analysis/package-management-implementation-plan
- analysis/package-management-investigation-report
- analysis/package-management-prioritization-review
- documentation/user-docs/framework-dependency-faq
- documentation/user-docs/framework-dependency-integration-guide
- documentation/user-docs/framework-dependency-post-template-setup-guide
- documentation/user-docs/framework-dependency-troubleshooting-guide
- documentation/user-docs/framework-dependency-update-guide
- documentation/user-docs/framework-dependency-usage-guide
- documentation/user-docs/framework-dependency-use-cases
- vibe-coding-for-dummies-outline-and-sample

**To push (full content - use JSON from kb-migration-mcp-args/):**
- documentation/user-docs/framework-dependency-installation-guide (~28K)

**Note:** Some pages may have been pushed with condensed content due to MCP payload limits. For full content, re-run with JSON args from `kb-migration-mcp-args/` and `call_mcp_tool(plugin-notion-workspace-notion, notion-update-page, arguments)`.

### Stub sweep automation

**Script:** `scripts/kb_stub_sweep.py`

**Workflow:**
1. Agent runs Notion search: `notion-search` query "See repo for full content"
2. Save results to `stubs.json`: `[{"id": "...", "title": "..."}, ...]`
3. Run: `python scripts/kb_stub_sweep.py stubs.json`
4. Script maps titles to repo paths, writes MCP args to `docs/knowledge/kb-migration-mcp-args/sweep_*.json`
5. Agent loads each `sweep_*.json` and calls `call_mcp_tool(server, toolName, arguments)`
6. Repeat 1–5 until search returns 0 stubs

### Migration status 2026-02-20 (full sweep)

**kb-migration-map (47 entries):** All 26 remaining pushed via MCP args. Some large files may have condensed content; re-push from payload if needed.

**Stub sweeps:** 50+ stub pages pushed (FR/BR docs, Epic/Story/Task docs, architecture docs). Use `kb_stub_sweep.py` to continue until no stubs remain.

### Chunked large pages (2026-02-20)

Large pages (~33–36KB) were chunked via `scripts/push_notion_large_pages.py` and pushed with `insert_content_after` / `replace_content`:

| Page | Parts | Status |
|------|-------|--------|
| Confidentia ADK Analysis | 3 | ✅ Complete |
| Fynd Deals ADK Analysis | 4 | ✅ Complete |
| Starborn Legacy ADK Analysis | 4 | ✅ Complete (part 3 fixed with `replace_content_range` using Notion HTML table format) |
| Epic 3 Story 002 Versioning Cookbook | 2 | ✅ Complete (2026-02-22) |
| Epic 5 Story 002 Documentation Maintenance | 2 | ✅ Complete (2026-02-20) |
| Epic 5 Story 006 Legacy Repository | 4 | ⚠️ Part2 failed (selection not found) – parts 0,1,3 pushed |

**Note:** Starborn part 3 initially failed because `insert_content_after` selection used markdown table syntax; Notion stores tables as HTML. Fix used `replace_content_range` with `<td>Document Lifecycle</td>...` HTML snippet.

### Stub sweep 2026-02-20 (post-RW v0.5.8.2+4)

Pushed 8 small stubs and Epic 5 Story 002 (2 chunks) via `call_mcp_tool(notion-update-page)`:

- UKW Changes Summary
- BR-003 RW Branch Validation
- Epic 2 T005 Create PDCA Templates
- UXR-004 Kanban Package Installation UAT
- Epic 5 T36 RW Update Kanban Board
- Epic 5 Story 004 Documentation Automation
- Epic 5 Story 001 T31 Multi-Agent
- Epic 6 Story 002 Framework Version Mgmt
- Epic 5 Story 002 Documentation Maintenance (part0 replace_content, part1 insert_content_after)

**Not mapped:** Rituals README — no match in `find_repo_path()`; add mapping in `kb_stub_sweep.py` if needed.

### Stub sweep 2026-02-22

**Search:** 10 stubs found ("See repo for full content"). 8 mapped, 2 skipped (Rituals README, UXR-003).

**Pushed (9 pages):**
- Kanban Board Guide ✅
- Epic 4 T002 Root Cause Analysis ✅
- Epic 4 T002 Decision Flow Design ✅
- Code Review Kanban Integration ✅
- BR-002 Changelog Validator Ordering ✅
- Epic 4 T04 Assess System Impacts ✅
- Epic 5 T34 UKW Granular Control ✅
- Epic 5 Story 006 Legacy Repository ✅ (part0, part1, part3; **part2 failed** – selection string not found)

**Epic 5 Story 006 part2:** `insert_content_after` failed (selection_with_ellipsis not found – Notion formatting differs). Re-push part2 with corrected selection or fetch current page and adjust.

**Not mapped:** Rituals README, UXR-003 Intelligent Epic Matching UAT.

### Stub sweep 2026-02-22 (session 2)

**Search:** 10 stubs. 9 mapped, 1 skipped (Policy README – mapping added for next run).

**Pushed (9 pages):**
- Rituals README ✅
- Epic 4 T04 Review Integrations ✅
- FR-024 IDE Linter Check ✅
- Epic 2 T004 Enhance Do Phase + T004 Consumption Patterns ✅ (both pages)
- Epic 2 T01 Workflow Taxonomy ✅
- Epic 7 Story 002 Migration Guides ✅
- Epic 24 Story 003 Book Publishing ✅
- Epic 2 Story 004 RW Installer ✅

**kb_stub_sweep.py:** Added mappings for Rituals README, Policy README, UXR-003.

### Stub sweep 2026-02-22 (session 3)

**Search:** 10 stubs. All 10 mapped and pushed.

**Pushed:**
- Epic 4 T04 Verify Post Install ✅
- FR-026 Canonical CMW Perpetual ✅
- Kanban Governance Policy ✅ (19KB)
- Epic 5 ✅
- Epic 6 Story 005 Bug Reports ✅
- FR-035 Task Template Cross Wiring ✅
- UXR-003 Intelligent Epic Matching UAT ✅
- FR-021 FR BR UXR Repository Stories ✅
- Epic 6 T06 Cross Project Meta Analysis ✅
- Epic 2 Story 001 RW Agent Execution ✅ (22KB)

### Pending / optional re-push

- Large files (~25KB+): installation-guide, troubleshooting-guide, prioritization-review — re-push full if condensed
- Remaining stubs: search Notion for "See repo for full content", map to repo path, push

### Blocker (resolved)

The 5 previously archived pages (Build and Upload, Build Packages, Build Packages Commands, Upload Packages, SemVer Tag Correction) were restored and pushed with full content.

### Tools

- **Manifest script:** `scripts/kb_migrate_full_content.py` – produces JSON manifest of path, page_id, content_length
- **Payload script:** `scripts/kb_push_to_notion.py --emit-payloads` – writes `docs/knowledge/kb-migration-payloads/*.json` (path, page_id, full content)
- **MCP args script:** `scripts/kb_push_to_notion.py --emit-mcp-args` – writes `docs/knowledge/kb-migration-mcp-args/*.json` (MCP-ready `{server, toolName, arguments}`). Load each and pass `arguments` to `call_mcp_tool` or inspect manually.
- **Mapping:** `docs/knowledge/kb-migration-map.json` (47 Phase 1–2 entries with explicit path→URL)

### Path → URL Map

- **Explicit mappings:** `kb-migration-map.json` (Phase 1–2: maintenance, changelog, analysis, documentation, guides, root)
- **Architecture (3.1.2):** 84 pages – flat under 3.1.2 (no path→URL in map yet)
- **Knowledge (3.1.3):** 60 pages – flat under 3.1.3  
- **Project Management (3.1.7):** 273 pages – flat under 3.1.7

## Link Rewrites

Use `kb-migration-map.json` for path→URL lookups when rewriting internal markdown links in Notion pages.

## Engineering KB Sync-source

3.1 AI Dev Kit section is populated. Update Engineering KB Sync-source if needed for 3.1 visibility.
