"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["61592"], {
81493(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_maintenance_automation_usage_guide_md_9e5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-maintenance-automation-usage-guide-md-9e5.json
var site_docs_architecture_standards_and_adrs_maintenance_automation_usage_guide_md_9e5_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/maintenance-automation-usage-guide","title":"Maintenance Automation Usage Guide","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/maintenance-automation-usage-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/maintenance-automation-usage-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-automation-usage-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/maintenance-automation-usage-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-05T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Maintenance Automation Scripts and Tools","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-automation-scripts-and-tools"},"next":{"title":"Maintenance Automation Workflow Integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-automation-workflow-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/maintenance-automation-usage-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-05T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Maintenance Automation Usage Guide';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Quick Start",
  "id": "quick-start",
  "level": 2
}, {
  "value": "Installation",
  "id": "installation",
  "level": 3
}, {
  "value": "Basic Usage",
  "id": "basic-usage",
  "level": 3
}, {
  "value": "Usage Guides",
  "id": "usage-guides",
  "level": 2
}, {
  "value": "Guide 1: IDE Issue Detection",
  "id": "guide-1-ide-issue-detection",
  "level": 3
}, {
  "value": "Guide 2: Code Quality Checks",
  "id": "guide-2-code-quality-checks",
  "level": 3
}, {
  "value": "Guide 3: Dependency Scanning",
  "id": "guide-3-dependency-scanning",
  "level": 3
}, {
  "value": "Guide 4: Documentation Validation",
  "id": "guide-4-documentation-validation",
  "level": 3
}, {
  "value": "Tutorials",
  "id": "tutorials",
  "level": 2
}, {
  "value": "Tutorial 1: Automated Maintenance Workflow",
  "id": "tutorial-1-automated-maintenance-workflow",
  "level": 3
}, {
  "value": "Tutorial 2: Quality Gate Setup",
  "id": "tutorial-2-quality-gate-setup",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Daily Maintenance Check",
  "id": "example-1-daily-maintenance-check",
  "level": 3
}, {
  "value": "Example 2: Pre-Commit Automation",
  "id": "example-2-pre-commit-automation",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Automation Usage",
  "id": "automation-usage",
  "level": 3
}, {
  "value": "Script Configuration",
  "id": "script-configuration",
  "level": 3
}, {
  "value": "Error Handling",
  "id": "error-handling",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Issue: Script Fails to Run",
  "id": "issue-script-fails-to-run",
  "level": 3
}, {
  "value": "Issue: Automation Results Incomplete",
  "id": "issue-automation-results-incomplete",
  "level": 3
}, {
  "value": "Issue: Integration Failures",
  "id": "issue-integration-failures",
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
        id: "maintenance-automation-usage-guide",
        children: "Maintenance Automation Usage Guide"
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
      }), " E7:S04", ":T04", " - Document automation and tooling usage", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Maintenance Automation Requirements, Maintenance Automation Scripts, Maintenance Automation Workflow Integration"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive usage guidance"
      }), " for maintenance automation scripts and tools in the AI Dev Kit project. It includes usage guides, tutorials, examples, best practices, and troubleshooting information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Usage Guides:"
        }), " Step-by-step guides for each automation script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tutorials:"
        }), " Tutorials for common automation scenarios"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), " Real-world usage examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best Practices:"
        }), " Best practices for automation usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Troubleshooting:"
        }), " Troubleshooting guides for common issues"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-start",
      children: "Quick Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.8+"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required tools (see tool requirements)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# No installation required - scripts are in repository\n# Ensure scripts are executable\nchmod +x scripts/maintenance/**/*.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run IDE Issue Detection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/ide_issues/detect_ide_issues.py --source-dir .\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run Quality Checks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/quality/run_quality_checks.py --source-dir .\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scan Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/dependencies/scan_dependencies.py --requirements requirements.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage-guides",
      children: "Usage Guides"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guide-1-ide-issue-detection",
      children: "Guide 1: IDE Issue Detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Detect IDE-flagged issues across the codebase"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/ide_issues/detect_ide_issues.py \\\n  --source-dir . \\\n  --output reports/ide_issues.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/ide_issues/detect_ide_issues.py \\\n  --source-dir . \\\n  --output reports/ide_issues.json \\\n  --format json \\\n  --severity error,warning \\\n  --exclude-dirs tests,venv \\\n  --verbose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--source-dir"
        }), ": Source directory to scan"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--output"
        }), ": Output file path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--format"
        }), ": Output format (json, markdown)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--severity"
        }), ": Severity filter (error, warning, info)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--exclude-dirs"
        }), ": Directories to exclude"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--verbose"
        }), ": Verbose output"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSON report with issue details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Markdown summary (if format=markdown)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guide-2-code-quality-checks",
      children: "Guide 2: Code Quality Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Run code quality checks and collect metrics"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/quality/run_quality_checks.py \\\n  --source-dir . \\\n  --output reports/quality.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/quality/run_quality_checks.py \\\n  --source-dir . \\\n  --output reports/quality.json \\\n  --thresholds config/quality_thresholds.yaml \\\n  --tools pylint,flake8,coverage \\\n  --generate-report\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--source-dir"
        }), ": Source directory to check"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--output"
        }), ": Output file path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--thresholds"
        }), ": Threshold configuration file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--tools"
        }), ": Tools to use (comma-separated)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--generate-report"
        }), ": Generate markdown report"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality metrics JSON"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality report markdown (if --generate-report)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guide-3-dependency-scanning",
      children: "Guide 3: Dependency Scanning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Scan for dependency updates and vulnerabilities"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/dependencies/scan_dependencies.py \\\n  --requirements requirements.txt \\\n  --output reports/dependencies.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/dependencies/scan_dependencies.py \\\n  --requirements requirements.txt \\\n  --output reports/dependencies.json \\\n  --check-vulnerabilities \\\n  --suggest-updates \\\n  --format detailed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--requirements"
        }), ": Requirements file path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--output"
        }), ": Output file path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--check-vulnerabilities"
        }), ": Check for security vulnerabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--suggest-updates"
        }), ": Suggest dependency updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--format"
        }), ": Output format (summary, detailed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency report JSON"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vulnerability report (if --check-vulnerabilities)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update recommendations (if --suggest-updates)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guide-4-documentation-validation",
      children: "Guide 4: Documentation Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Validate documentation format and health"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/documentation/validate_documentation.py \\\n  --docs-dir docs/ \\\n  --output reports/doc_validation.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python scripts/maintenance/documentation/validate_documentation.py \\\n  --docs-dir docs/ \\\n  --output reports/doc_validation.json \\\n  --check-links \\\n  --check-format \\\n  --check-currency \\\n  --generate-report\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--docs-dir"
        }), ": Documentation directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--output"
        }), ": Output file path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--check-links"
        }), ": Validate documentation links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--check-format"
        }), ": Validate documentation format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--check-currency"
        }), ": Check documentation currency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--generate-report"
        }), ": Generate markdown report"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation validation JSON"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation report markdown (if --generate-report)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tutorials",
      children: "Tutorials"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tutorial-1-automated-maintenance-workflow",
      children: "Tutorial 1: Automated Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Set up automated maintenance workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Automation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Edit rw-config.yaml\nmaintenance_automation:\n  enabled: true\n  ide_issues:\n    enabled: true\n    create_tasks: true\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run Automation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Run IDE issue detection\npython scripts/maintenance/ide_issues/detect_ide_issues.py \\\n  --source-dir . \\\n  --output reports/ide_issues.json\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Tasks:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Create Kanban tasks from findings\npython scripts/maintenance/ide_issues/prioritize_ide_issues.py \\\n  --input reports/ide_issues.json \\\n  --create-tasks\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Review Results:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check Kanban board for new tasks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review issue reports"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prioritize maintenance work"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tutorial-2-quality-gate-setup",
      children: "Tutorial 2: Quality Gate Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Set up quality gates in CI/CD"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Quality Gate Script:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "# scripts/maintenance/quality/quality_gate.py\nimport sys\nfrom run_quality_checks import run_quality_checks\n\nresult = run_quality_checks()\nif not result.passes_gates():\n    sys.exit(1)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integrate with CI/CD:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-yaml",
            children: "# .github/workflows/quality.yml\n- name: Quality Gate\n  run: python scripts/maintenance/quality/quality_gate.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure Thresholds:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-yaml",
            children: "# config/quality_thresholds.yaml\nquality_gates:\n  coverage: 80\n  complexity: 10\n  duplication: 3\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-daily-maintenance-check",
      children: "Example 1: Daily Maintenance Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Daily automated maintenance check"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# daily_maintenance.sh\n\n# Run IDE issue detection\npython scripts/maintenance/ide_issues/detect_ide_issues.py \\\n  --source-dir . \\\n  --output reports/ide_issues_$(date +%Y%m%d).json\n\n# Run quality checks\npython scripts/maintenance/quality/run_quality_checks.py \\\n  --source-dir . \\\n  --output reports/quality_$(date +%Y%m%d).json\n\n# Scan dependencies\npython scripts/maintenance/dependencies/scan_dependencies.py \\\n  --requirements requirements.txt \\\n  --check-vulnerabilities \\\n  --output reports/dependencies_$(date +%Y%m%d).json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schedule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cron",
        children: "# Daily at 2:00 AM\n0 2 * * * /path/to/daily_maintenance.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-pre-commit-automation",
      children: "Example 2: Pre-Commit Automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Run automation before commit"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-commit Hook:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# .git/hooks/pre-commit\n\n# Run IDE issue detection (errors only)\npython scripts/maintenance/ide_issues/detect_ide_issues.py \\\n  --source-dir . \\\n  --severity error \\\n  --output /tmp/ide_issues.json\n\nif [ $? -ne 0 ]; then\n    echo \"IDE errors detected. Commit blocked.\"\n    exit 1\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automation-usage",
      children: "Automation Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run automation regularly (daily/weekly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review automation results promptly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address high-priority findings quickly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track automation effectiveness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "script-configuration",
      children: "Script Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use configuration files for settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document configuration options"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version control configuration files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test configuration changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-handling",
      children: "Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle errors gracefully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide clear error messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors for debugging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't fail silently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-script-fails-to-run",
      children: "Issue: Script Fails to Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script exits with error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Permission denied errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module not found errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check script permissions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chmod +x script.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check Python version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 --version"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Install dependencies: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install -r requirements.txt"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check script path: Use absolute paths if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-automation-results-incomplete",
      children: "Issue: Automation Results Incomplete"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing issue detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incomplete quality metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partial dependency scanning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check source directory path"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify tool availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check tool configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review error logs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-integration-failures",
      children: "Issue: Integration Failures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow integration fails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban updates not working"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD integration errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check integration configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify workflow permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review integration logs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test integration separately"
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
          children: "Maintenance Automation Workflow Integration:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/maintenance-automation-workflow-integration.md"
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
        children: "Last updated: 2026-01-05 (v0.7.4.4+0 – Maintenance automation and tooling usage documented)"
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