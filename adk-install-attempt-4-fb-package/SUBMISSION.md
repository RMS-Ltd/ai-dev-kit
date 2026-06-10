# ADK install feedback — submission cover (attempt 04)

**Package ID:** `starborn-legacy-adk-feedback-attempt04`
**Date:** 2026-06-10
**Project:** Starborn Legacy (`starborn_legacy`)
**Branch / HEAD:** `ai-dev-kit` @ `39fc49d0`
**ADK pin:** `v0.4.1131` greenfield-install tarball (sha256 verified)
**Prior attempt:** 03 — `v0.4.13` (F17 blocker: v1 catalog installed instead of v3.2)

---

## Start here

1. **[triage-matrix-attempt04.md](./triage-matrix-attempt04.md)** — findings (dispositions)
2. **[starborn-legacy-attempt04-feedback.md](./starborn-legacy-attempt04-feedback.md)** — full narrative
3. **[feedback-payload.json](./feedback-payload.json)** — machine-readable correlation

**Extends:** [UXR-025](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md) · attempt-03 triage (F10–F17) · [triage matrix attempts 1–2](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)

---

## Outcome summary

| Result | Detail |
|--------|--------|
| **BLOCKER (F17)** | v1 catalog still installed by `--mode fresh` in v0.4.1131 — same epic-05 FR Implementation fingerprint as attempts 1–3 |
| **PARTIAL (F10)** | Orchestrator still lacks `--skip-kanban`; workaround = `install_release_workflow.py --mode a` then separate kanban |
| **NOT READY (BR-086)** | Pattern specificity mismatch — contract expects `{story:03d}`/`t{task`, fresh install produces `{story:02d}`/`T{task}` |
| **PASS** | Dual-kanban test bed achieved (`KB/` legacy + `docs/kanban/` ADK) |
| **BLOCKED** | Migration test to v3.2 cannot proceed — no v3.2 installer shipped |

---

## Top requests for ADK

1. **F17:** Ship v3.2 package or warn `--mode fresh` installs v1 catalog only
2. **F18:** Fix BR-086 contract vs reality — `{story:03d}` expected but fresh install uses `{story:02d}`
3. **F19:** Fix `--non-interactive` EOFError on version_file prompt
4. **F20:** Fix default `version_file` path in mode a (`src/myproject/version.py` → project-aware)
5. **F10:** Add `--skip-kanban` to orchestrator

---

## Bundle layout

```
starborn-legacy-adk-feedback-attempt04/
├── SUBMISSION.md              ← this file
├── README.md
├── starborn-legacy-attempt04-feedback.md
├── triage-matrix-attempt04.md
├── feedback-payload.json
├── artifact-manifest.json
├── greenfield-install-diary.md
├── session.log
├── signoff-report.json
├── transcripts/               (TBD transcripts)
└── evidence/
```

---

## Attempt history (context)

| Attempt | ADK | Outcome |
|---------|-----|---------|
| 1 | `v0.4.1063` | Orchestrator/Kanban issues; v1 catalog; legacy scope not adopted |
| 2 | `main` @ `97ff2834` | UXR-025 fixes OK; Kanban fresh ran despite legacy intent; v1 catalog |
| 3 | `v0.4.13` | Option A sequencing + dual-tree confusion; **v1 catalog again (F17)** |
| 4 | `v0.4.1131` | **F17 persists** — v1 catalog installed; RW baseline + dual-kanban achieved; BR-086 pattern mismatch unchanged |

---

*Prepared for FR-079 intake. Adopter retains legacy E/S/T PM; ADK template kanban exercise only.*

**Next:** Awaiting ADK v3.2 package rewrite before attempt 05.
