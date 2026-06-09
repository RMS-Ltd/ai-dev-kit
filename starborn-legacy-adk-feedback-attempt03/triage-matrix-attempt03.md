# Starborn Legacy install — triage matrix (attempt 03 addendum)

**Extends:** [UXR-025](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md) · [triage matrix attempts 1–3](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) (**merged** — canonical SoT is matrix file; this addendum is the adopter submission copy)

**ADK pin:** `v0.4.13` tarball  
**Session:** `20260609-attempt-03`  
**Feedback package:** `./starborn-legacy-attempt03-feedback.md`

---

## Disposition summary

| ID | Finding | Severity | Disposition | Suggested outcome |
|----|---------|----------|-------------|-------------------|
| F10 | **Option A presented as only obvious path** — orchestrator cannot skip Kanban; RW-only misread as “no ADK kanban ever” | **HIGH** | **DOC + CODE** | Document migration-test-bed sequence; orchestrator `--skip-kanban` or honor `use_kanban: false` |
| F11 | **`use_kanban: false` post-install** — no `docs/` dir; adopter/agent confusion about whether kanban exists | **HIGH** | **DOC + UX** | Post-install message listing missing Kanban step; distinguish “deferred” vs “excluded” |
| F12 | **Legacy kanban path (`KB/`) vs ADK target (`docs/kanban/`)** not explained at install time | **MEDIUM** | **DOC** | FR-081 / INSTALL table: source vs target roots (Starborn example) |
| F13 | **Agent restored legacy only** when adopter said “no docs” — wrong fix for migration-test goal | **MEDIUM** | **DOC** | Adopter playbook: dual-tree requirement before migration |
| F14 | **Dual kanban test bed** required manual 4-step sequence (3a→restore→3b→3c) | **MEDIUM** | **DOC + CODE** | Single documented profile or orchestrator phases |
| F15 | **Migration not started** — detector/migration against `KB/` → `docs/kanban` pending | INFO | **RECORD** | Next session; feed results back as UXR |
| F16 | **F9 persists:** fresh install = v1 epic **catalog** templates; adopter labels “ADK Kanban v3” | **CRITICAL** | **BLOCKER** | See **F17** — attempt 03 repeated known failure |
| **F17** | **Attempt 03 installed v1 again** despite attempts 1–2 closure on same root cause; `E05 FR Implementation` epic proves v1 catalog not v3.2 (FR→E04:S02) | **CRITICAL** | **PRODUCT** | No installer path to v3.2 on `v0.4.13` or `main`; blueprint says “do not execute until Phase 5 sign-off” |

### F17 detail (v1 vs v3.2 — on disk proof)

| Signal | Installed (v1) | Expected (v3.2 Scenario A) |
|--------|----------------|----------------------------|
| Epic 5 | Standalone **FR Implementation** (`docs/kanban/epics/epic-05/`) | FR intake is **E04:S02** story, not epic 5 |
| Epic 6–7 | BR, UXR standalone epics | **E04:S03–S04** stories |
| Catalog | 1–8, 10, 18, 22, 23 from `_install_canonical_epics` | v3.2 remap per [07-package-migration-blueprint](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/knowledge/analysis/kanban-v2/07-package-migration-blueprint.md) |
| ADK upstream | Templates still `epic-05-FR-Implementation.md` on `main` | Package rewrite **not shipped** |

**Adopter impact:** Cannot test SBL legacy → **ADK Kanban v3** migration; `docs/kanban/` is wrong target schema. Sign-off ALL READY (attempts 1–2) masked catalog generation gap.

**Requested ADK actions:**

1. **INSTALL:** `--mode fresh` must warn: “installs **v1 catalog** only; v3.2 not available via installer.”
2. **Block or rename** fresh mode until v3 package ships (or `--catalog v1|v3.2` when ready).
3. **Sign-off:** fail or warn when installed epics match v1 fingerprint (E05 FR epic present).
4. **UXR-025 F9:** upgrade from DEFER to **active blocker** with Starborn attempt 03 evidence.

---

## Evidence links

| ID | Transcript / artifact |
|----|------------------------|
| F10 | `../transcripts/20260609T122915Z-phase3-rw-only.txt` |
| F11 | Adopter: “there's no docs/ dir”; phase 3a exit state |
| F12 | `../transcripts/20260609T123224Z-restore-legacy-kanban.txt` |
| F13 | Adopter: “That wasn't what I meant… need ADK v3 Kanban” |
| F14 | `../transcripts/20260609T123621Z-phase3b-kanban-fresh.txt`, `../transcripts/20260609T123637Z-phase3c-rw-kanban-config.txt` |
| F15 | Diary Phase 5 “Next for migration exercise” |
| F16 | Kanban fresh output (12 epics); UXR-025 triage F9 |

---

## Final state verification

| Check | Result |
|-------|--------|
| `docs/kanban/kboard.md` | Present |
| `KB/.../KANBAN_BOARD.md` | Present |
| `rw-config.yaml` `use_kanban` | `true` |
| Sign-off (post 3c) | 6 READY, 1 SKIP, 1 NOT READY (BR-086) |
