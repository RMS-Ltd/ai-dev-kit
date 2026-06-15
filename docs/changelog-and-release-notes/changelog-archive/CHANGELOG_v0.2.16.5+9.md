# CHANGELOG_v0.2.16.5+9

**Release Date:** 2026-06-15 13:58:54 UTC

## Release Summary

`RW E02:S16:T05 --art` — Wave 7 CI hygiene: unify Docusaurus + Tests on `dev` by fixing `ADK-I01.S03` remediation at registry source (MDX-safe backticks) and regenerating the generator-owned troubleshooting appendix block.

## Internal and SemVer

- Internal version: `0.2.16.5+9`
- SemVer (`task_touch`): `0.4.1170+9`

## Included Changes

### Attempted fix — install error docs sync + MDX (Tests + Docusaurus)

- `install-error-codes.yaml` — `ADK-I01.S03` remediation uses inline code backticks around `--profile <path>`
- `framework-dependency-troubleshooting-guide.md` — regenerated `{/* ADK-ERROR-CODES:* */}` block from `generate_install_error_docs.py`
- `greenfield-install/` mirror sync (FR-110)

### Root cause (identified)

- `+8` hand-edited the generator-owned appendix → `test_troubleshooting_adk_section_matches_generator` failed
- Bare `<path>` in registry output broke Docusaurus MDX on `+7`/`7978c29`

## Verification

- Local: `pytest tests/workflow_mgt/test_install_error_docs_sync.py` — 2 passed
- Local: `cd portal && npm run build` — exit 0
- Post-push: re-check [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) on `dev`

## Kanban

- E02:S16:T05 perpetual CI health lane (FR-112)
