# Starborn Legacy — ADK install attempt 09 (FR-079 submission cover)

**Session:** `20260614-attempt-09`  
**Install run ID:** `20260614-attempt-09`  
**SBL repo:** [RMS-Ltd/starborn_legacy](https://github.com/RMS-Ltd/starborn_legacy) (assumed)  
**SBL branch:** `dev`  
**SBL HEAD (package freeze):** `7a08a906` — `Release v0.9.4+1: E01:S01:T02 UKW comprehensive kanban sync`  
**ADK pin:** `v0.4.1164` (Latest, 2026-06-14)  
**Install arm:** **B** — greenfield shell + migration (KMA)  
**Package status:** **`final`** (adopter sign-off) — intake issue [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)  
**Final sign-off:** 2026-06-15 — **7 READY / 0 NOT READY / 1 SKIP** · Install RC **FAIL** (~50%) documented · verdict `pending_kit_deconfound`  
**Prior attempt:** attempt 08 — kanban migration abandoned; FB filed

---

## Maintainer intake summary

Starborn Legacy executed a **post-wipe greenfield ADK install** on mature archived content, then completed **manual KMA**, **UKW**, and **four RW releases** on the **legacy YAML registry path** (not sqlite SAA). Install sign-off passed contract checks, but the **Install RC checklist** (~50% blocking) shows the orchestrator is not aligned with shell+migration or production sqlite/docs authority.

**Primary ask:** Route the five feedback items below into **E06:S09** (install programme). Implement **Phase 0 kit fixes** (path-agnostic) before comparing Arm A (fynd.deals, Confidentia brownfield) vs Arm B (SBL attempt 10).

**Do not copy** this package wholesale into `ai-dev-kit` — FR-079 adopter ownership. Intake via issues/PRs referencing evidence paths below.

---

## Intent

Post-wipe greenfield ADK install (attempt 09). Working tree at start: Flutter platform scaffold + `docs-pre-ai-dev-kit/` archive only. Goal: validate **Lane B** install path for messy mature adopters with full git history.

---

## Outcome summary

| Phase | Result | Notes |
|-------|--------|-------|
| Vendor preflight | **PASS** | Tarball SHA-256 OK; 13 MiB lean vendor |
| Greenfield orchestrator | **PARTIAL** | RW mode C + kanban fresh; `ADK-I03.E90` lean workflows expected |
| Initial sign-off | **PASS** | 7 READY / 1 SKIP / 0 NOT READY (venv on PATH) |
| KMA (FR-127) | **PASS** (manual) | v4 kanban; E30–E40 domain band; validators strict PASS |
| UKW comprehensive | **PASS** (manual) | `kboard.md` populated; E01:S02 COMPLETE |
| Install RC checklist | **FAIL** (~50%) | Confounded: sqlite, docs schema, UKW, kit KMA |
| Release authority | **LEGACY YAML** | 4 RWs through `v0.9.4`; no `.adk/release-state.db` |

### Delta vs attempt 07

| Area | Attempt 07 | Attempt 09 |
|------|------------|------------|
| ADK pin | `v0.4.1161` | `v0.4.1164` |
| Sign-off NOT READY | 1 (BR-084 class) | **0** |
| F17 epic index | Epic 5 = Project Architecture | Epic 4 = Project Architecture |
| Kanban | Dual-tree / migration abandoned | Canonical `docs/kanban/` post-KMA |
| Install RC | Not scored | Scorecard in package |

### RW releases during attempt 09 (YAML path)

| Internal | SemVer | Task | Commit (tag) |
|----------|--------|------|--------------|
| `v0.15.13.5+1` | `v0.9.1+1` | E15:S13:T05 | pre-KMA smoke |
| `v0.1.2.6+2` | `v0.9.2+2` | E01:S02:T06 | `a55142b1` |
| `v0.1.2.6+3` | `v0.9.3+3` | E01:S02:T06 | `d55f57a9` |
| `v0.1.1.2+1` | `v0.9.4+1` | E01:S01:T02 | `7a08a906` |

---

## Feedback items (route to ADK)

| ID | Severity | Title | Evidence |
|----|----------|-------|----------|
| **`FB-ADK-install-paths-industry-patterns`** | **HIGH** | **PRIMARY — Greenfield vs brownfield blog synthesis + industry research + Adopter Path Selector** | [`docs/adk-feedback/attempt-09/FB-ADK-install-paths-industry-patterns.md`](../../../docs/adk-feedback/attempt-09/FB-ADK-install-paths-industry-patterns.md) (git mirror) · `feedback-package/` (full package) |
| `FB-ADK-greenfield-sqlite-before-rw` | HIGH | SQLite release-state before first RW | `FB-ADK-greenfield-sqlite-before-rw.md` |
| `FB-ADK-canonical-maintainer-documentation-schema` | HIGH | ADK-owned maintainer docs end-schema | `FB-ADK-canonical-maintainer-documentation-schema.md` |
| `FB-ADK-optimal-greenfield-install-sequence` | MEDIUM | Layered greenfield install sequence | `FB-ADK-optimal-greenfield-install-sequence.md` |
| `UXR-ADK-install-path-experiment` | HIGH | Brownfield vs greenfield+migration experiment | `UXR-ADK-install-path-experiment.md` |

**Structured index:** `feedback-payload.json`  
**Checklist snapshot:** `attempt-09-scorecard.json`

---

## Session telemetry (T111)

| Field | Value |
|-------|-------|
| Install log | `logs/attempt-09/` |
| Session log | `session.log` (42 phase markers) |
| Primary ADK codes | `ADK-I03.E90`, `ADK-I04.E01`, `ADK-I02.E08` |
| Sign-off report | `signoff-report.json` |
| Narrative | `greenfield-install-diary.md` |

**Note:** `ai-dev-kit logs prepare-feedback-payload` CLI not present at pin `v0.4.1164`; payload hand-populated per contract `1.1.0` in `feedback-payload.json`.

---

## Suggested ADK routing

| Destination | Items |
|-------------|-------|
| `install_greenfield_path.py` / orchestrator | SQLite order, layered sequence, UKW install |
| `install_release_workflow.py` | `release_state_backend: sqlite` default; docs profile branching |
| `INSTALL_IN_YOUR_PROJECT.md` | Install RC checklist; Adopter Path Selector |
| E05 Documentation | Maintainer documentation schema + scaffold |
| E06:S09 install programme | UXR experiment; three-repo evidence programme |

---

## Adopter constraints (post-submission)

- **Freeze:** No domain epic RWs until Arm B attempt 10 on new kit pin after Phase 0.
- **Do not** publish local `DOCUMENTATION_SCHEMA.md` as SoT — wait for ADK.
- **SBL remediation:** E01:S03 — sqlite migration via `import_legacy.py` before next RW on sqlite backend.

---

## Submission status

| Step | Status |
|------|--------|
| FB documents complete | ✅ |
| Payload populated | ✅ |
| Artifact manifest complete | ✅ |
| Redaction review | ✅ (manual — no credentials in logs) |
| Payload CLI validate | ⏭ Skipped — CLI unavailable at pin |
| Submitted to ai-dev-kit | ✅ [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) (2026-06-15) |
| Adopter sign-off **final** (attempt 09 scope) | ✅ Sign-off contract PASS; RC FAIL documented; git mirrors on `dev` |
| #51 follow-up posted | ✅ https://github.com/RMS-Ltd/ai-dev-kit/issues/51#issuecomment-4707011288 |
| Attempt 10 continuation | → **new issue** (not #52) |

**Intake issue:** https://github.com/RMS-Ltd/ai-dev-kit/issues/52

---

## Maintainer routing

- **ADK repo:** [RMS-Ltd/ai-dev-kit](https://github.com/RMS-Ltd/ai-dev-kit)
- **Programme story:** E06:S09 (install programme)
- **Related open issue:** [#51 — Legacy Kanban migration (attempt 08)](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) — follow-up posted 2026-06-15; see `ISSUE-51-ATTEMPT-08-FOLLOWUP.md`
- **Adopter contact:** Starborn Legacy maintainer via repo issues or agreed intake channel
