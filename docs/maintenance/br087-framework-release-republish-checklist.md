---
lifecycle: evergreen
created_at: 2026-06-05T14:00:00Z
housekeeping_policy: keep
---

# BR-087 — Framework release republish checklist (E06:S09:T18)

After maintainer rename to slug directories, republish GitHub release assets so download installs receive `\{slug\}/` archive roots.

## Build (local)

```bash
cd packages/frameworks
python3 build_packages.py
```

Output: `packages/dist/packages/*.tar.gz`

## Verify archive root (required)

```bash
tar -tzf packages/dist/packages/workflow-mgt-*.tar.gz | head -5
# Expect: workflow-mgt/README.md (not workflow mgt/...)
```

Repeat for `numbering-versioning-*.tar.gz` if published.

## Upload (maintainer)

1. Open GitHub Releases for `RMS-Ltd/ai-dev-kit`.
2. Attach rebuilt `.tar.gz` + `.sha256` for affected frameworks.
3. Note in release body: BR-087 slug archive roots (E06:S09:T18).

## Adopter verification

- Submodule checkout of `main` → `ls packages/frameworks/` shows slug names only.
- Expenses Tracker replay documented in [BR-087](../kanban/fr-br/BR-087-framework-install-directory-slug-mismatch.md).
