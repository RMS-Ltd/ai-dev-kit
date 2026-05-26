---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T16:20:00Z
expires_at: null
housekeeping_policy: keep
---

# E1:S04 — Planning: FR-099 book/private/public repository migration (ADR-006)

**Host program:** [FR-099 — Spin off book epic to a private repository](../project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository.md)  
**Governing ADR:** [ADR-006 — Book project private repository spin-off](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)  
**Story:** [Story 004 — Repository branding and renaming](../project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming.md)  
**Status:** **Phases 0–2 implemented** (forensic); **Phases 3–4 approved for execution** pending explicit `implement` / `RW E1:S04:T06` / `T07`

**Phase tasks (shared IPP):**

| Phase | Task | Doc | IPP § |
|-------|------|-----|-------|
| 0 | E1:S04:T03 | [T03](../project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming/T03-fr099-phase0-inventory-adr-approval.md) | §4.1 |
| 1 | E1:S04:T04 | [T04](../project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming/T04-fr099-phase1-privatize-rename-hf-ai-dev-kit.md) | §4.2 |
| 2 | E1:S04:T05 | [T05](../project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming/T05-fr099-phase2-book-extraction-genesis.md) | §4.3 |
| 3 | E1:S04:T06 | [T06](../project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming/T06-fr099-phase3-public-ai-dev-kit-rebirth.md) | §4.4 |
| 4 | E1:S04:T07 | [T07](../project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming/T07-fr099-phase4-rewire-and-verify.md) | §4.5 |

**Cross-program:** [IPP-E6S09T06 §8 Wave E](IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md) — public-repo ECC validation **after** Phase 3.

---

## 1. Requirements

| ID | Requirement | Source | Phase task |
|----|-------------|--------|------------|
| RF1 | Complete book-asset inventory | FR-099-F1 | T03 |
| RF2 | ADR-006 approved | FR-099-F2 | T03 |
| RF3 | Private `hf-ai-dev-kit` with full history | FR-099-F3 | T04 |
| RF4 | Book extraction genesis on private tree | FR-099-F4 | T05 |
| RF5 | New public `earlution/ai-dev-kit` from genesis | FR-099-F5 | T06 |
| RF6 | Rewire URLs + install smoke (no Epic-24) | FR-099-F6 | T07 |
| RF7 | E1:S04:T02 SUPERSEDED | FR-099-F7 | T03 |

| ID | Acceptance criterion | Phase |
|----|---------------------|-------|
| AC1 | Inventory signed off | T03 |
| AC2 | ADR-006 + T02 superseded | T03 |
| AC3 | Private retains pre-cutover history | T04 |
| AC4 | Public genesis tree book-free | T06 |
| AC5 | No active E24 on public kboard | T05 |
| AC6 | Install smoke passes | T07 |
| AC7 | Remotes/badges → new public repo | T07 |

**Out of scope:** E1:S04:T02 public Head First rename; O'Reilly workflow; copying framework SoT into book repo.

---

## 2. Specification

**Goal.** Separate book IP from public ADK via **Option C** ([ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)): private **`RMS-Ltd/hf-ai-dev-kit`** (full history) + public **`earlution/ai-dev-kit`** reborn from book-free genesis.

**Repos**

| Repo | Role |
|------|------|
| `RMS-Ltd/hf-ai-dev-kit` | Private; book + frameworks history |
| `earlution/ai-dev-kit` | Public; framework-only from genesis |

### 2.4 ADR necessity (FR-100)

**Outcome:** **ALREADY_COVERED** — [ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md). No new ADR required for Phases 3–4 unless bootstrap policy changes.

---

## 3. Test design

| ID | Phase | Verification |
|----|-------|--------------|
| T1 | 0–2 | Tree: no `docs/book-proj/`, no `Epic-24/` on `dev` |
| T2 | 3 | Public remote has no pre-genesis book objects |
| T3 | 4 | Greenfield/brownfield install smoke (FR-080); RW/UKW validators |
| T4 | 4 | Optional Wave E ECC on **public** clone ([IPP-E6S09T06 §8](IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md)) |

---

## 4. Implementation plan

### 4.1 Phase 0 — E1:S04:T03 ✅

| Step | Action | Status |
|------|--------|--------|
| 1 | Inventory + ADR-006 outline | ✅ |
| 2 | Mark E1:S04:T02 SUPERSEDED | ✅ |

### 4.2 Phase 1 — E1:S04:T04 ✅

| Step | Action | Status |
|------|--------|--------|
| 1 | Privatize + rename GitHub repo | ✅ 2026-05-26 |

### 4.3 Phase 2 — E1:S04:T05 ✅

| Step | Action | Status |
|------|--------|--------|
| 1 | Book extraction genesis commit | ✅ `v0.1.4.3+1` |
| 2 | `book/epic-24` branch at pre-extraction tip | ✅ |

### 4.4 Phase 3 — E1:S04:T06 📋

| Step | Action |
|------|--------|
| **1** | **TODO → IN PROGRESS** when execution authorized |
| 2 | Resolve ADR-006 open question: orphan root vs genesis-SHA bootstrap |
| 3 | Create public `earlution/ai-dev-kit` from genesis (no pre-genesis book on public remote) |
| 4 | Document default branch + clone policy |
| **N** | **COMPLETE** + version anchor when AC4 satisfied |

### 4.5 Phase 4 — E1:S04:T07 📋 (after T06)

| Step | Action |
|------|--------|
| **1** | **TODO → IN PROGRESS** after T06 COMPLETE |
| 2 | Rewire remotes, badges, install docs, CI, GitHub Pages base |
| 3 | Install smoke (AC6); capture Wave E evidence if scheduled |
| **N** | **COMPLETE** when AC6–AC7 satisfied; close FR-099 |

---

## 5. Documentation deliverables

| Doc | Action |
|-----|--------|
| ADR-006 | UPDATE open questions when Phase 3 bootstrap chosen |
| INSTALL / README / rw-config remotes | UPDATE in T07 |
| Cheatsheet Wave E callout | OPTIONAL (IPP-E6S09T06) |

---

## 6. Documentation housing

Repository SoT under `docs/` and root install docs; no manuscript in public genesis changelogs.

---

## 7. Success criteria

- [x] Phases 0–2 complete (T03–T05) — archived on [kanban-completed.md](../project-management/kanban/kanban-completed.md); off active [kboard](../project-management/kanban/kboard.md)
- [ ] Phase 3: public repo live (T06)
- [ ] Phase 4: rewire + smoke (T07)
- [ ] FR-099 IMPLEMENTED

---

## References

- [FR-099](../project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
- [IPP-E6S09T06 — ECC / Wave E](IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md)
