"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["20309"], {
28712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_ultimate_canonical_workflow_structure_md_4ad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-ultimate-canonical-workflow-structure-md-4ad.json
var site_docs_architecture_standards_and_adrs_ultimate_canonical_workflow_structure_md_4ad_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ultimate-canonical-workflow-structure","title":"Ultimate Canonical Workflow Structure","description":"Purpose: Definitive specification for the canonical workflow structure","source":"@site/../docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ultimate-canonical-workflow-structure","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T01:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Ultimate Canonical docs/documentation Structure","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure"},"next":{"title":"Versioning Error Reference Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/versioning-error-reference-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T01:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Ultimate Canonical Workflow Structure';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Workflow File Structure Specification",
  "id": "1-workflow-file-structure-specification",
  "level": 2
}, {
  "value": "1.1 File Naming",
  "id": "11-file-naming",
  "level": 3
}, {
  "value": "1.2 File Location",
  "id": "12-file-location",
  "level": 3
}, {
  "value": "2. Release Workflow (RW) Specification",
  "id": "2-release-workflow-rw-specification",
  "level": 2
}, {
  "value": "2.1 Canonical 13-Step Release Workflow",
  "id": "21-canonical-13-step-release-workflow",
  "level": 3
}, {
  "value": "2.2 Step 1: Branch Safety Check (MANDATORY BLOCKING)",
  "id": "22-step-1-branch-safety-check-mandatory-blocking",
  "level": 3
}, {
  "value": "2.3 Step 2: Task-Driven Validation (AGENTIC - MANDATORY BLOCKING)",
  "id": "23-step-2-task-driven-validation-agentic---mandatory-blocking",
  "level": 3
}, {
  "value": "2.4 Steps 3-8: Standard RW Steps",
  "id": "24-steps-3-8-standard-rw-steps",
  "level": 3
}, {
  "value": "3. Configuration Specification",
  "id": "3-configuration-specification",
  "level": 2
}, {
  "value": "3.1 Config File",
  "id": "31-config-file",
  "level": 3
}, {
  "value": "3.2 Config Structure",
  "id": "32-config-structure",
  "level": 3
}, {
  "value": "4. Execution Pattern Specification",
  "id": "4-execution-pattern-specification",
  "level": 2
}, {
  "value": "4.1 Agent-Driven Execution with Intelligence",
  "id": "41-agent-driven-execution-with-intelligence",
  "level": 3
}, {
  "value": "4.2 Progress Tracking",
  "id": "42-progress-tracking",
  "level": 3
}, {
  "value": "4.3 Atomicity",
  "id": "43-atomicity",
  "level": 3
}, {
  "value": "5. Validation Specification",
  "id": "5-validation-specification",
  "level": 2
}, {
  "value": "5.1 Branch Context Validation",
  "id": "51-branch-context-validation",
  "level": 3
}, {
  "value": "5.2 Task-Driven Validation (Agentic)",
  "id": "52-task-driven-validation-agentic",
  "level": 3
}, {
  "value": "5.3 Changelog Format Validation",
  "id": "53-changelog-format-validation",
  "level": 3
}, {
  "value": "6. Workflow YAML Structure Specification",
  "id": "6-workflow-yaml-structure-specification",
  "level": 2
}, {
  "value": "6.1 YAML Format",
  "id": "61-yaml-format",
  "level": 3
}, {
  "value": "7. Canonical Workflows Inventory",
  "id": "7-canonical-workflows-inventory",
  "level": 2
}, {
  "value": "7.1 Release Workflow (RW)",
  "id": "71-release-workflow-rw",
  "level": 3
}, {
  "value": "7.2 Intake Workflow",
  "id": "72-intake-workflow",
  "level": 3
}, {
  "value": "7.3 Package Version Workflow (PVW)",
  "id": "73-package-version-workflow-pvw",
  "level": 3
}, {
  "value": "7.4 Post-Implementation Review (PIR) Workflow",
  "id": "74-post-implementation-review-pir-workflow",
  "level": 3
}, {
  "value": "7.5 Migration Workflow",
  "id": "75-migration-workflow",
  "level": 3
}, {
  "value": "7.6 Refactor Workflow",
  "id": "76-refactor-workflow",
  "level": 3
}, {
  "value": "7.7 Testing Workflow",
  "id": "77-testing-workflow",
  "level": 3
}, {
  "value": "8. Complete Structure Example",
  "id": "8-complete-structure-example",
  "level": 2
}, {
  "value": "9. Validation Rules",
  "id": "9-validation-rules",
  "level": 2
}, {
  "value": "9.1 Workflow File Validation",
  "id": "91-workflow-file-validation",
  "level": 3
}, {
  "value": "9.2 Execution Validation",
  "id": "92-execution-validation",
  "level": 3
}, {
  "value": "10. Implementation",
  "id": "10-implementation",
  "level": 2
}, {
  "value": "10.1 Installation",
  "id": "101-installation",
  "level": 3
}, {
  "value": "9.2 Execution",
  "id": "92-execution",
  "level": 3
}, {
  "value": "11. Workflow Summary Table",
  "id": "11-workflow-summary-table",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        id: "ultimate-canonical-workflow-structure",
        children: "Ultimate Canonical Workflow Structure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Definitive specification for the canonical workflow structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part of:"
      }), " E6:S06", ":T06", " – Cross-project meta-analysis and canonical framework design", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supersedes:"
      }), " All previous workflow structure specifications"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Based on:"
      }), " Comprehensive meta-analysis of 10 projects (9 client implementations + ai-dev-kit source)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Workflows:"
      }), " 7 workflows documented (RW, Intake, PVW, PIR, Migration, Refactor, Testing)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "defines the ultimate canonical workflow structure"
      }), " for ADK framework implementations. This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "definitive specification"
      }), " that all projects should adopt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Ultimate Canonical Workflow Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework package (FR-050):"
        }), " Under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/"
        }), ", each workflow lives in a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "named subdirectory"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-registry.yaml"
        }), " as discovery SoT. Legacy flat ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/*.yaml"
        }), " files at the package root are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deprecated redirect stubs"
        }), " only (E02:S13", ":T09", "). See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/workflows/MIGRATION_GUIDE.md",
          children: "MIGRATION_GUIDE.md"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{project-root}/\n├── workflows/                       # Project workflows (adopter copy)\n│   ├── release-workflow/            # Preferred: nested layout (FR-050)\n│   │   └── release-workflow.yaml\n│   └── ...\n├── rw-config.yaml                   # Release Workflow configuration (canonical)\n└── packages/frameworks/workflow-mgt/workflows/  # Framework source\n    ├── workflow-registry.yaml       # Discovery SoT\n    ├── release-workflow/\n    │   └── release-workflow.yaml\n    └── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow (RW)"
        }), " - 13-step release process with agentic intelligence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake Workflow"
        }), " - 7-step FR/BR/UXR intake into Kanban"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Version Workflow (PVW)"
        }), " - Package version bumping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Post-Implementation Review (PIR) Workflow"
        }), " - PIR review process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Workflow"
        }), " - Data/structure migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor Workflow"
        }), " - Code refactoring automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing Workflow"
        }), " - Test execution and validation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Specifications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{workflow-name}-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow:"
        }), " 13-step RW with mandatory branch safety check and agentic intelligence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake Workflow:"
        }), " 7-step automated FR/BR/UXR intake with semantic matching"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration:"
        }), " Workflow-specific config files (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-config.yaml"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution:"
        }), " Agent-driven with intelligent decision-making (ANALYZE → DETERMINE → EVALUATE → DECIDE → EXECUTE → VALIDATE → PROCEED)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agentic Intelligence:"
        }), " Task-driven validation, knowledge gap analysis, documentation generation, semantic matching"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress Tracking:"
        }), " Cursor TODO tracking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-workflow-file-structure-specification",
      children: "1. Workflow File Structure Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-file-naming",
      children: "1.1 File Naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{workflow-name}-workflow.yaml"
      }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "release-workflow.yaml"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow.yaml"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "package-version-workflow.yaml"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-file-location",
      children: "1.2 File Location"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL (framework package):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/workflows/{workflow-name}/{workflow-name}-workflow.yaml"
      }), " per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
        children: "FR-050"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-registry.yaml"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL (adopter project root):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflows/"
      }), " directory — prefer nested subdirectories matching the framework layout; flat root YAML is legacy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (framework package):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/workflows/\n├── workflow-registry.yaml\n├── release-workflow/\n│   └── release-workflow.yaml\n└── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-release-workflow-rw-specification",
      children: "2. Release Workflow (RW) Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-canonical-13-step-release-workflow",
      children: "2.1 Canonical 13-Step Release Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " 13-step Release Workflow with agentic intelligence"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "🚨 MANDATORY BLOCKING: Branch Safety Check"
        }), " - CRITICAL: Prevents cross-epic contamination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "🤖 AGENTIC: Task-Driven Validation"
        }), " - CRITICAL: Validates work is task-driven, blocks if no task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bump Version"
        }), " - Update version file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Detailed Changelog"
        }), " - Generate detailed changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Main Changelog"
        }), " - Add summary entry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update README"
        }), " - Update version badge (optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update BR/FR Docs"
        }), " - Document fix attempts (optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-update Kanban Docs"
        }), " - Update Epic/Story/Task docs with version markers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "🤖 AGENTIC: Update Knowledge Base"
        }), " - Update existing docs, evaluate gaps, author new articles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage Files"
        }), " - Stage all modified files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run Validators"
        }), " - Execute branch context and changelog format validators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit Changes"
        }), " - Create git commit with versioned message"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Git Tag"
        }), " - Create annotated tag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push to Remote"
        }), " - Push branch and tags"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-step-1-branch-safety-check-mandatory-blocking",
      children: "2.2 Step 1: Branch Safety Check (MANDATORY BLOCKING)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " Mandatory, blocking branch safety check"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py --strict\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current branch matches expected epic number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version matches branch context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task document exists (if applicable)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failure Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BLOCKING:"
        }), " Workflow aborts if validation fails"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User must fix branch context before proceeding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear error messages provided"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-step-2-task-driven-validation-agentic---mandatory-blocking",
      children: "2.3 Step 2: Task-Driven Validation (AGENTIC - MANDATORY BLOCKING)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " Agentic validation that work is task-driven"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agentic Intelligence Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ANALYZE:"
        }), " Examine staged changes and current version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DETERMINE:"
        }), " Identify if work corresponds to a Kanban task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VALIDATE:"
        }), " Check if Task document exists for current version (E{epic}", ":S", "{story}", ":T", "{task})"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DECIDE:"
        }), " If no task exists → BLOCK workflow, provide feedback to user"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Agent must:\n1. Parse current version: VERSION_EPIC, VERSION_STORY, VERSION_TASK\n2. Construct expected Task document path: docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*/Task-{task}-*.md\n3. Check if Task document exists\n4. If NO TASK DOCUMENT:\n   - BLOCK workflow execution\n   - Provide clear feedback: \"No Kanban task found for version {version}. Work must be task-driven.\"\n   - Suggest: \"Create task document or verify version matches existing task.\"\n   - Abort workflow\n5. If TASK DOCUMENT EXISTS:\n   - Verify task status (should be IN PROGRESS or similar)\n   - Proceed to Step 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failure Handling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BLOCKING:"
        }), " Workflow aborts if no task document found"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User must create task or correct version before proceeding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear error messages with actionable guidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-steps-3-8-standard-rw-steps",
      children: "2.4 Steps 3-8: Standard RW Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Bump Version"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Load config from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version comment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Create Detailed Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Load config from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog_dir"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.N.NNN.T+B.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include DO/CHECK/ACT phases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Update Main Changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Load config from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main_changelog"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add summary entry to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow Keep a Changelog format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: Update README"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Load config from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "readme_file"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update version badge: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "![Version](https://img.shields.io/badge/version-v0.N.NNN.T%2BB-blue.svg)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7: Update BR/FR Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If BR/FR documents are linked, update them with fix attempts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 8: Auto-update Kanban Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Load config from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_root"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic_doc_pattern"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story_doc_pattern"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_doc_pattern"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic document with version marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story document with version marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Task document with version marker (decomposed Kanban structure)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 9: Update Knowledge Base (AGENTIC)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ANALYZE:"
        }), " Examine changes made in this release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DETERMINE:"
        }), " Identify which knowledge base documents may need updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EVALUATE:"
        }), " Agent evaluates if documentation gaps exist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DECIDE:"
        }), " Should we create new documentation?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AUTHOR:"
        }), " If gap identified, agent can author new knowledge base article(s)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agentic Intelligence Required:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Agent must:\n1. Analyze staged changes and changelog content\n2. Identify knowledge base areas affected:\n   - Architecture docs (if structural changes)\n   - Analysis docs (if patterns discovered)\n   - Use cases (if new patterns emerged)\n   - Reviews (if applicable)\n3. Check for existing knowledge base docs that reference changed areas\n4. Update pre-existing knowledge base docs with new information\n5. EVALUATE documentation gaps:\n   - Is there a pattern/insight that should be documented?\n   - Would a knowledge base article be valuable?\n   - Can the agent author a new article?\n6. If gap identified and agent can author:\n   - Create new knowledge base article in appropriate location\n   - Follow canonical knowledge base structure\n   - Include proper frontmatter and metadata\n7. If gap identified but agent cannot author:\n   - Flag for user review\n   - Suggest article topic and location\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 10: Stage Files"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git add -A"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stage all modified files (including any new knowledge base articles)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 11: Run Validators"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py --strict"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_changelog_format.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 12: Commit Changes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git commit -m \"Release v0.N.NNN.T+B: \\{description\\}\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 13: Create Git Tag"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag -a \"v0.N.NNN.T+B\" -m \"Release v0.N.NNN.T+B: \\{description\\}\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 14: Push to Remote"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push origin {branch} --tags"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-configuration-specification",
      children: "3. Configuration Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-config-file",
      children: "3.1 Config File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " in project root"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{project-root}/rw-config.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-config-structure",
      children: "3.2 Config Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL FORMAT:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version_file: src/{project}/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nuse_kanban: true\nkanban_root: docs/project-management/kanban\nepic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md\nstory_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md\ntask_doc_pattern: epics/Epic-{epic}/Story-{story}-*/Task-{task}-*.md\nknowledge_base_root: docs/knowledge\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Config:"
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
        }), ": Path to workflow scripts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Config:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "readme_file"
        }), ": Path to README file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "use_kanban"
        }), ": Whether to update Kanban docs"]
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
          children: "task_doc_pattern"
        }), ": Task document pattern (required if use_kanban: true)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_base_root"
        }), ": Path to knowledge base root"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-execution-pattern-specification",
      children: "4. Execution Pattern Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-agent-driven-execution-with-intelligence",
      children: "4.1 Agent-Driven Execution with Intelligence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " ANALYZE → DETERMINE → EVALUATE → DECIDE → EXECUTE → VALIDATE → PROCEED"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ANALYZE:"
        }), " Analyze current state, requirements, and context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DETERMINE:"
        }), " Determine actions needed based on analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EVALUATE:"
        }), " Evaluate options, gaps, and opportunities (agentic intelligence)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DECIDE:"
        }), " Make intelligent decisions (e.g., task validation, documentation gaps)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EXECUTE:"
        }), " Execute actions with user approval"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VALIDATE:"
        }), " Validate results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PROCEED:"
        }), " Proceed to next step or abort"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agentic Intelligence Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2:"
        }), " Task-driven validation (must have Kanban task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 9:"
        }), " Knowledge base gap analysis and article authoring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Throughout:"
        }), " Intelligent decision-making based on context"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-progress-tracking",
      children: "4.2 Progress Tracking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " Cursor TODO tracking"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- [x] Step 1: Branch Safety Check - completed\n- [x] Step 2: Bump Version - completed\n- [ ] Step 3: Create Detailed Changelog - in_progress\n- [ ] Step 4: Update Main Changelog - pending\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-atomicity",
      children: "4.3 Atomicity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " Complete all steps or abort"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All steps must complete successfully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Abort on any step failure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback on failure (if applicable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear error messages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-validation-specification",
      children: "5. Validation Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-branch-context-validation",
      children: "5.1 Branch Context Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_branch_context.py --strict"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py --strict\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current branch matches expected epic number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version matches branch context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task document exists (if applicable)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-task-driven-validation-agentic",
      children: "5.2 Task-Driven Validation (Agentic)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " Agent validates work is task-driven before proceeding"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Agent analyzes current version (E{epic}", ":S", "{story}", ":T", "{task})"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Agent constructs expected Task document path using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_doc_pattern"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent checks if Task document exists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no task: BLOCK workflow, provide feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If task exists: Proceed to version bump"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task document must exist for current version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task must be in appropriate status (IN PROGRESS, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work must be traceable to Kanban task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-changelog-format-validation",
      children: "5.3 Changelog Format Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_changelog_format.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_changelog_format.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog format matches Keep a Changelog standard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version ordering (newest first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entry format correctness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-workflow-yaml-structure-specification",
      children: "6. Workflow YAML Structure Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-yaml-format",
      children: "6.1 YAML Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL FORMAT:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "workflow:\n  name: release-workflow\n  description: Canonical 12-step Release Workflow\n  steps:\n    - step: 1\n      name: Branch Safety Check\n      handler: validate_branch_context\n      blocking: true\n      mandatory: true\n    - step: 2\n      name: Task-Driven Validation\n      handler: validate_task_driven\n      blocking: true\n      mandatory: true\n      agentic: true\n    - step: 3\n      name: Bump Version\n      handler: bump_version\n      blocking: true\n      mandatory: true\n    # ... additional steps\n    - step: 9\n      name: Update Knowledge Base\n      handler: update_knowledge_base\n      blocking: false\n      mandatory: false\n      agentic: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "step"
        }), ": Step number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ": Step name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "handler"
        }), ": Handler function/script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "blocking"
        }), ": Whether step blocks workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "mandatory"
        }), ": Whether step is mandatory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agentic"
        }), ": Whether step requires agentic intelligence (default: false)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-canonical-workflows-inventory",
      children: "7. Canonical Workflows Inventory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-release-workflow-rw",
      children: "7.1 Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Automated release process with version bumping, changelog generation, and Git operations", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "release"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      }), " 13 steps (with agentic intelligence)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " User types \"RW\" or \"Release Workflow\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task-driven validation (MANDATORY BLOCKING)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge base gap analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decomposed Kanban structure support (Epic/Story/Task)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "See Section 2 for complete specification."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-intake-workflow",
      children: "7.2 Intake Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Automated FR/BR/UXR intake into Kanban system", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "intake"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      }), " 7 steps", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " User types \"Intake\" or FR/BR/UXR commit detected", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "intake-config.yaml"
      }), " (optional, can use defaults)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical 7-Step Intake Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load & Parse FR/BR/UXR Document"
        }), " - Load and parse FR/BR/UXR document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision Flow Analysis (AGENTIC)"
        }), " - Analyze and determine Epic/Story/Task assignment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create/Update Kanban Tasks"
        }), " - Create or update Kanban tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update FR/BR/UXR Documentation"
        }), " - Update intake documentation with status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wire Dependencies"
        }), " - Wire dependencies and references"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assign Version Marker"
        }), " - Assign version marker (doc-init build +0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate & Commit"
        }), " - Validate intake and commit changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agentic Intelligence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2:"
        }), " Semantic matching for Epic/Story assignment (uses E4", ":S08", " intelligent epic matching)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3:"
        }), " Agentic task creation (uses E4", ":S10", " agentic task creation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5:"
        }), " Intelligent dependency wiring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "fr_br_dir: docs/project-management/kanban/fr-br\nkanban_dir: docs/project-management/kanban/epics\nversion_file: src/{project}/version.py\nsemantic_matching:\n  enabled: true\n  threshold: 0.7\n  use_e4s08: true\ntask_creation:\n  use_e4s10: true\n  template_path: packages/frameworks/kanban/templates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-package-version-workflow-pvw",
      children: "7.3 Package Version Workflow (PVW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Intelligent package version bumping", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package_version"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      }), " 6 steps", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " User types \"PVW\" or triggered by RW Step 2.5", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config:"
      }), " Package-specific config"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical 6-Step PVW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detect Changed Packages"
        }), " - Analyze git diff to identify changed packages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze Package Changes"
        }), " - Read package files, identify what changed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determine Version Bumps (AGENTIC)"
        }), " - Analyze changes against criteria, determine bump type intelligently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute Version Updates"
        }), " - Update README, create changelog, document justification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Updates"
        }), " - Run validation scripts as tools, verify format/consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document & Proceed"
        }), " - Document changes, pass to RW Step 3"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agentic Intelligence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3:"
        }), " Intelligent version bump determination (not deterministic)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses version bump criteria as guidance, not hard rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents reasoning and justification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-post-implementation-review-pir-workflow",
      children: "7.4 Post-Implementation Review (PIR) Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Automated PIR review process", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pir"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      }), " Variable (Epic-level and Story-level PIRs)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " User types \"PIR\" or completion milestone", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config:"
      }), " PIR-specific config"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PIR Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic-Level PIR:"
        }), " Review entire epic completion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story-Level PIR:"
        }), " Review story completion"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load Epic/Story Context"
        }), " - Load Epic or Story document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze Completion Status"
        }), " - Analyze task completion and deliverables"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate PIR Report"
        }), " - Generate PIR report using template"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review & Validate"
        }), " - Review findings and validate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Documentation"
        }), " - Update Epic/Story with PIR findings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Archive PIR"
        }), " - Archive PIR to knowledge base"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-migration-workflow",
      children: "7.5 Migration Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Data/structure migration automation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "migration"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      }), " Variable (migration-specific)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " User types \"Migration\" or migration milestone", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config:"
      }), " Migration-specific config"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze Source State"
        }), " - Analyze current state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan Migration Strategy"
        }), " - Plan migration approach"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute Migration Steps"
        }), " - Execute migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Migration"
        }), " - Validate migration results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback Plan"
        }), " - Prepare rollback if needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-refactor-workflow",
      children: "7.6 Refactor Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Code refactoring automation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "refactor"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      }), " Variable (refactor-specific)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " User types \"Refactor\" or refactor milestone", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config:"
      }), " Refactor-specific config"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze Current Code"
        }), " - Analyze code to refactor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan Refactoring"
        }), " - Plan refactoring approach"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute Refactoring"
        }), " - Execute refactoring changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Changes"
        }), " - Validate refactored code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Documentation"
        }), " - Update documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-testing-workflow",
      children: "7.7 Testing Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Test execution and validation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "testing"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      }), " Variable (test-specific)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " User types \"Test\" or test milestone", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config:"
      }), " Test-specific config"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze Test Requirements"
        }), " - Analyze what to test"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prepare Test Environment"
        }), " - Set up test environment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute Tests"
        }), " - Run test suite"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Results"
        }), " - Validate test results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Report Findings"
        }), " - Generate test report"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-complete-structure-example",
      children: "8. Complete Structure Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL STRUCTURE:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{project-root}/\n├── workflows/                       # Project workflows (canonical)\n│   ├── release-workflow.yaml\n│   ├── intake-workflow.yaml\n│   ├── package-version-workflow.yaml\n│   ├── pir-workflow.yaml\n│   ├── migration-workflow.yaml\n│   ├── refactor-workflow.yaml\n│   └── testing-workflow.yaml\n├── rw-config.yaml                   # Release Workflow config\n├── intake-config.yaml               # Intake Workflow config (optional)\n├── packages/frameworks/workflow-mgt/\n│   └── workflows/                  # Framework workflows\n│       ├── release-workflow.yaml\n│       ├── intake-workflow.yaml\n│       ├── package-version-workflow.yaml\n│       ├── pir-workflow.yaml\n│       ├── migration-workflow.yaml\n│       ├── refactor-workflow.yaml\n│       └── testing-workflow.yaml\n└── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-validation-rules",
      children: "9. Validation Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-workflow-file-validation",
      children: "9.1 Workflow File Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflow file naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{workflow-name}-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflow file location: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/"
        }), " or framework location"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YAML structure is valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step definitions are complete"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-execution-validation",
      children: "9.2 Execution Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch safety check passes (Step 1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task-driven validation passes (Step 2) - CRITICAL: Work must be task-driven"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All mandatory steps complete successfully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators pass (Step 11)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No blocking errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge base updates complete (Step 9)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-implementation",
      children: "10. Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-installation",
      children: "10.1 Installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL METHOD:"
      }), " Create workflow files and config following this specification"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Installation Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/"
        }), " directory in project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Install canonical workflows:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow.yaml"
            }), " (required)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "intake-workflow.yaml"
            }), " (recommended)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "package-version-workflow.yaml"
            }), " (if using packages)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Other workflows as needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create workflow config files:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " (required for RW)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "intake-config.yaml"
            }), " (optional, can use defaults)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure workflow handlers and scripts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-execution",
      children: "9.2 Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL METHOD:"
      }), " Agent-driven execution via ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " RW trigger"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution Process (All Workflows):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Workflow (RW):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User types \"RW\" or \"Release Workflow\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent analyzes current state and context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent validates branch safety (Step 1)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent validates task-driven work (Step 2)"
        }), " - CRITICAL: Blocks if no task"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent determines actions needed for each step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent executes steps with user approval"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent evaluates knowledge base gaps (Step 9)"
        }), " - Can author new articles"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent validates results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent proceeds to next step or aborts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User types \"Intake\" or FR/BR/UXR commit detected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent loads and parses FR/BR/UXR document"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent performs decision flow analysis (Step 2)"
        }), " - Semantic matching for Epic/Story"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent creates/updates Kanban tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent updates FR/BR/UXR documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent wires dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent assigns version marker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent validates and commits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Version Workflow (PVW):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User types \"PVW\" or triggered by RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent detects changed packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent analyzes package changes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent determines version bumps intelligently (Step 3)"
        }), " - Not deterministic"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent executes version updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent validates and documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Other Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow similar agent-driven execution pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ANALYZE → DETERMINE → EVALUATE → DECIDE → EXECUTE → VALIDATE → PROCEED"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agentic Intelligence Highlights:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 2:"
        }), " Must validate work is task-driven before proceeding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 9:"
        }), " Evaluates documentation gaps and can author new knowledge base articles"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake Step 2:"
        }), " Semantic matching for Epic/Story assignment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake Step 3:"
        }), " Agentic task creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PVW Step 3:"
        }), " Intelligent version bump determination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Throughout:"
        }), " Intelligent decision-making based on context and analysis"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-workflow-summary-table",
      children: "11. Workflow Summary Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Workflow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Agentic Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Config File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Release Workflow (RW)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 2, Step 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"RW\" or \"Release Workflow\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intake Workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 2, Step 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "intake-config.yaml"
            }), " (optional)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Intake\" or FR/BR/UXR commit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Package Version Workflow (PVW)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "package_version"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"PVW\" or RW Step 2.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PIR Workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pir"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIR config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"PIR\" or milestone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Migration Workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "migration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Migration\" or milestone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refactor Workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "refactor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refactor config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Refactor\" or milestone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testing Workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Test\" or milestone"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Legend:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agentic Steps:"
        }), " Steps requiring agentic intelligence (not deterministic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config File:"
        }), " Configuration file for workflow (required or optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trigger:"
        }), " How workflow is invoked"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE"]
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