"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["15041"], {
11738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_cursorrules_structure_analysis_md_286_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-cursorrules-structure-analysis-md-286.json
var site_docs_knowledge_analysis_cursorrules_structure_analysis_md_286_namespaceObject = JSON.parse('{"id":"knowledge/analysis/cursorrules-structure-analysis","title":"Cursorrules Structure Analysis","description":"Purpose: Comprehensive .cursorrules structure analysis across all projects to inform the \\"ultimate\\" canonical cursorrules structure","source":"@site/../docs/knowledge/analysis/cursorrules-structure-analysis.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/cursorrules-structure-analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/cursorrules-structure-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/cursorrules-structure-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-17T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Critical Framework Completion Plan","permalink":"/ai-dev-kit/docs/knowledge/analysis/critical-framework-completion-plan"},"next":{"title":"Debug Path Framework Analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/debug-path-framework-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/cursorrules-structure-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-17T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Cursorrules Structure Analysis';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Cursorrules File Naming Conventions",
  "id": "1-cursorrules-file-naming-conventions",
  "level": 2
}, {
  "value": "1.1 File Naming Patterns",
  "id": "11-file-naming-patterns",
  "level": 3
}, {
  "value": "1.2 File Naming Summary",
  "id": "12-file-naming-summary",
  "level": 3
}, {
  "value": "2. Cursorrules Structure Patterns",
  "id": "2-cursorrules-structure-patterns",
  "level": 2
}, {
  "value": "2.1 Section Organization Patterns",
  "id": "21-section-organization-patterns",
  "level": 3
}, {
  "value": "2.2 Section Naming Patterns",
  "id": "22-section-naming-patterns",
  "level": 3
}, {
  "value": "3. RW Trigger Section Patterns",
  "id": "3-rw-trigger-section-patterns",
  "level": 2
}, {
  "value": "3.1 RW Trigger Definition Patterns",
  "id": "31-rw-trigger-definition-patterns",
  "level": 3
}, {
  "value": "3.2 RW Step Definition Patterns",
  "id": "32-rw-step-definition-patterns",
  "level": 3
}, {
  "value": "3.3 RW Configuration Patterns",
  "id": "33-rw-configuration-patterns",
  "level": 3
}, {
  "value": "4. PVW Trigger Section Patterns",
  "id": "4-pvw-trigger-section-patterns",
  "level": 2
}, {
  "value": "4.1 PVW Trigger Definition Patterns",
  "id": "41-pvw-trigger-definition-patterns",
  "level": 3
}, {
  "value": "5. Document Lifecycle Management Patterns",
  "id": "5-document-lifecycle-management-patterns",
  "level": 2
}, {
  "value": "5.1 Document Lifecycle Section Patterns",
  "id": "51-document-lifecycle-section-patterns",
  "level": 3
}, {
  "value": "7. Project-Specific Rule Patterns",
  "id": "7-project-specific-rule-patterns",
  "level": 2
}, {
  "value": "7.1 Code Style Patterns",
  "id": "71-code-style-patterns",
  "level": 3
}, {
  "value": "7.2 Testing Patterns",
  "id": "72-testing-patterns",
  "level": 3
}, {
  "value": "7.3 Documentation Patterns",
  "id": "73-documentation-patterns",
  "level": 3
}, {
  "value": "8. Version Schema Definition Patterns",
  "id": "8-version-schema-definition-patterns",
  "level": 2
}, {
  "value": "8.1 Version Schema Patterns",
  "id": "81-version-schema-patterns",
  "level": 3
}, {
  "value": "9. Branch Mapping Patterns",
  "id": "9-branch-mapping-patterns",
  "level": 2
}, {
  "value": "9.1 Branch Mapping Definition Patterns",
  "id": "91-branch-mapping-definition-patterns",
  "level": 3
}, {
  "value": "10. Progress Tracking Patterns",
  "id": "10-progress-tracking-patterns",
  "level": 2
}, {
  "value": "10.1 TODO Tracking Patterns",
  "id": "101-todo-tracking-patterns",
  "level": 3
}, {
  "value": "11. Customization Patterns",
  "id": "11-customization-patterns",
  "level": 2
}, {
  "value": "11.1 Customization Requirements",
  "id": "111-customization-requirements",
  "level": 3
}, {
  "value": "12. Recommendations for &quot;Ultimate&quot; Canonical Structure",
  "id": "12-recommendations-for-ultimate-canonical-structure",
  "level": 2
}, {
  "value": "12.1 File Structure",
  "id": "121-file-structure",
  "level": 3
}, {
  "value": "12.2 Section Organization",
  "id": "122-section-organization",
  "level": 3
}, {
  "value": "12.3 RW Trigger Section",
  "id": "123-rw-trigger-section",
  "level": 3
}, {
  "value": "12.4 Configuration",
  "id": "124-configuration",
  "level": 3
}, {
  "value": "12.5 Progress Tracking",
  "id": "125-progress-tracking",
  "level": 3
}, {
  "value": "13. Summary: &quot;Ultimate&quot; Canonical Cursorrules Structure",
  "id": "13-summary-ultimate-canonical-cursorrules-structure",
  "level": 2
}, {
  "value": "13.1 File Structure",
  "id": "131-file-structure",
  "level": 3
}, {
  "value": "13.2 Section Organization",
  "id": "132-section-organization",
  "level": 3
}, {
  "value": "13.3 RW Trigger Section",
  "id": "133-rw-trigger-section",
  "level": 3
}, {
  "value": "13.4 Configuration",
  "id": "134-configuration",
  "level": 3
}, {
  "value": "13.5 Progress Tracking",
  "id": "135-progress-tracking",
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
        id: "cursorrules-structure-analysis",
        children: "Cursorrules Structure Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Comprehensive ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " structure analysis across all projects to inform the \"ultimate\" canonical cursorrules structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      children: ["This document provides ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["detailed ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " structure analysis"]
      }), " of cursorrules patterns across all analyzed projects. Without this granular data, we cannot determine the \"ultimate\" canonical cursorrules structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Questions Addressed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " naming conventions exist across projects?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How are ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " structured (sections, triggers, rules)?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What trigger patterns exist (RW, PVW, custom)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What rule patterns emerge (git restrictions, workflow enforcement, documentation)?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the \"ultimate\" canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " structure based on real-world usage?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-cursorrules-file-naming-conventions",
      children: "1. Cursorrules File Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-file-naming-patterns",
      children: "1.1 File Naming Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 1: Standard ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (Universal)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (dot-prefixed, lowercase)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " Project root directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " All projects (universal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Universal pattern (9/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Cursor IDE standard convention"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 2: Branch-Specific ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " in branch directories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{branch}/.cursorrules"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "03/.cursorrules"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " confidentia (multi-branch structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Multi-branch pattern (1/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Branch-specific rules"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-file-naming-summary",
      children: "1.2 File Naming Summary"
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
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " (root)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal (9/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " (branch)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (1/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Acceptable for multi-branch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " in project root as canonical format."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-cursorrules-structure-patterns",
      children: "2. Cursorrules Structure Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-section-organization-patterns",
      children: "2.1 Section Organization Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Workflow-First Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Cursor Rules: RW Trigger Section\n\n## 🚀 RELEASE WORKFLOW (RW) TRIGGER\n[RW trigger section]\n\n## 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER\n[PVW trigger section]\n\n## 📄 DOCUMENT LIFECYCLE MANAGEMENT\n[Document lifecycle section]\n\n## Project-Specific Rules\n[Project-specific rules]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK pattern (3/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Project Overview First"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Cursor Rules for fynd.deals\n\n## Project Overview\n[Project description]\n\n## Version Control and Release Process\n[Versioning and RW trigger]\n\n## Code Style and Conventions\n[Code style rules]\n\n## Testing\n[Testing rules]\n\n## Documentation\n[Documentation rules]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Project-first pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Minimal Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Agentic IDE Rules - Cursor Rules\n\n## Release Workflow (RW) Trigger\n[RW trigger section]\n\n## Project-Specific Rules\n[Project-specific rules]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " agentic-ide-rules\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Minimal pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 4: Comprehensive Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# AI Assistant Rules for Confidentia Project\n\n## 🚨 MANDATORY COMMIT CHECKLIST 🚨\n[Commit checklist]\n\n## 🚨 CRITICAL: BRANCH ISOLATION RULES 🚨\n[Branch isolation rules]\n\n## Version Control and Release Process\n[Versioning and RW trigger]\n\n## Development Workflow\n[Development rules]\n\n## Documentation\n[Documentation rules]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Comprehensive pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 5: Git Restrictions First"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Cursor Rules for Starborn Legacy\n\n## 🚨 CRITICAL: GIT COMMIT/PUSH RESTRICTIONS - ABSOLUTE PROHIBITION\n[Git restrictions]\n\n## 🚀 RELEASE WORKFLOW (RW) TRIGGER\n[RW trigger section]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " starborn_legacy\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Restriction-first pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-section-naming-patterns",
      children: "2.2 Section Naming Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Trigger:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## 🚀 RELEASE WORKFLOW (RW) TRIGGER"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## Release Workflow (RW) Trigger"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PVW Trigger:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Lifecycle:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## 📄 DOCUMENT LIFECYCLE MANAGEMENT"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Overview:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## Project Overview"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "# Cursor Rules for \\{project\\}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Control:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## Version Control and Release Process"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## Git Workflow"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## 🚨 CRITICAL: GIT COMMIT/PUSH RESTRICTIONS"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Style:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## Code Style and Conventions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## Testing"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## Documentation"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Section Organization Summary:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Sections:"
        }), " RW Trigger, PVW Trigger (most common)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Sections:"
        }), " Project Overview, Project-Specific Rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process Sections:"
        }), " Version Control, Git Workflow, Development Workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Sections:"
        }), " Code Style, Testing, Documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-rw-trigger-section-patterns",
      children: "3. RW Trigger Section Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-rw-trigger-definition-patterns",
      children: "3.1 RW Trigger Definition Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Comprehensive RW Trigger (ADK Canonical)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### 🚀 RELEASE WORKFLOW (RW) TRIGGER\n\n**When the user types \"RW\" or \"rw\" (case-insensitive), execute the Release Workflow as an intelligent agent:**\n\n1. **DO NOT** run the deterministic script `scripts/release_workflow.py`\n2. **DO** execute the Release Workflow using the **intelligent agent-driven execution pattern**\n3. **LOAD CONFIG FIRST (MANDATORY):** Before Step 1, load `rw-config.yaml` from project root if it exists.\n4. **Follow** the step-by-step guide below\n5. **🚨 MANDATORY: Start with Step 1: Branch Safety Check**\n6. **Execute all remaining steps** using the ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern\n7. **Document** each step's analysis, actions, and results\n8. **MUST USE Cursor TODOs:** Create and maintain a TODO list tracking all 14 steps\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK canonical pattern (3/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Standard RW Trigger"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### 🚀 RELEASE WORKFLOW (RW) TRIGGER\n\n**When the user types \"RW\" or \"rw\" (case-insensitive), execute the Release Workflow as an intelligent agent:**\n\n1. **DO NOT** run the deterministic script `scripts/release_workflow.py`\n2. **DO** execute the Release Workflow using the **intelligent agent-driven execution pattern**\n3. **Follow** the step-by-step guide below\n4. **Execute all 10 steps** using the ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern\n5. **Document** each step's analysis, actions, and results\n6. **MUST USE Cursor TODOs:** Create and maintain a TODO list tracking all 10 steps\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Minimal RW Trigger"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Release Workflow (RW) Trigger\n\n**CRITICAL: ALL sections requirement, atomicity, blocked protocol**\n\nWhen the user types \"RW\" (Release Workflow), you MUST execute the complete 13-step Release Workflow process.\n\n### RW Execution Requirements\n[Requirements]\n\n### RW Configuration\n[Config location]\n\n### RW Steps Overview\n[Steps list]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " agentic-ide-rules\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Minimal pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 4: Custom RW Trigger"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### 🚀 AI-DRIVEN RELEASE WORKFLOW (RW) - CANONICAL PROCESS\n\n**When the user types `RW`, the AI assistant MUST execute the Release Workflow interactively following these 11 canonical steps in exact order:**\n\n#### The 11 Canonical Steps\n[Steps list]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Custom pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-rw-step-definition-patterns",
      children: "3.2 RW Step Definition Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Detailed Step Definitions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**The 14 Steps:**\n\n1. **🚨 MANDATORY BLOCKING: Branch Safety Check** - **CRITICAL:** This step MUST run `validate_branch_context.py --strict` and check exit code. **DO NOT PROCEED** if exit code is non-zero.\n\n2. **Bump Version** - **MANDATORY STEP-BY-STEP PROCESS (DO NOT SKIP ANY STEP):**\n   \n   **A. READ CURRENT VERSION:**\n   - **Load config first:** If `rw-config.yaml` exists, read `version_file` from config.\n   - Read the version file to get current `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK`, `VERSION_BUILD`\n   - Document current version: `RC.EPIC.STORY.TASK+BUILD`\n   \n   **B. IDENTIFY COMPLETED TASK (MANDATORY):**\n   - **Load config first:** If `rw-config.yaml` exists and `use_kanban: true`, read `kanban_root` and `story_doc_pattern` from config.\n   - Read the Story file using config values or fallback pattern\n   - Find the MOST RECENTLY COMPLETED task in the Task Checklist (marked `✅ COMPLETE`)\n   - Extract the task number from the task identifier: `E{epic}:S{story}:T{task}` (e.g., `E2:S02:T08` → task number is `8`)\n   - **CRITICAL:** If no task is marked complete, or you cannot identify which task was just completed, **STOP** and ask the user which task was completed\n   \n   **C. DETERMINE VERSION BUMP (MANDATORY LOGIC):**\n   [Detailed logic]\n   \n   **D. VALIDATE BEFORE UPDATING:**\n   [Validation steps]\n   \n   **E. UPDATE VERSION FILE:**\n   [Update steps]\n   \n   **F. VALIDATE AFTER UPDATING:**\n   [Post-update validation]\n\n3. **Create Detailed Changelog** - Create detailed changelog in changelog archive directory.\n[Step details]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK canonical pattern (3/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Standard Step Definitions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**The 10 Steps:**\n\n1. **Bump Version** - **MANDATORY STEP-BY-STEP PROCESS (DO NOT SKIP ANY STEP):**\n   \n   **A. READ CURRENT VERSION:**\n   - Read `src/fynd_deals/version.py` to get current `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK`, `VERSION_BUILD`\n   - Document current version: `RC.EPIC.STORY.TASK+BUILD`\n   \n   **B. IDENTIFY COMPLETED TASK (MANDATORY):**\n   - Read the Story file: `knowledge/fynd_deals/Kanban/Epic-{epic}/Story-\\{N\\}-\\{Name\\}.md`\n   - Find the MOST RECENTLY COMPLETED task in the Task Checklist (marked `✅ COMPLETE`)\n   - Extract the task number from the task identifier: `E{epic}:S{story}:T{task}` (e.g., `E11:S01:T010` → task number is `10`)\n   - **CRITICAL:** If no task is marked complete, or you cannot identify which task was just completed, **STOP** and ask the user which task was completed\n   \n   **C. DETERMINE VERSION BUMP (MANDATORY LOGIC):**\n   [Logic]\n   \n   **D. VALIDATE BEFORE UPDATING:**\n   [Validation]\n   \n   **E. UPDATE VERSION FILE:**\n   [Update]\n   \n   **F. VALIDATE AFTER UPDATING:**\n   [Post-validation]\n\n2. **Update CHANGELOG** - Add new entry at top.\n[Step details]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Minimal Step Definitions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### RW Steps Overview\n\n1. Validate branch context (branch/version/epic alignment)\n2. Bump version (RC.EPIC.STORY.TASK+BUILD schema)\n3. Update changelog\n4. Update Kanban documentation (Epic, Story, Task status)\n5. Run validation scripts\n6. Stage changes\n7. Create commit\n8. Create tag\n9. Push to remote\n10. Verify push\n11. PDCA verification\n12. PDCA action items\n13. Summary\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " agentic-ide-rules\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Minimal pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-rw-configuration-patterns",
      children: "3.3 RW Configuration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Config-Driven Approach (Preferred)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**🔧 Config-Driven Approach (Preferred):**\n\nIf `rw-config.yaml` exists in project root, **MUST** load it and use its values for all paths:\n- `version_file` → Use for version file path\n- `main_changelog` → Use for main changelog path\n- `changelog_dir` → Use for changelog archive directory\n- `scripts_path` → Use for validation scripts path\n- `readme_file` → Use for README path\n- `kanban_root` → Use for Kanban root (if `use_kanban: true`)\n- `epic_doc_pattern` → Use for epic document pattern (if Kanban enabled)\n- `story_doc_pattern` → Use for story document pattern (if Kanban enabled)\n\n**Loading Config Pattern:**\n```python\n# Load rw-config.yaml if it exists\nfrom pathlib import Path\nimport yaml\n\nconfig = None\nconfig_path = Path(\"rw-config.yaml\")\nif config_path.exists():\n    try:\n        with open(config_path, 'r', encoding='utf-8') as f:\n            config = yaml.safe_load(f)\n    except Exception:\n        pass  # Fall back to placeholders\n\n# Use config values or fallback to defaults\nversion_file = config['version_file'] if config and 'version_file' in config else 'src/fynd_deals/version.py'\n"
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
        className: "language-markdown",
        children: "**File Paths:**\n- Version file: `src/fynd_deals/version.py`\n- Changelog: `CHANGELOG.md`\n- Changelog Archive: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md`\n- Kanban Board: `knowledge/fynd_deals/Kanban/Kanban Board.md`\n- Epic Docs: `knowledge/fynd_deals/Kanban/Epic-\\{epic\\}/Epic-\\{epic\\}.md`\n- Story Docs: `knowledge/fynd_deals/Kanban/Epic-\\{epic\\}/Story-\\{N\\}-\\{Name\\}.md`\n- Validators: `scripts/validation/validate_branch_context.py`, `scripts/validation/validate_changelog_format.py`\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals, starborn_legacy\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Pre-config pattern (2/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Config File Reference"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### RW Configuration\n\nThe Release Workflow configuration is located at:\n`packages/frameworks/workflow-mgt/config/rw-config-agentic-ide-rules.yaml`\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " agentic-ide-rules\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Config reference pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-pvw-trigger-section-patterns",
      children: "4. PVW Trigger Section Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-pvw-trigger-definition-patterns",
      children: "4.1 PVW Trigger Definition Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Comprehensive PVW Trigger"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER\n\n**When the user types \"PVW\" or \"pvw\" (case-insensitive), or when RW Step 2.5 executes, run the Package Version Workflow as an intelligent agent:**\n\n1. **DO NOT** run deterministic scripts to determine bump types\n2. **DO** execute PVW using the **intelligent agent-driven execution pattern**\n3. **Follow** the agent execution pattern (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)\n4. **Use** validation scripts as tools, not determiners\n5. **Apply** version bump criteria as guidance, not hard rules\n6. **Document** reasoning and justification for each bump\n\n**PVW Execution Steps:**\n1. **Step 1: Detect Changed Packages** - Analyze git diff to identify changed packages\n2. **Step 2: Analyze Package Changes** - Read package files, identify what changed\n3. **Step 3: Determine Version Bumps** - Analyze changes against criteria, determine bump type intelligently\n4. **Step 4: Execute Version Updates** - Update README, create changelog, document justification\n5. **Step 5: Validate Updates** - Run validation scripts as tools, verify format/consistency\n6. **Step 6: Document & Proceed** - Document changes, pass to RW Step 3\n\n**🚨 MANDATORY: Progress Tracking with Cursor TODOs**\n\n**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list tracking all 6 PVW steps.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: No PVW Trigger"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, been-there, dev-toolkit, agentic-ide-rules, confidentia, starborn_legacy, free-party-promoter, vwmp, qa-kb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " No PVW pattern (8/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " PVW not implemented or not needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-document-lifecycle-management-patterns",
      children: "5. Document Lifecycle Management Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-document-lifecycle-section-patterns",
      children: "5.1 Document Lifecycle Section Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Comprehensive Lifecycle Section"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### 📄 DOCUMENT LIFECYCLE MANAGEMENT\n\n**When creating or updating KB documents, agents MUST include lifecycle metadata in front-matter:**\n\n1. **MANDATORY: Set lifecycle metadata for all KB documents:**\n   - **Identify document type** from context (task description, file path, content)\n   - **Map to lifecycle** using classification rules:\n     - **Evergreen:** Standards, ADRs, Kanban Epics/Stories, core how-tos, framework docs\n     - **Timeboxed:** Design spikes, refactoring plans, analysis docs (TTL: 90 days, archive)\n     - **Transient:** Renumbering plans, implementation sequences (TTL: 14-30 days, delete)\n   - **Apply defaults** for `ttl_days` and `housekeeping_policy`\n   - **Set `created_at`** to current UTC time (format: `YYYY-MM-DDTHH:MM:SSZ`)\n   - **Calculate `expires_at`** from `created_at + ttl_days` (or `null` for evergreen)\n   - **Include all metadata** in front-matter\n\n2. **Lifecycle Metadata Schema (Required Fields):**\n   ```yaml\n   ---\n   lifecycle: evergreen | timeboxed | transient\n   ttl_days: <integer> | null\n   created_at: <ISO 8601 datetime>\n   expires_at: <ISO 8601 datetime> | null\n   housekeeping_policy: keep | archive | delete\n   ---\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Default Classifications:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Evergreen:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ttl_days: null"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "expires_at: null"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "housekeeping_policy: keep"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Timeboxed:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ttl_days: 90"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "housekeeping_policy: archive"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Transient:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ttl_days: 14"
            }), " (or 30 for implementation plans), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "housekeeping_policy: delete"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RW Integration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["When RW creates changelogs → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "evergreen"
            }), " (historical record)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["When RW creates analysis docs → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "timeboxed"
            }), " (90 days, archive)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["When RW creates renumbering plans → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transient"
            }), " (14 days, delete)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kanban Integration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Kanban Epics/Stories → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "evergreen"
            }), " (project management artifacts)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Exception: Temporary planning Stories → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "timeboxed"
            }), " (rare)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Protection Rules:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Documents referenced from evergreen docs ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MUST NOT"
            }), " be deleted"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Documents referenced in changelogs ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MUST NOT"
            }), " be deleted"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Auto-upgrade to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "archive"
            }), " if references found"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference:"
      }), " See ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/doc-lifecycle-configuration.md"
      }), " for complete configuration and classification rules."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n**Projects Using:** been-there, dev-toolkit, ai-dev-kit\n**Frequency:** ADK pattern (3/9 projects)\n\n**Pattern 2: No Document Lifecycle Section**\n- **Projects Using:** fynd.deals, agentic-ide-rules, confidentia, starborn_legacy, free-party-promoter, vwmp, qa-kb\n- **Frequency:** No lifecycle pattern (6/9 projects)\n- **Rationale:** Document lifecycle management not implemented\n\n---\n\n## 6. Git Workflow Restriction Patterns\n\n### 6.1 Git Restriction Patterns\n\n**Pattern 1: Absolute Prohibition (Strict)**\n```markdown\n## 🚨 CRITICAL: GIT COMMIT/PUSH RESTRICTIONS - ABSOLUTE PROHIBITION\n\n**NEVER NEVER EVER run `git commit` or `git push` outside of the Release Workflow (RW)!**\n\n**ABSOLUTE PROHIBITION:**\n- ❌ **FORBIDDEN:** Running `git commit` outside of RW Step 8\n- ❌ **FORBIDDEN:** Running `git push` outside of RW Step 10\n- ❌ **FORBIDDEN:** Running `git commit --amend` outside of RW\n- ❌ **FORBIDDEN:** Running `git push --force` outside of RW\n- ❌ **FORBIDDEN:** Any git operations that modify history outside of RW\n- ❌ **FORBIDDEN:** Committing documentation updates, code changes, or any modifications outside of RW\n- ❌ **FORBIDDEN:** Pushing changes to remote outside of RW\n\n**ONLY ALLOWED:**\n- ✅ **ALLOWED:** `git add` - Staging files is allowed (but commits must wait for RW)\n- ✅ **ALLOWED:** `git status` - Checking status is allowed\n- ✅ **ALLOWED:** `git diff` - Viewing diffs is allowed\n- ✅ **ALLOWED:** `git log` - Viewing history is allowed\n- ✅ **ALLOWED:** `git tag -l` - Listing tags is allowed\n- ✅ **ALLOWED:** `git commit` - **ONLY** within RW Step 8\n- ✅ **ALLOWED:** `git push` - **ONLY** within RW Step 10\n- ✅ **ALLOWED:** `git tag` - **ONLY** within RW Step 9\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " starborn_legacy\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Strict pattern (1/9 projects)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Ensures all commits follow versioning schema"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Branch Isolation Rules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## 🚨 CRITICAL: BRANCH ISOLATION RULES 🚨\n\n### ABSOLUTE PROHIBITIONS - NO EXCEPTIONS\n**NEVER DO THESE THINGS - EVEN IF IT SEEMS LOGICAL:**\n- ❌ **NEVER run `git checkout`, `git switch`, or any branch-switching command without EXPLICIT user request**\n- ❌ **NEVER assume \"I should switch to the correct branch\" - STAY ON CURRENT BRANCH unless user explicitly asks**\n- ❌ **NEVER commit to a branch without verifying it's correct first**\n- ❌ **NEVER assume which branch to use - ALWAYS check with `git branch --show-current` FIRST**\n- ❌ **NEVER commit Epic 12 work to Epic 18 branch (or vice versa)**\n- ❌ **NEVER switch branches \"to fix something\" - ASK USER FIRST**\n\n### MANDATORY BRANCH CHECK BEFORE ANY GIT OPERATION\n**BEFORE running ANY git command that might affect branches:**\n1. Run `git branch --show-current` and display result to user\n2. Verify branch matches the work being done\n3. If branch is wrong, ASK USER which branch to use - DO NOT SWITCH AUTOMATICALLY\n\n### BRANCH MAPPING\n- **Epic 12 (Advanced Permissions)**: `epic/12-permissions-v0.4.7` → Version `0.4.7.x`\n- **Epic 18 (MCP Integration)**: `epic/18-mcp-integration` → Version `0.4.9.x`\n- **Epic 20 (Maintenance)**: `epic/20-maintenance` → Version `0.20.x.x`\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Branch isolation pattern (1/9 projects)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Prevents cross-epic contamination"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Standard Git Workflow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### Git Workflow\n- Use semantic commit messages\n- Follow the Release Workflow for all releases\n- Never commit outside of RW (except for staging with `git add`)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " agentic-ide-rules\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 4: No Git Restrictions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, been-there, dev-toolkit, free-party-promoter, vwmp, qa-kb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " No restrictions pattern (6/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " No explicit git restrictions (rely on RW workflow)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-project-specific-rule-patterns",
      children: "7. Project-Specific Rule Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-code-style-patterns",
      children: "7.1 Code Style Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Comprehensive Code Style"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Code Style and Conventions\n\n- Follow PEP 8 for Python code\n- Use type hints where appropriate\n- Write clear, descriptive commit messages\n- Update documentation when making significant changes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals, agentic-ide-rules\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard pattern (2/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Language-Specific Rules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### Code Quality\n- Follow Python best practices\n- Use type hints where appropriate\n- Write comprehensive docstrings\n- Maintain test coverage\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " agentic-ide-rules\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Language-specific pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Framework-Specific Rules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Django-Specific\n\n### Migrations\n- **Django migrations** are the single source of truth\n- Alembic is deprecated and should not be used\n- Run `python manage.py makemigrations --check` before merging\n\n#### CRITICAL: Migration Immutability\n**Django migrations are IMMUTABLE once applied:**\n- Once a migration runs and is recorded in `django_migrations` table, Django will NEVER re-run it\n- **NEVER edit an already-applied migration file** - changes will be silently ignored\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Framework-specific pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-testing-patterns",
      children: "7.2 Testing Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Standard Testing Rules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Testing\n\n- Run tests before committing: `pytest`\n- Ensure all tests pass before releasing\n- Update test coverage as needed\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Comprehensive Testing Rules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### Testing\n- Write tests before implementing features (TDD)\n- Run tests before committing\n- Maintain 80% code coverage threshold\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Comprehensive pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-documentation-patterns",
      children: "7.3 Documentation Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Standard Documentation Rules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Documentation\n\n- Keep `CHANGELOG.md` up to date\n- Update Kanban board with release notes\n- Maintain epic documentation in `knowledge/fynd_deals/Kanban/Epic-\\{epic\\}/`\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Comprehensive Documentation Rules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### Documentation\n\n### Standards\n- Document not just what changed, but why\n- Keep CHANGELOG entries concise but descriptive\n- Use emoji prefixes for clarity:\n  - 🚀 Features\n  - 🐞 Fix\n  - 🔧 Infrastructure\n  - 🔒 Security\n  - 🧹 Cleanup\n  - 🔄 Refactor\n  - 📚 Documentation\n  - 🧰 Tooling\n\n### Core Policy Documents (The System)\n[Policy document references]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Comprehensive pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Template Usage Rules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### 🚨 CRITICAL: Template Usage Rules (Epic 16)\n\n**MANDATORY:** When creating new documentation, **ALWAYS use templates, NEVER copy from existing documents.**\n\n**Template Usage Requirements:**\n1. **ALWAYS start from template:**\n   - For new Epics: Use `templates/kanban/EPIC_TEMPLATE.md`\n   - For new Stories: Use `templates/kanban/STORY_TEMPLATE.md`\n   - For other docs: Use appropriate template from `templates/` or `docs/fynd_deals/_design/architecture/templates/`\n   - **NEVER copy from existing documents** (e.g., don't copy `story-08-Route-Validation.md` to create `story-09-Route-Error-Handling.md`)\n\n2. **Template locations:**\n   [Template locations]\n\n3. **Process:**\n   [Template usage process]\n\n4. **Anti-patterns (DO NOT):**\n   - ❌ Copy from existing documents (causes document drift)\n   - ❌ Modify templates in place (templates are canonical)\n   - ❌ Skip required template sections\n   - ❌ Use old documents as reference (may have outdated patterns)\n\n5. **Verification:**\n   [Verification steps]\n\n6. **Validation Reminders:**\n   [Validation reminders]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Template enforcement pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-version-schema-definition-patterns",
      children: "8. Version Schema Definition Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-version-schema-patterns",
      children: "8.1 Version Schema Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Comprehensive Version Schema"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Version Schema:**\n- Format: `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.\\{epic\\}.\\{story\\}.\\{task\\}+\\{build\\}`)\n- **Schema Calculation:** Epic N, Story S, Task T → Version: `0.N.S.T+1` (first build)\n- **Build Increment:** Same Epic/Story/Task → Increment BUILD (e.g., `0.N.S.T+1` → `0.N.S.T+2`)\n- **New Task:** Different Task → Reset BUILD to 1 (e.g., `0.N.S.T+5` → `0.N.S.{T+1}+1`)\n- **New Story:** Different Story → Reset TASK to 1, BUILD to 1 (e.g., `0.N.S.T+B` → `0.N.{S+1}.1+1`)\n- **New Epic:** Different Epic → Reset STORY to 1, TASK to 1, BUILD to 1 (e.g., `0.N.S.T+B` → `0.{N+1}.1.1+1`)\n- **Epic Alignment:** Epic number should match current branch (if on `epic/\\{n\\}`, version should be `0.\\{n\\}.S.T+B`)\n- **Epic Ranges:**\n  - [Example: ai-dev-kit] Epic 1-4+ (Epic 1: AI Dev Kit Core, Epic 2: Workflow Management Framework, Epic 3: Numbering & Versioning Framework, Epic 4: Kanban Framework)\n  - No legacy range in dev-kit - starts from Epic 1 with full schema\n- **Reference:** See `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (or your project's versioning policy) for complete schema definition\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK canonical pattern (3/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Standard Version Schema"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Version Schema:**\n- Format: `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.9.32.1+97`)\n- RC = Release Candidate (0 = development)\n- EPIC = Epic number (e.g., 9)\n- STORY = Story number within epic (e.g., 32)\n- TASK = Task number within story (e.g., 1)\n- BUILD = Build number (increments per release within task)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " starborn_legacy\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Dual Format Support"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### Version Schema\n\nThe project uses semantic versioning with two supported formats:\n\n**New Format (Recommended):** `RC.EPIC.STORY.TASK+BUILD`\n- **RC**: Release candidate (0 = pre-release, 1 = RC1, etc.)\n- **EPIC**: Maps to the active epic (MAJOR)\n- **STORY**: Story/feature identifier (MINOR)\n- **TASK**: Task number within story\n- **BUILD**: Build number (increments per release within task)\n\n**Old Format (Grandfathered):** `RC.EPIC.STORY.PATCH`\n- **RC**: Release candidate (0 = pre-release, 1 = RC1, etc.)\n- **EPIC**: Maps to the active epic (MAJOR)\n- **STORY**: Story/feature identifier (MINOR)\n- **PATCH**: Bug fixes, documentation, and incremental changes\n\nExamples:\n- New: `0.9.21.3+1` → RC0, Epic 9, Story 21, Task 3, Build 1\n- Old: `0.9.21.17` → RC0, Epic 9, Story 21, Patch 17 (grandfathered)\n\n**Migration:** Versions before `0.9.21.20` use old format and are grandfathered. New versions should use `TASK+BUILD` format.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Dual format pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-branch-mapping-patterns",
      children: "9. Branch Mapping Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-branch-mapping-definition-patterns",
      children: "9.1 Branch Mapping Definition Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Standard Branch Mapping"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Branch Mapping (Customize for Your Project):**\n- `main` - **PRODUCTION BRANCH** - Only merge when ready to deploy. Auto-deploys trigger on every push!\n- `epic/\\{n\\}` - **DEVELOPMENT BRANCH** - All epic work should be done here. Should have version `0.\\{n\\}.S.T+B`\n- Other branches - Validate against known patterns\n\n**🚨 CRITICAL: Epic Branch Workflow**\n- **ALWAYS work on epic branches** (`epic/\\{n\\}-\\{description\\}`, e.g., `epic/1-core`, `epic/3-versioning`, etc.)\n- **NEVER commit directly to `main`** during epic development\n- **ONLY merge to `main`** when ready to deploy (triggers auto-deployment)\n- **Release Workflow (RW)** should be run on epic branch, then merge to main\n- This prevents unnecessary deployments during development\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, ai-dev-kit, fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard pattern (4/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Detailed Branch Mapping"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### BRANCH MAPPING\n- **Epic 12 (Advanced Permissions)**: `epic/12-permissions-v0.4.7` → Version `0.4.7.x`\n- **Epic 18 (MCP Integration)**: `epic/18-mcp-integration` → Version `0.4.9.x`\n- **Epic 20 (Maintenance)**: `epic/20-maintenance` → Version `0.20.x.x`\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Detailed mapping pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: No Branch Mapping"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " starborn_legacy, free-party-promoter, vwmp, qa-kb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " No mapping pattern (4/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " No explicit branch mapping (implicit in workflow)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-progress-tracking-patterns",
      children: "10. Progress Tracking Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-todo-tracking-patterns",
      children: "10.1 TODO Tracking Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Comprehensive TODO Tracking"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**🚨 MANDATORY: Progress Tracking with Cursor TODOs**\n\n**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list for all 14 Release Workflow steps:\n\n1. **At Workflow Start:** Create TODO list with all 14 steps as `pending`\n   ```python\n   todo_write(merge=False, todos=[\n       {'id': 'rw-step-1', 'status': 'pending', 'content': 'Step 1: Branch Safety Check - MANDATORY: Run validate_branch_context.py --strict, stop if fails'},\n       {'id': 'rw-step-2', 'status': 'pending', 'content': 'Step 2: Bump Version - Read Story file, identify completed task number, compare to current VERSION_TASK, determine if new task or same task, update version file, validate'},\n       {'id': 'rw-step-3', 'status': 'pending', 'content': 'Step 3: Create Detailed Changelog - Generate CHANGELOG with full timestamp'},\n       # ... all steps\n   ])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Before Each Step:"
          }), " Mark step as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "in_progress"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "todo_write(merge=True, todos=[{'id': 'rw-step-1', 'status': 'in_progress'}])\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "After Each Step:"
          }), " Mark step as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "completed"
          }), " and mark next step as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "in_progress"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "todo_write(merge=True, todos=[\n    {'id': 'rw-step-1', 'status': 'completed'},\n    {'id': 'rw-step-2', 'status': 'in_progress'}\n])\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "On Completion:"
          }), " All steps marked as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "completed"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "🚨 CRITICAL: Step 1 Branch Safety Enforcement:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MANDATORY:"
            }), " Step 1 MUST run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_branch_context.py --strict"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MANDATORY:"
            }), " If Step 1 fails (non-zero exit code), workflow MUST STOP immediately"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MANDATORY:"
            }), " If Step 1 fails, mark ALL remaining steps as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cancelled"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MANDATORY:"
            }), " Do not modify any files if Step 1 fails"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MANDATORY:"
            }), " Do not proceed to Step 2 if Step 1 fails"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern:"
            }), " Never skip, bypass, or ignore Step 1 validation"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern:"
            }), " Never proceed to Step 2 if validator returns non-zero exit code"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Atomicity & Blocking Behaviour (Accessibility-Critical):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["When the user types ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW"
              })
            }), ", the agent MUST either:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Run ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "all 14 steps (1–14)"
                }), " to completion for the target version, OR"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Stop at a ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "specific step"
                }), " and clearly state:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "step number and name"
                    }), " (e.g. \"Step 1: Branch Safety Check\" or \"Step 8: Run Validators\")"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "reason"
                    }), " it is blocked (e.g. wrong branch, missing tool, sandbox limitation)"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "exact action/commands"
                    }), " the user must run to unblock it"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["That ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "RW is NOT complete"
                    }), " until those actions are taken and the agent resumes"]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The agent MUST NOT:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Silently stop mid‑workflow after modifying files"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Start a new RW while a previous RW's TODO items are still ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "pending"
                }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "in_progress"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If RW is abandoned or cannot be completed, the agent MUST:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Mark remaining ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "rw-step-*"
                }), " TODOs as ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "cancelled"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Output a short ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "\"RW ABORTED\""
                }), " summary with current state and next steps"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n**Projects Using:** been-there, dev-toolkit, ai-dev-kit\n**Frequency:** ADK canonical pattern (3/9 projects)\n\n**Pattern 2: Standard TODO Tracking**\n```markdown\n**🚨 MANDATORY: Progress Tracking with Cursor TODOs (State Machine)**\n\n**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list for all 10 Release Workflow steps, and MUST treat this TODO list as a **state machine**:\n\n1. **At Workflow Start:** Create TODO list with all 10 steps as `pending` (no other `rw-step-*` items may be `pending` or `in_progress` from a previous RW)\n2. **Before Each Step:** Mark exactly one step as `in_progress` (all others must be `pending`/`completed`/`cancelled`)\n3. **After Each Step:** Mark the current step as `completed` (only after artifacts are consistent for that step), then mark the next step as `in_progress`\n4. **On Completion:** All steps marked as `completed` for the target version. It is forbidden to start a new RW while any `rw-step-*` items are still `pending` or `in_progress` from a previous RW.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " State machine pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Minimal TODO Tracking"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**MUST USE Cursor TODOs:** Create and maintain a TODO list tracking all 10 workflow steps\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " starborn_legacy\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Minimal pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-customization-patterns",
      children: "11. Customization Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-customization-requirements",
      children: "11.1 Customization Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Explicit Customization Instructions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**⚠️ IMPORTANT: Customization Required**\n\nAfter copying this section to your `.cursorrules`, you MUST:\n1. **Update all file paths** to match your project structure\n2. **Update version file location** (currently shows `src/fynd_deals/version.py` as template)\n3. **Update Kanban paths** (currently shows `docs/project-management/kanban/...` as templates)\n4. **Update validator script paths** (currently shows `packages/frameworks/workflow-mgt/scripts/...` as templates)\n5. **Reference your project's versioning policy** instead of dev-kit policy\n6. **Customize branch naming** if your project uses different conventions (e.g., `feature/epic-\\{n\\}` instead of `epic/\\{n\\}`)\n7. **Customize epic ranges** if your project uses different epic numbering (e.g., legacy range 1-9, new range 10+)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK pattern (3/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: No Customization Instructions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, agentic-ide-rules, confidentia, starborn_legacy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " No instructions pattern (4/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Project-specific, no template usage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-recommendations-for-ultimate-canonical-structure",
      children: "12. Recommendations for \"Ultimate\" Canonical Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-file-structure",
      children: "12.1 File Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Recommended: Standard ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (dot-prefixed, lowercase)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " Project root directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " Markdown format with sections"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-section-organization",
      children: "12.2 Section Organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Workflow-First Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Cursor Rules for {Project Name}\n\n## 🚀 RELEASE WORKFLOW (RW) TRIGGER\n[Comprehensive RW trigger section]\n\n## 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER\n[PVW trigger section - if applicable]\n\n## 📄 DOCUMENT LIFECYCLE MANAGEMENT\n[Document lifecycle section - if applicable]\n\n## Project-Specific Rules\n[Project-specific rules]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-rw-trigger-section",
      children: "12.3 RW Trigger Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Comprehensive RW Trigger"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config-Driven Approach:"
        }), " Load ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " if exists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mandatory Branch Safety Check:"
        }), " Step 1 must run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py --strict"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detailed Step Definitions:"
        }), " Step-by-step process for each step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress Tracking:"
        }), " Cursor TODOs for all steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomicity:"
        }), " Complete all steps or explicitly abort"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-configuration",
      children: "12.4 Configuration"
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
          children: "Loading Pattern:"
        }), " Python code to load config with fallback to defaults"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Compatibility:"
        }), " Support projects without config file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-progress-tracking",
      children: "12.5 Progress Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Comprehensive TODO Tracking"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State Machine Pattern:"
        }), " Only one step ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in_progress"
        }), " at a time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mandatory TODOs:"
        }), " All steps tracked with Cursor TODOs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomicity Enforcement:"
        }), " Cannot start new RW while previous RW TODOs exist"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-summary-ultimate-canonical-cursorrules-structure",
      children: "13. Summary: \"Ultimate\" Canonical Cursorrules Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-file-structure",
      children: "13.1 File Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (project root)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " Markdown with sections"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-section-organization",
      children: "13.2 Section Organization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Sections:"
        }), " RW Trigger, PVW Trigger (optional), Document Lifecycle (optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Sections:"
        }), " Project-Specific Rules"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-rw-trigger-section",
      children: "13.3 RW Trigger Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config-Driven:"
        }), " Load ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " if exists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mandatory Branch Safety:"
        }), " Step 1 must validate branch context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detailed Steps:"
        }), " Step-by-step definitions with config support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress Tracking:"
        }), " Cursor TODOs for all steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomicity:"
        }), " Complete all steps or abort"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-configuration",
      children: "13.4 Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " (preferred)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fallback:"
        }), " Hardcoded paths if config doesn't exist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Compatibility:"
        }), " Support projects without config"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-progress-tracking",
      children: "13.5 Progress Tracking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State Machine:"
        }), " Only one step ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in_progress"
        }), " at a time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mandatory TODOs:"
        }), " All steps tracked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomicity:"
        }), " Cannot start new RW while previous RW TODOs exist"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Completed:"
      }), " 2025-12-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Steps:"
      }), " Use this analysis to finalize canonical ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " structure in ADK frameworks"]
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