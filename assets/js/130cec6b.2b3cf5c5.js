"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["28273"], {
99454(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_projects_confidentia_adk_analysis_md_130_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-projects-confidentia-adk-analysis-md-130.json
var site_docs_knowledge_analysis_projects_confidentia_adk_analysis_md_130_namespaceObject = JSON.parse('{"id":"knowledge/analysis/projects/confidentia-adk-analysis","title":"Project Analysis: confidentia","description":"Project Type: Learning Outcome Tracker (Django/PostgreSQL Web Application)","source":"@site/../docs/knowledge/analysis/projects/confidentia-adk-analysis.md","sourceDirName":"knowledge/analysis/projects","slug":"/knowledge/analysis/projects/confidentia-adk-analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/confidentia-adk-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/projects/confidentia-adk-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T21:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Project Analysis: been-there","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/been-there-adk-analysis"},"next":{"title":"Project Analysis: dev-toolkit","permalink":"/ai-dev-kit/docs/knowledge/analysis/projects/dev-toolkit-adk-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/projects/confidentia-adk-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-16T21:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Project Analysis: confidentia';

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
        id: "project-analysis-confidentia",
        children: "Project Analysis: confidentia"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Type:"
      }), " Learning Outcome Tracker (Django/PostgreSQL Web Application)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADK Version:"
      }), " [Pre-ADK or Early Adopter - No ADK frameworks as packages]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Method:"
      }), " Custom implementation (no ADK package installation)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Date:"
      }), " [Pre-ADK or early adopter, 2025-01-27+]"]
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
        }), " - Epic 9 is \"Future Considerations\" (project-specific), NOT \"Book Related Work\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Different Epic naming convention (\"Epic 9\" with space vs \"epic-09\" with hyphen)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Multi-branch structure (03, 04, 19, 20, 21, main) with different versioning schemes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Custom RW workflow (11-step, not using ADK framework directly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ No ADK frameworks as packages (no packages/frameworks/ directory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Complex KB structure (many more pillars than ADK canonical)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Proper version file using RC.EPIC.STORY.TASK+BUILD schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Good workflow integration (RW trigger in .cursorrules)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Comprehensive custom scripts for validation/automation"
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
        }), " 22+ epics (Epics 1-22)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Count:"
        }), " ~200+ stories across epics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Count:"
        }), " Multiple tasks per story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory Structure:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/Epic X/"
        }), " (with space, not hyphen)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Organization:"
        }), " Nested (Epic → Story documents)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Inventory (Branch 03):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 1: System Design ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 2: Core Data Models ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 3-8: [Various project epics]"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 9: Future Considerations"
        }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PROJECT-SPECIFIC"
        }), " (NOT \"Book Related Work\")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 10: Automated Rule Enforcement ✅ (project-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 11-22: [Various project epics]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 20: Project Maintenance & Housekeeping ✅ (project-specific)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Branch Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch 03: Version 0.20.4.20+2 (Epic 20)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch 04: [Different versioning]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch 19: [Different versioning]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch 20: [Different versioning]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch 21: [Different versioning]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch main: Version 0.3.7.27+2"
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
          children: "Epics 1-22:"
        }), " All project-specific epics (no framework epics from ai-dev-kit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 9:"
        }), " \"Future Considerations\" - project-specific, NOT \"Book Related Work\""]
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
        children: "Uses \"Epic 9\" (with space) instead of \"epic-09\" (with hyphen)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Directory structure: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic 9/"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-09/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " Space vs hyphen in naming"]
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
          children: "Story-X-Description.md"
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
          children: "E20S1T001"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S1T1"
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
          children: "Epic X/Epic-X.md"
        }), " (space in directory, hyphen in file)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story naming: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-X-Description.md"
        }), " (matches)"]
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
          children: "docs/project-management/kanban/Epic X/Story-X.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " Uses space in Epic directory name, not hyphen"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - different naming, but functional"]
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
        }), " (naming differences, but no mashup)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Pre-ADK project or early adopter, evolved its own structure before ADK existed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Minor - different naming conventions, but functional"]
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
            children: "Epic 9 is \"Future Considerations\", not \"Book Related Work\""
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
            children: "22+ epics covering full project lifecycle"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good epic organization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear epic status tracking"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Branch Support"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Multiple branches with different versioning schemes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good branch isolation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper branch context validation"
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
            children: "Clear story naming"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good story documentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic 20 Maintenance Epic"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 20 serves as maintenance epic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good pattern for ongoing maintenance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear separation from feature epics"
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
            }), " Uses \"Epic 9\" (with space) instead of \"epic-09\" (with hyphen)"]
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
            children: "Multi-Branch Complexity"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Multiple branches with different versioning schemes"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem:"
            }), " Complexity in managing multiple branches"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " Minor - works but adds complexity"]
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
      }), " - No mashup issues found. Epic 9 is project-specific (\"Future Considerations\"), not \"Book Related Work\"."]
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
            children: "Support both \"Epic 9\" and \"epic-09\" formats"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools flexible for naming conventions"
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Branch Support"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document multi-branch patterns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide guidance on branch isolation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support different versioning schemes per branch"
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
        }), " with many more pillars than ADK canonical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Count:"
        }), " ~1000+ documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Types:"
        }), " Architecture, Changelog, Documentation, Governance, Operations, Product, Security, Testing, Tooling, etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization Pattern:"
        }), " Much more complex than ADK canonical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── Architecture/ (C4 model views, specs, ADRs)\n├── changelog-and-release-notes/\n├── Contribution_Guide/\n├── Customer_Enablement/\n├── Data_and_Insights/\n├── Documentation/\n├── engineering-and-platform/\n├── Governance_and_Process/\n├── Monitoring_and_Observability/\n├── Onboarding_and_Enablement/\n├── Operations_and_SRE/\n├── project-management/ (Kanban here)\n├── Product_and_Experience/\n├── Security_and_Compliance/\n├── Testing/\n└── Tooling_and_Integrations/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison to ADK Canonical:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADK Canonical: 5 pillars (Architecture, Changelog, Documentation, Guides, project-management)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confidentia: 15+ pillars (much more comprehensive)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Legacy Knowledge Structure:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "knowledge_restored/knowledge/"
      }), " directory (EXPANDED SCOPE - Branch 21)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory Structure:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_restored/knowledge/"
        }), " with legacy knowledge base"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Count:"
        }), " ~100+ documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Types:"
        }), " Architecture, Charter, Policies, Specs, Technical, Testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization Pattern:"
        }), " Legacy knowledge base structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "knowledge_restored/knowledge/ Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "knowledge_restored/knowledge/\n├── architecture/                 # Architecture documentation\n│   ├── data_models.md\n│   └── system_architecture.md\n├── Charter/                       # Project charter\n│   ├── Mission.md\n│   ├── Objectives.md\n│   ├── project-charter.md\n│   ├── Purpose.md\n│   ├── requirements-specification.md\n│   ├── success-criteria.md\n│   ├── system-architecture-diagram.md\n│   └── Vision.md\n├── db-schema.md                  # Database schema\n├── diagrams/                      # Architecture diagrams\n│   └── dashboard_component_diagram.md\n├── monitoring.md                  # Monitoring documentation\n├── Policies/                      # Policy documentation\n│   ├── Acceptable-Use-Policy.md\n│   ├── branching_strategy.md\n│   ├── Data-Retention-Policy.md\n│   ├── GDPR-Compliance-Policy.md\n│   └── Security-Policy.md\n├── project-definition.md          # Project definition\n├── README.md                      # Knowledge base README\n├── specs/                         # Specifications\n│   ├── Confidentia_KB_Final_Structure.md\n│   ├── Confidentia_KB_Structure_Analysis.md\n│   ├── Confidentia_KB_Structure_Revised.md\n│   ├── dashboard_ui_interfaces.md\n│   ├── deployment_plan.md\n│   ├── domain_models.md\n│   ├── ERD_Learning_Tracker_KS4_KS5.md\n│   ├── File_Mapping_Review_Notes.md\n│   ├── interfaces.md\n│   ├── MCP_Integration_Plan.md\n│   ├── Notion_*.md (multiple Notion-related specs)\n│   ├── requirements.md\n│   ├── student_progress_visualization_history.md\n│   ├── student_self_assessment_api.md\n│   ├── teacher_dashboard_api.md\n│   └── teacher_insight_dashboard.md\n├── technical/                     # Technical documentation\n│   ├── feedback_system_technical.md\n│   ├── SET2_*.md (multiple SET2-related docs)\n│   └── [SET2 architecture, API, development process docs]\n└── testing/                       # Testing documentation\n    ├── CANONICAL_TEST_STUDENTS.md\n    ├── README.md\n    ├── TEST_DATA_QUICK_REFERENCE.md\n    ├── test_users.md\n    ├── UAT_WORKFLOW_GUIDE.md\n    └── workflows/                 # Test workflows\n        ├── admin_user_dashboard.md\n        ├── student_basic_workflow.md\n        ├── student_confidence_states.md\n        └── teacher_dashboard.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Documentation Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_restored/knowledge/Charter/"
        }), " - Project charter documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_restored/knowledge/Policies/"
        }), " - Policy documentation (branching, data retention, GDPR, security)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_restored/knowledge/specs/"
        }), " - Extensive specifications (KB structure analysis, Notion integration, API specs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_restored/knowledge/technical/"
        }), " - Technical documentation (SET2 architecture, API, development process)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_restored/knowledge/testing/"
        }), " - Testing documentation (UAT workflows, test data, canonical test students)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_restored/LEGACY_NOTICE.md"
        }), " - Legacy notice"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Legacy knowledge base structure preserved in branch 21, showing evolution of knowledge management approach"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-distance-from-adk-canonical-kb-structure",
      children: "2.2 Distance from ADK Canonical KB Structure"
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
        }), " Much more complex (15+ pillars vs 5 pillars)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Additional Pillars:"
        }), " Customer_Enablement, Data_and_Insights, engineering-and-platform, Governance_and_Process, Monitoring_and_Observability, Onboarding_and_Enablement, Operations_and_SRE, Product_and_Experience, Security_and_Compliance, Testing, Tooling_and_Integrations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Major - much more comprehensive structure, but different from ADK canonical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Legacy Knowledge Structure (", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_restored/knowledge/"
        }), " - Branch 21):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_restored/knowledge/"
        }), " (separate from docs/)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " Legacy knowledge base structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Additional Sections:"
        }), " Charter, Policies, Specs (extensive), Technical (SET2), Testing (UAT workflows)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " Legacy knowledge base preserved in branch 21, showing evolution of knowledge management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Major - shows historical knowledge management approach, preserved for reference"]
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
        }), " (much more complex structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Pre-ADK project, evolved comprehensive KB structure before ADK existed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Major - incompatible with ADK tools expecting canonical structure, but more comprehensive"]
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
            children: "Comprehensive KB Structure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Much more comprehensive than ADK canonical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good separation of concerns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Well-organized pillars"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Good Documentation Organization"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear pillar ownership"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good placement heuristics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper navigation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Migration Documentation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good migration documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear migration plan"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper migration tracking"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Placement Decision Guide"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good placement heuristics for agents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear decision guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper taxonomy documentation"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Incompatible KB Structure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Issue:"
            }), " Much more complex structure than ADK canonical"]
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
            }), " But structure is more comprehensive and well-designed"]
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
      id: "25-recommendations",
      children: "2.5 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep Current Structure"
        }), " - Current KB structure is comprehensive and well-designed"]
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
            children: "Support Complex KB Structures"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ADK should support projects with more complex KB structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools flexible for different structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't assume canonical structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Learn from Confidentia"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Confidentia's KB structure is more comprehensive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider adopting some pillars (e.g., Operations_and_SRE, Security_and_Compliance)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document as advanced pattern"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Flexible Structure Support"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support projects with different KB organizations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools structure-agnostic where possible"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide configuration options"
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
        }), " (in each branch: 03, 04, 19, 20, 21, main)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Size:"
        }), " ~370+ lines per branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sections:"
        }), " Multiple sections including RW trigger section, branch isolation rules"]
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
            children: "11-step workflow (custom, not ADK framework)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Branch isolation rules"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pre-commit validation"
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
        children: "Uses 11-step workflow (custom implementation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADK canonical uses 11-step with branch safety Step 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom implementation vs ADK framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch isolation rules (good addition)"
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
        children: "Proper validation steps"
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
            children: "Branch Isolation Rules"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Excellent branch isolation rules"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevents cross-branch contamination"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good safety checks"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pre-Commit Validation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pre-commit hooks for validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Branch/version mismatch detection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Changelog format validation"
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
            children: "Multi-Branch Support"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different .cursorrules per branch"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Branch-specific versioning schemes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good branch isolation"
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
      children: "None identified - cursor rules are well-designed, especially branch isolation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-recommendations",
      children: "3.6 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For This Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None - cursor rules are well-designed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For ADK:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Learn from Branch Isolation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Confidentia's branch isolation rules are excellent"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider adding to ADK canonical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document as advanced pattern"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pre-Commit Validation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Confidentia's pre-commit validation is good pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consider adding to ADK framework"
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
        }), " None detected (may be in branch-specific configs)"]
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
            children: "Custom 11-step implementation"
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
        children: "Custom RW implementation (11-step)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch isolation workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-commit validation workflows"
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
            children: "Custom 11-step RW vs ADK framework"
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
            children: "Branch Isolation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Excellent branch isolation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevents cross-branch contamination"
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
        children: "Learn from branch isolation patterns"
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
        }), " Branch isolation, pre-commit validation"]
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
          children: "scripts/validation/validate_branch_context.py"
        }), " - Branch validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_changelog_format.py"
        }), " - Changelog validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/automation/update_kanban_docs.py"
        }), " - Kanban doc updates"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many other custom scripts"
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
        children: "Custom 11-step RW vs ADK framework"
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
            children: "Kanban doc updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version management"
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
          children: "scripts/validation/validate_branch_context.py"
        }), " - Branch validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_changelog_format.py"
        }), " - Changelog validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/automation/update_kanban_docs.py"
        }), " - Kanban doc updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/analysis/"
        }), " - Analysis scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/kb_structure/"
        }), " - KB structure scripts"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many other custom scripts"
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
        }), " Kanban doc update scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KB:"
        }), " KB structure scripts"]
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
            children: "Kanban doc updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "KB structure management"
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
        }), " (naming differences, but no mashup)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KB:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR"
        }), " (much more complex structure)"]
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
            children: "Mature Project"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project is mature and well-established"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive KB structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good patterns developed independently"
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
            children: "Comprehensive structure"
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
            children: "Branch Isolation Rules"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Excellent branch isolation rules in .cursorrules"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Prevents cross-branch contamination"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Add to ADK canonical .cursorrules template"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pre-Commit Validation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Pre-commit hooks for branch/version validation"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Prevents errors before commit"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Add to ADK framework"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Comprehensive KB Structure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Much more comprehensive KB structure (15+ pillars)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Better organization for large projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Document as advanced pattern, consider adding pillars"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic 20 Maintenance Pattern"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Practice:"
            }), " Dedicated maintenance epic (Epic 20)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why Valuable:"
            }), " Clear separation from feature epics"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How to Implement:"
            }), " Document as best practice"]
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
                children: "Support both \"Epic 9\" and \"epic-09\" formats"
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
            children: "Support Complex KB Structures"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "What to Harden:"
            }), " Support for projects with more complex KB structures"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make tools flexible for different structures"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Don't assume canonical structure"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide configuration options"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Branch Support"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "What to Harden:"
            }), " Support for multi-branch projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document multi-branch patterns"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide guidance on branch isolation"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Support different versioning schemes per branch"
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
            }), " Incompatible with projects using \"Epic 9\" format"]
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
            }), " Incompatible with projects with more complex structures"]
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
                children: "Support both \"Epic 9\" and \"epic-09\" formats"
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
            children: "Support Complex KB Structures"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current Approach:"
            }), " May assume canonical KB structure"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Better Approach:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Make tools flexible for different structures"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Don't assume canonical structure"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide configuration options"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Learn from Confidentia"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Current Approach:"
            }), " May not learn from mature projects"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Better Approach:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Learn from confidentia's patterns"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Document as advanced patterns"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Consider adopting where appropriate"
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
            children: "Confidentia is the ONLY project analyzed so far with NO Epic mashup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic 9 is \"Future Considerations\", not \"Book Related Work\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shows that pre-ADK projects can have correct epic structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mature Project Patterns"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Confidentia has mature, well-designed patterns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive KB structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Excellent branch isolation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Good validation patterns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pre-ADK Structure"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Project predates ADK or was early adopter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Custom implementations throughout"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No ADK framework dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Works well independently"
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
            children: "Learn from Confidentia"
          }), " (Priority: High)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Branch isolation rules are excellent"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pre-commit validation is good pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive KB structure is valuable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document as advanced patterns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Legacy Naming"
          }), " (Priority: Medium)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support both \"Epic 9\" and \"epic-09\" formats"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools flexible for naming conventions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't hardcode naming patterns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Complex KB Structures"
          }), " (Priority: Medium)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make tools flexible for different structures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't assume canonical structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide configuration options"
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
        }), " - Current structure is well-designed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consider ADK Integration"
        }), " - Could adopt ADK patterns where appropriate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Differences"
        }), " - Document differences from ADK canonical for reference"]
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
        children: "Unique to Confidentia:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NO Epic mashup (only project without it)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mature, well-designed patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive KB structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Excellent branch isolation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-branch support"
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
          children: "docs/project-management/kanban/Epic X/"
        }), " (Epics 1-22, with space in directory name)"]
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
        }), " (C4 model views, specs, ADRs)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Governance_and_Process/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Operations_and_SRE/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Security_and_Compliance/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Testing/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Tooling_and_Integrations/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many other pillars"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (in each branch: 03, 04, 19, 20, 21, main)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom RW implementation (11-step)"
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
          children: "scripts/automation/"
        }), " (automation scripts)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/analysis/"
        }), " (analysis scripts)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/kb_structure/"
        }), " (KB structure scripts)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many other custom scripts"
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
            children: "confidentia"
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
            children: "Project-specific epics (1-22)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ YES (no mashup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic Naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-09 (hyphen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic 9 (space)"
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
            children: "confidentia"
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
            children: "15+ pillars"
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