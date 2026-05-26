# Installing AI Dev Kit Frameworks in Your Project

**Quick Start Guide for Agents and Developers**

This document provides a clear entry point for installing AI Dev Kit frameworks into your project. All installation documentation is available in the `ai-dev-kit` repository.

---

## 🎯 Quick Answer

**Yes, all installation documentation is available in the ai-dev-kit repository.** When you point your project at the ai-dev-kit repo, agents can find and follow complete installation instructions.

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

Other guides under [`docs/documentation/user-docs/`](docs/documentation/user-docs/) include a short **Scope (greenfield vs brownfield)** section where relevant, pointing back here and to ADR-003 / FR-081.

---

## 🚀 Installation Methods

## Greenfield Install Specification (Wave 1 lock)

This section defines the canonical **greenfield** path for new or template projects per **FR-080** (E6:S09:T01).

- Policy anchor: [ADR-003](docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- Brownfield is separate: [FR-081](docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)
- Planning artifact: [IPW-E6S09T01](docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)

### Optional harness layer (ECC)

ADK adoption does **not** require [ECC](https://github.com/affaan-m/ECC) (MIT). After the greenfield ADK baseline (workflow + kanban installers above), you may optionally add ECC:

1. Read the **[ECC + ADK integration cheatsheet](docs/documentation/user-docs/ecc-adk-integration-cheatsheet.md)** (quick reference).
2. Run Phase 0 dry-run on a throwaway branch (see cheatsheet §3).
3. Copy the bridge template and validate:

   ```bash
   cp "packages/frameworks/workflow mgt/config/ecc-adk-bridge.yaml.template" ecc-adk-bridge.yaml
   python "packages/frameworks/workflow mgt/scripts/validation/validate_ecc_adk_bridge.py"
   ```

4. Optional install helper (defaults to **dry-run**; no network):

   ```bash
   "packages/frameworks/workflow mgt/scripts/install/install_ecc_harness_optional.sh" --copy-bridge
   ```

   Use `--execute` only after Phase 0 passes on your project.

Normative contract: [ECC ↔ ADK integration specification](docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md). Brownfield adopters: same optional surface per [ADR-003](docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) and [FR-081](docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md).

### Scope boundary

- This spec is for **greenfield** setup only (empty/new template repos).
- Brownfield adaptation and host-architecture-preserving integration stays in FR-081.

### Inputs

- Target project workspace (new/template repository).
- Access to AI Dev Kit framework sources (release asset, submodule, or equivalent bundle).
- Python runtime available for installer scripts.
- Installers in scope:
  - `packages/frameworks/workflow mgt/scripts/install_release_workflow.py`
  - `packages/frameworks/kanban/scripts/install_kanban_framework.py`

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
python3 "packages/frameworks/workflow mgt/scripts/install_greenfield_path.py" \
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
  Action: install dependency and re-run installer.
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

Validators read paths from **`rw-config.yaml`** (especially `scripts_path`). Authoritative layout notes: [`rw-validators-consumer-layout.md`](packages/frameworks/workflow%20mgt/docs/rw-validators-consumer-layout.md).

From **your project root**, after installers have produced `rw-config.yaml` and copied scripts:

```bash
# Resolve scripts_path from rw-config.yaml — examples only (yours may differ):
WF_SCRIPTS='packages/frameworks/workflow mgt/scripts'   # submodule / monorepo-style layout
# WF_SCRIPTS='scripts'                                   # typical after copying workflow mgt/* to project root

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
$ python3 "packages/frameworks/workflow mgt/scripts/install_greenfield_path.py" \
    --project-root "." --non-interactive --order rw-first

▶ python3 .../install_release_workflow.py --mode c --project-root "."
... rw-config.yaml written ...
✅ Release Workflow installer completed.

▶ python3 .../install_kanban_framework.py --mode fresh
... Kanban scaffold written under <KANBAN_ROOT>/ ...
✅ Kanban framework installer completed.

$ python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict
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

### Method 1: GitHub Releases (Recommended - Available Now)

Install framework packages directly from GitHub Releases:

```bash
# Using installation script
python3 install_package_from_release.py kanban 2.1.0 \
    --repo earlution/ai-dev-kit \
    --install-dir packages/frameworks

# Or download manually
# See: packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md
```

**Documentation:**
- [`PACKAGE_INSTALLATION_GUIDE.md`](packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md) - Complete package installation guide

### Method 2: Git Submodule (Available Now)

Add ai-dev-kit as a Git submodule, copy frameworks, then run installers:

```bash
# Step 1: Add ai-dev-kit as submodule
git submodule add https://github.com/earlution/ai-dev-kit.git .ai-dev-kit

# Step 2: Checkout specific version
cd .ai-dev-kit
git checkout v0.6.6.10+13  # Or latest tag
cd ..

# Step 3: Copy frameworks to your project
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/* ./
cp -r .ai-dev-kit/packages/frameworks/kanban/* ./

# Step 4: Run framework installers (REQUIRED - don't skip!)
# Preferred: orchestration wrapper (includes checkpoint + override support)
python3 "packages/frameworks/workflow mgt/scripts/install_greenfield_path.py" --project-root "."

# Manual fallback:
python "packages/frameworks/workflow mgt/scripts/install_release_workflow.py" --mode c --project-root "."
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
| **Workflow Management** | 2.1.4 | [`workflow mgt/README.md`](packages/frameworks/workflow mgt/README.md) |
| **Kanban** | 2.1.0 | [`kanban/README.md`](packages/frameworks/kanban/README.md) |
| **Numbering & Versioning** | 2.0.0 | [`numbering & versioning/README.md`](packages/frameworks/numbering & versioning/README.md) |
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
   - Without a task token, the agent must **RW ABORTED** before any version bump. See [Release Workflow (agent execution)](packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) (Step 1 branch safety; Steps 1.3–1.5 task token, releasable task, intent guard).
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
- **Package Installation:** [`packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`](packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md)
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
**Repository:** https://github.com/earlution/ai-dev-kit  
**Documentation:** `docs/documentation/user-docs/`

