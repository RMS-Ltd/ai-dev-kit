# Changelog v0.5.9.13+3

**Release Date:** 2026-06-05 03:15:00 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 13  
**SemVer:** v0.4.909+3  
**Summary:** BR-090 Wave 2 CI parity — track maintenance evidence log excluded by `logs/` gitignore

---

## Summary

Actions run **26992646234** failed because `docs/maintenance/logs/uxr-005-spacing-20260601.md` was linked from the publish corpus but ignored by root `logs/` rule. Local builds passed only when the untracked file existed on disk.

---

## Attempted Fixes

- `.gitignore`: negate `docs/maintenance/logs/**` from global `logs/` ignore
- Add `docs/maintenance/logs/uxr-005-spacing-20260601.md` to version control
- Remove incidental `build-errors.txt` and `.rw-step7-snapshot/` from tree

---

## Verification

- `cd portal && npm run build` — exit 0 (clean build, no `.docusaurus` cache)
- Post-push: re-run **Docusaurus site build** on `dev` / PR #26
