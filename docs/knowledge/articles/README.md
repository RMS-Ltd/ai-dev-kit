---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T10:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Articles

**Purpose:** In-depth blog posts, articles, and comprehensive write-ups on framework topics, patterns, and lessons learned.

**Audience:** Framework users, maintainers, developers, technical writers

---

## Overview

This directory contains comprehensive articles and blog-style posts covering:

- Framework design decisions and rationale
- Implementation stories and lessons learned
- Technical deep-dives and patterns
- Best practices and anti-patterns
- Real-world case studies

---

## Articles

### Internal Articles

#### Hybrid Task Template System

- **[Building Better Templates: How We Solved the 300-Template Problem with a Hybrid Approach](hybrid-task-template-system-building-better-templates.md)**
  - **Published:** 2025-12-22
  - **Version:** v0.4.15.5+1
  - **Epic:** E4 (Kanban Framework)
  - **Story:** S15 (Procedural Task Template Generation and Hybrid Strategy)
  - **Summary:** Comprehensive deep-dive into solving template management at scale, balancing quality with maintainability through a hybrid approach combining concrete templates with procedural generation.

### External Sources

#### Multi-Agent Coordination Research

- **[Scaling long-running autonomous coding](cursor-scaling-long-running-autonomous-coding-agents.md)**
  - **Published:** 2026-01-14
  - **Author:** Wilson Lin (Cursor)
  - **Source:** [cursor.com/blog/scaling-agents](https://cursor.com/blog/scaling-agents)
  - **Summary:** Research findings from Cursor's experiments with hundreds of concurrent agents working on large-scale projects. Covers planner/worker architecture, coordination mechanisms, model selection, and lessons learned from running agents for weeks on ambitious projects (browser from scratch, Solid→React migration, etc.).
  - **Related:** [FR-031: Multi-Agent Coordination Feasibility Investigation](../../project-management/kanban/fr-br/FR-031-multi-agent-coordination-feasibility-investigation.md)

---

## Article Guidelines

### When to Create an Article

Create an article when you have:
- A comprehensive story to tell about a framework feature or decision
- Lessons learned worth sharing broadly
- Technical deep-dives that go beyond standard documentation
- Real-world case studies with valuable insights

### Article Structure

Articles should include:
- **Engaging title and introduction**
- **Problem statement** (what challenge was being solved)
- **Journey/analysis** (how the problem was approached)
- **Solution** (what was implemented)
- **Benefits and trade-offs** (what worked, what didn't)
- **Lessons learned** (key takeaways)
- **References** (links to related documentation)

### Naming Convention

- Use kebab-case: `[topic]-[descriptive-title].md`
- Be descriptive and searchable
- Examples:
  - `hybrid-task-template-system-building-better-templates.md`
  - `framework-adoption-lessons-learned.md`
  - `versioning-schema-evolution-deep-dive.md`

### Lifecycle Metadata

Articles are typically **evergreen** (permanent documentation):
- `lifecycle: evergreen`
- `ttl_days: null`
- `housekeeping_policy: keep`

---

## Related Documentation

- [Knowledge Base README](../README.md) - Complete KB structure
- [Analysis Documents](../analysis/meta-analysis-executive-summary.md) - Analysis reports and investigations
- [Guides](../guides/README.md) - How-to guides and tutorials
- [Use Cases](../use-cases/discovered/README.md) - Discovered use cases (see also [architecture canonical use cases](../../architecture/use-cases/canonical/README.md))

---

_This section is part of the Knowledge Base. See `docs/knowledge/README.md` for complete KB structure._

