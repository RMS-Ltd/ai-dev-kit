---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Docusaurus corpus triage (FR-067 / E5:S09:T03)

**FR:** [FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)  
**Task:** [E5:S09:T03](../project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T03-docusaurus-build-triage-fr-067.md)

## Summary

Triage to achieve **`npm run build` exit 0** for the FR-066 publish scope (`portal/` → `../docs/` with changelog-archive excludes).

## Failure classes addressed

| Class | Approach |
|-------|-----------|
| MDX JSX / expressions | Escaped or rephrased `<N`, `<=`, `{placeholder}` patterns; PIR templates use HTML entities; automated `scripts/escape_mdx_placeholders.py` for common tokens outside fenced code |
| MDX in templates / docs | Curly-brace placeholders (`\{epic\}`, `\{PROJECT_NAME\}`, `{Name}`, etc.) escaped or rewritten so MDX does not treat them as expressions |
| Assets / embeds | [building-persistent-knowledge.md](../knowledge/guides/building-persistent-knowledge.md): YouTube iframe → markdown link; missing PNGs → prose figure notes |
| Broken markdown links | **Policy (post–T08):** `onBrokenLinks: 'throw'`, `onBrokenMarkdownLinks: 'throw'` — corpus link repairs with **E5:S09:T08**; regressions fail `npm run build` |
| Relative links **outside** `docs/` plugin root (`../../../INSTALL_*`, traversals into `packages/`) | **Policy (Wave 1 — BR-068 / [E5:S09:T11](../project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md)):** use **canonical GitHub `blob` URLs** or optional in-`docs/` stubs — see [portal README — BR-068 monorepo links](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11); **[IPW-E5S9T11](../implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md)** — **Wave 2** corpus edits shipped **`v0.5.9.11+3`** (strict **`npm run build`** green). |
| Broken anchors (`#fragment`) | **Policy (post–T10):** `onBrokenAnchors: 'throw'` — corpus anchor/heading alignment with **E5:S09:T10** (**FR-067 FU-3** done at **`v0.5.9.10+2`**) |
| Out-of-plugin relative links (Wave 2 — **BR-090** / **E5:S09:T13**) | **2026-06-05 triage:** After Wave 1 faster dep fix, failures were MDX `onBrokenMarkdownLinks` + `onBrokenAnchors` — targets included `../../.claude/commands/*`, `../../.cursorrules`, `../../.cursor/skills/`, `../../packages/frameworks/*`, `../../scripts/*`, `../../src/*`, `../../tests/*`, repo-root configs, deleted `book-proj/` / `epic-24/` stubs, and stale task anchors. **Repair:** BR-068 Strategy A (`github.com/RMS-Ltd/ai-dev-kit/blob/main/…`); in-corpus path depth fixes; anchor hash removal where Docusaurus slug mismatch; heading slug alignment for workflow-flaws WF-* IDs. **Primary offenders:** [workflow-initiation-cheatsheet.md](../guides/workflow-initiation-cheatsheet.md), [project-agent-index.md](../project-agent-index.md), [ide-whitelist-guide.md](../developer-tools/ide-whitelist-guide.md), kanban task/FR docs, IPP publish scope. Target release: **`v0.5.9.13+2`**. |
| Out-of-plugin relative links (Wave 5 — **BR-068** / **E5:S09:T11**) | **2026-06-05:** Canonical [IPP-E05S09T11](../implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md) + **`tests/test_portal_br068_monorepo_links.py`** — resolves each `[text](relative)` under FR-066 publish scope and fails when the target leaves `docs/`. **Stragglers repaired:** [ultimate-canonical-workflow-structure.md](../architecture/standards-and-adrs/ultimate-canonical-workflow-structure.md) (`workflow-registry.yaml`), [migration-plan-embedded-to-discrete-tasks.md](../project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md) (kanban scripts table), [IPP-E02S13T10](../implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md). Target release: **`v0.5.9.11+6`**. |

## Excludes (unchanged vs FR-066)

- `changelog-and-release-notes/changelog-archive/**`
- `knowledge/changelog-and-release-notes/changelog-archive/**`

Listed in [portal/README.md (repository root)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md) under **Excluded**.

## Scale / stats (approximate)

- **Files touched:** wide sweep across `docs/**/*.md` (MDX-safe placeholders, story-011 `<sup>` fix, ICW numerics, runbook tags, RW-AGENT placeholders, task-template-generator wording, etc.)
- **Automation:** `scripts/escape_mdx_placeholders.py` (re-runnable for new docs; skips `changelog-archive` tree)
- **Config:** `portal/docusaurus.config.js` — link + anchor check mode **`throw`**; see portal README

## Deferred outcomes (explicit owners)

Do **not** rely on conversation memory. Later work is on **FR / task**:

| Item | Owner |
|------|--------|
| ~~Switch link check from **`warn` → `throw`** after corpus link repair~~ | **Done — E5:S09:T08** at **`v0.5.9.8+2`**. Ongoing hygiene: **[FR-058](../project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md)**. **FU-1** closed on **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)**. |
| Populate **GitHub Releases** for SemVer tags | **[E2:S16:T03](../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)** (RW Step 12.5); **[FR-041](../project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md)**; **FU-2** on **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)** |
| ~~**Strict broken anchors** (`onBrokenAnchors` → **`throw`**)~~ | **Done — E5:S09:T10** at **`v0.5.9.10+2`**. **FR-067 FU-3** closed on **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)**. |

## Verification

- `cd portal && npm run build` — **0** (Node 20+; CI representative)
- Optional: `PORTAL_BUILD_STRICT=1 pytest -m portal_build` for gate

### Wave 3 spot-check evidence (BR-068 / **E5:S09:T11** — TD2–TD3)

Recorded **2026-04-19** with **`v0.5.9.11+4`** (**RW** **`--art`**):

- **TD2 (failure-class smoke):** **`INSTALL`** / repo-root — sample **`docs/documentation/user-docs/install-receipt-reference.md`** (GitHub **`blob`** INSTALL); **`packages/frameworks/**`** — sample **`docs/implementation-cycles/IPW-E6S7T103-release-workflow-maintenance-perpetual.md`** (validator scripts + **`.cursorrules`** as **`blob`**); **`ADR-003`** sample cross-links into **`project-management`** / **`INSTALL`** per Strategy A.
- **TD3 (internal regression):** No **`warn`** downgrade of FR-067 strict hooks; fixes were corpus targets + MDX-safe prose only.
