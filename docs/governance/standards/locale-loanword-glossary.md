---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T20:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-loanword-glossary
  type: standard
  domain:
    primary: localisation
    secondary: ["translation", "glossary"]
  audience: ["translators", "maintainers", "agents"]
  applies_to:
    activities:
      - "translation"
      - "cultural-adaptation"
---

# Locale loanword glossary

**Purpose:** Per-locale guidance for dev-kit terms that are often borrowed or transliterated (E21:S04:T04).  
**Authority:** [IPP-E21S04T04](../../implementation-cycles/IPP-E21S04T04-cultural-content-adaptation.md)  
**Method:** Desk research — rows marked **Review gap** need native verification before ship.

**Terms:** Release · Build · Tag · Workflow · Kanban · MoSCOW · Epic · Story · Task

---

## es (Spanish)

| Term | Recommendation | Review gap? |
| ---- | -------------- | ----------- |
| Release | *release* or *versión* (context: RW) | Medium |
| Build | *build* (loanword) or *compilación* | Medium |
| Tag | *etiqueta* (git) | Low |
| Workflow | *flujo de trabajo* | Low |
| Kanban | *Kanban* (loanword in headings) | Low |
| MoSCOW | Expand on first use: *Must/Should/Could/Won't* | Medium |
| Epic/Story/Task | *épica / historia / tarea* | Low |

---

## fr (French)

| Term | Recommendation | Review gap? |
| ---- | -------------- | ----------- |
| Release | *version* / *release* (technical) | Medium |
| Build | *build* (loanword common in DevOps) | Medium |
| Tag | *étiquette* (git) | Low |
| Workflow | *flux de travail* | Low |
| Kanban | *Kanban* | Low |
| MoSCOW | Acronym + French expansion in glossary footnote | High |
| Epic/Story/Task | *épopée / story / tâche* — prefer *épopée* over literal calque | Medium |

---

## de (German)

| Term | Recommendation | Review gap? |
| ---- | -------------- | ----------- |
| Release | *Release* (loanword) — document in glossary | Medium |
| Build | *Build* | Medium |
| Tag | *Tag* (git) | Low |
| Workflow | *Workflow* or *Arbeitsablauf* — pick one per tree | Medium |
| Kanban | *Kanban* | Low |
| MoSCOW | German expansion required in contributor docs (T07) | High |
| Epic/Story/Task | *Epic / Story / Task* (common loanwords) | Low |

---

## pt-BR (Brazilian Portuguese)

| Term | Recommendation | Review gap? |
| ---- | -------------- | ----------- |
| Release | *release* / *versão* | High |
| Build | *build* | Medium |
| Tag | *tag* (git) | Low |
| Workflow | *fluxo de trabalho* | Medium |
| Kanban | *Kanban* | Low |
| MoSCOW | Expand acronyms — informal *você* register | High |
| Epic/Story/Task | *épico / história / tarefa* | Medium |

---

## pt-PT (European Portuguese)

| Term | Recommendation | Review gap? |
| ---- | -------------- | ----------- |
| Release | *versão* / *lançamento* | High |
| Build | *compilação* / *build* | High |
| Tag | *etiqueta* | Medium |
| Workflow | *fluxo de trabalho* | Medium |
| Kanban | *Kanban* | Low |
| MoSCOW | Formal register; distinct from pt-BR choices | High |
| Epic/Story/Task | *épico / história / tarefa* | Medium |

---

## zh-CN (Simplified Chinese)

| Term | Recommendation | Review gap? |
| ---- | -------------- | ----------- |
| Release | *发布* | Medium |
| Build | *构建* | Medium |
| Tag | *标签* | Low |
| Workflow | *工作流* (consistent — do not mix *流程*) | High |
| Kanban | *看板* | Low |
| MoSCOW | Chinese expansion + keep MoSCOW acronym | High |
| Epic/Story/Task | *史诗 / 故事 / 任务* | Medium |

---

## zh-TW (Traditional Chinese)

| Term | Recommendation | Review gap? |
| ---- | -------------- | ----------- |
| Release | *發佈* | High |
| Build | *建置* | High |
| Tag | *標籤* | Medium |
| Workflow | *工作流程* — **not** reuse zh-CN strings | High |
| Kanban | *看板* | Low |
| MoSCOW | Traditional expansion; separate glossary from zh-CN | High |
| Epic/Story/Task | *史詩 / 故事 / 任務* | High |

---

## ja (Japanese)

| Term | Recommendation | Review gap? |
| ---- | -------------- | ----------- |
| Release | *リリース* (katakana) | Medium |
| Build | *ビルド* | Medium |
| Tag | *タグ* | Low |
| Workflow | *ワークフロー* | Medium |
| Kanban | *カンバン* or *Kanban* in headings | Medium |
| MoSCOW | Explain MoSCOW on first board reference | High |
| Epic/Story/Task | *エピック / ストーリー / タスク* | Medium |

---

## ru (Russian)

| Term | Recommendation | Review gap? |
| ---- | -------------- | ----------- |
| Release | *релиз* / *выпуск* | Medium |
| Build | *сборка* / *билд* | Medium |
| Tag | *тег* | Low |
| Workflow | *рабочий процесс* / *воркфлоу* | Medium |
| Kanban | *Канбан* | Low |
| MoSCOW | Cyrillic expansion footnote | High |
| Epic/Story/Task | *эпик / история / задача* | Medium |

---

## ar (Arabic)

| Term | Recommendation | Review gap? |
| ---- | -------------- | ----------- |
| Release | *إصدار* | High |
| Build | *بناء* / loan *build* in technical UI | High |
| Tag | *وسم* | Medium |
| Workflow | *سير العمل* | High |
| Kanban | *كانبان* (transliteration) | Medium |
| MoSCOW | RTL-safe expansion in T07 | High |
| Epic/Story/Task | *ملحمة / قصة / مهمة* | High |

---

## References

- [locale-cultural-content-policy.md](locale-cultural-content-policy.md)
- [locale-cultural-requirements.md](locale-cultural-requirements.md)
- [translation-workflow-and-review.md](translation-workflow-and-review.md)
