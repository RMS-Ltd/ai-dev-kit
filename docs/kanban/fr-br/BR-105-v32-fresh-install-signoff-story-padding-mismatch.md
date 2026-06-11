---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-105: v3.2 Fresh Install — BR-086 Sign-Off Expects `{story:03d}` but Installer Emits `{story:02d}`

**Bug ID:** BR-105  
**Priority:** MEDIUM  
**Severity:** MEDIUM (install sign-off false negative on otherwise valid v3.2 fresh install)  
**Status:** RESOLVED  
**Source finding:** **F18** (Starborn Legacy install attempt 05)  
**Related:** [BR-086](BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md) (RESOLVED @ v0.6.9.16+3 — book replay; v3.2 SBL replay fixed @ **v0.6.9.28+2**) · [UXR-014](UXR-014-two-digit-est-identifier-default-formatting.md) · [E06:S09:T27](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T27-kanban-v32-package-rewrite-installer-f9-f17.md)  
**Implementing Task:** [E06:S09:T28](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T28-v32-fresh-install-signoff-story-padding-br105.md) (**COMPLETE** @ v0.6.9.28+2)  
**SBL evidence:** attempt 05 `…/attempt-05/feedback-package/` · attempt 06 replay `…/attempt-06/transcripts/20260610T194439Z-phase4-signoff.txt` · final `…/20260611T094319Z-final-signoff.txt` (ALL READY)

---

## Summary

After Kanban **v3.2** fresh install on Starborn Legacy (attempt 05), `install_github_issue_signoff.py` marks **BR-086 NOT READY** because the contract requires `story-{story:03d}` and `t{task` substrings, while RW mode C + v3.2 patterns persist `story-{story:02d}-*.md` and `T{task:02d}`.

---

## Observed (attempt 05)

```
[NOT READY] BR-086 #17 — RW install lowercase fresh kanban patterns and sign-off
         ✗ rw_config_patterns: story_doc_pattern does not contain 'story-{story:03d}'
           (got 'epics/epic-{epic:02d}/story-{story:02d}-*.md');
           task_doc_pattern does not contain 't{task'
           (got '…/T{task:02d}-*.md')
```

Sign-off otherwise: **7 READY, 1 SKIP, 1 NOT READY**.

---

## Expected

Either:

1. **Contract alignment:** `github-issue-install-signoff-contract.yaml` BR-086 accepts v3.2 / UXR-014 `{story:02d}` / `T{task:02d}` patterns when kanban fresh install uses lowercase padded epic dirs, **or**
2. **Installer alignment:** RW mode C pre-fills and persists `{story:03d}` / `t{task:02d}` to match BR-086 when that remains canonical for sign-off.

Pick one authoritative rule; document in INSTALL + sign-off contract.

---

## Acceptance criteria

- [x] Fresh v3.2 kanban install + RW mode C on SBL-style dual-tree profile → BR-086 **READY** (contract alignment @ v0.6.9.28+2; automated tests).
- [x] No regression on book ExpensesTracker replay that closed #17.
- [x] Triage matrix F18 disposition updated when fixed.
