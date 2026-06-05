# Installing AI Dev Kit Frameworks in Your Project

**Quick Start Guide for Agents and Developers**

This document provides a clear entry point for installing AI Dev Kit frameworks into your project. All installation documentation is available in the public **AI Dev Kit** repository.

---

## Canonical repository (FR-099 / ADR-006)

| Audience | Repository | Clone URL |
|----------|------------|-----------|
| **Adopters** (frameworks only) | [`RMS-Ltd/ai-dev-kit`](https://github.com/RMS-Ltd/ai-dev-kit) | `https://github.com/RMS-Ltd/ai-dev-kit.git` |
| **Maintainers** (book + full history) | [`RMS-Ltd/ai-dev-kit-book`](https://github.com/RMS-Ltd/ai-dev-kit-book) (private) | `https://github.com/RMS-Ltd/ai-dev-kit-book.git` |

Published docs: [https://rms-ltd.github.io/ai-dev-kit/](https://rms-ltd.github.io/ai-dev-kit/).  
Rewire policy: [`docs/maintenance/fr099-phase4-rewire-and-verify.md`](docs/maintenance/fr099-phase4-rewire-and-verify.md).

---

## 🎯 Quick Answer

**Yes, all installation documentation is available in the ai-dev-kit repository.** When you point your project at the ai-dev-kit repo, agents can find and follow complete installation instructions.

### Install version banner (UXR-016)

Every install and setup entry point (`adk install`, framework installers, greenfield orchestrator) prints the **external SemVer** of AI Dev Kit at session start, for example:

```text
AI Dev Kit v0.4.863+1
```

Paste this line into GitHub issues or feedback so maintainers can match your console output to a released version. Install JSON logs and feedback payloads include matching `adk_semver` / `adk_internal_version` fields when logging is enabled.

### Install error codes (FR-108)

When an install step fails, installers print a stable code such as:

```text
ERROR [ADK-I03.E04] RW installer dependencies missing
  → pip install 'pyyaml>=6.0'
```

**Report both** the SemVer banner line and the `ADK-*` code in GitHub issues or UAT feedback. Lookup tables and remediation steps are in [`framework-dependency-troubleshooting-guide.md`](docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md#install-error-codes-adk).

---

## 📚 Documentation Location

All installation documentation is located in:
```
docs/documentation/user-docs/
```

**Key Documents:**
- **Main Installation Guide:** [`framework-dependency-installation-guide.md`](docs/documentation/user-docs/framework-dependency-installation-guide.md)
- **Integration Guide:** [`framework-dependency-integration-guide.md`](docs/documentation/user-docs/framework-dependency-integration-guide.md)
- **Use Cases:** [`framework-dependency-use-cases.md`](docs/documentation/user-docs/framework-dependency-use-cases.md)
- **FAQ:** [`framework-dependency-faq.md`](docs/documentation/user-docs/framework-dependency-faq.md)
- **Troubleshooting:** [`framework-dependency-troubleshooting-guide.md`](docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md)
- **External doc/style upstream tracking:** [`adopter-external-resource-dependency-tracking.md`](docs/documentation/user-docs/adopter-external-resource-dependency-tracking.md) — host project owns Best-README-Template, Keep a Changelog, and Shields.io review after copy (FR-003; not framework package updates)

Other guides under [`docs/documentation/user-docs/`](docs/documentation/user-docs/) include a short **Scope (greenfield vs brownfield)** section where relevant, pointing back here and to ADR-003 / FR-081.

---

## 🚀 Installation Methods

## Greenfield Install Specification (Wave 1 lock)

This section defines the canonical **greenfield** path for new or template projects per **FR-080** (E6:S09:T01).

- Policy anchor: [ADR-003](docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- Brownfield is separate: see [Brownfield adoption (existing repositories)](#brownfield-adoption-existing-repositories) below; policy [FR-081](docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md); planning [IPP-E6S09T02](docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md)
- Greenfield planning: [IPW-E6S09T01](docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)

### Optional harness layer (ECC)

ADK adoption does **not** require [ECC](https://github.com/affaan-m/ECC) (MIT). After the greenfield ADK baseline (workflow + kanban installers above), you may optionally add ECC:

1. Read the **[ECC + ADK integration cheatsheet](docs/documentation/user-docs/ecc-adk-integration-cheatsheet.md)** (quick reference).
2. Run Phase 0 dry-run on a throwaway branch (see cheatsheet §3).
3. Copy the bridge template and validate:

   ```bash
   cp "packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template" ecc-adk-bridge.yaml
   python "packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py"
   ```

4. Optional install helper (defaults to **dry-run**; no network):

   ```bash
   "packages/frameworks/workflow-mgt/scripts/install/install_ecc_harness_optional.sh" --copy-bridge
   ```

   Use `--execute` only after Phase 0 passes on your project.

Normative contract: [ECC ↔ ADK integration specification](docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md). Brownfield adopters: same optional surface per [ADR-003](docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) and [FR-081](docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md).

### Scope boundary

- This spec is for **greenfield** setup only (empty/new template repos).
- Brownfield adaptation and host-architecture-preserving integration: [Brownfield adoption (existing repositories)](#brownfield-adoption-existing-repositories) (FR-081 / ADR-003).

### Inputs

- Target project workspace (new/template repository).
- Access to AI Dev Kit framework sources (release asset, submodule, or equivalent bundle).
- Python runtime available for installer scripts.
- Installers in scope:
  - `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`
  - `packages/frameworks/kanban/scripts/install_kanban_framework.py`

### Installer venv dependencies (before Step 3 / RW install)

Submodule-only and book dry-runs often copy frameworks **without** installing Python deps into the **consumer** venv. Install **before** the first `install_release_workflow.py` run (book T03 Step 3, greenfield Step 4 below):

```bash
# From your project root with venv activated:
pip install 'pyyaml>=6.0'

# Or install from the ai-dev-kit checkout (includes setup.py deps):
pip install -e ./vendor/ai-dev-kit   # adjust path to your submodule/checkout

# Preflight (non-interactive):
python3 "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py" --check-deps
```

The RW installer exits with the same guidance if PyYAML is missing (BR-082).

### Post-kanban RW install (`--mode c` pattern defaults)

After `install_kanban_framework.py --mode fresh`, on-disk layout is typically:

```text
docs/project-management/kanban/
  kboard.md              # sole active MoSCOW board (ADR-018)
  fbuboard.md            # deprecated redirect stub (no active MoSCOW)
  epics/Epic-1/Epic-1.md
  epics/Epic-1/Story-009-*.md
```

**Dual-board brownfield:** If your project still maintains active rows on `fbuboard.md`, migrate per `packages/frameworks/kanban/guides/single-board-migration-adopter-note.md` before upgrading framework packs.

Mode **C** of `install_release_workflow.py` **detects** this layout and pre-fills matching defaults (press Enter to accept). If detection finds files, you should see match previews instead of zero-match warnings.

### Greenfield `version_file` scaffold (BR-088 / GitHub #18)

Greenfield adopters often have **no `src/` tree** when mode C runs. After `rw-config.yaml` is written, the installer **prompts** (default **Yes**):

> Create minimal version file at `src/your_app/version.py` (initial `0.1.1.1+1`)?

- **Yes** — creates parent directories and a `version.py` stub with `RC.EPIC.STORY.TASK+BUILD` constants (`VERSION_STRING` included).
- **No** — install reports **INSTALLATION PARTIAL** with copy-paste `mkdir` / versioning guidance (not **SUCCESS** until the file exists).

Use `--dry-run` to preview without writing the stub. Book T03 Step 3.2 manual scaffold remains valid if you declined the prompt.

Copy-paste fallback if you skip the installer prompts:

```yaml
use_kanban: true
kanban_root: docs/project-management/kanban
# Lowercase fresh install (UXR-017 / book T03 Step 4.1) — installer mode C detects unpadded epic-N:
epic_doc_pattern: epics/epic-{epic}/epic-{epic}.md
story_doc_pattern: epics/epic-{epic}/story-{story:03d}-*.md
task_doc_pattern: epics/epic-{epic}/story-{story:03d}/t{task:02d}-*.md
kanban_board: kboard.md
fr_br_root: docs/project-management/kanban/fr-br
# Capital-case fresh install (legacy) — installer still supports Epic-/Story- paths:
# epic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md
# story_doc_pattern: epics/Epic-{epic}/Story-{story:03d}-*.md
```

Mode C also **detects** `fr-br/` when present and refuses to persist zero-match epic/story patterns while kanban files exist (BR-084).

### Outputs

- Framework assets copied/available in target project.
- `rw-config.yaml` generated and aligned with project paths.
- `.cursorrules` RW trigger section present/updated.
- Kanban structure installed/validated for selected mode.
- Manual verification gates completed and recorded.

### Canonical ordering and override

- **Default recommendation:** **RW-first, then Kanban**.
  - Rationale: RW installer establishes `rw-config.yaml`; Kanban installer can consume `kanban_root` from that config.
- **Critical checkpoint (user control):**
  - Present both valid paths:
    - Path A (default): RW -> Kanban
    - Path B (override): Kanban -> RW
  - Require explicit user confirmation for override path before continuing.
  - If override is selected, capture a short rationale in the run notes.

### Wave 2 orchestrator (hybrid execution)

Use the thin orchestrator to apply the default path with an explicit checkpoint:

```bash
python3 "packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py" \
  --project-root "." \
  --order rw-first
```

- Default behavior prompts at the critical checkpoint and allows override to `kanban-first`.
- For unattended runs, use `--non-interactive` with explicit `--order`.
- The orchestrator wraps existing installers only; it does not replace their logic.

### Manual verification gates (primary completion criteria)

1. **Config gate**  
   Confirm `rw-config.yaml` exists and key paths point to real files/directories in the target repo.

2. **Installer gate**  
   Confirm both installers were executed (not copy-only installation).

3. **Kanban gate**  
   Confirm expected Kanban outputs exist at configured `kanban_root` and no blocking validation errors are reported by installer output.

4. **RW readiness gate**  
   Confirm RW assets required for trigger-based operation are present (`.cursorrules` RW section, validation script path assumptions documented).

5. **Policy cross-link gate**  
   Confirm greenfield docs still link ADR-003 and FR-081 for boundary clarity.

### Failure modes and handling

- **Missing Python dependency (e.g., PyYAML)**  
  Action: run `install_release_workflow.py --check-deps`, then `pip install 'pyyaml>=6.0'` (or `pip install -e` from kit checkout); see [Installer venv dependencies](#installer-venv-dependencies-before-step-3--rw-install).
- **Installer path mismatch / missing scripts**  
  Action: correct framework copy/acquisition path; do not bypass installers.
- **Existing conflicting config files**  
  Action: stop and reconcile manually; do not overwrite blindly.
- **Kanban root mismatch with `rw-config.yaml`**  
  Action: align `kanban_root` and rerun Kanban installer/validation.
- **Order override introduces inconsistency**  
  Action: return to default sequence and re-run from config gate.

### Logging and analysis posture

- Capture representative install run output for debugging/analysis.
- If available, set `AI_DEV_KIT_INSTALL_LOG_PATH` so both installers append structured logs.
- Keep logs scrubbed of secrets and machine-specific sensitive paths before sharing.

### Wave 4 — Post-install validation (`F4`)

Validators read paths from **`rw-config.yaml`** (especially `scripts_path`). Authoritative layout notes: [`rw-validators-consumer-layout.md`](packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md).

From **your project root**, after installers have produced `rw-config.yaml` and copied scripts:

```bash
# Resolve scripts_path from rw-config.yaml — examples only (yours may differ):
WF_SCRIPTS='packages/frameworks/workflow-mgt/scripts'   # submodule / monorepo-style layout
# WF_SCRIPTS='scripts'                                   # typical after copying workflow-mgt/* to project root

python3 "${WF_SCRIPTS}/validation/validate_branch_context.py" --strict
python3 "${WF_SCRIPTS}/validation/validate_changelog_format.py"
```

If **`use_kanban: true`** and you run RW with task documents, add task-token checks for **your** Epic/Story/Task id (not ai-dev-kit’s):

```bash
python3 "${WF_SCRIPTS}/validation/validate_rw_task_complete.py" --requested "E5:S01:T01"
python3 "${WF_SCRIPTS}/validation/validate_rw_task_intent.py" --requested "E5:S01:T01"
```

Use **`RW -k`** modes only when initializing Kanban per your `.cursorrules` portable rules.

### Wave 4 — Reference example run (synthetic transcript)

Illustrative output only — paths and task ids are placeholders; replace with your repository layout.

```text
$ export AI_DEV_KIT_INSTALL_LOG_PATH="$PWD/logs/greenfield-example.log"
$ mkdir -p logs
$ python3 "packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py" \
    --project-root "." --non-interactive --order rw-first

▶ python3 .../install_release_workflow.py --mode c --project-root "."
... rw-config.yaml written ...
✅ Release Workflow installer completed.

▶ python3 .../install_kanban_framework.py --mode fresh
... Kanban scaffold written under <KANBAN_ROOT>/ ...
✅ Kanban framework installer completed.

$ python3 "packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py" --strict
✅ Branch context validation passed!

$ tail -n 3 "$AI_DEV_KIT_INSTALL_LOG_PATH"
{"phase":"rw.install","status":"complete","timestamp":"..."}
{"phase":"kanban.install","status":"complete","timestamp":"..."}
```

Redact host paths, tokens, and internal URLs before sharing logs outside your team.

### Wave 4 — Install telemetry boundaries (**FR-078** / **FR-079**)

- **[FR-078](docs/project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md)** — quality and completeness expectations for install **event** / logging contracts across tooling.
- **[FR-079](docs/project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance.md)** — governance for **feedback** after an install (what gets submitted upstream and how).

**Greenfield scope (this task):** Ensure adopters know how to capture evidence (`AI_DEV_KIT_INSTALL_LOG_PATH`, console transcripts) and **what not to paste** (secrets, private URLs). Full contract implementation remains tracked under FR-078 / FR-079.

---

## Brownfield adoption (existing repositories)

**Policy anchor:** [ADR-003 – Greenfield vs Brownfield adoption](docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · **FR-081** · **IPP:** [IPP-E6S09T02](docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md)

Use this section when the **host project already has** its own layout, tooling, and governance. The host team owns architecture; AI Dev Kit supplies **modular surfaces** and **contracts**—not a mandatory copy of the ai-dev-kit reference repository tree.

### When to use brownfield vs greenfield

| Situation | Path |
|-----------|------|
| New or template repo with little structure to preserve | [Greenfield Install Specification](#greenfield-install-specification-wave-1-lock) (FR-080) |
| Existing codebase, established `docs/`, PM process, or custom paths | **This section** (FR-081) |

### Non-goals (brownfield)

- **Do not** replace the host `docs/` tree or project-management process unless you explicitly choose to.
- **Do not** copy ai-dev-kit's **reference** Epic/Story/Task content (e.g. maintainer Epics 1–23) into your repo as if it were your product backlog.
- **Do not** treat `install_kanban_framework.py --mode fresh` as the default on brownfield repos (see [Adding Kanban later](#adding-kanban-later)).

### Choose your adoption surface

```
Existing repo?
  ├─ Need versioned releases + agent RW only?
  │     └─ RW-only (use_kanban: false)
  ├─ Need RW + task/epic docs in-repo?
  │     └─ RW + Kanban (migration or canonical_adoption)
  └─ Need full ADK governance stack?
        └─ Full stack (RW + Kanban + versioning policy + optional doc-lifecycle)
```

### Per-surface adoption matrix

Legend: **R** = Required · **O** = Optional · **Rec** = Recommended · **N/A** = Not applicable for that profile

| Profile | Release Workflow (RW) | Kanban | Versioning policy | Doc lifecycle | Validators when RW enabled |
|---------|----------------------|--------|-------------------|---------------|----------------------------|
| **RW-only** | **R** — `install_release_workflow.py`, `rw-config.yaml`, `.cursorrules` RW section | **O** — set `use_kanban: false` | **Rec** — host `version.py` + schema doc | **O** | Branch safety, changelog format, version bump; FR-060 task token guards **only if** you maintain task docs |
| **RW + Kanban** | **R** | **R** — host epics or **canonical templates** via `migration` / `canonical_adoption` | **Rec** | **O** | Above + `validate_rw_task_complete.py`, `validate_rw_task_intent.py` when releasing with task docs |
| **Full stack** | **R** | **R** | **R** — adopt [dev-kit-versioning-policy](docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md) or mapped equivalent | **O** | Full RW Step 7 four-surface reconciliation when Kanban + FR/BR paths enabled |

**Contract-first wiring:** All paths assume you map ADK contracts to **your** tree. See [RW validators and consumer layout](packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md).

#### `rw-config.yaml` integration seams (brownfield)

| Key | RW-only minimum | Notes |
|-----|-----------------|-------|
| `version_file` | **R** | Your module path (e.g. `src/myapp/version.py`) |
| `scripts_path` | **R** | Folder containing `validation/` after vendoring workflow-mgt |
| `main_changelog`, `changelog_dir` | **R** for RW | Your changelog locations |
| `use_kanban` | `false` for RW-only | `true` only when Kanban paths exist and are valid |
| `kanban_root`, `*_doc_pattern` | **O** | Required when `use_kanban: true` |

### RW-only minimum path (brownfield)

1. **Acquire** workflow management package (submodule, copy, or release asset from `RMS-Ltd/ai-dev-kit`).
2. **Install RW** (do not skip the installer):

   ```bash
   python3 "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py" \
     --mode a --project-root "."
   ```

   For RW without Kanban, answer prompts so `use_kanban: false` (Simple RW / mode `a`), or edit generated `rw-config.yaml` after install.

3. **Verify** `rw-config.yaml` paths point at real files under your project root.
4. **Smoke validators** (replace `{scripts_path}` from your config):

   ```bash
   python3 "{scripts_path}/validation/validate_branch_context.py" --strict
   python3 "{scripts_path}/validation/validate_changelog_format.py"
   ```

5. **First release:** work on `epic/{n}-*` branch; trigger `RW E{n}:S{nn}:T{nn}` with your host Epic/Story/Task ids (FR-060).

### Adding Kanban later

- Prefer **`--mode migration`** or **`canonical_adoption`** when you already have boards or backlog docs.
- Use **`--mode fresh`** only for greenfield-style empty Kanban roots; the installer prints a brownfield warning when you select fresh on an existing repo.
- **Empty repo:** `--mode fresh` creates the Kanban skeleton (`epics/` included) before validation — **`--force` is not required** to bypass missing-directory checks on first install (see [BR-080](docs/project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md)).
- **Install outcome:** When `kboard.md` and `epics/` are created, the installer reports **`Final status: SUCCESS`** (not PARTIAL solely because board files were absent during pre-install validation). `kanban-structure.md` is copied from `templates/KANBAN_STRUCTURE_TEMPLATE.md` (BR-078).
- **Epic 22/23 templates:** Fresh install resolves `templates/Epic-22/Epic-22.md` and `templates/Epic-23/Epic-23.md` (or `templates/epics/Epic-{n}-*.md`) — not placeholder stubs (BR-079).
- Installer installs **canonical templates**, not ai-dev-kit maintainer epics—see [kanban/README.md](packages/frameworks/kanban/README.md).

```bash
python3 "packages/frameworks/kanban/scripts/install_kanban_framework.py" \
  --mode migration --kanban-path "docs/project-management/kanban"
```

Align `kanban_root` in `rw-config.yaml` with your actual path before RW Step 7.

### Worked example: partial adoption (anonymized)

**Host:** `acme-api` — five-year-old Python API monorepo; Jira for PM; `docs/` already contains architecture ADRs.

**Goal (year 1):** Agent-driven releases with immutable changelogs; **no** in-repo Kanban yet.

**Steps taken:**

1. Added submodule `.ai-dev-kit` → copied `workflow-mgt/` to `tools/workflow_mgt/`.
2. Ran `install_release_workflow.py --mode a`; set `version_file: src/acme_api/version.py`, `scripts_path: tools/workflow_mgt/scripts`, `use_kanban: false`.
3. Created minimal task doc only for release attribution (`E3:S02:T04`) under existing `docs/eng/tasks/`.
4. Validators: branch + changelog only; skipped task-complete validators until Kanban Phase 2.
5. First RW: `RW E3:S02:T04` on `epic/3-platform`.

**Deferred:** Kanban (`FR-081` Phase 2), GitHub Release tarballs ([FR-062](docs/project-management/kanban/fr-br/FR-062-github-release-installation-experience.md)).

### Tradeoffs and deferrals

| Topic | Status | Track in |
|-------|--------|----------|
| GitHub Release framework tarballs | Deferred | [FR-062](docs/project-management/kanban/fr-br/FR-062-github-release-installation-experience.md) |
| Install telemetry contracts | Deferred | [FR-078](docs/project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md), [FR-079](docs/project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance.md) |
| Intelligent epic matching | Document only | Kanban `canonical_adoption`; [FR-011](docs/project-management/kanban/fr-br/FR-011-intelligent-epic-matching-ai-assisted-canonical-adoption.md) |

---

### Package installation methods (greenfield and brownfield)

### Method 1: GitHub Releases (Recommended - Available Now)

Install framework packages directly from GitHub Releases:

```bash
# Using installation script
python3 install_package_from_release.py kanban 2.1.0 \
    --repo RMS-Ltd/ai-dev-kit \
    --install-dir packages/frameworks

# Or download manually
# See: packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md
```

**Documentation:**
- [`PACKAGE_INSTALLATION_GUIDE.md`](packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md) - Complete package installation guide
- [`install-receipt-reference.md`](docs/documentation/user-docs/install-receipt-reference.md) - JSON install receipt written under `logs/ai-dev-kit/install/` when your project has `.ai-dev-kit.yaml` (FR-062)

### Method 2: Git Submodule (Available Now)

Add ai-dev-kit as a Git submodule, copy frameworks, then run installers:

```bash
# Step 1: Add ai-dev-kit as submodule
git submodule add https://github.com/RMS-Ltd/ai-dev-kit.git .ai-dev-kit

# Step 2: Checkout specific version
cd .ai-dev-kit
git checkout v0.6.6.10+13  # Or latest tag
cd ..

# Step 2b (BR-087): If packages/frameworks still has spaces in directory names,
# run once after copy/submodule sync (see BR-087):
# python3 "packages/frameworks/workflow-mgt/scripts/relocate_legacy_framework_dirs.py" \
#   --frameworks-root packages/frameworks

# Step 3: Copy frameworks to your project (slug directory names on current main)
cp -r .ai-dev-kit/packages/frameworks/workflow-mgt/* ./
cp -r .ai-dev-kit/packages/frameworks/kanban/* ./

# Step 3b: Installer venv dependencies (REQUIRED before RW install — BR-082)
source .venv/bin/activate   # if you use a venv
pip install 'pyyaml>=6.0'
python3 "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py" --check-deps

# Step 4: Run framework installers (REQUIRED - don't skip!)
# Preferred: orchestration wrapper (includes checkpoint + override support)
python3 "packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py" --project-root "."

# Manual fallback:
python "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py" --mode c --project-root "."
python3 "packages/frameworks/kanban/scripts/install_kanban_framework.py" --mode fresh
```

**⚠️ IMPORTANT:** The installers are **REQUIRED** - they configure frameworks for your project. Don't skip Step 4!

**Documentation:**
- [`framework-dependency-installation-guide.md`](docs/documentation/user-docs/framework-dependency-installation-guide.md#method-1-git-submodules-phase-1---available-now)
- [`EXISTING_PROJECT_ROLLOUT_CHECKLIST.md`](docs/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST.md) - Complete rollout checklist

### Method 3: CLI Tool (Coming Soon)

```bash
# Install CLI tool
pip install ai-dev-kit

# Initialize in your project
ai-dev-kit init

# Install frameworks
ai-dev-kit install workflow-mgmt@2.1.3
ai-dev-kit install kanban@2.1.0
```

**Documentation:**
- [`framework-dependency-cli-reference.md`](docs/documentation/user-docs/framework-dependency-cli-reference.md)

---

## 📦 Available Frameworks

| Framework | Version | Installation Guide |
|-----------|---------|-------------------|
| **Workflow Management** | 2.1.4 | [`workflow-mgt/README.md`](packages/frameworks/workflow-mgt/README.md) |
| **Kanban** | 2.1.0 | [`kanban/README.md`](packages/frameworks/kanban/README.md) |
| **Numbering & Versioning** | 2.0.0 | [`numbering-versioning/README.md`](packages/frameworks/numbering-versioning/README.md) |
| **Document Lifecycle** | 1.0.0 | [`doc-lifecycle/README.md`](packages/frameworks/doc-lifecycle/README.md) |
| **Debug Path** | 1.0.0 | [`debug-path/README.md`](packages/frameworks/debug-path/README.md) |

---

## 🤖 For AI Agents

**Agent Instructions:**

When installing frameworks in a project, follow these steps:

1. **Read the Main Installation Guide:**
   - Path: `docs/documentation/user-docs/framework-dependency-installation-guide.md`
   - This contains complete installation procedures

2. **Choose Installation Method:**
   - **GitHub Releases** (recommended): Use `install_package_from_release.py`
   - **Git Submodule**: Add ai-dev-kit as submodule, copy frameworks
   - **CLI Tool**: Use `ai-dev-kit install` (when available)

3. **Follow Framework-Specific Instructions:**
   - Each framework has a `README.md` with installation steps
   - **Important:** Use interactive installers (e.g., `install_kanban_framework.py`) - DO NOT manually copy from `docs/project-management/kanban/epics/`

4. **Run Framework Installers:**
   - **Workflow Management:** `install_release_workflow.py`
   - **Kanban:** `install_kanban_framework.py`
   - These installers handle configuration and setup automatically

5. **Verify Installation:**
   - Run validation scripts
   - Test framework functionality
   - Check configuration files

6. **Release Workflow (RW) and FR-060 (task token):**
   - In Cursor (or any assistant using your `.cursorrules` RW trigger), **do not** send `RW` alone. The same message must include a parseable **Epic/Story/Task** id (**FR-060**).
   - Examples: `RW E5S01T67`, `RW E5:S01:T67`; Kanban-init: `RW -k E5S01T01`; doc-only: `RW -d E5S01T02`.
   - Without a task token, the agent must **RW ABORTED** before any version bump. See [Release Workflow (agent execution)](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) (Step 1 branch safety; Steps 1.3–1.5 task token, releasable task, intent guard).
   - If `rw-config.yaml` has **`use_kanban: true`**, validators expect a real Kanban task document that matches the id you pass (e.g. `validate_rw_task_complete.py`).

7. **Reference Documentation:**
   - Use Cases: `framework-dependency-use-cases.md`
   - Integration: `framework-dependency-integration-guide.md`
   - Troubleshooting: `framework-dependency-troubleshooting-guide.md`

---

## 📋 Installation Checklist

- [ ] Read main installation guide
- [ ] Choose installation method (GitHub Releases recommended)
- [ ] Install framework packages
- [ ] Run framework-specific installers
- [ ] Configure framework settings
- [ ] Run validation scripts
- [ ] Test framework functionality
- [ ] Know that **RW** requires a task id in the same message (e.g. `RW E5S01T01`; **FR-060**)
- [ ] Update project documentation

---

## 🔗 Quick Links

- **Main Installation Guide:** [`docs/documentation/user-docs/framework-dependency-installation-guide.md`](docs/documentation/user-docs/framework-dependency-installation-guide.md)
- **Package Installation:** [`packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`](packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md)
- **Use Cases:** [`docs/documentation/user-docs/framework-dependency-use-cases.md`](docs/documentation/user-docs/framework-dependency-use-cases.md)
- **FAQ:** [`docs/documentation/user-docs/framework-dependency-faq.md`](docs/documentation/user-docs/framework-dependency-faq.md)
- **Troubleshooting:** [`docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md`](docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md)

---

## ✅ Verification

After installation, verify everything works:

```bash
# Test Workflow Management
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py

# Test Release Workflow (same message must include E…S…T… — FR-060)
# Example: RW E5:S01:T01 or RW E5S01T01 in your AI assistant

# Test Kanban
cd ../kanban
python3 scripts/install_kanban_framework.py --help
```

---

**Last Updated:** 2026-03-30  
**Repository:** https://github.com/RMS-Ltd/ai-dev-kit  
**Documentation:** `docs/documentation/user-docs/`

