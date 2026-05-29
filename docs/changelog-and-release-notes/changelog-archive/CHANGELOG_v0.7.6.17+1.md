# Changelog v0.7.6.17+1

**Release Date:** 2026-03-20 16:30:40 UTC  
**Epic:** 7 — Codebase Maintenance and Review  
**Story:** 6 — Post-Windsurf Project Review  
**Task:** E7:S06:T17 — Retrospective BR-057 / fr-br-intake workflow YAML  

---

## Summary

Fix invalid GitHub Actions YAML in `fr-br-intake.yml` (dedented lines inside `script: |`), add retrospective **BR-057** and task documentation, restore `ukw_syntax_parser` `normalize_task_id` definition, and add `validate_rw_task_intent.py` on the epic/7 line for RW Step 1b.

---

## Changes

### Workflow

- **fr-br-intake.yml:** Re-indent multiline `github-script` `body` template continuation so the literal block scalar parses; resolves GitHub “Invalid workflow file” (~line 131).

### Kanban / traceability

- **BR-057** — Retrospective bug report for the YAML block-scalar root cause and resolution.
- **E7:S06:T17** — Task doc `T17-BR057-fr-br-intake-yaml-retrospective.md`; Story-006 and Epic-7 checklists updated.

### Framework scripts

- **ukw_syntax_parser.py:** Remove erroneous duplicate empty `normalize_task_id` stub (IndentationError).
- **validate_rw_task_intent.py:** Present under `scripts/validation/` (RW task-intent guard; BR-056).

---

## References

- `.github/workflows/fr-br-intake.yml`
- `docs/project-management/kanban/fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation.md`
