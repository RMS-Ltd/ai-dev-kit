# AI Dev Kit & Book Project — Agent Handoff Context

**Created:** 2026-05-28  
**Purpose:** Provide context for agents working on book publishing matters who need to understand the relationship between the public AI Dev Kit and the private book project.

---

## Repository Architecture (Two-Repo Split)

As of **2026-05-26**, the project operates as **two separate repositories**:

| Repository | Visibility | URL | Purpose |
|------------|------------|-----|---------|
| **AI Dev Kit (Public)** | Public | [`RMS-Ltd/ai-dev-kit`](https://github.com/RMS-Ltd/ai-dev-kit) | Framework packages, workflow tooling, adoption docs |
| **Book Project (Private)** | Private | [`RMS-Ltd/ai-dev-kit-book`](https://github.com/RMS-Ltd/ai-dev-kit-book) | Manuscript, Epic 24, Head First / O'Reilly publishing work |

**Governing ADR:** [ADR-006 — Book Project Private Repository Spin-Off](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)

**Key Point:** The public AI Dev Kit contains **no manuscript content**, **no Head First branding**, and **no Epic 24** on its default branch. All book-related IP was extracted to the private repository.

---

## Part 1: AI Dev Kit — Production Readiness Assessment

### Current State (as of v0.4.813+2 / internal v0.1.4.7+2)

**Overall Status:** **Production-ready for framework adoption**, but positioned as **active development** (RC 0).

### Framework Maturity

| Framework | Version | Status | Notes |
|-----------|---------|--------|-------|
| **Workflow Management** | v2.3.0 | ✅ Stable | 11 workflows in registry; RW/UKW/IPW battle-tested |
| **Kanban** | v2.2.0 | ✅ Stable | Epic/Story/Task structure, FR/BR intake |
| **Numbering & Versioning** | v2.0.0 | ✅ Stable | Dual-version (internal + SemVer), registry-based mapping |
| **Document Lifecycle** | v1.0.0 | ✅ Stable | TTL-based housekeeping |
| **Debug Path** | v1.0.0 | ✅ Stable | Debugging utilities |

### Production-Ready Features

1. **Release Workflow (RW)** — Fully automated 13-step release process
   - Branch context validation
   - Task intent validation
   - Changelog generation
   - Kanban marker updates
   - Dual tagging (internal + SemVer)
   - **Used for every release since v0.1.4.7+2**

2. **Update Kanban Workflow (UKW)** — Board synchronization
   - Bookkeeping updates
   - Priority management
   - Kanban hygiene

3. **Validators** — Pre-commit and pre-release validation
   - `validate_branch_context.py --strict`
   - `validate_rw_task_complete.py`
   - `validate_rw_task_intent.py`
   - `validate_semver_monotonic.py`

4. **Installation Framework** — Greenfield/brownfield adoption
   - Submodule-based installation
   - Framework copy + installer scripts
   - Post-template setup guides

### What's NOT Production-Ready

1. **CLI Tooling** — Minimal CLI presence; most workflows invoked via slash commands or scripts
2. **Package Distribution** — Not published to PyPI/npm; installed via git submodule or copy-paste
3. **CI/CD** — Limited automated CI; relies on agent-driven workflow execution
4. **Public Documentation Site** — GitHub Pages exists but may not be fully synced

### Development Philosophy

- **Agent-first design:** Workflows designed for AI agent execution (Cursor, Claude Code)
- **Config-driven:** `rw-config.yaml` as single source of truth
- **Forensic traceability:** Every release tied to Kanban coordinates (E:S:T)
- **Dual-versioning:** Internal `RC.EPIC.STORY.TASK+BUILD` + external SemVer

### Kanban State

**Active Epics (public repo):**
- Epic 1: AI Dev Kit Core
- Epic 2: Workflow Management Framework
- Epic 3: Numbering & Versioning Framework
- Epic 4: Kanban Framework
- Epic 5: (various enhancements)
- Epic 6: (various enhancements)

**Epic 24 (Book):** **Removed from public Kanban** — exists only in private repo.

---

## Part 2: Book Project — Detailed Status

### Project Overview

**Working Title:** "Head First AI Dev Kit: The Vibe-Coder's Complete Guide"  
**Format:** Head First series (O'Reilly Media)  
**Status:** **Private development** — manuscript unpublished

### Repository History

| Phase | Date | Milestone |
|-------|------|-----------|
| Phase 0 | 2026-05-26 | Inventory + ADR-006 approval |
| Phase 1 | 2026-05-26 | Privatized + renamed to `hf-ai-dev-kit` |
| Phase 2 | 2026-05-26 | Book extraction genesis commit (v0.1.4.3+1) |
| Phase 3 | 2026-05-26 | Public `RMS-Ltd/ai-dev-kit` reborn from genesis |
| Phase 4 | 2026-05-26 | Rewire + verify complete (v0.1.4.7+2) |

**FR-099 Status:** ✅ **IMPLEMENTED** — All phases complete.

### Book Content Structure (Private Repo)

**Manuscript Location:** `docs/book-proj/` (private only)

**Known Assets (from inventory):**
- 8 manuscript/proposal files in `docs/book-proj/`
- Epic 24 Kanban: `docs/kanban/epics/epic-24/`
- Active branch: `epic/24-book-related-work`

**Epic 24 Structure (private Kanban):**
- **Story 001:** Book content development
- **Story 002:** (TBD)
- **Story 003:** Book publishing support

### Publishing Strategy

**Target Publisher:** O'Reilly Media (Head First series)  
**Decision Point:** Conditional rename of **private** repo to match book title upon acceptance.

**Key Decisions (from memory):**
- Title: "Head First AI Dev Kit: The Vibe-Coder's Complete Guide"
- Format: Head First (visual, conversational, example-driven)
- Tutorial Project: ExpenseTracker
- BYOP (Build Your Own Project) parallel track
- Chapter 0 onboarding flow

### Current Book Development Status

**What We Know:**
- Manuscript work is **active but unpublished**
- Epic 24 tasks exist in private Kanban
- Book repo consumes public AI Dev Kit as a dependency
- No public manuscript drafts or publishing strategy documents are visible in public repo

**What Agents Should Know:**
- **Do not reference specific manuscript content** — it's private IP
- **Do not expose Epic 24 details** in public AI Dev Kit
- **Book repo uses public ADK frameworks** for examples and structure

### Open Questions (Maintainer-Only)

1. **Changelog archive policy:** Truncate public archive at genesis vs. import summary doc only
2. **Cutover communication:** Duration and user communication channel for future migrations
3. **O'Reilly submission timeline:** Not publicly documented

---

## Part 3: Agent Guidelines for Book-Related Work

### When Working on Book Publishing (Private Repo)

1. **Use the private repository:** `RMS-Ltd/ai-dev-kit-book`
2. **Reference public ADK as dependency:** Book examples should install from `RMS-Ltd/ai-dev-kit`
3. **Maintain IP boundary:** Do not copy manuscript content to public repo
4. **Epic 24 stays private:** Kanban tasks for book content belong in private repo only

### When Working on Public AI Dev Kit

1. **No Head First branding:** Public repo remains neutral "AI Dev Kit"
2. **No Epic 24 references:** Remove any E24 task rows from public `kboard.md`
3. **No manuscript paths:** `docs/book-proj/` must not exist on public tree
4. **Framework-first focus:** Public docs focus on framework adoption, not book narrative

### Cross-Repo Coordination

**Private repo depends on public:**
```bash
# Private book repo installs public ADK as dependency
git submodule add https://github.com/RMS-Ltd/ai-dev-kit.git .ai-dev-kit
```

**Public repo has no knowledge of private:**
- No remotes pointing to `RMS-Ltd/ai-dev-kit-book`
- No CI jobs that access private repo
- No badges or links that require private repo access

---

## Part 4: Versioning & Release Coordination

### Public AI Dev Kit Releases

**Current Release:** v0.4.813+2 (SemVer) / v0.1.4.7+2 (internal)  
**Release Date:** 2026-05-26  
**Governing Task:** E2:S16:T03 (RW Maintenance) or task-specific

**Release Workflow:**
1. `RW E:S:T:XX` triggers full release cycle
2. Validators run (branch context, task intent, task complete)
3. Changelog generated
4. Kanban markers updated
5. Dual tags created (internal + SemVer)
6. Push to remote

### Private Book Repo Versioning

**Expected Pattern:** Book repo may use its own versioning or align with public ADK for framework dependencies.

**Framework Dependency:** When book examples reference ADK frameworks, they should pin to a specific public release (e.g., `v0.4.813+2`).

---

## Part 5: Key Documents Reference

### Public AI Dev Kit (RMS-Ltd/ai-dev-kit)

| Document | Purpose |
|----------|---------|
| [README.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/README.md) | Framework overview, quick start |
| [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) | Installation guide |
| [CLAUDE.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CLAUDE.md) | Claude Code project instructions |
| [ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) | Repository split decision |
| [Vision & Purpose](../documentation/ai-dev-kit-vision-and-purpose.md) | Project vision |
| [Versioning Policy](../architecture/standards-and-adrs/dev-kit-versioning-policy.md) | Version schema docs |

### Private Book Repo (RMS-Ltd/ai-dev-kit-book)

| Document | Purpose |
|----------|---------|
| [install-error-codes-book-integration.md](install-error-codes-book-integration.md) | **FR-108 / ADK-* error codes** — appendix sync, setup spine, reader reporting (v0.6.9.20+) |
| `docs/book-proj/` | Manuscript drafts |
| `docs/kanban/epics/epic-24/` | Book Kanban |
| [ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) | Same ADR (retained in history) |
| [FR-099](../kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository.md) | Migration FR (retained in history) |

---

## Part 6: Contact & Access

### Repository Access

| Repo | Access | Contact |
|------|--------|---------|
| `RMS-Ltd/ai-dev-kit` | Public | https://github.com/RMS-Ltd/ai-dev-kit |
| `RMS-Ltd/ai-dev-kit-book` | Private (maintainer only) | https://github.com/RMS-Ltd/ai-dev-kit-book |

### Issue Tracking

- **Public AI Dev Kit:** https://github.com/RMS-Ltd/ai-dev-kit/issues
- **Private Book Project:** Internal to private repo

---

## Summary for Agents

**If the user is discussing book publishing:**
1. They are working in the **private repo** (`RMS-Ltd/ai-dev-kit-book`)
2. Manuscript content is **not in this public repo**
3. Book project **consumes public ADK** as a dependency
4. Epic 24 and Head First branding are **private-only**

**If the user is discussing framework development:**
1. They are working in the **public repo** (`RMS-Ltd/ai-dev-kit`)
2. Frameworks are **production-ready** for adoption
3. Workflows (RW, UKW, IPW) are **battle-tested**
4. No book content should be introduced

**If unsure:** Ask the user which repository context they're working in.

---

**Last Updated:** 2026-05-28  
**Maintainer:** Ruari Mears  
**Status:** Active — FR-099 complete, book development ongoing in private
