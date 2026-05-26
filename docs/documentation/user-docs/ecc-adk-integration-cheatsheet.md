---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ECC + AI Dev Kit — integration cheatsheet

Quick reference for adopters who want **ECC** (harness execution) alongside **AI Dev Kit** (project governance). ECC is **optional**; ADK works without it.

**Normative detail:** [ECC ↔ ADK integration specification](../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)  
**Phase 0 evidence:** [Phase 0 evaluation](../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md)  
**Upstream ECC:** https://github.com/affaan-m/ECC (MIT)

---

## 1. One-line mental model

| Layer | You use it for |
| ----- | -------------- |
| **ADK** | *What* to build, *how* it is tracked, *how* it ships (Kanban, FR/BR, IPW, **RW**, UKW, validators, versioning) |
| **ECC** (optional) | *How well* the agent codes (domain skills, TDD patterns, language craft, optional security scan skills, hooks) |

**Rule of thumb:** Plan and ship with ADK; execute implementation sessions with ECC domain skills loaded — but **never let ECC override ADK git or planning gates.**

---

## 2. Who owns what (don’t fight the stack)

| Concern | Use this | Not this |
| ------- | -------- | -------- |
| Release / version / changelog | `RW` + `adk-release-workflow` | ECC `git-workflow` auto-commit advice |
| Kanban / boards / FR closure | `UKW` + `adk-kanban-sync` | ECC `project-flow-ops` (GitHub/Linear triage only) |
| Spec + tests + IPP before code | `IPW` + `adk-implementation-planning` | ECC `/plan` or `plan-orchestrate` alone |
| FR/BR/UXR → tasks | Intake + `adk-intake-fr-br-uxr` | Ad-hoc task files |
| Internal version `0.E.S.T+B` | `adk-version-bump` + `rw-config.yaml` | Generic SemVer-only workflows |
| Python/React/TDD craft | ECC domain skills (e.g. `python-patterns`, `tdd-guide`) | Re-implementing in `.cursorrules` |
| Pre-commit security scan (optional) | ECC AgentShield-style skills | Replacing RW Step 9 validators |

---

## 3. Five-minute setup (brownfield ADK repo)

### Step A — ADK already installed

You should already have:

- `rw-config.yaml`, `.cursorrules` / `CLAUDE.md`
- `docs/project-management/kanban/`
- Workflow scripts under `packages/frameworks/workflow mgt/`

### Step B — Phase 0 sanity check (recommended)

On a **throwaway branch**, dry-run ECC install — do not blind-merge 300+ files into `.cursor/`:

```bash
npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks --dry-run
```

Review the planned paths. Confirm **no collision** with existing ADK `.cursor/skills/`. See [Phase 0 evaluation §6](../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md).

### Step C — Bridge config

```bash
cp "packages/frameworks/workflow mgt/config/ecc-adk-bridge.yaml.template" ecc-adk-bridge.yaml
python "packages/frameworks/workflow mgt/scripts/validation/validate_ecc_adk_bridge.py" --bridge ecc-adk-bridge.yaml
```

Or use the install helper (dry-run + optional copy):

```bash
"packages/frameworks/workflow mgt/scripts/install/install_ecc_harness_optional.sh" --copy-bridge
```

Edit:

- `harness_layer.enabled: true` only after Phase 0 passes on **your** project
- `ecc_version_pin` — record the npm/git ref you actually tested
- `hook_profile: minimal` (default for ADK adopters)
- `excluded_components: [baseline:hooks]` until you deliberately enable hooks (Phase 3)

### Step D — Install ECC (when ready)

Use **one** install path only (plugin **or** `ecc-install`, not both). Prefer hooks off initially:

```bash
npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks
```

Environment knobs (low context):

```bash
export ECC_HOOK_PROFILE=minimal
export ECC_SESSION_START_CONTEXT=off
```

### Step E — ADK workflow skill pack (ECC-format pointers)

Copy or symlink ADK’s portable skills into the harness (paths on **`main`** after FR-098 Phase 1):

`packages/frameworks/workflow mgt/skills/`

| Skill folder | Trigger / use | ADK command |
| ------------ | ------------- | ----------- |
| `adk-release-workflow` | Version, changelog, commit, tag, push | `RW E#:S#:T#` |
| `adk-kanban-sync` | Board + doc consistency | `UKW` / `UKW -u` |
| `adk-implementation-planning` | IPP before implementation | `IPW E#:S#:T#` |
| `adk-intake-fr-br-uxr` | FR/BR/UXR → tasks | Intake workflow |
| `adk-version-bump` | `RC.EPIC.STORY.TASK+BUILD` semantics | Inside RW Step 2 |

These skills are **thin**: they point at KB guides and `.cursorrules`; they do not duplicate full RW prose.

Set `adk_skill_pack_path` in `ecc-adk-bridge.yaml` to that directory.

### Step F — Validate skill pack + bridge (maintainers / CI)

```bash
python "packages/frameworks/workflow mgt/scripts/validation/validate_adk_ecc_skill_pack.py"
python "packages/frameworks/workflow mgt/scripts/validation/validate_ecc_adk_bridge.py"
```

### Step G — Hooks (Phase 3 defaults)

- Keep `hook_profile: minimal` and `excluded_components: [baseline:hooks]` until you review SessionStart / pre-RW behavior.
- Populate `disabled_hooks` from the bridge template examples (RW/git conflicts).
- **Pre-RW advisory:** Any ECC pre-RW quality hook is **non-blocking**; ADK **Step 10** validators remain authoritative ([AgentShield bridge doc](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/ecc-agentshield-rw-step9-bridge.md)).

---

## 4. Daily workflow cheat sheet

Typical feature flow with **both** layers:

```
1. Intake     → FR/BR doc + E:S:T task (ADK)
2. IPW        → IPP in docs/implementation-cycles/ (ADK gate — blocks implementation)
3. Implement  → ECC domain skills + tests (ECC craft; ADK task status IN PROGRESS)
4. UKW        → Optional drift repair between releases (ADK)
5. RW         → Only path to commit/push/tag (ADK)
```

### Command quick reference

| Goal | Say / run | Layer |
| ---- | --------- | ----- |
| Plan a task | `IPW E2:S16:T12` | ADK |
| Implement (after IPP linked) | Normal agent session; invoke ECC skills by name for language/TDD | ECC |
| Sync boards | `UKW` or `UKW -u` | ADK |
| Release work | `RW E2:S16:T12` (add `--art` if intentional anchor adoption) | ADK |
| Docs-only release | `RW -d E…:S…:T…` | ADK |
| Kanban init row | `RW -k E…:S…:T…` | ADK |

### Phase 5.0 reminder (FR-100)

Every **IPW** run scores [ADR necessity](../../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) **before** doc inventory. ECC planning skills do not replace that gate.

---

## 5. Conflict rules (memorize these four)

Configured in `ecc-adk-bridge.yaml` → `conflict_rules`:

| ECC surface | ADK wins because |
| ----------- | ---------------- |
| `git-workflow` | **RW-only** commit/push (`.cursorrules`) |
| `plan` / `plan-orchestrate` | **IPW** + IPP under `docs/implementation-cycles/` |
| `project-flow-ops` | **Exclude** — not ADK Kanban |
| (version text) | ADK `version-bump` + validators |

If the agent suggests `git commit` outside RW, **stop** and run `RW` with the correct `E:S:T`.

---

## 6. Getting the most from ECC (without bloat)

### Do

- Use ECC for **language-specific** and **TDD** skills during implementation.
- Keep **hooks minimal** until you have reviewed SessionStart / pre-commit behavior.
- Run ECC install **dry-run** before writing to `.cursor/`.
- Pin `ecc_version_pin` in the bridge file and re-run Phase 0 when upgrading ECC.
- Let **RW Step 9** remain the release validator suite; treat ECC security skills as **extra** signal.

### Don’t

- Install full ECC overlay + Claude marketplace plugin + manual copy (**single install path**).
- Use ECC `project-flow-ops` instead of UKW for `kboard.md` / `fbuboard.md`.
- Skip IPW because ECC offered a generic plan.
- Bump SemVer MINOR “because we added ECC” — FR-098 phases are **PATCH-only**; MINOR is Epic 6 sign-off.
- Merge ECC’s `.cursor/` tree into ai-dev-kit canonical repos without namespace review.

---

## 7. Context budget tips

ECC `core` profile can add **hundreds** of skill files. ADK `.cursorrules` is already large.

| Profile | When |
| ------- | ---- |
| `minimal` hooks + `ECC_SESSION_START_CONTEXT=off` | Default for ADK repos |
| `standard` / hooks on | Only after Phase 3 hook alignment |
| Full ECC catalog | Greenfield app repos **without** ADK Kanban, or selective skill install |

Prefer **namespaced** `adk-*` skills for governance and **ECC** skills for domain work — avoid duplicating RW/UKW/IPW text in both places.

---

## 8. Troubleshooting

| Symptom | Likely cause | Fix |
| ------- | ------------ | --- |
| Agent commits outside RW | ECC `git-workflow` | Reinforce `.cursorrules`; bridge `defer_to: adk-release-workflow` |
| Planning with no IPP | ECC plan skill | Run `IPW E:S:T`; link IPP from task |
| `.cursor/skills` explosion | Full `ecc-install` | `--without baseline:hooks`; dry-run first |
| Dry-run still lists `.cursor/hooks/*` | `--without baseline:hooks` excludes `hooks-runtime` module, not all hook file drops | Inspect dry-run plan; do not `--execute` until hook + `common-git-workflow.mdc` risk reviewed |
| Version mismatch on branch | Wrong epic in `version.py` | RW Step 1 `validate_branch_context.py --strict` |
| Duplicate triggers | Plugin + installer | One install path; check `ecc-adk-bridge.yaml` `single_install_path` |

**Rollback:** ECC upstream `uninstall` dry-run, or remove paths listed in `.cursor/ecc-install-state.json` (see integration spec §8).

---

## 9. Where to read more

| Topic | Document |
| ----- | -------- |
| Full contract | [Integration specification](../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md) |
| GO/NO-GO matrix | [Phase 0 evaluation](../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md) |
| FR scope / phases | [FR-098](../../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md) |
| Greenfield install | [INSTALL_IN_YOUR_PROJECT.md](../../../INSTALL_IN_YOUR_PROJECT.md) |
| RW detail | `packages/frameworks/workflow mgt/KB/.../release-workflow-agent-execution.md` |
| Bridge template | `packages/frameworks/workflow mgt/config/ecc-adk-bridge.yaml.template` |

---

## 10. Phase roadmap (what’s shipped vs next)

| Phase | What you get today |
| ----- | ------------------ |
| **0** | Spec, evaluation, bridge template — **done** |
| **1** | `adk-*` skill pack + `validate_adk_ecc_skill_pack.py` — **done** ([T05](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md)) |
| **2** | `install_ecc_harness_optional.sh`, `validate_ecc_adk_bridge.py`, INSTALL optional step — **done** ([T06](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098.md)) |
| **3** | Hook defaults in bridge template + cheatsheet §3G — **done** |
| **4** | [AgentShield RW add-on doc](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/ecc-agentshield-rw-step9-bridge.md) — **done** |
| **5** | Layered architecture + book sidebar (§11) — **done** |

If `adk-*` skills are missing on your branch, merge `dev`/`main` or copy the `skills/` tree from [T05](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md).

---

## 11. Layered architecture and book positioning (FR-098-F6)

**ADK = project operating system** — Kanban, FR/BR/UXR, IPW gate, RW/UKW, forensic versioning, validators.  
**ECC = harness execution layer** — domain skills, TDD craft, optional hooks and security scan skills.

Cross-links:

- [AI Dev Kit vision and purpose](../../documentation/ai-dev-kit-vision-and-purpose.md)
- [Integration specification](../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)

**Book sidebar (Head First AI-Assisted Development):** Position ECC as an optional **15-minute harness sidebar** after the ADK full-stack install — same mental model as §1 above. Readers install ADK first; ECC augments agent craft without replacing governance workflows.
