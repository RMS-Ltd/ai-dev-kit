# Starborn Legacy — ADK attempt 11 (guided KMA / TSP programme)

**Session:** `20260624-attempt-11`  
**SBL repo:** [RMS-Ltd/starborn_legacy](https://github.com/RMS-Ltd/starborn_legacy)  
**Intake issue:** [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)  
**ADK pin:** `v0.4.1171`  
**Execution tip:** `cad18cc5` (`dev`) · **Install/bootstrap complete:** `eb5f3f52` · **`main` merged** @ `eb5f3f52`  
**Package status:** **`final`** · **Submitted:** 2026-06-24 · **Last sync:** 2026-06-24

---

## Outcomes

| Gate | Result |
|------|--------|
| Greenfield orchestrator (arm-b) | ⚠️ EXIT=1 — Install RC path bug ([FB](FB-ADK-greenfield-orchestrator-install-rc-gaps.md)) |
| Install RC strict (recovery + post-KMA) | ✅ PASS |
| **Guided KMA** (`synthesize_from_tsp.py`) | ✅ 377/377 tasks · 19 epics |
| Structural score | ✅ **93.99%** (threshold 85%) |
| Sign-off contract | ✅ 7 READY · 1 SKIP |
| Bootstrap **E02:S02** | ✅ COMPLETE (T02–T07) |
| RW mode C (`tools/workflow_mgt`) | ✅ Wired — `E02:S02:T07` (`v0.2.2.7+1`) |

---

## Releases (execution branch)

| Task | Internal | Primary SemVer tag |
|------|----------|-------------------|
| E02:S02:T01 install completion | `v0.2.2.1+1` | — |
| E02:S16:T04 install land | `v0.2.16.4+1` | `v0.0.3` |
| E02:S16:T02 UKW (post-install) | `v0.2.16.2+2` | `v0.0.5` |
| E02:S02:T07 bootstrap gate | `v0.2.2.7+1` | `v0.0.7` |
| E02:S16:T02 UKW (bootstrap close-out) | `v0.2.16.2+3` | `v0.0.8` |

---

## Primary feedback

| ID | Evidence |
|----|----------|
| Documentation profile (Obsidian/git, not Docusaurus default) | [FB-ADK-adopter-documentation-profile-obsidian-default.md](FB-ADK-adopter-documentation-profile-obsidian-default.md) |
| SemVer BUILD leaks into public surface | [FB-ADK-dual-semver-build-leaks-into-public-semver-surface.md](FB-ADK-dual-semver-build-leaks-into-public-semver-surface.md) |
| Orchestrator / Install RC gaps | [FB-ADK-greenfield-orchestrator-install-rc-gaps.md](FB-ADK-greenfield-orchestrator-install-rc-gaps.md) |
| Guided KMA + TSP | [FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md](FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md) |
| Install paths (carry-forward) | [attempt-09/FB-ADK-install-paths-industry-patterns.md](../attempt-09/FB-ADK-install-paths-industry-patterns.md) |

**Payload:** [feedback-payload.json](feedback-payload.json)  
**Diary:** `logs/attempt-11/greenfield-install-diary.md` (gitignored)

---

## Attempt 11 vs attempt 10

| Metric | Attempt 10 (blind) | Attempt 11 (guided) |
|--------|-------------------|---------------------|
| KMA mode | Blind policy | TSP-anchored synthesis |
| Structural score | ~62% est. | **93.99%** |
| Ad-hoc `scripts/*kma*` | 0 | 0 |
| Install RC strict | PASS (after workarounds) | PASS |

---

## Post-install (operator)

| Item | Status |
|------|--------|
| Push `dev` + tags to `origin` | ✅ |
| Merge `dev` → `main` | ✅ @ `eb5f3f52` |
| Bootstrap gate `E02:S02:T07` | ✅ `tools/workflow_mgt` + `release-workflow.yaml` |
| `AGENTS.md` | ✅ |
| Phase C active board | ✅ `kboard.md` only (M06) |
| Kit-side FBs | 5 items in `feedback-payload.json` |
