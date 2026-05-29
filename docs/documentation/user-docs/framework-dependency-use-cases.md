---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Dependency Use Cases

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-07  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 4 - Framework Documentation Management  
**Task:** E05:S04:T05 - Create comprehensive user documentation for Epic 6 framework dependency architecture

---

## Overview

This document provides a comprehensive overview of all use cases for adopting ai-dev-kit frameworks. It helps users identify which adoption pattern best fits their needs and provides guidance on implementation approaches.

### Canonical first-run pointer

For a new/template repository following the current greenfield-first policy (FR-080 / E6:S09:T01), start with:

- [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
- [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)

For brownfield modular integration boundaries, see:

- [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Primary Use Cases

### Use Case 1: Template → All Packages

**Scenario:** Create a new GitHub project using ai-dev-kit as a template, installing all bundled packages.

**When to Use:**
- Starting a new project from scratch
- Want complete ai-dev-kit structure and all frameworks
- Need full KB organization, workflows, and tooling
- Book readers following complete setup

**Benefits:**
- Complete starting structure
- All frameworks pre-configured
- Full KB organization included
- Ready to use immediately
- All frameworks benefit from version updates

**Implementation:**
1. Create repository from ai-dev-kit template
2. All frameworks included automatically
3. Follow [Post-Template Setup Guide](framework-dependency-post-template-setup-guide.md) to customize
4. Receive updates for all frameworks via version numbers

**Documentation:**
- See [Installation Guide - Template Usage](framework-dependency-installation-guide.md#alternative-use-ai-dev-kit-as-a-github-template)
- See [Post-Template Setup Guide](framework-dependency-post-template-setup-guide.md) - Essential customization steps

---

### Use Case 2: Template → Some Packages

**Scenario:** Create a new GitHub project using ai-dev-kit as a template, installing one or more (but not all) bundled packages.

**When to Use:**
- Starting a new project
- Only need specific frameworks (e.g., just Kanban, or Kanban + Versioning)
- Want KB structure but not all frameworks
- Prefer selective adoption

**Benefits:**
- Complete KB structure included
- Only install what you need
- Customize to your requirements
- Selected frameworks benefit from version updates

**Implementation:**
1. Create repository from ai-dev-kit template
2. Remove unused frameworks
3. Keep only frameworks you need
4. Receive updates for selected frameworks via version numbers

**Documentation:**
- See [Installation Guide - Template Usage](framework-dependency-installation-guide.md#alternative-use-ai-dev-kit-as-a-github-template)
- See [Installation Guide - Selective Installation](framework-dependency-installation-guide.md#selective-framework-installation)

---

### Use Case 3: Existing Project → All Packages

**Scenario:** Install all ai-dev-kit packages into a pre-existing GitHub project.

**When to Use:**
- Have an existing project
- Want to adopt all ai-dev-kit frameworks
- Need to integrate with existing structure
- Migrating from manual processes

**Benefits:**
- Add frameworks to existing project
- Integrate with current workflows
- All frameworks benefit from version updates
- Maintain existing project structure

**Implementation:**
1. Install frameworks using Git submodules, CLI tool, or package managers
2. Integrate with existing project structure
3. Configure frameworks for your project
4. Receive updates for all frameworks via version numbers

**Documentation:**
- See [Installation Guide - Installation Methods](framework-dependency-installation-guide.md#installation-methods)
- See [Integration Guide](framework-dependency-integration-guide.md)

---

### Use Case 4: Existing Project → Some Packages

**Scenario:** Install one or more (but not all) ai-dev-kit packages into a pre-existing GitHub project.

**When to Use:**
- Have an existing project
- Only need specific frameworks
- Gradual adoption approach
- Selective framework integration

**Benefits:**
- Add only what you need
- Incremental adoption
- Flexible integration
- Selected frameworks benefit from version updates

**Implementation:**
1. Install selected frameworks using preferred method
2. Integrate with existing project structure
3. Add more frameworks as needed
4. Receive updates for installed frameworks via version numbers

**Documentation:**
- See [Installation Guide - Installation Methods](framework-dependency-installation-guide.md#installation-methods)
- See [Integration Guide - Selective Adoption](framework-dependency-integration-guide.md#selective-framework-adoption)

---

## Additional Use Cases

### Use Case 5: Reference/Learning Only

**Scenario:** Use ai-dev-kit documentation, examples, and patterns without installing frameworks as dependencies.

**When to Use:**
- Learning AI-assisted development practices
- Studying framework patterns and approaches
- Copying specific templates or snippets
- Reference material for project planning

**Benefits:**
- No dependency management overhead
- Study patterns without commitment
- Copy specific components as needed
- Educational and research purposes

**Implementation:**
- Browse documentation and examples
- Copy templates or code snippets manually
- Study patterns and best practices
- No installation required

**Documentation:**
- See framework READMEs in `packages/frameworks/`
- See [Architecture overview](../../architecture/README.md) and [KB structure / integration pointers](../../architecture/standards-and-adrs/kb-structure-overview.md)
- See [Framework Templates (repository)](https://github.com/earlution/ai-dev-kit/tree/main/packages/frameworks)

---

### Use Case 6: Monorepo/Multi-Project Setup

**Scenario:** Single ai-dev-kit installation shared across multiple projects in a monorepo.

**When to Use:**
- Managing multiple related projects
- Want centralized framework management
- Need version consistency across projects
- Monorepo architecture

**Benefits:**
- Single installation point
- Centralized framework management
- Version consistency across projects
- Shared KB structure (optional)

**Implementation:**
1. Install frameworks at monorepo root
2. Projects reference shared frameworks
3. Centralized update management
4. All projects benefit from updates

**Documentation:**
- See [Installation Guide - Monorepo Setup](framework-dependency-installation-guide.md#monorepo-setup) (to be added)
- See [Integration Guide - Multi-Project](framework-dependency-integration-guide.md#monorepo-integration)

---

### Use Case 7: Gradual/Migratory Adoption

**Scenario:** Start with one framework, add more over time, or migrate from copy-paste to dependencies.

**When to Use:**
- Testing frameworks before full adoption
- Migrating from copy-paste approach
- Incremental workflow improvement
- Risk-averse adoption strategy

**Benefits:**
- Low-risk adoption
- Test before committing
- Gradual workflow improvement
- Hybrid approach during transition

**Implementation:**
1. Start with one framework (e.g., Kanban)
2. Test and validate
3. Add more frameworks incrementally
4. Migrate from copy-paste as needed

**Documentation:**
- See [Integration Guide - Migration from Copy-Paste](framework-dependency-integration-guide.md#migration-from-copy-paste)
- See [Integration Guide - Gradual Adoption](framework-dependency-integration-guide.md#gradual-adoption)

---

### Use Case 8: Fork and Customize

**Scenario:** Fork the entire ai-dev-kit repository for heavy customization.

**When to Use:**
- Need significant framework modifications
- Organization-specific requirements
- Want to maintain custom versions
- Not planning to use automatic updates

**Benefits:**
- Full control over frameworks
- Custom modifications allowed
- Organization-specific adaptations
- Independent versioning

**Considerations:**
- May not benefit from automatic updates
- Requires maintaining fork
- More maintenance overhead
- Consider contributing back to upstream

**Documentation:**
- See [GitHub Forking Guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- See [Contributing Guidelines](https://github.com/earlution/ai-dev-kit/blob/main/CONTRIBUTING.md) (if exists)

---

### Use Case 9: Non-GitHub Git Repositories

**Scenario:** Use ai-dev-kit frameworks in GitLab, Bitbucket, or self-hosted Git repositories.

**When to Use:**
- Using GitLab, Bitbucket, or other Git hosts
- Self-hosted Git infrastructure
- Organization-specific Git hosting

**Benefits:**
- Works with any Git repository
- Same dependency mechanisms
- Framework updates still available
- Flexible hosting options

**Limitations:**
- Template feature may not be available
- Manual setup required
- May need to adapt instructions

**Implementation:**
1. Use Git submodules (works with any Git host)
2. Manual template setup if needed
3. Follow installation guide (adapt for your Git host)
4. Receive updates via Git tags

**Documentation:**
- See [Installation Guide - Git Submodules](framework-dependency-installation-guide.md#method-1-git-submodules-phase-1---available-now)
- See [FAQ - Non-GitHub Repositories](framework-dependency-faq.md#can-i-use-frameworks-with-non-github-repositories)

---

### Use Case 10: Local-Only Projects

**Scenario:** Use frameworks in local Git repository without remote repository.

**When to Use:**
- Personal projects
- Local development only
- No remote collaboration needed
- Privacy/security requirements

**Benefits:**
- No remote repository required
- Local-only development
- Full framework functionality
- Privacy and security

**Limitations:**
- No remote backup
- No collaboration features
- Manual update process
- No CI/CD integration

**Implementation:**
1. Initialize local Git repository
2. Install frameworks using Git submodules
3. Work locally
4. Manual updates as needed

**Documentation:**
- See [Installation Guide - Local Setup](framework-dependency-installation-guide.md#setting-up-a-git-repository)

---

### Use Case 11: CI/CD Only Usage

**Scenario:** Use frameworks in build/CI processes without local development installation.

**When to Use:**
- Frameworks used only in automation
- CI/CD pipeline integration
- Automated workflows
- Build-time framework usage

**Benefits:**
- Frameworks in automation only
- No local development overhead
- Automated workflow integration
- Build-time framework usage

**Implementation:**
1. Install frameworks in CI/CD environment
2. Use frameworks in build scripts
3. Automated workflow execution
4. Framework updates in CI/CD

**Documentation:**
- See [Integration Guide - CI/CD Integration](framework-dependency-integration-guide.md#cicd-integration)
- See framework-specific CI/CD examples

---

### Use Case 12: Educational/Training Context

**Scenario:** Use ai-dev-kit for teaching, workshops, or training materials.

**When to Use:**
- Teaching AI-assisted development
- Workshop/training materials
- Students following book examples
- Educational consistency

**Benefits:**
- Consistent starting point
- Template for all students
- Standardized examples
- Easy distribution

**Implementation:**
1. Use template for all students
2. Provide standardized setup
3. Consistent learning environment
4. Easy updates for course materials

**Documentation:**
- See [Installation Guide - Template Usage](framework-dependency-installation-guide.md#alternative-use-ai-dev-kit-as-a-github-template)
- See [Installation Guide — getting started](framework-dependency-installation-guide.md) (closest quick-start coverage today)

---

## Use Case Selection Matrix

| Use Case | New Project | Existing Project | All Frameworks | Some Frameworks | Template Available | Remote Required |
|----------|-------------|------------------|----------------|-----------------|-------------------|-----------------|
| **1. Template → All** | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ |
| **2. Template → Some** | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ |
| **3. Existing → All** | ❌ | ✅ | ✅ | ❌ | ❌ | Optional |
| **4. Existing → Some** | ❌ | ✅ | ❌ | ✅ | ❌ | Optional |
| **5. Reference Only** | ✅ | ✅ | N/A | N/A | ❌ | ❌ |
| **6. Monorepo** | ✅ | ✅ | ✅ | ✅ | Optional | Optional |
| **7. Gradual Adoption** | ✅ | ✅ | ❌ | ✅ | Optional | Optional |
| **8. Fork & Customize** | ✅ | ✅ | ✅ | ✅ | ❌ | Optional |
| **9. Non-GitHub Git** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| **10. Local Only** | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **11. CI/CD Only** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| **12. Educational** | ✅ | ❌ | ✅ | ✅ | ✅ | Optional |

---

## Version Updates Across All Use Cases

**Important:** All use cases (except Use Case 5: Reference Only and Use Case 8: Fork & Customize) benefit from version-based framework updates:

- **Automatic Update Notifications:** When frameworks are updated, you receive notifications
- **Version Pinning:** Pin to specific framework versions for stability
- **Update Control:** Choose when to update frameworks
- **Version Tracking:** Track which framework versions you're using
- **Migration Guides:** Get guidance for major version updates

**Update Mechanisms:**
- Git submodules: Update via `git submodule update`
- CLI tool: `ai-dev-kit update <framework>`
- Package managers: Standard update commands (npm update, pip install --upgrade)

---

## Choosing Your Use Case

**Start Here:**
1. **New project?** → Consider Use Cases 1 or 2 (Template)
2. **Existing project?** → Consider Use Cases 3 or 4 (Install into existing)
3. **Just learning?** → Use Case 5 (Reference Only)
4. **Multiple projects?** → Use Case 6 (Monorepo)
5. **Want to test first?** → Use Case 7 (Gradual Adoption)

**Then:**
- Review the use case details above
- Check the implementation steps
- Follow the linked documentation
- Start with one framework, expand as needed

---

## Related Documentation

- [Installation Guide](framework-dependency-installation-guide.md) - Detailed installation instructions
- [Usage Guide](framework-dependency-usage-guide.md) - How to use installed frameworks
- [Integration Guide](framework-dependency-integration-guide.md) - Integrating frameworks into projects
- [FAQ](framework-dependency-faq.md) - Frequently asked questions
- [CLI Reference](framework-dependency-cli-reference.md) - CLI tool commands

---

## Support

If you're unsure which use case fits your needs, or need help implementing a specific use case:
- Review this document and related guides
- Check the [FAQ](framework-dependency-faq.md)
- Open an issue on [GitHub](https://github.com/earlution/ai-dev-kit/issues)

