# Changelog v0.21.4.4+1

**Release Date:** 2026-06-10 20:30:00 UTC  
**Epic:** 21 | **Story:** 04 | **Task:** 04  
**SemVer:** v0.4.1128+1 (task-touch)

## Summary

E21:S04:T04 — Cultural content adaptation: policy docs, loanword glossary, directional-icon audit, pt-BR/pt-PT locale split, English-source example neutralization.

## Change implemented

### Governance

- **CREATE** `locale-cultural-content-policy.md` — imagery, string-length, examples policy
- **CREATE** `locale-loanword-glossary.md` — per-locale loanword table
- **CREATE** `locale-directional-icon-audit.md` — completed audit checklist
- **UPDATE** `locale-cultural-requirements.md` — pt-BR/pt-PT matrix; T04 policy links
- **UPDATE** ADR-024 — Portuguese variant integration row

### Framework

- Split generic `pt` → `pt-BR` + `pt-PT` in `FR006_SUPPORTED_LOCALES`, manifests, locale trees
- `map_to_supported_locale` pt branch (bare `pt` → `pt-BR`)
- `locale_formatting.py` profiles: BRL (pt-BR), EUR (pt-PT)
- Neutralized en-GB/en-US installer example strings (adopter-project wording)
- Greenfield mirror synced

### Tests

- **CREATE** `tests/test_locale_cultural_content_policy.py`
- Updated fr006 locale scaffold/formatting tests for ten rollout locales

### Planning

- **CREATE** [IPP-E21S04T04](../../implementation-cycles/IPP-E21S04T04-cultural-content-adaptation.md)

## References

- [T04 task doc](../../kanban/epics/epic-21/story-04-cultural-adaptation/T04-adapt-content-and-examples-for-cultural-context.md)
- [FR-006](../../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
