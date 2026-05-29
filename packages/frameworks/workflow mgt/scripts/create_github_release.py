#!/usr/bin/env python3
"""
Create or update GitHub release using SemVer tag.

This script creates or updates a GitHub release for the SemVer tag,
ensuring the release uses the external-facing SemVer version instead
of the internal version.
"""

import os
import sys
import argparse
import re
import requests
import subprocess
from typing import Optional, Dict
from pathlib import Path

# Add semver_converter to path for strategy detection
script_dir = Path(__file__).parent
sys.path.insert(0, str(script_dir / "version"))

try:
    from semver_converter import get_rw_tag_info, get_semver_mapping_strategy
except ImportError:
    # Fallback if semver_converter not available
    def get_semver_mapping_strategy() -> str:
        return "registry"
    
    def get_rw_tag_info(internal_version: str) -> Dict[str, str]:
        return {
            "strategy": "registry",
            "primary_tag": f"v{internal_version}",
            "internal_tag": None,
            "semver_full": None,
            "tag_message": f"Release {internal_version}"
        }

# Load .env.local if it exists
def load_env_local():
    """Load environment variables from .env.local file."""
    env_local = Path('.env.local')
    if not env_local.exists():
        # Try project root
        project_root = Path(__file__).parent.parent.parent.parent.parent
        env_local = project_root / '.env.local'
    
    if env_local.exists():
        try:
            with open(env_local, 'r') as f:
                for line in f:
                    line = line.strip()
                    # Skip comments and empty lines
                    if not line or line.startswith('#'):
                        continue
                    # Parse KEY=VALUE format
                    if '=' in line:
                        key, value = line.split('=', 1)
                        key = key.strip()
                        value = value.strip().strip('"').strip("'")
                        # Only set if not already in environment
                        if key and value and key not in os.environ:
                            os.environ[key] = value
        except Exception as e:
            # Silently fail - don't break if .env.local has issues
            pass

# Load .env.local before checking for environment variables
load_env_local()


def get_default_repo() -> str:
    """Extract owner/repo from git remote origin URL."""
    try:
        result = subprocess.run(
            ["git", "remote", "get-url", "origin"],
            capture_output=True,
            text=True,
            check=True,
            cwd=Path(__file__).parent.parent.parent.parent.parent
        )
        remote_url = result.stdout.strip()
        # Parse https://github.com/owner/repo.git or git@github.com:owner/repo.git
        if remote_url.startswith("https://github.com/"):
            parts = remote_url.replace("https://github.com/", "").removesuffix("/").removesuffix(".git").split("/")
            if len(parts) >= 2:
                return f"{parts[-2]}/{parts[-1]}"
        elif remote_url.startswith("git@github.com:"):
            parts = remote_url.replace("git@github.com:", "").removesuffix(".git").split("/")
            if len(parts) >= 2:
                return f"{parts[-2]}/{parts[-1]}"
    except Exception:
        pass
    # Fallback to hardcoded default
    return "earlution/ai-dev-kit"


def get_release_by_tag(github_token: str, repo: str, tag: str, verbose: bool = False) -> Optional[Dict]:
    """Get existing release by tag name."""
    url = f"https://api.github.com/repos/{repo}/releases/tags/{tag}"
    headers = {
        "Authorization": f"Bearer {github_token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    if verbose:
        print(f"   Checking for existing release: {tag}")
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 404:
        return None
    elif response.status_code != 200:
        print(f"⚠️  Warning: Failed to check for release (status {response.status_code}): {response.text}", file=sys.stderr)
        return None
    
    return response.json()


def create_release(
    github_token: str,
    repo: str,
    semver_tag: str,
    internal_version: str,
    summary: str,
    epic: str,
    story: str,
    task: str,
    verbose: bool = False
) -> Optional[Dict]:
    """Create a new GitHub release for the SemVer tag."""
    url = f"https://api.github.com/repos/{repo}/releases"
    headers = {
        "Authorization": f"Bearer {github_token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    # Use SemVer for release name and tag
    release_name = semver_tag  # e.g., "v0.3.19+3"
    
    # Create release body with both SemVer and internal version
    release_body = f"""Release {semver_tag} (internal: {internal_version})

{summary}

**Epic:** {epic} | **Story:** {story} | **Task:** {task}

---
*This release uses Semantic Versioning (SemVer) for external compatibility. Internal version: {internal_version}*"""
    
    data = {
        "tag_name": semver_tag,  # Use SemVer tag
        "name": release_name,    # Use SemVer for release name
        "body": release_body,
        "draft": False,
        "prerelease": False
    }
    
    if verbose:
        print(f"   Creating release for SemVer tag: {semver_tag}")
        print(f"   Release name: {release_name}")
    
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code not in [200, 201]:
        print(f"❌ Error: Failed to create release (status {response.status_code}): {response.text}", file=sys.stderr)
        return None
    
    return response.json()


def update_release(
    github_token: str,
    repo: str,
    release_id: int,
    semver_tag: str,
    internal_version: str,
    summary: str,
    epic: str,
    story: str,
    task: str,
    verbose: bool = False
) -> Optional[Dict]:
    """Update an existing GitHub release."""
    url = f"https://api.github.com/repos/{repo}/releases/{release_id}"
    headers = {
        "Authorization": f"Bearer {github_token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    # Use SemVer for release name
    release_name = semver_tag  # e.g., "v0.3.19+3"
    
    # Create release body with both SemVer and internal version
    release_body = f"""Release {semver_tag} (internal: {internal_version})

{summary}

**Epic:** {epic} | **Story:** {story} | **Task:** {task}

---
*This release uses Semantic Versioning (SemVer) for external compatibility. Internal version: {internal_version}*"""
    
    data = {
        "name": release_name,    # Use SemVer for release name
        "body": release_body,
        "draft": False,
        "prerelease": False
    }
    
    if verbose:
        print(f"   Updating release for SemVer tag: {semver_tag}")
        print(f"   Release name: {release_name}")
    
    response = requests.patch(url, headers=headers, json=data)
    
    if response.status_code not in [200, 201]:
        print(f"❌ Error: Failed to update release (status {response.status_code}): {response.text}", file=sys.stderr)
        return None
    
    return response.json()


def get_release_tag_info(internal_version: str, semver_tag: Optional[str] = None) -> Dict[str, str]:
    """
    Get release tag information based on strategy or explicit tag.
    
    Args:
        internal_version: Internal version (e.g., "0.6.7.18+2")
        semver_tag: Optional explicit SemVer tag (e.g., "v0.9.5")
    
    Returns:
        Dictionary with tag information for release
    """
    normalized_internal_version = normalize_internal_version(internal_version, argument_name="--internal-version")

    # Always start from the canonical RW tag decision path.
    tag_info = get_rw_tag_info(normalized_internal_version)
    canonical_primary_tag = tag_info["primary_tag"]
    if semver_tag:
        normalized_semver_tag = semver_tag if semver_tag.startswith("v") else f"v{semver_tag}"
        if normalized_semver_tag != canonical_primary_tag:
            raise ValueError(
                "SemVer tag/internal version mismatch: "
                f"provided --semver-tag '{semver_tag}' does not match canonical tag "
                f"'{canonical_primary_tag}' for internal version '{normalized_internal_version}'."
            )
        tag_info["primary_tag"] = normalized_semver_tag
        tag_info["semver_full"] = normalized_semver_tag.lstrip('v')
        tag_info["tag_message"] = f"Release {normalized_semver_tag}"
    return tag_info


def normalize_internal_version(raw_value: str, argument_name: str = "--internal-version") -> str:
    """
    Normalize internal version input while preserving deterministic diagnostics.

    Accepts either:
    - 0.EPIC.STORY.TASK+BUILD
    - v0.EPIC.STORY.TASK+BUILD
    """
    if raw_value is None:
        raise ValueError(f"Invalid {argument_name}: None. Expected format like '0.6.7.113+1' or 'v0.6.7.113+1'.")

    value = raw_value.strip()
    if not value:
        raise ValueError(f"Invalid {argument_name}: empty value. Expected format like '0.6.7.113+1' or 'v0.6.7.113+1'.")

    if value.lower().startswith("v"):
        value = value[1:]

    if not re.fullmatch(r"\d+\.\d+\.\d+\.\d+\+\d+", value):
        raise ValueError(
            f"Invalid {argument_name}: '{raw_value}'. Expected format like '0.6.7.113+1' or 'v0.6.7.113+1'."
        )

    return value


def create_or_update_release_auto(
    github_token: str,
    repo: str,
    internal_version: str,
    summary: str,
    epic: str,
    story: str,
    task: str,
    semver_tag: Optional[str] = None,
    verbose: bool = False
) -> Optional[Dict]:
    """
    Create or update GitHub release using automatic tag detection.
    
    Args:
        github_token: GitHub API token
        repo: Repository name (owner/repo)
        internal_version: Internal version (e.g., "0.6.7.18+2")
        summary: Release summary
        epic: Epic identifier
        story: Story identifier
        task: Task identifier
        semver_tag: Optional explicit SemVer tag
        verbose: Enable verbose output
    
    Returns:
        GitHub release data or None if failed
    """
    tag_info = get_release_tag_info(internal_version, semver_tag)
    primary_tag = tag_info["primary_tag"]
    
    if verbose:
        strategy = tag_info["strategy"]
        print(f"   Using strategy: {strategy}")
        print(f"   Primary tag: {primary_tag}")
        if tag_info["internal_tag"]:
            print(f"   Internal tag: {tag_info['internal_tag']}")
    
    # Try to update existing release first
    existing = get_release_by_tag(github_token, repo, primary_tag, verbose)
    
    if existing:
        if verbose:
            print(f"   Updating existing release for tag: {primary_tag}")
        
        return update_release(
            github_token=github_token,
            repo=repo,
            release_id=existing["id"],
            semver_tag=primary_tag,
            internal_version=internal_version,
            summary=summary,
            epic=epic,
            story=story,
            task=task,
            verbose=verbose
        )
    else:
        if verbose:
            print(f"   Creating new release for tag: {primary_tag}")
        
        return create_release(
            github_token=github_token,
            repo=repo,
            semver_tag=primary_tag,
            internal_version=internal_version,
            summary=summary,
            epic=epic,
            story=story,
            task=task,
            verbose=verbose
        )


def main() -> int:
    """Main execution function."""
    try:
        parser = argparse.ArgumentParser(
            description="Create or update GitHub release using SemVer tag"
        )
        parser.add_argument(
            "--semver-tag",
            help="SemVer tag name (e.g., v0.3.19+3). If not provided, will auto-detect based on strategy."
        )
        parser.add_argument(
            "--internal-version",
            help="Internal version (e.g., 0.3.2.11+3). Required for auto-detection mode."
        )
        parser.add_argument(
            "--summary",
            required=True,
            help="Release summary"
        )
        parser.add_argument(
            "--epic",
            required=True,
            help="Epic identifier (e.g., E2)"
        )
        parser.add_argument(
            "--story",
            required=True,
            help="Story identifier (e.g., S13)"
        )
        parser.add_argument(
            "--task",
            required=True,
            help="Task identifier (e.g., T07)"
        )
        parser.add_argument(
            "--repo",
            default=get_default_repo(),
            help="Repository name (default: auto-detected from git remote origin)"
        )
        parser.add_argument(
            "--token",
            help="GitHub personal access token. Defaults to GITHUB_TOKEN env var"
        )
        parser.add_argument(
            "--verbose",
            action="store_true",
            help="Enable verbose output"
        )
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Dry run mode (don't actually create/update release)"
        )
        
        args = parser.parse_args()
        
        # Get GitHub token (from argument, .env.local, or environment)
        # Note: .env.local is already loaded by load_env_local() at module level
        github_token = args.token or os.environ.get('GITHUB_TOKEN') or os.environ.get('AI_DEV_KIT_PAT')
        if not github_token:
            print("❌ Error: GitHub token required", file=sys.stderr)
            print("   Options:", file=sys.stderr)
            print("   1. Set in .env.local file: GITHUB_TOKEN=your_token_here", file=sys.stderr)
            print("   2. Set in .env.local file: AI_DEV_KIT_PAT=your_token_here", file=sys.stderr)
            print("   3. Set as environment variable: export GITHUB_TOKEN=your_token_here", file=sys.stderr)
            print("   4. Pass via --token flag: --token your_token_here", file=sys.stderr)
            print("", file=sys.stderr)
            print("   📋 Setup Instructions:", file=sys.stderr)
            print("   1. Generate token: GitHub Settings → Developer settings → Personal access tokens", file=sys.stderr)
            print("   2. Select 'repo' scope", file=sys.stderr)
            print("   3. Add to .env.local: AI_DEV_KIT_PAT=your_token_here", file=sys.stderr)
            return 1
        
        # Get repository (from argument or environment)
        repo = args.repo or os.environ.get('GITHUB_REPOSITORY')
        if not repo:
            print("❌ Error: GitHub repository required (--repo or GITHUB_REPOSITORY env var)", file=sys.stderr)
            return 1
        
        if args.verbose:
            print(f"SemVer tag: {args.semver_tag}")
            print(f"Internal version: {args.internal_version}")
            print(f"Repository: {repo}")
        
        # Validate arguments
        if not args.semver_tag and not args.internal_version:
            print("❌ Error: Either --semver-tag or --internal-version must be provided", file=sys.stderr)
            return 1
        
        # Use auto-detection if internal version provided
        if args.internal_version:
            if args.verbose:
                print(f"   Auto-detecting tag for internal version: {args.internal_version}")
            
            result = create_or_update_release_auto(
                github_token=github_token,
                repo=repo,
                internal_version=args.internal_version,
                summary=args.summary,
                epic=args.epic,
                story=args.story,
                task=args.task,
                semver_tag=args.semver_tag,
                verbose=args.verbose
            )
        else:
            # Use existing explicit tag mode
            if args.verbose:
                print(f"   Using explicit tag: {args.semver_tag}")
            
            result = create_or_update_release_auto(
                github_token=github_token,
                repo=repo,
                internal_version="unknown",  # Placeholder
                summary=args.summary,
                epic=args.epic,
                story=args.story,
                task=args.task,
                semver_tag=args.semver_tag,
                verbose=args.verbose
            )
        
        if result:
            if args.verbose:
                print(f"✅ Release created/updated successfully: {result['html_url']}")
            else:
                print(result['html_url'])
            return 0
        else:
            print("❌ Failed to create/update release", file=sys.stderr)
            return 1
            
    except ValueError as e:
        print(f"❌ Validation error: {e}", file=sys.stderr)
        return 1
    except Exception as e:
        print(f"❌ Unexpected error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
