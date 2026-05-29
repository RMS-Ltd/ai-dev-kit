# Document Lifecycle Integration with Kanban

**Purpose:** This guide explains how to integrate Document Lifecycle Management with the Kanban package.

**Related:**
- [Document Lifecycle README](../README.md)
- [Kanban Package](../../kanban/README.md)

---

## 📋 Overview

The Document Lifecycle Management framework can be integrated with Kanban to add lifecycle metadata to Kanban Epics and Stories, enabling automated housekeeping of obsolete Kanban documents.

**Integration Points:**
- Kanban Epics/Stories can include lifecycle metadata
- Lifecycle metadata determines housekeeping policy for Kanban docs
- Reference-aware cleanup protects referenced Kanban docs

---

## 🎯 Integration Approach

### Option 1: Standalone (No Integration)

**Use Case:** Kanban works without lifecycle management (manual cleanup).

**Setup:**
- Use Kanban package standalone
- Manually clean up obsolete Kanban docs
- No lifecycle metadata required

**Pros:**
- Simple, no additional configuration
- Full control over cleanup timing

**Cons:**
- Manual cleanup required
- No automated housekeeping

---

### Option 2: Lifecycle Metadata for Kanban Docs

**Use Case:** Kanban docs should have lifecycle metadata for automated housekeeping.

**Setup:**
1. Copy both packages (Kanban + Document Lifecycle)
2. Add lifecycle metadata to Kanban Epics/Stories
3. Use templates for new Kanban docs
4. (Future) Run Doc Housekeeping Workflow periodically

**Pros:**
- Automated housekeeping of obsolete Kanban docs
- Lifecycle metadata for all Kanban docs
- Reference-aware cleanup

**Cons:**
- Additional configuration required
- Must maintain lifecycle metadata

---

## 📐 Lifecycle Metadata for Kanban Docs

### Evergreen Kanban Epics/Stories

**Default Classification:** Kanban Epics and Stories are typically `evergreen` because they are project management artifacts and permanent records.

**Metadata:**
```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
# Epic 2: Workflow Management Framework

**Status:** IN PROGRESS
...
```

**Rationale:** Project management artifacts, permanent record, always kept.

---

### Timeboxed Kanban Stories (Rare)

**Use Case:** Some Kanban Stories may be timeboxed if they are temporary planning documents.

**Example:** Temporary planning Story that becomes obsolete after completion.

**Metadata:**
```yaml
---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z
housekeeping_policy: archive
---
# Story 004 – Temporary Planning Story

**Status:** COMPLETE
...
```

**Rationale:** Temporary planning document, may be useful historically, but not actively maintained. Archive after 90 days.

**Note:** This is rare. Most Kanban Stories should be `evergreen`.

---

## 🔧 Implementation Steps

### Step 1: Copy Both Packages

Copy both packages into your project:

```bash
cp -r packages/frameworks/kanban/ <your-project>/packages/frameworks/kanban/
cp -r packages/frameworks/doc-lifecycle/ <your-project>/packages/frameworks/doc-lifecycle/
```

---

### Step 2: Add Lifecycle Metadata to Existing Kanban Docs

Add lifecycle metadata to existing Kanban Epics/Stories:

**Example: Epic**
```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
# Epic 2: Workflow Management Framework
```

**Example: Story**
```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
# Story 004 – RW Installer & Plug-and-Play Adoption
```

---

### Step 3: Use Templates for New Kanban Docs

Use the Document Lifecycle template when creating new Kanban docs:

**Template:** [`templates/DOCUMENT_TEMPLATE.md`](../templates/DOCUMENT_TEMPLATE.md)

**Example:**
```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
# Epic 3: New Epic Title

**Status:** IN PROGRESS
...
```

---

### Step 4: Configure Agents

Configure agents to set lifecycle metadata when creating Kanban docs:

**Agent Rule:** When creating Kanban Epics/Stories, agents **MUST**:
1. Set `lifecycle: evergreen` (default for Kanban docs)
2. Set `ttl_days: null`
3. Set `created_at` to current UTC time
4. Set `expires_at: null`
5. Set `housekeeping_policy: keep`

**Exception:** If creating a temporary planning Story, use `lifecycle: timeboxed` with appropriate TTL.

---

### Step 5: (Future) Run Doc Housekeeping Workflow

When the Doc Housekeeping Workflow is implemented, run it periodically to clean up expired Kanban docs.

**Note:** Most Kanban docs are `evergreen`, so they won't be cleaned up. Only timeboxed Kanban docs will be archived.

---

## 🛡️ Protection Rules

Kanban documents **MUST NOT** be deleted if they are:
1. Referenced from evergreen docs
2. Referenced in changelogs
3. Referenced in git history (always preserved via git)

**Action:** Auto-upgrade `housekeeping_policy` to `archive` if references found.

---

## 📝 Examples

### Example 1: Evergreen Kanban Epic

```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
# Epic 2: Workflow Management Framework

**Status:** IN PROGRESS
**Priority:** HIGH
...
```

---

### Example 2: Evergreen Kanban Story

```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
# Story 004 – RW Installer & Plug-and-Play Adoption

**Status:** IN PROGRESS
**Priority:** HIGH
...
```

---

### Example 3: Timeboxed Kanban Story (Rare)

```yaml
---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z
housekeeping_policy: archive
---
# Story 005 – Temporary Planning Story

**Status:** COMPLETE
**Note:** Temporary planning document, archive after 90 days.
...
```

---

## 🎯 Best Practices

1. **Default to Evergreen:** Most Kanban Epics/Stories should be `evergreen`
2. **Use Timeboxed Sparingly:** Only use `timeboxed` for temporary planning Stories
3. **Never Use Transient:** Kanban docs should never be `transient` (they are project management artifacts)
4. **Maintain Metadata:** Keep lifecycle metadata up-to-date when updating Kanban docs
5. **Reference-Aware:** Ensure referenced Kanban docs are protected from deletion

---

## 🔗 Related Documents

- **Document Lifecycle README:** [`../README.md`](../README.md)
- **Document Lifecycle Policy:** [`../policies/doc-lifecycle-policy.md`](../policies/doc-lifecycle-policy.md)
- **Document Lifecycle Metadata Spec:** [`../policies/doc-lifecycle-metadata-spec.md`](../policies/doc-lifecycle-metadata-spec.md)
- **Kanban Package:** [`../../kanban/README.md`](../../kanban/README.md)

---

**Last Updated:** 2025-12-04  
**Status:** Active — Ready for use

