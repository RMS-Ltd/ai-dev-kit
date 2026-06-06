---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E10:S01 — Document Lifecycle Package Expectations Baseline

**Package:** `packages/frameworks/doc-lifecycle/`  
**Adopter mirror:** `greenfield-install/packages/frameworks/doc-lifecycle/` (FR-110)  
**Authoritative SoT for:** E10:S01:T02–T06 RC review waves  
**Structural precedent:** [E02:S13:T01 expectations baseline](../../epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md)  
**Host task:** [E10:S01:T01](T01-establish-expectations-baseline-for-document-lifecycle-packa.md)

---

## Core Operating Principles

**Package Purpose:**
- Standalone framework for managing Knowledge Base (KB) document lifecycle with TTL-based expiration and automated housekeeping
- Prevents documentation bloat while preserving evergreen content and audit-trail evidence
- Agent-driven lifecycle management with explicit classification rules and protection boundaries

**Modularity & Independence:**
- **Standalone Usage:** Package can be used completely independently without requiring other `ai-dev-kit` packages
- **Hard Dependencies:** None — pure documentation/policy package
- **Soft Dependencies:** Kanban package (optional), Workflow Management package (optional)
- **Independence Score:** 10/10 — No runtime dependencies

**Copy vs Reference Pattern:**
- **CRITICAL: Copy, Don't Reference** — Projects must copy this package into their repository, not link to it
- **Why Copy:** Projects need to customize lifecycle defaults, TTL values, housekeeping policies, and KB paths
- **Customization Boundaries:**
  - ✅ **CAN customize:** Lifecycle defaults, TTL values, housekeeping policies, KB paths, project-specific examples
  - ❌ **MUST keep:** Metadata schema (five required fields), lifecycle enum values (`evergreen` | `timeboxed` | `transient`), protection rules

**Adopter Distribution (FR-110):**
- Delivered inside lean vendor tree at `greenfield-install/packages/frameworks/doc-lifecycle/` as part of `packages/frameworks/` bundle
- Parity surface for downstream T02–T06 inventory and integration alignment

**Repo-Level Cross-Reference:**
- `.cursorrules` Document Lifecycle Management section mirrors package metadata schema for agent enforcement in this repo
- Package policies under `packages/frameworks/doc-lifecycle/policies/` are the package SoT; repo architecture ADRs under `docs/architecture/standards-and-adrs/` are a separate surface (T04 cross-check)

---

## Expected Lifecycle Behaviors

### Lifecycle Classification

Documents are classified by intended persistence:

| Lifecycle | Purpose | Default TTL | Default Housekeeping |
| --------- | ------- | ----------- | -------------------- |
| **Evergreen** | Permanent, canonical documentation (standards, ADRs, Kanban Epics/Stories) | `null` | `keep` |
| **Timeboxed** | Temporarily useful; archive after period (design spikes, analysis docs) | `90` days | `archive` |
| **Transient** | Operational scratch; delete after period (renumbering plans, implementation sequences) | `14` or `30` days | `delete` |

**Default-to-Evergreen Rule:** When in doubt, classify as `evergreen`. Explicitly temporary documents (renumbering plans, one-time sequences) should be marked `transient` from creation.

### Metadata Schema (Five Required Fields)

All KB documents **MUST** include frontmatter:

```yaml
---
lifecycle: evergreen | timeboxed | transient
ttl_days: <integer> | null
created_at: <ISO 8601 datetime>
expires_at: <ISO 8601 datetime> | null
housekeeping_policy: keep | archive | delete
---
```

**Agent obligations on creation:**
1. Identify document type from context (task description, file path, content)
2. Map to lifecycle using classification rules
3. Apply defaults for `ttl_days` and `housekeeping_policy`
4. Set `created_at` to current UTC time
5. Calculate `expires_at` from `created_at + ttl_days`
6. Include all metadata in front-matter

### TTL-Based Expiration

- `ttl_days: null` — No expiration (evergreen)
- `ttl_days: 90` — Expires after 90 days (timeboxed default)
- `ttl_days: 14` — Expires after 14 days (transient default for renumbering plans)
- `ttl_days: 30` — Expires after 30 days (transient default for implementation sequences)

### Reference-Aware Cleanup

Documents **MUST NOT** be deleted if referenced from:
1. Links from `lifecycle: evergreen` documents
2. References in released changelogs
3. Git commit history (always preserved via git)

**Action:** Auto-upgrade `housekeeping_policy` to `archive` if references found (never delete referenced docs).

### Protection Rules

- Evergreen docs are never deleted or archived
- Evidence-of-completed-work transient docs **SHOULD** be archived, not deleted
- Lifecycle promotions/demotions **MUST** be explicit and logged (changelog or Story notes)

### Housekeeping Process (Manual Until Workflow Exists)

**Scan → Filter → Analyze References → Determine Action → Execute → Log**

1. Walk `docs/**` and parse front-matter
2. Find documents where `lifecycle in {timeboxed, transient}` AND `expires_at <= now()`
3. Search for links/back-references; check evergreen docs and changelogs
4. If referenced → auto-upgrade to `archive`; else apply `housekeeping_policy`
5. Delete (or move to `docs/_graveyard/`) or archive to `docs/Archive/{original_path}`
6. Log housekeeping actions in changelog

**Frequency:** Weekly (many temp docs), monthly (fewer), or as needed.

### Policy Salience (Extended Metadata)

Package `docs/` includes policy salience guidance for agent-parseable policy frontmatter:
- `docs/policy-salience-guide.md` — Author guide for `policy_salience` YAML sections
- `docs/policy-salience-agent-parser.md` — Agent parser expectations
- `templates/POLICY_SALIENCE_TEMPLATE.md` — Template for policy salience blocks

Deep validation of salience schema adoption in repo is deferred to T03.

---

## Integration Expectations

### With Kanban Package

**Integration Points:**
- Kanban Epics/Stories can include lifecycle metadata for housekeeping
- Default classification for Kanban docs: `evergreen` (`ttl_days: null`, `housekeeping_policy: keep`)
- Rare exception: temporary planning Stories may use `timeboxed` with 90-day TTL
- Kanban docs should **never** be `transient`

**Dependency:** Soft (optional) — Kanban works standalone without lifecycle management

**See:** `packages/frameworks/doc-lifecycle/integration/kanban-integration.md`

### With Workflow Management Package

**Integration Points:**
- RW and other workflows **SHOULD** set lifecycle metadata when creating KB documents
- Document-type mapping when RW creates docs:
  - Renumbering plans → `transient`, `ttl_days: 14`, `housekeeping_policy: delete`
  - Analysis documents → `timeboxed`, `ttl_days: 90`, `housekeeping_policy: archive`
  - Implementation sequences → `transient`, `ttl_days: 30`, `housekeeping_policy: delete`
- **Future:** Doc Housekeeping Workflow automates cleanup based on lifecycle metadata

**Dependency:** Soft (optional) — Workflow Management works standalone without lifecycle management

**See:** `packages/frameworks/doc-lifecycle/integration/workflow-mgt-integration.md`

### Full Integration (Kanban + Workflow Management + Doc Lifecycle)

**Integration Points:**
- RW sets lifecycle metadata on doc creation
- Doc Housekeeping Workflow (future) manages expiration
- Kanban docs carry evergreen lifecycle metadata
- Reference-aware cleanup protects cross-linked artefacts

### Documented-Future Artefacts (Not On Disk)

| Artefact | Expected location | Status |
| -------- | ----------------- | ------ |
| Doc Housekeeping Workflow | `workflows/doc-housekeeping-workflow.yaml` | Documented, not present |
| Lifecycle metadata validator | `scripts/validate_lifecycle_metadata.py` | Documented, not present |
| Expired-doc scanner | `scripts/housekeeping_scanner.py` | Documented, not present |
| RW auto-lifecycle on doc creation | RW agent execution guide integration | Documented future work |

These are **expected future** deliverables — not T01 gaps to fix. T02 inventories actual vs documented composition.

---

## Package Composition

### On-Disk Inventory (as of 2026-06-06)

```
packages/frameworks/doc-lifecycle/
├── README.md
├── PACKAGE_OVERVIEW.md
├── PACKAGE_PROPOSAL.md
├── IMPLEMENTATION_GUIDE.md
├── policies/
│   ├── doc-lifecycle-metadata-spec.md
│   └── doc-lifecycle-policy.md
├── integration/
│   ├── kanban-integration.md
│   └── workflow-mgt-integration.md
├── templates/
│   ├── DOCUMENT_TEMPLATE.md
│   ├── LIFECYCLE_EXAMPLES.md
│   └── POLICY_SALIENCE_TEMPLATE.md
└── docs/
    ├── policy-salience-guide.md
    └── policy-salience-agent-parser.md
```

**Total on-disk files:** 13 (no `workflows/` or `scripts/` directories present)

### Documented-But-Absent (Future)

```
packages/frameworks/doc-lifecycle/
├── workflows/
│   └── doc-housekeeping-workflow.yaml    # FUTURE
└── scripts/
    ├── validate_lifecycle_metadata.py    # FUTURE
    └── housekeeping_scanner.py           # FUTURE
```

### Core Documents

| # | Path | Role |
| - | ---- | ---- |
| 1 | `README.md` | Package overview, modularity, quick start |
| 2 | `PACKAGE_OVERVIEW.md` | Structure, usage scenarios, adoption pattern |
| 3 | `PACKAGE_PROPOSAL.md` | Original package proposal and rationale |
| 4 | `IMPLEMENTATION_GUIDE.md` | Step-by-step adoption guide |

### Policies

| # | Path | Role |
| - | ---- | ---- |
| 5 | `policies/doc-lifecycle-metadata-spec.md` | Five-field metadata schema |
| 6 | `policies/doc-lifecycle-policy.md` | Governance, classification, housekeeping |

### Templates

| # | Path | Role |
| - | ---- | ---- |
| 7 | `templates/DOCUMENT_TEMPLATE.md` | KB document template with lifecycle frontmatter |
| 8 | `templates/LIFECYCLE_EXAMPLES.md` | Examples per lifecycle type |
| 9 | `templates/POLICY_SALIENCE_TEMPLATE.md` | Policy salience frontmatter template |

### Integration Guides

| # | Path | Role |
| - | ---- | ---- |
| 10 | `integration/kanban-integration.md` | Kanban lifecycle integration |
| 11 | `integration/workflow-mgt-integration.md` | RW / workflow lifecycle integration |

### Extended Documentation

| # | Path | Role |
| - | ---- | ---- |
| 12 | `docs/policy-salience-guide.md` | Policy salience author guide |
| 13 | `docs/policy-salience-agent-parser.md` | Agent parser for policy salience |

---

## Behavioral Expectations

### Agent-Driven Management

**Key Characteristics:**
- Agents **MUST** set lifecycle metadata when creating KB documents
- Agents **MUST** validate front-matter before committing KB documents
- Agents **MUST NOT** silently promote/demote lifecycle — changes must be logged
- Agents **SHOULD** preserve lifecycle metadata on updates unless explicitly changing

**Default-to-Evergreen:** If uncertain at creation, default to `evergreen` and let operator override.

### Audit Trail Preservation

- Archive (not delete) documents that serve as evidence of completed work
- Housekeeping actions **MUST** be logged and auditable (changelog entries)
- Git history always preserves deleted content regardless of housekeeping policy

### Lifecycle Transitions

**Promotion (upgrade):** `transient → timeboxed → evergreen` — explicit, logged, metadata recalculated  
**Demotion (downgrade):** Rare; prefer archiving evergreen docs over demotion

### Monitoring Metrics

- Documents by lifecycle type
- Expired documents pending housekeeping
- Documents archived/deleted per housekeeping run
- Lifecycle promotions/demotions

---

## Configuration / Adoption Expectations

### Adoption Steps (IMPLEMENTATION_GUIDE)

1. **Copy package** — `cp -r packages/frameworks/doc-lifecycle/ <project>/packages/frameworks/doc-lifecycle/`
2. **Review policies** — metadata spec + lifecycle policy (15–30 min)
3. **Customize defaults (optional)** — TTL values, housekeeping policies, KB paths
4. **Apply lifecycle metadata** — Add frontmatter to existing KB documents
5. **Use templates** — `DOCUMENT_TEMPLATE.md` for new docs
6. **Configure agents** — Agent rules for automatic lifecycle metadata
7. **Integrate (optional)** — Kanban and/or Workflow Management per integration guides
8. **Housekeeping** — Manual process until Doc Housekeeping Workflow exists

### Success Criteria (Package-Level)

1. All KB documents have lifecycle metadata
2. Expired transient/timeboxed docs cleaned up regularly
3. Evergreen docs never deleted
4. Referenced docs protected from deletion
5. Housekeeping actions logged and auditable
6. Documentation bloat prevented without losing valuable content

### Comparison with Peer Packages

| Package | Type | Independence | Integration |
| ------- | ---- | ------------ | ----------- |
| Kanban | Policy + Templates | Soft deps | Versioning, Workflow Mgt |
| Workflow Management | Policy + Scripts + Workflows | Soft deps | Kanban, Versioning |
| Doc Lifecycle | Policy + Templates (+ future scripts/workflows) | None (10/10) | Kanban, Workflow Mgt |

---

## Sources

- **Package README:** `packages/frameworks/doc-lifecycle/README.md`
- **Package Overview:** `packages/frameworks/doc-lifecycle/PACKAGE_OVERVIEW.md`
- **Package Proposal:** `packages/frameworks/doc-lifecycle/PACKAGE_PROPOSAL.md`
- **Implementation Guide:** `packages/frameworks/doc-lifecycle/IMPLEMENTATION_GUIDE.md`
- **Metadata Spec:** `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md`
- **Lifecycle Policy:** `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md`
- **Kanban Integration:** `packages/frameworks/doc-lifecycle/integration/kanban-integration.md`
- **Workflow Mgt Integration:** `packages/frameworks/doc-lifecycle/integration/workflow-mgt-integration.md`
- **Document Template:** `packages/frameworks/doc-lifecycle/templates/DOCUMENT_TEMPLATE.md`
- **Lifecycle Examples:** `packages/frameworks/doc-lifecycle/templates/LIFECYCLE_EXAMPLES.md`
- **Policy Salience Guide:** `packages/frameworks/doc-lifecycle/docs/policy-salience-guide.md`
- **Policy Salience Parser:** `packages/frameworks/doc-lifecycle/docs/policy-salience-agent-parser.md`
- **Adopter mirror:** `greenfield-install/packages/frameworks/doc-lifecycle/`
- **Repo agent rules:** `.cursorrules` — Document Lifecycle Management section
- **Orchestration plan:** `docs/implementation-cycles/E10S01-orchestration-plan.md` §3.1, §7.4, §8.4

---

## Verification Evidence (V1–V8)

| ID | Check | Result |
| -- | ----- | ------ |
| V1 | Core principles: purpose, modularity, copy pattern, 10/10 independence, customization boundaries | ✅ PASS — §Core Operating Principles |
| V2 | Lifecycle behaviors: three types, TTL, reference-aware cleanup, protection rules | ✅ PASS — §Expected Lifecycle Behaviors |
| V3 | Integration: Kanban + Workflow Mgt with optional/standalone notes | ✅ PASS — §Integration Expectations |
| V4 | Composition: on-disk paths match orchestration §3.1; future scripts/workflows noted | ✅ PASS — §Package Composition |
| V5 | Sources: every major section cites ≥1 package path | ✅ PASS — §Sources |
| V6 | Task doc: Scope, Input, Deliverable, AC, References populated | ✅ PASS — verified in T01 task doc |
| V7 | Wiring: task ↔ IPP ↔ companion bidirectional links | ✅ PASS — links in task doc, IPP §6, this file |
| V8 | Scope guard: no inventory gap tables, no repo frontmatter audit, no package edits | ✅ PASS — composition lists only; no gap severity |

**Verified:** 2026-06-06 by E10:S01:T01 implementation agent.

---

## Downstream Inventory (T02)

Component inventory map with expected-vs-actual coverage: [component-inventory-map.md](component-inventory-map.md) (E10:S01:T02, v0.10.1.2+1).
