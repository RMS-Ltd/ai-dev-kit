---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-031: External SemVer `+BUILD` display policy (`task_touch` mode)

**Status:** Accepted (amended 2026-06-17 — Option A implemented)  
**Date:** 2026-06-17  
**Related:** [ADR-002](ADR-002-task-touch-derived-mapping.md) · [UXR-031](../../kanban/fr-br/UXR-031-semver-plusbuild-redundancy-in-task-touch.md) · [E03:S02:T15](../../kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T15-semver-external-build-metadata-redundancy-uxr031.md) · [semver-external-display-policy-decision.md](../../kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/semver-external-display-policy-decision.md)

---

## Context

In `task_touch` mode (`rw-config.yaml`), the external SemVer string includes `+BUILD` metadata mirrored from the internal `VERSION_BUILD`. Maintainers and external consumers may interpret `+BUILD` as part of the monotonic release progression signal, when uniqueness and ordering are actually driven by the SemVer **core** (`MAJOR.MINOR.PATCH`) — specifically the global task-touch `PATCH` allocator ([ADR-002](ADR-002-task-touch-derived-mapping.md)).

Evidence ([UXR-031](../../kanban/fr-br/UXR-031-semver-plusbuild-redundancy-in-task-touch.md)):

- `convert_internal_to_semver_task_touch(...)` preserves internal `BUILD` into SemVer build metadata.
- `get_rw_tag_info(...)` derives the **primary Git tag** from SemVer core only (`semver_full.split('+')[0]`).
- README and RW surfaces currently display `semver_full` including `+BUILD`.

---

## Decision

### 1. Outward display policy (Option A — implemented 2026-06-17)

External SemVer on **README, RW commit subjects, and changelog SemVer lines** uses **core only** (`vMAJOR.MINOR.PATCH`). Internal `+BUILD` remains on:

- Internal version coordinate (`RC.EPIC.STORY.TASK+BUILD`)
- Internal Git tag (`vRC.EPIC.STORY.TASK+BUILD`)
- Allocator/registry `semver_full` (forensic trace)

**Ordering / precedence for external consumers = SemVer core** (`MAJOR.MINOR.PATCH`).

### 2. Tag boundary semantics (unchanged)

- **Primary tag:** `vMAJOR.MINOR.PATCH` (core only).
- **Internal traceability tag:** `vRC.EPIC.STORY.TASK+BUILD`.
- `semver_full` retains `+BUILD` for allocator/registry trace; `external_display_semver()` / `semver_display` emit core for outward surfaces.

### 3. Implementation surfaces

| Surface | SemVer shown |
| ------- | ------------- |
| README `**Version (SemVer):**` | Core only |
| RW commit subject / Actions run title | Core only (`build_rw_commit_message.py`) |
| CHANGELOG SemVer line | Core only |
| Primary Git tag / GitHub Release | Core only (unchanged) |
| Internal tag / version file | Full internal `RC.EPIC.STORY.TASK+BUILD` |

### 4. Internal forensic coordinate (unchanged)

Internal `RC.EPIC.STORY.TASK+BUILD` remains the Kanban/workflow anchor regardless of outward display policy.

---

## Alternatives considered

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| **A — Core-only display** | Show `vX.Y.Z` externally; keep `+BUILD` only in internal tag / allocator trace | **Implemented** (presentation-layer; mapping unchanged) |
| **B — Visible trace-only `+BUILD`** | Keep `semver_full` display on external surfaces | Superseded by Option A |
| **C — Hide SemVer externally** | Show internal version only | Rejected — breaks dual-version model and package-manager expectations |

---

## Consequences

### Positive

- External version strings match primary Git tags (no `+BUILD` suffix on outward surfaces).
- `semver_full` with `+BUILD` remains in allocator/DB for forensic correlation.

### Negative / trade-offs

- Operators must read the **Internal:** line (or internal tag) to see build instance within the same task-touch PATCH.

---

## Compliance

- [dev-kit-versioning-policy.md](../../governance/standards/dev-kit-versioning-policy.md) §2.1.1 — outward SemVer semantics
- [BR-097](../../kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) — no tag force moves
- [FR-045](../../kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md) — task_touch mapping authority
