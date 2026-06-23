# Starborn Legacy — ADK install attempt 10 (maintainer index)

**Session:** `20260615-attempt-10`  
**ADK pin:** `v0.4.1171`  
**SBL branch / HEAD:** `dev` @ `448a79e1` (package freeze `1551ae14`) — **pre-revert snapshot**  
**Arm:** **B** — greenfield shell + blind kit KMA  
**Maintainer task:** [E06:S09:T26](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) · [E06:S09:T36](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md)

**GitHub:** [ai-dev-kit #52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)

**FR-079 status:** Adopter sign-off **final** @ `2026-06-15T17:16:37Z` — maintainer intake **accepted** (T36 AC7 satisfied)

---

## Outcome

| Result | Detail |
|--------|--------|
| Vendor preflight | **PASS** — tarball `v0.4.1171`, SHA-256 verified |
| Greenfield orchestrator | **PASS** — `arm-b`, `--init-sqlite`, `--catalog v4`, Install RC gate |
| Install RC (`arm-b`, strict) | **PASS** — 10 blocking / 1 skip (`rc-kma-migration-map` N/A) |
| Sign-off contract | **7 READY / 0 NOT READY / 1 SKIP** (BR-080 kit-only) |
| Blind KMA | **PASS** — kit-owned; **0** ad-hoc scripts |
| Release authority | **SQLite** — `.adk/release-state.db` before first domain RW |
| First domain RW | **COMPLETE** — `207924fb` · E02:S02:T01 · `v0.2.2.1+1` |
| Post-install UKW | **COMPLETE** — `1551ae14` · E02:S16:T02 · `v0.2.16.2+1` |

---

## vs attempt 09

| Metric | Attempt 09 | Attempt 10 |
| ------ | ---------- | ------------ |
| Install RC strict | FAIL (~50%) | **PASS** |
| Ad-hoc KMA scripts | 6 | **0** |
| RW release state | Legacy YAML | **SQLite** |
| Sign-off vs RC | 7 READY / RC FAIL | **Aligned** |

---

## Canonical feedback package (FR-079)

**ADK mirror** (authoritative after SBL `pre-adk-install` revert — [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)):

| Artifact | Path |
| -------- | ---- |
| Cover | [feedback-package/SUBMISSION.md](feedback-package/SUBMISSION.md) |
| Payload | [feedback-package/feedback-payload.json](feedback-package/feedback-payload.json) |
| Install RC | [feedback-package/install-rc-report-final.json](feedback-package/install-rc-report-final.json) |
| Sign-off | [feedback-package/signoff-report.json](feedback-package/signoff-report.json) |
| KMA report | [feedback-package/FB-ADK-KMA-KANBAN-MIGRATION.md](feedback-package/FB-ADK-KMA-KANBAN-MIGRATION.md) |
| Migration proposal | [feedback-package/migration-proposal.md](feedback-package/migration-proposal.md) |
| Index | [docs/adk-feedback/attempt-10/README.md](../../docs/adk-feedback/attempt-10/README.md) |

**Installed-state evidence** was on SBL `dev` pre-revert (`COMPREHENSION.md`, `docs/kanban/`, `docs-pre-ai-dev-kit/`) — not mirrored on ADK.

---

## Blind KMA programme

| Phase | Status |
| ----- | ------ |
| 1 — Kit KMA (blind) | **Complete** — archived legacy only |
| 2 — Structural score vs reference | **Maintainer** — [KMA-REFERENCE-EST-TREE-ATTEMPT-09.md](../attempt-09/feedback-package/KMA-REFERENCE-EST-TREE-ATTEMPT-09.md) |
| 3 — Operator tweaks | Log in FB §4 if any |

---

## Open kit feedback (from payload)

| ID | Theme |
| -- | ----- |
| `FB-ADK-adopter-bootstrap-prerequisites` | Phase 0 bootstrap checklist in INSTALL |
| `FB-ADK-KMA-KANBAN-MIGRATION` | KMA filename collision / megastory routing |
| `FB-ADK-post-install-rw-and-task-distribution` | RW-ready task doc; `--art` for first domain RW |

**Filed (maintainer intake):** [FR-133](../../docs/kanban/fbu/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) → [E06:S09:T37](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T37-kanban-migration-depth-rationalization-fr133.md) — **painless default migration path** (L1 = ship); L2/L3 opt-in.

---

## Maintainer next steps

1. **T36 AC7** — close on maintainer RW (kanban + task doc).
2. **UXR-029** — update H1 evidence row (attempt 10 RC PASS).
3. **#52** — maintainer acceptance comment; optional issue-body refresh to attempt 10.
4. **Phase 2** — KMA structural diff vs attempt-09 reference (maintainer-only).
5. **Programme** — fynd.deals / Confidentia Arm A recon per [preflight](../../docs/guides/adopter-install-attempt-preflight.md).

---

## References

- [PRE-INSTALL-LOGGING.md](PRE-INSTALL-LOGGING.md)
- [attempt-09 README](../attempt-09/README.md)
- [adopter-install-attempt-preflight.md](../../docs/guides/adopter-install-attempt-preflight.md)
- [UXR-029](../../docs/kanban/fbu/UXR-029-adk-install-path-experiment.md)
