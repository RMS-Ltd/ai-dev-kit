# Document Lifecycle Management Package Overview

**Version:** 1.0.0  
**Last Updated:** 2025-12-04  
**Status:** Active

---

## 📋 Package Purpose

The Document Lifecycle Management package provides a **TTL-based expiration system** for managing Knowledge Base (KB) documents, preventing documentation bloat while preserving valuable content.

**Core Value:**
- Prevents documentation bloat through lifecycle classification
- Enables automated housekeeping of temporary documents
- Preserves evergreen content while cleaning up obsolete docs
- Agent-driven lifecycle management with clear rules

---

## 🧩 Package Structure

```
packages/frameworks/doc-lifecycle/
├── README.md                          # Package overview and quick reference
├── PACKAGE_OVERVIEW.md                # This file
├── IMPLEMENTATION_GUIDE.md            # Step-by-step implementation guide
│
├── policies/
│   ├── doc-lifecycle-metadata-spec.md # Metadata schema
│   └── doc-lifecycle-policy.md         # Policy and governance
│
├── workflows/
│   └── doc-housekeeping-workflow.yaml # Automated housekeeping workflow (DHKW)
│
├── scripts/
│   ├── validate_lifecycle_metadata.py # Validator for lifecycle metadata
│   └── housekeeping_scanner.py         # Scanner for expired documents
│
├── tests/
│   ├── fixtures/
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

## 📦 Package Contents

### Core Documents

1. **`README.md`** — Package overview, modularity, quick reference
2. **`PACKAGE_OVERVIEW.md`** — This file (package structure, usage patterns, dependencies)
3. **`IMPLEMENTATION_GUIDE.md`** — Step-by-step guide for adopting in other projects

### Policies

4. **`policies/doc-lifecycle-metadata-spec.md`** — Complete metadata schema with field definitions
5. **`policies/doc-lifecycle-policy.md`** — Governance and enforcement rules

### Workflows

6. **`workflows/doc-housekeeping-workflow.yaml`** — Automated housekeeping workflow (DHKW)

### Scripts

7. **`scripts/validate_lifecycle_metadata.py`** — Validator for lifecycle metadata
8. **`scripts/housekeeping_scanner.py`** — Scanner for expired documents

### Tests

9. **`tests/`** — pytest coverage for validator and scanner

### Templates

9. **`templates/DOCUMENT_TEMPLATE.md`** — Template with lifecycle metadata
10. **`templates/LIFECYCLE_EXAMPLES.md`** — Examples for each lifecycle type

### Integration Guides

11. **`integration/kanban-integration.md`** — How to integrate with Kanban
12. **`integration/workflow-mgt-integration.md`** — How to integrate with Workflow Mgt

---

## 🎯 Usage Scenarios

### Scenario 1: Standalone Usage

**Use Case:** Simple project wants to manage document lifecycle without other packages.

**What you get:**
- Complete lifecycle metadata specification
- Policy and governance rules
- Templates for creating documents with lifecycle metadata
- Manual housekeeping process

**Dependencies:** None

**Setup:**
1. Copy package to your project
2. Review policies
3. Apply lifecycle metadata to existing docs
4. Use templates for new docs
5. Manually clean up expired docs

---

### Scenario 2: With Kanban Package

**Use Case:** Project uses Kanban and wants lifecycle management for Kanban docs.

**What you get:**
- All standalone features
- Lifecycle metadata for Kanban Epics/Stories
- Integration guide for Kanban

**Dependencies:** Kanban package (optional, can work standalone)

**Setup:**
1. Copy both packages
2. Follow Kanban integration guide
3. Apply lifecycle metadata to Kanban docs
4. Use templates for new Kanban docs

---

### Scenario 3: With Workflow Management Package

**Use Case:** Project uses Workflow Management and wants automated lifecycle management.

**What you get:**
- All standalone features
- RW can set lifecycle metadata when creating docs
- Doc Housekeeping Workflow automates cleanup

**Dependencies:** Workflow Management package (optional, can work standalone)

**Setup:**
1. Copy both packages
2. Follow Workflow Mgt integration guide
3. Configure RW to set lifecycle metadata
4. Run Doc Housekeeping Workflow periodically

---

### Scenario 4: Full Integration (All Packages)

**Use Case:** Project uses Kanban + Workflow Management + Document Lifecycle.

**What you get:**
- Complete integration: RW sets lifecycle → Housekeeping Workflow manages expiration
- Automated lifecycle management for all KB documents
- Lifecycle metadata for Kanban Epics/Stories

**Dependencies:** Kanban + Workflow Management (optional, can work standalone)

**Setup:**
1. Copy all packages
2. Follow integration guides
3. Configure RW to set lifecycle metadata
4. Apply lifecycle metadata to Kanban docs
5. Run Doc Housekeeping Workflow periodically

---

## 🔗 Integration Points

### With Kanban Package

**Integration:** Kanban Epics/Stories can include lifecycle metadata

**Example:**
```yaml
---
lifecycle: evergreen  # Kanban docs are typically evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
# Epic 2: Workflow Management Framework
...
```

**Optional:** Kanban can work without lifecycle management (manual cleanup).

**See:** [`integration/kanban-integration.md`](./integration/kanban-integration.md)

---

### With Workflow Management Package

**Integration:** RW and other workflows can set lifecycle metadata when creating docs

**Example:** When RW creates a renumbering plan:
```yaml
---
lifecycle: transient  # One-time operational doc
ttl_days: 14
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-12-18T11:30:00Z
housekeeping_policy: delete
---
# E2:S04:T05 – Renumbering Plan
...
```

**Doc Housekeeping Workflow** automates cleanup based on lifecycle metadata.

**See:** [`integration/workflow-mgt-integration.md`](./integration/workflow-mgt-integration.md)

---

## 🎯 Adoption Pattern

### Copy Pattern (Same as Other Packages)

**⚠️ CRITICAL: Copy, Don't Reference**

Projects must **copy** this package into their repository, not link to it.

**Why copy?**
- Projects need to customize lifecycle defaults and housekeeping policies
- Projects evolve independently and may need project-specific adaptations
- Copying ensures projects have full control over their lifecycle management
- Prevents breaking changes in `ai-dev-kit` from affecting consuming projects

**What to copy:**
1. All files in `packages/frameworks/doc-lifecycle/`
2. Maintain directory structure
3. Customize lifecycle defaults if needed
4. Update examples with project-specific paths

**Customization boundaries:**
- ✅ **CAN customize:** Lifecycle defaults, TTL values, housekeeping policies, KB paths
- ❌ **MUST keep:** Metadata schema (5 required fields), lifecycle enum values, protection rules

---

## 📊 Comparison with Other Packages

| Package | Type | Dependencies | Integration Points |
|---------|------|--------------|-------------------|
| **Kanban** | Policy + Templates | Git, Markdown | Versioning, Workflow Mgt |
| **Numbering & Versioning** | Policy | None | Kanban, Workflow Mgt |
| **Workflow Management** | Policy + Scripts + Workflows | Versioning (soft) | Kanban, Versioning |
| **Doc Lifecycle** | Policy + Scripts + Workflows | None | Kanban, Workflow Mgt |

**Doc Lifecycle** follows the same modular pattern:
- ✅ Standalone capability
- ✅ Copy pattern (not reference)
- ✅ Integration points with other packages
- ✅ Clear customization boundaries

---

## 🚀 Next Steps

1. **Review policies** — Read `policies/doc-lifecycle-metadata-spec.md` and `policies/doc-lifecycle-policy.md`
2. **Use templates** — Use `templates/DOCUMENT_TEMPLATE.md` when creating new docs
3. **Apply lifecycle metadata** — Add lifecycle metadata to existing KB documents
4. **Follow integration guides** — If using with Kanban or Workflow Management
5. **Run housekeeping workflow** — Use `workflows/doc-housekeeping-workflow.yaml` and scripts for periodic cleanup

---

**Last Updated:** 2025-12-04  
**Status:** Active — Ready for use

