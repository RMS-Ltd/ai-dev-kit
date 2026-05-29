---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Docusaurus corpus triage (FR-067 / E5:S09:T03)

**FR:** [FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)  
**Task:** [E5:S09:T03](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T03-docusaurus-build-triage-fr-067.md)

## Summary

Triage to achieve **`npm run build` exit 0** for the FR-066 publish scope (`portal/` → `../docs/` with changelog-archive excludes).

## Failure classes addressed

| Class | Approach |
|-------|-----------|
| MDX JSX / expressions | Escaped or rephrased `<N`, `<=`, `{placeholder}` patterns; PIR templates use HTML entities; automated `scripts/escape_mdx_placeholders.py` for common tokens outside fenced code |
| MDX in templates / docs | Curly-brace placeholders (`{epic}`, `{PROJECT_NAME}`, `{Name}`, etc.) escaped or rewritten so MDX does not treat them as expressions |
| Assets / embeds | [building-persistent-knowledge.md](../knowledge/guides/building-persistent-knowledge.md): YouTube iframe → markdown link; missing PNGs → prose figure notes |
| Broken markdown links | **Policy (post–T08):** `onBrokenLinks: 'throw'`, `onBrokenMarkdownLinks: 'throw'` — corpus link repairs with **E5:S09:T08**; regressions fail `npm run build` |
| Relative links **outside** `docs/` plugin root (`../../../INSTALL_*`, traversals into `packages/`) | **Policy (Wave 1 — BR-068 / [E5:S09:T11](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md)):** use **canonical GitHub `blob` URLs** or optional in-`docs/` stubs — see [portal README — BR-068 monorepo links](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11); **[IPW-E5S09T11](../implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md)** — **Wave 2** corpus edits shipped **`v0.5.9.11+3`** (strict **`npm run build`** green). |
| Broken anchors (`#fragment`) | **Policy (post–T10):** `onBrokenAnchors: 'throw'` — corpus anchor/heading alignment with **E5:S09:T10** (**FR-067 FU-3** done at **`v0.5.9.10+2`**) |

## Excludes (unchanged vs FR-066)

- `changelog-and-release-notes/changelog-archive/**`
- `knowledge/changelog-and-release-notes/changelog-archive/**`

Listed in [portal/README.md (repository root)](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) under **Excluded**.

## Scale / stats (approximate)

- **Files touched:** wide sweep across `docs/**/*.md` (MDX-safe placeholders, Story-011 `<sup>` fix, ICW numerics, runbook tags, RW-AGENT placeholders, task-template-generator wording, etc.)
- **Automation:** `scripts/escape_mdx_placeholders.py` (re-runnable for new docs; skips `changelog-archive` tree)
- **Config:** `portal/docusaurus.config.js` — link + anchor check mode **`throw`**; see portal README

## Deferred outcomes (explicit owners)

Do **not** rely on conversation memory. Later work is on **FR / task**:

| Item | Owner |
|------|--------|
| ~~Switch link check from **`warn` → `throw`** after corpus link repair~~ | **Done — E5:S09:T08** at **`v0.5.9.8+2`**. Ongoing hygiene: **[FR-058](../project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md)**. **FU-1** closed on **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)**. |
| Populate **GitHub Releases** for SemVer tags | **[E2:S16:T03](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)** (RW Step 12.5); **[FR-041](../project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md)**; **FU-2** on **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)** |
| ~~**Strict broken anchors** (`onBrokenAnchors` → **`throw`**)~~ | **Done — E5:S09:T10** at **`v0.5.9.10+2`**. **FR-067 FU-3** closed on **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)**. |

## Verification

- `cd portal && npm run build` — **0** (Node 20+; CI representative)
- Optional: `PORTAL_BUILD_STRICT=1 pytest -m portal_build` for gate

### Wave 3 spot-check evidence (BR-068 / **E5:S09:T11** — TD2–TD3)

Recorded **2026-04-19** with **`v0.5.9.11+4`** (**RW** **`--art`**):

- **TD2 (failure-class smoke):** **`INSTALL`** / repo-root — sample **`docs/documentation/user-docs/install-receipt-reference.md`** (GitHub **`blob`** INSTALL); **`packages/frameworks/**`** — sample **`docs/implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual.md`** (validator scripts + **`.cursorrules`** as **`blob`**); **`ADR-003`** sample cross-links into **`project-management`** / **`INSTALL`** per Strategy A.
- **TD3 (internal regression):** No **`warn`** downgrade of FR-067 strict hooks; fixes were corpus targets + MDX-safe prose only.
