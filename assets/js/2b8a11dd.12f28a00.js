"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["29865"], {
31562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_documentation_review_cadences_md_2b8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-documentation-review-cadences-md-2b8.json
var site_docs_architecture_standards_and_adrs_documentation_review_cadences_md_2b8_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/documentation-review-cadences","title":"Documentation Review Cadences","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/documentation-review-cadences.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/documentation-review-cadences","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-review-cadences","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/documentation-review-cadences.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-06T20:50:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Documentation Maintenance Policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-maintenance-policy"},"next":{"title":"Documentation Review Workflow Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-review-workflow-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/documentation-review-cadences.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-06T20:50:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Documentation Review Cadences';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Review Cadence Framework",
  "id": "review-cadence-framework",
  "level": 2
}, {
  "value": "Cadence Categories",
  "id": "cadence-categories",
  "level": 3
}, {
  "value": "Review Procedures",
  "id": "review-procedures",
  "level": 2
}, {
  "value": "Pre-Review Preparation",
  "id": "pre-review-preparation",
  "level": 3
}, {
  "value": "Review Execution",
  "id": "review-execution",
  "level": 3
}, {
  "value": "Post-Review Actions",
  "id": "post-review-actions",
  "level": 3
}, {
  "value": "Review Checklists",
  "id": "review-checklists",
  "level": 2
}, {
  "value": "Critical Documentation Review Checklist",
  "id": "critical-documentation-review-checklist",
  "level": 3
}, {
  "value": "High-Priority Documentation Review Checklist",
  "id": "high-priority-documentation-review-checklist",
  "level": 3
}, {
  "value": "Standard Documentation Review Checklist",
  "id": "standard-documentation-review-checklist",
  "level": 3
}, {
  "value": "Low-Priority Documentation Review Checklist",
  "id": "low-priority-documentation-review-checklist",
  "level": 3
}, {
  "value": "Review Assignment and Tracking",
  "id": "review-assignment-and-tracking",
  "level": 2
}, {
  "value": "Assignment Process",
  "id": "assignment-process",
  "level": 3
}, {
  "value": "Review Outcomes",
  "id": "review-outcomes",
  "level": 3
}, {
  "value": "Review Documentation",
  "id": "review-documentation",
  "level": 2
}, {
  "value": "Review Records",
  "id": "review-records",
  "level": 3
}, {
  "value": "Review Workflows",
  "id": "review-workflows",
  "level": 2
}, {
  "value": "Weekly Critical Documentation Review",
  "id": "weekly-critical-documentation-review",
  "level": 3
}, {
  "value": "Monthly High-Priority Documentation Review",
  "id": "monthly-high-priority-documentation-review",
  "level": 3
}, {
  "value": "Quarterly Standard Documentation Review",
  "id": "quarterly-standard-documentation-review",
  "level": 3
}, {
  "value": "Annual Low-Priority Documentation Review",
  "id": "annual-low-priority-documentation-review",
  "level": 3
}, {
  "value": "Review Metrics",
  "id": "review-metrics",
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
  "value": "Integration with Other Processes",
  "id": "integration-with-other-processes",
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
  "value": "Framework Health Monitoring",
  "id": "framework-health-monitoring",
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
        id: "documentation-review-cadences",
        children: "Documentation Review Cadences"
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
      }), " E5:S01", ":T03", " - Create documentation review cadences"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document defines review cadences, procedures, and checklists for maintaining documentation quality across the ai-dev-kit repository. It establishes systematic review schedules based on documentation priority and provides structured processes for conducting reviews."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " Documentation reviews must be systematic, thorough, and actionable. Reviews should identify issues, prioritize fixes, and track improvements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-cadence-framework",
      children: "Review Cadence Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cadence-categories",
      children: "Cadence Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Documentation (Weekly Review):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning policies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Core framework READMEs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical process documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "High-Priority Documentation (Monthly Review):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework guides and tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture documents (ADRs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User-facing documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Documentation (Quarterly Review):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "General guides and tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples and case studies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference materials"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Low-Priority Documentation (Annual Review):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deprecated feature documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical reference materials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive-only documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-procedures",
      children: "Review Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-review-preparation",
      children: "Pre-Review Preparation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Identify Documentation to Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check review schedule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify documentation by category"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gather related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for related code changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Gather Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review related code/implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for user feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check version history"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Prepare Review Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select appropriate checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customize for specific documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify review focus areas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set review scope"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-execution",
      children: "Review Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Accuracy Check:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify information against current implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check version numbers and dates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate examples and code snippets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm process descriptions match actual workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Consistency Check:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference with related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify terminology consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check process alignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate version synchronization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Completeness Check:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify required sections present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check examples are comprehensive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate edge cases documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm troubleshooting included"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Currency Check:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify last update date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for outdated information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate links and references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess relevance to current state"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Clarity Check:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate language clarity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check technical term definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess example relevance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review structure and navigation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Format Check:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify markdown formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check front-matter metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate template compliance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review link formatting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "post-review-actions",
      children: "Post-Review Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Document Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Record issues identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Categorize by severity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document recommendations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Create Action Items:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign fixes to owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set deadlines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Update Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix critical issues immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule high-priority fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan medium/low priority improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update last reviewed date"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Follow-Up:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify fixes completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review schedule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document lessons learned"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-checklists",
      children: "Review Checklists"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "critical-documentation-review-checklist",
      children: "Critical Documentation Review Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accuracy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Information matches current implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version numbers are current"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Examples work as documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Processes match actual workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Dates are current"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Consistent with related documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Terminology is consistent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Processes align across documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Versions are synchronized"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completeness:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Required sections present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Examples are comprehensive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "] Edge cases documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Troubleshooting included"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Currency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Last update within last week"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No outdated information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Links are valid"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "References are current"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Clarity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Language is clear"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Technical terms defined"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Examples are relevant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Structure is logical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Markdown formatting correct"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Front-matter complete"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Template compliance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Links formatted correctly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-priority-documentation-review-checklist",
      children: "High-Priority Documentation Review Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accuracy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Information matches current implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version numbers are current"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Examples work as documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Processes match actual workflows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Consistent with related documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Terminology is consistent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Processes align across documents"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completeness:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Required sections present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Examples are comprehensive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Edge cases documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Currency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Last update within last month"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No outdated information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Links are valid"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Clarity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Language is clear"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Technical terms defined"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Examples are relevant"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Markdown formatting correct"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Front-matter complete"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Template compliance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standard-documentation-review-checklist",
      children: "Standard Documentation Review Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accuracy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Information matches current implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version numbers are current"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Examples work as documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Consistent with related documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Terminology is consistent"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completeness:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Required sections present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Examples are comprehensive"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Currency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Last update within last quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No outdated information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Links are valid"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Clarity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Language is clear"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Technical terms defined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Markdown formatting correct"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Front-matter complete"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "low-priority-documentation-review-checklist",
      children: "Low-Priority Documentation Review Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accuracy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Information is still relevant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Version numbers noted if applicable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No major contradictions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completeness:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Core information present"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Currency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Last update within last year"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Still relevant or marked deprecated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Clarity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Language is understandable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Basic formatting correct"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-assignment-and-tracking",
      children: "Review Assignment and Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "assignment-process",
      children: "Assignment Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Assignment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical documentation: Assigned to Epic owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High-priority documentation: Assigned to Framework owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard documentation: Assigned to Story owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low-priority documentation: Assigned to Documentation team"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Scheduling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly reviews: Every Monday"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monthly reviews: First Monday of month"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quarterly reviews: First Monday of quarter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Annual reviews: First Monday of year"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track in Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Story/Task tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document review outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-outcomes",
      children: "Review Outcomes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Status:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pass:"
        }), " Documentation meets all standards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minor Issues:"
        }), " Small fixes needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Major Issues:"
        }), " Significant updates required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Issues:"
        }), " Immediate fixes needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action Items:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create tasks for fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign to documentation owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set deadlines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track completion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-Up:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify fixes completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-review if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review schedule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-documentation",
      children: "Review Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-records",
      children: "Review Records"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Documentation Must Include:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reviewer name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation reviewed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issues identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Action items created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow-up date"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Template:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Documentation Review Record\n\n**Review Date:** YYYY-MM-DD\n**Reviewer:** Name\n**Documentation:** Path to documentation\n**Review Type:** Critical/High-Priority/Standard/Low-Priority\n\n### Issues Identified\n\n#### Critical Issues\n- Issue 1\n- Issue 2\n\n#### High-Priority Issues\n- Issue 1\n- Issue 2\n\n#### Medium-Priority Issues\n- Issue 1\n- Issue 2\n\n#### Low-Priority Issues\n- Issue 1\n- Issue 2\n\n### Action Items\n\n- [ ] Action item 1 (Assigned to: Owner, Deadline: Date)\n- [ ] Action item 2 (Assigned to: Owner, Deadline: Date)\n\n### Review Status\n\n**Overall Status:** Pass/Minor Issues/Major Issues/Critical Issues\n\n**Next Review Date:** YYYY-MM-DD\n\n### Notes\n\nAdditional notes and observations...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-workflows",
      children: "Review Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "weekly-critical-documentation-review",
      children: "Weekly Critical Documentation Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schedule:"
      }), " Every Monday\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " 1-2 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Critical documentation only"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify critical documentation to review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use critical documentation checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review each document systematically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document findings and create action items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review status and schedule"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monthly-high-priority-documentation-review",
      children: "Monthly High-Priority Documentation Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schedule:"
      }), " First Monday of month\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " 2-4 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " High-priority documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify high-priority documentation to review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use high-priority documentation checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review each document systematically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document findings and create action items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review status and schedule"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quarterly-standard-documentation-review",
      children: "Quarterly Standard Documentation Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schedule:"
      }), " First Monday of quarter\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " 4-8 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Standard documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify standard documentation to review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use standard documentation checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review each document systematically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document findings and create action items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review status and schedule"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "annual-low-priority-documentation-review",
      children: "Annual Low-Priority Documentation Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schedule:"
      }), " First Monday of year\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " 1-2 days\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Low-priority documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify low-priority documentation to review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use low-priority documentation checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review each document systematically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document findings and create action items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review status and schedule"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-metrics",
      children: "Review Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-metrics",
      children: "Key Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Coverage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Percentage of documentation reviewed on schedule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average time since last review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review completion rate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Quality:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issues identified per review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix completion rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review effectiveness score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Efficiency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average review time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reviews per reviewer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Action item resolution time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reporting",
      children: "Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monthly Review Report:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reviews completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issues identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixes completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coverage statistics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quarterly Review Report:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive review summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trend analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement recommendations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-with-other-processes",
      children: "Integration with Other Processes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-integration",
      children: "Release Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 6-7:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation updates during release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review documentation changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate documentation accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review schedules"
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
        children: "Review outcomes tracked in Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-health-monitoring",
      children: "Framework Health Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation health scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review status metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue tracking metrics"
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
      }), " Establish systematic review cadences with structured procedures, checklists, and tracking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures documentation is reviewed regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides structured approach to reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables consistent quality assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports proactive maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracks review outcomes and improvements"
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