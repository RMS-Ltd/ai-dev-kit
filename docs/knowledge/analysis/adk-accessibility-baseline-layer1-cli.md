---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADK Accessibility Baseline — Layer 1 (CLI / Terminal)

**Task:** E21:S08:T01  
**Version:** v0.21.8.1+1  
**Date:** 2026-06-07  
**Planning:** [IPP-E21S08T01](../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md)  
**FR:** [FR-115](../../project-management/kanban/fr-br/FR-115-accessibility-standards-compatibility.md)

---

## 1. Executive summary

Layer 0 audit of the **`ai-dev-kit` CLI** and shared terminal output patterns. **FR-108 install errors are largely accessible** (text-first `ERROR [ADK-…]` banners). **Primary gaps** are emoji-prefixed status helpers (`print_error`, `print_success`, `print_warning`, `print_info`), **no `NO_COLOR` support**, **inconsistent stderr routing** (warnings/info on stdout), and **ad hoc Unicode glyphs** (`✓`/`✗`/`•`) in migrate/remove flows.

**Recommended Layer 1 conformance target:** EN 301 549 Clause 11 (software) functional performance + WCAG 2.2 principles by analogy for terminal output (no colour-only status; plain language; predictable structure).

---

## 2. Layer model (deferred layers — catalogue only)

| Layer | Surface | Task | Audit depth |
| ----- | ------- | ---- | ----------- |
| **0** | Programme foundations | T01, T02 | **This report (CLI)** |
| **1** | CLI / terminal | T03 | Remediation per §4 |
| **2** | Docusaurus public portal | T04 | Catalogue — WCAG 2.2 AA web audit deferred |
| **3** | Markdown / kanban corpora | T05 | Catalogue — authoring conventions deferred |
| **4** | Agent workflow outputs | T06 | Catalogue — RW/UKW/IPW plain-text blocking deferred |
| **5** | Cross-surface CI + adopter guide | T07 | Catalogue — gates deferred until Layers 2–4 |

---

## 3. CLI surface inventory

| Component | Path | Role | a11y notes |
| --------- | ---- | ---- | ---------- |
| Entry point | `cli/main.py` | Argparse router, `--version` | No global `--no-color`; help is text-only ✅ |
| Output helpers | `cli/utils.py` | `print_*`, `handle_error` | **Central gap** — emoji prefixes |
| Init | `cli/commands/init.py` | Setup + locale | Uses `print_*`; `--non-interactive` ✅ |
| Install | `cli/commands/install.py` | Framework install | FR-108 bridge + `print_*` mix |
| Config | `cli/commands/config.py` | Locale config | Interactive + locale switching |
| Logs | `cli/commands/logs.py` | Install history, feedback | JSON errors to stderr; info on stdout |
| Migrate | `cli/commands/migrate.py` | Copy-paste conversion | `✓`/`✗`/`•` glyphs |
| Remove | `cli/commands/remove.py` | Uninstall | `print_*` + bullet `•` |
| Check / list / status / update | `cli/commands/*.py` | Status queries | `print_*` throughout |
| FR-108 emission | `packages/.../adk_install_errors.py` | Install errors | Text-first ✅ |
| Locale prompts | `packages/.../localisation_config.py` | `prompt_language_choice` | Numbered options ✅; no screen-reader live-region |
| Backends | `cli/backends/*.py` | Git/npm errors | Delegates to `print_*` |

**Command count:** 10 top-level commands (`init`, `install`, `update`, `check`, `status`, `list`, `config`, `migrate`, `remove`/`uninstall`, `logs`).

---

## 4. Gap analysis (severity-ranked)

| ID | Gap | Severity | Standard ref | Evidence |
| -- | --- | -------- | ------------ | -------- |
| G1 | Emoji-only status signalling in `print_*` | **Blocker** | WCAG 1.4.1 (Use of Color); EN 301 549 11.8.2 | `cli/utils.py` L42–59: `❌` `✅` `⚠️` `ℹ️` precede message; AT may read glyph name not severity |
| G2 | No `NO_COLOR` / `--no-color` | **Major** | de facto convention; EN 301 549 11.8 | No matches in `cli/`; emoji always emitted |
| G3 | Warnings/info on stdout not stderr | **Major** | Best practice AT routing | `print_warning`/`print_info` → stdout; errors → stderr only |
| G4 | Ad hoc Unicode in migrate/remove | **Major** | WCAG 1.4.1 analogue | `migrate.py` L186–190: `✓`/`✗`; `remove.py` L252: `•` |
| G5 | No structured plain-text severity prefix | **Major** | Plain language / cognitive | Relies on emoji position not `Error:`/`Warning:` labels |
| G6 | Interactive prompts lack explicit default announcement | **Minor** | Cognitive / screen reader | `prompt_language_choice` shows `[default]` in option text ✅ but invalid-choice feedback is minimal |
| G7 | `--debug` traceback dumps unstructured | **Minor** | Cognitive load | `handle_error` optional traceback — acceptable with flag |
| G8 | Install success path mixes FR-108 + emoji | **Minor** | Consistency | Install errors use FR-108; success uses `print_success` emoji |

### Strengths (preserve in Layer 1)

| ID | Strength | Evidence |
| -- | -------- | -------- |
| S1 | FR-108 text-first errors | `format_banner`: `ERROR [{code}] {summary}` |
| S2 | Numbered locale prompt | `prompt_language_choice` `[1]`/`[2]` format |
| S3 | Non-interactive escape hatch | `--non-interactive`, `--locale` on init |
| S4 | Argparse `--help` text | No graphical UI dependency |

---

## 5. Standards mapping (CLI)

| Criterion | Application to CLI | Status |
| --------- | ------------------ | ------ |
| **WCAG 1.4.1** Use of Color | Status must not depend on colour/emoji alone | ❌ G1 |
| **WCAG 3.1.5** Reading Level | Plain-language errors (FR-108 summaries) | ✅ partial |
| **WCAG 4.1.3** Status Messages | Success/error/warning identifiable in text | ❌ G1, G5 |
| **EN 301 549 11.8** Accessibility of ICT with speech output | Text labels for status; predictable order | ❌ G1–G3 |
| **NO_COLOR** convention | Honour env var per [no-color.org](https://no-color.org/) | ❌ G2 |

---

## 6. Layer 1 exit criteria (for T02 ADR / T03)

1. `print_*` emit **redundant text labels** (`Error:`, `Success:`, `Warning:`, `Info:`) before message body.
2. When `NO_COLOR` is set (any value), suppress emoji and ANSI.
3. Optional root `--no-color` flag mirrors `NO_COLOR`.
4. `print_warning` routes to **stderr** (or document intentional stdout with text label).
5. Replace `✓`/`✗`/`•` in migrate/remove with ASCII labels (`OK`, `FAIL`, `-`).
6. FR-108 `format_banner` unchanged (already accessible).
7. `tests/test_cli_accessibility.py` covers G1, G2, G5.
8. Publish `docs/governance/standards/cli-accessibility-conventions.md`.

---

## 7. Layer 2–5 catalogue (no deep audit)

### Layer 2 — Docusaurus (T04)

Public docs at `rms-ltd.github.io/ai-dev-kit/`. Expect theme contrast, keyboard nav, heading order, and MDX component audits. Coordinate with E05:S09 / FR-114. Target WCAG 2.2 AA.

### Layer 3 — Markdown / kanban (T05)

Large `docs/` corpus and `kboard.md` MoSCOW rows use emoji status icons (`📋`, `🔄`). Authoring conventions needed; not blocking CLI Layer 1.

### Layer 4 — Agent workflows (T06)

RW/UKW/IPW use emoji in status templates and step trackers. `.cursorrules` already mandates atomic blocking messages — extend to plain-text-first policy.

### Layer 5 — CI + adopter guide (T07)

Integrate axe/pa11y for web; CLI lint for `print_*` patterns; manual release checklist. CLI subsection can ship with T03.

---

## 8. Recommendations for T02

- Adopt **layered ADR** with Layer 1 ship gate before Layer 2+.
- Set CLI target: **EN 301 549 Clause 11.8** + WCAG analogues (not full WCAG web AA on terminal).
- Defer web WCAG AA to Layer 2.

---

## References

- [IPP-E21S08T01](../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md)
- [FR-108](../../project-management/kanban/fr-br/FR-108-install-setup-error-code-registry-and-emission.md)
- [cli/utils.py](../../../cli/utils.py)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [EN 301 549](https://www.etsi.org/standard/EN-301-549)
