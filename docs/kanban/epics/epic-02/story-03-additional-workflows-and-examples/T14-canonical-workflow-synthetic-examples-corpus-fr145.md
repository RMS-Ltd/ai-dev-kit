---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-10T17:49:54Z
expires_at: null
housekeeping_policy: keep
---

# E02:S03:T14 — Canonical workflow synthetic examples corpus (FR-145)

**Task ID:** E02:S03:T14  
**Status:** 📋 TODO  
**Version Anchor:** v0.2.3.14+0  
**Priority:** HIGH  
**Created:** 2026-07-10  
**Last updated:** 2026-07-10 (v0.2.3.14+0 — Kanban documentation setup / FR-145 intake)  
**Version:** v0.2.3.14+0  
**Code:** E02S03T14

**Upstream:** [FR-145 — Canonical workflow synthetic examples corpus](../../../fbu/FR-145-canonical-workflow-synthetic-examples-corpus.md)

**Planning:** —No IPP— (run `IPW E02:S03:T14` before implementation)

**Related:** [FR-103](../../../fbu/FR-103-agent-bootstrap-and-task-routing.md) / [ADR-012](../../../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md) · [E02:S01:T27](../story-01-rw-agent-execution-and-docs/T27-agent-bootstrap-and-task-routing-fr103.md) · [E02:S16:T15](../story-16-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md) · [UXR-015](../../../fbu/UXR-015-workflow-initiation-cheatsheet.md)

---

## Scope

Author and wire a **maintained corpus of synthetic, option-complete workflow exemplars** so cold-started agents ground on one authoritative example per canonical workflow (and major mode) instead of randomly mining historical runs, changelogs, or journals.

---

## Input

- [FR-145](../../../fbu/FR-145-canonical-workflow-synthetic-examples-corpus.md)
- [Workflow initiation cheatsheet](../../../../guides/workflow-initiation-cheatsheet.md)
- `.claude/commands/{rw,ukw,ipw,idw,mwf,cmw,pvw,kma}.md`
- [ADR-012](../../../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md) / root [`AGENTS.md`](../../../../../AGENTS.md)
- Existing workflow examples under Story 03 (T02–T04) — pattern reference only; do not treat as option-complete golden exemplars

---

## Deliverable

1. **Synthetic exemplar corpus** covering RW, UKW, IPW, IDW, MWF, CMW, PVW, KMA (v1), each option-complete per FR-145 coverage table.
2. **Corpus index** mapping trigger → exemplar path(s).
3. **Bootstrap / command wiring** so agents load the matching exemplar during context gathering and prefer it over ad hoc historical search.
4. **Anti-pattern documentation** (journals / changelog archives / transcripts not default grounding when exemplar exists).
5. **Greenfield mirror** if packaged framework paths are touched (FR-110).

---

## Acceptance Criteria

- [ ] **AC1:** Exemplars exist for all v1 workflows in FR-145 coverage table.
- [ ] **AC2:** Each exemplar’s option/flag matrix matches current cheatsheet + command file (spot-check at ship).
- [ ] **AC3:** `AGENTS.md` and/or relevant `.claude/commands/*` instruct loading the matching exemplar before historical example search.
- [ ] **AC4:** Anti-pattern documented for journals / changelog archives / transcripts.
- [ ] **AC5:** FR-145 ↔ this task bidirectional; `kboard.md` row until ship; IPP linked after IPW.

---

## Approach

1. Run **IPW E02:S03:T14** — decide housing path, exemplar format (annotated branch narrative vs matrix + happy path), and wiring surface.
2. Author exemplars workflow-by-workflow (may wave: RW/UKW first, then IPW/IDW/MWF, then CMW/PVW/KMA).
3. Wire bootstrap + command “context gathering” steps; update ADR-012 / AGENTS only as needed for pointers.
4. Validate option matrices against cheatsheet; ship via **RW E02:S03:T14** (likely `--art` if `version.py` elsewhere).

---

## Dependencies

**Depends On:**
- Current command-file flag matrices (living docs)

**Blocks:**
- Lower cold-start token cost for workflow sessions

**Blocked By:**
- None

**Parallel Development Candidacy:** Safe to author exemplars in parallel waves after IPW housing decision.

---

## Cross-Wiring

**Related Tasks:**

- **[E02:S01:T27: Agent bootstrap and task routing (FR-103)](../story-01-rw-agent-execution-and-docs/T27-agent-bootstrap-and-task-routing-fr103.md)** — **Relationship Type:** Complements — **Context:** FR-103/ADR-012 routes *which* files to load; this task supplies golden *exemplars* within the workflows track.
- **[E02:S16:T15: Workflow initiation cheatsheet (UXR-015)](../story-16-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md)** — **Relationship Type:** Informs — **Context:** Cheatsheet is the human trigger matrix; exemplars must stay aligned with it.

**Related BR/FR Documents:**

- **[FR-145: Canonical workflow synthetic examples corpus](../../../fbu/FR-145-canonical-workflow-synthetic-examples-corpus.md)** — **Relationship Type:** Implements — **Context:** Primary implementing task for this FR.
- **[FR-103: Agent bootstrap and task routing](../../../fbu/FR-103-agent-bootstrap-and-task-routing.md)** — **Relationship Type:** Complements — **Context:** Bootstrap layers without golden exemplars.

**Cross-Wiring Notes:**

Do not recreate bootstrap routing; extend it with exemplar pointers.

---

## Associated reports

- [FR-145](../../../fbu/FR-145-canonical-workflow-synthetic-examples-corpus.md)
