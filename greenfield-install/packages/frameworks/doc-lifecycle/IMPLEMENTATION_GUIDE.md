# Document Lifecycle Management Implementation Guide

**Purpose:** Step-by-step guide for adopting Document Lifecycle Management in other projects.

**Related:**
- [README.md](./README.md) — Package overview
- [PACKAGE_OVERVIEW.md](./PACKAGE_OVERVIEW.md) — Package structure and usage

---

## 📋 Overview

This guide walks you through implementing Document Lifecycle Management in your project, from initial setup to ongoing maintenance.

**Prerequisites:**
- Basic understanding of Knowledge Base (KB) structure
- Familiarity with YAML front-matter
- Access to your project's KB directory

---

## 🚀 Step-by-Step Implementation

### Step 1: Copy Package

**⚠️ CRITICAL: Copy, Don't Reference**

Copy the entire Document Lifecycle package into your project:

```bash
cp -r packages/frameworks/doc-lifecycle/ <your-project>/packages/frameworks/doc-lifecycle/
```

**Why copy?**
- Projects need to customize lifecycle defaults and housekeeping policies
- Projects evolve independently and may need project-specific adaptations
- Copying ensures projects have full control over their lifecycle management

---

### Step 2: Review Policies

Read the core policies to understand the framework:

1. **Metadata Specification:** [`policies/doc-lifecycle-metadata-spec.md`](./policies/doc-lifecycle-metadata-spec.md)
   - Complete metadata schema
   - Field definitions
   - Lifecycle classification rules

2. **Policy:** [`policies/doc-lifecycle-policy.md`](./policies/doc-lifecycle-policy.md)
   - Governance and enforcement rules
   - Classification rules
   - Housekeeping process

**Time:** 15-30 minutes

---

### Step 3: Customize Defaults (Optional)

If your project needs different defaults, customize them:

**Customization boundaries:**
- ✅ **CAN customize:** Lifecycle defaults, TTL values, housekeeping policies, KB paths
- ❌ **MUST keep:** Metadata schema (5 required fields), lifecycle enum values, protection rules

**Example:** If your project prefers longer TTL for transient docs:

```yaml
# Customize in your project's policy doc
transient_default_ttl: 30  # Instead of 14
```

---

### Step 4: Apply Lifecycle Metadata to Existing Docs

Add lifecycle metadata to existing KB documents:

**Process:**
1. Identify document type (evergreen, timeboxed, transient)
2. Add lifecycle metadata to front-matter
3. Use classification rules from policy

**Example: Evergreen Standard**
```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
# Your Document Title
```

**Example: Timeboxed Analysis**
```yaml
---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z
housekeeping_policy: archive
---
# Your Analysis Document
```

**Time:** 1-2 hours (depending on number of docs)

---

### Step 5: Use Templates for New Docs

Use the templates when creating new documents:

**Template:** [`templates/DOCUMENT_TEMPLATE.md`](./templates/DOCUMENT_TEMPLATE.md)

**Examples:** [`templates/LIFECYCLE_EXAMPLES.md`](./templates/LIFECYCLE_EXAMPLES.md)

**Agent Rule:** Configure agents to use templates when creating KB documents.

---

### Step 6: Configure Agents

Configure AI agents to set lifecycle metadata automatically:

**Agent Requirements:**
1. **Identify document type** from context (task description, file path, content)
2. **Map to lifecycle** using classification rules
3. **Apply defaults** for `ttl_days` and `housekeeping_policy`
4. **Set `created_at`** to current UTC time
5. **Calculate `expires_at`** from `created_at + ttl_days`
6. **Include all metadata** in front-matter

**Example Agent Rule:**
```markdown
When creating KB documents, agents MUST:
- Set lifecycle based on document type
- Apply default TTL and housekeeping policy
- Calculate expires_at from created_at + ttl_days
- Include all metadata in front-matter
```

---

### Step 7: (Optional) Integrate with Other Packages

If using with Kanban or Workflow Management:

**Kanban Integration:**
- See [`integration/kanban-integration.md`](./integration/kanban-integration.md)
- Add lifecycle metadata to Kanban Epics/Stories

**Workflow Management Integration:**
- See [`integration/workflow-mgt-integration.md`](./integration/workflow-mgt-integration.md)
- Configure RW to set lifecycle metadata when creating docs

---

### Step 8: (Future) Implement Doc Housekeeping Workflow

When the Doc Housekeeping Workflow is implemented:

1. Copy workflow YAML: `workflows/doc-housekeeping-workflow.yaml`
2. Configure trigger (periodic or manual)
3. Run workflow periodically to clean up expired docs

**Note:** Workflow is not yet implemented. Manual housekeeping is required for now.

---

## 🧹 Manual Housekeeping Process

Until the automated workflow is implemented, perform manual housekeeping:

### Process

1. **Scan:** Walk `docs/**` and parse front-matter
2. **Filter:** Find documents where:
   - `lifecycle in {timeboxed, transient}` **AND**
   - `expires_at <= now()`
3. **Analyze References:**
   - Search for links/back-references to each expired document
   - Check if referenced from evergreen docs or changelogs
4. **Determine Action:**
   - If referenced → Auto-upgrade to `archive`
   - If `housekeeping_policy: delete` and no references → Delete
   - If `housekeeping_policy: archive` → Archive
5. **Execute:**
   - **Delete:** Remove from KB (or move to `docs/_graveyard/`)
   - **Archive:** Move to `docs/Archive/{original_path}`
6. **Log:** Create changelog entry documenting housekeeping actions

### Frequency

- **Weekly:** For projects with many temporary docs
- **Monthly:** For projects with fewer temporary docs
- **As Needed:** When documentation bloat becomes noticeable

---

## 📊 Monitoring

### Metrics to Track

- Number of documents by lifecycle (`evergreen`, `timeboxed`, `transient`)
- Number of expired documents pending housekeeping
- Number of documents archived/deleted per housekeeping run
- Number of lifecycle promotions/demotions

### Reports

Generate reports of expired documents and proposed actions:

**Example Report:**
```
Expired Documents Report (2025-12-04)

Timeboxed (expired):
- docs/Analysis/T01-rw-adoption-friction-analysis.md (expired: 2025-12-01)
- docs/Planning/E2-S04-T05-renumbering-plan.md (expired: 2025-11-20)

Transient (expired):
- docs/Planning/E2-S04-T03-implementation-sequence.md (expired: 2025-11-30)

Actions:
- Archive: 2 documents
- Delete: 1 document (no references found)
```

---

## 🎯 Success Criteria

**Implementation is successful if:**

1. ✅ All KB documents have lifecycle metadata
2. ✅ Expired transient/timeboxed docs are cleaned up regularly
3. ✅ Evergreen docs are never deleted
4. ✅ Referenced docs are protected from deletion
5. ✅ Housekeeping actions are logged and auditable
6. ✅ Documentation bloat is prevented without losing valuable content

---

## 🔧 Troubleshooting

### Problem: Missing Lifecycle Metadata

**Symptom:** Documents don't have lifecycle metadata in front-matter.

**Solution:**
1. Add lifecycle metadata to existing docs (Step 4)
2. Configure agents to set lifecycle metadata (Step 6)
3. Use templates for new docs (Step 5)

---

### Problem: Incorrect Lifecycle Classification

**Symptom:** Documents are classified incorrectly (e.g., transient instead of evergreen).

**Solution:**
1. Review classification rules in policy
2. Update lifecycle metadata
3. Log lifecycle change in changelog or Story notes

---

### Problem: Expired Docs Not Cleaned Up

**Symptom:** Expired documents are not being archived/deleted.

**Solution:**
1. Run manual housekeeping process (Step 8)
2. Check for references (protect referenced docs)
3. (Future) Run Doc Housekeeping Workflow

---

### Problem: Referenced Docs Deleted

**Symptom:** Documents referenced from evergreen docs are deleted.

**Solution:**
1. Restore from git history
2. Update `housekeeping_policy` to `archive`
3. Review protection rules in policy

---

## 📚 Related Documents

- **README:** [`README.md`](./README.md) — Package overview
- **Package Overview:** [`PACKAGE_OVERVIEW.md`](./PACKAGE_OVERVIEW.md) — Package structure
- **Metadata Spec:** [`policies/doc-lifecycle-metadata-spec.md`](./policies/doc-lifecycle-metadata-spec.md) — Metadata schema
- **Policy:** [`policies/doc-lifecycle-policy.md`](./policies/doc-lifecycle-policy.md) — Governance rules
- **Templates:** [`templates/`](./templates/) — Document templates
- **Integration Guides:** [`integration/`](./integration/) — Integration with other packages

---

## 🚧 Future Work

- **Doc Housekeeping Workflow** — Automated housekeeping workflow (YAML + agent execution guide)
- **Validation Scripts** — Validator for lifecycle metadata and scanner for expired documents
- **Integration with RW** — RW automatically sets lifecycle metadata when creating docs

---

**Last Updated:** 2025-12-04  
**Status:** Active — Ready for use

