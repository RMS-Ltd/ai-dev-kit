# Changelog — v0.2.16.3+8

**Release Date:** 2026-06-10 14:03:14 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 3  
**SemVer:** v0.4.1124+8

## Summary

E02:S16:T03 — **Change implemented:** MWF (FR-124) documentation alignment across packaged workflow-mgt, command guides, AGENTS.md, and root README (workflow count 11→13; IDW/MWF cross-references). SemVer **v0.4.1124+8**.

## Changes

### Updated

- `packages/frameworks/workflow-mgt/README.md` — 13 registry workflows; IDW + MWF sections, tables, quick selection
- `KB/.../implementation-planning-workflow-agent-execution.md` — MWF integration (no `IPW --rw`)
- `KB/.../implementation-delivery-workflow-agent-execution.md` — MWF vs `IDW --rw`; references
- `KB/.../implementation-cycle-sop.md` — Step 2.8 (MWF) + Integration links
- `workflows/implementation-delivery-workflow/README.md` — `MWF E:S:T delivery` sequence
- `workflows/implementation-cycle-workflow/README.md` — delivery chain + Integration
- `workflows/meta-workflow/README.md` — expanded triggers, recipe, registry metadata
- `.claude/commands/ipw.md` — handoff table; MWF for full pipeline
- `.claude/commands/idw.md` — full pipeline (MWF) section
- `AGENTS.md` — MWF in implementation gate summary
- `README.md` — 13 workflows; MWF trigger row; IDW/MWF registry rows; agent guide links
- `greenfield-install/packages/frameworks/` — mirror via `sync_greenfield_install.py`
