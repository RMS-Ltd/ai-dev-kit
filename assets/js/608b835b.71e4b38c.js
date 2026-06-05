"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["90494"], {
91200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_documentation_health_monitoring_md_608_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-documentation-health-monitoring-md-608.json
var site_docs_architecture_standards_and_adrs_documentation_health_monitoring_md_608_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/documentation-health-monitoring","title":"Documentation Health Monitoring","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/documentation-health-monitoring.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/documentation-health-monitoring","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-health-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/documentation-health-monitoring.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Document Lifecycle Policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-policy"},"next":{"title":"Documentation Maintenance Policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-maintenance-policy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/documentation-health-monitoring.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Documentation Health Monitoring';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Health Metrics",
  "id": "health-metrics",
  "level": 2
}, {
  "value": "Link Health",
  "id": "link-health",
  "level": 3
}, {
  "value": "Consistency Health",
  "id": "consistency-health",
  "level": 3
}, {
  "value": "Review Coverage",
  "id": "review-coverage",
  "level": 3
}, {
  "value": "Overall Health Score",
  "id": "overall-health-score",
  "level": 2
}, {
  "value": "Dashboard Usage",
  "id": "dashboard-usage",
  "level": 2
}, {
  "value": "Running the Dashboard",
  "id": "running-the-dashboard",
  "level": 3
}, {
  "value": "Dashboard Output",
  "id": "dashboard-output",
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
  "value": "CI/CD Integration",
  "id": "cicd-integration",
  "level": 3
}, {
  "value": "Health Monitoring Procedures",
  "id": "health-monitoring-procedures",
  "level": 2
}, {
  "value": "Daily Monitoring",
  "id": "daily-monitoring",
  "level": 3
}, {
  "value": "Weekly Monitoring",
  "id": "weekly-monitoring",
  "level": 3
}, {
  "value": "Monthly Monitoring",
  "id": "monthly-monitoring",
  "level": 3
}, {
  "value": "Health Improvement Workflow",
  "id": "health-improvement-workflow",
  "level": 2
}, {
  "value": "1. Identify Issues",
  "id": "1-identify-issues",
  "level": 3
}, {
  "value": "2. Prioritize Improvements",
  "id": "2-prioritize-improvements",
  "level": 3
}, {
  "value": "3. Create Tasks",
  "id": "3-create-tasks",
  "level": 3
}, {
  "value": "4. Implement Improvements",
  "id": "4-implement-improvements",
  "level": 3
}, {
  "value": "5. Verify Improvements",
  "id": "5-verify-improvements",
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
  "value": "Framework-Level Targets",
  "id": "framework-level-targets",
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
        id: "documentation-health-monitoring",
        children: "Documentation Health Monitoring"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " E5:S02", ":T03"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Documentation health monitoring provides comprehensive visibility into the quality, consistency, and currency of documentation across the project. The health dashboard aggregates metrics from link validation, consistency checks, and review workflows to provide actionable insights."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "health-metrics",
      children: "Health Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "link-health",
      children: "Link Health"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Link Health Percentage", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " (Valid Links / Total Links) × 100", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight:"
      }), " 40% of overall health score"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total links (internal and external)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Valid links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broken internal links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broken external links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Files with broken links"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≥ 95% link health"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "consistency-health",
      children: "Consistency Health"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Consistency Score", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " 100% - (Files with Issues / Total Files) × 100", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight:"
      }), " 40% of overall health score"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version inconsistencies (Epic/Story version mismatches)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference inconsistencies (broken references)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Terminology inconsistencies (inconsistent term usage)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≥ 90% consistency score"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-coverage",
      children: "Review Coverage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metric:"
      }), " Review Coverage Percentage", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " (Files Current / Total Files) × 100", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weight:"
      }), " 20% of overall health score"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Files current (reviewed within cadence)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Files needing review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical docs needing review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High-priority docs needing review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard docs needing review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low-priority docs needing review"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " ≥ 80% review coverage"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overall-health-score",
      children: "Overall Health Score"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      }), " Weighted average of component scores"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link Health: 40%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency Score: 40%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review Coverage: 20%"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health Status Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent (≥90%):"
        }), " 🟢 Documentation is in excellent condition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good (75-89%):"
        }), " 🟡 Documentation is in good condition with minor improvements needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fair (60-74%):"
        }), " 🟠 Documentation needs attention and improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor (40-59%):"
        }), " 🔴 Documentation requires significant improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical (<40%):"
        }), " ⚫ Documentation is in critical condition"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-usage",
      children: "Dashboard Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "running-the-dashboard",
      children: "Running the Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Basic usage (console output)\npython3 scripts/documentation/documentation-health-dashboard.py\n\n# Generate JSON metrics\npython3 scripts/documentation/documentation-health-dashboard.py --output dashboard.json\n\n# Generate human-readable report\npython3 scripts/documentation/documentation-health-dashboard.py --report dashboard.txt\n\n# Both JSON and report\npython3 scripts/documentation/documentation-health-dashboard.py --output dashboard.json --report dashboard.txt\n\n# Custom documentation path\npython3 scripts/documentation/documentation-health-dashboard.py --path docs/architecture/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dashboard-output",
      children: "Dashboard Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["JSON Output (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--output"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete metrics data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timestamp and path information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link metrics (total, valid, broken)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency metrics (inconsistencies by type)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review metrics (coverage, files needing review)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health score and status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Report Output (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--report"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Human-readable dashboard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overall health score and status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detailed metrics by category"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recommendations for improvement"
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
        children: "Run documentation health dashboard"
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
        children: "Include documentation health status in board metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health trends over time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flag documentation issues for prioritization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-integration",
      children: "CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Health Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run dashboard as part of CI pipeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate health reports on each commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health trends over time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alert on health degradation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "health-monitoring-procedures",
      children: "Health Monitoring Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daily-monitoring",
      children: "Daily Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link validation (internal links only)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency checks (version, cross-reference, terminology)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review status tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review dashboard output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address critical issues immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "weekly-monitoring",
      children: "Weekly Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comprehensive Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full dashboard generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "External link validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review workflow analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health score calculation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review comprehensive health report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize improvements based on health score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monthly-monitoring",
      children: "Monthly Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deep Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical trend analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root cause analysis of recurring issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation improvement planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health score target setting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate monthly health report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze trends and patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan documentation improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update health monitoring procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "health-improvement-workflow",
      children: "Health Improvement Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-identify-issues",
      children: "1. Identify Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "From Dashboard:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review consistency issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review files needing review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review overall health score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-prioritize-improvements",
      children: "2. Prioritize Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical:"
        }), " Health score < 40%, blocking issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High:"
        }), " Health score 40-59%, significant issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium:"
        }), " Health score 60-74%, moderate issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low:"
        }), " Health score ≥ 75%, minor improvements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-create-tasks",
      children: "3. Create Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Feature Requests (FR) for improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Bug Reports (BR) for broken links/issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign tasks based on priority"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track improvements in Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-implement-improvements",
      children: "4. Implement Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve consistency issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete documentation reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation as needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-verify-improvements",
      children: "5. Verify Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-run dashboard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify health score improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm issues resolved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban tasks"
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
        children: "All critical documentation reviewed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No blocking broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Major consistency issues resolved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " 75% (Good)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most documentation reviewed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Few broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor consistency issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stretch Goal:"
      }), " 90% (Excellent)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All documentation reviewed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No consistency issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-level-targets",
      children: "Framework-Level Targets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimum Acceptable:"
      }), " 75% (Good)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework documentation in good condition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical docs reviewed regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No major issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " 90% (Excellent)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework documentation excellent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All docs reviewed on schedule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No issues"
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
        children: "Health score trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link health trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency score trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review coverage trends"
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
        children: "Improvement planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource requirements"
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
          children: "Documentation Review Cadences:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/documentation-review-cadences.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Update Triggers:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/documentation-update-triggers.md"
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
      }), " Implement comprehensive documentation health monitoring with dashboard, metrics, and procedures."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides visibility into documentation quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables proactive maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports data-driven improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with existing workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracks health trends over time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires regular dashboard execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Needs integration with workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "May require additional tooling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides actionable insights"
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