# Changelog v0.8.3.16+9

**Release Date:** 2026-06-08 13:55:00 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 16 | **Build:** 9  
**SemVer:** v0.4.11+9  
**Summary:** T16 Wave 3e — autofix PR pytest triage (#43/#44)

---

## Release scope

E08:S03:T16 — **Attempted fix:** Wave 3e — triage GitHub Code Quality autofix PRs [#43](https://github.com/RMS-Ltd/ai-dev-kit/pull/43) and [#44](https://github.com/RMS-Ltd/ai-dev-kit/pull/44); restore pytest green on `main`. SemVer **v0.4.11+9**.

---

## Changes

- **PR #43:** Reverted Copilot `VERSION_STRING` change (`-task.` suffix broke semver resolution); finding dismissed per versioning policy / BR-101.
- **PR #44:** Fixed `test_RW_V03_changelog_exceeds_threshold` — use `check_changelog_size.py --config` with `size_threshold_lines` instead of read-only `PosixPath` monkeypatch; kept IPW-P03 unicode arrow normalization.

---

## Verification

- PR #43 / #44 pytest CI — **green** before merge to `main`.
- `pytest tests/rw_scenarios/test_wave4_baseline.py` — RW-V03 parametrized cases pass locally.
- Operator: dismiss PR #43 AI finding in Security UI (pending).
