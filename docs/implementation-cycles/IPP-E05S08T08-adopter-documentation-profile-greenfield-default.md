---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-25T14:25:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S08:T08 — Planning: Adopter Documentation Profile Greenfield Default (IPW)

**Host Task:** [`T08-adopter-documentation-profile-greenfield-default-fr141.md`](../kanban/epics/epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md) **(E05:S08:T08)**  
**Planning for:** [FR-141](../kanban/fbu/FR-141-adopter-documentation-profile-greenfield-default.md)  
**Status:** Ready for IDW

> **IPW (Implementation Planning Workflow):** This consolidated IPP is the durable planning package for E05:S08:T08. Implementation remains gated until IDW or another explicit implementation authorization executes this plan.

---

## §1 — Requirements (Ascertained Baseline)

### §1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Greenfield application/private adopter installs must default `documentation_surfaces.adopter_public` to a git-native Markdown profile, not Docusaurus. | FR-141-F1; task AC1 |
| RF2 | The generated default must not declare a `portal/` allowlist or require a `portal/` tree unless the adopter explicitly opts into Docusaurus. | FR-141 summary; task AC1 |
| RF3 | `rc-docs-schema` must validate that the declared documentation surface is implementable on disk, including failing or blocking Docusaurus declarations without a portal tree and allowlist reference. | FR-141-F2; task AC2 |
| RF4 | Installer phase 3.5 / greenfield orchestration must scaffold a coherent docs topology that matches the selected documentation profile and produces an Install RC PASS for SBL-class private adopters. | FR-141-F3; task AC3 |
| RF5 | Docusaurus must remain an opt-in adopter-public profile for adopters that intentionally provide portal publishing infrastructure. | FR-141-F4 |
| RF6 | Preserve the FR-121 / ADR-026 model: git is the authoritative surface; Obsidian is optional editor UX, not a second source of truth. | FR-121; ADR-026; E05:S08:T07 |

### §1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Do not break ai-dev-kit maintainer repo defaults or the existing Docusaurus allowlist model for this repository. | FR-141-NF1; ADR-026 |
| RNF2 | Keep Docusaurus production scope allowlisted; do not publish maintainer or private adopter corpora accidentally. | ADR-026; ADR-024 retained sections; BR-068 |
| RNF3 | Keep installer changes mirrored into `greenfield-install/` in the same implementation change set. | P-GREENFIELD-SYNC; IPW command housing rule |
| RNF4 | Preserve non-interactive install ergonomics: defaults must work without Notion, Obsidian, or Docusaurus. | FR-121; T07; FR-141 SBL evidence |
| RNF5 | Validation failures must be explainable and actionable for adopters. | FR-141-F2; `validate_install_rc.py` role |

### §1.3 Invariants and boundaries

- **Invariants:** Git remains the documentation source of truth; Obsidian remains optional editor tooling; Docusaurus remains opt-in and allowlisted; no `portal/` requirement may appear in the private adopter default.
- **In scope:** `install_release_workflow.py` default `documentation_surfaces`, `install_greenfield_path.py` phase messaging/orchestration if needed, `validate_install_rc.py` `documentation_surfaces` semantics, schema/docs updates, tests, and greenfield mirror sync.
- **Out of scope:** Building a portal tree for every adopter, changing portal CI topology, adding mandatory Obsidian scaffolding, migrating maintainer KB content, or implementing production changes during IPW.

---

## §2 — Specification

### §2.1 Goal

Deliver a greenfield install default that reflects FR-121 / ADR-026 for private adopters: in-repo Markdown is usable immediately, optional Obsidian remains editor UX, and Docusaurus is declared only when the adopter explicitly opts into and can satisfy a portal publishing profile.

### §2.2 Specification mapping from ascertained requirements

| Spec ID | Formal specification | Covers |
| ------- | -------------------- | ------ |
| S1 | Default generated `rw-config.yaml` for application/private greenfield installs sets `documentation_surfaces.maintainer_kb.sot: git` and `documentation_surfaces.adopter_public.sot: git`; it omits `adopter_public.allowlist_ref` unless `adopter_public.sot: docusaurus`. | RF1, RF2, RF6 |
| S2 | Non-interactive installs continue to default `maintainer_editor_profile: none`; optional `obsidian-personal` / `obsidian-team` behavior from T07 remains unchanged. | RF4, RF6, RNF4 |
| S3 | A Docusaurus opt-in configuration is valid only when `adopter_public.sot: docusaurus`, `allowlist_ref` is present, and the referenced portal/allowlist path exists. | RF3, RF5 |
| S4 | `validate_install_rc.py` `documentation_surfaces` checks must validate semantic coherence, not just key presence. | RF3, RNF5 |
| S5 | Greenfield install / RC replay for an SBL-class private adopter must pass with git-native docs and no `portal/` tree. | RF4, task AC3 |
| S6 | Public docs/schema must describe both profiles: git-native default and Docusaurus opt-in with required portal infrastructure. | RF5, RNF5 |

### §2.3 Constraints

- Preserve backward tolerance for existing `rw-config.yaml` files where possible; validation may fail only when a declared surface is incoherent or cannot be implemented.
- Avoid adding a new top-level documentation source of truth.
- Do not require Docusaurus/portal test gates for docs that are not housed under `docs/guides/**` or `docs/documentation/**`.
- Any implementation touching `packages/frameworks/**` must run greenfield sync and keep `greenfield-install/` mirrored.

### §2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands under IDW for E05:S08:T08.
- **Transition trigger to COMPLETE:** Acceptance evidence is recorded for all task ACs and FR-141 functional requirements, including tests and SBL-class RC replay evidence.
- **Atomic propagation requirement:** Task doc status, linked FR-141 status/evidence, and kboard row status must update in the same implementation/release scope.
- **Owner:** Implementation execution step (not planning-only IPW creation).

### §2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | The task selects git-native adopter docs as the default while retaining Docusaurus as opt-in. |
| T2 | Reversibility | N | The implementation is reversible by changing installer defaults and validators in one follow-on task. |
| T3 | Blast radius | Y | The default affects framework installer output and downstream greenfield adopter repos. |
| T4 | Precedent | Y | Future adopter installs will treat this as the canonical documentation profile default. |
| T5 | Constraint trade-off | Y | Chooses immediate private-adopter operability over default public-site publishing. |
| T6 | Governance contract | Y | Tightens Install RC validation semantics for documentation surfaces. |
| T7 | Supersedes | N | This narrows ADR-026/T07 defaults but does not contradict them; ADR-026 should receive an explicit update note. |

**Outcome:** `REQUIRED` — update existing [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md), not a new ADR. §5 includes an ADR update row.

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | N/A | Positive triggers require ADR handling. |
| E2 | No new options | N/A | Positive triggers require ADR handling. |
| E3 | Reversible in one task | N/A | Positive triggers require ADR handling. |
| E4 | Spec elsewhere | N/A | Positive triggers require ADR handling. |
| E5 | Documented NONE | N/A | Positive triggers require ADR handling. |

---

## §3 — Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| TC1 | Installer config generation default | Add/update tests around `generate_rw_config_yaml()` so default/minimal config emits `adopter_public.sot: git` and does not emit `allowlist_ref: portal/docusaurus.config.js` unless Docusaurus is explicitly selected. Covers S1, S2. |
| TC2 | Docusaurus opt-in generation | Add a fixture/config test proving explicit Docusaurus opt-in emits `adopter_public.sot: docusaurus` with `allowlist_ref` and preserves existing portal semantics. Covers S3, S6. |
| TC3 | RC validator private adopter pass | Extend `tests/workflow_mgt/test_validate_install_rc.py` so git-native `documentation_surfaces` passes without a `portal/` tree. Covers S4, S5. |
| TC4 | RC validator Docusaurus negative path | Add a failing/blocking test where `adopter_public.sot: docusaurus` is declared with missing `portal/` or missing `allowlist_ref`; assert the `rc-docs-schema` row fails with actionable output. Covers S3, S4. |
| TC5 | Greenfield orchestration | Extend `tests/workflow_mgt/test_install_greenfield_path.py` or existing installer CLI tests to assert non-interactive greenfield dry-run/default output uses the git-native docs profile and still forwards optional editor profile flags. Covers S2, S5. |
| TC6 | Documentation/schema assertions | Add or update doc tests where available, or use focused assertions in existing installer/profile tests, so install docs mention git-native default and Docusaurus opt-in requirements. Covers S6. |
| TC7 | Greenfield mirror parity | Run `python scripts/sync_greenfield_install.py --check` after source changes; if it fails, run sync and include mirror files in the implementation change set. Covers RNF3. |

Required verification command set for IDW:

```bash
pytest tests/test_install_obsidian_editor_profile.py tests/workflow_mgt/test_validate_install_rc.py tests/workflow_mgt/test_install_greenfield_path.py -q
python scripts/sync_greenfield_install.py --check
```

Portal tests are not prescribed by this IPP because §6 does not house deliverables under `docs/guides/**` or `docs/documentation/**`.

---

## §4 — Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E05:S08:T08` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Add/adjust failing tests for installer defaults and RC validator semantics before implementation. | Red tests for TC1, TC3, TC4, and any selected TC5/TC6 coverage |
| 3 | Update `install_release_workflow.py` default config generation so private/application greenfield output uses git-native adopter docs by default and Docusaurus only when explicitly selected/configured. | Generated `rw-config.yaml` aligns with S1-S3 |
| 4 | Update `validate_install_rc.py` `documentation_surfaces` check to validate declared surface coherence: git-native passes without portal; Docusaurus requires allowlist ref and referenced path. | `rc-docs-schema` becomes semantic and actionable |
| 5 | Update `install_greenfield_path.py` phase 3.5 text/orchestration only if needed so dry-run and guided output describe the git-native default accurately. | Greenfield flow messaging matches behavior |
| 6 | Update schema and installer docs to describe git-native default, optional Obsidian editor profiles, and Docusaurus opt-in requirements. | Docs/schema deliverables D1-D4 completed |
| 7 | Update ADR-026 with a short FR-141 note: private/application greenfield defaults are git-native; Docusaurus remains opt-in when portal intent exists. | ADR deliverable D5 completed |
| 8 | Run `python scripts/sync_greenfield_install.py`; include resulting `greenfield-install/` mirror changes. | Source and greenfield mirror match |
| 9 | Run focused tests and fix failures without widening scope. | TC1-TC7 evidence recorded |
| 10 | Update FR-141 and task evidence/checklists with implementation and verification notes. | Kanban/FBU surfaces ready for RW Step 7 |
| **N** | **[MANDATORY] Reconcile task `E05:S08:T08` status** to actual implementation state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc status reflects actual state |

**RW verification / FBU wave rule (BR-097):** Any post-ship verification or FBU-closure step must prescribe **`RW E05:S08:T08 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

### §4.1 Files to create or modify

- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_install_rc.py`
- `packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py` (if messaging/orchestration needs alignment)
- `packages/frameworks/workflow-mgt/config/rw-config-schema.md`
- `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/rw-installer-quickstart-guide.md`
- `INSTALL_IN_YOUR_PROJECT.md`
- `docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md`
- `docs/kanban/fbu/FR-141-adopter-documentation-profile-greenfield-default.md`
- `docs/kanban/epics/epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md`
- `tests/test_install_obsidian_editor_profile.py`
- `tests/workflow_mgt/test_validate_install_rc.py`
- `tests/workflow_mgt/test_install_greenfield_path.py`
- `greenfield-install/packages/frameworks/workflow-mgt/**` mirror files produced by `scripts/sync_greenfield_install.py`

### §4.2 Dependency order

1. Task status transition.
2. Red tests for defaults and RC validation.
3. Installer default behavior.
4. RC semantic validation.
5. Documentation/schema updates.
6. Greenfield sync.
7. Focused test and sync verification.
8. Task/FR evidence and final status reconciliation.

### §4.3 Documentation implementation steps

1. Update schema language first so code changes have a documented target.
2. Update root installer guidance and workflow KB quickstart to match the schema.
3. Update ADR-026 with the binding default/opt-in note.
4. Update FR/task evidence after tests pass.

---

## §5 — Documentation deliverables

### §5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D1 | `packages/frameworks/workflow-mgt/config/rw-config-schema.md` | Change default adopter-public documentation surface from Docusaurus to git-native; document Docusaurus opt-in requirements. | RF1-RF5; Step 6 |
| D2 | `INSTALL_IN_YOUR_PROJECT.md` | Explain default private adopter docs profile, optional Obsidian editor profiles, and when to opt into Docusaurus. | RF1, RF4, RF5; Step 6 |
| D3 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/rw-installer-quickstart-guide.md` | Align installer quickstart phase 3.5 and examples with git-native default and Docusaurus opt-in. | RF3-RF5; Step 6 |
| D4 | `docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md` | Add FR-141 update note for greenfield private/application adopter default and Docusaurus opt-in. | §2.5; Step 7 |
| D5 | `docs/kanban/fbu/FR-141-adopter-documentation-profile-greenfield-default.md` | During IDW/RW, add implementation evidence and status/checklist updates. | RF1-RF6; Step 10 |
| D6 | `docs/kanban/epics/epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md` | During IDW/RW, maintain status, evidence, IPP link, and final version marker. | §2.4; Steps 1 and N |

### §5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D7 | `docs/implementation-cycles/IPP-E05S08T08-adopter-documentation-profile-greenfield-default.md` | Consolidated IPW planning package for this task. | IPW Phase 7 |

### §5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Separate adopter-public portal guide | NONE — this task does not add a `docs/guides/**` or `docs/documentation/**` deliverable; Docusaurus remains opt-in and existing portal governance remains unchanged. |
| Separate Obsidian guide | NONE — T07 already owns optional Obsidian editor profile behavior; this task references it but does not change profile mechanics unless tests reveal stale wording. |
| New ADR | NONE — update existing ADR-026 per §2.5 rather than creating a new ADR. |
| Maintainer KB migration docs | NONE — FR-121 wave 1/2 content remains governing; this task only adjusts greenfield default semantics. |

---

## §6 — Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D1 | `packages/frameworks/workflow-mgt/config/rw-config-schema.md` | NOT_APPLICABLE | Framework config reference, not Docusaurus-published by this task. | evergreen | Link from D2/D3 if useful. |
| D2 | `INSTALL_IN_YOUR_PROJECT.md` | NOT_APPLICABLE | Root GitHub-rendered installer guide; not under portal allowlist. | evergreen | Link from task doc and release notes as applicable. |
| D3 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/rw-installer-quickstart-guide.md` | NOT_APPLICABLE | Framework KB/developer guide; mirrored to greenfield install, not portal-published by this task. | evergreen | Link from D2 or schema if useful. |
| D4 | `docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md` | PUBLISHED | GitHub-rendered binding ADR. | evergreen | FR-141 and task references already point to ADR-026; add update note in ADR history/body. |
| D5 | `docs/kanban/fbu/FR-141-adopter-documentation-profile-greenfield-default.md` | NOT_APPLICABLE | Kanban/FBU source of truth. | proposed | Link to final release evidence during RW Step 7. |
| D6 | `docs/kanban/epics/epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md` | NOT_APPLICABLE | Kanban task source of truth. | evergreen | Already linked to this IPP under Input and References by IPW. |
| D7 | `docs/implementation-cycles/IPP-E05S08T08-adopter-documentation-profile-greenfield-default.md` | NOT_APPLICABLE | Planning package; GitHub-rendered from repo, not portal-published. | evergreen | Host task Input and References. |

**Housing rules:** No new top-level directories. Package docs and scripts must be mirrored into `greenfield-install/` through the existing sync workflow.

---

## §7 — Success / verification criteria

- [ ] Task status transition step executed first under IDW, with `Last updated` refreshed.
- [ ] Default generated `rw-config.yaml` uses git-native adopter docs and does not require `portal/`.
- [ ] Explicit Docusaurus opt-in remains possible and requires coherent portal/allowlist configuration.
- [ ] `rc-docs-schema` passes for SBL-class private adopter git-native docs and blocks incoherent Docusaurus declarations.
- [ ] Installer docs/schema/ADR updates in §5 are completed or explicitly deferred with reason.
- [ ] Focused tests pass:

```bash
pytest tests/test_install_obsidian_editor_profile.py tests/workflow_mgt/test_validate_install_rc.py tests/workflow_mgt/test_install_greenfield_path.py -q
```

- [ ] Greenfield mirror check passes:

```bash
python scripts/sync_greenfield_install.py --check
```

- [ ] `greenfield-install/` mirrors any touched `packages/frameworks/workflow-mgt/**` files.
- [ ] No portal-specific test gate is required unless implementation adds deliverables under `docs/guides/**` or `docs/documentation/**`; if it does, add and run `pytest tests/test_portal_br068_monorepo_links.py tests/test_portal_fr114_allowlist.py -q`.
- [ ] Final status reconciliation records actual state (`COMPLETE`, `IN PROGRESS`, or `BLOCKED`) and evidence in the task doc and FR-141.

---

## References

- Host task: [`E05:S08:T08`](../kanban/epics/epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md)
- Upstream FR: [FR-141](../kanban/fbu/FR-141-adopter-documentation-profile-greenfield-default.md)
- Program FR: [FR-121](../kanban/fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- Prior wave: [E05:S08:T07](../kanban/epics/epic-05/story-08-knowledge-base/T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md)
- Governing ADR: [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
- IPW command: [`.claude/commands/ipw.md`](../../.claude/commands/ipw.md)
- IPW ADR checklist: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
