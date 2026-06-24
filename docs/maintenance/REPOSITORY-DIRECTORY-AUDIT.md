---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T14:02:21Z
expires_at: null
housekeeping_policy: keep
---

# Repository directory structure audit

**Task:** [E07:S01:T13](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md)  
**UXR:** [UXR-033](../kanban/fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)  
**Capture timestamp (UTC):** 2026-06-23 14:02:21 UTC  
**Depth scope:** Repository root through depth 2 (deeper leaves roll up to parent rows unless flagged in wave plan).  

> Investigation-only — no structural moves authorized by this document. Execution waves link to follow-on tasks.

---

## §0 — Excluded paths (no valuation rows)

| Pattern | Rationale |
| ------- | --------- |
| `.git/` | VCS metadata |
| `node_modules/` | NPM vendor |
| `**/__pycache__/`, `.pytest_cache/`, `.ruff_cache/`, `.mypy_cache/` | Tool caches |
| `.venv/`, `.venv-*`, `venv/`, `env/` | Local Python virtualenvs |
| `portal/build/`, `portal/.docusaurus/` | Docusaurus build/cache |
| `htmlcov/`, `.cqg/` | Coverage / CodeQL local cache |
| `**/*.egg-info/` | Python package metadata build |

---

## §1 — Capture methodology

```bash
find . -type d \( -path './.git/*' -o -name node_modules -o -name __pycache__ ... \) -prune -o -type d -print
```

Depth-2 inventory: 91 paths (including `.cursor/skills`). Command: IPP Step 3 deterministic listing with exclusion pruning.

---

## §2 — Valuation matrix

| Path | Purpose class | Purpose statement | Location verdict | Evidence | Ripple risk | Wave |
| ---- | ------------- | ----------------- | ---------------- | -------- | ----------- | ---- |
| `.` | Dev-kit specialisation | Repository root; canonical entrypoints (README, rw-config, AGENTS) | Optimal | README.md, rw-config.yaml, AGENTS.md | Low | keep |
| `.adk` | Operational | Release metadata SQLite + semver export (task_touch backend) | Optimal | rw-config.yaml release_state_db; .gitignore exception | Medium | keep |
| `.claude` | Dev-kit specialisation | Claude Code slash commands and agent routing | Optimal | CLAUDE.md references .claude/commands/ | Low | keep |
| `.cursor` | Dev-kit specialisation | Cursor agent skills and local IDE config | Optimal | .cursorrules references skills | Low | keep |
| `.cursor-plugin` | Operational | Cursor plugin metadata for workspace | Acceptable | NEEDS_REVIEW — plugin packaging scope | Low | keep |
| `.github` | Operational | GitHub Actions CI/CD and issue templates | Optimal | FR-112 actions_ci_parity | High | keep |
| `.kanban-snapshots` | Operational | UKW/RW board snapshot artifacts | Acceptable | FR-097 stamp diff snapshots | Low | keep |
| `.migration-batches` | Legacy/transitional | KMA/migration batch chunks (brownfield) | Suboptimal | docs/kanban migration programs | Medium | consolidate |
| `.rw` | Operational | RW local execution scratch | Acceptable | rw-config rw_execution_log_path sibling | Low | keep |
| `.rw-snapshots` | Operational | RW step-7 board snapshots | Acceptable | docs/kanban/.rw-step7-snapshots pattern | Low | keep |
| `adk-install-into-sbl` | Legacy/transitional | Starborn/adopter install experiment attempts (UXR-025) | Suboptimal | UXR-025; overlaps docs/adk-feedback | Medium | consolidate |
| `cli` | Dev-kit specialisation | ai-dev-kit CLI package (install, config, localisation) | Optimal | cli/README if present; pyproject/package layout | Medium | keep |
| `docs` | Dev-kit specialisation | Book-repo documentation corpus hub | Optimal | ADR-026/FR-114 surface split | High | keep |
| `greenfield-install` | Framework SoT (mirror) | Greenfield install output mirror (derivative of packages/) | Optimal | FR-110; sync_greenfield_install.py | High | keep |
| `packages` | Framework SoT | Framework package distribution root | Optimal | packages/frameworks/README patterns | High | keep |
| `portal` | Dev-kit specialisation | Docusaurus adopter-public site | Optimal | portal/README.md; FR-114 | High | keep |
| `scripts` | Dev-kit specialisation | Book-repo automation (not framework SoT) | Acceptable | overlap with packages/frameworks/workflow-mgt/scripts | Medium | keep |
| `src` | Dev-kit specialisation | Python package source root | Acceptable | dual ai_dev_kit + fynd_deals legacy | Medium | consolidate |
| `temp` | Legacy/transitional | Scratch temp directory at repo root | Suboptimal | should be gitignored or under .rw/ | Low | remove |
| `tests` | Dev-kit specialisation | Repository test suite | Optimal | pytest.ini / CI | High | keep |
| `.adk/tmp` | Generated/vendor | Ephemeral allocator/tmp workspace | Acceptable | gitignored operational scratch | Low | keep |
| `.claude/commands` | Dev-kit specialisation | Workflow command specs (rw, ipw, idw, mwf) | Optimal | CLAUDE.md trigger routing | Medium | keep |
| `.cursor/skills` | Dev-kit specialisation | Cursor skill adapters for RW/UKW/intake | Optimal | docs/guides/workflow-initiation-cheatsheet.md | Low | keep |
| `.github/ISSUE_TEMPLATE` | Operational | GitHub issue templates | Optimal | standard OSS pattern | Low | keep |
| `.github/workflows` | Operational | CI workflow definitions | Optimal | .github/workflows/*.yml | High | keep |
| `.kanban-snapshots/20260615T224408Z` | Generated/vendor | Point-in-time snapshot instance | Acceptable | disposable snapshot folder | Low | archive |
| `.migration-batches/chunks` | Legacy/transitional | Migration chunk payloads | Suboptimal | move under docs/maintenance/migrations/ | Medium | consolidate |
| `adk-install-into-sbl/attempt-03` | Legacy/transitional | Install attempt feedback package | Suboptimal | mirror docs/adk-feedback/attempt-* | Low | archive |
| `adk-install-into-sbl/attempt-04` | Legacy/transitional | Install attempt feedback package | Suboptimal | mirror docs/adk-feedback/attempt-* | Low | archive |
| `adk-install-into-sbl/attempt-05` | Legacy/transitional | Install attempt feedback package | Suboptimal | mirror docs/adk-feedback/attempt-* | Low | archive |
| `adk-install-into-sbl/attempt-06` | Legacy/transitional | Install attempt feedback package | Suboptimal | mirror docs/adk-feedback/attempt-* | Low | archive |
| `adk-install-into-sbl/attempt-09` | Legacy/transitional | Install attempt feedback package | Suboptimal | mirror docs/adk-feedback/attempt-* | Low | archive |
| `adk-install-into-sbl/attempt-10` | Legacy/transitional | Install attempt feedback package | Suboptimal | mirror docs/adk-feedback/attempt-* | Low | archive |
| `adk-install-into-sbl/attempt-11` | Legacy/transitional | Install attempt feedback package | Suboptimal | mirror docs/adk-feedback/attempt-* | Low | archive |
| `adk-install-into-sbl/kanban-reference` | Legacy/transitional | Reference kanban snapshot for install experiment | Suboptimal | archive to docs/adk-feedback or maintenance | Low | archive |
| `cli/backends` | Dev-kit specialisation | CLI backend implementations | Optimal | cli package structure | Low | keep |
| `cli/commands` | Dev-kit specialisation | CLI command modules | Optimal | cli package structure | Low | keep |
| `docs/adk-feedback` | Dev-kit specialisation | Adopter install feedback attempts (portal-linked) | Optimal | docs/guides/adk-feedback; BR-068 | Medium | keep |
| `docs/analysis` | Dev-kit specialisation | Maintainer analysis reports (ADR-026) | Optimal | ADR-026 maintainer KB | Low | keep |
| `docs/architecture` | Dev-kit specialisation | ADRs and architecture standards (non-governance subset) | Acceptable | FR-101 moved policies to docs/governance/ | Medium | keep |
| `docs/book-project` | Dev-kit specialisation | Book manuscript / project metadata | Optimal | private book repo scope | Low | keep |
| `docs/changelog-and-release-notes` | Dev-kit specialisation | Changelog archive and release notes | Optimal | rw-config changelog_dir | Medium | keep |
| `docs/developer-tools` | Dev-kit specialisation | IDE whitelist and developer tooling guides | Optimal | portal allowlist refs | Low | keep |
| `docs/documentation` | Dev-kit specialisation | Adopter-public doc source (mirrored to portal) | Optimal | FR-114 adopter-public | High | keep |
| `docs/governance` | Dev-kit specialisation | Governance policies and rehousing inventories (FR-101) | Optimal | GOVERNANCE-REHOUSING-INVENTORY.md | High | keep |
| `docs/guides` | Dev-kit specialisation | Adopter/maintainer guides (portal-published subset) | Optimal | workflow-initiation-cheatsheet.md | High | keep |
| `docs/implementation-cycles` | Dev-kit specialisation | IPP/ICW planning packages (IPW durable artifacts) | Optimal | specification-and-planning-artifacts-policy.md | Medium | keep |
| `docs/journals` | Operational | Workflow forensic journals (ADR-008, TTL) | Optimal | rw-config journal_dir | Low | keep |
| `docs/kanban` | Dev-kit specialisation | Kanban board, epics, FBU intake (FR-118) | Optimal | KANBAN-REHOUSING-INVENTORY.md; rw-config kanban_root | High | keep |
| `docs/knowledge` | Dev-kit specialisation | Maintainer knowledge base (ADR-026) | Optimal | KB-INDEX.md | Medium | keep |
| `docs/maintainer` | Dev-kit specialisation | Maintainer-only operational notes | Optimal | ADR-026 | Low | keep |
| `docs/maintenance` | Dev-kit specialisation | Maintainer runbooks and audit reports | Optimal | docs/maintenance/README.md | Medium | keep |
| `docs/project-management` | Legacy/transitional | Vestigial shell post FR-118; may retain stubs | Suboptimal | FR-118; KANBAN-REHOUSING-INVENTORY | High | remove |
| `docs/release-notes` | Dev-kit specialisation | Release notes adjunct to changelog archive | Acceptable | NEEDS_REVIEW — merge with changelog-and-release-notes? | Low | consolidate |
| `greenfield-install/packages` | Framework SoT (mirror) | Mirrored framework packages for install tests | Optimal | P-GREENFIELD-SYNC rule | High | keep |
| `greenfield-install/tests` | Framework SoT (mirror) | Mirrored tests for greenfield drift detection | Optimal | greenfield CI workflows | Medium | keep |
| `packages/dist` | Generated/vendor | Built package artifacts / dist output | Suboptimal | should be gitignored or CI-only | Low | remove |
| `packages/frameworks` | Framework SoT | Canonical framework sources (workflow-mgt, kanban, etc.) | Optimal | FR-110 source tree | High | keep |
| `portal/blog` | Dev-kit specialisation | Docusaurus blog posts | Optimal | portal config | Low | keep |
| `portal/docs` | Dev-kit specialisation | Docusaurus doc routes (symlink/mirror to docs/) | Optimal | adopter-public-documentation-authoring.md | Medium | keep |
| `portal/scripts` | Dev-kit specialisation | Portal build/helper scripts | Optimal | portal package.json scripts | Low | keep |
| `portal/src` | Dev-kit specialisation | Docusaurus theme/components | Optimal | portal structure | Low | keep |
| `portal/static` | Dev-kit specialisation | Static assets for portal | Optimal | portal structure | Low | keep |
| `scripts/cleanup` | Dev-kit specialisation | One-off cleanup utilities | Acceptable | NEEDS_REVIEW per script | Low | consolidate |
| `scripts/documentation` | Dev-kit specialisation | Doc generation/maintenance scripts | Optimal | maintainer automation | Low | keep |
| `scripts/frameworks` | Dev-kit specialisation | Framework-adjacent collectors (book repo) | Acceptable | vs packages/frameworks — clarify boundary | Medium | keep |
| `scripts/git-hooks` | Operational | Git hooks for local validation | Optimal | pre-commit integration | Low | keep |
| `scripts/internal` | Dev-kit specialisation | Internal maintainer scripts | Optimal | ADR-026 internal tooling | Low | keep |
| `scripts/notion_push_payloads` | Legacy/transitional | Notion push payloads (optional archive per ADR-026) | Suboptimal | ADR-026 git SoT; Notion optional | Low | archive |
| `src/ai_dev_kit` | Dev-kit specialisation | Canonical version.py and package entry (target SoT) | Optimal | rw-config version_file | Medium | keep |
| `src/fynd_deals` | Legacy/transitional | Legacy version path / historical package name | Suboptimal | rw-config migrated to ai_dev_kit; remove when refs clean | Medium | remove |
| `tests/cli` | Dev-kit specialisation | CLI package tests (FR-138) | Optimal | pytest-cli-cov.ini | Low | keep |
| `tests/docs` | Dev-kit specialisation | Documentation/link tests | Optimal | portal pytest refs | Low | keep |
| `tests/fixtures` | Dev-kit specialisation | Test fixtures (kanban, KMA) | Optimal | tests/kanban/ | Low | keep |
| `tests/journal` | Dev-kit specialisation | Journal workflow tests | Optimal | ADR-008 | Low | keep |
| `tests/kanban` | Dev-kit specialisation | Kanban framework tests | Optimal | packages/frameworks/kanban tests mirror | Medium | keep |
| `tests/release_state` | Dev-kit specialisation | Release state / semver registry tests | Optimal | task_touch tests | Low | keep |
| `tests/rw_scenarios` | Dev-kit specialisation | RW scenario integration tests | Optimal | workflow-mgt validation | Medium | keep |
| `tests/tests` | Unknown/orphan | Nested tests/tests — likely accidental duplicate | Suboptimal | NEEDS_REVIEW — collapse or rename | Low | remove |
| `tests/workflow` | Dev-kit specialisation | Workflow integration tests | Optimal | workflow test layout | Low | keep |
| `tests/workflow-mgmt` | Dev-kit specialisation | Workflow-mgt package tests (hyphenated) | Acceptable | duplicate naming vs workflow_mgt | Low | consolidate |
| `tests/workflow_mgt` | Dev-kit specialisation | Workflow-mgt package tests (underscored) | Acceptable | duplicate naming vs workflow-mgmt | Low | consolidate |
| `docs/project-management/kanban` | Legacy/transitional | Legacy kanban path under retired shell | Suboptimal | FR-118 COMPLETE — stub only | High | remove |

### §2.1 — Framework SoT vs install mirror

| Tree | Role | Sync mechanism |
| ---- | ---- | -------------- |
| `packages/frameworks/` | **Canonical framework SoT** | Author framework changes here (P-GREENFIELD-SYNC) |
| `greenfield-install/packages/frameworks/` | **Install mirror / derivative** | `scripts/sync_greenfield_install.py` |
| `greenfield-install/tests/` | **CI drift mirror** | Greenfield workflows |

---

## §3 — Wave plan

| Wave | Directories (sample) | Execution owner | Dependency |
| ---- | -------------------- | --------------- | ---------- |
| **keep** | `.`, `packages/frameworks/`, `docs/kanban/`, `cli/`, `portal/`, `greenfield-install/` | — | — |
| **consolidate** | `src/` (drop `fynd_deals`), `tests/workflow*` twins, `docs/release-notes` | E07:S01:T13 follow-on / FR-039 | After maintainer sign-off |
| **relocate** | `adk-install-into-sbl/*` → `docs/adk-feedback/` or `docs/maintenance/install-experiments/` | FR-039 / UXR-025 | Low ripple |
| **archive** | `.migration-batches/`, `scripts/notion_push_payloads/`, install attempts | E07:S01:T13 / maintenance | ADR-026 git SoT |
| **remove** | `docs/project-management/` shell, `packages/dist/`, `temp/`, `tests/tests/`, `src/fynd_deals/` | FR-118 (shell), FR-039 | Link sweep required |

**Cross-task coordination (no duplicate movers):**

- **E07:S01:T10 / UXR-013** — root *file* hygiene only; defer root file moves until this audit signed off.
- **E07:S01:T11 / FR-101** — governance rehousing **COMPLETE**; `docs/governance/` rows marked Optimal.
- **E07:S01:T12 / FR-118** — kanban promotion **COMPLETE**; `docs/project-management/` removal completes residual shell.
- **E04:S19:T14 / UXR-032** — `docs/kanban/fbu/` path rename; coordinate link sweeps with wave **remove/archive**.
- **FR-039** — consumes this audit for prioritization.
- **FR-140 / E07:S01:T15** — program umbrella for steady-state IA governance; T13 is cartography leg A.
- **E07:S01:T14 / UXR-034** — file-level drill-down within directories marked `keep` or `consolidate`.

---

## §4 — Maintainer sign-off

| Role | Name | Date | Approved |
| ---- | ---- | ---- | -------- |
| Maintainer | Ruari Mears | 2026-06-24 | ☑ |

**Sign-off recorded:** Directory valuation matrix and wave plan approved. T14 file-level rollup incorporated per §5 addendum.

---

## §5 — T14 handoff (file-level audit)

Directories in scope for [E07:S01:T14 / UXR-034](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md):

- `docs/` (except excluded caches)
- `packages/frameworks/`
- `scripts/`
- `src/ai_dev_kit/`
- Root-level config files (T10 scope)

**T14 rollup addendum (2026-06-24):** File-level audit complete @ [`REPOSITORY-FILE-AUDIT.md`](REPOSITORY-FILE-AUDIT.md). **572 valuation rows** (528 per-file + 44 class-summary patterns). **42 tension rows** (scripts↔framework boundary, `docs/project-management/` shell, release-notes overlap). **37 archive** + **4 remove** file-wave candidates align with T13 directory waves — no contradictory movers. Mirror pairs **6/6 in sync**. **Maintainer sign-off:** 2026-06-24 (both audits §4).

---

## References

- [IPP-E07S01T13](../implementation-cycles/IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md)
- [GOVERNANCE-REHOUSING-INVENTORY.md](../governance/GOVERNANCE-REHOUSING-INVENTORY.md)
- [KANBAN-REHOUSING-INVENTORY.md](../governance/KANBAN-REHOUSING-INVENTORY.md)
- [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)

