---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-081: Brownfield modular adopter integration

**Type:** Feature Request (FR)  
**ID:** FR-081  
**Submitted:** 2026-04-19  
**Submitted By:** Maintainer (design session)  
**Priority:** MEDIUM  
**Severity:** MEDIUM  
**Status:** OPEN

**Implementing Task:** [E6:S09:T02](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081.md)

---

## Summary

Operationalize **[ADR-003](../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)** for **brownfield** repositories: treat host projects as owning their architecture; expose AI Dev Kit as **modular surfaces** with explicit **contracts** (configuration, validators, optional frameworks)—not as an imposed canonical directory tree.

---

## Problem Statement

Brownfield teams need to **compose** workflows, Kanban, versioning, and docs lifecycle **selectively** and map them onto existing paths and governance. Without a tracked deliverable, policy in ADR-003 risks staying **philosophical only**, while installers and docs may still read as **one-size-fits-all**.

---

## Requirements

### Functional Requirements

- [ ] **FR-081-F1:** Publish a **brownfield adoption guide** (or major section of the installation guide) that states **non-goals** (we do not require replacing the host `docs/` tree or PM process) and **integration seams** (`rw-config.yaml`, `scripts_path`, optional `use_kanban`).
- [ ] **FR-081-F2:** Provide **required vs optional vs recommended** matrices **per framework surface** (minimum viable RW-only adoption vs full stack), suitable for experienced architects.
- [ ] **FR-081-F3:** Align **installer UX** messaging so brownfield runs do not imply copying ai-dev-kit’s reference Kanban epics wholesale; reinforce installer-first and contract-first patterns ([`rw-validators-consumer-layout.md`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/docs/rw-validators-consumer-layout.md)).
- [ ] **FR-081-F4:** Capture **explicit tradeoff decisions** (deferred choices) in Kanban tasks or ADR supplements so future work does not lose context.

### Non-Functional Requirements

- [ ] **FR-081-NF1:** Documentation tone must **respect host-project sovereignty** (aligns with ADR-003 **Decision §2**).
- [ ] **FR-081-NF2:** Changes must remain consistent with **[FR-080](./FR-080-greenfield-installation-process.md)** greenfield narrative by **cross-linking**, not merging incompatible instructions into one undifferentiated path.

---

## Acceptance Criteria

- Brownfield adopters can answer: **what must I wire**, **what can I skip**, and **what validators apply** for their chosen surfaces.
- ADR-003 is **referenced** from installation docs as the policy anchor for brownfield behavior.
- At least one **worked example** (hypothetical or anonymized) of partial adoption is documented.

---

## Scope Analysis

**Problem Domain:** Adoption architecture, documentation, optional tooling prompts  
**Affected Areas:**

- [x] `docs/documentation/user-docs/` and `INSTALL_IN_YOUR_PROJECT.md`  
- [x] Framework packages’ consumer-facing README sections  
- [ ] Implementation-only changes (only where messaging or installer prompts need adjustment)

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Related

- [ADR-003](../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)  
- [FR-080](./FR-080-greenfield-installation-process.md) — Greenfield process  
- [FR-082](./FR-082-installation-distribution-canonical-repo-alignment.md) — Canonical repo alignment  
- [framework-dependency-architecture.md](../../../architecture/standards-and-adrs/framework-dependency-architecture.md)  
