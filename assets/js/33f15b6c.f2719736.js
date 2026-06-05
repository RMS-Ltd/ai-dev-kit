"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["61903"], {
6526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_maintenance_workflow_processes_md_33f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-maintenance-workflow-processes-md-33f.json
var site_docs_architecture_standards_and_adrs_maintenance_workflow_processes_md_33f_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/maintenance-workflow-processes","title":"Maintenance Workflow Processes","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/maintenance-workflow-processes.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/maintenance-workflow-processes","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-workflow-processes","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/maintenance-workflow-processes.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Maintenance Task Prioritization Framework","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework"},"next":{"title":"Standard Operating Procedure: Handling Mixed BR/FR Scope","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/mixed-br-fr-scope-sop"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/maintenance-workflow-processes.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Maintenance Workflow Processes';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Maintenance Workflow Overview",
  "id": "maintenance-workflow-overview",
  "level": 2
}, {
  "value": "Workflow Types",
  "id": "workflow-types",
  "level": 3
}, {
  "value": "Workflow 1: IDE-Flagged Issues Workflow",
  "id": "workflow-1-ide-flagged-issues-workflow",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose",
  "level": 3
}, {
  "value": "Trigger",
  "id": "trigger",
  "level": 3
}, {
  "value": "Workflow Steps",
  "id": "workflow-steps",
  "level": 3
}, {
  "value": "Step 1: Issue Detection",
  "id": "step-1-issue-detection",
  "level": 4
}, {
  "value": "Step 2: Issue Categorization",
  "id": "step-2-issue-categorization",
  "level": 4
}, {
  "value": "Step 3: Prioritization",
  "id": "step-3-prioritization",
  "level": 4
}, {
  "value": "Step 4: Batch Processing",
  "id": "step-4-batch-processing",
  "level": 4
}, {
  "value": "Step 5: Resolution",
  "id": "step-5-resolution",
  "level": 4
}, {
  "value": "Step 6: Verification",
  "id": "step-6-verification",
  "level": 4
}, {
  "value": "Step 7: Release Integration",
  "id": "step-7-release-integration",
  "level": 4
}, {
  "value": "Workflow 2: Prioritized Maintenance Workflow",
  "id": "workflow-2-prioritized-maintenance-workflow",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose-1",
  "level": 3
}, {
  "value": "Trigger",
  "id": "trigger-1",
  "level": 3
}, {
  "value": "Workflow Steps",
  "id": "workflow-steps-1",
  "level": 3
}, {
  "value": "Step 1: Task Identification",
  "id": "step-1-task-identification",
  "level": 4
}, {
  "value": "Step 2: Initial Assessment",
  "id": "step-2-initial-assessment",
  "level": 4
}, {
  "value": "Step 3: Priority Calculation",
  "id": "step-3-priority-calculation",
  "level": 4
}, {
  "value": "Step 4: Kanban Assignment",
  "id": "step-4-kanban-assignment",
  "level": 4
}, {
  "value": "Step 5: Work Planning",
  "id": "step-5-work-planning",
  "level": 4
}, {
  "value": "Step 6: Implementation",
  "id": "step-6-implementation",
  "level": 4
}, {
  "value": "Step 7: Completion and Release",
  "id": "step-7-completion-and-release",
  "level": 4
}, {
  "value": "Workflow 3: Scheduled Maintenance Workflow",
  "id": "workflow-3-scheduled-maintenance-workflow",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose-2",
  "level": 3
}, {
  "value": "Trigger",
  "id": "trigger-2",
  "level": 3
}, {
  "value": "Workflow Steps",
  "id": "workflow-steps-2",
  "level": 3
}, {
  "value": "Step 1: Maintenance Planning",
  "id": "step-1-maintenance-planning",
  "level": 4
}, {
  "value": "Step 2: Issue Discovery",
  "id": "step-2-issue-discovery",
  "level": 4
}, {
  "value": "Step 3: Batch Prioritization",
  "id": "step-3-batch-prioritization",
  "level": 4
}, {
  "value": "Step 4: Batch Execution",
  "id": "step-4-batch-execution",
  "level": 4
}, {
  "value": "Step 5: Verification and Reporting",
  "id": "step-5-verification-and-reporting",
  "level": 4
}, {
  "value": "Step 6: Release and Documentation",
  "id": "step-6-release-and-documentation",
  "level": 4
}, {
  "value": "Workflow 4: Emergency Maintenance Workflow",
  "id": "workflow-4-emergency-maintenance-workflow",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose-3",
  "level": 3
}, {
  "value": "Trigger",
  "id": "trigger-3",
  "level": 3
}, {
  "value": "Workflow Steps",
  "id": "workflow-steps-3",
  "level": 3
}, {
  "value": "Step 1: Issue Identification",
  "id": "step-1-issue-identification",
  "level": 4
}, {
  "value": "Step 2: Rapid Assessment",
  "id": "step-2-rapid-assessment",
  "level": 4
}, {
  "value": "Step 3: Emergency Fix",
  "id": "step-3-emergency-fix",
  "level": 4
}, {
  "value": "Step 4: Verification",
  "id": "step-4-verification",
  "level": 4
}, {
  "value": "Step 5: Documentation and Follow-Up",
  "id": "step-5-documentation-and-follow-up",
  "level": 4
}, {
  "value": "Workflow Integration",
  "id": "workflow-integration",
  "level": 2
}, {
  "value": "Release Workflow (RW) Integration",
  "id": "release-workflow-rw-integration",
  "level": 3
}, {
  "value": "Update Kanban Workflow (UKW) Integration",
  "id": "update-kanban-workflow-ukw-integration",
  "level": 3
}, {
  "value": "Framework Health Monitoring Integration",
  "id": "framework-health-monitoring-integration",
  "level": 3
}, {
  "value": "Kanban Integration",
  "id": "kanban-integration",
  "level": 2
}, {
  "value": "Task Creation",
  "id": "task-creation",
  "level": 3
}, {
  "value": "Progress Tracking",
  "id": "progress-tracking",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Regular Maintenance",
  "id": "regular-maintenance",
  "level": 3
}, {
  "value": "Batch Processing",
  "id": "batch-processing",
  "level": 3
}, {
  "value": "Continuous Improvement",
  "id": "continuous-improvement",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: IDE Error Resolution",
  "id": "example-1-ide-error-resolution",
  "level": 3
}, {
  "value": "Example 2: Code Quality Batch Fix",
  "id": "example-2-code-quality-batch-fix",
  "level": 3
}, {
  "value": "Example 3: Technical Debt Resolution",
  "id": "example-3-technical-debt-resolution",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "maintenance-workflow-processes",
        children: "Maintenance Workflow Processes"
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
      }), " Epic 7 - Codebase Maintenance and Review", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 1 - Codebase Maintenance Tasks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E7:S01", ":T03", " - Document maintenance workflow processes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Maintenance Task Prioritization Framework, Kanban Governance Policy, Release Workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive maintenance workflow processes"
      }), " for the AI Dev Kit project. It establishes standardized workflows for identifying, prioritizing, addressing, and tracking maintenance tasks, ensuring systematic codebase health management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Systematic Approach:"
        }), " Standardized workflows for consistent maintenance practices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritization-Driven:"
        }), " Workflows integrate with prioritization framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Integration:"
        }), " All maintenance work tracked through Kanban framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous Improvement:"
        }), " Workflows evolve based on experience and outcomes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool Integration:"
        }), " Leverages existing tools and workflows (RW, UKW, IDE checks)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintenance-workflow-overview",
      children: "Maintenance Workflow Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-types",
      children: "Workflow Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. IDE-Flagged Issues Workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continuous monitoring and resolution of IDE errors, warnings, and info"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch processing for efficiency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration with Release Workflow (RW) Step 9"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Prioritized Maintenance Workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systematic prioritization and resolution of maintenance tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses prioritization framework for decision-making"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban-based tracking and management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Scheduled Maintenance Workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Periodic maintenance reviews and batch processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planned maintenance windows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive codebase health checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Emergency Maintenance Workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rapid response to critical issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bypass normal prioritization for urgent fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Post-resolution review and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-1-ide-flagged-issues-workflow",
      children: "Workflow 1: IDE-Flagged Issues Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systematically address IDE-flagged issues (errors, warnings, info) to maintain codebase health and prevent technical debt accumulation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trigger",
      children: "Trigger"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous:"
        }), " IDE flags issues during development"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 9:"
        }), " Check for and address IDE-flagged problems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scheduled:"
        }), " Weekly/bi-weekly maintenance reviews"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual:"
        }), " Developer identifies issues during work"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-steps",
      children: "Workflow Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-issue-detection",
      children: "Step 1: Issue Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDE/editor error/warning/info messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linter output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static analysis tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code review findings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detection Methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated:"
        }), " IDE flags issues in real-time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Integration:"
        }), " RW Step 9 checks for IDE-flagged problems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual Review:"
        }), " Developer reviews codebase"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool-Based:"
        }), " Run linting/analysis tools"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capture issue details (file, line, message, severity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note context and potential impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document any related issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-issue-categorization",
      children: "Step 2: Issue Categorization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categorize by Type:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Errors:"
        }), " Critical issues preventing execution/compilation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warnings:"
        }), " Issues that may cause problems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Info:"
        }), " Suggestions and best practices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categorize by Source:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDE-flagged (syntax, type, import errors)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linter (style, complexity, quality)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static analysis (security, performance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual review (code smells, patterns)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign category and subcategory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note source and detection method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to related issues if applicable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-prioritization",
      children: "Step 3: Prioritization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply Prioritization Framework:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess severity (1-5)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess impact (1-5)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate effort (1-5)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate priority score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply contextual adjustments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine MoSCOW classification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority Assignment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Must Have (M):"
        }), " Critical errors, blocking issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Should Have (S):"
        }), " High-priority warnings, quality issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Could Have (C):"
        }), " Medium-priority warnings, improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Won't Have (W):"
        }), " Low-priority info, cosmetic issues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Record priority score and classification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document reasoning for prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Kanban task if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4-batch-processing",
      children: "Step 4: Batch Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Group Similar Issues:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group by file or module"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group by issue type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group by fix approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group by priority level"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Batch Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improved efficiency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better context understanding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced overhead"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create batch task in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document batch scope and approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track batch progress"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-5-resolution",
      children: "Step 5: Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand issue root cause"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement fix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test fix (unit tests, manual testing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify no regressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document fix approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix addresses root cause"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No new issues introduced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code quality maintained or improved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests pass (if applicable)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document fix in commit message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task status in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note any patterns or systemic issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-6-verification",
      children: "Step 6: Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Fix Verification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-run IDE checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify issue resolved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for related issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm no regressions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue no longer appears in IDE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code compiles/executes correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests pass (if applicable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No new issues introduced"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task status to COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document verification results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note any follow-up work needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-7-release-integration",
      children: "Step 7: Release Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include fixes in release (if appropriate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document in changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track in Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical fixes: Include in next release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch fixes: Include when batch complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor fixes: Include as time permits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Info-level: Optional inclusion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-2-prioritized-maintenance-workflow",
      children: "Workflow 2: Prioritized Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose-1",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systematically address maintenance tasks using the prioritization framework to ensure critical issues are addressed promptly while maintaining codebase health efficiently."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trigger-1",
      children: "Trigger"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Creation:"
        }), " New maintenance task identified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritization Review:"
        }), " Regular prioritization reviews"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Planning:"
        }), " Story/epic planning sessions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Health Monitoring:"
        }), " Framework health monitoring identifies issues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-steps-1",
      children: "Workflow Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-task-identification",
      children: "Step 1: Task Identification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDE-flagged issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code quality analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical debt tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework health monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code reviews"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create task in Kanban framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign to appropriate Epic/Story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document task details and context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to related issues or work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-initial-assessment",
      children: "Step 2: Initial Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assess Dimensions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Determine criticality (1-5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Determine scope and effect (1-5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effort:"
        }), " Estimate time and complexity (1-5)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Record severity, impact, and effort ratings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note reasoning for each rating"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capture any special considerations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document dependencies or blockers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-priority-calculation",
      children: "Step 3: Priority Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply Prioritization Formula:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Priority Score = (Severity × 0.4) + (Impact × 0.4) + ((6 - Effort) × 0.2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply Contextual Adjustments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strategic importance (±0.5)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency considerations (±0.3)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk factors (±0.2)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Determine Priority Level:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical (4.0-5.0): Must address immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High (3.0-3.9): Address within 1-2 cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Medium (2.0-2.9): Address within 2-4 cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low (1.0-1.9): Address as time permits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimal (<1.0): Optional, when convenient"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4-kanban-assignment",
      children: "Step 4: Kanban Assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW Classification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Must Have (M):"
        }), " Critical Priority (4.0-5.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Should Have (S):"
        }), " High Priority (3.0-3.9)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Could Have (C):"
        }), " Medium Priority (2.0-2.9)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Won't Have (W):"
        }), " Low/Minimal Priority (<2.0)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic/Story Assignment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign to Epic 7 (Codebase Maintenance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign to appropriate Story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create task document if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set priority and metadata"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-5-work-planning",
      children: "Step 5: Work Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plan Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review task requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate effort and timeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan implementation approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource Allocation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign to developer/team"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule work window"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocate time and resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinate with other work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-6-implementation",
      children: "Step 6: Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execute Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow planned approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement fix/improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test thoroughly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Assurance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code quality maintained"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests pass (if applicable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No regressions introduced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation updated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-7-completion-and-release",
      children: "Step 7: Completion and Release"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark task as COMPLETE in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document completion in task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note outcomes and learnings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include in Release Workflow (RW)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document in changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track metrics and outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-3-scheduled-maintenance-workflow",
      children: "Workflow 3: Scheduled Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose-2",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conduct periodic comprehensive maintenance reviews and batch processing to maintain codebase health and address accumulated technical debt."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trigger-2",
      children: "Trigger"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weekly:"
        }), " Quick maintenance review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monthly:"
        }), " Comprehensive maintenance review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quarterly:"
        }), " Deep maintenance assessment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-Release:"
        }), " Maintenance before major releases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-steps-2",
      children: "Workflow Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-maintenance-planning",
      children: "Step 1: Maintenance Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope Definition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define maintenance scope (codebase area, issue types)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set maintenance goals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify maintenance windows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocate resources"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Schedule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly: Quick review of critical issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monthly: Comprehensive review of all issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quarterly: Deep assessment and planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-Release: Critical issue resolution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-issue-discovery",
      children: "Step 2: Issue Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comprehensive Scanning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run IDE checks across codebase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run linting/analysis tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review code quality metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check framework health scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review technical debt tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue Collection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect all identified issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Categorize by type and source"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document issue details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note patterns and trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-batch-prioritization",
      children: "Step 3: Batch Prioritization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply Prioritization Framework:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess each issue (severity, impact, effort)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate priority scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply contextual adjustments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify by MoSCOW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Batch Formation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group by priority level"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group by issue type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group by codebase area"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group by fix approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4-batch-execution",
      children: "Step 4: Batch Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execute Batches:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process batches in priority order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address critical issues first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work through high-priority batches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process medium-priority as time permits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Progress Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track batch completion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor progress metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjust approach as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-5-verification-and-reporting",
      children: "Step 5: Verification and Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verify Results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-run checks to verify fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm no regressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate codebase health improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check metrics and trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate Report:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Summary of work completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issues resolved by category"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics and improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remaining work and recommendations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-6-release-and-documentation",
      children: "Step 6: Release and Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include maintenance work in releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document in changelogs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track in version markers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update maintenance history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document patterns and trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note systemic issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan future maintenance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-4-emergency-maintenance-workflow",
      children: "Workflow 4: Emergency Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose-3",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rapidly respond to critical issues that require immediate attention, bypassing normal prioritization and workflow processes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trigger-3",
      children: "Trigger"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Errors:"
        }), " Issues preventing execution/deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Vulnerabilities:"
        }), " Critical security issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Integrity:"
        }), " Issues affecting data integrity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System Failures:"
        }), " Issues causing system failures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-steps-3",
      children: "Workflow Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-issue-identification",
      children: "Step 1: Issue Identification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Issue Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immediate identification of critical issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assessment of urgency and impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determination of emergency status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notification of stakeholders"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Emergency Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocks development or deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Affects production systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security or data integrity risk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System-wide failure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-rapid-assessment",
      children: "Step 2: Rapid Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand issue scope and impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify root cause"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate fix effort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine fix approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bypass Normal Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip normal prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expedite workflow steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast-track approval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immediate resource allocation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-emergency-fix",
      children: "Step 3: Emergency Fix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rapid Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement fix immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus on resolving critical issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimize scope to essential fix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure fix is correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify fix resolves issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for immediate regressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure system stability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document fix approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4-verification",
      children: "Step 4: Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Immediate Verification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify issue resolved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm no immediate regressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check system stability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate fix effectiveness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Fix Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review fix approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify any follow-up work needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document lessons learned"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan comprehensive fix if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-5-documentation-and-follow-up",
      children: "Step 5: Documentation and Follow-Up"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document emergency fix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Bug Report (BR) if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note in maintenance history"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-Up:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create task for comprehensive fix (if needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review root cause"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan preventive measures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update processes if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-integration",
      children: "Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-rw-integration",
      children: "Release Workflow (RW) Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 9: Check for and address IDE-flagged problems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run IDE checks before commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address errors (blocking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note warnings and info"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate fixes into release"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run IDE checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify errors, warnings, info"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address errors immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note warnings/info for follow-up"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proceed with release"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-kanban-workflow-ukw-integration",
      children: "Update Kanban Workflow (UKW) Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UKW Maintenance Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW may identify maintenance needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create prioritized tasks from findings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track maintenance progress in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update maintenance status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW identifies maintenance opportunities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create tasks using prioritization framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign to Epic 7 (Codebase Maintenance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track progress in Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-health-monitoring-integration",
      children: "Framework Health Monitoring Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health-Based Maintenance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health monitoring identifies issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize based on health impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health improvement from maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use health metrics for planning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review framework health dashboard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify frameworks needing attention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create maintenance tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize based on health impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health improvement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kanban-integration",
      children: "Kanban Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-creation",
      children: "Task Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic/Story Assignment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 7:"
        }), " Codebase Maintenance and Review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 1:"
        }), " Codebase Maintenance Tasks", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: PERPETUAL (IDE-flagged issues)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Prioritization framework (COMPLETE)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Workflow processes (this task)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Kanban integration"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Metadata:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Severity, impact, effort ratings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MoSCOW classification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status and progress"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "progress-tracking",
      children: "Progress Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task status as work progresses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document progress and outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track metrics and improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reporting:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate maintenance reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track completion rates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor priority distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure health improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regular-maintenance",
      children: "Regular Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Daily:"
        }), " Address critical errors immediately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weekly:"
        }), " Review and address high-priority issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monthly:"
        }), " Comprehensive maintenance review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quarterly:"
        }), " Deep maintenance assessment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consistency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain regular maintenance schedule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevent issue accumulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain codebase health"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track progress over time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-processing",
      children: "Batch Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Efficiency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group similar issues for batch processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process batches during maintenance windows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain context across related fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduce overhead and improve efficiency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure consistent fixes within batches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain code quality standards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test batch fixes thoroughly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document batch outcomes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "continuous-improvement",
      children: "Continuous Improvement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Learning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track prioritization accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn from maintenance outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refine workflows based on experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update processes as patterns emerge"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evolution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review workflow effectiveness regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjust processes based on outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incorporate new tools and techniques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share learnings across team"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-ide-error-resolution",
      children: "Example 1: IDE Error Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Python syntax error in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "framework-health-monitor.py"
      }), " (line 45)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection:"
        }), " IDE flags syntax error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Categorization:"
        }), " Error, IDE-flagged, syntax issue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritization:"
        }), " Severity=5, Impact=5, Effort=1 → Priority=5.0 (Critical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolution:"
        }), " Fix syntax error immediately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " Re-run IDE checks, verify fix"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release:"
        }), " Include in next RW"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Error resolved, codebase health maintained"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-code-quality-batch-fix",
      children: "Example 2: Code Quality Batch Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Multiple code quality warnings across framework packages"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection:"
        }), " Scheduled maintenance review identifies 20 warnings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Categorization:"
        }), " Warnings, code quality, style/complexity issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritization:"
        }), " Batch assessment, average Priority=2.5 (Medium)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batch Processing:"
        }), " Group by package, fix in batches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " Re-run checks, verify improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release:"
        }), " Include batch fixes in release"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Code quality improved, warnings reduced"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-technical-debt-resolution",
      children: "Example 3: Technical Debt Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Outdated dependency with security vulnerability"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection:"
        }), " Security scan identifies vulnerability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Categorization:"
        }), " Technical debt, security, dependency issue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritization:"
        }), " Severity=5, Impact=4, Effort=2, Risk=+0.2 → Priority=4.6 (Critical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolution:"
        }), " Update dependency, test compatibility"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " Verify security fix, test functionality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release:"
        }), " Include in urgent release"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Security vulnerability resolved, dependency updated"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Task Prioritization Framework:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Governance Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/release-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Kanban Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/update-kanban-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Health Metrics:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-health-metrics.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 7:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/epic-07.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision Record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Implement comprehensive maintenance workflow processes with four workflow types, Kanban integration, and tool integration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides systematic approach to maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with existing tools and workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports different maintenance scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables continuous codebase health management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives Considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single workflow for all maintenance (too rigid)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ad-hoc maintenance (inconsistent)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool-only workflows (lacks process guidance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual-only workflows (not scalable)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires initial setup and documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflows may need refinement based on experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides foundation for systematic maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables efficient maintenance work"
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