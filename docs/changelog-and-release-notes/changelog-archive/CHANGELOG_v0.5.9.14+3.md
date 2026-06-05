# Changelog v0.5.9.14+3 — E05:S09:T14 BR-093 Wave 2 + BUILD collision remediation

**Release Date:** 2026-06-05 20:30:00 UTC  
**Internal Version:** v0.5.9.14+3  
**SemVer:** v0.4.906+3  
**Epic:** 5 | **Story:** 9 | **Task:** 14

---

## Summary

Corrective release for **E05:S09:T14** Wave 2 FBU closure and **BUILD collision remediation**. Wave 2 content ships at **+3** (not reused **+2**). Restores Wave 1 archive changelog semantics for **+2** (`0ebf2cf`). Adds validator guard blocking `--doc-policy-zero` / same-BUILD reuse when a release tag already exists.

---

## Forensic remediation

| Issue | Resolution |
|-------|------------|
| Two commits claimed `v0.5.9.14+2` (`0ebf2cf` Wave 1, `a3ee689` Wave 2) | Wave 2 re-released at **+3**; **+2** archive restored to Wave 1 functional content |
| `CHANGELOG_v0.5.9.14+2.md` overwritten by Wave 2 | Restored from `0ebf2cf`; Wave 2 moved to `CHANGELOG_v0.5.9.14+3.md` |
| Tag `v0.5.9.14+2` force-moved to `a3ee689` | **+3** receives new tags; **+2** tag remains at `a3ee689` (historical); Wave 1 commit `0ebf2cf` documented in archive |

---

## Changed

### Verification / Kanban (Wave 2)

- IPP §8 Wave 2 ledger; evidence pack [`docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md`](../../maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md)
- **BR-093** → **FIXED**; acceptance criteria checked
- `kboard.md` V-band prune **E05:S09:T14**; `intake-completed.md` ledger entry

### Validator hardening (root fix)

- **`validate_version_bump.py`** — `validate_tagged_build_collision()` blocks `--doc-policy-zero` and same-BUILD reuse when git tag `vRC.E.S.T+B` already exists (BR-067 follow-on; precedent `CHANGELOG_v0.2.16.3+3`)
- **`test_validate_version_bump.py`** — regression tests for tagged-BUILD collision
- **BR-067** policy table — clarify `--doc-policy-zero` invalid when tag exists
- **IPP §8.5** — Wave 2 RW uses normal `RW --art` (BUILD +1), not `--doc-policy-zero` after ship

---

## Verification

| Check | Result |
|-------|--------|
| pytest BR-093 / FR-069 / FR-070 | 20 passed |
| Actions run `26989204716` | `deploy` skipped when `build` fails |
| `validate_version_bump --doc-policy-zero` at BUILD +2 with tag | **FAIL** (guard active) |
