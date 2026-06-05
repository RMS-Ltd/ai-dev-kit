# Changelog v0.8.3.15+3

**Release Date:** 2026-06-05 17:33:11 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 15 | **Build:** 3  
**SemVer:** v0.4.995+3  
**Summary:** T15 Wave 2 — MDX-safe ADK appendix markers + Docusaurus build restore

---

## Release scope

E08:S03:T15 — **Change implemented:** Perpetual Actions CI Wave 2 — migrate ADK error-code appendix boundary markers to MDX-safe JSX comments, use Docusaurus v3 heading-id comment syntax, fix registry remediation MDX parse, add IPP + regression test. SemVer **v0.4.995+3**.

---

## Changes

### CI / Docusaurus (attempted — pending Actions verification on merge)

- **Docusaurus site build** — Replace HTML `<!-- ADK-ERROR-CODES:* -->` markers with `{/* ADK-ERROR-CODES:* */}` (MDX-safe).
- **Heading anchors** — Generator emits `{/* #anchor */}` syntax instead of legacy `{#anchor}` for ADK appendix headings.
- **Registry** — ADK-I06.E02 remediation wraps CLI example in backticks to avoid `<framework>` MDX tag parse error.
- **Tests** — `test_adk_markers_are_mdx_safe` guards against HTML comment marker regression.
- **IPP** — [IPP-E08S03T15](../../implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md) filed and wired.

### Greenfield mirror

- `sync_greenfield_install.py` — generator, registry YAML, troubleshooting appendix drift cleared.

---

## Notes

- **`--art` adoption:** Release anchor `E08:S03:T15` BUILD+3 (`art_tagged_follow_on`).
- **Verification:** Operator should confirm [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) green for **Docusaurus site build** on `dev`/`main` after push.

---

## References

- [E08:S03:T15](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md)
- [IPP-E08S03T15](../../implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md)
- [FR-112](../../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
