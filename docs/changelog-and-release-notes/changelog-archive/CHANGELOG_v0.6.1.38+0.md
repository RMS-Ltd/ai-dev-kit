# Changelog: v0.6.1.38+0

**Release:** v0.6.1.38+0  
**Date:** 2026-05-12  
**Task Anchor:** E6:S01:T38  
**Release Mode:** RW -k (kanban-init)  
**Branch:** dev

---

## Summary

Intake of BR-072: UKW completed tasks not removed from kboard. This release files the bug report and associated investigation task, wires all bidirectional traceability, and establishes the known test fixtures (E2:S16:T01, E2:S15:T07) as reproducible artefacts for the fix.

---

## Changes

### Bug Reports
- **BR-072 filed** — UKW not removing completed tasks from kboard MoSCOW sections; secondary symptom of task duplication across sections also documented.

### Kanban
- **E6:S01:T38 created** — investigation and fix task for BR-072; housed in BR Repo (E6:S01) per traceability pattern.
- **Story-001-br-repo.md** — T38 added to task checklist.
- **kboard.md** — E6:S01:T38 added to Should Have section.
- **fbuboard.md** — BR-072 added to Should Have section.

### Workflow Agent Definitions
- **agents/ukw/AGENTS.md** — new focused UKW-only agent definition created as part of the workflow agent PoC (E2:S16 context); referenced in BR-072 AC6 as a target for definition updates when the fix is applied.
- **agents/rw/, cmw/, ipw/, pir/, intake/, migration/, refactor/, testing/, pkg-version/, fhm/** — full suite of 11 single-purpose workflow agent definitions created.

---

## Traceability

- BR-072 → E6:S01:T38 → v0.6.1.38+0
- E6:S01:T38 → BR-072
- v0.6.1.38+0 → E6:S01:T38 → BR-072
