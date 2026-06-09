---
lifecycle: timeboxed
ttl_days: 90
created_at: 2026-06-05T19:00:00Z
expires_at: null
housekeeping_policy: archive
---

# Docusaurus CI dedup verification evidence — E05:S09:T14 Wave 2

**Task:** E05:S09:T14 · **FBU:** BR-093  
**Fix release:** v0.5.9.14+2  
**Verification date:** 2026-06-05  
**Branch context:** `main` @ `53ad629` (post-merge topology)

---

## Summary

| Check | Verdict |
|-------|---------|
| V1 — BR-093 pytest T1–T4 | **PASS** |
| V2 — FR-069 regression | **PASS** |
| V3 — FR-070 deploy contract | **PASS** |
| V4 — No duplicate deploy workflow | **PASS** |
| V5 — Actions fail-fast on `main` | **PASS** |
| V6 — Green deploy smoke | **DEFERRED** (portal MDX; not BR-093 scope) |

**Conclusion:** BR-093 structural acceptance criteria satisfied. FBU may close without green `npm run build`.

---

## V1–V4 — Local pytest

**Command:**

```bash
pytest tests/test_portal_br093_ci_deduplication.py tests/test_portal_fr069_ci.py tests/test_portal_fr070_deployment.py -q
```

**Result:** `20 passed` (2026-06-05)

**Modules:**

- `tests/test_portal_br093_ci_deduplication.py` — T1 single build topology, T2 fail-fast `needs:`, T3 PR gate, T4 artifact handoff, no duplicate deploy workflow
- `tests/test_portal_fr069_ci.py` — FR-069 CI gate regression
- `tests/test_portal_fr070_deployment.py` — FR-070 cross-job deploy contract

---

## V5 — GitHub Actions forensics (`main`)

| Field | Value |
|-------|-------|
| Run ID | `26989204716` |
| Workflow | `Docusaurus site build` (single workflow — no parallel `Docusaurus deploy`) |
| SHA | `53ad6298608dabb4f1b75c70194f18d25184e238` |
| URL | https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/26989204716 |
| `build` job | **failure** (MDX broken markdown links — corpus issue) |
| `deploy` job | **skipped** (`needs: build`) |

**Interpretation:** One `npm ci` + `npm run build` per qualifying `main` push; deploy does not run when build fails. This satisfies BR-093 AC1–AC2 regardless of corpus green state.

---

## V4 — Retired workflow file

```bash
test ! -f .github/workflows/docusaurus-deploy.yml && echo OK
```

**Result:** `docusaurus-deploy.yml` absent (deleted Wave 1).

---

## V6 — Deferred

Green-run smoke (one successful build + deploy on `main`) blocked by portal MDX failures (e.g. `workflow-initiation-cheatsheet.md` → `.claude/commands/rw.md`). Track under BR-090 / residual MDX intake — **not** blocking BR-093 closure.

---

## Sign-off

- [x] V1–V5 PASS — Wave 2 verification complete
- [x] Authorized for `RW E05:S09:T14 --art --doc-policy-zero` FBU closure
