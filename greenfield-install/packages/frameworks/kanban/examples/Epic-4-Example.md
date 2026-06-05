---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---


# Epic 4: User Workflows & Use Case Modeling (Reorganized)

**Status:** In Progress (MVP Core Complete - Production Ready)
**Test Status:** All tests passing, production deployment successful (2025-09-18)
**Last updated:** 2025-12-02 (v0.4.34.1+1 – E4:S34:T01: Complete Story 34 - Parent feedback already supported)

**Summary:**
Epic 4 has completed the MVP core user workflows (Stories 1-2, 5, 9-10, 36-37) including the feedback system. **PRODUCTION DEPLOYMENT SUCCESSFUL** with enhanced test environment and automated user creation. However, many stories remain incomplete including accessibility testing, teacher analytics, strategic user features, and parent user features. This reorganized version uses linear story numbering with user types identified in story titles.

**Recent Achievements (2025-09-18):**
- ✅ **Production Deployment**: System successfully deployed and accessible

## Story Checklist
- [x] **Story 1 – Student Self-Reflection Interface** ✅ COMPLETE (2025-06-23)
- [x] **Story 2 – Student Progress Visualization and Reflection History** ✅ COMPLETE (2025-06-23)
- [x] **Story 3 – Student Goal Setting and Personal Learning Plans** ✅ COMPLETE (v0.4.3.3+2)
- [x] **Story 4 – Student Export and Sharing of Learning Progress** ✅ COMPLETE (v0.4.4.3+1)
- [x] **Story 5 – Teacher Insight into Student Self-Reflection** ✅ COMPLETE (2025-06-23)
- [x] **Story 6 – Teacher Class & Student Overview** ✅ COMPLETE (v0.4.8.2+1)
- [x] **Story 7 – Teacher Student Progress & Analytics** ✅ COMPLETE (v0.4.7.1+1)
- [x] **Story 8 – Teacher Class Analytics & Trends** ✅ COMPLETE (v0.4.8.3+1)
- [x] **Story 9 – Admin User and Permission Management** ✅ COMPLETE (2025-09-18)
- [x] **Story 10 – Admin Data Import** ✅ COMPLETE (2025-09-18)
- [x] **Story 11 – Admin Data Export** ✅ COMPLETE (v0.4.11.1+1)
- [x] **Story 12 – Admin System Monitoring and Reporting** ✅ COMPLETE (v0.4.12.1+1)
- [x] **Story 13 – Admin Security and Compliance** ✅ COMPLETE (v0.4.13.4+2, Tasks 1-4)
- [ ] **Story 14 – Admin System Configuration and Customization**
- [x] **Story 15 – Admin Support and Feedback** ✅ COMPLETE (v0.4.15.1+1)
- [x] **Story 16 – Strategic Whole-School/Department Analytics** ✅ COMPLETE (v0.4.16.3+1)
- [x] **Story 17 – Strategic Comparative Analytics** ✅ COMPLETE (v0.4.17.2+1)
- [x] **Story 18 – Strategic Intervention & Support Planning** ✅ COMPLETE (v0.4.18.2+1)
- [x] **Story 19 – Strategic Reporting & Compliance** ✅ COMPLETE (v0.4.19.2+1)
- [x] **Story 20 – Strategic Goal Setting & Monitoring** ✅ COMPLETE (v0.4.20.2+1)
- [x] **Story 21 – Strategic Equity & Inclusion Monitoring** ✅ COMPLETE (v0.4.21.2+1)
- [x] **Story 22 – Strategic Policy & Process Review** ✅ COMPLETE (v0.4.22.2+1)
- [x] **Story 23 – Strategic Communication & Stakeholder Engagement** ✅ COMPLETE (v0.4.23.2+1)
- [x] **Story 24 – Strategic Access Control & Delegation** ✅ COMPLETE (v0.4.24.2+1)
- [x] **Story 25 – Parent Access to Child's Learning Progress** ✅ COMPLETE (v0.4.25.2+1)
- [x] **Story 26 – Parent Receive Actionable Reports and Summaries** ✅ COMPLETE (v0.4.26.2+1)
- [x] **Story 27 – Parent Monitor Goals and Interventions** ✅ COMPLETE (v0.4.27.2+1)
- [x] **Story 28 – Parent Communication with Teachers** ✅ COMPLETE (v0.4.28.2+1)
- [x] **Story 29 – Parent Notifications and Alerts** ✅ COMPLETE (v0.4.29.2+1)
- [x] **Story 30 – Parent Support for Multiple Children** ✅ COMPLETE (v0.4.25.2+1 - Already implemented in Story 25)
- [x] **Story 31 – Parent Access to Learning Resources** ✅ COMPLETE (v0.4.31.1+1)
- [x] **Story 32 – Parent Privacy and Data Security** ✅ COMPLETE (v0.4.32.1+1)
- [x] **Story 33 – Parent Inclusivity and Accessibility** ✅ COMPLETE (v0.4.33.3+1, All tasks complete - protocols/planning ready)
- [x] **Story 34 – Parent Participation in School Feedback** ✅ COMPLETE (v0.4.34.1+1)
- [x] **Story 35 – System Accessibility and Inclusivity** ✅ IN PROGRESS (v0.4.35.2+2, Tasks 1-2 complete, Task 3 pending)
- [x] **Story 36 – System Feedback and Iteration** ✅ COMPLETE (2025-07-04)
- [x] **Story 37 – System Documentation & Onboarding** ✅ COMPLETE (2025-07-03)


- ✅ **Enhanced Test Environment**: Complete test user setup with realistic school data
- ✅ **Automated User Management**: Entrypoint script creates all required user types
- ✅ **Class Management**: Automated class creation and student enrollment
- ✅ **Database Integration**: External Supabase database with test data

---

> **Note (2025-09-18):** This is a reorganized version of Epic 4 with linear story numbering. User types are now identified in story titles instead of using confusing prefixes (A1, T1, S1, P1). Many stories remain incomplete and need implementation. **Production deployment successful with enhanced test environment.**

---

**MoSCOW Legend:**
- **MUST:** Critical for launch
- **SHOULD:** Important but not vital
- **COULD:** Nice to have
- **ONGOING:** Perpetual maintenance tasks (tracked but don't block other work)
- **WON'T:** Out of scope for now

---

## Student User Stories

### Story 1: Student Self-Reflection Interface
**Priority:** MUST
*As a student, I want an intuitive interface to rate my confidence in each learning outcome (using a RAG system), so I can reflect on my progress and communicate my needs to teachers.*

- [x] Design and implement the RAG (Red-Amber-Green) confidence rating system for learning outcomes.
- [x] Create a student dashboard showing all relevant learning outcomes for their class/specification.
- [x] Implement real-time progress tracking and visual feedback.
- [x] Support multiple subjects and future-proof the UI.
- **Acceptance Criteria:** Students can log in, view their learning outcomes, rate each with RAG, and see a visual progress summary.
- **Status:** COMPLETE (as of 2025-06-23T12:01:45Z)
- **Dependencies:** Core data models, student authentication, learning outcome import.

### Story 2: Student Progress Visualization and Reflection History
**Priority:** MUST
*As a student, I want to see how my confidence and understanding have changed over time, so I can recognize growth and areas needing attention.*

- [x] Track and display a history of self-reflections for each outcome using Django ORM models.
- [x] Implement progress visualization (charts, timelines, etc.) using data from Django ORM queries.
- [x] Allow students to view trends and patterns in their learning journey.
- [x] All persistence, queries, and admin/reporting features must use Django ORM (no SQLAlchemy).
- [x] Leverage Django admin for managing and reviewing reflection data.
- **Acceptance Criteria:** Students can view their reflection history and progress charts for each outcome and subject, powered by Django ORM.
- **Status:** COMPLETE (as of 2025-06-23T12:01:45Z)
- **Dependencies:** Story 1 (Self-Reflection Interface) must be complete.

### Story 3: Student Goal Setting and Personal Learning Plans
**Priority:** SHOULD
*As a student, I want to set personal learning goals and track my progress toward them, so I can take ownership of my learning.*

- [ ] **EPIC-4-TASK-019**: Allow students to set, edit, and review personal learning goals linked to outcomes or subjects.
- [ ] **EPIC-4-TASK-020**: Visualize progress toward each goal.
- [ ] **EPIC-4-TASK-021**: Provide reminders or nudges for goal review.
- **Acceptance Criteria:** Students can create, edit, and track goals, and see progress toward them on their dashboard.
- **Dependencies:** Story 1 (Self-Reflection Interface) must be complete.

### Story 4: Student Export and Sharing of Learning Progress
**Priority:** COULD
*As a student, I want to export or share my progress and reflections, so I can discuss them with teachers, parents, or mentors.*

- [ ] **EPIC-4-TASK-022**: Implement export functionality for student reports (PDF/CSV).
- [ ] **EPIC-4-TASK-023**: Allow students to share progress summaries with teachers or guardians.
- **Acceptance Criteria:** Students can export or share their progress and reflection data in accessible formats.
- **Dependencies:** Stories 1 and 2 must be in progress or complete.

---

## Teacher User Stories

### Story 5: Teacher Insight into Student Self-Reflection
**Priority:** MUST
*As a teacher, I want to view students' self-reflections and progress, so I can support and guide them more effectively.*

- [x] Provide teachers with dashboards summarizing student self-reflection data.
- [x] Allow teachers to view individual and group trends, and identify students needing support.
- [x] Enable teachers to leave feedback or suggestions based on student reflections.
- **Acceptance Criteria:** Teachers can access dashboards, view student/group trends, and provide feedback.
- **Status:** COMPLETE (as of 2025-06-23T12:01:45Z)
- **Dependencies:** Stories 1 and 2 must be in progress or complete.

### Story 6: Teacher Class & Student Overview
**Priority:** MUST
*As a teacher, I want to see a dashboard of all my classes, so I can quickly access student progress.*

- [x] View a dashboard of all classes taught.
- [x] Drill down into a class to see a list of students.
- [x] See a summary of student progress and confidence (RAG) for each learning outcome.
- **Acceptance Criteria:** Teachers can access a dashboard, view their classes, and see student progress summaries.
- **Status:** COMPLETE (as of v0.4.8.2+1)

### Story 7: Teacher Student Progress & Analytics
**Priority:** MUST
*As a teacher, I want to view detailed analytics for a class and individual students, so I can identify common learning gaps and support students effectively.*

- [x] **EPIC-4-TASK-036**: View individual student profiles with progress over time.
- [x] **EPIC-4-TASK-037**: Compare a student's self-assessment with class averages or teacher observations.
- [x] **EPIC-4-TASK-038**: Identify students who are struggling or excelling.
- **Acceptance Criteria:** Teachers can view and analyze student progress and identify students needing support.
- **Status:** COMPLETE (as of v0.4.7.1+1)

### Story 8: Teacher Class Analytics & Trends
**Priority:** SHOULD
*As a teacher, I want to view and export class-wide analytics, so I can use them in meetings or reports.*

- [x] **EPIC-4-TASK-039**: View class-wide analytics: distribution of RAG ratings, trends over time, common areas of difficulty.
- [x] **EPIC-4-TASK-040**: Export class analytics for reporting or meetings.
- [x] **EPIC-4-TASK-041**: Filter analytics by subject, topic, or time period.
- **Acceptance Criteria:** Teachers can access, filter, and export class analytics and trends.
- **Status:** COMPLETE (as of v0.4.8.3+1)

---

## Admin User Stories

### Story 9: Admin User and Permission Management
**Priority:** MUST
*As an admin, I want to create, edit, and deactivate user accounts (students, teachers, strategic users, other admins), so that the right people have access to the system.*

- [x] Create, edit, and deactivate user accounts.
- [x] Assign users to classes, groups, or roles.
- [x] Reset passwords or unlock accounts.
- [x] **NEW**: Automated test user creation in production deployment
- [x] **NEW**: Complete test environment setup with realistic data
- [x] **NEW**: Production deployment with external database integration
- **Acceptance Criteria:** Admins can manage all user accounts and permissions securely.
- **Status:** COMPLETE + ENHANCED (as of 2025-09-18T16:30:00Z)

### Story 10: Admin Data Import
**Priority:** MUST
*As an admin, I want to import user, class, and learning outcome data in bulk, so that onboarding is efficient and accurate.*

- [x] Import data (CSV, etc.).
- [x] Validate and handle errors during import.
- [x] **NEW**: Automated data setup in production deployment
- [x] **NEW**: Complete test environment with school, class, and user data
- **Acceptance Criteria:** Admins can import data in bulk with validation and error handling.
- **Status:** COMPLETE + ENHANCED (as of 2025-09-18T16:30:00Z)

### Story 11: Admin Data Export
**Priority:** SHOULD
*As an admin, I want to export user, class, and learning outcome data in bulk, so that reporting and data sharing are efficient.*

- [x] Export data (CSV, etc.).
- **Acceptance Criteria:** Admins can export data in bulk for reporting or sharing.
- **Status:** COMPLETE (as of v0.4.11.1+1)

### Story 12: Admin System Monitoring and Reporting
**Priority:** SHOULD
*As an admin, I want to view system usage statistics and generate reports, so that I can monitor adoption and identify issues.*

- [ ] View system usage statistics (logins, activity, engagement).
- [ ] Generate/download reports on student progress, teacher engagement, and system health.
- **Acceptance Criteria:** Admins can access and export relevant system reports and metrics.

### Story 13: Admin Security and Compliance
**Priority:** MUST
*As an admin, I want to manage user permissions and access levels, and view audit logs, so that sensitive data is protected and actions are traceable.*

- [x] Manage user permissions and access levels.
- [x] View audit logs of key actions (e.g., data exports, permission changes).
- [x] Configure privacy settings and data retention policies.
- [x] Document GitHub SSL troubleshooting workflow.
- **Acceptance Criteria:** Admins can enforce security and compliance requirements.
- **Status:** COMPLETE (as of v0.4.13.4+2, Task 5 pending)

### Story 14: Admin System Configuration and Customization
**Priority:** COULD
*As an admin, I want to configure system-wide settings (branding, notifications, language), so that the system matches our school's needs.*

- [ ] Configure branding, notifications, and language settings.
- [ ] Manage integrations with other school systems (e.g., MIS, SSO).
- **Acceptance Criteria:** Admins can customize and integrate the system as needed.

### Story 15: Admin Support and Feedback
**Priority:** SHOULD
*As an admin, I want to receive and respond to support requests from users, and collect feedback, so that issues are resolved quickly and improvements are prioritized.*

- [ ] Receive/respond to support requests.
- [ ] Collect and review user feedback.
- **Acceptance Criteria:** Admins can manage support and feedback efficiently.

---

## Strategic User Stories

### Story 16: Strategic Whole-School/Department Analytics
**Priority:** MUST
*As a school leader, I want to view dashboards summarizing student progress and confidence across the whole school or specific departments, so I can identify trends, gaps, and areas of concern.*

- [ ] **EPIC-4-TASK-042**: View dashboards for school-wide or department-level analytics.
- [ ] **EPIC-4-TASK-043**: Drill down by year group, subject, class, or demographic.
- **Acceptance Criteria:** Strategic users can access and drill down into analytics at multiple levels.

### Story 17: Strategic Comparative Analytics
**Priority:** SHOULD
*As a school leader, I want to compare performance and engagement between different subjects, year groups, or classes, so I can benchmark and target support.*

- [ ] **EPIC-4-TASK-044**: Compare analytics across subjects, year groups, or classes.
- [ ] **EPIC-4-TASK-045**: Benchmark against previous years or school targets.
- **Acceptance Criteria:** Strategic users can compare and benchmark performance across cohorts.

### Story 18: Strategic Intervention & Support Planning
**Priority:** MUST
*As a school leader, I want to identify cohorts or groups needing targeted intervention, and track the impact of interventions over time, so I can drive improvement.*

- [ ] **EPIC-4-TASK-046**: Identify underperforming groups or demographics.
- [ ] **EPIC-4-TASK-047**: Track and monitor the impact of interventions.
- **Acceptance Criteria:** Strategic users can identify and monitor intervention needs and outcomes.

### Story 19: Strategic Reporting & Compliance
**Priority:** MUST
*As a school leader, I want to generate and export reports for SLT meetings, governors, or external stakeholders, so I can evidence progress and compliance.*

- [ ] **EPIC-4-TASK-048**: Generate and export reports for various stakeholders.
- [ ] **EPIC-4-TASK-049**: Ensure data is available for statutory reporting or improvement plans.
- **Acceptance Criteria:** Strategic users can generate and export required reports.

### Story 20: Strategic Goal Setting & Monitoring
**Priority:** SHOULD
*As a school leader, I want to set and monitor school-wide or department-specific goals, so I can drive and track improvement.*

- [ ] **EPIC-4-TASK-050**: Set goals for school or department progress.
- [ ] **EPIC-4-TASK-051**: Monitor progress towards these goals over time.
- **Acceptance Criteria:** Strategic users can set, track, and review progress towards strategic goals.

### Story 21: Strategic Equity & Inclusion Monitoring
**Priority:** MUST
*As a school leader, I want to analyze data by demographic to ensure equity and inclusion, and address gaps for vulnerable groups.*

- [ ] **EPIC-4-TASK-052**: Analyze progress and engagement by demographic (e.g., gender, SEND, Pupil Premium).
- [ ] **EPIC-4-TASK-053**: Identify and address gaps for vulnerable groups.
- **Acceptance Criteria:** Strategic users can monitor and act on equity and inclusion data.

### Story 22: Strategic Policy & Process Review
**Priority:** COULD
*As a school leader, I want to use system data to inform policy changes and review the effectiveness of new initiatives.*

- [ ] **EPIC-4-TASK-054**: Use analytics to inform policy and resource allocation.
- [ ] **EPIC-4-TASK-055**: Review the impact of new initiatives using system data.
- **Acceptance Criteria:** Strategic users can use data to inform and review policy decisions.

### Story 23: Strategic Communication & Stakeholder Engagement
**Priority:** SHOULD
*As a school leader, I want to share high-level progress summaries with staff, governors, or parents, and prepare data visualizations for presentations or reports.*

- [ ] **EPIC-4-TASK-056**: Share progress summaries with stakeholders.
- [ ] **EPIC-4-TASK-057**: Prepare data visualizations for presentations or reports.
- **Acceptance Criteria:** Strategic users can communicate key insights to stakeholders.

### Story 24: Strategic Access Control & Delegation
**Priority:** COULD
*As a school leader, I want to delegate access to department heads or other leaders, and review/manage permissions for strategic users.*

- [ ] **EPIC-4-TASK-058**: Delegate access to department heads or other leaders.
- [ ] **EPIC-4-TASK-059**: Review and manage permissions for strategic users.
- **Acceptance Criteria:** Strategic users can delegate and manage access appropriately.

---

## Parent User Stories

### Story 25: Parent Access to Child's Learning Progress
**Priority:** MUST
*As a parent, I want to view my child's progress and confidence in each subject and learning outcome, so I can understand their strengths and areas for improvement.*

- [ ] Parents can log in and view a dashboard summarizing their child's progress and confidence (RAG) for each subject and outcome.
- **Acceptance Criteria:** Parents can see up-to-date progress and confidence data for their child in all enrolled subjects.

### Story 26: Parent Receive Actionable Reports and Summaries
**Priority:** MUST
*As a parent, I want to receive clear, actionable reports about my child's learning, so I can support their education and discuss progress with teachers.*

- [ ] Parents can download or receive periodic reports (PDF/online) summarizing their child's progress, strengths, and areas for improvement.
- **Acceptance Criteria:** Parents receive or can access clear, actionable reports for their child.

### Story 27: Parent Monitor Goals and Interventions
**Priority:** SHOULD
*As a parent, I want to see the learning goals my child has set and any interventions or support plans in place, so I can encourage and reinforce these at home.*

- [ ] Parents can view their child's personal learning goals and any active intervention/support plans.
- **Acceptance Criteria:** Parents can access a list of goals and interventions for their child, with clear explanations.

### Story 28: Parent Communication with Teachers
**Priority:** SHOULD
*As a parent, I want to communicate easily with my child's teachers about their progress, concerns, or support needs, so I can be an active partner in their education.*

- [ ] Parents can send and receive messages or schedule meetings with teachers through the platform.
- **Acceptance Criteria:** Parents can initiate and receive communication with teachers regarding their child's progress.

### Story 29: Parent Notifications and Alerts
**Priority:** COULD
*As a parent, I want to receive timely notifications about significant changes in my child's progress, achievements, or areas of concern, so I can respond promptly.*

- [ ] Parents receive notifications for key events (e.g., significant progress drops, achievements, new interventions).
- **Acceptance Criteria:** Parents are notified of important updates about their child's learning.

### Story 30: Parent Support for Multiple Children
**Priority:** MUST
*As a parent with more than one child in the school, I want to view and manage the progress and reports for all my children from a single account, so I can stay informed efficiently.*

- [ ] Parents can switch between profiles for each child linked to their account.
- **Acceptance Criteria:** Parents with multiple children can view and manage each child's data from one login.

### Story 31: Parent Access to Learning Resources
**Priority:** COULD
*As a parent, I want to access recommended learning resources and guidance, so I can help my child with their studies at home.*

- [ ] Parents can view or download resources recommended by teachers for their child.
- **Acceptance Criteria:** Parents can access a curated list of learning resources for their child's subjects.

### Story 32: Parent Privacy and Data Security
**Priority:** MUST
*As a parent, I want assurance that my child's data is secure and that I have control over what information is shared, so I can trust the system.*

- [ ] Parents can review privacy settings and see how their child's data is used and shared.
- **Acceptance Criteria:** Parents can access and adjust privacy settings, and see a clear data usage policy.

### Story 33: Parent Inclusivity and Accessibility
**Priority:** MUST
*As a parent, I want the system to be accessible and easy to use regardless of my technical ability or language, so I can fully engage with my child's learning.*

- [ ] The parent interface meets accessibility standards (WCAG 2.2 AA), supports multiple languages, and is user-tested for ease of use.
- **Acceptance Criteria:** Parents of all backgrounds can use the system effectively, as verified by accessibility and usability testing.

### Story 34: Parent Participation in School Feedback
**Priority:** SHOULD
*As a parent, I want to provide feedback on the system and my child's learning experience, so the school can improve its support for families.*

- [ ] Parents can submit feedback or participate in surveys about the system and their experience.
- **Acceptance Criteria:** Parents can easily provide feedback, and the school can review and act on it.

---

## System-Wide Stories

### Story 35: System Accessibility and Inclusivity
**Priority:** MUST

> **📋 MVP Context:** This story is MVP-critical. For complete MVP pathway, dependencies, and blockers, see [Path to MVP](../../../roadmaps/overview/Path-to-MVP.md).

*As a user, I want the system to be accessible and inclusive, so everyone can use it effectively.*

- [x] **EPIC-4-TASK-024**: Ensure WCAG 2.2 AA compliance.
- [x] **EPIC-4-TASK-025**: Support keyboard navigation, screen readers, accessible color palettes, and clear error messages.
- [ ] **EPIC-4-TASK-026**: User testing with students of diverse needs.
- **Acceptance Criteria:** All UIs pass accessibility checks and user testing feedback is addressed.
- **Status:** IN PROGRESS (Tasks 1-2 complete as of v0.4.35.2+2, Task 3 pending user testing)
- **Dependencies:** Student and teacher UI components must be implemented.

### Story 36: System Feedback and Iteration
**Priority:** SHOULD
*As a product owner, I want to gather feedback from students and teachers, so we can continuously improve the reflection and tracking experience.*

- [x] **EPIC-4-TASK-027**: Set up regular feedback sessions (surveys, interviews, user testing).
- [x] **EPIC-4-TASK-028**: Document feedback and resulting action items.
- [x] **EPIC-4-TASK-029**: Plan for periodic review and iteration.
- **Acceptance Criteria:** Feedback is regularly collected, documented, and used to improve the system.
- **Status:** COMPLETE (as of 2025-07-04T10:00:00Z)

### Story 37: System Documentation & Onboarding
**Priority:** MUST
*As a new user or developer, I want clear documentation and onboarding guides, so I can quickly understand, use, and contribute to the system.*

- [x] **EPIC-4-TASK-030**: Write a user guide for students (login, dashboard, self-assessment, progress)
- [x] **EPIC-4-TASK-031**: Write a user guide for teachers (login, dashboard, class/student progress, feedback)
- [x] **EPIC-4-TASK-032**: Write a user guide for admins (login, admin dashboard, user management, import tool)
- [x] **EPIC-4-TASK-033**: Update or create a comprehensive README.md (setup, test, usage, admin, troubleshooting)
- [x] **EPIC-4-TASK-034**: Create deployment guide (environment setup, database migration, production deployment)
- [x] **EPIC-4-TASK-035**: Document API endpoints and usage examples
- [x] **EPIC-4-TASK-036**: Create accessibility statement and compliance documentation
- [x] **EPIC-4-TASK-037**: Add help/feedback information to user interfaces
- **Acceptance Criteria:** All user roles have clear guides, README covers setup/usage/admin, deployment guide enables new admin deployment, API docs available, accessibility statement present, users know how to get help.
- **Status:** COMPLETE (as of 2025-07-03T17:00:00Z)

---

**Notes:**
- All work should follow Django and DRF best practices.
- Prioritize accessibility, inclusivity, and actionable feedback for students and teachers.
- See Epics 2 and 3 for core data model, API, and specification management.
- This reorganized version uses linear numbering with user types identified in story titles.
