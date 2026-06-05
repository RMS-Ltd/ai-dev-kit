---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T15 — GitHub Actions CI Health (Perpetual)

**Task ID:** E08:S03:T15  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Small (ongoing)  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (RW E08:S03:T15+2 — CI triage pass; pending Actions verify)  
**Version Anchor:** v0.8.3.15+2  
**Code:** E08S03T15  
**Task Type:** Perpetual Maintenance

**Perpetual Override Rationale:** Automation/CI domain perpetual lane under Epic 8 Story 3 per FR-112; Story 016 (E02:S16) scope excludes non-workflow security/CI ownership.

**Upstream:** [FR-112 — Perpetual GitHub CI and security health lanes](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)

Publication Status: NOT_APPLICABLE

---

## Scope

Standing perpetual lane for **GitHub Actions workflow health** on [RMS-Ltd/ai-dev-kit/actions](https://github.com/RMS-Ltd/ai-dev-kit/actions).

**Owns (representative, not exhaustive):**

- Red-build triage on `main` / `dev` (Tests, Docusaurus site build, Greenfield install, Workflow scripts pytest, framework/greenfield release packages, CodeQL workflow runs triggered by push)
- Workflow YAML fixes (permissions, triggers, matrix, caching, timeouts)
- CI-only dependency gaps (e.g. missing `requirements-dev` entries)
- Pytest / build failures surfaced only in Actions (coordinate with local repro)
- Flake investigation and stabilization when reproducible

**Source of truth:** [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) — filter failing workflows on default branches before each hygiene pass.

---

## What this task does NOT own

- [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) alerts → **E08:S03:T16**
- [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) dashboard burn-down → **E08:S03:T16** (and active backlog **T12–T14** until COMPLETE)
- Dependabot configuration and dependency PR policy → **E08:S03:T06** (FR-105)
- Large feature delivery requiring dedicated E:S:T + IPP
- Kanban/docs/workflow perpetual lanes → **E02:S16**

---

## Handoff from discrete CI work

| Prior work | Status | Notes |
| ---------- | ------ | ----- |
| **E08:S03:T04** (BR-058) | COMPLETE | Tests workflow + pytest remediation |
| **E08:S03:T07** (BR-092) | COMPLETE | `requests` in CI deps |
| Future one-off BRs | As filed | Use dedicated task when scope is a single novel failure; otherwise attribute routine fixes here |

---

## RW attribution

Use **`RW E08:S03:T15`** for recurring CI hygiene passes (BUILD increments on perpetual task). One concern per RW when practical.

---

## Acceptance criteria

- [x] **AC1:** Task doc exists with `Task Type: Perpetual Maintenance` and Actions URL as SoT.
- [x] **AC2:** Scope boundary with **E08:S03:T16** documented and unambiguous.
- [x] **AC3:** FR-112 bidirectional link; Story 003 checklist and `kboard.md` O-band wired.
- [x] **AC4:** First attributed RW records baseline green/red workflow snapshot on `main` (2026-06-05 16:39 UTC: Tests/Docusaurus/Greenfield **failure**; workflow-scripts-pytest/CodeQL **success**).

---

## Actions baseline (2026-06-05)

**Ref:** `main` @ 2026-06-05 16:39 UTC ([Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions))

| Workflow | Conclusion |
| -------- | ---------- |
| Tests | failure |
| Docusaurus site build | failure |
| Greenfield install | failure |
| Workflow scripts pytest | success |
| Code Quality: Push on main | success |
| Push on main (CodeQL) | success |

### Triage pass (v0.8.3.15+2)

| Workflow | Root cause (identified) | Fix in this release |
| -------- | ----------------------- | ------------------- |
| Tests | `test_install_error_docs_sync` — troubleshooting guide missing ADK `<!-- ADK-ERROR-CODES:* -->` markers / per-code anchors | Sync marked block from `generate_install_error_docs.py` |
| Docusaurus site build | Broken `#install-error-codes-adk` anchor on troubleshooting guide | H2 `{#install-error-codes-adk}` in generator + guide |
| Greenfield install | `sync_greenfield_install.py --check` drift (40 files under `greenfield-install/packages/frameworks`) | Full mirror sync |

**Post-merge verification:** Re-check [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) on `dev`/`main` after push.

---

## References

- [FR-112](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [E08:S03:T16 — GitHub Security & Code Quality health (Perpetual)](T16-github-security-code-quality-health-perpetual-fr112.md)
- [E08:S03:T04 — CI test workflow (BR-058)](T04-ci-test-workflow-pytest-remediation-br058.md)
- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)
