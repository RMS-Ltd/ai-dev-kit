---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Index de localisation de configuration (fr)

**Localisation :** Français (`fr` / `FR`)

## Flux

1. **Étape 0** — Sélectionnez la langue dans le [guide de configuration post-modèle](../../../../../../docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md#step-0-select-language-variant-uk--us-english) ou via `ai-dev-kit init` / `install_release_workflow.py`.
2. **Persistance** — `ai-dev-kit-config.yaml` à la racine du projet (`localisation.language: fr`).
3. **Contenu** — Modèles de la phase 1 dans [`../templates/`](../templates/) (manifeste : [`../../manifest.yaml`](../../manifest.yaml)).
4. **T06** — Les installateurs résoudront les clés du manifeste depuis la configuration (pas encore connecté).

## Modèles semés de la phase 1

FR, BR, UXR, FB, TASK, STORY, EPIC, PLAN_DOC — prose instructive en français technique neutre.
