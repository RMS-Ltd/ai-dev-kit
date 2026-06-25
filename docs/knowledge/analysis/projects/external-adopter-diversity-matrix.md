---
lifecycle: evergreen
created_at: 2026-06-25T14:00:00Z
housekeeping_policy: keep
---

# External adopter diversity matrix

**Programme:** [FR-142](../../kanban/fbu/FR-142-external-adopter-archetype-corpus-install-validation.md) · **Task:** [E06:S09:T41](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T41-external-adopter-archetype-corpus-fr142.md) · **Index:** [adk-install-external](../../../adk-install-external/README.md)

Typed repository patterns for Phase 5 install validation — **not** random GitHub trawling. Selection is matrix-driven; each archetype produces recon evidence, optional full install, and/or CI fixture.

---

## Dimensions

| Dimension | What we measure | Operator-repo bias |
| --------- | --------------- | ------------------ |
| **PM shape** | kanban tree vs issues vs flat TODO vs wiki | SBL/fynd/Confidentia lean kanban or governance docs |
| **Doc topology** | `docs/` vs `doc/` vs sprawl vs minimal | Consistent `docs/` + maintainer KB habit |
| **Stack** | Python/Node/polyglot; monorepo hints | Homogeneous Python workflow-kit focus |
| **Repo age** | greenfield vs brownfield vs stale tags | Active maintainer repos |
| **CI** | none vs GHA vs custom hooks | Known ADK CI parity context |
| **Engagement** | cooperative adopter vs subject-only | Operator-owned — FR-079 cooperative |

---

## Archetypes (initial set)

| ID | Name | Primary stress | v1 status |
| -- | ---- | -------------- | --------- |
| **A1** | Issues-only OSS | No `docs/kanban`; path selector + greenfield default misfire | Recon + fixture |
| **A2** | Docs sprawl brownfield | Multiple PM surfaces, inconsistent naming (BR-108 class) | Recon + fixture |
| **A3** | Monorepo / ambiguous root | `rw-config`, `version.py` placement | Deferred (Wave 2) |
| **A4** | Stale brownfield | Old tags, minimal docs, structure detection | Deferred (Wave 2) |
| **A5** | Minimal non-empty | README + LICENSE only — FR-080 control vs operator repos | Recon + fixture |

**v1 selection rationale (IPP):** A1, A2, A5 maximize diversity per unit effort; A3/A4 deferred until Phase 4 synthesis shows monorepo/stale gaps uncovered.

---

## Selection criteria (not maximum entropy)

1. **Actionable** — recon must predict a testable Install RC or path-selector hypothesis.
2. **Ethical** — local clone; permissive licence for full install; anonymize kit artifacts.
3. **Non-duplicative** — skip archetypes already represented by UXR-029 operator repos (see coverage table in [UXR-029](../../kanban/fbu/UXR-029-adk-install-path-experiment.md)).
4. **Bounded** — 3–5 archetypes initial; expand only with synthesis justification (FR-142-NF1).
5. **Fixture-friendly** — pattern extractable to ≤ 500 KB anonymized tree for CI.

---

## Coverage vs operator programme

| Gap class | SBL (T26) | fynd.deals / Confidentia (UXR-029) | External archetypes |
| --------- | ----------- | ----------------------------------- | ------------------- |
| Messy mature kanban + git discipline | ✅ primary | partial | — |
| Brownfield governance-heavy | partial | ✅ Confidentia target | A2 sprawl |
| No kanban / issues-only | — | — | **A1** |
| True minimal non-empty | — | — | **A5** |
| Monorepo root ambiguity | — | — | A3 (deferred) |
| External self-service (no operator) | Expenses Tracker precedent | — | all recon subjects |

**Precedent:** Expenses Tracker → BR-087, UXR-016, UXR-017 (external shape bugs operator repos miss).

---

## Phase 5 sequencing

```text
Phase 0–1  ✅ SBL Arm B (E06:S09:T26)
Phase 2–3  → fynd.deals + Confidentia Arm A (UXR-029 AC6) — IN PROGRESS
Phase 4      → Path selector at RC synthesis
Phase 5      → THIS MATRIX — external archetype corpus (recon may parallel 2–3)
```

Full external **installs** gated on **G1** (UXR-029 Phase 4) unless operator waiver in T41 task doc.

---

## Fixture registry

| Archetype | Path | Recon |
| --------- | ---- | ----- |
| A1 | `tests/fixtures/adopter-corpora/archetype-a1-issues-only/` | [recon-01](../../../adk-install-external/archetype-a1-issues-only/recon-01/README.md) |
| A2 | `tests/fixtures/adopter-corpora/archetype-a2-docs-sprawl/` | [recon-01](../../../adk-install-external/archetype-a2-docs-sprawl/recon-01/README.md) |
| A5 | `tests/fixtures/adopter-corpora/archetype-a5-minimal-nonempty/` | [recon-01](../../../adk-install-external/archetype-a5-minimal-nonempty/recon-01/README.md) |

---

## References

- [RECON-PROTOCOL.md](../../../adk-install-external/RECON-PROTOCOL.md)
- [adopter-install-attempt-preflight](../../guides/adopter-install-attempt-preflight.md) §8
- [starborn-legacy-install-triage-matrix](starborn-legacy-install-triage-matrix.md)
