---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-006: Book project private repository spin-off (preferred migration)

**Status:** Accepted — **Phase 1 complete** (2026-05-26); Phases 2–4 pending  
**Date:** 2026-05-26  
**Decision owner:** Maintainer  
**Private repository (live):** [RMS-Ltd/hf-ai-dev-kit](https://github.com/RMS-Ltd/hf-ai-dev-kit) — **private**
**Implementing work:** [FR-099](../../project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository.md) · [E1:S04:T03](../../project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming/T03-spin-off-book-epic-private-repo-fr099.md)

**Supersedes:** [E1:S04:T02](../../project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming.md) (conditional public rename of `ai-dev-kit` → `head-first-ai-dev-kit`)

---

## Context

The **`RMS-Ltd/hf-ai-dev-kit`** repository (formerly public `ai-dev-kit` under the same org) co-hosts:

- **Open framework packages** (workflow management, Kanban, versioning) intended for public distribution.
- **Unpublished book IP** (`docs/book-proj/`, Epic 24 Kanban, Head First / O'Reilly publishing context).

This coupling exposes manuscript drafts to anyone who clones the public repo and blurs the product boundary for adopters. Prior task **E1:S04:T02** assumed book and toolkit would share one repository and contemplated renaming the **public** repo to `head-first-ai-dev-kit` on O'Reilly acceptance.

Maintainer direction (2026-05-26): achieve **clear separation**. Public **AI Dev Kit** must remain a neutral framework product with **no Head First branding obligation**. Book work, Epic 24, and O'Reilly context belong in a **private** repository with full history preserved there.

---

## Decision

Adopt **Option C — private archive + fresh public genesis** (not in-place deletion with retained public history, not `git filter-repo` on the long-lived public remote unless cutover fails).

### Repository roles after cutover

| Repository | Visibility | Name | Purpose |
|------------|------------|------|---------|
| **Book + full history** | **Private** ✅ | [`RMS-Ltd/hf-ai-dev-kit`](https://github.com/RMS-Ltd/hf-ai-dev-kit) | Manuscript, Epic 24, Head First / O'Reilly context, complete git archaeology |
| **Frameworks** | **Public** (pending Phase 3) | `ai-dev-kit` | Neutral ADK reference; frameworks, RW/UKW/IPW, adopter install paths |

Public `ai-dev-kit` **does not** rename to Head First. **E1:S04:T02 is superseded** by this ADR and FR-099.

### Cutover commit rule (Option B)

Do **not** use “first commit after last book path touch” alone as the public genesis point—framework and book commits are interleaved.

1. Identify **last book-path touch commit** (commits modifying `docs/book-proj/`, `docs/project-management/kanban/epics/Epic-24/`, or other inventory-classified book paths).
2. Land a dedicated **book extraction commit** on the private line that:
   - Removes all book paths and Epic 24 from the tree destined for public ADK.
   - Strips Head First / book narrative from public-facing docs (vision, README, kanban guides) — public-safe stub only.
   - Cleans `kboard.md` / structure docs of E24 rows on the public-bound branch.
3. **Public genesis commit** = the **book extraction commit** (or its immediate child on `dev` after verification).

### GitHub choreography (preferred sequence)

```
Before 2026-05-26: RMS-Ltd/ai-dev-kit (public, book + frameworks)
    ↓
✅ Phase 1 (2026-05-26): Made private; renamed → RMS-Ltd/hf-ai-dev-kit
    ↓
4. Complete book extraction commit on private hf-ai-dev-kit
    ↓
5. Create NEW public RMS-Ltd/ai-dev-kit (or earlution/ai-dev-kit per org policy) from genesis commit
   (orphan root OR branch starting at genesis SHA — no pre-genesis objects on public remote)
    ↓
6. Rewire remotes, badges, INSTALL_IN_YOUR_PROJECT, CI, submodule URLs
    ↓
7. Private hf-ai-dev-kit continues book + Epic 24 work; consumes public ADK as dependency
```

### Public history shape

**Preferred:** new public repo whose history **begins at genesis commit** (orphan initial commit or first push = extraction tree). Narrative: “public ADK era starts here.”

**Alternative:** new public repo whose default branch starts at genesis SHA without pushing earlier commits to the new remote (same effect, different tooling).

Pre-genesis commits remain **only** on private `hf-ai-dev-kit`.

### Book repo dependency on public ADK

Private book repo **consumes** public ADK via established patterns (submodule, installer, or docs-only reference)—it does **not** become the long-term SoT for framework packages.

Epic 24 task IDs (`E24:*`) may continue in the private repo Kanban.

---

## Consequences

### Positive

- Strong IP boundary without rewriting entire public git history in place.
- Public ADK stays **`ai-dev-kit`** — no Head First rename, no manuscript paths on default branch.
- Full forensic history preserved privately.
- Supersedes obsolete E1:S04:T02 public-rename plan cleanly.

### Negative / costs

- **Temporary privatization** blocks new public clones during cutover window.
- **New public repo** may reset GitHub stars/forks/issues (plan for communication).
- **Two remotes forever:** private book work vs public framework releases.
- Coordinated pass required: install docs, CI badges, hardcoded GitHub URLs, changelog archive policy for public repo (post-genesis only or curated import).
- Anyone who cloned **before** privatization may retain local history with book content (usually acceptable; document if needed).

### Rollback

Before public genesis push: abort by re-publicizing `hf-ai-dev-kit` under original name. After public genesis: rollback is forward-fix only (do not force-push public ADK to restore book paths).

---

## Execution phases (maps to FR-099)

| Phase | Name | Deliverable |
|-------|------|-------------|
| **0** | Inventory & ADR approval | Validated asset matrix; maintainer signs this ADR |
| **1** | Privatize + rename | `RMS-Ltd/hf-ai-dev-kit` private | ✅ 2026-05-26 |
| **2** | Book extraction commit | Genesis tree book-free | 🔄 2026-05-26 (pending RW) |
| **3** | Public rebirth | New public `RMS-Ltd/ai-dev-kit` from genesis | Pending |
| **4** | Rewire & verify | URLs, install smoke test, no Epic-24 contamination |

---

## Migration progress

| Phase | Status | Date | Notes |
|-------|--------|------|-------|
| **0** | In progress | 2026-05-26 | ADR outline accepted; inventory pending |
| **1** | ✅ **Complete** | 2026-05-26 | GitHub repo private; renamed to [`RMS-Ltd/hf-ai-dev-kit`](https://github.com/RMS-Ltd/hf-ai-dev-kit) |
| **2** | ✅ **Complete** | 2026-05-26 | **v0.1.4.3+1** — book extraction genesis committed |
| **3** | Pending | — | New public `ai-dev-kit` from genesis |
| **4** | Pending | — | Rewire remotes, badges, install URLs |

**Local clone hygiene:** Update `origin` if still pointing at pre-rename URL:
`git remote set-url origin https://github.com/RMS-Ltd/hf-ai-dev-kit.git`

---

## Open questions (maintainer)

- [x] Confirm private repo name: **`RMS-Ltd/hf-ai-dev-kit`** (live, private — 2026-05-26)
- [ ] Orphan root vs genesis-SHA branch for public repo bootstrap.
- [ ] Changelog archive: truncate public archive at genesis vs import summary doc only.
- [ ] Cutover window duration and user communication channel.

---

## Related

- [FR-099 — Spin off book epic to private repository](../../project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [E1:S04:T03 — Spin off book epic (task)](../../project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming/T03-spin-off-book-epic-private-repo-fr099.md)
- [E1:S04:T02 — superseded](../../project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming.md) (public Head First rename)
- [FR-064](../../project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges.md) — prior private-repo hygiene pattern
- [FR-080](../../project-management/kanban/fr-br/FR-080-greenfield-installation-process.md) — consumer Kanban must not include Epic 24
- [ADR-003](./ADR-003-greenfield-vs-brownfield-adoption.md) — public ADK remains reference implementation for adopters
