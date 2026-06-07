# RW & IPW Scenario Matrix (E02:S17:T01)

**Version:** v1.0 (2026-06-07)  
**Story:** [E02:S17](../story-17-rw-semver-characterization-and-release-state-sqlite.md)  
**Run log:** [run-log-schema.md](run-log-schema.md) · [baseline-run-log.md](baseline-run-log.md) *(T02)*

---

## Conventions

| Field | Meaning |
| ----- | ------- |
| **ID** | Stable scenario identifier — never rename; append `-v2` only when semantics change |
| **Layer** | `DET` = deterministic (pytest/worktree/scripts); `AGT` = full agent RW (document friction) |
| **Backend** | `legacy` (MD/YAML) · `sqlite` (post-T04) · `both` |
| **Expect** | `PASS` · `ABORT@step` · `ABORT@validator` |

**Isolation:** one scenario = one [git worktree](https://git-scm.com/docs/git-worktree) (or fresh clone). Seed from `dev` or tagged baseline; never share tag/registry state between scenarios.

**Harness:** `tests/rw_scenarios/test_wave1_baseline.py` (Wave 1 deterministic runner)

**Default config:** `rw-config.yaml` with `semver_mapping_strategy: task_touch`, `versioning_mode: dual`.

---

## Class A — BUILD & release tags

| ID | Layer | Summary | Preconditions | Trigger / commands | Expected outcome | Artifacts to capture |
| -- | ----- | ------- | ------------- | ------------------ | ---------------- | -------------------- |
| **RW-B01** | DET | Same E:S:T BUILD +1 (happy path) | Worktree on `epic/2-*` or `dev`; task doc `IN PROGRESS`; HEAD untagged for target E:S:T | `RW E02:S17:T01` (or fixture task) | PASS; BUILD increments; new archive changelog; tags created | `version.py`, tag list, archive changelog header, registry counter delta |
| **RW-B02** | DET | Same E:S:T when HEAD BUILD already tagged | Complete RW-B01; do not push | Second `RW` same E:S:T | PASS; BUILD +1 (not reuse) | `resolve_rw_build.py` JSON, tags (two distinct BUILD tags) |
| **RW-B03** | DET | Tagged BUILD reuse blocked | Manually set `version.py` to tagged BUILD; attempt RW same E:S:T | `RW E02:S17:T01` | ABORT@9 `validate_version_bump` or tagged-build collision | Validator stderr, no new tag |
| **RW-B04** | DET | `--dpz` doc-policy-zero (BUILD +0) | New E:S:T doc-init; HEAD BUILD untagged; user types `--dpz` in trigger | `RW E02:S17:T02 --dpz` | PASS; BUILD stays 0 or policy-allowed +0 path | Resolver JSON `doc_policy_zero: true` |
| **RW-B05** | DET | `--dpz` rejected when BUILD tagged | After RW-B01 (tagged) | `RW E02:S17:T01 --dpz` | ABORT@2 resolver or Step 9 | Resolver exit ≠ 0 or validator fail |
| **RW-B06** | DET | `--art` cross-task adoption | `version.py` on E02:S16:T*; release for E02:S17:T* | `RW E02:S17:T01 --art` | PASS; STORY/TASK jump; BUILD reset to 1 | Before/after version.py, intent validator with `--art` |
| **RW-B07** | AGT | Agent must not `git tag -f` | Simulate tag collision (local duplicate SemVer tag name) | Agent RW with wrong recovery | ABORT@11; friction note if agent tries `-f` | Agent log, tag immutability validator |
| **RW-B08** | DET | Push release-scoped tags only | 2+ local releases untagged on remote | `push_rw_release.py --branch … --internal-version …` | PASS; only requested tags pushed | Push command output; no `--tags` |

---

## Class B — SemVer & task_touch registry

| ID | Layer | Summary | Preconditions | Trigger / commands | Expected outcome | Artifacts to capture |
| -- | ----- | ------- | ------------- | ------------------ | ---------------- | -------------------- |
| **RW-S01** | DET | First release on new task maps new PATCH | Clean registry row for internal version | `RW E02:S17:T01 --art` | PASS; `task_touch_counter` +1; injective mapping | `semver-registry.yaml` / DB mapping row, `semver_converter.py` output |
| **RW-S02** | DET | Rapid same-task releases (3×) | Worktree; same E:S:T | Three sequential RW runs | PASS ×3; counter +3; distinct SemVer cores or BUILD suffixes per policy | Counter history, `validate_semver_registry_injective.py` |
| **RW-S03** | DET | New task → new internal key | After RW-S02 | `RW E02:S17:T02 --art` | PASS; TASK bump; BUILD 1; new mapping | Registry entries for both tasks |
| **RW-S04** | DET | Finalize at tag boundary only | Run through Step 2–9 without Step 11 | Inspect registry mid-run vs post-tag | Counter not finalized until tag step | Staged registry diff, finalize script logs |
| **RW-S05** | DET | Injective validator catches PATCH collision | Inject duplicate mapping in test fixture registry | `validate_semver_registry_injective.py` | ABORT@validator exit ≠ 0 | Fixture + validator output |
| **RW-S06** | DET | Release contract strict mode | RW complete through Step 8; registry not finalized | `validate_task_touch_release_contract.py --strict` | PASS when staged + finalized correctly | Contract validator JSON |
| **RW-S07** | AGT | Collision recovery path (operator) | Documented duplicate SemVer core in registry | Repair manifest + re-RW | PASS after repair; no `-f` tags | Repair manifest, before/after mapping table |

---

## Class C — Volume & operator batching

| ID | Layer | Summary | Preconditions | Trigger / commands | Expected outcome | Artifacts to capture |
| -- | ----- | ------- | ------------- | ------------------ | ---------------- | -------------------- |
| **RW-V01** | DET | 10 sequential RW runs (same perpetual task) | Perpetual task doc; worktree | 10× `RW E02:S16:T04` (or fixture) | PASS ×10; BUILD 1..10; counter +10 | Timing log, registry size, changelog archive count |
| **RW-V02** | AGT | 10 commits locally, batch push once | RW-V01 complete; no push during runs | Single branch push + per-tag push | PASS; remote tags match local | `git log`, push transcript |
| **RW-V03** | DET | Changelog size threshold (CMW trigger) | Main CHANGELOG > threshold | `check_changelog_size.py` after RW | Exit 1 advisory; CMW optional | Line count, CMW run if triggered |
| **RW-V04** | DET | Large registry parse performance | Full production registry imported | Benchmark: YAML load vs SQLite query (T05) | Baseline timing row in run log | `tests/test_rw_performance.py` extension output |

---

## Class D — Branch, intent & gates

| ID | Layer | Summary | Preconditions | Trigger / commands | Expected outcome | Artifacts to capture |
| -- | ----- | ------- | ------------- | ------------------ | ---------------- | -------------------- |
| **RW-G01** | DET | Missing task token | Any branch | `RW` (no E:S:T) | ABORT@1b | Gate message |
| **RW-G02** | DET | Task doc not releasable (TODO) | Task status TODO | `RW E02:S17:T99` (fixture) | ABORT@1c | `validate_rw_task_complete.py` output |
| **RW-G03** | DET | Intent mismatch without `--art` | version.py E2:S16; trigger E2:S17 | `RW E02:S17:T01` (no `--art`) | ABORT@1d | Intent validator message |
| **RW-G04** | DET | Intent mismatch with `--art` | Same as G03 | `RW E02:S17:T01 --art` | PASS gates | `--art` log line |
| **RW-G05** | DET | Wrong epic branch (strict) | Branch `epic/7-*`, version E2 | `validate_branch_context.py --strict` | Non-zero or WARN per config | Branch validator output |
| **RW-G06** | AGT | Confirmed override after mismatch | G03 failed; user confirms | Re-run with `--confirmed-override` | PASS after explicit confirmation | Chat confirmation + validator |

---

## Class E — Perpetual & workflow chaining

| ID | Layer | Summary | Preconditions | Trigger / commands | Expected outcome | Artifacts to capture |
| -- | ----- | ------- | ------------- | ------------------ | ---------------- | -------------------- |
| **RW-P01** | AGT | UKW → RW attribution | Run `UKW -u`; then `RW` | UKW then RW (no E:S:T on second?) — use wired perpetual | RW attributes to UKW perpetual task; BUILD +1 on perpetual | version.py E:S:T, context detection notes |
| **RW-P02** | DET | CMW perpetual task BUILD | Changelog over threshold | `CMW` then `RW` on CMW perpetual | BUILD increments on CMW task id | Version anchor on CMW task doc |
| **RW-P03** | DET | Perpetual high BUILD warning suppression | BUILD > 50 on perpetual flag task | `RW` perpetual task | PASS; no false “high BUILD” abort | Resolver + validator logs |

---

## Class F — IPW (planning gate)

| ID | Layer | Summary | Preconditions | Trigger / commands | Expected outcome | Artifacts to capture |
| -- | ----- | ------- | ------------- | ------------------ | ---------------- | -------------------- |
| **IPW-P01** | AGT | IPW produces linked IPP | Task TODO; plan mode | `IPW E02:S17:T03` | IPP under `docs/implementation-cycles/`; linked from task | IPP path, task doc link |
| **IPW-P02** | AGT | Implementation blocked without IPP | Task without IPP; agent mode | User asks "implement T04" | Agent stops at IPW gate; no code | Agent refusal message |
| **IPW-P03** | AGT | IPP status transition steps present | IPW for new task | Inspect IPP Section 4 | Step 1 TODO→IN PROGRESS; final status reconciliation step | IPP checklist excerpt |
| **IPW-P04** | DET | RW blocked until IPP linked (T04) | T04 without IPP | `validate_rw_task_complete` / task doc audit | Task remains TODO until IPP linked | Task doc Implementing links |

---

## Execution priority (T02 baseline)

**Wave 1 (core friction):** RW-B01, B02, B03, B06, S01, S02, G03, G04  
**Wave 2 (SemVer stress):** S03, S04, S05, S06, V01  
**Wave 3 (operator + agent):** B07, B08, V02, P01, G06, S07  
**Wave 4 (IPW + volume):** IPW-P01–P04, V03, V04  

---

## SQLite parity (T05)

Replay **every ID** with `release_state_backend: sqlite` (post-T04). Invariants must match:

- Internal version string after each run  
- SemVer mapping (core + BUILD display)  
- Validator pass/fail parity  
- Tag names (`v0.4.{counter}` + internal traceability tag)

Storage path differences (archive MD vs DB row) are **allowed**; invariant differences are **not**.

---

## Changelog

| Date | Change |
| ---- | ------ |
| 2026-06-07 | v1.0 — initial 28 scenarios (A–F); seeded from spike discussion |
