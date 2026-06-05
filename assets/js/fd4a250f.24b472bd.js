"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["5054"], {
15020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_workflow_structure_analysis_md_fd4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-workflow-structure-analysis-md-fd4.json
var site_docs_knowledge_analysis_workflow_structure_analysis_md_fd4_namespaceObject = JSON.parse('{"id":"knowledge/analysis/workflow-structure-analysis","title":"Workflow Structure Analysis","description":"Purpose: Comprehensive workflow structure analysis across all projects to inform the \\"ultimate\\" canonical workflow structure","source":"@site/../docs/knowledge/analysis/workflow-structure-analysis.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/workflow-structure-analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/workflow-structure-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/workflow-structure-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-17T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Task-Level Kanban Structure Analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/task-level-kanban-structure-analysis"},"next":{"title":"Articles","permalink":"/ai-dev-kit/docs/knowledge/articles/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/workflow-structure-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-17T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Workflow Structure Analysis';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Workflow File Naming Conventions",
  "id": "1-workflow-file-naming-conventions",
  "level": 2
}, {
  "value": "1.1 Workflow File Naming Patterns",
  "id": "11-workflow-file-naming-patterns",
  "level": 3
}, {
  "value": "1.2 Workflow File Organization",
  "id": "12-workflow-file-organization",
  "level": 3
}, {
  "value": "1.3 Workflow Naming Summary",
  "id": "13-workflow-naming-summary",
  "level": 3
}, {
  "value": "2. Workflow YAML Structure Patterns",
  "id": "2-workflow-yaml-structure-patterns",
  "level": 2
}, {
  "value": "2.1 Standard YAML Structure",
  "id": "21-standard-yaml-structure",
  "level": 3
}, {
  "value": "2.2 Workflow Type Patterns",
  "id": "22-workflow-type-patterns",
  "level": 3
}, {
  "value": "2.3 Step Type Patterns",
  "id": "23-step-type-patterns",
  "level": 3
}, {
  "value": "3. Workflow Step Patterns",
  "id": "3-workflow-step-patterns",
  "level": 2
}, {
  "value": "3.1 Step Dependency Patterns",
  "id": "31-step-dependency-patterns",
  "level": 3
}, {
  "value": "3.2 Step Configuration Patterns",
  "id": "32-step-configuration-patterns",
  "level": 3
}, {
  "value": "3.3 Step Mandatory/Blocking Patterns",
  "id": "33-step-mandatoryblocking-patterns",
  "level": 3
}, {
  "value": "4. Workflow Configuration Patterns",
  "id": "4-workflow-configuration-patterns",
  "level": 2
}, {
  "value": "4.1 RW Config File Patterns",
  "id": "41-rw-config-file-patterns",
  "level": 3
}, {
  "value": "4.2 Configuration Loading Patterns",
  "id": "42-configuration-loading-patterns",
  "level": 3
}, {
  "value": "5. Workflow Execution Patterns",
  "id": "5-workflow-execution-patterns",
  "level": 2
}, {
  "value": "5.1 Agent-Driven Execution Pattern",
  "id": "51-agent-driven-execution-pattern",
  "level": 3
}, {
  "value": "5.2 Script-Based Execution Pattern",
  "id": "52-script-based-execution-pattern",
  "level": 3
}, {
  "value": "5.3 Hybrid Execution Pattern",
  "id": "53-hybrid-execution-pattern",
  "level": 3
}, {
  "value": "6. Workflow Integration Patterns",
  "id": "6-workflow-integration-patterns",
  "level": 2
}, {
  "value": "6.1 RW Integration Patterns",
  "id": "61-rw-integration-patterns",
  "level": 3
}, {
  "value": "6.2 PVW Integration Patterns",
  "id": "62-pvw-integration-patterns",
  "level": 3
}, {
  "value": "6.3 Intake Workflow Integration",
  "id": "63-intake-workflow-integration",
  "level": 3
}, {
  "value": "7. Workflow Step Count Patterns",
  "id": "7-workflow-step-count-patterns",
  "level": 2
}, {
  "value": "7.1 Release Workflow Step Counts",
  "id": "71-release-workflow-step-counts",
  "level": 3
}, {
  "value": "7.2 Step Count Summary",
  "id": "72-step-count-summary",
  "level": 3
}, {
  "value": "8. Workflow Customization Patterns",
  "id": "8-workflow-customization-patterns",
  "level": 2
}, {
  "value": "8.1 Customization Methods",
  "id": "81-customization-methods",
  "level": 3
}, {
  "value": "8.2 Customization Examples",
  "id": "82-customization-examples",
  "level": 3
}, {
  "value": "9. Workflow Validation Patterns",
  "id": "9-workflow-validation-patterns",
  "level": 2
}, {
  "value": "9.1 Validation Step Patterns",
  "id": "91-validation-step-patterns",
  "level": 3
}, {
  "value": "9.2 Validation Script Patterns",
  "id": "92-validation-script-patterns",
  "level": 3
}, {
  "value": "10. Workflow Progress Tracking Patterns",
  "id": "10-workflow-progress-tracking-patterns",
  "level": 2
}, {
  "value": "10.1 TODO Tracking Patterns",
  "id": "101-todo-tracking-patterns",
  "level": 3
}, {
  "value": "11. Recommendations for &quot;Ultimate&quot; Canonical Structure",
  "id": "11-recommendations-for-ultimate-canonical-structure",
  "level": 2
}, {
  "value": "11.1 Workflow File Structure",
  "id": "111-workflow-file-structure",
  "level": 3
}, {
  "value": "11.2 Workflow YAML Structure",
  "id": "112-workflow-yaml-structure",
  "level": 3
}, {
  "value": "11.3 Workflow Configuration",
  "id": "113-workflow-configuration",
  "level": 3
}, {
  "value": "11.4 Workflow Execution",
  "id": "114-workflow-execution",
  "level": 3
}, {
  "value": "11.5 Release Workflow Steps",
  "id": "115-release-workflow-steps",
  "level": 3
}, {
  "value": "12. Summary: &quot;Ultimate&quot; Canonical Workflow Structure",
  "id": "12-summary-ultimate-canonical-workflow-structure",
  "level": 2
}, {
  "value": "12.1 File Structure",
  "id": "121-file-structure",
  "level": 3
}, {
  "value": "12.2 YAML Structure",
  "id": "122-yaml-structure",
  "level": 3
}, {
  "value": "12.3 Configuration",
  "id": "123-configuration",
  "level": 3
}, {
  "value": "12.4 Execution",
  "id": "124-execution",
  "level": 3
}, {
  "value": "12.5 Release Workflow",
  "id": "125-release-workflow",
  "level": 3
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
        id: "workflow-structure-analysis",
        children: "Workflow Structure Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Comprehensive workflow structure analysis across all projects to inform the \"ultimate\" canonical workflow structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detailed workflow structure analysis"
      }), " of workflow patterns across all analyzed projects. Without this granular data, we cannot determine the \"ultimate\" canonical workflow structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Questions Addressed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What workflow naming conventions exist across projects?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How are workflows organized (YAML files, scripts, embedded)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What workflow structure details exist (steps, configuration, dependencies)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What patterns emerge for workflow execution, integration, and customization?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the \"ultimate\" canonical workflow structure based on real-world usage?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-workflow-file-naming-conventions",
      children: "1. Workflow File Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-workflow-file-naming-patterns",
      children: "1.1 Workflow File Naming Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: YAML Workflow Files (Standard)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{workflow-name}-workflow.yaml"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{workflow-name}.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow.yaml"
            }), " (most common)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-workflow.yaml"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "testing-workflow.yaml"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "migration-workflow.yaml"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "refactor-workflow.yaml"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " ai-dev-kit, been-there, dev-toolkit, starborn_legacy, confidentia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Most common pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/"
        }), " directory or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Script-Based Workflows"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{workflow-name}.py"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{workflow-name}.sh"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release_workflow.py"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release_workflow.sh"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " starborn_legacy, confidentia (some workflows)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Less common, legacy pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/"
        }), " directory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Embedded Workflows"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " Workflow definitions embedded in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " or documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples:"
        }), " RW trigger sections in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " All projects (RW trigger in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Universal for RW trigger"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-workflow-file-organization",
      children: "1.2 Workflow File Organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Framework Package Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/workflows/\n├── release-workflow.yaml\n├── intake-workflow.yaml\n├── testing-workflow.yaml\n├── migration-workflow.yaml\n└── refactor-workflow.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK framework pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Project Root Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "workflows/\n├── release-workflow.yaml\n└── kanban-review-workflow.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " starborn_legacy, confidentia (some branches)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Project-specific pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Multi-Location Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "workflows/\n├── release-workflow.yaml\n└── workflows/\n    ├── {uuid}-Kanban_Review_Workflow.yaml\n    └── {uuid}-Release_Workflow.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Complex pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-workflow-naming-summary",
      children: "1.3 Workflow Naming Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommendation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["YAML files (", (0,jsx_runtime.jsx)(_components.code, {
              children: "*-workflow.yaml"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, been-there, dev-toolkit, starborn_legacy, confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (5/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Recommended"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Script files (", (0,jsx_runtime.jsx)(_components.code, {
              children: "*.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*.sh"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (2/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Legacy pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Embedded in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Standard for triggers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use YAML files (", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\{name\\}-workflow.yaml"
      }), ") in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflows/"
      }), " directory as canonical format."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-workflow-yaml-structure-patterns",
      children: "2. Workflow YAML Structure Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-standard-yaml-structure",
      children: "2.1 Standard YAML Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: ADK Canonical Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Release Workflow\nversion: 2.1.0\ntype: release\ndescription: Automated release workflow with PDCA integration\n\nconfig:\n  version_file: src/confidentia/version.py\n  changelog_dir: docs/changelog-and-release-notes/changelog-archive\n  main_changelog: CHANGELOG.md\n\nsteps:\n  - id: step-1\n    name: Branch Safety Check\n    type: branch_safety_check\n    handler: release.branch_safety_check\n    required: true\n    mandatory: true\n    blocking: true\n    dependencies: []\n    config:\n      use_validator: true\n      strict_mode: true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit, been-there, dev-toolkit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK canonical pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ": Workflow name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), ": Workflow version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "type"
        }), ": Workflow type (release, intake, testing, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "description"
        }), ": Workflow description"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "config"
        }), ": Workflow-level configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "steps"
        }), ": Array of workflow steps"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ": Step identifier (", (0,jsx_runtime.jsx)(_components.code, {
          children: "step-{number}"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ": Step name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "type"
        }), ": Step type"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "handler"
        }), ": Handler function/script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "required"
        }), ": Boolean (required step)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dependencies"
        }), ": Array of step dependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step Optional Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "mandatory"
        }), ": Boolean (mandatory blocking step)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "blocking"
        }), ": Boolean (blocks workflow if fails)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "enabled"
        }), ": Boolean (step enabled/disabled)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "config"
        }), ": Step-specific configuration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-workflow-type-patterns",
      children: "2.2 Workflow Type Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Workflow Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "release"
          }), ":"]
        }), " Release Workflow (RW) - version bump, changelog, commit, tag, push"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "intake"
          }), ":"]
        }), " Intake Workflow - FR/BR/UXR intake into Kanban"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "testing"
          }), ":"]
        }), " Testing Workflow - test execution, coverage, validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "migration"
          }), ":"]
        }), " Migration Workflow - data/structure migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "refactor"
          }), ":"]
        }), " Refactor Workflow - code refactoring automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "package_version"
          }), ":"]
        }), " Package Version Workflow (PVW) - package version bumping"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release:"
        }), " All projects (universal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake:"
        }), " ai-dev-kit, been-there, dev-toolkit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing:"
        }), " ai-dev-kit, been-there, dev-toolkit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration:"
        }), " ai-dev-kit, been-there, dev-toolkit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor:"
        }), " ai-dev-kit, been-there, dev-toolkit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Version:"
        }), " ai-dev-kit (PVW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-step-type-patterns",
      children: "2.3 Step Type Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Step Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "branch_safety_check"
          }), ":"]
        }), " Branch context validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "version_bump"
          }), ":"]
        }), " Version file update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "changelog_create"
          }), ":"]
        }), " Detailed changelog creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "changelog_update"
          }), ":"]
        }), " Main changelog update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "readme_update"
          }), ":"]
        }), " README version badge update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "kanban_update"
          }), ":"]
        }), " Kanban documentation update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git_stage"
          }), ":"]
        }), " Git staging"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "validation"
          }), ":"]
        }), " Validation script execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git_commit"
          }), ":"]
        }), " Git commit creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git_tag"
          }), ":"]
        }), " Git tag creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git_push"
          }), ":"]
        }), " Git push to remote"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "document_load"
          }), ":"]
        }), " Document loading/parsing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "decision_flow"
          }), ":"]
        }), " Decision flow analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "kanban_task_creation"
          }), ":"]
        }), " Kanban task creation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step Type Distribution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Operations:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git_stage"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git_commit"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git_tag"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git_push"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_bump"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package_version"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog_create"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog_update"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "readme_update"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_update"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "branch_safety_check"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validation"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "document_load"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "decision_flow"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_task_creation"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-workflow-step-patterns",
      children: "3. Workflow Step Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-step-dependency-patterns",
      children: "3.1 Step Dependency Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Sequential Dependencies"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-1\n    dependencies: []\n  - id: step-2\n    dependencies: [step-1]\n  - id: step-3\n    dependencies: [step-2]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " All projects\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Universal pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Parallel Dependencies"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-2\n    dependencies: [step-1]\n  - id: step-5\n    dependencies: [step-2]\n  - id: step-6\n    dependencies: [step-2]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit (RW Step 5 and 6 both depend on Step 2)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Common pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Multiple Dependencies"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-4\n    dependencies: [step-2, step-3]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit (Intake Workflow)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Less common pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-step-configuration-patterns",
      children: "3.2 Step Configuration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Config Variable Substitution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "config:\n  version_file: src/confidentia/version.py\nsteps:\n  - id: step-2\n    config:\n      version_file: ${config.version_file}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit, been-there, dev-toolkit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Direct Configuration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-1\n    config:\n      version_file: lib/core/version.dart\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " starborn_legacy\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Project-specific pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Nested Configuration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-2\n    config:\n      semantic_matching:\n        enabled: true\n        threshold: 0.7\n        use_e4s08: true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit (Intake Workflow)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Complex workflow pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-step-mandatoryblocking-patterns",
      children: "3.3 Step Mandatory/Blocking Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Mandatory Blocking Steps"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-1\n    mandatory: true\n    blocking: true\n    required: true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit (RW Step 1: Branch Safety Check)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Critical validation steps"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Required Non-Blocking Steps"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-2\n    required: true\n    mandatory: false\n    blocking: false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " All projects (most steps)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Optional Steps"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-5\n    required: false\n    enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " All projects (optional steps)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Common pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-workflow-configuration-patterns",
      children: "4. Workflow Configuration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-rw-config-file-patterns",
      children: "4.1 RW Config File Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 1: Standard RW Config (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ")"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# RW Config - Generated by install_release_workflow.py\n# Project: been-there\n\n# Required keys (all modes)\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\n\n# Kanban integration\nuse_kanban: true\nkanban_root: docs/project-management/kanban\nepic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md\nstory_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md\nkanban_board: _index.md\n\nversioning_schema: RC.EPIC.STORY.TASK+BUILD\n\nproject_name: been-there\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK config pattern (2/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), ": Path to version file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "main_changelog"
        }), ": Path to main changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "changelog_dir"
        }), ": Path to changelog archive directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts_path"
        }), ": Path to validation scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "readme_file"
        }), ": Path to README file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "use_kanban"
        }), ": Boolean (enable Kanban integration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_root"
        }), ": Path to Kanban root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "epic_doc_pattern"
        }), ": Epic document pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "story_doc_pattern"
        }), ": Story document pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_board"
        }), ": Kanban board file name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "versioning_schema"
        }), ": Version schema format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "project_name"
        }), ": Project name"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Project-Specific Config"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# RW Config - Generated by install_release_workflow.py\n# Project: dev-toolkit\n\nversion_file: src/fynd_deals/version.py  # NOTE: Incorrect path (should be src/dev_toolkit/version.py)\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\n\nuse_kanban: true\nkanban_root: docs/project-management/kanban\nepic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md\nstory_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md\nkanban_board: _index.md\n\nversioning_schema: RC.EPIC.STORY.TASK+BUILD\n\nproject_name: dev-toolkit\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " dev-toolkit (with path errors)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Config-driven pattern (with issues)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: No Config File"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, confidentia, starborn_legacy, free-party-promoter, vwmp, qa-kb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " No config pattern (6/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Paths hardcoded in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " or workflow YAML"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-configuration-loading-patterns",
      children: "4.2 Configuration Loading Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Config-Driven Approach (Preferred)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Load rw-config.yaml if it exists\nfrom pathlib import Path\nimport yaml\n\nconfig = None\nconfig_path = Path(\"rw-config.yaml\")\nif config_path.exists():\n    try:\n        with open(config_path, 'r', encoding='utf-8') as f:\n            config = yaml.safe_load(f)\n    except Exception:\n        pass  # Fall back to placeholders\n\n# Use config values or fallback to defaults\nversion_file = config['version_file'] if config and 'version_file' in config else 'src/fynd_deals/version.py'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK pattern (3/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Hardcoded Paths"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "config:\n  version_file: lib/core/version.dart\n  changelog_dir: docs/changelog_archive\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " starborn_legacy, confidentia\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Project-specific pattern (2/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 3: Embedded in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Paths defined in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " RW trigger section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, agentic-ide-rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Pre-config pattern (2/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-workflow-execution-patterns",
      children: "5. Workflow Execution Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-agent-driven-execution-pattern",
      children: "5.1 Agent-Driven Execution Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern: ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. ANALYZE\n   ├─ Read step definition and requirements\n   ├─ Understand step purpose and dependencies\n   ├─ Gather context (project state, previous step outputs)\n   └─ Identify what needs to be done\n\n2. DETERMINE\n   ├─ Determine specific actions required\n   ├─ Calculate values (e.g., next version number)\n   ├─ Validate prerequisites are met\n   └─ Plan execution approach\n\n3. EXECUTE\n   ├─ Perform the required actions\n   ├─ Update files, run commands, create resources\n   └─ Capture results and outputs\n\n4. VALIDATE\n   ├─ Verify execution succeeded\n   ├─ Check outputs match expectations\n   ├─ Validate against requirements\n   └─ Handle errors if validation fails\n\n5. PROCEED\n   ├─ Document what was done\n   ├─ Pass outputs to next steps\n   └─ Move to next step in workflow\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " All projects (universal for RW)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Universal pattern\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Intelligent execution, context-aware, handles edge cases"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-script-based-execution-pattern",
      children: "5.2 Script-Based Execution Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern: Deterministic Script Execution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Deterministic release workflow script\npython scripts/release_workflow.py\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " starborn_legacy (has script, but prefers agent-driven)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Legacy pattern (rarely used)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Deterministic, but limited flexibility"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-hybrid-execution-pattern",
      children: "5.3 Hybrid Execution Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern: Agent-Driven with Script Tools"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent executes workflow intelligently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses validation scripts as tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scripts provide data/validation, not decisions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " All projects (agent-driven RW uses validation scripts)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Universal pattern\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Best of both worlds - intelligence + validation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-workflow-integration-patterns",
      children: "6. Workflow Integration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-rw-integration-patterns",
      children: "6.1 RW Integration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 1: RW Trigger in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User types \"RW\" → Agent executes Release Workflow"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflow defined in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " RW trigger section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " All projects (universal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Universal pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: RW Config Integration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW loads ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " for project-specific paths"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config-driven approach for customization"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " been-there, dev-toolkit, ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " ADK pattern (3/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: RW YAML Integration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW workflow defined in YAML file"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " references YAML file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " agentic-ide-rules (references config file)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Less common pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-pvw-integration-patterns",
      children: "6.2 PVW Integration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: PVW as RW Sub-Workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW executes as RW Step 2.5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggered automatically during RW"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " ADK pattern (1/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: PVW Standalone Trigger"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User types \"PVW\" → Agent executes Package Version Workflow"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflow defined in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " PVW trigger section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " ADK pattern (1/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-intake-workflow-integration",
      children: "6.3 Intake Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Intake as Standalone Workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manual invocation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python intake_workflow.py --fr FR-019.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " ADK pattern (1/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Intake as RW Sub-Workflow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW detects FR/BR commit trigger"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW triggers Intake Workflow automatically"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " ai-dev-kit (planned)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Future pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-workflow-step-count-patterns",
      children: "7. Workflow Step Count Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-release-workflow-step-counts",
      children: "7.1 Release Workflow Step Counts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: 10-Step RW"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, starborn_legacy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Steps:"
        }), " Version bump, changelog, Kanban update, README, stage, validators, commit, tag, push"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Standard pattern (2/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: 11-Step RW"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " confidentia (branch 03)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Steps:"
        }), " Consider work, bump version, update Kanban, update KB, update CL, update README, stage, validators, commit, tag, push"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Custom pattern (1/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: 12-Step RW"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " been-there, dev-toolkit, ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Steps:"
        }), " Branch safety check, version bump, detailed changelog, main changelog, README, BR/FR docs, Kanban docs, stage, validators, commit, tag, push"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " ADK canonical pattern (3/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 4: 13-Step RW"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " agentic-ide-rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Steps:"
        }), " 12-step RW + PDCA verification + PDCA action items + summary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Extended pattern (1/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 5: 14-Step RW"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " ai-dev-kit (documented in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Steps:"
        }), " 12-step RW + optional steps (13-14)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Documented pattern (1/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-step-count-summary",
      children: "7.2 Step Count Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10 steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, starborn_legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (2/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11 steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (1/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12 steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit, ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (3/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK canonical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13 steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (1/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended with PDCA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14 steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit (documented)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (1/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use 12-step RW as canonical (with optional steps 13-14)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-workflow-customization-patterns",
      children: "8. Workflow Customization Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-customization-methods",
      children: "8.1 Customization Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 1: Config-Driven Customization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " for project-specific paths"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow structure remains standard"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " been-there, dev-toolkit, ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " ADK pattern (3/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 2: YAML Customization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edit workflow YAML file directly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customize steps, dependencies, configuration"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " starborn_legacy, confidentia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Project-specific pattern (2/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Method 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " Customization"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Customize RW trigger section in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modify step definitions, paths, logic"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, agentic-ide-rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Pre-config pattern (2/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-customization-examples",
      children: "8.2 Customization Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Custom Step Addition"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-11\n    name: PDCA Verification\n    type: pdca_verification\n    handler: pdca.verify\n    required: false\n    dependencies: [step-10]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " agentic-ide-rules (PDCA integration)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Extension pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Custom Step Removal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove optional steps (e.g., README update, BR/FR docs)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals (10-step RW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Simplification pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Custom Step Reordering"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reorder steps based on project needs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " confidentia (11-step RW with different order)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Customization pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-workflow-validation-patterns",
      children: "9. Workflow Validation Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-validation-step-patterns",
      children: "9.1 Validation Step Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Branch Safety Check (Step 1)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-1\n    name: Branch Safety Check\n    type: branch_safety_check\n    handler: release.branch_safety_check\n    mandatory: true\n    blocking: true\n    config:\n      use_validator: true\n      strict_mode: true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK pattern (3/9 projects)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Prevents cross-epic contamination"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Validation Step (Later in Workflow)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "steps:\n  - id: step-8\n    name: Run Validators\n    type: validation\n    handler: release.run_validators\n    required: true\n    config:\n      validators:\n        - validate_branch_context.py\n        - validate_changelog_format.py\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " All projects\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Universal pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Pre-Commit Validation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-commit hooks run validators automatically"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " confidentia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Advanced pattern (1/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-validation-script-patterns",
      children: "9.2 Validation Script Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Validation Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py"
        }), " - Branch/version/epic alignment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_changelog_format.py"
        }), " - Changelog format validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " - Version bump logic validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_drift.py"
        }), " - Framework drift detection"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch Context:"
        }), " All projects (universal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog Format:"
        }), " All projects (universal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Bump:"
        }), " ai-dev-kit, been-there, dev-toolkit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift Detection:"
        }), " fynd.deals"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-workflow-progress-tracking-patterns",
      children: "10. Workflow Progress Tracking Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-todo-tracking-patterns",
      children: "10.1 TODO Tracking Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Cursor TODO Tracking (Standard)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "todo_write(merge=False, todos=[\n    {'id': 'rw-step-1', 'status': 'pending', 'content': 'Step 1: Branch Safety Check'},\n    {'id': 'rw-step-2', 'status': 'pending', 'content': 'Step 2: Bump Version'},\n    # ... all steps\n])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " All projects (universal)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Universal pattern\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " User visibility, agent organization, error recovery"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: State Machine Pattern"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Only one step ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in_progress"
        }), " at a time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All others ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pending"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "completed"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "cancelled"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Advanced pattern (2/9 projects)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Atomicity Enforcement"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW must complete all steps or explicitly abort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot start new RW while previous RW TODOs exist"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " All projects (universal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Universal pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-recommendations-for-ultimate-canonical-structure",
      children: "11. Recommendations for \"Ultimate\" Canonical Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-workflow-file-structure",
      children: "11.1 Workflow File Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: YAML Workflow Files"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{workflow-name}-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/"
        }), " directory (project root) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/"
        }), " (framework)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " Standard YAML with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "type"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "description"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "steps"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-workflow-yaml-structure",
      children: "11.2 Workflow YAML Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: ADK Canonical Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: [Workflow Name]\nversion: [Version]\ntype: [workflow_type]\ndescription: [Description]\n\nconfig:\n  # Workflow-level configuration\n\nsteps:\n  - id: step-{number}\n    name: [Step Name]\n    type: [step_type]\n    handler: [handler_function]\n    required: true\n    mandatory: false  # true for blocking steps\n    blocking: false  # true for blocking steps\n    enabled: true\n    dependencies: []\n    config:\n      # Step-specific configuration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-workflow-configuration",
      children: "11.3 Workflow Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Config-Driven Approach"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Required Fields:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main_changelog"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog_dir"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts_path"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "readme_file"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional Fields:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "use_kanban"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_root"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic_doc_pattern"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story_doc_pattern"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "versioning_schema"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project_name"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-workflow-execution",
      children: "11.4 Workflow Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Agent-Driven Execution with Intelligence"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " ANALYZE → DETERMINE → EVALUATE → DECIDE → EXECUTE → VALIDATE → PROCEED"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agentic Intelligence:"
        }), " Task-driven validation, knowledge gap analysis, documentation generation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress Tracking:"
        }), " Cursor TODOs for all steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomicity:"
        }), " Complete all steps or explicitly abort"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intelligent Steps:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task-driven validation (blocks if no task)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Knowledge base gap analysis and article authoring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Context-aware decision-making throughout"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-release-workflow-steps",
      children: "11.5 Release Workflow Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: 12-Step RW (Canonical)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch Safety Check (mandatory, blocking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bump Version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Detailed Changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Main Changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update README (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update BR/FR Docs (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auto-update Kanban Docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stage Files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run Validators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit Changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Git Tag"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push to Remote"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Steps:"
      }), "\n13. PDCA Verification (optional)\n14. Summary (optional)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-summary-ultimate-canonical-workflow-structure",
      children: "12. Summary: \"Ultimate\" Canonical Workflow Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-file-structure",
      children: "12.1 File Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{workflow-name}-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/"
        }), " directory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-yaml-structure",
      children: "12.2 YAML Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Required Fields:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "type"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "description"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "steps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step Fields:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "type"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "handler"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "required"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dependencies"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional Step Fields:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mandatory"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blocking"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enabled"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-configuration",
      children: "12.3 Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " (config-driven approach)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Required Config:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main_changelog"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog_dir"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts_path"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "readme_file"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-execution",
      children: "12.4 Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " Agent-driven (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress Tracking:"
        }), " Cursor TODOs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomicity:"
        }), " Complete all steps or abort"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-release-workflow",
      children: "12.5 Release Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step Count:"
        }), " 12 steps (canonical) + 2 optional steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1:"
        }), " Branch Safety Check (mandatory, blocking)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Steps 2-12:"
        }), " Standard RW steps"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Completed:"
      }), " 2025-12-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Steps:"
      }), " Use this analysis to finalize canonical workflow structure in ADK frameworks"]
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