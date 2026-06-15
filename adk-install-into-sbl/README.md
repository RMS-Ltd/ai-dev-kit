# Starborn Legacy — ADK install attempts (maintainer index)

**Program task:** [E06:S09:T26](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)  
**Triage matrix:** [starborn-legacy-install-triage-matrix.md](../docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)

---

## Artifact ownership ([FR-079](../docs/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance.md))

**Feedback packages, diaries, transcripts, and session logs live in the Starborn Legacy repo** — not copied into `ai-dev-kit`.

| Attempt | SBL canonical root |
|---------|-------------------|
| 03 | `starborn_legacy/logs/ai-dev-kit/install/attempt-03/` |
| 04 | `starborn_legacy/logs/ai-dev-kit/install/attempt-04/` |
| 05 | `starborn_legacy/logs/ai-dev-kit/install/attempt-05/` |
| 06 | `starborn_legacy/logs/ai-dev-kit/install/attempt-06/` |

Each attempt folder typically contains:

- `feedback-package/` — `SUBMISSION.md`, `feedback-payload.json`, triage addendum
- `greenfield-install-diary.md`
- `transcripts/`
- `session.log`
- `run-logged.sh`

**This tree** (`adk-install-into-sbl/`) holds **maintainer indexes only** (outcome summary + pointers).

---

## Maintainer indexes

| Attempt | Index | ADK pin |
|---------|-------|---------|
| 02 | [attempt-02/greenfield-install-diary.md](attempt-02/greenfield-install-diary.md) (copy in knowledge analysis) | `main` @ `97ff2834` |
| 03 | [attempt-03/README.md](attempt-03/README.md) | `v0.4.13` (`0.4.1098+1`) |
| 04 | — (SBL path only) | `v0.4.1131` |
| 05 | — (SBL path only) | `main` @ `0d278366` (`v0.6.9.27+2` / SemVer `v0.4.1133+2`) |
| 06 | [attempt-06/README.md](attempt-06/README.md) · [preflight checklist](attempt-06-preflight-checklist.md) | `v0.4.1140+2` → `256259fb2` — FR-079 **accepted**; adopter sign-off final; FR-127/BR-108 filed |
| 07–08 | SBL `logs/` only | Attempt 08 → [#51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) (migration abandoned) |
| 09 | [attempt-09/README.md](attempt-09/README.md) | `v0.4.1164` @ `7a08a906` — Arm B; [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52); PRIMARY synthesis mirrored |
| 10 | [attempt-10/README.md](attempt-10/README.md) | **PENDING** — Phase 0 kit prep; Arm B RC PASS target |
