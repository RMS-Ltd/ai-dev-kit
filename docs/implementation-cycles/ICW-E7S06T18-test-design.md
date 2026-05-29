---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW E7:S06:T18 — Test design (UXR-007)

**Host task:** E7:S06:T18  
**Specification:** [ICW-E7S06T18-specification.md](./ICW-E7S06T18-specification.md)

---

## Test cases (T1–T9)

- **T1 — Epic placeholder enforcement:** Reject epic pattern when `{epic}` token is absent; verify remediation text.
- **T2 — Story placeholder enforcement:** Reject story pattern missing `{epic}` or `{story}`.
- **T3 — Relative path guidance clarity:** Prompt/help text explicitly references `kanban_root` with examples.
- **T4 — Match preview positive path:** Valid pattern shows non-zero match count and first N sample paths.
- **T5 — Match preview zero path:** Zero-match result shows actionable alternatives and no silent acceptance.
- **T6 — Cross-tool root propagation:** `install_kanban_framework.py` validates the same root captured by RW config in chained usage.
- **T7 — Existing rules reconciliation path:** Existing RW trigger in `.cursorrules` produces clear reconciliation guidance and optional diff hook.
- **T8 — Canonical final state banner:** Chained run ending with cancellation reports canonical final status (`CANCELLED`) without conflicting success banner.
- **T9 — Regression compatibility:** Modes without Kanban integration behave unchanged.

## Likely test touchpoints

- [`packages/frameworks/workflow mgt/scripts/install_release_workflow.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/install_release_workflow.py) — interactive config, `validate_required_placeholders`, `preview_pattern_matches`, final status messaging.
- [`packages/frameworks/kanban/scripts/install_kanban_framework.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py) — root propagation and final status output.
- [`packages/frameworks/kanban/scripts/validate_installation.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/validate_installation.py) — validation helpers where referenced.
- Automated tests: [`tests/test_install_release_workflow_patterns.py`](../../tests/test_install_release_workflow_patterns.py) — placeholder detection and preview glob matching.

## Implemented automated coverage (as-delivered)

| Case | Coverage |
|------|-----------|
| T1 / placeholder gaps | `test_validate_required_placeholders_detects_missing_tokens` |
| T4 / preview positive | `test_preview_pattern_matches_finds_files_under_kanban_root` |

Remaining cases (T2–T3, T5–T9) rely primarily on interactive CLI behaviour and manual/UAT verification unless extended pytest modules are added later.
