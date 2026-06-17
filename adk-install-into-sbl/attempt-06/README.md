# Starborn Legacy — ADK install attempt 06 (maintainer index)

**Session:** `20260610-attempt-06`  
**ADK pin:** `v0.4.1140+2` minimum → deployed at `256259fb2` (`v0.4.1142+3`)  
**SBL branch / HEAD:** `ai-dev-kit` @ `39fc49d0`  
**Maintainer task:** [E06:S09:T26](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

**Preflight:** [attempt-06-preflight-checklist.md](../attempt-06-preflight-checklist.md)

**FR-079 status:** **ACCEPTED** @ 2026-06-11 — adopter sign-off **final** (`package_status: final`, `20260611T094319Z-final-signoff.txt`)

---

## Outcome

| Result | Detail |
|--------|--------|
| **AC13 verification** | **PASS** — F17/F18/F19/F21 all confirmed in SBL environment |
| Sign-off (AC13 + final) | **7 READY, 1 SKIP, 0 NOT READY** |
| Dual kanban | **PASS** — legacy `KB/PM_and_Portfolio/` preserved + ADK `docs/kanban/` |
| Full ADK install | **PASS** — 15 workflows, 6 frameworks, versioning, doc-lifecycle, debug-path |
| Doc surfaces | Obsidian (personal profile) + Docusaurus (`portal/` built OK) |
| Legacy migration | **PASS (agentic)** — 19 legacy epics → 10 canonical (E01–E10) + 8 domain (E21–E28); 72 stories migrated |
| Upstream filed | **F22** → [FR-127](../../docs/kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) / [T31](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md) · **F23** → [BR-108](../../docs/kanban/fr-br/BR-108-detect-existing-structure-zero-padded-epic-names.md) / [T32](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T32-detect-structure-zero-padded-epic-br108.md) · **kboard template** → [UXR-028](../../docs/kanban/fr-br/UXR-028-kboard-v3dot2-packaged-template-alignment.md) / [E04:S19:T13](../../docs/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T13-kboard-v3dot2-packaged-template-uxr028.md) |

---

## Canonical feedback package (FR-079)

**ADK maintainer mirror** — intake accepted 2026-06-11 ([#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)):

| Artifact | Path |
|----------|------|
| Root | [attempt-06/](.) |
| Index | [feedback-package/README.md](feedback-package/README.md) |
| Migration report | [feedback-package/kanban-migration-experiment-report.md](feedback-package/kanban-migration-experiment-report.md) |
| Kboard template | [feedback-package/kboard-template-v3dot2.md](feedback-package/kboard-template-v3dot2.md) |
| Kboard example | [feedback-package/kboard-populated-example.md](feedback-package/kboard-populated-example.md) |

Original SBL-local logs were gitignored; synopses and recovered artifacts live on ADK per [ADR-026](../../docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md).

---

## Triage

Merged into [starborn-legacy-install-triage-matrix.md](../../docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) — **F19/F18/F21** SBL replay confirmed; **F22–F23** filed as FR-127/T31 and BR-108/T32.
