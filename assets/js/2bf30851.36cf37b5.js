"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["29265"], {
22351(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_health_metrics_md_2bf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-health-metrics-md-2bf.json
var site_docs_architecture_standards_and_adrs_framework_health_metrics_md_2bf_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-health-metrics","title":"Framework Health Metrics","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-health-metrics.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-health-metrics","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-health-metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-health-metrics.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Health Dashboard Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-health-dashboard-guide"},"next":{"title":"Framework Health Monitoring Procedures","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-health-monitoring-procedures"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-health-metrics.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Health Metrics';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Health Dimensions",
  "id": "health-dimensions",
  "level": 2
}, {
  "value": "Dimension 1: Usage &amp; Adoption",
  "id": "dimension-1-usage--adoption",
  "level": 2
}, {
  "value": "Metrics",
  "id": "metrics",
  "level": 3
}, {
  "value": "1.1 Installation Count",
  "id": "11-installation-count",
  "level": 4
}, {
  "value": "1.2 Active Usage",
  "id": "12-active-usage",
  "level": 4
}, {
  "value": "1.3 Adoption Growth Rate",
  "id": "13-adoption-growth-rate",
  "level": 4
}, {
  "value": "1.4 Framework Dependency Graph",
  "id": "14-framework-dependency-graph",
  "level": 4
}, {
  "value": "Health Score Calculation",
  "id": "health-score-calculation",
  "level": 3
}, {
  "value": "Dimension 2: Maintenance Activity",
  "id": "dimension-2-maintenance-activity",
  "level": 2
}, {
  "value": "Metrics",
  "id": "metrics-1",
  "level": 3
}, {
  "value": "2.1 Update Frequency",
  "id": "21-update-frequency",
  "level": 4
}, {
  "value": "2.2 Last Update Recency",
  "id": "22-last-update-recency",
  "level": 4
}, {
  "value": "2.3 Changelog Activity",
  "id": "23-changelog-activity",
  "level": 4
}, {
  "value": "2.4 Issue Resolution Rate",
  "id": "24-issue-resolution-rate",
  "level": 4
}, {
  "value": "2.5 Version Progression",
  "id": "25-version-progression",
  "level": 4
}, {
  "value": "Health Score Calculation",
  "id": "health-score-calculation-1",
  "level": 3
}, {
  "value": "Dimension 3: Documentation Quality",
  "id": "dimension-3-documentation-quality",
  "level": 2
}, {
  "value": "Metrics",
  "id": "metrics-2",
  "level": 3
}, {
  "value": "3.1 Documentation Completeness",
  "id": "31-documentation-completeness",
  "level": 4
}, {
  "value": "3.2 Documentation Currency",
  "id": "32-documentation-currency",
  "level": 4
}, {
  "value": "3.3 Documentation Link Health",
  "id": "33-documentation-link-health",
  "level": 4
}, {
  "value": "3.4 Documentation Examples Quality",
  "id": "34-documentation-examples-quality",
  "level": 4
}, {
  "value": "3.5 Documentation Review Status",
  "id": "35-documentation-review-status",
  "level": 4
}, {
  "value": "Health Score Calculation",
  "id": "health-score-calculation-2",
  "level": 3
}, {
  "value": "Dimension 4: Dependency Health",
  "id": "dimension-4-dependency-health",
  "level": 2
}, {
  "value": "Metrics",
  "id": "metrics-3",
  "level": 3
}, {
  "value": "4.1 Dependency Count",
  "id": "41-dependency-count",
  "level": 4
}, {
  "value": "4.2 Dependency Currency",
  "id": "42-dependency-currency",
  "level": 4
}, {
  "value": "4.3 Dependency Security",
  "id": "43-dependency-security",
  "level": 4
}, {
  "value": "4.4 Dependency Compatibility",
  "id": "44-dependency-compatibility",
  "level": 4
}, {
  "value": "4.5 Dependency Maintenance Status",
  "id": "45-dependency-maintenance-status",
  "level": 4
}, {
  "value": "Health Score Calculation",
  "id": "health-score-calculation-3",
  "level": 3
}, {
  "value": "Dimension 5: Compatibility Status",
  "id": "dimension-5-compatibility-status",
  "level": 2
}, {
  "value": "Metrics",
  "id": "metrics-4",
  "level": 3
}, {
  "value": "5.1 Framework Compatibility Matrix",
  "id": "51-framework-compatibility-matrix",
  "level": 4
}, {
  "value": "5.2 Version Compatibility Coverage",
  "id": "52-version-compatibility-coverage",
  "level": 4
}, {
  "value": "5.3 Integration Health",
  "id": "53-integration-health",
  "level": 4
}, {
  "value": "5.4 Breaking Changes Frequency",
  "id": "54-breaking-changes-frequency",
  "level": 4
}, {
  "value": "Health Score Calculation",
  "id": "health-score-calculation-4",
  "level": 3
}, {
  "value": "Dimension 6: Stability &amp; Reliability",
  "id": "dimension-6-stability--reliability",
  "level": 2
}, {
  "value": "Metrics",
  "id": "metrics-5",
  "level": 3
}, {
  "value": "6.1 Version Stability",
  "id": "61-version-stability",
  "level": 4
}, {
  "value": "6.2 Regression Rate",
  "id": "62-regression-rate",
  "level": 4
}, {
  "value": "6.3 Issue Rate",
  "id": "63-issue-rate",
  "level": 4
}, {
  "value": "6.4 Test Coverage (if applicable)",
  "id": "64-test-coverage-if-applicable",
  "level": 4
}, {
  "value": "6.5 Backward Compatibility Adherence",
  "id": "65-backward-compatibility-adherence",
  "level": 4
}, {
  "value": "Health Score Calculation",
  "id": "health-score-calculation-5",
  "level": 3
}, {
  "value": "Overall Health Score",
  "id": "overall-health-score",
  "level": 2
}, {
  "value": "Metrics Collection Processes",
  "id": "metrics-collection-processes",
  "level": 2
}, {
  "value": "Automated Collection",
  "id": "automated-collection",
  "level": 3
}, {
  "value": "Manual Collection",
  "id": "manual-collection",
  "level": 3
}, {
  "value": "Framework-Specific Considerations",
  "id": "framework-specific-considerations",
  "level": 2
}, {
  "value": "Documentation-Only Frameworks",
  "id": "documentation-only-frameworks",
  "level": 3
}, {
  "value": "Code-Based Frameworks",
  "id": "code-based-frameworks",
  "level": 3
}, {
  "value": "Integration Frameworks",
  "id": "integration-frameworks",
  "level": 3
}, {
  "value": "Health Score Targets",
  "id": "health-score-targets",
  "level": 2
}, {
  "value": "Project-Level Targets",
  "id": "project-level-targets",
  "level": 3
}, {
  "value": "Framework-Specific Targets",
  "id": "framework-specific-targets",
  "level": 3
}, {
  "value": "Metrics Tracking",
  "id": "metrics-tracking",
  "level": 2
}, {
  "value": "Historical Trends",
  "id": "historical-trends",
  "level": 3
}, {
  "value": "Reporting",
  "id": "reporting",
  "level": 3
}, {
  "value": "Integration with Workflows",
  "id": "integration-with-workflows",
  "level": 2
}, {
  "value": "Release Workflow (RW)",
  "id": "release-workflow-rw",
  "level": 3
}, {
  "value": "Update Kanban Workflow (UKW)",
  "id": "update-kanban-workflow-ukw",
  "level": 3
}, {
  "value": "Framework Update Procedures",
  "id": "framework-update-procedures",
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
        id: "framework-health-metrics",
        children: "Framework Health Metrics"
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
      }), " Epic 6 - Framework Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 3 - Framework Health Monitoring", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S03", ":T01", " - Create framework health metrics", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Versioning Strategy, Framework Compatibility Tracking, Framework Update Procedures"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive health metrics"
      }), " for AI Dev Kit framework packages. These metrics enable proactive monitoring, maintenance planning, and quality assurance for framework packages, ensuring they remain healthy, maintainable, and valuable to consuming projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Dimensional Health:"
        }), " Health is measured across multiple dimensions (usage, maintenance, documentation, compatibility, stability)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actionable Metrics:"
        }), " All metrics provide actionable insights for maintenance and improvement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Collection:"
        }), " Metrics are designed for automated collection and monitoring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trend Analysis:"
        }), " Metrics support historical trend analysis to detect degradation early"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework-Specific:"
        }), " Metrics account for framework-specific characteristics (documentation-only vs. code-based)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "health-dimensions",
      children: "Health Dimensions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Framework health is measured across ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "six primary dimensions"
      }), ", each contributing to an overall health score:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Usage & Adoption"
        }), " (20% weight)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Activity"
        }), " (25% weight)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Quality"
        }), " (20% weight)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency Health"
        }), " (15% weight)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility Status"
        }), " (10% weight)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stability & Reliability"
        }), " (10% weight)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-1-usage--adoption",
      children: "Dimension 1: Usage & Adoption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight:"
      }), " 20% of overall health score", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Measure framework adoption and usage across projects"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-installation-count",
      children: "1.1 Installation Count"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Number of projects using the framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Count projects with framework installed (Git submodules, subtrees, CLI tool, package managers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 1 project (minimum viable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 5 projects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Direct count from dependency tracking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-active-usage",
      children: "1.2 Active Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Number of projects actively using the framework (recent commits, updates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Track projects with framework-related activity in last 90 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 50% of installed projects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 80% of installed projects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Active Projects / Installed Projects) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "13-adoption-growth-rate",
      children: "1.3 Adoption Growth Rate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Rate of new project adoptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Count new installations per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 0 new adoptions per quarter (maintain current)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 2 new adoptions per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " New installations in last 90 days"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "14-framework-dependency-graph",
      children: "1.4 Framework Dependency Graph"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Number of frameworks depending on this framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Count frameworks that list this framework as a dependency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 0 dependencies (standalone acceptable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 2 framework dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Direct count from dependency declarations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-score-calculation",
      children: "Health Score Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage & Adoption Score:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation Count: 30% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active Usage: 40% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adoption Growth Rate: 20% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework Dependency Graph: 10% of dimension score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent (≥80%):"
        }), " High adoption, active usage, growing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good (60-79%):"
        }), " Moderate adoption, some active usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fair (40-59%):"
        }), " Low adoption, limited active usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor (20-39%):"
        }), " Very low adoption, minimal usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical (<20%):"
        }), " No adoption or usage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-2-maintenance-activity",
      children: "Dimension 2: Maintenance Activity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight:"
      }), " 25% of overall health score", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Measure ongoing maintenance and development activity"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics-1",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-update-frequency",
      children: "2.1 Update Frequency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Frequency of framework updates (releases, commits)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Count updates in last 90 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 1 update per quarter (minimum maintenance)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 4 updates per quarter (monthly updates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Updates in last 90 days"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-last-update-recency",
      children: "2.2 Last Update Recency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Days since last update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Calculate days since last commit/release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≤ 90 days (quarterly updates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≤ 30 days (monthly updates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Current date - Last update date"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-changelog-activity",
      children: "2.3 Changelog Activity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Changelog entries in last 90 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Count changelog entries (releases, versions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 1 changelog entry per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 4 changelog entries per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Changelog entries in last 90 days"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "24-issue-resolution-rate",
      children: "2.4 Issue Resolution Rate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Percentage of issues resolved within SLA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Track issue resolution time vs. SLA (if applicable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 80% resolved within SLA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 95% resolved within SLA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Issues Resolved Within SLA / Total Issues) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "25-version-progression",
      children: "2.5 Version Progression"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Version progression rate (PATCH/MINOR/MAJOR bumps)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Track version bumps in last 90 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 1 version bump per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 4 version bumps per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Version bumps in last 90 days"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-score-calculation-1",
      children: "Health Score Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance Activity Score:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Frequency: 25% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Last Update Recency: 25% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog Activity: 20% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue Resolution Rate: 15% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version Progression: 15% of dimension score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent (≥80%):"
        }), " Frequent updates, recent activity, active maintenance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good (60-79%):"
        }), " Regular updates, recent activity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fair (40-59%):"
        }), " Occasional updates, some activity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor (20-39%):"
        }), " Infrequent updates, limited activity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical (<20%):"
        }), " No updates, stale framework"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-3-documentation-quality",
      children: "Dimension 3: Documentation Quality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight:"
      }), " 20% of overall health score", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Measure documentation completeness, accuracy, and currency"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics-2",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-documentation-completeness",
      children: "3.1 Documentation Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Percentage of required documentation present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check for required docs (README, CHANGELOG, installation guide, API docs if applicable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 80% of required docs present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " 100% of required docs present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Present Docs / Required Docs) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-documentation-currency",
      children: "3.2 Documentation Currency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Percentage of documentation updated in last 90 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check last update date for each doc"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 50% of docs updated in last 90 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 80% of docs updated in last 90 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Updated Docs / Total Docs) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-documentation-link-health",
      children: "3.3 Documentation Link Health"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Percentage of valid internal/external links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Validate links in documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 90% of links valid"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 95% of links valid"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Valid Links / Total Links) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "34-documentation-examples-quality",
      children: "3.4 Documentation Examples Quality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Presence and quality of usage examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check for examples, code samples, tutorials"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 1 example per major feature"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 3 examples per major feature"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Examples Present / Features Requiring Examples) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "35-documentation-review-status",
      children: "3.5 Documentation Review Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Percentage of documentation reviewed and current"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Track documentation review status (if review workflow exists)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 80% of docs reviewed and current"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 95% of docs reviewed and current"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Reviewed & Current Docs / Total Docs) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-score-calculation-2",
      children: "Health Score Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Quality Score:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation Completeness: 25% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation Currency: 25% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation Link Health: 20% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation Examples Quality: 15% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation Review Status: 15% of dimension score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent (≥80%):"
        }), " Complete, current, accurate documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good (60-79%):"
        }), " Mostly complete, mostly current documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fair (40-59%):"
        }), " Some gaps, some outdated documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor (20-39%):"
        }), " Significant gaps, outdated documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical (<20%):"
        }), " Missing or severely outdated documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-4-dependency-health",
      children: "Dimension 4: Dependency Health"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight:"
      }), " 15% of overall health score", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Measure health of framework dependencies (if any)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics-3",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-dependency-count",
      children: "4.1 Dependency Count"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Number of external dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Count dependencies (libraries, packages, tools)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≤ 5 dependencies (minimal dependencies)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≤ 2 dependencies (very minimal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Direct count of dependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-dependency-currency",
      children: "4.2 Dependency Currency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Percentage of dependencies up to date"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check dependency versions vs. latest available"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 80% of dependencies up to date"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 95% of dependencies up to date"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Up-to-Date Dependencies / Total Dependencies) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "43-dependency-security",
      children: "4.3 Dependency Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Number of known security vulnerabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check dependency security advisories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " 0 known vulnerabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " 0 known vulnerabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Count of known vulnerabilities (inverse score)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "44-dependency-compatibility",
      children: "4.4 Dependency Compatibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Compatibility status of dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check for dependency conflicts or compatibility issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " No compatibility issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " No compatibility issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Binary (0 = issues, 1 = no issues)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "45-dependency-maintenance-status",
      children: "4.5 Dependency Maintenance Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Maintenance status of dependencies (active vs. deprecated)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check dependency maintenance status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 80% of dependencies actively maintained"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " 100% of dependencies actively maintained"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Actively Maintained Dependencies / Total Dependencies) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-score-calculation-3",
      children: "Health Score Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency Health Score:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency Count: 20% of dimension score (inverse: fewer is better)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency Currency: 25% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency Security: 25% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency Compatibility: 15% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency Maintenance Status: 15% of dimension score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent (≥80%):"
        }), " Minimal, up-to-date, secure dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good (60-79%):"
        }), " Mostly up-to-date, secure dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fair (40-59%):"
        }), " Some outdated or insecure dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor (20-39%):"
        }), " Many outdated or insecure dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical (<20%):"
        }), " Critical dependency issues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-5-compatibility-status",
      children: "Dimension 5: Compatibility Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight:"
      }), " 10% of overall health score", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Measure compatibility with other frameworks and systems"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics-4",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-framework-compatibility-matrix",
      children: "5.1 Framework Compatibility Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Percentage of declared compatibilities verified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check compatibility matrix declarations vs. actual compatibility"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 80% of declared compatibilities verified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " 100% of declared compatibilities verified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Verified Compatibilities / Declared Compatibilities) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-version-compatibility-coverage",
      children: "5.2 Version Compatibility Coverage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Compatibility coverage across framework versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check compatibility across version ranges"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 80% version compatibility coverage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 95% version compatibility coverage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Compatible Versions / Total Versions) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "53-integration-health",
      children: "5.3 Integration Health"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Health of integrations with other frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check integration status (working, broken, untested)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 80% of integrations working"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 95% of integrations working"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Working Integrations / Total Integrations) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "54-breaking-changes-frequency",
      children: "5.4 Breaking Changes Frequency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Frequency of breaking changes (MAJOR version bumps)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Count MAJOR version bumps in last 90 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≤ 1 breaking change per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " 0 breaking changes per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " MAJOR version bumps in last 90 days (inverse score)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-score-calculation-4",
      children: "Health Score Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compatibility Status Score:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework Compatibility Matrix: 30% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version Compatibility Coverage: 30% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration Health: 25% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking Changes Frequency: 15% of dimension score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent (≥80%):"
        }), " High compatibility, verified integrations, stable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good (60-79%):"
        }), " Good compatibility, mostly verified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fair (40-59%):"
        }), " Some compatibility issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor (20-39%):"
        }), " Significant compatibility issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical (<20%):"
        }), " Critical compatibility problems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimension-6-stability--reliability",
      children: "Dimension 6: Stability & Reliability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight:"
      }), " 10% of overall health score", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Measure framework stability and reliability"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics-5",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-version-stability",
      children: "6.1 Version Stability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Stability of version releases (PATCH vs. MINOR vs. MAJOR)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Analyze version bump types in last 90 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 80% PATCH/MINOR bumps (stable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 90% PATCH/MINOR bumps (very stable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (PATCH/MINOR Bumps / Total Bumps) × 100"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "62-regression-rate",
      children: "6.2 Regression Rate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Rate of regressions or breaking changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Track regressions reported in issues/changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≤ 1 regression per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " 0 regressions per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Regressions in last 90 days (inverse score)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "63-issue-rate",
      children: "6.3 Issue Rate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Rate of issues reported (bugs, problems)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Count issues reported in last 90 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≤ 2 issues per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≤ 1 issue per quarter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Issues in last 90 days (inverse score)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "64-test-coverage-if-applicable",
      children: "6.4 Test Coverage (if applicable)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Test coverage percentage (if framework has tests)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Calculate test coverage (if applicable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " ≥ 70% test coverage (if applicable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " ≥ 90% test coverage (if applicable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " (Covered Code / Total Code) × 100 (if applicable)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "65-backward-compatibility-adherence",
      children: "6.5 Backward Compatibility Adherence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metric:"
        }), " Adherence to backward compatibility policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collection:"
        }), " Check version bumps against compatibility policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " 100% adherence (no violations)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent:"
        }), " 100% adherence (no violations)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " Binary (0 = violations, 1 = no violations)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-score-calculation-5",
      children: "Health Score Calculation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stability & Reliability Score:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version Stability: 25% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression Rate: 25% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issue Rate: 20% of dimension score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test Coverage: 15% of dimension score (if applicable, otherwise redistributed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward Compatibility Adherence: 15% of dimension score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent (≥80%):"
        }), " Very stable, reliable, few issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good (60-79%):"
        }), " Stable, mostly reliable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fair (40-59%):"
        }), " Some stability issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor (20-39%):"
        }), " Significant stability problems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical (<20%):"
        }), " Critical stability issues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overall-health-score",
      children: "Overall Health Score"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Weighted average of all six dimensions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Formula:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Overall Health Score = \n  (Usage & Adoption × 0.20) +\n  (Maintenance Activity × 0.25) +\n  (Documentation Quality × 0.20) +\n  (Dependency Health × 0.15) +\n  (Compatibility Status × 0.10) +\n  (Stability & Reliability × 0.10)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health Status Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent (≥85%):"
        }), " 🟢 Framework is in excellent health, all systems optimal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good (70-84%):"
        }), " 🟡 Framework is in good health, minor improvements possible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fair (55-69%):"
        }), " 🟠 Framework needs attention, improvements recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor (40-54%):"
        }), " 🔴 Framework requires significant improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical (<40%):"
        }), " ⚫ Framework is in critical condition, immediate action required"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metrics-collection-processes",
      children: "Metrics Collection Processes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-collection",
      children: "Automated Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools & Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework health monitoring script (to be implemented in E6:S03", ":T02", ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git log analysis for update frequency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog parsing for activity tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency scanning for dependency health"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link validation for documentation health"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility matrix validation for compatibility status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Collection Frequency:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Daily:"
        }), " Critical metrics (dependency security, breaking changes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weekly:"
        }), " Maintenance activity, documentation currency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monthly:"
        }), " Usage & adoption, compatibility status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quarterly:"
        }), " Comprehensive health assessment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-collection",
      children: "Manual Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation count (requires project survey or tracking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active usage (requires project activity analysis)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation review status (requires review workflow)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration health (requires integration testing)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Collection Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run automated collection scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gather manual metrics from project tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate metrics into health dashboard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate health report"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-specific-considerations",
      children: "Framework-Specific Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation-only-frameworks",
      children: "Documentation-Only Frameworks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frameworks like:"
      }), " doc-lifecycle, debug-path"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Adjusted Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency Health:"
        }), " N/A (no dependencies)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Coverage:"
        }), " N/A (no code to test)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Focus Areas:"
        }), " Documentation quality, usage & adoption, maintenance activity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-based-frameworks",
      children: "Code-Based Frameworks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frameworks like:"
      }), " workflow mgt (has scripts), kanban (has scripts)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All six dimensions apply"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test coverage applicable if tests exist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency health applicable if dependencies exist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-frameworks",
      children: "Integration Frameworks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frameworks like:"
      }), " numbering & versioning (integrated with others)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enhanced Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility Status:"
        }), " Higher weight (20% instead of 10%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Health:"
        }), " More detailed tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Dependency Graph:"
        }), " More important metric"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "health-score-targets",
      children: "Health Score Targets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-level-targets",
      children: "Project-Level Targets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimum Acceptable:"
      }), " 60% (Fair)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All critical dimensions ≥ 50%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No critical issues in any dimension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic maintenance ongoing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " 75% (Good)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most dimensions ≥ 70%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor improvements needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular maintenance ongoing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stretch Goal:"
      }), " 90% (Excellent)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All dimensions ≥ 85%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimal health across all dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proactive maintenance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-specific-targets",
      children: "Framework-Specific Targets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Frameworks (workflow mgt, kanban):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimum:"
        }), " 70% (Good)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " 85% (Excellent)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supporting Frameworks (doc-lifecycle, debug-path):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimum:"
        }), " 60% (Fair)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " 75% (Good)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Frameworks (numbering & versioning):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimum:"
        }), " 70% (Good)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " 85% (Excellent)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metrics-tracking",
      children: "Metrics Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "historical-trends",
      children: "Historical Trends"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Track Over Time:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overall health score trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dimension-specific trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metric-specific trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework comparison trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify improvement patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect degradation early"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan maintenance cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Measure improvement effectiveness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reporting",
      children: "Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monthly Reports:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health score summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dimension breakdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issues identified and resolved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement recommendations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trend analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quarterly Reports:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive health assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical trend analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework comparison"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-with-workflows",
      children: "Integration with Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-rw",
      children: "Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 9: Run Validators"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run framework health monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include health metrics in release validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fail release if health score < 60% (critical threshold)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-kanban-workflow-ukw",
      children: "Update Kanban Workflow (UKW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UKW Step 6: Update Kanban Board"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include framework health status in board metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health trends over time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flag health issues for prioritization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-update-procedures",
      children: "Framework Update Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Update Health Check:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check framework health before updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify health score meets minimum threshold"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address health issues before updating"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Versioning Strategy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-versioning-strategy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Compatibility Tracking:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-compatibility-tracking.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Update Procedures:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-update-procedures.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Backward Compatibility Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-backward-compatibility-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Health Monitoring:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/documentation-health-monitoring.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 6:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/epic-06.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision Record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Implement comprehensive framework health metrics across six dimensions with weighted scoring."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides multi-dimensional visibility into framework health"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables proactive maintenance and improvement planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports data-driven decision making"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Facilitates framework comparison and prioritization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with existing workflows and processes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives Considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single-dimension health (too simplistic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unweighted dimensions (doesn't reflect importance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual-only collection (not scalable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework-agnostic metrics (doesn't account for differences)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Requires implementation of monitoring tools (E6:S03", ":T02", ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Requires dashboard for visualization (E6:S03", ":T03", ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires ongoing collection and maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides actionable insights for framework management"
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