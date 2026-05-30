---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Workflow initiation cheatsheet

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-05-30  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** COMPLETE  
**Code:** UXR-015  

**Implementing Task:** [E02:S16:T15](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md)

**Implementation:** [`docs/guides/workflow-initiation-cheatsheet.md`](../../guides/workflow-initiation-cheatsheet.md) · [IPP-E02S16T15](../../implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md)

**Related:** [CLAUDE.md](../../../../CLAUDE.md) (trigger routing), [.cursorrules](../../../../.cursorrules) (canonical trigger specs), [FR-023](FR-023-update-kanban-workflow-ukw.md) (UKW), [FR-042](FR-042-implementation-planning-workflow-ipw.md) (IPW), [FR-057](FR-057-update-changelog-workflow.md) (CMW), [FR-091](FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md) (RW/UKW separation), [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) (four-surface contract)

---

## Summary

Maintainers and agents cannot reliably hold the growing matrix of workflow triggers, flags, mode prerequisites, and common sequences in working memory. A single **workflow initiation cheatsheet** under `docs/guides/` is needed as a scannable, human-first reference — distinct from the long-form agent execution guides in `packages/frameworks/workflow mgt/`.

---

## Research Objective

**Primary question:** What do users need at invocation time to choose the correct workflow variant without re-reading `.cursorrules` or multiple slash-command files?

**Secondary questions:**

1. Which workflows have mode prerequisites (plan mode, tool access) that block silent failure?
2. Which flag pairs are easily confused (e.g. `RW -d` vs a future `UKW -ad`)?
3. Which multi-step sequences are idiomatic but undocumented in one place (UKW → RW, CMW → RW, IPW → implement → RW)?
4. Where should the cheatsheet live so adopters and maintainers find it without hunting framework KB paths?

---

## Methodology

**Research Method:** Heuristic audit of trigger routing across agent entry points and maintainer feedback from active design sessions.  
**Participants:** User (maintainer) + agent-assisted corpus review.  
**Duration:** Single session (2026-05-30), including prior discussion on UKW `-ad` (Address Drift) as a planned extension.  
**Artifacts reviewed:**

- `CLAUDE.md` — RW, UKW, IPW trigger routing
- `.cursorrules` — RW, UKW, CMW, PVW, ICW full trigger sections
- `.claude/commands/rw.md`, `ukw.md`, `ipw.md` — slash-command flag matrices
- `docs/guides/README.md` — guides section structure
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/` — long-form execution guides (reference targets, not substitutes)

---

## Key Findings

### Finding 1: Trigger surface area exceeds working memory (Severity: High)

At minimum, maintainers must distinguish:

| Workflow | Trigger | Variants / flags |
| -------- | ------- | ---------------- |
| **RW** — Release | `RW`, `/rw` | full; `-d` docs-only; `-k` kanban-init; `--art`; `--confirmed-override` |
| **UKW** — Update Kanban | `UKW`, `/ukw` | comprehensive (none); `-u`; `-p`; `-a <target>`; combinations |
| **IPW** — Implementation Planning | `IPW`, `/ipw` | optional `E:S:T`; `--skip-tests`; **plan mode required** |
| **CMW** — Changelog Maintenance | `CMW` | manual; also RW Step 9.5 (conditional) |
| **PVW** — Package Version | `PVW` | manual; also RW Step 2.5 |
| **ICW** — Implementation Cycle (Cursor) | `ICW` | legacy Cursor equivalent of IPW; **plan mode required** |

Planned / discussed but not yet canonical: **`UKW -ad`** (Address Drift) — targeted project-state kanban reconciliation (see Notes).

Each workflow also has **blocked-session messages** (tool access, plan mode) that are easy to forget until a run fails.

### Finding 2: Canonical docs are agent-oriented and fragmented (Severity: High)

- `.cursorrules` is comprehensive but too long for quick lookup during chat.
- Slash-command files (`.claude/commands/`) are reliable for agents but not discoverable for humans browsing `docs/`.
- Framework KB execution guides are the right depth for *execution* but wrong shape for *“which command do I type?”*

### Finding 3: Flag collisions are semantic, not just lexical (Severity: Medium)

- **`RW -d`** = docs-only **release** (version/changelog/commit path).
- **`UKW -ad`** (proposed) = **address kanban drift** vs project state — different workflow family, similar “`-d` means something about docs/drift” mental model.
- **`UKW -a`** = assign **priorities** only — not reconciliation; easily confused with “address” semantics.

A cheatsheet must use **full flag expansion** in at least one column (`-d` → “docs-only release”, `-ad` → “address drift”).

### Finding 4: Sequences are tribal knowledge (Severity: Medium)

Common patterns not surfaced in one maintainer-facing page:

| Sequence | Purpose |
| -------- | ------- |
| `IPW E…S…T…` → implement → `RW E…S…T…` | Planning gate then release |
| `UKW` → `RW` | Kanban sync then commit (attributes to perpetual UKW task) |
| `CMW` → `RW` | Changelog hygiene then commit (attributes to perpetual CMW task) |
| `UKW -ad <targets>` → `RW` (planned) | Targeted drift repair then commit |

---

## User Pain Points

- **Recall failure:** “Was it `-u` or `-p` for bookkeeping without MoSCOW?” requires a `.cursorrules` search.
- **Wrong workflow:** Running comprehensive UKW when only drift repair on one board was needed (or vice versa).
- **Prerequisite surprises:** IPW/ICW blocked outside plan mode; RW/UKW blocked without tool access.
- **Onboarding friction:** New contributors cannot find a single entry point for “how do I release / sync kanban / plan implementation?”
- **Adopter gap:** Framework consumers outside Cursor/Claude lack a portable quick-reference in `docs/guides/`.

---

## Recommendations

- [x] **R1 — Create cheatsheet:** Add `docs/guides/workflow-initiation-cheatsheet.md` — one-page scannable reference (tables + short “when to use” prose).
- [x] **R2 — Cheatsheet sections (minimum):**
  - Quick decision tree (“I want to… → type…”)
  - Per-workflow table: trigger, flags, prerequisites, output/handoff
  - Common sequences (UKW→RW, CMW→RW, IPW→implement→RW)
  - Blocked-session messages (copy-paste recovery hints)
  - Links to canonical deep docs (`.cursorrules` section, slash commands, VWMP execution guides)
- [x] **R3 — Include planned `UKW -ad`:** Mark as **planned** (pending FR intake) so the cheatsheet is forward-compatible; update when FR ships.
- [x] **R4 — Wire from `docs/guides/README.md`:** Add to Key Documents; keep cheatsheet evergreen (not timeboxed).
- [x] **R5 — Agent surfacing:** Add one-line pointer from `CLAUDE.md` and/or AGENTS.md to the cheatsheet for human maintainers (agents keep using `.cursorrules` as SoT for behavior).
- [ ] **R6 — Optional follow-up:** Single-page PDF/export or Docusaurus sidebar entry under Guides (out of scope for v1 unless docs portal work is active).

**Priority order:**

1. R1 + R2 (cheatsheet content)  
2. R4 (discoverability)  
3. R5 (cross-link from agent entry docs)  
4. R3 (refresh when `UKW -ad` FR lands)  
5. R6 (portal polish, optional)

---

## Proposed cheatsheet content outline (for implementing task)

### Section A — Decision tree (abbreviated)

```text
Release completed work?        → RW E…S…T…  (or RW -d / RW -k)
Plan before implementing?      → IPW E…S…T…  (plan mode first)
Kanban feels stale (whole)?    → UKW  then RW
Kanban drift (specific)?       → UKW -ad <targets>  then RW  [planned]
Changelog too large?           → CMW  then RW
Package versions changed?      → PVW (or automatic at RW Step 2.5)
```

### Section B — RW matrix

| Invocation | Meaning |
| ---------- | ------- |
| `RW E…S…T…` | Full release |
| `RW -d E…S…T…` | Docs-only release |
| `RW -k E…S…T…` | Kanban-init release |
| `… --art` | Adopt requested E:S:T as version anchor |
| `… --confirmed-override` | Step 1d intent override (after user confirms) |

**Gates (before any edits):** branch safety → task token → task complete → task intent.

### Section C — UKW matrix

| Invocation | Meaning |
| ---------- | ------- |
| `UKW` | Comprehensive (bookkeeping + priorities + gap discovery) |
| `UKW -u` | Bookkeeping only |
| `UKW -p` | Update MoSCOW priorities only |
| `UKW -a <target>` | Assign priorities to target(s) |
| `UKW -ad <targets>` | Address drift vs project state **[planned]** |

**Handoff:** stage kanban files; user runs `RW` to commit.

### Section D — IPW / ICW

| Invocation | Meaning |
| ---------- | ------- |
| `IPW E…S…T…` | Implementation planning (Claude `/ipw`) |
| `IPW … --skip-tests` | Skip test-design section (justified doc-only tasks) |
| `ICW …` | Cursor equivalent; same plan-mode requirement |

**Prerequisite:** plan mode active.

### Section E — CMW / PVW

| Invocation | Meaning |
| ---------- | ------- |
| `CMW` | Changelog archive / ordering maintenance |
| `PVW` | Package version bumps (also RW Step 2.5) |

---

## Affected Areas

**Affected components:**

- [x] Documentation (`docs/guides/`)
- [x] User flows (all workflow invocations)
- [ ] UI components
- [ ] Validators

**Specific surfaces:**

- `docs/guides/workflow-initiation-cheatsheet.md` (new)
- `docs/guides/README.md` (link)
- Optional: `CLAUDE.md`, root `AGENTS.md` (one-line pointer)

---

## Acceptance criteria (implementation)

- [x] **AC1:** `docs/guides/workflow-initiation-cheatsheet.md` exists with sections A–E (or equivalent) covering RW, UKW, IPW/ICW, CMW, PVW.
- [x] **AC2:** Each workflow lists prerequisites (plan mode, tool access) and post-run handoff (`RW` where applicable).
- [x] **AC3:** Flag expansions disambiguate `RW -d` vs planned `UKW -ad` vs `UKW -a`.
- [x] **AC4:** `docs/guides/README.md` links the cheatsheet under Key Documents.
- [x] **AC5:** UXR ↔ implementing task bidirectional links and story checklist entry (after intake).

---

## Dependencies

**Blocks:**

- None (documentation-only deliverable)

**Blocked by:**

- None for v1 cheatsheet; **R3** content for `UKW -ad` remains marked planned until FR-102 (or equivalent) is accepted

**Related work:**

- Planned FR: UKW `-ad` (Address Drift) — update cheatsheet when shipped
- [FR-056](FR-056-standardize-packaged-workflow-documentation-and-instructions.md) — packaged workflow docs alignment (optional cross-link)
- Epic 5 / Docusaurus guides portal — optional R6

---

## Intake Decision

**Intake status:** ACCEPTED  
**Intake date:** 2026-05-30  
**Intake by:** Agent (atomic intake)

**Decision flow results:**

- [x] Story match found: Epic 2, Story 16 → Task 15 (perpetual workflow operations / maintainer-facing workflow docs)

**Assigned to:**

- Epic: 2 — Workflow Management Framework  
- Story: 16 — Perpetual ongoing workflow operations  
- Task: 15 — Workflow initiation cheatsheet (UXR-015)  
- Version: _pending RW_

**Kanban links:**

- Epic: [`Epic-2.md`](../epics/Epic-2/Epic-2.md)
- Story: [`Story-016-perpetual-ongoing-workflow-operations.md`](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md)
- Task: [`T15-workflow-initiation-cheatsheet-uxr015.md`](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md)

---

## Notes

- The cheatsheet is a **human quick-reference**; agent behavior remains governed by `.cursorrules` and `.claude/commands/*.md`. When those diverge, `.cursorrules` wins — the cheatsheet should link to canonical sources and carry a “last verified against” date in frontmatter or footer.
- **`UKW -ad`** was agreed in design discussion (2026-05-30) but is **not yet implemented**; cheatsheet v1 should include it in a “Planned” subsection to reduce future doc churn.
- Per [UXR-014](UXR-014-two-digit-est-identifier-default-formatting.md), cheatsheet examples should use two-digit padded E/S/T tokens (e.g. `E02:S16:T04`).

---

## References

- [Release Workflow agent execution guide](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
- [Update Kanban Workflow agent execution guide](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)
- [Guides README](../../guides/README.md)
- `.claude/commands/rw.md`, `ukw.md`, `ipw.md`
