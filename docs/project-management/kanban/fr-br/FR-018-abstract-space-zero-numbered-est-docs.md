---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Abstract Space for Zero-Numbered E/S/T Docs

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-11  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** PENDING  

---

## Summary

Add a section to the Kanban policy defining '0' numbered E/S/T docs as an abstract space for beginning the forensic traceability arc, along with SOP for how and where to commit initial E/S/T docs. Link this to a complementary section in the Numbering Policy.

---

## Description

### What is the Feature?

A formal policy definition that establishes zero-numbered E/S/T documentation as an **abstract space** for forensic traceability:

- **Epic-level abstract space:** `0.\{EPIC\}.0.0+0` (e.g., `0.3.0.0+0` = Epic 3's abstract space)
  - **Note:** S00 is Epic-level abstract space only (no tasks). Repository stories migrated from S00 to S01 as part of repository story abstract space resolution (E9:S01:T08).

- **Story-level abstract space:** `0.\{EPIC\}.\{STORY\}.0+0` (e.g., `0.2.5.0+0` = Epic 2 Story 5's abstract space)
  - **Note:** S01 is used for repository stories (FR Repo, BR Repo, UXR Repo) which contain concrete tasks.

- **Task-level abstract space:** `0.\{EPIC\}.\{STORY\}.\{TASK\}+0` (e.g., `0.10.4.6+0` = Epic 10 Story 4 Task 6's abstract space)

This abstract space serves as the **canonical anchor** for forensic traceability, establishing where the documentation lifecycle begins before any functional work is committed.

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- Kanban policy includes a section defining abstract spaces for zero-numbered E/S/T docs
- Policy specifies SOP for committing initial E/S/T docs (when, where, how)
- Numbering Policy includes complementary section explaining version schema for abstract spaces
- Both policies cross-reference each other
- Abstract space versions (`+0`) establish forensic traceability anchor before functional work (`+1`)

**Current Behavior:**
- No formal definition of abstract spaces for zero-numbered E/S/T docs
- No clear SOP for committing initial E/S/T documentation
- No explicit link between Kanban policy and Numbering Policy for this concept
- Forensic traceability arc begins implicitly with first functional work

### When Does It Occur?

This feature is needed:
- **When creating new Epic/Story/Task documentation** - Should establish abstract space (`+0`) first
- **When defining forensic traceability requirements** - Need canonical anchor point
- **When implementing FR-017 (doc-init build `+0`)** - Requires abstract space concept to be defined

### Who is Affected?

**Primary Affected:**
- Developers/agents creating new E/S/T documentation
- Framework maintainers (policy definition and enforcement)
- Projects using the framework (forensic traceability)

**Secondary Affected:**
- Release Workflow (RW Step 1 logic for abstract space detection)
- Versioning validators (abstract space validation)
- Documentation consumers (understanding traceability arc)

---

## Problem / Anti-Pattern

- No formal definition of abstract spaces for zero-numbered E/S/T docs
- Forensic traceability arc begins implicitly with first functional work, not with documentation creation
- No clear SOP for committing initial E/S/T documentation
- Missing link between Kanban policy and Numbering Policy for abstract space concept

---

## Requirements

### Functional Requirements

- [ ] **FR-018:R01** - Kanban policy includes section defining abstract spaces for zero-numbered E/S/T docs
- [ ] **FR-018:R02** - Kanban policy specifies SOP for committing initial E/S/T docs (when, where, how)
- [ ] **FR-018:R03** - Numbering Policy includes complementary section explaining version schema for abstract spaces
- [ ] **FR-018:R04** - Both policies cross-reference each other
- [ ] **FR-018:R05** - Abstract space examples provided:
  - Epic-level: `0.\{EPIC\}.0.0+0` (e.g., `0.3.0.0+0`)
  - Story-level: `0.\{EPIC\}.\{STORY\}.0+0` (e.g., `0.2.5.0+0`)
  - Task-level: `0.\{EPIC\}.\{STORY\}.\{TASK\}+0` (e.g., `0.10.4.6+0`)

- [ ] **FR-018:R06** - Policy explains relationship between abstract space (`+0`) and functional work (`+1`)

### Non-Functional Requirements

- [ ] **FR-018:NF01** - **Traceability:** Abstract space establishes canonical anchor for forensic traceability
- [ ] **FR-018:NF02** - **Consistency:** Policy aligns with FR-016 (discrete Task docs) and FR-017 (doc-init build `+0`)
- [ ] **FR-018:NF03** - **Documentation:** Clear, actionable SOP for committing initial E/S/T docs

---

## Scope Analysis

**Problem Domain:** Kanban Governance, Versioning Policy, Forensic Traceability  
**Affected Areas:**
- [x] Backend/API (policy definition)
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Documentation (Kanban policy, Numbering Policy)
- [ ] Testing
- [x] Other: Forensic traceability framework

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**
1. Developer creates a new Epic (e.g., Epic 3)
2. Epic doc is created and committed with abstract space version `0.3.0.0+0`
3. This establishes the forensic traceability anchor for Epic 3
4. Subsequent functional work for Epic 3 starts at `+1` (e.g., `0.3.1.1+1`)

**Additional Use Cases:**
- Story-level abstract space: `0.2.5.0+0` for Epic 2 Story 5
- Task-level abstract space: `0.10.4.6+0` for Epic 10 Story 4 Task 6
- Policy reference for RW Step 1 abstract space detection

---

## Acceptance Criteria

- [ ] **AC1:** Kanban policy includes section defining abstract spaces for zero-numbered E/S/T docs
- [ ] **AC2:** Kanban policy specifies SOP for committing initial E/S/T docs
- [ ] **AC3:** Numbering Policy includes complementary section explaining abstract space version schema
- [ ] **AC4:** Both policies cross-reference each other
- [ ] **AC5:** Abstract space examples provided for Epic, Story, and Task levels
- [ ] **AC6:** Policy explains relationship between abstract space (`+0`) and functional work (`+1`)
- [ ] **AC7:** Policy aligns with FR-016 (discrete Task docs) and FR-017 (doc-init build `+0`)

---

## Dependencies

**Blocks:**
- Clear forensic traceability anchor definition
- SOP for committing initial E/S/T documentation
- Policy alignment between Kanban and Numbering frameworks

**Blocked By:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) - Requires discrete Task docs before abstract space can be defined

**Related Work:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (prerequisite)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (uses abstract space concept)
- **Kanban Governance Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Numbering Policy:** `packages/frameworks/numbering & versioning/versioning-policy.md`

---

## Rationale

**Why This Matters:**
- **Forensic Traceability:** Abstract space establishes canonical anchor for traceability arc
- **Policy Alignment:** Links Kanban and Numbering policies for consistent understanding
- **SOP Clarity:** Provides clear guidance for committing initial E/S/T documentation
- **Foundation for FR-017:** Abstract space concept is prerequisite for doc-init build `+0`

**Why This Should Be Implemented:**
- Current approach lacks formal definition of abstract spaces
- No clear SOP for committing initial E/S/T docs
- Missing link between Kanban and Numbering policies
- Required foundation for FR-017 implementation

---

## Implementation Notes

**Key Considerations:**
1. Abstract space versions use `+0` build number to indicate documentation-only anchor
2. Functional work starts at `+1` after abstract space is established
3. Abstract space can be established at Epic, Story, or Task level
4. Policy should explain when to use each level of abstraction
5. SOP should specify:
   - When to commit abstract space (before functional work)
   - Where to commit (same location as functional work)
   - How to commit (RW with `+0` build, or manual commit with explicit version)

**Policy Sections to Add:**

**Kanban Policy:**
- Section: "Abstract Spaces for Forensic Traceability"
- Subsection: "Zero-Numbered E/S/T Documentation"
- Subsection: "SOP for Committing Initial E/S/T Docs"
- Cross-reference to Numbering Policy

**Numbering Policy:**
- Section: "Abstract Space Version Schema"
- Subsection: "Epic-Level Abstract Spaces"
- Subsection: "Story-Level Abstract Spaces"
- Subsection: "Task-Level Abstract Spaces"
- Cross-reference to Kanban Policy

---

## References

- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (prerequisite)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (uses abstract space)
- **Kanban Governance Policy (Canonical):** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Kanban Governance Policy (Dev-Kit):** `docs/project-management/rituals/policy/kanban-governance-policy.md`
- **Versioning Policy (Framework):** `packages/frameworks/numbering & versioning/versioning-policy.md`
- **Versioning Policy (Dev-Kit):** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

---

**Template Usage:**
This FR follows the Kanban Framework FR template.  
This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation.

