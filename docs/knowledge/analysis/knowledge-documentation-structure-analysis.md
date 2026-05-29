---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Knowledge/Documentation Structure Analysis

**Purpose:** Comprehensive knowledge base and documentation structure analysis across all projects to inform the "ultimate" canonical docs/documentation structure  
**Analysis Date:** 2025-12-17  
**Status:** IN PROGRESS  
**Version:** 1.0.0

---

## Executive Summary

This document provides **detailed knowledge/documentation structure analysis** of KB and documentation patterns across all analyzed projects. Without this granular data, we cannot determine the "ultimate" canonical docs/documentation structure.

**Key Questions Addressed:**
1. What docs/documentation naming conventions exist across projects?
2. How are docs/documentation directories organized (structure patterns)?
3. What document structure details exist (frontmatter, sections, metadata)?
4. What patterns emerge for document lifecycle, cross-referencing, and navigation?
5. What is the "ultimate" canonical structure based on real-world usage?

---

## 1. docs/documentation Directory Naming Conventions

### 1.1 Root Directory Naming Patterns

**Pattern 1: `docs/` (Most Common)**
- **Format:** `docs/` (uppercase, abbreviation)
- **Projects Using:** been-there, dev-toolkit, agentic-ide-rules, confidentia, starborn_legacy, free-party-promoter, vwmp, qa-kb, ai-dev-kit
- **Frequency:** Most common pattern (9/9 projects)
- **Rationale:** Clear abbreviation, standard convention

**Pattern 2: `knowledge/` (Pre-ADK)**
- **Format:** `knowledge/` (lowercase, full word)
- **Projects Using:** fynd.deals (`knowledge/fynd_deals/`), confidentia (legacy `knowledge/` in branch 21)
- **Frequency:** Less common, pre-ADK structure
- **Rationale:** Full word, descriptive, Obsidian-friendly

**Pattern 3: `docs/` (Alternative)**
- **Format:** `docs/` (lowercase, abbreviation)
- **Projects Using:** starborn_legacy (`docs/`), fynd.deals (`docs/fynd_deals/`), qa-kb (`docs/`)
- **Frequency:** Common for supplementary documentation
- **Rationale:** Standard convention, often used alongside `docs/`

### 1.2 Directory Naming Summary

| Project | Primary KB Root | Secondary Docs | Notes |
|---------|----------------|----------------|-------|
| been-there | `docs/` | None | Standard ADK structure |
| fynd.deals | `knowledge/fynd_deals/` | `docs/fynd_deals/` | Pre-ADK, Obsidian-oriented |
| dev-toolkit | `docs/` | None | Standard ADK structure |
| agentic-ide-rules | `docs/` | None | Standard ADK structure |
| confidentia | `docs/` | `knowledge_restored/knowledge/` (branch 21) | Multi-branch, legacy preservation |
| starborn_legacy | `docs/` | `docs/` | Dual structure |
| free-party-promoter | `docs/` | None | Standard ADK structure |
| vwmp | `docs/` | None | Standard ADK structure |
| qa-kb | `docs/` | `docs/` | Minimal structure |
| ai-dev-kit | `docs/` | None | Canonical structure |

**Recommendation:** Use `docs/` as canonical root directory name.

---

## 2. KB Directory Organization Patterns

### 2.1 ADK Canonical Structure (5 Pillars)

**Pattern: 5-Pillar Structure**
```
docs/
├── Architecture/                      # Technical standards, ADRs
├── changelog-and-release-notes/      # Release documentation
├── project-management/                 # Project management, Kanban
├── Guides/                           # User-facing documentation
└── Documentation/                    # Developer documentation (optional)
```

**Projects Using:** been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit
**Frequency:** Standard ADK structure (4/9 projects)

**Pillar Purposes:**
- **Architecture:** Technical standards, ADRs, integration docs
- **changelog-and-release-notes:** Release notes, changelogs, version history
- **project-management:** Kanban, governance, rituals, epics/stories
- **Guides:** Getting started, framework consumption, how-tos
- **Documentation:** User docs, developer docs (optional)

### 2.2 Complex Multi-Pillar Structure (15+ Pillars)

**Pattern: Comprehensive Enterprise Structure**
```
docs/
├── Architecture/                      # System design, C4 views, ADRs
├── changelog-and-release-notes/      # Release documentation
├── Contribution_Guide/               # KB contribution standards
├── Customer_Enablement/              # Customer-facing docs
├── Data_and_Insights/                # Analytics, ML, reporting
├── Documentation/                    # Developer documentation
├── engineering-and-platform/         # Engineering standards
├── Governance_and_Process/            # Governance, decision records
├── Monitoring_and_Observability/     # Alerts, dashboards
├── Onboarding_and_Enablement/       # Onboarding, training
├── Operations_and_SRE/               # Runbooks, operations
├── project-management/                 # Project management
├── Product_and_Experience/           # Product docs
├── Security_and_Compliance/          # Security, compliance
├── Testing/                          # Test documentation
└── Tooling_and_Integrations/         # Tool catalogs, integrations
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Enterprise-level structure (1/9 projects)
**Rationale:** Comprehensive organization for large, mature projects

### 2.3 Pre-ADK Structure (Custom Organization)

**Pattern: Custom Pre-ADK Structure**
```
knowledge/fynd_deals/
├── Kanban/                           # Epic/story documentation
├── debugging/                         # Debug paths, issues, patterns
├── specs/                            # Module specifications
├── use-cases/                        # Use case documentation
├── templates/                        # Documentation templates
├── learning/                         # Learning resources
└── processes/                        # Process documentation
```

**Projects Using:** fynd.deals
**Frequency:** Pre-ADK custom structure (1/9 projects)
**Rationale:** Obsidian-oriented, custom organization

### 2.4 Hybrid Structure (KB + docs/)

**Pattern: Dual Documentation Structure**
```
docs/                                  # ADK structure
├── Architecture/
├── project-management/
└── ...

docs/                                # Supplementary documentation
├── kanban-overhaul/
├── KANBAN_EPICS.md
├── KANBAN_GOVERNANCE.md
└── ...
```

**Projects Using:** starborn_legacy, qa-kb
**Frequency:** Hybrid pattern (2/9 projects)
**Rationale:** Separation of concerns, legacy preservation

### 2.5 Directory Organization Summary

| Pattern | Projects Using | Frequency | Recommendation |
|---------|----------------|-----------|----------------|
| ADK Canonical (5 pillars) | been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit | High (4/9) | ✅ Recommended for standard projects |
| Complex Multi-Pillar (15+) | confidentia | Low (1/9) | ✅ Acceptable for enterprise projects |
| Pre-ADK Custom | fynd.deals | Low (1/9) | ⚠️ Migration needed |
| Hybrid (KB + docs/) | starborn_legacy, qa-kb | Medium (2/9) | ✅ Acceptable for legacy projects |

**Recommendation:** 
- **Standard Projects:** Use ADK canonical 5-pillar structure
- **Enterprise Projects:** Support extension to multi-pillar structure
- **Legacy Projects:** Support hybrid structure during migration

---

## 3. Document Structure Patterns

### 3.1 Frontmatter Patterns

**Pattern 1: ADK Lifecycle Metadata (Standard)**
```yaml
---
lifecycle: evergreen | timeboxed | transient
ttl_days: <integer> | null
created_at: <ISO 8601 datetime>
expires_at: <ISO 8601 datetime> | null
housekeeping_policy: keep | archive | delete
---
```

**Projects Using:** been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit
**Frequency:** Standard ADK pattern (4/9 projects)
**Fields:**
- `lifecycle`: Document persistence classification
- `ttl_days`: Time-to-live in days
- `created_at`: Creation timestamp
- `expires_at`: Expiration timestamp
- `housekeeping_policy`: Cleanup action

**Pattern 2: Minimal Frontmatter**
```yaml
---
title: Architecture
owner: Architecture Guild
review_cadence: quarterly
---
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Custom pattern (1/9 projects)
**Fields:**
- `title`: Document title
- `owner`: Document owner
- `review_cadence`: Review frequency

**Pattern 3: No Frontmatter**
- **Projects Using:** fynd.deals (most docs), starborn_legacy (some docs)
- **Frequency:** Pre-ADK pattern (2/9 projects)
- **Rationale:** Pre-ADK structure, no lifecycle management

### 3.2 Document Lifecycle Metadata Usage

**Lifecycle Values:**
- **`evergreen`:** Permanent documentation (standards, ADRs, Kanban Epics/Stories)
- **`timeboxed`:** Temporarily useful (design spikes, refactoring plans)
- **`transient`:** Operational scratch (implementation plans, renumbering sequences)

**TTL Patterns:**
- **`evergreen`:** `ttl_days: null` (no expiration)
- **`timeboxed`:** `ttl_days: 90` (3 months default)
- **`transient`:** `ttl_days: 14` (2 weeks) or `30` (1 month)

**Housekeeping Policies:**
- **`keep`:** Never delete (for `evergreen`)
- **`archive`:** Move to archive when expired (for `timeboxed`)
- **`delete`:** Remove when expired (for `transient`)

**Usage Summary:**
- **Projects with Lifecycle Metadata:** been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit (4/9)
- **Projects without Lifecycle Metadata:** fynd.deals, confidentia (most docs), starborn_legacy (some docs) (5/9)

### 3.3 Document Section Patterns

**Pattern 1: Standard ADK Sections**
```markdown
# Document Title

**Status:** [Status]  
**Priority:** [Priority]  
**Last updated:** [Date] (v[version])  
**Estimated Effort:** [Effort]  
**Version:** v[version]  
**Code:** [Epic/Story code]

---

## Overview

[Document overview]

---

## Goals

[Document goals]

---

## [Content Sections]

[Document content]
```

**Projects Using:** been-there, dev-toolkit, agentic-ide-rules
**Frequency:** Standard ADK pattern

**Pattern 2: Minimal Sections**
```markdown
# Document Title

[Document content without structured sections]
```

**Projects Using:** fynd.deals, starborn_legacy (some docs)
**Frequency:** Pre-ADK pattern

**Pattern 3: Comprehensive Sections**
```markdown
# Document Title

**Status:** [Status]  
**Owner:** [Owner]  
**Last Updated:** [Date]  
**Related:** [Related documents]

---

## Executive Summary

[Summary]

---

## [Detailed Sections]

[Content]
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Enterprise pattern

---

## 4. Navigation and Index Patterns

### 4.1 Index File Naming

**Pattern 1: `README.md` (Most Common)**
- **Location:** Root of each directory
- **Projects Using:** been-there, dev-toolkit, agentic-ide-rules, confidentia, ai-dev-kit
- **Frequency:** Most common (5/9 projects)
- **Purpose:** Directory overview and navigation

**Pattern 2: `_index.md` (Obsidian/Confidentia)**
- **Location:** Root of each directory
- **Projects Using:** confidentia (branch 03), fynd.deals (some directories)
- **Frequency:** Less common (2/9 projects)
- **Purpose:** Obsidian-friendly index files

**Pattern 3: `Kanban Board.md` or `Kanban Board.md`**
- **Location:** Kanban directory
- **Projects Using:** fynd.deals, been-there
- **Frequency:** Kanban-specific (2/9 projects)
- **Purpose:** Kanban board overview

**Pattern 4: No Index Files**
- **Projects Using:** starborn_legacy (some directories), qa-kb
- **Frequency:** Less common (2/9 projects)
- **Rationale:** Minimal structure, no navigation files

### 4.2 Navigation Structure Patterns

**Pattern 1: Hierarchical READMEs**
```
docs/
├── README.md                         # Root navigation
├── Architecture/
│   └── README.md                     # Architecture navigation
├── project-management/
│   └── README.md                     # PM navigation
└── ...
```

**Projects Using:** been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit
**Frequency:** Standard ADK pattern

**Pattern 2: Comprehensive Index Files**
```
docs/
├── README.md                         # Root navigation
├── Architecture/
│   └── _index.md                     # Architecture index with inventory table
├── project-management/
│   └── _index.md                     # PM index with inventory table
└── ...
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Enterprise pattern

**Pattern 3: Hub-Based Navigation**
```
knowledge/fynd_deals/
├── README.md                         # Entry point
├── Knowledge Base.md                  # Canonical KB hub (Obsidian)
├── Kanban/
│   └── Kanban Board.md               # Kanban hub
└── ...
```

**Projects Using:** fynd.deals
**Frequency:** Obsidian-oriented pattern

---

## 5. Cross-Referencing Patterns

### 5.1 Link Format Patterns

**Pattern 1: Markdown Links (Standard)**
```markdown
[Link Text](path/to/file.md)
[Link Text](../relative/path.md)
```

**Projects Using:** All projects
**Frequency:** Universal
**Rationale:** Standard markdown

**Pattern 2: Obsidian Links**
```markdown
[[Link Text]]
[[path/to/file]]
[[Link Text|Display Text]]
```

**Projects Using:** fynd.deals
**Frequency:** Obsidian-specific (1/9 projects)
**Rationale:** Obsidian wiki-link syntax

**Pattern 3: Reference Links**
```markdown
[Link Text][ref-id]

[ref-id]: path/to/file.md
```

**Projects Using:** Less common
**Frequency:** Rare
**Rationale:** Less common markdown pattern

### 5.2 Cross-Reference Patterns

**Pattern 1: Explicit Cross-References**
```markdown
**Related:** [Document Lifecycle Policy](./doc-lifecycle-policy.md) | [KB Structure Overview](./kb-structure-overview.md)
```

**Projects Using:** ai-dev-kit, dev-toolkit
**Frequency:** ADK pattern

**Pattern 2: Inline References**
```markdown
See [Epic 20](Epic-20.md) for details.
```

**Projects Using:** All projects
**Frequency:** Universal

**Pattern 3: Hub-Based References**
```markdown
- [[Kanban/Epic-1/Epic-1.md]] — Epic 1
- [[Kanban/Epic-2/Epic-2.md]] — Epic 2
```

**Projects Using:** fynd.deals
**Frequency:** Obsidian pattern

---

## 6. Document Type Patterns

### 6.1 Document Type Classifications

**ADK Document Types:**
1. **Standards & ADRs** (`lifecycle: evergreen`)
2. **Kanban Epics/Stories** (`lifecycle: evergreen`)
3. **Core How-Tos** (`lifecycle: evergreen`)
4. **Design Spikes** (`lifecycle: timeboxed`)
5. **Refactoring Plans** (`lifecycle: timeboxed`)
6. **Renumbering Plans** (`lifecycle: transient`)
7. **Implementation Sequences** (`lifecycle: transient`)
8. **Analysis Documents** (`lifecycle: timeboxed`)

**Real-World Document Types Found:**
- **Architecture:** ADRs, C4 views, specifications, integration docs
- **Kanban:** Epics, Stories, Tasks, Bug Reports, Feature Requests
- **Changelog:** Release notes, changelog archives
- **Guides:** Getting started, framework consumption, how-tos
- **Documentation:** User docs, developer docs, API references
- **Debug Paths:** Debug paths, issues, patterns (fynd.deals)
- **Specs:** Module specifications, API specs (fynd.deals)
- **Use Cases:** Use case documentation (fynd.deals)

### 6.2 Document Type → Lifecycle Mapping

| Document Type | Lifecycle | TTL (days) | Housekeeping Policy | Projects Using |
|--------------|-----------|------------|---------------------|----------------|
| Standards & ADRs | `evergreen` | `null` | `keep` | All ADK projects |
| Kanban Epics/Stories | `evergreen` | `null` | `keep` | All ADK projects |
| Core How-Tos | `evergreen` | `null` | `keep` | All ADK projects |
| Design Spikes | `timeboxed` | `90` | `archive` | ai-dev-kit, dev-toolkit |
| Refactoring Plans | `timeboxed` | `90` | `archive` | ai-dev-kit, confidentia |
| Renumbering Plans | `transient` | `14` | `delete` | ai-dev-kit |
| Implementation Sequences | `transient` | `30` | `delete` | ai-dev-kit |
| Analysis Documents | `timeboxed` | `90` | `archive` | ai-dev-kit, dev-toolkit |

---

## 7. Template Usage Patterns

### 7.1 Template Location Patterns

**Pattern 1: Templates in KB Structure**
```
docs/
├── project-management/
│   └── kanban/
│       └── templates/
│           ├── EPIC_TEMPLATE.md
│           └── STORY_TEMPLATE.md
```

**Projects Using:** ai-dev-kit, dev-toolkit
**Frequency:** ADK pattern

**Pattern 2: Templates in Framework Package**
```
packages/frameworks/kanban/templates/
├── EPIC_TEMPLATE.md
├── STORY_TEMPLATE.md
└── TASK_TEMPLATE.md
```

**Projects Using:** ai-dev-kit (framework package)
**Frequency:** Framework pattern

**Pattern 3: Templates in Knowledge Base**
```
knowledge/fynd_deals/templates/
├── learning.md
├── use_case.md
└── Templates-How-To.md
```

**Projects Using:** fynd.deals
**Frequency:** Pre-ADK pattern

### 7.2 Template Usage Patterns

**Pattern 1: Template Enforcement**
- **Projects Using:** fynd.deals (Epic 16: Template Usage and Enforcement)
- **Frequency:** Advanced pattern (1/9 projects)
- **Features:** Template validation scripts, agent rules, versioning system

**Pattern 2: Template Guidelines**
- **Projects Using:** ai-dev-kit, dev-toolkit
- **Frequency:** Standard pattern (2/9 projects)
- **Features:** Template documentation, usage guidelines

**Pattern 3: No Template System**
- **Projects Using:** starborn_legacy, qa-kb, free-party-promoter
- **Frequency:** Basic pattern (3/9 projects)
- **Rationale:** Minimal structure, no template enforcement

---

## 8. Documentation Governance Patterns

### 8.1 Governance Structure Patterns

**Pattern 1: Governance in KB Structure**
```
docs/
├── Governance_and_Process/
│   ├── decision-records/
│   ├── change-management/
│   ├── quality-gates/
│   └── templates/
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Enterprise pattern (1/9 projects)

**Pattern 2: Governance in PM Structure**
```
docs/
├── project-management/
│   └── rituals/
│       └── policy/
│           └── kanban-governance-policy.md
```

**Projects Using:** been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit
**Frequency:** ADK pattern (4/9 projects)

**Pattern 3: No Explicit Governance**
- **Projects Using:** fynd.deals, starborn_legacy, qa-kb
- **Frequency:** Pre-ADK pattern (3/9 projects)
- **Rationale:** No formal governance structure

### 8.2 Documentation Review Patterns

**Pattern 1: Review Cadence Metadata**
```yaml
---
review_cadence: quarterly
owner: Architecture Guild
---
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Enterprise pattern (1/9 projects)

**Pattern 2: Review in Governance Policy**
- **Projects Using:** ai-dev-kit, dev-toolkit
- **Frequency:** ADK pattern (2/9 projects)
- **Features:** Documentation review workflow, review triggers

**Pattern 3: No Review System**
- **Projects Using:** fynd.deals, starborn_legacy, qa-kb
- **Frequency:** Basic pattern (3/9 projects)
- **Rationale:** No formal review process

---

## 9. Recommendations for "Ultimate" Canonical Structure

### 9.1 KB Root Directory

**Recommended:** `docs/` (uppercase, abbreviation)
- **Rationale:** Most common pattern, clear abbreviation, standard convention
- **Support:** Also support `knowledge/` for pre-ADK projects during migration

### 9.2 Directory Organization

**Recommended: Flexible Pillar Structure**
- **Standard Projects:** ADK canonical 5-pillar structure
  - `Architecture/`
  - `changelog-and-release-notes/`
  - `project-management/`
  - `Guides/`
  - `Documentation/` (optional)
- **Enterprise Projects:** Support extension to multi-pillar structure
  - Allow additional pillars (e.g., `Security_and_Compliance/`, `Operations_and_SRE/`)
  - Maintain core 5 pillars as foundation

### 9.3 Document Structure

**Recommended: ADK Lifecycle Metadata**
```yaml
---
lifecycle: evergreen | timeboxed | transient
ttl_days: <integer> | null
created_at: <ISO 8601 datetime>
expires_at: <ISO 8601 datetime> | null
housekeeping_policy: keep | archive | delete
---
```

**Required Fields:**
- `lifecycle`: Document persistence classification
- `ttl_days`: Time-to-live in days
- `created_at`: Creation timestamp
- `expires_at`: Expiration timestamp
- `housekeeping_policy`: Cleanup action

### 9.4 Navigation

**Recommended: Hierarchical READMEs**
- Root `docs/README.md` for top-level navigation
- Section `README.md` files for each pillar
- Directory-level `README.md` files for major subdirectories

**Alternative:** Support `_index.md` for Obsidian compatibility

### 9.5 Cross-Referencing

**Recommended: Standard Markdown Links**
- Use `[Link Text](path/to/file.md)` format
- Support relative paths (`../relative/path.md`)
- Support Obsidian links (`[[Link Text]]`) for Obsidian projects

### 9.6 Template System

**Recommended: Template Enforcement**
- Templates in framework package: `packages/frameworks/kanban/templates/`
- Templates in KB structure: `docs/project-management/kanban/templates/`
- Template validation scripts
- Agent rules for template usage
- Template versioning system

---

## 10. Summary: "Ultimate" Canonical docs/documentation Structure

### 10.1 Root Directory
- **Name:** `docs/` (uppercase, abbreviation)
- **Support:** Also support `knowledge/` for pre-ADK projects

### 10.2 Directory Organization
- **Standard:** ADK canonical 5-pillar structure
- **Enterprise:** Support extension to multi-pillar structure
- **Legacy:** Support hybrid structure (`docs/` + `docs/`) during migration

### 10.3 Document Structure
- **Frontmatter:** ADK lifecycle metadata (5 required fields)
- **Sections:** Standard ADK sections (Overview, Goals, Content)
- **Lifecycle:** `evergreen` (default), `timeboxed`, `transient`

### 10.4 Navigation
- **Index Files:** `README.md` (standard), `_index.md` (Obsidian support)
- **Structure:** Hierarchical READMEs at each level

### 10.5 Cross-Referencing
- **Format:** Standard markdown links `[Text](path.md)`
- **Support:** Obsidian links `[[Text]]` for Obsidian projects

### 10.6 Template System
- **Location:** Framework package + KB structure
- **Enforcement:** Template validation, agent rules, versioning

---

**Analysis Completed:** 2025-12-17  
**Next Steps:** Use this analysis to finalize canonical docs/documentation structure in ADK frameworks

