"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["52440"], {
80691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_documentation_update_triggers_md_5e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-documentation-update-triggers-md-5e2.json
var site_docs_architecture_standards_and_adrs_documentation_update_triggers_md_5e2_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/documentation-update-triggers","title":"Documentation Update Triggers","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/documentation-update-triggers.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/documentation-update-triggers","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-update-triggers","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/documentation-update-triggers.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-06T21:15:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Documentation Review Workflow Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-review-workflow-guide"},"next":{"title":"Dual-Versioning: RC.EPIC.STORY.TASK+BUILD + Package Manager SemVer","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dual-versioning-package-managers"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/documentation-update-triggers.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-06T21:15:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Documentation Update Triggers';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Trigger Categories",
  "id": "trigger-categories",
  "level": 2
}, {
  "value": "Automatic Triggers",
  "id": "automatic-triggers",
  "level": 3
}, {
  "value": "Manual Triggers",
  "id": "manual-triggers",
  "level": 3
}, {
  "value": "Automatic Update Triggers",
  "id": "automatic-update-triggers",
  "level": 2
}, {
  "value": "Code Change Triggers",
  "id": "code-change-triggers",
  "level": 3
}, {
  "value": "New Features Added",
  "id": "new-features-added",
  "level": 4
}, {
  "value": "API Changes",
  "id": "api-changes",
  "level": 4
}, {
  "value": "Process Changes",
  "id": "process-changes",
  "level": 4
}, {
  "value": "Configuration Changes",
  "id": "configuration-changes",
  "level": 4
}, {
  "value": "Framework Change Triggers",
  "id": "framework-change-triggers",
  "level": 3
}, {
  "value": "Framework Version Updates",
  "id": "framework-version-updates",
  "level": 4
}, {
  "value": "New Framework Features",
  "id": "new-framework-features",
  "level": 4
}, {
  "value": "Breaking Changes",
  "id": "breaking-changes",
  "level": 4
}, {
  "value": "Policy Change Triggers",
  "id": "policy-change-triggers",
  "level": 3
}, {
  "value": "Policy Updates",
  "id": "policy-updates",
  "level": 4
}, {
  "value": "Manual Update Triggers",
  "id": "manual-update-triggers",
  "level": 2
}, {
  "value": "Regular Review Triggers",
  "id": "regular-review-triggers",
  "level": 3
}, {
  "value": "Scheduled Review Cadences",
  "id": "scheduled-review-cadences",
  "level": 4
}, {
  "value": "Quarterly Comprehensive Reviews",
  "id": "quarterly-comprehensive-reviews",
  "level": 4
}, {
  "value": "User Feedback Triggers",
  "id": "user-feedback-triggers",
  "level": 3
}, {
  "value": "Documentation Issues Reported",
  "id": "documentation-issues-reported",
  "level": 4
}, {
  "value": "Confusion or Questions Identified",
  "id": "confusion-or-questions-identified",
  "level": 4
}, {
  "value": "Quality Assurance Triggers",
  "id": "quality-assurance-triggers",
  "level": 3
}, {
  "value": "Documentation Health Checks",
  "id": "documentation-health-checks",
  "level": 4
}, {
  "value": "Link Validation Failures",
  "id": "link-validation-failures",
  "level": 4
}, {
  "value": "Update Trigger Detection",
  "id": "update-trigger-detection",
  "level": 2
}, {
  "value": "Automated Detection",
  "id": "automated-detection",
  "level": 3
}, {
  "value": "Manual Detection",
  "id": "manual-detection",
  "level": 3
}, {
  "value": "Update Workflows",
  "id": "update-workflows",
  "level": 2
}, {
  "value": "Automatic Update Workflow",
  "id": "automatic-update-workflow",
  "level": 3
}, {
  "value": "Manual Update Workflow",
  "id": "manual-update-workflow",
  "level": 3
}, {
  "value": "Update Trigger Integration",
  "id": "update-trigger-integration",
  "level": 2
}, {
  "value": "Release Workflow Integration",
  "id": "release-workflow-integration",
  "level": 3
}, {
  "value": "Kanban Integration",
  "id": "kanban-integration",
  "level": 3
}, {
  "value": "Framework Health Monitoring Integration",
  "id": "framework-health-monitoring-integration",
  "level": 3
}, {
  "value": "Update Trigger Metrics",
  "id": "update-trigger-metrics",
  "level": 2
}, {
  "value": "Key Metrics",
  "id": "key-metrics",
  "level": 3
}, {
  "value": "Reporting",
  "id": "reporting",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Decision Record",
  "id": "decision-record",
  "level": 2
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
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "documentation-update-triggers",
        children: "Documentation Update Triggers"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-06", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 5 - Documentation Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 1 - Documentation Maintenance Framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E5:S01", ":T04", " - Establish documentation update triggers"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document defines explicit triggers that indicate when documentation must be updated, along with procedures for each trigger type. It establishes automatic and manual update triggers, event detection mechanisms, and update workflows to ensure documentation remains current with codebase and process changes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " Documentation updates must be triggered automatically when possible, and manually when necessary. All triggers must have clear procedures and ownership."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trigger-categories",
      children: "Trigger Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automatic-triggers",
      children: "Automatic Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features added"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes affecting behavior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework version updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New framework features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deprecation notices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Governance changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-triggers",
      children: "Manual Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular Reviews:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduled review cadences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quarterly comprehensive reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monthly targeted reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly spot checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Feedback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation issues reported"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusion or questions identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement suggestions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error reports"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Assurance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation health checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link validation failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency check failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format validation failures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "automatic-update-triggers",
      children: "Automatic Update Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-change-triggers",
      children: "Code Change Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "new-features-added",
      children: "New Features Added"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New feature implemented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature merged to main branch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature released"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API documentation (if applicable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples and tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify affected documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create or update feature documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update API documentation if applicable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add examples or tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update user guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add changelog entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate documentation accuracy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story owner responsible for initial documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic owner responsible for integration documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework owner responsible for framework-specific documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "api-changes",
      children: "API Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API signature changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New API endpoints added"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API behavior changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API deprecated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guides (if breaking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples using API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify affected API documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update API reference documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update integration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create migration guide if breaking change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update examples using API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog with breaking change notice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all examples work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API owner responsible for API documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework owner responsible for framework API docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration owner responsible for integration guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "process-changes",
      children: "Process Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow process changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release process changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review process changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Development process changed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Training materials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify affected process documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update process documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update workflow guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update training materials if applicable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add release notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify stakeholders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate process documentation accuracy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process owner responsible for process documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow owner responsible for workflow guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic owner responsible for epic-specific processes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "configuration-changes",
      children: "Configuration Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration schema changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New configuration options added"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration defaults changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration deprecated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Setup documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guides (if breaking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples with configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify affected configuration documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update configuration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update setup documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create migration guide if breaking change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update examples with configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate configuration examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration owner responsible for configuration docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework owner responsible for framework configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Setup owner responsible for setup documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-change-triggers",
      children: "Framework Change Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "framework-version-updates",
      children: "Framework Version Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework version bumped"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework released"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework tagged"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework README"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework version documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework release notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update framework version in README"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update framework version documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update framework changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create release notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update integration guides if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update framework health metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate framework documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework owner responsible for framework documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic owner responsible for epic-specific framework docs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "new-framework-features",
      children: "New Framework Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New framework feature added"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature merged to framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature released"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework feature documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create feature documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update framework guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add framework examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update integration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update framework changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate feature documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework owner responsible for framework feature docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story owner responsible for feature-specific documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "breaking-changes",
      children: "Breaking Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking change introduced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward compatibility broken"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deprecation notices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document breaking change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create migration guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add deprecation notices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update framework changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create release notes with breaking change notice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update affected documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate migration guide"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework owner responsible for breaking change docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration owner responsible for migration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic owner responsible for epic-specific breaking changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "policy-change-triggers",
      children: "Policy Change Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "policy-updates",
      children: "Policy Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy document updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New policy created"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standards documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Governance documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update policy documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related guides referencing policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update standards documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update governance documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify stakeholders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate policy documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy owner responsible for policy documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture owner responsible for standards documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Governance owner responsible for governance documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manual-update-triggers",
      children: "Manual Update Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regular-review-triggers",
      children: "Regular Review Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scheduled-review-cadences",
      children: "Scheduled Review Cadences"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review cadence reached (Weekly/Monthly/Quarterly/Annual)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review scheduled"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation in review scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow review cadence procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify documentation to review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conduct review using checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document findings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create action items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track review outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule next review"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review owner responsible for review execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation owner responsible for fixes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "quarterly-comprehensive-reviews",
      children: "Quarterly Comprehensive Reviews"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quarterly review scheduled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive review needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All standard documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify all standard documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conduct comprehensive review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document all findings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize action items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create improvement plan"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report review outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation team responsible for comprehensive reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation owners responsible for fixes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-feedback-triggers",
      children: "User Feedback Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "documentation-issues-reported",
      children: "Documentation Issues Reported"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User reports documentation issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue identified in feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error reported"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reported documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Acknowledge issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Investigate issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify affected documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix documentation issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate fix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify reporter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track issue resolution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation owner responsible for issue resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support owner responsible for user communication"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "confusion-or-questions-identified",
      children: "Confusion or Questions Identified"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User confusion identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Questions raised"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarity issues found"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusing documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify source of confusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review documentation clarity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve documentation clarity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add examples if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track clarity improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation owner responsible for clarity improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User experience owner responsible for user feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-assurance-triggers",
      children: "Quality Assurance Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "documentation-health-checks",
      children: "Documentation Health Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health check scheduled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health metrics below threshold"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health dashboard shows issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation with health issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review health metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify documentation with issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix documentation issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update health metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation owner responsible for health fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health monitoring owner responsible for health checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "link-validation-failures",
      children: "Link Validation Failures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Condition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broken link detected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link validation failed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Invalid link found"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation with broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link targets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix or remove broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update link targets if moved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track link health"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ownership:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation owner responsible for link fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation owner responsible for link validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-trigger-detection",
      children: "Update Trigger Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-detection",
      children: "Automated Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor code changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect framework updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track policy changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify breaking changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI/CD Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run validation checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect documentation issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trigger update workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify documentation owners"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health Monitoring:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track documentation health"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify health issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trigger health-based updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor improvement trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-detection",
      children: "Manual Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Processes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduled reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ad-hoc reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User feedback reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality assurance reviews"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Feedback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Question submissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement suggestions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error reports"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-workflows",
      children: "Update Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automatic-update-workflow",
      children: "Automatic Update Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Trigger Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect code/framework/policy change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify affected documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine update scope"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Update Planning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create update tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign to documentation owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set update priorities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Update Execution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate documentation accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review formatting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark tasks complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review schedules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-update-workflow",
      children: "Manual Update Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Trigger Identification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify update need"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess update scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine priority"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Update Planning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create update tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign to owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set deadlines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Update Execution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate documentation accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review formatting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark tasks complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review schedules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-trigger-integration",
      children: "Update Trigger Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-integration",
      children: "Release Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Steps 6-7:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic documentation updates during release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review documentation changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate documentation accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review schedules"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Documentation Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-integration",
      children: "Kanban Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR/BR Intake:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation issues as Feature Requests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation improvements as Tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update triggers tracked in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Action items managed in Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update tasks created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assigned to documentation owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracked in Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completed via Kanban workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-health-monitoring-integration",
      children: "Framework Health Monitoring Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation health scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update trigger metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue tracking metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health-Based Triggers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health score below threshold"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health issues identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health improvements needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health monitoring alerts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-trigger-metrics",
      children: "Update Trigger Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-metrics",
      children: "Key Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger Frequency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic triggers per period"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual triggers per period"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total triggers per period"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trigger trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates completed on time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates delayed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates pending"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update completion rate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Quality:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation accuracy after update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency after update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completeness after update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User satisfaction after update"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reporting",
      children: "Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monthly Update Report:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggers identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates pending"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update quality metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quarterly Update Report:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive update summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trigger trend analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update effectiveness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement recommendations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Maintenance Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/documentation-maintenance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Review Cadences:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/documentation-review-cadences.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 5:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-05/epic-05.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-05/story-01-documentation-maintenance-framework.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision Record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Establish explicit documentation update triggers with automatic and manual detection, clear procedures, and integration with existing workflows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures documentation updates when code/processes change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides clear procedures for each trigger type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables automated detection and updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports manual trigger identification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with Release Workflow, Kanban, and Health Monitoring"
      }), "\n"]
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