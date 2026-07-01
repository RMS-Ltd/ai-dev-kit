# Changelog v0.2.16.6+22

**Release Date:** 2026-07-01 14:30:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**SemVer:** v0.4.1239

---

## Summary

E02:S16:T06 Wave 14b — [Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) burn-down: **21** open Code Quality findings remediated (unused imports/globals/locals, regex caret, unreachable branch, assert side-effect). Uses `code-quality/findings` API (not security `code-scanning/alerts`).

---

## Change implemented

### Wave 14b — 21 finding remediation

| Rule family | Count | Representative fixes |
| ----------- | ----- | -------------------- |
| `py/unused-import` | 7 | Installer/test script import hygiene + greenfield mirror |
| `py/unused-global-variable` | 4 | `score_kma_structure`, `kanban_paths` dead aliases |
| `py/unused-local-variable` | 4 | `.t14-capture` matrix gens, `test_repository_ia_manifest` |
| `py/regex/unmatchable-caret` | 2 | `validate_fbu_directory.py` legacy link regex |
| `py/unreachable-statement` | 2 | `validate_version_bump.py` BR-110 `--doc-policy-zero` branch |
| `py/multiple-definition` | 1 | `_gen_sa3_matrix.py` duplicate `ch_count` |
| `py/side-effect-in-assert` | 1 | `test_wave4_hardening.py` git-subtree remove |

### Verification (local)

| Check | Result |
| ----- | ------ |
| Targeted pytest | **20 passed** |
| `sync_greenfield_install.py` | **2014** files in sync |
| Operator dashboard (TC41) | **pending** post-merge |

---

## References

- [Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- [Code Quality findings REST API](https://docs.github.com/en/rest/code-quality/code-quality)
- [FR-112](../../../kanban/fbu/FR-112-perpetual-github-ci-and-security-health-lanes.md)
