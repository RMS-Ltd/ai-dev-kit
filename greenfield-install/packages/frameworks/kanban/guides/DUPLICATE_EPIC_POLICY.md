---
lifecycle: evergreen
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: keep
---

# Duplicate epic policy (Kanban v4)

**Fixes:** [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) AC2 — mutual exclusivity across Core / Ancillary / Domain.

## Rule

Each **concern** has exactly **one home epic**. Do not create a second epic when Core already covers repo/engineering scaffolds.

## Decision matrix

| Legacy / adopter concern | v4 home |
|--------------------------|---------|
| Repo machine hygiene, UKW/CMW | **E01** or **E01:S01** |
| Workflow tooling development | **E02:S01** |
| Greenfield bootstrap gate | **E02:S02** |
| FR / BR / UXR intake | **E03:S02–S04** (stories, not epics) |
| ADR / system design | **E04** |
| Docs scaffold, maintainer KB | **E05** |
| Repo CI pipeline | **E06** |
| Security baseline (repo) | **E07 SEC** |
| Code quality, Black/Ruff/pytest | **E08 CODEQ** · **E01:S03** · **E06** |
| Product data / DB | **E11 DATA** |
| API / backend | **E12 API** |
| Web / SPA UI | **E13 UI** |
| Product auth / RBAC | **E14 AUTH** |
| GDPR / DPIA / product compliance | **E15 COMPLY** |
| Performance / product analytics | **E16 PERFAN** |
| Stripe, SaaS, webhooks | **E17 VENDOR** |
| Prod deploy, SRE, on-call | **E18 PRODOPS** |
| i18n | **E19 I18N** (opt-in) |
| Native mobile / stores | **E20 MOBILE** (opt-in) |
| Vertical product (scrapers, game features) | **E24+ DOMAIN** |
| Perpetual doc/CI hygiene epic | **E01:S01** (merge, do not duplicate) |

## KMA gate

**Step 2 (Propose)** must emit this matrix mapping **before** epic map writes. Flag any legacy epic that maps to two v4 homes.

## Tags

Resolve homes via `short_tag` in `kanban_v4_catalog.py` (e.g. `SEC` → E07, `VENDOR` → E17).
