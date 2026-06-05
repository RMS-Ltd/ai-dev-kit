"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["25457"], {
92663(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_maintenance_automation_workflow_integration_md_8d1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-maintenance-automation-workflow-integration-md-8d1.json
var site_docs_architecture_standards_and_adrs_maintenance_automation_workflow_integration_md_8d1_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/maintenance-automation-workflow-integration","title":"Maintenance Automation Workflow Integration","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/maintenance-automation-workflow-integration.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/maintenance-automation-workflow-integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-automation-workflow-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/maintenance-automation-workflow-integration.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-05T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Maintenance Automation Usage Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-automation-usage-guide"},"next":{"title":"Maintenance Tasks Kanban Integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-kanban-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/maintenance-automation-workflow-integration.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-05T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Maintenance Automation Workflow Integration';

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
  "value": "Workflow Integration Points",
  "id": "workflow-integration-points",
  "level": 3
}, {
  "value": "Release Workflow (RW) Integration",
  "id": "release-workflow-rw-integration",
  "level": 2
}, {
  "value": "RW Step 9: IDE-Flagged Issue Detection",
  "id": "rw-step-9-ide-flagged-issue-detection",
  "level": 3
}, {
  "value": "RW Step 9.5: Changelog Maintenance (CMW)",
  "id": "rw-step-95-changelog-maintenance-cmw",
  "level": 3
}, {
  "value": "RW Step 10: Quality Checks",
  "id": "rw-step-10-quality-checks",
  "level": 3
}, {
  "value": "Update Kanban Workflow (UKW) Integration",
  "id": "update-kanban-workflow-ukw-integration",
  "level": 2
}, {
  "value": "Automated Task Creation",
  "id": "automated-task-creation",
  "level": 3
}, {
  "value": "Automated Status Updates",
  "id": "automated-status-updates",
  "level": 3
}, {
  "value": "Maintenance Workflow Integration",
  "id": "maintenance-workflow-integration",
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
  "value": "CI/CD Integration",
  "id": "cicd-integration",
  "level": 2
}, {
  "value": "Quality Gates",
  "id": "quality-gates",
  "level": 3
}, {
  "value": "Automated Testing",
  "id": "automated-testing",
  "level": 3
}, {
  "value": "Dependency Checks",
  "id": "dependency-checks",
  "level": 3
}, {
  "value": "Integration Patterns",
  "id": "integration-patterns",
  "level": 2
}, {
  "value": "Pattern 1: Non-Blocking Automation",
  "id": "pattern-1-non-blocking-automation",
  "level": 3
}, {
  "value": "Pattern 2: Blocking Automation",
  "id": "pattern-2-blocking-automation",
  "level": 3
}, {
  "value": "Pattern 3: Task Creation Automation",
  "id": "pattern-3-task-creation-automation",
  "level": 3
}, {
  "value": "Configuration",
  "id": "configuration",
  "level": 2
}, {
  "value": "Workflow Configuration",
  "id": "workflow-configuration",
  "level": 3
}, {
  "value": "Script Configuration",
  "id": "script-configuration",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: RW Integration",
  "id": "example-1-rw-integration",
  "level": 3
}, {
  "value": "Example 2: UKW Integration",
  "id": "example-2-ukw-integration",
  "level": 3
}, {
  "value": "Example 3: CI/CD Integration",
  "id": "example-3-cicd-integration",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Integration Design",
  "id": "integration-design",
  "level": 3
}, {
  "value": "Workflow Integration",
  "id": "workflow-integration",
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
        id: "maintenance-automation-workflow-integration",
        children: "Maintenance Automation Workflow Integration"
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
      }), " Story 4 - Maintenance Automation and Tooling", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E7:S04", ":T03", " - Integrate automation with existing workflows", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Maintenance Automation Requirements, Maintenance Automation Scripts, Release Workflow, Update Kanban Workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "integration of maintenance automation with existing workflows"
      }), " in the AI Dev Kit project. It establishes integration points, patterns, and processes for seamlessly incorporating automation into Release Workflow (RW), Update Kanban Workflow (UKW), maintenance workflows, and CI/CD pipelines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Seamless Integration:"
        }), " Automation integrates naturally with existing workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-Blocking:"
        }), " Automation failures don't block workflow execution (except critical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actionable Feedback:"
        }), " Automation provides clear, actionable feedback"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configurable:"
        }), " Automation behavior is configurable per workflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-overview",
      children: "Integration Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-integration-points",
      children: "Workflow Integration Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Release Workflow (RW) Integration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IDE issue detection in RW Step 9"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Quality checks before commit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dependency checks before release"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automation validation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Kanban Workflow (UKW) Integration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated task creation from findings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status updates based on automation results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Metrics updates in Kanban"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maintenance Workflow Integration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated issue detection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated prioritization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated task creation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated progress tracking"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CI/CD Integration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated quality gates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated test execution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated dependency checks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated reporting"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release-workflow-rw-integration",
      children: "Release Workflow (RW) Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-step-9-ide-flagged-issue-detection",
      children: "RW Step 9: IDE-Flagged Issue Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current State:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 9 checks for IDE-flagged problems"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read_lints"
        }), " tool for IDE diagnostics"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Errors block workflow, warnings/infos are non-blocking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automation Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enhanced Detection:"
        }), " Use automation script for comprehensive issue detection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Reporting:"
        }), " Generate issue reports automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Prioritization:"
        }), " Apply prioritization framework automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Task Creation:"
        }), " Create Kanban tasks for high-priority issues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# In RW Step 9\ndef check_ide_issues():\n    # Run automation script\n    result = run_script('scripts/maintenance/ide_issues/detect_ide_issues.py')\n    \n    # Process results\n    if result.has_errors():\n        # Block workflow\n        return False\n    \n    # Create tasks for warnings/infos\n    if result.has_warnings():\n        create_kanban_tasks(result.warnings)\n    \n    return True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-step-95-changelog-maintenance-cmw",
      children: "RW Step 9.5: Changelog Maintenance (CMW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current State:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CMW runs automatically when changelog threshold exceeded"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CMW is deterministic and script-driven"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automation Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enhanced CMW:"
        }), " Additional automation for changelog maintenance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Archival:"
        }), " Enhanced archival automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Validation:"
        }), " Enhanced validation automation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-step-10-quality-checks",
      children: "RW Step 10: Quality Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Integration Point:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run automated quality checks before commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality gates based on metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality reports in changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# In RW Step 10 (enhanced)\ndef run_quality_checks():\n    # Run quality automation\n    result = run_script('scripts/maintenance/quality/run_quality_checks.py')\n    \n    # Check quality gates\n    if not result.passes_quality_gates():\n        # Warn but don't block (configurable)\n        log_warning(\"Quality gates not met\")\n    \n    return True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-kanban-workflow-ukw-integration",
      children: "Update Kanban Workflow (UKW) Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-task-creation",
      children: "Automated Task Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Point:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW detects maintenance needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automation creates tasks automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks use prioritization framework"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# In UKW\ndef create_maintenance_tasks():\n    # Run automation to detect issues\n    issues = run_script('scripts/maintenance/ide_issues/detect_ide_issues.py')\n    \n    # Create tasks for high-priority issues\n    for issue in issues:\n        if issue.priority >= HIGH_THRESHOLD:\n            create_kanban_task(issue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-status-updates",
      children: "Automated Status Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Point:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automation results update Kanban status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics update Kanban metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Progress tracked automatically"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# In UKW\ndef update_kanban_status():\n    # Get automation results\n    quality_metrics = get_quality_metrics()\n    \n    # Update Kanban metadata\n    update_kanban_metadata(quality_metrics)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintenance-workflow-integration",
      children: "Maintenance Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ide-flagged-issues-workflow",
      children: "IDE-Flagged Issues Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automation Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Detection:"
        }), " Use automation script for issue detection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Categorization:"
        }), " Automatically categorize issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Prioritization:"
        }), " Apply prioritization framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Task Creation:"
        }), " Create Kanban tasks automatically"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# In IDE-Flagged Issues Workflow\ndef detect_ide_issues():\n    # Run automation\n    issues = run_script('scripts/maintenance/ide_issues/detect_ide_issues.py')\n    \n    # Categorize and prioritize\n    categorized = categorize_issues(issues)\n    prioritized = prioritize_issues(categorized)\n    \n    # Create tasks\n    for issue in prioritized:\n        create_maintenance_task(issue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prioritized-maintenance-workflow",
      children: "Prioritized Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automation Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Assessment:"
        }), " Use automation for initial assessment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Prioritization:"
        }), " Apply prioritization framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Tracking:"
        }), " Track progress automatically"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scheduled-maintenance-workflow",
      children: "Scheduled Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automation Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Scanning:"
        }), " Comprehensive automated scanning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Batch Processing:"
        }), " Automated batch task creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Reporting:"
        }), " Automated maintenance reports"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cicd-integration",
      children: "CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quality-gates",
      children: "Quality Gates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Point:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated quality checks in CI/CD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality gates before merge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality reports in CI/CD"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# CI/CD configuration\nquality_gates:\n  - name: code_quality\n    script: scripts/maintenance/quality/run_quality_checks.py\n    threshold: 70\n    blocking: true\n  \n  - name: test_coverage\n    script: scripts/maintenance/quality/check_coverage.py\n    threshold: 80\n    blocking: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-testing",
      children: "Automated Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Point:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated test execution in CI/CD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test results in CI/CD reports"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test coverage tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-checks",
      children: "Dependency Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Point:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated dependency scanning in CI/CD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vulnerability checks before merge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update recommendations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-patterns",
      children: "Integration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-1-non-blocking-automation",
      children: "Pattern 1: Non-Blocking Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Quality checks, documentation validation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warn if issues found"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't block workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def run_non_blocking_automation(script):\n    result = run_script(script)\n    if result.has_issues():\n        log_warning(f\"Issues found: {result.issues}\")\n    return True  # Always return True (non-blocking)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-2-blocking-automation",
      children: "Pattern 2: Blocking Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Critical errors, security vulnerabilities"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for critical issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block workflow if critical issues found"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allow workflow to proceed otherwise"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def run_blocking_automation(script):\n    result = run_script(script)\n    if result.has_critical_issues():\n        log_error(f\"Critical issues found: {result.critical_issues}\")\n        return False  # Block workflow\n    return True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-3-task-creation-automation",
      children: "Pattern 3: Task Creation Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " Issue detection, quality findings"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Kanban tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban board"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def create_tasks_from_automation(script):\n    result = run_script(script)\n    for finding in result.findings:\n        if finding.priority >= THRESHOLD:\n            create_kanban_task(finding)\n    update_kanban_board()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-configuration",
      children: "Workflow Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration File:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " (or workflow-specific config)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration Options:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "maintenance_automation:\n  enabled: true\n  ide_issues:\n    enabled: true\n    blocking: true  # Errors block, warnings don't\n    create_tasks: true\n  quality_checks:\n    enabled: true\n    blocking: false\n    threshold: 70\n  dependency_scanning:\n    enabled: true\n    blocking: true  # Critical vulnerabilities block\n    create_tasks: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "script-configuration",
      children: "Script Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script-Specific Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Output formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration settings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-rw-integration",
      children: "Example 1: RW Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " IDE issue detection in RW Step 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 9 runs IDE issue detection script"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script detects errors, warnings, info"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Errors block workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warnings create Kanban tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow proceeds if no errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-ukw-integration",
      children: "Example 2: UKW Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Automated task creation from quality findings"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW runs quality check automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automation identifies quality issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High-priority issues create Kanban tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks use prioritization framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board updated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-cicd-integration",
      children: "Example 3: CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Quality gates in CI/CD pipeline"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD runs quality check automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automation checks quality metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality gates evaluated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merge blocked if gates not met"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality report generated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-design",
      children: "Integration Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design integration points carefully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make automation non-blocking when possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide clear feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle failures gracefully"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-integration",
      children: "Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate naturally with workflow steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't disrupt existing workflow patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide configuration options"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document integration points"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Automation Requirements:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/maintenance-automation-requirements.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Automation Scripts:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/maintenance-automation-scripts-and-tools.md"
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
          children: "Story 4:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/story-04-maintenance-automation-and-tooling.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2026-01-05 (v0.7.4.3+0 – Maintenance automation integrated with existing workflows)"
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