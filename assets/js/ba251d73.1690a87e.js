"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["7915"], {
29306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_01_story_02_package_and_repo_architecture_t_01_package_structure_analysis_md_ba2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-01-story-02-package-and-repo-architecture-t-01-package-structure-analysis-md-ba2.json
var site_docs_project_management_kanban_epics_epic_01_story_02_package_and_repo_architecture_t_01_package_structure_analysis_md_ba2_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T01-package-structure-analysis","title":"Package Structure Analysis Report","description":"Task IDS02:T01","source":"@site/../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T01-package-structure-analysis.md","sourceDirName":"project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture","slug":"/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T01-package-structure-analysis","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T01-package-structure-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T01-package-structure-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Story 001 – Set Up Kanban and Versioning for AI Dev Kit","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning"},"next":{"title":"Modularity Principles and Boundaries","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T02-modularity-principles"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T01-package-structure-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Package Structure Analysis Report';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Current Package Structure",
  "id": "1-current-package-structure",
  "level": 2
}, {
  "value": "1.1 Framework Packages Overview",
  "id": "11-framework-packages-overview",
  "level": 3
}, {
  "value": "1.2 Package Contents",
  "id": "12-package-contents",
  "level": 3
}, {
  "value": "Workflow Management (<code>workflow mgt/</code>)",
  "id": "workflow-management-workflow-mgt",
  "level": 4
}, {
  "value": "Numbering &amp; Versioning (<code>numbering-versioning/</code>)",
  "id": "numbering--versioning-numbering-versioning",
  "level": 4
}, {
  "value": "Kanban (<code>kanban/</code>)",
  "id": "kanban-kanban",
  "level": 4
}, {
  "value": "2. Dependency Analysis",
  "id": "2-dependency-analysis",
  "level": 2
}, {
  "value": "2.1 Explicit Dependencies",
  "id": "21-explicit-dependencies",
  "level": 3
}, {
  "value": "Workflow Management → Numbering &amp; Versioning",
  "id": "workflow-management--numbering--versioning",
  "level": 4
}, {
  "value": "Kanban → Numbering &amp; Versioning",
  "id": "kanban--numbering--versioning",
  "level": 4
}, {
  "value": "Kanban → Workflow Management",
  "id": "kanban--workflow-management",
  "level": 4
}, {
  "value": "2.2 Implicit Dependencies",
  "id": "22-implicit-dependencies",
  "level": 3
}, {
  "value": "Version Schema Consistency",
  "id": "version-schema-consistency",
  "level": 4
}, {
  "value": "Documentation Structure Assumptions",
  "id": "documentation-structure-assumptions",
  "level": 4
}, {
  "value": "Validation Script Dependencies",
  "id": "validation-script-dependencies",
  "level": 4
}, {
  "value": "2.3 Dependency Matrix",
  "id": "23-dependency-matrix",
  "level": 3
}, {
  "value": "3. Modularity Gaps",
  "id": "3-modularity-gaps",
  "level": 2
}, {
  "value": "3.1 Documentation Gaps",
  "id": "31-documentation-gaps",
  "level": 3
}, {
  "value": "Missing Dependency Documentation",
  "id": "missing-dependency-documentation",
  "level": 4
}, {
  "value": "Inconsistent Modularity Messaging",
  "id": "inconsistent-modularity-messaging",
  "level": 4
}, {
  "value": "3.2 Structural Gaps",
  "id": "32-structural-gaps",
  "level": 3
}, {
  "value": "Duplicate Versioning Policy Documents",
  "id": "duplicate-versioning-policy-documents",
  "level": 4
}, {
  "value": "Integration Documentation Location",
  "id": "integration-documentation-location",
  "level": 4
}, {
  "value": "3.3 Consumption Pattern Gaps",
  "id": "33-consumption-pattern-gaps",
  "level": 3
}, {
  "value": "Missing Standalone Usage Examples",
  "id": "missing-standalone-usage-examples",
  "level": 4
}, {
  "value": "Missing Combined Usage Examples",
  "id": "missing-combined-usage-examples",
  "level": 4
}, {
  "value": "4. Package Independence Analysis",
  "id": "4-package-independence-analysis",
  "level": 2
}, {
  "value": "4.1 Workflow Management Independence",
  "id": "41-workflow-management-independence",
  "level": 3
}, {
  "value": "4.2 Numbering &amp; Versioning Independence",
  "id": "42-numbering--versioning-independence",
  "level": 3
}, {
  "value": "4.3 Kanban Independence",
  "id": "43-kanban-independence",
  "level": 3
}, {
  "value": "5. Recommendations",
  "id": "5-recommendations",
  "level": 2
}, {
  "value": "5.1 Immediate Actions",
  "id": "51-immediate-actions",
  "level": 3
}, {
  "value": "5.2 Structural Improvements",
  "id": "52-structural-improvements",
  "level": 3
}, {
  "value": "5.3 Documentation Enhancements",
  "id": "53-documentation-enhancements",
  "level": 3
}, {
  "value": "6. Conclusion",
  "id": "6-conclusion",
  "level": 2
}, {
  "value": "7. Appendix: File Structure Reference",
  "id": "7-appendix-file-structure-reference",
  "level": 2
}, {
  "value": "Workflow Management Package",
  "id": "workflow-management-package",
  "level": 3
}, {
  "value": "Numbering &amp; Versioning Package",
  "id": "numbering--versioning-package",
  "level": 3
}, {
  "value": "Kanban Package",
  "id": "kanban-package",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "package-structure-analysis-report",
        children: "Package Structure Analysis Report"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E01:S02", ":T01", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E01:S02", ":T01", " – Analyze current package structure and dependencies", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This report analyzes the current structure of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repository's framework packages, identifies dependencies between packages, documents modularity gaps, and provides recommendations for improving package independence and consumption patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All three framework packages are designed to be modular"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Some implicit dependencies exist that should be made explicit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Each package can be used standalone, but integration is recommended"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Documentation of dependencies is inconsistent across packages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-current-package-structure",
      children: "1. Current Package Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-framework-packages-overview",
      children: "1.1 Framework Packages Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The repository contains three main framework packages under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/\n├── workflow mgt/          # Workflow Management Framework (v2.0.0)\n├── numbering-versioning/ # Numbering & Versioning Framework (v2.0.0)\n└── kanban/                # Kanban Framework (v1.0.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-package-contents",
      children: "1.2 Package Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "workflow-management-workflow-mgt",
      children: ["Workflow Management (", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow mgt/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Release Workflow (RW) trigger and agent-driven workflow execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Files:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
            }), " (11-step RW guide)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/versioning-policy.md"
            }), " (version schema definition)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/versioning-strategy.md"
            }), " (versioning strategy)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "workflows/release-workflow.yaml"
            }), " (workflow definition)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/validate_branch_context.py"
            }), " (branch/version validation)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/validate_changelog_format.py"
            }), " (changelog validation)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-rw-trigger-section.md"
            }), " (Cursor rules section)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            }), " (package documentation)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "numbering--versioning-numbering-versioning",
      children: ["Numbering & Versioning (", (0,jsx_runtime.jsx)(_components.code, {
        children: "numbering-versioning/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Semantic versioning and numbering strategies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Files:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-policy.md"
            }), " (RC.EPIC.STORY.TASK+BUILD schema)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-strategy.md"
            }), " (complete versioning strategy)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IMPLEMENTATION_GUIDE.md"
            }), " (implementation guide)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PACKAGE_OVERVIEW.md"
            }), " (package overview)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "EPIC_TEMPLATE.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "STORY_TEMPLATE.md"
            }), " (templates)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-governance-policy.md"
            }), " (Kanban governance with versioning)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            }), " (package documentation)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "kanban-kanban",
      children: ["Kanban (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Kanban governance, templates, and integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Files:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "policies/kanban-governance-policy.md"
            }), " (complete governance policy)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "templates/EPIC_TEMPLATE.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "STORY_TEMPLATE.md"
            }), " (templates)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "templates/FR_TEMPLATE.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR_TEMPLATE.md"
            }), " (FR/BR intake templates)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "integration/numbering-versioning-integration.md"
            }), " (versioning integration)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "integration/workflow-management-integration.md"
            }), " (workflow integration)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FR_BR_INTAKE_GUIDE.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR_BR_INTAKE_AGENT_GUIDE.md"
            }), ", etc. (intake guides)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            }), " (package documentation)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-dependency-analysis",
      children: "2. Dependency Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-explicit-dependencies",
      children: "2.1 Explicit Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "workflow-management--numbering--versioning",
      children: "Workflow Management → Numbering & Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Soft/Optional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nature:"
        }), " Workflow Management includes its own versioning policy documents, but recommends using Numbering & Versioning package for consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Explicitly stated in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgt/README.md"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Soft / optional companions:"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/numbering-versioning/"
              }), " — provides a portable policy set for the version schema that this package uses"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kanban--numbering--versioning",
      children: "Kanban → Numbering & Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Integration (not hard dependency)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nature:"
        }), " Kanban integrates with versioning schema but can work without it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Integration guide exists: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/integration/numbering-versioning-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility:"
        }), " States compatibility with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering_versioning: \"v2.0.0\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kanban--workflow-management",
      children: "Kanban → Workflow Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Integration (not hard dependency)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nature:"
        }), " Kanban integrates with Release Workflow for automatic updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Integration guide exists: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/integration/workflow-management-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility:"
        }), " States compatibility with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_management: \"v2.0.0\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-implicit-dependencies",
      children: "2.2 Implicit Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "version-schema-consistency",
      children: "Version Schema Consistency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue:"
        }), " All three packages reference the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " schema"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " If a user customizes the schema in one package, they should update it in all packages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Make schema customization guidance explicit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "documentation-structure-assumptions",
      children: "Documentation Structure Assumptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue:"
        }), " Workflow Management assumes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " directory structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Users must adapt paths when copying packages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Document path customization requirements clearly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "validation-script-dependencies",
      children: "Validation Script Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue:"
        }), " Workflow Management validation scripts assume Python 3"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Users need Python 3 installed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Document runtime dependencies explicitly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-dependency-matrix",
      children: "2.3 Dependency Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Package"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standalone?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hard Dependencies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Soft/Optional Dependencies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Integration Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workflow Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git, Python 3, AI Assistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbering & Versioning (for version schema)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban (for RW updates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Numbering & Versioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban (for version markers), Workflow Management (for version schema)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kanban"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git, Markdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbering & Versioning (for version schema), Workflow Management (for RW integration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both other packages (via integration guides)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-modularity-gaps",
      children: "3. Modularity Gaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-documentation-gaps",
      children: "3.1 Documentation Gaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "missing-dependency-documentation",
      children: "Missing Dependency Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Issue:"
          }), " Not all packages clearly document their dependencies"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Examples:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Numbering & Versioning doesn't explicitly state it's standalone"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban doesn't clearly state it can work without other packages"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Impact:"
          }), " Users may think they need all packages when they only need one"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recommendation:"
          }), " Add explicit \"Standalone Usage\" and \"Dependencies\" sections to all package READMEs"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "inconsistent-modularity-messaging",
      children: "Inconsistent Modularity Messaging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Issue:"
          }), " Each package describes modularity differently"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Examples:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Workflow Management has explicit \"Modularity & Dependencies\" section"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Numbering & Versioning mentions portability but not modularity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban mentions compatibility but not standalone usage"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Impact:"
          }), " Confusion about package independence"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recommendation:"
          }), " Standardize modularity documentation across all packages"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-structural-gaps",
      children: "3.2 Structural Gaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "duplicate-versioning-policy-documents",
      children: "Duplicate Versioning Policy Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Issue:"
          }), " Both Workflow Management and Numbering & Versioning include versioning policy documents"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Location:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-mgt/docs/architecture/standards-and-adrs/versioning-policy.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "numbering-versioning/versioning-policy.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Impact:"
          }), " Potential confusion about which is authoritative"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recommendation:"
          }), " Document which package's versioning policy should be used when using both packages together"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "integration-documentation-location",
      children: "Integration Documentation Location"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue:"
        }), " Integration guides are only in Kanban package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Users of Workflow Management or Numbering & Versioning may not know about integration options"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Add integration sections to all package READMEs, or create a central integration guide"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-consumption-pattern-gaps",
      children: "3.3 Consumption Pattern Gaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "missing-standalone-usage-examples",
      children: "Missing Standalone Usage Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue:"
        }), " No clear examples of using each package independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Users may copy all packages when they only need one"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Add \"Standalone Usage\" examples to each package README"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "missing-combined-usage-examples",
      children: "Missing Combined Usage Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue:"
        }), " No clear examples of using multiple packages together"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Users may not understand how packages complement each other"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Add \"Combined Usage\" examples to root README or create integration guide"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-package-independence-analysis",
      children: "4. Package Independence Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-workflow-management-independence",
      children: "4.1 Workflow Management Independence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Can be used standalone:"
      }), " ✅ Yes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it provides:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete Release Workflow implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning policy documents (included)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cursor rules section"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it needs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git (for version control)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3 (for validation scripts)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI Assistant (for workflow execution)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional enhancements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Numbering & Versioning package (for consistent version schema across projects)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Independence Score:"
      }), " 9/10 (highly independent, only needs standard tools)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-numbering--versioning-independence",
      children: "4.2 Numbering & Versioning Independence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Can be used standalone:"
      }), " ✅ Yes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it provides:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete versioning policy and strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Templates (Epic, Story)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban governance policy (with versioning)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it needs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None (pure documentation package)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional enhancements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban package (for version markers in Kanban docs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management package (for RW integration)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Independence Score:"
      }), " 10/10 (fully independent, pure documentation)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-kanban-independence",
      children: "4.3 Kanban Independence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Can be used standalone:"
      }), " ✅ Yes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it provides:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete Kanban governance policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Templates (Epic, Story, FR, BR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intake guides (FR/BR → Task flow)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it needs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git (for version control)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Markdown (for documentation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional enhancements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Numbering & Versioning package (for version schema integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management package (for automatic RW updates)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Independence Score:"
      }), " 9/10 (highly independent, can work without other packages)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-recommendations",
      children: "5. Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-immediate-actions",
      children: "5.1 Immediate Actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Standardize Modularity Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add \"Modularity & Dependencies\" section to all package READMEs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use consistent format across all packages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clearly state standalone capability"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Dependency Matrix"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Visual matrix showing dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document optional vs required dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include in root README or separate document"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Document Consumption Patterns"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Standalone usage for each package"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Combined usage examples"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integration scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-structural-improvements",
      children: "5.2 Structural Improvements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clarify Versioning Policy Duplication"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document which versioning policy is authoritative when using multiple packages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add cross-references between packages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider consolidating or clearly separating concerns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Integration Sections"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add integration sections to Workflow Management and Numbering & Versioning READMEs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reference Kanban integration guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create central integration guide if needed"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Improve Path Customization Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document all paths that need customization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide find/replace examples"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create path customization checklist"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-documentation-enhancements",
      children: "5.3 Documentation Enhancements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Standalone Usage Examples"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: Using only Workflow Management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: Using only Numbering & Versioning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: Using only Kanban"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Combined Usage Examples"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: Workflow Management + Numbering & Versioning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: Kanban + Numbering & Versioning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Example: All three packages together"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Consumption Pattern Guide"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Decision tree: \"Which packages do I need?\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step-by-step consumption guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Customization boundaries"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-conclusion",
      children: "6. Conclusion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " repository demonstrates ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strong modularity"
      }), " with all three framework packages designed to be used independently. However, there are opportunities to improve:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation consistency"
        }), " - Standardize how modularity is described"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency clarity"
        }), " - Make dependencies explicit and well-documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consumption patterns"
        }), " - Provide clear examples of standalone and combined usage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overall Modularity Score:"
      }), " 8.5/10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task 2: Document modularity principles and boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task 3: Create package dependency matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task 4: Document consumption patterns for each framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task 5: Update package READMEs with modularity information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-appendix-file-structure-reference",
      children: "7. Appendix: File Structure Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-management-package",
      children: "Workflow Management Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow mgt/\n├── docs/\n│   ├── Documentation/Developer_Docs/vwmp/\n│   │   ├── release-workflow-agent-execution.md\n│   │   ├── release-workflow-reference.md\n│   │   ├── agent-driven-workflow-execution.md\n│   │   └── portable-workflow-implementation-guide.md\n│   └── Architecture/standards-and-adrs/\n│       ├── versioning-policy.md\n│       └── versioning-strategy.md\n├── workflows/\n│   └── release-workflow.yaml\n├── scripts/validation/\n│   ├── validate_branch_context.py\n│   └── validate_changelog_format.py\n├── cursorrules-rw-trigger-section.md\n└── README.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbering--versioning-package",
      children: "Numbering & Versioning Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "numbering-versioning/\n├── versioning-policy.md\n├── versioning-strategy.md\n├── IMPLEMENTATION_GUIDE.md\n├── PACKAGE_OVERVIEW.md\n├── EPIC_TEMPLATE.md\n├── STORY_TEMPLATE.md\n├── kanban-governance-policy.md\n├── learning-outcome-numbering-policy.md\n├── set2-numbering-schema.md\n└── README.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-package",
      children: "Kanban Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban/\n├── policies/\n│   └── kanban-governance-policy.md\n├── templates/\n│   ├── EPIC_TEMPLATE.md\n│   ├── STORY_TEMPLATE.md\n│   ├── FR_TEMPLATE.md\n│   └── BR_TEMPLATE.md\n├── integration/\n│   ├── numbering-versioning-integration.md\n│   └── workflow-management-integration.md\n├── guides/\n│   └── portfolio-kanban-alignment-playbook.md\n├── examples/\n│   ├── epic-04-Example.md\n│   └── story-33-Example.md\n├── FR_BR_INTAKE_GUIDE.md\n├── FR_BR_INTAKE_AGENT_GUIDE.md\n├── FR_BR_INTAKE_USER_GUIDE.md\n├── FR_BR_INTAKE_QUICK_REFERENCE.md\n└── README.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Report completed: 2025-12-02"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Task: E1:S02:T001"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Next: E01:S02", ":T02", " – Document modularity principles and boundaries"]
      })]
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