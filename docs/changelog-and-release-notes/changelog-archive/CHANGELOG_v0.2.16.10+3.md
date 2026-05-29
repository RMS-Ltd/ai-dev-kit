# Changelog v0.2.16.10+3

**Release Date:** 2026-05-29 10:59:14 UTC

**Epic:** 2 | **Story:** 16 | **Task:** 10 | **Build:** 3

**SemVer:** v0.4.814+3

**Summary:** Repository naming hygiene — retire interim `hf-ai-dev-kit`; align private book workspace and adopter-facing URLs with `RMS-Ltd/ai-dev-kit-book` (private) and `RMS-Ltd/ai-dev-kit` (public).

---

## Changed

### Repository roles (FR-099 / ADR-006 follow-up)

- **`rw-config.yaml`:** `project_name` → `ai-dev-kit-book`; `maintainer_private_repo` → `RMS-Ltd/ai-dev-kit-book`; public canonical keys unchanged (`RMS-Ltd/ai-dev-kit`).
- **`README.md`**, **`INSTALL_IN_YOUR_PROJECT.md`**, **`kboard.md`:** Private maintainer clone documented as `ai-dev-kit-book` (series-agnostic; Head First not encoded in repo slug).
- **[ADR-006](docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md):** Amendment (2026-05-29) — interim `hf-ai-dev-kit` retired; clone hygiene runbook updated.

### Adopter / tooling URLs

- **`cli/commands/install.py`:** Default framework source → `https://github.com/RMS-Ltd/ai-dev-kit.git` (was `earlution/ai-dev-kit`).
- **Workflow package scripts and docs:** Bulk alignment of `earlution/ai-dev-kit` → `RMS-Ltd/ai-dev-kit` in active operational paths (install guides, release upload helpers, portal test expectations, GitHub Pages base URL references).

### Forensic preservation

- Changelog archives, kanban-completed ledgers, `.kanban-snapshots/`, and FR-099 Phase 1 task doc (`T04-fr099-phase1-privatize-rename-hf-ai-dev-kit.md`) retain historical `hf-ai-dev-kit` / `earlution` references where appropriate.

---

## Release metadata

| Field | Value |
|-------|--------|
| Task | E2:S16:T10 (perpetual infrastructure) |
| RW mode | `--art` (canonical anchor adoption from E6:S09:T3) |
| Branch | `dev` |
