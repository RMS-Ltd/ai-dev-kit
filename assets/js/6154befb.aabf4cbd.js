"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["35245"], {
22962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_cursor_ide_performance_considerations_md_615_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-cursor-ide-performance-considerations-md-615.json
var site_docs_architecture_standards_and_adrs_cursor_ide_performance_considerations_md_615_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/cursor-ide-performance-considerations","title":"Cursor IDE Performance Considerations","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/cursor-ide-performance-considerations.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/cursor-ide-performance-considerations","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/cursor-ide-performance-considerations","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/cursor-ide-performance-considerations.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-21T19:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Code Review Workflow Processes","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-review-workflow-processes"},"next":{"title":"dev-kit-ipw-ipp-vs-icw-artifacts","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/cursor-ide-performance-considerations.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-21T19:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Cursor IDE Performance Considerations';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Impact",
  "id": "impact",
  "level": 3
}, {
  "value": "Root Causes",
  "id": "root-causes",
  "level": 2
}, {
  "value": "1. Pre-commit Hooks Processing Too Many Files",
  "id": "1-pre-commit-hooks-processing-too-many-files",
  "level": 3
}, {
  "value": "2. Large File Count",
  "id": "2-large-file-count",
  "level": 3
}, {
  "value": "3. Bulk File Operations",
  "id": "3-bulk-file-operations",
  "level": 3
}, {
  "value": "4. File Watching/Indexing Overhead",
  "id": "4-file-watchingindexing-overhead",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Pre-commit Hooks",
  "id": "pre-commit-hooks",
  "level": 3
}, {
  "value": "File Operations",
  "id": "file-operations",
  "level": 3
}, {
  "value": "IDE Configuration",
  "id": "ide-configuration",
  "level": 3
}, {
  "value": "Validation Script Updates",
  "id": "validation-script-updates",
  "level": 2
}, {
  "value": "Required Changes for <code>pass_filenames: true</code>",
  "id": "required-changes-for-pass_filenames-true",
  "level": 3
}, {
  "value": "Monitoring and Detection",
  "id": "monitoring-and-detection",
  "level": 2
}, {
  "value": "Warning Signs",
  "id": "warning-signs",
  "level": 3
}, {
  "value": "Measurement Commands",
  "id": "measurement-commands",
  "level": 3
}, {
  "value": "Framework Documentation Updates",
  "id": "framework-documentation-updates",
  "level": 2
}, {
  "value": "Pre-commit Hook Examples",
  "id": "pre-commit-hook-examples",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}, {
  "value": "Action Items",
  "id": "action-items",
  "level": 2
}, {
  "value": "For ai-dev-kit",
  "id": "for-ai-dev-kit",
  "level": 3
}, {
  "value": "For Adopting Projects",
  "id": "for-adopting-projects",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cursor-ide-performance-considerations",
        children: "Cursor IDE Performance Considerations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-21", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 6 - Framework Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 6 - ADK Implementation Analysis and Package Management"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document outlines performance considerations and best practices for Cursor IDE when working with projects that have large file counts, bulk operations, and pre-commit hooks. These considerations are based on real-world investigation and resolution of IDE crashes in large projects."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " Investigation conducted in Confidentia project (Epic 20, Story 5, Task 16) - See external investigation reports for detailed analysis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cursor IDE can become unresponsive or crash when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-commit hooks process too many files"
        }), " (e.g., all changelog archive files on every commit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large file counts"
        }), " require extensive file watching/indexing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bulk file operations"
        }), " trigger many file watcher events simultaneously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File watching/indexing overhead"
        }), " overwhelms IDE resources"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Productivity Loss:"
        }), " Work lost when IDE crashes mid-operation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Disruption:"
        }), " Release Workflow (RW) cannot complete reliably"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Developer Experience:"
        }), " Frequent crashes make development frustrating"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Risk:"
        }), " Potential for lost work if files are modified but not saved"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-causes",
      children: "Root Causes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-pre-commit-hooks-processing-too-many-files",
      children: "1. Pre-commit Hooks Processing Too Many Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ❌ PROBLEMATIC: Processes ALL matching files on every commit\n- id: validate-changelog-format\n  entry: python3 scripts/validation/validate_changelog_format.py --strict\n  pass_filenames: false  # ❌ Processes ALL files\n  files: ^docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v.*\\.md$\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Processes 200+ changelog files on every commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High memory usage (500 MB-1 GB during commits)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slow commit process (5-10+ seconds)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDE resource exhaustion leading to crashes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ✅ CORRECT: Processes only changed files\n- id: validate-changelog-format\n  entry: python3 scripts/validation/validate_changelog_format.py\n  pass_filenames: true  # ✅ Processes only changed files\n  files: ^docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v.*\\.md$\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-large-file-count",
      children: "2. Large File Count"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current ai-dev-kit Statistics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total markdown files:"
        }), " ~1,021"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog archive files:"
        }), " ~266 (growing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban files:"
        }), " ~181"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDE needs to index/watch all files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High memory usage for file watching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slow indexing on startup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-indexing triggered by bulk file operations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exclude large directories from file watching (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorignore"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use incremental processing when possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive old files to reduce active file count"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-bulk-file-operations",
      children: "3. Bulk File Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# ❌ PROBLEMATIC: Updates files one-by-one, triggering many file watcher events\nfor file in files:\n    update_file(file)  # Triggers file watcher for each file\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "50+ file watcher events in quick succession"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "50+ re-indexing operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory usage spikes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDE becomes unresponsive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# ✅ CORRECT: Batch file operations to reduce file watcher events\nupdates = []\nfor file in files:\n    updates.append((file, new_content))\n\n# Apply all at once\nfor file, content in updates:\n    file.write_text(content)  # Fewer file watcher events\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-file-watchingindexing-overhead",
      children: "4. File Watching/Indexing Overhead"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDE watches all files for changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bulk operations trigger many file watcher events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Events queue up faster than they can be processed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory usage increases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exclude large directories from file watching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch file operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use incremental processing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-commit-hooks",
      children: "Pre-commit Hooks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ DO:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pass_filenames: true"
        }), " when possible"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process only changed files by default"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provide ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--all"
        }), " flag for full validation when needed"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep hooks fast (<2 seconds ideally)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "❌ DON'T:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pass_filenames: false"
        }), " unless absolutely necessary"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process all files on every commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run heavy operations in pre-commit hooks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block commits for non-critical validations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "repos:\n  - repo: local\n    hooks:\n      - id: validate-branch-context\n        name: Validate Branch Context\n        entry: python scripts/validation/validate_branch_context.py\n        language: system\n        pass_filenames: true  # ✅ Process only changed files\n        files: ^(src/.*/version\\.py|CHANGELOG\\.md)$\n\n      - id: validate-changelog-format\n        name: Validate Changelog Format\n        entry: python scripts/validation/validate_changelog_format.py\n        language: system\n        pass_filenames: true  # ✅ Process only changed files\n        files: ^docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v.*\\.md$\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-operations",
      children: "File Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ DO:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch file writes when updating many files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add progress indicators for long operations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " mode to preview changes"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process incrementally when possible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "❌ DON'T:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update files one-by-one in loops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trigger file watcher events unnecessarily"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process all files when only some changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block operations without progress feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Batch file updates\ndef update_many_files(files_and_content):\n    \"\"\"Update multiple files efficiently.\"\"\"\n    updates = []\n    for file_path, content in files_and_content:\n        updates.append((Path(file_path), content))\n    \n    # Apply all updates\n    for file_path, content in updates:\n        file_path.write_text(content)\n    \n    # Single file watcher event batch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ide-configuration",
      children: "IDE Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ DO:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exclude large directories from file watching (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorignore"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), " patterns for exclusions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor memory usage during bulk operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure file watcher limits if available"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "❌ DON'T:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Watch archive directories unnecessarily"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Watch generated files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Watch large static content directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignore performance warnings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Example ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorignore"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# Exclude large directories from file watching\ndocs/changelog-and-release-notes/changelog-archive/\ndocs/project-management/kanban/epics/Epic-*/Story-*/T*-*.md\n*.pyc\n__pycache__/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation-script-updates",
      children: "Validation Script Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "required-changes-for-pass_filenames-true",
      children: ["Required Changes for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pass_filenames: true"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scripts must accept file paths as arguments:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# validate_changelog_format.py\nimport sys\nfrom pathlib import Path\n\ndef validate_changelog_format(file_paths=None, strict=False):\n    \"\"\"Validate changelog format.\n    \n    Args:\n        file_paths: List of file paths to validate (None = all files)\n        strict: If True, fail on format violations\n    \"\"\"\n    if file_paths is None:\n        # Process all files (for --all flag)\n        archive_dir = Path(\"docs/changelog-and-release-notes/changelog-archive\")\n        file_paths = list(archive_dir.glob(\"CHANGELOG_v*.md\"))\n    \n    for file_path in file_paths:\n        # Validate each file\n        validate_file(file_path, strict=strict)\n\nif __name__ == \"__main__\":\n    if \"--all\" in sys.argv:\n        file_paths = None\n    else:\n        # Get file paths from pre-commit hook\n        file_paths = sys.argv[1:] if len(sys.argv) > 1 else None\n    \n    validate_changelog_format(file_paths, strict=\"--strict\" in sys.argv)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-and-detection",
      children: "Monitoring and Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "warning-signs",
      children: "Warning Signs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Watch for these indicators of performance issues:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Commit Time:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Normal: <2 seconds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Warning: 2-5 seconds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Critical: >5 seconds"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory Usage:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Normal: <200 MB during commits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Warning: 200-500 MB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Critical: >500 MB"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "File Count:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Normal: <500 markdown files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Warning: 500-1,000 files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Critical: >1,000 files"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Crash Frequency:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Normal: Rare/never"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Warning: Occasional during bulk operations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Critical: Frequent during normal operations"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "measurement-commands",
      children: "Measurement Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Count markdown files\nfind . -name \"*.md\" | wc -l\n\n# Count changelog archive files\nfind docs/changelog-and-release-notes/changelog-archive -name \"*.md\" | wc -l\n\n# Count Kanban files\nfind docs/project-management/kanban -name \"*.md\" | wc -l\n\n# Monitor memory usage during commit\n# (Use Activity Monitor on macOS, Task Manager on Windows)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-documentation-updates",
      children: "Framework Documentation Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-commit-hook-examples",
      children: "Pre-commit Hook Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update framework documentation to show best practices:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ✅ RECOMMENDED: Use pass_filenames: true\n- id: validate-changelog-format\n  pass_filenames: true  # ✅ Process only changed files\n  files: ^docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v.*\\.md$\n\n# ❌ AVOID: Use pass_filenames: false unless absolutely necessary\n- id: validate-changelog-format\n  pass_filenames: false  # ❌ Processes ALL files (performance issue)\n  files: ^docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v.*\\.md$\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External Investigation:"
        }), " Confidentia project - Epic 20, Story 5, Task 16", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Bug Report: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/PM_and_Portfolio/kanban/Epic 20/story-05-BR-Cursor-IDE-Crashes.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Investigation Report: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/cursor-crash-investigation.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Article: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/cursor-crash-investigation-article.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Documentation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/IMPLEMENTATION_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation Scripts:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "action-items",
      children: "Action Items"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-ai-dev-kit",
      children: "For ai-dev-kit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Monitor file count growth (currently ~1,021 markdown files)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Consider ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorignore"
        }), " for changelog archive (266 files)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update framework documentation examples to use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pass_filenames: true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document best practices in framework guides"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-adopting-projects",
      children: "For Adopting Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Configure pre-commit hooks with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pass_filenames: true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update validation scripts to accept file paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorignore"
        }), " for large directories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Monitor file count and performance metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Batch file operations in scripts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active awareness document", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-21", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Review:"
      }), " When file count exceeds 1,500 markdown files or performance issues arise"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);