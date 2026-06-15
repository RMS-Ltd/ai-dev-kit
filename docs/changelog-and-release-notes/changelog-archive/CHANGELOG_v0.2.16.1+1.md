# Changelog v0.2.16.1+1

**Release Date:** 2026-06-15 22:43:57 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 1  
**SemVer:** v0.4.1181+1

---

## Summary

E02:S16:T01 — portal dependency hygiene: pin transitive `js-yaml` to **4.2.0** via npm override (Docusaurus dependency tree).

---

## Change implemented

### Portal / npm

- Added `"js-yaml": "4.2.0"` under `overrides` in [`portal/package.json`](../../../portal/package.json).
- Nested override `"gray-matter": { "js-yaml": "3.14.2" }` — `gray-matter@4.0.3` still calls `yaml.safeLoad` (removed in js-yaml 4); keeps Docusaurus front-matter parsing working.
- Refreshed [`portal/package-lock.json`](../../../portal/package-lock.json); Docusaurus tree on `js-yaml@4.2.0`, `gray-matter` retains isolated `3.14.2`.

---

## Related

- [E02:S16:T01 — Workflow maintenance (Perpetual)](../../../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-workflow-maintenance-perpetual.md)
- [FR-088 — Dedicated story for perpetual ongoing tasks](../../../kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)
