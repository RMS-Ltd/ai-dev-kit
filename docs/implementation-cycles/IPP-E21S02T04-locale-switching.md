---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S02:T04 — Planning: Language switching (IPW)

**Host Task:** [`T04-add-language-switching-functionality.md`](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T04-add-language-switching-functionality.md) **(E21:S02:T04)**  
**Planning for:** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) · [IPP-E21S02T03](IPP-E21S02T03-locale-detection.md)  
**Status:** Complete — released `v0.21.2.4+1` (`RW E21:S02:T04 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `switch_locale(project_root, locale_tag, ...)` — map, write config, return before/after | ADR-024 T04 |
| RF2 | `locale_payload_from_tag(tag)` for all `FR006_SUPPORTED_LOCALES` | T03 handoff |
| RF3 | `read_localisation_config` round-trips FR-006 tags (not collapse to en-GB) | T03 RF6 |
| RF4 | CLI `--locale` on init + RW installer | ADR-024 |
| RF5 | `adk config locale show` / `set` | Task AC |
| RF6 | `--force` re-prompt / overwrite on installer and init | ADR-024 |
| RF7 | `--language` remains backward-compatible alias | Phase 1 |
| RF8 | Greenfield mirror sync | ADR-024 |
| RF9 | IPP ↔ task doc wiring | IPW Phase 8 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Stdlib only |
| RNF2 | `pytest -m fr006` green |
| RNF3 | `RW E21:S02:T04 --art` → `v0.21.2.4+1` |

### 1.3 Out of scope

- Portal UI, `resolve_locale_key()` (T06), Babel (T05), non-English asset trees (S03+)

---

## 2. Specification

**Canonical spec:** [locale-switching-conventions.md](../governance/standards/locale-switching-conventions.md)

### 2.5 ADR necessity

**Outcome:** EXEMPT — implements ADR-024 T04.

---

## 3. Test design

| ID | Module |
| -- | ------ |
| S1–S8 | `tests/test_locale_switching.py` |
| Config locale | `tests/test_commands.py` |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T04 `TODO → IN PROGRESS` |
| 2 | `switch_locale`, `locale_payload_from_tag`, read_config fix |
| 3 | `adk config locale`, `--locale` on init/installer |
| 4 | Tests + docs |
| 10 | `RW E21:S02:T04 --art` @ `v0.21.2.4+1` |
| **N** | T04 → COMPLETE |

---

## 7. Success criteria

- [x] All task AC with test evidence
- [x] `fr006` green
- [x] RW `v0.21.2.4+1`

---

## References

- [locale-switching-conventions.md](../governance/standards/locale-switching-conventions.md)
- [locale-detection-conventions.md](../governance/standards/locale-detection-conventions.md)
- [IPP-E21S02T03](IPP-E21S02T03-locale-detection.md)
