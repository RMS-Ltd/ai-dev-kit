---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Policy decision: External SemVer `+BUILD` display in `task_touch` mode

**Task:** [E03:S02:T15](T15-semver-external-build-metadata-redundancy-uxr031.md)  
**UXR:** [UXR-031](../../../fr-br/UXR-031-semver-plusbuild-redundancy-in-task-touch.md)  
**ADR:** [ADR-031](../../../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md)  
**Versioning policy:** [dev-kit-versioning-policy.md](../../../../governance/standards/dev-kit-versioning-policy.md) §2.1.1

---

## Decision

**Chosen option: Option B — keep `+BUILD` visible externally, documented as trace-only metadata.**

External SemVer strings in `task_touch` mode continue to include `+BUILD` (for example `v0.4.1197+1`). The `+BUILD` suffix mirrors the internal `VERSION_BUILD` for forensic traceability. It is **not** the monotonic ordering or precedence signal for external consumers.

---

## Ordering / precedence signal

| Surface | What determines "newer release" |
| ------- | -------------------------------- |
| **External consumers** (package managers, README badges, GitHub release ordering) | **SemVer core** (`MAJOR.MINOR.PATCH`) — in `task_touch` mode, `PATCH` is allocated by the global task-touch counter |
| **Internal forensic coordinate** | Internal version `RC.EPIC.STORY.TASK+BUILD` (Kanban anchor) |
| **Git primary tag** | SemVer core only (`vMAJOR.MINOR.PATCH`) — `+BUILD` is stripped at tag boundary per `semver_converter.get_rw_tag_info(...)` |
| **Git internal traceability tag** | Full internal version (`vRC.EPIC.STORY.TASK+BUILD`) |

**Rule:** When comparing two releases for external precedence, compare SemVer core first. Treat `+BUILD` as build metadata that traces the internal build instance within the same task-touch allocation — not as an independent progression axis.

---

## Rationale

1. **UXR-031 evidence:** Monotonicity and uniqueness in `task_touch` come from SemVer core (`PATCH` allocator), not from `+BUILD`.
2. **Tag behavior already encodes this:** Primary Git tags use core-only naming; `+BUILD` never enters the primary tag namespace.
3. **Least disruptive path:** README, changelog, and RW automation already emit `semver_full` including `+BUILD`. Option B clarifies semantics without a presentation-layer code change in this delivery wave.
4. **Trace value retained:** Maintainers can correlate an external `+N` suffix with internal `VERSION_BUILD` without parsing the internal version line.

**Option A (core-only display)** remains a valid follow-on if outward simplification is desired; it would be a presentation-only change scoped to README/changelog emission templates.

---

## Follow-on surfaces inventory

| Surface | Action in this delivery | Future follow-on (if Option A) |
| ------- | ----------------------- | ------------------------------ |
| `docs/governance/standards/dev-kit-versioning-policy.md` | §2.1.1 outward SemVer semantics added | Adjust examples to core-only display |
| `README.md` | Clarify version line semantics (ordering = core; `+BUILD` = trace) | Emit core-only SemVer in version line |
| `packages/frameworks/workflow-mgt/KB/.../release-workflow-agent-execution.md` | Align RW SemVer guidance with ordering rule | Optional RW Step 5 template change |
| `semver_converter.py` / RW Step 5 | **No change** — behavior already correct | Optional `display_semver` helper for core-only |
| GitHub release body / commit subject | **No change** — subject uses SemVer; body carries internal version | Optional core-only release title |
| `validate_semver_registry_injective.py` / tag authority | **No change** — injectivity on core + internal tags | N/A |
| Adopter-public Docusaurus pages | N/A (governance/maintainer surfaces) | Review if published versioning guides reference `+BUILD` ordering |

---

## Invariants preserved

- Internal version remains `RC.EPIC.STORY.TASK+BUILD` and stays the Kanban/workflow anchor.
- `task_touch` PATCH allocator and finalize injectivity guarantees unchanged ([FR-045](../../../fr-br/FR-045-adr-002-task-touch-derived-mapping.md), [BR-061](../../../fr-br/BR-061-semver-task-touch-counter-increments-too-often.md)).
- No retagging or force-moving of existing release tags ([BR-097](../../../fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)).

---

## References

- [IPP-E03S02T15](../../../implementation-cycles/IPP-E03S02T15-semver-external-build-metadata-redundancy.md)
- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py` — `convert_internal_to_semver_task_touch`, `get_rw_tag_info`
- `rw-config.yaml` — `semver_mapping_strategy: task_touch`
