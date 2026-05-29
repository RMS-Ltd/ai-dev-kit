---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T15:58:39Z
expires_at: null
housekeeping_policy: keep
---

# Changelog: v0.4.6.1+1

**Version:** v0.4.6.1+1  
**Release Date:** 2026-05-29 15:58:39 UTC  
**Epic:** 4 | **Story:** 6 | **Task:** 1  
**SemVer:** v0.4.817+1

---

## Summary

FR-005 closure and hygiene: forensic audit of Story-006 template corpus (T00–T10), kanban/FR reconciliation, discrete host task doc, IPP wiring. **FR-005-R5** (systematic canonical addition process) explicitly deferred.

---

## Change implemented

### FR-005 closure audit (IPP §7)

- **PASS:** Epic/story/task template corpus (21 epics; 378/378 task templates via `generate_task_templates.py --validate`)
- **PASS:** Contextualization guide + tiny/small/ambitious examples
- **PASS:** `CANONICAL_EPICS.md` integration; installer uses `templates/epics/` (BR-004)
- **DEFER:** FR-005-R5 / Criterion 6 — standalone `CANONICAL_ADDITION_PROCESS.md` (partial guidance in `CANONICAL_EPICS.md` § addition pattern)

### Kanban reconciliation

- Removed **E4:S06:T01** from `kboard.md` Could
- Removed **FR-005** from `fbuboard.md` active; added to `fbu-completed.md`
- Corrected `kanban-completed.md` forensic line for T01
- **FR-005** status → **IMPLEMENTED**

### Documentation

- Discrete task: `T01-canonical-est-template-closure-fr005.md`
- IPP: `IPP-E4S06T01-canonical-est-template-closure-fr005.md`

---

## References

- [IPP-E4S06T01](../../implementation-cycles/IPP-E4S06T01-canonical-est-template-closure-fr005.md)
- [FR-005](../../project-management/kanban/fr-br/FR-005-systematic-canonical-epics-stories-tasks-templates.md)
- [Story-006](../../project-management/kanban/epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md)
