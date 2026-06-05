#!/bin/bash
# Build All Framework Packages Script
# Builds tar.gz packages for all frameworks in packages/frameworks/

set -e  # Exit on error

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRAMEWORKS_ROOT="$(cd "$SCRIPT_DIR/../../" && pwd)"
BUILD_SCRIPT="$SCRIPT_DIR/build_package.py"
OUTPUT_DIR="$SCRIPT_DIR/../../dist/packages"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "📦 Building all framework packages..."
echo "   Frameworks root: $FRAMEWORKS_ROOT"
echo "   Output directory: $OUTPUT_DIR"
echo ""

# Framework name and version mapping
# Format: "framework_name:version:display_name"
declare -a FRAMEWORKS=(
    "kanban:2.1.0:kanban"
    "workflow mgt:2.1.4:workflow-mgt"
    "numbering & versioning:2.0.0:numbering-versioning"
    "doc-lifecycle:1.0.0:doc-lifecycle"
    "debug-path:1.0.0:debug-path"
)

SUCCESS_COUNT=0
FAIL_COUNT=0
FAILED_FRAMEWORKS=()

for framework_info in "${FRAMEWORKS[@]}"; do
    IFS=':' read -r framework_name version display_name <<< "$framework_info"
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📦 Building: $display_name v$version"
    echo "   Framework: '$framework_name'"
    echo ""
    
    if python3 "$BUILD_SCRIPT" "$framework_name" "$version" \
        --output-dir "$OUTPUT_DIR" \
        --framework-dir "$FRAMEWORKS_ROOT/$framework_name" \
        --frameworks-root "$FRAMEWORKS_ROOT" \
        --verbose; then
        echo "   ✅ SUCCESS: $display_name v$version"
        ((SUCCESS_COUNT++))
    else
        echo "   ❌ FAILED: $display_name v$version"
        ((FAIL_COUNT++))
        FAILED_FRAMEWORKS+=("$display_name v$version")
    fi
    echo ""
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Build Summary"
echo "   ✅ Successful: $SUCCESS_COUNT"
echo "   ❌ Failed: $FAIL_COUNT"

if [ $FAIL_COUNT -gt 0 ]; then
    echo ""
    echo "Failed frameworks:"
    for failed in "${FAILED_FRAMEWORKS[@]}"; do
        echo "   - $failed"
    done
    exit 1
fi

echo ""
echo "✅ All packages built successfully!"
echo "   Output directory: $OUTPUT_DIR"
echo ""
echo "📋 Next steps:"
echo "   1. Review packages in: $OUTPUT_DIR"
echo "   2. Upload to GitHub Releases using upload_to_github_release.py"
echo "   3. Test installation using install_package_from_release.py"

