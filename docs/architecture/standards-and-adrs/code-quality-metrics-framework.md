---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-05T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Code Quality Metrics Framework

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-05  
**Epic:** Epic 7 - Codebase Maintenance and Review  
**Story:** Story 3 - Code Quality Metrics and Monitoring  
**Task:** E7:S03:T01 - Design code quality metrics framework  
**Related:** Code Review Standards and Guidelines, Maintenance Workflow Processes, Framework Health Metrics

---

## Executive Summary

This document defines the **comprehensive code quality metrics framework** for the AI Dev Kit project. It establishes metrics for code complexity, coverage, duplication, maintainability, security, performance, and technical debt, providing a systematic approach to measuring and monitoring code quality.

**Key Principles:**
- **Comprehensive Coverage:** Metrics cover all important quality dimensions
- **Actionable Metrics:** Metrics provide actionable insights for improvement
- **Threshold-Based:** Clear thresholds and targets for each metric
- **Trend Analysis:** Metrics support trend analysis over time
- **Integration-Ready:** Framework designed for integration with tools and workflows

---

## Metrics Framework Overview

### Quality Dimensions

The framework organizes metrics into seven key dimensions:

1. **Code Complexity** - Measures code complexity and cognitive load
2. **Code Coverage** - Measures test coverage and quality
3. **Code Duplication** - Measures code duplication and reuse
4. **Code Maintainability** - Measures code maintainability and technical debt
5. **Code Security** - Measures security vulnerabilities and practices
6. **Code Performance** - Measures performance characteristics
7. **Technical Debt** - Measures accumulated technical debt

---

## Dimension 1: Code Complexity Metrics

### Cyclomatic Complexity

**Metric:** Cyclomatic Complexity  
**Description:** Measures the number of linearly independent paths through code  
**Calculation:** Count of decision points (if, while, for, case, etc.) + 1  
**Target:** ≤ 10 per function/method  
**Warning:** 11-20  
**Critical:** > 20  

**Interpretation:**
- Low complexity (≤ 10): Easy to understand and test
- Medium complexity (11-20): May need refactoring
- High complexity (> 20): Difficult to maintain, high risk

### Cognitive Complexity

**Metric:** Cognitive Complexity  
**Description:** Measures the cognitive load required to understand code  
**Calculation:** Weighted count of control flow structures  
**Target:** ≤ 15 per function/method  
**Warning:** 16-25  
**Critical:** > 25  

**Interpretation:**
- Low cognitive complexity: Code is easy to understand
- High cognitive complexity: Code is difficult to understand and maintain

### Nesting Depth

**Metric:** Maximum Nesting Depth  
**Description:** Measures the maximum level of nesting in code  
**Calculation:** Maximum depth of nested control structures  
**Target:** ≤ 4 levels  
**Warning:** 5-6 levels  
**Critical:** > 6 levels  

**Interpretation:**
- Low nesting: Code is easier to read and understand
- High nesting: Code is difficult to follow and maintain

### Function/Method Size

**Metric:** Lines of Code per Function/Method  
**Description:** Measures the size of individual functions/methods  
**Calculation:** Count of lines (excluding comments/whitespace)  
**Target:** ≤ 50 lines  
**Warning:** 51-100 lines  
**Critical:** > 100 lines  

**Interpretation:**
- Small functions: Easier to understand, test, and maintain
- Large functions: May indicate need for refactoring

### Class/Module Size

**Metric:** Lines of Code per Class/Module  
**Description:** Measures the size of classes/modules  
**Calculation:** Count of lines in class/module  
**Target:** ≤ 500 lines  
**Warning:** 501-1000 lines  
**Critical:** > 1000 lines  

**Interpretation:**
- Small classes: Better cohesion, easier to maintain
- Large classes: May violate single responsibility principle

---

## Dimension 2: Code Coverage Metrics

### Test Coverage

**Metric:** Test Coverage Percentage  
**Description:** Measures the percentage of code covered by tests  
**Calculation:** (Covered lines / Total lines) × 100  
**Target:** ≥ 80%  
**Warning:** 60-79%  
**Critical:** < 60%  

**Interpretation:**
- High coverage: Better confidence in code correctness
- Low coverage: Higher risk of undetected bugs

### Branch Coverage

**Metric:** Branch Coverage Percentage  
**Description:** Measures the percentage of branches covered by tests  
**Calculation:** (Covered branches / Total branches) × 100  
**Target:** ≥ 80%  
**Warning:** 60-79%  
**Critical:** < 60%  

**Interpretation:**
- High branch coverage: Better test quality
- Low branch coverage: Edge cases may not be tested

### Function Coverage

**Metric:** Function Coverage Percentage  
**Description:** Measures the percentage of functions covered by tests  
**Calculation:** (Covered functions / Total functions) × 100  
**Target:** ≥ 90%  
**Warning:** 70-89%  
**Critical:** < 70%  

**Interpretation:**
- High function coverage: Most functions are tested
- Low function coverage: Many functions untested

---

## Dimension 3: Code Duplication Metrics

### Duplication Percentage

**Metric:** Code Duplication Percentage  
**Description:** Measures the percentage of duplicated code  
**Calculation:** (Duplicated lines / Total lines) × 100  
**Target:** ≤ 3%  
**Warning:** 4-5%  
**Critical:** > 5%  

**Interpretation:**
- Low duplication: Better code reuse and maintainability
- High duplication: Increased maintenance burden

### Duplication Blocks

**Metric:** Number of Duplication Blocks  
**Description:** Measures the number of duplicated code blocks  
**Calculation:** Count of duplicated code blocks  
**Target:** ≤ 10 blocks  
**Warning:** 11-20 blocks  
**Critical:** > 20 blocks  

**Interpretation:**
- Few duplication blocks: Code is well-structured
- Many duplication blocks: May need refactoring

---

## Dimension 4: Code Maintainability Metrics

### Maintainability Index

**Metric:** Maintainability Index  
**Description:** Composite metric measuring code maintainability  
**Calculation:** 171 - 5.2 × ln(Halstead Volume) - 0.23 × (Cyclomatic Complexity) - 16.2 × ln(Lines of Code)  
**Target:** ≥ 70  
**Warning:** 50-69  
**Critical:** < 50  

**Interpretation:**
- High index: Code is maintainable
- Low index: Code is difficult to maintain

### Code Smells

**Metric:** Number of Code Smells  
**Description:** Measures the number of code quality issues  
**Calculation:** Count of detected code smells  
**Target:** ≤ 5 per 1000 lines  
**Warning:** 6-10 per 1000 lines  
**Critical:** > 10 per 1000 lines  

**Interpretation:**
- Few code smells: Good code quality
- Many code smells: Code quality issues present

### Technical Debt Ratio

**Metric:** Technical Debt Ratio  
**Description:** Measures the ratio of technical debt to development time  
**Calculation:** (Time to fix issues / Development time) × 100  
**Target:** ≤ 5%  
**Warning:** 6-10%  
**Critical:** > 10%  

**Interpretation:**
- Low ratio: Technical debt is manageable
- High ratio: Significant technical debt accumulation

---

## Dimension 5: Code Security Metrics

### Security Vulnerabilities

**Metric:** Number of Security Vulnerabilities  
**Description:** Measures the number of security issues  
**Calculation:** Count of detected vulnerabilities  
**Target:** 0  
**Warning:** 1-3  
**Critical:** > 3  

**Interpretation:**
- Zero vulnerabilities: Secure code
- Vulnerabilities present: Security risks identified

### Security Hotspots

**Metric:** Number of Security Hotspots  
**Description:** Measures the number of security-sensitive areas  
**Calculation:** Count of security hotspots  
**Target:** ≤ 5  
**Warning:** 6-10  
**Critical:** > 10  

**Interpretation:**
- Few hotspots: Security is well-managed
- Many hotspots: Security review needed

### Dependency Vulnerabilities

**Metric:** Number of Vulnerable Dependencies  
**Description:** Measures the number of dependencies with known vulnerabilities  
**Calculation:** Count of vulnerable dependencies  
**Target:** 0  
**Warning:** 1-2  
**Critical:** > 2  

**Interpretation:**
- Zero vulnerable dependencies: Dependencies are secure
- Vulnerable dependencies: Update needed

---

## Dimension 6: Code Performance Metrics

### Performance Issues

**Metric:** Number of Performance Issues  
**Description:** Measures the number of performance problems  
**Calculation:** Count of detected performance issues  
**Target:** ≤ 2  
**Warning:** 3-5  
**Critical:** > 5  

**Interpretation:**
- Few issues: Good performance
- Many issues: Performance optimization needed

### Code Efficiency

**Metric:** Code Efficiency Score  
**Description:** Measures code efficiency (algorithm complexity, resource usage)  
**Calculation:** Composite score based on algorithm analysis  
**Target:** ≥ 80  
**Warning:** 60-79  
**Critical:** < 60  

**Interpretation:**
- High efficiency: Code performs well
- Low efficiency: Performance improvements needed

---

## Dimension 7: Technical Debt Metrics

### Technical Debt

**Metric:** Technical Debt (in hours)  
**Description:** Measures the estimated time to fix all issues  
**Calculation:** Sum of estimated fix times for all issues  
**Target:** ≤ 40 hours  
**Warning:** 41-80 hours  
**Critical:** > 80 hours  

**Interpretation:**
- Low debt: Technical debt is manageable
- High debt: Significant technical debt accumulation

### Debt Ratio

**Metric:** Technical Debt Ratio  
**Description:** Measures technical debt relative to codebase size  
**Calculation:** (Technical Debt / Total Development Time) × 100  
**Target:** ≤ 5%  
**Warning:** 6-10%  
**Critical:** > 10%  

**Interpretation:**
- Low ratio: Debt is proportional to codebase
- High ratio: Disproportionate debt accumulation

---

## Metric Calculation Methods

### Automated Calculation

**Tools:**
- Static analysis tools (SonarQube, CodeClimate, etc.)
- Linting tools (pylint, flake8, etc.)
- Coverage tools (coverage.py, pytest-cov, etc.)
- Security scanners (Bandit, Safety, etc.)

**Process:**
1. Run automated analysis tools
2. Collect metric values
3. Aggregate metrics by dimension
4. Calculate composite scores
5. Generate reports

### Manual Calculation

**When Needed:**
- Metrics not available from tools
- Custom metrics specific to project
- Validation of automated metrics

**Process:**
1. Define calculation method
2. Collect required data
3. Perform calculation
4. Document results
5. Validate against automated metrics

---

## Metric Thresholds and Targets

### Threshold Levels

**Target (Green):**
- Metric meets or exceeds target value
- No action required
- Maintain current practices

**Warning (Yellow):**
- Metric is below target but above critical threshold
- Monitor closely
- Plan improvements

**Critical (Red):**
- Metric is below critical threshold
- Immediate action required
- Prioritize fixes

### Target Values Summary

| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| Cyclomatic Complexity | ≤ 10 | 11-20 | > 20 |
| Test Coverage | ≥ 80% | 60-79% | < 60% |
| Code Duplication | ≤ 3% | 4-5% | > 5% |
| Maintainability Index | ≥ 70 | 50-69 | < 50 |
| Security Vulnerabilities | 0 | 1-3 | > 3 |
| Technical Debt | ≤ 40h | 41-80h | > 80h |

---

## Metric Aggregation and Reporting

### Aggregation Levels

**File Level:**
- Metrics calculated per file
- Identify files needing attention
- Track file-level improvements

**Module/Package Level:**
- Metrics aggregated by module/package
- Identify modules needing attention
- Track module-level trends

**Project Level:**
- Metrics aggregated across entire project
- Overall quality assessment
- Track project-level trends

### Reporting Frequency

**Real-Time:**
- Continuous monitoring
- Immediate alerts for critical issues
- Dashboard updates

**Daily:**
- Daily metric summaries
- Trend analysis
- Quick status checks

**Weekly:**
- Weekly quality reports
- Detailed analysis
- Improvement planning

**Monthly:**
- Monthly quality reviews
- Comprehensive analysis
- Strategic planning

---

## Integration Points

### Tool Integration

**Static Analysis Tools:**
- SonarQube integration
- CodeClimate integration
- Custom tool integration

**CI/CD Integration:**
- Automated metric collection
- Quality gates
- Build failure on critical issues

**IDE Integration:**
- Real-time metric display
- Inline quality indicators
- Quick quality feedback

### Workflow Integration

**Release Workflow (RW):**
- Quality checks before release
- Quality metrics in changelog
- Quality gates

**Update Kanban Workflow (UKW):**
- Quality metrics in Kanban
- Quality-based prioritization
- Quality tracking

**Maintenance Workflow:**
- Quality-driven maintenance
- Quality improvement tasks
- Quality monitoring

---

## Best Practices

### Metric Selection

**Guidelines:**
- Select metrics relevant to project goals
- Balance comprehensiveness with practicality
- Focus on actionable metrics
- Avoid metric overload

### Metric Interpretation

**Guidelines:**
- Understand metric meaning and limitations
- Consider context when interpreting metrics
- Look for trends, not just absolute values
- Combine multiple metrics for insights

### Metric Improvement

**Guidelines:**
- Set realistic improvement targets
- Prioritize improvements based on impact
- Track improvement progress
- Celebrate quality improvements

---

## References

- **Code Review Standards and Guidelines:** `docs/architecture/standards-and-adrs/code-review-standards-and-guidelines.md`
- **Maintenance Workflow Processes:** `docs/architecture/standards-and-adrs/maintenance-workflow-processes.md`
- **Framework Health Metrics:** `docs/architecture/standards-and-adrs/framework-health-metrics.md`
- **Epic 7:** `docs/project-management/kanban/epics/Epic-7/Epic-7.md`
- **Story 3:** `docs/project-management/kanban/epics/Epic-7/Story-003-code-quality-metrics-and-monitoring.md`

---

## Decision Record

**Decision:** Implement comprehensive code quality metrics framework covering seven dimensions with clear thresholds and targets.

**Rationale:**
- Provides systematic approach to code quality measurement
- Covers all important quality dimensions
- Enables actionable quality improvements
- Supports integration with tools and workflows

**Alternatives Considered:**
- Minimal metrics (insufficient coverage)
- Tool-specific metrics (not portable)
- Ad-hoc metrics (inconsistent)
- Overly complex metrics (not actionable)

**Consequences:**
- Requires initial setup and tool integration
- Framework may need refinement based on experience
- Provides foundation for systematic quality monitoring
- Enables data-driven quality improvements

---

_Last updated: 2026-01-05 (v0.7.3.1+0 – Code quality metrics framework designed)_

