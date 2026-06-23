---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 17: Agent bootstrap and task routing (FR-103)

**Task ID:** E02:S01:T27
**Historical Anchor:** E02:S16:T17  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-05-30  
**Last updated:** 2026-05-30 (RW **v0.2.16.17+2** — single-step AGENTS.md bootstrap)  
**Version Anchor:** v0.2.16.17+2  
**Code:** E02S01T27  

✅ COMPLETE (v0.2.16.17+2)

Publication Status: NOT_APPLICABLE

**Upstream:** [FR-103 — Agent bootstrap and task routing](../../../fbu/FR-103-agent-bootstrap-and-task-routing.md)

---

## Input

- [FR-103](../../../fbu/FR-103-agent-bootstrap-and-task-routing.md)
- [IPP-E2S16T17](../../../../implementation-cycles/IPP-E02S01T27-agent-bootstrap-and-task-routing-fr103.md) — IPW planning package
- [ADR-012](../../../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)
- [`docs/project-agent-manifest.json`](../../../../../project-agent-manifest.json) · [`docs/project-agent-index.md`](../../../../../project-agent-index.md)
- Root [`AGENTS.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md), [`CLAUDE.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CLAUDE.md), [`.cursorrules`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules)
- [Workflow initiation cheatsheet](../../../../guides/workflow-initiation-cheatsheet.md) (UXR-015 / E02:S16:T15)
- [Kanban `AGENTS.md`](../../../AGENTS.md) (domain workflow agent roles)
- [Agent cold-start checklist](../../../../guides/agent-cold-start-checklist.md)

---

## Problem statement

Cold-started agents lack a deterministic, low-token bootstrap path. Full `.cursorrules` and undirected search are expensive and inconsistent. The project needs Layer 1 intro, Layer 2 manifest triage, and Layer 3 lazy detail per FR-103 / draft ADR.

---

## Deliverables

1. **ADR-012** — `docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md` (from repo-root draft; add to ADR index/register).
2. **Slim root `AGENTS.md`** (≤150 lines) — bootstrap steps, use-case table, binding-rule pointers, ascertainment + anti-patterns.
3. **`docs/project-agent-manifest.json`** + **`docs/project-agent-manifest.schema.json`**.
4. **`docs/project-agent-index.md`** — human mirror + validate/regenerate instructions.
5. **Seed `taskRouting[]` and `protocol[]`** per FR-103 minimum route table.
6. **IDE wiring** — `CLAUDE.md` / `.cursorrules` pointer to bootstrap (no duplicate full manifest).
7. **(Optional)** `scripts/generate-project-agent-manifest.sh` for `canon[]` / `openWork[]` stubs.
8. **(Optional)** Framework template copy for adopters.

---

## Scope

**In scope:** Documentation topology, manifest schema, bootstrap refactor, cold-start validation checklist, ADR registration.

**Out of scope:** Rewriting entire `.cursorrules`; automating full kanban→manifest sync (follow-on); changing RW/UKW/IPW behavior beyond routing pointers.

---

## Acceptance criteria

- [x] **AC1:** ADR-012 registered; root draft relocated or linked without broken references.
- [x] **AC2:** `AGENTS.md` ≤150 lines; compliance checklist in ADR satisfied.
- [x] **AC3:** Manifest validates; ≥5 `taskRouting[]` and ≥6 `protocol[]` rows with working `sourcePath` links.
- [x] **AC4:** `docs/project-agent-index.md` complete.
- [x] **AC5:** Three cold-start simulations documented (workflows, intake, governance) — ≤5 files each before substantive work.
- [x] **AC6:** FR-103 ↔ E02:S01:T27 bidirectional links; story checklist + board rows present.
- [x] **AC7:** IPP exists and is linked here before implementation execution (`IPW E02:S01:T27`).

---

## References

- [FR-103](../../../fbu/FR-103-agent-bootstrap-and-task-routing.md)
- [IPP-E2S16T17](../../../../implementation-cycles/IPP-E02S01T27-agent-bootstrap-and-task-routing-fr103.md)
- [ADR-012](../../../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)
- [project-agent-index.md](../../../../../project-agent-index.md)
- [Story 016](../story-16-perpetual-ongoing-workflow-operations.md)
- [FR-041](../../../fbu/FR-041-windsurf-investigate-agents-skills-for-workflows.md)
- [FR-022](../../../fbu/FR-022-policy-docs-machine-readable-salience.md)
- [UXR-015 / cheatsheet](../../../../guides/workflow-initiation-cheatsheet.md)
