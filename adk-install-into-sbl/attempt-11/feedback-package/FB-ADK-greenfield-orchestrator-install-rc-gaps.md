# FB — Greenfield orchestrator partial success, Install RC path bugs, and adopter recovery (attempt 11)

**Type:** Adopter feedback (install orchestration / Install RC / RW scaffold)  
**Reporter:** Starborn Legacy — attempt 11  
**Date:** 2026-06-24  
**Status:** Observed during phase B orchestrator run — **regression carry-forward from attempt 10** on same pin  
**Related codes:** `ADK-I01.S03`, `ADK-I03.E90`, `ADK-I04.E01`  
**Programme:** UXR-029 · T36 · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)  
**Kit pin:** `v0.4.1171` (`greenfield-install-v0.4.1171.tar.gz`, SHA-256 verified)  
**Prior FB:** [attempt-10 post-install](../attempt-10/FB-ADK-post-install-rw-and-task-distribution.md) · [attempt-10 bootstrap](../attempt-10/FB-ADK-adopter-bootstrap-prerequisites.md)

---

## Summary

`install_greenfield_path.py` with `--adoption-path arm-b --init-sqlite --catalog v4 --run-install-rc --install-rc-strict` **exited 1** even though kanban fresh, SQLite init, and (after kanban) sign-off contract checks largely succeeded. The orchestrator’s **terminal Install RC step crashed** on a **vendor path bug** in `validate_install_rc.py`. Additional RC rows failed when re-run manually due to **checklist/script contract mismatch**, **missing adopter scaffolding**, and **bare `python`** invocation.

After **adopter recovery** (config + comprehension doc + local vendor path fixes), Install RC strict **PASS** (10/11, 1 skip). The orchestrator itself still **does not report success** without adopter intervention — same class of gaps attempt 10 documented.

**Kit ask:** Fix `validate_install_rc.py` paths in the greenfield tarball; orchestrator should forward `config/greenfield-rw-install-input.yaml`, emit `release_state_backend: sqlite`, scaffold `COMPREHENSION.md`, and use venv-aware Python for RC subprocess checks.

---

## 1. Orchestrator command and outcome

### Command (logged)

```bash
source .venv/bin/activate

TRANSCRIPT="$(date -u +%Y%m%dT%H%M%SZ)-orchestrator-arm-b.txt" \
  logs/attempt-11/run-logged.sh \
  .venv/bin/python vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py \
  --project-root . \
  --vendor-root vendor/ai-dev-kit \
  --non-interactive \
  --adoption-path arm-b \
  --init-sqlite \
  --catalog v4 \
  --run-install-rc \
  --install-rc-strict
```

**Transcript:** `logs/attempt-11/transcripts/20260624T154645Z-orchestrator-arm-b.txt`  
**Orchestrator exit:** `1`

### Layer results (rw-first order)

| Step | Script | Exit / status | Notes |
|------|--------|---------------|-------|
| RW mode C | `install_release_workflow.py` | **PARTIAL** | `ADK-I03.E90` — workflow file not found for patching |
| Sign-off (mid-pipeline) | `install_github_issue_signoff.py` | **NOT READY** (2) | UXR-017 — kanban `epics/` not found *before* kanban step ran |
| Kanban fresh v4 | `install_kanban_framework.py --force` | **SUCCESS** | E01–E08 + `kboard.md` |
| Sign-off (post-kanban) | (re-run in pipeline) | **7 READY** | UXR-017 PASS after kanban |
| SQLite | `init_release_state_db.py` | **SUCCESS** | `.adk/release-state.db` created |
| Install RC | `validate_install_rc.py` | **CRASH** | `FileNotFoundError` — see §2 |

Orchestrator printed: `Install RC FAILED — do not run first domain RW until resolved.`

---

## 2. Install RC crash — `validate_install_rc.py` wrong `WORKFLOW_ROOT`

### Symptom

```text
FileNotFoundError: [Errno 2] No such file or directory:
  '.../workflow-mgt/scripts/config/install-rc-checklist.yaml'
ERROR [ADK-I01.S03] Install RC checklist failed
```

### Root cause

In `validate_install_rc.py` (v0.4.1171):

```python
SCRIPT_DIR = Path(__file__).resolve().parent          # .../scripts/validation
WORKFLOW_ROOT = SCRIPT_DIR.parent                     # .../scripts  ← wrong
CONTRACT_PATH = WORKFLOW_ROOT / "config" / "install-rc-checklist.yaml"
KANBAN_SCRIPTS = WORKFLOW_ROOT.parent / "kanban" / "scripts"
```

Docstring says contract lives at `workflow-mgt/config/install-rc-checklist.yaml`. Actual file:

`vendor/ai-dev-kit/packages/frameworks/workflow-mgt/config/install-rc-checklist.yaml`

**Expected fix:**

```python
WORKFLOW_ROOT = SCRIPT_DIR.parent.parent              # .../workflow-mgt
KANBAN_SCRIPTS = WORKFLOW_ROOT.parent / "kanban" / "scripts"
```

**Severity:** **blocking** — `--run-install-rc` on orchestrator always fails on unpatched pin; error code does not name the path bug.

**Also observed on:** `v0.4.1222` tarball (same `WORKFLOW_ROOT` assignment) — not pin-specific regression; **shipping defect**.

---

## 3. Install RC manual re-run — additional failures (post-crash)

After pointing `--contract` at the correct YAML (or patching `WORKFLOW_ROOT`), RC still **FAIL** until adopter fixes:

| RC row | Failure | Root cause |
|--------|---------|------------|
| `rc-kanban-v4` | `can't open file '.../workflow-mgt/kanban/scripts/validate_v4_template_completeness.py'` | Wrong `KANBAN_SCRIPTS` from same `WORKFLOW_ROOT` bug |
| `rc-kanban-v4` | `unrecognized arguments: --project-root .` | Checklist passes `--project-root`; validator accepts only `--strict` |
| `rc-kanban-v4` | `[Errno 2] No such file or directory: 'python'` | Checklist `command: python` — fails without venv on PATH (macOS Homebrew) |
| `rc-sqlite-before-rw` | skipped | `rw-config.yaml` missing `release_state_backend: sqlite` despite `--init-sqlite` |
| `rc-comprehension` | missing markers | Orchestrator lists COMPREHENSION.md as manual step; not scaffolded |
| `rc-version-file` | wrong path | RW installer emitted `src/myproject/version.py`; consumer config specifies `src/starborn_legacy/version.py` |

### RW installer config not forwarded

Consumer file present before orchestrator:

`config/greenfield-rw-install-input.yaml`:

```yaml
project_name: starborn_legacy
version_file: src/starborn_legacy/version.py
# ...
```

Orchestrator invoked RW **without** `--config` (no flag on v0.4.1171 `install_greenfield_path.py`). Generated `rw-config.yaml` used template default `src/myproject/version.py`.

**Kit ask:** Orchestrator reads `config/greenfield-rw-install-input.yaml` by convention or documents required `--config` flag.

---

## 4. RW install PARTIAL — workflow file

```text
⚠️  INSTALLATION PARTIAL
Issues requiring follow-up:
1. Workflow file not found for patching
```

RW mode C scaffolded `rw-config.yaml`, `CHANGELOG.md`, version file, `.cursorrules` — but did not complete workflow YAML copy/patch. Same class as attempt 10; blocks confident RW without manual `release-workflow.yaml` placement.

---

## 5. Adopter recovery (attempt 11 — for evidence replay)

**Status:** Attempted fix — operator verification pending. Changes applied locally to obtain Install RC PASS evidence; **not** claimed as kit-resolved.

| # | Action | Purpose |
|---|--------|---------|
| 1 | Patch `validate_install_rc.py` → `WORKFLOW_ROOT = SCRIPT_DIR.parent.parent` | Correct contract + kanban script paths |
| 2 | Patch `install-rc-checklist.yaml` → remove `--project-root` from kanban validator args | Match `validate_v4_template_completeness.py` CLI |
| 3 | `rw-config.yaml` → `version_file: src/starborn_legacy/version.py`, `release_state_backend: sqlite` | RC rows + attempt 09/10 sqlite gate |
| 4 | Copy scaffold `version.py` → `src/starborn_legacy/version.py` | Align with consumer config |
| 5 | Author `COMPREHENSION.md` (restore ≠ migrate, kanban root) | `rc-comprehension` |
| 6 | Re-run RC with `source .venv/bin/activate` | Bare `python` resolves to venv |

### Recovery RC result

```bash
source .venv/bin/activate
python vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/validation/validate_install_rc.py \
  --project-root . --profile arm-b --strict \
  --report-json logs/attempt-11/feedback-package/install-rc-report.json
```

**Result:** PASS — 10/11 passed, 1 skipped (`rc-kma-migration-map` — no migration map yet).

**Report:** `logs/attempt-11/feedback-package/install-rc-report.json`

---

## 6. Attempt 11 vs attempt 10 (same pin)

| Gap | Attempt 10 | Attempt 11 |
|-----|------------|------------|
| `validate_install_rc` path bug | Workaround (symlink / `--contract`) | **Same crash on orchestrator** |
| `version_file` default | Adopter fix | **Same** — config not forwarded |
| `release_state_backend` | Adopter fix | **Same** — not emitted by installer |
| COMPREHENSION scaffold | Adopter-authored | **Same** |
| Bare `python` in RC | Adopter venv PATH | **Same** |
| Kanban `--project-root` in checklist | Adopter vendor patch | **Same** |
| Orchestrator exit on RC fail | Yes | **Yes** |

Pin `v0.4.1171` did not absorb attempt 10 FB fixes.

---

## 7. Requested kit improvements

| ID | Priority | Change |
|----|----------|--------|
| R1 | **CRITICAL** | `validate_install_rc.py`: `WORKFLOW_ROOT = SCRIPT_DIR.parent.parent`; add regression test |
| R2 | **HIGH** | `install-rc-checklist.yaml`: remove or implement `--project-root` on kanban validators |
| R3 | **HIGH** | `install_greenfield_path.py`: forward `config/greenfield-rw-install-input.yaml`; set `release_state_backend: sqlite` when `--init-sqlite` |
| R4 | **HIGH** | RC `command` checks: use `sys.executable` or document `source .venv/bin/activate` as orchestrator prerequisite |
| R5 | **MEDIUM** | Scaffold `COMPREHENSION.md` template during arm-b orchestration (listed as manual today) |
| R6 | **MEDIUM** | RW mode C: resolve workflow file copy — eliminate PARTIAL on greenfield |
| R7 | **LOW** | `ADK-I01.S03` message: include missing path when contract file not found |

Route to **E06:S09** (install programme) · **T36** Install RC · `INSTALL_IN_YOUR_PROJECT.md`.

---

## 8. Evidence index

| Artifact | Path |
|----------|------|
| Orchestrator transcript | `logs/attempt-11/transcripts/20260624T154645Z-orchestrator-arm-b.txt` |
| Session log | `logs/attempt-11/session.log` |
| Install diary | `logs/attempt-11/greenfield-install-diary.md` |
| Install RC report (recovery) | `logs/attempt-11/feedback-package/install-rc-report.json` |
| Sign-off report | `logs/ai-dev-kit/install/signoff-report.json` |
| Consumer RW input (unused by orchestrator) | `config/greenfield-rw-install-input.yaml` |
| Comprehension (adopter) | `COMPREHENSION.md` |
| This FB | `docs/adk-feedback/attempt-11/FB-ADK-greenfield-orchestrator-install-rc-gaps.md` |
