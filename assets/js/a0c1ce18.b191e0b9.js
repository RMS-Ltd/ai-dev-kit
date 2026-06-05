"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["10328"], {
5028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_health_dashboard_guide_md_a0c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-health-dashboard-guide-md-a0c.json
var site_docs_architecture_standards_and_adrs_framework_health_dashboard_guide_md_a0c_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-health-dashboard-guide","title":"Framework Health Dashboard Guide","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-health-dashboard-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-health-dashboard-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-health-dashboard-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-health-dashboard-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Dependency Architecture","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-dependency-architecture"},"next":{"title":"Framework Health Metrics","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-health-metrics"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-health-dashboard-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Health Dashboard Guide';

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
  "value": "Location",
  "id": "location",
  "level": 3
}, {
  "value": "Dashboard Structure",
  "id": "dashboard-structure",
  "level": 3
}, {
  "value": "Generating the Dashboard",
  "id": "generating-the-dashboard",
  "level": 2
}, {
  "value": "Step 1: Collect Health Metrics",
  "id": "step-1-collect-health-metrics",
  "level": 3
}, {
  "value": "Step 2: Generate Dashboard",
  "id": "step-2-generate-dashboard",
  "level": 3
}, {
  "value": "One-Step Generation",
  "id": "one-step-generation",
  "level": 3
}, {
  "value": "Dashboard Usage",
  "id": "dashboard-usage",
  "level": 2
}, {
  "value": "Viewing the Dashboard",
  "id": "viewing-the-dashboard",
  "level": 3
}, {
  "value": "Interpreting Health Scores",
  "id": "interpreting-health-scores",
  "level": 3
}, {
  "value": "Using Recommendations",
  "id": "using-recommendations",
  "level": 3
}, {
  "value": "Dashboard Maintenance",
  "id": "dashboard-maintenance",
  "level": 2
}, {
  "value": "Update Frequency",
  "id": "update-frequency",
  "level": 3
}, {
  "value": "Automated Updates",
  "id": "automated-updates",
  "level": 3
}, {
  "value": "Historical Tracking",
  "id": "historical-tracking",
  "level": 3
}, {
  "value": "Dashboard Customization",
  "id": "dashboard-customization",
  "level": 2
}, {
  "value": "Custom Templates",
  "id": "custom-templates",
  "level": 3
}, {
  "value": "Framework-Specific Views",
  "id": "framework-specific-views",
  "level": 3
}, {
  "value": "Custom Output Formats",
  "id": "custom-output-formats",
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
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Dashboard Generation Errors",
  "id": "dashboard-generation-errors",
  "level": 3
}, {
  "value": "Dashboard Display Issues",
  "id": "dashboard-display-issues",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Regular Monitoring",
  "id": "regular-monitoring",
  "level": 3
}, {
  "value": "Action Planning",
  "id": "action-planning",
  "level": 3
}, {
  "value": "Communication",
  "id": "communication",
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
        id: "framework-health-dashboard-guide",
        children: "Framework Health Dashboard Guide"
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
      }), " E6:S03", ":T03", " - Build framework health dashboards", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Health Metrics, Framework Health Monitoring Procedures"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide explains how to use the Framework Health Dashboard to visualize and monitor framework health across all AI Dev Kit frameworks. The dashboard provides comprehensive health metrics, dimension breakdowns, and actionable recommendations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visual Health Overview:"
        }), " At-a-glance health status for all frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detailed Reports:"
        }), " Comprehensive metrics for each framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dimension Analysis:"
        }), " Breakdown of health across six dimensions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actionable Recommendations:"
        }), " Prioritized improvement suggestions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Historical Tracking:"
        }), " Support for trend analysis over time"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-overview",
      children: "Dashboard Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "location",
      children: "Location"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dashboard File:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/framework-health/dashboard.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Generated By:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/frameworks/generate-dashboard.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dashboard-structure",
      children: "Dashboard Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Executive Summary"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Total frameworks analyzed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Average health score"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Health status distribution"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Health Overview Table"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Quick comparison of all frameworks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Health scores and status indicators"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dimension scores at a glance"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Detailed Framework Reports"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Individual framework analysis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dimension breakdowns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Key metrics highlights"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Recommendations"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Frameworks needing attention"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prioritized improvement suggestions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus areas identified"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generating-the-dashboard",
      children: "Generating the Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-collect-health-metrics",
      children: "Step 1: Collect Health Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, collect health metrics for all frameworks:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Collect metrics for all frameworks\npython3 scripts/frameworks/framework-health-monitor.py \\\n  --output health.json \\\n  --report health.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-generate-dashboard",
      children: "Step 2: Generate Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate the markdown dashboard from the collected metrics:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate dashboard from metrics\npython3 scripts/frameworks/generate-dashboard.py \\\n  --input health.json \\\n  --output docs/framework-health/dashboard.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-step-generation",
      children: "One-Step Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can also pipe the output directly:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Collect and generate in one step\npython3 scripts/frameworks/framework-health-monitor.py --json | \\\n  python3 scripts/frameworks/generate-dashboard.py \\\n    --output docs/framework-health/dashboard.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-usage",
      children: "Dashboard Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "viewing-the-dashboard",
      children: "Viewing the Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Markdown Viewers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View directly in your IDE/editor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Render in GitHub/GitLab"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert to HTML/PDF for presentations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web View:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Host on documentation site"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include in project documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share with stakeholders"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interpreting-health-scores",
      children: "Interpreting Health Scores"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Health Status Levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "🟢 Excellent (≥85%):"
        }), " Framework is in optimal health"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "🟡 Good (70-84%):"
        }), " Framework is healthy with minor improvements possible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "🟠 Fair (55-69%):"
        }), " Framework needs attention and improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "🔴 Poor (40-54%):"
        }), " Framework requires significant improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "⚫ Critical (<40%):"
        }), " Framework is in critical condition, immediate action required"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dimension Scores:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each dimension (Usage & Adoption, Maintenance Activity, etc.) has its own score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lower dimension scores indicate areas needing improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus improvements on lowest-scoring dimensions first"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "using-recommendations",
      children: "Using Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prioritization:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Frameworks:"
        }), " Address immediately (score < 40%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor Frameworks:"
        }), " Plan improvements (score 40-54%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fair Frameworks:"
        }), " Schedule improvements (score 55-69%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good Frameworks:"
        }), " Monitor and maintain (score 70-84%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excellent Frameworks:"
        }), " Maintain current state (score ≥ 85%)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Improvement Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dashboard identifies lowest-scoring dimension for each framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus improvement efforts on that dimension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-run dashboard after improvements to measure progress"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-maintenance",
      children: "Dashboard Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-frequency",
      children: "Update Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended Schedule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weekly:"
        }), " For active development periods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monthly:"
        }), " For stable maintenance periods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quarterly:"
        }), " For comprehensive health assessments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Before Releases:"
        }), " To ensure framework health meets thresholds"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-updates",
      children: "Automated Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI/CD Integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Example GitHub Actions workflow\n- name: Update Framework Health Dashboard\n  run: |\n    python3 scripts/frameworks/framework-health-monitor.py --output health.json\n    python3 scripts/frameworks/generate-dashboard.py --input health.json --output docs/framework-health/dashboard.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cron Job:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Weekly dashboard update\n0 0 * * 0 cd /path/to/project && \\\n  python3 scripts/frameworks/framework-health-monitor.py --output health.json && \\\n  python3 scripts/frameworks/generate-dashboard.py --input health.json --output docs/framework-health/dashboard.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "historical-tracking",
      children: "Historical Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Control:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit dashboard updates regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health trends over time via git history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare dashboard versions to identify improvements/degradations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Archive Old Dashboards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep historical dashboards for trend analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive monthly/quarterly dashboards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use for reporting and planning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-customization",
      children: "Dashboard Customization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-templates",
      children: "Custom Templates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can create custom dashboard templates by modifying ", (0,jsx_runtime.jsx)(_components.code, {
        children: "generate-dashboard.py"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Customize dashboard sections\n# Add custom metrics\n# Modify visualization format\n# Include additional analysis\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-specific-views",
      children: "Framework-Specific Views"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate dashboards for specific frameworks:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Single framework dashboard\npython3 scripts/frameworks/framework-health-monitor.py \\\n  --framework kanban \\\n  --output kanban-health.json\n\npython3 scripts/frameworks/generate-dashboard.py \\\n  --input kanban-health.json \\\n  --output docs/framework-health/kanban-dashboard.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-output-formats",
      children: "Custom Output Formats"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extend the dashboard generator to support:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTML output for web viewing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSON output for API integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PDF output for reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CSV output for spreadsheet analysis"
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
        children: "Generate dashboard before release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify framework health meets thresholds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include health status in release notes"
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
        children: "Include dashboard link in board metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference health status in epic/story summaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track health trends in kanban documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-update-procedures",
      children: "Framework Update Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Update Check:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review dashboard before updating frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify health issues to address"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan improvements as part of update"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Update Verification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regenerate dashboard after updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify health maintained or improved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document health changes in update notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dashboard-generation-errors",
      children: "Dashboard Generation Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing Input File:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure health metrics are collected first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify input file path is correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check JSON format is valid"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing Output Directory:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script creates directory automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify write permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check disk space available"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dashboard-display-issues",
      children: "Dashboard Display Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Markdown Rendering:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify markdown syntax is correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for special characters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure table formatting is valid"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing Data:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify health metrics collection completed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for framework detection issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review collector module outputs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regular-monitoring",
      children: "Regular Monitoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schedule:"
        }), " Update dashboard weekly or monthly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency:"
        }), " Use same analysis period (90 days default)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Document significant health changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "action-planning",
      children: "Action Planning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prioritize:"
        }), " Focus on critical and poor frameworks first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Track:"
        }), " Create tasks for health improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Measure:"
        }), " Track improvement progress over time"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "communication",
      children: "Communication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Share:"
        }), " Include dashboard in project documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review:"
        }), " Discuss health status in team meetings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Report:"
        }), " Include health metrics in status reports"]
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
          children: "Framework Health Monitoring Procedures:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/framework-health-monitoring-procedures.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Health Monitor:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/frameworks/framework-health-monitor.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dashboard Generator:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/frameworks/generate-dashboard.py"
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
      }), " Implement markdown-based dashboard with automated generation from health metrics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Markdown is easy to read and version control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated generation ensures consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with existing documentation workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports historical tracking via git"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives Considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web-based dashboard (requires hosting infrastructure)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PDF reports (less interactive, harder to update)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spreadsheet format (less readable, harder to version control)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dashboard requires manual or automated regeneration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Markdown rendering depends on viewer capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical tracking via git history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to customize and extend"
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