---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# FB-ADK-K04 — Actions CI parity defaults leak Docusaurus / monorepo checks to greenfield adopters

**Package:** attempt-12 feedback (`K-04`)  
**Project:** starborn_legacy  
**Severity:** High (push gate runs wrong CI; Docusaurus surface on git-native adopter)  
**Status:** Mitigated in-repo (`rw-config.yaml` override + validator repo-root fix)  
**Related:** [KMA-ATTEMPT-12.md](../KMA-ATTEMPT-12.md) · install **I-02** (`adopter_public_sot: docusaurus`) · FR-112 / FR-141 · RW Step 9.7

---

## Summary

After RW release `v0.1.1.2+5` (`v0.9.609`), operator batch push prep ran:

```bash
python3 tools/workflow_mgt/scripts/validation/validate_actions_ci_parity.py --strict --all
```

The gate executed **ai-dev-kit monorepo** checks — including **`docusaurus`** (`npm run build` in `portal/`), **`portal-publish-scope`**, **`cli-coverage`**, and **`tests`** (pytest against `vendor/ai-dev-kit/pytest.ini`) — even though **starborn_legacy**:

- Declares **`documentation_surfaces.adopter_public.sot: git`** (FR-141; no portal/Docusaurus intent)
- Is a **Flutter** game (`flutter test` / `flutter analyze`), not a Python monorepo with `tests/` + `portal/`
- Has **no** `.github/workflows/` yet

**ADK should not ship Docusaurus references to greenfield adopters** who opt into git-native docs. The parity gate must mirror **consumer** CI, not ai-dev-kit OSS layout.

---

## Observed behaviour

| Symptom | Evidence |
| ------- | -------- |
| `--strict --all` runs check id `docusaurus` | Stacktrace: `FileNotFoundError: .../vendor/ai-dev-kit/portal` |
| `portal-publish-scope` invoked | Missing `tests/test_portal_br068_monorepo_links.py` |
| `tests` uses `vendor/ai-dev-kit/pytest.ini` | `FileNotFoundError: .../vendor/ai-dev-kit/pytest.ini` |
| `cli-coverage` invoked | Missing `scripts/run_cli_pytest_coverage.sh` |
| RW Step 9.7 `--strict` (path-scoped) **passed** | No checks matched diff → SKIP (misleading green vs push gate) |
| Push succeeded despite parity failure | Operator chained commands; push script exit 0 |

**Trigger command (2026-07-01):**

```bash
python3 tools/workflow_mgt/scripts/validation/validate_actions_ci_parity.py --strict --all
python3 tools/workflow_mgt/scripts/version/push_rw_release.py --branch dev --internal-version 0.1.1.2+5
```

---

## Impact

- Operator push cheatsheet (`--strict --all` before batch push) **fails** on every greenfield adopter unless they override config.
- Stacktrace surfaces **Docusaurus** and **portal** — contradicts FR-141 git-native default and SBL install fix (**I-02**).
- False confidence: RW Step 9.7 path-scoped `--strict` can PASS while full push gate would FAIL.
- Adopters may infer they need a `portal/` tree or Docusaurus toolchain to ship releases.

---

## Root cause

1. **`validate_actions_ci_parity.py`** used `Path(__file__).resolve().parents[5]` for `_REPO_ROOT`. With `tools/workflow_mgt` **symlinked** into `vendor/ai-dev-kit/packages/frameworks/workflow-mgt/`, that resolves to the **vendor** tree, not the consumer repo — so **`rw-config.yaml` at project root was not loaded**.
2. **`_DEFAULT_CHECKS`** encodes **ai-dev-kit OSS** CI: pytest suite, CLI coverage, portal link tests, **Docusaurus build**, greenfield-install sync, workflow-mgt pytest — appropriate for the kit monorepo only.
3. **Greenfield install** seeds `documentation_surfaces.adopter_public.sot: git` but does **not** seed **`actions_ci_parity.checks`** for the adopter stack (Flutter, Node-only, etc.).
4. **Install I-02** already failed on `adopter_public_sot: docusaurus` without portal; parity defaults **re-introduce** Docusaurus at RW push time even after switching to `git`.

---

## Adopter mitigation (starborn_legacy)

| Artefact | Role |
| -------- | ---- |
| [`rw-config.yaml`](../../../rw-config.yaml) `actions_ci_parity.checks` | Flutter-only: `dart-test`, `flutter-analyze` — **no** portal/Docusaurus/pytest defaults |
| `validate_actions_ci_parity.py` | Use `find_project_root()` from `rw_config_loader` so consumer `rw-config.yaml` loads when scripts are vendored/symlinked |

**SBL parity block (committed):**

```yaml
actions_ci_parity:
  checks:
    - id: dart-test
      paths: [lib/**, test/**, pubspec.yaml, dart_test.yaml]
      command: ["flutter", "test"]
    - id: flutter-analyze
      paths: [lib/**, analysis_options.yaml, pubspec.yaml]
      command: ["flutter", "analyze", "--no-fatal-infos"]
```

**Verified:** `--strict --all` now runs only `dart-test` and `flutter-analyze` — **no Docusaurus / portal / pytest** in output.

---

## Kit recommendations (ai-dev-kit)

| ID | Recommendation |
| -- | -------------- |
| K-04a | **`_DEFAULT_CHECKS`:** empty or minimal for greenfield; **never** include `docusaurus` / `portal-publish-scope` unless `documentation_surfaces.adopter_public.sot: docusaurus` |
| K-04b | **`validate_actions_ci_parity.py`:** always resolve consumer root via `find_project_root()` (same as `rw_config_loader`); **remove** hard-coded `parents[5]` |
| K-04c | **Greenfield install:** seed `actions_ci_parity.checks` from install profile (`flutter`, `python-app`, `node`, etc.) — mirror stack, not kit monorepo |
| K-04d | **Install template:** default `adopter_public_sot: git` (already I-02 lesson); **forbid** Docusaurus in generated RW/CI paths when `git` |
| K-04e | **RW agent execution / cheatsheet:** document that `--strict --all` requires consumer `actions_ci_parity` block; path-scoped `--strict` is **not** push-gate equivalent |
| K-04f | **FR-141 alignment:** remove Docusaurus from any **default** adopter-facing validator or install artefact; keep Docusaurus **opt-in** only behind explicit `sot: docusaurus` + portal scaffold |

---

## Acceptance criteria (kit)

- [ ] `validate_actions_ci_parity.py` loads consumer `rw-config.yaml` when scripts run from `tools/workflow_mgt` symlink layout
- [ ] `_DEFAULT_CHECKS` does not reference `portal/`, Docusaurus, or ai-dev-kit `tests/` for greenfield adopters
- [ ] Greenfield install emits `actions_ci_parity` block matched to adopter stack
- [ ] Install RC / RW docs state: git-native adopters have **zero** Docusaurus CI surface unless opted in
- [ ] Unit test: consumer repo with only `rw-config.yaml` at root does not run `docusaurus` check

## Acceptance criteria (adopter)

- [x] `actions_ci_parity` override in `rw-config.yaml` (Flutter-only)  
- [x] Validator repo-root fix (`find_project_root`)  
- [x] Feedback filed (this document)  
- [ ] Upstream kit merge of K-04a–f (track via ai-dev-kit intake)

---

## Related feedback

| ID | Topic |
| -- | ----- |
| K-01 | E02 workflow story collapse vs issue #3 TSP |
| K-02 | Board timestamp loss on UKW / pre-synthesise KMA |
| K-03 | Task-touch SemVer `+BUILD` suffix on public vernum |
| K-04 | Actions CI parity defaults leak Docusaurus / monorepo checks |
| I-02 | Install RC failed on `adopter_public_sot: docusaurus` without portal (install phase) |

---

**Tracked mirror:** this file is committed under `docs/kanban/reference/` for git traceability. Operator copy also belongs in `logs/attempt-12/feedback-package/` (gitignored local bundle).
