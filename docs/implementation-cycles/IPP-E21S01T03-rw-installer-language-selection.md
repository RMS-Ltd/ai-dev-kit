---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S01:T03 — Planning: RW installer language selection (IPW)

**Host Task:** [`T03-add-language-selection-prompt-to-rw-installer-install-releas.md`](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T03-add-language-selection-prompt-to-rw-installer-install-releas.md) **(E21:S01:T03)**  
**Planning for:** [FR-006 Phase 1](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S01T01](IPP-E21S01T01-template-language-selection-github.md) · [IPP-E21S01T02](IPP-E21S01T02-cli-init-language-selection.md)  
**Status:** Complete — released `v0.21.1.3+1` (`RW E21:S01:T03 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## Scope decision

**RW installer slice:** `install_release_workflow.py` prompts for UK/US English **before** RW path/mode questions. Selection persists to **`ai-dev-kit-config.yaml`**. Canonical helpers live in `packages/frameworks/workflow-mgt/scripts/localisation_config.py` (vendored with installer); `cli/localisation.py` delegates to avoid drift until **E21:S01:T05**.

**Installer idempotency:** If `ai-dev-kit-config.yaml` exists and `--force` is absent, skip language write and continue (differs from blocking `ai-dev-kit init`).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Language selection runs before RW path/mode questions in `install_release_workflow.py` | T03 AC; FR-006 |
| RF2 | Options: UK English (`en-GB`/`UK`) and US English (`en-US`/`US`); numbered `[1]`/`[2]` format | FR-006; T02 |
| RF3 | Persist to `ai-dev-kit-config.yaml` at project root (T01 schema) | IPP-T01; T02 |
| RF4 | Installer flags: `--language en-GB\|en-US`, `--non-interactive` (default `en-GB`) | T02 parity |
| RF5 | `--force` overwrites existing file; without `--force`, skip if exists and continue | Installer brownfield |
| RF6 | Language step runs when `--config rw-config.yaml` skips RW questions (unless file exists, no `--force`) | FR-006 |
| RF7 | `--dry-run`: print intended write; do not create file | Installer pattern |
| RF8 | Update installer documentation | T03 AC |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| NF1 | Canonical module under workflow-mgt `scripts/` (no repo-root `cli/` dependency for adopters) |
| NF2 | `cli/localisation.py` delegates to shared module |
| NF3 | No change to `rw-config.yaml` schema |
| NF4 | Reuse installer `pyyaml` dependency |

### 1.3 Invariants and boundaries

- **In scope:** Language-first installer step, shared module extraction, tests, docs.
- **Out of scope:** Content localisation (T04+), full read API (T05–T07), new languages, `ai-dev-kit init` changes.

---

## 2. Specification

### 2.1 Goal

Adopters running the RW installer get the same UK/US English choice as template Step 0 and `ai-dev-kit init`, with preference stored in `ai-dev-kit-config.yaml` before `rw-config.yaml` generation.

### 2.2 Specification mapping

Config contract per IPP-T01:

```yaml
localisation:
  language: "en-GB"  # or "en-US"
  variant: "UK"      # or "US"
```

Flow: `main()` → banner → `ensure_localisation_config()` → load/collect RW config → existing install steps.

### 2.3 Constraints

- Sibling import pattern in `install_release_workflow.py` (same as `install_ux_version.py`).
- Release via `RW E21:S01:T03 --art` only (BR-097).

### 2.4 Status transition intent

- **Current:** `TODO` @ `v0.21.1.3+0`
- **IN PROGRESS:** First implementation change (Step 1 of §4).
- **COMPLETE:** All AC + tests pass; forensic marker `✅ COMPLETE (v0.21.1.3+1)` after RW.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single pattern from T01/T02 |
| T2 | Reversibility | N | Config file overwrite/skip |
| T3 | Blast radius | N | Additive installer step |
| T4 | Precedent | N | Follows FR-006 Phase 1 |
| T5 | Constraint trade-off | N | No new trade-offs |
| T6 | Governance contract | N | Existing config contract |
| T7 | Supersedes | N | No ADR superseded |

**Outcome:** EXEMPT (E1–E5 pass; extends T01/T02 without new architecture).

---

## 3. Test design

| ID | Behavior | Expected check |
| -- | -------- | -------------- |
| T1 | `resolve_language_from_args(None, True)` | `en-GB` |
| T2 | `resolve_language_from_args("en-US", …)` | US payload |
| T3 | Interactive input `2` | `en-US` |
| T4 | Interactive default/empty | `en-GB` |
| T5 | `ensure_localisation_config` no file | Creates YAML |
| T6 | Existing file, no `--force` | Skip, unchanged |
| T7 | Existing file + `--force` | Overwrite |
| T8 | `--dry-run` | No file, message |
| T9 | `main()` order | Language before `collect_config_interactive` |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition T03 `TODO → IN PROGRESS`** | Task doc updated |
| 2 | Create `localisation_config.py` in workflow-mgt scripts | Shared module |
| 3 | Refactor `cli/localisation.py` to delegate | Stable T02 API |
| 4 | Wire `install_release_workflow.py` + argparse flags | Language-first install |
| 5 | Add `tests/test_install_release_workflow_localisation.py` | T1–T9 |
| 6 | Update installer docs + `INSTALL_IN_YOUR_PROJECT.md` | RF8 |
| 7 | Sync `greenfield-install/` scripts tree | Adopter parity |
| 8 | Run pytest installer + CLI regression | Green tests |
| 9 | `RW E21:S01:T03 --art` → `v0.21.1.3+1` | Release |
| **10** | **[MANDATORY] Reconcile T03 status to COMPLETE** with forensic marker | Task doc + kanban |

### 4.1 Files to create or modify

- `packages/frameworks/workflow-mgt/scripts/localisation_config.py` (CREATE)
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` (UPDATE)
- `cli/localisation.py` (UPDATE)
- `tests/test_install_release_workflow_localisation.py` (CREATE)
- `packages/frameworks/workflow-mgt/KB/.../rw-installer-quickstart-guide.md` (UPDATE)
- `INSTALL_IN_YOUR_PROJECT.md` (UPDATE)
- `greenfield-install/packages/frameworks/workflow-mgt/scripts/` (SYNC)

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Scope |
| ------ | ---- | ------ | ----- |
| D1 | `docs/implementation-cycles/IPP-E21S01T03-rw-installer-language-selection.md` | CREATE | This IPP |
| D2 | T03 task doc | UPDATE | Scope, planning links, status |
| D3 | `rw-installer-quickstart-guide.md` | UPDATE | Language-first step |
| D4 | `INSTALL_IN_YOUR_PROJECT.md` | UPDATE | Installer flags |
| D5 | Installer `--help` epilog | UPDATE | Flag examples |

---

## 6. Documentation housing

| Doc ID | Target path | Publication |
| ------ | ----------- | ----------- |
| D1 | `docs/implementation-cycles/` | PUBLISHED |
| D2 | `docs/project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/` | PUBLISHED |
| D3 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/` | PUBLISHED |
| D4 | Repo root | PUBLISHED |

---

## 7. Success / verification criteria

- [ ] Interactive install shows language prompt before “RW Configuration Setup”
- [ ] `ai-dev-kit-config.yaml` written with correct schema
- [ ] `--config rw-config.yaml` still works; language per RF5/RF6
- [ ] `tests/test_commands.py` still pass after `cli/localisation.py` refactor
- [ ] Installer docs mention language-first flow and flags
- [ ] `RW E21:S01:T03 --art` completes locally

---

## References

- [T03 task doc](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T03-add-language-selection-prompt-to-rw-installer-install-releas.md)
- [install_release_workflow.py](../../packages/frameworks/workflow-mgt/scripts/install_release_workflow.py)
- [IPP-E21S01T02](IPP-E21S01T02-cli-init-language-selection.md)
- [ai-dev-kit-config.example.yaml](../../packages/frameworks/workflow-mgt/config/examples/ai-dev-kit-config.example.yaml)
