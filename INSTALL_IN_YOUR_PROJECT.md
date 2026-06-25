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

**Acquisition failures (FR-111):** Before running installers, validate the lean vendor tree. GHCR/docker/git failures without a Python wrapper use prose in the troubleshooting guide (`ADK-I05.E01`–`E06` lookup); Python preflight emits `ADK-I05.E03`–`E05`:

```bash
python3 vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/verify_vendor_tree.py \
  --vendor-root vendor/ai-dev-kit
```

**Brownfield:** The same `ADK-I02.*` / `ADK-I03.*` installer codes apply when running RW or Kanban installers on existing repositories — not only greenfield.

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

## Lean vendor install (`greenfield-install/`) — FR-110

**Recommended for greenfield adopters** who vendor AI Dev Kit under `vendor/` (or `.ai-dev-kit/`): install **only the framework packages**, not the full maintainer repository (~27 MiB tracked vs **~11 MiB** lean).

| What adopters need | What they do **not** need |
| ------------------ | ------------------------ |
| `packages/frameworks/**` (includes `workflow-mgt/scripts/`, `kanban/scripts/`) | Repo-root `scripts/` (Notion/KB maintainer tooling) |
| Short `README` at vendor root | `docs/project-management/` (ai-dev-kit kanban) |
| Published install docs (link below) | `portal/`, changelog archive, `tests/` |

### Target layout ([FR-110](docs/kanban/fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md))

The repo ships **`greenfield-install/`** — vendor or copy **that directory** (not the full maintainer tree):

```
vendor/ai-dev-kit/                 # contents of greenfield-install/ at a release tag
├── README.md
├── FOOTPRINT.md                   # measured MiB budget
└── packages/frameworks/
    ├── workflow-mgt/
    └── kanban/
```

Install from your **host project root** (framework paths relative to where you placed the vendor tree):

```bash
python3 "vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py" \
  --project-root "." \
  --vendor-root "vendor/ai-dev-kit" \
  --non-interactive \
  --config vendor/ai-dev-kit/packages/frameworks/workflow-mgt/config/install-profile.example.yaml
```

**One command (FR-135 guided v2):** the install profile records adoption path, SQLite backend, UKW trigger bundle, kanban-completed ledger init, and Install RC — no post-install manual step banner. Customize `install-profile.yaml` from the example under `packages/frameworks/workflow-mgt/config/`. Choice reference: [install-profile.example.yaml](packages/frameworks/workflow-mgt/config/install-profile.example.yaml).

**Legacy non-interactive RW (mode C):** pass a pre-filled YAML so the orchestrator does not prompt for project metadata:

```bash
python3 "vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py" \
  --project-root "." \
  --vendor-root "vendor/ai-dev-kit" \
  --non-interactive \
  --config config/greenfield-rw-install-input.yaml
```

The orchestrator resolves installer scripts under `--vendor-root` when `packages/frameworks/` is not present at the project root (no manual `packages` symlink required). A project-root `packages/` tree, if present, takes precedence.

**Lean RW expectation:** greenfield mode C scaffolds `rw-config.yaml`, `.cursorrules`, and version/changelog stubs — it does **not** copy full `workflows/` YAML into your repo (those remain under the vendor tree). Validators use `rw-config.yaml` `scripts_path`.

**Adopter scope:** completing the greenfield install exercise does not require adopting ADK template kanban as your operational PM layer. Projects with legacy kanban may defer integration per [FR-081](docs/kanban/fbu/FR-081-brownfield-modular-adopter-integration.md) (see [UXR-025](docs/kanban/fbu/UXR-025-starborn-legacy-greenfield-install-diary.md) / [triage matrix](docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)).

Preflight (recommended before first install):

```bash
python3 vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/verify_vendor_tree.py \
  --vendor-root vendor/ai-dev-kit
```

### Acquire the lean tree

**Clean working tree:** `git submodule add` requires a committed `.gitmodules` and clean index. After wiping or partially deleting vendor paths, run `git status` and restore or commit before submodule add ([UXR-025](docs/kanban/fbu/UXR-025-starborn-legacy-greenfield-install-diary.md) F1).

**Disk-constrained hosts:** prefer the **release tarball** (item 2) over sparse clone when free space is tight — tarball extract is ~1–2 MiB compressed / ~10 MiB expanded vs full git pack history (UXR-025 F2).

1. **Release tarball (recommended when disk is tight or git is blocked):** download `greenfield-install-v{semver}.tar.gz` + matching `.sha256` from a [release tag](https://github.com/RMS-Ltd/ai-dev-kit/releases) (FR-110-F5 / [ADR-021](docs/architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md)). **Verify integrity before extract** ([FR-062](docs/kanban/fbu/FR-062-github-release-installation-experience.md)):

   ```bash
   gh release download v0.4.1063 --repo RMS-Ltd/ai-dev-kit \
     -p 'greenfield-install-v0.4.1063.tar.gz' \
     -p 'greenfield-install-v0.4.1063.tar.gz.sha256' -D /tmp/adk-dl
   shasum -a 256 -c /tmp/adk-dl/greenfield-install-v0.4.1063.tar.gz.sha256
   # Expected: greenfield-install-v0.4.1063.tar.gz: OK
   # Linux: sha256sum -c /tmp/adk-dl/greenfield-install-v0.4.1063.tar.gz.sha256
   mkdir -p vendor/ai-dev-kit
   tar -xzf /tmp/adk-dl/greenfield-install-v0.4.1063.tar.gz \
     -C vendor/ai-dev-kit --strip-components=1
   python3 vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/verify_vendor_tree.py \
     --vendor-root vendor/ai-dev-kit
   ```

   Pin `v0.4.1063` tarball SHA-256: `d7519a0642b572eece67c20b05ace026f742b91caf9a07f9901fe39a17423131` (cross-check against the `.sha256` file on the release).

2. **Sparse submodule:** submodule `RMS-Ltd/ai-dev-kit` and cone only `greenfield-install/` (needs adequate disk for git objects):

   ```bash
   git submodule add https://github.com/RMS-Ltd/ai-dev-kit.git vendor/ai-dev-kit
   cd vendor/ai-dev-kit
   git sparse-checkout init --cone
   git sparse-checkout set greenfield-install
   ```

3. **Copy:** extract or copy `greenfield-install/` from a release tag into `vendor/ai-dev-kit/` (same bytes as tarball).

4. **GitHub Container Registry (alternate):** when submodules are blocked, pull the lean tree from `ghcr.io` and copy into `vendor/ai-dev-kit/` (same bytes as `greenfield-install/`; see [Packages](https://github.com/RMS-Ltd/ai-dev-kit/packages)):

   ```bash
   # Replace v0.4.1063 with the external SemVer core from the release you are pinning.
   docker pull ghcr.io/rms-ltd/ai-dev-kit-greenfield:v0.4.1063
   mkdir -p vendor/ai-dev-kit
   cid=$(docker create ghcr.io/rms-ltd/ai-dev-kit-greenfield:v0.4.1063)
   docker cp "$cid:/opt/adk/." vendor/ai-dev-kit/
   docker rm "$cid"
   ```

   Optional digest pin (strongest integrity): `docker pull ghcr.io/rms-ltd/ai-dev-kit-greenfield@sha256:<digest>` — inspect the digest on the [Packages](https://github.com/RMS-Ltd/ai-dev-kit/pkgs/container/ai-dev-kit-greenfield) page for your tag.

5. **Legacy sparse path:** `git sparse-checkout set packages/frameworks` still works on older tags; prefer `greenfield-install/` on current tags.

6. **Update upstream (productized — FR-129):** Prefer the update command over manual tag checkout when your project has `.ai-dev-kit.yaml`:

   ```bash
   # Bootstrap manifest after first install (once)
   python vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/update_adk_packages.py \
     init-manifest --channel git --target-tag v0.4.1144

   # Check for a newer release
   python vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/update_adk_packages.py \
     check --target-tag v0.4.1144+1

   # Git vendor submodule: fetch + checkout tag (vendor packages only; host scaffold unchanged)
   python vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/update_adk_packages.py \
     update --target-tag v0.4.1144+1

   # Tarball / CI fixture path: sync from a fresh vendor tree without git
   python vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/update_adk_packages.py \
     update --target-tag v0.4.1144+1 --source-vendor /path/to/fresh/vendor-tree
   ```

   After update, review the **host scaffold report** (`.cursorrules`, `rw-config.yaml`, `.claude/commands/*`, `CLAUDE.md`, `AGENTS.md`) — these are never auto-overwritten. Post-update verification runs `verify_vendor_tree` automatically.

   **Legacy manual path:** `cd vendor/ai-dev-kit && git fetch --tags && git checkout tags/v0.4.1063` (use [latest release](https://github.com/RMS-Ltd/ai-dev-kit/releases)); for registry pins, `docker pull ghcr.io/rms-ltd/ai-dev-kit-greenfield:v0.4.1063` (or newer SemVer core). Re-download and verify the matching `.sha256` when using tarballs.

**Disk budget:** ~10–11 MiB for `greenfield-install/` (see `FOOTPRINT.md` in-tree) + git pack history (sparse checkout reduces working tree).

**Maintainers:** refresh the curated tree with `python scripts/sync_greenfield_install.py` before release; CI runs `--check` drift guard.

---

## 🚀 Installation Methods

## Greenfield Install Specification (Wave 1 lock)

This section defines the canonical **greenfield** path for new or template projects per **FR-080** (E6:S09:T01).

**Language first (template repos):** After creating a repository from the GitHub template, complete **[Step 0 — Select language variant](docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md#step-0-select-language-variant-uk--us-english)** (UK/US English → `ai-dev-kit-config.yaml`) before other setup steps. See [FR-006](docs/project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) Phase 1.

**Language first (RW installer):** `install_release_workflow.py` prompts for UK/US English **before** RW path questions and writes `ai-dev-kit-config.yaml` (separate from `rw-config.yaml`). Flags: `--language en-GB|en-US`, `--non-interactive` (default UK English), `--force` (overwrite existing localisation config). Re-runs skip the write if the file exists unless `--force` is set.

**Maintainer editor profile (FR-121 / optional):** After mode/kanban questions, the RW installer may prompt for `maintainer_editor_profile`. Git remains maintainer KB SoT in every case.

**Adopter documentation profile (FR-141 / default):** Greenfield and private-application installs default `documentation_surfaces.adopter_public.sot` to **`git`** (in-repo Markdown; no `portal/` tree). Opt into Docusaurus only when you have portal publishing infrastructure:

| `adopter_public.sot` | When to use | Requirements |
| -------------------- | ----------- | ------------ |
| `git` | Default — private repos, SBL-class adopters, no public site | None |
| `docusaurus` | Public docs site via Docusaurus | `portal/` tree + `allowlist_ref` (e.g. `portal/docusaurus.config.js`) |

Flags: `--adopter-public-sot {git,docusaurus}` (non-interactive default: `git`). Greenfield orchestrator forwards the same flag. Install RC `rc-docs-schema` validates semantic coherence (git passes without portal; Docusaurus requires allowlist + portal on disk).

| Profile | Effect |
| ------- | ------ |
| `none` | Default — no Obsidian files (`--non-interactive` uses this) |
| `obsidian-personal` | Quick-start doc; entire `.obsidian/` gitignored |
| `obsidian-team` | Stable `.obsidian/` JSON in git; workspace/cache/plugins gitignored |

Flags: `--maintainer-editor-profile {none,obsidian-personal,obsidian-team}`. Greenfield orchestrator forwards the same flag. Detail: [`docs/maintainer/OBSIDIAN.md`](docs/maintainer/OBSIDIAN.md).

- Policy anchor: [ADR-003](docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- Brownfield is separate: see [Brownfield adoption (existing repositories)](#brownfield-adoption-existing-repositories) below; policy [FR-081](docs/kanban/fbu/FR-081-brownfield-modular-adopter-integration.md); planning [IPP-E6S09T02](docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md)
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

Normative contract: [ECC ↔ ADK integration specification](docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md). Brownfield adopters: same optional surface per [ADR-003](docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) and [FR-081](docs/kanban/fbu/FR-081-brownfield-modular-adopter-integration.md).

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

After `install_kanban_framework.py --mode fresh`, the installer ships the **Kanban v3.2.0 Small-tier** catalog (E01–E10): FR/BR/UXR intake lives under **E04:S02–S04**, not standalone Epic 5–7. Epic 5 is **Project Architecture**. Verify with `validate_kanban_v32_fingerprint.py --strict --kanban-path docs/kanban`.

On-disk layout is typically:

```text
docs/kanban/
  kboard.md                    # sole active MoSCOW board (ADR-018)
  kanban-structure.md
  epics/epic-01/epic-01.md     # Repository Infrastructure & Maintenance (v3.2)
  epics/epic-04/story-02-fr-implementation.md
  epics/epic-05/epic-05.md     # Project Architecture (not v1 FR Implementation)
```

Per [ADR-018](docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md), fresh installs emit **`kboard.md` only** — no `fbuboard.md` or `kanban-board.md` redirect stubs.

**Legacy dual-board brownfield:** If your project still uses **`fbuboard.md`** or **`kanban-board.md`** as an active board, migrate per `packages/frameworks/kanban/guides/single-board-migration-adopter-note.md` before upgrading framework packs.

Mode **C** of `install_release_workflow.py` **detects** this layout and pre-fills matching defaults (press Enter to accept). If detection finds files, you should see match previews instead of zero-match warnings.

**Sign-off (BR-086 / BR-105):** Automated install sign-off accepts kanban v3.2 / UXR-014 patterns (`story-{story:02d}`, `T{task:02d}`) as well as book T03 patterns (`story-{story:03d}`, `t{task:02d}`). No manual Step 4.1 edit is required for either convention.

### Greenfield `version_file` scaffold (BR-088 / GitHub #18)

Greenfield adopters often have **no `src/` tree** when mode C runs. After `rw-config.yaml` is written, the installer **prompts** (default **Yes**) in interactive mode:

> Create minimal version file at `src/your_app/version.py` (initial `0.1.1.1+1`)?

- **Yes** — creates parent directories and a `version.py` stub with `RC.EPIC.STORY.TASK+BUILD` constants (`VERSION_STRING` included).
- **No** — install reports **INSTALLATION PARTIAL** with copy-paste `mkdir` / versioning guidance (not **SUCCESS** until the file exists).

Use `--dry-run` to preview without writing the stub. Book T03 Step 3.2 manual scaffold remains valid if you declined the prompt.

**Non-interactive (`--non-interactive`, `--config`, or `--locale`):** the installer **does not prompt** for `version_file` or `CHANGELOG.md`. Missing paths receive deterministic stubs automatically (same defaults as accepting the interactive prompt). Unattended / CI installs should pass `--non-interactive` and may omit pre-creating those files.

Copy-paste fallback if you skip the installer prompts:

```yaml
use_kanban: true
kanban_root: docs/kanban
# Lowercase fresh install (UXR-017 / book T03 Step 4.1) — installer mode C detects unpadded epic-N:
epic_doc_pattern: epics/epic-{epic}/epic-{epic}.md
story_doc_pattern: epics/epic-{epic}/story-{story:03d}-*.md
task_doc_pattern: epics/epic-{epic}/story-{story:03d}/t{task:02d}-*.md
kanban_board: kboard.md
fbu_root: docs/kanban/fbu
# Capital-case fresh install (legacy) — installer still supports Epic-/Story- paths:
# epic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md
# story_doc_pattern: epics/Epic-{epic}/Story-{story:03d}-*.md
```

Mode C also **detects** `fbu/` when present and refuses to persist zero-match epic/story patterns while kanban files exist (BR-084).

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

### Wave 4 — Install telemetry and feedback (**FR-078** / **FR-079**)

- **[FR-078](docs/kanban/fbu/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md)** — install **event** logging (COMPLETE): set `AI_DEV_KIT_INSTALL_LOG_PATH` before installers run; logs land under `logs/ai-dev-kit/install/`.
- **[FR-079](docs/kanban/fbu/FR-079-install-feedback-submission-path-and-governance.md)** — feedback submission (COMPLETE): package install evidence for maintainers via the documented CLI / submission workflow.
- **[FR-108](docs/kanban/fbu/FR-108-install-setup-error-code-registry-and-emission.md)** — stable `ADK-I*` error codes in console output (see [troubleshooting § install error codes](docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md#install-error-codes-adk)).

**Adopter practice:** Capture the SemVer banner line + any `ADK-*` code + install log path or [install receipt](docs/documentation/user-docs/install-receipt-reference.md). **Do not paste** secrets, tokens, or private URLs.

---

## Adopter Path Selector (mature repositories)

**Policy:** [ADR-003](docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) (host sovereignty) · [ADR-030](docs/architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md) (three-path model) · [UXR-029](docs/kanban/fbu/UXR-029-adk-install-path-experiment.md) · **Evidence:** [SBL attempt 09 synthesis](docs/knowledge/articles/greenfield-brownfield-selective-adoption-sbl-attempt-09.md) · [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)

Mature adopters face more than a greenfield vs brownfield binary. Use this selector **before** installers when the repo has established `docs/`, PM/kanban, or release history.

| Entry | Situation | Path |
|-------|-----------|------|
| Empty or template repo | Little structure to preserve | [Greenfield Install Specification](#greenfield-install-specification-wave-1-lock) (FR-080) |
| Existing repo, topology already ADK-aligned | Continuity-critical; incremental hops suffice | **Path 1** — [Brownfield in-place](#path-1--brownfield-in-place-arm-a) (FR-081) |
| Existing repo, PM/kanban drift or validator failures | Full git history; wrong legacy topology | **Path 2** — [Shell + selective migration](#path-2--shell--selective-migration-arm-b) (**default** for messy mature + git) |
| Cannot wipe PM yet | Must run dual-tree for a bounded period | **Path 3** — [Strangler coexist](#path-3--strangler-coexist-sub-mode) |

**Cross-cutting (all paths):** SQLite before first RW · ADK documentation end-schema · Install RC checklist · kit-owned KMA (0 ad-hoc scripts at RC) · comprehension test (state kanban root, docs authority, version truth, and what was **not** performed — *restore ≠ migrate*).

### Path 1 — Brownfield in-place (Arm A)

**For:** structurally aligned repos; production tags; continuity-critical.

**Procedure:** Run installers in place; wire `rw-config.yaml`; `import_legacy.py` when moving from YAML registry; incremental path fixes. Kanban: **KMA** only when legacy corpus exists but topology is otherwise compatible.

**Programme controls:** fynd.deals, Confidentia (Arm A experiment — [UXR-029](docs/kanban/fbu/UXR-029-adk-install-path-experiment.md)).

### Path 2 — Shell + selective migration (Arm B)

**For:** PM/KB/kanban drift; duplicate-epic confusion; in-place mapping failed or was abandoned (see [#51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51)).

### Migrate (default) {#migrate-default}

**One journey — default depth L1.** Follow the layered sequence below with kit KMA only. You are **done** when Install RC strict PASS + `COMPREHENSION.md` + **zero** ad-hoc migration scripts. L2/L3 optimization is **opt-in** after ship ([depth guide](packages/frameworks/kanban/guides/KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md)).

1. Archive legacy PM/docs (git preserves history).
2. Run orchestrator: `install_greenfield_path.py --adoption-path arm-b --init-sqlite --run-install-rc`.
3. Complete layered steps 0–4 (vendor → kanban fresh Core).
4. **KMA** blind first pass on archive only — `/kma` or [kma.md](.claude/commands/kma.md); sign-off before writes.
5. Copy [COMPREHENSION template](packages/frameworks/workflow-mgt/templates/COMPREHENSION_TEMPLATE.md) → repo-root `COMPREHENSION.md` (depth **L1** default).
6. Install RC strict PASS → first domain `RW`.

**Done checklist:** RC PASS · comprehension filled · 0 ad-hoc `*kma*` scripts · legacy archive read-only · single `kanban_root`.

**Procedure (detail):**

1. Archive legacy PM/docs (e.g. `docs-pre-ai-dev-kit/`) — git preserves history.
2. Lean vendor install ([FR-110](#lean-vendor-install-greenfield-install--fr-110)).
3. [Layered install sequence](#layered-install-sequence-phase-0) (not monolithic `mode c` alone).
4. **KMA** — kit-owned first pass on archived legacy only ([`DUPLICATE_EPIC_POLICY`](packages/frameworks/kanban/guides/DUPLICATE_EPIC_POLICY.md), [`LEGACY_KANBAN_MIGRATION`](packages/frameworks/kanban/guides/LEGACY_KANBAN_MIGRATION.md)). Do **not** pre-author a target E/S tree or load a held-out reference into the KMA agent ([attempt-10 preflight](adk-install-into-sbl/attempt-10/README.md) · [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)).
5. Post-KMA scoring and minimal operator tweaks (install experiments) happen **after** kit output — not as input to the first pass.
6. Eliminate dual-tree; single canonical `kanban_root`.
7. First RW only after Install RC + sign-off.

**Exemplars:** Starborn attempt 09 (historical operator-assisted KMA) — [attempt-09](adk-install-into-sbl/attempt-09/README.md) · attempt 10 (blind kit KMA eval) — [attempt-10](adk-install-into-sbl/attempt-10/README.md).

### Path 3 — Strangler coexist (sub-mode)

**For:** cannot wipe PM layer yet.

**Rules:** Declare canonical `kanban_root` immediately; legacy tree read-only + redirect stubs; time-box coexistence; **block install-complete** until a single active root; plan mandatory **eliminate** phase ([ADR-030](docs/architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md)).

### Layered install sequence (Phase 0)

Target orchestrator ordering for **Path 2** (and full-stack brownfield). Orchestrator flags: `install_greenfield_path.py --adoption-path arm-b --init-sqlite --run-install-rc` ([E06:S09:T36](docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md)):

```text
0  vendor + venv
1  rw-config skeleton
2  sqlite — import_legacy.py or init empty .adk/release-state.db
3  RW installer scaffold (install_release_workflow.py)
3½ documentation schema profile — [DOCUMENTATION_SCHEMA.md](docs/governance/standards/DOCUMENTATION_SCHEMA.md)
3c UKW / cursorrules wiring
4  kanban fresh — install_kanban_framework.py --mode fresh --catalog v4
5  KMA — kit first pass on archived legacy only (no pre-authored target E/S tree)
5b post-KMA scoring / tweaks — after kit output (install eval programmes only)
6  sign-off + [Install RC checklist](docs/governance/standards/install-rc-checklist.md)
7  first RW
```

See [release-state-sqlite-mode.md](packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md) for step 2 · [adopter-install-attempt-preflight.md](docs/guides/adopter-install-attempt-preflight.md) for attempt 10 / brownfield prep.

---

## Brownfield adoption (existing repositories)

**Policy anchor:** [ADR-003 – Greenfield vs Brownfield adoption](docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · [ADR-030](docs/architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md) · **FR-081** · **IPP:** [IPP-E6S09T02](docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md)

Use this section when the **host project already has** its own layout, tooling, and governance. The host team owns architecture; AI Dev Kit supplies **modular surfaces** and **contracts**—not a mandatory copy of the ai-dev-kit reference repository tree.

**Start with:** [Adopter Path Selector](#adopter-path-selector-mature-repositories) when the repo is mature (not empty/template).

### When to use brownfield vs greenfield

| Situation | Path |
|-----------|------|
| New or template repo with little structure to preserve | [Greenfield Install Specification](#greenfield-install-specification-wave-1-lock) (FR-080) |
| Existing codebase — aligned topology, in-place install | **Path 1** — this section (FR-081) |
| Existing codebase — PM/kanban drift, failed in-place migration | **Path 2** — [Shell + selective migration](#path-2--shell--selective-migration-arm-b) |

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
  │     └─ RW + Kanban (KMA for legacy corpus, or --mode fresh for empty root)
  └─ Need full ADK governance stack?
        └─ Full stack (RW + Kanban + versioning policy + optional doc-lifecycle)
```

### Per-surface adoption matrix

Legend: **R** = Required · **O** = Optional · **Rec** = Recommended · **N/A** = Not applicable for that profile

| Profile | Release Workflow (RW) | Kanban | Versioning policy | Doc lifecycle | Validators when RW enabled |
|---------|----------------------|--------|-------------------|---------------|----------------------------|
| **RW-only** | **R** — `install_release_workflow.py`, `rw-config.yaml`, `.cursorrules` RW section | **O** — set `use_kanban: false` | **Rec** — host `version.py` + schema doc | **O** | Branch safety, changelog format, version bump; FR-060 task token guards **only if** you maintain task docs |
| **RW + Kanban** | **R** | **R** — host epics via **KMA** or **canonical templates** via `--mode fresh` | **Rec** | **O** | Above + `validate_rw_task_complete.py`, `validate_rw_task_intent.py` when releasing with task docs |
| **Full stack** | **R** | **R** | **R** — adopt [dev-kit-versioning-policy](docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md) or mapped equivalent | **O** | Full RW Step 7 four-surface reconciliation (`kboard` + task + FBU docs; sole active board per [ADR-018](docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md)) |

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

### Agentic legacy migration (KMA)

When you have an **existing legacy kanban corpus** (non-canonical story naming, inline tasks, domain epics), use the **Kanban Migration Agent (KMA)** — not the deprecated installer migration modes.

**Agentic-first:** The agent owns **read → reason → propose → sign-off → synthesise**. Python scripts (`kma_ingest.py`, `validate_migration_map.py`) are **optional advisory helpers only** — not a migration engine.

1. Trigger **`KMA`** or **`/kma`** in your IDE agent session.
2. Read [ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md](packages/frameworks/kanban/guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md) and follow [kanban-migration-agent-execution.md](packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md).
3. Emit [DUPLICATE_EPIC_POLICY.md](packages/frameworks/kanban/guides/DUPLICATE_EPIC_POLICY.md) matrix in Step 2; draft `migration-proposal.md` from the template.
4. Review and sign off on the proposal before any file writes (**blocking gate**).

**Policy:** [ADR-028](docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md) · [FR-127](docs/kanban/fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md). Installer modes `migration`, `hybrid`, and `canonical_adoption` are **gated** (exit 2) with a pointer to KMA.

**Evidence:** Starborn Legacy attempt 06 — automated pipeline detected **0** stories; agentic KMA migrated **72** stories. Regression benchmark: `pytest tests/kanban/test_kma_agentic_vs_automated.py` (see [migration-tool-pipeline-deprecation.md](packages/frameworks/kanban/guides/migration-tool-pipeline-deprecation.md)).

### Adding Kanban later

- **Legacy corpus:** use **KMA** (section above).
- Use **`--mode fresh`** only for greenfield-style **empty** Kanban roots; the installer prints a brownfield warning when you select fresh on an existing repo.
- Use **`--mode update`** to refresh paths on an existing ADK v3.2 layout.
- **Empty repo:** `--mode fresh` creates the Kanban skeleton (`epics/` included) before validation — **`--force` is not required** to bypass missing-directory checks on first install (see [BR-080](docs/kanban/fbu/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md)).
- **Install outcome:** When `kboard.md` and `epics/` are created, the installer reports **`Final status: SUCCESS`** (not PARTIAL solely because board files were absent during pre-install validation). `kanban-structure.md` is copied from `templates/KANBAN_STRUCTURE_TEMPLATE.md` (BR-078).
- **Epic 22/23 templates:** Fresh install resolves `templates/Epic-22/Epic-22.md` and `templates/Epic-23/Epic-23.md` (or `templates/epics/Epic-{n}-*.md`) — not placeholder stubs (BR-079).
- Installer installs **canonical templates**, not ai-dev-kit maintainer epics—see [kanban/README.md](packages/frameworks/kanban/README.md).

```bash
# Empty Kanban root only — legacy corpus → use KMA (Agentic legacy migration above)
python3 "packages/frameworks/kanban/scripts/install_kanban_framework.py" \
  --mode fresh --kanban-path "docs/kanban"
```

Align `kanban_root` in `rw-config.yaml` with your actual path before RW Step 7.

### Migrating from `docs/project-management/kanban/` (FR-118)

If your project still uses the legacy book-repo path:

1. `git mv docs/project-management/kanban docs/kanban` (preserve history).
2. Set `kanban_root: docs/kanban` and `fbu_root: docs/kanban/fbu` in `rw-config.yaml`.
3. Run the mechanical rewriter (optional):  
   `python packages/frameworks/workflow-mgt/scripts/kanban/apply_kanban_root_migration_fr118.py --apply`
4. Re-run Kanban install validation:  
   `python3 packages/frameworks/kanban/scripts/install_kanban_framework.py --mode update --kanban-path docs/kanban`

### Worked example: partial adoption (anonymized)

**Host:** `acme-api` — five-year-old Python API monorepo; Jira for PM; `docs/` already contains architecture ADRs.

**Goal (year 1):** Agent-driven releases with immutable changelogs; **no** in-repo Kanban yet.

**Steps taken:**

1. Added submodule `.ai-dev-kit` → copied `workflow-mgt/` to `tools/workflow_mgt/`.
2. Ran `install_release_workflow.py --mode a`; set `version_file: src/acme_api/version.py`, `scripts_path: tools/workflow_mgt/scripts`, `use_kanban: false`.
3. Created minimal task doc only for release attribution (`E3:S02:T04`) under existing `docs/eng/tasks/`.
4. Validators: branch + changelog only; skipped task-complete validators until Kanban Phase 2.
5. First RW: `RW E3:S02:T04` on `epic/3-platform`.

**Deferred (host choice):** In-repo Kanban (`FR-081` Phase 2) — RW-only was sufficient for year 1.

### Tradeoffs and platform status

| Topic | Status | Track in |
|-------|--------|----------|
| GitHub Release framework tarballs | **Available** | [FR-062](docs/kanban/fbu/FR-062-github-release-installation-experience.md) — `install_package_from_release.py` |
| Install logging + feedback | **Available** | [FR-078](docs/kanban/fbu/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md), [FR-079](docs/kanban/fbu/FR-079-install-feedback-submission-path-and-governance.md), [install-receipt-reference.md](docs/documentation/user-docs/install-receipt-reference.md) |
| Install error codes | **Available** | [FR-108](docs/kanban/fbu/FR-108-install-setup-error-code-registry-and-emission.md), [FR-111](docs/kanban/fbu/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md) (registry **1.1.0**) |
| Intelligent epic matching | Document only | Kanban `canonical_adoption`; [FR-011](docs/kanban/fbu/FR-011-intelligent-epic-matching-ai-assisted-canonical-adoption.md) |
| npm/pip framework packages | Future | Phase 3 in [framework-dependency-installation-guide.md](docs/documentation/user-docs/framework-dependency-installation-guide.md) |

---

### Package installation methods (greenfield and brownfield)

**Two-phase reminder:** Every method below has an **acquisition** step (files on disk) and a separate **configuration** step (`install_release_workflow.py` and optionally `install_kanban_framework.py`). Copying or downloading frameworks alone does **not** wire RW — see [installation paths matrix](docs/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation/installation-paths-matrix.md).

### Method 1: GitHub Releases (Recommended - Available Now)

Install framework packages directly from GitHub Releases:

```bash
# From your project root — script ships inside workflow-mgt after you vendor or clone ai-dev-kit:
python3 "packages/frameworks/workflow-mgt/scripts/install_package_from_release.py" \
    workflow-mgt 2.3.0 \
    --repo RMS-Ltd/ai-dev-kit \
    --install-dir packages/frameworks

# Kanban example (same script):
# python3 "packages/frameworks/workflow-mgt/scripts/install_package_from_release.py" \
#     kanban 2.2.0 --repo RMS-Ltd/ai-dev-kit --install-dir packages/frameworks

# Step 2 (REQUIRED): run RW installer — acquisition alone is not configured install
python3 "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py" \
    --check-deps
python3 "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py" \
    --mode c --project-root "."
```

**Documentation:**
- [`PACKAGE_INSTALLATION_GUIDE.md`](packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md) - Complete package installation guide
- [`install-receipt-reference.md`](docs/documentation/user-docs/install-receipt-reference.md) - JSON install receipt written under `logs/ai-dev-kit/install/` when your project has `.ai-dev-kit.yaml` (FR-062)

### Method 2: Git Submodule (Available Now)

**Prefer the [lean vendor path](#lean-vendor-install-greenfield-install--fr-110)** (framework packages only). Full-repo submodule works but ships maintainer corpus you will not run.

Add ai-dev-kit as a Git submodule, copy frameworks, then run installers:

```bash
# Step 1: Add ai-dev-kit as submodule
git submodule add https://github.com/RMS-Ltd/ai-dev-kit.git .ai-dev-kit

# Step 2: Checkout specific version (SemVer tag from GitHub Releases)
cd .ai-dev-kit
git fetch --tags
git checkout tags/v0.4.1063   # example; use latest from https://github.com/RMS-Ltd/ai-dev-kit/releases
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

### Method 3: CLI Tool (Available from source; PyPI planned)

```bash
# Clone ai-dev-kit, then from that repo root:
git clone https://github.com/RMS-Ltd/ai-dev-kit.git
cd ai-dev-kit
pip install -e .

# In your target project:
ai-dev-kit init
ai-dev-kit install workflow-mgmt
ai-dev-kit install kanban

# Step 2 (REQUIRED): CLI places frameworks but does NOT run RW installer
pip install 'pyyaml>=6.0'
python3 "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py" \
    --check-deps
python3 "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py" \
    --mode c --project-root "."
```

PyPI distribution (`pip install ai-dev-kit` without a clone) is planned; until then use **`pip install -e .`** from a checkout.

**Documentation:**
- [`framework-dependency-cli-reference.md`](docs/documentation/user-docs/framework-dependency-cli-reference.md)
- [`framework-dependency-installation-guide.md`](docs/documentation/user-docs/framework-dependency-installation-guide.md#method-2-cli-tool-phase-2---available-now)

---

## 📦 Available Frameworks

| Framework | Version | Installation Guide |
|-----------|---------|-------------------|
| **Workflow Management** | 2.3.0 | [`workflow-mgt/README.md`](packages/frameworks/workflow-mgt/README.md) |
| **Kanban** | 2.2.0 | [`kanban/README.md`](packages/frameworks/kanban/README.md) |
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

2. **Choose Installation Method (acquisition):**
   - **GitHub Releases** (recommended): `install_package_from_release.py`
   - **Git Submodule**: Add ai-dev-kit as submodule, copy frameworks
   - **CLI Tool**: `ai-dev-kit install` (from source via `pip install -e .` on ai-dev-kit checkout)

3. **Run configuration installers (required after acquisition):**
   - **Workflow Management:** `install_release_workflow.py` (modes `a` / `b` / `c`)
   - **Kanban (if needed):** `install_kanban_framework.py`
   - **Greenfield orchestrator (optional):** `install_greenfield_path.py`
   - Acquisition alone does **not** produce `rw-config.yaml` or patch `.cursorrules`

4. **Follow Framework-Specific Instructions:**
   - Each framework has a `README.md` with installation steps
   - **Important:** Use interactive installers — DO NOT manually copy maintainer epics from `docs/kanban/epics/`

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
- [ ] Choose acquisition method (GitHub Releases recommended)
- [ ] Acquire framework packages (copy, submodule, release tarball, or CLI)
- [ ] Run **configuration** installers (`install_release_workflow.py` + Kanban if needed)
- [ ] Set `AI_DEV_KIT_INSTALL_LOG_PATH` before installers (recommended)
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
- **Installation paths matrix:** [`installation-paths-matrix.md`](docs/kanban/epics/epic-02/story-14-workflow-management-package-installation-evaluation/installation-paths-matrix.md)

---

## ✅ Verification

After installation, verify from **your project root** (paths from `rw-config.yaml`):

```bash
# Resolve scripts_path from rw-config.yaml — adjust if you vendored elsewhere:
WF_SCRIPTS='packages/frameworks/workflow-mgt/scripts'

python3 "${WF_SCRIPTS}/validation/validate_branch_context.py" --strict
python3 "${WF_SCRIPTS}/validation/validate_changelog_format.py"

# If use_kanban: true and you release with task docs:
# python3 "${WF_SCRIPTS}/validation/validate_rw_task_complete.py" --requested "E5:S01:T01"

# Kanban installer help (sanity check)
python3 "packages/frameworks/kanban/scripts/install_kanban_framework.py" --help
```

Test Release Workflow in your AI assistant (same message must include E…S…T… — **FR-060**): e.g. `RW E5:S01:T01` or `RW E5S01T01`.

---

**Last Updated:** 2026-06-05 (E02:S14 install doc refresh — paths matrix cross-check)  
**Repository:** https://github.com/RMS-Ltd/ai-dev-kit  
**Documentation:** `docs/documentation/user-docs/`

