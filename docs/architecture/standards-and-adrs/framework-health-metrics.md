---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Health Metrics

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 3 - Framework Health Monitoring  
**Task:** E6:S03:T01 - Create framework health metrics  
**Related:** Framework Versioning Strategy, Framework Compatibility Tracking, Framework Update Procedures

---

## Executive Summary

This document defines the **comprehensive health metrics** for AI Dev Kit framework packages. These metrics enable proactive monitoring, maintenance planning, and quality assurance for framework packages, ensuring they remain healthy, maintainable, and valuable to consuming projects.

**Key Principles:**
- **Multi-Dimensional Health:** Health is measured across multiple dimensions (usage, maintenance, documentation, compatibility, stability)
- **Actionable Metrics:** All metrics provide actionable insights for maintenance and improvement
- **Automated Collection:** Metrics are designed for automated collection and monitoring
- **Trend Analysis:** Metrics support historical trend analysis to detect degradation early
- **Framework-Specific:** Metrics account for framework-specific characteristics (documentation-only vs. code-based)

---

## Health Dimensions

Framework health is measured across **six primary dimensions**, each contributing to an overall health score:

1. **Usage & Adoption** (20% weight)
2. **Maintenance Activity** (25% weight)
3. **Documentation Quality** (20% weight)
4. **Dependency Health** (15% weight)
5. **Compatibility Status** (10% weight)
6. **Stability & Reliability** (10% weight)

---

## Dimension 1: Usage & Adoption

**Weight:** 20% of overall health score  
**Purpose:** Measure framework adoption and usage across projects

### Metrics

#### 1.1 Installation Count
- **Metric:** Number of projects using the framework
- **Collection:** Count projects with framework installed (Git submodules, subtrees, CLI tool, package managers)
- **Target:** ≥ 1 project (minimum viable)
- **Excellent:** ≥ 5 projects
- **Calculation:** Direct count from dependency tracking

#### 1.2 Active Usage
- **Metric:** Number of projects actively using the framework (recent commits, updates)
- **Collection:** Track projects with framework-related activity in last 90 days
- **Target:** ≥ 50% of installed projects
- **Excellent:** ≥ 80% of installed projects
- **Calculation:** (Active Projects / Installed Projects) × 100

#### 1.3 Adoption Growth Rate
- **Metric:** Rate of new project adoptions
- **Collection:** Count new installations per quarter
- **Target:** ≥ 0 new adoptions per quarter (maintain current)
- **Excellent:** ≥ 2 new adoptions per quarter
- **Calculation:** New installations in last 90 days

#### 1.4 Framework Dependency Graph
- **Metric:** Number of frameworks depending on this framework
- **Collection:** Count frameworks that list this framework as a dependency
- **Target:** ≥ 0 dependencies (standalone acceptable)
- **Excellent:** ≥ 2 framework dependencies
- **Calculation:** Direct count from dependency declarations

### Health Score Calculation

**Usage & Adoption Score:**
- Installation Count: 30% of dimension score
- Active Usage: 40% of dimension score
- Adoption Growth Rate: 20% of dimension score
- Framework Dependency Graph: 10% of dimension score

**Status Levels:**
- **Excellent (≥80%):** High adoption, active usage, growing
- **Good (60-79%):** Moderate adoption, some active usage
- **Fair (40-59%):** Low adoption, limited active usage
- **Poor (20-39%):** Very low adoption, minimal usage
- **Critical (&lt;20%):** No adoption or usage

---

## Dimension 2: Maintenance Activity

**Weight:** 25% of overall health score  
**Purpose:** Measure ongoing maintenance and development activity

### Metrics

#### 2.1 Update Frequency
- **Metric:** Frequency of framework updates (releases, commits)
- **Collection:** Count updates in last 90 days
- **Target:** ≥ 1 update per quarter (minimum maintenance)
- **Excellent:** ≥ 4 updates per quarter (monthly updates)
- **Calculation:** Updates in last 90 days

#### 2.2 Last Update Recency
- **Metric:** Days since last update
- **Collection:** Calculate days since last commit/release
- **Target:** ≤ 90 days (quarterly updates)
- **Excellent:** ≤ 30 days (monthly updates)
- **Calculation:** Current date - Last update date

#### 2.3 Changelog Activity
- **Metric:** Changelog entries in last 90 days
- **Collection:** Count changelog entries (releases, versions)
- **Target:** ≥ 1 changelog entry per quarter
- **Excellent:** ≥ 4 changelog entries per quarter
- **Calculation:** Changelog entries in last 90 days

#### 2.4 Issue Resolution Rate
- **Metric:** Percentage of issues resolved within SLA
- **Collection:** Track issue resolution time vs. SLA (if applicable)
- **Target:** ≥ 80% resolved within SLA
- **Excellent:** ≥ 95% resolved within SLA
- **Calculation:** (Issues Resolved Within SLA / Total Issues) × 100

#### 2.5 Version Progression
- **Metric:** Version progression rate (PATCH/MINOR/MAJOR bumps)
- **Collection:** Track version bumps in last 90 days
- **Target:** ≥ 1 version bump per quarter
- **Excellent:** ≥ 4 version bumps per quarter
- **Calculation:** Version bumps in last 90 days

### Health Score Calculation

**Maintenance Activity Score:**
- Update Frequency: 25% of dimension score
- Last Update Recency: 25% of dimension score
- Changelog Activity: 20% of dimension score
- Issue Resolution Rate: 15% of dimension score
- Version Progression: 15% of dimension score

**Status Levels:**
- **Excellent (≥80%):** Frequent updates, recent activity, active maintenance
- **Good (60-79%):** Regular updates, recent activity
- **Fair (40-59%):** Occasional updates, some activity
- **Poor (20-39%):** Infrequent updates, limited activity
- **Critical (&lt;20%):** No updates, stale framework

---

## Dimension 3: Documentation Quality

**Weight:** 20% of overall health score  
**Purpose:** Measure documentation completeness, accuracy, and currency

### Metrics

#### 3.1 Documentation Completeness
- **Metric:** Percentage of required documentation present
- **Collection:** Check for required docs (README, CHANGELOG, installation guide, API docs if applicable)
- **Target:** ≥ 80% of required docs present
- **Excellent:** 100% of required docs present
- **Calculation:** (Present Docs / Required Docs) × 100

#### 3.2 Documentation Currency
- **Metric:** Percentage of documentation updated in last 90 days
- **Collection:** Check last update date for each doc
- **Target:** ≥ 50% of docs updated in last 90 days
- **Excellent:** ≥ 80% of docs updated in last 90 days
- **Calculation:** (Updated Docs / Total Docs) × 100

#### 3.3 Documentation Link Health
- **Metric:** Percentage of valid internal/external links
- **Collection:** Validate links in documentation
- **Target:** ≥ 90% of links valid
- **Excellent:** ≥ 95% of links valid
- **Calculation:** (Valid Links / Total Links) × 100

#### 3.4 Documentation Examples Quality
- **Metric:** Presence and quality of usage examples
- **Collection:** Check for examples, code samples, tutorials
- **Target:** ≥ 1 example per major feature
- **Excellent:** ≥ 3 examples per major feature
- **Calculation:** (Examples Present / Features Requiring Examples) × 100

#### 3.5 Documentation Review Status
- **Metric:** Percentage of documentation reviewed and current
- **Collection:** Track documentation review status (if review workflow exists)
- **Target:** ≥ 80% of docs reviewed and current
- **Excellent:** ≥ 95% of docs reviewed and current
- **Calculation:** (Reviewed & Current Docs / Total Docs) × 100

### Health Score Calculation

**Documentation Quality Score:**
- Documentation Completeness: 25% of dimension score
- Documentation Currency: 25% of dimension score
- Documentation Link Health: 20% of dimension score
- Documentation Examples Quality: 15% of dimension score
- Documentation Review Status: 15% of dimension score

**Status Levels:**
- **Excellent (≥80%):** Complete, current, accurate documentation
- **Good (60-79%):** Mostly complete, mostly current documentation
- **Fair (40-59%):** Some gaps, some outdated documentation
- **Poor (20-39%):** Significant gaps, outdated documentation
- **Critical (&lt;20%):** Missing or severely outdated documentation

---

## Dimension 4: Dependency Health

**Weight:** 15% of overall health score  
**Purpose:** Measure health of framework dependencies (if any)

### Metrics

#### 4.1 Dependency Count
- **Metric:** Number of external dependencies
- **Collection:** Count dependencies (libraries, packages, tools)
- **Target:** ≤ 5 dependencies (minimal dependencies)
- **Excellent:** ≤ 2 dependencies (very minimal)
- **Calculation:** Direct count of dependencies

#### 4.2 Dependency Currency
- **Metric:** Percentage of dependencies up to date
- **Collection:** Check dependency versions vs. latest available
- **Target:** ≥ 80% of dependencies up to date
- **Excellent:** ≥ 95% of dependencies up to date
- **Calculation:** (Up-to-Date Dependencies / Total Dependencies) × 100

#### 4.3 Dependency Security
- **Metric:** Number of known security vulnerabilities
- **Collection:** Check dependency security advisories
- **Target:** 0 known vulnerabilities
- **Excellent:** 0 known vulnerabilities
- **Calculation:** Count of known vulnerabilities (inverse score)

#### 4.4 Dependency Compatibility
- **Metric:** Compatibility status of dependencies
- **Collection:** Check for dependency conflicts or compatibility issues
- **Target:** No compatibility issues
- **Excellent:** No compatibility issues
- **Calculation:** Binary (0 = issues, 1 = no issues)

#### 4.5 Dependency Maintenance Status
- **Metric:** Maintenance status of dependencies (active vs. deprecated)
- **Collection:** Check dependency maintenance status
- **Target:** ≥ 80% of dependencies actively maintained
- **Excellent:** 100% of dependencies actively maintained
- **Calculation:** (Actively Maintained Dependencies / Total Dependencies) × 100

### Health Score Calculation

**Dependency Health Score:**
- Dependency Count: 20% of dimension score (inverse: fewer is better)
- Dependency Currency: 25% of dimension score
- Dependency Security: 25% of dimension score
- Dependency Compatibility: 15% of dimension score
- Dependency Maintenance Status: 15% of dimension score

**Status Levels:**
- **Excellent (≥80%):** Minimal, up-to-date, secure dependencies
- **Good (60-79%):** Mostly up-to-date, secure dependencies
- **Fair (40-59%):** Some outdated or insecure dependencies
- **Poor (20-39%):** Many outdated or insecure dependencies
- **Critical (&lt;20%):** Critical dependency issues

---

## Dimension 5: Compatibility Status

**Weight:** 10% of overall health score  
**Purpose:** Measure compatibility with other frameworks and systems

### Metrics

#### 5.1 Framework Compatibility Matrix
- **Metric:** Percentage of declared compatibilities verified
- **Collection:** Check compatibility matrix declarations vs. actual compatibility
- **Target:** ≥ 80% of declared compatibilities verified
- **Excellent:** 100% of declared compatibilities verified
- **Calculation:** (Verified Compatibilities / Declared Compatibilities) × 100

#### 5.2 Version Compatibility Coverage
- **Metric:** Compatibility coverage across framework versions
- **Collection:** Check compatibility across version ranges
- **Target:** ≥ 80% version compatibility coverage
- **Excellent:** ≥ 95% version compatibility coverage
- **Calculation:** (Compatible Versions / Total Versions) × 100

#### 5.3 Integration Health
- **Metric:** Health of integrations with other frameworks
- **Collection:** Check integration status (working, broken, untested)
- **Target:** ≥ 80% of integrations working
- **Excellent:** ≥ 95% of integrations working
- **Calculation:** (Working Integrations / Total Integrations) × 100

#### 5.4 Breaking Changes Frequency
- **Metric:** Frequency of breaking changes (MAJOR version bumps)
- **Collection:** Count MAJOR version bumps in last 90 days
- **Target:** ≤ 1 breaking change per quarter
- **Excellent:** 0 breaking changes per quarter
- **Calculation:** MAJOR version bumps in last 90 days (inverse score)

### Health Score Calculation

**Compatibility Status Score:**
- Framework Compatibility Matrix: 30% of dimension score
- Version Compatibility Coverage: 30% of dimension score
- Integration Health: 25% of dimension score
- Breaking Changes Frequency: 15% of dimension score

**Status Levels:**
- **Excellent (≥80%):** High compatibility, verified integrations, stable
- **Good (60-79%):** Good compatibility, mostly verified
- **Fair (40-59%):** Some compatibility issues
- **Poor (20-39%):** Significant compatibility issues
- **Critical (&lt;20%):** Critical compatibility problems

---

## Dimension 6: Stability & Reliability

**Weight:** 10% of overall health score  
**Purpose:** Measure framework stability and reliability

### Metrics

#### 6.1 Version Stability
- **Metric:** Stability of version releases (PATCH vs. MINOR vs. MAJOR)
- **Collection:** Analyze version bump types in last 90 days
- **Target:** ≥ 80% PATCH/MINOR bumps (stable)
- **Excellent:** ≥ 90% PATCH/MINOR bumps (very stable)
- **Calculation:** (PATCH/MINOR Bumps / Total Bumps) × 100

#### 6.2 Regression Rate
- **Metric:** Rate of regressions or breaking changes
- **Collection:** Track regressions reported in issues/changelog
- **Target:** ≤ 1 regression per quarter
- **Excellent:** 0 regressions per quarter
- **Calculation:** Regressions in last 90 days (inverse score)

#### 6.3 Issue Rate
- **Metric:** Rate of issues reported (bugs, problems)
- **Collection:** Count issues reported in last 90 days
- **Target:** ≤ 2 issues per quarter
- **Excellent:** ≤ 1 issue per quarter
- **Calculation:** Issues in last 90 days (inverse score)

#### 6.4 Test Coverage (if applicable)
- **Metric:** Test coverage percentage (if framework has tests)
- **Collection:** Calculate test coverage (if applicable)
- **Target:** ≥ 70% test coverage (if applicable)
- **Excellent:** ≥ 90% test coverage (if applicable)
- **Calculation:** (Covered Code / Total Code) × 100 (if applicable)

#### 6.5 Backward Compatibility Adherence
- **Metric:** Adherence to backward compatibility policy
- **Collection:** Check version bumps against compatibility policy
- **Target:** 100% adherence (no violations)
- **Excellent:** 100% adherence (no violations)
- **Calculation:** Binary (0 = violations, 1 = no violations)

### Health Score Calculation

**Stability & Reliability Score:**
- Version Stability: 25% of dimension score
- Regression Rate: 25% of dimension score
- Issue Rate: 20% of dimension score
- Test Coverage: 15% of dimension score (if applicable, otherwise redistributed)
- Backward Compatibility Adherence: 15% of dimension score

**Status Levels:**
- **Excellent (≥80%):** Very stable, reliable, few issues
- **Good (60-79%):** Stable, mostly reliable
- **Fair (40-59%):** Some stability issues
- **Poor (20-39%):** Significant stability problems
- **Critical (&lt;20%):** Critical stability issues

---

## Overall Health Score

**Calculation:** Weighted average of all six dimensions

**Formula:**
```
Overall Health Score = 
  (Usage & Adoption × 0.20) +
  (Maintenance Activity × 0.25) +
  (Documentation Quality × 0.20) +
  (Dependency Health × 0.15) +
  (Compatibility Status × 0.10) +
  (Stability & Reliability × 0.10)
```

**Health Status Levels:**
- **Excellent (≥85%):** 🟢 Framework is in excellent health, all systems optimal
- **Good (70-84%):** 🟡 Framework is in good health, minor improvements possible
- **Fair (55-69%):** 🟠 Framework needs attention, improvements recommended
- **Poor (40-54%):** 🔴 Framework requires significant improvements
- **Critical (&lt;40%):** ⚫ Framework is in critical condition, immediate action required

---

## Metrics Collection Processes

### Automated Collection

**Tools & Scripts:**
- Framework health monitoring script (to be implemented in E6:S03:T02)
- Git log analysis for update frequency
- Changelog parsing for activity tracking
- Dependency scanning for dependency health
- Link validation for documentation health
- Compatibility matrix validation for compatibility status

**Collection Frequency:**
- **Daily:** Critical metrics (dependency security, breaking changes)
- **Weekly:** Maintenance activity, documentation currency
- **Monthly:** Usage & adoption, compatibility status
- **Quarterly:** Comprehensive health assessment

### Manual Collection

**Manual Metrics:**
- Installation count (requires project survey or tracking)
- Active usage (requires project activity analysis)
- Documentation review status (requires review workflow)
- Integration health (requires integration testing)

**Collection Process:**
1. Run automated collection scripts
2. Gather manual metrics from project tracking
3. Aggregate metrics into health dashboard
4. Generate health report

---

## Framework-Specific Considerations

### Documentation-Only Frameworks

**Frameworks like:** doc-lifecycle, debug-path

**Adjusted Metrics:**
- **Dependency Health:** N/A (no dependencies)
- **Test Coverage:** N/A (no code to test)
- **Focus Areas:** Documentation quality, usage & adoption, maintenance activity

### Code-Based Frameworks

**Frameworks like:** workflow mgt (has scripts), kanban (has scripts)

**Standard Metrics:**
- All six dimensions apply
- Test coverage applicable if tests exist
- Dependency health applicable if dependencies exist

### Integration Frameworks

**Frameworks like:** numbering & versioning (integrated with others)

**Enhanced Metrics:**
- **Compatibility Status:** Higher weight (20% instead of 10%)
- **Integration Health:** More detailed tracking
- **Framework Dependency Graph:** More important metric

---

## Health Score Targets

### Project-Level Targets

**Minimum Acceptable:** 60% (Fair)
- All critical dimensions ≥ 50%
- No critical issues in any dimension
- Basic maintenance ongoing

**Target:** 75% (Good)
- Most dimensions ≥ 70%
- Minor improvements needed
- Regular maintenance ongoing

**Stretch Goal:** 90% (Excellent)
- All dimensions ≥ 85%
- Optimal health across all dimensions
- Proactive maintenance

### Framework-Specific Targets

**Core Frameworks (workflow mgt, kanban):**
- **Minimum:** 70% (Good)
- **Target:** 85% (Excellent)

**Supporting Frameworks (doc-lifecycle, debug-path):**
- **Minimum:** 60% (Fair)
- **Target:** 75% (Good)

**Integration Frameworks (numbering & versioning):**
- **Minimum:** 70% (Good)
- **Target:** 85% (Excellent)

---

## Metrics Tracking

### Historical Trends

**Track Over Time:**
- Overall health score trends
- Dimension-specific trends
- Metric-specific trends
- Framework comparison trends

**Analysis:**
- Identify improvement patterns
- Detect degradation early
- Plan maintenance cycles
- Measure improvement effectiveness

### Reporting

**Monthly Reports:**
- Health score summary
- Dimension breakdown
- Issues identified and resolved
- Improvement recommendations
- Trend analysis

**Quarterly Reports:**
- Comprehensive health assessment
- Historical trend analysis
- Framework comparison
- Improvement planning
- Resource requirements

---

## Integration with Workflows

### Release Workflow (RW)

**RW Step 9: Run Validators**
- Run framework health monitoring
- Include health metrics in release validation
- Fail release if health score < 60% (critical threshold)

### Update Kanban Workflow (UKW)

**UKW Step 6: Update Kanban Board**
- Include framework health status in board metadata
- Track health trends over time
- Flag health issues for prioritization

### Framework Update Procedures

**Pre-Update Health Check:**
- Check framework health before updates
- Verify health score meets minimum threshold
- Address health issues before updating

---

## References

- **Framework Versioning Strategy:** `docs/architecture/standards-and-adrs/framework-versioning-strategy.md`
- **Framework Compatibility Tracking:** `docs/architecture/standards-and-adrs/framework-compatibility-tracking.md`
- **Framework Update Procedures:** `docs/architecture/standards-and-adrs/framework-update-procedures.md`
- **Framework Backward Compatibility Policy:** `docs/architecture/standards-and-adrs/framework-backward-compatibility-policy.md`
- **Documentation Health Monitoring:** `docs/architecture/standards-and-adrs/documentation-health-monitoring.md`
- **Epic 6:** `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- **Story 3:** `docs/project-management/kanban/epics/Epic-6/Story-003-framework-health-monitoring.md`

---

## Decision Record

**Decision:** Implement comprehensive framework health metrics across six dimensions with weighted scoring.

**Rationale:**
- Provides multi-dimensional visibility into framework health
- Enables proactive maintenance and improvement planning
- Supports data-driven decision making
- Facilitates framework comparison and prioritization
- Integrates with existing workflows and processes

**Alternatives Considered:**
- Single-dimension health (too simplistic)
- Unweighted dimensions (doesn't reflect importance)
- Manual-only collection (not scalable)
- Framework-agnostic metrics (doesn't account for differences)

**Consequences:**
- Requires implementation of monitoring tools (E6:S03:T02)
- Requires dashboard for visualization (E6:S03:T03)
- Requires ongoing collection and maintenance
- Provides actionable insights for framework management

