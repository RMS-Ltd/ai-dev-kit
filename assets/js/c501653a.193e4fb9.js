"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["31058"], {
57533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_050_workflows_directory_structure_reorganization_md_c50_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-050-workflows-directory-structure-reorganization-md-c50.json
var site_docs_project_management_kanban_fr_br_fr_050_workflows_directory_structure_reorganization_md_c50_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization","title":"FR-050: Workflows Directory Structure Reorganization","description":"StatusS13:T09)","source":"@site/../docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-09T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request FR-050 – UKW Extension for FR/BR/UXR Temporal Tracking and Synchronization","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization"},"next":{"title":"FR-051 – FR/BR/UXR Prioritization Board","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-051-fr-br-uxr-prioritization-board"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-09T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-050: Workflows Directory Structure Reorganization';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Current State Analysis",
  "id": "current-state-analysis",
  "level": 2
}, {
  "value": "Current Directory Structure",
  "id": "current-directory-structure",
  "level": 3
}, {
  "value": "Issues Identified",
  "id": "issues-identified",
  "level": 3
}, {
  "value": "Proposed Solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "1. Create Workflow-Named Subdirectories",
  "id": "1-create-workflow-named-subdirectories",
  "level": 3
}, {
  "value": "2. Standardize Workflow Directory Structure",
  "id": "2-standardize-workflow-directory-structure",
  "level": 3
}, {
  "value": "3. Create Workflow Registry",
  "id": "3-create-workflow-registry",
  "level": 3
}, {
  "value": "4. Update Workflow Discovery",
  "id": "4-update-workflow-discovery",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 3
}, {
  "value": "Implementation Plan",
  "id": "implementation-plan",
  "level": 2
}, {
  "value": "Phase 1: Analysis and Planning (Day 1)",
  "id": "phase-1-analysis-and-planning-day-1",
  "level": 3
}, {
  "value": "Phase 2: Create New Structure (Day 1)",
  "id": "phase-2-create-new-structure-day-1",
  "level": 3
}, {
  "value": "Phase 3: Migrate Existing Workflows (Day 1-2)",
  "id": "phase-3-migrate-existing-workflows-day-1-2",
  "level": 3
}, {
  "value": "Phase 4: Update References (Day 2)",
  "id": "phase-4-update-references-day-2",
  "level": 3
}, {
  "value": "Phase 5: Testing and Validation (Day 2)",
  "id": "phase-5-testing-and-validation-day-2",
  "level": 3
}, {
  "value": "Phase 6: Cleanup (Day 2)",
  "id": "phase-6-cleanup-day-2",
  "level": 3
}, {
  "value": "Risks and Mitigations",
  "id": "risks-and-mitigations",
  "level": 2
}, {
  "value": "Risk: Broken References",
  "id": "risk-broken-references",
  "level": 3
}, {
  "value": "Risk: Workflow Execution Failure",
  "id": "risk-workflow-execution-failure",
  "level": 3
}, {
  "value": "Risk: Discovery Mechanism Issues",
  "id": "risk-discovery-mechanism-issues",
  "level": 3
}, {
  "value": "Timeline",
  "id": "timeline",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "Success Metrics",
  "id": "success-metrics",
  "level": 2
}, {
  "value": "Stakeholder Review",
  "id": "stakeholder-review",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "fr-050-workflows-directory-structure-reorganization",
        children: "FR-050: Workflows Directory Structure Reorganization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPLEMENTED"
      }), " (v0.2.13.9+1 — E02:S13", ":T09", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization",
        children: ["E02:S13", ":T09"]
      }), " (filed from ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks",
        children: ["E02:S13", ":T06"]
      }), " — GAP-WFMGT-STRUCT-001). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization",
        children: ["E06:S07", ":T107"]
      }), "; prior miswire corrected 2026-05-30 per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization",
        children: "IPP-E6S7T107"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH — RC remediation (was MEDIUM)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " Medium", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-03-09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.13.9+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E02:S13", ":T09"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The workflows directory ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/Users/rms/Documents/projects/ai-dev-kit/packages/frameworks/workflow-mgt/workflows"
      }), " is currently unmanaged and lacks proper organization. Workflow files are not organized into workflow-named subdirectories, making it difficult to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Locate specific workflows"
        }), " - Files are scattered without clear grouping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintain workflow organization"
        }), " - No consistent structure for workflow definitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scale workflow management"
        }), " - Adding new workflows lacks clear placement guidelines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prevent file conflicts"
        }), " - Risk of filename collisions and confusion"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "current-state-analysis",
      children: "Current State Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "current-directory-structure",
      children: "Current Directory Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "workflows/\n├── rw/                    # Mixed workflow files\n│   ├── release-workflow.yaml\n│   ├── other-files...\n└── [unorganized files]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issues-identified",
      children: "Issues Identified"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flat Structure"
        }), " - All workflow files in single directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mixed Content"
        }), " - Different workflow types intermingled"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Clear Boundaries"
        }), " - Difficult to identify workflow scope"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Burden"
        }), " - Hard to find and update specific workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability Issues"
        }), " - Adding new workflows creates confusion"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-create-workflow-named-subdirectories",
      children: "1. Create Workflow-Named Subdirectories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reorganize workflows into individual subdirectories by workflow name:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "workflows/\n├── release-workflow/      # RW - Release Workflow\n│   ├── release-workflow.yaml\n│   ├── release-steps.yaml\n│   ├── release-config.yaml\n│   └── release-docs.md\n├── changelog-management-workflow/  # CMW\n│   ├── cmw-workflow.yaml\n│   ├── cmw-config.yaml\n│   └── cmw-steps.yaml\n├── update-kanban-workflow/  # UKW\n│   ├── ukw-workflow.yaml\n│   ├── ukw-config.yaml\n│   └── ukw-steps.yaml\n├── post-implementation-review/  # PIR\n│   ├── pir-workflow.yaml\n│   ├── pir-config.yaml\n│   └── pir-checklist.yaml\n└── common/               # Shared workflow components\n    ├── templates/\n    ├── schemas/\n    └── utilities/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-standardize-workflow-directory-structure",
      children: "2. Standardize Workflow Directory Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each workflow subdirectory should follow this pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{workflow-name}/\n├── {workflow-name}-workflow.yaml    # Main workflow definition\n├── {workflow-name}-config.yaml      # Configuration parameters\n├── {workflow-name}-steps.yaml       # Step definitions (if custom)\n├── {workflow-name}-docs.md          # Workflow documentation\n└── tests/                          # Workflow-specific tests\n    ├── test_{workflow-name}.py\n    └── fixtures/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-create-workflow-registry",
      children: "3. Create Workflow Registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow-registry.yaml"
      }), " file to track all workflows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "workflow_registry:\n  version: \"1.0.0\"\n  last_updated: \"2026-03-09\"\n  \n  workflows:\n    release-workflow:\n      name: \"Release Workflow\"\n      abbreviation: \"RW\"\n      description: \"Complete release process with version management\"\n      directory: \"release-workflow/\"\n      main_file: \"release-workflow.yaml\"\n      triggers: [\"RW\", \"RW -k\", \"RW -d\"]\n      steps: 17\n      \n    changelog-management-workflow:\n      name: \"Changelog Management Workflow\"\n      abbreviation: \"CMW\"\n      description: \"Manage changelog size and organization\"\n      directory: \"changelog-management-workflow/\"\n      main_file: \"cmw-workflow.yaml\"\n      triggers: [\"CMW\"]\n      steps: 5\n      \n    update-kanban-workflow:\n      name: \"Update Kanban Workflow\"\n      abbreviation: \"UKW\"\n      description: \"Update Kanban board documentation\"\n      directory: \"update-kanban-workflow/\"\n      main_file: \"ukw-workflow.yaml\"\n      triggers: [\"UKW\"]\n      steps: 8\n      \n    post-implementation-review:\n      name: \"Post-Implementation Review\"\n      abbreviation: \"PIR\"\n      description: \"Review implementation after release\"\n      directory: \"post-implementation-review/\"\n      main_file: \"pir-workflow.yaml\"\n      triggers: [\"PIR\"]\n      steps: 6\n      \n  common_components:\n    templates: \"common/templates/\"\n    schemas: \"common/schemas/\"\n    utilities: \"common/utilities/\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-update-workflow-discovery",
      children: "4. Update Workflow Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modify workflow loading mechanisms to use the new structure:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update workflow orchestrator"
        }), " to read from workflow registry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modify discovery scripts"
        }), " to search subdirectories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update documentation"
        }), " to reflect new organization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create migration scripts"
        }), " for existing workflows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Directory Structure Created"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All workflows moved to named subdirectories"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consistent structure across all workflow directories"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Common directory for shared components"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow Registry Implemented"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete registry of all workflows"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Metadata for each workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Easy discovery and loading"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Migration Completed"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Existing workflows moved to new structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No broken references or imports"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All functionality preserved"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation Updated"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "README reflects new structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Workflow documentation updated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration guide provided"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Backward Compatibility"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Existing workflow functionality unchanged"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No breaking changes to workflow execution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Graceful migration path"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maintainability"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear organization makes workflows easy to find"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consistent structure simplifies maintenance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Easy to add new workflows"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Scalability"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Structure supports many workflows"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No naming conflicts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear boundaries between workflows"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-plan",
      children: "Implementation Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-analysis-and-planning-day-1",
      children: "Phase 1: Analysis and Planning (Day 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inventory all existing workflow files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map current files to new structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify dependencies and references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create migration plan"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-create-new-structure-day-1",
      children: "Phase 2: Create New Structure (Day 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create workflow subdirectories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up common directory structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create workflow registry template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establish naming conventions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-migrate-existing-workflows-day-1-2",
      children: "Phase 3: Migrate Existing Workflows (Day 1-2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Move Release Workflow files to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Organize CMW files to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-management-workflow/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Structure UKW files to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update-kanban-workflow/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Arrange PIR files to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "post-implementation-review/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up common shared components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-update-references-day-2",
      children: "Phase 4: Update References (Day 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update workflow orchestrator paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modify import statements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix configuration file paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-5-testing-and-validation-day-2",
      children: "Phase 5: Testing and Validation (Day 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all workflow discovery mechanisms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate workflow execution still works"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test new workflow registry functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify documentation accuracy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-6-cleanup-day-2",
      children: "Phase 6: Cleanup (Day 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove old empty directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update README and guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create maintenance documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Final validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "risks-and-mitigations",
      children: "Risks and Mitigations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk-broken-references",
      children: "Risk: Broken References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Comprehensive search for all file references"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fallback:"
        }), " Keep backup of original structure during migration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk-workflow-execution-failure",
      children: "Risk: Workflow Execution Failure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Test each workflow after migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback:"
        }), " Maintain original structure in parallel during testing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk-discovery-mechanism-issues",
      children: "Risk: Discovery Mechanism Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Update all loading code before migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing:"
        }), " Comprehensive testing of workflow discovery"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "timeline",
      children: "Timeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Day 1:"
        }), " Analysis, create structure, begin migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Day 2:"
        }), " Complete migration, update references, testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total:"
        }), " 2 days"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-049 (Canonical RW Steps) - Must reference canonical definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing workflow infrastructure - Required for integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow orchestrator - Must be updated for new paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "success-metrics",
      children: "Success Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization"
        }), " - All workflows in named subdirectories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discoverability"
        }), " - Easy to find any workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintainability"
        }), " - Clear structure for adding new workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functionality"
        }), " - All workflows work as before"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation"
        }), " - Clear guides for new structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stakeholder-review",
      children: "Stakeholder Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Status:"
      }), " TODO", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reviewers:"
      }), " TBD", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Date:"
      }), " TBD", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approval Status:"
      }), " TODO"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This FR establishes a proper directory structure for workflow management, improving organization, maintainability, and scalability of the workflow system."
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