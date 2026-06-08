---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T23:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S02:T07 — Planning: Translation fallback chain (IPW)

**Host Task:** [`T07-set-up-translation-fallback-chain-selected-english-us-englis.md`](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T07-set-up-translation-fallback-chain-selected-english-us-englis.md) **(E21:S02:T07)**  
**Planning for:** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) · [IPP-E21S02T06](IPP-E21S02T06-locale-key-system.md)  
**Status:** Planning complete — target `v0.21.2.7+1` (`RW E21:S02:T07 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Fallback order: selected locale → `default_locale` → `en-GB` → `en-US` → canonical template | ADR-024 T07 |
| RF2 | Single `_language_fallback_chain` drives `resolve_locale_asset` and `resolve_locale_key` | T06 handoff |
| RF3 | Preserve FR-006 tags in chain (`fr`, `es`, …) via `map_to_supported_locale` — not `normalize_language` | Current gap |
| RF4 | Append `en-US` after `en-GB` when absent | Task AC |
| RF5 | Canonical template last via existing `fallback_path` | Phase 1 |
| RF6 | Keys: chain ends at `en-US`; `KeyError` if missing | ADR scope |
| RF7 | Policy doc for fallback behaviour | Task AC |
| RF8 | Public `language_fallback_chain(locales_root, preferred)` for tests/diagnostics | Recommended |
| RF9 | IPP ↔ task doc wiring | IPW Phase 8 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Stdlib + PyYAML only |
| RNF2 | `pytest -m fr006` green |
| RNF3 | Greenfield mirror sync |

### 1.3 Out of scope

Non-English on-disk trees (S03+), manifest v3, portal fallback, bulk call-site migration

---

## 2. Specification

**Canonical spec (on implementation):** [locale-fallback-conventions.md](../governance/standards/locale-fallback-conventions.md)

### 2.1 Target `_language_fallback_chain`

```python
SECONDARY_ENGLISH_LOCALE = "en-US"

def _language_fallback_chain(manifest, preferred: str) -> List[str]:
    default_locale = map_to_supported_locale(manifest.get("default_locale", DEFAULT_LANGUAGE))
    chain: List[str] = []
    for candidate in (preferred, default_locale, DEFAULT_LANGUAGE, SECONDARY_ENGLISH_LOCALE):
        mapped = map_to_supported_locale(candidate)
        if mapped not in chain:
            chain.append(mapped)
    return chain
```

### 2.2 Resolution surfaces

| API | Chain | Final fallback |
| --- | ----- | -------------- |
| `resolve_locale_asset` | per-lang file exists | `fallback_path` (canonical) |
| `resolve_locale_key` | per-lang catalog lookup | `KeyError` |
| `resolve_kanban_intake_template` | via asset resolver | `kanban/templates/*.md` |

### 2.4 Status transition intent

- **Current:** `TODO` @ `v0.21.2.7+0`
- **→ IN PROGRESS:** §4 Step 1
- **→ COMPLETE:** AC + tests + `RW E21:S02:T07 --art` @ `v0.21.2.7+1`

### 2.5 ADR necessity

**Outcome:** EXEMPT — implements ADR-024 T07; UPDATE integration table row.

---

## 3. Test design

**File:** `tests/test_locale_fallback_chain.py`

| ID | Covers |
| -- | ------ |
| F1 | `fr` → `["fr", "en-GB", "en-US"]` |
| F2 | `en-US` preferred → `["en-US", "en-GB"]` deduped |
| F3 | `fr` not collapsed to `en-GB` first |
| F4 | Asset resolves en-US when en-GB file missing |
| F5 | Canonical fallback regression (test_t8) |
| F6 | Key walks to en-US catalog |
| F7 | Extend `test_k7_fallback_unregistered_locale` |
| F8 | `pytest -m fr006` |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T07 `TODO → IN PROGRESS`; link IPP |
| 2 | Refactor `_language_fallback_chain`; add `language_fallback_chain` |
| 3 | Re-export; greenfield sync |
| 4 | CREATE `locale-fallback-conventions.md`; UPDATE ADR-024 + locale-key-conventions |
| 5 | ADD tests; run gates |
| 10 | `RW E21:S02:T07 --art` @ `v0.21.2.7+1` |
| **N** | T07 → COMPLETE; Story S02 fallback AC |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `IPP-E21S02T07-locale-fallback-chain.md` | CREATE |
| D2 | `locale-fallback-conventions.md` | CREATE |
| D3 | ADR-024 T07 row | UPDATE |
| D4 | `locale-key-conventions.md` | UPDATE |
| D5 | Package READMEs | UPDATE |

---

## 6. Housing

| Deliverable | Path |
| ----------- | ---- |
| IPP | `docs/implementation-cycles/IPP-E21S02T07-locale-fallback-chain.md` |
| Policy | `docs/governance/standards/locale-fallback-conventions.md` |
| Tests | `tests/test_locale_fallback_chain.py` |

---

## 7. Success criteria

- [ ] Fallback chain implemented with correct order
- [ ] Fallback tested (assets, keys, canonical)
- [ ] Behaviour documented
- [ ] `fr006` green
- [ ] RW `v0.21.2.7+1`

---

## References

- [locale-key-conventions.md](../governance/standards/locale-key-conventions.md)
- [locale-file-structure-conventions.md](../governance/standards/locale-file-structure-conventions.md)
- [IPP-E21S02T06](IPP-E21S02T06-locale-key-system.md)
