---
lifecycle: evergreen
ttl_days: null
created_at: [YYYY-MM-DDTHH:MM:SSZ]
expires_at: null
housekeeping_policy: keep
---

# User Acceptance Testing (UAT) Report: [Title]

**Type:** User Acceptance Testing (UAT) / Feedback (FB)  
**Submitted:** [YYYY-MM-DD]  
**Submitted By:** [Name/Username/Project]  
**Priority:** [HIGH/MEDIUM/LOW]  
**Status:** [PENDING/INTAKE/ACCEPTED/REJECTED/DEFERRED]  
**UAT Scope:** [Component/Feature/System tested]

---

## 摘要

[用一句话概括反馈内容。]

---

## UAT Context

**Project/Organization:** [开展 UAT 的项目或组织名称]  
**Component Tested:** [例如：Kanban Framework、Release Workflow、Versioning Framework]  
**Version Tested:** [Version number or commit hash]  
**Testing Period:** [Start date] to [End date]  
**UAT Scope:** [简要描述测试范围与验收标准]

**UAT Methodology:**
- [ ] Functional Testing (does it work as specified?)
- [ ] Integration Testing (does it integrate as expected?)
- [ ] Adoption Testing (can it be adopted as documented?)
- [ ] End-to-End Testing (does the full workflow work?)
- [ ] Other: [specify]

**Acceptance Criteria Tested:**
[列出所测试的具体验收标准或需求]
- Criterion 1: [Description]
- Criterion 2: [Description]
- Criterion 3: [Description]

---

## UAT Results

### Acceptance Criteria Results

[针对每条验收标准记录测试结果]

**Criterion 1: [Description]**
- **Status:** [PASS/FAIL/PARTIAL]
- **Evidence:** [Test results, screenshots, logs, etc.]
- **Notes:** [Additional observations]

**Criterion 2: [Description]**
- **Status:** [PASS/FAIL/PARTIAL]
- **Evidence:** [Test results, screenshots, logs, etc.]
- **Notes:** [Additional observations]

**Criterion 3: [Description]**
- **Status:** [PASS/FAIL/PARTIAL]
- **Evidence:** [Test results, screenshots, logs, etc.]
- **Notes:** [Additional observations]

### Test Results Summary

**Total Criteria Tested:** [Number]  
**Passed:** [Number]  
**Failed:** [Number]  
**Partial:** [Number]

### What Worked as Expected

[哪些方面通过 UAT，符合规格/宣传？]

- Aspect 1: [Description with evidence]
- Aspect 2: [Description with evidence]
- Aspect 3: [Description with evidence]

### Issues Found (Failures)

[哪些验收标准未通过或不符合规格？]

- **Issue 1:** [Criterion that failed]
  - **Expected:** [What was expected]
  - **Actual:** [What actually happened]
  - **Evidence:** [Test results, screenshots, logs]
  - **Severity:** [CRITICAL/HIGH/MEDIUM/LOW]

- **Issue 2:** [Criterion that failed]
  - **Expected:** [What was expected]
  - **Actual:** [What actually happened]
  - **Evidence:** [Test results, screenshots, logs]
  - **Severity:** [CRITICAL/HIGH/MEDIUM/LOW]

### Overall UAT Assessment

**Does it work as advertised/specified?**
- [ ] Yes, works as advertised (all criteria passed)
- [ ] Mostly works (minor issues, non-critical criteria failed)
- [ ] Partially works (some critical criteria failed)
- [ ] Does not work as advertised (critical criteria failed)

**UAT Recommendation:**
- [ ] ACCEPT - Ready for use
- [ ] ACCEPT WITH CAVEATS - Usable but with known issues
- [ ] REJECT - Does not meet acceptance criteria

**Evidence-Based Rating:** [Based on test results, not opinion]

---

## Specific Findings

### Functionality

[功能方面的详细反馈]

- Finding 1: [Description]
- Finding 2: [Description]

### Usability

[易用性、文档、上手体验方面的反馈]

- Finding 1: [Description]
- Finding 2: [Description]

### Performance

[性能、速度、资源占用方面的反馈]

- Finding 1: [Description]
- Finding 2: [Description]

### Documentation

[文档质量、完整性、清晰度方面的反馈]

- Finding 1: [Description]
- Finding 2: [Description]

### Integration

[与其他工具/系统集成方面的反馈]

- Finding 1: [Description]
- Finding 2: [Description]

---

## Use Case Details

**Primary Use Case:** [该组件如何被使用？]

**Project Type:** [例如：新项目、既有项目迁移、框架采用]

**Project Size:** [例如：Small, Medium, Large, Enterprise]

**Team Size:** [使用该组件的团队成员数量]

**Duration of Use:** [已使用多长时间？]

---

## Supporting Evidence

**Test Results:**
- [链接至测试结果、截图或其他证据]
- [链接至测试报告或文档]

**Examples:**
- [具体示例或场景]
- [代码片段或配置]

**Metrics:**
- [任何量化指标或测量值]

---

## Impact Assessment

**Impact on Project:**
- [ ] Critical - Blocked project progress
- [ ] High - Significant impact on project
- [ ] Medium - Moderate impact
- [ ] Low - Minor impact
- [ ] Positive - Enhanced project

**Impact on Team:**
- [ ] Critical - Team productivity affected
- [ ] High - Significant team impact
- [ ] Medium - Moderate team impact
- [ ] Low - Minor team impact
- [ ] Positive - Improved team workflow

---

## Recommendations

[基于本反馈应采取哪些行动？]

- [ ] Recommendation 1: [Description]
- [ ] Recommendation 2: [Description]
- [ ] Recommendation 3: [Description]

**Priority Order:**
1. [最高优先级建议]
2. [次高优先级建议]
3. [第三优先级建议]

---

## Related Work

**Related BRs:** [基于本反馈提交的 Bug Report]
**Related FRs:** [基于本反馈提交的 Feature Request]
**Related UXR:** [与本反馈相关的用户体验研究]

---

## Intake Decision

**Intake Status:** [PENDING/INTAKE/ACCEPTED/REJECTED/DEFERRED]  
**Intake Date:** [YYYY-MM-DD]  
**Intake By:** [Name/Username]

**Decision Flow Results:**
- [ ] Story Match Found: [Epic X, Story Y] → Task [T]
- [ ] New Story Created: [Epic X, Story Y] → Task 1
- [ ] New Epic Created: [Epic X, Story 1, Task 1]
- [ ] Feedback Acknowledged: [No action required, feedback noted]

**Assigned To:**
- Epic: [Epic number or name]
- Story: [Story number or name]
- Task: [Task number or name]

**Version:** [Version when addressed]

---

## 备注

[补充说明或上下文]

---

**Template Usage:**
**本地化 (zh-CN)：** 指导性正文使用简体技术中文。

本 FB 遵循 Kanban framework 反馈模板。反馈提交有助于改进框架，对持续改进具有重要价值。
