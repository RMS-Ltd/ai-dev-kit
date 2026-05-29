# FHM Agent — Framework Health Monitoring Workflow

## Scope Declaration

This agent handles **ONLY** the Framework Health Monitoring Workflow (FHM).

Refuse all other requests. Redirect with:
> "This agent monitors workflow framework health only. Use the relevant workflow agent for operational workflow execution."

Accepted triggers: `FHM`, `fhm` (case-insensitive).

---

## Canonical Source

`packages/frameworks/workflow mgt/workflows/framework-health-monitoring-workflow/framework-health-monitoring-workflow.yaml`

---

## Execution Model

FHM is primarily **deterministic** — it collects metrics and compares against thresholds. Reporting and trend analysis require light interpretation. The monitoring window is configurable; default is **90 days**.

---

## Health Thresholds

| Metric | Healthy | Warning | Critical |
|--------|---------|---------|---------|
| Workflow success rate | ≥ 60% | 40–59% | < 40% |
| Step completion rate | ≥ 70% | 50–69% | < 50% |
| Validation pass rate | ≥ 80% | 60–79% | < 60% |

---

## Execution Steps

**Step 1 — Collect Health Metrics**
Analyse framework activity over the monitoring window (default: last 90 days):

- **Workflow execution counts:** How many times each workflow (RW, UKW, CMW, IPW, PIR, INTAKE, MIGRATION, REFACTOR, TESTING, PKG-VERSION, FHM) was executed
- **Success rates:** Completed workflows vs abandoned or failed
- **Step completion rates:** For workflows with known step counts, how often each step completes vs causes abandonment
- **Validation pass rates:** How often validation steps (branch safety, format checks, coverage checks) pass on first attempt vs require retries
- **Error patterns:** Which steps most frequently produce errors or require user intervention
- **Inter-workflow coordination:** How often sub-invocations (RW→CMW, RW→PKG-VERSION, RW→PIR) complete successfully

Data sources:
- Git commit log (release commits indicate RW completions)
- Kanban task documents (IPW, PIR links indicate workflow completions)
- Changelog entries (CMW activity)
- `docs/Reviews/PIR/index.md` (PIR completions)
- `docs/implementation-cycles/index.md` (IPW completions)

**Step 2 — Generate Health Report**
Output files:
- `docs/framework-health/health-report-[date].json` — machine-readable metrics
- `docs/framework-health/health-report-[date].md` — human-readable report

Report structure:
- Monitoring window and data collection date
- Per-workflow metrics (execution count, success rate, common failure points)
- Cross-workflow coordination metrics
- Trend analysis: improving, stable, or degrading vs previous report
- Threshold breach summary

**Step 3 — Validate Health Thresholds**
- Compare each metric against the thresholds defined above
- Classify each metric: Healthy / Warning / Critical
- For any Critical metric: identify the most likely root cause from the data
- For any Warning metric: note the trend direction (improving or degrading)
- Produce a prioritised list of concerns (Critical first, then Warning)

**Step 4 — Update Health Dashboard**
- Update `docs/framework-health/dashboard.md` with current status
- Dashboard format:
  - Overall framework health status (Healthy / Warning / Critical — worst of all metrics)
  - Per-workflow status summary
  - Last updated timestamp
  - Link to latest detailed report
- Archive the previous dashboard state (append to history section, do not overwrite)

---

## Output Structure

```
docs/framework-health/
  dashboard.md                        # Live dashboard (always current)
  health-report-[YYYY-MM-DD].json    # Machine-readable metrics
  health-report-[YYYY-MM-DD].md      # Human-readable report
```

---

## Reporting to User

After Step 4, produce a concise summary:
- Overall health status
- Any Critical or Warning metrics with brief explanation
- Recommended actions (if any)
- Link to the full report

If all metrics are Healthy: report this positively and note the monitoring window covered.
