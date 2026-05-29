---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Knowledge Base Guides

**Purpose:** How-to guides, tutorials, and Standard Operating Procedures (SoPs) for framework usage and best practices.

**Audience:** Developers, project managers, framework users, AI agents

---

## Overview

This section contains practical guides and Standard Operating Procedures (SoPs) for using the AI Dev Kit framework, managing projects, and following best practices. Guides are organized by topic and provide step-by-step instructions for common tasks.

---

## Standard Operating Procedures (SoPs)

SoPs define standardized processes and procedures for consistent execution of workflows and tasks.

### Task Management & Cross-Wiring

- **[Task Template Cross-Wiring SoP](../../architecture/standards-and-adrs/task-template-cross-wiring-sop.md)** - Standard procedure for cross-wiring tasks, emphasizing bidirectional linking and contextual relationships between interconnected tasks.

### Bug Report & Feature Request Management

- **[Mixed BR/FR Scope Handling SoP](../../architecture/standards-and-adrs/mixed-br-fr-scope-sop.md)** - Standard procedure for handling mixed-scope Bug Reports and Feature Requests, including when to split documents and how to maintain traceability.

---

## Framework Usage Guides

### Package Management

- **[Package Maintenance and Release](../../architecture/standards-and-adrs/package-maintenance-and-release.md)** - Guide for maintaining and releasing packages in the framework.

### Knowledge Management

- **[Building Persistent Knowledge](./building-persistent-knowledge.md)** - Guide for building and maintaining persistent knowledge bases in Cursor.

### Repository Setup

- **[Badge Setup for Private Repos](./badge-setup-for-private-repos.md)** - Guide for setting up badges in private repositories.

---

## How to Use This Section

### Finding Guides

1. **By Topic:**
   - Task Management: Check SoP section
   - Package Management: Check Framework Usage Guides
   - Knowledge Management: Check Framework Usage Guides

2. **By Type:**
   - SoPs: Standard Operating Procedures (process definitions)
   - Guides: How-to guides and tutorials

### Creating Guides

1. **SoP Document:**
   - Create in `docs/architecture/standards-and-adrs/` directory
   - Follow naming convention: `[topic]-sop.md` or `[topic]-[descriptive-name]-sop.md`
   - Include lifecycle metadata (evergreen recommended)
   - Link from this README
   - Reference from related FR/BR documents

2. **Usage Guide:**
   - Create in `docs/knowledge/guides/` directory
   - Follow naming convention: `[topic]-[descriptive-title].md`
   - Include lifecycle metadata
   - Link from this README
   - Provide step-by-step instructions

---

## Related Documentation

- **Architecture Standards:** `docs/architecture/standards-and-adrs/` - All SoP documents and ADRs
- **Feature Requests:** `docs/project-management/kanban/fr-br/` - FRs that may reference SoPs
- **Task Templates:** `packages/frameworks/kanban/templates/` - Templates that implement SoP guidance

---

_This section is part of the Knowledge Base. See `docs/knowledge/README.md` for complete KB structure._

