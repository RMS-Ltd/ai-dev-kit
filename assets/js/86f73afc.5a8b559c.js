"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["98946"], {
81980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_update_procedures_md_86f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-update-procedures-md-86f.json
var site_docs_architecture_standards_and_adrs_framework_update_procedures_md_86f_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-update-procedures","title":"Framework Update Procedures","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-update-procedures.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-update-procedures","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-update-procedures","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-update-procedures.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Update CLI Tool Design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-update-cli-design"},"next":{"title":"Framework Version Tagging Strategy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-version-tagging-strategy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-update-procedures.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Update Procedures';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Update Workflow Overview",
  "id": "1-update-workflow-overview",
  "level": 2
}, {
  "value": "1.1 Update Workflow Types",
  "id": "11-update-workflow-types",
  "level": 3
}, {
  "value": "1.2 Update Workflow Steps",
  "id": "12-update-workflow-steps",
  "level": 3
}, {
  "value": "2. Update Detection",
  "id": "2-update-detection",
  "level": 2
}, {
  "value": "2.1 Update Notification Methods",
  "id": "21-update-notification-methods",
  "level": 3
}, {
  "value": "2.2 Update Information",
  "id": "22-update-information",
  "level": 3
}, {
  "value": "3. Pre-Update Validation",
  "id": "3-pre-update-validation",
  "level": 2
}, {
  "value": "3.1 Compatibility Checking",
  "id": "31-compatibility-checking",
  "level": 3
}, {
  "value": "3.2 Update Policy Validation",
  "id": "32-update-policy-validation",
  "level": 3
}, {
  "value": "3.3 Pre-Update Checklist",
  "id": "33-pre-update-checklist",
  "level": 3
}, {
  "value": "4. Update Execution",
  "id": "4-update-execution",
  "level": 2
}, {
  "value": "4.1 Update Methods",
  "id": "41-update-methods",
  "level": 3
}, {
  "value": "4.2 Update Execution Steps",
  "id": "42-update-execution-steps",
  "level": 3
}, {
  "value": "5. Post-Update Validation",
  "id": "5-post-update-validation",
  "level": 2
}, {
  "value": "5.1 Version Verification",
  "id": "51-version-verification",
  "level": 3
}, {
  "value": "5.2 Functionality Testing",
  "id": "52-functionality-testing",
  "level": 3
}, {
  "value": "5.3 Integration Validation",
  "id": "53-integration-validation",
  "level": 3
}, {
  "value": "6. Update Testing Processes",
  "id": "6-update-testing-processes",
  "level": 2
}, {
  "value": "6.1 Testing Strategy",
  "id": "61-testing-strategy",
  "level": 3
}, {
  "value": "6.2 Test Environments",
  "id": "62-test-environments",
  "level": 3
}, {
  "value": "6.3 Test Automation",
  "id": "63-test-automation",
  "level": 3
}, {
  "value": "7. Rollback Procedures",
  "id": "7-rollback-procedures",
  "level": 2
}, {
  "value": "7.1 Rollback Triggers",
  "id": "71-rollback-triggers",
  "level": 3
}, {
  "value": "7.2 Rollback Methods",
  "id": "72-rollback-methods",
  "level": 3
}, {
  "value": "7.3 Rollback Validation",
  "id": "73-rollback-validation",
  "level": 3
}, {
  "value": "8. Update Procedures by Update Type",
  "id": "8-update-procedures-by-update-type",
  "level": 2
}, {
  "value": "8.1 PATCH Version Updates",
  "id": "81-patch-version-updates",
  "level": 3
}, {
  "value": "8.2 MINOR Version Updates",
  "id": "82-minor-version-updates",
  "level": 3
}, {
  "value": "8.3 MAJOR Version Updates",
  "id": "83-major-version-updates",
  "level": 3
}, {
  "value": "9. Update Best Practices",
  "id": "9-update-best-practices",
  "level": 2
}, {
  "value": "9.1 Update Timing",
  "id": "91-update-timing",
  "level": 3
}, {
  "value": "9.2 Update Preparation",
  "id": "92-update-preparation",
  "level": 3
}, {
  "value": "9.3 Update Execution",
  "id": "93-update-execution",
  "level": 3
}, {
  "value": "9.4 Update Documentation",
  "id": "94-update-documentation",
  "level": 3
}, {
  "value": "10. Update Troubleshooting",
  "id": "10-update-troubleshooting",
  "level": 2
}, {
  "value": "10.1 Common Issues",
  "id": "101-common-issues",
  "level": 3
}, {
  "value": "10.2 Update Recovery",
  "id": "102-update-recovery",
  "level": 3
}, {
  "value": "11. Related Documentation",
  "id": "11-related-documentation",
  "level": 2
}, {
  "value": "11.1 Core Documents",
  "id": "111-core-documents",
  "level": 3
}, {
  "value": "11.2 Supporting Documents",
  "id": "112-supporting-documents",
  "level": 3
}, {
  "value": "12. Summary",
  "id": "12-summary",
  "level": 2
}, {
  "value": "12.1 Key Principles",
  "id": "121-key-principles",
  "level": 3
}, {
  "value": "12.2 Update Workflow",
  "id": "122-update-workflow",
  "level": 3
}, {
  "value": "12.3 Update Methods",
  "id": "123-update-methods",
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
        id: "framework-update-procedures",
        children: "Framework Update Procedures"
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
      }), " Story 2 - Framework Update and Migration", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S02", ":T01", " - Create framework update procedures", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Versioning Strategy, Framework Release Process, Framework Compatibility Tracking, Framework Dependency Architecture"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive framework update procedures"
      }), " for AI Dev Kit frameworks. The procedures cover update workflows, update methods, compatibility checking, testing processes, and rollback procedures to ensure safe and reliable framework updates across projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Workflows:"
        }), " Standardized processes for different update scenarios"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple Methods:"
        }), " Support for Git submodules, subtrees, CLI tool, and package managers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility Checking:"
        }), " Pre-update validation and compatibility verification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing Processes:"
        }), " Update testing and validation procedures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback Support:"
        }), " Safe rollback procedures for failed updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-update-workflow-overview",
      children: "1. Update Workflow Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-update-workflow-types",
      children: "1.1 Update Workflow Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggered automatically based on update policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATCH versions (bug fixes, backward compatible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semi-automatic for MINOR versions (with notification)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User-initiated updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MINOR versions (new features, backward compatible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MAJOR versions (breaking changes, require migration)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduled Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Periodic update checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update notifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch updates for multiple frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-update-workflow-steps",
      children: "1.2 Update Workflow Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Update Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Update Detection\n   ├─ Check for available updates\n   ├─ Identify update type (PATCH/MINOR/MAJOR)\n   └─ Review update summary\n\n2. Pre-Update Validation\n   ├─ Check compatibility\n   ├─ Review breaking changes (if MAJOR)\n   ├─ Verify dependencies\n   └─ Check update policy\n\n3. Update Execution\n   ├─ Backup current installation\n   ├─ Execute update (method-specific)\n   ├─ Update configuration files\n   └─ Verify update completion\n\n4. Post-Update Validation\n   ├─ Verify framework version\n   ├─ Test functionality\n   ├─ Validate integration points\n   └─ Check for issues\n\n5. Rollback (if needed)\n   ├─ Identify rollback trigger\n   ├─ Restore previous version\n   ├─ Verify rollback success\n   └─ Document rollback reason\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-update-detection",
      children: "2. Update Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-update-notification-methods",
      children: "2.1 Update Notification Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Tool:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for updates\nai-dev-kit check\n\n# Output:\n# Framework: workflow-mgmt\n#   Current: 2.0.0\n#   Latest:  2.1.0\n#   Update Available: ✓\n#   Update Type: MINOR\n#   Breaking Changes: None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Checking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review framework changelogs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check framework repository tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor framework release announcements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Checking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduled update checks (daily, weekly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update notification services"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-update-information",
      children: "2.2 Update Information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Information:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current framework version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Available update version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update type (PATCH/MINOR/MAJOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes (if MAJOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration requirements (if MAJOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog summary"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Summary:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What changed in the update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features (if MINOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes (if PATCH)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes (if MAJOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide reference (if MAJOR)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-pre-update-validation",
      children: "3. Pre-Update Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-compatibility-checking",
      children: "3.1 Compatibility Checking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Compatibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check minimum version requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify dependency compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate version ranges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for version conflicts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency Compatibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify framework dependencies meet minimum versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for dependency conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate compatibility matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review dependency update requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review changelog for breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check migration guide requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify migration readiness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess impact on project"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-update-policy-validation",
      children: "3.2 Update Policy Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify update policy allows update type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check version pinning status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate auto-update settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review update approval requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml\nupdate_policy:\n  patch: auto      # Automatic PATCH updates\n  minor: notify    # Notify for MINOR updates\n  major: manual    # Manual MAJOR updates\n\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    pin: false     # Allow updates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-pre-update-checklist",
      children: "3.3 Pre-Update Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Current framework version documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update version identified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Compatibility verified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Breaking changes reviewed (if MAJOR)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Migration guide reviewed (if MAJOR)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update policy allows update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Backup created (recommended)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Testing plan prepared"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-update-execution",
      children: "4. Update Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-update-methods",
      children: "4.1 Update Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 1: Git Submodules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Navigate to submodule\ncd .ai-dev-kit\n\n# 2. Fetch latest changes\ngit fetch origin\n\n# 3. List available versions\ngit tag | grep workflow-mgt\n\n# 4. Checkout new version\ngit checkout workflow-mgt-v2.1.0\n\n# 5. Return to project root\ncd ..\n\n# 6. Copy updated framework\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\n\n# 7. Commit update\ngit add frameworks/\ngit commit -m \"Update workflow-mgmt framework to v2.1.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Update Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# update-framework.sh\nFRAMEWORK=$1\nVERSION=$2\n\ncd .ai-dev-kit\ngit fetch origin\ngit checkout \"${FRAMEWORK}-v${VERSION}\"\ncd ..\ncp -r \".ai-dev-kit/packages/frameworks/${FRAMEWORK}/\" \"./frameworks/${FRAMEWORK}/\"\ngit add frameworks/\ngit commit -m \"Update ${FRAMEWORK} framework to v${VERSION}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 2: Git Subtrees"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Pull latest changes from framework repository\ngit subtree pull --prefix=frameworks/workflow-mgmt \\\n    https://github.com/RMS-Ltd/ai-dev-kit.git \\\n    workflow-mgt-v2.1.0 \\\n    --squash\n\n# 2. Resolve conflicts if any\n# 3. Commit update\ngit commit -m \"Update workflow-mgmt framework to v2.1.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 3: CLI Tool"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update specific framework\nai-dev-kit update workflow-mgmt\n\n# Update to specific version\nai-dev-kit update workflow-mgmt@2.1.0\n\n# Update all frameworks\nai-dev-kit update --all\n\n# Dry run (preview changes)\nai-dev-kit update workflow-mgmt --dry-run\n\n# Update with compatibility check\nai-dev-kit update workflow-mgmt --check-compatibility\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Update Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for available updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup current installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update configuration files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run post-update validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 4: Package Managers"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "npm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update to latest compatible version\nnpm update @ai-dev-kit/workflow-mgmt\n\n# Update to specific version\nnpm install @ai-dev-kit/workflow-mgmt@2.1.0\n\n# Update all frameworks\nnpm update\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "pip:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update to latest version\npip install --upgrade ai-dev-kit-workflow-mgmt\n\n# Update to specific version\npip install --upgrade ai-dev-kit-workflow-mgmt==2.1.0\n\n# Update all frameworks\npip install --upgrade -r requirements.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-update-execution-steps",
      children: "4.2 Update Execution Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Execution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup:"
        }), " Create backup of current installation (recommended)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Download:"
        }), " Fetch new framework version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Install:"
        }), " Install/update framework files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configure:"
        }), " Update configuration files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify:"
        }), " Verify installation success"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Backup current framework installation\ncp -r frameworks/workflow-mgmt frameworks/workflow-mgmt.backup\n\n# Or use Git\ngit commit -m \"Backup before framework update\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), " (if using package managers)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update framework paths if changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update integration references if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-post-update-validation",
      children: "5. Post-Update Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-version-verification",
      children: "5.1 Version Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify framework version updated correctly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check version in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify version in configuration files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm version matches expected update"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check framework version\ngrep \"Version:\" frameworks/workflow-mgmt/README.md\n\n# Check CLI tool version\nai-dev-kit status\n\n# Check package manager version\nnpm list @ai-dev-kit/workflow-mgmt\npip show ai-dev-kit-workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-functionality-testing",
      children: "5.2 Functionality Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Categories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic Functionality:"
        }), " Core framework features work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Points:"
        }), " Framework integrates correctly with project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration:"
        }), " Framework configuration is valid"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependencies:"
        }), " Framework dependencies are compatible"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run framework-specific tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test integration points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for errors or warnings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate functionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run framework tests (if available)\ncd frameworks/workflow-mgmt\nnpm test  # or pytest, etc.\n\n# Test integration\n# Run project tests that use framework\nnpm test\n\n# Check for errors\nai-dev-kit check\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-integration-validation",
      children: "5.3 Integration Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework files accessible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework paths correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework imports work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework configuration valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework dependencies resolved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework-specific validation scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-update-testing-processes",
      children: "6. Update Testing Processes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-testing-strategy",
      children: "6.1 Testing Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unit Tests:"
        }), " Framework-specific functionality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Tests:"
        }), " Framework integration with project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System Tests:"
        }), " End-to-end framework usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regression Tests:"
        }), " Verify no regressions introduced"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Pre-Update Testing\n   ├─ Run current test suite\n   ├─ Document baseline behavior\n   └─ Identify test coverage\n\n2. Update Execution\n   ├─ Execute update\n   └─ Verify update completion\n\n3. Post-Update Testing\n   ├─ Run test suite\n   ├─ Compare with baseline\n   ├─ Identify new issues\n   └─ Validate fixes\n\n4. Integration Testing\n   ├─ Test framework integration\n   ├─ Verify configuration\n   └─ Check dependencies\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-test-environments",
      children: "6.2 Test Environments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Environments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Development:"
        }), " Test updates in development first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Staging:"
        }), " Validate updates in staging environment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Production:"
        }), " Deploy updates to production after validation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Environment Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test update in development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate in staging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy to production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-test-automation",
      children: "6.3 Test Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Testing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD integration for update testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated compatibility checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated functionality tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated regression tests"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI/CD Integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/framework-update-test.yml\nname: Framework Update Test\non:\n  workflow_dispatch:\n    inputs:\n      framework:\n        description: 'Framework to update'\n        required: true\n      version:\n        description: 'Version to update to'\n        required: true\n\njobs:\n  test-update:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Update framework\n        run: ai-dev-kit update ${{ inputs.framework }}@${{ inputs.version }}\n      - name: Run tests\n        run: npm test\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-rollback-procedures",
      children: "7. Rollback Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-rollback-triggers",
      children: "7.1 Rollback Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Rollback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update causes functionality breakage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update introduces critical bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update breaks integration points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update causes configuration errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update fails validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Decision:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess severity of issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine if rollback is necessary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider alternative fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document rollback reason"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-rollback-methods",
      children: "7.2 Rollback Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 1: Git Submodules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Navigate to submodule\ncd .ai-dev-kit\n\n# 2. Checkout previous version\ngit checkout workflow-mgt-v2.0.0\n\n# 3. Return to project root\ncd ..\n\n# 4. Copy previous framework version\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\n\n# 5. Commit rollback\ngit add frameworks/\ngit commit -m \"Rollback workflow-mgmt framework to v2.0.0 (reason: breaking change)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 2: Git Subtrees"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Pull previous version\ngit subtree pull --prefix=frameworks/workflow-mgmt \\\n    https://github.com/RMS-Ltd/ai-dev-kit.git \\\n    workflow-mgt-v2.0.0 \\\n    --squash\n\n# 2. Commit rollback\ngit commit -m \"Rollback workflow-mgmt framework to v2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 3: CLI Tool"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Rollback to previous version\nai-dev-kit update workflow-mgmt@2.0.0\n\n# Or restore from backup\nai-dev-kit restore workflow-mgmt --backup\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 4: Package Managers"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "npm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install previous version\nnpm install @ai-dev-kit/workflow-mgmt@2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "pip:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install previous version\npip install ai-dev-kit-workflow-mgmt==2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 5: Backup Restoration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore from Backup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Restore from backup directory\ncp -r frameworks/workflow-mgmt.backup frameworks/workflow-mgmt\n\n# Or restore from Git commit\ngit checkout HEAD~1 -- frameworks/workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-rollback-validation",
      children: "7.3 Rollback Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Rollback Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify previous version restored"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for rollback issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document rollback completion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document rollback reason"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Record previous and rolled-back versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note any issues encountered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update compatibility tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-update-procedures-by-update-type",
      children: "8. Update Procedures by Update Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-patch-version-updates",
      children: "8.1 PATCH Version Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Type:"
      }), " Bug fixes, corrections (backward compatible)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection:"
        }), " Automatic or manual check"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Quick compatibility check"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution:"
        }), " Automatic or manual update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Basic functionality test"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completion:"
        }), " Update documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic updates recommended"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimal testing required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low risk of issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quick rollback if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Automatic PATCH update\nai-dev-kit update workflow-mgmt  # Updates 2.0.0 → 2.0.1\n\n# Or manual\ngit checkout workflow-mgt-v2.0.1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-minor-version-updates",
      children: "8.2 MINOR Version Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Type:"
      }), " New features, enhancements (backward compatible)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection:"
        }), " Notification or manual check"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Compatibility check, review changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution:"
        }), " Manual or semi-automatic update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Functionality and integration testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completion:"
        }), " Update documented, new features tested"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic or semi-automatic updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Moderate testing required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low to moderate risk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review new features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# MINOR update with notification\nai-dev-kit check  # Notifies: 2.0.0 → 2.1.0 available\nai-dev-kit update workflow-mgmt  # User approves update\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-major-version-updates",
      children: "8.3 MAJOR Version Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Type:"
      }), " Breaking changes, incompatible changes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection:"
        }), " Manual check or notification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Review breaking changes, migration guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planning:"
        }), " Plan migration strategy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution:"
        }), " Manual update with migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Comprehensive testing, migration verification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completion:"
        }), " Migration documented, update verified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual updates required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive testing required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High risk (breaking changes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# MAJOR update with migration\n# 1. Review migration guide\ncat frameworks/workflow-mgmt/MIGRATION_GUIDE.md\n\n# 2. Plan migration\n# 3. Execute update\nai-dev-kit update workflow-mgmt@3.0.0\n\n# 4. Complete migration steps\n# 5. Test thoroughly\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-update-best-practices",
      children: "9. Update Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-update-timing",
      children: "9.1 Update Timing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update PATCH versions immediately (bug fixes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update MINOR versions when new features are needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update MAJOR versions when ready for migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test updates in development first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule updates during low-activity periods"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-update-preparation",
      children: "9.2 Update Preparation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preparation Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review changelog before updating"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check compatibility requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare testing plan"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create backup (recommended)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule update window"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-update-execution",
      children: "9.3 Update Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow update procedures step-by-step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor update process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify each step completion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document any issues encountered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test immediately after update"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-update-documentation",
      children: "9.4 Update Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document update version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Record update date and method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note any issues or workarounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update compatibility tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document rollback if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-update-troubleshooting",
      children: "10. Update Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-common-issues",
      children: "10.1 Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Update Fails"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update command fails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework files not updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version not changed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check update method compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify framework version exists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check network connectivity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review error messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Try alternative update method"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Compatibility Conflicts"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency version conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework incompatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration breakage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review compatibility matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update dependencies first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check version requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve conflicts manually"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider delaying update"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Functionality Breakage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework features not working"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review changelog for changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check migration guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test integration points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider rollback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-update-recovery",
      children: "10.2 Update Recovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovery Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess severity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine recovery method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute recovery (rollback or fix)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate recovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document issue and recovery"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-related-documentation",
      children: "11. Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-core-documents",
      children: "11.1 Core Documents"
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
            children: "Version bump criteria"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Release Process:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-release-process.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework release workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release validation procedures"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Compatibility Tracking:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-compatibility-tracking.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compatibility matrix"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backward compatibility policies"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Dependency Architecture:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-dependency-architecture.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework installation methods"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dependency management strategies"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-supporting-documents",
      children: "11.2 Supporting Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Dependency Update Guide:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/documentation/user-docs/framework-dependency-update-guide.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "User-facing update guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update examples and workflows"
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
            children: "Package maintenance guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PVW execution"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-summary",
      children: "12. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-key-principles",
      children: "12.1 Key Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standardized Workflows:"
        }), " Consistent update processes across all methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple Methods:"
        }), " Support for Git submodules, subtrees, CLI tool, package managers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility Checking:"
        }), " Pre-update validation and compatibility verification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing Processes:"
        }), " Comprehensive update testing and validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback Support:"
        }), " Safe rollback procedures for failed updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-update-workflow",
      children: "12.2 Update Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Update Detection → Pre-Update Validation → Update Execution → \nPost-Update Validation → Testing → Completion (or Rollback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-update-methods",
      children: "12.3 Update Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Submodules:"
        }), " Manual or automated checkout of framework tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Subtrees:"
        }), " Merge framework tags into project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Tool:"
        }), " Unified interface for all update operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Managers:"
        }), " Standard npm/pip update workflows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Task:"
      }), " E6:S02", ":T01", " - Create framework update procedures"]
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