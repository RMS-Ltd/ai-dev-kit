"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["61349"], {
66433(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_release_process_md_fa6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-release-process-md-fa6.json
var site_docs_architecture_standards_and_adrs_framework_release_process_md_fa6_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-release-process","title":"Framework Release Process","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-release-process.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-release-process","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-release-process","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-release-process.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Migration Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-migration-guide"},"next":{"title":"Framework Update CLI Tool Design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-update-cli-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-release-process.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Release Process';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Release Process Overview",
  "id": "1-release-process-overview",
  "level": 2
}, {
  "value": "1.1 Release Workflow Integration",
  "id": "11-release-workflow-integration",
  "level": 3
}, {
  "value": "1.2 Release Types",
  "id": "12-release-types",
  "level": 3
}, {
  "value": "2. Pre-Release Checklist",
  "id": "2-pre-release-checklist",
  "level": 2
}, {
  "value": "2.1 Framework Changes",
  "id": "21-framework-changes",
  "level": 3
}, {
  "value": "2.2 Version Readiness",
  "id": "22-version-readiness",
  "level": 3
}, {
  "value": "2.3 Documentation Readiness",
  "id": "23-documentation-readiness",
  "level": 3
}, {
  "value": "2.4 Validation Readiness",
  "id": "24-validation-readiness",
  "level": 3
}, {
  "value": "3. Release Workflow Steps",
  "id": "3-release-workflow-steps",
  "level": 2
}, {
  "value": "3.1 Step 1: Branch Safety Check",
  "id": "31-step-1-branch-safety-check",
  "level": 3
}, {
  "value": "3.2 Step 2: Bump Project Version",
  "id": "32-step-2-bump-project-version",
  "level": 3
}, {
  "value": "3.3 Step 2.5: Package Version Workflow (PVW)",
  "id": "33-step-25-package-version-workflow-pvw",
  "level": 3
}, {
  "value": "Step 2.5.1: Detect Changed Packages",
  "id": "step-251-detect-changed-packages",
  "level": 4
}, {
  "value": "Step 2.5.2: Analyze Package Changes",
  "id": "step-252-analyze-package-changes",
  "level": 4
}, {
  "value": "Step 2.5.3: Determine Version Bumps",
  "id": "step-253-determine-version-bumps",
  "level": 4
}, {
  "value": "Step 2.5.4: Execute Version Updates",
  "id": "step-254-execute-version-updates",
  "level": 4
}, {
  "value": "Step 2.5.5: Validate Updates",
  "id": "step-255-validate-updates",
  "level": 4
}, {
  "value": "Step 2.5.6: Document &amp; Proceed",
  "id": "step-256-document--proceed",
  "level": 4
}, {
  "value": "3.4 Step 3: Create Detailed Changelog",
  "id": "34-step-3-create-detailed-changelog",
  "level": 3
}, {
  "value": "3.5 Step 4: Update Main Changelog",
  "id": "35-step-4-update-main-changelog",
  "level": 3
}, {
  "value": "3.6 Step 5: Update README",
  "id": "36-step-5-update-readme",
  "level": 3
}, {
  "value": "3.7 Step 6: Update BR/FR Docs",
  "id": "37-step-6-update-brfr-docs",
  "level": 3
}, {
  "value": "3.8 Step 7: Auto-update Kanban Docs",
  "id": "38-step-7-auto-update-kanban-docs",
  "level": 3
}, {
  "value": "3.9 Step 8: Stage Files",
  "id": "39-step-8-stage-files",
  "level": 3
}, {
  "value": "3.10 Step 9: Check IDE-Flagged Problems",
  "id": "310-step-9-check-ide-flagged-problems",
  "level": 3
}, {
  "value": "3.11 Step 10: Run Validators",
  "id": "311-step-10-run-validators",
  "level": 3
}, {
  "value": "3.12 Step 11: Commit Changes",
  "id": "312-step-11-commit-changes",
  "level": 3
}, {
  "value": "3.13 Step 12: Create Git Tag",
  "id": "313-step-12-create-git-tag",
  "level": 3
}, {
  "value": "3.14 Step 13: Push to Remote",
  "id": "314-step-13-push-to-remote",
  "level": 3
}, {
  "value": "4. Framework-Specific Release Steps",
  "id": "4-framework-specific-release-steps",
  "level": 2
}, {
  "value": "4.1 Git Tagging for Frameworks",
  "id": "41-git-tagging-for-frameworks",
  "level": 3
}, {
  "value": "4.2 Framework Changelog Updates",
  "id": "42-framework-changelog-updates",
  "level": 3
}, {
  "value": "4.3 Framework Distribution",
  "id": "43-framework-distribution",
  "level": 3
}, {
  "value": "5. Release Validation",
  "id": "5-release-validation",
  "level": 2
}, {
  "value": "5.1 Pre-Release Validation",
  "id": "51-pre-release-validation",
  "level": 3
}, {
  "value": "5.2 Post-Release Validation",
  "id": "52-post-release-validation",
  "level": 3
}, {
  "value": "5.3 Release Verification",
  "id": "53-release-verification",
  "level": 3
}, {
  "value": "6. Release Best Practices",
  "id": "6-release-best-practices",
  "level": 2
}, {
  "value": "6.1 Version Bump Guidelines",
  "id": "61-version-bump-guidelines",
  "level": 3
}, {
  "value": "6.2 Changelog Best Practices",
  "id": "62-changelog-best-practices",
  "level": 3
}, {
  "value": "6.3 Release Communication",
  "id": "63-release-communication",
  "level": 3
}, {
  "value": "7. Troubleshooting",
  "id": "7-troubleshooting",
  "level": 2
}, {
  "value": "7.1 Common Issues",
  "id": "71-common-issues",
  "level": 3
}, {
  "value": "7.2 Release Rollback",
  "id": "72-release-rollback",
  "level": 3
}, {
  "value": "8. Related Documentation",
  "id": "8-related-documentation",
  "level": 2
}, {
  "value": "8.1 Core Documents",
  "id": "81-core-documents",
  "level": 3
}, {
  "value": "8.2 Supporting Documents",
  "id": "82-supporting-documents",
  "level": 3
}, {
  "value": "9. Summary",
  "id": "9-summary",
  "level": 2
}, {
  "value": "9.1 Key Principles",
  "id": "91-key-principles",
  "level": 3
}, {
  "value": "9.2 Release Workflow",
  "id": "92-release-workflow",
  "level": 3
}, {
  "value": "9.3 Release Checklist",
  "id": "93-release-checklist",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "framework-release-process",
        children: "Framework Release Process"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 6 - Framework Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 1 - Framework Version Management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S01", ":T02", " - Create framework release processes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Versioning Strategy, Package Maintenance and Release, Package Version Workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete framework release process"
      }), " for AI Dev Kit frameworks. Framework releases are managed through an integrated workflow that combines project versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), ") with framework versioning (SemVer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      }), "), ensuring consistent, traceable, and automated releases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrated Workflow:"
        }), " Framework releases are part of the Release Workflow (RW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic Versioning:"
        }), " Package Version Workflow (PVW) automatically manages framework versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual Versioning:"
        }), " Project and framework versions tracked independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Tagging:"
        }), " Framework releases tagged for distribution and reference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Comprehensive validation at each release stage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-release-process-overview",
      children: "1. Release Process Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-release-workflow-integration",
      children: "1.1 Release Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework releases are integrated into the Release Workflow (RW):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RW Step 1: Branch Safety Check\nRW Step 2: Bump Project Version\nRW Step 2.5: Package Version Workflow (PVW) ← Framework versioning happens here\n  ├─ Detect changed packages\n  ├─ Analyze package changes\n  ├─ Determine version bumps (MAJOR/MINOR/PATCH)\n  ├─ Execute version updates\n  ├─ Validate updates\n  └─ Document and proceed\nRW Step 3: Create Detailed Changelog (includes framework versions)\nRW Step 4: Update Main Changelog\nRW Step 5: Update README\nRW Step 6: Update BR/FR Docs\nRW Step 7: Auto-update Kanban Docs\nRW Step 8: Stage Files\nRW Step 9: Check IDE-flagged problems\nRW Step 10: Run Validators\nRW Step 11: Commit Changes\nRW Step 12: Create Git Tag\nRW Step 13: Push to Remote\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-release-types",
      children: "1.2 Release Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic Release (Standard):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggered by running RW after making framework changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW automatically detects changes and determines version bumps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All release steps executed automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most common release type"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Release (Exceptional):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For exceptional circumstances (e.g., hotfixes, emergency releases)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires manual version bump and validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must follow same process and validation requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not recommended for normal releases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-pre-release-checklist",
      children: "2. Pre-Release Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-framework-changes",
      children: "2.1 Framework Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Framework changes completed and tested"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All tests passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Integration guides updated (if applicable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Breaking changes documented (if MAJOR bump)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Code review completed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Integration tests passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Examples updated (if applicable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Migration guide created (if MAJOR bump)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-version-readiness",
      children: "2.2 Version Readiness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Bump Determination:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Changes analyzed against version bump criteria"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Bump type determined (MAJOR/MINOR/PATCH)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version bump justified and documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Compatibility impact assessed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Current version documented in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version history in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " up to date"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Cross-references to project version prepared"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-documentation-readiness",
      children: "2.3 Documentation Readiness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " updated with new features/changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " ready for new entry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Breaking changes documented (if MAJOR)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Migration guide available (if MAJOR)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Integration guides updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Examples updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Troubleshooting guide updated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-validation-readiness",
      children: "2.4 Validation Readiness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Release Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All validation scripts passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version format validation passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Changelog format validation passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Branch context validation passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No blocking issues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-release-workflow-steps",
      children: "3. Release Workflow Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-step-1-branch-safety-check",
      children: "3.1 Step 1: Branch Safety Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Ensure release is on correct branch"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate current branch matches epic number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify branch context alignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for uncommitted changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py --strict"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exit code 0 = PASS, non-zero = FAIL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Must pass before proceeding"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failure Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If validation fails, fix branch context before proceeding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not proceed to Step 2 if Step 1 fails"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-step-2-bump-project-version",
      children: "3.2 Step 2: Bump Project Version"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Update project version for this release"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read current project version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify completed task from Story file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine new project version"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Schema:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.1.2+1"
        }), " (Epic 6, Story 1, Task 2, Build 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify version format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify task alignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify build increment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-step-25-package-version-workflow-pvw",
      children: "3.3 Step 2.5: Package Version Workflow (PVW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Automatically manage framework versions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PVW Execution Steps:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-251-detect-changed-packages",
      children: "Step 2.5.1: Detect Changed Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze git diff to identify changed files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map changed files to framework packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate significance of changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create list of packages needing version bumps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-252-analyze-package-changes",
      children: "Step 2.5.2: Analyze Package Changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read package files and structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze git diff for each package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify changes (added/removed/modified)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess impact (breaking/new feature/bug fix/clarification)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-253-determine-version-bumps",
      children: "Step 2.5.3: Determine Version Bumps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review version bump criteria (as guidance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze package changes against criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider package-specific context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine bump type (MAJOR/MINOR/PATCH)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document reasoning and justification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-254-execute-version-updates",
      children: "Step 2.5.4: Execute Version Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last Updated:**"
        }), " date"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create/update package changelog entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document justification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-255-validate-updates",
      children: "Step 2.5.5: Validate Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run validation scripts (format, increment, consistency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify changelog entry exists and is complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure all locations updated correctly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-256-document--proceed",
      children: "Step 2.5.6: Document & Proceed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document PVW execution summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pass package version info to RW Step 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue to RW Step 3 (changelog creation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package-version-workflow-agent-execution.md"
      }), " for complete PVW documentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-step-3-create-detailed-changelog",
      children: "3.4 Step 3: Create Detailed Changelog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Create comprehensive changelog entry"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create detailed changelog file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v{version}.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Include full timestamp (", (0,jsx_runtime.jsx)(_components.code, {
          children: "YYYY-MM-DD HH:MM:SS UTC"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document all changes (Added/Changed/Fixed/Removed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include framework version information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference to project version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a Changelog format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full timestamp (immutable once written)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework versions included"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project version cross-reference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-step-4-update-main-changelog",
      children: "3.5 Step 4: Update Main Changelog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Add summary entry to main changelog"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add new entry at top: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [version] - DD-MM-YY"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include release description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to detailed changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include framework version summary"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Short date format (", (0,jsx_runtime.jsx)(_components.code, {
          children: "DD-MM-YY"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Summary of changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to detailed changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework versions listed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-step-5-update-readme",
      children: "3.6 Step 5: Update README"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Update project version in README"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update version text: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** v{version}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version badge (if present)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update latest release callout (if present)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last Updated:**"
        }), " date"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-step-6-update-brfr-docs",
      children: "3.7 Step 6: Update BR/FR Docs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Update Bug Reports and Feature Requests"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document fix attempts for Bug Reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document implementation for Feature Requests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update status and verification information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-step-7-auto-update-kanban-docs",
      children: "3.8 Step 7: Auto-update Kanban Docs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Update Kanban documentation with version markers"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic document with version marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story document with version marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board with version marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task checklist with completion status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "39-step-8-stage-files",
      children: "3.9 Step 8: Stage Files"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Stage all modified files for commit"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git add -A"
        }), " to stage all changes"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify all expected files are staged"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for unexpected files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "310-step-9-check-ide-flagged-problems",
      children: "3.10 Step 9: Check IDE-Flagged Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Address IDE-flagged issues before commit"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for errors (blocking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for warnings (noted)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for infos (noted)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix errors before proceeding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document warnings/infos if not fixed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority Order:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Errors (must fix)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warnings (should fix)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Infos (may fix)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "311-step-10-run-validators",
      children: "3.11 Step 10: Run Validators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Validate release before commit"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py"
        }), " - Branch context validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_changelog_format.py"
        }), " - Changelog format validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " - Version bump validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "check_changelog_size.py"
        }), " - Changelog size check (non-blocking)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Warnings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog ordering violations (known issue - date-ordered vs version-ordered)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task document warnings (expected for delimited tasks)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failure Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix blocking validation errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document expected warnings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proceed if only expected warnings present"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "312-step-11-commit-changes",
      children: "3.12 Step 11: Commit Changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Create release commit"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create commit with release message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include version, epic, story, task in message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include release summary"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Commit Message Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release v{version}: {summary}\n\nEpic: {epic} | Story: {story} | Task: {task}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release v0.6.1.2+1: Framework release process documentation\n\nEpic: 6 | Story: 1 | Task: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "313-step-12-create-git-tag",
      children: "3.13 Step 12: Create Git Tag"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Tag framework release for distribution"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create annotated tag: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v{version}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include release message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include epic, story, task information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Project tag: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v{version}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.1.2+1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework tag: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}-v{version}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.1.0"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Message Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release v{version}: {summary}\n\nEpic: {epic} | Story: {story} | Task: {task}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "314-step-13-push-to-remote",
      children: "3.14 Step 13: Push to Remote"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Push release to remote repository"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push branch to origin"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push tag to origin"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify push succeeded"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git push origin main\ngit push origin v{version}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Do not push to main unless ready to deploy (triggers auto-deployment)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-framework-specific-release-steps",
      children: "4. Framework-Specific Release Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-git-tagging-for-frameworks",
      children: "4.1 Git Tagging for Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Individual Framework Tags:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Tag individual framework release\ngit tag -a kanban-v2.1.0 -m \"Release kanban v2.1.0\"\ngit push origin kanban-v2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Individual framework: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}-v{version}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.1.0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgt-v2.2.0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering-versioning-v2.0.0"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Message:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include framework name and version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include release summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference project version if applicable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-framework-changelog-updates",
      children: "4.2 Framework Changelog Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Changelog Entry:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [2.1.0] - 2025-12-10\n\n**Package Version:** 2.1.0\n**Project Version:** 0.6.1.2+1\n**Bump Type:** MINOR\n\n### Added\n- New integration guide for Workflow Management package\n- New integration pattern examples\n\n### Changed\n- Migration process now supports intelligent semantic matching\n\n**Criteria Reference:** MINOR Version Bump\n- ✅ New feature: Semantic epic matching with similarity scoring\n- ✅ Backward compatible: Existing migration modes still supported\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-framework-distribution",
      children: "4.3 Framework Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Distribution Methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git submodules (checkout specific tags)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git subtrees (merge specific tags)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package managers (npm, pip, pub.dev - when published)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Releases (tar.gz packages)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Distribution Tags:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework-specific tags enable precise version pinning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects can checkout specific framework versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables dependency management and updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-release-validation",
      children: "5. Release Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-pre-release-validation",
      children: "5.1 Pre-Release Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Branch context validation passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version format validation passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Changelog format validation passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version bump validation passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "IDE-flagged problems addressed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All tests passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation complete"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-post-release-validation",
      children: "5.2 Post-Release Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Git tag created successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Git tag pushed successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Commit pushed successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Changelog entries created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version numbers updated correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Kanban docs updated correctly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-release-verification",
      children: "5.3 Release Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check Git tag exists: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag -l v{version}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check commit exists: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git log --oneline -1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check changelog entry: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grep -A 10 \"\\[{version}\\]\" CHANGELOG.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check framework version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grep \"Version:\" packages/frameworks/{framework}/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check Kanban markers: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grep \"v{version}\" docs/project-management/kanban/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-release-best-practices",
      children: "6. Release Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-version-bump-guidelines",
      children: "6.1 Version Bump Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAJOR Version Bump:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes that require migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing features or templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Significant structural changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking policy changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MINOR Version Bump:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features, templates, or guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Significant enhancements (backward compatible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New integration capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New optional features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH Version Bump:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes and corrections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor documentation updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small improvements (no new functionality)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifications and corrections"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-changelog-best-practices",
      children: "6.2 Changelog Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Information:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear description of changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Justification for bump type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Criteria reference (why this bump type)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference to project version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Keep a Changelog format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include Added/Changed/Fixed/Removed sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document breaking changes clearly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guidance for MAJOR bumps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-release-communication",
      children: "6.3 Release Communication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Announcements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document in changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update README with new version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board with version marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference to project version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clearly document in changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update compatibility matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify dependent projects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-troubleshooting",
      children: "7. Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-common-issues",
      children: "7.1 Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: PVW doesn't detect changes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Check git diff, verify files are in framework package directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Manually trigger PVW if needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Version bump validation fails"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Check version format, verify task alignment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Review version bump logic in RW Step 2"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Changelog ordering violations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Known issue (date-ordered vs version-ordered)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Document as expected warning, proceed with release"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Git tag already exists"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Tag may have been created in previous release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution:"
        }), " Verify tag points to correct commit, proceed with push"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-release-rollback",
      children: "7.2 Release Rollback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify release to rollback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create new release with rollback changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document rollback in changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create new Git tag"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push rollback release"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback is a new release (not reverting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version number increments (doesn't decrement)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog documents rollback reason"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git tags remain (don't delete)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-related-documentation",
      children: "8. Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-core-documents",
      children: "8.1 Core Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Versioning Strategy:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-versioning-strategy.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework versioning schema and conventions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version bump criteria and decision-making"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Maintenance and Release:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "package-maintenance-and-release.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete package maintenance guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PVW execution and integration"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Version Workflow:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete PVW step-by-step guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent execution patterns"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-supporting-documents",
      children: "8.2 Supporting Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Release Workflow Reference:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete RW reference"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All 13 steps documented"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Versioning Criteria:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "package-versioning-criteria.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detailed version bump criteria (guidance)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent decision-making process"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dual-Versioning Guide:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dual-versioning-package-managers.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Managing project version + framework versions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Package manager compatibility"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-summary",
      children: "9. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-key-principles",
      children: "9.1 Key Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrated Workflow:"
        }), " Framework releases integrated into RW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic Versioning:"
        }), " PVW automatically manages framework versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual Versioning:"
        }), " Project and framework versions tracked independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Tagging:"
        }), " Framework releases tagged for distribution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Comprehensive validation at each stage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-release-workflow",
      children: "9.2 Release Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Make Changes → Run RW → PVW Detects → PVW Analyzes → \nPVW Determines Bumps → PVW Updates → PVW Validates → \nRW Continues → Changelog Created → Git Tagged → Pushed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-release-checklist",
      children: "9.3 Release Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Release:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Framework changes completed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Tests passing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version bump determined"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Validation passing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW executed successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "PVW executed successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Changelog entries created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Git tag created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Pushed to remote"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Release:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Release verified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Kanban board updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Distribution tags created"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Task:"
      }), " E6:S01", ":T02", " - Create framework release processes"]
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