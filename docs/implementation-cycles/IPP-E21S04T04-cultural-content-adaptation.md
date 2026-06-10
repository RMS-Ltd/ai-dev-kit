---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S04:T04 — Planning: Cultural content adaptation (IPW)

**Host Task:** [`T04-adapt-content-and-examples-for-cultural-context.md`](../kanban/epics/epic-21/story-04-cultural-adaptation/T04-adapt-content-and-examples-for-cultural-context.md) **(E21:S04:T04)**  
**Planning for:** [FR-006 Phase 2](../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [E21:S04](../kanban/epics/epic-21/story-04-cultural-adaptation.md) · [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)  
**Status:** Complete — released `v0.21.4.4+1` (`RW E21:S04:T04 --art`)  
**Operator decision:** Split Portuguese like `zh-CN`/`zh-TW` — `pt-BR` + `pt-PT`; retire generic `pt`.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Imagery/iconography policy for CLI/installer locale keys | T04 AC; T02 merge |
| RF2 | String-length guidance for `de`, `fr`, `ja` installer strings (30–40%) | T01 P0 |
| RF3 | Completed directional-icon audit checklist; T03 hooks verified | T04 AC |
| RF4 | Per-locale loanword glossary | T01 P1 |
| RF5 | Split `pt` → `pt-BR` + `pt-PT` in registry, manifests, trees | Operator; T04 AC |
| RF6 | Neutralize US/UK-centric examples in en-GB/en-US source assets | T04 AC |
| RF7 | Update cultural requirements handoffs | FR-092 |
| RF8 | Structural pytest + T06 E2E handoff documented | T04 AC |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Maintainer governance only (FR-114) |
| RNF2 | Greenfield mirror when `packages/frameworks/**` changes |
| RNF3 | `pytest -m fr006` green after registry change |

### 1.3 Invariants and boundaries

- **In scope:** Policy docs, glossary, audit, pt split, English-source neutralization, structural tests.
- **Out of scope:** RTL code (T03), formatting infra beyond pt profiles (T05), full translation (S05–S07), per-locale emoji rewrites, T06 E2E, T07 contributor guide polish, portal UI.

---

## 2. Specification

### 2.1 Goal

Turn T01 desk research into enforceable cultural content policy, resolve Portuguese variant ambiguity before S05 translation, and neutralize biased examples in English source locale assets.

### 2.2 Status transition intent

- **Current:** `TODO` → **IN PROGRESS** (Step 1) → **COMPLETE** when AC evidenced + RW.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | pt-BR+pt-PT split vs keep `pt` |
| T2 | Reversibility | Y | Registry + manifests affect adopters |
| T3 | Blast radius | Y | `localisation_config.py`, formatting, trees |
| T4 | Precedent | Y | Glossary + imagery policy = translator SoT |
| T5–T7 | — | N | — |

**Outcome:** `REQUIRED` → **UPDATE** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md).

---

## 3. Test design

| ID | Check |
| -- | ----- |
| T1 | `locale-cultural-content-policy.md` sections present |
| T2 | Glossary rows for all rollout locales incl. pt-BR, pt-PT |
| T3 | `locale-directional-icon-audit.md` completed |
| T4–T7 | pt registry, mapping, trees, manifests |
| T8 | Cultural doc handoffs link policy paths |
| T9 | `pytest -m fr006` green |
| T10 | T06 handoff in §7 |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **TODO → IN PROGRESS** on task doc |
| 2 | Create IPP; wire task links |
| 3 | UPDATE ADR-024 pt-BR/pt-PT row |
| 4–6 | CREATE policy, glossary, audit docs |
| 7 | pt split infra + locale trees |
| 8 | Greenfield sync |
| 9 | Neutralize en-GB/en-US installer examples |
| 10–11 | UPDATE cultural requirements, rollout matrix, S05:T04 |
| 12 | Pytest |
| 13 | RW Step 7 kanban sync |
| 14 | `RW E21:S04:T04 --art` |
| **N** | Reconcile **COMPLETE** + forensic marker |

**RW rule (BR-097):** Post-ship verification uses `RW E21:S04:T04 --art` only.

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `locale-cultural-content-policy.md` | CREATE |
| D-C2 | `locale-loanword-glossary.md` | CREATE |
| D-C3 | `locale-directional-icon-audit.md` | CREATE |
| D-U1 | `locale-cultural-requirements.md` | UPDATE |
| D-U2 | ADR-024 | UPDATE |
| D-U3 | `locale-rollout-matrix.md` | UPDATE |
| D-U4 | `locale-rtl-conventions.md` | UPDATE |
| D-U5 | E21:S05:T04 task doc | UPDATE |

---

## 6. Documentation housing

| Doc ID | Path | Publication | Lifecycle |
| ------ | ---- | ----------- | --------- |
| IPP | `docs/implementation-cycles/IPP-E21S04T04-cultural-content-adaptation.md` | N/A | evergreen |
| D-C1–C3 | `docs/governance/standards/locale-*.md` | N/A (maintainer) | evergreen |

---

## 7. Success / verification criteria

- [ ] All T04 ACs evidenced
- [ ] pt-BR/pt-PT trees; generic `pt` retired
- [ ] `pytest -m fr006` green
- [ ] Greenfield mirror committed
- [ ] `RW E21:S04:T04 --art` local-complete

### T06 handoff (deferred E2E)

T06 should add: emoji policy compliance scan on translated installer keys; glossary term presence in `es`/`zh-CN` shipped locales; pt-BR vs pt-PT string parity checks; RTL directional-icon rendering smoke with `ar` scaffold.

---

## References

- [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md)
- [IPP-E21S04T02-supersede-merge-into-t04.md](IPP-E21S04T02-supersede-merge-into-t04.md)
- [locale-rtl-conventions.md](../governance/standards/locale-rtl-conventions.md)
- [IPP-E21S04T05-cultural-formatting-validation.md](IPP-E21S04T05-cultural-formatting-validation.md)
