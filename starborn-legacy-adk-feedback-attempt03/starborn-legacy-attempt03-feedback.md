---
lifecycle: ephemeral
created_at: 2026-06-09T12:45:00Z
project: starborn_legacy
adk_tag: v0.4.13
session_id: 20260609-attempt-03
related_uxr: UXR-025
status: ready-for-adk-intake
---

# Install feedback: Starborn Legacy attempt 03 (greenfield + legacy kanban migration prep)

**Submitted by:** Starborn Legacy adopter (via install diary / feedback package)  
**Context:** Empty bootstrap greenfield install on `ai-dev-kit` branch; full app history at `39fc49d0`; goal is **test migration** of SBL legacy E/S/T kanban into ADK Kanban v3 layout.

---

## Executive summary

**CRITICAL (F17):** Attempt 03 **installed Kanban v1 catalog again** — the same product gap that caused attempts 1 & 2 to fail intent ([UXR-025 F9](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)). There is **no installer path** to Kanban v3.2 on `v0.4.13` or ADK `main`; `install_kanban_framework.py --mode fresh` always deploys `_install_canonical_epics` v1 templates (standalone E05 FR, E06 BR, E07 UXR). **Migration test to v3 is blocked** until ADK ships the v3.2 package rewrite.

Attempt 03 also surfaced **UX confusion** (Option A, dual-tree) before the v1 catalog problem was re-discovered on disk:

Attempt 03 partially succeeded in building a **dual-kanban test bed**, but only after **two rounds of confusion** that install docs and orchestrator UX did not prevent:

1. **Option A (RW-only) was chosen because it was the only obvious way** to avoid the greenfield orchestrator running Kanban `--mode fresh` as the sole PM layer — not because ADK Kanban was unwanted.
2. **“No `docs/` directory”** was misread (by agent and adopter) as “no kanban,” when the real gap was **no ADK `docs/kanban/`** while legacy PM lives under **`KB/PM_and_Portfolio/`** at HEAD.
3. **Migration testing** requires **both** trees on disk; that sequenced recipe is not documented as a first-class greenfield path.

---

## 1. Option A confusion

### What the adopter understood at decision time

- Greenfield orchestrator (`install_greenfield_path.py`) **always** runs RW then Kanban fresh (no `--skip-kanban`, no `use_kanban` from config).
- Attempt 2 had already shown that running the orchestrator **overwrites adopter intent** even when the diary says “keep legacy E/S/T.”
- **RW-only (mode A / `use_kanban: false`)** was the only **obvious** installer path that did not immediately install ADK template epics.

**Adopter quote (paraphrased):** *“As there are no obvious options other than A, let's go with that.”*

### What Option A actually meant (clarified later)

| Misread | Intended |
|---------|----------|
| “No ADK Kanban” | “No Kanban **yet** / not as **only** PM layer” |
| `use_kanban: false` = final state | **Staging step** before separate `docs/kanban/` fresh install |
| Success = no `docs/` | Success = **no ADK template replacing legacy**; ADK target tree still needed |

### Impact

- Post-install state had RW scaffold but **no `docs/kanban/`** — adopter correctly flagged “no docs dir / no kanban.”
- Agent initially restored **legacy KB only**, which did not satisfy the migration-test goal (need ADK v3 target tree).
- Extra install round (`phase3b`, `phase3c`) and adopter correction required.

### Requested ADK improvements

1. **Document a canonical “migration test bed” sequence** for greenfield hosts with legacy PM in git:
   - RW bootstrap (`use_kanban: false`)
   - Restore legacy source tree (e.g. `KB/...`)
   - `install_kanban_framework.py --mode fresh --kanban-path docs/kanban`
   - Re-run RW with `use_kanban: true` / mode C config
2. **Orchestrator:** honor `use_kanban: false` in `--config` and **skip** Kanban step; or expose `--skip-kanban`.
3. **Rename/clarify “mode A”** in INSTALL: e.g. “RW-only (defer Kanban)” not “Simple RW (no Kanban integration).”
4. **Install UX:** when `use_kanban: false`, print explicit next-step hint: “Kanban not installed; run … when ready.”

**Evidence:** `../transcripts/20260609T122915Z-phase3-rw-only.txt`, adopter messages in session, attempt 2 diary (orchestrator despite legacy scope).

---

## 2. Legacy restore vs ADK Kanban v3 — subsequent confusion

### Two different “kanban” locations

At Starborn `39fc49d0`:

| Tree | Path | Role |
|------|------|------|
| **Legacy SBL** | `KB/PM_and_Portfolio/epics/overview/` | Operational PM: `KANBAN_BOARD.md`, `Epic-NN/`, E/S/T |
| **ADK v3 target** | `docs/kanban/` | Greenfield consumer layout: `kboard.md`, `epics/epic-NN/` |

There is **no** `docs/project-management/kanban/` on committed HEAD (that was an uncommitted ADK migration experiment).

### Confusion chain

1. After Option A: no `docs/` at all → adopter: “there's no docs/ dir.”
2. Agent restored `KB/` → adopter: “that wasn't what I meant… we need ADK v3 Kanban.”
3. Adopter need: **both** legacy (source) and ADK fresh (target) for **migration test**, not either/or.

### Requested ADK improvements

1. INSTALL **brownfield / FR-081** section: diagram or table “legacy source path vs ADK `kanban_root`” with Starborn as example.
2. Kanban installer **fresh mode** banner already says brownfield note — add: “legacy may live outside `kanban_root`; restore or detect separately.”
3. Sign-off contracts (BR-084, UXR-017) assume single kanban root — document **dual-tree** state during migration prep (expected NOT READY until migration runs).

**Evidence:** `../transcripts/20260609T123224Z-restore-legacy-kanban.txt`, `../transcripts/20260609T123621Z-phase3b-kanban-fresh.txt`, `../transcripts/20260609T123637Z-phase3c-rw-kanban-config.txt`

---

## 3. Preparing SBL → ADK Kanban v3 migration test

### Current on-disk state (end of attempt 03)

| Component | Status |
|-----------|--------|
| Vendor `v0.4.13` | `vendor/ai-dev-kit/` |
| RW | `rw-config.yaml`, `use_kanban: true`, patterns for `docs/kanban` |
| ADK target | `docs/kanban/kboard.md`, 12 template epic dirs (fresh) |
| Legacy source | `KB/PM_and_Portfolio/epics/` (19 epics), `kanban-governance/` |
| Flutter app | **Not restored** (still empty bootstrap + ADK wiring) |

### Planned next step (not yet executed)

```bash
# Detection / analysis against legacy KB layout, migrate into docs/kanban
python vendor/ai-dev-kit/packages/frameworks/kanban/scripts/install_kanban_framework.py \
  --mode migration   # or canonical_adoption / hybrid — TBD after detect
```

**Open questions for ADK:**

- Does migration detector scan `KB/PM_and_Portfolio/` by default or only `kanban_root`?
- **F9/F17 (BLOCKER):** fresh install deploys **v1 catalog only**. Proof: `docs/kanban/epics/epic-05/epic-05.md` = “Epic 5: FR Implementation” (v1). v3.2 would fold FR into E04:S02. ADK [07-package-migration-blueprint](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/kanban-v2/07-package-migration-blueprint.md): “**Do not execute until Phase 5 operator sign-off.**” Templates on `main` unchanged (`epic-05-FR-Implementation.md`).
- **Adopter statement (2026-06-09):** After attempts 1 & 2 failed on v1 install, attempt 3 installed v1 again — “FFS.”
- Epic path padding: fresh install produced mixed `epic-1` vs `epic-01` dirs — impact on migration pattern matching.

### Requested ADK improvements

1. **Migration playbook** for SBL-like layouts (`Epic-NN/E{epic}-S{story}.md` → `docs/kanban/epics/epic-NN/...`).
2. **CLI recipe** or `adk install --profile legacy-migration-test-bed`.
3. Link feedback package to [starborn-legacy-install-triage-matrix](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) attempt 03 addendum.

---

## Post-installation scores (subjective)

| Metric | Score | Notes |
|--------|-------|-------|
| Installation ease | 2/5 | Required adopter + agent correction loops |
| Documentation clarity | 2/5 | Option A / dual-kanban sequencing unclear |
| Overall install | 3/5 | Technically achievable; UX pathfinding poor |

---

## Environment

- **OS:** Darwin 25.3.0 (arm64)
- **Python:** 3.9.6 (`.venv-adk`)
- **Disk:** ~32 GiB free at preflight
- **ADK:** `v0.4.13` tarball, sha256 verified

---

## References

- Attempt 03 diary: `../greenfield-install-diary.md`
- UXR-025 triage (attempts 1–2): ADK `docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md`
- FR-081 brownfield modular adoption
- FR-080 greenfield installation process
