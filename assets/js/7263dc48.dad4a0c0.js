"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["93051"], {
40913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_maintenance_task_prioritization_framework_md_726_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-maintenance-task-prioritization-framework-md-726.json
var site_docs_architecture_standards_and_adrs_maintenance_task_prioritization_framework_md_726_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/maintenance-task-prioritization-framework","title":"Maintenance Task Prioritization Framework","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/maintenance-task-prioritization-framework","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Maintenance Tasks Kanban Integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-kanban-integration"},"next":{"title":"Maintenance Workflow Processes","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-workflow-processes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Maintenance Task Prioritization Framework';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Maintenance Task Categories",
  "id": "maintenance-task-categories",
  "level": 2
}, {
  "value": "Category 1: IDE-Flagged Issues",
  "id": "category-1-ide-flagged-issues",
  "level": 3
}, {
  "value": "Category 2: Code Quality Issues",
  "id": "category-2-code-quality-issues",
  "level": 3
}, {
  "value": "Category 3: Technical Debt",
  "id": "category-3-technical-debt",
  "level": 3
}, {
  "value": "Category 4: Framework and Infrastructure Maintenance",
  "id": "category-4-framework-and-infrastructure-maintenance",
  "level": 3
}, {
  "value": "Prioritization Dimensions",
  "id": "prioritization-dimensions",
  "level": 2
}, {
  "value": "Dimension 1: Severity",
  "id": "dimension-1-severity",
  "level": 3
}, {
  "value": "Critical (Severity: 5)",
  "id": "critical-severity-5",
  "level": 4
}, {
  "value": "High (Severity: 4)",
  "id": "high-severity-4",
  "level": 4
}, {
  "value": "Medium (Severity: 3)",
  "id": "medium-severity-3",
  "level": 4
}, {
  "value": "Low (Severity: 2)",
  "id": "low-severity-2",
  "level": 4
}, {
  "value": "Informational (Severity: 1)",
  "id": "informational-severity-1",
  "level": 4
}, {
  "value": "Dimension 2: Impact",
  "id": "dimension-2-impact",
  "level": 3
}, {
  "value": "Critical Impact (Impact: 5)",
  "id": "critical-impact-impact-5",
  "level": 4
}, {
  "value": "High Impact (Impact: 4)",
  "id": "high-impact-impact-4",
  "level": 4
}, {
  "value": "Medium Impact (Impact: 3)",
  "id": "medium-impact-impact-3",
  "level": 4
}, {
  "value": "Low Impact (Impact: 2)",
  "id": "low-impact-impact-2",
  "level": 4
}, {
  "value": "Minimal Impact (Impact: 1)",
  "id": "minimal-impact-impact-1",
  "level": 4
}, {
  "value": "Dimension 3: Effort",
  "id": "dimension-3-effort",
  "level": 3
}, {
  "value": "Minimal Effort (Effort: 1)",
  "id": "minimal-effort-effort-1",
  "level": 4
}, {
  "value": "Low Effort (Effort: 2)",
  "id": "low-effort-effort-2",
  "level": 4
}, {
  "value": "Medium Effort (Effort: 3)",
  "id": "medium-effort-effort-3",
  "level": 4
}, {
  "value": "High Effort (Effort: 4)",
  "id": "high-effort-effort-4",
  "level": 4
}, {
  "value": "Very High Effort (Effort: 5)",
  "id": "very-high-effort-effort-5",
  "level": 4
}, {
  "value": "Prioritization Score Calculation",
  "id": "prioritization-score-calculation",
  "level": 2
}, {
  "value": "Base Priority Score",
  "id": "base-priority-score",
  "level": 3
}, {
  "value": "Priority Score Ranges",
  "id": "priority-score-ranges",
  "level": 3
}, {
  "value": "Contextual Adjustments",
  "id": "contextual-adjustments",
  "level": 2
}, {
  "value": "Strategic Importance",
  "id": "strategic-importance",
  "level": 3
}, {
  "value": "Dependency Considerations",
  "id": "dependency-considerations",
  "level": 3
}, {
  "value": "Risk Factors",
  "id": "risk-factors",
  "level": 3
}, {
  "value": "Prioritization Process",
  "id": "prioritization-process",
  "level": 2
}, {
  "value": "Step 1: Task Identification",
  "id": "step-1-task-identification",
  "level": 3
}, {
  "value": "Step 2: Initial Assessment",
  "id": "step-2-initial-assessment",
  "level": 3
}, {
  "value": "Step 3: Calculate Base Priority Score",
  "id": "step-3-calculate-base-priority-score",
  "level": 3
}, {
  "value": "Step 4: Apply Contextual Adjustments",
  "id": "step-4-apply-contextual-adjustments",
  "level": 3
}, {
  "value": "Step 5: Kanban Integration",
  "id": "step-5-kanban-integration",
  "level": 3
}, {
  "value": "Kanban Integration",
  "id": "kanban-integration",
  "level": 2
}, {
  "value": "MoSCOW Classification",
  "id": "moscow-classification",
  "level": 3
}, {
  "value": "Epic/Story Assignment",
  "id": "epicstory-assignment",
  "level": 3
}, {
  "value": "Priority Tracking",
  "id": "priority-tracking",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Critical Syntax Error",
  "id": "example-1-critical-syntax-error",
  "level": 3
}, {
  "value": "Example 2: Code Quality Warning",
  "id": "example-2-code-quality-warning",
  "level": 3
}, {
  "value": "Example 3: Security Vulnerability",
  "id": "example-3-security-vulnerability",
  "level": 3
}, {
  "value": "Example 4: Documentation Update",
  "id": "example-4-documentation-update",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Regular Prioritization Reviews",
  "id": "regular-prioritization-reviews",
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
  "value": "Integration with Other Frameworks",
  "id": "integration-with-other-frameworks",
  "level": 2
}, {
  "value": "Framework Health Monitoring",
  "id": "framework-health-monitoring",
  "level": 3
}, {
  "value": "Release Workflow (RW)",
  "id": "release-workflow-rw",
  "level": 3
}, {
  "value": "Update Kanban Workflow (UKW)",
  "id": "update-kanban-workflow-ukw",
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
        id: "maintenance-task-prioritization-framework",
        children: "Maintenance Task Prioritization Framework"
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
      }), " E7:S01", ":T02", " - Create maintenance task prioritization framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Kanban Governance Policy, Framework Health Metrics, IDE-Flagged Issues"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive prioritization framework"
      }), " for maintenance tasks in the AI Dev Kit project. The framework provides systematic criteria and processes for prioritizing maintenance work, ensuring that critical issues are addressed promptly while maintaining codebase health efficiently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Dimensional Prioritization:"
        }), " Tasks are prioritized based on severity, impact, and effort"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context-Aware:"
        }), " Prioritization considers project context, dependencies, and strategic goals"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actionable:"
        }), " Framework provides clear, actionable guidance for task prioritization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Integration:"
        }), " Seamlessly integrates with Kanban framework for task tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous Improvement:"
        }), " Framework evolves based on maintenance patterns and outcomes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintenance-task-categories",
      children: "Maintenance Task Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "category-1-ide-flagged-issues",
      children: "Category 1: IDE-Flagged Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " IDE/editor warnings, errors, and informational messages"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subcategories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Errors:"
        }), " Critical issues that prevent code execution or compilation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warnings:"
        }), " Issues that may cause problems but don't prevent execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Info:"
        }), " Informational messages suggesting improvements or best practices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High volume, continuous stream"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Varying severity and impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can accumulate if not addressed regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Often quick to fix individually"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "category-2-code-quality-issues",
      children: "Category 2: Code Quality Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " Code analysis tools, linting, static analysis"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subcategories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Smells:"
        }), " Patterns indicating potential problems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity Issues:"
        }), " High cyclomatic complexity, deep nesting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Style Violations:"
        }), " Inconsistent formatting, naming conventions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Vulnerabilities:"
        }), " Security-related code issues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systematic patterns across codebase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "May require refactoring effort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impact on maintainability and readability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Often benefits from batch processing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "category-3-technical-debt",
      children: "Category 3: Technical Debt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " Accumulated shortcuts, workarounds, deferred improvements"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subcategories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architectural Debt:"
        }), " Structural issues requiring refactoring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Debt:"
        }), " Missing or outdated documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Debt:"
        }), " Missing tests, low coverage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency Debt:"
        }), " Outdated dependencies, security issues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Long-term impact on maintainability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "May require significant effort to address"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strategic importance varies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Benefits from planned improvement cycles"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "category-4-framework-and-infrastructure-maintenance",
      children: "Category 4: Framework and Infrastructure Maintenance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " Framework updates, infrastructure improvements, tooling"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subcategories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Updates:"
        }), " Updating dependencies, frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infrastructure Improvements:"
        }), " CI/CD, tooling, automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance Optimization:"
        }), " Performance improvements, optimizations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility Maintenance:"
        }), " Keeping compatibility with dependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strategic importance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "May require coordination across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Benefits from planned maintenance windows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Often has dependencies on other work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prioritization-dimensions",
      children: "Prioritization Dimensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dimension-1-severity",
      children: "Dimension 1: Severity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " The criticality of the issue and its potential to cause problems"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity Levels:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "critical-severity-5",
      children: "Critical (Severity: 5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Issues that prevent code execution, compilation, or deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Syntax errors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Import errors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Type errors that prevent compilation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Critical security vulnerabilities"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Time:"
        }), " Immediate (within 1 development cycle)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Blocks development or deployment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "high-severity-4",
      children: "High (Severity: 4)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Issues that cause runtime errors or significant problems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Runtime exceptions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Logic errors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "High-severity security warnings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Breaking API changes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Time:"
        }), " Urgent (within 1-2 development cycles)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Causes failures or significant problems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "medium-severity-3",
      children: "Medium (Severity: 3)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Issues that may cause problems or reduce quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Code quality warnings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Performance warnings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deprecation warnings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Medium-severity security issues"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Time:"
        }), " Important (within 2-4 development cycles)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Reduces quality or may cause problems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "low-severity-2",
      children: "Low (Severity: 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Issues that are minor or cosmetic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Style violations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minor code quality suggestions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Informational messages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Low-severity security suggestions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Time:"
        }), " As time permits (within 4+ development cycles)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor quality improvements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "informational-severity-1",
      children: "Informational (Severity: 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Suggestions or best practices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Code style suggestions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Best practice recommendations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optimization opportunities"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Time:"
        }), " Optional (when convenient)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Nice-to-have improvements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dimension-2-impact",
      children: "Dimension 2: Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " The scope and effect of addressing or not addressing the issue"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact Levels:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "critical-impact-impact-5",
      children: "Critical Impact (Impact: 5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Affects core functionality, multiple users, or critical systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Affects multiple projects or frameworks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Blocks critical workflows"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Affects production systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Security or data integrity issues"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework breaking changes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Critical security vulnerabilities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Data loss risks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "System-wide failures"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "high-impact-impact-4",
      children: "High Impact (Impact: 4)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Affects significant functionality or user experience"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Affects major features"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Impacts developer experience significantly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Affects multiple components"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Performance degradation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Major feature bugs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Significant performance issues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Developer workflow blockers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework compatibility issues"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "medium-impact-impact-3",
      children: "Medium Impact (Impact: 3)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Affects moderate functionality or quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Affects specific features or components"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Impacts developer experience moderately"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Affects code quality or maintainability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Moderate performance issues"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Feature-specific bugs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Code quality issues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Moderate performance problems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation gaps"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "low-impact-impact-2",
      children: "Low Impact (Impact: 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Affects minor functionality or quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Affects edge cases or minor features"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minimal impact on developer experience"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cosmetic or minor quality issues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minor performance improvements"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge case bugs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minor code quality issues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Style inconsistencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minor documentation updates"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "minimal-impact-impact-1",
      children: "Minimal Impact (Impact: 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Negligible or no practical impact"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Affects rarely-used code paths"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No practical impact on users"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Purely cosmetic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Theoretical improvements"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Unused code cleanup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Purely cosmetic changes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Theoretical optimizations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minor style suggestions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dimension-3-effort",
      children: "Dimension 3: Effort"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " The estimated time and complexity required to address the issue"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Effort Levels:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "minimal-effort-effort-1",
      children: "Minimal Effort (Effort: 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Quick fixes, simple changes (≤ 1 hour)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fixing typos"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Simple style fixes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Adding missing imports"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Quick documentation updates"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Estimate:"
        }), " < 1 hour"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " Low"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "low-effort-effort-2",
      children: "Low Effort (Effort: 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Straightforward changes (1-4 hours)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Simple bug fixes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minor refactoring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Adding simple tests"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Estimate:"
        }), " 1-4 hours"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " Low-Medium"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "medium-effort-effort-3",
      children: "Medium Effort (Effort: 3)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Moderate changes requiring some analysis (4-16 hours)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Moderate refactoring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Feature improvements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complex bug fixes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Significant documentation work"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Estimate:"
        }), " 4-16 hours (0.5-2 days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " Medium"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "high-effort-effort-4",
      children: "High Effort (Effort: 4)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Significant changes requiring substantial work (16-40 hours)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Major refactoring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Architecture changes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Large feature additions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive documentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Estimate:"
        }), " 16-40 hours (2-5 days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " High"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "very-high-effort-effort-5",
      children: "Very High Effort (Effort: 5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition:"
        }), " Major changes requiring extensive work (40+ hours)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Major architecture overhauls"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete framework rewrites"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Large-scale migrations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive system redesigns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Estimate:"
        }), " 40+ hours (5+ days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " Very High"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prioritization-score-calculation",
      children: "Prioritization Score Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "base-priority-score",
      children: "Base Priority Score"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formula:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Priority Score = (Severity × 0.4) + (Impact × 0.4) + (Effort × 0.2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weighting Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity (40%):"
        }), " Criticality of the issue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact (40%):"
        }), " Scope and effect of the issue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effort (20%):"
        }), " Inverse weight (lower effort = higher priority, adjusted in calculation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Effort Adjustment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Effort is inverted in calculation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(6 - Effort) × 0.2"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lower effort tasks get higher priority scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This ensures quick wins are prioritized appropriately"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Formula:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Priority Score = (Severity × 0.4) + (Impact × 0.4) + ((6 - Effort) × 0.2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "priority-score-ranges",
      children: "Priority Score Ranges"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Priority (Score: 4.0 - 5.0):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must address immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocks development or deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical security or functionality issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "High Priority (Score: 3.0 - 3.9):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should address within 1-2 development cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Significant impact on functionality or quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Important for codebase health"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium Priority (Score: 2.0 - 2.9):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should address within 2-4 development cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Moderate impact on functionality or quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contributes to codebase health"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Low Priority (Score: 1.0 - 1.9):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address as time permits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor impact on functionality or quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nice-to-have improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimal Priority (Score: 0.0 - 0.9):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional, address when convenient"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Negligible impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Purely cosmetic or theoretical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contextual-adjustments",
      children: "Contextual Adjustments"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strategic-importance",
      children: "Strategic Importance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adjustment Factor:"
      }), " ±0.5 to Priority Score"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "High Strategic Importance (+0.5):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aligns with project goals or roadmap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables future work or features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Addresses technical debt that blocks progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improves developer experience significantly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Low Strategic Importance (-0.5):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not aligned with current priorities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deferred or low-value work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cosmetic improvements only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Theoretical benefits only"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-considerations",
      children: "Dependency Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adjustment Factor:"
      }), " ±0.3 to Priority Score"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks Other Work (+0.3):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents other tasks from proceeding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required for dependent features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocks critical workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Depends on Other Work (-0.3):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot proceed until other work is complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lower urgency until dependencies resolved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk-factors",
      children: "Risk Factors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adjustment Factor:"
      }), " ±0.2 to Priority Score"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "High Risk (+0.2):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security vulnerabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data integrity risks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System stability concerns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compliance issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Low Risk (-0.2):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low-risk changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Well-tested code paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Isolated changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prioritization-process",
      children: "Prioritization Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-task-identification",
      children: "Step 1: Task Identification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDE-flagged issues (errors, warnings, info)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code analysis tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual code reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical debt tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create task in Kanban framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document issue details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capture context and examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-initial-assessment",
      children: "Step 2: Initial Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assess Each Dimension:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Determine criticality level (1-5)"]
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
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-calculate-base-priority-score",
      children: "Step 3: Calculate Base Priority Score"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply Formula:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Priority Score = (Severity × 0.4) + (Impact × 0.4) + ((6 - Effort) × 0.2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Record Score:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document calculated priority score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Note priority level (Critical/High/Medium/Low/Minimal)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-apply-contextual-adjustments",
      children: "Step 4: Apply Contextual Adjustments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strategic importance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency considerations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk factors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply Adjustments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add/subtract adjustment factors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document reasoning for adjustments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Finalize adjusted priority score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-kanban-integration",
      children: "Step 5: Kanban Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assign to Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create task in appropriate Epic/Story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set priority based on calculated score"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Assign MoSCOW classification:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
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
              children: "Ongoing (O):"
            }), " Perpetual maintenance tasks (not scored, tracked separately)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Won't Have (W):"
            }), " Low/Minimal Priority (<2.0)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Track Progress:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task status as work progresses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document resolution and outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn from prioritization accuracy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kanban-integration",
      children: "Kanban Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moscow-classification",
      children: "MoSCOW Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Must Have (M):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority Score: 4.0 - 5.0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical Priority tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must be completed before release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocks development or deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Should Have (S):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority Score: 3.0 - 3.9"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High Priority tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should be completed soon"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Important for quality or functionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Could Have (C):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority Score: 2.0 - 2.9"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Medium Priority tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Could be completed if time permits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contributes to codebase health"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ongoing (O):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perpetual maintenance tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that never complete (e.g., workflow maintenance, changelog management)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracked but don't block other work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not scored using priority framework (separate category)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Won't Have (W):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priority Score: < 2.0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low/Minimal Priority tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deferred or optional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nice-to-have improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epicstory-assignment",
      children: "Epic/Story Assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 7: Codebase Maintenance and Review"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 1:"
        }), " Codebase Maintenance Tasks", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["IDE-flagged issues (E7:S01", ":T01", " - Perpetual)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Prioritization framework (E7:S01", ":T02", ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Workflow processes (E7:S01", ":T03", ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Kanban integration (E7:S01", ":T04", ")"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create tasks in appropriate Epic/Story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include priority score in task description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document severity, impact, and effort ratings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to related issues or context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "priority-tracking",
      children: "Priority Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Metadata:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
        }), " MoSCOW classification"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Progress Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track priority score accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn from prioritization outcomes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refine framework based on experience"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-critical-syntax-error",
      children: "Example 1: Critical Syntax Error"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " Fix Python syntax error in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "framework-health-monitor.py"
      }), " (line 45)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " 5 (Critical - prevents execution)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " 5 (Critical - blocks framework health monitoring)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effort:"
        }), " 1 (Minimal - simple syntax fix)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Priority Score = (5 × 0.4) + (5 × 0.4) + ((6 - 1) × 0.2)\n               = 2.0 + 2.0 + 1.0\n               = 5.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Critical Priority (5.0) - Must Have (M)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Address immediately"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-code-quality-warning",
      children: "Example 2: Code Quality Warning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " Reduce cyclomatic complexity in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_version_bump.py"
      }), " (currently 15, target: 10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " 2 (Low - warning, doesn't prevent execution)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " 3 (Medium - affects code maintainability)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effort:"
        }), " 3 (Medium - requires refactoring)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Priority Score = (2 × 0.4) + (3 × 0.4) + ((6 - 3) × 0.2)\n               = 0.8 + 1.2 + 0.6\n               = 2.6\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Medium Priority (2.6) - Could Have (C)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Address within 2-4 development cycles"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-security-vulnerability",
      children: "Example 3: Security Vulnerability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " Update dependency with known security vulnerability (CVE-2024-XXXX)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " 5 (Critical - security vulnerability)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " 4 (High - affects security posture)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effort:"
        }), " 2 (Low - dependency update)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contextual Adjustments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Risk Factor:"
        }), " +0.2 (High risk - security issue)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Base Score = (5 × 0.4) + (4 × 0.4) + ((6 - 2) × 0.2)\n           = 2.0 + 1.6 + 0.8\n           = 4.4\nAdjusted Score = 4.4 + 0.2 = 4.6\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Critical Priority (4.6) - Must Have (M)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Address urgently (within 1 development cycle)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-documentation-update",
      children: "Example 4: Documentation Update"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " Update outdated documentation in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "framework-health-metrics.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " 1 (Informational - documentation issue)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " 2 (Low - affects documentation quality)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effort:"
        }), " 1 (Minimal - documentation update)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Priority Score = (1 × 0.4) + (2 × 0.4) + ((6 - 1) × 0.2)\n               = 0.4 + 0.8 + 1.0\n               = 2.2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Medium Priority (2.2) - Could Have (C)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Address as time permits"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regular-prioritization-reviews",
      children: "Regular Prioritization Reviews"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weekly:"
        }), " Review high-priority tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monthly:"
        }), " Comprehensive prioritization review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quarterly:"
        }), " Framework effectiveness review"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review pending tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-assess priority scores if context changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjust priorities based on new information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn from completed tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-processing",
      children: "Batch Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Group Similar Tasks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch similar issues for efficient resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group by category (IDE errors, code quality, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process batches during maintenance windows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "continuous-improvement",
      children: "Continuous Improvement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Track Outcomes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor prioritization accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn from prioritization decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refine framework based on experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update criteria as patterns emerge"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Evolution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review framework effectiveness regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adjust weighting if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new criteria as patterns emerge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document lessons learned"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-with-other-frameworks",
      children: "Integration with Other Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-health-monitoring",
      children: "Framework Health Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance tasks affect framework health scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health metrics inform prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritization supports health improvement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use health metrics to identify maintenance needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize tasks that improve health scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health improvement from maintenance work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-rw",
      children: "Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance tasks may be included in releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritization guides release planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Releases may create maintenance tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include high-priority maintenance in releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address critical issues before releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document maintenance work in changelogs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-kanban-workflow-ukw",
      children: "Update Kanban Workflow (UKW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW may identify maintenance needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritization guides UKW task creation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance status tracked in Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW identifies maintenance opportunities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create prioritized tasks from UKW findings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track maintenance progress in Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Governance Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
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
      }), " Implement multi-dimensional prioritization framework with severity, impact, and effort dimensions, weighted scoring, and Kanban integration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides systematic, objective prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Considers multiple factors for balanced decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates seamlessly with Kanban framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports continuous improvement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives Considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single-dimension prioritization (too simplistic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unweighted dimensions (doesn't reflect importance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual-only prioritization (inconsistent)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool-based prioritization (adds dependencies)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires initial assessment effort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework may need refinement based on experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides foundation for systematic maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables data-driven prioritization decisions"
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