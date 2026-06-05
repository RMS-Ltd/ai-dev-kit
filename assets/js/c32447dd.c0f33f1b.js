"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["13389"], {
6222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_maintenance_kanban_integration_md_c32_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-maintenance-kanban-integration-md-c32.json
var site_docs_architecture_standards_and_adrs_maintenance_kanban_integration_md_c32_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/maintenance-kanban-integration","title":"Maintenance Tasks Kanban Integration","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/maintenance-kanban-integration.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/maintenance-kanban-integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-kanban-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/maintenance-kanban-integration.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-05T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Maintenance Automation Workflow Integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-automation-workflow-integration"},"next":{"title":"Maintenance Task Prioritization Framework","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/maintenance-kanban-integration.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-05T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Maintenance Tasks Kanban Integration';

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
  "value": "Task Creation and Assignment",
  "id": "task-creation-and-assignment",
  "level": 2
}, {
  "value": "Maintenance Task Creation Process",
  "id": "maintenance-task-creation-process",
  "level": 3
}, {
  "value": "Prioritization and MoSCOW Mapping",
  "id": "prioritization-and-moscow-mapping",
  "level": 2
}, {
  "value": "Priority Score to MoSCOW Classification",
  "id": "priority-score-to-moscow-classification",
  "level": 3
}, {
  "value": "Kanban Board Organization",
  "id": "kanban-board-organization",
  "level": 3
}, {
  "value": "Task Lifecycle and Status Tracking",
  "id": "task-lifecycle-and-status-tracking",
  "level": 2
}, {
  "value": "Task Status Flow",
  "id": "task-status-flow",
  "level": 3
}, {
  "value": "Status Update Process",
  "id": "status-update-process",
  "level": 3
}, {
  "value": "Task Metadata and Documentation",
  "id": "task-metadata-and-documentation",
  "level": 2
}, {
  "value": "Required Task Metadata",
  "id": "required-task-metadata",
  "level": 3
}, {
  "value": "Workflow Integration",
  "id": "workflow-integration",
  "level": 2
}, {
  "value": "IDE-Flagged Issues Workflow",
  "id": "ide-flagged-issues-workflow",
  "level": 3
}, {
  "value": "Prioritized Maintenance Workflow",
  "id": "prioritized-maintenance-workflow",
  "level": 3
}, {
  "value": "Scheduled Maintenance Workflow",
  "id": "scheduled-maintenance-workflow",
  "level": 3
}, {
  "value": "Emergency Maintenance Workflow",
  "id": "emergency-maintenance-workflow",
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
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: IDE Error Task",
  "id": "example-1-ide-error-task",
  "level": 3
}, {
  "value": "Example 2: Code Quality Batch Task",
  "id": "example-2-code-quality-batch-task",
  "level": 3
}, {
  "value": "Example 3: Technical Debt Task",
  "id": "example-3-technical-debt-task",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Task Creation",
  "id": "task-creation",
  "level": 3
}, {
  "value": "Task Tracking",
  "id": "task-tracking",
  "level": 3
}, {
  "value": "Prioritization",
  "id": "prioritization",
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
  "value": "Maintenance Metrics",
  "id": "maintenance-metrics",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "maintenance-tasks-kanban-integration",
        children: "Maintenance Tasks Kanban Integration"
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
      }), " Story 1 - Codebase Maintenance Tasks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E7:S01", ":T04", " - Integrate maintenance tasks with Kanban framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Maintenance Task Prioritization Framework, Maintenance Workflow Processes, Kanban Governance Policy, Epic 4 (Kanban Framework)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive integration of maintenance tasks with the Kanban framework"
      }), ". It establishes how maintenance tasks are created, tracked, prioritized, and managed within the Kanban system, ensuring systematic codebase health management through structured task tracking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task-Driven Maintenance:"
        }), " All maintenance work tracked as Kanban tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritization Integration:"
        }), " Maintenance prioritization framework maps to Kanban MoSCOW classification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 7 Structure:"
        }), " All maintenance tasks organized under Epic 7 (Codebase Maintenance and Review)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Integration:"
        }), " Maintenance workflows integrate with Kanban task lifecycle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visibility:"
        }), " Maintenance tasks visible in Kanban board alongside feature development"]
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
        children: "Stories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S01", " – Codebase Maintenance Tasks:"]
        }), " Core maintenance task management", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T01: PERPETUAL (IDE-flagged issues)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T02: Prioritization framework (COMPLETE)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T03: Workflow processes (COMPLETE)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "T04: Kanban integration (this task)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S02", " – Code Review Standards and Processes:"]
        }), " Code review workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S03", " – Code Quality Metrics and Monitoring:"]
        }), " Quality tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S04", " – Maintenance Automation and Tooling:"]
        }), " Automation tools"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S05", " – Migration UXR:"]
        }), " Migration research"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration with Epic 4 (Kanban Framework):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 7 uses Epic 4's Kanban framework for task management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance tasks follow Epic 4's task creation and tracking patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance workflows integrate with Epic 4's workflow management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance prioritization uses Epic 4's MoSCOW classification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-creation-and-assignment",
      children: "Task Creation and Assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maintenance-task-creation-process",
      children: "Maintenance Task Creation Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Identify Maintenance Need"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sources of maintenance tasks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDE-flagged issues (errors, warnings, info)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code quality analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical debt tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework health monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User feedback (Bug Reports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduled maintenance reviews"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Assess and Prioritize"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply Maintenance Task Prioritization Framework:"
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
        }), " Assign to appropriate Story", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["E7", ":S01", " for general maintenance tasks"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["E7", ":S02", " for code review tasks"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["E7", ":S03", " for quality monitoring tasks"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["E7", ":S04", " for automation tasks"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Document:"
        }), " Create task document following Epic 4 templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Metadata:"
        }), " Include priority score, severity, impact, effort, MoSCOW"]
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
      id: "prioritization-and-moscow-mapping",
      children: "Prioritization and MoSCOW Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "priority-score-to-moscow-classification",
      children: "Priority Score to MoSCOW Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mapping:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Priority (4.0-5.0):"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Must Have (M)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Blocks development or deployment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Security vulnerabilities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Critical errors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "System failures"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High Priority (3.0-3.9):"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Should Have (S)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Significant functional issues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Major performance problems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "High-risk security warnings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Important quality issues"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium Priority (2.0-2.9):"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Could Have (C)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minor functional issues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Noticeable performance degradation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Code quality improvements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Moderate technical debt"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low Priority (1.0-1.9):"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Could Have (C)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cosmetic issues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minor inefficiencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Informational IDE warnings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Low-priority improvements"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimal Priority (<1.0):"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Won't Have (W)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Best practice suggestions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minor refactoring opportunities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optional improvements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deferred work"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-board-organization",
      children: "Kanban Board Organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MoSCOW Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Must Have (M):"
        }), " Critical maintenance tasks requiring immediate attention"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Should Have (S):"
        }), " Important maintenance tasks to address soon"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Could Have (C):"
        }), " Nice-to-have maintenance tasks for when time permits"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ongoing (O):"
        }), " Perpetual maintenance tasks that never complete (tracked but don't block other work)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Won't Have (W):"
        }), " Deferred maintenance tasks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Ordering:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Within each MoSCOW section, tasks ordered by:", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Priority score (highest first)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Severity (highest first)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Impact (highest first)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Last updated (most recent first)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-lifecycle-and-status-tracking",
      children: "Task Lifecycle and Status Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-status-flow",
      children: "Task Status Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status Transitions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TODO:"
        }), " Task identified and created, not yet started"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IN PROGRESS:"
        }), " Work on task has begun"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE:"
        }), " Task finished and verified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PERPETUAL:"
        }), " Ongoing task that never truly completes (e.g., IDE-flagged issues)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status-update-process",
      children: "Status Update Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Starting Work:"
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
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "During Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document progress in task document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task metadata as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note any blockers or dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track time and effort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Completing Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task status to COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document completion in task document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version markers (vRC.E.S.T+B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story task checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic story checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include in Release Workflow (RW)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Perpetual Tasks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track progress with version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document each maintenance cycle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update status periodically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never mark as COMPLETE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-metadata-and-documentation",
      children: "Task Metadata and Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-task-metadata",
      children: "Required Task Metadata"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Document Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task ID:"
        }), " E7:S01", ":TXX", " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " TODO, IN PROGRESS, COMPLETE, PERPETUAL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority Score:"
        }), " Calculated priority score"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Severity rating (1-5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Impact rating (1-5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effort:"
        }), " Effort rating (1-5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW:"
        }), " Must Have, Should Have, Could Have, Won't Have"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic:"
        }), " Epic 7 (Codebase Maintenance and Review)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story:"
        }), " Story assignment (E7", ":S01", ", E7", ":S02", ", etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version:"
        }), " Version marker (vRC.E.S.T+B)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Created:"
        }), " Creation date"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Last Updated:"
        }), " Last update date"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completed:"
        }), " Completion date (if applicable)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Content:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " Clear description of maintenance work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context:"
        }), " Background and rationale"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach:"
        }), " How the work will be done"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acceptance Criteria:"
        }), " Definition of done"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependencies:"
        }), " Related tasks or work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress Notes:"
        }), " Updates on work progress"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outcomes:"
        }), " Results and learnings"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-integration",
      children: "Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ide-flagged-issues-workflow",
      children: "IDE-Flagged Issues Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection:"
        }), " IDE flags issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Categorization:"
        }), " Categorize by type (error, warning, info)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritization:"
        }), " Apply prioritization framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Creation:"
        }), " Create Kanban task (E7:S01", ":T01", " for perpetual, or specific task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batch Processing:"
        }), " Group similar issues into batch tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolution:"
        }), " Update task status as work progresses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " Mark task COMPLETE when verified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release:"
        }), " Include in RW, update version markers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Perpetual Task (E7:S01", ":T01", "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always IN PROGRESS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track progress with version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document batches of work completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never mark as COMPLETE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prioritized-maintenance-workflow",
      children: "Prioritized Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Identification:"
        }), " Identify maintenance need"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assessment:"
        }), " Assess severity, impact, effort"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority Calculation:"
        }), " Calculate priority score"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Assignment:"
        }), " Create task, assign MoSCOW, assign to Epic/Story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work Planning:"
        }), " Plan approach, estimate timeline"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation:"
        }), " Update task status, document progress"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completion:"
        }), " Mark COMPLETE, update Kanban, include in RW"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scheduled-maintenance-workflow",
      children: "Scheduled Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planning:"
        }), " Define maintenance scope and schedule"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovery:"
        }), " Identify issues through comprehensive scanning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batch Prioritization:"
        }), " Prioritize and group issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batch Execution:"
        }), " Create batch tasks, track progress"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " Verify fixes, update task status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reporting:"
        }), " Generate maintenance report, update Kanban"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "emergency-maintenance-workflow",
      children: "Emergency Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue Identification:"
        }), " Identify critical issue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rapid Assessment:"
        }), " Quick assessment, bypass normal process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Emergency Fix:"
        }), " Create urgent task, implement fix"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " Verify fix, update task status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Document emergency fix, create follow-up task if needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "epic-4-kanban-framework-integration",
      children: "Epic 4 (Kanban Framework) Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-usage",
      children: "Framework Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 7 uses Epic 4's Kanban framework:"
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
        children: "Use Epic 4 task templates for maintenance tasks"
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
        children: "Use Epic 4 Release Workflow (RW) for maintenance releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Epic 4 Update Kanban Workflow (UKW) for maintenance updates"
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
        children: "Maintenance tasks appear in Epic 4 Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow Epic 4 MoSCOW organization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Epic 4 status tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow Epic 4 task ordering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-ide-error-task",
      children: "Example 1: IDE Error Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Python syntax error in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "framework-health-monitor.py"
      }), " (line 45)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task ID:"
        }), " E7:S01", ":T01", " (perpetual task for IDE issues, or create specific task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority:"
        }), " Severity=5, Impact=5, Effort=1 → Priority=5.0 (Critical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW:"
        }), " Must Have (M)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story:"
        }), " Epic 7, Story 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " IN PROGRESS"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Board:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Appears in \"Must Have (M)\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ordered by priority score (highest first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: IN PROGRESS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Document:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Description: Fix Python syntax error in framework-health-monitor.py line 45"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority Score: 5.0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Severity: 5 (Critical)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impact: 5 (Critical)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Effort: 1 (Minimal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MoSCOW: Must Have"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: IN PROGRESS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix implemented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version: v0.7.1.1+1 (if specific task) or v0.7.1.1+2 (if perpetual task)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Included in RW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-code-quality-batch-task",
      children: "Example 2: Code Quality Batch Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Multiple code quality warnings across framework packages"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task ID:"
        }), " E7:S01", ":TXX", " (new task for batch)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority:"
        }), " Average Priority=2.5 (Medium)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW:"
        }), " Could Have (C)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story:"
        }), " Epic 7, Story 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " TODO"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Board:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Appears in \"Could Have (C)\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ordered by priority score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: TODO"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Document:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Description: Batch fix code quality warnings across framework packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority Score: 2.5 (average)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Severity: 2 (Low)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impact: 3 (Medium)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Effort: 3 (Medium)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MoSCOW: Could Have"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: TODO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch Scope: List of files/packages to fix"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch fixes implemented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version: v0.7.1.XX+1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Included in RW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-technical-debt-task",
      children: "Example 3: Technical Debt Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Outdated dependency with security vulnerability"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task ID:"
        }), " E7:S01", ":TXX", " (new task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priority:"
        }), " Severity=5, Impact=4, Effort=2, Risk=+0.2 → Priority=4.6 (Critical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MoSCOW:"
        }), " Must Have (M)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story:"
        }), " Epic 7, Story 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " IN PROGRESS"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Board:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Appears in \"Must Have (M)\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ordered by priority score (highest first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: IN PROGRESS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Document:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Description: Update outdated dependency with security vulnerability (CVE-2024-XXXX)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority Score: 4.6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Severity: 5 (Critical)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impact: 4 (High)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Effort: 2 (Low)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MoSCOW: Must Have"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: IN PROGRESS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contextual Adjustment: Risk factor +0.2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status: COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version: v0.7.1.XX+1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Included in urgent release"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-creation",
      children: "Task Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create tasks for all maintenance work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use appropriate Epic/Story assignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include complete task metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document context and rationale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set realistic effort estimates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creating tasks without proper assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing task metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vague task descriptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unrealistic effort estimates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-tracking",
      children: "Task Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task status regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document progress in task document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board promptly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track time and effort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note blockers and dependencies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leaving tasks in TODO indefinitely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not updating status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing progress documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring blockers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not tracking effort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prioritization",
      children: "Prioritization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply prioritization framework consistently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-assess priority as context changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update MoSCOW classification when needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider dependencies and risks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Balance maintenance with feature work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not updating priority"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring contextual factors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Over-prioritizing low-impact work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under-prioritizing critical issues"
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
        children: "Follow maintenance workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate with RW for releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use UKW for Kanban updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track metrics and outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn from maintenance patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bypassing workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not integrating with releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing Kanban updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not learning from experience"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metrics-and-reporting",
      children: "Metrics and Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maintenance-metrics",
      children: "Maintenance Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total maintenance tasks created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks by status (TODO, IN PROGRESS, COMPLETE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks by MoSCOW (M, S, C, W)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks by priority level"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average priority score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks by category (IDE-flagged, quality, debt, framework)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completion Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks completed per period"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average time to completion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completion rate by priority"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completion rate by MoSCOW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backlog size and trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Codebase health improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue resolution rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical debt reduction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework health scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance effectiveness"
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
        children: "Weekly maintenance summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monthly maintenance review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quarterly maintenance assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Annual maintenance trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Report Content:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task creation and completion statistics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MoSCOW distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health metrics and trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outstanding work and recommendations"
      }), "\n"]
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
          children: "Maintenance Workflow Processes:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/maintenance-workflow-processes.md"
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
          children: "Story 1 (Codebase Maintenance Tasks):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks.md"
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
      }), " Integrate maintenance tasks comprehensively with Kanban framework, using Epic 7 as organizational structure and Epic 4's Kanban framework for task management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides systematic approach to maintenance task tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures visibility of maintenance work alongside feature development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables prioritization-driven maintenance management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with existing Kanban framework and workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports metrics and reporting for maintenance effectiveness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives Considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate maintenance tracking system (fragmentation, reduced visibility)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ad-hoc maintenance without tracking (inconsistent, no visibility)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual tracking only (not scalable, error-prone)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool-only tracking (lacks process integration)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires initial setup and documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance tasks visible in Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables systematic maintenance management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports data-driven maintenance decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with existing workflows"
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