---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T19 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T19-rw-install-version-file-scaffold-br088.md`](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T19-rw-install-version-file-scaffold-br088.md) **(E06:S09:T19)**  
**Planning for:** [BR-088](../project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md) · [GitHub #18](https://github.com/RMS-Ltd/ai-dev-kit/issues/18)  
**Status:** Implemented (**v0.6.9.19+1** — pending user verification)

---

## 1. Requirements (Ascertained Baseline)

| ID | Requirement | Source |
|----|-------------|--------|
| RF1 | After RW install writes `rw-config.yaml`, prompt when `version_file` missing | BR-088 |
| RF2 | Scaffold: parent dirs + dev-kit `VERSION_*` stub | BR-088 AC |
| RF3 | Decline → PARTIAL + mandatory next steps (no SUCCESS) | User + BR-088 |
| RF4 | Print created path and initial `0.1.1.1+1` | UXR-016 |
| RF5 | `INSTALL_IN_YOUR_PROJECT.md` documents behaviour | BR-088 |
| RF6 | Sign-off contract verifiable for BR-088 | Intake |
| RNF1 | Do not overwrite existing file | Safety |
| RNF2 | `--dry-run` does not write stub | Installer |

**Out of scope:** Full `src/` layout; T16 / #17 patterns.

---

## 2. Specification

Interactive prompt (default **Yes**) after `rw-config.yaml` write. Hook: [`install_release_workflow.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py) `main()`.

### 2.5 ADR necessity

**Outcome:** `EXEMPT`

---

## 3. Test design

| Test | Covers |
|------|--------|
| `test_render_version_stub_devkit_schema` | RF2 |
| `test_ensure_scaffold_creates_parents_and_file` | RF1 |
| `test_ensure_scaffold_skips_when_exists` | RNF1 |
| `test_ensure_scaffold_decline_sets_missing_flag` | RF3 |
| `test_ensure_scaffold_dry_run_no_write` | RNF2 |

File: [`tests/test_install_release_workflow_version_scaffold.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_install_release_workflow_version_scaffold.py)

---

## 4. Implementation plan

| Step | Action |
|------|--------|
| **1** | T19 **TODO → IN PROGRESS** |
| 2 | `render_version_py_stub`, `ensure_version_file_scaffold`, `ScaffoldResult` |
| 3 | Wire `main()`; force PARTIAL on decline |
| 4 | `install_github_issue_signoff` `version_file_exists` check |
| 5 | INSTALL doc + signoff YAML |
| 6 | Pytest |
| **N** | RW **E06:S09:T19 --art**; reconcile status |

---

## 5. Documentation deliverables

| Doc | Path |
|-----|------|
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` |
| D-K1 | `github-issue-install-signoff-contract.yaml` |

---

## 7. Success / verification

- [ ] Accept prompt → `version_file` on disk with `VERSION_*`
- [ ] Decline → PARTIAL + next steps
- [ ] pytest green
- [ ] User closes #18 after replay

## References

- [BR-088](../project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md)
