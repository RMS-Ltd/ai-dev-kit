# Starborn Legacy — AI Dev Kit Greenfield Install Diary

**Attempt:** 2 (post UXR-025 / install-diary reaction)  
**Branch:** `ai-dev-kit`  
**Started:** 2026-06-09  
**Completed:** 2026-06-09  
**Host project state at start:** Empty bootstrap (`.git`, `README.md`, `.gitignore`)  
**Git HEAD:** `39fc49d0` (history preserved; index deletions uncommitted)

**ADK upstream:** `main` @ `97ff2834` — *v0.6.9.25+2: Starborn install diary reaction (UXR-025)*  
**Vendor acquired via:** sparse clone `greenfield-install/` (tarball `v0.4.1064` lacked UXR-025 orchestrator fixes)

---

## Logging policy

| Artifact | Path |
|----------|------|
| This diary | `logs/ai-dev-kit/install/greenfield-install-diary.md` |
| Structured log | `logs/ai-dev-kit/install/session.log` |
| Transcripts | `logs/ai-dev-kit/install/transcripts/*.txt` |
| Sign-off | `logs/ai-dev-kit/install/signoff-report.json` |
| Helper | `logs/ai-dev-kit/install/run-logged.sh` |

---

## Phase 0 — Pre-flight ✅

Preflight: `transcripts/20260609T092551Z-preflight.txt`  
Disk: ~1.9 GiB free · Python 3.9.6 · branch `ai-dev-kit` @ `39fc49d0`

**Adopter scope:** legacy **E/S/T** Kanban remains operational PM when SBL restored; `docs/kanban/` = install exercise only.

---

## Phase 1 — Acquire lean vendor tree ✅

### 1a — Tarball `v0.4.1064` (downloaded, not used for install)

```bash
gh release download v0.4.1064 -p 'greenfield-install-v0.4.1064.tar.gz*' -D /tmp/adk-dl-1064
shasum -a 256 -c greenfield-install-v0.4.1064.tar.gz.sha256  # OK
```

Transcripts: `20260609T093157Z-download-tarball.txt`, `20260609T093203Z-sha256-verify.txt`, `20260609T093203Z-extract-tarball.txt`

**Finding:** `install_greenfield_path.py` in **v0.4.1064** has **no** `--config`, **no** `resolve_frameworks_base` (177 lines). UXR-025 fixes not in release tarball yet.

### 1b — Sparse clone `main` greenfield-install (USED) ✅

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/RMS-Ltd/ai-dev-kit.git /tmp/adk-main-sparse
cd /tmp/adk-main-sparse && git sparse-checkout set greenfield-install
# HEAD: 97ff2834
cp -R greenfield-install/. vendor/ai-dev-kit/   # ~12 MiB
```

Transcript: `20260609T093230Z-sparse-clone-main.txt`

**Verified:** orchestrator 260 lines; `resolve_frameworks_base`, `--config`, `--non-interactive` → RW `--non-interactive`, Kanban `--force`.

---

## Phase 2 — Python venv + preflight ✅

```bash
python3 -m venv .venv && .venv/bin/pip install 'pyyaml>=6.0'
verify_vendor_tree.py --vendor-root vendor/ai-dev-kit  # OK
```

Transcripts: `20260609T093243Z-venv-setup.txt`, `20260609T093246Z-verify-vendor.txt`

---

## Phase 3 — Greenfield orchestrator (rw-first) ✅

```bash
export AI_DEV_KIT_INSTALL_LOG_PATH="$PWD/logs/ai-dev-kit/install/session.log"
install_greenfield_path.py \
  --project-root . \
  --vendor-root vendor/ai-dev-kit \
  --non-interactive \
  --order rw-first \
  --config config/greenfield-rw-install-input.yaml
```

Transcript: **`20260609T093316Z-orchestrator.txt`** (full output)

### UXR-025 fixes confirmed

| Attempt 1 issue | Attempt 2 result |
|-----------------|------------------|
| Hung on RW prompts | ✅ `--config` + RW `--non-interactive` — no prompts |
| Required `packages/` symlink | ✅ `Framework scripts resolved under vendor tree` |
| Orchestrator exit 2 | ✅ Exit 0; both steps ran |

### RW installer — PARTIAL (expected lean greenfield)

| Output | |
|--------|--|
| `rw-config.yaml` | dual + task_touch; `scripts_path: vendor/ai-dev-kit/...` |
| `.cursorrules` | Created |
| `src/starborn_legacy/version.py` | `0.1.1.1+1` |
| `CHANGELOG.md` | Scaffold `[Unreleased]` |
| `ai-dev-kit-config.yaml` | en-GB localisation |
| Missing `workflows/` | ⚠️ PARTIAL — documented lean expectation (UXR-025) |

### Kanban installer — SUCCESS

- `docs/kanban/kboard.md`, structure, guide
- Template epics: 1–8, 10, 18, 22, 23
- `--force` auto-applied via orchestrator `--non-interactive`

### Sign-off (final): **ALL READY** ✅

Report: `signoff-report.json` — BR-084, BR-083, UXR-017, BR-086, BR-088, BR-089, BR-082 READY; BR-080 SKIP.

---

## Phase 4 — Post-install validation

| Validator | Result | Transcript |
|-----------|--------|------------|
| `validate_branch_context.py --strict` | PASS (warnings) | `20260609T093323Z-validate-branch.txt` |
| `validate_changelog_format.py` | FAIL (stub only) | `20260609T093323Z-validate-changelog.txt` |

Changelog fails until first RW release entry — expected.

---

## Phase 5 — Install attempt closure

**Orchestrator:** SUCCESS (exit 0)  
**RW:** PARTIAL (lean — no host `workflows/`)  
**Kanban:** SUCCESS  
**Sign-off:** ALL READY  

**Operational Kanban (adopter):** legacy **E/S/T** unchanged — greenfield `docs/kanban/` is scaffolding only.

---

## Phase 6 — Attempt failed adopter intent (back to drawing board)

**Date:** 2026-06-09  
**Status:** CLOSED — **unsuccessful** for Starborn Legacy goals

### What was asked to be recorded (and was the actual requirement)

The **only** Kanban outcome that mattered for SBL:

- **Keep** the legacy **Epic / Story / Task (E/S/T)** framework and backlog model (`KB/PM_and_Portfolio/epics/overview/`, `E{epic}:S{story}:T{task}`, MoSCOW board, story checklists).
- **Do not** treat ADK fresh-install template kanban as operational PM.

This was written in Phase 0d and Phase 5 of this diary **before and after** install — but **install was still run with Kanban `--mode fresh`**, which **installed the ADK template epic list** into `docs/kanban/epics/`:

| Installed (unwanted as “the list”) | Source |
|-----------------------------------|--------|
| epic-1 … epic-8, epic-10, epic-18, epic-22, epic-23 | ADK `install_kanban_framework.py --mode fresh` |
| `kboard.md` with template MoSCOW | ADK consumer board skeleton |

That is the **ADK v1 packaged template epic catalogue**, not Starborn’s E/S/T backlog. Sign-off **ALL READY** only proved installer contracts — it did **not** mean the right kanban was installed for SBL.

### F9 — v1 packaged catalog, not Kanban v2/v3 (attempts 1 and 2)

**Both** install attempts ran the same installer path: `install_kanban_framework.py --mode fresh` → `migrate_structure._install_canonical_epics()` with the hard-coded **v1** list `[1, 2, 3, 4, 5, 6, 7, 8, 10, 18, 22, 23]` (separate E05/E06/E07 for FR/BR/UXR; E09/E18 swap debt).

| Layer | What greenfield fresh installs | What it is **not** |
|-------|-------------------------------|---------------------|
| Epic catalog | v1 packaged templates under `packages/frameworks/kanban/templates/` | [Kanban v3.2 Scenario A](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/kanban-v2/08-executive-summary.md) (E01 Repository Infrastructure, FR/BR/UXR → E04 stories, etc.) |
| Sign-off (UXR-017, BR-083–086) | Lowercase paths + `rw-config` pattern alignment | Catalog generation or semantic model |
| Maintainer state | Package rewrite **blocked** until Phase 5 / migration blueprint waves | Live ADK dogfood layout on `dev` |

Attempt 1 (tarball `v0.4.1063`, manual Kanban step) and attempt 2 (orchestrator `main` @ `97ff2834`) installed the **same v1 tree**. UXR-025 fixed orchestrator friction (F4/F5) but did **not** change which templates `--mode fresh` deploys.

**Upstream:** [starborn-legacy-install-triage-matrix.md](../../docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) **F9** · migration blueprint [`07-package-migration-blueprint.md`](../../docs/knowledge/analysis/kanban-v2/07-package-migration-blueprint.md).

### Failure mode (honest)

| Diary said | What we did |
|------------|-------------|
| Legacy E/S/T is operational PM | Ran full greenfield orchestrator including **Kanban fresh** |
| `docs/kanban/` exercise only | Populated `docs/kanban/` with **12 template epics** the user can see in the IDE |
| Record scope, don’t adopt ADK kanban | **Contradicted by execution** — template list is on disk |

**Root cause:** Greenfield path is **RW + Kanban fresh** by design; there is no “RW-only greenfield” step in the orchestrator used. Adopter scope was noted in prose but **not enforced** (no skip of Kanban step, no RW-only mode, no restore of legacy KB tree).

### Decision

**Back to the drawing board.** This install attempt does not satisfy SBL. Archive logs (zip at repo root) and reset integration approach before attempt 3.

### What attempt 3 must do differently (notes for future)

1. **Do not run** `install_kanban_framework.py --mode fresh` if legacy E/S/T remains source of truth — use RW-only / mode A, or brownfield path (FR-081).
2. Or: greenfield RW wiring only, then **restore** `KB/PM_and_Portfolio/` from `git` @ `39fc49d0` without ADK v1 template epics.
3. Diary scope notes are **not sufficient** — need explicit install flags or orchestrator `--kanban-mode skip` (if/when ADK provides it).
4. Even if SBL **did** want ADK kanban, `--mode fresh` today ships **v1** templates only — wait for v3.2 package migration waves or wire brownfield to restored legacy tree; do not treat sign-off ALL READY as v2/v3 adoption.

**Archive:** `starborn-legacy-adk-greenfield-install-logs-20260609.zip` (project root)

---

### Transcript index (attempt 2)

| Label | File |
|-------|------|
| preflight | `20260609T092551Z-preflight.txt` |
| download-tarball | `20260609T093157Z-download-tarball.txt` |
| sha256-verify | `20260609T093203Z-sha256-verify.txt` |
| extract-tarball | `20260609T093203Z-extract-tarball.txt` |
| sparse-clone-main | `20260609T093230Z-sparse-clone-main.txt` |
| venv-setup | `20260609T093243Z-venv-setup.txt` |
| verify-vendor | `20260609T093246Z-verify-vendor.txt` |
| **orchestrator** | **`20260609T093316Z-orchestrator.txt`** |
| validate-branch | `20260609T093323Z-validate-branch.txt` |
| validate-changelog | `20260609T093323Z-validate-changelog.txt` |

### Upstream feedback for ADK

- Publish greenfield tarball **after** UXR-025 orchestrator merge (`v0.4.1064` tarball predates fixes).
- RW PARTIAL on missing `workflows/` is correct per docs — consider downgrading ADK-I03.E90 noise for lean path.
- **F9:** Document that `--mode fresh` = **v1** packaged catalog until migration blueprint waves land; sign-off must not imply v3.2 or adopter-correct PM model.

---

*Last updated: 2026-06-09 — attempt 2 closed failed intent; F9 v1-vs-v3.2 recorded; logs archived to `starborn-legacy-adk-greenfield-install-logs-20260609.zip`.*
