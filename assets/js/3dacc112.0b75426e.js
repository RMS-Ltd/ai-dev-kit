"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["49408"], {
3584(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_code_quality_monitoring_dashboards_md_3da_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-code-quality-monitoring-dashboards-md-3da.json
var site_docs_architecture_standards_and_adrs_code_quality_monitoring_dashboards_md_3da_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/code-quality-monitoring-dashboards","title":"Code Quality Monitoring Dashboards","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/code-quality-monitoring-dashboards.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/code-quality-monitoring-dashboards","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-quality-monitoring-dashboards","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/code-quality-monitoring-dashboards.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-05T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Code Quality Metrics Framework","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-quality-metrics-framework"},"next":{"title":"Code Quality Metrics and Monitoring Processes","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-quality-monitoring-processes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/code-quality-monitoring-dashboards.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-05T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Code Quality Monitoring Dashboards';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Dashboard Overview",
  "id": "dashboard-overview",
  "level": 2
}, {
  "value": "Dashboard Types",
  "id": "dashboard-types",
  "level": 3
}, {
  "value": "Dashboard 1: Overall Quality Dashboard",
  "id": "dashboard-1-overall-quality-dashboard",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose",
  "level": 3
}, {
  "value": "Components",
  "id": "components",
  "level": 3
}, {
  "value": "Dashboard 2: Dimension Dashboards",
  "id": "dashboard-2-dimension-dashboards",
  "level": 2
}, {
  "value": "Complexity Dashboard",
  "id": "complexity-dashboard",
  "level": 3
}, {
  "value": "Coverage Dashboard",
  "id": "coverage-dashboard",
  "level": 3
}, {
  "value": "Duplication Dashboard",
  "id": "duplication-dashboard",
  "level": 3
}, {
  "value": "Dashboard 3: Module Dashboards",
  "id": "dashboard-3-module-dashboards",
  "level": 2
}, {
  "value": "Module Quality Overview",
  "id": "module-quality-overview",
  "level": 3
}, {
  "value": "Dashboard 4: Trend Dashboards",
  "id": "dashboard-4-trend-dashboards",
  "level": 2
}, {
  "value": "Quality Trends",
  "id": "quality-trends",
  "level": 3
}, {
  "value": "Dashboard 5: Alert Dashboards",
  "id": "dashboard-5-alert-dashboards",
  "level": 2
}, {
  "value": "Quality Alerts",
  "id": "quality-alerts",
  "level": 3
}, {
  "value": "Dashboard Templates",
  "id": "dashboard-templates",
  "level": 2
}, {
  "value": "Markdown Dashboard Template",
  "id": "markdown-dashboard-template",
  "level": 3
}, {
  "value": "Dashboard Generation",
  "id": "dashboard-generation",
  "level": 2
}, {
  "value": "Automated Generation",
  "id": "automated-generation",
  "level": 3
}, {
  "value": "Manual Generation",
  "id": "manual-generation",
  "level": 3
}, {
  "value": "Dashboard Usage",
  "id": "dashboard-usage",
  "level": 2
}, {
  "value": "Regular Reviews",
  "id": "regular-reviews",
  "level": 3
}, {
  "value": "Quality Improvement",
  "id": "quality-improvement",
  "level": 3
}, {
  "value": "Integration",
  "id": "integration",
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
  "value": "Dashboard Design",
  "id": "dashboard-design",
  "level": 3
}, {
  "value": "Dashboard Maintenance",
  "id": "dashboard-maintenance",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "code-quality-monitoring-dashboards",
        children: "Code Quality Monitoring Dashboards"
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
      }), " E7:S03", ":T02", " - Create code quality monitoring dashboards", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Code Quality Metrics Framework, Framework Health Dashboard Guide"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "code quality monitoring dashboards"
      }), " for the AI Dev Kit project. It provides dashboard templates, examples, and usage guidance for visualizing and monitoring code quality metrics across the codebase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visual Quality Overview:"
        }), " At-a-glance quality status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dimension Breakdowns:"
        }), " Detailed metrics by quality dimension"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trend Analysis:"
        }), " Historical quality trends"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module-Level Views:"
        }), " Quality metrics by module/package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actionable Insights:"
        }), " Prioritized improvement recommendations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-overview",
      children: "Dashboard Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dashboard-types",
      children: "Dashboard Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overall Quality Dashboard"
        }), " - Project-wide quality overview"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dimension Dashboards"
        }), " - Quality metrics by dimension"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module Dashboards"
        }), " - Quality metrics by module/package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trend Dashboards"
        }), " - Historical quality trends"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alert Dashboards"
        }), " - Quality alerts and thresholds"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-1-overall-quality-dashboard",
      children: "Dashboard 1: Overall Quality Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provide a high-level overview of code quality across the entire project."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "components",
      children: "Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Score Summary:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overall quality score (composite)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality status (Excellent/Good/Fair/Poor)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality trend (improving/stable/declining)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dimension Scores:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complexity score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coverage score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duplication score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintainability score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical debt score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total lines of code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test coverage percentage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical debt hours"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Alerts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical issues count"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warning issues count"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recent quality changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-2-dimension-dashboards",
      children: "Dashboard 2: Dimension Dashboards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-dashboard",
      children: "Complexity Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Average cyclomatic complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maximum complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functions exceeding threshold"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complexity distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Visualizations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complexity histogram"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Top complex functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complexity trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coverage-dashboard",
      children: "Coverage Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overall test coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coverage by module"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Visualizations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coverage heatmap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coverage trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uncovered code highlights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "duplication-dashboard",
      children: "Duplication Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duplication percentage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of duplication blocks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Largest duplications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duplication trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Visualizations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duplication map"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duplication trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refactoring opportunities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-3-module-dashboards",
      children: "Dashboard 3: Module Dashboards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "module-quality-overview",
      children: "Module Quality Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Per Module:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dimension scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue count"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical debt"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Module Comparison:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality ranking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement opportunities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best practices identification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-4-trend-dashboards",
      children: "Dashboard 4: Trend Dashboards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-trends",
      children: "Quality Trends"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Series:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality score over time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dimension scores over time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue count over time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical debt over time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trend Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improving trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declining trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stable trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Seasonal patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-5-alert-dashboards",
      children: "Dashboard 5: Alert Dashboards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-alerts",
      children: "Quality Alerts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alert Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warning issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Threshold violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recent degradations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alert Details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alert description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Affected modules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Severity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recommended actions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-templates",
      children: "Dashboard Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "markdown-dashboard-template",
      children: "Markdown Dashboard Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Code Quality Dashboard\n\n**Last Updated:** [DATE]\n**Overall Quality Score:** [SCORE]\n**Status:** [STATUS]\n\n## Quality Overview\n\n| Dimension | Score | Status |\n|-----------|-------|--------|\n| Complexity | [SCORE] | [STATUS] |\n| Coverage | [SCORE] | [STATUS] |\n| Duplication | [SCORE] | [STATUS] |\n| Maintainability | [SCORE] | [STATUS] |\n| Security | [SCORE] | [STATUS] |\n| Performance | [SCORE] | [STATUS] |\n| Technical Debt | [SCORE] | [STATUS] |\n\n## Key Metrics\n\n- **Total Lines of Code:** [COUNT]\n- **Test Coverage:** [PERCENTAGE]%\n- **Issues:** [COUNT]\n- **Technical Debt:** [HOURS] hours\n\n## Quality Alerts\n\n[ALERT LIST]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-generation",
      children: "Dashboard Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-generation",
      children: "Automated Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduled jobs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect metrics from tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate metrics by dimension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate composite scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate dashboard markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update dashboard files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-generation",
      children: "Manual Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Needed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initial setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom dashboards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect metric data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create dashboard markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review and validate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit dashboard"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-usage",
      children: "Dashboard Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regular-reviews",
      children: "Regular Reviews"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daily: Quick status check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly: Detailed review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monthly: Comprehensive analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check overall quality score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review dimension scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify areas needing attention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track progress"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-improvement",
      children: "Quality Improvement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Using Dashboards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify low-scoring dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drill down to specific issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track improvement progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration",
      children: "Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tool-integration",
      children: "Tool Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static Analysis Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SonarQube dashboards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CodeClimate dashboards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom tool dashboards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI/CD Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated dashboard updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality gate visualization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build quality reports"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-integration",
      children: "Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality checks in RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics in changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality gates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality-based task prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dashboard-design",
      children: "Dashboard Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep dashboards focused and actionable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use clear visualizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide context for metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable drill-down capabilities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dashboard-maintenance",
      children: "Dashboard Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update dashboards regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate dashboard accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review dashboard effectiveness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve dashboards based on feedback"
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
          children: "Framework Health Dashboard Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-health-dashboard-guide.md"
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
        children: "Last updated: 2026-01-05 (v0.7.3.2+0 – Code quality monitoring dashboards created)"
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