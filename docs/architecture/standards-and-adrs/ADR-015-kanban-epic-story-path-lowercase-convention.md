---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-015: Kanban epic/story path lowercase convention

**Status:** Accepted  
**Date:** 2026-06-04  
**Deciders:** Maintainer (via E04:S19:T11 / UXR-017)  
**Related:** [UXR-017](../../project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md), [UXR-011](../../project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md), [epic-story-path-migration-guide.md](epic-story-path-migration-guide.md), [BR-083](../../project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md)

---

## Context

Kanban installs (including Expenses Tracker) emit **Pascal-case** path segments (`epic-01/`, `story-01-*.md`). Task files already use lowercase `T01-` slugs (UXR-011). Adopters expect **kebab-case structural tokens** aligned with branch naming (`epic/6-…`) and case-sensitive filesystems treat `epic-01` and `epic-01` as distinct paths.

---

## Decision

1. **Write-default (new installs and new paths):**
   - `epics/epic-{nn}/epic-{nn}.md` — **2-digit** epic segment when epic ≤ 99 (`epic-04`); **3-digit** when epic > 99.
   - `epics/epic-{nn}/story-{nn}-{slug}.md` and matching `story-{nn}-{slug}/` directories — same **2-digit / >99 → 3-digit** rule for story numbers.
   - Task files: `T{nn}-*.md` — **2-digit** when task ≤ 99 (`T01`, `T11`); **3-digit** when task > 99 (`T101+`, perpetual UKW/CMW tasks).
   - Inline `E:S:T` tokens remain **UXR-014** two-digit in prose (`E04:S19:T11`); path segments follow the rules above.

2. **Read-tolerance (transition):** Tooling MUST resolve **both** `epic-`/`story-` and legacy `Epic-`/`Story-` until the host project completes migration. Prefer lowercase when both exist.

3. **Out of scope:** Changing H1 titles (“Epic 4” in prose); task filename prefix `Txx-` (UXR-011).

4. **Implementation source of truth:** `packages/frameworks/kanban/scripts/kanban_paths.py` — patterns and resolvers consumed by kanban + workflow mgt scripts.

5. **Phased rollout (ai-dev-kit):**
   - **Wave 1:** Framework templates, install/migrate emit lowercase; validators warn on capitalised segments in adopters.
   - **Wave 2:** ai-dev-kit corpus rename + `rw-config.yaml` lowercase patterns; validator errors on capitalised segments under host `kanban/epics/`.

---

## Alternatives considered

| Option | Rejected because |
| ------ | ---------------- |
| Keep `Epic-`/`Story-` | Adopter UX friction; case-sensitive FS drift |
| Big-bang global rename in one commit | High blast radius without install tolerance window |
| Only document lowercase; no script changes | Install would keep emitting wrong paths |

---

## Consequences

- **Positive:** Consistent path tokens; install/RW detection align with on-disk layout.
- **Negative:** Large link sweep in ai-dev-kit (Wave 2); adopters must update `rw-config.yaml` or re-run migration guide.
- **Supersedes:** Capitalised path examples in kanban governance policy and `rw-config-schema` defaults (content updated in Wave 1).

---

## References

- [IPP-E04S19T11](../../implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming.md)
- [E04:S19:T11](../../project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md)
