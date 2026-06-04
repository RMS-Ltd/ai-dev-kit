"""
Documentation Update Scripts

Automated documentation update scripts for various trigger types.

Part of: Epic 5, Story 3 - Documentation Automation
Task: E5:S03:T01 - Create automated documentation update scripts
"""

from .update_version_references import update_version_references
from .update_cross_references import update_cross_references
from .update_metadata import update_metadata
from .validate_links import validate_links, fix_broken_links
from .sync_documentation import sync_documentation

__all__ = [
    'update_version_references',
    'update_cross_references',
    'update_metadata',
    'validate_links',
    'fix_broken_links',
    'sync_documentation',
]

