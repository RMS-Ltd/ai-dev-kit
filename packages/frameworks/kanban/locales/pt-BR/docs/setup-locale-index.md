---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Setup locale index (en-GB)

**Locale:** UK English (`en-GB` / `UK`)

## Flow

1. **Step 0** — Select language in [post-template setup guide](../../../../../../docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md#step-0-select-language-variant-uk--us-english) or via `ai-dev-kit init` / `install_release_workflow.py`.
2. **Persist** — `ai-dev-kit-config.yaml` at project root (`localisation.language: en-GB`).
3. **Content** — Phase 1 templates in [`../templates/`](../templates/) (manifest: [`../../manifest.yaml`](../../manifest.yaml)).
4. **T06** — Installers will resolve manifest keys from config (not yet wired).

## Phase 1 seeded templates

FR, BR, UXR, FB, TASK, STORY, EPIC, PLAN_DOC — UK spelling in instructional prose (colour, organise, realise).
