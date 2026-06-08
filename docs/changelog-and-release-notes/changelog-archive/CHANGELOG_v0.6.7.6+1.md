# Changelog v0.6.7.6+1

**Release Date:** 2026-06-08 18:00:20 UTC  
**Epic:** 6 | **Story:** 7 | **Task:** 6  
**SemVer:** v0.4.12+1

---

## Summary

Follow-on release (`--art`) for **Ultimate Canonical Kanban Structure v3.2.0** — epic catalog ratification, naming conventions, and cross-repo analysis corpus (package rewrite still gated).

---

## Change implemented

### Kanban v3.2 epic catalog (analysis phase)

- **E01** renamed to **Repository Infrastructure & Maintenance** (clarity for non-technical adopters)
- **E05** inserted: **Project Architecture** (ADRs, system design); downstream epics renumbered E06–E20
- **E10** **Code Quality** (S01 Review & upkeep · S02 Refactors); v1 E08/E21 split across E05 + E10
- FR/BR/UXR remain **E04 stories**; **E20** reserved; **E24+** delivery
- **Naming conventions:** `&` for epic & story titles; tasks may use `&` or `and`

### Deliverables (git analysis corpus)

- `docs/knowledge/analysis/kanban-v2/` — spec, executive summary, migration blueprint, validation reports, corpus fingerprints
- `packages/frameworks/kanban/scripts/analysis/kanban_corpus_extractor.py` — cross-repo inventory tool
- Git stub + Notion Ultimate Canonical page synced to v3.2.0

### Maintainer / tooling

- `rw-config.yaml` — Notion hub URL update
- Task doc **E06:S07:T06** — added canonical `**Task ID:**` header for RW validator discovery

---

## Not in scope (gated)

Package template rewrite (`COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`, epic folders) — Phase 5 sign-off required per migration blueprint waves 1–4.
