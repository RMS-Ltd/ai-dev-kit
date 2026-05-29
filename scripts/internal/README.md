# Internal Scripts

This directory contains **dev-kit-specific utility scripts** that are not part of the framework packages.

**Purpose:** These scripts support internal ai-dev-kit operations (e.g., CLI validation, task scanning) but are not intended for adoption by other projects.

**Scripts:**
- `scan_tasks_for_moscow.py` - Scan task documents for MoSCOW prioritization (UKW helper)
- `validate_cli.py` - Validation script for ai-dev-kit CLI tool

**Note:** Framework-level scripts (validators, converters, workflow scripts) live in `packages/frameworks/workflow mgt/scripts/` and `packages/frameworks/kanban/scripts/`.
