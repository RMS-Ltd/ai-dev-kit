"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["67514"], {
29722(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_projects_starborn_legacy_adk_analysis_md_20f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-projects-starborn-legacy-adk-analysis-md-20f.json
var site_docs_knowledge_analysis_projects_starborn_legacy_adk_analysis_md_20f_namespaceObject = JSON.parse('{"id":"knowledge/analysis/projects/starborn-legacy-adk-analysis","title":"Project Analysis: starborn_legacy","description":"Project Type: 4X Space Strategy Game (Flutter/Dart)","source":"@site/../docs/knowledge/analysis/projects/starborn-legacy-adk-analysis.md","sourceDirName":"knowledge/analysis/projects","slug":"/knowledge/analysis/projects/starborn-legacy-adk-analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/starborn-legacy-adk-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/projects/starborn-legacy-adk-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T22:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Project Analysis: qa-kb","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/qa-kb-adk-analysis"},"next":{"title":"Project Analysis: vwmp","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/vwmp-adk-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/projects/starborn-legacy-adk-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-16T22:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Project Analysis: starborn_legacy';

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
  "value": "2.2 Additional Documentation Structures (EXPANDED SCOPE)",
  "id": "22-additional-documentation-structures-expanded-scope",
  "level": 3
}, {
  "value": "2.3 Distance from ADK Canonical KB Structure",
  "id": "23-distance-from-adk-canonical-kb-structure",
  "level": 3
}, {
  "value": "2.4 Good Practices",
  "id": "24-good-practices",
  "level": 3
}, {
  "value": "2.5 Bad Practices",
  "id": "25-bad-practices",
  "level": 3
}, {
  "value": "2.6 Recommendations",
  "id": "26-recommendations",
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
        id: "project-analysis-starborn_legacy",
        children: "Project Analysis: starborn_legacy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Type:"
      }), " 4X Space Strategy Game (Flutter/Dart)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADK Version:"
      }), " [Pre-ADK or Early Adopter - No ADK frameworks as packages]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Method:"
      }), " Custom implementation (no ADK package installation)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Date:"
      }), " [Pre-ADK or early adopter, 2025-11-21+]"]
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
      }), " Pre-ADK / Early Adopter (Custom Implementation)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overall Assessment:"
      }), " Good (mature project with custom structure, NO Epic mashup)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NO Epic Mashup"
        }), " - Epic 9 is \"Ship Design Interface\" (project-specific), NOT \"Book Related Work\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Different Epic naming convention (\"epic-09\" with zero-padding vs \"epic-09\")"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ Different KB structure (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/epics/overview/"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Custom RW workflow (10-step, not using ADK framework directly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ No ADK frameworks as packages (no packages/frameworks/ directory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Proper version file using RC.EPIC.STORY.TASK+BUILD schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Good workflow integration (RW trigger in .cursorrules)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Comprehensive custom scripts for validation/automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Strong git commit/push restrictions (only via RW)"
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
        }), " 18 epics (Epics 01-18)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Count:"
        }), " ~40+ stories across epics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Count:"
        }), " 170+ tasks delivered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory Structure:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/epics/overview/Epic-XX/"
        }), " (with zero-padding)"]
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
        children: "Epic 01: Basic Galaxy Navigation ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 02: Enhanced Ship Interaction ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 03: Testing and Documentation ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 04: Waypoint System Implementation ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 05: Multiple Ship Support ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 06: Resource System - Production & Consumption ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 07: Colony Establishment ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 08: Research & Technology Program ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 09: Ship Design Interface"
        }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PROJECT-SPECIFIC"
        }), " (NOT \"Book Related Work\")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 10: User Acceptance Testing (UAT) & Playability Assessment ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 11-18: [Various project epics]"
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
          children: "Epics 01-18:"
        }), " All project-specific epics (no framework epics from ai-dev-kit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 09:"
        }), " \"Ship Design Interface\" - project-specific, NOT \"Book Related Work\""]
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
        children: "Uses \"epic-09\" (with zero-padding) instead of \"epic-09\" (without zero-padding)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Directory structure: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-09/"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-09/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " Zero-padding vs no zero-padding"]
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
          children: "E09-S01.md"
        }), " (Epic-Story format)"]
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
          children: "E09:S01:T008"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E15:S02:T063"
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
          children: "epic-09/epic-09.md"
        }), " (zero-padded)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E09-S01.md"
        }), " (Epic-Story format)"]
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
          children: "docs/project-management/epics/overview/epic-09/E09-S01.md"
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
        }), " Pre-ADK project or early adopter, evolved its own structure before ADK existed"]
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
            children: "All epics are project-specific"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 09 is \"Ship Design Interface\", not \"Book Related Work\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear project boundaries"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Comprehensive Epic Coverage"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "18 epics covering full project lifecycle"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good epic organization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear epic status tracking"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Good Story Organization"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Stories well-organized under epics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear story naming (E09-S01 format)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good story documentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic 15 Infrastructure Epic"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 15 serves as infrastructure epic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good pattern for ongoing infrastructure work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear separation from feature epics"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "UAT-Driven Development"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 10 focuses on UAT"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good pattern for quality assurance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear UAT considerations in epics"
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
            }), " Uses \"epic-09\" (with zero-padding) instead of \"epic-09\" (without zero-padding)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Inconsistent with ADK canonical"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Minor - works but inconsistent"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Cause:"
            }), " Pre-ADK structure, evolved before ADK existed"]
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
            }), " Less granular tracking, harder to reference individual tasks"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Minor - works but less flexible than ADK canonical"]
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
      }), " - No mashup issues found. Epic 09 is project-specific (\"Ship Design Interface\"), not \"Book Related Work\"."]
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
        }), " - Evaluate migrating to \"epic-09\" format for consistency"]
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
            children: "Support both \"epic-09\" and \"epic-09\" formats"
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Document Pre-ADK Patterns"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document common pre-ADK structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide migration guidance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support gradual adoption"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-knowledge-base-kb-analysis",
      children: "2. Knowledge Base (KB) Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-structure-overview",
      children: "2.1 Structure Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary KB Structure:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " directory"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory Structure:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " with different organization than ADK canonical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Count:"
        }), " ~200+ documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Types:"
        }), " Architecture, Changelog, Design, Documentation, Narrative, project-management, Research, Reference_Materials"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization Pattern:"
        }), " Different from ADK canonical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── Architecture/\n│   ├── design-decisions/\n│   ├── designs/\n│   └── processes/\n├── changelog-and-release-notes/\n├── Design/\n│   ├── patterns/\n│   ├── principles/\n│   └── theory/\n├── Documentation/\n│   └── Document_Templates/\n├── Narrative/\n│   ├── designs/\n│   ├── research/\n│   └── templates/\n├── project-management/\n│   ├── epics/overview/ (Kanban here)\n│   └── templates/\n├── Reference_Materials/\n├── Research/\n└── Stars_Game_Documentation/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secondary Documentation Structure:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " directory (EXPANDED SCOPE)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory Structure:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " with extensive documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Count:"
        }), " ~200+ documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Types:"
        }), " Architecture, Analysis, Bug Reports, Changelog Archive, Design, Feature Requests, Kanban Governance, Release Workflow, UAT, Versioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization Pattern:"
        }), " Flat and nested hybrid structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "docs/ Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── ANALYSIS/                    # Analysis documents\n├── ARCHITECTURE/                # Architecture documentation\n├── bug_reports/                 # Bug reports (BR-001 through BR-039)\n├── changelog_archive/          # Changelog archive\n├── design/                      # Design documents\n├── designs/                      # Design documents\n├── feature_requests/           # Feature requests\n├── features/                     # Feature documentation\n├── FUTURE_WORK/                 # Future work planning\n├── kanban-overhaul/            # Kanban overhaul documentation (E15:S06)\n│   ├── ai-dev-kit-upgrade-status.md\n│   ├── comprehensive-story-analysis.md\n│   ├── migration-readiness-assessment.md\n│   ├── story-analysis/         # Per-story analysis\n│   └── task-connection-graph.json\n├── KANBAN_EPICS.md             # Kanban epics documentation\n├── KANBAN_GOVERNANCE.md        # Kanban governance policy\n├── RELEASE_WORKFLOW.md          # Release workflow documentation\n├── VERSIONING_POLICY.md         # Versioning policy\n├── UAT_*.md                     # UAT documentation (multiple files)\n└── [many other documentation files]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Documentation Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/KANBAN_EPICS.md"
        }), " - First iteration Kanban documentation (834 lines)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/KANBAN_GOVERNANCE.md"
        }), " - Kanban governance policy (adapted from Confidentia, 297 lines)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/kanban-overhaul/"
        }), " - Comprehensive Kanban overhaul documentation for E15", ":S06", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit-upgrade-status.md"
            }), " - Monitoring ai-dev-kit upgrades"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "comprehensive-story-analysis.md"
            }), " - Story analysis"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "migration-readiness-assessment.md"
            }), " - Migration readiness"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "story-analysis/"
            }), " - Per-story analysis documents (E15-S02 through E15-S06)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "task-connection-graph.json"
            }), " - Task dependency graph"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/VERSIONING_POLICY.md"
        }), " - Versioning policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/RELEASE_WORKFLOW.md"
        }), " - Release workflow documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/UAT_*.md"
        }), " - Multiple UAT-related documents (UAT-driven development framework)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-additional-documentation-structures-expanded-scope",
      children: "2.2 Additional Documentation Structures (EXPANDED SCOPE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "docs/ Directory Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/KANBAN_EPICS.md"
        }), " - Comprehensive Kanban epics documentation (834 lines)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documents first iteration Kanban structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Includes epic descriptions, status, interfaces"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shows evolution of Kanban structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/KANBAN_GOVERNANCE.md"
        }), " - Kanban governance policy (297 lines)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Adapted from Confidentia numbering & versioning policy package"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Defines work-item types (Epic → Story → Task)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Establishes documentation, numbering, and versioning requirements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Links rituals to documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integrates versioning schema with work item structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/kanban-overhaul/"
        }), " - Comprehensive Kanban overhaul documentation", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " E15", ":S06", " - Comprehensive Kanban Overhaul and Migration"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Files:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "ai-dev-kit-upgrade-status.md"
                }), " - Monitoring ai-dev-kit upgrades"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "comprehensive-story-analysis.md"
                }), " - Story analysis"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "migration-readiness-assessment.md"
                }), " - Migration readiness"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "story-analysis/"
                }), " - Per-story analysis (E15-S02 through E15-S06)"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "task-connection-graph.json"
                }), " - Task dependency graph"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Pattern:"
            }), " Shows active migration planning and analysis"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/VERSIONING_POLICY.md"
        }), " - Versioning policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/VERSIONING_STRATEGY.md"
        }), " - Versioning strategy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/VERSIONING_CORRECTION_E15_S03.md"
        }), " - Versioning corrections"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple version mapping reference documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Workflow Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/RELEASE_WORKFLOW.md"
        }), " - Release workflow documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/release-workflow-agent-execution.md"
        }), " - Agent execution guide"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UAT Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/UAT_*.md"
        }), " - Multiple UAT-related documents", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UAT_CONSIDERATIONS.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UAT_CRITICAL_BLOCKERS.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UAT_DRIVEN_DEVELOPMENT_FRAMEWORK.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UAT_FEEDBACK_SUMMARY.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UAT_FIRST_QUICK_REFERENCE.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UAT_LINEAR_PATH_QUICK_REFERENCE.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UAT_PLAYABILITY_ASSESSMENT.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UAT_QUICK_START.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UAT_TEST_PLAN.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " UAT-driven development approach"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug Reports:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/bug_reports/"
        }), " - 39 bug reports (BR-001 through BR-039)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/BUG_REPORTS.md"
        }), " - Bug reports index"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Feature Requests:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/feature_requests/"
        }), " - Feature request documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/FEATURE_REQUESTS.md"
        }), " - Feature requests index"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/ARCHITECTURE/"
        }), " - Architecture documentation", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "domain-model-contracts.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "service-interfaces.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "factory-pattern-implementation-plan.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "localized-resources-migration-plan.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "resource-transfer-fix-pattern-analysis.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/ANALYSIS/"
        }), " - Analysis documents", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "comprehensive-redesign-feasibility.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "comprehensive-redesign-implementation-summary.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dual-manual-analysis-summary.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stars-manual-fsm-analysis-summary.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stars-vga-planets-comparison.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/design/"
        }), " - Design documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/designs/"
        }), " - Design documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/features/"
        }), " - Feature documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Archive:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog_archive/"
        }), " - Extensive changelog archive", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Multiple CHANGELOG files with version tracking"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-distance-from-adk-canonical-kb-structure",
      children: "2.3 Distance from ADK Canonical KB Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK KB:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Primary KB Structure (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), "):"]
      })
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
        }), " Different organization (epics/overview/ vs kanban/epics/)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Additional Sections:"
        }), " Design, Narrative, Research, Reference_Materials, Stars_Game_Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing:"
        }), " No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Architecture/standards-and-adrs/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Guides/"
        }), " sections (or different organization)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Major - different structure, but functional"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Secondary Documentation Structure (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " (separate from docs/)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " Flat and nested hybrid structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Additional Sections:"
        }), " Extensive documentation covering Kanban, Versioning, Release Workflow, UAT, Bug Reports, Feature Requests, Architecture, Analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " Comprehensive documentation structure outside docs/"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Major - shows dual documentation structure (docs/ for structured knowledge, docs/ for operational documentation)"]
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
          children: "MAJOR"
        }), " (different structure, dual documentation approach)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Pre-ADK project, evolved its own structure before ADK existed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Major - incompatible with ADK tools expecting canonical structure, but functional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unique Pattern:"
        }), " Dual documentation structure (docs/ + docs/) shows separation of concerns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-good-practices",
      children: "2.4 Good Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Works Well:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Comprehensive KB Structure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good organization for game project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Design and Narrative sections appropriate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Research section valuable"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Good Documentation Organization"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear section organization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good separation of concerns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper navigation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Narrative Section"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Unique Narrative section for game project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good pattern for narrative-driven games"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Research sub-section valuable"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-bad-practices",
      children: "2.5 Bad Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Doesn't Work:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Incompatible KB Structure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Different structure than ADK canonical"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Incompatible with ADK tools expecting canonical structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Major - can't use ADK KB tools without modification"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Note:"
            }), " But structure is appropriate for game project"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Missing ADK Sections"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " No direct match to ADK canonical structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Missing ADK canonical sections"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Major - can't adopt ADK KB patterns directly"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-recommendations",
      children: "2.6 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep Current Structure"
        }), " - Current KB structure is appropriate for game project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider ADK Integration"
        }), " - Could adopt ADK patterns where appropriate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Differences"
        }), " - Document differences from ADK canonical for reference"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Different KB Structures"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ADK should support projects with different KB structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools flexible for different structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't assume canonical structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Learn from Game Projects"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Game projects may need Narrative, Design sections"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider documenting as domain-specific patterns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support domain-specific structures"
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
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (project root)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Size:"
        }), " ~270+ lines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sections:"
        }), " Multiple sections including RW trigger section, git restrictions"]
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
            children: "10-step workflow (custom, not ADK framework)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Git commit/push restrictions (only via RW)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "State machine TODO tracking"
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
      }), " (mostly)"]
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
        children: "DIVERGES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses 10-step workflow (custom implementation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADK canonical uses 11-step with branch safety Step 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom implementation vs ADK framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing branch safety check"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Restrictions:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXCELLENT"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong git commit/push restrictions (only via RW)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good enforcement pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents accidental commits"
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
        children: "Proper TODO tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State machine pattern"
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
        }), " (custom implementation, but appropriate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Pre-ADK project, developed own RW before ADK existed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - custom implementation works well, but missing branch safety"]
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
            children: "Strong Git Restrictions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Excellent git commit/push restrictions (only via RW)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevents accidental commits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good enforcement pattern"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing Branch Safety Check"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " 10-step workflow missing branch safety Step 1"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Missing critical safety check"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Minor - should add branch safety check"]
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
          children: "Add Branch Safety Check"
        }), " - Add branch safety Step 1 to RW workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "None Otherwise"
        }), " - Cursor rules are well-designed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learn from Git Restrictions"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "starborn_legacy's git restrictions are excellent"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider adding to ADK canonical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document as best practice"
          }), "\n"]
        }), "\n"]
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
        }), " None found"]
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
        }), " (via .cursorrules)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW properly configured"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom 10-step implementation"
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
        children: "None detected"
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
        children: "Custom RW implementation (10-step)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git restrictions workflow"
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
        }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DIVERGES"
        }), " (custom implementation)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom 10-step RW vs ADK framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Works well but not using ADK framework"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Patterns:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIVERGES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom implementation vs framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But patterns are similar"
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
        }), " (custom implementation, but appropriate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Pre-ADK project, developed own RW before ADK existed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - custom implementation works well"]
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
            children: "Custom RW Implementation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Well-designed custom RW"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good validation steps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper integration"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Git Restrictions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Excellent git restrictions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevents accidental commits"
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
      children: "None identified - workflows are well-designed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-recommendations",
      children: "4.7 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None - workflows are well-designed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn from git restrictions patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider adding to ADK framework"
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
        }), " (custom implementation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake Workflows:"
        }), " ❓ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNKNOWN"
        }), " (need to check)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom Workflows:"
        }), " Git restrictions"]
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
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/release_workflow.sh"
        }), " - Custom RW script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_branch_context.py"
        }), " - Branch validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_changelog_format.py"
        }), " - Changelog validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/kanban_version_updater.py"
        }), " - Kanban version updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/release_helper.py"
        }), " - Release helper"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom RW Script:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom RW implementation (not ADK framework)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper validation scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Good automation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADK Framework Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None detected - project doesn't use ADK frameworks as packages"
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
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIVERGES"
      }), " (custom implementation)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom 10-step RW vs ADK framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works well but not using ADK framework"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Workflows:"
      }), " ❓ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UNKNOWN"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need to check if FR/BR intake workflows exist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Patterns:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIVERGES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom implementation vs framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But patterns are similar"
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
        }), " (custom implementation, but appropriate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Pre-ADK project, developed own RW before ADK existed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - custom implementation works well"]
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
            children: "Comprehensive Validation Scripts"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Many custom validation scripts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good automation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive coverage"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Automation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good automation scripts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban version updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release helpers"
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
      children: "None identified - workflows are well-designed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-recommendations",
      children: "5.6 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None - workflows are well-designed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn from validation patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider adding to ADK framework"
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
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/release_workflow.sh"
        }), " - Custom RW script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_branch_context.py"
        }), " - Branch validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_changelog_format.py"
        }), " - Changelog validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/kanban_version_updater.py"
        }), " - Kanban version updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/release_helper.py"
        }), " - Release helper"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/kanban-overhaul/build_graph.py"
        }), " - Kanban graph building"]
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
        }), " RW script, validation scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban:"
        }), " Kanban version updater"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KB:"
        }), " Kanban graph building"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom RW Script"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Customization:"
            }), " Complete custom implementation"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Drift from ADK:"
            }), " Major - not using ADK framework"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issues:"
            }), " None - works well"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Comprehensive Validation Scripts"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Customization:"
            }), " Many custom validation scripts"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Drift from ADK:"
            }), " Some scripts may be similar to ADK"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issues:"
            }), " None - works well"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None detected - project doesn't use ADK frameworks as packages"
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
            children: "Comprehensive Script Coverage"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Many validation scripts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good automation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive tooling"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Automation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good automation scripts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban version updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release helpers"
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
      children: "None identified - scripts are well-designed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-recommendations",
      children: "6.6 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None - scripts are well-designed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn from validation patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider adding to ADK framework"
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
        children: "MINOR"
      }), " (custom implementation, but appropriate)"]
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
          children: "MAJOR"
        }), " (different structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflows:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " (custom implementation, but appropriate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scripts:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " (custom implementations, but appropriate)"]
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
            children: "Pre-ADK Project"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project existed before ADK"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Evolved its own structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Developed custom implementations"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "No ADK Framework Installation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project doesn't use ADK frameworks as packages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom implementations throughout"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No framework dependencies"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Game Project Specifics"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Game project needs Narrative, Design sections"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different structure appropriate for game project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom implementations work well"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-ADK projects have different structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom implementations common"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No framework dependencies"
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
            children: "Incompatible with ADK Tools"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different KB structure incompatible with ADK tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom RW incompatible with ADK framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Can't use ADK tooling directly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "But Works Well"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom implementations work well"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Appropriate structure for game project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good patterns"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance Burden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low - custom implementations are well-maintained"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No framework dependencies to manage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-contained"
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
            children: "Git Commit/Push Restrictions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Strong git commit/push restrictions (only via RW)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Prevents accidental commits, ensures all commits follow workflow"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Add to ADK canonical .cursorrules template"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "UAT-Driven Development"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Epic 10 focuses on UAT, UAT considerations in epics"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Ensures quality assurance is built into process"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Document as best practice, consider adding to templates"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Narrative Section for Games"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Narrative section for narrative-driven games"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Domain-specific structure for game projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Document as domain-specific pattern"]
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
            children: "Support Legacy Naming"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "What to Harden:"
            }), " Support for projects with different Epic naming conventions"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Support both \"epic-09\" and \"epic-09\" formats"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make tools flexible for naming conventions"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Don't hardcode naming patterns"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Different KB Paths"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "What to Harden:"
            }), " Support for projects with different KB paths"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Support both ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "epics/overview/"
                }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "kanban/epics/"
                }), " paths"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make tools path-configurable"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Don't hardcode paths"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Domain-Specific Structures"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "What to Harden:"
            }), " Support for domain-specific KB structures"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document domain-specific patterns (games, web apps, etc.)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make tools flexible for different structures"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide configuration options"
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
            children: "Hardcoded Naming"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern:"
            }), " Hardcoding \"epic-09\" format in ADK tools"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Bad:"
            }), " Incompatible with projects using \"epic-09\" format"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Prevent:"
            }), " Make naming flexible, support both formats"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Assuming Canonical Structure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Pattern:"
            }), " Assuming ADK canonical KB structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Bad:"
            }), " Incompatible with projects with different structures"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Prevent:"
            }), " Make tools structure-agnostic, provide configuration"]
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
            children: "Naming Hardcoding"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " ADK tools may hardcode \"epic-09\" format"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Fix:"
            }), " Make naming flexible, support both formats"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Structure Assumptions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " ADK tools may assume canonical KB structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Fix:"
            }), " Make tools structure-agnostic, provide configuration"]
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
            children: "Support Legacy Naming"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current Approach:"
            }), " May assume \"epic-09\" format"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Better Approach:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Support both \"epic-09\" and \"epic-09\" formats"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make tools flexible for naming conventions"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Don't hardcode naming patterns"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Different KB Paths"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current Approach:"
            }), " May assume ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/epics/"
            }), " path"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Better Approach:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Support both ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "epics/overview/"
                }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "kanban/epics/"
                }), " paths"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make tools path-configurable"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Don't hardcode paths"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Domain-Specific Structures"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current Approach:"
            }), " May not support domain-specific structures"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Better Approach:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document domain-specific patterns"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make tools flexible for different structures"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide configuration options"
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
            children: "NO Epic Mashup (Unique)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "starborn_legacy is another project with NO Epic mashup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 09 is \"Ship Design Interface\", not \"Book Related Work\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shows that pre-ADK projects can have correct epic structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Strong Git Restrictions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Excellent git commit/push restrictions (only via RW)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevents accidental commits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good enforcement pattern"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Game Project Specifics"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Game project needs Narrative, Design sections"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different structure appropriate for game project"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom implementations work well"
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
            children: "Learn from Git Restrictions"
          }), " (Priority: High)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "starborn_legacy's git restrictions are excellent"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider adding to ADK canonical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document as best practice"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Legacy Naming"
          }), " (Priority: Medium)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support both \"epic-09\" and \"epic-09\" formats"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools flexible for naming conventions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't hardcode naming patterns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Different KB Paths"
          }), " (Priority: Medium)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/overview/"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/epics/"
            }), " paths"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools path-configurable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't hardcode paths"
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
          children: "Keep Current Structure"
        }), " - Current structure is appropriate for game project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider ADK Integration"
        }), " - Could adopt ADK patterns where appropriate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Branch Safety Check"
        }), " - Add branch safety Step 1 to RW workflow"]
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
        children: "Pre-ADK projects have different structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom implementations common"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No framework dependencies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unique to starborn_legacy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NO Epic mashup (another project without it)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong git restrictions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Game project specifics (Narrative, Design sections)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UAT-driven development"
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
          children: "docs/project-management/epics/overview/Epic-XX/"
        }), " (Epics 01-18, with zero-padding)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple stories per epic"
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
        }), " (design-decisions, designs, processes)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Design/"
        }), " (patterns, principles, theory)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Narrative/"
        }), " (designs, research, templates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/"
        }), " (epics/overview/, templates/)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Research/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Reference_Materials/"
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
        }), " (RW trigger section - 10-step, git restrictions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/release_workflow.sh"
        }), " (custom RW script)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/"
        }), " (validation scripts)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/kanban_version_updater.py"
        }), " (kanban updates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/release_helper.py"
        }), " (release helper)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/kanban-overhaul/"
        }), " (kanban graph building)"]
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
            children: "starborn_legacy"
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
            children: "Project-specific epics (01-18)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES (no mashup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic Naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-09 (no zero-padding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-09 (zero-padding)"
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
            children: "starborn_legacy"
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
            children: "8+ pillars (different)"
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