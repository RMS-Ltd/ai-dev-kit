# FB — Public SemVer surface incorrectly includes BUILD metadata (`+N`)

**Type:** Adopter feedback (dual versioning / SAA / release coherence / RW UX)  
**Reporter:** Starborn Legacy — attempt 11 (post-install RW)  
**Date:** 2026-06-24  
**Status:** Observed on `RW -k E02:S16:T02 --art` after guided KMA install  
**Programme:** [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)  
**Kit pin:** `v0.4.1171`  
**Related:** ADR-002 task-touch mapping · FR-122 release coherence · `finalize_rw_semver_registry.py` · `validate_release_coherence.py`

---

## Summary

In **task_touch** dual versioning, the **public SemVer** shown to adopters (README, CHANGELOG, RW completion summary) is populated with **`semver_full`** (`0.0.5+2`), which carries **internal BUILD** metadata. The **primary git tag** correctly omits BUILD (`v0.0.5`). Adopters and agents therefore report a SemVer that looks like a second internal coordinate, not a clean public release number.

**Expected:** Public SemVer = **core only** (`0.0.5`). BUILD stays on the **internal** track only (`0.2.16.2+2`).

**Kit ask:** Split `semver_core` vs `semver_full` across SAA export, RW templates, and `validate_release_coherence`; never require README/CHANGELOG SemVer lines to include `+BUILD`.

---

## 1. Observed behaviour (attempt 11)

### Release: `RW -k E02:S16:T02 --art` → `6d2f95bf`

| Surface | Value shown | Correct? |
|---------|-------------|----------|
| **Internal** (`version.py`, internal tag) | `0.2.16.2+2` / `v0.2.16.2+2` | ✅ BUILD belongs here |
| **Primary SemVer tag** | `v0.0.5` | ✅ No BUILD on tag |
| **README `Version (SemVer)`** | `0.0.5+2` | ❌ BUILD leaked |
| **CHANGELOG SemVer line** | `0.0.5+2` | ❌ BUILD leaked |
| **RW agent completion summary** | `SemVer 0.0.5+2` | ❌ BUILD leaked |
| **Detailed changelog header** | `SemVer: 0.0.5+2` | ❌ BUILD leaked |

Screenshot evidence: operator noted RW summary listed **SemVer `0.0.5+2`** while **Tags** correctly included `v0.0.5` (no build suffix).

### SAA allocation (`finalize_rw_semver_registry.py`)

```json
{
  "internal_version": "0.2.16.2+2",
  "semver_full": "0.0.5+2",
  "primary_tag": "v0.0.5",
  "internal_tag": "v0.2.16.2+2"
}
```

`primary_tag` strips BUILD; adopters are still steered to write `semver_full` everywhere else.

---

## 2. Root cause (kit-side)

1. **SQLite SAA (`release_state/allocate.py`)** — task_touch allocation sets  
   `semver_full = f"{rc}.{epic_count}.{patch_sequence}+{parsed.build}"`  
   i.e. it copies **internal `VERSION_BUILD`** onto the public SemVer string.

2. **`validate_release_coherence.py` (FR-122)** — compares README and CHANGELOG SemVer lines to **`lookup().semver_full`**, not `semver_core`. Adopters **fail coherence** if they correctly write `0.0.5` without `+2`.

3. **RW / agent execution path** — no documented rule that **public SemVer omits BUILD** in task_touch mode; agents echo `semver_full` from finalize output in release summaries.

4. **Prior dual-tag contract** (attempt 10) — SemVer tag `v0.9.604` paired with internal `v0.15.13.7+1`; public surface did not expose `0.9.604+1` style strings. Current SAA path regresses that separation for display fields.

---

## 3. Impact

| Audience | Impact |
|----------|--------|
| **Adopters** | README/CHANGELOG contradict git tags; confusing “two build systems” |
| **Agents** | RW completion tables teach wrong SemVer shape |
| **Coherence gate** | Enforces the bug — cannot fix README without validator change |
| **Perpetual RW** | Same-task BUILD increments (`+2`, `+3`, …) inflate public SemVer metadata on every UKW/RW |

---

## 4. Recommended kit changes

| Priority | Change |
|----------|--------|
| **P0** | `validate_release_coherence`: compare README/CHANGELOG SemVer to **`semver_core`** (or explicit `public_semver` field), not `semver_full` |
| **P0** | RW Step 5 README template + changelog SemVer line: document **`MAJOR.MINOR.PATCH` only** for task_touch |
| **P1** | `finalize_rw_semver_registry.py` JSON: emit `semver_core` and `semver_display` separately; deprecate using `semver_full` in adopters |
| **P1** | SAA schema: store `semver_core` and `build` separately; `semver_full` optional / internal-audit only |
| **P2** | Agent execution guide + RW summary template: “SemVer (public)” vs “Internal (RC.E.S.T+BUILD)” with examples |
| **P2** | Regression test: perpetual same-task RW with BUILD+2 → README SemVer unchanged (`0.0.5`), internal tag increments |

---

## 5. Adopter evidence paths

| Artifact | Path |
|----------|------|
| README (wrong SemVer line) | `README.md` — `` `0.0.5+2` `` |
| Main changelog | `CHANGELOG.md` — `**SemVer:** **0.0.5+2**` |
| Detailed changelog | `docs/changelogs/CHANGELOG_v0.2.16.2+2.md` |
| Version file | `src/starborn_legacy/version.py` — `0.2.16.2+2` |
| SAA DB | `.adk/release-state.db` — `task_touch_mapping` row for `0.2.16.2+2` |
| Commit | `6d2f95bf` (`RW -k E02:S16:T02`) |
| Vendor coherence | `vendor/.../validate_release_coherence.py` lines 155–178 |

---

## 6. Workaround (adopter, until kit fix)

None that passes **`validate_release_coherence --strict`** while writing core-only SemVer in README. Coherence must be relaxed or patched locally (same class as other attempt-11 vendor patches — **not** desired long-term).

---

## 7. Non-goals

- Changing internal `RC.EPIC.STORY.TASK+BUILD` schema.
- Removing dual tags (`v0.0.5` + `v0.2.16.2+2`) — those are correct; only **displayed SemVer** is wrong.
