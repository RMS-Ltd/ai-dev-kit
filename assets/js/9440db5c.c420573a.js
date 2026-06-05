"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["99863"], {
94628(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_documentation_review_workflow_guide_md_944_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-documentation-review-workflow-guide-md-944.json
var site_docs_architecture_standards_and_adrs_documentation_review_workflow_guide_md_944_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/documentation-review-workflow-guide","title":"Documentation Review Workflow Guide","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/documentation-review-workflow-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/documentation-review-workflow-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-review-workflow-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/documentation-review-workflow-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-06T22:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Documentation Review Cadences","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-review-cadences"},"next":{"title":"Documentation Update Triggers","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-update-triggers"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/documentation-review-workflow-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-06T22:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Documentation Review Workflow Guide';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Quick Start",
  "id": "quick-start",
  "level": 2
}, {
  "value": "Generate Review Schedule",
  "id": "generate-review-schedule",
  "level": 3
}, {
  "value": "Track Review Status",
  "id": "track-review-status",
  "level": 3
}, {
  "value": "Review Workflow Process",
  "id": "review-workflow-process",
  "level": 2
}, {
  "value": "1. Review Planning",
  "id": "1-review-planning",
  "level": 3
}, {
  "value": "2. Review Execution",
  "id": "2-review-execution",
  "level": 3
}, {
  "value": "3. Review Completion",
  "id": "3-review-completion",
  "level": 3
}, {
  "value": "Review Workflow Script",
  "id": "review-workflow-script",
  "level": 2
}, {
  "value": "Script Features",
  "id": "script-features",
  "level": 3
}, {
  "value": "Usage Examples",
  "id": "usage-examples",
  "level": 3
}, {
  "value": "Review Workflow Integration",
  "id": "review-workflow-integration",
  "level": 2
}, {
  "value": "Kanban Integration",
  "id": "kanban-integration",
  "level": 3
}, {
  "value": "Release Workflow Integration",
  "id": "release-workflow-integration",
  "level": 3
}, {
  "value": "Review Workflow Templates",
  "id": "review-workflow-templates",
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
        id: "documentation-review-workflow-guide",
        children: "Documentation Review Workflow Guide"
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
      }), " Story 2 - Documentation Quality Assurance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E5:S02", ":T02", " - Implement documentation review workflows"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide explains how to use the documentation review workflow tools to conduct systematic documentation reviews based on review cadences. The workflow supports review assignment, tracking, and task creation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "documentation-review-workflow.py"
        }), " - Review workflow automation script"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review cadences (Weekly/Monthly/Quarterly/Annual)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review assignment and tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban task creation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-start",
      children: "Quick Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generate-review-schedule",
      children: "Generate Review Schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate monthly review schedule\npython3 scripts/documentation/documentation-review-workflow.py \\\n  --cadence monthly \\\n  --path docs/\n\n# Generate weekly review schedule with assignments\npython3 scripts/documentation/documentation-review-workflow.py \\\n  --cadence weekly \\\n  --path docs/ \\\n  --assign\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "track-review-status",
      children: "Track Review Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Track review status for all documentation\npython3 scripts/documentation/documentation-review-workflow.py \\\n  --path docs/ \\\n  --track\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-workflow-process",
      children: "Review Workflow Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-review-planning",
      children: "1. Review Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Identify Documentation to Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check review cadence schedule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify documentation by type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine review scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare review checklist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Assignment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign reviews to documentation owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set review deadlines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create review tasks in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track review assignments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-review-execution",
      children: "2. Review Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conduct Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use appropriate review checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check accuracy, consistency, completeness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify currency and clarity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate format and links"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Findings:"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-review-completion",
      children: "3. Review Completion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Documentation:"
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
        children: "Track Outcomes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark review complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document improvements made"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule next review"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-workflow-script",
      children: "Review Workflow Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "script-features",
      children: "Script Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Schedule Generation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identifies documentation needing review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classifies documentation by type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determines review cadence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generates review schedule"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Assignment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assigns reviews to owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sets review deadlines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates Kanban tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracks assignments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracks review status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitors last review dates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identifies overdue reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reports review coverage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage-examples",
      children: "Usage Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate Monthly Review Schedule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 scripts/documentation/documentation-review-workflow.py \\\n  --cadence monthly \\\n  --path docs/ \\\n  --output monthly-review-schedule.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assign Weekly Reviews:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 scripts/documentation/documentation-review-workflow.py \\\n  --cadence weekly \\\n  --path docs/ \\\n  --assign \\\n  --output weekly-review-assignments.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Track All Review Status:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 scripts/documentation/documentation-review-workflow.py \\\n  --path docs/ \\\n  --track \\\n  --output review-status.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-workflow-integration",
      children: "Review Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-integration",
      children: "Kanban Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review tasks created automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assigned to documentation owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracked in Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completed via Kanban workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review status in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review assignments tracked"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review completion verified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review outcomes documented"
      }), "\n"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-workflow-templates",
      children: "Review Workflow Templates"
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
        children: "Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate weekly review schedule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign reviews to owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conduct reviews using checklist"
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
        children: "Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate monthly review schedule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign reviews to owners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conduct reviews using checklist"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Review Cadences:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/documentation-review-cadences.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
          children: "Story 2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-05/story-02-documentation-quality-assurance.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision Record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Implement documentation review workflow automation with schedule generation, assignment, and tracking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automates review schedule generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports review assignment and tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with Kanban for task management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables systematic review execution"
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