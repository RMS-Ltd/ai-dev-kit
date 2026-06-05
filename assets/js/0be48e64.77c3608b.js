"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["33310"], {
81470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_code_quality_metrics_framework_md_0be_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-code-quality-metrics-framework-md-0be.json
var site_docs_architecture_standards_and_adrs_code_quality_metrics_framework_md_0be_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/code-quality-metrics-framework","title":"Code Quality Metrics Framework","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/code-quality-metrics-framework.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/code-quality-metrics-framework","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-quality-metrics-framework","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/code-quality-metrics-framework.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-05T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Code Quality Metrics Kanban Integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-quality-kanban-integration"},"next":{"title":"Code Quality Monitoring Dashboards","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-quality-monitoring-dashboards"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/code-quality-metrics-framework.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-05T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Code Quality Metrics Framework';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Metrics Framework Overview",
  "id": "metrics-framework-overview",
  "level": 2
}, {
  "value": "Quality Dimensions",
  "id": "quality-dimensions",
  "level": 3
}, {
  "value": "Dimension 1: Code Complexity Metrics",
  "id": "dimension-1-code-complexity-metrics",
  "level": 2
}, {
  "value": "Cyclomatic Complexity",
  "id": "cyclomatic-complexity",
  "level": 3
}, {
  "value": "Cognitive Complexity",
  "id": "cognitive-complexity",
  "level": 3
}, {
  "value": "Nesting Depth",
  "id": "nesting-depth",
  "level": 3
}, {
  "value": "Function/Method Size",
  "id": "functionmethod-size",
  "level": 3
}, {
  "value": "Class/Module Size",
  "id": "classmodule-size",
  "level": 3
}, {
  "value": "Dimension 2: Code Coverage Metrics",
  "id": "dimension-2-code-coverage-metrics",
  "level": 2
}, {
  "value": "Test Coverage",
  "id": "test-coverage",
  "level": 3
}, {
  "value": "Branch Coverage",
  "id": "branch-coverage",
  "level": 3
}, {
  "value": "Function Coverage",
  "id": "function-coverage",
  "level": 3
}, {
  "value": "Dimension 3: Code Duplication Metrics",
  "id": "dimension-3-code-duplication-metrics",
  "level": 2
}, {
  "value": "Duplication Percentage",
  "id": "duplication-percentage",
  "level": 3
}, {
  "value": "Duplication Blocks",
  "id": "duplication-blocks",
  "level": 3
}, {
  "value": "Dimension 4: Code Maintainability Metrics",
  "id": "dimension-4-code-maintainability-metrics",
  "level": 2
}, {
  "value": "Maintainability Index",
  "id": "maintainability-index",
  "level": 3
}, {
  "value": "Code Smells",
  "id": "code-smells",
  "level": 3
}, {
  "value": "Technical Debt Ratio",
  "id": "technical-debt-ratio",
  "level": 3
}, {
  "value": "Dimension 5: Code Security Metrics",
  "id": "dimension-5-code-security-metrics",
  "level": 2
}, {
  "value": "Security Vulnerabilities",
  "id": "security-vulnerabilities",
  "level": 3
}, {
  "value": "Security Hotspots",
  "id": "security-hotspots",
  "level": 3
}, {
  "value": "Dependency Vulnerabilities",
  "id": "dependency-vulnerabilities",
  "level": 3
}, {
  "value": "Dimension 6: Code Performance Metrics",
  "id": "dimension-6-code-performance-metrics",
  "level": 2
}, {
  "value": "Performance Issues",
  "id": "performance-issues",
  "level": 3
}, {
  "value": "Code Efficiency",
  "id": "code-efficiency",
  "level": 3
}, {
  "value": "Dimension 7: Technical Debt Metrics",
  "id": "dimension-7-technical-debt-metrics",
  "level": 2
}, {
  "value": "Technical Debt",
  "id": "technical-debt",
  "level": 3
}, {
  "value": "Debt Ratio",
  "id": "debt-ratio",
  "level": 3
}, {
  "value": "Metric Calculation Methods",
  "id": "metric-calculation-methods",
  "level": 2
}, {
  "value": "Automated Calculation",
  "id": "automated-calculation",
  "level": 3
}, {
  "value": "Manual Calculation",
  "id": "manual-calculation",
  "level": 3
}, {
  "value": "Metric Thresholds and Targets",
  "id": "metric-thresholds-and-targets",
  "level": 2
}, {
  "value": "Threshold Levels",
  "id": "threshold-levels",
  "level": 3
}, {
  "value": "Target Values Summary",
  "id": "target-values-summary",
  "level": 3
}, {
  "value": "Metric Aggregation and Reporting",
  "id": "metric-aggregation-and-reporting",
  "level": 2
}, {
  "value": "Aggregation Levels",
  "id": "aggregation-levels",
  "level": 3
}, {
  "value": "Reporting Frequency",
  "id": "reporting-frequency",
  "level": 3
}, {
  "value": "Integration Points",
  "id": "integration-points",
  "level": 2
}, {
  "value": "Tool Integration",
  "id": "tool-integration",
  "level": 3
}, {
  "value": "Workflow Integration",
  "id": "workflow-integration",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Metric Selection",
  "id": "metric-selection",
  "level": 3
}, {
  "value": "Metric Interpretation",
  "id": "metric-interpretation",
  "level": 3
}, {
  "value": "Metric Improvement",
  "id": "metric-improvement",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "code-quality-metrics-framework",
        children: "Code Quality Metrics Framework"
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
      }), " E7:S03", ":T01", " - Design code quality metrics framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Code Review Standards and Guidelines, Maintenance Workflow Processes, Framework Health Metrics"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive code quality metrics framework"
      }), " for the AI Dev Kit project. It establishes metrics for code complexity, coverage, duplication, maintainability, security, performance, and technical debt, providing a systematic approach to measuring and monitoring code quality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comprehensive Coverage:"
        }), " Metrics cover all important quality dimensions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actionable Metrics:"
        }), " Metrics provide actionable insights for improvement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Threshold-Based:"
        }), " Clear thresholds and targets for each metric"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trend Analysis:"
        }), " Metrics support trend analysis over time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration-Ready:"
        }), " Framework designed for integration with tools and workflows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metrics-framework-overview",
      children: "Metrics Framework Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-dimensions",
      children: "Quality Dimensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The framework organizes metrics into seven key dimensions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Complexity"
        }), " - Measures code complexity and cognitive load"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Coverage"
        }), " - Measures test coverage and quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Duplication"
        }), " - Measures code duplication and reuse"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Maintainability"
        }), " - Measures code maintainability and technical debt"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Security"
        }), " - Measures security vulnerabilities and practices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Performance"
        }), " - Measures performance characteristics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Debt"
        }), " - Measures accumulated technical debt"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-1-code-complexity-metrics",
      children: "Dimension 1: Code Complexity Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cyclomatic-complexity",
      children: "Cyclomatic Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Cyclomatic Complexity", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the number of linearly independent paths through code", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Count of decision points (if, while, for, case, etc.) + 1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 10 per function/method", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 11-20", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low complexity (≤ 10): Easy to understand and test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Medium complexity (11-20): May need refactoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High complexity (> 20): Difficult to maintain, high risk"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cognitive-complexity",
      children: "Cognitive Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Cognitive Complexity", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the cognitive load required to understand code", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Weighted count of control flow structures", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 15 per function/method", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 16-25", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 25"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low cognitive complexity: Code is easy to understand"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High cognitive complexity: Code is difficult to understand and maintain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nesting-depth",
      children: "Nesting Depth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Maximum Nesting Depth", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the maximum level of nesting in code", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Maximum depth of nested control structures", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 4 levels", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 5-6 levels", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 6 levels"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low nesting: Code is easier to read and understand"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High nesting: Code is difficult to follow and maintain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functionmethod-size",
      children: "Function/Method Size"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Lines of Code per Function/Method", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the size of individual functions/methods", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Count of lines (excluding comments/whitespace)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 50 lines", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 51-100 lines", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 100 lines"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small functions: Easier to understand, test, and maintain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large functions: May indicate need for refactoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classmodule-size",
      children: "Class/Module Size"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Lines of Code per Class/Module", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the size of classes/modules", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Count of lines in class/module", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 500 lines", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 501-1000 lines", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 1000 lines"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small classes: Better cohesion, easier to maintain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large classes: May violate single responsibility principle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-2-code-coverage-metrics",
      children: "Dimension 2: Code Coverage Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-coverage",
      children: "Test Coverage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Test Coverage Percentage", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the percentage of code covered by tests", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " (Covered lines / Total lines) × 100", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≥ 80%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 60-79%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " < 60%"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High coverage: Better confidence in code correctness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low coverage: Higher risk of undetected bugs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "branch-coverage",
      children: "Branch Coverage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Branch Coverage Percentage", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the percentage of branches covered by tests", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " (Covered branches / Total branches) × 100", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≥ 80%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 60-79%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " < 60%"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High branch coverage: Better test quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low branch coverage: Edge cases may not be tested"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "function-coverage",
      children: "Function Coverage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Function Coverage Percentage", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the percentage of functions covered by tests", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " (Covered functions / Total functions) × 100", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≥ 90%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 70-89%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " < 70%"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High function coverage: Most functions are tested"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low function coverage: Many functions untested"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-3-code-duplication-metrics",
      children: "Dimension 3: Code Duplication Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "duplication-percentage",
      children: "Duplication Percentage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Code Duplication Percentage", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the percentage of duplicated code", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " (Duplicated lines / Total lines) × 100", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 3%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 4-5%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 5%"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low duplication: Better code reuse and maintainability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High duplication: Increased maintenance burden"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "duplication-blocks",
      children: "Duplication Blocks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Number of Duplication Blocks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the number of duplicated code blocks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Count of duplicated code blocks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 10 blocks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 11-20 blocks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 20 blocks"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Few duplication blocks: Code is well-structured"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many duplication blocks: May need refactoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-4-code-maintainability-metrics",
      children: "Dimension 4: Code Maintainability Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maintainability-index",
      children: "Maintainability Index"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Maintainability Index", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Composite metric measuring code maintainability", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " 171 - 5.2 × ln(Halstead Volume) - 0.23 × (Cyclomatic Complexity) - 16.2 × ln(Lines of Code)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≥ 70", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 50-69", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " < 50"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High index: Code is maintainable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low index: Code is difficult to maintain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-smells",
      children: "Code Smells"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Number of Code Smells", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the number of code quality issues", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Count of detected code smells", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 5 per 1000 lines", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 6-10 per 1000 lines", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 10 per 1000 lines"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Few code smells: Good code quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many code smells: Code quality issues present"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technical-debt-ratio",
      children: "Technical Debt Ratio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Technical Debt Ratio", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the ratio of technical debt to development time", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " (Time to fix issues / Development time) × 100", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 5%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 6-10%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 10%"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low ratio: Technical debt is manageable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High ratio: Significant technical debt accumulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-5-code-security-metrics",
      children: "Dimension 5: Code Security Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-vulnerabilities",
      children: "Security Vulnerabilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Number of Security Vulnerabilities", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the number of security issues", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Count of detected vulnerabilities", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " 0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 1-3", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 3"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zero vulnerabilities: Secure code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vulnerabilities present: Security risks identified"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-hotspots",
      children: "Security Hotspots"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Number of Security Hotspots", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the number of security-sensitive areas", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Count of security hotspots", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 5", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 6-10", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Few hotspots: Security is well-managed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many hotspots: Security review needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-vulnerabilities",
      children: "Dependency Vulnerabilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Number of Vulnerable Dependencies", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the number of dependencies with known vulnerabilities", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Count of vulnerable dependencies", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " 0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 1-2", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 2"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zero vulnerable dependencies: Dependencies are secure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vulnerable dependencies: Update needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-6-code-performance-metrics",
      children: "Dimension 6: Code Performance Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-issues",
      children: "Performance Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Number of Performance Issues", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the number of performance problems", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Count of detected performance issues", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 2", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 3-5", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 5"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Few issues: Good performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many issues: Performance optimization needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-efficiency",
      children: "Code Efficiency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Code Efficiency Score", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures code efficiency (algorithm complexity, resource usage)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Composite score based on algorithm analysis", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≥ 80", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 60-79", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " < 60"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High efficiency: Code performs well"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low efficiency: Performance improvements needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-7-technical-debt-metrics",
      children: "Dimension 7: Technical Debt Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technical-debt",
      children: "Technical Debt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Technical Debt (in hours)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures the estimated time to fix all issues", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Sum of estimated fix times for all issues", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 40 hours", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 41-80 hours", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 80 hours"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low debt: Technical debt is manageable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High debt: Significant technical debt accumulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debt-ratio",
      children: "Debt Ratio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Technical Debt Ratio", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      }), " Measures technical debt relative to codebase size", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " (Technical Debt / Total Development Time) × 100", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≤ 5%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " 6-10%", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " > 10%"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low ratio: Debt is proportional to codebase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High ratio: Disproportionate debt accumulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metric-calculation-methods",
      children: "Metric Calculation Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-calculation",
      children: "Automated Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static analysis tools (SonarQube, CodeClimate, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting tools (pylint, flake8, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coverage tools (coverage.py, pytest-cov, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security scanners (Bandit, Safety, etc.)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run automated analysis tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect metric values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate metrics by dimension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate composite scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate reports"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-calculation",
      children: "Manual Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Needed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics not available from tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom metrics specific to project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation of automated metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define calculation method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect required data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform calculation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate against automated metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metric-thresholds-and-targets",
      children: "Metric Thresholds and Targets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "threshold-levels",
      children: "Threshold Levels"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target (Green):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metric meets or exceeds target value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No action required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain current practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning (Yellow):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metric is below target but above critical threshold"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor closely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical (Red):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metric is below critical threshold"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immediate action required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize fixes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "target-values-summary",
      children: "Target Values Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Warning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Critical"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cyclomatic Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11-20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test Coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≥ 80%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-79%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 60%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Duplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintainability Index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≥ 70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50-69"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 50"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Vulnerabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Technical Debt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "≤ 40h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "41-80h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 80h"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metric-aggregation-and-reporting",
      children: "Metric Aggregation and Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aggregation-levels",
      children: "Aggregation Levels"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File Level:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics calculated per file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify files needing attention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track file-level improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Module/Package Level:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics aggregated by module/package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify modules needing attention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track module-level trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Level:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics aggregated across entire project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overall quality assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track project-level trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reporting-frequency",
      children: "Reporting Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-Time:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continuous monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immediate alerts for critical issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dashboard updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Daily:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daily metric summaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trend analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quick status checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weekly:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly quality reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detailed analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement planning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monthly:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monthly quality reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strategic planning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-points",
      children: "Integration Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tool-integration",
      children: "Tool Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static Analysis Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SonarQube integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CodeClimate integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom tool integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI/CD Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated metric collection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality gates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build failure on critical issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IDE Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time metric display"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inline quality indicators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quick quality feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-integration",
      children: "Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Workflow (RW):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality checks before release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics in changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality gates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Kanban Workflow (UKW):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality-based prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality-driven maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality improvement tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metric-selection",
      children: "Metric Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select metrics relevant to project goals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Balance comprehensiveness with practicality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus on actionable metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid metric overload"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metric-interpretation",
      children: "Metric Interpretation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand metric meaning and limitations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider context when interpreting metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Look for trends, not just absolute values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combine multiple metrics for insights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metric-improvement",
      children: "Metric Improvement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set realistic improvement targets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize improvements based on impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track improvement progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Celebrate quality improvements"
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
          children: "Maintenance Workflow Processes:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/maintenance-workflow-processes.md"
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
          children: "Story 3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/story-03-code-quality-metrics-and-monitoring.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision Record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Implement comprehensive code quality metrics framework covering seven dimensions with clear thresholds and targets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides systematic approach to code quality measurement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Covers all important quality dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables actionable quality improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports integration with tools and workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives Considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimal metrics (insufficient coverage)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool-specific metrics (not portable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ad-hoc metrics (inconsistent)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overly complex metrics (not actionable)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires initial setup and tool integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework may need refinement based on experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides foundation for systematic quality monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables data-driven quality improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2026-01-05 (v0.7.3.1+0 – Code quality metrics framework designed)"
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