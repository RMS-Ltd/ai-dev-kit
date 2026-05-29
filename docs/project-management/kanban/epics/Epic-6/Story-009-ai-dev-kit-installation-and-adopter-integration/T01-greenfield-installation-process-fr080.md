---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 1: Greenfield installation process (FR-080)

**Task ID:** E6:S09:T01  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-19  
**Code:** E6S09T01

**Version Anchor:** v0.6.9.1+8 (FR-080 **IMPLEMENTED**; closure release)

**Upstream:** [FR-080 - End-to-end greenfield installation process](../../../fr-br/FR-080-greenfield-installation-process.md)  
**Progress:** Wave 5 **traceability**: [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md) requirement boxes + implementation evidence; T01 acceptance criteria satisfied with evidence links; **T03**/FR-082 deferral noted under Dependencies. Waves 1–4 shipped (orchestration, docs, validators, FR-078/079 boundaries); **v0.6.9.1+8** releases Wave 4 narrative + Wave 5 closure docs.  

---

## Task ID

**Full Task ID:** `E6:S09:T01`

---

## Input

- **FR-080** accepted scope and dependencies (install telemetry **FR-078** / **FR-079** where applicable).
- Policy anchor [ADR-003](../../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) and distinction from brownfield track (**FR-081**).
- Existing `INSTALL_IN_YOUR_PROJECT.md` and framework installers (`install_release_workflow.py`, `install_kanban_framework.py`).
- **IPW planning artifact:** [IPW-E6S09T01-greenfield-installation-fr080.md](../../../../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)

---

## Problem statement

Greenfield adopters need a **single, reproducible first-run path** from acquisition through installers and verification. Related install telemetry (FR-078/079) does not replace a defined greenfield experience.

---

## Deliverable

- Implemented **greenfield installation process** per FR-080 (specification + automation/docs + verification).
- Updated **adopter-facing docs** that describe the greenfield happy path distinctly from brownfield (cross-link ADR-003, FR-081).

---

## Scope

1. Produce or extend the **greenfield specification** (ordering: acquire frameworks → run installers → configure → verify).
2. Implement **orchestration** appropriate to repo conventions (scripts, CLI integration, or deterministic checklist—per FR-080).
3. Ensure **workflow + Kanban** (and other chosen surfaces) use **install_release_workflow.py** / **install_kanban_framework.py** (or successors) as required—not copy-only adoption.
4. Add **verification** gates aligned with `rw-config.yaml` and validator layout ([rw-validators-consumer-layout](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/docs/rw-validators-consumer-layout.md)).
5. Coordinate documentation updates with **FR-081** so greenfield and brownfield narratives stay distinct.

---

## Acceptance criteria

- [x] **AC1:** FR-080 functional and non-functional requirements addressed or explicitly deferred with recorded rationale — see [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md) § Implementation evidence and deferrals.
- [x] **AC2:** A documented scratch or template scenario runs end-to-end without undocumented manual steps — [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) (Method 2 + orchestrator + Wave 4 synthetic reference transcript); live runs occur in the adopter workspace.
- [x] **AC3:** Install docs cross-link [ADR-003](../../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) and [FR-081](../../../fr-br/FR-081-brownfield-modular-adopter-integration.md).

---

## Dependencies / coordination

- **FR-082 / E6:S09:T03:** Canonical repo defaults should align greenfield copy-paste examples (optional ordering: fix defaults early). **Wave 5 note:** Installer examples use **descriptive paths** and submodule-style layout; swapping default clone URLs/org remains **T03 / FR-082** (tracked; not a blocker for FR-080 F1–F5 closure on this task).
- **FR-078 / FR-079:** Preserve compatibility with install logging and feedback submission where applicable.

---

## References

- **IPW (planning package):** [IPW-E6S09T01-greenfield-installation-fr080.md](../../../../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)
- [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md)
