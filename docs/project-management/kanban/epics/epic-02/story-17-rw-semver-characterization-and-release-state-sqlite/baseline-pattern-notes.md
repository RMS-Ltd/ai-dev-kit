# Baseline Pattern Notes (E02:S17:T02)

**Updated:** 2026-06-07 (Wave 1)

---

## Pattern 1 — Intent gate requires `--art` for cross-story adoption

**Evidence:** RW-G03 (live + pytest), RW-G04  
**Friction:** First S17 release on spike branch failed Step 1d until `--art` added to trigger.  
**Recommendation:** Agent RW cheatsheet should default to `--art` when filing new story/task on non-epic branch.

---

## Pattern 2 — BUILD +1 enforced at resolver and validator layers

**Evidence:** RW-B01, RW-B02, RW-B03  
**Friction:** Low for deterministic path; collision caught at `validate_tagged_build_collision` if agent skips resolver.  
**Recommendation:** Wave 3 AGT scenario RW-B07 still needed for `git tag -f` agent bypass.

---

## Pattern 3 — Registry YAML schema is rc-scoped (`rc_0.task_touch_mode`)

**Evidence:** RW-S02 initial test failure — flat `task_touch_mode` root ignored counter seed.  
**Friction:** Test fixtures must mirror production schema or silently get counter=0.  
**Recommendation:** SQLite migration (T03) should document rc-scoped schema; export round-trip must preserve `rc_0` nesting.

---

## Pattern 4 — Stamp evidence manifest required for kboard row updates (FR-097)

**Evidence:** RW v0.2.17.1+2 release (live, not Wave 1 pytest)  
**Friction:** Step 9 blocked until `rw-step7-stamp-evidence-*.json` provided.  
**Recommendation:** Add RW-STEP7-STAMP checklist item to agent RW Step 7; scenario matrix class D could add RW-G07.

---

## Next waves

| Wave | Scenarios | Focus |
| ---- | --------- | ----- |
| 2 | S03, S04, S05, S06, V01 | SemVer stress + volume |
| 3 | B07, B08, V02, P01, G06, S07 | Agent + push batch |
| 4 | IPW-P01–P04, V03, V04 | IPW gate + CMW |
