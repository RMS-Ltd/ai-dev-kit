# Greenfield, Brownfield, and the Third Path: What ADK Can Learn from How Other Frameworks Onboard Mature Projects

**Type:** Adopter feedback — synthesis report (blog format) · **PRIMARY** attempt 09 package document  
**Reporter:** Starborn Legacy (`starborn_legacy`) — FR-079 attempt 09  
**Intake:** [ai-dev-kit #52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)  
**Related:** [ai-dev-kit #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) (attempt 08 kanban migration)  
**Date:** 2026-06-14 (research) · 2026-06-15 (submitted)  
**ADK pin:** `v0.4.1164`  
**Programme:** E06:S09 install RC  
**Audience:** ADK maintainers, install programme owners, mature adopters

> **Why this file is in `docs/`:** The full attempt 09 feedback package lives under `logs/attempt-09/feedback-package/` (gitignored per FR-079). This is a **committed mirror** of the primary synthesis document so maintainers can ingest it without adopter-side log access.

---

## Executive summary

Mature adopters adopting ADK face a choice that ADK does not yet document: **brownfield in-place install** vs **greenfield platform shell + selective migration**. Industry practice shows this is a **false binary** — the dominant pattern for messy estates is a **third path** (SAP Selective Data Transition / “Bluefield”, Fowler Strangler Fig, Terraform import): fresh platform authority with selective carry-over of legacy assets.

Starborn Legacy ran both paths across three attempts:

| Attempt | Path | Outcome |
|---------|------|---------|
| **07** | Greenfield install | Partial PASS — sign-off friction |
| **08** | Brownfield in-place KMA + agent mapping | **FAIL** — abandoned ([#51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51)) |
| **09** | **Arm B:** greenfield shell + operator-authored KMA | Migration **PASS**; Install RC **~50% FAIL** (kit gaps) |

**Strategic conclusion:** For git-versioned messy repos, **default to greenfield shell + migration** — but only after kit Phase 0 (sqlite, docs schema, layered orchestrator, kit-owned KMA). **Brownfield must still be validated** on fynd.deals and Confidentia (Arm A). Path choice was **confounded** in attempt 09: Arm B content migration succeeded while install orchestrator omitted sqlite, UKW, and documentation schema.

---

## The research question

> **When facing mature adopter repositories, which is more effective: brownfield ADK install (in place), or greenfield ADK shell followed by migration of established content (KMA)?**

**Effectiveness** = shared **Install RC checklist** pass rate — not product delivery velocity.

### Hypotheses (UXR experiment)

| ID | Statement | Attempt 09 evidence |
|----|-----------|-------------------|
| **H1 (Arm B)** | Greenfield shell + migration → cleaner ADK shape, fewer validator failures | **Partial support** — kanban v4 strict PASS; install RC still ~50% |
| **H0 (Arm A)** | Brownfield → faster install-complete, less dual-tree confusion | **Not yet tested** — fynd.deals, Confidentia pending |
| **Null** | Path choice matters less than **kit completeness** | **Strong support** — sqlite, docs, UKW, KMA tooling gaps blocked RC |

Formal experiment spec: `UXR-ADK-install-path-experiment.md` (package).

---

## What we have learned (consolidated)

### From Starborn attempts 07–09

1. **Install greenfield is survivable; legacy in-place migration with an agent is not** (attempt 08) — undocumented duplicate core/ancillary epic topics caused agents to propose contradictory trees until the adopter abandoned the session ([#51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51)).

2. **Greenfield shell + migration can succeed** (attempt 09) when: git preserves legacy in archive; PM layer is reset; target epic/story tree is **operator-authored before KMA**; domain band starts at E30 with reserved slots; megastories are dismantled not imported wholesale.

3. **Sign-off PASS ≠ install-complete** — attempt 09 achieved 7 READY / 0 NOT READY while release authority remained legacy YAML, UKW cursorrules were missing, and documentation schema was absent.

4. **“Restore ≠ migrate”** — verbatim copy from archive to `docs/project-management/kanban/` is not structural KMA. Adopters need explicit “not performed” lists in install completion summaries.

5. **~6 ad-hoc Python scripts** for KMA/UKW is unacceptable at RC — kit must own migration tooling (`C5` checklist row).

6. **Default install pattern for messy mature repos with full git history should be Arm B** — but only as a **named third path** (“shell + selective migration”), not mislabelled “greenfield” on an empty repo.

7. **Brownfield (Arm A) remains mandatory** — without fynd.deals and Confidentia data, ADK will over-fit to SBL’s mess.

### From cross-industry web research

8. **Big-bang rewrites fail often** — hidden business logic lives in the old system; incremental upgrade beats rewrite 5–10× on cost/risk (Rails, Django practitioners).

9. **“Incremental” includes shell + phased migration** — not only in-place edits. SAP SDT, Terraform import, and Angular “new project + port” are official escape hatches when in-place retrofit is uneconomical.

10. **Strangler Fig is the coexistence contract** — facade → coexist → eliminate. ADK adopters in dual-tree periods must time-box and block install-complete until a single canonical `kanban_root`.

11. **Git changes the risk calculus** — archive + working-tree reset is safe when history is versioned; shell+migration becomes cheaper than years of dual conventions (Epic-15 vs E01, YAML vs sqlite).

12. **Frameworks publish decision matrices** — SAP SDT, Rails upgrade guides, Nx `init` docs all say *when* to use which path. ADK should ship an **Adopter Path Selector** at RC, not one buried golden path.

---

## Attempt lineage: 07 → 08 → 09

```text
attempt 07  Greenfield install (v0.4.1161)
            └─ PARTIAL PASS — sign-off 4 READY / 1 NOT READY

attempt 08  In-place legacy kanban → full ADK struct (agent-assisted)
            └─ FAIL — abandoned; #51 filed
               • Duplicate E09/E15 Security, E08/E14 Testing, etc.
               • No LEGACY_KANBAN_MIGRATION.md
               • Agent slot-filling, E01/E02 conflation
               • TARGET-ES-TREE-AGREED.md converged but NOT implemented

attempt 09  Arm B: wipe PM layer → greenfield vendor → KMA → UKW
            └─ KMA PASS; Install RC ~50% FAIL; #52 filed
               • TARGET-ES-TREE-E30-RATIONALISED.md implemented
               • Canonical docs/kanban/; legacy PM read-only
               • 4 RWs on legacy YAML (sqlite gap discovered post-hoc)
```

---

## Industry reality: three patterns, not two

| Pattern | Industry name | What it means |
|---------|---------------|---------------|
| **Brownfield** | In-place / lift-and-shift / renovate | Tooling wraps live repo; incremental hops |
| **Greenfield** | New implementation / blank sheet | Clean scaffold; migrate content later |
| **Hybrid / selective** | SAP **Bluefield** / SDT, **Strangler Fig**, Terraform **import** | Fresh **platform shell** + selective legacy carry-over |

**SBL Arm B** = hybrid: wipe PM/docs layer, install ADK greenfield, archive `docs-pre-ai-dev-kit/`, KMA into canonical trees. Same class as:

- **SAP Shell Conversion** — new S/4 shell; selective config/data ([SAP SDT](https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html))
- **Terraform import** — new IaC workflow; existing resources under `import` blocks ([HashiCorp](https://developer.hashicorp.com/terraform/tutorials/state/state-import))
- **Strangler Fig** — new grows around old until old dies ([Fowler](https://martinfowler.com/bliki/StranglerFigApplication.html), [AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-decomposing-monoliths/strangler-fig.html))

**ADK implication:** Name this **“selective adoption”** or **“shell + KMA”** — not “greenfield” on an empty repo.

---

## How other frameworks handle mature adopters

### Brownfield in-place — when already on-framework

| Framework | Pattern | Key takeaway | ADK analogue (Arm A) |
|-----------|---------|--------------|----------------------|
| **Ruby on Rails** | One minor version at a time; **dual-boot** (`bootboot`, `Gemfile.next`) | Rewrite 5–10× cost of incremental upgrade ([analysis](https://deltasystems.com/is-it-worth-upgrading-legacy-rails-codebase-in-2026/)) | `install_release_workflow.py` in place; `import_legacy.py`; incremental UKW |
| **Django** | **Dual-version compatibility** — code runs on old+new before flip; LTS hops 3.2→4.2→5.2 | Rewrites fail on hidden domain logic ([Webbyfox](https://www.webbyfox.co.uk/blog/django-monolith-to-async/)) | Brownfield when kanban topology already matches v4 |
| **Nx** | **`nx init`** on existing repo — graph/caching without breaking scripts ([docs](https://nx.dev/docs/getting-started/start-with-existing-project)) | Wrap first, restructure later | `scripts_path` bridge; lean vendor (FR-110) |

**When Arm A wins:** already on-framework; continuity-critical; manageable debt; CI enables safe hops. **Candidates:** fynd.deals, Confidentia.

### Greenfield shell + migration — when drift is large

| Framework | Pattern | Key takeaway | ADK analogue (Arm B) |
|-----------|---------|--------------|----------------------|
| **Angular** | `ng update` in-place OR **new CLI project + port** for large gaps ([update guide](https://angular.dev/update-guide)) | Official escape hatch when in-place uneconomical | `install_kanban_framework.py --mode fresh` + KMA |
| **Terraform** | **`import`** into new state — workflow new, assets old ([import blocks](https://developer.hashicorp.com/terraform/language/import/single-resource)) | Authority moves to new layer | `.adk/release-state.db` + `import_legacy.py` from YAML |
| **SAP S/4HANA** | Three-way: Brownfield / Greenfield / **Selective Data Transition** ([TeamIdea](https://teamideagroup.com/blog/for_clients/sap-s-4hana-migration-brownfield-greenfield-and-selective-data-transition-sdt-bluefield/)) | SDT = mix-and-match OR shell conversion | Operator tree + KMA; domain E30+ |

**When Arm B wins:** legacy topology wrong for ADK; validators require v4/sqlite/docs schema; full git history; brownfield → permanent dual conventions.

### Strangler Fig — when you cannot stop the world

Fowler’s three phases: **Facade** → **Coexist** → **Eliminate** ([Original Strangler Fig](https://martinfowler.com/bliki/OriginalStranglerFigApplication.html)).

**SBL dual-tree period:** `docs/kanban/` canonical + `docs/project-management/kanban/` read-only legacy. Failure mode: never completing **eliminate**.

**Hybrid modernization consensus** ([Particle41](https://particle41.com/insights/strangle-monolith-or-rewrite/)): extract critical path → build new foundation in parallel → rewrite non-critical cleanly → flip when validated. Not pure strangle or pure rewrite.

**Byteager default** ([rewrite vs refactor](https://byteager.ca/blog/rewrite-vs-refactor-legacy-software)): neither full rewrite nor endless refactor — **strangler-fig migration** is the pragmatic default for legacy escape.

---

## SAP three-way decision (reference model for ADK)

SAP publishes explicit criteria ([SDT engagement](https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html)):

| Approach | When | Trade-off |
|----------|------|-----------|
| **Brownfield** (system conversion) | Continuity, speed, lift existing | Carries forward debt |
| **Greenfield** (new implementation) | Full redesign, best practices | Cost, timeline, disruption |
| **SDT / Bluefield** | Selective reuse + targeted redesign | Requires decision matrix discipline |

ADK should publish the same level of formality — not one path in `INSTALL_IN_YOUR_PROJECT.md`.

---

## Mapping to the ADK three-repo experiment

| Repo | Arm | Industry analogue | Procedure |
|------|-----|-------------------|-----------|
| **starborn_legacy** | B | SAP SDT / Terraform import / Angular port | Wipe PM → greenfield → KMA |
| **fynd.deals** | A | Rails dual-boot / Nx init | In-place installers |
| **Confidentia** | A | Django LTS hop | In-place; governance preserved |

**Programme sequencing:**

```text
Phase 0 — Kit fixes (path-agnostic): sqlite, docs schema, orchestrator, UKW
Phase 1 — SBL attempt 10 (Arm B validation)
Phase 2 — Brownfield recon (fynd.deals, Confidentia)
Phase 3 — Brownfield full attempts (Arm A)
Phase 4 — Synthesis → Adopter Path Selector at RC
```

---

## Starborn attempt 09 — evidence summary

**Context:** Post-wipe greenfield; archive `docs-pre-ai-dev-kit/`; pin `v0.4.1164`; HEAD `7a08a906`.

| Phase | Result |
|-------|--------|
| Vendor preflight | PASS |
| Greenfield orchestrator | PARTIAL — no sqlite, UKW, docs schema |
| Sign-off | 7 READY / 0 NOT READY |
| KMA (manual) | PASS — v4, E30–E40, megastories dismantled |
| Install RC checklist | ~50% blocking FAIL |
| Release authority | LEGACY YAML — 4 RWs to v0.9.4 |

**KMA success factors:** operator-authored `TARGET-ES-TREE-E30-RATIONALISED.md`; v4 fresh scaffold; synthesise scripts; validators strict PASS.

**Install failure factors (kit):** sqlite not in orchestrator; Docusaurus default for app adopter; UKW cursorrules missing; KMA not kit-owned.

**Friction incident:** “restore / 19 epics restored” read as migration complete — was verbatim copy only. Comprehension test FAIL.

---

## Kit gaps (Phase 0 — both arms)

1. **SQLite before first RW** — mode C defaults legacy YAML; production = `.adk/release-state.db` ([FB sqlite](logs path: `FB-ADK-greenfield-sqlite-before-rw.md`))

2. **Documentation end-schema** — no maintainer KB scaffold; wrong `adopter_public.sot` ([FB docs schema](logs path))

3. **Layered orchestrator** — not single `mode C` blob:

```text
0 vendor + venv → 1 rw-config skeleton → 2 sqlite → 3 RW → 3½ docs schema
→ 3c UKW → 4 kanban fresh → 5 KMA → 6 sign-off → 7 first RW
```

4. **Workflow tiers (FR-110):** A vendor-resident / B consumer-wired / C operational — lean greenfield does not copy `workflows/` to root.

---

## Proposed Adopter Path Selector (ADK RC deliverable)

### Path 1 — Brownfield in-place (Arm A)
**For:** structurally aligned repos; production tags; continuity-critical.  
**Procedure:** installers in place; `import_legacy.py`; incremental path fixes.  
**Comparators:** Rails dual-boot, Nx init, Django LTS hop.

### Path 2 — Greenfield shell + selective migration (Arm B) — **default for messy mature + git**
**For:** PM/KB/kanban drift; validator failures in-place.  
**Procedure:** archive legacy → lean vendor → layered orchestrator → kit KMA → eliminate dual-tree → RW after sign-off.  
**Comparators:** SAP SDT, Terraform import, Angular new project + port.

### Path 3 — Strangler coexist (sub-mode)
**For:** cannot wipe PM yet.  
**Rules:** declare canonical root immediately; read-only archive + redirect; C2 blocks install-complete until single root; **eliminate** mandatory.

### Cross-cutting (all paths)
- SQLite before first RW
- ADK-owned documentation schema (application vs framework profile)
- Install RC checklist as sign-off input
- Kit-owned KMA (C=0 ad-hoc scripts at RC)
- Comprehension test: one sentence for kanban root, docs root, version truth

---

## Strategic conclusion

**Greenfield shell + selective migration is a credible default** for mature git-versioned adopters — industry-standard hybrid, not an SBL hack.

**Brownfield must remain in the programme** — Arm A data from fynd.deals and Confidentia prevents over-fitting.

**Immediate priority: kit Phase 0** — attempt 09 proved content migration can succeed while install path fails RC on authority, documentation, and tooling.

**ADK at RC should ship:** golden paths + decision matrix + layered orchestrator + Install RC checklist + three-repo evidence.

---

## Package cross-references

| Artifact | Role |
|----------|------|
| `UXR-ADK-install-path-experiment.md` | Formal research design + checklist |
| `FB-ADK-greenfield-sqlite-before-rw.md` | SQLite ordering |
| `FB-ADK-canonical-maintainer-documentation-schema.md` | Docs end-schema |
| `FB-ADK-optimal-greenfield-install-sequence.md` | Layered install |
| `ISSUE-51-ATTEMPT-08-FOLLOWUP.md` | #51 AC re-score |
| `attempt-09-scorecard.json` | Arm B metrics |
| `greenfield-install-diary.md` | Full narrative |

**Package root (adopter):** `logs/attempt-09/feedback-package/`  
**Git mirror (this file):** `docs/adk-feedback/attempt-09/`

---

## References (web research)

### Brownfield / incremental
- [Fastruby — upgrade in increments](https://www.fastruby.io/blog/can-you-upgrade-in-increments.html)
- [Acquaintsoft — Django dual-version upgrade](https://acquaintsoft.com/blog/django-version-upgrade-strategy)
- [Django Stars — version update guide](https://djangostars.com/blog/how-to-update-the-django-version-a-step-by-step-guide-to-hassle-free-upgrades/)
- [Webbyfox — Django monolith modernization](https://www.webbyfox.co.uk/blog/django-monolith-to-async/)
- [Nx — start with existing project](https://nx.dev/docs/getting-started/start-with-existing-project)
- [Delta Systems — Rails upgrade vs rewrite](https://deltasystems.com/is-it-worth-upgrading-legacy-rails-codebase-in-2026/)

### Greenfield shell + migration
- [Angular update guide](https://angular.dev/update-guide)
- [Terraform import blocks](https://developer.hashicorp.com/terraform/language/import/single-resource)
- [Terraform state import tutorial](https://developer.hashicorp.com/terraform/tutorials/state/state-import)

### Hybrid / strangler / rewrite debate
- [Martin Fowler — Strangler Fig Application](https://martinfowler.com/bliki/StranglerFigApplication.html)
- [Martin Fowler — Original Strangler Fig](https://martinfowler.com/bliki/OriginalStranglerFigApplication.html)
- [AWS — Strangler fig](https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-decomposing-monoliths/strangler-fig.html)
- [Microsoft Azure — Strangler fig](https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig)
- [SAP — Selective Data Transition](https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html)
- [TeamIdea — S/4HANA migration approaches](https://teamideagroup.com/blog/for_clients/sap-s-4hana-migration-brownfield-greenfield-and-selective-data-transition-sdt-bluefield/)
- [Syniti — SDT primer](https://blog.syniti.com/migrating-to-sap-s/4hana-a-primer-on-the-selective-data-transition-approach)
- [SAP PRESS — Selective Data Transition](https://blog.sap-press.com/what-is-selective-data-transition-for-sap-s4hana)
- [Byteager — rewrite vs refactor](https://byteager.ca/blog/rewrite-vs-refactor-legacy-software)
- [Particle41 — strangle vs rewrite hybrid](https://particle41.com/insights/strangle-monolith-or-rewrite/)

---

*Starborn Legacy · FR-079 attempt 09 · Primary synthesis for E06:S09 · [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)*
