---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S01:T01 — Planning: Template language selection (docs-first) (IPW)

**Host Task:** [`T01-add-language-selection-prompt-to-template-setup-github-templ.md`](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T01-add-language-selection-prompt-to-template-setup-github-templ.md) **(E21:S01:T01)**  
**Planning for:** [FR-006 Phase 1](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [E21:S01](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup.md)  
**Status:** Complete — released `v0.21.1.1+2` (`RW E21:S01:T01 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## Scope decision (operator-confirmed)

**Docs-first slice:** Language selection for the GitHub-template path is delivered as **documented Step 0** plus an **example config file** adopters copy/edit manually. **No Python installer changes** in T01 — interactive prompts and read/write utilities are deferred to **E21:S01:T05**.

---

## 1. Requirements (ascertained baseline)

### Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | **Step 0** in template setup docs: choose UK English (`en-GB`) or US English (`en-US`) before other customization | T01 AC; FR-006 Phase 1; story default **en-GB** |
| RF2 | Document clear choice presentation (numbered options, spelling examples per FR-006) | FR-006 proposed solution |
| RF3 | Define canonical config shape and provide **copyable example** | T01 deliverable; T05 schema preview |
| RF4 | Instruct adopters to create `ai-dev-kit-config.yaml` at **project root** with `localisation.language` + `localisation.variant` | FR-006 §Configuration; T05 |
| RF5 | Cross-link template path from INSTALL and installation guide | FR-006; FR-080 |
| RF6 | Flesh T01 task doc: Scope, Input, Deliverable, References | FR-016 hygiene |
| RF7 | Note explicit handoff to T05 (automation) and T04 (content variants) | Story S01 dependencies |

### Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | **No installer/script behavior change** in T01 (operator scope) |
| RNF2 | **Adopter parity:** example config synced to `greenfield-install/` via `sync_greenfield_install.py` |
| RNF3 | **Default en-GB** when adopters skip explicit choice (documented, not coded) |
| RNF4 | Commit/tag only via **`RW E21:S01:T01 --art`** on epic branch (BR-097; no `--dpz`) |

### Out of scope (T01)

- `install_greenfield_path.py` / `install_release_workflow.py` prompts → **T03/T05**
- CLI `ai-dev-kit init` → **E21:S01:T02**
- UK/US content directories / RW content switching → **T04/T06**
- pytest / installer automation tests → deferred with T05

---

## 2. Specification

### Goal

After creating a repo from the GitHub template, adopters follow updated setup documentation that makes **language variant selection the first actionable step**, with a canonical example config file they copy to `ai-dev-kit-config.yaml`.

### Config contract (canonical for S01)

```yaml
localisation:
  language: "en-GB"  # or "en-US"
  variant: "UK"      # or "US"
```

- **Default documented:** `en-GB` / `UK`
- File location: project root `ai-dev-kit-config.yaml` (created by copying example)

### Status transition intent (mandatory)

- **Current:** `IN PROGRESS` (kanban rehouse @ v0.21.1.1+1)
- **Complete when:** V1–V6 pass; forensic marker after RW: `✅ COMPLETE (v0.21.1.1+2)`
- **Atomic propagation:** task doc + story checklist + `kboard.md` in RW Step 7

### ADR necessity (Phase 5.0)

**Outcome: EXEMPT** — docs + example config only; cite FR-006 + post-template guide as governing docs.

---

## 3. Test design

**`--skip-tests` justification:** T01 is **documentation + example config template only**. Verification is **structural inspection** (V1–V6). Automated installer tests belong with **T05**.

### Verification checklist (V1–V6)

| ID | Check | Result |
| -- | ----- | ------ |
| V1 | Post-template guide has **Step 0** before “Update project name” | Pass |
| V2 | INSTALL + installation guide template sections link to Step 0 | Pass |
| V3 | Example config exists with both `en-GB` and `en-US` documented | Pass |
| V4 | Default `en-GB` stated explicitly | Pass |
| V5 | T01 task doc Scope/Deliverable/AC/References complete; links to IPP | Pass |
| V6 | T05 handoff note present | Pass |

---

## 4. Implementation plan

| Step | Action | Status |
| ---- | ------ | ------ |
| **1** | Confirm task `E21:S01:T01` status **`IN PROGRESS`** | Done |
| 2 | Create `ai-dev-kit-config.example.yaml` | Done |
| 3 | Update post-template setup guide (Step 0) | Done |
| 4 | Update installation guide template section | Done |
| 5 | Update INSTALL_IN_YOUR_PROJECT.md | Done |
| 6 | Update template enablement instructions | Done |
| 7 | Flesh T01 task doc + IPP wiring | Done |
| 8 | Run `sync_greenfield_install.py` | Done |
| 9 | V1–V6 verification | Pass |
| 10 | **`RW E21:S01:T01 --art`** → `v0.21.1.1+2` | Pending |
| **N** | Reconcile status to `COMPLETE` + forensic marker in RW Step 7 | Pending |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `docs/implementation-cycles/IPP-E21S01T01-template-language-selection-github.md` | CREATE |
| D2 | `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` | UPDATE |
| D3 | `docs/documentation/user-docs/framework-dependency-installation-guide.md` | UPDATE |
| D4 | `INSTALL_IN_YOUR_PROJECT.md` | UPDATE |
| D5 | `packages/frameworks/workflow-mgt/config/examples/ai-dev-kit-config.example.yaml` | CREATE |
| D6 | T01 task doc | UPDATE |
| D7 | `framework-dependency-template-enablement-instructions.md` | UPDATE |
| D8 | `greenfield-install/` mirror | UPDATE |

---

## 6. Documentation housing

| Deliverable | Canonical path | Publication |
| ----------- | -------------- | ------------- |
| IPP | `docs/implementation-cycles/IPP-E21S01T01-template-language-selection-github.md` | PUBLISHED |
| Example config | `packages/frameworks/workflow-mgt/config/examples/ai-dev-kit-config.example.yaml` | PUBLISHED |
| Adopter guides | `docs/documentation/user-docs/` | PUBLISHED |

---

## 7. Success criteria

- Adopter cloning from template can complete Step 0 without reading T02/T03/T05 docs
- `ai-dev-kit-config.yaml` shape matches T05 task doc (no schema drift)
- Release forensic grid: `v0.21.1.1+2` ↔ E21:S01:T01 ↔ changelog ↔ kanban Step 7

---

## Downstream handoff

| Task | Relationship |
| ---- | ------------- |
| **E21:S01:T05** | Read/write utilities + installer prompts using config contract from T01 |
| **E21:S01:T02/T03** | Parallel entry points; reference same example config |
| **E21:S01:T04/T06** | Consume `localisation.language` once T05 utilities exist |

---

## References

- [Epic-21.md](../project-management/kanban/epics/epic-21/Epic-21.md)
- [story-01-language-selection-at-setup.md](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup.md)
- [FR-006](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md)
- [IPW-E6S09T01](IPW-E6S09T01-greenfield-installation-fr080.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
