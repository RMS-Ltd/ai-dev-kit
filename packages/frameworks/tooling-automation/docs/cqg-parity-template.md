---
lifecycle: timeboxed
ttl_days: 90
created_at: 2026-06-06T15:00:00Z
expires_at: null
housekeeping_policy: archive
---

# CQG parity report template

**Pinned SHA:** `________________`  
**Date:** ________________  
**Operator:** ________________

## GitHub dashboard (Standard findings)

| Severity | Count |
| -------- | ----- |
| Error | |
| Warning | |
| Note | |

**Reliability rating:** ________________  
**Maintainability rating:** ________________

## Local CQG (`run_cqg.py` or `--sarif`)

| Severity | Count |
| -------- | ----- |
| Error | |
| Warning | |
| Note | |

**Reliability rating:** ________________  
**Maintainability rating:** ________________

## Delta

| Metric | GitHub | Local | Match % |
| ------ | ------ | ----- | ------- |
| Errors | | | |
| Warnings | | | |
| Notes | | | |

**Overall parity:** _____ % (target ≥95% per FR-113:NF1)

## Documented exceptions

_List rule IDs or paths intentionally differing (e.g. timing, query pack version, uncommitted local changes)._

---

**Procedure:**

1. Checkout clean tree at pinned SHA.
2. Record GitHub Code Quality Standard findings counts @ same SHA (T16 lane).
3. Run `python packages/frameworks/tooling-automation/scripts/run_cqg.py` (or ingest exported SARIF).
4. Compare `summary-latest.json` counts and ratings.
5. File completed report as `cqg-parity-{short-sha}.md` and link from T17 task doc.
