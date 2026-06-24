---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T12:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: repository-information-architecture
  type: policy
  domain:
    primary: documentation
    secondary: ["governance", "repository-layout"]
  audience: ["agents", "maintainers"]
  applies_to:
    documents:
      - "**"
    activities:
      - "idw"
      - "rw"
      - "intake"
---

# Repository information architecture policy

**Status:** Active  
**Task:** [E07:S01:T15](../../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T15-repository-information-architecture-steady-state-governance-fr140.md) · [FR-140](../../kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md)  
**Architecture:** [ADR-033](../../architecture/standards-and-adrs/ADR-033-repository-information-architecture-layered-governance.md)

**Purpose:** Constitutional steady-state rules for ai-dev-kit repository layout — what may exist where, how cartography feeds cleanup, and how agents discover path semantics.

---

## §1 — Layered model

| Layer | Artifact | Update cadence |
| ----- | -------- | -------------- |
| L0 | This policy + ADR-033 | Rare |
| L1 | [`REPOSITORY-DIRECTORY-AUDIT.md`](../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) (T13), [`REPOSITORY-FILE-AUDIT.md`](../maintenance/REPOSITORY-FILE-AUDIT.md) (T14) | Per audit wave |
| L2 | [`repository-path-manifest.json`](../maintenance/repository-path-manifest.json) + generator | On demand + drift check |
| L3 | Tiered READMEs (§4) | When boundary purpose changes |
| L4 | Validators (§6) | Per PR |

**Non-goal:** Manual per-file register on every change — manifest is **generated**; cartography reports hold file-level evidence.

---

## §2 — Purpose classes

Closed enum (aligned with T13/T14 rubrics):

| Class | Meaning |
| ----- | ------- |
| Dev-kit specialisation | Book-repo / project-specific content |
| Framework SoT | Canonical under `packages/frameworks/` |
| Framework SoT (mirror) | Derivative under `greenfield-install/` ([FR-110](../../kanban/fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)) |
| Operational | CI, hooks, snapshots, release scratch |
| Generated/vendor | Build output, caches (excluded from manifest rows) |
| Legacy/transitional | Scheduled mover/archive per cartography |
| Unknown/orphan | Needs investigation — flag in cartography |

### SoT vs mirror

| Tree | Role | Sync |
| ---- | ---- | ---- |
| `packages/frameworks/` | **Canonical** | Author here (P-GREENFIELD-SYNC) |
| `greenfield-install/packages/frameworks/` | **Mirror** | `scripts/sync_greenfield_install.py` |

Contradictions with signed cartography require a **maintainer override record** in the policy changelog or task doc.

---

## §3 — Cartography program

**Mandatory evidence legs** before structural cleanup waves:

1. **Directory leg** — [UXR-033](../../kanban/fbu/UXR-033-comprehensive-repository-directory-structure-audit.md) / [E07:S01:T13](../../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) — sign-off §4 @ 2026-06-24.
2. **File leg** — [UXR-034](../../kanban/fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md) / [E07:S01:T14](../../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) — sign-off §4 @ 2026-06-24.

**T14 release gate (FR-140-F13):** File cartography investigation may proceed when T13 matrix is published; **execution waves** require cartography sign-off + scoped IPW/IDW — not T15 policy publication.

**Wave deconfliction (FR-140-F12):** Structural movers require cartography sign-off **and** scoped execution task — use [`repository-ia-mover-wave-checklist.md`](../maintenance/repository-ia-mover-wave-checklist.md).

**Parent cleanup program:** [FR-039](../../kanban/fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) consumes wave plans; FR-140 governs IA steady state.

---

## §4 — Tiered README contract

| Tier | Location | Required content |
| ---- | -------- | ---------------- |
| T0 | Repo root | `README.md`, `AGENTS.md` |
| T1 | Each allowed top-level directory | Purpose class, SoT/mirror note, link to this policy |
| T2 | `packages/frameworks/*/` package roots | Package README per FR-110 |
| T3 | Boundary dirs only | On-demand; not universal |

Documentation surface placement: [FR-114](../../kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md), [FR-139](documentation-governance-strategy.md), [ADR-026](../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md).

---

## §5 — Machine manifest (L2)

- **Path:** `docs/maintenance/repository-path-manifest.json`
- **Generator:** `packages/frameworks/workflow-mgt/scripts/maintenance/generate_repository_path_manifest.py`
- **Regenerate:** `python packages/frameworks/workflow-mgt/scripts/maintenance/generate_repository_path_manifest.py --write`
- **Exclusions:** T13 §0 via `repository_ia_exclusions.py` (shared with validators)
- **Depth:** Directories through depth 2; deeper leaves roll up to parent rows

---

## §6 — Creation and drift gates (L4)

| Validator | Purpose | Default mode |
| --------- | ------- | ------------ |
| `validate_repository_top_level_directories.py` | New top-level dir vs allowlist | **Blocking** (`--strict`) |
| `validate_repository_path_manifest.py` | Tree vs committed manifest | **Advisory**; `--strict` after stabilization |

Config: `rw-config.yaml` → `repository_ia:` block.

Perpetual manifest regen: [E02:S16:T04](../../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md).

---

## §7 — Program aggregation map

Maintain when new IA-touching FBUs file. Seed from [FR-140 § map](../../kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md#aggregated-program-map-explicit--implicit-ia-touchpoints).

| ID | Relationship | Notes |
| -- | ------------ | ----- |
| FR-140 / E07:S01:T15 | Umbrella (this policy) | Steady-state governance |
| UXR-033 / E07:S01:T13 | Cartography leg A | Directories |
| UXR-034 / E07:S01:T14 | Cartography leg B | Files |
| FR-039 / E07:S01:T10 | Cleanup execution | Consumes waves |
| FR-110 | Greenfield mirror | Tag `mirror: true` in manifest |
| FR-101, FR-118 | Precedent inventories | COMPLETE |
| E02:S16:T04 | Perpetual hygiene | Manifest regen cycles |

---

## References

- [ADR-033](../../architecture/standards-and-adrs/ADR-033-repository-information-architecture-layered-governance.md)
- [IPP-E07S01T15](../../implementation-cycles/IPP-E07S01T15-repository-information-architecture-steady-state-governance.md)
- [repository-ia-mover-wave-checklist.md](../maintenance/repository-ia-mover-wave-checklist.md)
