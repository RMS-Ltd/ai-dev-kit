---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-106: RW Install `--non-interactive` EOFError on CHANGELOG Scaffold Prompt

**Bug ID:** BR-106  
**Priority:** HIGH  
**Severity:** HIGH (blocks unattended / CI install paths)  
**Status:** IMPLEMENTED (pending verification)  
**Source finding:** **F19** (Starborn Legacy install attempt 05; extends attempt 04 `version_file` prompt)  
**Related:** [BR-088](BR-088-rw-install-mode-c-missing-version-file-scaffold.md) · [FR-108](FR-108-install-setup-error-code-registry-and-emission.md) · [E06:S09:T19](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T19-rw-install-version-file-scaffold-br088.md)  
**Implementing Task:** [E06:S09:T29](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T29-rw-install-non-interactive-changelog-prompt-br106.md)  
**SBL evidence:** attempt 05 `…/attempt-05/feedback-package/` · attempt 06 replay `…/attempt-06/transcripts/20260610T194358Z-phase3a-rw-bootstrap.txt` (no EOF)

---

## Summary

`install_release_workflow.py` with `--non-interactive` (or orchestrator-forwarded non-interactive) still prompts for **CHANGELOG** creation/scaffold and raises **EOFError** when stdin is unavailable. Attempt 05 required pre-creating `CHANGELOG.md` and passing `--config` as workaround.

---

## Observed

- Phase 3a RW bootstrap on SBL: partial success with `ADK-I03.E90` / sign-off warnings; adopter used **pre-created** `version_file`, `CHANGELOG.md`, and `--config rw-config.yaml` to proceed.
- Feedback payload: F19 **still present** on `main` @ `0d278366` for CHANGELOG prompt (in addition to historical `version_file` prompt).

---

## Expected

When `--non-interactive` is set (or `ADK_NON_INTERACTIVE=1` if that is the contract):

- Skip interactive `prompt_yes_no` / stdin reads for CHANGELOG scaffold (and any remaining RW install prompts).
- Apply deterministic defaults: create minimal `CHANGELOG.md` stub or honor pre-existing file without prompting.
- Emit structured `ADK-I03.*` diagnostic if scaffold cannot proceed without operator input.

---

## Acceptance criteria

- [x] `install_release_workflow.py --mode a|c --non-interactive` on empty project root completes without EOF on CHANGELOG path — **v0.6.9.29+2**
- [x] Regression test covers CHANGELOG + `version_file` non-interactive paths — `test_install_release_workflow_non_interactive_scaffold.py`
- [x] INSTALL documents non-interactive prerequisites (if any remain) — auto-scaffold note added
