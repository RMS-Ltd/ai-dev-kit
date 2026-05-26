---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-099: Spin off book epic to a private repository

**Type:** Feature Request (FR)  
**ID:** FR-099  
**Submitted:** 2026-05-26  
**Submitted By:** Maintainer  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** IN PROGRESS — **Phases 0–2 complete**; **Phases 3–4** open on dedicated tasks (split 2026-05-26)

**Implementing tasks (one per phase):**

| Phase | Task | Doc | Status |
|-------|------|-----|--------|
| 0 | E1:S04:T03 | [T03](../epics/Epic-1/Story-004-repository-branding-and-renaming/T03-fr099-phase0-inventory-adr-approval.md) | ✅ COMPLETE |
| 1 | E1:S04:T04 | [T04](../epics/Epic-1/Story-004-repository-branding-and-renaming/T04-fr099-phase1-privatize-rename-hf-ai-dev-kit.md) | ✅ COMPLETE |
| 2 | E1:S04:T05 | [T05](../epics/Epic-1/Story-004-repository-branding-and-renaming/T05-fr099-phase2-book-extraction-genesis.md) | ✅ COMPLETE (`v0.1.4.3+1`) |
| 3 | E1:S04:T06 | [T06](../epics/Epic-1/Story-004-repository-branding-and-renaming/T06-fr099-phase3-public-ai-dev-kit-rebirth.md) | ✅ COMPLETE (2026-05-26) |
| 4 | E1:S04:T07 | [T07](../epics/Epic-1/Story-004-repository-branding-and-renaming/T07-fr099-phase4-rewire-and-verify.md) | 📋 TODO |

**Umbrella redirect (historical):** [T03-spin-off…](../epics/Epic-1/Story-004-repository-branding-and-renaming/T03-spin-off-book-epic-private-repo-fr099.md)

**Migration ADR:** [ADR-006](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)

**Planning package (all phases):** [IPP-E1S04-fr099-book-private-public-migration.md](../../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md)

---

## Summary

Separate **book manuscript IP** and **Epic 24** from the public **AI Dev Kit** product using the **preferred Option C migration** ([ADR-006](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)): privatize and rename the current repo to **`hf-ai-dev-kit`**, land a **book extraction genesis commit**, then rebirth **public `earlution/ai-dev-kit`** from that commit with framework-only history and **no Head First branding**.

---

## Problem Statement

The public AI Dev Kit repository currently co-hosts:

1. **Canonical framework packages** (workflow management, Kanban, versioning) intended for open distribution.
2. **Unpublished book intellectual property**, including proposals, chapter drafts, outlines, agent correspondence, and structure research under `docs/book-proj/`.
3. **Epic 24 Kanban** (`docs/project-management/kanban/epics/Epic-24/`) tracking book development on branch `epic/24-book-related-work`, with active tasks on `kboard.md`.

This coupling creates **IP exposure risk**: anyone cloning the public repo receives manuscript drafts and publishing strategy documents. It also **confuses adopters**—Kanban installers and greenfield guides already treat Epic 24 as dev-kit-specific contamination (see consumer-board guidance in framework dependency docs).

The maintainer wants AI Dev Kit to stay **public and framework-focused** while the book project moves to a **private repository** with its own Kanban, versioning, and release cadence.

---

## Requirements

### Functional Requirements

- [ ] **FR-099-F1:** Produce a **complete inventory** of book-related assets in ai-dev-kit (paths, git history sensitivity, cross-references, branches).
- [ ] **FR-099-F2:** Finalize and obtain maintainer approval for **[ADR-006](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)** (preferred Option C migration outline).
- [x] **FR-099-F3:** **Privatize** and **rename** to [`RMS-Ltd/hf-ai-dev-kit`](https://github.com/RMS-Ltd/hf-ai-dev-kit); retain full history on the private repo (book + frameworks) — **done 2026-05-26**
- [x] **FR-099-F4:** Land **book extraction genesis commit** on private `hf-ai-dev-kit` — ✅ **E1:S04:T05** (`v0.1.4.3+1`, 2026-05-26)
- [x] **FR-099-F5:** **Create new public `earlution/ai-dev-kit`** from genesis commit — ✅ 2026-05-26 ([bootstrap runbook](../../../maintenance/fr099-phase3-public-repo-bootstrap.md))
- [ ] **FR-099-F6:** **Rewire** remotes, badges, install docs, CI, and submodule URLs to the new public repo; verify greenfield/brownfield install (no Epic-24 contamination).
- [ ] **FR-099-F7:** Mark **[E1:S04:T02](../epics/Epic-1/Story-004-repository-branding-and-renaming.md)** **SUPERSEDED** — public ADK does not rename to Head First; Head First context remains private `hf-ai-dev-kit` only.

### Non-Functional Requirements

- [ ] **FR-099-NF1:** Private repo must remain **inaccessible** from public ADK CI, badges, and clone defaults.
- [ ] **FR-099-NF2:** Public ADK must remain **fully functional** for adopters after extraction (RW, UKW, validators, greenfield install).
- [ ] **FR-099-NF3:** Migration must not block ongoing framework work on `dev` / epic branches except during a bounded cutover window.
- [ ] **FR-099-NF4:** Book repo may reuse ADK frameworks via established install/submodule patterns—not by copying framework sources into the book repo long-term.

---

## Scope Analysis

**Problem Domain:** Repository architecture, IP boundary, project-specific epic extraction  
**Affected Areas:**

- [x] Repository structure and branding (Epic 1, Story 4)
- [x] Kanban (`Epic-24/`, `kboard.md`, `kanban-structure.md`, `_index.md`)
- [x] Book content (`docs/book-proj/`)
- [x] Documentation (vision, README, kanban-board-guide, changelogs — references only; full changelog history may retain mentions)
- [x] Git branches (`epic/24-book-related-work`)
- [ ] Framework package source (unchanged — stays public)
- [ ] Installer scripts (verify no book paths in defaults)

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [ ] Medium (1 week)
- [x] Complex (2+ weeks) — inventory, private repo bootstrap, migration, public cleanup, history policy
- [ ] Very Complex (1+ month)

---

## Known Asset Inventory (initial — executor validates)

| Area | Path / artifact | Sensitivity |
|------|-----------------|-------------|
| Manuscript & proposals | `docs/book-proj/` (8 files) | **HIGH** — drafts, proposal, agent info |
| Book Kanban | `docs/project-management/kanban/epics/Epic-24/` | **MEDIUM** — process + content refs |
| Active board rows | `kboard.md` E24:* tasks | **LOW** — remove from public board post-migration |
| Vision cross-links | `docs/documentation/ai-dev-kit-vision-and-purpose.md` | **LOW** — rewrite for split narrative |
| Branch | `epic/24-book-related-work` | **MEDIUM** — migrate or archive |
| Historical changelogs | `docs/changelog-and-release-notes/` | **MEDIUM** — may contain book text excerpts; history policy required |

---

## Preferred migration strategy (Option C)

Canonical outline: **[ADR-006 — Book project private repository spin-off](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)**.

| Repo | Visibility | Name | Role |
|------|------------|------|------|
| Book + full history | **Private** | `hf-ai-dev-kit` | Manuscript, Epic 24, Head First / O'Reilly context |
| Frameworks | **Public** | `ai-dev-kit` | Neutral ADK; no Head First branding |

**Genesis commit rule (Option B):** last book-path touch → dedicated **book extraction commit** → that commit (or verified child) becomes the root of **new public** `ai-dev-kit` history.

**Supersedes [E1:S04:T02](../epics/Epic-1/Story-004-repository-branding-and-renaming.md):** conditional public rename to `head-first-ai-dev-kit` is **cancelled**; Head First naming applies to the **private** book repo only.

## Phased Delivery

| Phase | Name | Task | Status |
|-------|------|------|--------|
| **0** | Inventory & ADR approval | **E1:S04:T03** | ✅ COMPLETE |
| **1** | Privatize + rename | **E1:S04:T04** | ✅ COMPLETE (2026-05-26) |
| **2** | Book extraction genesis | **E1:S04:T05** | ✅ COMPLETE (`v0.1.4.3+1`) |
| **3** | Public rebirth | **E1:S04:T06** | ✅ COMPLETE (2026-05-26) |
| **4** | Rewire & verify | **E1:S04:T07** | 📋 TODO |

---

## Use Cases

**Primary use case:** Maintainer continues book work in a private repo while publishing and promoting ai-dev-kit as an open framework reference without leaking manuscript drafts.

**Additional use cases:**

- Adopters clone public ADK only—history begins at framework-only genesis; no manuscript in default tree.
- Head First / O'Reilly branding lives in **private `hf-ai-dev-kit`** only; public ADK stays neutral.
- Private book repo installs public ADK frameworks as a dependency for examples aligned with the reference implementation.

---

## Acceptance Criteria

- [ ] **AC1:** Asset inventory signed off; every book-related path classified private-retain / public-genesis / redact.
- [ ] **AC2:** [ADR-006](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) approved; **E1:S04:T02** marked SUPERSEDED.
- [ ] **AC3:** Private `hf-ai-dev-kit` retains full history including book IP and Epic 24.
- [ ] **AC4:** New public `ai-dev-kit` genesis tree has **no** `docs/book-proj/`, **no** `Epic-24/`, **no** Head First obligation in vision/README.
- [ ] **AC5:** Public `kboard.md` and structure docs contain **no** active E24 rows.
- [ ] **AC6:** Install smoke test passes without Epic-24 contamination on public repo.
- [ ] **AC7:** Remotes, badges, and install URLs point at new public `earlution/ai-dev-kit`.

---

## Dependencies

**Blocks:**

- Unblocks confident public promotion of ai-dev-kit without IP leakage or Head First branding confusion.

**Blocked By:**

- None for Phase 0 planning.
- Phase 1+ requires maintainer approval of [ADR-006](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) open questions (genesis bootstrap shape, cutover window).

**Related Work:**

- [ADR-006](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) — Preferred migration outline (Option C)
- [E1:S04:T02](../epics/Epic-1/Story-004-repository-branding-and-renaming.md) — **SUPERSEDED** by FR-099 / ADR-006 (public Head First rename cancelled)
- [FR-039](./FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) — Broader legacy cleanup (coordinate to avoid duplicate audits)
- [FR-080](./FR-080-greenfield-installation-process.md) — Consumer Kanban must not include project-specific epics
- Epic 24 — **removed from public tree**; retained in private `hf-ai-dev-kit` git history only
- [FR-064](./FR-064-shields-branch-private-repo-badges.md) — Prior private-repo hygiene pattern

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-05-26  
**Intake By:** Agent (maintainer-directed intake)

**Decision Flow Results:**

- [x] Story Match Found: Epic 1, Story 4 → Tasks **T03–T07** (one per phase; split 2026-05-26)

**Assigned To:**

- Epic: Epic 1 — AI Dev Kit Core
- Story: Story 4 — Repository Branding and Renaming
- Tasks: T03 (Phase 0) ✅ · T04 (Phase 1) ✅ · T05 (Phase 2) ✅ · T06 (Phase 3) ✅ · **T07 (Phase 4)** 📋
- Latest release: Phase 2 `v0.1.4.3+1`; kanban re-anchor `v0.1.4.3+2` (umbrella T03, pre-split)

**Kanban Links:**

- Epic: [`Epic-1.md`](../epics/Epic-1/Epic-1.md)
- Story: [`Story-004-repository-branding-and-renaming.md`](../epics/Epic-1/Story-004-repository-branding-and-renaming.md)
- Active: [`T07`](../epics/Epic-1/Story-004-repository-branding-and-renaming/T07-fr099-phase4-rewire-and-verify.md) — public live at [`earlution/ai-dev-kit`](https://github.com/earlution/ai-dev-kit)

---

## Notes

- **Do not** copy unpublished manuscript into the new public repo genesis commit or its changelogs.
- Private **`hf-ai-dev-kit`** consumes public **`ai-dev-kit`** as dependency—not the reverse.
- Pre-genesis commits with book content remain **only** on private `hf-ai-dev-kit`; new public repo history starts at genesis (no in-place `filter-repo` on the old public remote unless cutover fails).
- **E1:S04:T02** must not be executed; superseded 2026-05-26 per maintainer separation decision.
- Epic 24 is **project-specific (24+)**; it stays in the private book repo, not public ADK Kanban.

---

## References

- [ADR-006 — Book project private repository spin-off (preferred migration)](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
- [`docs/book-proj/`](../../book-proj/) — **Removed from public tree** (Phase 2); retained in private git history
- [`Epic-24/`](../epics/Epic-24/) — **Removed from public tree** (Phase 2); retained in private git history
- [AI Dev Kit vision and purpose](../../documentation/ai-dev-kit-vision-and-purpose.md)
- [Framework dependency post-template setup guide](../../documentation/user-docs/framework-dependency-post-template-setup-guide.md) — Epic-24 contamination note
- [dev-kit versioning policy](../../architecture/standards-and-adrs/dev-kit-versioning-policy.md)
