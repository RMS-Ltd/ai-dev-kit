# Changelog v0.1.4.6+2

**Release Date:** 2026-05-26 16:03:08 UTC  
**Epic | Story | Task:** E1:S04:T06 (`RW`, `--art`)  
**SemVer:** v0.4.812+2  

## Summary

**FR-099 Phase 3 — Public `ai-dev-kit` rebirth:** new public [`earlution/ai-dev-kit`](https://github.com/earlution/ai-dev-kit) bootstrapped from book-free genesis (`f21bac102`) via orphan root + cherry-pick replay; bootstrap script, runbook, and ADR-006 decision recorded.

## Changes

### Repository migration (FR-099-F5)

- **`scripts/fr099_bootstrap_public_ai_dev_kit.sh`:** Creates/verifies public repo (`private=false` guard), replays post-genesis history without pre-genesis book objects on public remote.
- **`docs/maintenance/fr099-phase3-public-repo-bootstrap.md`:** Bootstrap policy (`main` + `dev`), genesis SHA, dual-remote clone guidance, rename-redirect warning.

### Documentation & governance

- **ADR-006:** Phases 1–3 complete; orphan + replay bootstrap decision closed.
- **IPP-E1S04:** Phase 3 marked implemented; Phase 4 (T07) next.
- **FR-099 / Story 004 / T06:** COMPLETE; T06 archived from active `kboard`; **T07** remains Must Have.

### Public remote

- Public repo live at https://github.com/earlution/ai-dev-kit (framework-only tree; AC4 verified).
