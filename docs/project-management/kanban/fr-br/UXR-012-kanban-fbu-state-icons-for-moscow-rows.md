---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-20T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Kanban and FBU state icons for MoSCOW rows

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-05-20  
**Submitted By:** User — positive response to `✅` on COMPLETE task rows (e.g. E2:S15:T08 on `kboard.md`); wants **every** task/FBU state to carry a consistent state icon  
**Priority:** HIGH  
**Status:** ACCEPTED — **Set A primary + Unicode fallback** signed off 2026-05-20 (refined from interim Set D; intake **E4:S13:T07**)  
**Code:** UXR-012  

**Implementing Task:** [E4:S13:T07](../epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view/T07-kanban-fbu-state-icons-for-moscow-rows-uxr012.md)

**Related:** [UXR-005](UXR-005-kanban-board-formatting-and-governance.md) (readability), [UXR-010](UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) (row grammar), [FR-077](FR-077-ipw-built-task-status-transition-and-kboard-sync.md) (status propagation), [kanban-board-guide.md](../kanban-board-guide.md)

---

## Summary

MoSCOW rows on `kboard.md` and `fbuboard.md` expose lifecycle state as **plain text** (`IN PROGRESS`, `OPEN`, `RESOLVED`, …). A single successful experiment — prefixing **COMPLETE** with **✅** (e.g. `✅ COMPLETE (v0.2.15.8+2)`) — improved at-a-glance scanning in the IDE/board preview. This UXR defines a **canonical state → icon** mapping for **all** task and FBU states, compares **candidate icon sets** for an editorial decision, and sets acceptance criteria for governance + UKW/RW adoption.

---

## Editorial decision (signed-off 2026-05-20, refined)

**Normative model:** **Set A (emoji) everywhere the rendering context supports emoji** — including `kboard.md`, `fbuboard.md`, GitHub, and IDE markdown preview. **Set B (Unicode symbols)** is the **fallback substitute** for the same state when emoji cannot be relied on (plain-text terminals, logs, email, tooling that strips or mangles emoji).

This supersedes the interim **Set D (Hybrid)** pick, which mixed A and B on the same board rows. The user intent is **not** “pick emoji for done and symbols for queue on the board,” but **one vocabulary (A) on boards, with a documented B mapping for degraded contexts**.

### Canonical mapping (primary → fallback)

| Canonical state | Primary (Set A) | Fallback (Set B) |
| --------------- | --------------- | ------------------ |
| `COMPLETE` / `CLOSED` / `RESOLVED` / `IMPLEMENTED` | ✅ | ✓ |
| `FIXED` | 🔧 | ⚒ |
| `IN PROGRESS` | 🔄 | ◐ |
| `TODO` | 📋 | ○ |
| `PROPOSED` | 💡 | ◇ |
| `OPEN` | 🟢 | ● |
| `REOPENED` | 🔁 | ↻ |
| `BLOCKED` | 🚫 | ⊘ |
| `SUPERSEDED` | ⏭️ | ≫ |
| `ACCEPTED` (UXR intake) | 📥 | ⊕ |

### Where each form is used

| Context | Form |
| ------- | ---- |
| `kboard.md`, `fbuboard.md` (repo SoT) | **Primary (emoji)** only |
| UKW/RW board writes | **Primary (emoji)** only |
| Validators, grep, CI logs | Match **status word**; icon optional in regex; fallback acceptable in exported/plain-text reports |
| User-facing plain-text (email, some terminals) | **Fallback (Unicode)** when emoji unsupported |

**Decision by:** User (2026-05-20; refined same day). **Next:** `IPW E4:S13:T07` → implementation (guide, agents, corpus backfill, optional validator).

---

## Research objective

**Primary question:** Which icon vocabulary lets a maintainer scan MoSCOW boards for workload, staleness, and risk without reading full status strings?

**Secondary questions:**

1. Should task states and FBU states share one palette or use type-specific variants (FR vs BR vs UXR)?
2. How do icons interact with version anchors (`✅ COMPLETE (v0.2.15.8+2)`), MoSCOW priority, and `Last modified` footers?
3. What constraints apply (Unicode-only markdown, GitHub rendering, accessibility, agent copy-paste reliability)?

---

## Current state (baseline)

| Surface | Pattern today | Icon usage |
| ------- | ------------- | ---------- |
| `kboard.md` | `- **E2:S15:T08** – … - IN PROGRESS` or `✅ COMPLETE (v…)` | Ad hoc **✅** on some COMPLETE rows only |
| `fbuboard.md` | `- **FR-097** – … - RESOLVED (v…)` | Text only |
| `kanban-structure.md` | Story checklist `✅ COMPLETE` | Checklist convention, not MoSCOW row rule |
| FR/BR/UXR docs | `**Status:**` field | No board-row icon contract |

**User signal:** The green tick on COMPLETE (see attached board screenshot) materially improves confidence that the row is **done** vs merely labeled "complete" in prose.

---

## Status vocabulary inventory (must be covered)

Derived from live boards + `fr-br/` corpus (non-exhaustive; implementation must normalize aliases).

### Task states (`kboard.md`)

| Canonical | Aliases seen |
| --------- | ------------ |
| `TODO` | — |
| `IN PROGRESS` | `IN PROGRESS (PERPETUAL)` |
| `COMPLETE` | `✅ COMPLETE`, `COMPLETED` |
| `PROPOSED` | — |
| `BLOCKED` | — |

### FBU states (`fbuboard.md` + doc headers)

| Bucket | Canonical | Aliases seen |
| ------ | --------- | ------------ |
| Active | `OPEN`, `TODO`, `IN PROGRESS`, `PROPOSED`, `PENDING`, `INTAKE`, `ACCEPTED` | `REOPENED` |
| Terminal | `COMPLETE`, `CLOSED`, `RESOLVED`, `IMPLEMENTED`, `FIXED`, `RESOLVED ✅` | `RESOLVED — v…` |
| Meta | `SUPERSEDED` | `→ FR-092` redirects |
| Research | `ACCEPTED` (UXR intake) | — |

**Normalization rule (proposed):** Map aliases to a **small canonical set** (~12 states) before assigning icons; document alias table in `kanban-board-guide.md`.

---

## Editorial decision: compare four icon sets

Each set is evaluated on: **scan speed**, **distinctness**, **markdown/GitHub safety**, **accessibility** (not relying on color alone), **agent typing friction**, **consistency with existing ✅**.

### Set A — Emoji lifecycle (GitHub-native, matches current COMPLETE)

Best when: IDE and GitHub preview are primary readers; you want maximum familiarity from issue trackers.

| Canonical state | Icon | Example row fragment |
| --------------- | ---- | ------------------- |
| `COMPLETE` | ✅ | `✅ COMPLETE (v0.2.15.8+2)` |
| `IN PROGRESS` | 🔄 | `🔄 IN PROGRESS` |
| `TODO` | 📋 | `📋 TODO` |
| `PROPOSED` | 💡 | `💡 PROPOSED` |
| `BLOCKED` | 🚫 | `🚫 BLOCKED` |
| `OPEN` | 🟢 | `🟢 OPEN` |
| `REOPENED` | 🔁 | `🔁 REOPENED` |
| `RESOLVED` / `IMPLEMENTED` | ✅ | `✅ RESOLVED` |
| `FIXED` | 🔧 | `🔧 FIXED` |
| `CLOSED` | ✅ | `✅ CLOSED` |
| `SUPERSEDED` | ⏭️ | `⏭️ SUPERSEDED` |
| `ACCEPTED` (intake) | 📥 | `📥 ACCEPTED` |

**Pros:** Aligns with existing `✅`; high salience; zero new glyphs to learn.  
**Cons:** Emoji render differently per OS/font; some terminals strip color; "green circle" vs "green check" ambiguity for OPEN vs COMPLETE.

---

### Set B — Unicode symbols (minimal, terminal-friendly)

Best when: plain-text tooling, diffs, and email matter as much as GitHub UI.

| Canonical state | Icon | Example row fragment |
| --------------- | ---- | ------------------- |
| `COMPLETE` | ✓ | `✓ COMPLETE (v0.2.15.8+2)` |
| `IN PROGRESS` | ◐ | `◐ IN PROGRESS` |
| `TODO` | ○ | `○ TODO` |
| `PROPOSED` | ◇ | `◇ PROPOSED` |
| `BLOCKED` | ⊘ | `⊘ BLOCKED` |
| `OPEN` | ● | `● OPEN` |
| `REOPENED` | ↻ | `↻ REOPENED` |
| `RESOLVED` / `IMPLEMENTED` | ✓ | `✓ RESOLVED` |
| `FIXED` | ⚒ | `⚒ FIXED` |
| `CLOSED` | ✓ | `✓ CLOSED` |
| `SUPERSEDED` | ≫ | `≫ SUPERSEDED` |
| `ACCEPTED` | ⊕ | `⊕ ACCEPTED` |

**Pros:** Compact; diff-friendly; no emoji font variance.  
**Cons:** Lower visual punch than ✅; some glyphs rare on mobile keyboards; COMPLETE less "celebratory" than Set A.

---

### Set C — Shape + letter code (accessibility-first)

Best when: you want **state class** visible even if the symbol fails to render (fallback letter in parentheses).

| Class | Code | Icon | Example |
| ----- | ---- | ---- | ------- |
| Done | `D` | ✓ | `✓ [D] COMPLETE` |
| Active | `A` | ◐ | `◐ [A] IN PROGRESS` |
| Queue | `Q` | ○ | `○ [Q] TODO` |
| Idea | `I` | ◇ | `◇ [I] PROPOSED` |
| Blocked | `B` | ⊘ | `⊘ [B] BLOCKED` |
| Open intake | `O` | ● | `● [O] OPEN` |
| Superseded | `S` | ≫ | `≫ [S] SUPERSEDED` |

**Pros:** Screen-reader and grep-friendly (`[D]`, `[A]`); training wheels for agents.  
**Cons:** Verbose; clutters dense MoSCOW lines; duplicates text already in status word.

---

### Set D — Hybrid (superseded; retained for comparison only)

Interim editorial option: mixed **A on terminal** + **B on queue** on the same row. **Superseded** by **Set A primary + B fallback** (see Editorial decision): boards always use emoji; B is for non-emoji contexts only.

---

## Comparison matrix (for editorial pick)

| Criterion | Set A Emoji | Set B Unicode | Set C Letter+shape | Set D Hybrid |
| --------- | ----------- | ------------- | ------------------ | ------------ |
| Matches existing ✅ COMPLETE | ★★★★★ | ★★★☆☆ | ★★★☆☆ | ★★★★★ |
| Terminal/IDE contrast | ★★★★☆ | ★★★☆☆ | ★★★★☆ | ★★★★☆ |
| Diff/git noise | ★★★☆☆ | ★★★★★ | ★★☆☆☆ | ★★★★☆ |
| Agent reliability | ★★★★☆ | ★★★☆☆ | ★★★★★ | ★★★★☆ |
| FBU type discrimination | ★★☆☆☆ | ★★☆☆☆ | ★★★☆☆ | ★★★☆☆ (optional FR/BR/UXR suffix icons in phase 2) |
| Accessibility | ★★★☆☆ | ★★★☆☆ | ★★★★☆ | ★★★★☆ |

**Editorial outcome:** **Set A primary + Unicode fallback** (full table above). Interim Set D withdrawn. Optional **phase 2:** type prefix icons (`🟦 FR`, `🟥 BR`, `🟪 UXR`) on `fbuboard.md` if scan tests show benefit.

**Example (task, board — emoji only):**

```markdown
- **E2:S15:T08** – Board stamp authority … - ✅ COMPLETE (v0.2.15.8+2) - …
- **E4:S19:T03** – FR-087 housing … - 🔄 IN PROGRESS (HIGH, …) - …
- **E5:S01:T31** – Multi-agent … - 📋 TODO (C priority …) - …
```

**Example (FBU, board — emoji only):**

```markdown
- **FR-097** – Board stamp authority … - ✅ RESOLVED (v0.2.15.8+2) - …
- **BR-067** – RW doc-only BUILD … - 🟢 OPEN (HIGH, …) - …
- **FR-090** – UKW row transform … - ⏭️ SUPERSEDED -> **FR-092** - …
```

**Example (plain-text report — fallback when emoji unsupported):**

```markdown
- **BR-067** – RW doc-only BUILD … - ● OPEN (HIGH, …) - …
```

---

## Proposed row grammar (normative target)

**Placement:** Icon immediately **before** the status token (after the em dash separator), consistent with current `✅ COMPLETE`:

```text
- **{id}** – {title} - {icon} {STATUS} [(version)] [(priority note)] - {links…} | Last modified: …
```

**Rules:**

1. Every MoSCOW row with a status **must** include exactly one leading state icon (**Set A emoji** on boards).
2. Icons are **not** substituted for the status word (keep `COMPLETE` for grep/validators).
3. **Fallback symbols** (Set B) are documented for non-emoji contexts only — not mixed into `kboard.md` / `fbuboard.md` as the default row form.
4. UKW/RW **must not** change icons on hygiene-only passes (pairs with FR-097 stamp authority).
5. **`validate_kanban_state_icons.py`** (Gate 9): row missing primary icon or unknown status → warn/block in `--strict` mode.

---

## Acceptance criteria (UXR)

- [x] **AC1:** Editorial decision records chosen set (A/B/C/D or variant) with signed-off mapping table. (**Set A primary + B fallback**, 2026-05-20.)
- [x] **AC2:** `kanban-board-guide.md` + `kanban-governance-policy.md` document canonical states, aliases, and icons.
- [x] **AC3:** `kboard.md` and `fbuboard.md` active MoSCOW rows use icons for **all** statuses (not only COMPLETE).
- [x] **AC4:** UKW/RW agents apply mapping deterministically; no ad hoc icon invention.
- [x] **AC5:** `validate_kanban_state_icons.py` + Release Readiness Gate 9 enforce presence (implementation **E4:S13:T07** / v0.4.13.7+1).

---

## Out of scope

- Custom icon fonts or SVG assets in markdown (stay Unicode/emoji in plain `.md`).
- Replacing `**Status:**` fields inside FR/BR/UXR/task docs (board-row convention only unless later UXR extends).
- Color-only indicators without a text status word.

---

## Next steps

1. ~~**User/editorial:** Pick Set A, B, C, or D~~ — **Done:** Set A on boards; Set B fallback where emoji unsupported.
2. ~~**IPW** on **E4:S13:T07**~~ — **Done:** [IPP-E4S13T07](../../../implementation-cycles/IPP-E4S13T07-kanban-fbu-state-icons-moscow-rows.md).
3. ~~**RW** after implementation~~ — **Done:** v0.4.13.7+1.

---

## References

- [kboard.md](../kboard.md) — E2:S15:T08 `✅ COMPLETE` exemplar
- [fbuboard.md](../fbuboard.md)
- [Kanban governance policy](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md)
