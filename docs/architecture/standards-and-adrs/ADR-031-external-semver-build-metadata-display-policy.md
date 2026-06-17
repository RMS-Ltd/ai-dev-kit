---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-031: External SemVer `+BUILD` display policy (`task_touch` mode)

**Status:** Accepted  
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

### 1. Outward display policy (Option B)

Continue displaying external SemVer **with** `+BUILD` on README, changelog, and release summaries, but document explicitly that:

- **Ordering / precedence for external consumers = SemVer core** (`MAJOR.MINOR.PATCH`).
- **`+BUILD` = trace-only build metadata** mirroring internal `VERSION_BUILD`; it does not define the monotonic release stream in `task_touch` mode.

### 2. Tag boundary semantics (unchanged)

- **Primary tag:** `vMAJOR.MINOR.PATCH` (core only).
- **Internal traceability tag:** `vRC.EPIC.STORY.TASK+BUILD`.
- `semver_full` retains `+BUILD` for converter trace usage; finalize side effects remain at tag boundary only.

### 3. Internal forensic coordinate (unchanged)

Internal `RC.EPIC.STORY.TASK+BUILD` remains the Kanban/workflow anchor regardless of outward display policy.

---

## Alternatives considered

| Option | Description | Outcome |
| ------ | ----------- | ------- |
| **A — Core-only display** | Show `vX.Y.Z` externally; keep `+BUILD` only in internal tag / changelog trace | Deferred as optional follow-on (presentation-layer change) |
| **B — Visible trace-only `+BUILD`** | Keep current `semver_full` display; clarify ordering semantics in policy/docs | **Accepted** |
| **C — Hide SemVer externally** | Show internal version only | Rejected — breaks dual-version model and package-manager expectations |

---

## Consequences

### Positive

- Eliminates ambiguity about which component drives "newer release" comparisons.
- No change to allocator, injectivity, or tag authority in this wave.
- Aligns documentation with existing `semver_converter` and RW tag behavior.

### Negative / trade-offs

- External strings remain longer (`+BUILD` visible) until a future Option A presentation change.
- Consumers must read policy guidance to avoid misinterpreting `+BUILD` as precedence.

### Follow-on (optional)

- Option A presentation change scoped to README/changelog emission (no mapping algorithm change).
- Adopter-public versioning cookbook examples if published guidance references ordering.

---

## Compliance

- [dev-kit-versioning-policy.md](../../governance/standards/dev-kit-versioning-policy.md) §2.1.1 — outward SemVer semantics
- [BR-097](../../kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) — no tag force moves
- [FR-045](../../kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md) — task_touch mapping authority
