# Starborn Legacy — ADK install attempt 11 (maintainer index)

**Session:** `20260624-attempt-11`  
**ADK pin:** `v0.4.1171`  
**Arm:** **B** — greenfield shell + **guided KMA** (TSP-anchored)  
**GitHub:** [ai-dev-kit #85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)  
**FR-079 status:** Adopter sign-off **final** @ `2026-06-24T20:00:00Z` — maintainer intake **accepted** (2026-06-24)

**SBL evidence:** `dev` @ `37a607a3` · install+bootstrap @ `eb5f3f52` · `main` merged @ `eb5f3f52`

---

## Outcome

| Result | Detail |
|--------|--------|
| Guided KMA (`synthesize_from_tsp.py`) | **377/377** tasks · **93.99%** structural score |
| Install RC strict | **PASS** (post adopter recovery) |
| Orchestrator exit | **0** on pin `v0.4.1224` replay — [BR-112 verified](VERIFICATION-BR112.md) @ v0.6.9.40+2 (was **1** on pin `v0.4.1171`) |
| Sign-off contract | **7 READY / 0 NOT READY / 1 SKIP** |
| Blind → guided delta | ~62% est. → **93.99%**; **0** ad-hoc KMA scripts |
| Bootstrap **E02:S02** | **COMPLETE** (T02–T07) |
| FR-136 adopter replay | **VALIDATED** — guided mode + TSP @ pin `v0.4.1171` |

---

## vs attempt 10 ([#57](https://github.com/RMS-Ltd/ai-dev-kit/issues/57))

| Metric | 10 | 11 |
|--------|----|----|
| KMA mode | Blind | **Guided (TSP)** |
| Structural score | ~62% est. | **93.99%** |
| Operator manual tweaks | 4 | Encoded in METHODS |
| Install RC strict | PASS (workarounds) | PASS (recovery) |

---

## Canonical feedback package (FR-079 mirror)

| Artifact | Path |
| -------- | ---- |
| Cover | [feedback-package/SUBMISSION.md](feedback-package/SUBMISSION.md) |
| Payload | [feedback-package/feedback-payload.json](feedback-package/feedback-payload.json) |
| Install RC | [feedback-package/install-rc-report-final.json](feedback-package/install-rc-report-final.json) |
| Sign-off | [feedback-package/signoff-report.json](feedback-package/signoff-report.json) |
| Guided KMA + TSP | [feedback-package/FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md](feedback-package/FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md) |
| SemVer BUILD leak | [feedback-package/FB-ADK-dual-semver-build-leaks-into-public-semver-surface.md](feedback-package/FB-ADK-dual-semver-build-leaks-into-public-semver-surface.md) |
| Docs profile | [feedback-package/FB-ADK-adopter-documentation-profile-obsidian-default.md](feedback-package/FB-ADK-adopter-documentation-profile-obsidian-default.md) |
| Orchestrator gaps | [feedback-package/FB-ADK-greenfield-orchestrator-install-rc-gaps.md](feedback-package/FB-ADK-greenfield-orchestrator-install-rc-gaps.md) |
| BR-112 verification | [VERIFICATION-BR112.md](VERIFICATION-BR112.md) · [install-rc-report-br112.txt](feedback-package/install-rc-report-br112.txt) · [orchestrator transcript](feedback-package/20260624T200937Z-orchestrator-arm-b.txt) |
| Execution checklist | [feedback-package/EXECUTION-CHECKLIST.md](feedback-package/EXECUTION-CHECKLIST.md) |
| Thin pointer | [docs/adk-feedback/attempt-11/README.md](../../docs/adk-feedback/attempt-11/README.md) |

---

## Maintainer intake (2026-06-24)

| FB item | Filed | Task |
| ------- | ----- | ---- |
| Guided KMA + TSP | [FR-136](../../docs/kanban/fbu/FR-136-guided-kma-target-structure-pack.md) (pre-shipped) | [E06:S09:T39](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T39-guided-kma-target-structure-pack-fr136.md) |
| Install paths PRIMARY | [UXR-029](../../docs/kanban/fbu/UXR-029-adk-install-path-experiment.md) (carry-forward) | [E06:S09:T36](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) |
| SemVer BUILD leak | [BR-111](../../docs/kanban/fbu/BR-111-semver-public-surface-build-metadata-leak.md) | [E03:S02:T16](../../docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T16-semver-public-surface-build-leak-br111.md) |
| Docs profile default | [FR-141](../../docs/kanban/fbu/FR-141-adopter-documentation-profile-greenfield-default.md) | [E05:S08:T08](../../docs/kanban/epics/epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md) |
| Orchestrator / Install RC | [BR-112](../../docs/kanban/fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md) **verified** | [E06:S09:T40](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T40-greenfield-orchestrator-install-rc-gaps-br112.md) **COMPLETE** @ v0.6.9.40+2 |

---

## References

- [attempt-10 README](../attempt-10/README.md) — blind KMA baseline
- [kanban-reference/](../kanban-reference/) — TSP, METHODS, rubric
- [T26 programme task](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)
