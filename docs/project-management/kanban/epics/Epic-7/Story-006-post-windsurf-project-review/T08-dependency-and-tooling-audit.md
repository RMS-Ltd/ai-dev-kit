---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E7:S06:T08 – Dependency and Tooling Audit

**Task ID:** E7:S06:T08  
**Status:** COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-03-25  
**Version:** v0.7.6.8+1  
**Version Anchor:** v0.7.6.8+1  

---

## Scope

Audit pyproject.toml, requirements, tests, CI/CD, and build scripts.

## Input

pyproject.toml, requirements*.txt, test config, CI workflows, build scripts

## Deliverable

Dependency and tooling audit report

## Acceptance Criteria

- [x] pyproject.toml reviewed (none at repo root; see matrix)
- [x] requirements files reviewed
- [x] Tests, CI/CD, build scripts audited

## Dependencies

None

## Blocker

None

---

## Audit (2026-03-25)

### Packaging and dependency matrix

| Source | Role | Notes |
|--------|------|--------|
| **Root `pyproject.toml`** | — | **Absent.** Packaging uses `setup.py` only. |
| **[`setup.py`](../../../../../../setup.py)** | Published `ai-dev-kit` package | `install_requires`: `pyyaml>=6.0` only. `extras_require["dev"]`: pytest, pytest-cov, pytest-mock, black, flake8, mypy. `python_requires>=3.8`. |
| **[`requirements.txt`](../../../../../../requirements.txt)** | Repo / contributor install | `pyyaml`, `markdownlint-cli2`, `click`, `requests`. Dev tools commented out. **Drift:** `click` not used by `cli/` (stdlib `argparse`). `requests` used by workflow scripts under `packages/frameworks/workflow mgt/scripts/` (e.g. `create_github_release.py`), not the published CLI package. |
| **[`tests/requirements.txt`](../../../../../../tests/requirements.txt)** | CI/local tests | `pytest`, `pytest-cov`, `pytest-mock` — aligns with [`pytest.ini`](../../../../../../pytest.ini) and `setup.py` dev extras (versions may differ slightly; acceptable). |
| **Lockfile** | — | No `requirements.lock` / `poetry.lock`; optional hardening for a future FR. |

**CLI runtime:** `cli/` uses `yaml` (PyYAML) and stdlib only — consistent with `setup.py` `install_requires`.

### Test suite status

- **Config:** [`pytest.ini`](../../../../../../pytest.ini) — `testpaths=tests`, `--cov=cli`, markers `unit` / `integration` / etc.
- **Run:** `python3 -m pytest tests/` — **92 collected**, **85 passed**, **7 failed** (after **tests/test_validation.py** was rewritten to match current [`cli/validation.py`](../../../../../../cli/validation.py); prior revision imported non-existent `validate_version` and assumed boolean APIs).
- **Coverage (terminal):** ~35% total on `cli/` (reported by pytest-cov); backends and several commands lightly covered.

**Failure buckets (detail in [BR-058](../../../fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)):**

1. `PackageManagerBackend` tests instantiate an abstract class — use `NpmBackend`/`PipBackend` or mocks.  
2. Integration test `MockBackend()` missing `name`.  
3. `get_project_root` tests: `/private/var` vs `/var` on macOS.  
4. ICW workflow YAML merge test expectation vs actual merged config.

### CI/CD

| Workflow | Triggers | Notes |
|----------|----------|--------|
| [`fr-br-intake.yml.DISABLED`](../../../../../../.github/workflows/fr-br-intake.yml.DISABLED) | *(disabled)* Was issues-only; GitHub fired on push (BR-053). | Reference YAML only; not active. |
| *(removed)* ~~`update-badges.yml`~~ | — | **E5:S01:T69 / FR-064:** workflow **deleted** (BYOB / `shields`); see [T69](../../Epic-5/Story-001-fr-repo/T69-shields-branch-private-repo-fr-064.md). |

### Build / release scripts (spot review)

| Script | Purpose | Notes |
|--------|---------|--------|
| [`build_all_packages.sh` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/build_all_packages.sh) | Build tarballs for all frameworks | `set -e`; invokes `build_package.py`; framework list with versions; paths assume script location under `workflow mgt/scripts`. |
| [`UPLOAD_COMMANDS.sh` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/UPLOAD_COMMANDS.sh) | Upload built packages to GitHub Releases | `cd` four levels to repo root; requires `GITHUB_TOKEN`; expects `packages/frameworks/dist/packages`; hardcoded package filenames/tags — must stay in sync with build versions. |

**Footguns:** Paths containing spaces (`workflow mgt`) require careful quoting (scripts generally use quoted variables). UPLOAD_COMMANDS version list must match `build_all_packages.sh` framework versions.

---

## Findings

1. **No root `pyproject.toml`** — setuptools-only; document for adopters; migration optional FR.  
2. **`requirements.txt` vs `setup.py`** — extra packages (`markdownlint-cli2`, `requests`) are **repo/tooling**, not CLI install_requires; intentional split but undocumented until this audit.  
3. **No automated test workflow**; ~~`update-badges.yml`~~ removed (FR-064); historical **`Tests` workflow_run** note was BR-058.  
4. **Seven pytest failures** — stale tests / platform paths, not blocked on this release.  
5. **`tests/test_validation.py`** — **Change implemented:** updated to match current validation API so collection succeeds and module is regression-tested.

## Recommendations

- Add a `Tests` GitHub Actions workflow (or remove `workflow_run` until then) — tracked in **BR-058**.  
- Repair or quarantine the seven failing tests in a follow-up task.  
- Consider documenting “install for contributors”: `pip install -r requirements.txt -r tests/requirements.txt` and `pip install -e ".[dev]"` in `cli/README.md` or root README (small doc FR).

## Related

- **BR:** [BR-058](../../../fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)
