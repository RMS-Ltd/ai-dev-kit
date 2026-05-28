# Detailed Changelog — v0.6.9.3+2

**Release Date:** 2026-05-28 17:25:00 UTC
**Internal Version:** v0.6.9.3+2
**SemVer:** v0.4.813+2
**Epic / Story / Task:** E6 / S09 / T03

## Overview

**FR-082** — Canonical public repository **`RMS-Ltd/ai-dev-kit`**: bootstrap (orphan genesis + cherry-pick replay from `f21bac102`), rewire adopter-facing URLs and install defaults, smoke verification on public `main`.

## Change implemented

- Bootstrapped empty public [`RMS-Ltd/ai-dev-kit`](https://github.com/RMS-Ltd/ai-dev-kit) via `scripts/fr099_bootstrap_public_ai_dev_kit.sh` (default `PUBLIC_ORG=RMS-Ltd`).
- Updated `rw-config.yaml` canonical public repo/Pages URLs; README, INSTALL, CONTRIBUTING, Docusaurus, issue templates, install script defaults.
- ADR-006 canonical table and FR-099 Phase 3 runbook aligned to **RMS-Ltd** (interim `earlution/ai-dev-kit` noted as superseded).
- `fr099_install_smoke_test.sh` PASS on public clone (no book-proj, no Epic-24).

## Verification

- `validate_branch_context.py --strict`
- `validate_rw_task_complete.py` / `validate_rw_task_intent.py --requested E6:S09:T03 --confirmed-override`
- `./scripts/fr099_install_smoke_test.sh` (public `RMS-Ltd/ai-dev-kit`)
