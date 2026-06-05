"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["42917"], {
96788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_049_canonical_rw_step_list_single_source_of_truth_md_21e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-049-canonical-rw-step-list-single-source-of-truth-md-21e.json
var site_docs_project_management_kanban_fr_br_fr_049_canonical_rw_step_list_single_source_of_truth_md_21e_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth","title":"FR-049: Canonical RW Step List - Single Source of Truth","description":"Status: ✅ COMPLETE","source":"@site/../docs/project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-09T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-048: RW Trigger Extensions for Multiple Use Cases","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-048-rw-trigger-extensions-for-multiple-use-cases"},"next":{"title":"Feature Request FR-049: Enhanced kanban-completed.md with Timestamps and Recent Tasks Tracking","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-049-enhanced-kanban-completed-with-timestamps-and-recent-tasks"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-09T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-049: Canonical RW Step List - Single Source of Truth';

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
  "value": "Locations with RW Step Definitions",
  "id": "locations-with-rw-step-definitions",
  "level": 3
}, {
  "value": "Step 13 Definition Issues",
  "id": "step-13-definition-issues",
  "level": 3
}, {
  "value": "Proposed Solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "1. Create Canonical Step List Definition",
  "id": "1-create-canonical-step-list-definition",
  "level": 3
}, {
  "value": "2. Update All References to Use Canonical Definition",
  "id": "2-update-all-references-to-use-canonical-definition",
  "level": 3
}, {
  "value": "3. Create Validation Script",
  "id": "3-create-validation-script",
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
  "value": "Phase 1: Create Canonical Definition (Day 1)",
  "id": "phase-1-create-canonical-definition-day-1",
  "level": 3
}, {
  "value": "Phase 2: Update Core Components (Day 1-2)",
  "id": "phase-2-update-core-components-day-1-2",
  "level": 3
}, {
  "value": "Phase 3: Update Documentation (Day 2)",
  "id": "phase-3-update-documentation-day-2",
  "level": 3
}, {
  "value": "Phase 4: Validation &amp; Testing (Day 2)",
  "id": "phase-4-validation--testing-day-2",
  "level": 3
}, {
  "value": "Phase 5: Cleanup (Day 2)",
  "id": "phase-5-cleanup-day-2",
  "level": 3
}, {
  "value": "Risks and Mitigations",
  "id": "risks-and-mitigations",
  "level": 2
}, {
  "value": "Risk: Breaking Changes",
  "id": "risk-breaking-changes",
  "level": 3
}, {
  "value": "Risk: Loading Performance",
  "id": "risk-loading-performance",
  "level": 3
}, {
  "value": "Risk: Complex Dependencies",
  "id": "risk-complex-dependencies",
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
}, {
  "value": "Implementation Summary",
  "id": "implementation-summary",
  "level": 2
}, {
  "value": "✅ COMPLETED - 2026-03-09",
  "id": "-completed---2026-03-09",
  "level": 3
}, {
  "value": "What Was Implemented",
  "id": "what-was-implemented",
  "level": 3
}, {
  "value": "Key Benefits Achieved",
  "id": "key-benefits-achieved",
  "level": 3
}, {
  "value": "Testing",
  "id": "testing",
  "level": 3
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
        id: "fr-049-canonical-rw-step-list---single-source-of-truth",
        children: "FR-049: Canonical RW Step List - Single Source of Truth"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH - Prevents duplication and drift in RW step definitions", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " Completed", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-03-09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Date:"
      }), " 2026-03-09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.15+2", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E02:S01", ":T15", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T49-enhanced-kanban-completed-with-timestamps-and-recent-tasks",
        children: ["E05:S01", ":T49"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Release Workflow (RW) canonical step list is currently defined in multiple places across the codebase, creating risks of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Duplication"
          }), " - Same steps defined in multiple files"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Drift"
          }), " - Step definitions become inconsistent over time"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maintenance burden"
          }), " - Changes require updates in multiple locations"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Confusion"
          }), " - Different documents may show different step counts or descriptions"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Additionally, Step 13 needs clarification to explicitly include \"Housekeeping\" in its definition."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "current-state-analysis",
      children: "Current State Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "locations-with-rw-step-definitions",
      children: "Locations with RW Step Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow.yaml"
            })
          }), " - YAML workflow definition (17 steps)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-rw-trigger-section.md"
            })
          }), " - TODO lists for different triggers"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            })
          }), " - Documentation and verification checklist"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow_orchestrator.py"
            })
          }), " - Execution path definitions"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Various documentation files"
          }), " - Scattered references"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-13-definition-issues",
      children: "Step 13 Definition Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Current inconsistent definitions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some locations: \"Post-Commit Verification & Reflection\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Other locations: \"Post-Commit Verification, Housekeeping & Reflection\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing explicit \"Housekeeping\" requirement in some references"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-create-canonical-step-list-definition",
      children: "1. Create Canonical Step List Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a single authoritative source file:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/canonical-rw-steps.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "canonical_rw_steps:\n  step_1:\n    number: 1\n    name: \"Branch Safety Check\"\n    description: \"Verify work aligns with branch context\"\n    mandatory: true\n    blocking: true\n  \n  step_2:\n    number: 2\n    name: \"Bump Version\"\n    description: \"Increment version number based on schema (BUILD for same task, or TASK+BUILD=1 for new task)\"\n    mandatory: true\n  \n  step_3:\n    number: 3\n    name: \"Create Detailed Changelog\"\n    description: \"Create detailed changelog archive with full timestamp and PLAN section\"\n    mandatory: true\n  \n  step_4:\n    number: 4\n    name: \"Update Main Changelog\"\n    description: \"Add summary entry with short date (DD-MM-YY)\"\n    mandatory: true\n  \n  step_5:\n    number: 5\n    name: \"Update README\"\n    description: \"Update version references if present (optional)\"\n    mandatory: false\n  \n  step_6:\n    number: 6\n    name: \"Auto-update Kanban Docs\"\n    description: \"Update ALL sections (header, checklist, detailed story sections) to match authoritative Story file\"\n    mandatory: true\n  \n  step_7:\n    number: 7\n    name: \"Stage Files\"\n    description: \"Stage all modified files for commit\"\n    mandatory: true\n  \n  step_8:\n    number: 8\n    name: \"Check for and Address IDE-Flagged Problems\"\n    description: \"Check errors, warnings, infos in order\"\n    mandatory: true\n  \n  step_9:\n    number: 9\n    name: \"Run Validators\"\n    description: \"Execute branch context and changelog format validators\"\n    mandatory: true\n  \n  step_9_5:\n    number: 9.5\n    name: \"Changelog Management Workflow (CMW)\"\n    description: \"Trigger CMW if changelog size exceeds threshold (optional, non-blocking)\"\n    mandatory: false\n  \n  step_10:\n    number: 10\n    name: \"Commit Changes\"\n    description: \"Create git commit with versioned message\"\n    mandatory: true\n  \n  step_11:\n    number: 11\n    name: \"Create Git Tag\"\n    description: \"Create annotated tag\"\n    mandatory: true\n  \n  step_12:\n    number: 12\n    name: \"Push to Remote\"\n    description: \"Push branch and tags (with network permissions)\"\n    mandatory: true\n  \n  step_13:\n    number: 13\n    name: \"Post-Commit Verification, Housekeeping & Reflection\"\n    description: \"Verify release, perform housekeeping tasks, and reflect on process (optional but recommended)\"\n    mandatory: false\n    recommended: true\n  \n  step_14:\n    number: 14\n    name: \"Act on Verification Results\"\n    description: \"Address any issues found during verification (optional, agent-determined)\"\n    mandatory: false\n  \n  step_15:\n    number: 15\n    name: \"Check for PIR Trigger\"\n    description: \"Determine if Post-Implementation Review is needed\"\n    mandatory: false\n  \n  step_16:\n    number: 16\n    name: \"Housekeeping\"\n    description: \"Clean up temporary files and IDE todos\"\n    mandatory: false\n  \n  step_17:\n    number: 17\n    name: \"Complete\"\n    description: \"Final verification and cleanup\"\n    mandatory: false\n\nexecution_paths:\n  full_release:\n    trigger: \"RW\"\n    steps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9.5, 10, 11, 12, 13, 14, 15, 16, 17]\n    description: \"Complete release with all operations\"\n  \n  kanban_init:\n    trigger: \"RW -k\"\n    steps: [1, 2, 3, 4, 7, 11, 12]\n    description: \"Initial Kanban documentation commit\"\n    step_modifications:\n      7:\n        mode: \"kanban_init\"\n        updates: [\"changelog\", \"version_number\", \"kanban_docs\"]\n  \n  documentation_only:\n    trigger: \"RW -d\"\n    steps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14]\n    description: \"Documentation updates without full release cycle\"\n    skips: [\"git_tag\", \"push\", \"pir_trigger\", \"housekeeping\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-update-all-references-to-use-canonical-definition",
      children: "2. Update All References to Use Canonical Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modify all files to reference the canonical step list:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow.yaml"
            })
          }), " - Load from canonical definition"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow_orchestrator.py"
            })
          }), " - Use canonical execution paths"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-rw-trigger-section.md"
            })
          }), " - Generate TODO lists from canonical steps"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            })
          }), " - Reference canonical definition"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation files"
          }), " - Point to canonical source"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-create-validation-script",
      children: "3. Create Validation Script"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/validate_canonical_steps.py"
      }), " to ensure:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All references match canonical definition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No drift between different sources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step numbers and names are consistent"
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
            children: "Canonical Definition Created"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Single YAML file with complete step definitions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All 17 steps properly defined with metadata"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step 13 explicitly includes \"Housekeeping\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Execution Paths Defined"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All three trigger paths defined in canonical file"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step modifications clearly specified"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optional/recommended steps properly marked"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "All References Updated"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "workflow_orchestrator.py"
            }), " loads from canonical definition"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-rw-trigger-section.md"
            }), " uses canonical steps"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            }), " references canonical source"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No hardcoded step lists remain"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation Implemented"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Script to detect drift between sources"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated validation in CI/CD pipeline"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear error reporting for inconsistencies"
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
            children: "Single Source of Truth"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Only one place to update step definitions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All consumers load from canonical file"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No duplication of step metadata"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Backward Compatibility"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Existing functionality unchanged"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All triggers work as before"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No breaking changes to APIs"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maintainability"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Easy to add new steps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear modification process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version-controlled changes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-plan",
      children: "Implementation Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-create-canonical-definition-day-1",
      children: "Phase 1: Create Canonical Definition (Day 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "canonical-rw-steps.yaml"
        }), " with complete step definitions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define execution paths for all trigger types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include Step 13 with explicit \"Housekeeping\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-update-core-components-day-1-2",
      children: "Phase 2: Update Core Components (Day 1-2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_orchestrator.py"
        }), " to load canonical steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow.yaml"
        }), " to reference canonical definition"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create helper functions for step loading"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-update-documentation-day-2",
      children: "Phase 3: Update Documentation (Day 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-rw-trigger-section.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " to reference canonical source"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update other documentation files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-validation--testing-day-2",
      children: "Phase 4: Validation & Testing (Day 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create validation script"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Update integration tests"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verify all functionality works"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-5-cleanup-day-2",
      children: "Phase 5: Cleanup (Day 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Remove duplicated step definitions"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Update CI/CD pipeline"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Final testing and validation"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "risks-and-mitigations",
      children: "Risks and Mitigations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk-breaking-changes",
      children: "Risk: Breaking Changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mitigation:"
          }), " Maintain backward compatibility during transition"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fallback:"
          }), " Keep old definitions as backup during migration"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk-loading-performance",
      children: "Risk: Loading Performance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mitigation:"
          }), " Cache canonical definition after first load"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring:"
          }), " Add performance metrics for step loading"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk-complex-dependencies",
      children: "Risk: Complex Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Phase-by-phase rollout with testing at each stage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback:"
        }), " Keep previous implementation available"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "timeline",
      children: "Timeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Day 1:"
        }), " Create canonical definition and update core components"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Day 2:"
        }), " Update documentation, add validation, complete migration"]
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
        children: "FR-048 (RW Trigger Extensions) - Must be completed first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing workflow infrastructure - Required for integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "success-metrics",
      children: "Success Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero duplication"
        }), " - Only one place defines RW steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistent references"
        }), " - All documents show same step definitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy maintenance"
        }), " - Adding/modifying steps requires single file change"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated validation"
        }), " - Drift detected automatically"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stakeholder-review",
      children: "Stakeholder Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPLEMENTATION COMPLETE"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reviewers:"
      }), " Implementation Team", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Date:"
      }), " 2026-03-09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approval Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPLEMENTED"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-summary",
      children: "Implementation Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-completed---2026-03-09",
      children: "✅ COMPLETED - 2026-03-09"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-was-implemented",
      children: "What Was Implemented"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Canonical Step Definition"
          }), " - Created ", (0,jsx_runtime.jsx)(_components.code, {
            children: "canonical-rw-steps.yaml"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All 17 RW steps with full metadata"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step 13 explicitly includes \"Housekeeping\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Execution paths for all trigger types"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete step descriptions and categories"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Canonical Steps Loader"
          }), " - Created ", (0,jsx_runtime.jsx)(_components.code, {
            children: "canonical_steps.py"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Python module to load and access canonical definitions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Functions for step lookup, execution paths, and trigger handling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Type-safe step definitions with dataclasses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Easy integration for existing code"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Updated Workflow Orchestrator"
          }), " - Modified ", (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow_orchestrator.py"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Removed hardcoded step lists and execution paths"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integrated with canonical steps loader"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maintains backward compatibility"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses single source of truth for all step operations"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation Script"
          }), " - Created ", (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_canonical_steps.py"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detects drift between canonical definition and other files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validates Step 13 includes \"Housekeeping\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reports inconsistencies across codebase"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated fixing capabilities"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fixed Step 13 Definition"
          }), " - Updated documentation:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cursor rules now include \"Housekeeping\" in Step 13"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "README already had correct definition"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All references now match canonical definition"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-benefits-achieved",
      children: "Key Benefits Achieved"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Single Source of Truth"
        }), " - Only canonical-rw-steps.yaml defines steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "No Duplication"
        }), " - Hardcoded step lists eliminated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift Prevention"
        }), " - Validation script detects inconsistencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 13 Clarity"
        }), " - \"Housekeeping\" explicitly included"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Compatibility"
        }), " - All existing functionality preserved"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy Maintenance"
        }), " - Adding steps requires single file update"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testing",
      children: "Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical steps loader tested ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation script created and tested ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 13 definition verified across all files ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No breaking changes to existing functionality ✅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This FR establishes a single source of truth for RW step definitions, preventing duplication and drift while clarifying Step 13's housekeeping requirement."
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