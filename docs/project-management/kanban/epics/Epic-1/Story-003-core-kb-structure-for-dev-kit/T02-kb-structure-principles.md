---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# KB Structure Principles and Conventions

**Task:** E1:S03:T02 – Document KB structure principles and conventions  
**Date:** 2025-12-02  
**Status:** ✅ COMPLETE

---

## Executive Summary

This document establishes the **principles and conventions** for organizing the `ai-dev-kit` Knowledge Base (KB). It defines separation of concerns, naming conventions, file organization rules, and cross-referencing patterns to ensure consistency, maintainability, and ease of navigation.

**Key Principles:**
- **Separation of Concerns:** Clear boundaries between Architecture, Project Management, Changelog, and Guides
- **Consistent Naming:** Standardized naming conventions for directories and files
- **Documentation Hierarchy:** Clear hierarchy from root README to detailed documents
- **Cross-Referencing:** Standardized patterns for linking between documents

---

## 1. Core Principles

### 1.1 Separation of Concerns

The KB is organized into four main areas, each with a distinct purpose:

#### Architecture (`docs/architecture/`)

**Purpose:** Technical reference for developers

**Contains:**
- Technical standards and ADRs (Architecture Decision Records)
- Design decisions and rationale
- Framework integration documentation
- Versioning policies and strategies

**Audience:** Developers, architects, technical contributors

**Examples:**
- `dev-kit-versioning-policy.md`
- `dev-kit-kanban-versioning-rw-integration.md`
- Future ADRs for technical decisions

#### Project Management (`docs/project-management/`)

**Purpose:** Project management and governance

**Contains:**
- Kanban board and work tracking
- Project management rituals
- Governance policies
- Epic and Story documentation

**Audience:** Project managers, team leads, contributors

**Examples:**
- `kanban/epics/Epic-1/Epic-1.md`
- `rituals/policy/kanban-governance-policy.md`
- Kanban board views

#### Changelog (`docs/changelog-and-release-notes/`)

**Purpose:** Release documentation and history

**Contains:**
- Main changelog summary (`CHANGELOG.md`)
- Detailed changelog archive
- Release notes
- Version history

**Audience:** All users, maintainers, contributors

**Examples:**
- `CHANGELOG.md` (main summary)
- `changelog-archive/CHANGELOG_v0.1.3.1+1.md` (detailed)

#### Guides (`docs/guides/`)

**Purpose:** User-facing documentation

**Contains:**
- Getting started guides
- Framework consumption guides
- How-to guides
- Best practices

**Audience:** End users, adopters, new contributors

**Examples:**
- `getting-started/quick-start.md`
- `framework-consumption/workflow-management-guide.md`

### 1.2 Documentation Hierarchy

The KB follows a clear hierarchy:

```
1. Root README (docs/README.md)
   └─ Overview and navigation to all sections
   
2. Section READMEs (e.g., Architecture/README.md)
   └─ Section-specific overview and navigation
   
3. Document Files (e.g., dev-kit-versioning-policy.md)
   └─ Detailed documentation
   
4. Archive Directories (e.g., changelog-archive/)
   └─ Historical documentation with indexes
```

**Principle:** Each level provides navigation to the next level, ensuring users can always find what they need.

### 1.3 User-Centric Organization

**Principle:** Organize for user needs, not internal convenience.

**Application:**
- User-facing guides are separate from internal governance
- Clear entry points (READMEs) at every level
- Logical grouping by purpose, not by technical structure
- Easy discovery through navigation aids

---

## 2. Naming Conventions

### 2.1 Directory Naming

**Top-Level Directories:**
- Use `kebab-case` (lowercase with hyphens) for all directories
- Examples: `architecture/`, `project-management/`, `changelog-and-release-notes/`, `guides/`
- Use descriptive names that indicate purpose
- Avoid abbreviations unless universally understood

**Subdirectories:**
- Use `kebab-case` (lowercase with hyphens) for all subdirectories
- Examples: `standards-and-adrs/`, `changelog-archive/`, `getting-started/`
- Use descriptive names that indicate purpose
- Maintain consistency within each section

**Special Directories:**
- `epics/` - Lowercase, plural (Kanban epics directory)
- `stories/` - Lowercase, plural (Story documents directory)
- `policy/` - Lowercase, singular (Policy documents directory)

### 2.2 File Naming

**Markdown Files:**
- Use `kebab-case` for markdown files
- Examples: `dev-kit-versioning-policy.md`, `kb-structure-principles.md`
- Use descriptive names that indicate content
- Avoid generic names like `document.md` or `notes.md`

**README Files:**
- Always use `README.md` (uppercase, no extension variation)
- One README per directory (optional but recommended)
- Provides overview and navigation for that directory

**Changelog Files:**
- Use `CHANGELOG_v{VERSION}.md` format
- Version format: `RC.EPIC.STORY.TASK+BUILD`
- Examples: `CHANGELOG_v0.1.3.1+1.md`, `CHANGELOG_v0.4.3.7+1.md`
- Always use uppercase `CHANGELOG` prefix

**Task Deliverable Files:**
- Use `T\{NN\}-{descriptive-name}.md` format (2-digit zero padding)
- Examples: `T01-kb-structure-analysis.md`, `T02-kb-structure-principles.md`
- Use zero-padded task numbers (T01, T02, etc.)
- Use descriptive kebab-case names
- **Note:** Existing task files may use 3-digit format (T001, T002) for backward compatibility

**Story Files:**
- Use `Story-{NNN}-{descriptive-name}.md` format
- Examples: `Story-001-ai-dev-kit-kanban-and-versioning.md`, `Story-003-core-kb-structure-for-dev-kit.md`
- Use zero-padded story numbers (Story-001, Story-002, etc.)
- Use descriptive kebab-case names

**Epic Files:**
- Use `Epic-\{N\}.md` format (or `Epic-\{N\}-\{name\}.md` if needed)
- Examples: `Epic-1.md`, `Epic-4.md`
- Use numeric epic numbers without zero-padding

### 2.3 Special File Names

**Index Files:**
- `_index.md` - Kanban board view (obligatory in Kanban structure)
- `kboard.md` - Detailed Kanban board view
- `README.md` - Directory overview (recommended for all directories)

**Template Files:**
- Use `{TYPE}_TEMPLATE.md` format
- Examples: `EPIC_TEMPLATE.md`, `STORY_TEMPLATE.md`, `FR_TEMPLATE.md`
- Use uppercase for template type

---

## 3. File Organization Rules

### 3.1 Directory Structure Rules

**Rule 1: One Purpose Per Directory**
- Each directory should have a single, clear purpose
- Avoid mixing concerns (e.g., don't mix policies with guides)

**Rule 2: Maximum Depth**
- **Default rule:** Limit directory nesting to **3 levels**: `docs/Section/Category/Item`
- **Preferred pattern:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`, `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.3.1+1.md`
- **Exception rule:** A 4th level is allowed **only when there is a clear need** (e.g., epic-specific assets), and MUST be documented.
- **Hard limit:** Avoid structures deeper than 4 levels; anything deeper requires explicit justification and should be treated as technical debt.

**Rule 3: README in Every Directory**
- Every directory should have a `README.md` (optional but recommended)
- README explains the directory's purpose and contents
- Provides navigation to key documents

**Rule 4: Consistent Structure**
- Similar content types should follow similar structures
- Example: All Epic directories follow the same pattern

### 3.2 File Placement Rules

**Rule 1: Place Files by Purpose**
- Place files in directories that match their purpose
- Architecture docs → `Architecture/`
- PM docs → `project-management/`
- User guides → `Guides/`

**Rule 2: Group Related Files**
- Related files should be grouped together
- Example: Task deliverables go in `Story-XXX/T{NNN}-*.md` directory
- Example: Changelogs go in `changelog-archive/`

**Rule 3: Avoid Duplication**
- Don't duplicate files in multiple locations
- Use cross-references instead
- Exception: `CHANGELOG.md` may exist at root and in `changelog-and-release-notes/` (symlink or copy)

**Rule 4: Archive Old Content**
- Move outdated content to archive directories
- Keep archives organized with indexes
- Don't delete historical documentation

### 3.3 Content Organization Rules

**Rule 1: One Document Per Concept**
- Each document should cover one concept or topic
- Avoid creating monolithic documents
- Split large documents into logical sections

**Rule 2: Clear Document Structure**
- Use consistent markdown structure
- Include: Title, Summary, Sections, References
- Use proper heading hierarchy (H1 → H2 → H3)

**Rule 3: Metadata in Headers**
- Include metadata in document headers (YAML frontmatter or markdown)
- Include: Task/Story/Epic, Date, Status, Version
- Example: `**Task:** E1:S03:T02`, `**Date:** 2025-12-02`, `**Status:** ✅ COMPLETE`

---

## 4. Cross-Referencing Patterns

### 4.1 Internal References

**Relative Paths:**
- Use relative paths for internal references
- Example: `[Epic 1](epics/Epic-1/Epic-1.md)`
- Example: `[Task 1 Analysis](Story-003-core-kb-structure-for-dev-kit/T01-kb-structure-analysis.md)`

**Absolute Paths (from KB root):**
- Use absolute paths from `docs/` root when referencing across sections
- Example: `[Versioning Policy](../Architecture/standards-and-adrs/dev-kit-versioning-policy.md)`
- Example: `[Kanban Governance](../project-management/rituals/policy/kanban-governance-policy.md)`

**Cross-Section References:**
- Always use relative paths from current file location
- Calculate relative path: `../../Section/Subsection/file.md`
- Test links to ensure they work

### 4.2 External References

**Package References:**
- Reference packages using relative paths from KB root
- Example: `[Workflow Management README](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/README.md)`
- Use descriptive link text, not raw paths

**Root-Level References:**
- Reference root-level files using relative paths
- Example: `[Main Changelog](../../CHANGELOG.md)`
- Example: `[Root README](../../README.md)`

### 4.3 Reference Format

**Link Format:**
```markdown
[Descriptive Link Text](relative/path/to/file.md)
```

**Best Practices:**
- Use descriptive link text (not "click here" or "this file")
- Include file extension in links (`.md`)
- Test all links to ensure they work
- Use consistent link text for same target

**Version References:**
- Reference versions using format: `v{RC}.\{EPIC\}.\{STORY\}.\{TASK\}+\{BUILD\}`
- Example: `v0.1.3.1+1`
- Link to changelog: `[v0.1.3.1+1](../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.3.1+1.md)`

---

## 5. README Structure

### 5.1 Root README (`docs/README.md`)

**Required Sections:**
1. **Overview** - What is the KB and its purpose
2. **Structure** - High-level directory structure
3. **Navigation** - Quick links to major sections
4. **Getting Started** - Where to start for different user types

**Optional Sections:**
- Contributing guidelines
- Maintenance procedures
- Related resources

### 5.2 Section READMEs (e.g., `Architecture/README.md`)

**Required Sections:**
1. **Overview** - What this section contains
2. **Structure** - Directory structure within section
3. **Key Documents** - Links to important documents
4. **Navigation** - Links to subsections

**Optional Sections:**
- Purpose and audience
- Related sections
- Maintenance notes

### 5.3 Directory READMEs (e.g., `changelog-archive/README.md`)

**Required Sections:**
1. **Overview** - What this directory contains
2. **Contents** - List or index of files
3. **Navigation** - Links to key files or indexes

**Optional Sections:**
- Organization principles
- How to find specific content
- Related directories

---

## 6. Maintenance Procedures

### 6.1 Adding New Documents

**Process:**
1. Determine document purpose and audience
2. Choose appropriate section (Architecture, Project Management, Changelog, Guides)
3. Follow naming conventions
4. Place in appropriate directory
5. Update relevant READMEs with links
6. Add cross-references from related documents

### 6.2 Updating Existing Documents

**Process:**
1. Update document content
2. Update "Last updated" date in header
3. Update version marker if applicable
4. Update cross-references if document moved or renamed
5. Update relevant READMEs if document purpose changed

### 6.3 Moving Documents

**Process:**
1. Move file to new location
2. Update all cross-references to file
3. Update relevant READMEs
4. Test all links
5. Document move in changelog if significant

### 6.4 Archiving Documents

**Process:**
1. Move to appropriate archive directory
2. Update archive index/README
3. Update cross-references to point to archive location
4. Add note in original location if needed
5. Document archive in changelog

---

## 7. Consistency Checklist

When creating or updating KB documentation, verify:

- [ ] File follows naming conventions
- [ ] File is in appropriate directory (matches purpose)
- [ ] Directory has README.md (or plan to add one)
- [ ] Document has proper header metadata
- [ ] Cross-references use relative paths
- [ ] All links are tested and working
- [ ] Document follows structure principles
- [ ] Related READMEs are updated with links

---

## 8. Examples

### 8.1 Good Structure Example

```
docs/
├── README.md                          ✅ Root navigation
├── Architecture/
│   ├── README.md                      ✅ Section overview
│   └── standards-and-adrs/
│       ├── README.md                  ✅ Subsection overview
│       └── dev-kit-versioning-policy.md  ✅ Follows naming convention
└── Guides/
    ├── README.md                      ✅ Section overview
    └── getting-started/
        ├── README.md                  ✅ Directory overview
        └── quick-start.md             ✅ Follows naming convention
```

### 8.2 Good Cross-Reference Example

```markdown
## Related Documentation

- [Versioning Policy](../Architecture/standards-and-adrs/dev-kit-versioning-policy.md)
- [Kanban Governance](../project-management/rituals/policy/kanban-governance-policy.md)
- [Changelog Archive](../changelog-and-release-notes/changelog-archive/README.md)
```

### 8.3 Good README Example

```markdown
# Architecture Documentation

## Overview

This section contains technical standards, ADRs, and framework integration documentation.

## Structure

- `standards-and-adrs/` - Architecture Decision Records and standards
- `Integration/` - Framework integration documentation

## Key Documents

- [Versioning Policy](standards-and-adrs/dev-kit-versioning-policy.md)
- [Kanban-Versioning-RW Integration](standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md)

## Navigation

- [Project Management](../project-management/README.md)
- [Changelog](../changelog-and-release-notes/README.md)
- [Guides](../Guides/README.md)
```

---

## 9. Acceptance Criteria

- [x] KB structure principles documented
- [x] Naming conventions defined
- [x] File organization rules established
- [x] Cross-referencing patterns documented
- [x] README structure guidelines provided
- [x] Maintenance procedures documented
- [x] Consistency checklist provided
- [x] Examples provided

---

## 10. Related Documentation

- [KB Structure Analysis](T01-kb-structure-analysis.md) - Current and target structure analysis
- [KB Structure Migration Guide](T03-kb-structure-migration-guide.md) - Step-by-step migration (TBD)
- KB Structure Documentation (TBD — no `T005` task doc filed; see [T006 scalable KB pattern](T06-scalable-kb-pattern.md))

---

_End of Principles Document_

