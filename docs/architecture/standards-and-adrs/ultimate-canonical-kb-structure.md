---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T01:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Ultimate Canonical docs/documentation Structure

**Purpose:** Definitive specification for the canonical docs/documentation structure  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design  
**Supersedes:** All previous docs/documentation structure specifications

**Based on:** Comprehensive meta-analysis of 10 projects (9 client implementations + ai-dev-kit source)

---

## Executive Summary

This document **defines the ultimate canonical docs/documentation structure** for ADK framework implementations. This is the **definitive specification** that all projects should adopt.

**The Ultimate Canonical KB Structure:**

```
docs/
├── Architecture/                    # Technical standards, ADRs, integration docs
├── changelog-and-release-notes/     # Release documentation, changelog archive
├── project-management/             # Project management, Kanban, governance
├── User_Guides/                    # User-facing documentation, how-to guides
├── Developer_Documentation/        # Developer documentation, API docs, engineering docs
├── knowledge/                       # Project knowledge base (articles, blog posts, analysis)
│   ├── Articles/                    # Project-specific articles and blog posts
│   ├── Analysis/                     # Analysis reports
│   ├── Reviews/                      # Reviews (PIR, etc.)
│   └── use-cases/                    # Discovered use cases (implementation-phase)
└── [other documentation files]      # Additional project documentation
```

**Key Specifications:**
- **Root Directory:** `docs/` (standard documentation directory)
- **Main Structure:** 6-pillar structure directly under `docs/` (Architecture, Changelog, Project Management, User_Guides, Developer_Documentation, knowledge)
- **User-Facing:** `docs/User_Guides/` (how-tos, tutorials for end users)
- **Developer-Facing:** `docs/Developer_Documentation/` (API docs, engineering docs, developer references)
- **Knowledge Base:** `docs/knowledge/` (project-specific knowledge: articles, blog posts, analysis, reviews, use cases that accumulate over time)
- **Document Frontmatter:** Required (lifecycle metadata)
- **Navigation:** Hierarchical `README.md` files
- **Cross-Referencing:** Standard markdown links

---

## 1. Root Directory Specification

### 1.1 Directory Naming

**CANONICAL:** `docs/` (standard documentation directory)

**Location:** Project root directory

**Structure:**
```
{project-root}/
├── docs/                            # Documentation directory (canonical)
│   ├── Architecture/                # Technical standards, ADRs
│   ├── changelog-and-release-notes/ # Release documentation
│   ├── project-management/          # Project management, Kanban
│   ├── Guides/                      # User-facing documentation
│   ├── Documentation/               # Developer documentation
│   └── [other docs]                 # Additional documentation files
├── src/                             # Source code
├── packages/                        # Framework packages
├── README.md                        # Project README
└── ...
```

---

## 2. Directory Organization Specification

### 2.1 Canonical 5-Pillar Structure

**CANONICAL:** 5-pillar organization

**Structure:**
```
docs/
├── architecture/                    # Technical standards, ADRs, integration docs
├── changelog-and-release-notes/     # Release documentation, changelog archive
├── project-management/             # Project management, Kanban, governance
├── guides/                         # User-facing documentation, how-to guides
├── documentation/                  # Developer documentation, API docs, engineering docs
└── knowledge/                      # Project knowledge base (articles, blog posts, analysis)
    ├── articles/                    # Project-specific articles and blog posts
    ├── analysis/                     # Analysis reports
    ├── reviews/                      # Reviews (PIR, etc.)
    └── use-cases/                    # Discovered use cases (implementation-phase)
        └── discovered/                # Patterns discovered during work
```

### 2.2 Pillar Descriptions

**1. architecture/**
- Technical standards and ADRs (Architecture Decision Records)
- Integration documentation
- System design documents
- Technical specifications
- **use-cases/canonical/** - Design-phase use cases (planned before implementation)

**2. changelog-and-release-notes/**
- Release documentation
- Changelog archive (`CHANGELOG_v0.N.NNN.T+B.md`)
- Main changelog (`CHANGELOG.md`)
- Release notes

**3. project-management/**
- Project management documentation
- Kanban structure (`kanban/epics/Epic-\{N\}/`)
- Governance documents

**4. guides/** (User-Facing)
- User-facing documentation
- How-to guides for end users
- User tutorials and manuals
- Getting started guides for users

**5. documentation/** (Developer-Facing)
- Developer documentation
- API documentation
- Engineering and platform docs
- Developer guides and references
- Vision and purpose documents
- Project overview

**6. knowledge/** (Project Knowledge Base)
- Project-specific knowledge that accumulates over time
- Articles and blog posts
- Analysis reports
- Reviews (PIR, etc.)
- **use-cases/discovered/** - Discovered use cases (implementation-phase patterns)
- Learning resources

### 2.3 Complete Structure Example

**CANONICAL STRUCTURE:**

```
docs/
├── architecture/
│   ├── README.md
│   ├── standards-and-adrs/
│   │   ├── README.md
│   │   ├── ultimate-canonical-kanban-structure.md
│   │   └── ultimate-canonical-kb-structure.md
│   ├── use-cases/                    # Design-phase use cases
│   │   ├── canonical/                 # Canonical use cases (planned before implementation)
│   │   └── CANONICAL_USE_CASE_TEMPLATE.md
│   └── integration/
│       └── README.md
├── changelog-and-release-notes/
│   ├── README.md
│   └── changelog-archive/
│       ├── CHANGELOG_v0.6.6.6+1.md
│       └── CHANGELOG_v0.6.6.6+2.md
├── project-management/
│   ├── README.md
│   └── kanban/
│       ├── README.md
│       └── epics/
│           ├── Epic-1/
│           └── Epic-6/
├── guides/
│   ├── README.md
│   └── getting-started.md
├── documentation/
│   ├── README.md
│   └── vision.md
├── knowledge/
│   ├── analysis/
│   ├── reviews/
│   └── use-cases/
│       ├── discovered/                # Discovered use cases (implementation-phase)
│       └── templates/                 # Templates for discovered use cases
└── [other documentation files]
```

---

## 3. Document Structure Specification

### 3.1 Document Frontmatter

**CANONICAL FORMAT:**

```yaml
---
lifecycle: evergreen | timeboxed | transient
created_at: YYYY-MM-DDTHH:MM:SSZ
ttl_days: <integer> | null
expires_at: YYYY-MM-DDTHH:MM:SSZ | null
housekeeping_policy: keep | archive | delete
---
```

**Required Fields:**
- `lifecycle`: `evergreen` | `timeboxed` | `transient`
- `created_at`: ISO 8601 datetime

**Optional Fields:**
- `ttl_days`: Time to live in days (integer or null)
- `expires_at`: Expiration datetime (ISO 8601 or null)
- `housekeeping_policy`: `keep` | `archive` | `delete`

**Lifecycle Values:**
- `evergreen`: Permanent documentation (no expiration)
- `timeboxed`: Time-limited documentation (expires after `ttl_days`)
- `transient`: Temporary documentation (short-lived)

**Housekeeping Policy Values:**
- `keep`: Keep document permanently
- `archive`: Archive document when expired
- `delete`: Delete document when expired

**Example:**
```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T01:15:00Z
expires_at: null
housekeeping_policy: keep
---
```

---

## 4. Navigation Specification

### 4.1 Hierarchical README Navigation

**CANONICAL:** Hierarchical `README.md` files

**Structure:**
```
docs/
├── README.md                        # Root KB navigation
├── Architecture/
│   └── README.md                    # Architecture section navigation
├── changelog-and-release-notes/
│   └── README.md                    # Changelog section navigation
├── project-management/
│   └── README.md                    # Project Management section navigation
├── Guides/
│   └── README.md                    # Guides section navigation
└── Documentation/
    └── README.md                    # Documentation section navigation
```

### 4.2 README Format

**CANONICAL FORMAT:**

```markdown
# {Section Name}

## Overview

{Section description}

## Contents

- [Document 1](path/to/document1.md) - {Description}
- [Document 2](path/to/document2.md) - {Description}
- [Subsection](subsection/) - {Description}

## Related

- [Related Section](../related-section/) - {Description}
```

---

## 5. Cross-Referencing Specification

### 5.1 Standard Markdown Links

**CANONICAL:** Standard markdown links `[Link Text](path/to/file.md)`

**Examples:**
- `[Architecture Decision Record](Architecture/ADRs/ADR-001.md)`
- `[Epic 1 Overview](project-management/kanban/epics/Epic-1/Epic-1.md)`
- `[Getting Started Guide](Guides/getting-started.md)`

### 5.2 Obsidian Support (Optional)

**Format:** Obsidian links `[[Link Text]]` (for Obsidian projects)

**Support:** Both `README.md` and `_index.md` in same directory

**Examples:**
- `[[Architecture Decision Record]]`
- `[[Epic 1 Overview]]`
- `[[Getting Started Guide]]`

---

## 6. Document Types Specification

### 6.1 Standard Document Types

**CANONICAL TYPES:**
- **ADR** (Architecture Decision Record) - Technical decisions
- **Policy** - Governance and standards
- **Guide** - How-to guides and tutorials
- **Template** - Document templates
- **Analysis** - Analysis reports
- **Changelog** - Release documentation

### 6.2 Document Type Classification

**By Pillar:**
- Architecture: ADRs, Technical Standards, Integration Docs
- Changelog: Changelogs, Release Notes
- Project Management: Kanban, Governance
- User_Guides: User-facing How-to Guides, Tutorials, User Manuals
- Developer_Documentation: API Docs, Engineering Docs, Developer References, Vision, Purpose
- knowledge: Articles, Blog Posts, Analysis, Reviews, Use Cases

**By Lifecycle:**
- `evergreen`: Permanent documentation (ADRs, Policies, Guides)
- `timeboxed`: Time-limited documentation (Analysis reports, Temporary guides)
- `transient`: Temporary documentation (Sitreps, Temporary notes)

---

## 7. Validation Rules

### 7.1 Root Directory Validation

**Required:**
- Root directory named `docs/` (standard documentation directory)
- 6-pillar structure exists directly under `docs/` (Architecture, Changelog, project-management, User_Guides, Developer_Documentation, knowledge)
- User-facing content in `docs/User_Guides/`
- Developer-facing content in `docs/Developer_Documentation/`
- Knowledge base subdirectory `docs/knowledge/` exists for project-specific knowledge (articles, blog posts, analysis, reviews, use cases)

### 7.2 Document Structure Validation

**Required:**
- Documents have YAML frontmatter
- Frontmatter includes `lifecycle` and `created_at` fields
- Lifecycle metadata follows canonical format
- Document structure matches canonical format

### 7.3 Navigation Validation

**Required:**
- Root `docs/README.md` exists (documentation navigation)
- Section `README.md` files exist for each pillar within `docs/`
- README files follow canonical format
- Links are valid and accessible

---

## 8. Implementation

### 8.1 Installation

**CANONICAL METHOD:** Use installer or manual setup following this specification

**Installation Steps:**
1. Create `docs/` directory in project root
2. Create 6 pillar directories directly under `docs/`:
   - `docs/architecture/`
   - `docs/changelog-and-release-notes/`
   - `docs/project-management/`
   - `docs/User_Guides/` (user-facing)
   - `docs/Developer_Documentation/` (developer-facing)
   - `docs/knowledge/` (project knowledge base: articles, blog posts, analysis, reviews, use cases)
3. Under `docs/knowledge/`, create subdirectories:
   - `docs/knowledge/Articles/` (for articles and blog posts)
   - `docs/knowledge/Analysis/`
   - `docs/knowledge/Reviews/`
   - `docs/knowledge/use-cases/`
4. Create `README.md` files for navigation
5. Add frontmatter to all documents

### 8.2 Document Creation

**CANONICAL PROCESS:**
1. Determine appropriate pillar for document
2. Create document with canonical frontmatter
3. Add document to appropriate pillar's `README.md`
4. Follow canonical naming conventions

---

**Last Updated:** 2025-12-18  
**Version:** 1.0.0  
**Status:** COMPLETE
