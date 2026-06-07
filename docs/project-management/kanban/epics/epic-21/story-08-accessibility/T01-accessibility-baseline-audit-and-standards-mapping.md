---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 8, Task 1: CLI accessibility baseline audit (Layer 0)

**Task ID:** E21:S08:T01  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Layer:** 0 (foundations)  
**Last updated:** 2026-06-07 (v0.21.8.1+1 — CLI baseline audit published)  
**Version:** v0.21.8.1+1  
**Code:** E21S08T01

---

## Task ID

**Full Task ID:** `E21:S08:T01`

---

## Scope

**Layer 0 — CLI-focused audit.** Deep baseline for `ai-dev-kit` CLI / terminal output (`cli/`, shared installer patterns). Catalogue Layers 2–5 (web, markdown, agent workflows) at summary level only — no deep audit until Layer 1 ships.

---

## Input

- [FR-115](../../../../fr-br/FR-115-accessibility-standards-compatibility.md)
- [IPP-E21S08T01](../../../../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md)
- [FR-108](../../../../fr-br/FR-108-install-setup-error-code-registry-and-emission.md)
- `cli/utils.py`, `cli/commands/`, `cli/exceptions.py`

---

## Deliverable

- **Report:** [adk-accessibility-baseline-layer1-cli.md](../../../../../knowledge/analysis/adk-accessibility-baseline-layer1-cli.md) ✅
- CLI command inventory + gap list (severity-ranked)
- EN 301 549 / Section 508 software mapping + WCAG analogues for terminal
- One-paragraph catalogue per deferred layer (2–5)
- Layer 1 exit criteria recommendation → T02 ADR

---

## Acceptance Criteria

- [x] CLI surface inventory complete (`print_*`, commands, FR-108 errors, locale prompts) — ✅ v0.21.8.1+1
- [x] Gaps mapped with severity and standard references — ✅ 8 gaps (G1–G8), 4 strengths
- [x] Layers 2–5 catalogued only (not deep-audited) — ✅ §7 catalogue
- [x] Report linked from story, FR-115, IPP — ✅
- [x] T02 boundaries informed by findings — ✅ §6 exit criteria, §8 T02 recommendations

---

## Kanban-init intake

**Released:** `v0.21.8.1+1` — `RW -k E21:S08:T01 --art` (2026-06-07; `--dpz` blocked per BR-097 — BUILD +1 on adopted anchor)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S08:T01 --art --dpz
```

**Target version anchor:** `v0.21.8.1+0` (doc-init intent); actual release `v0.21.8.1+1`.

---

## Planning

- [IPP-E21S08T01](../../../../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md)

---

## References

- [Baseline report](../../../../../knowledge/analysis/adk-accessibility-baseline-layer1-cli.md)
- [Story 08](../story-08-accessibility.md)
- [FR-115](../../../../fr-br/FR-115-accessibility-standards-compatibility.md)
