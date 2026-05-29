---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit: Vision and Purpose

**Version:** 1.1.0  
**Last Updated:** 2026-05-26  
**Status:** Active

---

## 🎯 The Problem We're Solving

### Project Drift and Reinventing the Wheel

When managing multiple software projects over time, a common pattern emerges:

**Each project reflects the state of your knowledge at the time of its inception.**

- Projects started early in your journey have ad-hoc structures, inconsistent conventions, and incomplete workflows
- Projects started later benefit from lessons learned, but still implement solutions independently
- **The result:** Each project does things slightly differently:
  - Different Kanban structures
  - Different docs/documentation layouts
  - Different `.cursorrules` and workflow conventions
  - Different versioning approaches
  - Different release processes

### The Cost of Drift

This drift creates significant overhead:

1. **Reinventing the Wheel:** You solve the same design problems repeatedly across projects
2. **Remedial Work:** Bad or missing design causes the same (or similar) issues in multiple projects
3. **Inconsistent Solutions:** Each instance requires a slightly different approach because the context differs
4. **Knowledge Loss:** Improvements learned in one project don't automatically benefit others
5. **Maintenance Burden:** Each project requires separate maintenance of infrastructure, workflows, and conventions

### The Opportunity

**What if projects could focus solely on their domain-specific code, while all infrastructure, planning, workflows, and documentation patterns came from a shared, evolving toolkit?**

---

## 🚀 The Vision

**AI Dev Kit is the source of truth for software project infrastructure.**

### For Your Projects

AI Dev Kit enables you to:

- **Stop reinventing the wheel** — Use proven, battle-tested frameworks for common needs
- **Eliminate drift** — All projects share the same canonical patterns
- **Focus on domain logic** — Projects focus on their unique value, not infrastructure
- **Automatic improvements** — Updates to frameworks benefit all projects
- **Consistent experience** — Same workflows, same conventions, same tooling across all projects

### For the Community

AI Dev Kit will be released publicly, enabling others to:

- **Adopt proven patterns** without years of trial and error
- **Skip the learning curve** of building project infrastructure from scratch
- **Benefit from collective improvements** as the toolkit evolves
- **Focus on building** rather than configuring

---

## 📦 Repository scope (public vs private)

**AI Dev Kit** (this public reference repository) ships **frameworks, workflows, and adoption docs only**. A separate **private companion repository** (`RMS-Ltd/hf-ai-dev-kit`) holds book manuscript and publishing work; it is not part of the public tree. See [ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md).

---

## 🏗️ What AI Dev Kit Provides

### Core Frameworks

1. **Kanban Framework**
   - Epic/Story/Task structure
   - FR/BR/UXR intake workflow
   - Kanban board management
   - Documentation templates

2. **Numbering & Versioning**
   - `RC.EPIC.STORY.TASK+BUILD` schema
   - Forensic traceability
   - Version file management
   - Changelog automation

3. **Workflow Management**
   - Release Workflow (RW) — 13-step automation
   - Trigger-aware workflows
   - Intake workflow automation
   - Migration, testing, and refactoring workflows

4. **Documentation Lifecycle**
   - TTL-based expiration
   - Automated housekeeping
   - Knowledge base structure
   - Document templates

5. **Agent Integration**
   - `.cursorrules` sections
   - Agent execution patterns
   - Workflow automation
   - AI-assisted development support
   - **Optional harness layer:** [ECC](https://github.com/affaan-m/ECC) (MIT) for harness execution craft — complementary, not required; see [integration specification](../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)

### Modularity

**Use only what you need:**
- Install frameworks individually
- Combine frameworks as required
- Skip components that don't fit your needs
- Customize paths and conventions while maintaining core patterns

---

## 🎓 Adoption Paths

### Full Adoption (Recommended for New Projects)

**Use all AI Dev Kit components:**
- Complete Kanban structure
- Full versioning integration
- All workflow automations
- Complete documentation lifecycle

**Benefits:**
- Maximum consistency
- Full feature set
- Complete integration
- Best practices out of the box

**Best for:**
- New projects (greenfield)
- Projects ready for standardization
- Teams wanting complete automation

### Partial Adoption (For Existing Projects)

**Selectively adopt components:**
- Start with versioning, add workflows later
- Use Kanban without intake workflow
- Adopt RW without full KB structure
- Mix and match based on needs

**Benefits:**
- Gradual migration
- Lower initial effort
- Flexibility to adapt

**Best for:**
- Existing projects (brownfield)
- Projects with constraints
- Teams wanting incremental adoption

### Migration Strategy

For existing projects:

1. **Assess current state** — What's working? What needs improvement?
2. **Prioritize components** — Which frameworks solve immediate pain points?
3. **Migrate incrementally** — Start with one framework, add others over time
4. **Standardize gradually** — Move toward full adoption as projects mature

---

## 🔄 The Evolution Cycle

### How AI Dev Kit Improves

1. **Real-World Usage** — Patterns are tested across multiple projects
2. **Problem Identification** — Issues surface in actual usage
3. **Solution Development** — Solutions are developed and tested
4. **Framework Updates** — Improvements are incorporated into frameworks
5. **Automatic Benefits** — All projects benefit from updates

### Your Role

- **Use the frameworks** in your projects
- **Report issues** and edge cases
- **Suggest improvements** based on real-world needs
- **Contribute back** patterns that work well

---

## 🎯 Success Criteria

AI Dev Kit succeeds when:

- ✅ **Projects focus on domain logic** — Infrastructure is handled by frameworks
- ✅ **Consistency across projects** — Same patterns, same workflows, same conventions
- ✅ **Reduced maintenance** — Updates to frameworks benefit all projects
- ✅ **Community adoption** — Others can benefit from proven patterns
- ✅ **Continuous improvement** — Frameworks evolve based on real-world usage

---

## 📖 Related Documentation

- **[Getting Started Guide](../guides/getting-started/README.md)** — How to start using AI Dev Kit
- **[Framework Consumption Guide](../guides/framework-consumption/README.md)** — How to adopt frameworks
- **[Architecture Overview](../architecture/README.md)** — Technical architecture and standards
- **[Kanban Governance](../project-management/rituals/policy/kanban-governance-policy.md)** — Kanban framework policies

---

## 🤝 Contributing

AI Dev Kit is designed to evolve based on real-world usage. Contributions welcome:

- **Report issues** — Found a problem? Let us know
- **Suggest improvements** — Have a better way? Share it
- **Share patterns** — Found a useful pattern? Document it
- **Improve docs** — Help others adopt the toolkit

---

**Last Updated:** 2026-05-26  
**Version:** 1.1.0  
**Status:** Active
