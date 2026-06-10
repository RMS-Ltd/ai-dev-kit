---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T21:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-cultural-requirements
  type: standard
  domain:
    primary: localisation
    secondary: ["i18n", "cultural-adaptation"]
  audience: ["agents", "developers", "translators", "maintainers"]
  applies_to:
    activities:
      - "translation"
      - "cultural-adaptation"
      - "locale-scaffolding"
---

# Locale cultural requirements

**Purpose:** Desk-research baseline for cultural adaptation across FR-006 target locales (E21:S04:T01).  
**Authority:** [E21:S04:T01](../../kanban/epics/epic-21/story-04-cultural-adaptation/T01-research-cultural-requirements-for-target-locales.md) · [IPP-E21S04T01](../../implementation-cycles/IPP-E21S04T01-research-cultural-requirements-target-locales.md)  
**Related:** [locale-rollout-matrix.md](locale-rollout-matrix.md) · [translation-workflow-and-review.md](translation-workflow-and-review.md) · [locale-formatting-conventions.md](locale-formatting-conventions.md)

---

## Research method

- **Source:** Structured desk research (public i18n/l10n guidance, BCP 47 locale norms, FR-006 rollout matrix). **Not** native-speaker verified.
- **Scope:** Nine scaffolded locales from [locale-rollout-matrix.md](locale-rollout-matrix.md); `en-GB` / `en-US` baseline comparison only.
- **Evidence gaps:** Rows marked **Review gap** require native or professional review before treating as ship-ready (per [translation-workflow-and-review.md](translation-workflow-and-review.md) P0/P1 recommendation).
- **Implementation boundary:** This document informs E21:S04:T03–T06 (E21:S04:T02 superseded — scope merged into T04 @ `v0.21.4.2+1`); does not implement RTL, formatting code, or translation YAML.

---

## Dimension catalog

Shared axes evaluated in every per-locale matrix below:

| Dimension | Summary | Primary owner task |
| --------- | ------- | ------------------ |
| **Formatting** | Date, time, number, currency display expectations | E21:S04:T05 (see [locale-formatting-conventions.md](locale-formatting-conventions.md)) |
| **Text direction** | LTR vs RTL layout and mirroring | E21:S04:T03 (`ar`; Hebrew `he` extension) |
| **Tone and formality** | Technical docs, CLI prompts, installer wizard register | E21:S04:T04 |
| **Examples and metaphors** | Kanban, RW, git, agile vocabulary in dev-kit context | E21:S04:T04 |
| **Imagery and iconography** | Directional icons, hand gestures, colour connotations | E21:S04:T04 (RTL mirroring impl: T03) |
| **Naming and inclusivity** | Gendered language, honorifics, inclusive defaults | E21:S04:T04 |
| **Translation review tier** | P0–P3 alignment from rollout matrix | S05–S07 + workflow policy |

---

## Per-locale matrix

### Spanish (es)

| Dimension | Desk research notes | Review gap? |
| --------- | ------------------- | ----------- |
| Formatting | `es` / `es-ES`: comma decimal, dot thousands; `DD/MM/YYYY`; 24h common in EU Spanish UI | Low |
| Text direction | LTR | No |
| Tone and formality | Technical Spanish often uses **usted** in enterprise installer copy; **tú** acceptable in developer CLI if consistent. Prefer neutral imperative for commands. | Medium |
| Examples and metaphors | Avoid US-only sports idioms; use generic “release / versión / rama” for RW/git. Kanban term **tablero** is understood; keep **Kanban** as loanword in headings if branded. | Medium |
| Imagery | Avoid single-hand “OK” gestures; prefer neutral workflow icons. Green/red status colours generally acceptable. | Low |
| Naming and inclusivity | Default to gender-neutral role nouns where Spanish allows (*desarrollador/a* → *persona desarrolladora* or plural *desarrolladores* when inclusive policy applies). | Medium |
| Translation review tier | P0/P1: native review recommended before installer ship | Yes |

### French (fr)

| Dimension | Desk research notes | Review gap? |
| --------- | ------------------- | ----------- |
| Formatting | `fr-FR`: space thousands separator (narrow no-break space ideal); comma decimal; `DD/MM/YYYY` | Low |
| Text direction | LTR | No |
| Tone and formality | **Vouvoiement** (*vous*) standard for installer and governance docs; **tu** only if CLI brand voice explicitly informal. | Medium |
| Examples and metaphors | Prefer European regulatory/neutral examples; avoid UK/US-specific tax or date idioms in samples. | Low |
| Imagery | Minimal text in icons; French UI often expects longer strings — allow layout expansion (T04). | Medium |
| Naming and inclusivity | Écriture inclusive (*développeur·euse*) is politicised; default to epicene phrasing or masculine generic only where project policy explicitly allows — document choice in T07. | High |
| Translation review tier | P0/P1: native review recommended | Yes |

### German (de)

| Dimension | Desk research notes | Review gap? |
| --------- | ------------------- | ----------- |
| Formatting | `de-DE`: comma decimal, dot thousands; `DD.MM.YYYY`; 24h clock | Low |
| Text direction | LTR | No |
| Tone and formality | **Sie** for installer and maintainer docs; **du** possible for CLI developer tools if consistent with en-US informal CLI tone. Compound nouns increase string length — plan UI width (T04). | Medium |
| Examples and metaphors | Prefer precise technical terms (*Release*, *Build*, *Tag*) with glossary; avoid mixed Denglish without glossary entry. | Medium |
| Imagery | Functional iconography preferred over decorative metaphors. | Low |
| Naming and inclusivity | Gender-neutral *Entwicklerin/Entwickler* or neutral *Entwicklungsperson* in inclusive mode; capitalisation rules (nouns) affect YAML key display not values. | Medium |
| Translation review tier | P0/P1: native review recommended | Yes |

### Portuguese (pt)

| Dimension | Desk research notes | Review gap? |
| --------- | ------------------- | ----------- |
| Formatting | Distinguish **pt-BR** vs **pt-PT** when translating (decimal/thousands differ); scaffold uses generic `pt` — resolve variant in S05 before ship | High |
| Text direction | LTR | No |
| Tone and formality | Brazilian enterprise UX often informal *você*; European Portuguese more formal. Pick one variant per locale tree. | High |
| Examples and metaphors | Avoid Spanish loan false friends in examples; use locale-appropriate git/hosting examples. | Medium |
| Imagery | Similar to Spanish LATAM — avoid US-centric clip art. | Low |
| Naming and inclusivity | Gendered adjectives must agree (*configurado/configurada*); prefer neutral instructions (“concluído” → passive or noun phrases). | Medium |
| Translation review tier | P0/P1: native review per pt-BR/pt-PT choice | Yes |

### Chinese Simplified (zh-CN)

| Dimension | Desk research notes | Review gap? |
| --------- | ------------------- | ----------- |
| Formatting | `YYYY年M月D日` or `YYYY-MM-DD` in technical docs; full-width punctuation in UI optional; grouping by 万/亿 | Medium |
| Text direction | LTR (CJK horizontal); vertical text out of scope | No |
| Tone and formality | Technical simplified Chinese uses concise imperative; avoid overly literal English calques for “workflow” (*工作流* vs *流程* — pick one glossary term). | High |
| Examples and metaphors | Use region-neutral tech examples; avoid political/geographic sensitivities in sample epic names. | High |
| Imagery | Red = positive/luck in CN marketing but error in UI — keep semantic colour mapping from design system (T04). | Medium |
| Naming and inclusivity | Gender rarely marked in UI strings; focus on clarity and sentence length. | Low |
| Translation review tier | P0/P1: professional zh-CN review required before ship | Yes |

### Chinese Traditional (zh-TW)

| Dimension | Desk research notes | Review gap? |
| --------- | ------------------- | ----------- |
| Formatting | Traditional characters; `YYYY/MM/DD` common; terminology differs from zh-CN (e.g. 軟體 vs 软件) | High |
| Text direction | LTR horizontal | No |
| Tone and formality | Traditional technical tone slightly more formal than mainland CLI; maintain glossary separation from zh-CN. | High |
| Examples and metaphors | Do not reuse zh-CN strings as “translation”; distinct lexical choices required. | High |
| Imagery | Same colour semantics caution as zh-CN; typography may need different fonts (T04). | Medium |
| Naming and inclusivity | As zh-CN — clarity over gender marking | Low |
| Translation review tier | P0/P1: professional zh-TW review required | Yes |

### Japanese (ja)

| Dimension | Desk research notes | Review gap? |
| --------- | ------------------- | ----------- |
| Formatting | `YYYY/MM/DD`; Western digits common in technical UIs; currency ¥ without decimals for integers | Low |
| Text direction | LTR horizontal; ruby text out of scope | No |
| Tone and formality | **Desu/masu** register for installer; **da/dearu** or concise neutral for CLI errors acceptable if consistent. Honorifics generally omit for machine-directed messages. | High |
| Examples and metaphors | Katakana for loanwords (*リリース*, *タグ*); provide glossary. Avoid literal translation of MoSCOW acronyms without explanation. | High |
| Imagery | Minimalist icon style; crowded labels problematic — allow vertical space (T04). | Medium |
| Naming and inclusivity | Avoid assumed gender in second-person; use neutral *ユーザー* / *開発者* | Medium |
| Translation review tier | P0/P1: native ja review strongly recommended | Yes |

### Russian (ru)

| Dimension | Desk research notes | Review gap? |
| --------- | ------------------- | ----------- |
| Formatting | `DD.MM.YYYY`; comma decimal; space thousands; 24h clock | Low |
| Text direction | LTR | No |
| Tone and formality | **Вы** capitalised for formal installer; CLI may use infinitive imperatives. Case inflection affects UI placeholders — plan gendered past participles in status messages (T04). | High |
| Examples and metaphors | Avoid geopolitical examples in sample data; use neutral project names. | Medium |
| Imagery | Avoid gestures and symbols with strong regional politics; stick to neutral DevOps icon set. | Medium |
| Naming and inclusivity | Gender agreement in past tense (*установлен/установлена*); prefer gender-neutral constructions. | Medium |
| Translation review tier | P0/P1: native review recommended | Yes |

### Arabic (ar)

| Dimension | Desk research notes | Review gap? |
| --------- | ------------------- | ----------- |
| Formatting | Eastern Arabic digits optional in UI; `DD/MM/YYYY` common; RTL affects punctuation placement (T05 + T03) | High |
| Text direction | **RTL** — mirror navigation, icons with directionality, progress bars (T03). Hebrew (`he`) follows same RTL task extension. | High |
| Tone and formality | Modern Standard Arabic for technical docs; regional dialect not used in written product UI. Formal plural *أنتم* vs singular — prefer gender-neutral instructions. | High |
| Examples and metaphors | Avoid left-to-right-only diagrams without mirrored layouts; git branch metaphors need RTL-safe diagrams (T04). | High |
| Imagery | No left-to-right-only chevrons without mirroring; caution with hand icons and figurative imagery. | High |
| Naming and inclusivity | Arabic morphology is gendered; use dual/plural or passive to reduce gender marking where possible. | High |
| Translation review tier | P0/P1: native ar review required; RTL layout review in T03/T06 | Yes |

---

## English baseline

`en-GB` and `en-US` variants are shipped under E21:S01 (spelling and lexical choice). **Cultural** delta between them is minor for dev-kit:

| Topic | en-GB | en-US |
| ----- | ----- | ----- |
| Date display | `DD/MM/YYYY` preference in examples | `MM/DD/YYYY` in examples |
| Tone | Slightly more formal default in governance prose | Direct imperative common in CLI |
| Terminology | *colour*, *organise*, *licence* | *color*, *organize*, *license* |

No further English cultural research required in T01; downstream tasks use selected project locale from config.

---

## Adaptation recommendations

| Priority | Recommendation | Owner task | Evidence gap? |
| -------- | -------------- | ---------- | ------------- |
| P0 | Mirror RTL layout shell for `ar` (nav, wizard steps, table alignment) before linguistic translation ship | E21:S04:T03 | Yes — layout QA |
| P0 | Allow 30–40% horizontal expansion for `de`, `fr`, `ja` installer strings in wizard UI | E21:S04:T04 | Medium |
| P1 | Publish locale formatting smoke examples per locale using `locale_formatting.py` wrappers | E21:S04:T05 | Low |
| P1 | Replace US-centric RW/git examples in whole-file templates with neutral metaphors | E21:S04:T04 | Medium |
| P1 | Define glossary table for loanwords (*Release*, *Kanban*, *tag*, *workflow*) per locale | E21:S04:T04 | High |
| P2 | Audit directional icons and progress indicators for RTL mirroring (checklist T04; impl T03) | E21:S04:T04 | Yes |
| P2 | Resolve `pt` scaffold into `pt-BR` or `pt-PT` before S05 translation | E21:S04:T04 | High |
| P3 | Add cultural adaptation E2E checks alongside translation locale tests | E21:S04:T06 | Medium |

---

## Guideline framework (draft)

Outline for **E21:S04:T07** contributor cultural guidelines (not final prose):

1. **Scope** — what counts as cultural vs linguistic change  
2. **Locale authority** — this document + rollout matrix as SoT  
3. **Review ladder** — desk research → maintainer review → native/pro P0/P1  
4. **Formatting** — defer to locale-formatting-conventions; no ad-hoc date strings  
5. **RTL checklist** — mirror, digits, punctuation, icons (pointer to T03)  
6. **Examples policy** — neutral names, no geopolitical sample data  
7. **Imagery policy** — icon set constraints; colour semantics  
8. **Glossary process** — loanwords and MoSCOW/kanban terms  
9. **PR evidence** — link cultural requirement rows when claiming adaptation complete  

---

## Handoffs

_T02 superseded @ `v0.21.4.2+1` — imagery, layout expansion, and directional-icon audit checklist merged into T04 ([IPP-E21S04T02](../../implementation-cycles/IPP-E21S04T02-supersede-merge-into-t04.md))._

| Task | Consumes from this doc |
| ---- | ---------------------- |
| [E21:S04:T03](../../kanban/epics/epic-21/story-04-cultural-adaptation/T03-implement-rtl-support-right-to-left-for-arabichebrew.md) | Arabic RTL dimensions; `he` extension note; RTL icon mirroring implementation — **API/conventions:** [locale-rtl-conventions.md](locale-rtl-conventions.md) |
| [E21:S04:T04](../../kanban/epics/epic-21/story-04-cultural-adaptation/T04-adapt-content-and-examples-for-cultural-context.md) | Tone, examples, glossary, pt variant; imagery policy; layout expansion guidance; directional-icon audit checklist (absorbed from superseded T02) |
| [E21:S04:T05](../../kanban/epics/epic-21/story-04-cultural-adaptation/T05-configure-locale-specific-formatting-dates-times-numbers-cur.md) | Per-locale formatting rows |
| [E21:S04:T06](../../kanban/epics/epic-21/story-04-cultural-adaptation/T06-test-cultural-adaptations.md) | E2E cultural checks |
| [E21:S04:T07](../../kanban/epics/epic-21/story-04-cultural-adaptation/T07-document-cultural-considerations-and-guidelines.md) | Guideline framework (draft) → polished guide |

---

## References

- [FR-006](../../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [locale-rollout-matrix.md](locale-rollout-matrix.md)
- [translation-workflow-and-review.md](translation-workflow-and-review.md)
- [locale-formatting-conventions.md](locale-formatting-conventions.md)
- [translatable-content-inventory.md](translatable-content-inventory.md)
