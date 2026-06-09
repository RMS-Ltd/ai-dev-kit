# ADK install feedback — submission cover (attempt 03)

**Package ID:** `starborn-legacy-adk-feedback-attempt03`  
**Date:** 2026-06-09  
**Project:** Starborn Legacy (`starborn_legacy`)  
**Branch / HEAD:** `ai-dev-kit` @ `39fc49d0`  
**ADK pin:** `v0.4.13` greenfield-install tarball (sha256 verified)

---

## Start here

1. **[triage-matrix-attempt03.md](./triage-matrix-attempt03.md)** — findings F10–**F17** (dispositions)
2. **[starborn-legacy-attempt03-feedback.md](./starborn-legacy-attempt03-feedback.md)** — full narrative
3. **[feedback-payload.json](./feedback-payload.json)** — machine-readable correlation

**Extends:** [UXR-025](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md) · [triage matrix attempts 1–2](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)

---

## Outcome summary

| Result | Detail |
|--------|--------|
| **BLOCKER** | **F17** — `--mode fresh` installed **Kanban v1 catalog** again (same as attempts 1–2, UXR-025 **F9**) |
| **Proof** | `evidence/docs/kanban/epics/epic-05/epic-05.md` — “Epic 5: FR Implementation” (v1; v3.2 → E04:S02) |
| **Partial** | RW lean greenfield + dual-tree (`KB/` legacy + `docs/kanban/` ADK) |
| **Blocked** | SBL legacy → ADK **Kanban v3.2** migration test — no v3 installer on `v0.4.13` / `main` |

---

## Top requests for ADK

1. **F9/F17:** Ship v3.2 package OR block/warn `--mode fresh` until then; sign-off must not pass on v1 fingerprint.
2. **F10:** Orchestrator `--skip-kanban` or honor `use_kanban: false` in RW config.
3. **F10–F14:** Document greenfield **migration test bed** sequence (RW defer → legacy restore → kanban → rw mode C).
4. **INSTALL:** Explicit “fresh = v1 catalog only” — link v3.2 blueprint gate.

---

## Bundle layout

```
starborn-legacy-adk-feedback-attempt03/
├── SUBMISSION.md              ← this file
├── README.md
├── starborn-legacy-attempt03-feedback.md
├── triage-matrix-attempt03.md
├── feedback-payload.json
├── artifact-manifest.json
├── greenfield-install-diary.md
├── session.log
├── signoff-report.json
├── transcripts/               (9 command transcripts)
└── evidence/
    └── docs/kanban/epics/epic-05/epic-05.md   (v1 catalog proof)
```

---

## Attempt history (context)

| Attempt | ADK | Outcome |
|---------|-----|---------|
| 1 | `v0.4.1063` | Orchestrator/Kanban issues; v1 catalog; legacy scope not adopted |
| 2 | `main` @ `97ff2834` | UXR-025 fixes OK; Kanban fresh ran despite legacy intent; v1 catalog |
| 3 | `v0.4.13` | Option A sequencing + dual-tree confusion; **v1 catalog again (F17)** |

---

*Prepared for FR-079 intake. Adopter retains legacy E/S/T PM; ADK template kanban exercise only.*
