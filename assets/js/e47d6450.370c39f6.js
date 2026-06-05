"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["51809"], {
37552(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_code_review_kanban_integration_md_e47_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-code-review-kanban-integration-md-e47.json
var site_docs_architecture_standards_and_adrs_code_review_kanban_integration_md_e47_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/code-review-kanban-integration","title":"Code Review Kanban Integration","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/code-review-kanban-integration.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/code-review-kanban-integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-review-kanban-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/code-review-kanban-integration.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-05T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Code Review Checklist Templates","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-review-checklist-templates"},"next":{"title":"Code Review Standards and Guidelines","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-review-standards-and-guidelines"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/code-review-kanban-integration.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-05T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Code Review Kanban Integration';

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
  "value": "Epic 7: Codebase Maintenance and Review",
  "id": "epic-7-codebase-maintenance-and-review",
  "level": 3
}, {
  "value": "Code Review Task Creation",
  "id": "code-review-task-creation",
  "level": 2
}, {
  "value": "When to Create Review Tasks",
  "id": "when-to-create-review-tasks",
  "level": 3
}, {
  "value": "Review Task Creation Process",
  "id": "review-task-creation-process",
  "level": 3
}, {
  "value": "Review Status Tracking",
  "id": "review-status-tracking",
  "level": 2
}, {
  "value": "Review Status in Kanban",
  "id": "review-status-in-kanban",
  "level": 3
}, {
  "value": "Status Update Process",
  "id": "status-update-process",
  "level": 3
}, {
  "value": "Review Metrics and Tracking",
  "id": "review-metrics-and-tracking",
  "level": 2
}, {
  "value": "Review Metrics in Kanban",
  "id": "review-metrics-in-kanban",
  "level": 3
}, {
  "value": "Review Quality Metrics",
  "id": "review-quality-metrics",
  "level": 3
}, {
  "value": "Workflow Integration",
  "id": "workflow-integration",
  "level": 2
}, {
  "value": "Standard Feature Development Workflow",
  "id": "standard-feature-development-workflow",
  "level": 3
}, {
  "value": "Bug Fix and Hotfix Workflow",
  "id": "bug-fix-and-hotfix-workflow",
  "level": 3
}, {
  "value": "Large Refactoring Workflow",
  "id": "large-refactoring-workflow",
  "level": 3
}, {
  "value": "Review Initiative Workflow",
  "id": "review-initiative-workflow",
  "level": 3
}, {
  "value": "Epic 4 (Kanban Framework) Integration",
  "id": "epic-4-kanban-framework-integration",
  "level": 2
}, {
  "value": "Framework Usage",
  "id": "framework-usage",
  "level": 3
}, {
  "value": "Integration Points",
  "id": "integration-points",
  "level": 3
}, {
  "value": "Review Task Examples",
  "id": "review-task-examples",
  "level": 2
}, {
  "value": "Example 1: Security Review Initiative",
  "id": "example-1-security-review-initiative",
  "level": 3
}, {
  "value": "Example 2: Architecture Review Task",
  "id": "example-2-architecture-review-task",
  "level": 3
}, {
  "value": "Example 3: Review Process Improvement Task",
  "id": "example-3-review-process-improvement-task",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Review Task Creation",
  "id": "review-task-creation",
  "level": 3
}, {
  "value": "Review Status Tracking",
  "id": "review-status-tracking-1",
  "level": 3
}, {
  "value": "Review Metrics",
  "id": "review-metrics",
  "level": 3
}, {
  "value": "Workflow Integration",
  "id": "workflow-integration-1",
  "level": 3
}, {
  "value": "Metrics and Reporting",
  "id": "metrics-and-reporting",
  "level": 2
}, {
  "value": "Review Metrics",
  "id": "review-metrics-1",
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
        id: "code-review-kanban-integration",
        children: "Code Review Kanban Integration"
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
      }), " Story 2 - Code Review Standards and Processes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E7:S02", ":T04", " - Integrate code review with Kanban framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Code Review Standards and Guidelines, Code Review Workflow Processes, Maintenance Kanban Integration, Kanban Governance Policy"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive integration of code review processes with the Kanban framework"
      }), ". It establishes how code review tasks are created, tracked, prioritized, and managed within the Kanban system, ensuring systematic code review practices through structured task tracking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Task Tracking:"
        }), " Code review work tracked as Kanban tasks when appropriate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Status Management:"
        }), " Review status tracked through Kanban task lifecycle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 7 Structure:"
        }), " Code review tasks organized under Epic 7, Story 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Integration:"
        }), " Code review workflows integrate with Kanban task lifecycle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visibility:"
        }), " Code review metrics and status visible in Kanban board"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-overview",
      children: "Integration Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epic-7-codebase-maintenance-and-review",
      children: "Epic 7: Codebase Maintenance and Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Epic 7 serves as the organizational structure for all codebase maintenance and review work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story 2: Code Review Standards and Processes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E7:S02:T01:"
        }), " Code review standards and guidelines (COMPLETE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E7:S02:T02:"
        }), " Code review checklist templates (COMPLETE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E7:S02:T03:"
        }), " Code review workflow processes (COMPLETE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E7:S02:T04:"
        }), " Kanban integration (this task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration with Epic 4 (Kanban Framework):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code review processes use Epic 4's Kanban framework for task management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review tasks follow Epic 4's task creation and tracking patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review workflows integrate with Epic 4's workflow management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review metrics use Epic 4's tracking capabilities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-review-task-creation",
      children: "Code Review Task Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-create-review-tasks",
      children: "When to Create Review Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Kanban Tasks For:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complex Reviews:"
        }), " Large or complex code reviews requiring dedicated tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Initiatives:"
        }), " Systematic review efforts (e.g., security review, architecture review)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Improvements:"
        }), " Work on improving review processes or tools"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Metrics:"
        }), " Tracking and reporting on review effectiveness"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Training:"
        }), " Training and onboarding for reviewers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Do Not Create Tasks For:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standard PR Reviews:"
        }), " Normal pull request reviews (handled through PR platform)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Routine Reviews:"
        }), " Day-to-day code reviews (handled through review workflows)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quick Reviews:"
        }), " Simple, quick reviews (handled through review workflows)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-task-creation-process",
      children: "Review Task Creation Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Identify Review Need"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sources of review tasks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex code changes requiring dedicated review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security review initiatives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture review efforts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review process improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review tooling enhancements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review training needs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Assess Review Scope"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Review Assessment:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review timeline and effort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review team requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review priority"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Create Kanban Task"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task Creation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic Assignment:"
        }), " Epic 7 (Codebase Maintenance and Review)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Assignment:"
        }), " Story 2 (Code Review Standards and Processes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Document:"
        }), " Create task document following Epic 4 templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Metadata:"
        }), " Include review scope, timeline, team, priority"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Update Kanban Board"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Board Updates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add task to Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign to appropriate MoSCOW section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story task checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic story checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set task status (TODO, IN PROGRESS, COMPLETE)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-status-tracking",
      children: "Review Status Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-status-in-kanban",
      children: "Review Status in Kanban"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Status Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TODO:"
        }), " Review task created, not yet started"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IN PROGRESS:"
        }), " Review work has begun"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE:"
        }), " Review completed and documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Status Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review tasks tracked in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review status synchronized with PR platform (if applicable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review metrics tracked in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review completion documented in Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status-update-process",
      children: "Status Update Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Starting Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task status to IN PROGRESS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task document with start date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story task checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document review scope and approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "During Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document review progress in task document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task metadata as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note any blockers or dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track review findings and metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Completing Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task status to COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document review completion in task document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version markers (vRC.E.S.T+B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story task checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic story checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include in Release Workflow (RW) if applicable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-metrics-and-tracking",
      children: "Review Metrics and Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-metrics-in-kanban",
      children: "Review Metrics in Kanban"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics to Track:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review turnaround time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review iteration count"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review approval rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code quality improvements from reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security issues found in reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test coverage improvements from reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review effectiveness metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tracking Methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review platform metrics (PR platform)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban task tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual tracking in task documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated reporting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review dashboard (if available)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-quality-metrics",
      children: "Review Quality Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Indicators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Actionable feedback provided"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Positive collaboration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code quality improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security issue detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review process adherence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review quality scores (if available)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feedback quality assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review coverage metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review effectiveness measures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-integration",
      children: "Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standard-feature-development-workflow",
      children: "Standard Feature Development Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PR Creation:"
        }), " PR created, review requested"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Assignment:"
        }), " Review assigned (via PR platform)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Execution:"
        }), " Review conducted (via PR platform)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Tracking:"
        }), " Review status tracked (via PR platform)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Completion:"
        }), " Review approved, PR merged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metrics Update:"
        }), " Review metrics updated (if tracked in Kanban)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create task only for complex reviews requiring dedicated tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track review metrics in task document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board with review status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bug-fix-and-hotfix-workflow",
      children: "Bug Fix and Hotfix Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix Ready:"
        }), " Bug fix ready for review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rapid Review:"
        }), " Focused review conducted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Tracking:"
        }), " Review status tracked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Completion:"
        }), " Review approved, fix merged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metrics Update:"
        }), " Review metrics updated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create task only for critical security reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track security review findings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document review outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "large-refactoring-workflow",
      children: "Large Refactoring Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactoring Ready:"
        }), " Refactoring ready for review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comprehensive Review:"
        }), " Thorough review conducted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Tracking:"
        }), " Review status and progress tracked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative Review:"
        }), " Multiple review iterations tracked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Completion:"
        }), " Review approved, refactoring merged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metrics Update:"
        }), " Review metrics and outcomes documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create task for large refactoring reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track review progress and iterations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document review findings and outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-initiative-workflow",
      children: "Review Initiative Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initiative Planning:"
        }), " Review initiative planned"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Creation:"
        }), " Kanban task created for initiative"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Execution:"
        }), " Reviews conducted as part of initiative"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress Tracking:"
        }), " Review progress tracked in task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initiative Completion:"
        }), " Initiative completed, outcomes documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metrics Update:"
        }), " Initiative metrics and outcomes documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Task Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task:"
        }), " Security review initiative for framework packages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope:"
        }), " Review all framework packages for security issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timeline:"
        }), " 2-week review initiative"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Team:"
        }), " Security review team"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " Tracked in Kanban"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "epic-4-kanban-framework-integration",
      children: "Epic 4 (Kanban Framework) Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-usage",
      children: "Framework Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code review processes use Epic 4's Kanban framework:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task creation templates (Epic 4 templates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task document structure (Epic 4 structure)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story document structure (Epic 4 structure)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic document structure (Epic 4 structure)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board organization (Epic 4 board structure)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning schema (Epic 4 versioning)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow (Epic 4 RW)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-points",
      children: "Integration Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Templates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Epic 4 task templates for review tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow Epic 4 task document structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include Epic 4 required fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow Epic 4 naming conventions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Epic 4 Release Workflow (RW) for review-related releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Epic 4 Update Kanban Workflow (UKW) for review updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow Epic 4 versioning schema (RC.EPIC.STORY.TASK+BUILD)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Epic 4 changelog format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Board Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review tasks appear in Epic 4 Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow Epic 4 MoSCOW organization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Epic 4 status tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow Epic 4 task ordering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-task-examples",
      children: "Review Task Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-security-review-initiative",
      children: "Example 1: Security Review Initiative"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Comprehensive security review of framework packages"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task ID:"
        }), " E7:S02", ":TXX", " (new task for initiative)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story:"
        }), " Epic 7, Story 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " IN PROGRESS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority:"
        }), " High"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW:"
        }), " Should Have (S)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Document:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Description: Comprehensive security review of all framework packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scope: Review all packages for security vulnerabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timeline: 2-week review initiative"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Team: Security review team"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approach: Systematic review using security checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics: Track vulnerabilities found and fixed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Board:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Appears in \"Should Have (S)\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: IN PROGRESS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Progress tracked in task document"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security review completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vulnerabilities documented and fixed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version: v0.7.2.XX+1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outcomes documented in task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-architecture-review-task",
      children: "Example 2: Architecture Review Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Architecture review for major refactoring"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task ID:"
        }), " E7:S02", ":TXX", " (new task for review)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story:"
        }), " Epic 7, Story 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " IN PROGRESS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority:"
        }), " High"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW:"
        }), " Should Have (S)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Document:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Description: Architecture review for major framework refactoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scope: Review architectural changes and design decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timeline: 1-week review period"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Team: Architecture review team"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approach: Comprehensive architecture review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics: Track architectural improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Board:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Appears in \"Should Have (S)\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: IN PROGRESS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Progress tracked in task document"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture review completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architectural improvements documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version: v0.7.2.XX+1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outcomes documented in task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-review-process-improvement-task",
      children: "Example 3: Review Process Improvement Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Improve code review process efficiency"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task ID:"
        }), " E7:S02", ":TXX", " (new task for improvement)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story:"
        }), " Epic 7, Story 2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " TODO"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority:"
        }), " Medium"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW:"
        }), " Could Have (C)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Document:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Description: Improve code review process efficiency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scope: Analyze review process, identify improvements, implement changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timeline: 2-week improvement initiative"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Team: Review process team"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approach: Process analysis, improvement design, implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics: Track review efficiency improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Board:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Appears in \"Could Have (C)\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: TODO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Progress tracked in task document"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process improvements implemented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Efficiency improvements documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version: v0.7.2.XX+1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outcomes documented in task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-task-creation",
      children: "Review Task Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create tasks only for complex reviews or review initiatives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use appropriate Epic/Story assignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include complete task metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document review scope and approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set realistic timelines"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creating tasks for routine PR reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping task metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vague task descriptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unrealistic timelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Over-tracking simple reviews"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-status-tracking-1",
      children: "Review Status Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update review status regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document review progress in task document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board promptly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track review metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note blockers and dependencies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not updating review status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing progress documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring blockers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not tracking metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not documenting outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-metrics",
      children: "Review Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track key review metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document metrics in task documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use metrics for process improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share metrics with team"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review metrics regularly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not tracking metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not using metrics for improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not sharing metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not reviewing metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-integration-1",
      children: "Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow code review workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate with PR platform (if applicable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Kanban for review task tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track review metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document review outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bypassing workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not integrating with PR platform"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing Kanban updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not documenting outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metrics-and-reporting",
      children: "Metrics and Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-metrics-1",
      children: "Review Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total review tasks created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks by status (TODO, IN PROGRESS, COMPLETE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks by type (security, architecture, process)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks by priority"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average review timeline"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Effectiveness Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review turnaround time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review iteration count"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review approval rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code quality improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security issues found"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test coverage improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review process adherence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review quality scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review coverage metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review effectiveness measures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reporting",
      children: "Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular Reports:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly review summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monthly review review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quarterly review assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Annual review trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Report Content:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review task statistics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review effectiveness metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review quality indicators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outstanding review work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review process improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Review Standards and Guidelines:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/code-review-standards-and-guidelines.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Review Checklist Templates:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/code-review-checklist-templates.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Review Workflow Processes:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/code-review-workflow-processes.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Kanban Integration:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/maintenance-kanban-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Governance Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 4 (Kanban Framework):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/epic-04.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 7 (Codebase Maintenance):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/epic-07.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 2 (Code Review Standards and Processes):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/story-02-code-review-standards-and-processes.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Board:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision Record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Integrate code review processes comprehensively with Kanban framework, using Epic 7 Story 2 as organizational structure and Epic 4's Kanban framework for task management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides systematic approach to code review task tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures visibility of review work and metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables review process improvement through metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with existing Kanban framework and workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports review effectiveness measurement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives Considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate review tracking system (fragmentation, reduced visibility)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ad-hoc review tracking (inconsistent, no visibility)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PR platform only (lacks process integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual tracking only (not scalable, error-prone)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires initial setup and documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review tasks visible in Kanban board (when appropriate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables systematic review management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports data-driven review process improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with existing workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2026-01-05 (v0.7.2.4+0 – Code review Kanban integration established)"
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