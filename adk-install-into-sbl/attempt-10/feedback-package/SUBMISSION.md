# Starborn Legacy — ADK install attempt 10 (FR-079 adopter sign-off **final**)

**Session:** `20260615-attempt-10`  
**Install run ID:** `20260615-attempt-10`  
**SBL repo:** [RMS-Ltd/starborn_legacy](https://github.com/RMS-Ltd/starborn_legacy)  
**SBL branch:** `dev`  
**SBL HEAD (package freeze):** `1551ae14` — `Release v0.0.2+1: UKW kanban scaffold (E02:S16:T02)`  
**ADK pin:** `v0.4.1171` (`greenfield-install-v0.4.1171.tar.gz`, SHA-256 verified)  
**Install arm:** **B** — greenfield shell + blind kit KMA  
**Package status:** **`final`**  
**Final sign-off:** `2026-06-15T17:16:37Z` — **7 READY / 0 NOT READY / 1 SKIP** (kit-only)  
**Intake issue:** [#57](https://github.com/RMS-Ltd/ai-dev-kit/issues/57) (attempt 10 — **not** [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) which is attempt 09)

---

## Adopter sign-off declaration

The undersigned adopter confirms attempt **10** satisfies programme gates for **T36 AC7** and FR-079 intake:

| Gate | Result | Evidence |
|------|--------|----------|
| Install RC (`arm-b`, `--strict`) | **PASS** (10/11, 1 skip) | [install-rc-report-final.json](install-rc-report-final.json) |
| GitHub issue sign-off contract | **ALL READY** | [signoff-report.json](signoff-report.json) |
| Blind KMA | **PASS** · **0** ad-hoc `scripts/*kma*` | [FB-ADK-KMA-KANBAN-MIGRATION.md](FB-ADK-KMA-KANBAN-MIGRATION.md) |
| SQLite before first domain RW | **Yes** | `.adk/release-state.db` · `rw-config.yaml` |
| First domain RW | **COMPLETE** | `207924fb` · E02:S02:T01 · `v0.2.2.1+1` |
| UKW perpetual scaffold RW | **COMPLETE** | `1551ae14` · E02:S16:T02 · `v0.2.16.2+1` |

**vs attempt 09:** Install RC strict FAIL → **PASS**; ad-hoc KMA scripts 6 → **0**; release state legacy YAML → **SQLite**.

---

## Feedback items (route to E06:S09)

| ID | Evidence |
|----|----------|
| Bootstrap prerequisites | [FB-ADK-adopter-bootstrap-prerequisites.md](FB-ADK-adopter-bootstrap-prerequisites.md) |
| KMA blind pass | [FB-ADK-KMA-KANBAN-MIGRATION.md](FB-ADK-KMA-KANBAN-MIGRATION.md) · [migration-proposal.md](migration-proposal.md) |
| RW + task distribution | [FB-ADK-post-install-rw-and-task-distribution.md](FB-ADK-post-install-rw-and-task-distribution.md) |
| Attempt 09 PRIMARY (carry-forward) | [../attempt-09/FB-ADK-install-paths-industry-patterns.md](../attempt-09/FB-ADK-install-paths-industry-patterns.md) |

**Structured index:** [feedback-payload.json](feedback-payload.json) (contract **1.1.0**)

---

## Submission checklist

| Step | Status |
|------|--------|
| FB documents complete | ✅ |
| Payload `package_status: final` | ✅ |
| Sign-off report (7/0/1) | ✅ |
| Install RC strict PASS | ✅ |
| Git mirrors on `dev` (`docs/adk-feedback/`) | ✅ |
| Maintainer phase-2 KMA score | ⏭ Adopter out of scope — use [KMA reference](../attempt-09/KMA-REFERENCE-EST-TREE-ATTEMPT-09.md) |

**Local logs (gitignored):** `logs/attempt-10/` — transcripts, diary, full session.log
