# Changelog v0.2.1.24+1

**Release Date:** 2026-06-05 02:37:30 UTC  
**Epic:** E02 — Workflow Management Framework  
**Story:** S01 — RW Agent Execution & Docs  
**Task:** T24 — BR-097 BUILD increment enforcement and tag immutability  
**Internal Version:** 0.2.1.24+1  
**SemVer:** 0.4.908+1

---

## Summary

Attempted resolution for **BR-097**: prevent RW agents from reusing tagged BUILD numbers and force-moving release tags. Adds Step 2 `resolve_rw_build.py`, tag immutability validator, agent FORBIDDEN contracts, IPW template rules, ADR-019, and recovery/policy updates.

---

## Changes

### Added

- `packages/frameworks/workflow-mgt/scripts/version/resolve_rw_build.py` — deterministic BUILD resolution at RW Step 2
- `packages/frameworks/workflow-mgt/scripts/validation/validate_release_tag_immutability.py` — blocks journal-documented `git tag -f` / force-push recovery
- `docs/implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md`
- `docs/architecture/standards-and-adrs/ADR-019-rw-build-increment-and-tag-immutability.md`
- Regression tests: `test_resolve_rw_build.py`, `test_validate_release_tag_immutability.py`, BUILD≥1 `--doc-policy-zero` rejection

### Changed

- `.cursorrules`, `.claude/commands/rw.md`, `AGENTS.md` — BR-097 FORBIDDEN contract + Step 2 resolver
- `.claude/commands/ipw.md`, `PLAN_DOC_TEMPLATE.md` — verification/FBU waves: `RW E:S:T --art` only
- `validate_version_bump.py` — reject `--doc-policy-zero` when `VERSION_BUILD >= 1`
- `dev-kit-versioning-policy.md` — remove force-tag guidance; forward-only BUILD bump recovery
- `docs/journals/RECOVERY_PROCEDURE.md` §4.3 — tag collision recovery path
- `workflow-initiation-cheatsheet.md` — same-task BUILD+1 row
- Dual-source parity: `cursorrules-rw-trigger-section.md`, `rw-trigger-dual-source-parity.md`
- `release-workflow-agent-execution.md` — Step 2 resolver block

---

## Verification

- pytest: 10 BR-097-related tests green
- `resolve_rw_build.py --requested E02:S01:T24 --art` → `next_build: 1`
- BR-097 AC1–AC7 evidenced in task doc and BR closure

---

## Related

- [BR-097](../../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
- [IPP-E02S01T24](../../implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md)
