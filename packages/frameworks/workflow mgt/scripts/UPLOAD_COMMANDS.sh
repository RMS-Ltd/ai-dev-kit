#!/bin/bash
# Upload All Framework Packages to GitHub Releases
# Usage: ./UPLOAD_COMMANDS.sh [--dry-run]

set -e

cd "$(dirname "$0")/../../../../"
PROJECT_ROOT="$(pwd)"
PACKAGES_DIR="$PROJECT_ROOT/packages/frameworks/dist/packages"
UPLOAD_SCRIPT="$PROJECT_ROOT/packages/frameworks/workflow mgt/scripts/upload_to_github_release.py"
REPO="earlution/ai-dev-kit"

# Check token
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Error: GITHUB_TOKEN environment variable not set"
    echo "   Set it with: export GITHUB_TOKEN=your_token_here"
    exit 1
fi

# Check packages exist
if [ ! -d "$PACKAGES_DIR" ]; then
    echo "❌ Packages directory not found: $PACKAGES_DIR"
    echo "   Please build packages first"
    exit 1
fi

# Array of packages: (package_file, tag)
declare -a PACKAGES=(
    "kanban-v2.1.0.tar.gz:kanban-v2.1.0"
    "workflow-mgt-v2.1.4.tar.gz:workflow-mgt-v2.1.4"
    "numbering-versioning-v2.0.0.tar.gz:numbering-versioning-v2.0.0"
    "doc-lifecycle-v1.0.0.tar.gz:doc-lifecycle-v1.0.0"
    "debug-path-v1.0.0.tar.gz:debug-path-v1.0.0"
)

SUCCESS=0
FAIL=0

echo "📤 Uploading all framework packages to GitHub Releases..."
echo "   Repository: $REPO"
echo "   Packages directory: $PACKAGES_DIR"
echo ""

for package_info in "${PACKAGES[@]}"; do
    IFS=':' read -r package_file tag <<< "$package_info"
    hash_file="${package_file}.sha256"
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📤 Uploading: $package_file"
    echo "   Tag: $tag"
    
    if [ ! -f "$PACKAGES_DIR/$package_file" ]; then
        echo "   ❌ Package not found: $PACKAGES_DIR/$package_file"
        ((FAIL++))
        continue
    fi
    
    if [ "$1" == "--dry-run" ]; then
        echo "   🔍 DRY RUN - Would upload:"
        echo "      Package: $package_file"
        if [ -f "$PACKAGES_DIR/$hash_file" ]; then
            echo "      Hash: $hash_file"
        fi
        echo "      Tag: $tag"
        ((SUCCESS++))
    else
        if python3 "$UPLOAD_SCRIPT" \
            "$PACKAGES_DIR/$package_file" \
            --hash-file "$PACKAGES_DIR/$hash_file" \
            --tag "$tag" \
            --token "$GITHUB_TOKEN" \
            --repo "$REPO" \
            --verbose; then
            echo "   ✅ SUCCESS: $package_file"
            ((SUCCESS++))
        else
            echo "   ❌ FAILED: $package_file"
            ((FAIL++))
        fi
    fi
    echo ""
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Upload Summary"
echo "   ✅ Successful: $SUCCESS"
echo "   ❌ Failed: $FAIL"

if [ $FAIL -eq 0 ]; then
    echo ""
    echo "✅ All packages uploaded successfully!"
    echo "   View releases: https://github.com/$REPO/releases"
    exit 0
else
    exit 1
fi

