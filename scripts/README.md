# Scripts Directory

This directory contains **dev-kit project utilities** organized by purpose.

## Directory Structure

- **`internal/`** - Dev-kit-specific utility scripts (not for adoption)
- **`documentation/`** - Documentation maintenance and health scripts
- **`frameworks/`** - Framework package build/publish/health monitoring scripts

## Framework Scripts (Canonical)

**Core workflow scripts** live in the framework packages:
- `packages/frameworks/workflow mgt/scripts/` - RW/UKW/CMW validators, converters, changelog scripts
- `packages/frameworks/kanban/scripts/` - Kanban framework installation, migration, template generation

These are the **canonical scripts** that adopters should copy or reference.

## Project Utilities

Scripts in this directory (`scripts/`) are **dev-kit project utilities**:
- Framework package build/publish workflows
- Documentation health monitoring
- Internal tooling (CLI validation, task scanning)

These are useful for maintaining ai-dev-kit but are **not part of the framework** that adopters install.
