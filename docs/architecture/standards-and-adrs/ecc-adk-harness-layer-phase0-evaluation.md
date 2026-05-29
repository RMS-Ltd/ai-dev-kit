---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ECC ↔ AI Dev Kit — Phase 0 compatibility evaluation

**Status:** Complete (Phase 0)  
**Date:** 2026-05-26  
**Task:** [E6:S09:T04](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md)  
**Normative spec:** [Integration specification](./ecc-adk-harness-layer-integration-specification.md)  
**Attribution:** See [spec §1](./ecc-adk-harness-layer-integration-specification.md#1-third-party-attribution)

---

## 1. Executive summary

**Phase 1 decision: GO**

AI Dev Kit and ECC are **genuinely complementary**. Phase 0 found **no ADK skill name collisions** with ECC's catalog, **no ECC equivalents** for ADK governance workflows (RW/UKW/IPW/intake), and **documented, bridgeable conflicts** (git workflow, planning gates, version schema). ADK validators pass without ECC installed.

**Proceed to Phase 1** (ADK workflow skill pack in ECC `SKILL.md` format) as **E6:S09:T05**, subject to: namespaced `adk-*` skills, bridge config adoption, and install-path discipline (no blind merge of 342-file ECC overlay into ADK `.cursor/` without review).

**Blockers:** None for Phase 1 planning. **Caution:** npm `ecc-universal@1.10.0` `--profile core --without baseline:hooks` dry-run still plans hook adapter files and 342 operations under `.cursor/`, overlapping ADK's existing `.cursor/skills/` tree — Phase 1/2 must define namespace or selective install strategy.

---

## 2. Evaluation metadata

| Field | Value |
|-------|--------|
| **Executor** | Agent (implementation session) |
| **Harness target** | Cursor |
| **Branch** | `dev` (evaluation via dry-run; no ECC files written to repo) |
| **ECC npm package** | `ecc-universal@1.10.0` |
| **ECC GitHub reference** | [affaan-m/ECC](https://github.com/affaan-m/ECC) (v2.0.0-rc.1 documented upstream; npm pin may lag) |
| **Install command tested** | `npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks --dry-run` |
| **ADK baseline validator** | `validate_branch_context.py --strict` → exit 0 on `dev` @ `0.4.13.7+2` |

---

## 3. Reproducible procedure

### 3.1 Baseline (no ECC)

```bash
git checkout dev
python "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict
```

Expected: exit 0.

### 3.2 ECC install plan (dry-run — recommended first)

```bash
npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks --dry-run
```

Review planned operations under `.cursor/`. **Do not apply** until bridge strategy is defined.

Note: GitHub ECC docs reference `--profile minimal`; npm `1.10.0` profiles are `core`, `developer`, `security`, `research`, `full`. Pin the package you use.

### 3.3 Optional live install (disposable branch only)

```bash
git checkout -b spike/ecc-adk-phase0
npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks
# evaluate, then rollback:
# npx -p ecc-universal ecc doctor  # if available
# remove paths listed in .cursor/ecc-install-state.json
git checkout dev && git branch -D spike/ecc-adk-phase0
```

### 3.4 Rollback

- Discard spike branch.
- Remove ECC install-state and files listed in `.cursor/ecc-install-state.json` if live install was performed.
- ADK `.cursor/skills/` (7 ADK skills) must remain authoritative.

---

## 4. Compatibility matrix

| ADK surface | ECC nearest equivalent | Same? | Disposition | Rationale |
|-------------|------------------------|-------|-------------|-----------|
| `version-bump` | `git-workflow` (SemVer section) | No | **conflict-resolve** → ADK | Internal `RC.EPIC.STORY.TASK+BUILD` schema |
| `ukw-sync` | `project-flow-ops` | No | **keep** ADK; **exclude** ECC for Kanban | ECC is GitHub/Linear triage, not E/S/T boards |
| `intake-process` | *(none)* | No | **keep** ADK | Atomic FR/BR/UXR intake is ADK-specific |
| `cmw-maintain` | `git-workflow` (changelog gen) | No | **keep** ADK | CMW archive ordering and immutability rules |
| `readme-update` | `doc-updater` agent | No | **keep** ADK | RW Step 5 SemVer via `semver_converter` |
| `kanban-completed-update` | *(none)* | No | **keep** ADK | ADK board hygiene |
| `fr-br-uxr-completed-update` | *(none)* | No | **keep** ADK | FBU completed ledger |
| `.cursorrules` RW trigger | *(none)* | No | **keep** ADK | ECC has no RW workflow |
| `.cursorrules` UKW / IPW | `/plan`, `plan-orchestrate` | No | **conflict-resolve** → ADK IPW | IPP gate and task linkage |
| `.cursorrules` RW-only git | `git-workflow` | No | **conflict-resolve** → ADK RW | Normal git/PR workflow vs RW-only |
| `.claude/commands/rw.md` | ECC legacy shims | No | **keep** ADK | No `rw` namespace collision in ECC catalog |
| `.claude/commands/ukw.md` | *(none)* | No | **keep** ADK | |
| `.claude/commands/ipw.md` | *(none)* | No | **keep** ADK | |
| `rw-config.yaml` | *(none)* | No | **keep** ADK | Validator path SoT |
| Domain TDD / language craft | `tdd-workflow`, `python-patterns`, etc. | N/A | **merge** (optional) | Net-new ECC value; no ADK equivalent |

**Skill name collision scan:** 0 collisions (ADK 7 skills vs ECC 246 skills on GitHub `main`).

---

## 5. Checklist evidence (summary)

Full tables with evidence in [T04 task doc](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md).

| Section | Result |
|---------|--------|
| **A** Environment | PASS (dry-run); A2 profile note: use `core` on npm 1.10.0 |
| **B** ADK governance | PASS — ECC does not define RW/UKW/IPW; conflicts documented |
| **C** Complementarity | PASS — C1 PASS, C2 PASS, C3 PASS (zero collisions) |
| **D** Triggers/commands | PASS — no rw/ukw/ipw shim collision |
| **E** Context | PASS (qualitative) — dual layer increases `.cursor/` surface; hooks-off + selective install recommended |
| **F** Validators | PASS — baseline validator exit 0 without ECC |
| **G** Outputs | PASS — this doc + spec + bridge template |

---

## 6. Context load assessment

- ADK `.cursorrules` is large (RW/UKW/IPW/Cmw/PVW triggers).
- ECC `core` profile dry-run: **342 file operations** into `.cursor/` including many skills and hook adapters.
- **Recommendation:** Default adopters **hooks minimal/off**; do not install full ECC overlay on ADK canonical repos without Phase 1 namespace strategy (`adk-*` skills separate from ECC domain skills).
- ECC `ECC_HOOK_PROFILE=minimal` and `ECC_SESSION_START_CONTEXT=off` documented upstream for low-context setups.

---

## 7. Recommendations and follow-on tasks

### Phase 1 prerequisites

1. Publish ADK workflow skills as `adk-release-workflow`, `adk-kanban-sync`, `adk-implementation-planning`, etc.
2. Define install strategy: ECC domain skills vs ADK skills coexistence under `.cursor/skills/`.
3. Adopt [`ecc-adk-bridge.yaml.template`](../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template) in adopters.

### Follow-on task

- **E6:S09:T05** — ADK workflow skill pack (FR-098 Phase 1) — stub filed in Story 009.

### Deferred

- Greenfield installer step (FR-098-F5) — Phase 2
- Full user-doc narrative (FR-098-F6) — partial via spec + installation guide pointer

---

## 8. Attribution

ECC is third-party MIT software. See [integration specification §1](./ecc-adk-harness-layer-integration-specification.md#1-third-party-attribution).
