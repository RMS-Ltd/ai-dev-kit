---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S02:T06 — Planning: Translation key system (IPW)

**Host Task:** [`T06-implement-translation-key-system.md`](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T06-implement-translation-key-system.md) **(E21:S02:T06)**  
**Planning for:** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) · [IPP-E21S02T02](IPP-E21S02T02-locale-file-structure.md)  
**Status:** Complete — released `v0.21.2.6+1` (`RW E21:S02:T06 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `resolve_locale_key(project_root, key)` for `domain.section.key` | ADR-024 T06 |
| RF2 | Manifest v2 `keys` category → `keys/{domain}.yaml` | T02 |
| RF3 | Key naming and domain prefix validation | conventions §4 |
| RF4 | Locale via `resolve_language(project_root)` | T03 |
| RF5 | `_language_fallback_chain` fallback | T07 precursor |
| RF6 | `{{placeholder}}` substitution | conventions §4.2 |
| RF7 | In-process catalog cache | ADR-024 performance |
| RF8 | `package` kwarg (`workflow-mgt` / `kanban`) | T02 both packages |
| RF9 | CLI re-export | T03–T05 pattern |

### 1.2 Out of scope

T07 extended fallback, non-English dirs (S03+), full CLI string migration

---

## 2. Specification

**Canonical spec:** [locale-key-conventions.md](../governance/standards/locale-key-conventions.md)

### 2.5 ADR necessity

**Outcome:** EXEMPT — implements ADR-024 T06.

---

## 3. Test design

| ID | Module |
| -- | ------ |
| K1–K8 | `tests/test_locale_key_resolution.py` |
| K9 | `pytest -m fr006` |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T06 `TODO → IN PROGRESS` |
| 2 | `resolve_locale_key` + cache in `localisation_config.py` |
| 3 | CLI re-export; greenfield sync |
| 4 | Policy + ADR-024 + README updates |
| 5 | Tests + `fr006` |
| 10 | `RW E21:S02:T06 --art` @ `v0.21.2.6+1` |
| **N** | T06 → COMPLETE |

---

## 7. Success criteria

- [x] Translation key system implemented
- [x] Key naming conventions defined
- [x] Keys organised logically (T02 catalogs)
- [x] Key system documented
- [x] `fr006` green
- [x] RW `v0.21.2.6+1`

---

## References

- [locale-key-conventions.md](../governance/standards/locale-key-conventions.md)
- [locale-file-structure-conventions.md](../governance/standards/locale-file-structure-conventions.md)
- [IPP-E21S02T02](IPP-E21S02T02-locale-file-structure.md)
