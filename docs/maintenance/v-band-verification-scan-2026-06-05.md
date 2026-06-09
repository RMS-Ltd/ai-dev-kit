---
lifecycle: timeboxed
ttl_days: 90
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: archive
---

# V-band verification scan — 2026-06-05

**Scope:** Six **Verification (V)** rows on `kboard.md` (task shipped, FBU open).  
**Method:** GitHub Actions API (`gh run list`), local pytest, branch comparison `origin/main` vs `origin/dev`.

---

## Summary

| Task | FBU | Verdict | Next gate |
|------|-----|---------|-----------|
| E07:S07:T03 | BR-091 | **PASS — close** | CI green `dev` + `main`; local 105/105 pytest |
| E05:S09:T13 | BR-090 | **HOLD** | `Docusaurus site build` still **FAIL** on `main` (MDX broken links) |
| E05:S09:T14 | BR-093 | **HOLD** | Dedup workflow on `main`; same MDX failure blocks green run |
| E02:S13:T08 | FR-106 | **CLOSED** | Operator sign-off 2026-06-05 → IMPLEMENTED |
| E06:S09:T11 | BR-082 | **CLOSED** | #14 closed; operator verification 2026-06-05 |
| E06:S09:T19 | BR-088 | **CLOSED** | #18 closed; operator verification 2026-06-05 |

---

## E07:S07:T03 / BR-091 — PASS

**Fix release:** `v0.7.7.3+1` (`dca91d4`)

| Check | Result | Evidence |
|-------|--------|----------|
| Workflow scripts pytest (`dev`) | ✅ success | Run `26990632033` @ `70b7242` (2026-06-05 01:54 UTC) |
| Workflow scripts pytest (`main`) | ✅ success | Run `26989204694` @ `53ad629` (2026-06-05 01:09 UTC) |
| Local `run_workflow_scripts_ci_pytest.sh` | ✅ 105 passed | 2026-06-05 scan |

**Action:** BR-091 → **FIXED**; prune V-band row; ledger `intake-completed.md`.

---

## E05:S09:T13 / BR-090 — HOLD

**Fix release:** `v0.5.9.13+1`

| Check | Result | Notes |
|-------|--------|-------|
| `portal/package.json` `@docusaurus/faster` on `main` | ✅ present | 3.10.1 aligned |
| `Docusaurus site build` on `main` | ❌ failure | Run `26989204716` — **not** `ERR_MODULE_NOT_FOUND`; MDX broken markdown links |

**Blocker (current):** `workflow-initiation-cheatsheet.md` link to `../../.claude/commands/rw.md` unresolved in portal plugin scope.

**Action:** Keep OPEN until **full** Docusaurus build passes on `main`.

---

## E05:S09:T14 / BR-093 — HOLD

**Fix release:** `v0.5.9.14+2`

| Check | Result | Notes |
|-------|--------|-------|
| Single `docusaurus-build.yml` on `main` | ✅ | No diff vs `dev` for workflow file |
| Post-merge Actions verification | ❌ | Cannot confirm dedup savings until build green |

**Action:** Keep OPEN; structural fix shipped; verification blocked by same MDX failures as BR-090.

---

## E02:S13:T08 / FR-106 — HOLD

**Fix release:** `v0.2.13.8+2`

| Check | Result |
|-------|--------|
| Task doc sync report | ✅ surfaces listed |
| `validate-workflow-docs.py` | ✅ exit 0 (per task doc, 2026-06-03) |
| User sign-off | ❌ not recorded |

**Action:** ✅ Closed 2026-06-05 — operator sign-off; FR-106 **IMPLEMENTED**; V-band pruned.

---

## E06:S09:T11 / BR-082 — CLOSED

**Fix release:** `v0.6.9.11+2` · Issue **#14** CLOSED

**Action:** ✅ Closed 2026-06-05 — operator confirmed expenses-tracker install path resolved; V-band pruned.

---

## E06:S09:T19 / BR-088 — CLOSED

**Fix release:** `v0.6.9.19+1` · Issue **#18** CLOSED

**Action:** ✅ Closed 2026-06-05 — operator confirmed greenfield scaffold; V-band pruned.
