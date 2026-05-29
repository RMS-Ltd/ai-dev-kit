---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Use Cases Knowledge Base

**Purpose:** Central repository for all use cases, organized by type (Canonical vs Discovered) and domain.

**Audience:** Project maintainers, designers, developers, framework users

---

## Overview

This section contains all use cases for the ai-dev-kit framework and related patterns. Use cases are organized into two categories:

1. **Canonical Use Cases:** Planned, designed use cases from the design phase
2. **Discovered Use Cases:** Patterns and practices discovered during actual work

---

## Quick Navigation

- **[Methodology](USE_CASE_METHODOLOGY.md)** - How to organize and manage use cases
- **[Canonical Use Cases](../architecture/use-cases/canonical/README.md)** - Design-phase use cases (architecture KB)
- **[Discovered Use Cases](use-cases/discovered/README.md)** - Implementation-phase use cases
- **[Templates](use-cases/templates/DISCOVERED_USE_CASE_TEMPLATE.md)** - Discovered use case template (see also architecture canonical template)
- **[Articles](articles/README.md)** - Blog posts and in-depth articles
- **[Analysis](analysis/meta-analysis-executive-summary.md)** - Analysis documents and reports (entry index)
- **[Guides](guides/README.md)** - How-to guides and tutorials
- **[Reviews](reviews/pir/README.md)** - Post-implementation reviews (PIRs)

---

## Knowledge Base Categories

### Articles

**Location:** [`articles/README.md`](articles/README.md)

**Definition:** In-depth blog posts, articles, and comprehensive write-ups on framework topics, patterns, and lessons learned.

**Examples:**
- Hybrid task template system: Building better templates
- Framework adoption stories
- Technical deep-dives
- Lessons learned and best practices

**Recent Articles:**
- [Building Better Templates: How We Solved the 300-Template Problem with a Hybrid Approach](articles/hybrid-task-template-system-building-better-templates.md)

---

### Use Case Types

### Canonical Use Cases

**Location:** [Architecture canonical use cases](../architecture/use-cases/canonical/README.md)

**Definition:** Use cases identified and documented during the design/planning phase, before implementation.

**Characteristics:**
- Planned and intentional
- Part of original design/architecture
- Documented before implementation
- Stable and well-defined

**Examples:**
- Framework adoption patterns
- Workflow execution patterns
- Versioning patterns
- Kanban organization patterns

---

### Discovered Use Cases

**Location:** [`use-cases/discovered/README.md`](use-cases/discovered/README.md)

**Definition:** Use cases, patterns, or practices discovered during actual work, implementation, or problem-solving.

**Characteristics:**
- Emergent from real work
- Discovered during implementation
- May reveal gaps in original design
- Can inform future canonical design

**Examples:**
- Re-opening BRs/tasks pattern
- Bidirectional wiring principle
- Pattern discovery workflow

---

## Use Case Indexes

### Canonical Use Cases Index

See [canonical use cases index](../architecture/use-cases/canonical/README.md) for complete index of canonical use cases.

### Discovered Use Cases Index

See [`use-cases/discovered/README.md`](use-cases/discovered/README.md) for complete index of discovered use cases.

---

## How to Use This Section

### Finding Use Cases

1. **By Type:**
   - Articles: Check `articles/` directory
   - Canonical Use Cases: Check `use-cases/canonical/` directory
   - Discovered Use Cases: Check `use-cases/discovered/` directory
   - Analysis: Check `analysis/` directory
   - Guides: Check `guides/` directory
   - Reviews: Check `reviews/` directory

2. **By Domain:**
   - Check indexes in each directory
   - Use domain tags in use case documents

3. **By Status:**
   - Active: Check active use cases in indexes
   - Deprecated: Check deprecated use cases
   - Promoted: Check promoted discovered use cases

### Creating Use Cases

1. **Article:**
   - Create in `articles/` directory
   - Follow naming convention: `[topic]-[descriptive-title].md`
   - Include lifecycle metadata (evergreen recommended)
   - Link from relevant documentation

2. **Canonical Use Case:**
   - Use `use-cases/templates/CANONICAL_USE_CASE_TEMPLATE.md`
   - Create in `use-cases/canonical/` directory
   - Follow naming convention: `UC-XXX-[title].md` (UC implies canonical)
   - Update `use-cases/canonical/README.md` index

3. **Discovered Use Case:**
   - Use `use-cases/templates/DISCOVERED_USE_CASE_TEMPLATE.md`
   - Create in `use-cases/discovered/` directory
   - Follow naming convention: `UC-D-XXX-[title].md`
   - Wire to related BR/FR, Tasks, documentation
   - Update `use-cases/discovered/README.md` index

---

## Related Documentation

- [USE_CASE_METHODOLOGY.md](USE_CASE_METHODOLOGY.md) - Complete methodology guide
- [BIDIRECTIONAL_WIRING_PRINCIPLE.md](../project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md) - Example discovered use case
- [REOPENING_BR_AND_TASKS_GUIDE.md](../project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md) - Example discovered use case

---

_This section is part of the Knowledge Base. See `docs/README.md` for complete KB structure._
