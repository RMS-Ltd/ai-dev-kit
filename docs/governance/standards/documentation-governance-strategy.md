---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T12:50:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: documentation-governance-strategy
  type: standard
  domain:
    primary: documentation
    secondary: ["governance", "workflows", "templates"]
  audience: ["agents", "maintainers", "story-owners"]
  applies_to:
    documents:
      - "docs/governance/**"
      - "docs/implementation-cycles/**"
      - "docs/kanban/**"
      - "packages/frameworks/**/templates/**"
      - "packages/frameworks/**/KB/**"
    activities:
      - "ipw"
      - "idw"
      - "rw"
      - "ukw"
      - "intake"
      - "kma"
  key_rules:
    - id: DGS-R1
      summary: "Use the doc taxonomy to choose artifact class before authoring."
      must_level: MUST
      when_applies: ["new documentation", "template selection"]
    - id: DGS-R2
      summary: "Numbered section headings in governance-class docs use § prefix (e.g. ## §1 — Purpose)."
      must_level: MUST
      when_applies: ["policy", "standard", "ipp", "icw", "vwmp-sop"]
    - id: DGS-R3
      summary: "Cross-references to sections use §N or §N–§M in prose."
      must_level: SHOULD
      when_applies: ["cross-references"]
    - id: DGS-R4
      summary: "On conflict, follow the resolution ladder; update authoritative surface, not IDE scratch."
      must_level: MUST
      when_applies: ["conflicting documentation"]
  decision_criteria:
    - id: DGS-DC1
      question: "Is this binding normative rules or procedural steps?"
      yes_action: "Policy or Standard (rules) vs SOP (procedure in vwmp/commands)."
      no_action: "Guide/Reference (advisory)."
---

# Documentation governance strategy

**Status:** Active  
**Version:** 1.0.0  
**Task:** [E05:S02:T07](../../kanban/epics/epic-05/story-02-documentation-maintenance-framework/T07-unified-documentation-governance-strategy-fr139.md) · [FR-139](../../kanban/fr-br/FR-139-unified-documentation-governance-strategy.md)

**Purpose:** Single **composition index** for documentation governance — links authoritative siblings; does not duplicate their substantive rules.

---

## §1 — Doc taxonomy

| Class | Binding? | Answers | Typical location |
| ----- | -------- | ------- | ---------------- |
| **Policy** | MUST | What must be true | `docs/governance/`, `packages/frameworks/*/policies/` |
| **Standard** | MUST | Shape, naming, format | `docs/governance/standards/`, this doc |
| **SOP** | MUST (procedure) | How to execute a workflow | `vwmp/*-agent-execution.md`, `.claude/commands/` |
| **Template** | MUST (structure) | Where content goes | `packages/frameworks/*/templates/` |
| **Guide / Reference** | Advisory | How to understand or troubleshoot | `docs/guides/`, `docs/knowledge/` |
| **ADR** | MUST (decision) | Why a decision was made | `docs/architecture/standards-and-adrs/` |

**Alignment:** Policy states rules → Standard instantiates shape → Template blanks structure → SOP walks execution → Validators enforce policy/standard where automated.

---

## §2 — Documentation surfaces

Authoritative layout: [DOCUMENTATION_SCHEMA.md](DOCUMENTATION_SCHEMA.md) · [ADR-024](../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md) · [ADR-026](../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md).

| Surface | Audience | Authority |
| ------- | -------- | --------- |
| **Adopter-public** | External consumers | Docusaurus allowlist; [adopter-public-documentation-authoring.md](adopter-public-documentation-authoring.md) |
| **Maintainer KB** | Maintainers, agents | Git (`docs/knowledge/`, `docs/maintenance/`, `docs/analysis/`) |
| **Workflow SoT** | Release, kanban, governance | `docs/kanban/`, `docs/governance/`, binding ADRs, changelogs |

**Legacy note:** [ultimate-canonical-kb-structure.md](../../architecture/standards-and-adrs/ultimate-canonical-kb-structure.md) is **superseded** by `DOCUMENTATION_SCHEMA.md` for ai-dev-kit book workspace layout.

---

## §3 — Section-heading convention (§)

| Use | Format | Example |
| --- | ------ | ------- |
| **Numbered headings** | `§` in heading text | `## §1 — Purpose`, `### §2.3 — Matrix` |
| **Cross-references** | `§N` or `§N–§M` in prose | “Complete §5 before §6 in IPW.” |

**Default surfaces:** maintainer/workflow SoT (this tree, `docs/implementation-cycles/`, framework KB, vwmp SOPs, IPP/ICW).

**Adopter-public:** § allowed when portal renders correctly; otherwise spell out “Section N” on that surface only ([adopter-public-documentation-authoring.md](adopter-public-documentation-authoring.md)).

**Templates:** [PLAN_DOC_TEMPLATE.md](../../../packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md) uses §-prefixed numbered sections (FR-139-F10).

---

## §4 — Workflow ↔ artifact matrix

| Workflow | Durable artifacts | Template(s) | Enforcing policy / SOP | Validators (sample) |
| -------- | ----------------- | ----------- | ------------------------ | ------------------- |
| **IPW / IDW** | IPP or ICW trio + task links | `PLAN_DOC_TEMPLATE.md` | [specification-and-planning-artifacts-policy.md](specification-and-planning-artifacts-policy.md) | IPW gate (FR-083) |
| **RW** | Changelog, kanban Step 7 surfaces | kanban templates | [kanban-governance-policy.md](../kanban/kanban-governance-policy.md), [changelog-archival-policy.md](changelog-archival-policy.md) | `validate_version_bump.py`, Step 7 four-surface |
| **UKW** | Task/story/epic/board sync | `EPIC/STORY/TASK_TEMPLATE` | kanban-governance-policy | `validate_active_kanban_board.py` |
| **Intake (FR/BR/UXR)** | FBU doc + task (atomic) | `FR/BR/UXR_TEMPLATE` | [FR_BR_INTAKE_GUIDE.md](../../../packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md) | KG-R2 intake |
| **KMA** | `migration-proposal.md`, kanban tree | KMA guides | [ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md](../../../packages/frameworks/kanban/guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md) | `validate_install_rc.py` |
| **Adopter-public edit** | Portal-safe markdown | guide templates | adopter-public-documentation-authoring | portal pytest (BR-068) |
| **CMW** | Changelog archive hygiene | — | changelog-archival-policy | `check_changelog_size.py` |

---

## §5 — Conflict-resolution ladder

On conflict, **update the higher row**; never treat IDE-local plans as SoT.

| Priority | Artifact |
| -------- | -------- |
| 1 | Kanban **task doc** |
| 2 | Linked **FR / BR / UXR** |
| 3 | **IPP / ICW** under `docs/implementation-cycles/` |
| 4 | **Governance standard / policy** (this tree) |
| 5 | **Architecture mirror** (bannered copies) |
| 6 | **IDE scratch** (`~/.cursor/plans/`) — transient only |

Extended planning ladder: [specification-and-planning-artifacts-policy.md](specification-and-planning-artifacts-policy.md) §1.

---

## §6 — Maintenance and enforcement index

| Topic | Authoritative doc |
| ----- | ----------------- |
| Accuracy, ownership, review | [documentation-maintenance-policy.md](../../architecture/standards-and-adrs/documentation-maintenance-policy.md) |
| Lifecycle metadata | [doc-lifecycle-policy.md](../../architecture/standards-and-adrs/doc-lifecycle-policy.md) |
| Policy salience (machine-readable) | [policy-salience-schema.md](../../architecture/standards-and-adrs/policy-salience-schema.md) |
| IPW vs ICW packaging | [dev-kit-ipw-ipp-vs-icw-artifacts.md](dev-kit-ipw-ipp-vs-icw-artifacts.md) |
| Versioning | [dev-kit-versioning-policy.md](dev-kit-versioning-policy.md) |

**Framework SoT:** Package policies under `packages/frameworks/` remain adopter-authoritative; book copies may mirror with banner (ADR-023 pattern).

---

## §7 — Related work

- [FR-139](../../kanban/fr-br/FR-139-unified-documentation-governance-strategy.md) · [IPP-E05S02T07](../../implementation-cycles/IPP-E05S02T07-unified-documentation-governance-strategy-fr139.md)
- [FR-101](../../kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md) — `docs/governance/` topology
