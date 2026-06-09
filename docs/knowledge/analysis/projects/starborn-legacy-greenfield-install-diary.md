---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Starborn Legacy — AI Dev Kit Greenfield Install Diary

**Project:** Starborn Legacy (`starborn_legacy`)  
**Branch:** `ai-dev-kit`  
**Started:** 2026-06-09  
**Method:** Official greenfield path — [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)  
**ADK release pin:** `v0.4.1063` (2026-06-08)  
**Install log:** `logs/ai-dev-kit/install/session.log` (`AI_DEV_KIT_INSTALL_LOG_PATH`)  
**UXR:** [UXR-025](../../../kanban/fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md) · **Task:** [E06:S09:T25](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)

---

## Pre-install state

| Item | Value |
|------|-------|
| Git HEAD (history) | `39fc49d0` preserved |
| Working tree | Cleared — only `.git`, minimal `README.md`, `.gitignore` |
| Prior Lane B attempt | Discarded |

---

## Phase 0 — Diary bootstrap

- Created `logs/ai-dev-kit/install/greenfield-install-diary.md`
- `logs/` gitignored (local install record)

---

## Phase 1 — Acquire lean vendor tree

### 1a — Submodule attempt (failed)

```bash
git submodule add https://github.com/RMS-Ltd/ai-dev-kit.git vendor/ai-dev-kit
```

**Result:** `fatal: please make sure that the .gitmodules file is in the working tree`  
(Index still held deleted files from prior wipe; no `.gitmodules` on disk.)

### 1b — Sparse clone attempt (failed — disk full)

```bash
git clone --filter=blob:none --sparse --depth 1 --branch v0.4.1063 \
  https://github.com/RMS-Ltd/ai-dev-kit.git vendor/ai-dev-kit
cd vendor/ai-dev-kit && git sparse-checkout set greenfield-install
```

**Result:** `No space left on device` (~116 MiB free on `/System/Volumes/Data`).  
Removed partial clone; freed ~3 GiB after cleanup.

### 1c — Release tarball (SUCCESS) ✅

```bash
gh release download v0.4.1063 --repo RMS-Ltd/ai-dev-kit \
  -p 'greenfield-install-v0.4.1063.tar.gz' -D /tmp/adk-dl
tar -xzf /tmp/adk-dl/greenfield-install-v0.4.1063.tar.gz \
  -C vendor/ai-dev-kit --strip-components=1
```

| Metric | Value |
|--------|-------|
| Tarball size | 1.4 MiB |
| Extracted vendor | ~10 MiB |
| SHA256 asset | `greenfield-install-v0.4.1063.tar.gz.sha256` (on release) |

**Preflight:**

```bash
python3 vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/verify_vendor_tree.py \
  --vendor-root vendor/ai-dev-kit
# → Vendor tree OK
```

---

## Phase 2 — Python venv

```bash
python3 -m venv .venv
.venv/bin/pip install 'pyyaml>=6.0'
```

---

## Phase 3 — `packages/` symlink (orchestrator prerequisite)

`install_greenfield_path.py` invokes installers at **project-root** `packages/frameworks/...`, not under `vendor/`.

```bash
ln -sf vendor/ai-dev-kit/packages packages
```

**Note:** Upstream orchestrator gap — `--vendor-root` only affects preflight, not subprocess paths. Documented for maintainer feedback.

---

## Phase 4 — Greenfield orchestrator (partial — interactive RW)

```bash
.venv/bin/python vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py \
  --project-root . --vendor-root vendor/ai-dev-kit --non-interactive --order rw-first
```

**Result:** `ADK-I01.S01` — RW subprocess hung on interactive `Project name` prompt.  
**Workaround:** Run installers directly with `--config` (Phase 5).

Raw log: `logs/ai-dev-kit/install/greenfield-orchestrator-output.txt`

---

## Phase 5 — RW installer (mode C, non-interactive) ✅ PARTIAL

**Input:** `config/greenfield-rw-install-input.yaml`

```bash
.venv/bin/python packages/frameworks/workflow-mgt/scripts/install_release_workflow.py \
  --mode c --config config/greenfield-rw-install-input.yaml --project-root .
```

### Generated artifacts

| File | Notes |
|------|-------|
| `rw-config.yaml` | dual + task_touch; kanban `docs/kanban` |
| `.cursorrules` | RW trigger section (created) |
| `src/starborn_legacy/version.py` | `0.1.1.1+1` scaffold |
| `CHANGELOG.md` | Keep a Changelog skeleton (`[Unreleased]` only) |

### RW status: PARTIAL

- Missing `workflows/release-workflow/release-workflow.yaml` (expected greenfield — workflows live under vendor `packages/`)
- Sign-off before Kanban: UXR-017, BR-086 NOT READY (kanban not installed yet)

Raw log: `logs/ai-dev-kit/install/rw-install-output.txt`

---

## Phase 6 — Kanban installer (fresh + force) ✅ SUCCESS

```bash
.venv/bin/python packages/frameworks/kanban/scripts/install_kanban_framework.py \
  --mode fresh --force --kanban-path docs/kanban
```

**Banner:** `AI Dev Kit v0.0.1+1` (lean tree version stub)

### Installed

| Item | Count / path |
|------|----------------|
| Board | `docs/kanban/kboard.md` |
| Structure | `kanban-structure.md`, `kanban-board-guide.md` |
| Template epics | 1, 2, 3, 4, 5, 6, 7, 8, 10, 18, 22, 23 |
| Layout | `epics/epic-{n}/epic-{n}.md` (lowercase, UXR-017) |

### Sign-off after Kanban: **ALL READY** ✅

| Issue | Status |
|-------|--------|
| BR-084 task_doc_pattern | READY |
| BR-083 fresh kanban patterns | READY |
| UXR-017 lowercase paths | READY |
| BR-086 lowercase + sign-off | READY |
| BR-088 version scaffold | READY |
| BR-089 CHANGELOG scaffold | READY |
| BR-082 pyyaml preflight | READY |
| BR-080 | SKIP (kit_only) |

Report: `logs/ai-dev-kit/install/signoff-report.json`

Raw log: `logs/ai-dev-kit/install/kanban-install-output.txt`

---

## Phase 7 — Post-install validation

| Validator | Result |
|-----------|--------|
| `validate_branch_context.py --strict` | PASS (warn: branch mapping, no task doc yet) |
| `validate_changelog_format.py` | FAIL — only `[Unreleased]` stub; passes after first RW entry |

---

## Current end state

```
.git/
.gitignore
.cursorrules
CHANGELOG.md
README.md
config/greenfield-rw-install-input.yaml
docs/kanban/          # kboard + 12 template epics
logs/                 # gitignored
packages → vendor/ai-dev-kit/packages
rw-config.yaml
src/starborn_legacy/version.py
vendor/ai-dev-kit/    # gitignored (tarball extract)
.venv/                # gitignored
```

| Layer | Status |
|-------|--------|
| Lean vendor | ✅ `v0.4.1063` tarball |
| RW config + cursorrules | ✅ PARTIAL (no local workflows/) |
| Kanban fresh | ✅ SUCCESS |
| Sign-off | ✅ ALL READY |
| Flutter app | ❌ Not restored (await `git checkout main -- <paths>`) |
| SBL kanban port | ❌ Not started |
| Git commit | ❌ Await RW |

---

## Lessons / upstream notes

1. **Disk:** Sparse submodule needs headroom; tarball is safer on constrained disks.
2. **Orchestrator:** Needs `--config` forwarding or vendor-aware script paths.
3. **`packages` symlink:** Required for orchestrator/RW until frameworks copied to project root.
4. **Dual versioning:** `rw-config.yaml` has `versioning_mode: dual`, `semver_mapping_strategy: task_touch` — `semver-registry.yaml` created on first RW with finalize step.

---

## Phase 8 — Install attempt closed (endpoint)

**Status:** END — this greenfield install attempt stops here.

### Adopter decision: retain legacy Kanban E/S/T framework

Starborn Legacy **does not adopt** the ADK fresh-install Kanban tree (`docs/kanban/` template epics 1–8, 10, 18, 22, 23) as the operational PM layer.

| Topic | Decision |
|-------|----------|
| **PM / Kanban** | Continue **legacy E/S/T** (Epic–Story–Task): `KB/PM_and_Portfolio/epics/overview/`, `E{epic}:S{story}:T{task}` identifiers, story checklists, `KANBAN_BOARD.md` MoSCOW model |
| **ADK fresh kanban** | Install exercise only — not the source of truth for SBL backlog |
| **RW / versioning** | Greenfield RW scaffold (`rw-config.yaml`, dual task-touch) may be reused when a future attempt restores app + legacy kanban wiring |
| **This attempt** | No further install steps; no app restore; no brownfield port in this pass |

**Rationale:** SBL backlog, versioning traceability, and agent workflows remain bound to the established E/S/T framework until a deliberate brownfield migration (FR-081) is planned against restored `main` content.

Installer contract checks (BR-084, UXR-017, etc.) passed for the **greenfield exercise**; adopter sign-off below records **scope closure**, not full SBL kanban adoption.

---

## Next steps (deferred — future attempt)

1. Restore Flutter app from `main` @ `39fc49d0`
2. Re-wire RW to legacy kanban paths (or brownfield migrate KB → ADK layout)
3. RW commit when a scoped integration story is opened

---

*Last updated: 2026-06-09 — install attempt closed; legacy E/S/T Kanban retained.*
