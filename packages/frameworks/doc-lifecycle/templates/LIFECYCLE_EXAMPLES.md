# Document Lifecycle Examples

**Purpose:** This document provides detailed examples of lifecycle metadata for different document types.

**See:** [`DOCUMENT_TEMPLATE.md`](./DOCUMENT_TEMPLATE.md) for the template.

---

## Example 1: Evergreen Standard

**Document Type:** Technical standard or ADR

**Metadata:**
```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
# Document Lifecycle Metadata Specification

This document defines the metadata fields...
```

**Rationale:** Canonical technical standard, never expires, always kept.

---

## Example 2: Evergreen Kanban Epic

**Document Type:** Kanban Epic

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

**Rationale:** Project management artifact, permanent record, always kept.

---

## Example 3: Timeboxed Design Spike

**Document Type:** Exploratory analysis

**Metadata:**
```yaml
---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z
housekeeping_policy: archive
---
# Design Spike: RW Adoption Friction Analysis

This analysis documents current friction points...
```

**Rationale:** Informative analysis, may be useful historically, but not actively maintained. Archive after 90 days.

---

## Example 4: Timeboxed Refactoring Plan

**Document Type:** Refactoring plan

**Metadata:**
```yaml
---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z
housekeeping_policy: archive
---
# Refactoring Plan: Renumber Story IDs

## Steps to Renumber Story IDs

1. Update Epic-2.md...
```

**Rationale:** Implementation planning document, may be useful historically, but not actively maintained. Archive after 90 days.

---

## Example 5: Transient Renumbering Plan

**Document Type:** One-time operational document

**Metadata:**
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

**Rationale:** One-time operational document, easily regenerated, low unique value. Delete after 14 days.

---

## Example 6: Transient Implementation Sequence

**Document Type:** Step-by-step implementation plan

**Metadata:**
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

**Rationale:** Implementation step-by-step plan, can be recreated by agents, low unique value. Delete after 30 days.

---

## Example 7: Timeboxed Analysis (Promoted from Transient)

**Document Type:** Analysis document (promoted after completion)

**Original Metadata (Transient):**
```yaml
---
lifecycle: transient
ttl_days: 14
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-12-18T11:30:00Z
housekeeping_policy: delete
---
```

**Promoted Metadata (Timeboxed):**
```yaml
---
lifecycle: timeboxed  # Changed from transient
ttl_days: 90          # Changed from 14
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z  # Recalculated
housekeeping_policy: archive      # Changed from delete
---
# T01 – RW Adoption Friction Analysis

**Lifecycle Promotion:** Promoted from `transient` to `timeboxed` 
because it documents completed work and is referenced in Story completion.
```

**Rationale:** Document became more valuable than initially classified (referenced in Story completion), promoted to timeboxed for archival.

---

## Example 8: Evergreen Document (Promoted from Timeboxed)

**Document Type:** Analysis document (promoted to canonical reference)

**Original Metadata (Timeboxed):**
```yaml
---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z
housekeeping_policy: archive
---
```

**Promoted Metadata (Evergreen):**
```yaml
---
lifecycle: evergreen  # Changed from timeboxed
ttl_days: null        # Changed from 90
created_at: 2025-12-04T11:30:00Z
expires_at: null      # Changed from calculated date
housekeeping_policy: keep  # Changed from archive
---
# T01 – RW Adoption Friction Analysis

**Lifecycle Promotion:** Promoted from `timeboxed` to `evergreen` 
because it became a canonical reference for RW adoption.
```

**Rationale:** Document became canonical reference, promoted to evergreen for permanent retention.

---

## Agent Decision Tree

When creating a KB document, agents should:

1. **Identify document type** from context (task description, file path, content)
2. **Map to lifecycle** using table below
3. **Apply defaults** for `ttl_days` and `housekeeping_policy`
4. **Calculate** `expires_at` from `created_at + ttl_days`
5. **Set all fields** in front-matter

### Document Type → Lifecycle Mapping

| Document Type | Lifecycle | TTL (days) | Housekeeping Policy | Notes |
|---------------|-----------|------------|---------------------|-------|
| **Standards & ADRs** | `evergreen` | `null` | `keep` | Canonical technical standards |
| **Kanban Epics/Stories** | `evergreen` | `null` | `keep` | Project management artifacts |
| **Core How-Tos** | `evergreen` | `null` | `keep` | User-facing guides |
| **Design Spikes** | `timeboxed` | `90` | `archive` | Exploratory analysis |
| **Refactoring Plans** | `timeboxed` | `90` | `archive` | Implementation planning |
| **Renumbering Plans** | `transient` | `14` | `delete` | One-time operational docs |
| **Implementation Sequences** | `transient` | `30` | `delete` | Step-by-step execution plans |
| **Analysis Documents** | `timeboxed` | `90` | `archive` | Research, impact analysis |

---

## Protection Rules

Documents **MUST NOT** be deleted if they are:
1. Referenced from evergreen docs
2. Referenced in changelogs
3. Referenced in git history (always preserved via git)

**Action:** Auto-upgrade `housekeeping_policy` to `archive` if references found.

---

**See:** [`policies/doc-lifecycle-metadata-spec.md`](../policies/doc-lifecycle-metadata-spec.md) for complete specification.

