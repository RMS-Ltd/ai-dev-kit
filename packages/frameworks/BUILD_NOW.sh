#!/bin/bash
# Build All Framework Packages - Ready to Execute
# Run this from the project root: bash packages/frameworks/BUILD_NOW.sh

set -e  # Exit on error

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../" && pwd)"
BUILD_SCRIPT="$SCRIPT_DIR/workflow mgt/scripts/build_package.py"
OUTPUT_DIR="$SCRIPT_DIR/dist/packages"

cd "$PROJECT_ROOT"

echo "📦 Building all framework packages..."
echo "   Project root: $PROJECT_ROOT"
echo "   Output directory: $OUTPUT_DIR"
echo ""

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Framework name, version, display_name
FRAMEWORKS=(
    "kanban:2.1.0:kanban"
    "workflow mgt:2.1.3:workflow-mgt"
    "numbering & versioning:2.0.0:numbering-versioning"
    "doc-lifecycle:1.0.0:doc-lifecycle"
    "debug-path:1.0.0:debug-path"
)

SUCCESS=0
FAIL=0

for framework_info in "${FRAMEWORKS[@]}"; do
    IFS=':' read -r name version display <<< "$framework_info"
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📦 Building: $display v$version"
    echo ""
    
    if python3 "$BUILD_SCRIPT" "$name" "$version" \
        --output-dir "$OUTPUT_DIR" \
        --frameworks-root "$SCRIPT_DIR" \
        --verbose; then
        echo "✅ SUCCESS: $display v$version"
        ((SUCCESS++))
    else
        echo "❌ FAILED: $display v$version"
        ((FAIL++))
    fi
    echo ""
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Summary: $SUCCESS successful, $FAIL failed"
echo ""
echo "Packages location: $OUTPUT_DIR"

if [ $FAIL -eq 0 ]; then
    echo ""
    echo "✅ All packages built successfully!"
    ls -lh "$OUTPUT_DIR"/*.tar.gz 2>/dev/null | awk '{print "   "$9" ("$5")"}'
    exit 0
else
    exit 1
fi

