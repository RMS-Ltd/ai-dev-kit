"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["36482"], {
33823(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_projects_ai_dev_kit_adk_analysis_md_ba9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-projects-ai-dev-kit-adk-analysis-md-ba9.json
var site_docs_knowledge_analysis_projects_ai_dev_kit_adk_analysis_md_ba9_namespaceObject = JSON.parse('{"id":"knowledge/analysis/projects/ai-dev-kit-adk-analysis","title":"Project Analysis: ai-dev-kit (Self-Analysis)","description":"Project Type: Framework Toolkit (Source of Truth for ADK)","source":"@site/../docs/knowledge/analysis/projects/ai-dev-kit-adk-analysis.md","sourceDirName":"knowledge/analysis/projects","slug":"/knowledge/analysis/projects/ai-dev-kit-adk-analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/ai-dev-kit-adk-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/projects/ai-dev-kit-adk-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-17T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Project Analysis: agentic-ide-rules","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/agentic-ide-rules-adk-analysis"},"next":{"title":"Project Analysis: been-there","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/been-there-adk-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/projects/ai-dev-kit-adk-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-17T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Project Analysis: ai-dev-kit (Self-Analysis)';

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
  "value": "3. Workflow Analysis",
  "id": "3-workflow-analysis",
  "level": 2
}, {
  "value": "3.1 Structure Overview",
  "id": "31-structure-overview",
  "level": 3
}, {
  "value": "3.2 Distance from ADK Canonical Workflow Structure",
  "id": "32-distance-from-adk-canonical-workflow-structure",
  "level": 3
}, {
  "value": "3.3 Good Practices",
  "id": "33-good-practices",
  "level": 3
}, {
  "value": "3.4 Bad Practices",
  "id": "34-bad-practices",
  "level": 3
}, {
  "value": "4. Cursorrules Analysis",
  "id": "4-cursorrules-analysis",
  "level": 2
}, {
  "value": "4.1 Structure Overview",
  "id": "41-structure-overview",
  "level": 3
}, {
  "value": "4.2 Distance from ADK Canonical Cursorrules Structure",
  "id": "42-distance-from-adk-canonical-cursorrules-structure",
  "level": 3
}, {
  "value": "4.3 Good Practices",
  "id": "43-good-practices",
  "level": 3
}, {
  "value": "4.4 Bad Practices",
  "id": "44-bad-practices",
  "level": 3
}, {
  "value": "5. Versioning Analysis",
  "id": "5-versioning-analysis",
  "level": 2
}, {
  "value": "5.1 Structure Overview",
  "id": "51-structure-overview",
  "level": 3
}, {
  "value": "5.2 Distance from ADK Canonical Versioning Structure",
  "id": "52-distance-from-adk-canonical-versioning-structure",
  "level": 3
}, {
  "value": "5.3 Good Practices",
  "id": "53-good-practices",
  "level": 3
}, {
  "value": "5.4 Bad Practices",
  "id": "54-bad-practices",
  "level": 3
}, {
  "value": "6. Framework Packages Analysis",
  "id": "6-framework-packages-analysis",
  "level": 2
}, {
  "value": "6.1 Structure Overview",
  "id": "61-structure-overview",
  "level": 3
}, {
  "value": "6.2 Distance from ADK Canonical Framework Structure",
  "id": "62-distance-from-adk-canonical-framework-structure",
  "level": 3
}, {
  "value": "6.3 Good Practices",
  "id": "63-good-practices",
  "level": 3
}, {
  "value": "6.4 Bad Practices",
  "id": "64-bad-practices",
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
  "value": "8. What ADK Can Learn from ai-dev-kit (Self-Analysis)",
  "id": "8-what-adk-can-learn-from-ai-dev-kit-self-analysis",
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
  "value": "8.3 What NOT to Do (Current Issues)",
  "id": "83-what-not-to-do-current-issues",
  "level": 3
}, {
  "value": "9. Critical Issues Summary",
  "id": "9-critical-issues-summary",
  "level": 2
}, {
  "value": "9.1 Epic 9 Mismatch (CRITICAL)",
  "id": "91-epic-9-mismatch-critical",
  "level": 3
}, {
  "value": "9.2 Missing <code>.cursorrules</code> File (HIGH)",
  "id": "92-missing-cursorrules-file-high",
  "level": 3
}, {
  "value": "9.3 Missing <code>rw-config.yaml</code> in Project Root (HIGH)",
  "id": "93-missing-rw-configyaml-in-project-root-high",
  "level": 3
}, {
  "value": "10. Recommendations",
  "id": "10-recommendations",
  "level": 2
}, {
  "value": "10.1 Immediate Actions (CRITICAL)",
  "id": "101-immediate-actions-critical",
  "level": 3
}, {
  "value": "10.2 Short-Term Actions (HIGH)",
  "id": "102-short-term-actions-high",
  "level": 3
}, {
  "value": "10.3 Long-Term Actions (MEDIUM)",
  "id": "103-long-term-actions-medium",
  "level": 3
}, {
  "value": "11. Summary: ai-dev-kit Self-Analysis",
  "id": "11-summary-ai-dev-kit-self-analysis",
  "level": 2
}, {
  "value": "11.1 Overall Assessment",
  "id": "111-overall-assessment",
  "level": 3
}, {
  "value": "11.2 Key Findings",
  "id": "112-key-findings",
  "level": 3
}, {
  "value": "11.3 Critical Actions Required",
  "id": "113-critical-actions-required",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "project-analysis-ai-dev-kit-self-analysis",
        children: "Project Analysis: ai-dev-kit (Self-Analysis)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Type:"
      }), " Framework Toolkit (Source of Truth for ADK)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADK Version:"
      }), " Self (v0.6.6.6+1)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Method:"
      }), " Source repository (not an implementation)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Date:"
      }), " N/A (this is the source)"]
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
      }), " Source Repository (Not an Implementation)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overall Assessment:"
      }), " Good (with CRITICAL Epic 9 mismatch issue)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Proper KB structure matching ADK canonical (5-pillar structure)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Comprehensive framework packages structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Good workflow YAML definitions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL ISSUE:"
        }), " Epic 9 \"Book Related Work\" in ai-dev-kit conflicts with canonical Epic 9 \"User Management and Authentication\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL ISSUE:"
        }), " No ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file (RW executed manually/by convention)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ Legacy version file path (", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/ai_dev_kit/version.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ RW config exists only as example, not in project root"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Discovery:"
      }), " Epic 9 mismatch is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ROOT CAUSE"
      }), " of the Epic mashup issue affecting 33% of client projects. When projects copy ai-dev-kit's actual Kanban structure, they get Epic 9 \"Book Related Work\" instead of Epic 9 \"User Management and Authentication\" from canonical templates."]
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
        }), " 10 epics (Epics 1-9, 21)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Count:"
        }), " 60+ stories across epics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Count:"
        }), " Multiple tasks per story (193+ task templates created)"]
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
          children: "Epic 1:"
        }), " AI Dev Kit Core ✅ (Framework epic, but name is project-specific)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 2:"
        }), " Workflow Management Framework ✅ (Framework epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 3:"
        }), " Numbering & Versioning Framework ✅ (Framework epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 4:"
        }), " Kanban Framework ✅ (Framework epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 5:"
        }), " Documentation Management ✅ (Framework epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 6:"
        }), " Framework Management ✅ (Framework epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 7:"
        }), " Codebase Maintenance and Review ✅ (Framework epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 8:"
        }), " Tooling & Automation ✅ (Framework epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 9:"
        }), " Book Related Work ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL MISMATCH"
        }), " (ai-dev-kit project-specific, NOT canonical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 21:"
        }), " Internationalization and Localization ✅ (Project-specific epic)"]
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
        children: "CRITICAL MISMATCH - Epic 9"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Problem:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ai-dev-kit's actual Epic 9:"
        }), " \"Book Related Work\" (project-specific epic for \"Vibe Coding For Dummies\" book)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical template Epic 9:"
        }), " \"User Management and Authentication\" (canonical ancillary epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " When projects copy ai-dev-kit's actual Kanban structure, they get Epic 9 \"Book Related Work\" instead of Epic 9 \"User Management and Authentication\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit uses Epic 9 for its own project-specific work (book project)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical templates define Epic 9 as \"User Management and Authentication\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No clear separation between ai-dev-kit's actual Kanban and canonical templates"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installer (", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), ") was fixed in v0.4.6.10+1 (BR-004) but Epic 9 mismatch remains"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 1 Naming:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ai-dev-kit's actual Epic 1:"
        }), " \"AI Dev Kit Core\" (project-specific name)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical template Epic 1:"
        }), " \"{PROJECT_NAME} Core\" (generic placeholder)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Projects copying ai-dev-kit's structure get \"AI Dev Kit Core\" instead of generic \"Project Core\""]
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story checklists present"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Structure:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks organized in Story subdirectories or embedded in Story documents"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task documents follow pattern: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task-YYY-description.md"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TYYY-description.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks have proper structure and metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "193+ task templates created (Epic 1-14 complete)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naming Conventions:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MOSTLY MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/Epic-X.md"
        }), " ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-XXX-description.md"
        }), " ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " ✅ (full context)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task padding: 2-digit (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T02"
        }), ") ✅"]
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
        }), " (Epic 9 mismatch causes mashup in client projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " ai-dev-kit's actual Kanban structure mixes project-specific epics (Epic 9 \"Book Related Work\") with framework epics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Client projects copying ai-dev-kit's structure get inappropriate Epic 9"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "33% of client projects affected (been-there, dev-toolkit, agentic-ide-rules)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Confusion about which epics are canonical vs project-specific"
          }), "\n"]
        }), "\n"]
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
            children: "Comprehensive Template System"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["21 epic templates created (", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/templates/epics/"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["62+ story templates created (", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/templates/stories/"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["193+ task templates created (", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/templates/tasks/"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Templates properly contextualized with placeholders"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Proper E/S/T Hierarchy"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear Epic → Story → Task hierarchy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper nesting and organization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consistent naming conventions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story Checklist Pattern"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story checklists in Epic documents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version markers for completed stories"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear status tracking"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task Organization"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tasks embedded in Story documents (most common)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Separate task files for complex tasks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper task structure with required/optional fields"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Canonical Epic Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CANONICAL_EPICS.md"
            }), " clearly documents canonical epics"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
            }), " provides complete structure"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear distinction between core (1-8) and ancillary (9-21) epics"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-bad-practices",
      children: "1.4 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Needs Improvement:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CRITICAL: Epic 9 Mismatch"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " ai-dev-kit's actual Epic 9 is \"Book Related Work\" (project-specific)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Canonical:"
            }), " Epic 9 should be \"User Management and Authentication\""]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " CRITICAL - Causes mashup in 33% of client projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Cause:"
            }), " No clear separation between ai-dev-kit's actual Kanban and canonical templates"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Rename ai-dev-kit's Epic 9 to Epic 24+ (project-specific range)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "OR clearly document that Epic 9 in ai-dev-kit is project-specific, not canonical"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Ensure installer uses canonical templates, not ai-dev-kit's actual epics"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic 1 Naming Too Specific"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Epic 1 named \"AI Dev Kit Core\" (project-specific name)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Canonical:"
            }), " Should be \"{PROJECT_NAME} Core\" (generic placeholder)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Projects copying structure get project-specific name"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " Rename Epic 1 to generic name or document customization requirement"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic Mashup Risk"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " ai-dev-kit's actual Kanban structure mixes framework epics (1-8) with project-specific epics (9, 21)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Easy to copy wrong structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " Clear separation or documentation of which epics are canonical vs project-specific"]
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
        }), " (5-pillar canonical structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Count:"
        }), " 1000+ documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Types:"
        }), " Architecture, Changelog, Documentation, Guides, project-management, use-cases, Reviews"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization Pattern:"
        }), " ADK canonical 5-pillar structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── Architecture/                      # Technical standards, ADRs ✅\n├── changelog-and-release-notes/      # Release documentation ✅\n├── project-management/                 # Project management, Kanban ✅\n├── Guides/                           # User-facing documentation ✅\n├── Documentation/                    # Developer documentation ✅\n├── use-cases/                        # Canonical and discovered use cases ✅\n└── Reviews/                          # Post-Implementation Reviews ✅\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK Canonical:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADK Canonical: 5 pillars (Architecture, Changelog, PM, Guides, Documentation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit: 5 pillars + use-cases + Reviews (extensions)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ✅ Matches canonical with appropriate extensions"]
      }), "\n"]
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
        children: "MATCHES CANONICAL"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Root path: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " ✅"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structure: 5-pillar canonical structure ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Additional pillars: use-cases, Reviews (appropriate extensions) ✅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Lifecycle:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GOOD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frontmatter present in most documents ✅"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Lifecycle metadata (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        }), ") ✅"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifecycle management implemented ✅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naming Conventions:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GOOD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-documenting names ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent patterns ✅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-Referencing:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GOOD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good use of markdown links ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper linking patterns ✅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GOOD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Root ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/README.md"
        }), " for top-level navigation ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Section ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " files for each pillar ✅"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hierarchical navigation ✅"
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
        }), " (matches canonical perfectly)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Extensions:"
        }), " use-cases and Reviews are appropriate additions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ✅ ai-dev-kit's KB structure is a good reference implementation"]
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
            children: "Perfect Canonical Structure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "5-pillar structure matches canonical exactly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear separation of concerns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper navigation"
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
            children: "Lifecycle metadata present"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Housekeeping policies defined"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Comprehensive Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Architecture ADRs well-documented"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Changelog properly maintained"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Guides comprehensive and user-friendly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Cases and Reviews"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "use-cases section for canonical and discovered patterns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reviews section for Post-Implementation Reviews"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good extensions to canonical structure"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-bad-practices",
      children: "2.4 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Needs Improvement:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "None Identified"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "KB structure is exemplary"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Matches canonical perfectly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good reference implementation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-workflow-analysis",
      children: "3. Workflow Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-structure-overview",
      children: "3.1 Structure Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Files:"
        }), " 7 YAML workflow files in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Types:"
        }), " Release, Intake, Testing, Migration, Refactor, Package Version, PIR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Configuration:"
        }), " Example config exists (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config-ai-dev-kit.yaml"
        }), ") but not in project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Execution:"
        }), " No ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file, RW executed manually/by convention"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow.yaml"
        }), " - 12-step Release Workflow ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "intake-workflow.yaml"
        }), " - FR/BR/UXR intake workflow ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "testing-workflow.yaml"
        }), " - Testing workflow ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "migration-workflow.yaml"
        }), " - Migration workflow ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "refactor-workflow.yaml"
        }), " - Refactor workflow ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "package-version-workflow.yaml"
        }), " - Package Version Workflow ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pir-workflow.yaml"
        }), " - Post-Implementation Review workflow ✅"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-distance-from-adk-canonical-workflow-structure",
      children: "3.2 Distance from ADK Canonical Workflow Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK Canonical:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow File Structure:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{name\\}-workflow.yaml"
        }), " ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Location: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/"
        }), " ✅"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YAML structure: Proper structure with steps ✅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Workflow:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PARTIAL MATCH"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step count: 12-step RW (canonical) ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 1: Branch Safety Check (mandatory, blocking) ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Steps 2-12: Standard RW steps ✅"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue:"
        }), " Workflow YAML has hardcoded template paths (", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/confidentia/version.py"
        }), ") ❌"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue:"
        }), " No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root ❌"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual:"
        }), " Only example config exists (", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/config/examples/rw-config-ai-dev-kit.yaml"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " RW cannot use config-driven approach"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Trigger:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected:"
        }), " RW trigger in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual:"
        }), " No ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file exists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " RW must be executed manually/by convention"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file with RW trigger section"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution Pattern:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MANUAL"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected:"
        }), " Agent-driven execution via ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " trigger"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual:"
        }), " Manual execution/by convention"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " No standardized RW trigger"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file with RW trigger"]
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
          children: "MODERATE"
        }), " (workflow structure is good, but missing RW trigger and config)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " ai-dev-kit doesn't use its own RW trigger mechanism"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No standardized RW trigger"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW executed manually/by convention"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cannot demonstrate RW trigger to client projects"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-good-practices",
      children: "3.3 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Comprehensive Workflow Definitions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "7 workflow YAML files defined"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper YAML structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear step definitions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "12-Step Release Workflow"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Canonical 12-step RW defined"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Branch safety check present"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper step ordering"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive workflow documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent execution guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reference documentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Example Configs"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Example ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " files provided"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Multiple mode examples (simple, versioning, full-stack)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good reference for client projects"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-bad-practices",
      children: "3.4 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Needs Improvement:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " File"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " ai-dev-kit doesn't have a ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Cannot demonstrate RW trigger to client projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file with RW trigger section"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " in Project Root"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Only example config exists, not actual config in project root"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " RW cannot use config-driven approach"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " in project root"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow YAML Has Template Paths"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow.yaml"
            }), " has hardcoded template paths (", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/confidentia/version.py"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Workflow YAML is a template, not ai-dev-kit's actual config"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " Use config-driven approach or update paths"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-cursorrules-analysis",
      children: "4. Cursorrules Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-structure-overview",
      children: "4.1 Structure Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DOES NOT EXIST"
        }), " ❌"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Trigger:"
        }), " Not present (RW executed manually/by convention)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Lifecycle:"
        }), " Not present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Restrictions:"
        }), " Not present"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-distance-from-adk-canonical-cursorrules-structure",
      children: "4.2 Distance from ADK Canonical Cursorrules Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK Canonical:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File Naming:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " in project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual:"
        }), " File does not exist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " No RW trigger, no standardized workflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Trigger:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected:"
        }), " Comprehensive RW trigger (12-step)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual:"
        }), " Not present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " RW must be executed manually/by convention"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Lifecycle:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected:"
        }), " Document lifecycle management section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual:"
        }), " Not present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " No lifecycle management rules"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Workflow Restrictions:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected:"
        }), " Git commit/push restrictions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual:"
        }), " Not present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " No workflow enforcement"]
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
          children: "HIGH"
        }), " (missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file entirely)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " ai-dev-kit doesn't use its own cursorrules framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cannot demonstrate RW trigger to client projects"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No standardized workflow trigger"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW executed manually/by convention"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-good-practices",
      children: "4.3 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RW Trigger Template Exists"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
            }), " provides template"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive 12-step RW trigger documented"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good reference for client projects"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW trigger section well-documented"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Clear instructions for adding to ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good examples provided"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-bad-practices",
      children: "4.4 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Needs Improvement:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " File"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " ai-dev-kit doesn't have a ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Cannot demonstrate RW trigger to client projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file with RW trigger section"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "No Document Lifecycle Management"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " No document lifecycle section in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " No lifecycle management rules"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " Add document lifecycle section"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "No Git Workflow Restrictions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " No git restrictions in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " No workflow enforcement"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " Add git workflow restrictions"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-versioning-analysis",
      children: "5. Versioning Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-structure-overview",
      children: "5.1 Structure Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " (legacy path)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Schema:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current Version:"
        }), " v0.6.6.6+1 (Epic 6, Story 6, Task 6, Build 1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Bumping:"
        }), " In RW ✅"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-distance-from-adk-canonical-versioning-structure",
      children: "5.2 Distance from ADK Canonical Versioning Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK Canonical:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Schema:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " ✅"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper schema definition ✅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File Location:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LEGACY PATH"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/ai_dev_kit/version.py"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/\\{project\\}/version.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " (legacy path from fynd.deals)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Legacy path, not following own canonical structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Migrate to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/ai_dev_kit/version.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Bumping:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GOOD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version bumped in RW ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper version progression ✅"
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
        }), " (legacy path, but functional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Historical path from fynd.deals project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - path doesn't match canonical structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-good-practices",
      children: "5.3 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Proper Version Schema"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " schema correctly implemented"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version file properly structured"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version bumping in RW"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Version Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Versioning policy well-documented"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Versioning cookbook provides examples"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integration guides available"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-bad-practices",
      children: "5.4 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Needs Improvement:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Version File Path"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/fynd_deals/version.py"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/ai_dev_kit/version.py"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Doesn't follow own canonical structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " Migrate to canonical path"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-framework-packages-analysis",
      children: "6. Framework Packages Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-structure-overview",
      children: "6.1 Structure Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Packages:"
        }), " 4 frameworks in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/"
            }), " - Kanban Framework ✅"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "workflow mgt/"
            }), " - Workflow Management Framework ✅"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "numbering-versioning/"
            }), " - Versioning Framework ✅"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "doc-lifecycle/"
            }), " - Document Lifecycle Framework ✅"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "debug-path/"
            }), " - Debug Path Framework ✅"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/\n├── kanban/\n│   ├── templates/          # Epic/Story/Task templates ✅\n│   ├── scripts/            # Installation and migration scripts ✅\n│   ├── policies/           # Governance policies ✅\n│   └── README.md          # Framework documentation ✅\n├── workflow mgt/\n│   ├── workflows/         # Workflow YAML files ✅\n│   ├── scripts/           # Workflow scripts ✅\n│   ├── config/            # Config examples ✅\n│   └── README.md          # Framework documentation ✅\n├── numbering-versioning/\n│   ├── versioning-policy.md ✅\n│   └── README.md          # Framework documentation ✅\n├── doc-lifecycle/\n│   ├── policies/          # Lifecycle policies ✅\n│   └── README.md         # Framework documentation ✅\n└── debug-path/\n    ├── templates/         # Debug path templates ✅\n    └── README.md         # Framework documentation ✅\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-distance-from-adk-canonical-framework-structure",
      children: "6.2 Distance from ADK Canonical Framework Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK Canonical:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Organization:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Frameworks in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/"
        }), " ✅"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each framework has templates, scripts, policies ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper documentation structure ✅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Template System:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXCELLENT"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive template system ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "21 epic templates ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "62+ story templates ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "193+ task templates ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper contextualization with placeholders ✅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Installation Scripts:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GOOD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), " exists ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "install_release_workflow.py"
        }), " exists ✅"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration scripts available ✅"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXCELLENT"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive README files ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation guides ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Usage guides ✅"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshooting guides ✅"
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
        }), " (excellent framework structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ✅ ai-dev-kit's framework packages are exemplary"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-good-practices",
      children: "6.3 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Comprehensive Template System"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "21 epic templates with proper placeholders"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "62+ story templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "193+ task templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper contextualization"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Installation Scripts"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban installer with multiple modes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW installer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration utilities"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive framework documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Installation guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Usage guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Troubleshooting guides"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Canonical Epic Templates"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic templates properly separated from ai-dev-kit's actual epics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear distinction between canonical and project-specific"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-bad-practices",
      children: "6.4 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Needs Improvement:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 9 Template vs Actual Epic 9 Mismatch"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Canonical template Epic 9 is \"User Management and Authentication\", but ai-dev-kit's actual Epic 9 is \"Book Related Work\""]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " CRITICAL - Causes confusion and mashup in client projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Rename ai-dev-kit's Epic 9 to Epic 24+ (project-specific range)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "OR clearly document that Epic 9 in ai-dev-kit is project-specific"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Ensure installer uses canonical templates, not ai-dev-kit's actual epics"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
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
        children: "MODERATE"
      }), " (some inconsistencies, but mostly good)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Areas of Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL"
        }), " - Epic 9 mismatch (ai-dev-kit's actual Epic 9 vs canonical template Epic 9)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflows:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MODERATE"
        }), " - Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " - Legacy version file path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KB:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NONE"
        }), " - Perfect match with canonical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Packages:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NONE"
        }), " - Excellent structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Drift Occurred:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic 9 Mismatch:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ai-dev-kit uses Epic 9 for its own project-specific work (book project)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Canonical templates define Epic 9 as \"User Management and Authentication\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No clear separation between ai-dev-kit's actual Kanban and canonical templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Historical evolution (Epic 9 was added for book work before canonical Epic 9 was defined)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ":"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ai-dev-kit doesn't use its own cursorrules framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW executed manually/by convention"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No need for RW trigger in source repository (workflows executed directly)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Legacy Version Path:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Historical path from fynd.deals project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Not migrated to canonical path"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact of Continued Development:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 9 mismatch will continue to cause mashup in client projects"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " prevents demonstration of RW trigger"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy version path doesn't follow own canonical structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-what-adk-can-learn-from-ai-dev-kit-self-analysis",
      children: "8. What ADK Can Learn from ai-dev-kit (Self-Analysis)"
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
            children: "Comprehensive Template System"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "21 epic templates, 62+ story templates, 193+ task templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper contextualization with placeholders"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear template organization"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Perfect KB Structure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "5-pillar canonical structure implemented perfectly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good reference implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper lifecycle metadata"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Package Organization"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Excellent framework package structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear separation of templates, scripts, policies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive documentation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-how-to-harden",
      children: "8.2 How to Harden"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🔧 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardening Opportunities:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CRITICAL: Fix Epic 9 Mismatch"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Epic 9 \"Book Related Work\" conflicts with canonical Epic 9 \"User Management and Authentication\""]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Rename ai-dev-kit's Epic 9 to Epic 24+ (project-specific range)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "OR clearly document that Epic 9 in ai-dev-kit is project-specific"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Ensure installer validation prevents Epic mashup"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " CRITICAL"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " File"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " ai-dev-kit doesn't have a ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution:"
            }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file with RW trigger section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " HIGH (for demonstration purposes)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " to Project Root"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Only example config exists, not actual config"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution:"
            }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " in project root"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " HIGH"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Migrate Version File Path"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Legacy path ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/fynd_deals/version.py"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution:"
            }), " Migrate to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/ai_dev_kit/version.py"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " MEDIUM"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-what-not-to-do-current-issues",
      children: "8.3 What NOT to Do (Current Issues)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Patterns Identified:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic 9 Mismatch (CRITICAL)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern:"
            }), " Using Epic 9 for project-specific work when canonical Epic 9 is defined differently"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Causes mashup in 33% of client projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Prevention:"
            }), " Clear separation between ai-dev-kit's actual Kanban and canonical templates"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " File"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern:"
            }), " Not using own cursorrules framework"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Cannot demonstrate RW trigger to client projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Prevention:"
            }), " Use own frameworks in source repository"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Legacy Version Path"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern:"
            }), " Not following own canonical structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Doesn't demonstrate canonical structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Prevention:"
            }), " Follow own canonical structures"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-critical-issues-summary",
      children: "9. Critical Issues Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-epic-9-mismatch-critical",
      children: "9.1 Epic 9 Mismatch (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Epic 9 \"Book Related Work\" in ai-dev-kit conflicts with canonical Epic 9 \"User Management and Authentication\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit uses Epic 9 for its own project-specific work (book project)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical templates define Epic 9 as \"User Management and Authentication\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No clear separation between ai-dev-kit's actual Kanban and canonical templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Causes mashup in 33% of client projects (been-there, dev-toolkit, agentic-ide-rules)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client projects copying ai-dev-kit's structure get Epic 9 \"Book Related Work\" instead of Epic 9 \"User Management and Authentication\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusion about which epics are canonical vs project-specific"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 1 (Recommended):"
        }), " Rename ai-dev-kit's Epic 9 to Epic 24+ (project-specific range)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 2:"
        }), " Clearly document that Epic 9 in ai-dev-kit is project-specific, not canonical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 3:"
        }), " Ensure installer validation prevents Epic mashup (already fixed in v0.4.6.10+1, but Epic 9 mismatch remains)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " CRITICAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "92-missing-cursorrules-file-high",
      children: ["9.2 Missing ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " File (HIGH)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " ai-dev-kit doesn't have a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " ai-dev-kit doesn't use its own cursorrules framework"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot demonstrate RW trigger to client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No standardized RW trigger"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW executed manually/by convention"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file with RW trigger section"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "93-missing-rw-configyaml-in-project-root-high",
      children: ["9.3 Missing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " in Project Root (HIGH)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Only example config exists, not actual config in project root"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " Config-driven approach not implemented in ai-dev-kit itself"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " RW cannot use config-driven approach"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " in project root"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-recommendations",
      children: "10. Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-immediate-actions-critical",
      children: "10.1 Immediate Actions (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fix Epic 9 Mismatch"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rename ai-dev-kit's Epic 9 \"Book Related Work\" to Epic 24+ (project-specific range)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OR clearly document that Epic 9 in ai-dev-kit is project-specific"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update all references to Epic 9 in ai-dev-kit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure installer uses canonical Epic 9 template, not ai-dev-kit's actual Epic 9"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " File"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file in project root"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add comprehensive RW trigger section (12-step)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add document lifecycle management section"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add git workflow restrictions section"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " to Project Root"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " in project root"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use example config as template"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update paths to match ai-dev-kit's structure"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-short-term-actions-high",
      children: "10.2 Short-Term Actions (HIGH)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Migrate Version File Path"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Migrate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/fynd_deals/version.py"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/ai_dev_kit/version.py"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update all references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update RW config"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Document Epic Separation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clearly document which epics in ai-dev-kit are canonical vs project-specific"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update installation guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add warnings about Epic mashup"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-long-term-actions-medium",
      children: "10.3 Long-Term Actions (MEDIUM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Own Frameworks"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure ai-dev-kit uses its own frameworks (cursorrules, config-driven RW)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Demonstrate best practices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Serve as reference implementation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Regular Self-Audits"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Periodically audit ai-dev-kit against its own canonical structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify drift early"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fix inconsistencies"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-summary-ai-dev-kit-self-analysis",
      children: "11. Summary: ai-dev-kit Self-Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-overall-assessment",
      children: "11.1 Overall Assessment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Good (with CRITICAL Epic 9 mismatch issue)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strengths:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Perfect KB structure (5-pillar canonical)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Comprehensive template system (21 epics, 62+ stories, 193+ tasks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Excellent framework package organization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Good workflow definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Proper versioning schema"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Weaknesses:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ CRITICAL: Epic 9 mismatch (causes mashup in client projects)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ HIGH: Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ HIGH: Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ MINOR: Legacy version file path"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-key-findings",
      children: "11.2 Key Findings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic 9 Mismatch is ROOT CAUSE of Mashup"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ai-dev-kit's Epic 9 \"Book Related Work\" conflicts with canonical Epic 9 \"User Management and Authentication\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "This is the source of the mashup issue affecting 33% of client projects"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ai-dev-kit Doesn't Use Its Own Frameworks"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file (should use own cursorrules framework)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " in project root (should use config-driven approach)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Legacy version path (should follow own canonical structure)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "KB Structure is Exemplary"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Perfect 5-pillar canonical structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good reference implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper lifecycle metadata"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Template System is Comprehensive"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "21 epic templates, 62+ story templates, 193+ task templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper contextualization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear organization"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-critical-actions-required",
      children: "11.3 Critical Actions Required"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fix Epic 9 Mismatch (CRITICAL)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rename ai-dev-kit's Epic 9 to Epic 24+ OR document as project-specific"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update all references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure installer uses canonical templates"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " File (HIGH)"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file with RW trigger"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Demonstrate own cursorrules framework"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " (HIGH)"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create config in project root"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use config-driven approach"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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