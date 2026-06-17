# Changelog — v0.3.2.15+1

**Release Date:** 2026-06-17 16:07:13 UTC  
**Epic:** 3 | **Story:** 2 | **Task:** 15  
**SemVer:** v0.4.1198+1  
**Task:** E03:S02:T15 — SemVer external `+BUILD` redundancy policy (UXR-031)

---

## Summary

**Change implemented:** Outward SemVer display policy for `task_touch` mode — **Option B** (keep `+BUILD` visible; ordering/precedence = SemVer core only). Policy memo, ADR-031, versioning policy §2.1.1, README ordering callout, and RW agent guide alignment.

---

## Added

- `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/semver-external-display-policy-decision.md` — Option B decision memo
- `docs/architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md` — canonical display policy
- `docs/implementation-cycles/IPP-E03S02T15-semver-external-build-metadata-redundancy.md` — IPW implementation plan

## Changed

- `docs/governance/standards/dev-kit-versioning-policy.md` — external SemVer ordering semantics (`+BUILD` trace-only)
- `README.md` — SemVer ordering callout with ADR-031 link
- `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` — ADR-031 alignment
- `docs/kanban/fr-br/UXR-031-semver-plusbuild-redundancy-in-task-touch.md` — policy closure wiring
- `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T15-semver-external-build-metadata-redundancy-uxr031.md` — COMPLETE + version anchor

## Related

- [UXR-031](docs/kanban/fr-br/UXR-031-semver-plusbuild-redundancy-in-task-touch.md) · [ADR-031](docs/architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md) · [IPP-E03S02T15](docs/implementation-cycles/IPP-E03S02T15-semver-external-build-metadata-redundancy.md)
