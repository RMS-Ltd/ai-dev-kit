# Starborn Legacy — AI Dev Kit Greenfield Install Diary

**Attempt:** 3  
**Session ID:** `20260609-attempt-03`  
**Branch:** `ai-dev-kit`  
**Started:** 2026-06-09  
**Host state:** Empty bootstrap (`.git`, `README.md`, `.gitignore`)  
**Git HEAD:** `39fc49d0`

**ADK upstream:** [RMS-Ltd/ai-dev-kit](https://github.com/RMS-Ltd/ai-dev-kit)  
**Latest GH release (greenfield tarball):** `v0.4.13` (2026-06-09)  
**Main HEAD (reference):** `38d24549` — *v0.3.2.14+1: SAA transactional SemVer allocation (FR-120)*

**Prior archive:** attempt 2 failed intent — see `starborn-legacy-adk-greenfield-install-logs-20260609.zip` (if retained off-repo)

---

## Logging session (attempt 03)

| Artifact | Path |
|----------|------|
| **This diary** | `logs/ai-dev-kit/install/attempt-03/greenfield-install-diary.md` |
| **Structured log** | `logs/ai-dev-kit/install/attempt-03/session.log` |
| **Transcripts** | `logs/ai-dev-kit/install/attempt-03/transcripts/*.txt` |
| **Sign-off** | `logs/ai-dev-kit/install/attempt-03/signoff-report.json` |
| **Runner** | `logs/ai-dev-kit/install/attempt-03/run-logged.sh` |
| **ADK feedback package (FB)** | `logs/ai-dev-kit/install/attempt-03/feedback-package/` |

```bash
export AI_DEV_KIT_INSTALL_LOG_PATH="$PWD/logs/ai-dev-kit/install/attempt-03/session.log"
./logs/ai-dev-kit/install/attempt-03/run-logged.sh <label> <command...>
```

`logs/` is gitignored — local audit only.

---

## Hard requirement (attempt 3) — legacy E/S/T Kanban

**Starborn Legacy operational PM stays on legacy Epic / Story / Task:**

| Keep | Do not install as “the list” |
|------|------------------------------|
| `KB/PM_and_Portfolio/epics/overview/` (when restored from git) | ADK template epics 1–8, 10, 18, 22, 23 under `docs/kanban/` |
| `E{epic}:S{story}:T{task}` identifiers, MoSCOW board, story checklists | ADK `install_kanban_framework.py --mode fresh` on empty host |

**Attempt 2 failure:** diary recorded legacy scope but **still ran** full greenfield orchestrator → Kanban fresh → template epic list on disk. **Attempt 3 must enforce in execution**, not prose only.

### Install strategy — **Option A first, then dual kanban (migration test bed)**

Option A was the only **obvious** way to avoid the greenfield orchestrator installing ADK template kanban **as the sole PM layer** on an empty tree. It was **sequencing**, not “no ADK kanban ever.”

| Layer | Path | Role |
|-------|------|------|
| **Legacy SBL (source)** | `KB/PM_and_Portfolio/epics/overview/` | 19 epics, `KANBAN_BOARD.md`, E/S/T — restored from `39fc49d0` |
| **ADK v3 Kanban (target)** | `docs/kanban/` | Fresh install — `kboard.md`, 12 template epic dirs, migration destination |

| Step | Command / transcript |
|------|----------------------|
| RW-only bootstrap | `phase3-rw-only` — `use_kanban: false` |
| Legacy restore | `restore-legacy-kanban` |
| ADK Kanban fresh | `phase3b-kanban-fresh` — `install_kanban_framework.py --mode fresh` |
| RW + Kanban config | `phase3c-rw-kanban-config` — `use_kanban: true`, patterns in `rw-config.yaml` |

**Vendor pin:** `v0.4.13` tarball, sha256 OK, 1774 files.

---

## Phase 0 — Pre-flight

*Run preflight transcript before Phase 1.*

```bash
./logs/ai-dev-kit/install/attempt-03/run-logged.sh preflight bash -c '
date -u; uname -a; df -h .; git branch --show-current; git rev-parse HEAD
git status --short | wc -l; python3 --version
'
```

| Check | Result |
|-------|--------|
| Disk free | **32 GiB** avail (`/System/Volumes/Data`, 93% used) |
| Python | **3.9.6** |
| Index deletions vs HEAD | **2972** paths (empty bootstrap vs `39fc49d0`) |
| Preflight transcript | `transcripts/20260609T122544Z-preflight.txt` |

---

## Phase 1 — Acquire lean vendor tree

| Item | Result |
|------|--------|
| Tarball | `greenfield-install-v0.4.13.tar.gz` |
| sha256 | **OK** |
| Extract path | `vendor/ai-dev-kit/` (1774 files) |
| Transcript | `transcripts/20260609T122810Z-phase1-download.txt` |

---

## Phase 2 — Python venv + verify_vendor_tree

| Item | Result |
|------|--------|
| venv | `.venv-adk/` |
| deps | `pyyaml>=6.0` |
| `--check-deps` | **OK** |
| `verify_vendor_tree` | **Vendor tree OK** |
| Transcripts | `20260609T122857Z-phase2-venv.txt`, `20260609T122906Z-phase2-verify.txt` |

---

## Phase 3 — RW + Kanban

### 3a — RW-only bootstrap (Option A)

`install_release_workflow.py --mode a` — `use_kanban: false`. Transcript: `20260609T122915Z-phase3-rw-only.txt`.

### 3b — Legacy kanban restore

`git checkout 39fc49d0 -- KB/PM_and_Portfolio/epics KB/PM_and_Portfolio/kanban-governance`. Transcript: `20260609T123224Z-restore-legacy-kanban.txt`.

### 3c — ADK v3 Kanban fresh

`install_kanban_framework.py --mode fresh --kanban-path docs/kanban --force` → **SUCCESS**. Transcript: `20260609T123621Z-phase3b-kanban-fresh.txt`.

### 3d — RW config with Kanban integration

Re-ran RW with `config/greenfield-rw-install-input-mode-c.yaml` → `use_kanban: true`, `kanban_root: docs/kanban`. Transcript: `20260609T123637Z-phase3c-rw-kanban-config.txt`.

| Artifact | Result |
|----------|--------|
| `docs/kanban/kboard.md` | ADK consumer board |
| `docs/kanban/epics/` | 12 template epic dirs (canonical ADK pack) |
| `KB/.../KANBAN_BOARD.md` | Legacy board **unchanged** |
| `rw-config.yaml` | `use_kanban: true`, lowercase path patterns |
| RW install status | **PARTIAL** — lean host (no `workflows/` copy) |

---

## Phase 4 — Validation + sign-off

| Gate | Result |
|------|--------|
| Dual kanban on disk | **PASS** — `KB/.../KANBAN_BOARD.md` + `docs/kanban/kboard.md` |
| `use_kanban: true` in rw-config (after 3d) | **PASS** |
| Sign-off (after 3d) | **6 READY**, **1 SKIP**, **1 NOT READY** (BR-086) |
| Report | `attempt-03/signoff-report.json` |
| Transcript (post–Option A only) | `transcripts/20260609T122936Z-phase4-validate.txt` |

---

## Phase 5 — Closure + ADK feedback package (FB)

**Attempt 03 outcome:** Greenfield RW baseline + **dual kanban** for legacy→ADK migration testing (source `KB/`, target `docs/kanban/`).

### Feedback for ADK maintainers (FR-079 / extends UXR-025)

Packaged under **`feedback-package/`** for intake back to AI Dev Kit:

| File | Content |
|------|---------|
| `feedback-package/starborn-legacy-attempt03-feedback.md` | Option A confusion, dual-kanban confusion, migration prep |
| `feedback-package/triage-matrix-attempt03.md` | Findings F10–F16 |
| `feedback-package/feedback-payload.json` | Structured correlation + phase index |
| `feedback-package/artifact-manifest.json` | Transcript/config paths |

**Key themes for ADK:** (1) Option A was sequencing not exclusion; (2) `KB/` vs `docs/kanban/` must coexist for migration test; (3) orchestrator needs skip-Kanban / documented test-bed recipe.

**BLOCKER (F17):** `docs/kanban/` is **v1 catalog** (e.g. standalone E05 FR) — same as attempts 1–2 ([UXR-025 F9](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)). **No v3.2 installer on `v0.4.13`/`main`.** Legacy→ADK v3 migration test **cannot proceed** until ADK ships package rewrite or adopter manually scaffolds v3.2 target.

**Adopter (2026-06-09):** “After attempts 1 & 2 essentially failing due to v1 Kanban… guess which spec got installed.”

**Known follow-ups:**

1. Host `workflows/` not copied (lean install).
2. Restore Flutter app from `39fc49d0`; reconcile `version_file` with `lib/core/version.dart`.
3. Fresh ADK epics use mixed `epic-1` / `epic-01` template naming — note when running migration utilities.

---

**FB handoff zip (project root):** `starborn-legacy-adk-feedback-attempt03.zip`

*Last updated: 2026-06-09 14:00 UTC — FB package final; zip at repo root for ADK intake.*
