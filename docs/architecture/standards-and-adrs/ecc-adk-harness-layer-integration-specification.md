---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ECC ↔ AI Dev Kit harness layer integration specification

**Status:** Active (Phase 0 — normative contract)  
**Version:** 1.0.0  
**Last Updated:** 2026-05-26  
**Task:** [E6:S09:T04](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md)  
**FR:** [FR-098](../../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)  
**Empirical evidence:** [Phase 0 evaluation](./ecc-adk-harness-layer-phase0-evaluation.md)

---

## 1. Third-party attribution

AI Dev Kit optionally integrates with **[ECC](https://github.com/affaan-m/ECC)** (MIT License), the open-source harness-native operator system by [Affaan Mustafa](https://github.com/affaan-m) and contributors. ECC is **not** part of AI Dev Kit, is **not** required for ADK correctness, and is installed separately via upstream tooling (e.g. `npx -p ecc-universal ecc-install`). AI Dev Kit does not fork or redistribute ECC; adopters obtain ECC directly from the upstream repository under its MIT license.

| Field | Value |
|-------|--------|
| **Project** | ECC (Execution Consistency Contract) |
| **Upstream** | https://github.com/affaan-m/ECC |
| **License** | MIT ([upstream LICENSE](https://github.com/affaan-m/ECC/blob/main/LICENSE)) |
| **npm installer** | `ecc-universal` (bin: `ecc-install`) — distinct from Claude marketplace id `ecc@ecc` |
| **Commercial boundary** | [ECC Pro](https://ecc.tools) / GitHub App are **separate** upstream offerings; ADK OSS integration docs reference the MIT OSS path only |

---

## 2. Purpose and non-goals

### Purpose

Define how an adopter may **optionally** combine:

- **AI Dev Kit (ADK)** — project governance (Kanban, FR/BR/UXR, RW/UKW/IPW, forensic versioning, validators)
- **ECC** — harness execution (domain skills, hooks, security scanning, cross-IDE portability)

### Non-goals

- ADK does **not** require ECC for correct operation.
- ECC does **not** replace ADK workflows (RW, UKW, IPW, intake, Kanban).
- ADK does **not** vendor-fork or ship ECC source in-tree.
- This specification does **not** endorse or bundle ECC Pro / paid upstream products.

---

## 3. Layered architecture

| Layer | Owner | Responsibility |
|-------|-------|----------------|
| **Project governance** | AI Dev Kit | Work structure, release process, traceability, validators |
| **Harness execution (optional)** | ECC (upstream) | Coding craft, TDD, language patterns, harness hooks, security scan skills |
| **Agent runtime** | Cursor / Claude Code / etc. | Loads rules, skills, hooks from both layers |

ADK answers *what* work exists and *how* it ships. ECC answers *how well* agents execute domain tasks. See [Phase 0 evaluation](./ecc-adk-harness-layer-phase0-evaluation.md) for empirical compatibility evidence.

---

## 4. Integration boundaries

| Concern | Authoritative source |
|---------|---------------------|
| RW / UKW / IPW triggers | ADK `.cursorrules`, `.claude/commands/` |
| Git commit and push | ADK RW-only policy (`.cursorrules`) |
| Version schema | ADK `RC.EPIC.STORY.TASK+BUILD` (`rw-config.yaml`, version file) |
| Kanban / FR/BR/UXR intake | ADK Kanban framework |
| IPW implementation gate | ADK IPP / task doc linkage |
| Release validators | ADK `packages/frameworks/workflow mgt/scripts/validation/` |
| Domain TDD / language skills | ECC (optional) |
| Session hooks (optional) | ECC — advisory unless explicitly promoted to CI |
| Security scan skill (optional) | ECC AgentShield — complements, does not replace RW Step 9 |

---

## 5. Disposition vocabulary

When mapping ADK surfaces to ECC in the compatibility matrix:

| Disposition | Meaning |
|-------------|---------|
| **keep** | ADK surface remains sole authority; ECC not used for this concern |
| **merge** | Both may coexist with explicit bridge rules (rare in Phase 0) |
| **exclude** | Do not enable corresponding ECC surface when using ADK |
| **conflict-resolve** | ECC surface exists but ADK rule wins via bridge config |

---

## 6. Known conflict rules (initial)

Subject to [Phase 0 validation](./ecc-adk-harness-layer-phase0-evaluation.md):

| ADK rule | ECC surface | Resolution |
|----------|-------------|------------|
| Commits/pushes **RW-only** | `git-workflow` skill | `conflict-resolve`: defer to ADK RW; disable ECC auto-commit guidance in bridge |
| IPW gate + IPP artifacts | `/plan`, `plan-orchestrate` | `conflict-resolve`: IPW/IPK mandatory for ADK tasks; ECC plan is generic only |
| Internal version schema | SemVer section in `git-workflow` | `conflict-resolve`: ADK `version-bump` skill + validators |
| Kanban UKW / intake | `project-flow-ops` | `exclude` for Kanban; ECC skill is GitHub/Linear triage only |

---

## 7. Bridge configuration

Template: [`packages/frameworks/workflow mgt/config/ecc-adk-bridge.yaml.template`](../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template)

Adopters copy to project root as `ecc-adk-bridge.yaml` (optional). Fields:

- `ecc_version_pin` — npm or git ref evaluated against upstream
- `hook_profile` — `minimal` | `standard` | `strict` (ECC env); default `minimal` for ADK adopters
- `disabled_hooks` — list of ECC hook IDs that conflict with RW/git policy
- `conflict_rules` — map ECC skill/command → ADK authority
- `adk_skill_pack_path` — placeholder for Phase 1 ADK workflow skills in ECC format

---

## 8. Install discipline

1. **Single install path** — do not stack Claude plugin + full `ecc-install` + manual copy (per ECC README).
2. **Evaluate before merge** — run Phase 0 procedure on a disposable branch; do not merge `.cursor/` ECC overlay into ADK repos without bridge review.
3. **Profile naming** — GitHub ECC `v2.0.0-rc.1` documents `minimal` profile; npm `ecc-universal@1.10.0` uses `core` profile. Pin and document the package actually used.
4. **Hooks** — prefer hooks-off or `ECC_HOOK_PROFILE=minimal` until Phase 3 hook alignment is validated.
5. **Rollback** — `node scripts/ecc.js uninstall --dry-run` from ECC clone, or remove `.cursor/ecc-install-state.json` and ECC-managed paths listed in install state.

Canonical procedure: [Phase 0 evaluation §3](./ecc-adk-harness-layer-phase0-evaluation.md).

---

## 9. Phase roadmap (FR-098)

| Phase | Deliverable | Task |
|-------|-------------|------|
| **0** | Compatibility matrix + bridge template + this spec | **E6:S09:T04** (complete) |
| **1** | ADK workflow skill pack (`adk-*` in ECC `SKILL.md` format) | E6:S09:T05 (planned) |
| **2** | Optional greenfield installer step + `ecc-adk-bridge.yaml` | Follow-on |
| **3** | Hook alignment (SessionStart context, pre-RW quality gate) | Follow-on |
| **4** | AgentShield optional RW Step 9 bridge | Follow-on |
| **5** | Book / public positioning sidebar | Follow-on |

---

## 10. References

- [ECC repository](https://github.com/affaan-m/ECC)
- [ECC cross-harness architecture](https://github.com/affaan-m/ECC/blob/main/docs/architecture/cross-harness.md)
- [FR-098](../../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [ADR-003 — Greenfield vs brownfield adoption](./ADR-003-greenfield-vs-brownfield-adoption.md)
- [IPP-E6S09T04](../../implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098.md)
