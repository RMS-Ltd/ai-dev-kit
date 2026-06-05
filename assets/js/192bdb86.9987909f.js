"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["97758"], {
21731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_code_quality_kanban_integration_md_192_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-code-quality-kanban-integration-md-192.json
var site_docs_architecture_standards_and_adrs_code_quality_kanban_integration_md_192_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/code-quality-kanban-integration","title":"Code Quality Metrics Kanban Integration","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/code-quality-kanban-integration.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/code-quality-kanban-integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-quality-kanban-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/code-quality-kanban-integration.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-05T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Changelog Ordering Investigation Report","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/changelog-ordering-investigation-report"},"next":{"title":"Code Quality Metrics Framework","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-quality-metrics-framework"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/code-quality-kanban-integration.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-05T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Code Quality Metrics Kanban Integration';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Integration Overview",
  "id": "integration-overview",
  "level": 2
}, {
  "value": "Epic 7, Story 3 Structure",
  "id": "epic-7-story-3-structure",
  "level": 3
}, {
  "value": "Quality Metrics in Kanban Tasks",
  "id": "quality-metrics-in-kanban-tasks",
  "level": 2
}, {
  "value": "Task-Level Quality Metrics",
  "id": "task-level-quality-metrics",
  "level": 3
}, {
  "value": "Quality-Based Task Prioritization",
  "id": "quality-based-task-prioritization",
  "level": 3
}, {
  "value": "Quality Tracking in Kanban Board",
  "id": "quality-tracking-in-kanban-board",
  "level": 2
}, {
  "value": "Board-Level Quality Metrics",
  "id": "board-level-quality-metrics",
  "level": 3
}, {
  "value": "Quality Alerts in Board",
  "id": "quality-alerts-in-board",
  "level": 3
}, {
  "value": "Quality Workflow Integration",
  "id": "quality-workflow-integration",
  "level": 2
}, {
  "value": "Quality Improvement Workflow",
  "id": "quality-improvement-workflow",
  "level": 3
}, {
  "value": "Quality Review Workflow",
  "id": "quality-review-workflow",
  "level": 3
}, {
  "value": "Quality Metrics Reporting",
  "id": "quality-metrics-reporting",
  "level": 2
}, {
  "value": "Quality Reports in Kanban",
  "id": "quality-reports-in-kanban",
  "level": 3
}, {
  "value": "Quality Metrics Dashboard",
  "id": "quality-metrics-dashboard",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Quality Improvement Task",
  "id": "example-1-quality-improvement-task",
  "level": 3
}, {
  "value": "Example 2: Quality Review Task",
  "id": "example-2-quality-review-task",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Quality Metrics Usage",
  "id": "quality-metrics-usage",
  "level": 3
}, {
  "value": "Quality Task Management",
  "id": "quality-task-management",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "code-quality-metrics-kanban-integration",
        children: "Code Quality Metrics Kanban Integration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 7 - Codebase Maintenance and Review", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 3 - Code Quality Metrics and Monitoring", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E7:S03", ":T03", " - Integrate metrics with Kanban framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Code Quality Metrics Framework, Maintenance Kanban Integration, Code Review Kanban Integration"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "integration of code quality metrics with the Kanban framework"
      }), ". It establishes how quality metrics are tracked, displayed, and used within the Kanban system for systematic quality management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Visibility:"
        }), " Quality metrics visible in Kanban tasks and board"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality-Driven Prioritization:"
        }), " Quality metrics inform task prioritization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Tracking:"
        }), " Quality improvements tracked through Kanban"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Reporting:"
        }), " Quality metrics reported through Kanban"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-overview",
      children: "Integration Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epic-7-story-3-structure",
      children: "Epic 7, Story 3 Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story 3: Code Quality Metrics and Monitoring"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T01: Code quality metrics framework (COMPLETE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T02: Code quality monitoring dashboards (COMPLETE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T03: Kanban integration (this task)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T04: Metrics and monitoring processes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration with Epic 4 (Kanban Framework):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics use Epic 4's Kanban framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality tasks follow Epic 4's task patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality tracking integrates with Epic 4's workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quality-metrics-in-kanban-tasks",
      children: "Quality Metrics in Kanban Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-level-quality-metrics",
      children: "Task-Level Quality Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Document Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Score:"
        }), " Overall quality score for task-related code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Dimensions:"
        }), " Scores for each quality dimension"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Issues:"
        }), " List of quality issues in task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Debt:"
        }), " Technical debt associated with task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Metadata:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality impact assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality improvement opportunities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality-related dependencies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-based-task-prioritization",
      children: "Quality-Based Task Prioritization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prioritization Factors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality impact (high/medium/low)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality urgency (critical/warning/info)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality debt (hours to fix)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality improvement potential"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW Mapping:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Must Have:"
        }), " Critical quality issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Should Have:"
        }), " High-priority quality improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Could Have:"
        }), " Medium-priority quality improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Won't Have:"
        }), " Low-priority quality improvements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quality-tracking-in-kanban-board",
      children: "Quality Tracking in Kanban Board"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "board-level-quality-metrics",
      children: "Board-Level Quality Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overall Quality Display:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project quality score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality status indicator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality trend indicator"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality by Epic/Story:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality scores per epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality scores per story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality improvement tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-alerts-in-board",
      children: "Quality Alerts in Board"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alert Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical quality issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality threshold violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality degradation alerts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alert Display:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Visual indicators in board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alert count badges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alert details in tooltips"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quality-workflow-integration",
      children: "Quality Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-improvement-workflow",
      children: "Quality Improvement Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify quality issues from metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create quality improvement tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize based on quality impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track improvement progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate quality improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality tasks in Epic 7"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality prioritization in MoSCOW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality tracking in task lifecycle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-review-workflow",
      children: "Quality Review Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review quality metrics regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify quality trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan quality improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track quality progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report quality status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality reviews as tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics in reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality reports in Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quality-metrics-reporting",
      children: "Quality Metrics Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-reports-in-kanban",
      children: "Quality Reports in Kanban"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Report Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality status reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality trend reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality improvement reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality dashboard summaries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Report Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reports in Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reports in task documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reports in epic/story documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-metrics-dashboard",
      children: "Quality Metrics Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dashboard Location:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board quality section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate quality dashboard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics in task views"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dashboard Content:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overall quality metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dimension breakdowns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality alerts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-quality-improvement-task",
      children: "Example 1: Quality Improvement Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " Improve code complexity in module X"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current complexity: 25 (Critical)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Target complexity: ≤ 10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality debt: 8 hours"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task in Epic 7, Story 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority: Should Have (S)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics in task document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Progress tracked in Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-quality-review-task",
      children: "Example 2: Quality Review Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " Monthly quality review"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overall quality score: 75"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality trend: Improving"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality issues: 12"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task in Epic 7, Story 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics in task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review findings in task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Action items tracked"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-metrics-usage",
      children: "Quality Metrics Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use metrics to inform decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Balance metrics with context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus on actionable metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track quality improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-task-management",
      children: "Quality Task Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create tasks for quality improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize based on quality impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track quality progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate quality improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Quality Metrics Framework:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/code-quality-metrics-framework.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Quality Monitoring Dashboards:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/code-quality-monitoring-dashboards.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Kanban Integration:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/maintenance-kanban-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Review Kanban Integration:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/code-review-kanban-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 4 (Kanban Framework):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/epic-04.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 7:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/epic-07.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/story-03-code-quality-metrics-and-monitoring.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2026-01-05 (v0.7.3.3+0 – Code quality metrics integrated with Kanban framework)"
      })
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