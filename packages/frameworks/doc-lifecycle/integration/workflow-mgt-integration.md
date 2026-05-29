# Document Lifecycle Integration with Workflow Management

**Purpose:** This guide explains how to integrate Document Lifecycle Management with the Workflow Management package.

**Related:**
- [Document Lifecycle README](../README.md)
- [Workflow Management Package](../../workflow%20mgt/README.md)

---

## 📋 Overview

The Document Lifecycle Management framework can be integrated with Workflow Management to automatically set lifecycle metadata when creating documents via workflows (e.g., Release Workflow), and to enable automated housekeeping via the Doc Housekeeping Workflow.

**Integration Points:**
- RW and other workflows can set lifecycle metadata when creating docs
- Doc Housekeeping Workflow automates cleanup based on lifecycle metadata
- Reference-aware cleanup protects referenced docs

---

## 🎯 Integration Approach

### Option 1: Standalone (No Integration)

**Use Case:** Workflow Management works without lifecycle management (manual cleanup).

**Setup:**
- Use Workflow Management package standalone
- Manually clean up obsolete docs
- No lifecycle metadata required

**Pros:**
- Simple, no additional configuration
- Full control over cleanup timing

**Cons:**
- Manual cleanup required
- No automated housekeeping

---

### Option 2: Lifecycle Metadata in Workflows

**Use Case:** Workflows should set lifecycle metadata when creating docs.

**Setup:**
1. Copy both packages (Workflow Management + Document Lifecycle)
2. Configure RW to set lifecycle metadata when creating docs
3. Use templates for new docs
4. (Future) Run Doc Housekeeping Workflow periodically

**Pros:**
- Automated lifecycle metadata for workflow-created docs
- Reference-aware cleanup
- Automated housekeeping

**Cons:**
- Additional configuration required
- Must maintain lifecycle metadata

---

## 📐 Lifecycle Metadata in Workflows

### RW Creates Documents

**When:** RW creates temporary documents (e.g., renumbering plans, analysis docs).

**Agent Rule:** When RW creates a KB document, agents **MUST**:
1. Identify document type from context
2. Map to lifecycle using classification rules
3. Apply defaults for `ttl_days` and `housekeeping_policy`
4. Set `created_at` to current UTC time
5. Calculate `expires_at` from `created_at + ttl_days`
6. Include all metadata in front-matter

---

### Document Type → Lifecycle Mapping

| Document Type | Lifecycle | TTL (days) | Housekeeping Policy | Notes |
|---------------|-----------|------------|---------------------|-------|
| **Renumbering Plans** | `transient` | `14` | `delete` | One-time operational docs |
| **Analysis Documents** | `timeboxed` | `90` | `archive` | Research, impact analysis |
| **Implementation Sequences** | `transient` | `30` | `delete` | Step-by-step execution plans |
| **Design Spikes** | `timeboxed` | `90` | `archive` | Exploratory analysis |

---

## 🔧 Implementation Steps

### Step 1: Copy Both Packages

Copy both packages into your project:

```bash
cp -r packages/frameworks/workflow\ mgt/ <your-project>/packages/frameworks/workflow\ mgt/
cp -r packages/frameworks/doc-lifecycle/ <your-project>/packages/frameworks/doc-lifecycle/
```

---

### Step 2: Configure RW to Set Lifecycle Metadata

Update RW agent execution guide to set lifecycle metadata when creating docs.

**Example:** When RW creates a renumbering plan:

```yaml
---
lifecycle: transient
ttl_days: 14
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-12-18T11:30:00Z
housekeeping_policy: delete
---
# E2:S04:T05 – Renumbering Plan

## Steps to Renumber Story IDs
...
```

**Agent Rule:** RW agents **MUST** set lifecycle metadata when creating KB documents.

---

### Step 3: Use Templates for New Docs

Use the Document Lifecycle template when creating new docs via workflows:

**Template:** [`templates/DOCUMENT_TEMPLATE.md`](../templates/DOCUMENT_TEMPLATE.md)

**Example:** RW creates analysis document:

```yaml
---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z
housekeeping_policy: archive
---
# T01 – RW Adoption Friction Analysis

This analysis documents current friction points...
```

---

### Step 4: (Future) Configure Doc Housekeeping Workflow

When the Doc Housekeeping Workflow is implemented, configure it to run periodically.

**Workflow:** `workflows/doc-housekeeping-workflow.yaml` (future)

**Trigger:** Periodic (weekly/monthly) or manual execution

**Steps:**
1. Scan `docs/**` and parse front-matter
2. Find expired documents (`expires_at <= now()`)
3. Analyze references (protect referenced docs)
4. Determine action (archive or delete)
5. Execute housekeeping
6. Log actions in changelog

---

## 🛡️ Protection Rules

Documents created by workflows **MUST NOT** be deleted if they are:
1. Referenced from evergreen docs
2. Referenced in changelogs
3. Referenced in git history (always preserved via git)

**Action:** Auto-upgrade `housekeeping_policy` to `archive` if references found.

---

## 📝 Examples

### Example 1: RW Creates Transient Renumbering Plan

**Context:** Task "E2:S04:T05 – Renumber Story IDs"

**RW Agent Action:**
```yaml
---
lifecycle: transient
ttl_days: 14
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-12-18T11:30:00Z
housekeeping_policy: delete
---
# E2:S04:T05 – Renumbering Plan

## Steps to Renumber Story IDs

1. Update Epic-2.md...
```

**Rationale:** One-time operational document, easily regenerated, low unique value.

---

### Example 2: RW Creates Timeboxed Analysis

**Context:** Task "E2:S04:T01 – Analyze RW Adoption Friction"

**RW Agent Action:**
```yaml
---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z
housekeeping_policy: archive
---
# T01 – RW Adoption Friction Analysis

This analysis documents current friction points...
```

**Rationale:** Informative analysis, may be useful historically, but not actively maintained.

---

### Example 3: RW Creates Transient Implementation Sequence

**Context:** Task "E2:S04:T03 – Implement RW Installer CLI"

**RW Agent Action:**
```yaml
---
lifecycle: transient
ttl_days: 30
created_at: 2025-12-04T11:30:00Z
expires_at: 2026-01-03T11:30:00Z
housekeeping_policy: delete
---
# E2:S04:T03 – Implementation Sequence

## Step 1: Create installer CLI
## Step 2: Update validation scripts
...
```

**Rationale:** Implementation step-by-step plan, can be recreated by agents, low unique value.

---

### Example 4: Promoting Transient to Timeboxed

**Context:** Renumbering plan completed, referenced in Story completion

**RW Agent Action:**
1. Update lifecycle metadata:
```yaml
---
lifecycle: timeboxed  # Changed from transient
ttl_days: 90          # Changed from 14
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z  # Recalculated
housekeeping_policy: archive      # Changed from delete
---
```

2. Log promotion in Story task notes:
```markdown
**Lifecycle Promotion:** Renumbering plan promoted from `transient` to `timeboxed` 
because it documents completed work and is referenced in Story completion.
```

---

## 🎯 Best Practices

1. **Set Lifecycle on Creation:** RW agents **MUST** set lifecycle metadata when creating docs
2. **Use Appropriate Lifecycle:** Map document type to lifecycle using classification rules
3. **Apply Defaults:** Use default TTL and housekeeping policy unless explicitly overridden
4. **Protect Referenced Docs:** Auto-upgrade to `archive` if references found
5. **Log Promotions:** Log lifecycle promotions/demotions in changelog or Story notes

---

## 🔗 Related Documents

- **Document Lifecycle README:** [`../README.md`](../README.md)
- **Document Lifecycle Policy:** [`../policies/doc-lifecycle-policy.md`](../policies/doc-lifecycle-policy.md)
- **Document Lifecycle Metadata Spec:** [`../policies/doc-lifecycle-metadata-spec.md`](../policies/doc-lifecycle-metadata-spec.md)
- **Workflow Management Package:** [`../../workflow%20mgt/README.md`](../../workflow%20mgt/README.md)
- **Release Workflow Agent Execution:** [`../../workflow%20mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`](../../workflow%20mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)

---

**Last Updated:** 2025-12-04  
**Status:** Active — Ready for use

