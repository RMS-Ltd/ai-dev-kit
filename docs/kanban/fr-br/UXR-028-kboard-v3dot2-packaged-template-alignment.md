---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T12:30:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: kboard v3.2 packaged template alignment (SBL attempt 06)

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-11  
**Submitted By:** Starborn Legacy adopter (FR-079 attempt 06) · maintainer intake  
**Priority:** HIGH  
**Status:** IMPLEMENTED (v0.4.19.13+1 — AC1–AC2; AC3–AC4 deferred on T13)  
**Code:** UXR-028

**Implementing Task:** [E04:S19:T13](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T13-kboard-v3dot2-packaged-template-uxr028.md)

**Related:** [UXR-010](UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) · [UXR-014](UXR-014-two-digit-est-identifier-default-formatting.md) · [UXR-017](UXR-017-kanban-epic-story-path-lowercase-naming.md) · [UXR-020](UXR-020-fbuboard-necessity-after-task-fbu-wiring.md) · [ADR-018](../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md) · [E06:S09:T26](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) · [FR-127](FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)

**SBL evidence:** `starborn_legacy/logs/ai-dev-kit/install/attempt-06/feedback-package/kboard-template-v3dot2.md` · `kboard-populated-example.md`

---

## Summary

Starborn Legacy attempt 06 produced a **production-validated** `kboard.md` layout after agentic legacy → v3.2 migration. The packaged installer template (`KANBAN_BOARD_TEMPLATE.md` v2.1.0) lags behind: multi-line rows, epic rollup footer, flat Ongoing band, and missing Structure/Completed header links. Fresh installs therefore emit a board shape that adopters immediately replace during migration.

---

## Research objective

**Primary question:** What `kboard.md` template contract should `--mode fresh` and greenfield tarball ship so post-migration adopters (and domain-epic projects) start from the validated v3.2 lean-board layout?

**Secondary questions:**

1. How should **Ongoing (O)** represent canonical framework perpetuals (E02:S16) vs domain perpetuals (E21+)?
2. Should the template retain the legacy `## Epics` rollup section ([ADR-018](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md) lean board)?
3. What row grammar aligns with [UXR-010](UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) IPP segment and live `kboard.md`?

---

## Methodology

| Item | Detail |
|------|--------|
| **Method** | Comparative analysis — SBL attempt 06 artifacts vs packaged template vs live ai-dev-kit `kboard.md` |
| **Artifacts** | SBL `kboard-template-v3dot2.md`, `kboard-populated-example.md`; `packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md` |
| **Validation** | SBL adopter sign-off final @ `20260611T094319Z`; populated board operational with 72 migrated stories |

---

## Key findings

### Finding 1: Row format drift (Severity: High)

| Surface | Row shape |
|---------|-----------|
| Packaged template v2.1.0 | Multi-line bullet + `*Last updated:*` on second line |
| SBL v3.2 template + live ADK board | Single-line pipe: `Task \| Story \| FR \| IPP \| Last modified` |

Operators and UKW scripts expect the **single-line** contract ([UXR-010](UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md)).

### Finding 2: Lean board vs epic rollup (Severity: Medium)

Packaged template still ships `## Epics` hierarchy footer. SBL v3.2 template and [ADR-018](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md) lean board use **MoSCOW bands only**; epic status lives in epic docs + optional `**Note:**` header.

### Finding 3: Ongoing band structure for migrated adopters (Severity: Medium)

SBL split **Ongoing** into:

- **Canonical (E01–E10)** — ADK framework perpetuals (E02:S16:T01–T06)
- **Domain (E21+)** — project-specific perpetual/ongoing work

This matches v3.2 canonical + domain epic model post-migration. Greenfield-only projects use placeholders in Domain subsection.

### Finding 4: Header navigation (Severity: Low)

SBL template links **Structure · Guide · Completed** in blockquote. Packaged template links Guide only. Live ADK also references `intake-structure.md` where FR/BR/UXR inventory exists.

---

## Recommendations

| # | Recommendation | Rationale |
|---|----------------|-----------|
| R1 | Adopt SBL v3.2 template as `KANBAN_BOARD_TEMPLATE.md` v2.2.0 (generalised placeholders) | Validated in production migration |
| R2 | Single-line row grammar with `—No IPP—` default per UXR-010 | UKW/RW emission parity |
| R3 | Remove `## Epics` rollup from packaged template | ADR-018 lean active board |
| R4 | Split Ongoing: Canonical E02:S16 perpetuals + Domain E21+ placeholder | Post-migration adopters |
| R5 | Sync `greenfield-install/` mirror ([FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)) | Tarball parity |
| R6 | Optional: ship `KANBAN_BOARD_POPULATED_EXAMPLE.md` from SBL example (de-identified) | Adopter reference — T13 stretch |

---

## Acceptance criteria (UXR closure)

- [x] **AC1:** `packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md` v2.2.0 matches R1–R4 @ **v0.4.19.13+1**.
- [x] **AC2:** `greenfield-install/` mirror synced @ **v0.4.19.13+1**.
- [ ] **AC3:** Fresh install `--mode fresh` produces board matching template (spot-check or test) — deferred.
- [ ] **AC4:** Kanban framework README references v2.2.0 template contract — deferred.

---

## Out of scope

- Agentic migration agent ([FR-127](FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) / T31) — separate delivery.
- Live ai-dev-kit `docs/kanban/kboard.md` row reformat — not required for template closure.
