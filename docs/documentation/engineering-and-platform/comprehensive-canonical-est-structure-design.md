---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T17:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Comprehensive Canonical Epics/Stories/Tasks Structure Design

**Document Type:** Design Documentation  
**Status:** Design Complete, Implementation Pending  
**Related:** FR-005, BR-004  
**Created:** 2025-12-09  
**Version:** 1.0

---

## Summary

This document describes the design and rationale for a comprehensive canonical Epics/Stories/Tasks (E/S/T) structure that provides a complete, scalable template system for projects adopting ai-dev-kit. The structure addresses the need for a systematic approach to canonical patterns, eliminating the ad-hoc nature of previous canonical epic additions.

---

## Problem Statement

### Original Problem (BR-004)
When using ai-dev-kit as a template, new projects receive all epics (1-9) from the template repository, including project-specific epics (5-9) that are specific to ai-dev-kit. This causes epic contamination and confusion about which epics are canonical vs. project-specific.

### Broader Problem (FR-005)
The approach to adding canonical epics has been ad-hoc. There was no systematic template system for canonical epics/stories/tasks that could be contextualized for new projects. Solo developers and teams starting new projects had to expend cognitive energy thinking up E/S/T structure, rather than having a comprehensive, ready-to-use structure.

### Use Case Requirements
- **Solo developers** need a structure that works for tiny projects
- **Small teams** need a structure that scales to early-stage projects
- **Ambitious projects** (like Confidentia, fynd.deals) need comprehensive coverage
- **All projects** need minimal cognitive load - structure should be pre-defined and contextualizable

---

## Solution Design

### Comprehensive Canonical Structure

Created `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` with:

1. **Framework Epics (1-7):** Always included in all projects
   - Epic 1: \{PROJECT_NAME\} Core
   - Epic 2: Workflow Management Framework
   - Epic 3: Numbering & Versioning Framework
   - Epic 4: Kanban Framework
   - Epic 5: FR Implementation
   - Epic 6: BR Implementation
   - Epic 7: User Experience Research (UXR) - **NEW**

2. **Project-Specific Canonical Epics (8-21+):** Common patterns for ambitious projects
   - Epic 8: Codebase Maintenance and Review
   - Epic 9: User Management and Authentication
   - Epic 10: Data Management and Database
   - Epic 11: API and Backend Services
   - Epic 12: Frontend and User Interface
   - Epic 13: Testing and Quality Assurance
   - Epic 14: Deployment and DevOps
   - Epic 15: Security
   - Epic 16: Performance and Optimization
   - Epic 17: Integration and Third-Party Services
   - Epic 18: Documentation
   - Epic 19: Analytics and Monitoring
   - Epic 20: Mobile Application
   - Epic 21: Internationalization and Localization

### Structure Coverage

- **7 Framework Epics** (always included)
- **14+ Project-Specific Canonical Epics** (add as needed)
- **~50+ Stories** total (2-5 stories per epic)
- **~300+ Tasks** total (3-8 tasks per story)

---

## Design Rationale

### Epic 7: UXR as Canonical Epic

**Decision:** Add User Experience Research (UXR) as Epic 7, bumping Codebase Maintenance to Epic 8.

**Rationale:**
1. **Bridges Framework and Project Work:** UXR is a universal need that bridges framework infrastructure (Epics 1-6) and project-specific work (Epics 8+). It's needed by all projects, regardless of size.
2. **User-Centered Design:** Modern development practices emphasize user-centered design. UXR provides the organizational structure for understanding users and ensuring products meet user needs.
3. **Completeness:** The structure was missing a canonical epic for user research, which is fundamental to product development.
4. **Integration with FR/BR:** UXR findings often lead to FRs and BRs, making it a natural bridge between framework epics and implementation epics.

**Epic 7 UXR Structure:**
- 5 Stories covering the full UXR lifecycle
- ~35 Tasks total (7 tasks per story)
- Covers: Research, Testing, Feedback, Journey Mapping, Insights

### Epic Ordering Rationale

**Framework Epics (1-7):**
1. **Epic 1:** Project Core - Foundational epic that establishes the base
2. **Epic 2:** Workflow Management - Operational framework for workflows
3. **Epic 3:** Versioning - Operational framework for versioning
4. **Epic 4:** Kanban - Operational framework for Kanban
5. **Epic 5:** FR Implementation - Implementation epic (FRs come first)
6. **Epic 6:** BR Implementation - Implementation epic (BRs follow FRs)
7. **Epic 7:** UXR - User research epic (bridges framework and project work)

**Ordering Principles:**
- Foundational epics come first (Epic 1)
- Operational frameworks follow (Epics 2-4)
- Implementation epics that support frameworks come next (Epics 5-6)
- User research epic bridges framework and project work (Epic 7)
- Project-specific epics follow (Epics 8+)

### Scalability Design

The structure is designed to scale from tiny solo projects to ambitious enterprise projects:

**Tiny Projects (Solo Developer, MVP):**
- Use Epics 1-7 only (framework epics)
- Skip or simplify stories/tasks as needed
- Focus on core functionality

**Small Projects (1-3 Developers, Early Stage):**
- Use Epics 1-7 + 1-3 project-specific epics (Epics 8-10)
- Include essential stories only
- Focus on core features and basic infrastructure

**Medium Projects (3-5 Developers, Growing):**
- Use Epics 1-7 + 3-5 project-specific epics (Epics 8-13)
- Include most stories
- Add testing, deployment, and documentation

**Ambitious Projects (5+ Developers, Enterprise Scale):**
- Use full structure (Epics 1-21+)
- Include all relevant stories and tasks
- Add advanced epics (Security, Performance, Analytics, etc.)

### Contextualization System

**Placeholders:**
- `\{PROJECT_NAME\}` → Your project name (e.g., "MyApp", "Confidentia", "fynd.deals")
- `\{DOMAIN\}` → Your project domain (e.g., "e-commerce", "healthcare", "finance")
- `\{TECH_STACK\}` → Your technology stack (e.g., "Python/Flask", "React/Node.js", "Flutter/Dart")
- `{TEAM_SIZE}` → Team size context (e.g., "solo", "small-team", "large-team")

**Process:**
1. Copy canonical structure
2. Replace placeholders with project-specific values
3. Remove irrelevant epics/stories/tasks
4. Add project-specific epics/stories/tasks as needed
5. Scale as project grows

---

## Implementation Requirements

### Phase 1: Template Creation
- [ ] Create individual epic template files for Epics 1-7
- [ ] Create individual epic template files for Epics 8-21
- [ ] Create story template files for each typical story
- [ ] Create task template files for each typical task
- [ ] Ensure all templates use placeholders for contextualization

### Phase 2: Documentation
- [ ] Update `CANONICAL_EPICS.md` to reference comprehensive structure
- [ ] Create contextualization guide
- [ ] Create usage examples for different project types
- [ ] Document scalability guidelines

### Phase 3: Integration
- [ ] Integrate with Kanban installer/initializer (when created)
- [ ] Update template setup guide
- [ ] Create installation workflow that uses canonical templates
- [ ] Ensure separation from project-specific content

### Phase 4: Validation
- [ ] Test with tiny project (Epics 1-7 only)
- [ ] Test with small project (Epics 1-7 + 2-3 project epics)
- [ ] Test with ambitious project (full structure)
- [ ] Validate contextualization process
- [ ] Gather feedback from real project adoption

---

## Benefits

### For Solo Developers
- **Zero cognitive load:** Pre-defined structure ready to use
- **Scalable:** Start minimal, expand as needed
- **Comprehensive:** Covers all common patterns

### For Small Teams
- **Consistent structure:** All projects start with same foundation
- **Clear guidance:** Know what epics/stories/tasks to include
- **Time savings:** No need to design structure from scratch

### For Ambitious Projects
- **Complete coverage:** All common patterns included
- **Professional structure:** Enterprise-grade organization
- **Flexible:** Add project-specific epics as needed

### For Framework Maintainers
- **Systematic process:** Clear criteria for canonical additions
- **Maintainable:** Centralized template system
- **Extensible:** Easy to add new canonical patterns

---

## Related Work

- **BR-004:** Kanban Installation Includes Project-Specific Epics from Template
- **FR-005:** Systematic Canonical Epics/Stories/Tasks Template System
- **E4:S05:** Canonical Epics for Kanban Framework (created initial canonical epics documentation)

---

## Files Created

- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Complete canonical structure document

---

## Next Steps

1. Create Kanban task for implementation (E4:SXX:TXX)
2. Implement Phase 1: Template Creation
3. Implement Phase 2: Documentation
4. Implement Phase 3: Integration
5. Implement Phase 4: Validation

---

**Last Updated:** 2025-12-09  
**Version:** 1.0  
**Maintained By:** Kanban Framework Team

