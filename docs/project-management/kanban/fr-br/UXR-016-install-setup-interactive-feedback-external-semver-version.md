---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Install/Setup Interactive Feedback Shows External SemVer

**Type:** User Experience Research (UXR)  
**ID:** UXR-016  
**Submitted:** 2026-06-04  
**Submitted By:** User  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Status:** COMPLETE (implementation **v0.6.9.15+1**; reclassification docs **v0.6.9.15+2**) — **addendum open** (2026-06-04: framework path layout; see [BR-087](BR-087-framework-install-directory-slug-mismatch.md))  
**Implementing Task:** [E06:S09:T15](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T15-install-setup-interactive-feedback-external-semver-uxr016.md)

**Reclassification (2026-06-04):** Originally filed as **FR-108**; retyped to UXR — install/setup **user-facing feedback** and version traceability in console UX, not a standalone feature contract. FR-108 deleted to free the id.

**Planning package:** [IPP-E06S09T15](../../../implementation-cycles/IPP-E06S09T15-install-setup-interactive-feedback-external-semver.md)  
**Last updated:** 2026-06-05 (addendum — framework directory slugs; adopter verification)

---

## Summary

Adopters running install and setup flows cannot see which **external SemVer** release of AI Dev Kit they are using in interactive console output — blocking support triage and feedback correlation.

---

## Research Objective

Determine whether install/setup interactive feedback (banners, prompts, progress, warnings) should consistently display the **external SemVer** (README / GitHub release string) and how that label should align with install telemetry.

---

## Methodology

**Research Method:** Adopter pain-point analysis + maintainer install dry-run review  
**Context:** AI Dev Kit CLI and framework installers (`adk install`, RW/Kanban/greenfield paths)  
**Duration:** Single intake session (2026-06-04)

---

## Key Findings

1. **Version invisible during install** — Prompts describe *what* is happening but omit *which release* is running.
2. **Support friction** — Console output pasted into issues lacks an unambiguous SemVer anchor.
3. **Telemetry mismatch** — FR-078/FR-079 machine-readable logs lacked a human-visible SemVer counterpart.
4. **Stale CLI `--version`** — Hardcoded `0.1.0` undermined trust in version display elsewhere.

---

## User Pain Points

- Cannot tell if install is from latest GitHub release, dev checkout, or cached older CLI.
- Feedback and install logs hard to join to a shipped release without manual version lookup.
- Internal `RC.EPIC.STORY.TASK+BUILD` tuples in package metadata confuse external adopters.

---

## Recommendations

- [x] **UXR-016-R1:** Session-start banner `AI Dev Kit v{semver}` on every install/setup entry point.
- [x] **UXR-016-R2:** Prefix interactive section headers with compact version label (RW/Kanban installers).
- [x] **UXR-016-R3:** Resolve via `rw-config.yaml` → `semver_converter` (`finalize=False`); explicit `AI Dev Kit (version unknown)` fallback.
- [x] **UXR-016-R4:** Mirror displayed SemVer in install JSON logs (`adk_semver`) and feedback payload `context`.
- [x] **UXR-016-R5:** Fix global CLI `--version` to use resolved SemVer.

**Priority order:** R1 → R4 → R2 → R3 → R5 (delivered together in **E06:S09:T15**).

---

## Affected Areas

- CLI: `install`, `init`, `status`, `logs prepare-feedback-payload`, `main.py --version`
- Framework installers: RW, Kanban, greenfield, GitHub package install
- Documentation: `INSTALL_IN_YOUR_PROJECT.md`, feedback guide

**Out of scope:** RW/UKW/IPW runtime banners.

---

## Acceptance Criteria (implementation verification)

- [x] **AC1:** Every documented install entry point prints external SemVer at session start.
- [x] **AC2:** Automated tests per major entry point assert SemVer in output.
- [x] **AC3:** RW installer interactive sections show SemVer on headers.
- [x] **AC4:** Kanban installer banners include SemVer.
- [x] **AC5:** Explicit unknown-version fallback when resolution fails.
- [x] **AC6:** Displayed SemVer matches install event / feedback payload fields.

---

## Intake Decision

**Intake Status:** ACCEPTED (reclassified from FR-108)  
**Intake Date:** 2026-06-04  
**Assigned To:** **E06:S09:T15** under Story 009 (installation and adopter integration)  
**Version:** `0.6.9.15+1` implementation (SemVer v0.4.865+1); reclassification docs `0.6.9.15+2` (SemVer v0.4.866+2)

---

## Related Work

- [FR-078](./FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md) · [FR-079](./FR-079-install-feedback-submission-path-and-governance.md)
- [FR-080](./FR-080-greenfield-installation-process.md) · [FR-062](./FR-062-github-release-installation-experience.md)
- [E06:S09:T15](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T15-install-setup-interactive-feedback-external-semver-uxr016.md)
- [BR-087](./BR-087-framework-install-directory-slug-mismatch.md) · [E06:S09:T18](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure.md) — framework path layout (addendum below; [T17](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T17-framework-install-directory-slugs-br087.md) wave 1 complete)
- [UXR-017](./UXR-017-kanban-epic-story-path-lowercase-naming.md) — same Expenses Tracker install session (kanban path case; separate scope)

---

## Addendum — Framework directories still use legacy names (2026-06-05)

**Source:** Adopter report after updating installed AI Dev Kit (Expenses Tracker; aligns with [BR-087](BR-087-framework-install-directory-slug-mismatch.md) recurrence).

**Observation:** Under `packages/frameworks/`, directories still appear as maintainer source names with **spaces** and **`&`**, for example:

- `workflow mgt/`
- `numbering-versioning/`
- `tooling-automation/`

**Expected (install slug contract):** hyphenated slugs per [package-management-design.md](../../../architecture/standards-and-adrs/package-management-design.md):

- `workflow-mgt/`
- `numbering-versioning/`
- `tooling-automation/`

**UX gap (extends UXR-016 scope):** Install/setup feedback may show a correct **SemVer banner** (T15) while giving **no signal** that framework paths on disk are legacy layout. Adopters infer “update succeeded” from version text but still hit shell quoting friction, wrong `rw-config.yaml` `scripts_path` examples, and doc copy-paste breakage.

**Likely install paths still affected (BR-087):**

| Path | Why legacy names persist |
|------|---------------------------|
| Git submodule / vendor copy of `packages/frameworks/*` | Copies maintainer tree names; relocation not run automatically |
| Pre-repair release tarball | Asset not rebuilt with slug archive roots |
| Brownfield tree | `relocate_legacy_framework_dirs.py` not run or not documented at update time |

**Recommended install UX (future work — not UXR-016 T15 AC):**

- [x] **UXR-016-A1:** Post-install summary lists `packages/frameworks/` top-level names and flags non-slug directories (**v0.6.9.18+1** / E06:S09:T18).
- [x] **UXR-016-A2:** When SemVer banner prints, warn if legacy framework dirs detected (with migration command) (**v0.6.9.18+1**).
- [ ] **UXR-016-A3:** Install receipt / feedback payload includes `framework_dir_layout: slug | legacy` per framework.

**Tracking:** Engineering fix and verification — **[BR-087](BR-087-framework-install-directory-slug-mismatch.md)** / **[E06:S09:T18](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure.md)** (TODO; supersedes T17 script-only wave). Prior: [E06:S09:T17](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T17-framework-install-directory-slugs-br087.md) (`v0.6.9.17+1`; verification **failed** 2026-06-05).

**Adopter mitigation (until verified fix):**

```bash
python "packages/frameworks/workflow-mgt/scripts/relocate_legacy_framework_dirs.py" \
  --frameworks-root packages/frameworks
```

Then point `rw-config.yaml` `scripts_path` at `packages/frameworks/workflow-mgt/scripts/...`.

---

## References

- [dev-kit-versioning-policy.md](../../../governance/standards/dev-kit-versioning-policy.md)
- [`semver_converter.py`](../../../../packages/frameworks/workflow-mgt/scripts/version/semver_converter.py)
- [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
