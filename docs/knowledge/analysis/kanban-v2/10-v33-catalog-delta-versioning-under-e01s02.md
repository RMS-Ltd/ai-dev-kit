---
lifecycle: evergreen
created_at: 2026-06-12T17:30:00Z
housekeeping_policy: keep
notion_sot: true
---

# v3.3 Catalog Delta — Versioning under E01:S02

**Purpose:** Proposed adopter-facing catalog change: retire standalone **E03**; house versioning bootstrap under **E01:S02**; renumber **E04–E10 → E03–E09**.  
**Status:** IMPLEMENTED in packaged kanban templates + `kanban_v33_catalog.py` (2026-06-12)  
**Version:** 3.3.0 (delta over [v3.2.0](09-ultimate-canonical-kanban-structure-v3.md))  
**Extends:** v3.2.0 · [07-package-migration-blueprint.md](07-package-migration-blueprint.md)

---

## Decision

| Item | v3.2 | v3.3 |
|------|------|------|
| Versioning home | **E03** epic | **E01:S02** story (finite bootstrap) |
| E01:S01 | Perpetual operations only | Unchanged |
| E02 ownership of versioning | — | **No** — workflows consume E01:S02 artifacts |
| Standalone E03 epic | Installed on fresh | **Retired** — absorbed into E01:S02 |
| E04–E10 | Kanban … Code Quality | **Renumbered → E03–E09** (each −1) |

---

## Epic renumber map (v3.2 → v3.3)

| v3.2 | v3.2 name | v3.3 | v3.3 name |
|------|-----------|------|-----------|
| E01 | Repository Infrastructure & Maintenance | **E01** | *(+ S02 Versioning)* |
| E02 | Workflow Management | **E02** | Unchanged |
| E03 | Numbering & Versioning | — | **Retired** → E01:S02 |
| E04 | Kanban | **E03** | Kanban |
| E05 | Project Architecture | **E04** | Project Architecture |
| E06 | Documentation | **E05** | Documentation |
| E07 | Process Automation & CI/CD | **E06** | Process Automation & CI/CD |
| E08 | Testing & Quality Assurance | **E07** | Testing & Quality Assurance |
| E09 | Security | **E08** | Security |
| E10 | Code Quality | **E09** | Code Quality |
| E11–E19 | *(ancillary)* | **E10–E18** | *(each −1)* |
| E20 | reserved | **E19** | reserved |
| E24+ | delivery | **E24+** | Unchanged |

**Tiny tier (v3.3):** E01, E02, E03 (Kanban).  
**Small tier (v3.3):** E01–E09 (no gap at E03).

---

## E01 structure (v3.3)

| Story | Name | Completion |
|-------|------|------------|
| **S01** | Perpetual Operations | Never completes |
| **S02** | Versioning & release numbering | Finite → **COMPLETE** |

| Story | Version pattern |
|-------|-----------------|
| E01:S01 | `0.1.1.{TASK}+{BUILD}` |
| E01:S02 | `0.1.2.{TASK}+{BUILD}` |

---

## E01:S02 — Versioning & release numbering

| Task | Name | ex-v3.2 |
|------|------|---------|
| T01 | Define versioning schema | E03:S01:T01 |
| T02 | Document versioning policy | E03:S01:T02 |
| T03 | Create version file structure | E03:S01:T03 |
| T04 | Set up version tracking / validation tooling | E03:S01:T04 |
| T05 | Wire branch-context and bump validators | E03:S02:T01 |
| T06 | Version bump automation entry points | E03:S02:T02 |
| T07 | Changelog generation setup | E03:S02:T03 |
| T08 | Document version management process | E03:S02:T04 |

**Acceptance:** schema + policy documented; `version.py` exists; validators pass; story **COMPLETE**.

**Order:** E02:S02 Repository Bootstrap → **E01:S02** → first RW (E02:S01).

---

## E03 Kanban stories (was E04)

| Story | Name | ex-v3.2 |
|-------|------|---------|
| S01 | Board setup & governance | E04:S01 |
| S02 | FR Implementation | E04:S02 |
| S03 | BR Implementation | E04:S03 |
| S04 | UXR Implementation | E04:S04 |

---

## Install catalog (proposed)

```python
V33_FRESH_EPICS: List[int] = list(range(1, 10))  # E01–E09 (Small tier)

V33_FRESH_STORIES: List[Tuple[int, int]] = [
    (1, 1),  # E01:S01 Perpetual Operations
    (1, 2),  # E01:S02 Versioning & release numbering
    (2, 1),  # E02:S01 Workflow Definitions & Patterns
    (2, 2),  # E02:S02 Repository Bootstrap
    (3, 1),  # E03:S01 Board setup & governance
    (3, 2),  # E03:S02 FR Implementation
    (3, 3),  # E03:S03 BR Implementation
    (3, 4),  # E03:S04 UXR Implementation
]

V33_EPIC_TEMPLATE_SLUGS: Dict[int, str] = {
    1: "epic-01-Repository-Infrastructure-and-Maintenance",
    2: "epic-02-Workflow-Management",
    3: "epic-03-Kanban-Framework",          # was epic-04
    4: "epic-04-Project-Architecture",      # was epic-05
    5: "epic-05-Documentation",             # was epic-06
    6: "epic-06-Process-Automation-and-CICD",
    7: "epic-07-Testing-and-Quality-Assurance",
    8: "epic-08-Security",
    9: "epic-09-Code-Quality",              # was epic-10
}
```

---

## v3.2 → v3.3 brownfield remap

1. **Versioning:** E03 epic → **E01:S02** (task IDs + version markers `0.3.*` → `0.1.2.*` in docs only).
2. **Epics E04–E10:** Rename dirs `epic-0N` → `epic-0(N-1)`; update all `E0N:` tokens in docs and boards.
3. **Intake stories:** `E04:S02–S04` → `E03:S02–S04`.
4. **Deprecated stub:** `epics/epic-03/` after remap holds **Kanban** (new E03), not versioning — migrate versioning content out first.
5. **kboard.md / task docs:** global find-replace per remap table (use `est_format.py` padded tokens).

---

## Fresh-install fingerprint (proposed)

**PASS:** E01:S02 present; E03 epic is **Kanban** (not Versioning); E03:S02 FR story present; E04 Project Architecture present.

**FAIL:** Standalone Versioning epic; v3.2 `epic-04-Kanban` path without renumber; missing E01:S02.

---

## Install tiers (v3.3)

| Tier | Epics |
|------|-------|
| **Tiny** | E01, E02, E03 |
| **Small** | E01–E09 |
| **Ambitious** | E10–E18 as needed |
| **Delivery** | E24+ |

---

## Package template touch list (gated)

| Asset | Action |
|-------|--------|
| `epic-03-Versioning.md` | Remove from install; content → E01:S02 |
| `epic-04-Kanban-Framework.md` | Rename → `epic-03-Kanban-Framework.md` |
| `epic-05` … `epic-10` templates | Rename −1 (`epic-04-Project-Architecture` … `epic-09-Code-Quality`) |
| `templates/stories/epic-04/` | Rename → `epic-03/` |
| `scripts/kanban_v32_catalog.py` | Supersede with `kanban_v33_catalog.py` |
| `09-ultimate-canonical-kanban-structure-v3.md` | Supersede or v3.3 banner |

---

## Maintainer instance (ai-dev-kit live)

Out of scope for packaged v3.3 default. Live repo migrates on its own wave; document dogfood divergence until aligned.

---

## Operator sign-off

- [ ] E01:S02 + E04–E10 → E03–E09 renumber accepted
- [ ] Brownfield remap steps accepted
- [ ] Package rewrite wave scheduled

---

## References

- [09-ultimate-canonical-kanban-structure-v3.md](09-ultimate-canonical-kanban-structure-v3.md)
- `packages/frameworks/kanban/scripts/kanban_v32_catalog.py`
