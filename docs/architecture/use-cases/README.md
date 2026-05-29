---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T07:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Canonical Use Cases

**Purpose:** Design-phase use cases identified during architecture and design planning  
**Location:** `docs/architecture/use-cases/`  
**Type:** Canonical (planned, designed before implementation)

---

## Overview

Canonical use cases are **design-phase use cases** that are:
- Planned and intentional
- Part of original design/architecture
- Documented before implementation
- Stable and well-defined
- Part of framework/product design

These use cases inform system architecture, requirements engineering, and design decisions.

---

## Quick Navigation

- **[Canonical Use Cases](canonical/README.md)** - Design-phase use cases
- **[Template](CANONICAL_USE_CASE_TEMPLATE.md)** - Template for creating canonical use cases
- **[Methodology](../../knowledge/USE_CASE_METHODOLOGY.md)** - Complete use case methodology guide

---

## Use Case Types

### Canonical Use Cases (This Directory)

**Location:** [`canonical/`](canonical/README.md)

**Definition:** Use cases identified and documented during the design/planning phase, before implementation.

**Characteristics:**
- Planned and intentional
- Part of original design/architecture
- Documented before implementation
- Stable and well-defined
- Inform architecture and design decisions

**Examples:**
- Framework adoption patterns
- Workflow execution patterns
- Versioning patterns
- Kanban organization patterns

---

## Related Documentation

- **[Discovered Use Cases](../../knowledge/use-cases/discovered/README.md)** - Implementation-phase discovered use cases (in knowledge base)
- **[Use Case Methodology](../../knowledge/USE_CASE_METHODOLOGY.md)** - Complete methodology guide
- **[Architecture Standards (versioning policy)](../standards-and-adrs/dev-kit-versioning-policy.md)** - Architecture decision records and standards

---

## Creating Canonical Use Cases

1. Use [`CANONICAL_USE_CASE_TEMPLATE.md`](CANONICAL_USE_CASE_TEMPLATE.md)
2. Create in `Canonical/` directory
3. Follow naming convention: `UC-XXX-[title].md` (UC implies canonical)
4. Update `Canonical/README.md` index
5. Link to related architecture documents and design decisions

---

_This section is part of Architecture documentation. Canonical use cases inform system design and architecture decisions._

