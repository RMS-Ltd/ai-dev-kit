---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FB-ADK-K03 — Task-touch SemVer `+BUILD` suffix duplicates internal vernum

**Package:** attempt-12 feedback (`K-03`)  
**Project:** starborn_legacy  
**Severity:** Medium (operator confusion, misleading public vernum; not functional blocker)  
**Status:** Mitigated in-repo (ADR + registry reseed); kit behaviour unchanged  
**Related:** [ADR-SBL-001-semver-lineage.md](ADR-SBL-001-semver-lineage.md) · [semver-registry.yaml](../../../semver-registry.yaml) · E01:S02:T03 (`v0.9.607`)

---

## Summary

ADK **task-touch** dual versioning (`semver_mapping_strategy: task_touch`) allocates a registry `semver_full` string by **appending the internal BUILD** to the SemVer core (e.g. internal `0.1.2.3+1` → registry `0.9.607+1`, tag `v0.9.607`).

For adopters, the **`+BUILD` suffix on public SemVer adds no value**: it is copied from `RC.EPIC.STORY.TASK+BUILD` and duplicates forensic detail already carried on the internal coordinate and internal git tag (`v0.1.2.3+1`).

**SBL policy (ADR-SBL-001):** public SemVer = **core only** (`0.9.607`). Never display or document `0.9.607+1` as the release vernum.

---

## Observed behaviour

| Symptom | Evidence |
| ------- | -------- |
| `finalize_rw_semver_registry.py` reports `semver_full: 0.9.607+1` | RW E01:S02:T03 (2026-07-01) |
| `semver-registry.yaml` / SQLite rows store `semver: 0.9.607+1` | ADK `release_state/allocate.py` — `semver_full = f"{major}.{minor}.{patch}+{build}"` |
| Primary git tag is core-only `v0.9.607` | task_touch tagging contract (correct) |
| README / commit subject correctly use `v0.9.607` | `build_rw_commit_message.py` uses `semver_core` |
| Changelog agents tempted to write `SemVer: 0.9.607+1` | Attempt-12 RW changelogs before ADR correction |

---

## Compounding issues (attempt 12)

| Issue | Effect |
| ----- | ------ |
| Greenfield install reset `version.py` to `0.0.0.0+0` | Lost continuity with consumer line `v0.9.606` |
| Fresh SQLite registry `epic_count: 0` | Task-touch allocated **low patches** `0.0.1`–`0.0.3` |
| Orphan tags `v0.0.1` / `v0.0.2` (attempt 10) on remote | BR-097 collisions; misleading `0.0.x` namespace |
| Operator docs show `MAJOR.MINOR.PATCH+BUILD` for external SemVer | [VERSIONING_POLICY.md](../../../docs-pre-ai-dev-kit/KB/Governance_and_Process/versioning/VERSIONING_POLICY.md) legacy wording |

Reseeded consumer registry from `0d0e5ab3` (`task_touch_counter: 606`) and cut **`v0.9.607`** on E01:S02:T03. See ADR-SBL-001 for full lineage.

---

## Impact

- Operators may treat `0.9.607+1` as the “real” SemVer and publish it to GitHub / package indexes.
- BUILD on internal already distinguishes same-task rebuilds; BUILD on SemVer core does not map to SemVer 2.0.0 build-metadata semantics in a meaningful way for task-touch.
- Documentation and RW agent outputs become inconsistent (tag vs changelog vs registry export).

---

## Root cause

1. **Task-touch allocator** copies internal `BUILD` into `semver_full` by design (`allocate.py`).
2. **Kit docs** describe external SemVer as `MAJOR.MINOR.PATCH+BUILD` without distinguishing **core (tag)** vs **registry traceability string**.
3. **Greenfield install** does not seed `task_touch_counter` / `epic_count` from consumer git tag history.
4. **RW agent execution guides** do not state “public SemVer never includes `+BUILD` for task_touch”.

---

## Adopter mitigation (starborn_legacy)

| Artefact | Role |
| -------- | ---- |
| [ADR-SBL-001-semver-lineage.md](ADR-SBL-001-semver-lineage.md) | Public SemVer = core only; three `0.0.x` namespaces documented |
| [semver-registry.yaml](../../../semver-registry.yaml) | Canonical export; comment notes `+BUILD` in rows is ADK-internal |
| `rw-config.yaml` | Comment: never display `+BUILD` on SemVer |
| `import_legacy.py` reseed from `0d0e5ab3` | Restored counter **606** → forward **607** |

---

## Kit recommendations (ai-dev-kit)

| ID | Recommendation |
| -- | -------------- |
| K-03a | **Task-touch public vernum:** document and enforce **SemVer core only** (`0.9.607`) for README, RW commit subject, GitHub release title, and operator-facing changelogs |
| K-03b | **`semver_full` naming:** treat `semver_full` as internal traceability; expose `semver_core` / `semver_display` as the external release version in all agent execution guides |
| K-03c | **Registry YAML export:** prefer `semver: 0.9.607` (core) in exported `semver-registry.yaml`; store BUILD only on `build` field (already present) |
| K-03d | **Greenfield install:** when `task_touch` + existing consumer tags detected, seed `epic_count` / `task_touch_counter` from `migrate_to_task_touch.py` or warn before first RW |
| K-03e | **RW Step 3 changelog template:** `**SemVer:**` line = core only; `**Internal Version:**` carries `+BUILD` |
| K-03f | **VERSIONING_POLICY / dual-versioning docs:** clarify task-touch external form is `RC.{epic_count}{patch}` without `+BUILD`; distinguish from registry-mode hybrid mapping |

---

## Acceptance criteria (kit)

- [ ] Agent execution docs state public task-touch SemVer excludes `+BUILD`
- [ ] `finalize_rw_semver_registry.py` JSON documents `semver_display` = core in examples
- [ ] Exported registry YAML uses core in `semver` field (or dual fields `semver` + `semver_full`)
- [ ] Greenfield install documents consumer tag-history seeding for task_touch adopters

## Acceptance criteria (adopter)

- [x] ADR-SBL-001 published  
- [x] Registry reseeded; forward line `v0.9.607`  
- [x] README / main CHANGELOG use core only  
- [x] Feedback filed (this document)

---

## Related feedback

| ID | Topic |
| -- | ----- |
| K-01 | E02 workflow story collapse vs issue #3 TSP |
| K-02 | Board timestamp loss on UKW / pre-synthesise KMA |
| K-03 | Task-touch SemVer `+BUILD` suffix on public vernum |
| K-04 | Actions CI parity defaults leak Docusaurus / monorepo checks |

---

**Tracked mirror:** this file is committed under `docs/kanban/reference/` for git traceability. Operator copy also belongs in `logs/attempt-12/feedback-package/` (gitignored local bundle).
