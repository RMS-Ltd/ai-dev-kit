---
lifecycle: evergreen
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: keep
---

# v3.5 → v4 renumber map

## Core (unchanged numbers)

| v3.5 | v4 | Notes |
|------|-----|-------|
| E01–E08 | E01–E08 | Same IDs; v4 metadata + E05:S02 Maintainer KB |
| — | E09–E10 | Reserved core buffer |

## Ancillary (v4 band E11–E23)

| Concern | v4 | Tag |
|---------|-----|-----|
| Data | E11 | DATA |
| API | E12 | API |
| Frontend (before Auth) | E13 | UI |
| Auth + RBAC S04 | E14 | AUTH |
| Compliance & Privacy | E15 | COMPLY |
| Performance + Analytics merge | E16 | PERFAN |
| External vendors | E17 | VENDOR |
| Production ops | E18 | PRODOPS |
| i18n (opt-in) | E19 | I18N |
| Mobile (opt-in) | E20 | MOBILE |
| Reserved | E21–E23 | RSVD |

## Retired duplicate ancillary → Core

| Old ancillary pattern | v4 Core home |
|-----------------------|--------------|
| Testing epic | E01:S03 |
| Security epic | E07 |
| CI/CD epic | E06 |
| Documentation epic | E05 |
| Architecture refactor epic | E04 + E08:S02 |

## Domain

| v4 | Role |
|----|------|
| E24+ | `{DOMAIN_NAME}` delivery — KMA/adopter populated |
