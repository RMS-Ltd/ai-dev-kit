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
**Last updated:** 2026-06-08 (RW E08:S03:T15+4 — Step 9.7 CI parity gate shipped)  
**Version Anchor:** v0.8.3.15+4  
**Code:** E08S03T15  
**Task Type:** Perpetual Maintenance

**Perpetual Override Rationale:** Automation/CI domain perpetual lane under Epic 8 Story 3 per FR-112; Story 016 (E02:S16) scope excludes non-workflow security/CI ownership.

**Upstream:** [FR-112 — Perpetual GitHub CI and security health lanes](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)

**Input:** [IPP-E08S03T15 — GitHub Actions CI health (Perpetual)](../../../../../implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md)

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

**Performance metrics SoT:** [Actions → Metrics → Performance](https://github.com/RMS-Ltd/ai-dev-kit/actions/metrics/performance) — primary operator KPI is **Failed job usage** (wasted runner minutes), not monthly reset of the dashboard alone.

---

## Operator requirements (2026-06-08 — mandatory)

**Context:** [Performance metrics](https://github.com/RMS-Ltd/ai-dev-kit/actions/metrics/performance) show improving trend vs [previous month](https://github.com/RMS-Ltd/ai-dev-kit/actions/metrics/performance?dateRangeType=DATE_RANGE_TYPE_PREVIOUS_MONTH) (prior period ~100% job failure rate, ~87 min failed usage; current period job failure rate ~85% with **~501 min failed job usage**). Trend is positive; **waste level is not acceptable**.

| ID | Requirement | Owner |
| -- | ----------- | ----- |
| **OR-T15-1** | **Failed job usage** on default branches (`dev`, `main`) is the standing burn-down KPI. Each T15 hygiene pass records current-month failed minutes + job failure rate from Performance metrics alongside per-workflow conclusions. | T15 |
| **OR-T15-2** | **No red ship:** Do **not** merge or push to `dev` or `main` while any **required** workflow is failing on GitHub for that branch. Local green (`pytest`, `npm run build`, `sync_* --check`, CQG) is necessary but **insufficient** — post-push [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) verification is mandatory before claiming a wave complete. | All contributors; T15 enforces on hygiene RW |
| **OR-T15-3** | **CQG boundary:** [E08:S03:T17](T17-local-code-quality-gate-cqg-fr113.md) (local CodeQL gate) covers **Code Quality Standard findings** only. It does **not** gate **Tests**, **Docusaurus site build**, **Greenfield install**, or other Actions workflows — those remain T15 scope. | T15 + T16 coordination |
| **OR-T15-4** | **Pre-merge checklist** (minimum): reproduce failing workflow locally where possible; fix; RW with `RW E08:S03:T15 --art`; confirm required workflows **success** on GH for the target branch SHA before closing the wave. | T15 playbook |
| **OR-T15-5** | **Monthly metric reset is not success:** A new calendar month zeroing Failed job usage does not close this lane. Success = sustained green required workflows on `dev`/`main` and failed job usage held near zero operationally. | T15 perpetual |
| **OR-T15-6** | **RW never pushes by default (UXR-024):** Full `RW` completes locally (commit + tag). Remote publication is operator batch push or explicit `RW … --push` only. | RW agent / cheatsheet §2 |
| **OR-T15-7** | **RW Step 9.7 hard gate:** Before commit, `validate_actions_ci_parity.py --strict` (path-aware GH workflow mirror). Before push/batch push, `--strict --all`. Non-zero exit → **RW ABORTED**. Makes local releases **push-ready** without shipping red CI. | `rw-config.yaml` → `actions_ci_parity`; [UXR-024 R7](../../../fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md) |

**Escalation:** Repeated red ships to `dev`/`main` without T15-attributed fix → file BR with Actions run links + Performance metrics snapshot.

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
- [ ] **AC5 (operator — OR-T15-1/2/5):** Required workflows green on `dev` **and** `main`; current-month **Failed job usage** near zero; Performance metrics snapshot recorded in task doc each hygiene wave until sustained.
- [ ] **AC6 (operator — OR-T15-4):** Post-push Actions verification documented for every T15-attributed RW (SHA + per-workflow conclusion table); no wave closed on local-only green.

---

## Performance metrics baseline (2026-06-08)

**Ref:** [Actions → Metrics → Performance](https://github.com/RMS-Ltd/ai-dev-kit/actions/metrics/performance)

| Period | Job failure rate | Failed job usage | Operator note |
| ------ | ---------------- | ---------------- | ------------- |
| Previous month | ~100% | ~87 min | High failure rate; low absolute waste (fewer runs) |
| Current month (2026-06-08) | ~85% (improving) | **~501 min** | **Unacceptable** — primary burn-down target (OR-T15-1) |

**Directive:** Reduce failed job usage by stopping red ships (OR-T15-2), not by waiting for monthly metric rollover (OR-T15-5).

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

| Deliverable | Status |
| ----------- | ------ |
| `validate_actions_ci_parity.py` | Shipped — RW Step 9.7 blocking gate |
| Operator OR-T15-1…7 + UXR-024 R7 | Wired in agent SoT |
| `actions_ci_parity` in `rw-config.yaml` | Enabled |
| Post-push Actions verify (AC5/AC6) | **Open** — pending operator batch push + GH green |

---

## References

- [IPP-E08S03T15 — GitHub Actions CI health (Perpetual)](../../../../../implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md)
- [FR-112](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [E08:S03:T16 — GitHub Security & Code Quality health (Perpetual)](T16-github-security-code-quality-health-perpetual-fr112.md)
- [E08:S03:T17 — Local Code Quality Gate (CQG)](T17-local-code-quality-gate-cqg-fr113.md) — does not replace Actions verification (OR-T15-3)
- [Actions Performance metrics](https://github.com/RMS-Ltd/ai-dev-kit/actions/metrics/performance)
- [E08:S03:T04 — CI test workflow (BR-058)](T04-ci-test-workflow-pytest-remediation-br058.md)
- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)
