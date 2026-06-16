---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-16T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-109: Greenfield dual-tree sync drift on CodeQL/Copilot autofix PRs — recurring `greenfield-install` CI failures

**Type:** Bug Report (BR)  
**Bug ID:** BR-109  
**Submitted:** 2026-06-16  
**Submitted By:** Agent — investigation of recurring autofix PR CI failures (#60, #61, #62, #68)  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** ACCEPTED  
**Version:** v0.8.3.23+1 (intake @ RW `-k`)

**Implementing Task:** [E08:S03:T23](../epics/epic-08/story-03-automation-scripts/T23-greenfield-sync-autofix-ci-hardening-br109.md)

**Related:** [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [E06:S09:T21](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T21-lean-adopter-distribution-footprint-fr110.md) · [E02:S16:T05](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) · [E02:S16:T06](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md) · [FR-112](FR-112-perpetual-github-ci-and-security-health-lanes.md) · [BR-103](BR-103-workflow-scripts-pytest-tuple-return-false-green.md)

---

## Summary

GitHub **Code Quality / Copilot autofix** pull requests repeatedly fail the **`greenfield-install`** CI job because they edit **only one** of the two committed framework trees (`packages/frameworks/` **or** `greenfield-install/packages/frameworks/`), violating the **FR-110** dual-tree contract enforced by `sync_greenfield_install.py --check`. Manual `sync_greenfield_install.py` on each PR fixes symptoms but does not stop recurrence.

---

## Problem Statement

ai-dev-kit maintains a **dual-tree** model per [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md):

| Tree | Role |
| ---- | ---- |
| `packages/frameworks/**` | Maintainer **source of truth** |
| `greenfield-install/packages/frameworks/**` | **Derived adopter bundle** (committed mirror, ~9 MiB lean install) |

**Binding rule (P-GREENFIELD-SYNC):** Edit source → run `python scripts/sync_greenfield_install.py` → commit mirror in the **same changeset**.

CI enforces parity via [`.github/workflows/greenfield-install.yml`](../../../.github/workflows/greenfield-install.yml) (`sync_greenfield_install.py --check`). Pre-commit hook `validate-greenfield-install-sync` exists but autofix bots do not run maintainer workflows.

### Observed failure modes

| Mode | What autofix edits | CI symptom | Example PRs |
| ---- | ------------------ | ---------- | ----------- |
| **A — mirror stale** | `packages/frameworks/**` only | Drift: mirror missing source changes | #60 (`ledger.py`), #61 (`LEGACY_KANBAN_MIGRATION.md`), #62 (`KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md`) |
| **B — source stale** | `greenfield-install/packages/frameworks/**` only | Drift: source missing mirror changes | #68 (`kma_ingest.py`) |

Typical CI error:

```
DRIFT: greenfield-install/packages/frameworks: N changed file(s)
Run: python scripts/sync_greenfield_install.py
```

### Impact

- **Operator toil:** Each autofix PR requires manual sync, push, and re-wait on CI.
- **False signal:** Security/autofix PRs appear broken when the underlying fix may be valid.
- **Wrong-tree fixes:** Mode B can leave maintainer SoT out of sync until a human reverses the edit direction.
- **Perpetual hygiene load:** Burden falls on [E02:S16:T05](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) / [T06](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md) perpetual CI/security lanes without a structural fix.

---

## Root Cause

Autofix tooling has **no awareness** of the FR-110 dual-tree contract:

1. CodeQL/Copilot selects files by alert location without preferring `packages/frameworks/` or running post-fix sync.
2. Autofix branches bypass pre-commit / maintainer `sync_greenfield_install.py` discipline.
3. CI correctly **blocks** drift but provides **no automated remediation** on autofix PRs.
4. No workflow policy distinguishes **hint PRs** (autofix) from **release-ready** changesets (source + sync on `dev`).

---

## Expected Behavior

1. Autofix or security-bot PRs that touch either tree either:
   - **(Preferred)** Auto-run `sync_greenfield_install.py` and commit mirror/source reconciliation on the PR branch, **or**
   - Fail with an **actionable** message naming both trees and the maintainer workflow, **or**
   - Scope autofix away from `greenfield-install/**` when the alert is satisfiable in `packages/frameworks/**` only.
2. Maintainer SoT (`packages/frameworks/**`) remains authoritative; mirror is never the sole edit target for framework logic.
3. Operators can treat autofix PRs as **hints** and land canonical fixes on `dev` with sync + RW without repeated manual rescue.

---

## Proposed Remediation (for implementing task)

**Minimum (structural):**

1. **Autofix PR workflow** — GitHub Action on `pull_request` (label or branch pattern `finding-autofix-*` / Copilot autofix) that:
   - Detects drift via `sync_greenfield_install.py --check`
   - Runs sync; if Mode B (mirror-only edits), copy reconciled paths back to source per manifest rules
   - Commits with bot identity when diff non-empty
2. **CI message hardening** — Extend `greenfield-install` job failure text with dual-tree policy link (FR-110, AGENTS.md P-GREENFIELD-SYNC).
3. **Maintainer docs** — Cheatsheet note: autofix PRs require sync; prefer merging fix via `dev` + RW.

**Optional (policy):**

4. CodeQL/autofix path filters deprioritizing `greenfield-install/packages/frameworks/**` when equivalent source paths exist.
5. `validate_actions_ci_parity` parity case for autofix workflow when added.

---

## Acceptance Criteria (BR closure)

- [ ] **AC1:** Documented dual-tree autofix anti-pattern in BR (this doc) and task with evidence links to #60–#62, #68.
- [ ] **AC2:** Automated remediation or guard on autofix PRs — no manual sync required for standard drift cases.
- [ ] **AC3:** `greenfield-install` CI failure message references maintainer sync workflow when auto-remediation not applied.
- [ ] **AC4:** At least one autofix-class PR (or dry-run workflow test) demonstrates drift detected and reconciled without human `sync_greenfield_install.py`.
- [ ] **AC5:** Operator verification — no recurrence over a 30-day window OR documented exception with rationale.

---

## Evidence

| PR | Failure | Manual fix |
| -- | ------- | ---------- |
| [#60](https://github.com/RMS-Ltd/ai-dev-kit/pull/60) | Mode A — `ledger.py` | Sync mirror after source edit |
| [#61](https://github.com/RMS-Ltd/ai-dev-kit/pull/61) | Mode A — migration doc | Sync mirror |
| [#62](https://github.com/RMS-Ltd/ai-dev-kit/pull/62) | Mode A — migration depth doc | Sync mirror |
| [#68](https://github.com/RMS-Ltd/ai-dev-kit/pull/68) | Mode B — `kma_ingest.py` | Re-apply fix to `packages/frameworks/kanban/scripts/kma_ingest.py`, then sync |

**Scripts / workflows:** `scripts/sync_greenfield_install.py`, `scripts/greenfield-install-manifest.yaml`, `.github/workflows/greenfield-install.yml`, `.pre-commit-config.yaml` (`validate-greenfield-install-sync`).

---

## References

- [FR-110 — Lean adopter distribution footprint](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [AGENTS.md — P-GREENFIELD-SYNC](../../../AGENTS.md)
- [greenfield-install workflow](../../../.github/workflows/greenfield-install.yml)
