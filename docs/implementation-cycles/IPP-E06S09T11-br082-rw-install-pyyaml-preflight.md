---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T11 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T11-rw-install-pyyaml-preflight-br082.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T11-rw-install-pyyaml-preflight-br082.md) **(E06:S09:T11)**  
**Planning for:** [BR-082](../kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight.md) · [GitHub #14](https://github.com/RMS-Ltd/ai-dev-kit/issues/14)  
**Status:** Implemented (2026-06-03 — pending user verification / RW)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Before interactive RW install, detect missing PyYAML and exit with actionable message | BR-082 |
| RF2 | Message cites minimal install: `pip install 'pyyaml>=6.0'` (or project `setup.py` extra) | BR-082 AC |
| RF3 | Greenfield/book Step 3 lists venv deps **before** `install_release_workflow.py` | BR-082 AC |
| RF4 | Optional: `--check-deps` non-interactive preflight flag | BR-082 Expected (optional) |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Preflight runs before YAML generation (fail fast at L27–30 today) |
| RNF2 | No auto-pip without explicit opt-in (security) |

### 1.3 Boundaries

- **In scope:** `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`, install docs.
- **Out of scope:** Bundling PyYAML in stdlib; auto venv creation (**future FR**).

---

## 2. Specification

### 2.1 Goal

Submodule-only adopters see **what to pip install** before RW installer aborts mid-questionnaire.

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — installer UX + docs.

---

## 3. Test design

| ID | Behavior | Expected check |
| -- | -------- | -------------- |
| T1 | Mock missing `yaml` import | Exit code ≠ 0; stderr contains `pyyaml` and `pip install` |
| T2 | With PyYAML installed | Dry-run `--mode c` reaches config prompt or dry-run complete |
| T3 | Doc test | INSTALL doc contains deps block before Step 3 command |

Use `unittest.mock.patch.dict(sys.modules, {"yaml": None})` or subprocess with clean env.

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T11 **TODO → IN PROGRESS** |
| 2 | Extract `check_dependencies()` called at startup (yaml, optionally others from setup.py) |
| 3 | Improve error template: book path, `pip install -e .`, minimal one-liner |
| 4 | Add `--check-deps` flag (print OK / missing, exit 0/1) |
| 5 | Update `INSTALL_IN_YOUR_PROJECT.md` / workflow mgt README Step 3 |
| 6 | Pytest T1–T3 |
| **N** | Status reconcile + RW |

### 4.1 Files

- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`
- `packages/frameworks/workflow-mgt/tests/test_install_release_workflow_deps.py` (new)
- Adopter install spine doc (book cross-ref)

---

## 5. Documentation deliverables

| Doc ID | Path |
| ------ | ---- |
| D-U1 | `packages/frameworks/workflow-mgt/README.md` or install guide |
| D-U2 | Book T03 Step 3 packet |

---

## 7. Success / verification criteria

- [ ] BR-082 AC: preflight or docs prevent dead-end without deps list
- [ ] Replay book dry-run Step 3 with doc-only venv instructions passes review

## References

- [BR-082](../kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight.md)
- [BR-083](../kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) (follow-on RW install)
