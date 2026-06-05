---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Learning Outcome Numbering Policy

**Status:** Active
**Owner:** Engineering
**Portable Package:** This document is part of a portable numbering & versioning policy package

**Note:** This document defines a domain-specific numbering schema for learning outcomes. When implementing in other projects, adapt this to your domain objects (e.g., features, modules, components). See `IMPLEMENTATION_GUIDE.md` for customization guidance.

---

## Overview

This document defines the standardized hierarchical numbering schema for learning outcomes across exam board specifications.

**Adaptation:** This schema can be adapted for other hierarchical numbering needs in different projects.

## Hierarchy Structure

### Level 1 (Position A): Unit
- **Purpose**: Denotes the highest level of segmentation (e.g., exam paper, coursework, year-long block).
- **Format**: Always populated (e.g., `1`, `2`, `3`).

### Level 2 (Position B): Topic
- **Purpose**: Major subject area within a unit.
- **Format**: `A.B` (e.g., `1.1`, `1.2`).

### Level 3 (Position C): Sub-topic
- **Purpose**: Logical subdivision within a topic.
- **Format**: `A.B.C` (e.g., `1.1.1`, `1.2.3`).

### Level 4 (Position D): Parent-node Learning Outcome
- **Purpose**: Optional grouping LO that may have child LOs beneath it (e.g., “Explain…”, “Use diagrams…”).
- **Confidence:** Not user-settable; confidence is derived from child nodes.
- **Placeholder rule:** Even when a specification lacks an explicit grouping, Level 4 **must** be populated to keep IDs five segments long. Default to `1` and increment sequentially when a new grouping context starts.
- **Format:** `A.B.C.D`

### Level 5 (Position E): Child-node Learning Outcome
- **Purpose:** Atomic LO the user interacts with (confidence, evidence, etc.).
- **Confidence:** User-settable; has no children.
- **Format:** `A.B.C.D.E`

> **Important:** Every LO identifier MUST contain exactly five positions (`A.B.C.D.E`). Placeholders (usually `1`) fill any implicit level so IDs stay deterministic.

## Numbering Rules

### 1. Sequential Numbering
- Each level uses sequential numbering starting from 1
- Numbers are assigned based on order of appearance in the specification
- Gaps in numbering are allowed for future insertions

### 2. Parent-Child Relationships
- **Parent nodes (Level D)**: Have children; confidence is calculated. Always present (use placeholder `1`, `2`, … when spec omits explicit groupings).
- **Child nodes (Level E)**: Atomic; user-settable for confidence. Never have children.
- Parent nodes must have at least one child node.
- **Key principle:** If a node has children, it lives at Level D; only Level E is user-settable.

### 3. Cross-Specification Consistency
- All specifications use the same five-position format regardless of how many tiers are visible in the PDF.
- Inferred numbers (placeholders) maintain logical relationships so deterministic parsing and ML training stay predictable.

## Implementation Guidelines

### For Specification Import
1. **Analyze structure:** Identify Unit → Topic → Sub-topic → LO group → LO chain.
2. **Assign levels:** Always emit five positions (`A.B.C.D.E`).
3. **Infer placeholders:** When a PDF lacks an explicit Level D, inject sequential placeholders (`1`, `2`, …) so Level E can be attached without ambiguity.
4. **Validate atomicity:** Ensure Level E nodes remain atomic.

### For User Interface
- **Parent nodes**: Display but not user-settable for confidence
- **Child nodes**: User-settable for confidence rating
- **Hierarchical display**: Show full path (e.g., "1.1.1.1.1 The fetch-decode-execute cycle")
- **Dynamic determination**: UI determines settability based on presence of children

### For Data Storage
- **Primary key:** Full five-part identifier (`1.1.1.1.1`).
- **Parent reference:** Always `A.B.C.D`.
- **Level indicator / has-children flag:** Drive UI logic and confidence aggregation.

## Examples

### J277 Computer Science
```
1.1 System architecture
  1.1.1 Architecture of the CPU
    1.1.1.1 The purpose of the CPU
      1.1.1.1.1 The fetch-decode-execute cycle
    1.1.1.2 Common CPU components and their function
      1.1.1.2.1 ALU (Arithmetic Logic Unit)
      1.1.1.2.2 CU (Control Unit)
      1.1.1.2.3 Cache
      1.1.1.2.4 Registers
```

### Flatter Structure (3 levels)
```
1.2 CPU performance
  1.2.1.1 Factors affecting CPU performance
  1.2.1.2 Cache memory
  1.2.1.3 Clock speed
  1.2.1.4 Number of cores
  1.2.1.5 Pipelining
  1.2.1.6 Parallel processing
```

## Quality Assurance

### Validation Rules
1. **Atomicity**: Child nodes must be atomic (no children)
2. **Completeness**: All parent nodes must have children
3. **Consistency**: Same structure across all specifications
4. **Sequentiality**: Numbers must be sequential within each level
5. **Relationship integrity**: Parent-child relationships must be logically consistent

### Testing Requirements
1. **Import testing**: Verify correct hierarchy extraction
2. **UI testing**: Confirm proper display of parent/child relationships
3. **Confidence testing**: Ensure only atomic nodes are user-settable
4. **Cross-spec testing**: Validate consistency across exam boards

## Future Considerations

### Extensibility
- Architecture supports unlimited nesting levels
- New levels can be added without breaking existing structure
- Migration path defined for structural changes

### Maintenance
- Regular review of numbering consistency
- Updates to policy documented in changelog
- Version control for numbering schema changes

---

**Document Version**: 1.0
**Last Updated**: 27-01-2025
**Next Review**: 27-04-2025
