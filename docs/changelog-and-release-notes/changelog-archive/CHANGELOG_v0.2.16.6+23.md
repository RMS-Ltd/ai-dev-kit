# Changelog v0.2.16.6+23

**Release Date:** 2026-07-01 13:05:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**SemVer:** v0.4.1240

---

## Summary

E02:S16:T06 Wave 15 — Final **2** `py/unreachable-statement` residuals in `validate_version_bump.py` (dead BR-110 branch in `elif doc_policy_zero` when `VERSION_BUILD >= 1`).

---

## Change implemented

### Wave 15 — 2 finding remediation

| Rule | Count | Fix |
| ---- | ----- | --- |
| `py/unreachable-statement` | 2 | Remove unreachable `art_cross_task and current_build == 0` branch; `--doc-policy-zero` with `BUILD >= 1` always errors (BR-097); BR-110 cross-task doc-init remains in `current_build == 0` path |

### Verification (local)

| Check | Result |
| ----- | ------ |
| `test_validate_version_bump.py` | **23 passed** |
| `sync_greenfield_install.py` | **2014** files in sync |
| Operator dashboard (TC41) | **pending** post-merge (expect **0** open) |

---

## References

- [Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- [FR-112](../../../kanban/fbu/FR-112-perpetual-github-ci-and-security-health-lanes.md)
