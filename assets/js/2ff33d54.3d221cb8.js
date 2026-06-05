"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["72861"], {
87057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_projects_vwmp_adk_analysis_md_2ff_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-projects-vwmp-adk-analysis-md-2ff.json
var site_docs_knowledge_analysis_projects_vwmp_adk_analysis_md_2ff_namespaceObject = JSON.parse('{"id":"knowledge/analysis/projects/vwmp-adk-analysis","title":"Project Analysis: vwmp","description":"Project Type: Visual Workflow Management Platform (Spin-off from confidentia)","source":"@site/../docs/knowledge/analysis/projects/vwmp-adk-analysis.md","sourceDirName":"knowledge/analysis/projects","slug":"/knowledge/analysis/projects/vwmp-adk-analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/vwmp-adk-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/projects/vwmp-adk-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T23:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Project Analysis: starborn_legacy","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/starborn-legacy-adk-analysis"},"next":{"title":"Task-Level Kanban Structure Analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/task-level-kanban-structure-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/projects/vwmp-adk-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-16T23:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Project Analysis: vwmp';

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
  "value": "4. Versioning Analysis",
  "id": "4-versioning-analysis",
  "level": 2
}, {
  "value": "4.1 Versioning Schema",
  "id": "41-versioning-schema",
  "level": 3
}, {
  "value": "4.2 Distance from ADK Canonical Versioning",
  "id": "42-distance-from-adk-canonical-versioning",
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
  "value": "4.5 Recommendations",
  "id": "45-recommendations",
  "level": 3
}, {
  "value": "5. Framework Drift Analysis",
  "id": "5-framework-drift-analysis",
  "level": 2
}, {
  "value": "5.1 Drift Summary",
  "id": "51-drift-summary",
  "level": 3
}, {
  "value": "5.2 Root Causes",
  "id": "52-root-causes",
  "level": 3
}, {
  "value": "5.3 Impact Assessment",
  "id": "53-impact-assessment",
  "level": 3
}, {
  "value": "6. What ADK Can Learn",
  "id": "6-what-adk-can-learn",
  "level": 2
}, {
  "value": "6.1 What to Implement",
  "id": "61-what-to-implement",
  "level": 3
}, {
  "value": "6.2 How to Harden",
  "id": "62-how-to-harden",
  "level": 3
}, {
  "value": "6.3 What NOT to Do",
  "id": "63-what-not-to-do",
  "level": 3
}, {
  "value": "6.4 What to Do Differently",
  "id": "64-what-to-do-differently",
  "level": 3
}, {
  "value": "7. Synthesis &amp; Recommendations",
  "id": "7-synthesis--recommendations",
  "level": 2
}, {
  "value": "7.1 Key Insights",
  "id": "71-key-insights",
  "level": 3
}, {
  "value": "7.2 Critical Recommendations",
  "id": "72-critical-recommendations",
  "level": 3
}, {
  "value": "7.3 Patterns Across Projects",
  "id": "73-patterns-across-projects",
  "level": 3
}, {
  "value": "8. Appendix",
  "id": "8-appendix",
  "level": 2
}, {
  "value": "8.1 File Inventory",
  "id": "81-file-inventory",
  "level": 3
}, {
  "value": "8.2 Comparison Tables",
  "id": "82-comparison-tables",
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
        id: "project-analysis-vwmp",
        children: "Project Analysis: vwmp"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Type:"
      }), " Visual Workflow Management Platform (Spin-off from confidentia)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADK Version:"
      }), " [Partial Adoption - KB structure only, no ADK frameworks as packages]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Method:"
      }), " Partial adoption (KB structure only)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Date:"
      }), " [Pre-ADK or early adopter, 2025-11-20+]"]
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
      }), " Partial Adoption (KB Structure Only)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overall Assessment:"
      }), " Good (partial ADK adoption, NO Epic mashup, minimal structure)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NO Epic Mashup"
        }), " - Epic 01 is project-specific, NO Epic 9 \"Book Related Work\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Minimal KB structure (only Epic 01, very basic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ No ADK frameworks as packages (no packages/frameworks/ directory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ No RW workflow (no .cursorrules, no rw-config.yaml)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ No version.py file (uses VERSION file with simple version string)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Proper Epic/Story structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Good documentation organization"
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
        }), " 1 epic (Epic 01)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Count:"
        }), " 4 stories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Count:"
        }), " Multiple tasks per story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory Structure:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/epics/overview/Epic 01/"
        }), " (with space and zero-padding)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Organization:"
        }), " Nested (Epic → Story documents)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Inventory:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 01: Develop Visual Workflow Management Platform (VWMP) ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NO Epic 9"
        }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NO MASHUP"
        })]
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
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NO MASHUP - ALL PROJECT-SPECIFIC"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 01:"
        }), " Project-specific epic (no framework epics from ai-dev-kit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NO Epic 9:"
        }), " No \"Book Related Work\" epic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Framework Epics:"
        }), " No Epics 1-9 from ai-dev-kit's own Kanban structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good:"
        }), " Project has its own epic structure, no confusion"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Naming:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIVERGES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses \"Epic 01\" (with space and zero-padding) instead of \"epic-01\" (with hyphen, no zero-padding)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Directory structure: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic 01/"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-01/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " Space vs hyphen, zero-padding vs no zero-padding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - different naming convention, but functional"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Structure:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      }), " (mostly)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stories organized under Epic directories"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story naming follows pattern: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-Visual-Workflow-Management-Platform.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story documents include proper structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Structure:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIVERGES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks appear to be embedded in Story documents (not separate files)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T001"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E01:S03:T001"
        }), ", etc. (embedded in stories)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " Tasks not in separate files/directories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - different organization pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naming Conventions:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIVERGES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic 01/epic-01.md"
        }), " (space in directory, hyphen in file, zero-padding)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-Description.md"
        }), " (hyphen format)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task naming: Embedded in stories vs separate files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File Organization:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIVERGES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Structure: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/epics/overview/Epic 01/story-01-Description.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/overview/"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/epics/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - different path, but functional"]
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
        }), " (naming/path differences, but no mashup)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Pre-ADK project or early adopter, minimal structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - different naming conventions and paths, but functional"]
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
            children: "NO Epic Mashup"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 01 is project-specific"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No Epic 9 \"Book Related Work\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear project boundaries"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Good Story Organization"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Stories well-organized under Epic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear story naming"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good story documentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Minimal but Functional"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minimal structure appropriate for spin-off project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good documentation organization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear epic/story structure"
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
            children: "Epic Naming Convention"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Uses \"Epic 01\" (with space and zero-padding) instead of \"epic-01\" (with hyphen, no zero-padding)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Inconsistent with ADK canonical"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Minor - works but inconsistent"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task Organization"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Tasks embedded in Story documents instead of separate files"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Less granular tracking"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Minor - works but less flexible"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "KB Path Difference"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/epics/overview/"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Inconsistent with ADK canonical path"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Minor - works but inconsistent"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "None Identified"
      }), " - No mashup issues found. Epic 01 is project-specific."]
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
          children: "Consider Epic Naming Migration"
        }), " - Evaluate migrating to \"epic-01\" format for consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Organization"
        }), " - Consider separating tasks into individual files for better granularity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider KB Path Migration"
        }), " - Evaluate migrating to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/epics/"
        }), " path for consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "None Otherwise"
        }), " - Epic structure is correct, no mashup"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Legacy Naming"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ADK should support projects with different Epic naming conventions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support both \"Epic 01\" and \"epic-01\" formats"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools flexible for naming conventions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Different KB Paths"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ADK should support projects with different KB paths"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/overview/"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/epics/"
            }), " paths"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools path-configurable"
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
        }), " with minimal structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Count:"
        }), " ~50+ documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Types:"
        }), " Architecture, Documentation, project-management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization Pattern:"
        }), " Minimal structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── Architecture/\n│   ├── component/\n│   ├── container/\n│   ├── context/\n│   ├── Integration_Architecture/\n│   ├── runtime/\n│   └── standards-and-adrs/\n├── Documentation/\n│   └── Developer_Docs/\n└── project-management/\n    └── epics/overview/ (Kanban here)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK Canonical:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADK Canonical: 5 pillars (Architecture, Changelog, Documentation, Guides, project-management)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vwmp: 3 pillars (Architecture, Documentation, project-management) - minimal structure"
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
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIVERGES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " ✅ Matches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " Minimal structure (3 pillars vs 5 pillars)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing:"
        }), " No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-and-release-notes/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Guides/"
        }), " sections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - minimal structure, but functional"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Lifecycle:"
      }), " ❓ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UNKNOWN"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents may not have lifecycle metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need to check frontmatter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naming Conventions:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GOOD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-documenting names"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-Referencing:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GOOD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good use of markdown links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper linking patterns"
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
        }), " (minimal structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Spin-off project, minimal structure appropriate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - minimal structure, but functional"]
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
            children: "Minimal but Functional"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minimal structure appropriate for spin-off project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good documentation organization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Good Architecture Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C4 model views (component, container, context)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Standards and ADRs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good technical documentation"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing ADK Sections"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "changelog-and-release-notes/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Guides/"
            }), " sections"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Missing ADK canonical sections"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Minor - minimal structure works but incomplete"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-recommendations",
      children: "2.5 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider Adding Missing Sections"
        }), " - Could add changelog-and-release-notes, Guides sections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep Minimal Structure"
        }), " - Current minimal structure is appropriate for spin-off project"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support Minimal Structures"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ADK should support projects with minimal KB structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools flexible for different structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't assume full canonical structure"
          }), "\n"]
        }), "\n"]
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
        }), " None found"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Size:"
        }), " N/A"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sections:"
        }), " N/A"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization:"
        }), " N/A"]
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
        }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NOT PRESENT"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No RW trigger section"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No workflow definitions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No RW integration"
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
        }), " ❓ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNKNOWN"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No .cursorrules file to check"
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
        }), " ❓ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNKNOWN"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No .cursorrules file to check"
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
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT PRESENT"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No .cursorrules file found"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No RW trigger section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No workflow definitions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Definitions:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT PRESENT"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No RW workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No workflow integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Instructions:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT PRESENT"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No cursor rules file"
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
          children: "MAJOR"
        }), " (no RW workflow)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Partial ADK adoption - only KB structure, not workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Major - no RW workflow, manual versioning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-good-practices",
      children: "3.4 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "None identified - no .cursorrules file present."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-bad-practices",
      children: "3.5 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Doesn't Work:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No RW Workflow"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " No Release Workflow (RW) integration"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Manual versioning and changelog management"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Major - no automated workflow"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-recommendations",
      children: "3.6 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider RW Adoption"
        }), " - Consider adopting ADK RW workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add .cursorrules"
        }), " - Add .cursorrules file with RW trigger section"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support Partial Adoption"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document projects that adopt KB structure but not RW/workflows"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide migration guidance"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-versioning-analysis",
      children: "4. Versioning Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-versioning-schema",
      children: "4.1 Versioning Schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema Used:"
      }), " Simple version string (", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.0.0+7"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK Canonical:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ADK Canonical:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "vwmp:"
        }), " Simple version string (", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.0.0+7"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " Simple versioning vs explicit Kanban mapping"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.0.0+7"
        }), " (simple version string)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ADK Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-distance-from-adk-canonical-versioning",
      children: "4.2 Distance from ADK Canonical Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIVERGES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses simple version string vs ADK's explicit Epic.Story.Task mapping"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " Simple versioning vs explicit Kanban mapping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Major - different versioning philosophy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version File:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIVERGES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION"
        }), " file vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " Simple file vs Python module"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Major - different version file location/format"]
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
          children: "MAJOR"
        }), " (different versioning schema)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Spin-off project, minimal versioning appropriate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Major - incompatible versioning schema"]
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
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple Versioning"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Simple version string appropriate for spin-off project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minimal structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good for early-stage project"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-bad-practices",
      children: "4.4 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Doesn't Work:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Different Versioning Schema"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Uses simple version string vs ADK's explicit Epic.Story.Task mapping"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Incompatible with ADK versioning tools"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Major - can't use ADK versioning tools directly"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-recommendations",
      children: "4.5 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider Versioning Migration"
        }), " - Evaluate migrating to ADK's RC.EPIC.STORY.TASK+BUILD schema"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Or Keep Simple Versioning"
        }), " - Current simple versioning works for spin-off project"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support Simple Versioning"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ADK should support projects with simple versioning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide migration guidance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support gradual adoption"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-framework-drift-analysis",
      children: "5. Framework Drift Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-drift-summary",
      children: "5.1 Drift Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overall Drift Level:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAJOR"
      }), " (partial adoption, different versioning schema)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Areas of Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " (naming/path differences, but no mashup)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KB:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " (minimal structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflows:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR"
        }), " (no workflows)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR"
        }), " (different schema)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-root-causes",
      children: "5.2 Root Causes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Drift Occurred:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Partial ADK Adoption"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project adopted KB structure but not RW/workflows"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different versioning schema (simple version string)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No ADK framework installation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Spin-off Project"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Spin-off from confidentia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minimal structure appropriate for early-stage project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different requirements"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partial ADK adoption (KB structure only)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spin-off projects need minimal structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Early-stage projects need simple versioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-impact-assessment",
      children: "5.3 Impact Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems Caused:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Incompatible with ADK Tools"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different KB structure incompatible with ADK tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different versioning schema incompatible with ADK tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No RW workflow incompatible with ADK framework"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "But Works Well"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Current structure works well for spin-off project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Minimal structure appropriate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Simple versioning sufficient"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance Burden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low - current structure is well-maintained"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No framework dependencies to manage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-contained"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-what-adk-can-learn",
      children: "6. What ADK Can Learn"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-what-to-implement",
      children: "6.1 What to Implement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Good Practices to Adopt:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimal Structure Pattern"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Minimal KB structure for spin-off/early-stage projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Appropriate for projects that don't need full structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Document as minimal adoption pattern"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-how-to-harden",
      children: "6.2 How to Harden"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🛡️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardening Opportunities:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Minimal Structures"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "What to Harden:"
            }), " Support for projects with minimal KB structures"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make tools flexible for minimal structures"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Don't assume full canonical structure"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide migration guidance"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Simple Versioning"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "What to Harden:"
            }), " Support for projects with simple versioning"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide migration guidance"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Support gradual adoption"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Don't require explicit Epic.Story.Task mapping"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-what-not-to-do",
      children: "6.3 What NOT to Do"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Patterns to Prevent:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assuming Full Structure"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern:"
            }), " Assuming all projects need full KB structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Bad:"
            }), " Spin-off/early-stage projects need minimal structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Prevent:"
            }), " Document minimal adoption pattern, support gradual adoption"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current ADK Issues:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Minimal Structure Support"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " ADK may assume full KB structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Fix:"
            }), " Support minimal structures, provide migration guidance"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-what-to-do-differently",
      children: "6.4 What to Do Differently"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🔄 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Improvements:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support Minimal Structures"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current Approach:"
            }), " May assume full KB structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Better Approach:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Support minimal structures"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide migration guidance"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Support gradual adoption"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-synthesis--recommendations",
      children: "7. Synthesis & Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-key-insights",
      children: "7.1 Key Insights"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Top 3 Insights:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "NO Epic Mashup (Unique)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vwmp is another project with NO Epic mashup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 01 is project-specific"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shows that minimal ADK adoption can still have correct epic structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Minimal Structure Pattern"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Spin-off project with minimal KB structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Appropriate for early-stage projects"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shows common pattern of minimal adoption"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Simple Versioning"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Simple version string appropriate for spin-off project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different from ADK's explicit mapping"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shows need for flexible versioning support"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-critical-recommendations",
      children: "7.2 Critical Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Minimal Structures"
          }), " (Priority: Medium)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support projects with minimal KB structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide migration guidance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support gradual adoption"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Simple Versioning"
          }), " (Priority: Medium)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support projects with simple versioning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide migration guidance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support gradual adoption"
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
          children: "Keep Minimal Structure"
        }), " - Current minimal structure is appropriate for spin-off project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider Gradual Adoption"
        }), " - Could adopt more ADK patterns gradually"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-patterns-across-projects",
      children: "7.3 Patterns Across Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partial ADK adoption (KB structure only) is common"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spin-off projects need minimal structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Early-stage projects need simple versioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unique to vwmp:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NO Epic mashup (another project without it)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimal KB structure (spin-off project)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple versioning (early-stage project)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-appendix",
      children: "8. Appendix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-file-inventory",
      children: "8.1 File Inventory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/epics/overview/Epic 01/"
        }), " (Epic 01 only, with space and zero-padding)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4 stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks embedded in stories"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/"
        }), " (C4 model views, ADRs)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/"
        }), " (epics/overview/)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None found"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None found"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION"
        }), " (simple version string)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-comparison-tables",
      children: "8.2 Comparison Tables"
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
            children: "vwmp"
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
            children: "Project-specific epic (01)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES (no mashup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic Naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-01 (hyphen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic 01 (space, zero-padding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ DIVERGES"
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
            children: "Tasks embedded in stories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ DIVERGES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/project-management/kanban/epics/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/project-management/epics/overview/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ DIVERGES"
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
            children: "vwmp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Match?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Root Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "docs/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directory Organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 pillars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 pillars (minimal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ DIVERGES"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontmatter with lifecycle metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❓ Unknown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❓ UNKNOWN"
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