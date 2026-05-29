---
title: "BR-057: fr-br-intake.yml invalid workflow YAML (block scalar indentation)"
description: "GitHub rejected .github/workflows/fr-br-intake.yml due to YAML syntax error; root cause was dedented lines inside script: | block"
status: "COMPLETE"
priority: "MEDIUM"
type: "bug"
date_created: "2026-03-20"
date_completed: "2026-03-20"
assignee: "[TBD]"
reporter: "Cursor Agent"
labels: ["bug", "github-actions", "yaml", "fr-br-intake", "retrospective"]
---

# Bug Report BR-057: fr-br-intake workflow YAML (block scalar indentation)

## Bug Summary

GitHub reported **Invalid workflow file** for `.github/workflows/fr-br-intake.yml` (error referenced ~line 131). The workflow file failed YAML parsing because several lines inside the `actions/github-script` `script: |` block were not indented relative to `script:`, so YAML treated them as new top-level constructs instead of part of the literal string.

## Environment

- **Repository:** earlution/ai-dev-kit  
- **Platform:** GitHub Actions (workflow validation)  
- **File:** `.github/workflows/fr-br-intake.yml`  
- **Date reported (retrospective):** 2026-03-20  

## Description

### What went wrong

Under a literal block scalar (`script: |`), **every** content line must be indented **more** than the key that opens the block (`script:`). Lines 131–139 (markdown continuation inside the `body` template literal) were flush-left (zero indent). That **terminated** the block scalar early; YAML then interpreted lines starting with `- ` as list items at the wrong level, producing a syntax error (GitHub surfaced it around line 131).

### Expected vs actual

- **Expected:** Entire JavaScript `script` body is one YAML string; workflow loads in GitHub.  
- **Actual:** Invalid YAML; workflow file rejected.

### Affected component

- **Primary:** CI/CD — FR/BR/UXR/FB issue intake automation (`fr-br-intake.yml`)

## Root cause

Incorrect indentation inside a YAML literal block scalar (`|`). Not a GitHub Actions expression bug; pure YAML structure.

## Resolution (implemented)

Re-indented the continuation lines (including blank lines and markdown bullets) to match the surrounding `script: |` content so they remain inside the block scalar. Local validation: `yaml.safe_load` succeeds on the full workflow file.

## Traceability

- **Kanban task:** E7:S06:T17 — [`T17-BR057-fr-br-intake-yaml-retrospective.md`](../epics/Epic-7/Story-006-post-windsurf-project-review/T17-BR057-fr-br-intake-yaml-retrospective.md)

## Prevention

- When editing multiline `script: |` or `run: |` blocks, keep all continuation lines indented past the block key; avoid paste that strips leading spaces.  
- Optional: run `actionlint` or YAML parse check before push.
