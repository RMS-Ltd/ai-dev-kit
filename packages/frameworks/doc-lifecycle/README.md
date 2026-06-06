# Document Lifecycle Management

**Portable Package:** This directory contains the Document Lifecycle Management framework for managing Knowledge Base (KB) document lifecycle with TTL-based expiration and automated housekeeping.

**Last Updated:** 2026-06-06  
**Version:** 1.0.0

**🌱 Adopter distribution (FR-110):** Delivered inside the lean vendor tree at `greenfield-install/packages/frameworks/doc-lifecycle/` as part of `packages/frameworks/` (~11 MiB bundle). See [INSTALL_IN_YOUR_PROJECT.md — Lean vendor install](../../../INSTALL_IN_YOUR_PROJECT.md#lean-vendor-install-greenfield-install--fr-110).

---

## 🧩 Modularity & Dependencies

This package is designed to be **fully modular** with maximum independence. It can be used standalone or combined with other packages.

### Standalone Usage

✅ **This package can be used completely independently** without requiring any other `ai-dev-kit` packages.

**What you get standalone:**
- Complete document lifecycle metadata specification
- Document lifecycle policy and governance rules
- Lifecycle classification rules (evergreen/timeboxed/transient)
- TTL-based expiration system
- Housekeeping process documentation
- Agent requirements and rules

**Hard dependencies (required):**
- None — this is a pure documentation/policy package

**Independence score:** 10/10 — Pure documentation/policy, no runtime dependencies.

---

### Combined Usage

**With Kanban Package:**
- Lifecycle metadata can be applied to Kanban Epics/Stories
- Integration: Kanban docs can have lifecycle metadata for housekeeping
- Optional: Kanban can work without lifecycle management

**With Workflow Management Package:**
- Doc Housekeeping Workflow can automate lifecycle management
- Integration: RW can set lifecycle metadata when creating docs
- Optional: Workflow mgt can work without lifecycle management

**With Both Packages:**
- Complete integration: RW sets lifecycle → Housekeeping Workflow manages expiration
- Automated lifecycle management for all KB documents

---

## 📋 Package Overview

The Document Lifecycle Management framework provides a **TTL-based expiration system** for managing Knowledge Base documents, preventing documentation bloat while preserving valuable content.

**Key Features:**
- ✅ Lifecycle classification (evergreen, timeboxed, transient)
- ✅ TTL-based expiration (time-to-live in days)
- ✅ Reference-aware cleanup (protects referenced docs)
- ✅ Automated housekeeping (archive or delete expired docs)
- ✅ Agent-driven management (explicit lifecycle rules)
- ✅ Audit trail preservation (archive instead of delete for evidence)

**Lifecycle Types:**
- **Evergreen** — Permanent, canonical documentation (standards, ADRs, Kanban Epics/Stories)
- **Timeboxed** — Temporarily useful, archive after period (design spikes, analysis docs)
- **Transient** — Operational scratch, delete after period (renumbering plans, implementation sequences)

---

## 🎯 When to Use Document Lifecycle Management

**Use Document Lifecycle Management when:**
- ✅ KB has many temporary planning/implementation documents
- ✅ Documentation bloat is becoming a problem
- ✅ You want automated cleanup of obsolete docs
- ✅ You need to preserve evergreen content while cleaning up temporary docs
- ✅ You want agent-driven lifecycle management

**Don't use when:**
- ❌ KB is small and manually manageable
- ❌ All documents are permanent (no temporary docs)
- ❌ You prefer manual cleanup over automation

---

## 🚀 Quick Start

### 1. Copy Package

**⚠️ CRITICAL: Copy, Don't Reference**

Copy this entire package into your project:

```bash
cp -r packages/frameworks/doc-lifecycle/ <your-project>/packages/frameworks/doc-lifecycle/
```

### 2. Review Policies

Read the core policies:
- `policies/doc-lifecycle-metadata-spec.md` — Metadata schema
- `policies/doc-lifecycle-policy.md` — Governance and enforcement
- `policies/policy-salience-schema.md` — Policy salience YAML schema

### 3. Apply Lifecycle Metadata

Add lifecycle metadata to your KB documents:

```yaml
---
lifecycle: evergreen | timeboxed | transient
ttl_days: <integer> | null
created_at: <ISO 8601 datetime>
expires_at: <ISO 8601 datetime> | null
housekeeping_policy: keep | archive | delete
---
# Your Document Title

Document content...
```

### 4. Use Templates

Use the templates in `templates/` when creating new documents:
- `DOCUMENT_TEMPLATE.md` — Template with lifecycle metadata
- `LIFECYCLE_EXAMPLES.md` — Examples for each lifecycle type

### 5. Run Housekeeping Scripts

Validate lifecycle metadata and plan housekeeping actions (dry-run by default):

```bash
cd packages/frameworks/doc-lifecycle

# Validate five-field metadata under docs/
python scripts/validate_lifecycle_metadata.py --path ../../docs --strict

# Scan and plan reference-aware cleanup (no filesystem changes)
python scripts/housekeeping_scanner.py --plan --root ../../docs --changelog ../../CHANGELOG.md

# Execute archive/delete only with explicit confirmation
python scripts/housekeeping_scanner.py --execute --root ../../docs --archive-dir ../../docs/Archive --confirm
```

Workflow definition: `workflows/doc-housekeeping-workflow.yaml` (DHKW — Doc Housekeeping Workflow).

---

## 📦 Package Structure

```
packages/frameworks/doc-lifecycle/
├── README.md                          # This file
├── PACKAGE_OVERVIEW.md                # Package structure and usage
├── IMPLEMENTATION_GUIDE.md            # Step-by-step implementation guide
│
├── policies/                          # Framework SoT (see ADR-023)
│   ├── doc-lifecycle-metadata-spec.md # Metadata schema
│   ├── doc-lifecycle-policy.md         # Policy and governance
│   └── policy-salience-schema.md       # Policy salience YAML schema
│
├── workflows/
│   └── doc-housekeeping-workflow.yaml # Automated housekeeping workflow (DHKW)
│
├── scripts/
│   ├── validate_lifecycle_metadata.py  # Validator for lifecycle metadata
│   └── housekeeping_scanner.py         # Scanner for expired documents
│
├── tests/
│   ├── fixtures/                       # pytest fixtures
│   ├── test_validate_lifecycle_metadata.py
│   └── test_housekeeping_scanner.py
│
├── templates/
│   ├── DOCUMENT_TEMPLATE.md           # Template with lifecycle metadata
│   └── LIFECYCLE_EXAMPLES.md          # Examples for each lifecycle type
│
└── integration/
    ├── kanban-integration.md          # How to integrate with Kanban
    └── workflow-mgt-integration.md    # How to integrate with Workflow Mgt
```

---

## 📚 Documentation

- **Package Overview:** [`PACKAGE_OVERVIEW.md`](./PACKAGE_OVERVIEW.md) — Package structure, usage patterns, dependencies
- **Implementation Guide:** [`IMPLEMENTATION_GUIDE.md`](./IMPLEMENTATION_GUIDE.md) — Step-by-step guide for adopting in other projects
- **Metadata Spec:** [`policies/doc-lifecycle-metadata-spec.md`](./policies/doc-lifecycle-metadata-spec.md) — Complete metadata schema
- **Policy:** [`policies/doc-lifecycle-policy.md`](./policies/doc-lifecycle-policy.md) — Governance and enforcement rules
- **Policy Salience Schema:** [`policies/policy-salience-schema.md`](./policies/policy-salience-schema.md) — Machine-readable policy salience YAML schema
- **Dual SoT parity:** [`docs/adr-dual-sot-parity.md`](./docs/adr-dual-sot-parity.md) — Maintainer checklist (package SoT ↔ architecture mirrors)
- **ADR-023:** [`docs/architecture/standards-and-adrs/ADR-023-doc-lifecycle-package-architecture-dual-sot.md`](../../../docs/architecture/standards-and-adrs/ADR-023-doc-lifecycle-package-architecture-dual-sot.md) — SoT/mirror decision record
- **Templates:** [`templates/`](./templates/) — Document templates with lifecycle metadata
- **Integration Guides:** [`integration/`](./integration/) — How to integrate with other packages

---

## 🔗 Related Packages

- **Kanban:** [`packages/frameworks/kanban/`](../kanban/) — Project management with lifecycle metadata
- **Workflow Management:** [`packages/frameworks/workflow-mgt/`](../workflow-mgt/) — Automated workflows including housekeeping

---

## 📊 Lifecycle Classification Examples

| Document Type | Lifecycle | TTL (days) | Housekeeping Policy |
|---------------|-----------|------------|---------------------|
| Standards & ADRs | `evergreen` | `null` | `keep` |
| Kanban Epics/Stories | `evergreen` | `null` | `keep` |
| Design Spikes | `timeboxed` | `90` | `archive` |
| Refactoring Plans | `timeboxed` | `90` | `archive` |
| Renumbering Plans | `transient` | `14` | `delete` |
| Implementation Sequences | `transient` | `30` | `delete` |

See [`templates/LIFECYCLE_EXAMPLES.md`](./templates/LIFECYCLE_EXAMPLES.md) for detailed examples.

---

## 🎯 Key Concepts

### Lifecycle Classification

Documents are classified by their intended persistence:
- **Evergreen** — Permanent, canonical documentation
- **Timeboxed** — Temporarily useful, archive after period
- **Transient** — Operational scratch, delete after period

### TTL-Based Expiration

Time-to-live (TTL) determines when documents become eligible for housekeeping:
- `ttl_days: null` — No expiration (evergreen)
- `ttl_days: 90` — Expires after 90 days (timeboxed)
- `ttl_days: 14` — Expires after 14 days (transient)

### Reference-Aware Cleanup

Documents referenced from evergreen sources are protected from deletion:
- Links from `lifecycle: evergreen` documents
- References in released changelogs
- Git commit history (always preserved)

### Agent-Driven Management

AI agents create and maintain lifecycle metadata automatically:
- Set lifecycle based on document type
- Apply default TTL and housekeeping policy
- Calculate `expires_at` from `created_at + ttl_days`
- Log lifecycle promotions/demotions

---

## 🛡️ Protection Rules

Documents **MUST NOT** be deleted if they are:
1. Referenced from evergreen docs
2. Referenced in changelogs
3. Referenced in git history (always preserved via git)

**Action:** Auto-upgrade to `archive` instead of `delete` if references found.

---

## 📝 Examples

### Evergreen Standard

```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
# Document Lifecycle Metadata Specification
```

### Timeboxed Analysis

```yaml
---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z
housekeeping_policy: archive
---
# T01 – RW Adoption Friction Analysis
```

### Transient Renumbering Plan

```yaml
---
lifecycle: transient
ttl_days: 14
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-12-18T11:30:00Z
housekeeping_policy: delete
---
# E2:S04:T05 – Renumbering Plan
```

See [`templates/LIFECYCLE_EXAMPLES.md`](./templates/LIFECYCLE_EXAMPLES.md) for more examples.

---

## 🚧 Future Work

- **Integration with RW** — RW automatically sets lifecycle metadata when creating docs
- **DHKW agent execution guide** — optional KB doc mirroring RW/UKW patterns

---

**Last Updated:** 2026-06-06  
**Status:** Active — Ready for use

