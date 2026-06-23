---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T29 — RW install non-interactive CHANGELOG prompt (BR-106 / F19)

**Task ID:** E06:S09:T29  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-10  
**Last updated:** 2026-06-10 (v0.6.9.29+2 — BR-106 non-interactive scaffold fix)  
**Version:** v0.6.9.29+2  
**Version Anchor:** v0.6.9.29+2  
**Code:** E06S09T29  

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md)  
**Upstream:** [BR-106](../../../fbu/BR-106-rw-install-non-interactive-changelog-prompt-eof.md) · triage **F19**

---

## Input

- **IPP:** [`IPP-E06S09T29-br106-non-interactive-changelog-scaffold.md`](../../../../implementation-cycles/IPP-E06S09T29-br106-non-interactive-changelog-scaffold.md)
- [BR-106](../../../fbu/BR-106-rw-install-non-interactive-changelog-prompt-eof.md)
- SBL attempt 05 FB: `adk-install-into-sbl/attempt-05/feedback-package/feedback-payload.json`
- RW bootstrap transcript: `…/attempt-05/transcripts/20260610T183451Z-phase3a-rw-bootstrap.txt`
- [BR-088](../../../fbu/BR-088-rw-install-mode-c-missing-version-file-scaffold.md) / [T19](T19-rw-install-version-file-scaffold-br088.md)

---

## Scope

Eliminate stdin prompts in `install_release_workflow.py` when `--non-interactive` is active — specifically CHANGELOG scaffold (extends F19 beyond `version_file`).

---

## Deliverable

Non-interactive RW install path with CHANGELOG scaffold defaults/tests; INSTALL note if prerequisites remain.

---

## Acceptance criteria

- [x] `--non-interactive` RW install modes complete without CHANGELOG EOFError on clean tree.
- [x] Tests cover CHANGELOG + version_file non-interactive paths.
- [x] FR-108 error codes emitted when scaffold cannot proceed unattended (existing `ADK-I03.E12` path unchanged).
