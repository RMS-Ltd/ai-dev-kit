"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["91189"], {
30618(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_projects_agentic_ide_rules_adk_analysis_md_700_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-projects-agentic-ide-rules-adk-analysis-md-700.json
var site_docs_knowledge_analysis_projects_agentic_ide_rules_adk_analysis_md_700_namespaceObject = JSON.parse('{"id":"knowledge/analysis/projects/agentic-ide-rules-adk-analysis","title":"Project Analysis: agentic-ide-rules","description":"Project Type: Multi-IDE Rules Management System (Python Package)","source":"@site/../docs/knowledge/analysis/projects/agentic-ide-rules-adk-analysis.md","sourceDirName":"knowledge/analysis/projects","slug":"/knowledge/analysis/projects/agentic-ide-rules-adk-analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/agentic-ide-rules-adk-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/projects/agentic-ide-rules-adk-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Pre-Analysis Completion Strategy","permalink":"/ai-dev-kit/docs/knowledge/analysis/pre-analysis-completion-strategy"},"next":{"title":"Project Analysis: ai-dev-kit (Self-Analysis)","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/ai-dev-kit-adk-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/projects/agentic-ide-rules-adk-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-16T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Project Analysis: agentic-ide-rules';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Kanban Structure Analysis",
  "id": "1-kanban-structure-analysis",
  "level": 2
}, {
  "value": "1.1 Structure Overview",
  "id": "11-structure-overview",
  "level": 3
}, {
  "value": "1.2 Distance from ADK Canonical Structure",
  "id": "12-distance-from-adk-canonical-structure",
  "level": 3
}, {
  "value": "1.3 Good Practices",
  "id": "13-good-practices",
  "level": 3
}, {
  "value": "1.4 Bad Practices",
  "id": "14-bad-practices",
  "level": 3
}, {
  "value": "1.5 Mashup Issues",
  "id": "15-mashup-issues",
  "level": 3
}, {
  "value": "1.6 Recommendations",
  "id": "16-recommendations",
  "level": 3
}, {
  "value": "2. Knowledge Base (KB) Analysis",
  "id": "2-knowledge-base-kb-analysis",
  "level": 2
}, {
  "value": "2.1 Structure Overview",
  "id": "21-structure-overview",
  "level": 3
}, {
  "value": "2.2 Distance from ADK Canonical KB Structure",
  "id": "22-distance-from-adk-canonical-kb-structure",
  "level": 3
}, {
  "value": "2.3 Good Practices",
  "id": "23-good-practices",
  "level": 3
}, {
  "value": "2.4 Bad Practices",
  "id": "24-bad-practices",
  "level": 3
}, {
  "value": "2.5 Recommendations",
  "id": "25-recommendations",
  "level": 3
}, {
  "value": "3. Cursor Rules (<code>.cursorrules</code>) Analysis",
  "id": "3-cursor-rules-cursorrules-analysis",
  "level": 2
}, {
  "value": "3.1 Structure Overview",
  "id": "31-structure-overview",
  "level": 3
}, {
  "value": "3.2 ADK Integration",
  "id": "32-adk-integration",
  "level": 3
}, {
  "value": "3.3 Distance from ADK Canonical Cursor Rules",
  "id": "33-distance-from-adk-canonical-cursor-rules",
  "level": 3
}, {
  "value": "3.4 Good Practices",
  "id": "34-good-practices",
  "level": 3
}, {
  "value": "3.5 Bad Practices",
  "id": "35-bad-practices",
  "level": 3
}, {
  "value": "3.6 Recommendations",
  "id": "36-recommendations",
  "level": 3
}, {
  "value": "4. CI/CD Configuration Analysis",
  "id": "4-cicd-configuration-analysis",
  "level": 2
}, {
  "value": "4.1 Configuration Overview",
  "id": "41-configuration-overview",
  "level": 3
}, {
  "value": "4.2 ADK Workflow Integration",
  "id": "42-adk-workflow-integration",
  "level": 3
}, {
  "value": "4.3 Custom Workflows",
  "id": "43-custom-workflows",
  "level": 3
}, {
  "value": "4.4 Distance from ADK Canonical Workflows",
  "id": "44-distance-from-adk-canonical-workflows",
  "level": 3
}, {
  "value": "4.5 Good Practices",
  "id": "45-good-practices",
  "level": 3
}, {
  "value": "4.6 Bad Practices",
  "id": "46-bad-practices",
  "level": 3
}, {
  "value": "4.7 Recommendations",
  "id": "47-recommendations",
  "level": 3
}, {
  "value": "5. Workflow Definitions Analysis",
  "id": "5-workflow-definitions-analysis",
  "level": 2
}, {
  "value": "5.1 Workflow Overview",
  "id": "51-workflow-overview",
  "level": 3
}, {
  "value": "5.2 Workflow Scripts",
  "id": "52-workflow-scripts",
  "level": 3
}, {
  "value": "5.3 Distance from ADK Canonical Workflows",
  "id": "53-distance-from-adk-canonical-workflows",
  "level": 3
}, {
  "value": "5.4 Good Practices",
  "id": "54-good-practices",
  "level": 3
}, {
  "value": "5.5 Bad Practices",
  "id": "55-bad-practices",
  "level": 3
}, {
  "value": "5.6 Recommendations",
  "id": "56-recommendations",
  "level": 3
}, {
  "value": "6. Scripts Analysis",
  "id": "6-scripts-analysis",
  "level": 2
}, {
  "value": "6.1 Script Inventory",
  "id": "61-script-inventory",
  "level": 3
}, {
  "value": "6.2 Script Usage",
  "id": "62-script-usage",
  "level": 3
}, {
  "value": "6.3 Script Analysis",
  "id": "63-script-analysis",
  "level": 3
}, {
  "value": "6.4 Good Practices",
  "id": "64-good-practices",
  "level": 3
}, {
  "value": "6.5 Bad Practices",
  "id": "65-bad-practices",
  "level": 3
}, {
  "value": "6.6 Recommendations",
  "id": "66-recommendations",
  "level": 3
}, {
  "value": "7. Framework Drift Analysis",
  "id": "7-framework-drift-analysis",
  "level": 2
}, {
  "value": "7.1 Drift Summary",
  "id": "71-drift-summary",
  "level": 3
}, {
  "value": "7.2 Root Causes",
  "id": "72-root-causes",
  "level": 3
}, {
  "value": "7.3 Impact Assessment",
  "id": "73-impact-assessment",
  "level": 3
}, {
  "value": "8. What ADK Can Learn",
  "id": "8-what-adk-can-learn",
  "level": 2
}, {
  "value": "8.1 What to Implement",
  "id": "81-what-to-implement",
  "level": 3
}, {
  "value": "8.2 How to Harden",
  "id": "82-how-to-harden",
  "level": 3
}, {
  "value": "8.3 What NOT to Do",
  "id": "83-what-not-to-do",
  "level": 3
}, {
  "value": "8.4 What to Do Differently",
  "id": "84-what-to-do-differently",
  "level": 3
}, {
  "value": "9. Synthesis &amp; Recommendations",
  "id": "9-synthesis--recommendations",
  "level": 2
}, {
  "value": "9.1 Key Insights",
  "id": "91-key-insights",
  "level": 3
}, {
  "value": "9.2 Critical Recommendations",
  "id": "92-critical-recommendations",
  "level": 3
}, {
  "value": "9.3 Patterns Across Projects",
  "id": "93-patterns-across-projects",
  "level": 3
}, {
  "value": "10. Appendix",
  "id": "10-appendix",
  "level": 2
}, {
  "value": "10.1 File Inventory",
  "id": "101-file-inventory",
  "level": 3
}, {
  "value": "10.2 Comparison Tables",
  "id": "102-comparison-tables",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "project-analysis-agentic-ide-rules",
        children: "Project Analysis: agentic-ide-rules"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Type:"
      }), " Multi-IDE Rules Management System (Python Package)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADK Version:"
      }), " [Entire ai-dev-kit repo as Git submodule in packages/frameworks/ai-dev-kit/]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Method:"
      }), " Git submodule (entire ai-dev-kit repo)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Date:"
      }), " [Early adopter, 2025-12-04+]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " This report focuses on Epic/Story-level analysis. For detailed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "task-level analysis"
      }), " (task naming conventions, organization patterns, structure details, checklist patterns), see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/knowledge/analysis/task-level-kanban-structure-analysis",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "../task-level-kanban-structure-analysis.md"
        })
      }), ". For detailed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "knowledge/documentation structure analysis"
      }), " (KB naming conventions, directory organization, document structure, lifecycle metadata, navigation patterns), see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/knowledge/analysis/knowledge-documentation-structure-analysis",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "../knowledge-documentation-structure-analysis.md"
        })
      }), ". For detailed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "workflow structure analysis"
      }), " (workflow naming, YAML structure, step patterns, configuration, execution patterns), see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/knowledge/analysis/workflow-structure-analysis",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "../workflow-structure-analysis.md"
        })
      }), ". For detailed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cursorrules structure analysis"
      }), " (cursorrules naming, structure patterns, trigger patterns, rule patterns), see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/knowledge/analysis/cursorrules-structure-analysis",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "../cursorrules-structure-analysis.md"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ADK Implementation Status:"
      }), " Full Implementation (with CRITICAL mashup, but self-aware)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overall Assessment:"
      }), " Good (with critical Epic mashup issue, but project discovered and reported it)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Proper ADK framework installation (Git submodule - entire ai-dev-kit repo)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Correct KB structure matching ADK canonical (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Proper version file and RW configuration"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL MASHUP:"
        }), " Epic 9 \"Book Related Work\" present in rules project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL MASHUP:"
        }), " Epics 1-9 are framework epics from ai-dev-kit's own Kanban structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SELF-AWARE:"
        }), " Project discovered and reported mashup issue (BR-kanban-installation-issue.md)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Good workflow integration (RW trigger in .cursorrules, RW config)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Proper framework packages structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Entire ai-dev-kit repo as submodule (unusual pattern)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kanban-structure-analysis",
      children: "1. Kanban Structure Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-structure-overview",
      children: "1.1 Structure Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic Count:"
        }), " 10 epics (Epics 1-10)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Count:"
        }), " ~100+ stories across epics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Count:"
        }), " Multiple tasks per story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory Structure:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-X/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Organization:"
        }), " Nested (Epic → Story → Task directories)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Inventory:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epics 1-9:"
        }), " Framework epics from ai-dev-kit's own Kanban structure ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MASHUP"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 9:"
        }), " \"Book Related Work\" ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "INAPPROPRIATE FOR RULES PROJECT"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 10:"
        }), " \"Internationalization and Localization\" ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "APPROPRIATE"
        }), " (multi-IDE support)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-distance-from-adk-canonical-structure",
      children: "1.2 Distance from ADK Canonical Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK Canonical:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Structure:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL MASHUP ISSUE"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epics 1-9:"
        }), " Framework epics from ai-dev-kit's own Kanban structure (dev-kit repo)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 1: AI Dev Kit Core (framework epic)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 2: Workflow Management Framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 3: Numbering & Versioning Framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 4: Kanban Framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 5: Documentation Management and Maintenance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 6: Framework Management and Maintenance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 7: Codebase Maintenance and Review"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 8: Tooling & Automation"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic 9: Book Related Work"
            }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "INAPPROPRIATE FOR RULES PROJECT"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 10:"
        }), " \"Internationalization and Localization\" ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "APPROPRIATE"
        }), " (multi-IDE support)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " Project manually copied ai-dev-kit's own Kanban structure instead of using Kanban package template (see BR-kanban-installation-issue.md)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusion about which epics are relevant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 9 \"Book Related Work\" has no relevance to rules project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clutters Kanban board with framework infrastructure epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes it unclear what the actual project work is"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project discovered issue and reported it (self-aware)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Structure:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stories organized under Epic directories"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story naming follows pattern: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-XXX-description.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story documents include proper frontmatter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Structure:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks organized in Story subdirectories"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task documents follow pattern: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task-YYY-description.md"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TYYY-description.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks have proper structure and metadata"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naming Conventions:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/Epic-X.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-XXX-description.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task-YYY-description.md"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TYYY-description.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File Organization:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nested structure: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/Story-XXX/Task-YYY.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent with ADK canonical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Drift Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL"
        }), " (mashup issue, but self-aware)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Manual copy of ai-dev-kit's own Kanban structure instead of using installer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Confusion, inappropriate epics, unclear project boundaries, but project discovered and reported issue"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-good-practices",
      children: "1.3 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Self-Awareness"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project discovered mashup issue and reported it (BR-kanban-installation-issue.md)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good documentation of the problem"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear understanding of what went wrong"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Proper Framework Installation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Frameworks installed via Git submodule in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Entire ai-dev-kit repo as submodule (unusual but functional)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clean separation between frameworks and project code"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Correct KB Structure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["KB structure matches ADK canonical exactly (", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper directory organization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good separation of concerns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Proper Version File"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version file at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/agentic_ide_rules/version.py"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Using RC.EPIC.STORY.TASK+BUILD schema correctly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version tracking integrated with Kanban"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RW Configuration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config-agentic-ide-rules.yaml"
            }), " properly configured"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban integration enabled"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper path mappings"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow Integration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " includes RW trigger section (13-step workflow)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good integration with Kanban"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper workflow documentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic 10 Appropriateness"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 10 \"Internationalization\" is appropriate for multi-IDE rules project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shows good understanding of project needs"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-bad-practices",
      children: "1.4 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Doesn't Work:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CRITICAL: Epic Mashup"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Epics 1-9 from ai-dev-kit's own Kanban structure mixed with project"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Epic 9 \"Book Related Work\" has no relevance to rules project"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Confusion, clutter, unclear project boundaries"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Cause:"
            }), " Manual copy instead of using installer (documented in BR)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Note:"
            }), " Project discovered and reported issue (self-aware)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual Copy Instead of Installer"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Manually copied epics instead of using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_kanban_framework.py"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Missed interactive installation process"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Got ai-dev-kit's actual epics instead of canonical templates"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Documentation:"
            }), " Issue documented in BR-kanban-installation-issue.md"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Epics in Project Kanban"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Epics 1-8 are framework infrastructure epics, not project epics"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " These epics belong to ai-dev-kit repo, not client projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Confusion about what work belongs to the project vs. framework"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entire ai-dev-kit Repo as Submodule"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Entire ai-dev-kit repo in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/ai-dev-kit/"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Unusual pattern - typically only frameworks are submoduled"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Minor - works but unusual, may cause confusion"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-mashup-issues",
      children: "1.5 Mashup Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🔀 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mixing ADK Components:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic 9 \"Book Related Work\" in Rules Project"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Description:"
            }), " Epic 9 from ai-dev-kit's own Kanban structure present in rules project"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " CRITICAL - Epic has no relevance to rules project"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Cause:"
            }), " Manual copy of ai-dev-kit's own Kanban structure instead of using installer"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Evidence:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/epic-09/epic-09.md"
            }), " exists with \"Book Related Work\" content"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Self-Awareness:"
            }), " Project discovered and reported issue (BR-kanban-installation-issue.md)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Infrastructure Epics (1-8) in Project"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Description:"
            }), " Epics 1-8 are framework infrastructure epics from ai-dev-kit repo"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " MAJOR - Confusion about project vs. framework work"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Cause:"
            }), " Same as above - manual copy instead of installer"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual Copy Pattern"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Description:"
            }), " Project manually copied epics instead of using installer"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " MAJOR - Got ai-dev-kit's actual epics instead of canonical templates"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Cause:"
            }), " Installer not discoverable, unclear documentation"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-recommendations",
      children: "1.6 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remove Epic 9"
        }), " - \"Book Related Work\" has no relevance to rules project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate Epics 1-8"
        }), " - Determine if these are needed or should be removed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider Re-installation"
        }), " - Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), " to get canonical templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clarify Project Boundaries"
        }), " - Ensure only project-relevant epics remain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep Epic 10"
        }), " - Internationalization is appropriate for multi-IDE project"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CRITICAL: Make Installer Primary/Only Method"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current Issue:"
            }), " Installer not discoverable, manual copy too easy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fix:"
            }), " Make ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_kanban_framework.py"
            }), " the primary/only installation method"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Documentation:"
            }), " Update README to emphasize installer, add warnings about manual copy"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clarify Installation Instructions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make it CRYSTAL CLEAR that projects should NOT copy ai-dev-kit's own Kanban structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Projects should use Kanban package template, not dev-kit's own epics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add explicit warnings about this mashup"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Separate Dev-Kit Structure from Package Template"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Clearly distinguish between:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "ai-dev-kit/docs/project-management/kanban/epics/"
                }), " (dev-kit's own structure)"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "packages/frameworks/kanban/templates/"
                }), " (package template for projects)"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make this distinction obvious in installation guide"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Installation Validation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create validator to detect mashup issues"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Warn if project has inappropriate epics (e.g., Epic 9 in non-book projects)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide cleanup guidance"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Improve Installer Discoverability"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make installer script prominently featured in installation instructions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add warnings if manual copy is attempted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Default to installing canonical templates, not copying dev-kit's actual board"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-knowledge-base-kb-analysis",
      children: "2. Knowledge Base (KB) Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-structure-overview",
      children: "2.1 Structure Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory Structure:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " with subdirectories matching ADK canonical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Count:"
        }), " ~200+ documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Types:"
        }), " Architecture, Changelog, Documentation, Guides, project-management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization Pattern:"
        }), " Matches ADK canonical structure exactly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── Architecture/\n│   └── standards-and-adrs/\n├── changelog-and-release-notes/\n│   └── changelog-archive/\n├── Documentation/\n│   └── user-docs/\n├── Guides/\n│   └── getting-started/\n└── project-management/\n    └── kanban/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-distance-from-adk-canonical-kb-structure",
      children: "2.2 Distance from ADK Canonical KB Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK KB:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Directory Organization:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structure matches ADK canonical exactly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper separation: Architecture, Changelog, Documentation, Guides, project-management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good depth management (3-4 levels)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Lifecycle:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents have proper frontmatter with lifecycle metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TTL and expiration properly configured"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Housekeeping policy set"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naming Conventions:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent naming patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-documenting names"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper file extensions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-Referencing:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper cross-references between documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good linking patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Drift Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NONE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " N/A - structure matches canonical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " None - KB structure is correct"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-good-practices",
      children: "2.3 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Perfect KB Structure Match"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "KB structure matches ADK canonical exactly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper directory organization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good separation of concerns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bug Report Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BR-kanban-installation-issue.md documents the mashup issue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good documentation of problem discovery"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear understanding of what went wrong"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Proper Documentation Organization"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework documentation properly organized"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Guides properly organized"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good discoverability"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Lifecycle Metadata"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documents have proper frontmatter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "TTL and expiration configured"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good housekeeping"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-bad-practices",
      children: "2.4 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Doesn't Work:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "None identified - KB structure is correct."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-recommendations",
      children: "2.5 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None - KB structure is correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KB structure is working well"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug report pattern is good example of self-awareness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "3-cursor-rules-cursorrules-analysis",
      children: ["3. Cursor Rules (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), ") Analysis"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-structure-overview",
      children: "3.1 Structure Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (project root)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Size:"
        }), " ~90 lines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sections:"
        }), " RW trigger section, project-specific rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization:"
        }), " Well-organized with clear sections"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-adk-integration",
      children: "3.2 ADK Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow (RW):"
        }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PRESENT"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW trigger section included"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper workflow definitions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "13-step workflow (extended version)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Atomicity and blocked protocol documented"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Config-driven approach"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story/Task References:"
        }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PRESENT"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "References to Kanban structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version integration documented"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document References:"
        }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PRESENT"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "References to KB structure"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-distance-from-adk-canonical-cursor-rules",
      children: "3.3 Distance from ADK Canonical Cursor Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW trigger section present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper workflow definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good organization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Definitions:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXTENDED"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses 13-step workflow (extended from 11-step)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adds PDCA verification and action items steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper validation steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config-driven approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Instructions:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear instructions for RW execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Atomicity and blocked protocol documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good safety checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Drift Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " (extended workflow, but appropriate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Project extended RW with PDCA steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - extension is appropriate, not drift"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-good-practices",
      children: "3.4 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Extended RW with PDCA"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "13-step workflow adds PDCA verification and action items"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good extension of base RW"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper documentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Atomicity and Blocked Protocol"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear documentation of atomicity requirement"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Blocked protocol documented"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good safety checks"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Comprehensive RW Trigger Section"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete workflow definition"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step-by-step guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Config-driven approach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper validation steps"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Good Integration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good integration with Kanban"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper version integration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "KB references included"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-bad-practices",
      children: "3.5 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Doesn't Work:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "None identified - cursor rules are correct and well-extended."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-recommendations",
      children: "3.6 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None - cursor rules are correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extended RW with PDCA is good pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Atomicity and blocked protocol documentation is good example"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-cicd-configuration-analysis",
      children: "4. CI/CD Configuration Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-configuration-overview",
      children: "4.1 Configuration Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD Platform:"
        }), " None detected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Files:"
        }), " None found (workflows in ai-dev-kit submodule)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline Stages:"
        }), " N/A"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-adk-workflow-integration",
      children: "4.2 ADK Workflow Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Workflow (RW) Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Present:"
        }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PRESENT"
        }), " (via .cursorrules and RW config)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW properly configured"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Config-driven approach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper validation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Other ADK Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflows exist in ai-dev-kit submodule (not directly used)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-custom-workflows",
      children: "4.3 Custom Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extended RW with PDCA steps (13-step vs 11-step)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-distance-from-adk-canonical-workflows",
      children: "4.4 Distance from ADK Canonical Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Implementation:"
        }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MATCHES"
        }), " (extended appropriately)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW properly configured"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extended with PDCA steps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Config-driven approach"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Patterns:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflows follow ADK patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Drift Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NONE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " N/A - workflows match canonical (extended appropriately)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " None - workflows are correct"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-good-practices",
      children: "4.5 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Extended RW with PDCA"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good extension of base RW"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Appropriate customization"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Proper RW Integration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW properly configured"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Config-driven approach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good validation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-bad-practices",
      children: "4.6 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Doesn't Work:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "None identified - workflows are correct."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-recommendations",
      children: "4.7 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None - workflows are correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extended RW with PDCA is good pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider adding PDCA steps to canonical RW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-workflow-definitions-analysis",
      children: "5. Workflow Definitions Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-workflow-overview",
      children: "5.1 Workflow Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow (RW):"
        }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PRESENT"
        }), " (via .cursorrules and RW config)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake Workflows:"
        }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PRESENT"
        }), " (FR/BR in Kanban)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom Workflows:"
        }), " Extended RW with PDCA"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-workflow-scripts",
      children: "5.2 Workflow Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scripts Used:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework scripts in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/"
        }), " (used as-is)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework scripts in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/"
        }), " (migration, analysis, etc.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADK Framework Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All scripts from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/"
        }), " are used as-is"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No customization detected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban scripts present (migration, analysis, installer, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-distance-from-adk-canonical-workflows",
      children: "5.3 Distance from ADK Canonical Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Implementation:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      }), " (extended appropriately)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW properly configured via .cursorrules and RW config"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extended with PDCA steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Workflows:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR/BR intake workflows present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper Kanban integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Patterns:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflows follow ADK patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Drift Assessment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NONE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " N/A - workflows match canonical (extended appropriately)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " None - workflows are correct"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-good-practices",
      children: "5.4 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Proper RW Integration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW properly configured"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extended with PDCA steps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Config-driven approach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good validation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Scripts Used As-Is"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No unnecessary customization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper framework usage"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kanban Scripts"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration and analysis scripts present"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good tooling support"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-bad-practices",
      children: "5.5 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Doesn't Work:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "None identified - workflows are correct."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-recommendations",
      children: "5.6 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None - workflows are correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow integration is working well"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extended RW with PDCA is good pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-scripts-analysis",
      children: "6. Scripts Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-script-inventory",
      children: "6.1 Script Inventory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scripts Found:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework scripts in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/"
        }), " (used as-is)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework scripts in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/"
        }), " (migration, analysis, installer, etc.)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No custom scripts detected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-script-usage",
      children: "6.2 Script Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Used By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflows:"
        }), " Validation scripts used by RW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban:"
        }), " Kanban scripts for structure analysis/migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KB:"
        }), " Documentation scripts for KB maintenance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone:"
        }), " Various utility scripts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-script-analysis",
      children: "6.3 Script Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customizations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "None detected - all scripts used as-is from frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All framework scripts used as-is"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban scripts present (migration, analysis, installer, etc.)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-good-practices",
      children: "6.4 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Scripts Used As-Is"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No unnecessary customization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper framework usage"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kanban Scripts"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration and analysis scripts present"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good tooling support"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-bad-practices",
      children: "6.5 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Doesn't Work:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "None identified - scripts are correct."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-recommendations",
      children: "6.6 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None - scripts are correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script usage is correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No customization needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-framework-drift-analysis",
      children: "7. Framework Drift Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-drift-summary",
      children: "7.1 Drift Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overall Drift Level:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL"
      }), " (due to Epic mashup, but self-aware)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Areas of Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL"
        }), " - Epic mashup (Epics 1-9 + Epic 10)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KB:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NONE"
        }), " - Perfect match"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflows:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NONE"
        }), " - Extended appropriately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scripts:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NONE"
        }), " - Used as-is"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-root-causes",
      children: "7.2 Root Causes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Drift Occurred:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual Copy Instead of Installer"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project manually copied ai-dev-kit's own Kanban structure"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Didn't use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_kanban_framework.py"
            }), " installer"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Installer not discoverable in documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Got ai-dev-kit's actual epics instead of canonical templates"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unclear Installation Instructions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation didn't clearly distinguish dev-kit's own structure from package template"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Installer not prominently featured"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Manual copy too easy"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Self-Awareness"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project discovered issue and reported it (BR-kanban-installation-issue.md)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good documentation of problem discovery"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear understanding of what went wrong"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic mashup appears to be common issue (seen in been-there, dev-toolkit, agentic-ide-rules)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual copy instead of installer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installer not discoverable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-impact-assessment",
      children: "7.3 Impact Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems Caused:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confusion"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Unclear which epics are project work vs. framework work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 9 \"Book Related Work\" has no relevance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework epics clutter Kanban board"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Self-Awareness"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project discovered issue and reported it"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good documentation of problem"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear understanding of what went wrong"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance Burden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High - Epic cleanup needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework epics may be maintained unnecessarily"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But project is self-aware and documented issue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-what-adk-can-learn",
      children: "8. What ADK Can Learn"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-what-to-implement",
      children: "8.1 What to Implement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Good Practices to Adopt:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Extended RW with PDCA"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Extended RW with PDCA verification and action items steps"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Adds continuous improvement to RW"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Consider adding PDCA steps to canonical RW"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Atomicity and Blocked Protocol"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Clear documentation of atomicity requirement and blocked protocol"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Prevents partial RW execution"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Add to canonical RW documentation"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Self-Awareness Pattern"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Project discovered and reported mashup issue"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Shows good problem discovery and documentation"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Encourage bug reports, provide templates"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-how-to-harden",
      children: "8.2 How to Harden"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🛡️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardening Opportunities:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CRITICAL: Make Installer Primary/Only Method"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "What to Harden:"
            }), " Installation process to prevent manual copy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Make ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "install_kanban_framework.py"
                }), " the primary/only installation method"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Update documentation to emphasize installer"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add warnings if manual copy is attempted"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Default to installing canonical templates, not copying dev-kit's actual board"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Improve Installer Discoverability"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "What to Harden:"
            }), " Make installer easily discoverable"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make installer script prominently featured in installation instructions"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add warnings if manual copy is attempted"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide clear installation guide"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prevent Epic Mashup"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "What to Harden:"
            }), " Installation process to prevent copying dev-kit's own Kanban structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add explicit warnings in installation guide"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Create validator to detect inappropriate epics"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide cleanup guidance"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Separate dev-kit structure from package template more clearly"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-what-not-to-do",
      children: "8.3 What NOT to Do"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Patterns to Prevent:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual Copy Pattern"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern:"
            }), " Manually copying ai-dev-kit's own Kanban structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Bad:"
            }), " Causes mashup, gets dev-kit's actual epics instead of canonical templates"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Prevent:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make installer primary/only method"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add warnings if manual copy is attempted"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide clear installation guide"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unclear Installation Instructions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern:"
            }), " Documentation doesn't clearly distinguish dev-kit structure from package template"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Bad:"
            }), " Leads to manual copy and mashup"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Prevent:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make distinction crystal clear"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Emphasize installer"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add explicit warnings"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current ADK Issues:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Installer Not Discoverable"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Installer not prominently featured in installation instructions"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Fix:"
            }), " Make installer primary/only method, update documentation"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual Copy Too Easy"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Manual copy is too easy, leads to mashup"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Fix:"
            }), " Add warnings, make installer primary method"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unclear Distinction"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Distinction between dev-kit structure and package template not clear"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Fix:"
            }), " Make distinction crystal clear in all documentation"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-what-to-do-differently",
      children: "8.4 What to Do Differently"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🔄 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Improvements:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Make Installer Primary/Only Method"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current Approach:"
            }), " Installer exists but not prominently featured"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Better Approach:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Make ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "install_kanban_framework.py"
                }), " the primary/only installation method"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Update documentation to emphasize installer"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add warnings if manual copy is attempted"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Default to installing canonical templates"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Improve Installer Discoverability"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current Approach:"
            }), " Installer not easily discoverable"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Better Approach:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make installer script prominently featured in installation instructions"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add clear installation guide"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide examples"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clarify Installation Instructions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current Approach:"
            }), " Unclear distinction between dev-kit structure and package template"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Better Approach:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make distinction crystal clear"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Emphasize installer"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Add explicit warnings about manual copy"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-synthesis--recommendations",
      children: "9. Synthesis & Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-key-insights",
      children: "9.1 Key Insights"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Top 3 Insights:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CRITICAL: Manual Copy Pattern Causes Mashup"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "agentic-ide-rules manually copied ai-dev-kit's own Kanban structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Got ai-dev-kit's actual epics instead of canonical templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Installer not discoverable, manual copy too easy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project discovered and reported issue (self-aware)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Self-Awareness is Valuable"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project discovered mashup issue and reported it (BR-kanban-installation-issue.md)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good documentation of problem discovery"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear understanding of what went wrong"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "This is valuable feedback for ADK"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Extended RW with PDCA"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project extended RW with PDCA verification and action items"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good pattern for continuous improvement"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider adding to canonical RW"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-critical-recommendations",
      children: "9.2 Critical Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CRITICAL: Make Installer Primary/Only Method"
          }), " (Priority: Critical)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Make ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_kanban_framework.py"
            }), " the primary/only installation method"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update documentation to emphasize installer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add warnings if manual copy is attempted"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Default to installing canonical templates, not copying dev-kit's actual board"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Improve Installer Discoverability"
          }), " (Priority: High)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make installer script prominently featured in installation instructions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add clear installation guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Clarify Installation Instructions"
          }), " (Priority: High)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make distinction crystal clear between dev-kit structure and package template"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Emphasize installer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add explicit warnings about manual copy"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remove Epic 9"
        }), " - \"Book Related Work\" has no relevance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate Epics 1-8"
        }), " - Determine if needed or should be removed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider Re-installation"
        }), " - Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), " to get canonical templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep Epic 10"
        }), " - Internationalization is appropriate for multi-IDE project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep BR Report"
        }), " - Good documentation of issue discovery"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-patterns-across-projects",
      children: "9.3 Patterns Across Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic mashup appears in multiple projects (been-there, dev-toolkit, agentic-ide-rules)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual copy instead of installer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installer not discoverable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unclear distinction between dev-kit structure and package template"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unique to agentic-ide-rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-aware - discovered and reported mashup issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extended RW with PDCA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entire ai-dev-kit repo as submodule (unusual pattern)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-appendix",
      children: "10. Appendix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-file-inventory",
      children: "10.1 File Inventory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-01/"
        }), " through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-10/"
        }), " (Epics 1-9 framework, Epic 10 project)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple stories and tasks per epic"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bug report: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/BR-kanban-installation-issue.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/user-docs/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/guides/"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (RW trigger section - 13-step with PDCA)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/config/rw-config-agentic-ide-rules.yaml"
        }), " (RW configuration)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/"
        }), " (framework scripts)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/"
        }), " (kanban scripts, including installer)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/ai-dev-kit/"
        }), " (entire ai-dev-kit repo as submodule)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/"
        }), " (kanban framework)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/"
        }), " (workflow framework)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/"
        }), " (versioning framework)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/doc-lifecycle/"
        }), " (doc lifecycle framework)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/debug-path/"
        }), " (debug path framework)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-comparison-tables",
      children: "10.2 Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Structure Comparison:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Match?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project-specific epics only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epics 1-9 (framework) + Epic 10 (project)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ NO (mashup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stories under Epic directories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tasks under Story directories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naming Conventions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic-X, Story-XXX, Task-YYY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/project-management/kanban/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Structure Comparison:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Match?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directory Organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture, Changelog, Documentation, Guides, project-management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontmatter with lifecycle metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naming Conventions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-documenting names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Referencing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proper linking patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Matches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Completed:"
      }), " 2025-12-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Review:"
      }), " After ADK hardening recommendations implemented"]
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