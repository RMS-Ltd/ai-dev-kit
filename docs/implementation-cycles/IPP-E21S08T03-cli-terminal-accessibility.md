---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S08:T03 — Planning: CLI terminal accessibility (IPW)

**Host Task:** [T03-cli-and-terminal-output-accessibility.md](../project-management/kanban/epics/epic-21/story-08-accessibility/T03-cli-and-terminal-output-accessibility.md)  
**Status:** Complete — implementation per ADR-025 L1-1–L1-8  
**ADR:** [ADR-025](../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) (EXEMPT — implements existing strategy)

---

## 1. Requirements

RF1–RF9 per ADR-025 Layer 1; see [cli-accessibility-conventions.md](../governance/standards/cli-accessibility-conventions.md).

## 2. Specification

Central change: `cli/utils.py` — `color_enabled()`, `_format_status()`, stderr for warnings, `--no-color` in `cli/main.py`.

## 3. Tests

`tests/test_cli_accessibility.py` — A1–A8 per IPW plan.

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| 1 | T03 TODO → IN PROGRESS |
| 2–8 | Code, tests, docs |
| 10 | RW E21:S08:T03 --art |
| N | T03 → COMPLETE |

## 5. Documentation

- CREATE `cli-accessibility-conventions.md`
- UPDATE `framework-dependency-cli-reference.md`, `cli/README.md`

## 7. Success criteria

- [x] L1-1–L1-8 implemented
- [x] FR-108 banners preserved
- [x] pytest green
