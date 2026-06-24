---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-033: Repository information architecture layered governance

**Status:** Accepted  
**Date:** 2026-06-24  
**Deciders:** Maintainer (via E07:S01:T15 / FR-140)  
**Related:** [FR-140](../../kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md), [repository-information-architecture-policy.md](../../governance/standards/repository-information-architecture-policy.md), [ADR-026](ADR-026-git-internal-maintainer-kb-fr121.md), [ADR-012](ADR-012-agent-bootstrap-and-task-routing.md), [FR-139](../../kanban/fbu/FR-139-unified-documentation-governance-strategy.md)

---

## Context

T13/T14 cartography ([`REPOSITORY-DIRECTORY-AUDIT.md`](../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md), [`REPOSITORY-FILE-AUDIT.md`](../../maintenance/REPOSITORY-FILE-AUDIT.md)) produced evidence-backed valuation matrices but no **steady-state** rules to prevent re-bloat or give agents a durable path SoT. FR-140 filed the umbrella program; E07:S01:T15 implements policy, manifest, and gates.

---

## Decision

Adopt a **five-layer IA model** (L0–L4):

| Layer | Artifact | Role |
| ----- | -------- | ---- |
| **L0** | `docs/governance/standards/repository-information-architecture-policy.md` + this ADR | Constitutional rules |
| **L1** | T13/T14 audit reports | Cartography evidence (investigation-only) |
| **L2** | `docs/maintenance/repository-path-manifest.json` + generator | Machine inventory for agents/CI |
| **L3** | Tiered READMEs (T0–T3) | Human orientation at boundaries only |
| **L4** | `validate_repository_top_level_directories.py`, `validate_repository_path_manifest.py` | Creation and drift gates |

### Manifest format

- **JSON** (not YAML) — deterministic diff-friendly; committed to git (not CI-only).
- **Schema version:** `1`; directories through **depth 2**; exclusions shared via `repository_ia_exclusions.py` (T13 §0).
- **Regeneration:** `python packages/frameworks/workflow-mgt/scripts/maintenance/generate_repository_path_manifest.py --write`

### Enforcement phasing

| Phase | Gate | Mode |
| ----- | ---- | ---- |
| 1 | Manifest drift | Advisory (exit 0, stderr warning) |
| 2 | New top-level directory | Blocking (`--strict`) |
| 3 | Manifest drift | Blocking (`--strict`) — after one advisory cycle or via E02:S16:T04 |

### Structural movers

Per FR-140-F12: `git mv` / deletes require **both** cartography sign-off **and** scoped IPW/IDW — never inferred from audit reports alone. Checklist: [`repository-ia-mover-wave-checklist.md`](../../maintenance/repository-ia-mover-wave-checklist.md).

---

## Alternatives considered

| Option | Rejected because |
| ------ | ---------------- |
| YAML manifest | Anchor/alias ambiguity; weaker line-diff ergonomics for CI |
| CI-only manifest (not committed) | Agents need stable cold-start pointer without running generator |
| Immediate blocking drift | FR-039 cleanup waves would churn manifest; advisory-first reduces noise |
| Pre-commit-only (no CI parity) | FR-112 requires Actions CI parity mirror for framework scripts |
| Universal per-file READMEs | Explicit non-goal; file cartography stays in T14 report |

---

## Consequences

- **Positive:** Single IA program coordinates T13/T14/FR-039; top-level creation gated; agents get manifest SoT via `AGENTS.md` pointer.
- **Negative:** Manifest regen hygiene burden (default: E02:S16:T04); policy/allowlist updates required for new top-level dirs.
- **Complements:** ADR-026 (maintainer KB), ADR-012 (agent bootstrap), FR-139 (doc taxonomy), FR-110 (greenfield mirror tagging).

---

## References

- [IPP-E07S01T15](../../implementation-cycles/IPP-E07S01T15-repository-information-architecture-steady-state-governance.md)
- [generate_repository_path_manifest.py](../../../packages/frameworks/workflow-mgt/scripts/maintenance/generate_repository_path_manifest.py)
