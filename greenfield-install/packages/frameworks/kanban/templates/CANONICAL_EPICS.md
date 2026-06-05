---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-08T23:55:00Z
expires_at: null
housekeeping_policy: keep
---

# Canonical Epics for Kanban Framework

**Purpose:** This document lists the canonical set of epics that are part of the Kanban framework package. These epics represent the standard organizational structure for projects using the Kanban framework.

**Usage:** When adopting the Kanban framework, these canonical epics provide the foundation for organizing work. Projects can add additional epics as needed, but these represent the core framework structure.

> **📚 Complete Reference:** For the complete canonical structure including all epics (1-23+), stories, and tasks with detailed descriptions, see [`COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`](COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md). This document provides an overview of all canonical epics.

---

## Core Framework Epics (1-10)

These epics are part of the ai-dev-kit framework and should be included in all projects. They represent universal needs that almost any category of prospective user will require.

**Core Epics (Always Installed):**
- Epic 1: Project Core
- Epic 2: Workflow Management Framework
- Epic 3: Numbering & Versioning Framework
- Epic 4: Kanban Framework
- Epic 5: FR Implementation
- Epic 6: BR Implementation
- Epic 7: UXR (User Experience Research)
- Epic 8: Codebase Maintenance and Review
- Epic 9: Documentation
- Epic 10: Data Management and Database

**Note:** Epics 1-6 are framework infrastructure epics. Epic 7: UXR (User Experience Research) bridges framework and project work. Epic 8: Codebase Maintenance and Review, Epic 9: Documentation, and Epic 10: Data Management are universal project needs.

---

## Ancillary Epics (11-23)

These epics represent common patterns found in ambitious projects. Use as needed based on project scope, following the chronological adoption order: 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20 → 21 → 22 → 23.

**Ancillary Epics (Users Pick and Choose):**
- Epic 11: User Management and Authentication
- Epic 12: API and Backend Services
- Epic 13: Frontend and User Interface
- Epic 14: Testing and Quality Assurance
- Epic 15: Security
- Epic 16: Performance and Optimization
- Epic 17: Integration and Third-Party Services
- Epic 18: Analytics and Monitoring
- Epic 19: Mobile Application
- Epic 20: Internationalization and Localization
- Epic 21: Architecture Refactoring and Code Quality
- Epic 22: Process Automation and CI/CD
- Epic 23: [Reserved for future expansion]

**Note:** These epics are project-specific and should be selected based on project requirements and scope.

---

## Core Framework Epics (Detailed)

### Epic 1: {PROJECT_NAME} Core

**Purpose:** Core foundational work for the {PROJECT_NAME} project.  
**Scope:** Fundamental infrastructure, core functionality, foundational frameworks, project setup.  
**Status:** Core Framework Epic (always installed)

**Description:**
This epic encompasses the core foundational work for the {PROJECT_NAME} project, including fundamental infrastructure, core functionality, foundational frameworks, and project setup that other epics build upon.

**Key Characteristics:**
- Foundational infrastructure
- Core functionality
- Base frameworks
- Project fundamentals
- Initial project setup

**Typical Stories:**
- Story 1: Project Foundation and Setup
- Story 2: Core Infrastructure
- Story 3: Initial Feature Set

**Integration Points:**
- All other epics build upon Epic 1
- Epic 2 (Workflow Management): Uses Epic 1 infrastructure
- Epic 3 (Versioning): Tracks Epic 1 work with version markers
- Epic 4 (Kanban): Uses Epic 1 structure for Kanban organization

---

### Epic 2: Workflow Management Framework

**Purpose:** Workflow management and automation framework.  
**Scope:** Workflow definitions, execution patterns, automation, and workflow-related tooling.  
**Status:** Core Framework Epic (always installed)

**Description:**
This epic covers workflow management and automation, including workflow definitions, execution patterns, agent-driven workflows, and workflow-related tooling and infrastructure.

**Key Characteristics:**
- Workflow definitions
- Execution patterns
- Automation tooling
- Agent-driven workflows

**Typical Stories:**
- Story 1: Workflow Definitions and Patterns
- Story 2: Workflow Automation

**Integration Points:**
- **Epic 4 (Kanban Framework):** Workflows update Kanban documentation
- **Epic 3 (Versioning):** Workflows manage version bumps
- **Epic 5 (FR Implementation):** Workflows process FRs
- **Epic 6 (BR Implementation):** Workflows process BRs

---

### Epic 3: Numbering & Versioning Framework

**Purpose:** Versioning and numbering schema framework.  
**Scope:** Versioning policies, numbering schemas, version management, and version-related tooling.  
**Status:** Core Framework Epic (always installed)

**Description:**
This epic encompasses versioning and numbering schema frameworks, including versioning policies, numbering schemas (e.g., RC.EPIC.STORY.TASK+BUILD), version management, and version-related tooling.

**Key Characteristics:**
- Versioning policies
- Numbering schemas
- Version management
- Version tooling

**Typical Stories:**
- Story 1: Versioning Policy and Schema
- Story 2: Version Management Integration

**Integration Points:**
- **Epic 4 (Kanban Framework):** Version markers track Kanban work
- **Epic 2 (Workflow Management):** Workflows use versioning schema
- **Epic 5 (FR Implementation):** FRs tracked with version markers
- **Epic 6 (BR Implementation):** BRs tracked with version markers

---

### Epic 4: Kanban Framework

**Purpose:** Kanban system implementation and governance.  
**Scope:** Kanban policies, templates, intake processes, and Kanban-related tooling.  
**Status:** Core Framework Epic (always installed)

**Description:**
This epic covers the Kanban system implementation, including Kanban governance policies, templates, FR/BR intake processes, and Kanban-related tooling and infrastructure.

**Key Characteristics:**
- Kanban governance
- Templates and patterns
- Intake processes
- Kanban tooling

**Typical Stories:**
- Story 1: Kanban Board Setup
- Story 2: FR/BR Intake Process

**Integration Points:**
- **Epic 2 (Workflow Management):** Workflows update Kanban docs
- **Epic 3 (Versioning):** Kanban uses version markers
- **Epic 5 (FR Implementation):** Kanban processes FRs
- **Epic 6 (BR Implementation):** Kanban processes BRs

---

### Epic 5: FR Implementation

**Purpose:** Feature Request implementation and management.  
**Scope:** Feature Request intake, processing, implementation workflows, and FR-related tooling.  
**Status:** Core Framework Epic (always installed)

**Description:**
This epic encompasses Feature Request (FR) implementation and management, including FR intake processes, FR processing workflows, FR implementation patterns, and FR-related tooling. This epic provides the organizational structure for all feature development work that originates from Feature Requests.

**Key Characteristics:**
- FR intake processes (converting FRs to Kanban tasks)
- FR processing workflows (prioritization, analysis, design)
- FR implementation patterns (development, testing, documentation)
- FR tooling (automation, tracking, reporting)

**Typical Stories:**
- Story 1: FR Intake and Processing Workflow
- Story 2: FR Prioritization and Planning
- Story 3: FR Implementation Patterns and Best Practices
- Story 4: FR Tracking and Reporting
- Story 5: FR Automation and Tooling

**Integration Points:**
- **Epic 4 (Kanban Framework):** Uses Kanban intake processes to convert FRs to tasks
- **Epic 2 (Workflow Management):** May use workflows for FR processing automation
- **Epic 3 (Versioning):** Tracks FR implementation with version markers
- **Epic 7 (UXR):** UXR insights inform Feature Requests

---

### Epic 6: BR Implementation

**Purpose:** Bug Report implementation and management.  
**Scope:** Bug Report intake, processing, bug fix workflows, and BR-related tooling.  
**Status:** Core Framework Epic (always installed)

**Description:**
This epic covers Bug Report (BR) implementation and management, including BR intake processes, BR processing workflows, bug fix patterns, and BR-related tooling. This epic provides the organizational structure for all bug fix work that originates from Bug Reports.

**Key Characteristics:**
- BR intake processes (converting BRs to Kanban tasks)
- BR processing workflows (triage, prioritization, assignment)
- Bug fix patterns (reproduction, root cause analysis, testing)
- BR tooling (automation, tracking, reporting)

**Typical Stories:**
- Story 1: BR Intake and Triage Workflow
- Story 2: BR Prioritization and Assignment
- Story 3: Bug Fix Patterns and Best Practices
- Story 4: BR Tracking and Reporting
- Story 5: BR Automation and Tooling

**Integration Points:**
- **Epic 4 (Kanban Framework):** Uses Kanban intake processes to convert BRs to tasks
- **Epic 2 (Workflow Management):** May use workflows for BR processing automation
- **Epic 3 (Versioning):** Tracks bug fixes with version markers
- **Epic 7 (UXR):** UXR findings may identify usability issues tracked as Bug Reports
- **Epic 8 (Codebase Maintenance):** May convert IDE-flagged issues to Bug Reports when appropriate

---

### Epic 7: UXR (User Experience Research)

**Purpose:** User experience research, user feedback, and user-centered design.  
**Scope:** User research, usability testing, user feedback collection, persona development, user journey mapping, and UX insights.  
**Status:** Core Framework Epic (always installed)

**Description:**
This epic encompasses user experience research activities, including user research, usability testing, user feedback collection, persona development, user journey mapping, and UX insights. This epic provides the organizational structure for understanding users and ensuring products meet user needs effectively.

**Key Characteristics:**
- User research and interviews
- Usability testing and user testing
- User feedback collection and analysis
- Persona development and user modeling
- User journey mapping
- UX insights and recommendations

**Typical Stories:**
- Story 1: User Research and Discovery
- Story 2: Usability Testing and Validation
- Story 3: User Feedback Collection and Analysis
- Story 4: User Journey Mapping and Experience Design
- Story 5: UX Insights and Recommendations

**Integration Points:**
- **Epic 4 (Kanban Framework):** Uses Kanban for tracking UXR tasks and research activities
- **Epic 5 (FR Implementation):** UXR insights inform Feature Requests
- **Epic 6 (BR Implementation):** UXR findings may identify usability issues tracked as Bug Reports
- **Epic 2 (Workflow Management):** May use workflows for UXR process automation

---

### Epic 8: Codebase Maintenance and Review

**Purpose:** Codebase maintenance, quality assurance, and continuous improvement.  
**Scope:** Code review processes, maintenance tasks, quality standards, IDE-flagged issues, and codebase health monitoring.  
**Status:** Core Framework Epic (always installed)

**Description:**
This epic encompasses codebase maintenance and review activities, including addressing IDE-flagged issues (errors, warnings, info), code quality standards, maintenance workflows, and continuous codebase health monitoring. This epic provides the organizational structure for ongoing maintenance work that keeps the codebase healthy and maintainable.

**Key Characteristics:**
- IDE-flagged issue resolution (errors, warnings, info)
- Code quality standards and enforcement
- Maintenance workflows and processes
- Codebase health monitoring and metrics
- Continuous improvement practices

**Typical Stories:**
- Story 1: Codebase Maintenance Tasks
- Story 2: Code Review Standards and Processes
- Story 3: Code Quality Metrics and Monitoring
- Story 4: Maintenance Automation and Tooling

**Integration Points:**
- **Epic 4 (Kanban Framework):** Uses Kanban for tracking maintenance tasks
- **Epic 2 (Workflow Management):** May use workflows for maintenance automation
- **Epic 3 (Versioning):** Tracks maintenance work with version markers
- **Epic 6 (BR Implementation):** May convert IDE-flagged issues to Bug Reports when appropriate

---

## Ancillary Epics (Detailed)

### Epic 9: User Management and Authentication

**Purpose:** User management, authentication, and authorization.  
**Scope:** User accounts, authentication, authorization, user profiles, session management.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses user management, authentication, and authorization activities, including user accounts, authentication systems, authorization and permissions, user profiles, and session management.

**Key Characteristics:**
- User authentication (login, registration, password management)
- User authorization and permissions
- User profile management
- Session management

**Typical Stories:**
- Story 1: User Authentication System
- Story 2: User Authorization and Permissions
- Story 3: User Profile Management

**Integration Points:**
- **Epic 10 (Data Management):** User data stored in database
- **Epic 11 (API):** User management APIs
- **Epic 12 (Frontend):** User authentication UI
- **Epic 15 (Security):** Security measures for authentication

---

### Epic 10: Data Management and Database

**Purpose:** Data management, database design, and data operations.  
**Scope:** Database schema, migrations, data access layer, data validation, data integrity.  
**Status:** Core+ Epic (recommended by default - universal need)

**Description:**
This epic encompasses data management, database design, and data operations, including database schema design, migrations, data access layer implementation, data validation, and data integrity management.

**Key Characteristics:**
- Database schema design
- Data migrations
- Data access layer (repositories, ORMs)
- Data validation
- Data integrity

**Typical Stories:**
- Story 1: Database Schema Design
- Story 2: Data Access Layer
- Story 3: Data Migration and Seeding

**Integration Points:**
- **Epic 9 (User Management):** User data storage
- **Epic 11 (API):** API data access
- **Epic 13 (Testing):** Database testing
- **Epic 14 (Deployment):** Database deployment

---

### Epic 11: API and Backend Services

**Purpose:** API design, implementation, and backend service architecture.  
**Scope:** REST/GraphQL APIs, service layer, business logic, API documentation, API versioning.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses API design, implementation, and backend service architecture, including REST/GraphQL APIs, service layer implementation, business logic, API documentation, and API versioning.

**Key Characteristics:**
- API design and architecture
- API implementation
- Business logic layer
- API documentation
- API versioning

**Typical Stories:**
- Story 1: API Design and Architecture
- Story 2: API Implementation
- Story 3: API Documentation and Testing

**Integration Points:**
- **Epic 10 (Data Management):** API accesses data layer
- **Epic 12 (Frontend):** Frontend consumes APIs
- **Epic 13 (Testing):** API testing
- **Epic 15 (Security):** API security measures

---

### Epic 12: Frontend and User Interface

**Purpose:** Frontend development, UI components, and user experience.  
**Scope:** UI framework, components, styling, responsive design, user interactions.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses frontend development, UI components, and user experience, including UI framework setup, component development, styling, responsive design, and user interactions.

**Key Characteristics:**
- UI framework setup
- Component development
- Styling and theming
- Responsive design
- User interactions

**Typical Stories:**
- Story 1: UI Framework Setup
- Story 2: Core UI Components
- Story 3: User Interface Implementation

**Integration Points:**
- **Epic 11 (API):** Frontend consumes APIs
- **Epic 7 (UXR):** UX research informs frontend design
- **Epic 13 (Testing):** Frontend testing
- **Epic 16 (Performance):** Frontend performance optimization

---

### Epic 13: Testing and Quality Assurance

**Purpose:** Testing infrastructure, test coverage, and quality assurance processes.  
**Scope:** Unit tests, integration tests, E2E tests, test automation, quality metrics.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses testing infrastructure, test coverage, and quality assurance processes, including unit tests, integration tests, end-to-end tests, test automation, and quality metrics.

**Key Characteristics:**
- Testing framework setup
- Test implementation (unit, integration, E2E)
- Test automation
- Quality metrics
- CI/CD integration

**Typical Stories:**
- Story 1: Testing Infrastructure Setup
- Story 2: Test Implementation
- Story 3: Test Automation and CI/CD Integration

**Integration Points:**
- **Epic 14 (Deployment):** Tests integrated with CI/CD
- **Epic 23 (CI/CD):** Test automation in pipelines
- **Epic 8 (Codebase Maintenance):** Quality metrics monitoring

---

### Epic 14: Deployment and DevOps

**Purpose:** Deployment, infrastructure, and DevOps practices.  
**Scope:** Deployment pipelines, infrastructure as code, monitoring, logging, scaling.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses deployment, infrastructure, and DevOps practices, including deployment pipelines, infrastructure as code, monitoring, logging, and scaling.

**Key Characteristics:**
- Deployment pipelines
- Infrastructure as code
- Monitoring and logging
- Scaling strategies
- DevOps practices

**Typical Stories:**
- Story 1: Deployment Pipeline Setup
- Story 2: Infrastructure Setup
- Story 3: Monitoring and Logging

**Integration Points:**
- **Epic 23 (CI/CD):** Deployment automation
- **Epic 19 (Analytics):** Deployment metrics
- **Epic 16 (Performance):** Performance monitoring

---

### Epic 15: Security

**Purpose:** Security measures, vulnerability management, and security best practices.  
**Scope:** Security audits, vulnerability scanning, security policies, encryption, secure coding.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses security measures, vulnerability management, and security best practices, including security audits, vulnerability scanning, security policies, encryption, and secure coding practices.

**Key Characteristics:**
- Security infrastructure
- Vulnerability management
- Security policies
- Encryption
- Secure coding practices

**Typical Stories:**
- Story 1: Security Infrastructure
- Story 2: Vulnerability Management
- Story 3: Security Best Practices

**Integration Points:**
- **Epic 9 (User Management):** Authentication security
- **Epic 11 (API):** API security
- **Epic 14 (Deployment):** Deployment security

---

### Epic 16: Performance and Optimization

**Purpose:** Performance optimization, caching, and scalability improvements.  
**Scope:** Performance profiling, caching strategies, database optimization, code optimization.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses performance optimization, caching, and scalability improvements, including performance profiling, caching strategies, database optimization, and code optimization.

**Key Characteristics:**
- Performance analysis
- Performance optimization
- Caching strategies
- Scalability improvements
- Performance monitoring

**Typical Stories:**
- Story 1: Performance Analysis
- Story 2: Performance Optimization
- Story 3: Scalability Improvements

**Integration Points:**
- **Epic 10 (Data Management):** Database optimization
- **Epic 11 (API):** API performance
- **Epic 12 (Frontend):** Frontend performance
- **Epic 14 (Deployment):** Scaling infrastructure

---

### Epic 17: Integration and Third-Party Services

**Purpose:** Integration with external services and third-party APIs.  
**Scope:** API integrations, webhooks, payment processing, email services, analytics.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses integration with external services and third-party APIs, including API integrations, webhooks, payment processing, email services, and analytics integrations.

**Key Characteristics:**
- Third-party service integration
- Webhook implementation
- Payment processing (if applicable)
- External API integration
- Integration testing

**Typical Stories:**
- Story 1: Third-Party Service Integration
- Story 2: Webhook Implementation
- Story 3: Payment Processing (if applicable)

**Integration Points:**
- **Epic 11 (API):** External API integration
- **Epic 19 (Analytics):** Analytics service integration
- **Epic 15 (Security):** Integration security

---

### Epic 18: Documentation

**Purpose:** Project documentation, user guides, and developer documentation.  
**Scope:** API documentation, user manuals, developer guides, architecture documentation.  
**Status:** Core+ Epic (recommended by default - universal need)

**Description:**
This epic encompasses project documentation, user guides, and developer documentation, including API documentation, user manuals, developer guides, and architecture documentation.

**Key Characteristics:**
- Developer documentation
- User documentation
- API documentation
- Architecture documentation
- Documentation maintenance

**Typical Stories:**
- Story 1: Developer Documentation
- Story 2: User Documentation
- Story 3: API Documentation

**Integration Points:**
- **Epic 11 (API):** API documentation
- **Epic 4 (Kanban):** Documentation workflow
- **Epic 2 (Workflow Management):** Documentation automation

---

### Epic 19: Analytics and Monitoring

**Purpose:** Analytics, metrics, and business intelligence.  
**Scope:** User analytics, business metrics, reporting, dashboards, data visualization.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses analytics, metrics, and business intelligence, including user analytics, business metrics, reporting, dashboards, and data visualization.

**Key Characteristics:**
- Analytics infrastructure
- Metrics and reporting
- Business intelligence
- Data visualization
- Privacy compliance

**Typical Stories:**
- Story 1: Analytics Infrastructure
- Story 2: Metrics and Reporting
- Story 3: Business Intelligence

**Integration Points:**
- **Epic 10 (Data Management):** Analytics data storage
- **Epic 12 (Frontend):** Analytics tracking
- **Epic 14 (Deployment):** Monitoring integration

---

### Epic 20: Mobile Application

**Purpose:** Mobile application development and mobile-specific features.  
**Scope:** Mobile app development, mobile UI/UX, mobile APIs, app store deployment.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses mobile application development and mobile-specific features, including mobile app development, mobile UI/UX, mobile APIs, and app store deployment.

**Key Characteristics:**
- Mobile app foundation
- Mobile UI implementation
- Mobile app deployment
- App store management
- Mobile-specific features

**Typical Stories:**
- Story 1: Mobile App Foundation
- Story 2: Mobile UI Implementation
- Story 3: Mobile App Deployment

**Integration Points:**
- **Epic 11 (API):** Mobile APIs
- **Epic 12 (Frontend):** Mobile UI patterns
- **Epic 14 (Deployment):** App store deployment

---

### Epic 21: Internationalization and Localization

**Purpose:** Multi-language support and localization.  
**Scope:** Translation, locale management, cultural adaptation, RTL support, language selection at setup.  
**Status:** Ancillary Epic (project-specific canonical pattern)

**Description:**
This epic encompasses internationalization (i18n) and localization (l10n) activities, including language selection at setup, translation infrastructure, translation management, and cultural adaptation. This epic provides the organizational structure for making the framework accessible to users worldwide, supporting multiple languages and cultural preferences.

**Key Characteristics:**
- Language selection at setup (UK/US English + international)
- Translation infrastructure and file structure
- Translation workflow and management
- Cultural adaptation (date/time/number formatting)
- RTL (Right-to-Left) support for Arabic/Hebrew
- Locale detection and switching

**Typical Stories:**
- Story 0: Language Selection at Setup (MVP - UK/US English)
- Story 1: Internationalization Infrastructure
- Story 2: Translation and Localization
- Story 3: Cultural Adaptation

**Integration Points:**
- **Epic 12 (Frontend):** UI localization
- **Epic 18 (Documentation):** Documentation translation
- **Epic 4 (Kanban):** Localized Kanban templates

---

## Core+ Epics (22-23)

These epics are also universal needs and are recommended by default, but remain in the extended range to avoid renumbering disruption.

### Epic 22: Architecture Refactoring and Code Quality

**Purpose:** Systematic refactoring to improve architecture, maintainability, and code quality.  
**Scope:** Repository pattern, service-layer refactoring, contract enforcement, SRP, code quality improvements.  
**Status:** Core+ Epic (recommended by default - universal need)

**Description:**
This epic encompasses systematic refactoring to improve architecture, maintainability, and code quality, including repository pattern implementation, service-layer refactoring, contract enforcement, Single Responsibility Principle (SRP), and code quality improvements.

**Key Characteristics:**
- Core contracts (protocols/interfaces)
- Repository pattern implementation
- Service layer refactoring
- Contract enforcement system
- Code quality improvements

**Typical Stories:**
- Story 1: Define Core Contracts (Protocols/Interfaces)
- Story 2: Repository Pattern Implementation
- Story 3: Service Layer Refactoring
- Story 4: Contract Enforcement System
- Story 5: Code Quality Improvements

**Integration Points:**
- **Epic 10 (Data Management):** Repository pattern for data access
- **Epic 11 (API):** Service layer refactoring
- **Epic 8 (Codebase Maintenance):** Code quality improvements

---

### Epic 23: Process Automation and CI/CD

**Purpose:** Establish automated, robust development workflows.  
**Scope:** CI/CD pipelines, pre-commit hooks, automated rule enforcement, testing infrastructure, quality gates.  
**Status:** Core+ Epic (recommended by default - universal need)

**Description:**
This epic encompasses process automation and CI/CD, including CI/CD pipelines, pre-commit hooks, automated rule enforcement, testing infrastructure, and quality gates.

**Key Characteristics:**
- CI/CD pipeline setup
- Pre-commit hooks
- Automated rule enforcement
- Testing infrastructure
- Quality gates

**Typical Stories:**
- Story 1: CI/CD Pipeline Setup
- Story 2: Pre-commit Hooks and Automation
- Story 3: Automated Testing Integration
- Story 4: Quality Gates and Enforcement
- Story 5: Automated Dependency Management

**Integration Points:**
- **Epic 2 (Workflow Management):** CI/CD workflows
- **Epic 13 (Testing):** Automated test execution
- **Epic 14 (Deployment):** Deployment automation
- **Epic 8 (Codebase Maintenance):** Automated quality checks

---

## Epic Ordering Rationale

**Core Framework Epics (1-8):**
1. **Epic 1: Project Core** - Foundational epic that establishes the base
2. **Epic 2: Workflow Management** - Operational framework for workflows
3. **Epic 3: Versioning** - Operational framework for versioning
4. **Epic 4: Kanban** - Operational framework for Kanban
5. **Epic 5: FR Implementation** - Implementation epic that supports Kanban (FRs come first)
6. **Epic 6: BR Implementation** - Implementation epic that supports Kanban (BRs follow FRs)
7. **Epic 7: UXR** - User research epic that bridges framework and project work
8. **Epic 8: Codebase Maintenance** - Universal maintenance need

**Core+ Epics (10, 18, 22, 23):**
- **Epic 10:** Data Management - Universal data need (Epic 9 reserved for User Management)
- **Epic 18:** Documentation - Universal documentation need
- **Epic 22:** Architecture Refactoring - Universal code quality need
- **Epic 23:** Process Automation & CI/CD - Universal development process need

**Ancillary Epics (9, 11-17, 19-21):**
- **Epic 9:** User Management and Authentication (if multi-user app)
- **Epics 11-17:** API, Frontend, Testing, Deployment, Security, Performance, Integration
- **Epics 19-21:** Analytics, Mobile, Internationalization

**Ordering Principles:**
- Foundational epics come first (Epic 1)
- Operational frameworks follow (Epics 2-4)
- Implementation epics that support frameworks come next (Epics 5-6)
- User research epic (Epic 7) bridges framework and project work
- Maintenance epic (Epic 8) represents ongoing operational work
- Core+ epics (10, 18, 22, 23) are universal needs recommended by default
- Ancillary epics (9, 11-17, 19-21) are added based on project needs
- FR Implementation (Epic 5) comes before BR Implementation (Epic 6) because Feature Requests typically precede Bug Reports in the intake flow
- Chronological adoption order: Core (1-8) → Core+ (10, 18, 22, 23) → Ancillary (9, 11-17, 19-21)

---

## How to Use Canonical Epics

### Adoption Steps

1. **Start with Core Epics (1-8):** Always include these
   - Epics 1-6: Framework infrastructure
   - Epic 7: User Experience Research (UXR) - bridges framework and project work
   - Epic 8: Codebase Maintenance and Review - universal maintenance need

2. **Add Core+ Epics (10, 18, 22, 23):** Recommended by default
   - Epic 10: Data Management and Database (universal need)
   - Epic 18: Documentation (universal need)
   - Epic 22: Architecture Refactoring and Code Quality (universal need)
   - Epic 23: Process Automation and CI/CD (universal need)

3. **Add Ancillary Epics (9, 11-17, 19-21):** Add based on project needs
   - Epic 9: User Management and Authentication (if multi-user app)
   - Epics 11-17: API, Frontend, Testing, Deployment, Security, Performance, Integration
   - Epics 19-21: Analytics, Mobile, Internationalization

4. **Customize:** Adapt epic names and descriptions to your project's specific context
   - Keep the core purpose and scope aligned with canonical definitions
   - Adjust terminology to match your domain
   - Maintain the logical ordering

5. **Extend:** Add additional project-specific epics as needed
   - Start numbering from Epic 24+ (canonical epics are 1-23)
   - Follow chronological adoption order when possible

### Customization Examples

**Example 1: Software Product**
- Epic 1: Product Core → "Application Core"
- Epic 2: Workflow Management → "Process Automation"
- Epic 3: Numbering & Versioning → "Release Management"
- Epic 4: Kanban Framework → "Project Management"
- Epic 5: FR Implementation → "Feature Development"
- Epic 6: BR Implementation → "Bug Fixes"
- Epic 7: UXR (User Experience Research) → "User Research & UX"
- Epic 8: Codebase Maintenance → "Code Quality & Maintenance"
- Epic 9: User Management (if multi-user)
- Epic 10: Data Management
- Epic 11: API & Backend
- Epic 12: Frontend & UI

**Example 2: Framework Package**
- Epic 1: Framework Core → "Framework Foundation"
- Epic 2: Workflow Management → "Workflow Engine"
- Epic 3: Numbering & Versioning → "Versioning System"
- Epic 4: Kanban Framework → "Task Management"
- Epic 5: FR Implementation → "Feature Requests"
- Epic 6: BR Implementation → "Issue Resolution"
- Epic 7: UXR (User Experience Research) → "User Research & UX"
- Epic 8: Codebase Maintenance → "Code Quality & Maintenance"
- Epic 18: Documentation
- Epic 22: Architecture Refactoring
- Epic 23: CI/CD

---

## Adding New Canonical Epics

When an epic pattern proves reusable across multiple projects, it should be added to this document and the comprehensive structure:

1. **Identify Pattern:** Epic appears in multiple projects or represents a common organizational need
   - Pattern must appear in at least 3 different projects
   - Pattern must represent a fundamental organizational structure
   - Pattern must be reusable across different domains

2. **Document Pattern:** Create entry in this document and `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` with:
   - Epic number (following canonical order, after Epic 23)
   - Purpose (clear, concise statement)
   - Scope (what's included/excluded)
   - Key characteristics (distinguishing features)
   - Typical stories (common story patterns)
   - Integration points (how it relates to other canonical epics)
   - Ordering rationale (why it comes in this position)

3. **Update Framework:** Add to Kanban framework documentation
   - Update `CANONICAL_EPICS.md` (this document)
   - Update `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
   - Update `README.md` with new epic count
   - Update intake guides to reference new epic
   - Update examples to show new epic usage

4. **Update References:** Update all references to canonical epics in intake guides and other documentation
   - `FR_BR_INTAKE_GUIDE.md`
   - `FR_BR_INTAKE_AGENT_GUIDE.md`
   - `FR_BR_INTAKE_USER_GUIDE.md`
   - `FR_BR_INTAKE_QUICK_REFERENCE.md`
   - Any other framework documentation

---

## References

- **Complete Structure:** [`COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`](COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md) - Complete canonical structure with all epics, stories, and tasks
- **Epic Template:** [`EPIC_TEMPLATE.md`](EPIC_TEMPLATE.md) - Template for creating epic documents
- **Story Template:** [`STORY_TEMPLATE.md`](STORY_TEMPLATE.md) - Template for creating story documents
- **Kanban Framework README:** [`README.md`](../README.md) - Complete Kanban framework documentation

---

**Last Updated:** 2025-12-10  
**Version:** 2.0  
**Maintained By:** Kanban Framework Team  
**Related:** BR-005 (Kanban Framework Epic Structure Gap)
