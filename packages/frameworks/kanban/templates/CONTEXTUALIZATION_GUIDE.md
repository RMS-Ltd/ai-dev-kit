---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Contextualization Guide

**Purpose:** This guide explains how to contextualize canonical Epic/Story/Task templates for your specific project by replacing placeholders and customizing content.

**Version:** 1.0.0  
**Last Updated:** 2025-12-22  
**Related:** E4:S06:T05

---

## Overview

The canonical templates use placeholders (e.g., `{PROJECT_NAME}`, `{DOMAIN}`) that must be replaced with your project-specific values. This guide provides step-by-step instructions for contextualizing templates, along with examples for different project sizes.

---

## Placeholder System

### Standard Placeholders

**Core Placeholders:**
- `{PROJECT_NAME}` → Your project name (e.g., "MyApp", "Confidentia", "fynd.deals")
- `{DOMAIN}` → Your project domain (e.g., "myapp.com", "confidentia.io", "fynd.deals")
- `{ORGANIZATION}` → Your organization name (e.g., "Acme Corp", "My Startup")
- `{TECH_STACK}` → Primary technology stack (e.g., "Python/Django", "Node.js/Express", "React/TypeScript")

**Context-Specific Placeholders:**
- `{FRAMEWORK_NAME}` → Framework name (if applicable)
- `{API_NAME}` → API name (if applicable)
- `{SERVICE_NAME}` → Service name (if applicable)
- `{FEATURE_NAME}` → Feature name (if applicable)

### Placeholder Replacement Rules

**1. Case Sensitivity:**
- Placeholders are case-sensitive: `{PROJECT_NAME}` ≠ `{project_name}`
- Replace with exact case matching your project conventions

**2. Multiple Occurrences:**
- Replace ALL occurrences of each placeholder
- Use find-and-replace tools for consistency

**3. Context Preservation:**
- Maintain grammatical correctness after replacement
- Adjust articles (a/an/the) if needed
- Preserve formatting and structure

**4. Custom Placeholders:**
- You can add project-specific placeholders
- Document custom placeholders in your project README

---

## Step-by-Step Contextualization Process

### Phase 1: Preparation

**1. Identify Your Project Type:**
- **Tiny:** Solo project, minimal scope (Core Epics 1-7, 8, 10, 18, 22, 23)
- **Small:** Small team, moderate scope (Core Epics + 1-3 project epics)
- **Medium:** Medium team, substantial scope (Core Epics + 3-5 project epics)
- **Ambitious:** Large team, full scope (Core Epics + all project epics as needed)

**2. Gather Project Information:**
- Project name
- Domain/organization
- Technology stack
- Primary use cases
- Target users

**3. Select Epic Set:**
- Core Epics (1-7, 8, 10, 18, 22, 23) - Required
- Project Epics (9, 11-17, 19-21+) - As needed

### Phase 2: Placeholder Replacement

**1. Create Replacement Map:**
```yaml
PROJECT_NAME: "MyApp"
DOMAIN: "myapp.com"
ORGANIZATION: "Acme Corp"
TECH_STACK: "Python/Django"
```

**2. Replace in Templates:**
- Use find-and-replace (case-sensitive)
- Start with Epic templates
- Then Story templates
- Finally Task templates

**3. Verify Replacements:**
- Check all placeholders replaced
- Verify grammatical correctness
- Ensure consistency across templates

### Phase 3: Customization

**1. Review Epic Descriptions:**
- Adjust purpose/scope to match your project
- Update key characteristics
- Modify typical stories if needed

**2. Review Story Descriptions:**
- Customize story purposes
- Adjust typical tasks
- Add/remove tasks as needed

**3. Review Task Descriptions:**
- Customize task scopes
- Adjust acceptance criteria
- Modify approach steps

### Phase 4: Validation

**1. Consistency Check:**
- Verify Epic/Story/Task alignment
- Check version schema consistency
- Validate naming conventions

**2. Completeness Check:**
- All placeholders replaced
- All required sections filled
- All links valid

**3. Quality Check:**
- Grammar and spelling
- Formatting consistency
- Documentation clarity

---

## Scalability Guidance

### Tiny Projects

**Epic Set:** Core Epics 1-7, 8, 10, 18, 22, 23

**Characteristics:**
- Solo developer or very small team
- Minimal scope, focused features
- Quick iteration cycles

**Customization:**
- Keep Epic descriptions concise
- Reduce Story/Task counts where possible
- Focus on essential functionality

**Example:** Personal blog, simple web app, CLI tool

### Small Projects

**Epic Set:** Core Epics + 1-3 project epics (e.g., Epic 11: API, Epic 12: UI)

**Characteristics:**
- Small team (2-5 developers)
- Moderate scope
- Clear feature boundaries

**Customization:**
- Add 1-3 project-specific epics
- Expand Story/Task coverage as needed
- Maintain clear epic boundaries

**Example:** SaaS MVP, internal tool, small API service

### Medium Projects

**Epic Set:** Core Epics + 3-5 project epics (e.g., Epic 11-13, Epic 15-16)

**Characteristics:**
- Medium team (5-15 developers)
- Substantial scope
- Multiple feature areas

**Customization:**
- Add 3-5 project-specific epics
- Expand Story/Task coverage significantly
- Consider epic dependencies

**Example:** Enterprise application, platform service, multi-tenant SaaS

### Ambitious Projects

**Epic Set:** Core Epics + all project epics as needed (Epics 9, 11-21+)

**Characteristics:**
- Large team (15+ developers)
- Full scope
- Complex feature interactions

**Customization:**
- Add all relevant project epics
- Full Story/Task coverage
- Consider epic dependencies and sequencing

**Example:** Large platform, multi-service architecture, enterprise suite

---

## Customization Guidelines

### Epic Customization

**What to Customize:**
- Epic purpose and scope
- Key characteristics
- Typical stories (add/remove as needed)

**What NOT to Customize:**
- Epic numbering (maintain canonical order)
- Core Epic structure (Epics 1-7, 8, 10, 18, 22, 23)
- Version schema format

### Story Customization

**What to Customize:**
- Story purpose and goals
- Typical tasks (add/remove as needed)
- Acceptance criteria

**What NOT to Customize:**
- Story numbering within Epic (maintain canonical order)
- Story template structure
- Version schema format

### Task Customization

**What to Customize:**
- Task scope and description
- Acceptance criteria
- Approach steps
- Dependencies

**What NOT to Customize:**
- Task numbering within Story (maintain canonical order)
- Task template structure
- Version schema format

---

## Examples

See the `examples/contextualized/` directory for complete examples:

- **Tiny Project:** `examples/contextualized/tiny-project/`
  - Core Epics only (1-7, 8, 10, 18, 22, 23)
  - Minimal customization
  - Focused scope

- **Small Project:** `examples/contextualized/small-project/`
  - Core Epics + Epic 11 (API), Epic 12 (UI)
  - Moderate customization
  - Clear boundaries

- **Ambitious Project:** `examples/contextualized/ambitious-project/`
  - Core Epics + Epics 9, 11-17, 19-21
  - Full customization
  - Comprehensive coverage

---

## Troubleshooting

### Common Issues

**1. Placeholder Not Found:**
- Check case sensitivity
- Verify placeholder spelling
- Search for variations

**2. Inconsistent Replacements:**
- Use find-and-replace tools
- Create replacement map
- Verify all occurrences

**3. Grammatical Errors:**
- Review after replacement
- Adjust articles if needed
- Check sentence structure

**4. Missing Context:**
- Review Epic/Story/Task descriptions
- Add project-specific context
- Update examples

### Best Practices

**1. Start Small:**
- Begin with Core Epics
- Add project epics incrementally
- Validate as you go

**2. Maintain Consistency:**
- Use consistent naming
- Follow version schema
- Keep structure aligned

**3. Document Changes:**
- Track customizations
- Document deviations
- Update as needed

---

## Integration with Installer

The contextualization process integrates with the Kanban installer:

**1. Installer Prompts:**
- Project name
- Domain/organization
- Technology stack
- Project type (tiny/small/medium/ambitious)

**2. Automatic Replacement:**
- Installer performs placeholder replacement
- Generates contextualized templates
- Creates project structure

**3. Manual Override:**
- Review generated templates
- Customize as needed
- Validate structure

**4. Setup Guide Integration:**
- See Step 4 of the [Framework Dependency Post-Template Setup Guide](../../../docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md) for complete installation workflow
- The setup guide provides step-by-step instructions for using the installer and contextualizing templates

---

## References

- **Comprehensive Structure:** `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- **Epic Template:** `EPIC_TEMPLATE.md`
- **Story Template:** `STORY_TEMPLATE.md`
- **Task Template:** `TASK_TEMPLATE.md`
- **Examples:** `examples/contextualized/`
- **Setup Guide:** `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Complete project setup instructions
- **Installer:** `scripts/install_kanban_framework.py` - Interactive installation script

---

## Decision Record

**Decision:** Provide comprehensive contextualization guide with placeholder system, step-by-step process, scalability guidance, and examples.

**Rationale:**
- Enables systematic template contextualization
- Reduces cognitive load for adopters
- Supports projects of all sizes
- Provides clear guidance and examples

**Consequences:**
- Requires maintenance as templates evolve
- Needs examples for different project types
- Supports installer integration

