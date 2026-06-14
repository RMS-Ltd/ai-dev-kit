---
lifecycle: evergreen
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: keep
---

# Kanban v4 placeholder registry

**SoT for `{TOKEN}` substitution** in packaged epic/story templates. Prefer tokens **inside narrative prose** (Overview, Purpose, Goals).

| Token | Use in | Example |
|-------|--------|---------|
| `{PROJECT_NAME}` | All Core + Ancillary E/S | For **{PROJECT_NAME}**, establish repo security baseline… |
| `{REPO_ROOT}` | E01–E02, E05–E06 | Under `{REPO_ROOT}`, wire CI entrypoints… |
| `{KANBAN_ROOT}` | E03 | Board files live under `{KANBAN_ROOT}` per rw-config. |
| `{DOMAIN_NAME}` | E24+ | **{DOMAIN_NAME}** delivery tranche — first product increment. |
| `{domain-slug}` | E24 paths | `epic-24-{domain-slug}-delivery` |
| `{PRIMARY_LOCALE}` | E19 i18n | Ship **{PRIMARY_LOCALE}** first. |
| `{HOSTING_PLATFORM}` | E18 PRODOPS | Deploy to **{HOSTING_PLATFORM}** staging. |
| `{REGULATORY_REGIME}` | E15 COMPLY | Attestation for **{REGULATORY_REGIME}** (e.g. UK GDPR). |
| `[YYYY-MM-DD]` | Status headers | Filled by RW/UKW — not installer substitution. |

Unknown `{TOKENS}` fail `validate_v4_template_completeness.py`.
