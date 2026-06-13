---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 1, Task 1: Static analysis scaffold (CodeQL)

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** [YYYY-MM-DD] (v0.8.1.1+0 – Kanban v3.5 template)  
**Version:** v0.8.1.1+0  
**Code:** E08S01T01

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`  
**Value:** `E08:S01:T01`

---

## Overview

Static analysis scaffold for {PROJECT_NAME}: CodeQL workflow definition, language matrix, and baseline query configuration. Execution runs in **E06** CI; this task owns the analysis config and maintainer docs.

---

## Acceptance Criteria

- [ ] `.github/workflows/codeql.yml` (or equivalent) present and documented
- [ ] CodeQL config / query suite appropriate for stack
- [ ] Linked from story checklist and **E06:S01** CI scaffold
