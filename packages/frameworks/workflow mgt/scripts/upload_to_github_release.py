#!/usr/bin/env python3
"""
GitHub Releases Upload Script for AI Dev Kit Framework Packages

Uploads package files (tar.gz and .sha256) to GitHub Releases.

Usage:
    python upload_to_github_release.py <package-file> [--hash-file <hash-file>] [--tag <tag>] [--token <token>] [--repo <repo>] [--verbose]

Example:
    python upload_to_github_release.py kanban-v2.0.0.tar.gz --hash-file kanban-v2.0.0.tar.gz.sha256 --tag v2.0.0 --token $GITHUB_TOKEN --repo ai-dev-kit/ai-dev-kit
"""

import argparse
import os
import sys
from pathlib import Path
from typing import Optional
import requests


def parse_arguments() -> argparse.Namespace:
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description="Upload package files to GitHub Releases",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Upload package with hash file
  python upload_to_github_release.py kanban-v2.0.0.tar.gz \\
      --hash-file kanban-v2.0.0.tar.gz.sha256 \\
      --tag v2.0.0 \\
      --token $GITHUB_TOKEN \\
      --repo ai-dev-kit/ai-dev-kit

  # Upload package only (no hash file)
  python upload_to_github_release.py kanban-v2.0.0.tar.gz \\
      --tag v2.0.0 \\
      --token $GITHUB_TOKEN
        """
    )
    
    parser.add_argument(
        'package_file',
        type=str,
        help='Path to package file (tar.gz) to upload'
    )
    
    parser.add_argument(
        '--hash-file',
        type=str,
        help='Path to hash file (.sha256) to upload (optional)'
    )
    
    parser.add_argument(
        '--tag',
        type=str,
        required=True,
        help='Git tag for the release (e.g., v2.0.0)'
    )
    
    parser.add_argument(
        '--token',
        type=str,
        help='GitHub personal access token (or set GITHUB_TOKEN env var)'
    )
    
    parser.add_argument(
        '--repo',
        type=str,
        help='GitHub repository (owner/repo, or set GITHUB_REPOSITORY env var)'
    )
    
    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Show verbose output'
    )
    
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Validate inputs without uploading (dry run)'
    )
    
    return parser.parse_args()


def validate_file(file_path: Path, description: str) -> bool:
    """Validate that a file exists and is readable."""
    if not file_path.exists():
        print(f"❌ Error: {description} not found: {file_path}", file=sys.stderr)
        return False
    
    if not file_path.is_file():
        print(f"❌ Error: {description} is not a file: {file_path}", file=sys.stderr)
        return False
    
    if not os.access(file_path, os.R_OK):
        print(f"❌ Error: {description} is not readable: {file_path}", file=sys.stderr)
        return False
    
    return True


def get_release_by_tag(github_token: str, repo: str, tag: str, verbose: bool = False) -> Optional[dict]:
    """Get release information by tag."""
    url = f"https://api.github.com/repos/{repo}/releases/tags/{tag}"
    headers = {
        "Authorization": f"token {github_token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    if verbose:
        print(f"   Fetching release info for tag: {tag}")
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 404:
        if verbose:
            print(f"   Release not found for tag: {tag}")
        return None
    
    if response.status_code != 200:
        print(f"❌ Error: Failed to fetch release (status {response.status_code}): {response.text}", file=sys.stderr)
        return None
    
    return response.json()


def create_release(github_token: str, repo: str, tag: str, verbose: bool = False) -> Optional[dict]:
    """Create a new release for the given tag."""
    url = f"https://api.github.com/repos/{repo}/releases"
    headers = {
        "Authorization": f"token {github_token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    data = {
        "tag_name": tag,
        "name": tag,
        "body": f"Release {tag}",
        "draft": False,
        "prerelease": False
    }
    
    if verbose:
        print(f"   Creating release for tag: {tag}")
    
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code not in [200, 201]:
        print(f"❌ Error: Failed to create release (status {response.status_code}): {response.text}", file=sys.stderr)
        return None
    
    return response.json()


def upload_asset(github_token: str, upload_url: str, file_path: Path, verbose: bool = False) -> bool:
    """Upload a file asset to a GitHub release."""
    # GitHub requires multipart/form-data for asset uploads
    # The upload_url from release creation includes ?name= parameter, but we need to append filename
    
    # Extract base upload URL (remove query parameters)
    base_url = upload_url.split('{')[0]
    
    # Add filename parameter
    filename = file_path.name
    upload_url_with_name = f"{base_url}?name={filename}"
    
    headers = {
        "Authorization": f"token {github_token}",
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/octet-stream"
    }
    
    if verbose:
        file_size = file_path.stat().st_size
        print(f"   Uploading {filename} ({file_size:,} bytes)...")
    
    try:
        with open(file_path, 'rb') as f:
            response = requests.post(upload_url_with_name, headers=headers, data=f)
        
        if response.status_code in [200, 201]:
            if verbose:
                print(f"   ✅ {filename} uploaded successfully")
            return True
        else:
            print(f"❌ Error: Failed to upload {filename} (status {response.status_code}): {response.text}", file=sys.stderr)
            return False
    except Exception as e:
        print(f"❌ Error: Exception while uploading {filename}: {e}", file=sys.stderr)
        return False


def main() -> int:
    """Main execution function."""
    try:
        args = parse_arguments()
        
        # Resolve file paths
        package_file = Path(args.package_file).resolve()
        
        # Validate package file
        if not validate_file(package_file, "Package file"):
            return 1
        
        # Validate hash file if provided
        hash_file = None
        if args.hash_file:
            hash_file = Path(args.hash_file).resolve()
            if not validate_file(hash_file, "Hash file"):
                return 1
        
        # Get GitHub token (from argument or environment)
        github_token = args.token or os.environ.get('GITHUB_TOKEN')
        if not github_token:
            print("❌ Error: GitHub token required (--token or GITHUB_TOKEN env var)", file=sys.stderr)
            return 1
        
        # Get repository (from argument or environment)
        repo = args.repo or os.environ.get('GITHUB_REPOSITORY')
        if not repo:
            print("❌ Error: GitHub repository required (--repo or GITHUB_REPOSITORY env var)", file=sys.stderr)
            return 1
        
        # Validate tag format (basic check)
        tag = args.tag
        if not tag.startswith('v'):
            print(f"⚠️  Warning: Tag '{tag}' does not start with 'v' (expected format: v2.0.0)", file=sys.stderr)
        
        if args.verbose:
            print(f"Package file: {package_file}")
            if hash_file:
                print(f"Hash file: {hash_file}")
            print(f"Tag: {tag}")
            print(f"Repository: {repo}")
        
        # Dry run mode
        if args.dry_run:
            print("✅ Dry run: All inputs validated successfully")
            print(f"   Would upload: {package_file.name}")
            if hash_file:
                print(f"   Would upload: {hash_file.name}")
            print(f"   To release: {tag} in {repo}")
            return 0
        
        # Get or create release
        if args.verbose:
            print(f"\n🔍 Checking for existing release: {tag}")
        
        release = get_release_by_tag(github_token, repo, tag, args.verbose)
        
        if not release:
            if args.verbose:
                print(f"   Release not found, creating new release...")
            release = create_release(github_token, repo, tag, args.verbose)
            if not release:
                return 1
        else:
            if args.verbose:
                print(f"   ✅ Found existing release: {release.get('name', tag)}")
        
        # Get upload URL
        upload_url = release.get('upload_url')
        if not upload_url:
            print("❌ Error: Release upload_url not found", file=sys.stderr)
            return 1
        
        # Upload package file
        if args.verbose:
            print(f"\n📤 Uploading assets...")
        
        success = True
        
        if not upload_asset(github_token, upload_url, package_file, args.verbose):
            success = False
        
        # Upload hash file if provided
        if hash_file and success:
            if not upload_asset(github_token, upload_url, hash_file, args.verbose):
                success = False
        
        if success:
            release_url = release.get('html_url', f"https://github.com/{repo}/releases/tag/{tag}")
            print(f"\n✅ Package uploaded successfully!")
            print(f"   Release: {release_url}")
            if args.verbose:
                print(f"   Package: {package_file.name}")
                if hash_file:
                    print(f"   Hash: {hash_file.name}")
            return 0
        else:
            print(f"\n❌ Package upload failed")
            return 1
        
    except KeyboardInterrupt:
        print("\n❌ Upload cancelled by user", file=sys.stderr)
        return 1
    except Exception as e:
        print(f"❌ Unexpected error: {e}", file=sys.stderr)
        if args.verbose if 'args' in locals() else False:
            import traceback
            traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())

