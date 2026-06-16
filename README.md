# AI Dev Kit

**Maintainer clone:** [`RMS-Ltd/ai-dev-kit-book`](https://github.com/RMS-Ltd/ai-dev-kit-book) — book, Epic 24, and framework development before public release. **Adopters** use public [`RMS-Ltd/ai-dev-kit`](https://github.com/RMS-Ltd/ai-dev-kit) only.

<div align="center">

<!-- Badges: Static Shields.io only (private repo–safe). Version line updated by RW. No `shields` branch or BYOB in this repo — see FR-064 / E5:S01:T69. -->
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Python](https://img.shields.io/badge/python-3.11+-blue.svg)

**A comprehensive toolkit for AI-assisted development workflows**

**Version (SemVer):** `v0.4.1191+17` | **Internal:** `v0.2.16.6+17` (E02:S16:T06 Wave 9 AI autofix PR #70 CI repair) | **Last Updated:** 2026-06-16

[Features](#features) • [Installation](#getting-started) • [Install in Your Project](INSTALL_IN_YOUR_PROJECT.md) • [Documentation](docs/documentation) • **Browsing docs (published site):** [https://rms-ltd.github.io/ai-dev-kit/](https://rms-ltd.github.io/ai-dev-kit/) • [Workflows](#workflows) • [Report Bug](https://github.com/RMS-Ltd/ai-dev-kit/issues) • [Request Feature](https://github.com/RMS-Ltd/ai-dev-kit/issues)

</div>

---

## 🚀 Quick Start / Bootstrap

**Not sure where to start? Choose your path:**

### 🎯 I want to use AI Dev Kit frameworks in my project

**→ Start here:** [`INSTALL_IN_YOUR_PROJECT.md`](INSTALL_IN_YOUR_PROJECT.md)

- **New project?** Install frameworks as dependencies (recommended)
- **Existing project?** Migrate from copy-paste to package management
- **Just exploring?** Browse frameworks and documentation first

**Quick Install (lean vendor — recommended, [FR-110](docs/kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)):**
```bash
# 1. Vendor ai-dev-kit (submodule at vendor/ or .ai-dev-kit/)
git submodule add https://github.com/RMS-Ltd/ai-dev-kit.git vendor/ai-dev-kit
cd vendor/ai-dev-kit && git checkout tags/v0.4.1063 && cd ../..

# 2. Sparse-checkout greenfield-install/ only (~10 MiB) — see INSTALL guide
#    cd vendor/ai-dev-kit && git sparse-checkout set greenfield-install
pip install 'pyyaml>=6.0'
python3 vendor/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py \
  --project-root . --non-interactive
```

**Alternate (no git submodule):** `docker pull ghcr.io/rms-ltd/ai-dev-kit-greenfield:v0.4.1063` → extract `/opt/adk/` to `vendor/ai-dev-kit/` — see [INSTALL — GHCR](INSTALL_IN_YOUR_PROJECT.md#lean-vendor-install-greenfield-install--fr-110) and [ADR-021](docs/architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md).

**Download integrity (SHA-256):** Every release tarball ships with a matching `.sha256` sidecar on [GitHub Releases](https://github.com/RMS-Ltd/ai-dev-kit/releases). Verify before extract:

```bash
gh release download v0.4.1063 --repo RMS-Ltd/ai-dev-kit \
  -p 'greenfield-install-v0.4.1063.tar.gz' \
  -p 'greenfield-install-v0.4.1063.tar.gz.sha256' -D /tmp/adk-dl
shasum -a 256 -c /tmp/adk-dl/greenfield-install-v0.4.1063.tar.gz.sha256
# Expected: greenfield-install-v0.4.1063.tar.gz: OK
```

| Asset (pin `v0.4.1063`) | SHA-256 |
| --- | --- |
| `greenfield-install-v0.4.1063.tar.gz` | `d7519a0642b572eece67c20b05ace026f742b91caf9a07f9901fe39a17423131` |

Framework package tarballs (e.g. `kanban-v2.0.0.tar.gz`) follow the same pattern — see [Package installation guide](packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md). Pin a newer [release tag](https://github.com/RMS-Ltd/ai-dev-kit/releases) when upgrading; always download and verify the matching `.sha256` file.

**Full copy alternative** (copies frameworks into project root): see [INSTALL_IN_YOUR_PROJECT.md — Method 2](INSTALL_IN_YOUR_PROJECT.md#method-2-git-submodule-available-now).

**📖 Complete Guide:** See [`INSTALL_IN_YOUR_PROJECT.md`](INSTALL_IN_YOUR_PROJECT.md) for detailed instructions and all installation methods.

### 📚 I want to understand what AI Dev Kit is

**→ Start here:** [About The Project](#about-the-project)

- Read the problem statement and vision
- Explore available frameworks
- Review design principles
- Check out the roadmap

**Key Documents:**
- [Vision and Purpose](docs/documentation/ai-dev-kit-vision-and-purpose.md)
- [Frameworks Overview](#frameworks)

### 🔧 I want to contribute or develop

**→ Start here:** [Contributing](#contributing) and [Roadmap](#roadmap)

- Review contributing guidelines
- Check open issues and feature requests
- Explore the codebase structure
- Join discussions

**Developer Resources:**
- [Architecture Documentation](docs/architecture)
- [Framework Development Guides](packages/frameworks)
- [Workflow Documentation](packages/frameworks/workflow-mgt/docs)
- **Workflow library** — [13 registered workflows](#workflows) in [`workflow-registry.yaml`](packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml) (see [Workflow Management README](packages/frameworks/workflow-mgt/README.md) for tables and methodology)
- **Maintainers:** [Build and upload runbooks](docs/maintenance/README.md) (package build/publish)

### 🔍 I'm looking for a specific framework

**→ Jump to:** [Frameworks](#frameworks)

**Available Frameworks:**
- **Workflow Management** (`v2.3.0`) — [13 workflows](#workflows) in the package registry + agent execution guides
- **Kanban** (`v2.2.0`) - Project management and task tracking
- **Numbering & Versioning** (`v2.0.0`) - Version schema and policies
- **Document Lifecycle** (`v1.0.0`) - Documentation management
- **Debug Path** (`v1.0.0`) - Debugging utilities

Each framework includes installation guides, usage examples, and comprehensive documentation.

---

## 📋 Table of Contents

- [Quick Start / Bootstrap](#-quick-start--bootstrap)
- [Workflows](#workflows)
- [About The Project](#about-the-project)
  - [Features](#features)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Frameworks](#frameworks)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## Workflows

**Canonical registry:** Thirteen workflows are defined in [`packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml`](packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml), plus **composite recipes** under `composite_workflows:` (e.g. MWF `delivery`). Some are invoked primarily through **Cursor agent rules** (see [`.cursorrules`](.cursorrules)); others are run via scripts or followed from package YAML/READMEs.

### Primary Cursor triggers (this repo)

These are the main **user-typed** triggers documented in `.cursorrules`. **Human quick-reference:** [`docs/guides/workflow-initiation-cheatsheet.md`](docs/guides/workflow-initiation-cheatsheet.md) (flags, sequences, prerequisites).

| Trigger | Workflow | What it does | Invocation |
|--------|-----------|--------------|------------|
| **RW** | Release Workflow | Version bump, changelogs, kanban markers, commit, tag (local-default; `--push` opt-in) | **`RW E5:S01:T64`** (examples: `RW E7S01T10`, `RW E7:S01:T10`). The **task id must appear in the same message** as `RW`, `RW -d`, or `RW -k`. See [UXR-024](docs/kanban/fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md), [FR-060](docs/kanban/fr-br/FR-060-rw-task-argument-requirement.md) and [Release Workflow agent execution](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md). |
| **UKW** | Update Kanban Workflow | Bookkeeping, priorities, board sync | `UKW` (full run), or `UKW -u`, `UKW -p`, `UKW -a <target>`. See [UKW agent execution](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md). |
| **PVW** | Package Version Workflow | Package-level version analysis/bumps | `PVW` (often RW Step 2.5). See [PVW agent execution](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md). |
| **IPW** / **ICW** | Implementation Planning / Cycle | Spec → tests → implementation plan (`IPP` or ICW trio) | `IPW E02:S16:T15` or `/ipw` — **plan mode** required. See [workflow initiation cheatsheet](docs/guides/workflow-initiation-cheatsheet.md) and [Implementation Cycle SOP](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md). |
| **IDW** | Implementation Delivery Workflow | Execute linked IPP/ICW (test-first implement) | `IDW E02:S16:T15` or `/idw` — **not** plan mode; optional `--rw` to chain release. See [IDW agent execution](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-delivery-workflow-agent-execution.md). |
| **MWF** | Meta-Workflow | Full delivery orchestration (IPW → IDW `--rw`) | `MWF E02:S03:T09 delivery` or `/mwf` — mode-gate pauses between legs. See [MWF agent execution](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md) and [FR-124](docs/kanban/fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md). |

**CMW** (Changelog Management Workflow) usually runs as **RW Step 9.5** when changelog size exceeds policy, or via the maintainer skill under [`.cursor/skills/cmw-maintain/`](.cursor/skills/cmw-maintain/SKILL.md). Package entry: [changelog-management-workflow README](packages/frameworks/workflow-mgt/workflows/changelog-management-workflow/README.md).

### Packaged workflows (registry summary)

| Workflow | Abbrev. | Reference triggers (YAML) | Package README |
|----------|---------|----------------------------|----------------|
| Release Workflow | RW | `RW`, `RW -k`, `RW -d` | [release-workflow](packages/frameworks/workflow-mgt/workflows/release-workflow/README.md) |
| Changelog Management Workflow | CMW | `CMW` | [changelog-management-workflow](packages/frameworks/workflow-mgt/workflows/changelog-management-workflow/README.md) |
| Update Kanban Workflow | UKW | `UKW` | [update-kanban-workflow](packages/frameworks/workflow-mgt/workflows/update-kanban-workflow/README.md) |
| Post-Implementation Review | PIR | `PIR` | [post-implementation-review](packages/frameworks/workflow-mgt/workflows/post-implementation-review/README.md) |
| Intake Workflow | INTAKE | `INTAKE` | [intake-workflow](packages/frameworks/workflow-mgt/workflows/intake-workflow/README.md) |
| Migration Workflow | MIGRATION | `MIGRATION` | [migration-workflow](packages/frameworks/workflow-mgt/workflows/migration-workflow/README.md) |
| Refactor Workflow | REFACTOR | `REFACTOR` | [refactor-workflow](packages/frameworks/workflow-mgt/workflows/refactor-workflow/README.md) |
| Testing Workflow | TESTING | `TESTING` | [testing-workflow](packages/frameworks/workflow-mgt/workflows/testing-workflow/README.md) |
| Package Version Workflow | PKG-VERSION / PVW | `PKG-VERSION` (Cursor: **PVW**) | [package-version-workflow](packages/frameworks/workflow-mgt/workflows/package-version-workflow/README.md) |
| Framework Health Monitoring | FHM | `FHM` | [framework-health-monitoring-workflow](packages/frameworks/workflow-mgt/workflows/framework-health-monitoring-workflow/README.md) |
| Implementation Cycle Workflow | ICW / IPW | `IPW`, `ICW` | [implementation-cycle-workflow](packages/frameworks/workflow-mgt/workflows/implementation-cycle-workflow/README.md) |
| Implementation Delivery Workflow | IDW | `IDW` | [implementation-delivery-workflow](packages/frameworks/workflow-mgt/workflows/implementation-delivery-workflow/README.md) |
| Meta-Workflow | MWF | `MWF` | [meta-workflow](packages/frameworks/workflow-mgt/workflows/meta-workflow/README.md) |

### Agent execution guides (deep dives)

- [Agent-driven workflow execution](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md)
- [Release Workflow](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) · [Reference](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md)
- [Update Kanban Workflow](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)
- [Intake Workflow](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/intake-workflow-agent-execution.md)
- [Migration](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/migration-workflow-agent-execution.md) · [Refactor](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/refactor-workflow-agent-execution.md) · [Testing](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/testing-workflow-agent-execution.md)
- [PIR](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/pir-workflow-agent-execution.md)
- [Implementation Planning (IPW)](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md) · [Implementation Delivery (IDW)](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-delivery-workflow-agent-execution.md) · [Meta-Workflow (MWF)](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md)

For the full framework overview and validation tooling, see **[Workflow Management README](packages/frameworks/workflow-mgt/README.md)**.

---

## About The Project

**AI Dev Kit** is a comprehensive toolkit designed to support AI-assisted development workflows. It provides modular, reusable frameworks for project management, versioning, workflow automation, and documentation lifecycle management.

### Why AI Dev Kit?

**The Problem:** Managing multiple software projects leads to project drift—each project implements slightly different structures, workflows, and conventions. This causes you to reinvent the wheel, repeat the same remedial work, and maintain inconsistent solutions across projects.

**The Solution:** AI Dev Kit serves as the **source of truth** for software project infrastructure. Projects focus on their domain-specific code, while all infrastructure, planning, workflows, and documentation patterns come from shared, evolving frameworks.

**The Vision:** Stop reinventing the wheel. Eliminate drift. Focus on building. Let AI Dev Kit handle the infrastructure.

📖 **[Read the full Vision and Purpose document →](docs/documentation/ai-dev-kit-vision-and-purpose.md)**

### Design Principles

The toolkit is designed to be:
- **Modular:** Use only what you need, combine frameworks as required
- **Portable:** Frameworks can be installed as dependencies or copy-pasted
- **Auto-updating:** Framework dependencies can receive automatic updates
- **Agent-friendly:** Designed for AI-assisted development workflows

### Features

- **Workflow management** — Release, Kanban sync, intake, testing, migration, and more ([Workflows](#workflows))
- **Kanban** — Epics, stories, tasks, FR/BR/UXR intake patterns ([Kanban framework](packages/frameworks/kanban/README.md))
- **Numbering and versioning** — `RC.EPIC.STORY.TASK+BUILD` and policies ([versioning framework](packages/frameworks/numbering%20%26%20versioning/README.md))
- **Document lifecycle** — Metadata and housekeeping conventions ([doc lifecycle](packages/frameworks/doc-lifecycle/README.md))
- **Debug path** — Structured debugging helpers ([debug path](packages/frameworks/debug-path/README.md))

### Built With

- Python 3.11+
- Markdown-first documentation
- GitHub (issues, Actions where enabled)

---

## Getting Started

### Prerequisites

- **Python** 3.11 or newer
- **Git**

### Installation

Follow **[INSTALL_IN_YOUR_PROJECT.md](INSTALL_IN_YOUR_PROJECT.md)** — start with the **[lean vendor install](INSTALL_IN_YOUR_PROJECT.md#lean-vendor-install-greenfield-install--fr-110)** section (FR-110), then greenfield or brownfield paths as appropriate.

---

## Usage

- Day-to-day **agent workflows:** [Workflows](#workflows) and [`.cursorrules`](.cursorrules)
- **Per-framework** usage: README files under [`packages/frameworks/`](packages/frameworks)
- **CLI** (where applicable): [`cli/README.md`](cli/README.md)

---

## Frameworks

| Area | Location |
|------|-----------|
| Packages index | [`packages/README.md`](packages/README.md) |
| Workflow Management | [`packages/frameworks/workflow-mgt/README.md`](packages/frameworks/workflow-mgt/README.md) |
| Kanban | [`packages/frameworks/kanban/README.md`](packages/frameworks/kanban/README.md) |
| Numbering & Versioning | [`packages/frameworks/numbering-versioning/README.md`](packages/frameworks/numbering%20%26%20versioning/README.md) |
| Document Lifecycle | [`packages/frameworks/doc-lifecycle/README.md`](packages/frameworks/doc-lifecycle/README.md) |
| Debug Path | [`packages/frameworks/debug-path/README.md`](packages/frameworks/debug-path/README.md) |

---

## Roadmap

Work is tracked in **[Kanban](docs/kanban/kboard.md)** and **[GitHub Issues](https://github.com/RMS-Ltd/ai-dev-kit/issues)**.

---

## Contributing

See **[CONTRIBUTING.md](CONTRIBUTING.md)** for bug reports, feature requests, and code contributions.

---

## License

This project is distributed under the **MIT License**. See [`LICENSE`](LICENSE). SPDX: `MIT`.

---

## Contact

- **Issues:** [github.com/RMS-Ltd/ai-dev-kit/issues](https://github.com/RMS-Ltd/ai-dev-kit/issues)

---

## Acknowledgments

Thanks to contributors and to the authors of tools and standards this kit builds on.

**Optional third-party harness:** AI Dev Kit may be combined with [ECC](https://github.com/affaan-m/ECC) (MIT License), the open-source harness-native operator system by [Affaan Mustafa](https://github.com/affaan-m) and contributors. ECC is not part of AI Dev Kit and is not required for correctness. See the [ECC integration specification](docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md).
