---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Management — Installation Paths Matrix

**Task:** [E02:S14:T01](T01-enumerate-supported-installation-paths-for-workflow-manageme.md)  
**Package:** `packages/frameworks/workflow-mgt/`  
**Adopter SoT:** [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)

---

## Two-phase install model

Workflow Management adoption is **not** a single step. Adopters must distinguish:

1. **Acquisition** — framework files land in the host repository (copy, submodule, release tarball, CLI, template clone, or monorepo vendoring).
2. **Configuration** — `install_release_workflow.py` (or manual legacy edits) generates `rw-config.yaml`, patches `.cursorrules`, and aligns workflow YAML paths.

Many guides describe acquisition without stating that **RW configuration is a separate mandatory step** unless using manual legacy wiring. The `RW_installer_required` column makes this explicit.

**Kanban coupling:** Mode C and the greenfield orchestrator may invoke `install_kanban_framework.py`; those rows note Kanban coupling. RW-only brownfield paths set `Kanban_coupled = N`.

---

## Path matrix

| Path_ID | Phase | Label | Entry_point | Greenfield | Brownfield | RW_modes | RW_installer_required | Kanban_coupled | Outputs | Documented_in | S13_status | Tested | Known_gaps |
| ------- | ----- | ----- | ----------- | ---------- | ---------- | -------- | --------------------- | -------------- | ------- | ------------- | ---------- | ------ | ---------- |
| ACQ-MANUAL-COPY | Acquisition | Manual directory copy | `cp -r` from ai-dev-kit checkout | Y | Y | N/A | Y (unless manual legacy) | optional | `packages/frameworks/workflow-mgt/` tree on disk | `packages/frameworks/workflow-mgt/README.md`; `INSTALL_IN_YOUR_PROJECT.md` | Met (README) | TBD | Slug examples may use `workflow mgt` (GAP-SLUG-001) |
| ACQ-SUBMODULE | Acquisition | Git submodule + copy | `git submodule add` → copy `workflow-mgt/` into host tree | Y | Y | N/A | Y | optional | Submodule ref + copied framework tree | `docs/documentation/user-docs/framework-dependency-installation-guide.md`; `INSTALL_IN_YOUR_PROJECT.md` § Method 2 | Partial | TBD | Copy step easy to skip; installer still required (GAP-ACQ-CFG-001) |
| ACQ-RELEASE-TARBALL | Acquisition | GitHub Release tarball | `install_package_from_release.py workflow-mgt <ver>` | Y | Y | N/A | Y | optional | Extracted tree under `packages/frameworks/`; optional install receipt | `packages/frameworks/workflow-mgt/scripts/install_package_from_release.py`; `packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md` | Undocumented (S13) | TBD | Tarball does not run RW installer; guide Kanban-centric (GAP-DOC-001) |
| ACQ-CLI-INSTALL | Acquisition | CLI framework install | `ai-dev-kit install workflow-mgmt[@version]` | Y | Y | N/A | Y | optional | Framework under `frameworks/`; `.ai-dev-kit.yaml` updated | `cli/commands/install.py`; `docs/documentation/user-docs/framework-dependency-cli-reference.md` | Undocumented (S13) | TBD | CLI does not invoke RW installer; availability contradicts INSTALL_IN_YOUR_PROJECT (GAP-CLI-001) |
| ACQ-TEMPLATE-CLONE | Acquisition | GitHub template / full clone | Use template repo or clone ai-dev-kit | Y | N | N/A | Y | Y (typical) | Pre-populated `packages/frameworks/` | `docs/documentation/user-docs/framework-dependency-use-cases.md`; `INSTALL_IN_YOUR_PROJECT.md` | Partial | TBD | Customization + installers still expected post-clone |
| ACQ-MONOREPO-VENDORED | Acquisition | Monorepo / already in tree | No acquisition — package already present | N | Y | N/A | Y (first-time config) | optional | Existing tree | `INSTALL_IN_YOUR_PROJECT.md` § Brownfield matrices | Partial | TBD | Host path mapping (`scripts_path`, `version_file`) is brownfield-specific |
| ACQ-COPY-TO-DEP-MIGRATION | Acquisition | Copy-paste → dependency migration | `ai-dev-kit migrate --convert` / `cli/migration.py` | N | Y | N/A | Y (re-config) | optional | Dependency layout + manifest | `docs/documentation/user-docs/framework-dependency-integration-guide.md`; `cli/migration.py` | Undocumented (S13) | TBD | Re-run RW installer after migration |
| ACQ-SLUG-RELOCATE | Acquisition | Legacy slug relocation (BR-087) | `relocate_legacy_framework_dirs.py`; `framework_install_slug.py` | N | Y | N/A | N (pre-installer hygiene) | N | Renamed `workflow-mgt/` path | `packages/frameworks/workflow-mgt/scripts/relocate_legacy_framework_dirs.py` | Undocumented (S13) | TBD | Run after copy/submodule when spaced slug detected |
| CFG-PREFLIGHT-DEPS | Configuration | Installer dependency preflight | `install_release_workflow.py --check-deps` | Y | Y | N/A | N (gate only) | N | Console guidance; exit code if PyYAML missing | `packages/frameworks/workflow-mgt/scripts/README-rw-installer.md`; `INSTALL_IN_YOUR_PROJECT.md` § Installer venv dependencies | Met | TBD | Python 3.7+ (installer) vs 3.11+ (user-docs) (GAP-PY-001) |
| CFG-RW-MODE-A | Configuration | RW installer — mode A (RW-only) | `install_release_workflow.py --mode a` | Y | Y | A | N (this is the installer) | N | `rw-config.yaml` (`use_kanban: false`); `.cursorrules` RW section; patched release-workflow YAML | `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`; `scripts/README-rw-installer.md`; `INSTALL_IN_YOUR_PROJECT.md` § Brownfield RW-only | Met | TBD | — |
| CFG-RW-MODE-B | Configuration | RW installer — mode B (RW + dev-kit versioning) | `install_release_workflow.py --mode b` | Y | Y | B | N | N | Mode A outputs + versioning schema alignment | Same as CFG-RW-MODE-A | Met | TBD | — |
| CFG-RW-MODE-C | Configuration | RW installer — mode C (full stack + Kanban detect) | `install_release_workflow.py --mode c` | Y | Y | C | N | Y | Mode B outputs + `kanban_root`, epic/story patterns, `task_doc_pattern`, `fr_br_root` (BR-083/084) | Same as CFG-RW-MODE-A; `INSTALL_IN_YOUR_PROJECT.md` § Post-kanban RW install | Met | TBD | Quickstart may show stale `kboard.md` / `Epic-{epic}` patterns (GAP-QS-001) |
| CFG-GREENFIELD-ORCH | Configuration | Greenfield orchestrator (rw-first / kanban-first) | `install_greenfield_path.py --order rw-first\|kanban-first` | Y | N | A/B/C (via wrapped installers) | N | Y | Wraps RW + Kanban installers; checkpoint for order override | `packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py`; `INSTALL_IN_YOUR_PROJECT.md` § Wave 2 orchestrator | Undocumented (S13) | TBD | Thin wrapper only — does not replace installer logic |
| CFG-MANUAL-LEGACY | Configuration | Manual installation (no installer) | README § Manual Installation — 13–17 hand edits | Y | Y | manual | N | optional | Hand-edited paths in YAML, `.cursorrules`, workflows | `packages/frameworks/workflow-mgt/README.md` § Manual Installation | Partial | TBD | Step count may not match live 12-step RW spec (GAP-MANUAL-001) |
| UNI-PACKAGE-REMOVE | Uninstall | Package uninstall / recovery | `uninstall_package.py`; `ai-dev-kit remove workflow-mgmt` | Y | Y | N/A | N/A | N/A | Backup; rollback manifest | `packages/frameworks/workflow-mgt/scripts/uninstall_package.py`; `cli/commands/remove.py` | Undocumented (S13) | TBD | Story E02:S06 owns broader uninstall narrative |
| OPT-ECC-HARNESS | Optional | ECC optional harness layer | `install/install_ecc_harness_optional.sh` | Y | Y | N/A | N | N | `ecc-adk-bridge.yaml` (from template) | `packages/frameworks/workflow-mgt/scripts/install/install_ecc_harness_optional.sh`; `docs/documentation/user-docs/ecc-adk-integration-cheatsheet.md` | Undocumented (S13) | TBD | Dry-run by default; not required for ADK |
| OPT-INSTALL-RECEIPT | Optional | Install receipt + version banner | `install_receipt.py`; `install_ux_version.py` | Y | Y | N/A | N | N | JSON receipt; SemVer banner (UXR-016) | `packages/frameworks/workflow-mgt/scripts/install_receipt.py`; `docs/documentation/user-docs/install-receipt-reference.md` | Undocumented (S13) | TBD | Emitted when `.ai-dev-kit.yaml` exists (release path) |
| OPT-GITHUB-SIGNOFF | Optional | GitHub issue install sign-off | `install_github_issue_signoff.py` | Y | Y | N/A | N | N | Issue body from contract | `packages/frameworks/workflow-mgt/scripts/install_github_issue_signoff.py`; `config/github-issue-install-signoff-contract.yaml` | Undocumented (S13) | TBD | Optional post-install step |
| OPT-INSTALL-ERRORS | Optional | Install error code surface (FR-108 / FR-111) | `adk_install_errors.py`; `verify_vendor_tree.py`; `config/install-error-codes.yaml` | Y | Y | N/A | N | N | `ADK-I*` codes in console | `install-error-codes.yaml` registry **1.1.0**; troubleshooting § with CI drift test | Documented (S13) | E06:S09:T24 | I05 acquisition + I06 CLI; `generate_install_error_docs.py` |

**Row count:** 19 distinct paths (7 acquisition, 6 configuration, 1 uninstall, 5 optional).

---

## S13 §5 cross-reference (config & install components)

Components from [component-inventory-map.md §5](../story-13-workflow-management-package-implementation-review/component-inventory-map.md) mapped to this matrix:

| S13 component | Matrix coverage | Notes |
| ------------- | --------------- | ----- |
| `config/rw-config-schema.md` | Referenced by all CFG-RW-* rows (output contract) | Met — not a path row |
| `config/examples/rw-config-*.yaml` | CFG-RW-MODE-A/B/C templates | Met |
| `config/ecc-adk-bridge.yaml.template` | OPT-ECC-HARNESS | Undocumented in S13 |
| `config/github-issue-install-signoff-contract.yaml` | OPT-GITHUB-SIGNOFF | Undocumented in S13 |
| `config/install-error-codes.yaml` | OPT-INSTALL-ERRORS | Undocumented in S13 |
| `scripts/install_release_workflow.py` | CFG-RW-MODE-A/B/C; CFG-PREFLIGHT-DEPS | Met |
| `scripts/README-rw-installer.md` | CFG-RW-* ; CFG-PREFLIGHT-DEPS | Met |
| `docs/PACKAGE_INSTALLATION_GUIDE.md` | ACQ-RELEASE-TARBALL | Undocumented in S13 |
| `docs/rw-trigger-dual-source-parity.md` | Post-config validation (T04) | Out of T01 path enumeration — T04 |
| `docs/ukw-dual-source-parity.md` | Post-config validation (T04) | Out of T01 — T04 |
| `docs/rw-validators-consumer-layout.md` | Post-config validation (T04) | Out of T01 — T04 |
| `docs/workflow-documentation-style-guide.md` | N/A install path | Excluded — workflow doc standard |

---

## Known gaps (T06 remediation status)

| Gap ID | Topic | Status | Notes |
| ------ | ----- | ------ | ----- |
| GAP-CLI-001 | CLI "Available Now" vs "Coming Soon" | **Resolved (INSTALL)** | `INSTALL_IN_YOUR_PROJECT.md` § Method 3 — v0.2.14.6+1 |
| GAP-ACQ-CFG-001 | Acquisition without installer call | **Resolved (INSTALL)** | Two-phase callout + Methods 1 & 3 — v0.2.14.6+1 |
| GAP-QS-001 | Stale quickstart / kanban tree patterns | **Partial** | INSTALL greenfield tree fixed (ADR-018/UXR-017); quickstart guide still open |
| GAP-PY-001 | Python 3.7+ vs 3.11+ | **Open** | user-docs vs README-rw-installer — wave 2 |
| GAP-SLUG-001 | `workflow-mgt` vs `workflow mgt` slug | **Open** | user-docs / quickstart — wave 2 |
| GAP-DOC-001 | PACKAGE_INSTALLATION_GUIDE Kanban-centric | **Open** | wave 2 |
| GAP-MANUAL-001 | Manual install step count vs live RW spec | **Open** | package README — wave 2 |

---

## Verification notes (V1–V7)

| ID | Result | Evidence |
| -- | ------ | -------- |
| V1 | PASS | 19 rows cover all seed paths from IPP §2 (7 acq + 6 cfg + 1 uninstall + 5 optional) |
| V2 | PASS | S13 §5 table above; parity/trigger docs explicitly deferred to T04 |
| V3 | PASS | Every row has `Documented_in`; no silent undocumented paths |
| V4 | PASS | Acquisition rows separate from CFG-* configuration rows |
| V5 | PASS | §Known gaps lists 7 items including all 5 IPP-flagged inconsistencies |
| V6 | PASS | No changes under `packages/frameworks/workflow-mgt/` in this task |
| V7 | PASS | Links to T01 task doc, IPP, Story 14 resolve |

---

## References

- [T01 task doc](T01-enumerate-supported-installation-paths-for-workflow-manageme.md)
- [IPP-E02S14T01](../../../../../implementation-cycles/IPP-E02S14T01-enumerate-workflow-mgt-installation-paths.md)
- [S13 component inventory §5](../story-13-workflow-management-package-implementation-review/component-inventory-map.md)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
- [Story 14](../story-14-workflow-management-package-installation-evaluation.md)
