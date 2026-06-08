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

## Pattern 5 — COMPLETE tasks must leave active MoSCOW (FR-109)

**Evidence:** RW v0.2.17.2+1 Step 7  
**Friction:** Marking T01 COMPLETE on kboard failed `validate_active_kanban_board`; required prune + `kanban-completed.md` ledger.  
**Recommendation:** RW Step 7 checklist: terminal status → ledger first, then remove row; stamp manifest must cover row removal.

---

## Pattern 6 — `git push --tags` not blocked by immutability validator

**Evidence:** Wave 3 test design review  
**Friction:** `validate_release_tag_immutability` catches `-f`/`+v*` but not `git push origin branch --tags`.  
**Recommendation:** Extend forbidden patterns or add Step 12 lint; scenario RW-B08 covers `push_rw_release.py` contract only.

---

## Pattern 7 — IPW gate is file-presence + RW Step 1c (dual check)

**Evidence:** Wave 4 IPW-P01/P02/P04  
**Friction:** T03/T04 task docs exist but no `IPP-E02S17T0*.md`; RW on T04 aborts at Step 1c with TODO status.  
**Recommendation:** IPW checklist: create IPP, link from task doc, flip TODO→IN PROGRESS before any RW on implementation tasks.

---

## Pattern 8 — Large CHANGELOG triggers non-blocking CMW (RW Step 9.5)

**Evidence:** Wave 4 RW-V03 — `check_changelog_size.py` exit 1 on production `CHANGELOG.md`.  
**Friction:** RW continues but CMW should run; threshold breach is easy to miss if Step 9.5 skipped.  
**Recommendation:** SQLite changelog backend (T03/T04) should include size/entry-count metrics; compare V04 YAML parse vs SQLite query.

---

## Pattern 9 — Registry YAML parse cost baseline (~188ms)

**Evidence:** Wave 4 RW-V04 — 5× avg `yaml.safe_load` on ~2.5k-line `semver-registry.yaml`.  
**Friction:** Every finalize/lookup touches full-file parse today.  
**Recommendation:** T05 parity replay must include RW-V04 on SQLite; target sub-5ms indexed lookup.

---

## Next waves

| Wave | Scenarios | Focus |
| ---- | --------- | ----- |
| ~~3~~ | ~~B07, B08, V02, P01, G06, S07~~ | ✅ Done (partial AGT for V02/P01) |
| ~~4~~ | ~~IPW-P01–P04, V03, V04~~ | ✅ Done |
| T02 close | All waves 1–4 | ✅ COMPLETE @ v0.2.17.2+5 |
| T03+ | IPW → SQLite | ✅ IPP + design docs; T04 implementation next |
