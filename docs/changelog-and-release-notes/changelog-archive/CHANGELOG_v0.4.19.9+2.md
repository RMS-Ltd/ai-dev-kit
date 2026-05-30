# Detailed Changelog — v0.4.19.9+2

**Release Date:** 2026-05-30 09:24:33 UTC  
**Internal Version:** v0.4.19.9+2  
**SemVer:** v0.4.827+2  
**Epic:** 4 | **Story:** 19 | **Task:** 9

---

## Summary

**E04:S19:T09** (UXR-014): Two-digit zero-padded `E{NN}:S{NN}:T{NN}` write-default across policy, agents, formatters, and full kanban corpus normalization; read-tolerance preserved for legacy unpadded forms.

---

## Change implemented

- **`est_format.py`:** `format_est_reference`, `format_est_compact`, `normalize_est_inline_in_text`, `find_unpadded_est_violations`; IPP/IPW filename protection.
- **`normalize_kanban_est_corpus.py`:** Full corpus sweep under `docs/project-management/kanban/` and `packages/frameworks/kanban/templates/`.
- **Policy/guides:** kanban-governance-policy, kanban-board-guide (write-default vs read-tolerance), task-naming-migration-guide.
- **Agent guidance:** `.cursorrules`, intake-process skill; `update_kanban_docs.py` wired to padded emit.
- **`validate_est_inline_format.py`:** Optional non-blocking lint for unpadded inline tokens.
- **UXR-014:** ACCEPTED; **E04:S19:T09** COMPLETE; story checklist + board rows reconciled.

---

## Verification

- `test_est_format.py` — 10 tests PASS  
- `validate_est_inline_format.py` — kboard/fbuboard clean  
- RW gates (branch, task complete, intent `--art`) PASS
