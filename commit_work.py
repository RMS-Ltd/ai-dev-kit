#!/usr/bin/env python3
"""
Emergency commit script to bypass terminal hang issues.
Commits all current work with proper release metadata.
"""

import subprocess
import os
from pathlib import Path

def run_git_command(cmd):
    """Run git command and return result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd="/Users/rms/Documents/projects/ai-dev-kit")
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def main():
    """Commit all current work"""
    os.chdir("/Users/rms/Documents/projects/ai-dev-kit")
    
    # Check git status
    success, stdout, stderr = run_git_command("git status --porcelain")
    if not success:
        print(f"ERROR: Failed to get git status: {stderr}")
        return
    
    if not stdout.strip():
        print("No changes to commit")
        return
    
    print("Changes to commit:")
    print(stdout)
    
    # Add all changes
    success, stdout, stderr = run_git_command("git add .")
    if not success:
        print(f"ERROR: Failed to add changes: {stderr}")
        return
    
    print("Changes added to staging area")
    
    # Create commit with comprehensive message
    commit_msg = """Release v0.6.6.3+1: E6:S06:T03+1 - Apple SDK License Blocking Issue Investigation Created

CRITICAL RECOVERY: Manual commit to recover untracked work due to terminal hang issues.

BR-040 Created:
- Apple SDK License Blocking Issue investigation with detailed problem analysis
- 4-phase investigation plan (Problem ID, Root Cause, Solution Dev, Implementation)
- Timeline: 1-2 weeks investigation, 2-4 weeks resolution

E6:S06:T03 Created:
- Comprehensive task document with implementation strategy
- Risk assessment and resource requirements
- Success criteria and acceptance criteria

RW -k Execution:
- Version updated to 0.6.6.3+1 (E6:S06:T03+1)
- CHANGELOG.md updated with comprehensive entry
- Kanban board updated with new HIGH priority task
- Changelog archive created: CHANGELOG_v0.6.6.3+1_apple-sdk-investigation.md

Files Modified:
- src/fynd_deals/version.py (version bump)
- CHANGELOG.md (new release entry)
- docs/project-management/kanban/kanban-board.md (task added)

Files Created:
- docs/project-management/kanban/fr-br/BR-040-apple-sdk-license-blocking-issue.md
- docs/project-management/kanban/epics/Epic-6/Story-006-feature-requests/T03-apple-sdk-license-blocking-issue.md
- docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.3+1_apple-sdk-investigation.md

Impact:
- Apple platform users blocked from using ai-dev-kit due to SDK license issues
- HIGH priority task created to investigate and resolve blocking issue
- Comprehensive investigation plan with clear timeline and deliverables

This commit recovers all work from 2026-03-10 session that could not be committed
due to persistent terminal hang issues preventing normal git operations."""
    
    success, stdout, stderr = run_git_command(f'git commit -m "{commit_msg}"')
    if not success:
        print(f"ERROR: Failed to commit: {stderr}")
        return
    
    print("✅ SUCCESS: All work committed!")
    print(f"Commit hash: {stdout.strip() if stdout else 'Unknown'}")
    
    # Show commit details
    success, stdout, stderr = run_git_command("git log --oneline -1")
    if success:
        print(f"Latest commit: {stdout.strip()}")

if __name__ == "__main__":
    main()
