---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Health Monitoring Procedures

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 3 - Framework Health Monitoring  
**Task:** E6:S03:T02 - Implement health monitoring tools  
**Related:** Framework Health Metrics, Framework Update Procedures

---

## Executive Summary

This document defines the **procedures for monitoring framework health** using the framework health monitoring tools. It covers automated collection, manual collection, reporting, and integration with workflows.

**Key Principles:**
- **Automated Collection:** Primary metrics collected automatically via scripts
- **Manual Collection:** Some metrics require manual tracking or external data
- **Regular Monitoring:** Scheduled collection at different frequencies
- **Actionable Reports:** Reports provide actionable insights for improvement
- **Workflow Integration:** Monitoring integrated with RW, UKW, and update procedures

---

## Monitoring Tools

### Primary Tool: `framework-health-monitor.py`

**Location:** `scripts/frameworks/framework-health-monitor.py`

**Capabilities:**
- Collects health metrics for all frameworks or a specific framework
- Generates JSON metrics output
- Generates human-readable reports
- Calculates dimension scores and overall health score
- Provides health status (Excellent, Good, Fair, Poor, Critical)

**Usage:**
```bash
# Monitor all frameworks
python3 scripts/frameworks/framework-health-monitor.py

# Monitor specific framework
python3 scripts/frameworks/framework-health-monitor.py --framework kanban

# Output JSON to file
python3 scripts/frameworks/framework-health-monitor.py --output health.json

# Generate report file
python3 scripts/frameworks/framework-health-monitor.py --report health.txt

# Both JSON and report
python3 scripts/frameworks/framework-health-monitor.py --output health.json --report health.txt

# Custom frameworks directory
python3 scripts/frameworks/framework-health-monitor.py --path custom/frameworks
```

### Collector Modules

**Location:** `scripts/frameworks/collectors/`

**Modules:**
- `usage_adoption.py` - Usage and adoption metrics
- `maintenance_activity.py` - Maintenance activity metrics
- `documentation_quality.py` - Documentation quality metrics
- `dependency_health.py` - Dependency health metrics
- `compatibility_status.py` - Compatibility status metrics
- `stability_reliability.py` - Stability and reliability metrics

**Utilities:**
- `utils.py` - Common utility functions (scoring, git operations, metadata loading)

---

## Collection Procedures

### Automated Collection

**Frequency:**
- **Daily:** Critical metrics (dependency security, breaking changes)
- **Weekly:** Maintenance activity, documentation currency
- **Monthly:** Usage & adoption, compatibility status
- **Quarterly:** Comprehensive health assessment

**Daily Collection:**
```bash
# Quick check for critical issues
python3 scripts/frameworks/framework-health-monitor.py \
  --output daily-health.json \
  --report daily-health.txt
```

**Weekly Collection:**
```bash
# Full maintenance and documentation metrics
python3 scripts/frameworks/framework-health-monitor.py \
  --output weekly-health.json \
  --report weekly-health.txt
```

**Monthly Collection:**
```bash
# Comprehensive health assessment
python3 scripts/frameworks/framework-health-monitor.py \
  --output monthly-health.json \
  --report monthly-health.txt \
  --days-back 90
```

**Quarterly Collection:**
```bash
# Full health assessment with extended lookback
python3 scripts/frameworks/framework-health-monitor.py \
  --output quarterly-health.json \
  --report quarterly-health.txt \
  --days-back 90
```

### Manual Collection

**Metrics Requiring Manual Collection:**
- Installation count (requires project survey or tracking)
- Active usage (requires project activity analysis)
- Documentation review status (requires review workflow)
- Integration health (requires integration testing)
- Dependency currency (requires dependency scanning tools)
- Security vulnerabilities (requires security scanning tools)

**Manual Collection Process:**
1. Review automated metrics report
2. Identify metrics requiring manual input
3. Gather manual metrics from:
   - Project tracking systems
   - Issue trackers
   - Review workflows
   - Integration test results
   - Dependency scanning tools
4. Update health metrics JSON with manual values
5. Regenerate report with complete metrics

---

## Reporting Procedures

### Report Generation

**JSON Output:**
- Complete metrics data
- Timestamp and framework metadata
- Dimension scores and overall health score
- Health status

**Human-Readable Report:**
- Overall health summary
- Dimension breakdown
- Key metrics highlights
- Framework comparison (if monitoring all frameworks)

### Report Review

**Review Process:**
1. Review overall health score and status
2. Identify dimensions below target thresholds
3. Analyze metric values for root causes
4. Prioritize improvements based on impact
5. Create tasks for health improvements

**Action Thresholds:**
- **Critical (&lt;40%):** Immediate action required
- **Poor (40-54%):** Significant improvements needed
- **Fair (55-69%):** Improvements recommended
- **Good (70-84%):** Minor improvements possible
- **Excellent (≥85%):** Optimal health

---

## Workflow Integration

### Release Workflow (RW)

**RW Step 9: Run Validators**
- Run framework health monitoring for affected frameworks
- Include health metrics in release validation
- Fail release if health score < 60% (critical threshold)
- Document health status in release notes

**Integration:**
```bash
# In RW Step 9
python3 scripts/frameworks/framework-health-monitor.py \
  --framework <framework-name> \
  --output release-health.json
```

### Update Kanban Workflow (UKW)

**UKW Step 6: Update Kanban Board**
- Include framework health status in board metadata
- Track health trends over time
- Flag health issues for prioritization

**Integration:**
- Health metrics included in UKW summary
- Health trends tracked in Kanban board metadata

### Framework Update Procedures

**Pre-Update Health Check:**
- Check framework health before updates
- Verify health score meets minimum threshold (60%)
- Address health issues before updating
- Document health status in update plan

**Post-Update Health Check:**
- Verify health score maintained or improved
- Check for regressions in health metrics
- Update health dashboard with new metrics

---

## Monitoring Workflow

**Workflow Definition:** `packages/frameworks/workflow mgt/workflows/framework-health-monitoring-workflow.yaml`

**Steps:**
1. **Collect Health Metrics** - Run monitoring script
2. **Generate Health Report** - Create JSON and text reports
3. **Validate Health Thresholds** - Check against minimum thresholds
4. **Update Health Dashboard** - Update dashboard with latest metrics

**Execution:**
- **Automated:** Via cron or CI/CD pipeline
- **Manual:** Via workflow trigger or direct script execution

---

## Health Improvement Workflow

### 1. Identify Issues

**From Health Report:**
- Review overall health score
- Identify dimensions below targets
- Analyze specific metrics
- Review historical trends

### 2. Prioritize Improvements

**Priority Levels:**
- **Critical:** Health score < 40%, blocking issues
- **High:** Health score 40-59%, significant issues
- **Medium:** Health score 60-74%, moderate issues
- **Low:** Health score ≥ 75%, minor improvements

### 3. Create Tasks

**Kanban Integration:**
- Create Feature Requests (FR) for improvements
- Create Bug Reports (BR) for health issues
- Assign tasks based on priority
- Track improvements in Kanban

### 4. Implement Improvements

**Improvement Actions:**
- Fix broken links
- Update documentation
- Resolve dependency issues
- Improve compatibility
- Enhance stability

### 5. Verify Improvements

**Validation:**
- Re-run health monitoring
- Verify health score improvement
- Confirm issues resolved
- Update Kanban tasks

---

## Troubleshooting

### Common Issues

**Script Execution Errors:**
- Verify Python 3.8+ installed
- Check framework paths are correct
- Verify Git repository is accessible
- Check file permissions

**Missing Metrics:**
- Some metrics require manual collection
- Check if external tools are needed
- Verify data sources are accessible

**Inaccurate Scores:**
- Review metric collection logic
- Verify scoring calculations
- Check for missing data
- Validate framework metadata

### Getting Help

**Documentation:**
- Framework Health Metrics: `docs/architecture/standards-and-adrs/framework-health-metrics.md`
- Framework Update Procedures: `docs/architecture/standards-and-adrs/framework-update-procedures.md`

**Support:**
- Review script help: `python3 scripts/frameworks/framework-health-monitor.py --help`
- Check script logs for errors
- Review collector module implementations

---

## References

- **Framework Health Metrics:** `docs/architecture/standards-and-adrs/framework-health-metrics.md`
- **Framework Update Procedures:** `docs/architecture/standards-and-adrs/framework-update-procedures.md`
- **Framework Compatibility Tracking:** `docs/architecture/standards-and-adrs/framework-compatibility-tracking.md`
- **Epic 6:** `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- **Story 3:** `docs/project-management/kanban/epics/Epic-6/Story-003-framework-health-monitoring.md`

---

## Decision Record

**Decision:** Implement automated framework health monitoring with script-based collection and reporting.

**Rationale:**
- Enables proactive health monitoring
- Provides actionable insights for improvement
- Integrates with existing workflows
- Supports data-driven decision making

**Alternatives Considered:**
- Manual-only monitoring (not scalable)
- External monitoring tools (adds dependencies)
- Fully automated without manual input (some metrics require manual tracking)

**Consequences:**
- Requires script maintenance
- Some metrics require manual collection
- Provides foundation for dashboard (E6:S03:T03)

