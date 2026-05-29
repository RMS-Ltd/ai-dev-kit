# Detailed Changelog — v0.2.1.22+1

**Release Date:** 2026-05-29 15:00:00 UTC
**Internal Version:** v0.2.1.22+1
**SemVer:** v0.4.805+1
**Epic / Story / Task:** E2 / S01 / T22

## Overview

**BR-075:** Perpetual-task RW now fails closed when `VERSION_BUILD` in `version_file` is not incremented for same-task perpetual releases.

## Changed

- `validate_version_bump.py` — `validate_perpetual_build_increment()` compares staged BUILD to `git show HEAD:version_file`.
- `.cursor/skills/version-bump/SKILL.md` — config-driven `version_file` path; Step 2-before-7 note for perpetual tasks.

## Verification

- `pytest packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py` — 15 passed.
