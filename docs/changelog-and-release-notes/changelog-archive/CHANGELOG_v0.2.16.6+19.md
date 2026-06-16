# Changelog v0.2.16.6+19

**Release Date:** 2026-06-16 15:38:12 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**SemVer:** v0.4.1193+19

---

## Summary

E02:S16:T06 Wave 11 — Standard Code Quality burn-down: **3** maintainability + **2** reliability open findings @ operator dashboard (reliability-first).

---

## Change implemented

### Maintainability (3)

| Rule | Fix | Files |
| ---- | --- | ----- |
| `py/cyclic-import` | Inline `validate_v4_templates` in `kanban_v4_catalog.py`; CLI wrapper only | `kanban_v4_catalog.py`, `validate_v4_template_completeness.py` |
| `py/unused-local-variable` | Remove dead `y` assignment | `kanban_completed/export_pdf.py` |
| `py/unused-import` | Drop unused `pytest` import | `tests/kanban/test_kanban_completed_ledger.py` |

### Reliability (2)

| Rule | Fix | Files |
| ---- | --- | ----- |
| `py/empty-except` | Explanatory comment on `OSError` pass | `kma_ingest.py` |
| `.git` stale remote ref hygiene | Prune `origin/ai-findings-autofix/tests-release_state-test_allocate.py` (local CQG false positives from deleted branch metadata) | operator `git remote prune` |

### Verification (local)

| Check | Result |
| ----- | ------ |
| `pytest tests/kanban/test_kanban_completed_ledger.py` | **3 passed** |
| `validate_v4_template_completeness.py` | **OK** |
| `sync_greenfield_install.py` | **1990** files in sync |
| Local CQG (post-fix) | **0** code-path M/R on target files; operator GH dashboard verify **pending** |

---

## References

- [Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- [FR-112](../../../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
