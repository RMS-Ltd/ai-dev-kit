---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S07:T107 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T107-ide-command-whitelist-optimization.md`](../kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md) **(E06:S07:T107)**  
**Planning for:** Developer-experience / agent terminal approval friction (no dedicated FR; complements [BR-039](../kanban/fbu/BR-039-cascade-whitelist-security-prompt-usability-blocker.md))  
**Status:** Approved (implementation complete 2026-05-30 — release via `RW E06:S07:T107`)

> **IPW:** Produced 2026-05-30 for E06:S07:T107. Bidirectional wiring to task `Input` / `References` is mandatory before implementation (`FR-042`).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Document friction taxonomy: concrete command strings, version tokens (e.g. `v0.6.7.101+33`), path variants, RW/UKW validator invocations | T107 AC1, Problem Statement |
| RF2 | Pattern-based whitelist configuration maintained as version-controlled SoT | T107 AC2, AC4 |
| RF3 | Generalize high-frequency patterns: Python validation/framework scripts, git RW subset, `gh`, project-scoped `find`/`grep`, semver/version helpers | T107 AC3, Command Patterns |
| RF4 | Team guide for pattern maintenance, security context, and Cursor integration (honest enforcement model) | T107 AC6 |
| RF5 | Automated validation: each pattern matches documented `examples` and rejects documented negatives | T107 AC2, AC5 |
| RF6 | Manual UAT: before/after approval prompt count on representative RW mini-sequence; append-only evidence log | T107 AC5, AC7 |
| RF7 | Wire T107 ↔ IPP ↔ `.cursor/whitelist-patterns.yaml` ↔ `docs/developer-tools/ide-whitelist-guide.md` | T107 Deliverables, FR-042 |
| RF8 | Fix [FR-050](../kanban/fbu/FR-050-workflows-directory-structure-reorganization.md) incorrect implementing-task link (not T107) | IPW intake defect |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | **Security:** No unbounded `.*` on destructive commands (`rm`, `git push --force`, etc.); document `high_security` patterns and review gate | T107 Risks, guide |
| RNF2 | **Portability:** No hardcoded maintainer home paths in committed YAML; use `{PROJECT_ROOT}` placeholder + documented substitution | Draft YAML `find_operations` |
| RNF3 | **Honesty:** Do not claim YAML auto-approves in Cursor unless product integration is proven; changelog uses “attempted” language for IDE behavior | BR-039 guardrails, T107 Out of Scope |
| RNF4 | **Adopter copy:** Patterns and guide copyable to other ADK adopters with path substitution | story-007 in-scope |
| RNF5 | **Validator CI:** `validate_whitelist_patterns.py` exits non-zero on failure; pytest module in framework scripts tree | ADK convention |

### 1.3 Invariants and boundaries

- **Invariants:**
  - `.cursor/whitelist-patterns.yaml` remains the pattern catalog SoT.
  - RW/IPW/UKW workflow gates and validators are unchanged by this task.
  - Cursor is the primary maintainer IDE ([T57](../kanban/epics/epic-06/story-06-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md) closure policy).
- **In scope:** Pattern catalog refinement, repo validator + tests, maintainer playbook for Cursor Auto-Run/allowlist, UAT log, ADR-013 policy, FR-050 link correction.
- **Out of scope:**
  - Fixing Cascade/Windsurf product whitelist ([BR-039](../kanban/fbu/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) / [IPW-E6S6T57](IPW-E6S06T57-br039-vendor-blocker-planning.md)).
  - IDE vendor code changes (T107 Out of Scope).
  - FR-050 workflows directory reorganization delivery.
  - Cross-IDE parity (T107 Out of Scope).
  - Optional Cursor hooks spike — record pass/fail in UAT log only; not a closure dependency unless spike succeeds.

### 1.4 Draft artifact gap (baseline)

| Artifact | State | Gap |
| -------- | ----- | --- |
| `.cursor/whitelist-patterns.yaml` | Draft v1.0 (2026-03-07) | Hardcoded absolute `find` path; `settings.auto_approve_*` not wired to Cursor; no RW-specific patterns (semver, `gh`, board validators) |
| `docs/developer-tools/ide-whitelist-guide.md` | Draft | “IDE integration testing” / “team training” unchecked |
| `scripts/validate_whitelist_patterns.py` | Missing | AC5 automation |
| `docs/developer-tools/ide-whitelist-uat-log.md` | Missing | AC5/AC7 evidence |

---

## 2. Specification

### 2.1 Goal

Provide maintainers a **repeatable, version-controlled regex pattern catalog** and **verification tooling** so RW/UKW terminal command shapes need fewer one-off approvals in **Cursor**, using a **catalog + validator + maintainer playbook** enforcement model—without claiming to fix vendor whitelist bugs (BR-039) or auto-approving via YAML alone.

### 2.2 Specification mapping

| RF | Specification element |
| -- | --------------------- |
| RF1 | Friction taxonomy section in guide § “Friction analysis”; examples in UAT log baseline entry |
| RF2–RF3 | YAML `patterns:` entries with `pattern`, `description`, `examples`, optional `negative_examples` |
| RF4 | Guide § “Cursor integration” + § “Security contexts”; link ADR-013 |
| RF5 | `validate_whitelist_patterns.py` + pytest |
| RF6 | `ide-whitelist-uat-log.md` schema (date, scenario, prompts_before, prompts_after, result) |
| RF7 | Task Input/References; IPP §6 inbound links |
| RF8 | FR-050 `Implementing Task` → TBD (remove T107); note in FR body |

### 2.3 Constraints

- Task **out of scope** excludes patching Cursor IDE code; enforcement is **maintainer-operated** (translate patterns into Cursor allowlist UI / Auto-Run settings per product docs at implementation time).
- Pattern breadth must balance RNF1 (security) vs AC7 (friction reduction); prefer narrow patterns over `.*`.
- `{PROJECT_ROOT}` in YAML is a **documentation placeholder**; validator substitutes repo root at test time.

### 2.4 Status transition intent (mandatory)

- **Current task status:** `TODO`
- **Transition to IN PROGRESS:** First non-planning implementation change (IPP alone does not trigger).
- **Transition to COMPLETE:** All T107 AC1–AC7 satisfied with linked evidence (validator green + UAT log entry + guide updated).
- **Atomic propagation:** Task doc status and `kboard.md` row updated in same RW Step 7 session when closing.
- **Owner:** Implementation execution per §4 Step 1 and final step.

### 2.5 ADR necessity decision (IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **Y** | Catalog-only vs validator-only vs hook automation vs manual Cursor UI only |
| T2 | Reversibility | **N** | Revert YAML + script + docs in one PR |
| T3 | Blast radius | **N** | Confined to `.cursor/`, `docs/developer-tools/`, one validation script |
| T4 | Precedent | **Y** | Future ADK/RW sessions will cite allowlist catalog approach |
| T5 | Constraint trade-off | **Y** | Explicit security vs agent-ergonomics trade for git/terminal patterns |
| T6 | Governance contract | **N** | Does not alter RW/IPW/UKW steps or global gates |
| T7 | Supersedes | **N** | No existing ADR on IDE allowlist catalog |

**Outcome:** `REQUIRED` — create [ADR-013](../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md) during implementation (§5 D10).

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | — | Not evaluated (≥1 trigger Y) |
| E2 | No new options | — | — |
| E3 | Reversible in one task | — | — |
| E4 | Spec elsewhere | — | — |
| E5 | Documented NONE | — | — |

---

## 3. Test design

**`--skip-tests`:** Not used — mixed automated + manual UAT.

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | YAML schema | Required keys per pattern (`pattern`, `description`, `examples`); valid regex compile | RF2, RF5 |
| T2 | Positive examples | Every `examples[]` entry matches its pattern | RF3, RF5 |
| T3 | Negative examples | Every `negative_examples[]` entry does **not** match | RF5, RNF1 |
| T4 | Path portability | No `/Users/` or other home-specific absolute paths in committed patterns | RNF2 |
| T5 | RW fixture coverage | Parametrized commands from `validate_branch_context.py`, `validate_version_bump.py`, `validate_changelog_format.py`, `validate_kanban_state_icons.py` invocations match intended patterns | RF3 |
| T6 | Dangerous breadth | Lint rejects patterns matching `^git push.*--force` under low-security auto rules (if documented) | RNF1 |
| T7 | Manual UAT | Maintainer runs 10-command RW subset in Cursor; records prompt counts in UAT log | RF6, AC5, AC7 |

### 3.1 RW mini-sequence (UAT T7)

1. `python ".../validate_branch_context.py" --strict`
2. `python ".../validate_rw_task_complete.py" --requested "E06:S07:T107"`
3. `python ".../validate_kanban_state_icons.py" --strict`
4. `git status`
5. `git add -A` (dry-run mindset — or status only if preferred)
6. `python ".../semver_converter.py" "0.6.7.107+1"`

Record `prompts_before` (baseline session) vs `prompts_after` (after applying Cursor allowlist from catalog).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition E06:S07:T107 `TODO → IN PROGRESS`** in task doc; set `Started` date; update `Last updated`. | Task doc `Status` = `IN PROGRESS` |
| 2 | **Research spike:** Document current Cursor command allowlist / Auto-Run / sandbox behavior (product docs + maintainer notes). | Guide § “Cursor integration”; UAT log spike entry |
| 3 | **CREATE** [ADR-013](../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md): catalog SoT, enforcement model (catalog + validator + manual Cursor), security rules, BR-039 boundary. | ADR-013 Accepted |
| 4 | **UPDATE** `.cursor/whitelist-patterns.yaml`: `{PROJECT_ROOT}`; RW patterns; move non-enforceable `settings.*` to `recommended_maintainer_settings` (documentation-only); add `negative_examples` where useful. | YAML v1.1 |
| 5 | **CREATE** `packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py` (load YAML from repo root `.cursor/whitelist-patterns.yaml`). | Validator CLI |
| 6 | **CREATE** `packages/frameworks/workflow-mgt/scripts/validation/test_validate_whitelist_patterns.py`. | pytest |
| 7 | **UPDATE** `docs/developer-tools/ide-whitelist-guide.md`: friction taxonomy, integration truth table, validator usage, ADR-013 link. | Guide v1.1 |
| 8 | **CREATE** `docs/developer-tools/ide-whitelist-uat-log.md` (append-only; T57-style fields). | UAT log |
| 9 | **UPDATE** [FR-050](../kanban/fbu/FR-050-workflows-directory-structure-reorganization.md): remove T107 from `Implementing Task`; set TBD intake note. | FR wiring |
| 10 | **UPDATE** [BR-039](../kanban/fbu/BR-039-cascade-whitelist-security-prompt-usability-blocker.md): complementary link to T107 / guide (does not fix product). | Cross-link |
| 11 | **UPDATE** [workflow-initiation-cheatsheet.md](../guides/workflow-initiation-cheatsheet.md) or [AGENTS.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md): one-line pointer to guide under agent friction (if warranted). | Discoverability |
| 12 | Run validator + pytest; complete UAT T7; tick T107 AC1–AC7 with evidence links. | §7 checklist |
| 13 | **`RW E06:S07:T107`** — version, changelog, four-surface kanban. | Release |
| **14** | **[MANDATORY] Reconcile T107 status** → `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs met; else `IN PROGRESS` or `BLOCKED` with reason. | Task + kboard |

### 4.1 Files to create or modify

| Path | Action |
| ---- | ------ |
| `docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md` | CREATE |
| `.cursor/whitelist-patterns.yaml` | UPDATE |
| `packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/validation/test_validate_whitelist_patterns.py` | CREATE |
| `docs/developer-tools/ide-whitelist-guide.md` | UPDATE |
| `docs/developer-tools/ide-whitelist-uat-log.md` | CREATE |
| `docs/kanban/.../T107-*.md` | UPDATE (status, AC checkboxes, IPP links) |
| `docs/kanban/fbu/FR-050-*.md` | UPDATE |
| `docs/kanban/fbu/BR-039-*.md` | UPDATE (optional cross-link) |
| `docs/governance/README.md` | UPDATE (developer-tools pointer, if section exists) |

### 4.2 Dependency order

1. ADR-013 (decision record) before broadening git patterns in YAML.
2. YAML structure before validator (validator reads YAML).
3. Validator green before UAT “after” measurement.
4. RW after all evidence attached to task doc.

### 4.3 Documentation implementation steps

1. ADR-013 → YAML → validator → guide → UAT log → task AC ticks → RW.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/kanban/.../T107-ide-command-whitelist-optimization.md` | Input/References → IPP; AC evidence; status | RF7, Step 1/14 |
| D-U2 | `.cursor/whitelist-patterns.yaml` | Portable paths, RW patterns, schema cleanup | RF2–RF3 |
| D-U3 | `docs/developer-tools/ide-whitelist-guide.md` | Integration truth, validator, friction taxonomy | RF1, RF4 |
| D-U4 | `docs/kanban/fbu/FR-050-*.md` | Remove incorrect T107 implementing link | RF8 |
| D-U5 | `docs/kanban/fbu/BR-039-*.md` | Complementary T107 pointer | RNF3 |
| D-U6 | `docs/governance/README.md` | Link developer-tools guide (if index present) | RF4 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E6S7T107-ide-command-whitelist-optimization.md` | This IPP | IPW |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md` | Allowlist policy | §2.5 REQUIRED |
| D-C3 | `docs/developer-tools/ide-whitelist-uat-log.md` | UAT evidence | RF6 |
| D-C4 | `packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py` | Pattern tests | RF5 |
| D-C5 | `packages/frameworks/workflow-mgt/scripts/validation/test_validate_whitelist_patterns.py` | pytest | RNF5 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Docusaurus portal surface | **NONE** — maintainer-local docs; `NOT_APPLICABLE` per BR-066 |
| Duplicate inline T107 “Implementation Plan” phases | **UPDATE** task doc → “see IPP §4” |
| FR dedicated to whitelist | **NONE** — DX task; BR-039 covers vendor track |
| Windsurf/Cascade guide | **NONE** — out of scope per T107 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E6S7T107-ide-command-whitelist-optimization.md` | NOT_APPLICABLE | Planning package; task-linked | evergreen | T107 Input, References |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md` | NOT_APPLICABLE | ADR index via governance README | evergreen | Guide, IPP §2.5, governance README |
| D-C3 | `docs/developer-tools/ide-whitelist-uat-log.md` | NOT_APPLICABLE | Maintainer evidence | evergreen | T107 References, guide |
| D-U2 | `.cursor/whitelist-patterns.yaml` | NOT_APPLICABLE | IDE-adjacent config | evergreen | Guide, ADR-013 |
| D-U3 | `docs/developer-tools/ide-whitelist-guide.md` | NOT_APPLICABLE | Developer maintainer | evergreen | T107, cheatsheet/AGENTS (optional) |
| D-C4–D-C5 | `packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py` (+ test) | NOT_APPLICABLE | Script | evergreen | Guide § “Running the validator” |

---

## 7. Success / verification criteria

### IPW complete (planning)

- [x] IPP §1–§7 present with content
- [x] §2.5 scored; outcome `REQUIRED` → ADR-013 in §5
- [x] §4 Step 1 and Step 14 (reconciliation) present
- [x] T107 bidirectional links to this IPP

### Implementation complete (future)

- [ ] `python ".../validate_whitelist_patterns.py"` exits 0
- [ ] `pytest .../test_validate_whitelist_patterns.py` passes
- [ ] UAT log has at least one before/after entry with prompt counts
- [ ] T107 AC1–AC7 checked with evidence links
- [ ] ADR-013 Accepted; listed in `docs/governance/README.md`
- [ ] FR-050 no longer references T107
- [ ] All §5 UPDATE/CREATE rows implemented or deferred with reason in task doc
- [ ] `RW E06:S07:T107` cut with four-surface kanban sync

### Enforcement model (reference)

| Layer | Role |
| ----- | ---- |
| **Catalog** | `.cursor/whitelist-patterns.yaml` — regex SoT |
| **Validator** | Repo CI/local proof patterns are coherent |
| **Playbook** | Guide — map patterns to Cursor allowlist UI |
| **UAT** | Human-measured prompt reduction |
| **Not in scope** | Cursor reading YAML automatically (unless product adds support) |

---

## References

- [T107 — IDE command whitelist optimization](../kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md)
- [story-007 — ADK implementation analysis](../kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management.md)
- [BR-039 — Cascade whitelist usability](../kanban/fbu/BR-039-cascade-whitelist-security-prompt-usability-blocker.md)
- [E06:S06:T57 — BR-039 repo track](../kanban/epics/epic-06/story-06-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md)
- [IPW-E6S6T57 — BR-039 planning](IPW-E6S06T57-br039-vendor-blocker-planning.md)
- [ide-whitelist-guide.md](../developer-tools/ide-whitelist-guide.md) (draft)
- [.cursor/whitelist-patterns.yaml](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/whitelist-patterns.yaml) (draft)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042 — IPW](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md)
- [FR-094 — IPW slash command](../kanban/fbu/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)
