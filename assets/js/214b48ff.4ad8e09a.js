"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["99655"], {
54829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_code_quality_monitoring_processes_md_214_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-code-quality-monitoring-processes-md-214.json
var site_docs_architecture_standards_and_adrs_code_quality_monitoring_processes_md_214_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/code-quality-monitoring-processes","title":"Code Quality Metrics and Monitoring Processes","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/code-quality-monitoring-processes.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/code-quality-monitoring-processes","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-quality-monitoring-processes","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/code-quality-monitoring-processes.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-05T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Code Quality Monitoring Dashboards","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-quality-monitoring-dashboards"},"next":{"title":"Code Review Checklist Templates","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-review-checklist-templates"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/code-quality-monitoring-processes.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-05T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Code Quality Metrics and Monitoring Processes';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Process Overview",
  "id": "process-overview",
  "level": 2
}, {
  "value": "Process Types",
  "id": "process-types",
  "level": 3
}, {
  "value": "Process 1: Metrics Collection",
  "id": "process-1-metrics-collection",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose",
  "level": 3
}, {
  "value": "Frequency",
  "id": "frequency",
  "level": 3
}, {
  "value": "Process Steps",
  "id": "process-steps",
  "level": 3
}, {
  "value": "Process 2: Dashboard Update",
  "id": "process-2-dashboard-update",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose-1",
  "level": 3
}, {
  "value": "Frequency",
  "id": "frequency-1",
  "level": 3
}, {
  "value": "Process Steps",
  "id": "process-steps-1",
  "level": 3
}, {
  "value": "Process 3: Metrics Review",
  "id": "process-3-metrics-review",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose-2",
  "level": 3
}, {
  "value": "Frequency",
  "id": "frequency-2",
  "level": 3
}, {
  "value": "Process Steps",
  "id": "process-steps-2",
  "level": 3
}, {
  "value": "Process 4: Quality Improvement",
  "id": "process-4-quality-improvement",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose-3",
  "level": 3
}, {
  "value": "Trigger",
  "id": "trigger",
  "level": 3
}, {
  "value": "Process Steps",
  "id": "process-steps-3",
  "level": 3
}, {
  "value": "Process 5: Metrics Reporting",
  "id": "process-5-metrics-reporting",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose-4",
  "level": 3
}, {
  "value": "Frequency",
  "id": "frequency-3",
  "level": 3
}, {
  "value": "Process Steps",
  "id": "process-steps-4",
  "level": 3
}, {
  "value": "Workflow Integration",
  "id": "workflow-integration",
  "level": 2
}, {
  "value": "Release Workflow Integration",
  "id": "release-workflow-integration",
  "level": 3
}, {
  "value": "Update Kanban Workflow Integration",
  "id": "update-kanban-workflow-integration",
  "level": 3
}, {
  "value": "Maintenance Workflow Integration",
  "id": "maintenance-workflow-integration",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Metrics Collection",
  "id": "metrics-collection",
  "level": 3
}, {
  "value": "Metrics Analysis",
  "id": "metrics-analysis",
  "level": 3
}, {
  "value": "Quality Improvement",
  "id": "quality-improvement",
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
        id: "code-quality-metrics-and-monitoring-processes",
        children: "Code Quality Metrics and Monitoring Processes"
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
      }), " E7:S03", ":T04", " - Document metrics and monitoring processes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Code Quality Metrics Framework, Code Quality Monitoring Dashboards, Maintenance Workflow Processes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive processes for code quality metrics collection, monitoring, analysis, and improvement"
      }), ". It establishes systematic workflows for maintaining code quality visibility and driving quality improvements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Systematic Collection:"
        }), " Regular, automated metric collection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous Monitoring:"
        }), " Ongoing quality monitoring and alerting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data-Driven Analysis:"
        }), " Metrics-based quality analysis and decisions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actionable Improvement:"
        }), " Quality improvements based on metrics insights"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "process-overview",
      children: "Process Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-types",
      children: "Process Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metrics Collection Process"
        }), " - Collecting quality metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dashboard Update Process"
        }), " - Updating quality dashboards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metrics Review Process"
        }), " - Reviewing and analyzing metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Improvement Process"
        }), " - Improving quality based on metrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metrics Reporting Process"
        }), " - Reporting quality status and trends"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "process-1-metrics-collection",
      children: "Process 1: Metrics Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systematically collect code quality metrics from various sources and tools."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frequency",
      children: "Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Collection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-Time:"
        }), " Continuous collection during development"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On Commit:"
        }), " Metrics collected on each commit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On Build:"
        }), " Metrics collected on each build"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scheduled:"
        }), " Daily/weekly scheduled collection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Collection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "As Needed:"
        }), " Manual collection for specific analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Manual validation of automated metrics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-steps",
      children: "Process Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Tool Execution"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run static analysis tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run coverage tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run security scanners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run performance analyzers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Metric Extraction"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract metrics from tool outputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse metric data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate metric values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Metric Storage"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store metrics in database/files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag metrics with metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link metrics to code versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive historical metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Metric Validation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate metric accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for missing metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify metric consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve metric discrepancies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "process-2-dashboard-update",
      children: "Process 2: Dashboard Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose-1",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update quality dashboards with latest metrics and visualizations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frequency-1",
      children: "Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Schedule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-Time:"
        }), " Continuous dashboard updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Daily:"
        }), " Daily dashboard refresh"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weekly:"
        }), " Weekly comprehensive update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On Demand:"
        }), " Manual dashboard updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-steps-1",
      children: "Process Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Collect Latest Metrics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retrieve latest metric data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate metrics by dimension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate composite scores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify quality trends"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Generate Visualizations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create charts and graphs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate quality heatmaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build trend visualizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create comparison views"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Update Dashboard Files"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update dashboard markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refresh dashboard data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update quality status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add quality alerts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Validate Dashboard"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify dashboard accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check visualization correctness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate data consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review dashboard completeness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "process-3-metrics-review",
      children: "Process 3: Metrics Review"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose-2",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Review and analyze quality metrics to identify issues and opportunities."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frequency-2",
      children: "Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Schedule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Daily:"
        }), " Quick quality status check"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weekly:"
        }), " Detailed quality review"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monthly:"
        }), " Comprehensive quality analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quarterly:"
        }), " Strategic quality assessment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-steps-2",
      children: "Process Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Review Overall Quality"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check overall quality score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess quality status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify quality trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare with targets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Analyze Dimensions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review each quality dimension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify weak dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze dimension trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess dimension priorities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Identify Issues"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List quality issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize issues by impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Categorize issues by type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate issue resolution effort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Plan Improvements"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define improvement goals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan improvement tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate improvement effort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "process-4-quality-improvement",
      children: "Process 4: Quality Improvement"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose-3",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systematically improve code quality based on metrics insights."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trigger",
      children: "Trigger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Improvement Triggers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics below targets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality alerts and warnings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality trend analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality review findings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-steps-3",
      children: "Process Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Identify Improvement Areas"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review quality metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify low-scoring areas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze root causes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Create Improvement Tasks"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Kanban tasks for improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define improvement goals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate improvement effort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign improvement priorities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Execute Improvements"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement quality improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refactor code as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add tests for coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix security issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Validate Improvements"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-run quality metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify quality improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate metric changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirm target achievement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "process-5-metrics-reporting",
      children: "Process 5: Metrics Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose-4",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Report quality status, trends, and improvements to stakeholders."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "frequency-3",
      children: "Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Report Schedule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weekly:"
        }), " Weekly quality summary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monthly:"
        }), " Monthly quality report"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quarterly:"
        }), " Quarterly quality assessment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On Demand:"
        }), " Ad-hoc quality reports"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-steps-4",
      children: "Process Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Gather Quality Data"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect latest metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate quality data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate quality trends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify quality highlights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Generate Report"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create quality report document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include quality metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add quality visualizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Highlight quality improvements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Distribute Report"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share report with stakeholders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Present quality findings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss quality improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gather feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Track Actions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document action items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track improvement progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow up on commitments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update quality plans"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-integration",
      children: "Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-integration",
      children: "Release Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Quality Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics review before release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality gate validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics in changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality improvement tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-kanban-workflow-integration",
      children: "Update Kanban Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UKW Quality Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics in Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality-based task updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality status synchronization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality reporting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maintenance-workflow-integration",
      children: "Maintenance Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance Quality:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality-driven maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality improvement tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality monitoring in maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics-collection",
      children: "Metrics Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automate metric collection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate metric accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store historical metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor collection processes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics-analysis",
      children: "Metrics Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review metrics regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Look for trends, not just values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider context when analyzing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combine multiple metrics for insights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-improvement",
      children: "Quality Improvement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prioritize improvements by impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set realistic improvement goals"
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
          children: "Code Quality Kanban Integration:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/code-quality-kanban-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Workflow Processes:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/maintenance-workflow-processes.md"
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
        children: "Last updated: 2026-01-05 (v0.7.3.4+0 – Code quality metrics and monitoring processes documented)"
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