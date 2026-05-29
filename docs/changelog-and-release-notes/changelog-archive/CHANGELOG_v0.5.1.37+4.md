# Changelog v0.5.1.37+4

**Release Date:** 2026-02-19 00:00:00 UTC  
**Epic:** Epic 5 - Documentation Management and Maintenance (FR Repo)  
**Story:** Story 1 - FR Repo (PERPETUAL)  
**Task:** Task 37 - Kanban Policy Task Prioritisation and Queue/Stack  
**Build:** 4

---

## Summary

Aligned the dev-kit and framework numbering/versioning and workflow documentation with Starborn Legacy framing by making **SemVer the primary external-facing story**, introducing an **optional simple global PATCH SemVer mode** for adopters, and defining a **standard optional SemVer metadata pattern** for embedding internal `RC.EPIC.STORY.TASK+BUILD` coordinates in tags.

---

## Changes

### Numbering & Versioning Framework (Core Policies)

- **`packages/frameworks/numbering & versioning/versioning-policy.md`**
  - Added a **“Mental Model: Internal vs Release Versions”** section clarifying the dual-version model:
    - Internal `RC.EPIC.STORY.TASK+BUILD` as forensic coordinate and Kanban anchor.
    - SemVer `MAJOR.MINOR.PATCH+BUILD` as the external-facing release version.
  - Documented **SemVer mapping modes**:
    - **Mode A (default)** – registry-based epic/story mapping (Hybrid Approach).
    - **Mode B (simple/global PATCH)** – `MAJOR = RC`, `MINOR = EPIC`, `PATCH = global build counter`.
  - Defined a **canonical optional SemVer metadata pattern**: `+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>` and clarified that it is optional and does not affect SemVer precedence.

- **`packages/frameworks/numbering & versioning/versioning-strategy.md`**
  - Expanded the **Purpose** to include the **dual-version model**.
  - Added a **“Dual-Version Model (Internal vs Release SemVer)”** section:
    - Internal `RC.EPIC.STORY.TASK+BUILD` vs external SemVer, and when each is used.
    - Summarised mapping modes and metadata at the strategy level.
  - Updated the **core ordering principle** so that **release version numbers (SemVer)** are the canonical ordering metric for changelogs, while internal versions continue to encode work hierarchy.

### Dev-Kit Local Versioning Policy & Guides

- **`docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`**
  - Added **“1.1 Mental Model: Internal vs Release Versions”**:
    - SemVer is presented first to external consumers; the internal version is used for Kanban and forensic traceability.
  - Clarified that dev-kit uses the **registry-based mapping mode (Mode A)** by default, while other projects may choose the **simple global PATCH mode (Mode B)** when copying the framework.
  - Documented how optional SemVer metadata can be used on tags to embed the internal version.

- **`docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md`**
  - Added a short section on **how to read versions** in worked examples:
    - Show SemVer first for external storytelling, with internal versions in parentheses when needed.
    - Call out that internal versions continue to drive Kanban and RW behaviour.

- **`docs/architecture/standards-and-adrs/dual-versioning-package-managers.md`**
  - Introduced a **“Choosing a SemVer Mapping Mode”** section describing:
    - Mode A (registry-based epic/story) vs Mode B (simple global PATCH).
    - Guidance on when small/simple projects might prefer Mode B.
  - Framed existing mapping strategies as concrete implementations under these conceptual modes.

### Workflow Management (RW & PVW Docs)

- **`packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`**
  - Documented the **dual-version execution context**:
    - Internal version from `src/fynd_deals/version.py`.
    - SemVer release version derived via `semver_converter.py` and project config (e.g. `semver_mode`, `semver_metadata`).
  - Updated **Step 5: Update README** to:
    - Treat SemVer as the **primary external-facing version** in README.
    - Use internal versions only in supporting text and detailed changelogs.
  - Clarified that RW should respect project configuration when choosing a SemVer mapping mode and whether to include metadata on tags.

- **`packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md`**
  - Emphasised that PVW:
    - Uses SemVer as the **external-facing package version**.
    - Relies on the same mapping mode as RW for consistency.

### README Version Presentation

- **`README.md`**
  - Updated the top-level version line to:
    - Present **SemVer as the primary version** (`Version (SemVer): v0.5.39+3`).
    - Mention the internal `RC.EPIC.STORY.TASK+BUILD` schema as supporting forensic context, pointing readers to detailed changelogs.

### Implementation Follow-Up Spec

- **`docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md`** (new)
  - Drafted a follow-up implementation spec to:
    - Make `semver_mode` and `semver_metadata` configurable via `rw-config.yaml`.
    - Extend `semver_converter.py` to support multiple mapping modes and optional metadata.
    - Align RW Step 5 (README), RW Step 11 (tagging), PVW behaviour, and validators with the updated policies.

---

## Related Work

- **Task:** E5:S01:T37 – Kanban Policy Task Prioritisation and Queue/Stack (FR-037)  
- **Policies:** Numbering & Versioning framework docs, dev-kit versioning policy and cookbook  
- **Workflows:** Release Workflow and Package Version Workflow execution guides  

