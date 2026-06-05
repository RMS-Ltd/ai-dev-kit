"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["1386"], {
95477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_health_monitoring_procedures_md_b54_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-health-monitoring-procedures-md-b54.json
var site_docs_architecture_standards_and_adrs_framework_health_monitoring_procedures_md_b54_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-health-monitoring-procedures","title":"Framework Health Monitoring Procedures","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-health-monitoring-procedures.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-health-monitoring-procedures","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-health-monitoring-procedures","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-health-monitoring-procedures.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Health Metrics","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-health-metrics"},"next":{"title":"Framework Migration Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-migration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-health-monitoring-procedures.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Health Monitoring Procedures';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Monitoring Tools",
  "id": "monitoring-tools",
  "level": 2
}, {
  "value": "Primary Tool: <code>framework-health-monitor.py</code>",
  "id": "primary-tool-framework-health-monitorpy",
  "level": 3
}, {
  "value": "Collector Modules",
  "id": "collector-modules",
  "level": 3
}, {
  "value": "Collection Procedures",
  "id": "collection-procedures",
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
  "value": "Reporting Procedures",
  "id": "reporting-procedures",
  "level": 2
}, {
  "value": "Report Generation",
  "id": "report-generation",
  "level": 3
}, {
  "value": "Report Review",
  "id": "report-review",
  "level": 3
}, {
  "value": "Workflow Integration",
  "id": "workflow-integration",
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
  "value": "Monitoring Workflow",
  "id": "monitoring-workflow",
  "level": 2
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
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Common Issues",
  "id": "common-issues",
  "level": 3
}, {
  "value": "Getting Help",
  "id": "getting-help",
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
        id: "framework-health-monitoring-procedures",
        children: "Framework Health Monitoring Procedures"
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
      }), " E6:S03", ":T02", " - Implement health monitoring tools", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Health Metrics, Framework Update Procedures"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "procedures for monitoring framework health"
      }), " using the framework health monitoring tools. It covers automated collection, manual collection, reporting, and integration with workflows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Collection:"
        }), " Primary metrics collected automatically via scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual Collection:"
        }), " Some metrics require manual tracking or external data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regular Monitoring:"
        }), " Scheduled collection at different frequencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actionable Reports:"
        }), " Reports provide actionable insights for improvement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Integration:"
        }), " Monitoring integrated with RW, UKW, and update procedures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-tools",
      children: "Monitoring Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "primary-tool-framework-health-monitorpy",
      children: ["Primary Tool: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "framework-health-monitor.py"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/frameworks/framework-health-monitor.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Capabilities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collects health metrics for all frameworks or a specific framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generates JSON metrics output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generates human-readable reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculates dimension scores and overall health score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides health status (Excellent, Good, Fair, Poor, Critical)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Monitor all frameworks\npython3 scripts/frameworks/framework-health-monitor.py\n\n# Monitor specific framework\npython3 scripts/frameworks/framework-health-monitor.py --framework kanban\n\n# Output JSON to file\npython3 scripts/frameworks/framework-health-monitor.py --output health.json\n\n# Generate report file\npython3 scripts/frameworks/framework-health-monitor.py --report health.txt\n\n# Both JSON and report\npython3 scripts/frameworks/framework-health-monitor.py --output health.json --report health.txt\n\n# Custom frameworks directory\npython3 scripts/frameworks/framework-health-monitor.py --path custom/frameworks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "collector-modules",
      children: "Collector Modules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/frameworks/collectors/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Modules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "usage_adoption.py"
        }), " - Usage and adoption metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "maintenance_activity.py"
        }), " - Maintenance activity metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "documentation_quality.py"
        }), " - Documentation quality metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dependency_health.py"
        }), " - Dependency health metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "compatibility_status.py"
        }), " - Compatibility status metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "stability_reliability.py"
        }), " - Stability and reliability metrics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Utilities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "utils.py"
        }), " - Common utility functions (scoring, git operations, metadata loading)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "collection-procedures",
      children: "Collection Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-collection",
      children: "Automated Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Daily Collection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Quick check for critical issues\npython3 scripts/frameworks/framework-health-monitor.py \\\n  --output daily-health.json \\\n  --report daily-health.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weekly Collection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Full maintenance and documentation metrics\npython3 scripts/frameworks/framework-health-monitor.py \\\n  --output weekly-health.json \\\n  --report weekly-health.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monthly Collection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Comprehensive health assessment\npython3 scripts/frameworks/framework-health-monitor.py \\\n  --output monthly-health.json \\\n  --report monthly-health.txt \\\n  --days-back 90\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quarterly Collection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Full health assessment with extended lookback\npython3 scripts/frameworks/framework-health-monitor.py \\\n  --output quarterly-health.json \\\n  --report quarterly-health.txt \\\n  --days-back 90\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-collection",
      children: "Manual Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics Requiring Manual Collection:"
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency currency (requires dependency scanning tools)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security vulnerabilities (requires security scanning tools)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Collection Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review automated metrics report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify metrics requiring manual input"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Gather manual metrics from:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project tracking systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Issue trackers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review workflows"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integration test results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dependency scanning tools"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update health metrics JSON with manual values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regenerate report with complete metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reporting-procedures",
      children: "Reporting Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "report-generation",
      children: "Report Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "JSON Output:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete metrics data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timestamp and framework metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dimension scores and overall health score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health status"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Human-Readable Report:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overall health summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dimension breakdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key metrics highlights"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework comparison (if monitoring all frameworks)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "report-review",
      children: "Report Review"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review overall health score and status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify dimensions below target thresholds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze metric values for root causes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize improvements based on impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create tasks for health improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action Thresholds:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical (<40%):"
        }), " Immediate action required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor (40-54%):"
        }), " Significant improvements needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fair (55-69%):"
        }), " Improvements recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good (70-84%):"
        }), " Minor improvements possible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent (≥85%):"
        }), " Optimal health"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-integration",
      children: "Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-rw",
      children: "Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 9: Run Validators"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run framework health monitoring for affected frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include health metrics in release validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fail release if health score < 60% (critical threshold)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document health status in release notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# In RW Step 9\npython3 scripts/frameworks/framework-health-monitor.py \\\n  --framework <framework-name> \\\n  --output release-health.json\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health metrics included in UKW summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health trends tracked in Kanban board metadata"
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
        children: "Verify health score meets minimum threshold (60%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address health issues before updating"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document health status in update plan"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Update Health Check:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify health score maintained or improved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for regressions in health metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update health dashboard with new metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-workflow",
      children: "Monitoring Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Definition:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/workflows/framework-health-monitoring-workflow.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collect Health Metrics"
        }), " - Run monitoring script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate Health Report"
        }), " - Create JSON and text reports"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Health Thresholds"
        }), " - Check against minimum thresholds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Health Dashboard"
        }), " - Update dashboard with latest metrics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated:"
        }), " Via cron or CI/CD pipeline"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual:"
        }), " Via workflow trigger or direct script execution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "health-improvement-workflow",
      children: "Health Improvement Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-identify-issues",
      children: "1. Identify Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "From Health Report:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review overall health score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify dimensions below targets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze specific metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review historical trends"
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
        children: "Create Bug Reports (BR) for health issues"
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
        children: "Improvement Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix broken links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve dependency issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enhance stability"
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
        children: "Re-run health monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify health score improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm issues resolved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-issues",
      children: "Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script Execution Errors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Python 3.8+ installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check framework paths are correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify Git repository is accessible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check file permissions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing Metrics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some metrics require manual collection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if external tools are needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify data sources are accessible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inaccurate Scores:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review metric collection logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify scoring calculations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for missing data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate framework metadata"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getting-help",
      children: "Getting Help"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework Health Metrics: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-health-metrics.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework Update Procedures: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-update-procedures.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Support:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review script help: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 scripts/frameworks/framework-health-monitor.py --help"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check script logs for errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review collector module implementations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Health Metrics:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-health-metrics.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Update Procedures:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-update-procedures.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Compatibility Tracking:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-compatibility-tracking.md"
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
      }), " Implement automated framework health monitoring with script-based collection and reporting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables proactive health monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides actionable insights for improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with existing workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports data-driven decision making"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives Considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual-only monitoring (not scalable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "External monitoring tools (adds dependencies)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fully automated without manual input (some metrics require manual tracking)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires script maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some metrics require manual collection"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provides foundation for dashboard (E6:S03", ":T03", ")"]
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