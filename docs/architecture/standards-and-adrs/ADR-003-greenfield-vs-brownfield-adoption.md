---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-003: Greenfield vs Brownfield Adoption (Respect for Host Architecture)

**Status:** Accepted  
**Date:** 2026-04-19

---

## Context

AI Dev Kit is installed into other repositories. Two situations differ sharply:

- **Greenfield:** A new or template-based project with little existing structure to preserve. A clear, opinionated path is appropriate and low-risk.
- **Brownfield:** An existing system with its own architecture, directories, conventions, and governance. The maintainers of that system are the authority on their context.

Treating both the same would either over-constrain experienced teams (brownfield) or leave new projects without enough guidance (greenfield). The kit must remain useful to **advanced adopters** who want composable primitives, not only to teams that adopt the canonical dev-kit layout wholesale.

---

## Decision

### 1. Dual stance (by adoption context)

| Context | Position |
| -------- | ---------- |
| **Greenfield** | Provide a **documented happy path**: defaults, suggested tree, and installers that produce a coherent baseline quickly. |
| **Brownfield** | **Assume and respect** that the host project owns architecture and design. Do not normatively impose dev-kit folder shapes, processes, or scope beyond what the adopter chooses. |

### 2. Brownfield: abstraction at the boundary

For brownfield adoption, AI Dev Kit is treated as **modular and abstract at integration seams**:

- **Contracts** (for example configuration keys, validator expectations, optional modules) are documented so adopters can **map** them to their own paths and workflows.
- **Canonical layouts** in this repository describe **the dev-kit reference implementation**, not a moral requirement on external repos.
- Documentation and tooling should distinguish **required for a chosen surface** (e.g. RW with task identification where adopted) from **recommended** and **optional** (e.g. full Kanban epics/stories as in the reference repo).

Experienced users should be able to take **only what they need** and wire it into their project without fighting assumptions baked into the kit.

### 3. Greenfield: simplicity without claiming universal truth

Greenfield documentation may be opinionated for speed and clarity. That does **not** extend a claim that the same layout is correct for every organization. Brownfield guidance remains explicit that **tradeoffs belong to the host team**.

---

## Consequences

### Positive

- Clear product story: **fast onboarding** where we own the blank slate; **respectful integration** where we do not.
- Stronger fit for senior architects who need **primitives and contracts**, not a prescribed monolith.
- Reduces tension between “framework defaults” and “tenant sovereignty” in docs and installers.

### Negative / follow-up

- Installers and guides must **label** greenfield vs brownfield steps and avoid implying that optional packages are mandatory for brownfield.
- Brownfield tradeoffs (what we truly require vs recommend for each workflow) still need concrete matrices per framework; this ADR sets policy only.

---

## Related

- [`framework-dependency-architecture.md`](framework-dependency-architecture.md) — dependency and packaging direction.
- [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) — adopt-facing entry (should reflect greenfield happy path vs brownfield modular adoption over time).
- [`rw-validators-consumer-layout.md`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/docs/rw-validators-consumer-layout.md) — example of **contract-first** integration for vendored workflow management.
- [E6:S09 — AI Dev Kit installation and adopter integration](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration.md) — Kanban story for FR-080–082.
- [FR-080](../../project-management/kanban/fr-br/FR-080-greenfield-installation-process.md) — delivery: end-to-end greenfield installation process.
- [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md) — delivery: brownfield modular adopter integration.
- [FR-082](../../project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment.md) — tooling/docs: canonical GitHub repo alignment for install assets.
- [ECC ↔ ADK harness integration specification](./ecc-adk-harness-layer-integration-specification.md) — optional third-party harness (MIT ECC); modular surface for greenfield and brownfield adopters ([FR-098](../../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)).
