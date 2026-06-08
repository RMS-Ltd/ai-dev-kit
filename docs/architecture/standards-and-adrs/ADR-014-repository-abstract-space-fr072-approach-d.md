---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-01T18:35:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-014: Repository vs abstract-space Kanban model (FR-072 Approach D)

**Status:** Accepted  
**Date:** 2026-06-01  
**Deciders:** Maintainer (via E04:S19:T08)  
**Related:** [FR-072](../../kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md), [FR-021](../../kanban/fr-br/FR-021-fr-br-uxr-repository-stories.md) (superseded for new intake), [dev-kit-versioning-policy.md](../../governance/standards/dev-kit-versioning-policy.md)

---

## Context

Epic 5, 6, and 7 used **Story 0** and **repository stories** inconsistently. FR-021 introduced dedicated FR/BR/UXR repo stories; FR-072 selects **Approach D**: phased migration to **S00 abstract-only** and **semantic delivery-story** intake without mass coordinate renumbering.

E7:S00 detasking ([E04:S19:T10](../../kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T10-e7-s00-detasking-abstract-space-enforcement-br076.md)) completed the E7 slice. **E04:S19:T08** completes D2–D4 globally.

---

## Decision

1. **S00** is **abstract space only** (`0.\{epic\}.0.0+0`) — **no concrete tasks** on any epic’s S00 story.
2. **E5:S01** (CLOSED), **E6:S01** (and former E7:S00 registry paths) are **historical registries** — valid forensic anchors, **not** primary homes for **new** intake.
3. **New intake** (FR-072 D2): primary implementing tasks MUST be filed under the **semantic delivery story** (KG-R6). Optional numeric symmetry (FR-047 → T47) is not required.
4. **FR-021** is **superseded for new intake**; historical 1:1 repo-story mapping remains linkable.
5. **Validators and RW** accept **legacy repository coordinates** as historical-valid; they must not **require** new work on repository stories.

---

## S00 / repository table (ai-dev-kit)

| Epic | S00 | Repository / registry story | New intake primary task |
| ---- | --- | --------------------------- | ------------------------ |
| E5 | [story-00-fr-repo](../../kanban/epics/epic-05/story-00-fr-repo.md) abstract | [story-01-fr-repo](../../kanban/epics/epic-05/story-01-fr-repo.md) **CLOSED** historical | Delivery epic/story (e.g. E4, E5:S09, E6, E7:S01) |
| E6 | story-000 abstract | [story-01-br-repo](../../kanban/epics/epic-06/story-01-br-repo.md) historical | Delivery epic/story |
| E7 | [story-00-uxr-repo](../../kanban/epics/epic-07/story-00-uxr-repo.md) abstract | T01–T06 under `story-00-uxr-repo/` historical only | E7:S01, E7:S05, host epic story |

---

## Migration phases (Approach D)

| Phase | State | This repo |
| ----- | ----- | --------- |
| D1 | Canonical model published | FR-072 decision memo + this ADR |
| D2 | Semantic intake cutover | Intake skill, FR_BR_INTAKE_GUIDE, KG-R6 |
| D3 | Historical labeling | story-001 / story-000 banners, T72/T21 |
| D4 | Validator/workflow alignment | RW/UKW guides, versioning policy § S00 |

---

## Redirect table (representative)

| Legacy anchor | Role | Primary delivery / notes |
| ------------- | ---- | ------------------------ |
| E05:S01:T72 | FR-072 registry task | **E04:S19:T08** implements FR-072 |
| *(retired)* E05:S01:T76 | Deleted — never use | **E05:S09:T12** (UXR-018 changelog pillar + portal IA) |
| E05:S01:T21 | FR-021 registry | **E04:S19:T07** merged into **T08** |
| E07:S00:T01–T06 | UXR registry anchors | Historical; see story-00-uxr-repo |
| E07:S00:T05 (UXR-005) | Split registry | **E07:S01:T09** implementing |
| Open FBUs on fbuboard | Active work | Semantic `E:S:T` on row (2026-05-29 batch + T08) |

Full FR-level history remains on each `fr-br/*.md` **Implementing Task** line; completed FRs may still cite `E05:S01:Tnn` as historical registry coordinates.

---

## Consequences

- **Positive:** One place to answer “What is S00?”; adopters get phased migration without Epic 7 renumbering.
- **Negative:** Mixed coordinates during transition; grep audits required for open board rows.
- **Follow-on:** Optional automated S00 intake validator (not in T08).

---

## Compliance

- Intake: [.cursor/skills/intake-process/SKILL.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md), [FR_BR_INTAKE_GUIDE.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md)
- IPP: [IPP-E4S19T8](../../implementation-cycles/IPP-E04S19T08-fr072-approach-d-d2-d4-migration-and-doc-sweep.md)
