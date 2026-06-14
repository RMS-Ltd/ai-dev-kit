---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T05 — GitHub Actions CI Health (Perpetual)

**Task ID:** E02:S16:T05
**Historical Anchor:** E08:S03:T15  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Small (ongoing)  
**Created:** 2026-06-05  
**Last updated:** 2026-06-14 (Wave 5 — v4 fresh-install stdout parity; Tests CI red on dev)  
**Version Anchor:** v0.2.16.5+7  
**Code:** E02S16T05  
**Task Type:** Perpetual Maintenance


**Upstream:** [FR-112 — Perpetual GitHub CI and security health lanes](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)

**Input:** [IPP-E02S16T05 — GitHub Actions CI health (Perpetual)](../../../../implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md) · [BR-104](../../../fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md)

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

- [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) alerts → **E02:S16:T06**
- [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) dashboard burn-down → **E02:S16:T06** (finite **E08:S03:T12–T14** backlogs **COMPLETE** @ v0.8.3.12+13 / +4 / +5)
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

Use **`RW E02:S16:T05`** for recurring CI hygiene passes (BUILD increments on perpetual task). One concern per RW when practical.

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
| Docusaurus site build | MDX rejects HTML `<!-- ADK-ERROR-CODES:* -->` and legacy `{#anchor}` heading ids | **Fixed v0.8.3.15+3:** JSX comment markers + `{/* #anchor */}` syntax + ADK-I06.E02 backticks |
| Greenfield install | `sync_greenfield_install.py --check` drift (40 files under `greenfield-install/packages/frameworks`) | Full mirror sync |

**Post-merge verification:** Re-check [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) on `dev`/`main` after push (**v0.8.3.15+3** — local `npm run build` exit 0).

### Wave 2 (v0.8.3.15+3)

| Workflow | Local verify | Fix |
| -------- | ------------ | --- |
| Docusaurus site build | `npm run build` exit 0 | MDX-safe markers + heading-id comments + registry backtick |
| Tests | `test_install_error_docs_sync` pass | JSX markers + generator sync |
| Greenfield install | `sync_greenfield_install.py --check` pass | Mirror sync |

### Wave 3 (v0.8.3.15+4)

| Workflow | Root cause | Fix |
| -------- | ---------- | --- |
| Tests | `test_active_index_files_have_no_docs_changelog_paths` — UXR-018 archive narrative contained forbidden `docs/changelog/` substring | Reword `CHANGELOG_ARCHIVE.md` line |
| Greenfield install | Untracked greenfield CQG cron scripts + stale release-metadata mirror | `sync_greenfield_install.py` + git-track copies |
| Greenfield release packages | Same drift check on tag push | Same mirror sync |

**Post-push verification:** Re-check [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) on `dev`/`main`.

---

## Operator requirements (OR-T15)

| ID | Requirement |
| -- | ----------- |
| OR-T15-1 | Record [Performance metrics](https://github.com/RMS-Ltd/ai-dev-kit/actions/metrics/performance) failed-job minutes each hygiene pass |
| OR-T15-2 | **No red ship:** do not push/merge to `dev`/`main` while required workflows fail on GitHub |
| OR-T15-3 | **CQG ≠ CI:** local CodeQL (IDW Phase 6b) and GitHub CodeQL workflows do not replace Tests/Docusaurus/Greenfield |
| OR-T15-4 | Post-push verification mandatory after each wave |
| OR-T15-6 | Default RW local-complete; batch push only after Step 9.7 `--strict --all` |
| OR-T15-7 | Step 9.7 blocking before commit; `validate_github_actions_remote.py --strict` before push |

---

## Wave 4 — CQG/CodeQL vs Actions CI ship gap (2026-06-10)

**Incident:** `main` @ `1bce576` — CodeQL + Code Quality **success**, **Tests failure** ([run 27290068587](https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/27290068587)).

| Component | Fix |
| --------- | --- |
| `migrate_to_v2` race | `BEGIN IMMEDIATE` + duplicate-column guard ([BR-104](../../../fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md)) |
| Step 9.7 | `--strict` fails when zero checks match; `--allow-path-skip` for `RW -d` only |
| Pre-push | `validate_github_actions_remote.py --strict` |
| CQG banner | `validate_code_quality_gate.py` emits CQG ≠ CI ship gate note |

**Post-RW verification:** Re-check [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) — Tests green on `dev`/`main`.

---

## Wave 5 — v4 fresh-install stdout parity (2026-06-14)

**Incident:** `dev` @ `90bbdf78` — **Tests failure** ([run 27506627320](https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/27506627320)); Greenfield install **success**.

| Workflow | Root cause | Fix |
| -------- | ---------- | --- |
| Tests | FR-132 v4 default catalog — `install_v4_catalog.py` silent install; pytest expects v3.5 stdout tokens | Epic install/dry-run logging parity in `install_v4_catalog.py` |

**Failing tests (4):** `test_install_epic_22_23_templates.py` (×2), `test_migrate_structure_log_epic_padding.py` (×2).

**Post-RW verification:** Re-check [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) — Tests green on `dev`/`main`.

---

## References

- [IPP-E02S16T05 — GitHub Actions CI health (Perpetual)](../../../../implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md)
- [IPP-E08S03T15 (historical)](../../../../implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md)
- [BR-104 — CodeQL/CQG green ≠ Actions CI green](../../../fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md)
- [FR-112](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [E02:S16:T06 — GitHub Security & Code Quality health (Perpetual)](T06-github-security-code-quality-health-perpetual.md)
- [E08:S03:T04 — CI test workflow (BR-058)](T04-ci-test-workflow-pytest-remediation-br058.md)
- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)
