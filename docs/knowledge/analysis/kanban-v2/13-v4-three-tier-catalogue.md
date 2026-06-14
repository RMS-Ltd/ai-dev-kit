---
lifecycle: evergreen
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: keep
notion_sot: false
---

# Ultimate Canonical Kanban Structure v4.0.0

**Status:** Ratified (implementation package)  
**SoT code:** `packages/frameworks/kanban/scripts/kanban_v4_catalog.py`  
**Related:** [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) · [FR-132](../../kanban/fr-br/FR-132-kanban-v4-three-tier-catalogue.md) · [12-v35-catalog-delta-bootstrap-stories.md](12-v35-catalog-delta-bootstrap-stories.md)

## Summary

Kanban **v4** defines three tiers:

| Tier | Band | Purpose |
|------|------|---------|
| **Core** | E01–E10 | Repo machine + framework + engineering scaffolds |
| **Ancillary** | E11–E23 | Optional product capabilities |
| **Domain** | E24+ | Adopter/KMA delivery (placeholder in package) |

**Install tiers:** Tiny E01–E03 · Small E01–E08 · Ambitious E11–E18 · Domain E24+.

## Design principles

1. **No duplicate concerns** across tiers — see [DUPLICATE_EPIC_POLICY.md](../../../packages/frameworks/kanban/guides/DUPLICATE_EPIC_POLICY.md).
2. **E01 = run; E02 = develop** — perpetual on E01:S01; workflow dev on E02:S01.
3. **Intake is stories** — FR/BR/UXR under E03:S02–S04 only.
4. **Unified epic metadata** — display title, `catalog_slug`, `short_tag`, `concerns`, `excludes` on every epic.
5. **Fully populated E/S templates** — [TEMPLATE_CONTENT_CONTRACT.md](../../../packages/frameworks/kanban/guides/TEMPLATE_CONTENT_CONTRACT.md).

## Core catalogue (E01–E08)

| # | Title | Tag | Stories |
|---|-------|-----|---------|
| E01 | Repository Infrastructure & Maintenance | REPO | S01 Perpetual · S02 Versioning · S03 Test harness |
| E02 | Workflow Management | WORKFLOW | S01 Workflow defs · S02 Bootstrap (7 tasks) |
| E03 | Kanban Framework | KANBAN | S01 Board · S02–S04 FR/BR/UXR |
| E04 | Project Architecture | ARCH | S01 ADR scaffold |
| E05 | Documentation | DOCS | S01 Doc scaffold · S02 Maintainer KB |
| E06 | Process Automation & CI/CD | CICD | S01 CI/CD scaffold |
| E07 | Security | SEC | S01 Security baseline |
| E08 | Code Quality | CODEQ | S01 Scaffold · S02 Review |

E09–E10: reserved core (`RSVD-C`).

## Ancillary catalogue (E11–E20)

| # | Title | Tag | Notes |
|---|-------|-----|-------|
| E11 | Data Management & Database | DATA | |
| E12 | API & Backend Services | API | |
| E13 | Frontend & User Interface | UI | Before Auth |
| E14 | User Management & Authentication | AUTH | S04 RBAC |
| E15 | Compliance & Privacy | COMPLY | Confidentia E15 lineage |
| E16 | Performance & Product Analytics | PERFAN | Merged epic |
| E17 | External Vendor Services | VENDOR | Not PyPI/npm |
| E18 | Production Operations | PRODOPS | Not repo CI |
| E19 | Internationalisation | I18N | Opt-in |
| E20 | Mobile Application | MOBILE | Opt-in |

E21–E23: reserved ancillary (`RSVD`).

## Domain

**E24** — `{DOMAIN_NAME} Delivery` placeholder; KMA/adopter creates concrete tasks.

## Disambiguation highlights

| Question | Answer |
|----------|--------|
| Repo security? | **E07 SEC** |
| Product GDPR? | **E15 COMPLY** |
| Black / pytest? | **E08 CODEQ** |
| Stripe / SaaS? | **E17 VENDOR** |
| Web UI? | **E13 UI** |
| Native app? | **E20 MOBILE** |

## Migration

See [LEGACY_KANBAN_MIGRATION.md](../../../packages/frameworks/kanban/guides/LEGACY_KANBAN_MIGRATION.md) and [V35_TO_V4_RENUMBER_MAP.md](../../../packages/frameworks/kanban/guides/V35_TO_V4_RENUMBER_MAP.md).

## Validation

```bash
python3 packages/frameworks/kanban/scripts/validate_v4_template_completeness.py --strict
python3 packages/frameworks/kanban/scripts/generate_v4_est_templates.py --overwrite
```
