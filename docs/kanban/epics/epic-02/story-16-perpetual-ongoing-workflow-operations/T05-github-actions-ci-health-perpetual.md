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
**Last updated:** 2026-06-17 (v0.2.16.5+13 — Wave 11 install error docs sync)  
**Version Anchor:** v0.2.16.5+13  
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

## Wave 6 — Docusaurus production build (2026-06-15)

**Incident:** `dev` — **Docusaurus site build failure** ([run 27550217005](https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/27550217005)); Tests / Greenfield install **success**.

| Workflow | Root cause | Fix |
| -------- | ---------- | --- |
| Docusaurus site build | `docs/adk-feedback/attempt-09/README.md` relative link to excluded `kanban/fr-br/FR-079-…` | GitHub blob URLs (BR-068) |
| Docusaurus site build | MDX parses `<path>` as JSX in troubleshooting guide line 1228 | Inline code backticks |

**Post-RW verification:** Re-check [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) — Docusaurus build green on `dev`/`main`.

---

## Wave 7 — Tests + Docusaurus unified pin (2026-06-15)

**Incident:** Split pin — `+8` Docusaurus green / Tests red (`test_install_error_docs_sync`); `7978c29` Tests green / Docusaurus red.

| Fix | Detail |
| --- | ------ |
| Registry | `ADK-I01.S03` remediation backticks in `install-error-codes.yaml` |
| Guide | Regenerated `{/* ADK-ERROR-CODES:* */}` block (not hand-edited) |
| Mirror | `sync_greenfield_install.py` |

**Post-RW verification:** Re-check [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) — Tests + Docusaurus green on `dev`/`main`.

---

## Wave 8 — SAA migration concurrency (2026-06-15)

**Incident:** Local Step 9.7 / full pytest suite — `test_parallel_open_db_migrations_no_duplicate_column` failed with `sqlite3.OperationalError: database is locked` (Wave 4 duplicate-column guard alone insufficient).

| Component | Fix |
| --------- | --- |
| `open_db()` | Per-DB-path `threading.Lock` around `init_schema` + `run_migrations` |
| `run_migrations()` | Re-check `schema_version` inside `BEGIN IMMEDIATE` before `migrate_to_v2` |
| Greenfield | `sync_greenfield_install.py` mirror |

**Verification:** `validate_actions_ci_parity.py --strict --all` — 921 tests passed. BR-104 TC1 closed locally @ **v0.2.16.5+10**.

**Post-RW verification:** Re-check [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) — Tests green on `dev`/`main`.

---

## Wave 9 — BR-104 closure (2026-06-15)

**Scope:** Documentation-only RW — reconcile BR-104 acceptance criteria and operator verification; **BR-104 → FIXED**.

| Item | Detail |
| ---- | ------ |
| TC2–TC4 | Checked @ **v0.2.16.5+7** (Wave 4 parity hardening) |
| TC6 | Checked @ **v0.2.16.5+7** (`validate_github_actions_remote.py`) |
| TC7 | Checked @ **v0.2.16.5+11** — [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) green on `dev`/`main` for Tests / Greenfield / workflow-scripts on recent HEADs |
| BR-104 | **FIXED** @ **v0.2.16.5+11** |

**Note:** E02:S16:T05 remains **IN PROGRESS** (perpetual lane); BR closure does not retire the task.

---

## Wave 10 — adk-feedback mirror links + MDX placeholder (2026-06-17)

**Incident:** Post-push `validate_actions_ci_parity --strict --all` — **Docusaurus site build** failed on `docs/adk-feedback/attempt-{09,10,11}/README.md` (links to excluded `knowledge/**` and repo-root `adk-install-into-sbl/**`) and `framework-dependency-troubleshooting-guide.md` ADK-I01.S06 (`<path>` JSX).

| Fix | Detail |
| --- | ------ |
| attempt 09–11 README | GitHub blob/tree URLs per BR-068 Strategy A |
| ADK-I01.S06 remediation | `{path}` placeholder + backticks on filename |

**Verification:** `pytest tests/workflow_mgt/test_install_error_docs_sync.py` 2/2; `portal/npm run build` SUCCESS @ **v0.2.16.5+13**.

---

## Wave 11 — Install error docs sync (2026-06-17)

**Incident:** `validate_actions_ci_parity --all` — **Tests** failed `test_troubleshooting_adk_section_matches_generator` after Wave 10 manual `{path}` edit drifted from generator output.

| Fix | Detail |
| --- | ------ |
| `install-error-codes.yaml` ADK-I01.S06 | Inline backticks around CLI (`<path>` inside code span — MDX-safe) |
| Troubleshooting guide | Regenerated `{/* ADK-ERROR-CODES:* */}` block from `generate_install_error_docs.py` |
| Greenfield | `sync_greenfield_install.py` mirror |

---

## References

- [IPP-E02S16T05 — GitHub Actions CI health (Perpetual)](../../../../implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md)
- [IPP-E08S03T15 (historical)](../../../../implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md)
- [BR-104 — CodeQL/CQG green ≠ Actions CI green](../../../fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md)
- [FR-112](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [E02:S16:T06 — GitHub Security & Code Quality health (Perpetual)](T06-github-security-code-quality-health-perpetual.md)
- [E08:S03:T04 — CI test workflow (BR-058)](T04-ci-test-workflow-pytest-remediation-br058.md)
- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)
