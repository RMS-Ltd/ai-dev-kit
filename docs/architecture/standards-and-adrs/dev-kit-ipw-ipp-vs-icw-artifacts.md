---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-20T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# IPW consolidated IPP vs ICW three-file packages

**Purpose:** Single discoverable reference for how **Implementation Planning Workflow (IPW)** durable artifacts may appear in **`docs/implementation-cycles/`** in this repository and in adopters.

**Canonical command:** `.claude/commands/ipw.md` (slash `/ipw` or plain-text `IPW E:S:T`).

**Related policy:** [specification-and-planning-artifacts-policy.md](specification-and-planning-artifacts-policy.md). **FR:** [FR-042](../../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md).

---

## Two durable patterns

| Pattern | Files | When to use (ai-dev-kit) |
|--------|--------|---------------------------|
| **IPP (consolidated)** | One `IPP-E{epic}S{story}T{task}-{slug}.md` with Sections 1–Requirements, 2–Specification, 3–Test design, 4–Implementation plan, 5–Documentation deliverables, 6–Documentation housing, 7–Success/verification; optional **§8** rolling backlog for perpetual tasks | **Default** for IPW runs that follow `ipw.md` Phase 7 (`PLAN_DOC_TEMPLATE.md`). IPW Phases 5–6 run before the IPP is written. Example: [`IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md`](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md). |
| **ICW trio (split)** | `ICW-E{epic}S{story}T{task}-specification.md`, `-test-design.md`, `-implementation-plan.md` | Retrospective publication, multi-audience splits, or historical packages already authored as three files. Example: `ICW-E7S06T18-*` (see changelog for E7:S06:T18). |

Both patterns satisfy the **Global Implementation Gate** in root [`AGENTS.md`](../../../AGENTS.md) when the host **task document** links to them under **Input** / **References** (bidirectional wiring per FR-042).

---

## Decision matrix (informal)

- **New IPW session in ai-dev-kit:** Prefer **IPP** unless a task explicitly requires split files for governance or tooling.
- **Perpetual / umbrella maintenance tasks:** Prefer **IPP** with **§8 Rolling backlog** for follow-on waves without rewriting §1–§6.
- **Retrospective alignment or external review packages:** **ICW trio** is acceptable; may later be consolidated into one IPP (see [`IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md`](../../implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md)) — cite superseded ICW files inside the IPP if folded.

---

## Template and validation

- **IPP template:** `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`
- **Plan wiring:** `packages/frameworks/workflow mgt/scripts/validation/validate_plan_wiring.py` (where enabled)

---

## Adopter note

The framework agent stub at `packages/frameworks/workflow mgt/agents/ipw/AGENTS.md` may still describe a **folder per task** (`docs/implementation-cycles/E#-S#-T#/specification.md`, etc.). That layout is **optional** for downstream repos; **ai-dev-kit** uses **flat `IPP-E…S…T…-*.md`** files under `docs/implementation-cycles/` per `ipw.md`.

---

## References

- `.claude/commands/ipw.md`
- [FR-042](../../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md) — §8 artifact packaging
- [specification-and-planning-artifacts-policy.md](specification-and-planning-artifacts-policy.md)
