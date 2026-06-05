"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["58454"], {
70872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_adk_learning_synthesis_md_8d7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-adk-learning-synthesis-md-8d7.json
var site_docs_knowledge_analysis_adk_learning_synthesis_md_8d7_namespaceObject = JSON.parse('{"id":"knowledge/analysis/adk-learning-synthesis","title":"ADK Learning Synthesis: What ADK Can Learn","description":"Purpose: Comprehensive synthesis of what ADK can learn from implementation analysis (implement, harden, avoid, do differently)","source":"@site/../docs/knowledge/analysis/adk-learning-synthesis.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/adk-learning-synthesis","permalink":"/ai-dev-kit/docs/knowledge/analysis/adk-learning-synthesis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/adk-learning-synthesis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADK Implementation Patterns Catalog","permalink":"/ai-dev-kit/docs/knowledge/analysis/adk-implementation-patterns"},"next":{"title":"ADK Mashup Issues Catalog","permalink":"/ai-dev-kit/docs/knowledge/analysis/adk-mashup-issues"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/adk-learning-synthesis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADK Learning Synthesis: What ADK Can Learn';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. What to Implement (Good Practices to Adopt)",
  "id": "1-what-to-implement-good-practices-to-adopt",
  "level": 2
}, {
  "value": "1.1 Full-Context Task Naming (<code>E\\{epic\\}:S\\{story\\}:T\\{task\\}</code>)",
  "id": "11-full-context-task-naming-eepicsstoryttask",
  "level": 3
}, {
  "value": "1.2 Story Checklist Pattern",
  "id": "12-story-checklist-pattern",
  "level": 3
}, {
  "value": "1.3 Config-Driven Approach",
  "id": "13-config-driven-approach",
  "level": 3
}, {
  "value": "1.4 Document Lifecycle Metadata",
  "id": "14-document-lifecycle-metadata",
  "level": 3
}, {
  "value": "2. How to Harden (Hardening Opportunities)",
  "id": "2-how-to-harden-hardening-opportunities",
  "level": 2
}, {
  "value": "2.1 Fix Epic 9 Mismatch (CRITICAL)",
  "id": "21-fix-epic-9-mismatch-critical",
  "level": 3
}, {
  "value": "2.2 Add Installer Validation",
  "id": "22-add-installer-validation",
  "level": 3
}, {
  "value": "2.3 Add Source Repository Frameworks",
  "id": "23-add-source-repository-frameworks",
  "level": 3
}, {
  "value": "2.4 Enforce Full-Context Task Naming",
  "id": "24-enforce-full-context-task-naming",
  "level": 3
}, {
  "value": "3. What NOT to Do (Anti-Patterns to Prevent)",
  "id": "3-what-not-to-do-anti-patterns-to-prevent",
  "level": 2
}, {
  "value": "3.1 Epic Mashup",
  "id": "31-epic-mashup",
  "level": 3
}, {
  "value": "3.2 Hardcoded Paths",
  "id": "32-hardcoded-paths",
  "level": 3
}, {
  "value": "3.3 Missing Validation",
  "id": "33-missing-validation",
  "level": 3
}, {
  "value": "3.4 Poor Documentation",
  "id": "34-poor-documentation",
  "level": 3
}, {
  "value": "3.5 Source Repository Not Using Own Frameworks",
  "id": "35-source-repository-not-using-own-frameworks",
  "level": 3
}, {
  "value": "4. What to Do Differently (Improvements to Current Approach)",
  "id": "4-what-to-do-differently-improvements-to-current-approach",
  "level": 2
}, {
  "value": "4.1 Better Installation Instructions",
  "id": "41-better-installation-instructions",
  "level": 3
}, {
  "value": "4.2 Clearer Template Separation",
  "id": "42-clearer-template-separation",
  "level": 3
}, {
  "value": "4.3 Promote Config-Driven Approach",
  "id": "43-promote-config-driven-approach",
  "level": 3
}, {
  "value": "4.4 Installer Validation",
  "id": "44-installer-validation",
  "level": 3
}, {
  "value": "5. Learning Summary",
  "id": "5-learning-summary",
  "level": 2
}, {
  "value": "5.1 What to Implement",
  "id": "51-what-to-implement",
  "level": 3
}, {
  "value": "5.2 How to Harden",
  "id": "52-how-to-harden",
  "level": 3
}, {
  "value": "5.3 What NOT to Do",
  "id": "53-what-not-to-do",
  "level": 3
}, {
  "value": "5.4 What to Do Differently",
  "id": "54-what-to-do-differently",
  "level": 3
}, {
  "value": "6. Implementation Roadmap",
  "id": "6-implementation-roadmap",
  "level": 2
}, {
  "value": "Phase 1: Critical Fixes (Immediate)",
  "id": "phase-1-critical-fixes-immediate",
  "level": 3
}, {
  "value": "Phase 2: Pattern Promotion (Short-Term)",
  "id": "phase-2-pattern-promotion-short-term",
  "level": 3
}, {
  "value": "Phase 3: Documentation (Short-Term)",
  "id": "phase-3-documentation-short-term",
  "level": 3
}, {
  "value": "Phase 4: Framework Enhancement (Long-Term)",
  "id": "phase-4-framework-enhancement-long-term",
  "level": 3
}, {
  "value": "7. Related Documentation",
  "id": "7-related-documentation",
  "level": 2
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
        id: "adk-learning-synthesis-what-adk-can-learn",
        children: "ADK Learning Synthesis: What ADK Can Learn"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Comprehensive synthesis of what ADK can learn from implementation analysis (implement, harden, avoid, do differently)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part of:"
      }), " E6:S06", ":T01", " – Comprehensive ADK implementation analysis across all projects"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "10 project analysis reports (9 client implementations + ai-dev-kit source)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meta-analysis: Good/Bad Practice Catalog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meta-analysis: Pattern/Anti-Pattern Identification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drift analysis, mashup issues, hardening recommendations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document synthesizes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "what ADK can learn"
      }), " from comprehensive analysis of all implementations. Learning is organized into four categories: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What to Implement"
      }), " (good practices to adopt), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Harden"
      }), " (hardening opportunities), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What NOT to Do"
      }), " (anti-patterns to prevent), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "What to Do Differently"
      }), " (improvements to current approach)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Learnings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement:"
        }), " Full-context task naming (60% convergence), story checklists (90%), config-driven approach (30%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Harden:"
        }), " Fix Epic 9 mismatch (CRITICAL), add installer validation, add source frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avoid:"
        }), " Epic mashup, hardcoded paths, missing validation, poor documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do Differently:"
        }), " Better installation instructions, clearer template separation, promote config-driven"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-to-implement-good-practices-to-adopt",
      children: "1. What to Implement (Good Practices to Adopt)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "11-full-context-task-naming-eepicsstoryttask",
      children: ["1.1 Full-Context Task Naming (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Adoption:"
      }), " 60% (6/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " 100% (canonical pattern)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Implement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Excellent traceability and context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables easy cross-referencing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes task identification unambiguous"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated tooling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Implement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make full-context naming required in templates"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update task templates to use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document as canonical pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce in validators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source uses full-context naming consistently"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "been-there"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev-toolkit"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "agentic-ide-rules"
        }), " demonstrate good usage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-story-checklist-pattern",
      children: "1.2 Story Checklist Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Adoption:"
      }), " 90% (9/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " 100% (canonical pattern)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Implement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Excellent progress tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides quick overview of story progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables version tracking (version markers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes epic-level progress visible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Implement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make story checklist required in Epic templates"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Include version markers: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.N.NNN.T+B)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include status tracking: TODO, IN PROGRESS, COMPLETE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document as canonical pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source uses story checklists consistently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most projects demonstrate good usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-config-driven-approach",
      children: "1.3 Config-Driven Approach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Adoption:"
      }), " 30% (3/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " 100% (promote to canonical)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Implement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables customization without code changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces hardcoded paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports multiple project structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best practice for framework adoption"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Implement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " required in installation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide comprehensive config documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create simple config examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document migration from hardcoded paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add config validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source should add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " to project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects using config demonstrate flexibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-document-lifecycle-metadata",
      children: "1.4 Document Lifecycle Metadata"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Adoption:"
      }), " 60% (6/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " 100% (make required)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Implement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables automated document expiration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports housekeeping automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides document metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improves document management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Implement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make lifecycle metadata required in templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include in document structure templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide lifecycle metadata examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document lifecycle management benefits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source uses lifecycle metadata consistently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects with lifecycle metadata demonstrate benefits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-how-to-harden-hardening-opportunities",
      children: "2. How to Harden (Hardening Opportunities)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-fix-epic-9-mismatch-critical",
      children: "2.1 Fix Epic 9 Mismatch (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current State:"
      }), " ai-dev-kit source has Epic 9 \"Book Related Work\" (project-specific)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " Epic 9 renamed to Epic 24+ (project-specific range)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Harden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root cause of Epic mashup affecting 30% of client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents Epic numbering conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifies canonical vs project-specific epics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Harden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rename Epic 9 \"Book Related Work\" to Epic 24+ in ai-dev-kit source"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all Epic 9 references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document Epic 24+ as project-specific range"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add installer validation to prevent Epic mashup"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Eliminates root cause of Epic mashup"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-add-installer-validation",
      children: "2.2 Add Installer Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current State:"
      }), " No validation to prevent Epic mashup", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " Comprehensive installer validation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Harden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents Epic mashup during installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Catches framework conflicts early"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validates canonical vs project-specific epics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Harden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add Epic numbering validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for Epic mashup (Epic 9 \"Book Related Work\" in non-book projects)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate canonical vs project-specific epic conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warn if copying ai-dev-kit's actual Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevent installation if conflicts detected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Prevents Epic mashup and framework drift"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-add-source-repository-frameworks",
      children: "2.3 Add Source Repository Frameworks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current State:"
      }), " ai-dev-kit source missing ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " in root", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " Source uses own frameworks"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Harden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source can serve as reference implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrates frameworks to client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shows best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Harden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file with comprehensive RW trigger"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " to project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate version file path to canonical location"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document as reference implementation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Source serves as reference implementation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-enforce-full-context-task-naming",
      children: "2.4 Enforce Full-Context Task Naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current State:"
      }), " 60% adoption", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target:"
      }), " 100% adoption (canonical pattern)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Harden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong convergence indicator (60%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Excellent traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated tooling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Harden:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make full-context naming required in templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update validators to enforce format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document as canonical pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration tools for legacy format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Improves traceability and tooling support"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-what-not-to-do-anti-patterns-to-prevent",
      children: "3. What NOT to Do (Anti-Patterns to Prevent)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-epic-mashup",
      children: "3.1 Epic Mashup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Copying ai-dev-kit's actual Kanban structure instead of using canonical templates"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 30% (3/10 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Causes Epic numbering conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects get inappropriate epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework drift and confusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot use canonical templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix Epic 9 mismatch in source"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add installer validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clearly distinguish templates from actual Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve installation instructions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-hardcoded-paths",
      children: "3.2 Hardcoded Paths"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Hardcoded paths in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " instead of using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 50% (5/10 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cannot customize without editing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaks when project structure changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Poor framework adoption"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simpler examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make config required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-missing-validation",
      children: "3.3 Missing Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Skipping branch safety checks and changelog format validation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 20% (2/10 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of invalid releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaks workflow integrity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce validation in workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make validation mandatory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document validation requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add validation to installer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-poor-documentation",
      children: "3.4 Poor Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Missing lifecycle metadata, poor organization, missing navigation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 40% (4/10 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Poor document management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automated housekeeping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficult to navigate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make lifecycle metadata required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrate benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-source-repository-not-using-own-frameworks",
      children: "3.5 Source Repository Not Using Own Frameworks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " ai-dev-kit source missing ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ", using legacy paths"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot demonstrate frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source doesn't serve as reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects can't learn from source"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file to source"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " to project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate to canonical paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use own frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-what-to-do-differently-improvements-to-current-approach",
      children: "4. What to Do Differently (Improvements to Current Approach)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-better-installation-instructions",
      children: "4.1 Better Installation Instructions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Approach:"
      }), " Unclear distinction between templates and actual Kanban", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Improved Approach:"
      }), " Clear separation, explicit guidance, examples"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clearly distinguish canonical templates from ai-dev-kit's actual Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document Epic mashup prevention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide clear installation examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warn against copying actual Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Reduces installation confusion and Epic mashup"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-clearer-template-separation",
      children: "4.2 Clearer Template Separation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Approach:"
      }), " Templates and actual Kanban in same location", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Improved Approach:"
      }), " Clear separation, prominent templates"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move ai-dev-kit's actual Kanban to separate location"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make canonical templates more prominent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clearly mark project-specific epics (Epic 24+)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document separation clearly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Prevents confusion and Epic mashup"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-promote-config-driven-approach",
      children: "4.3 Promote Config-Driven Approach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Approach:"
      }), " 30% adoption, hardcoded paths common", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Improved Approach:"
      }), " 100% adoption, config required"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " required in installation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simpler examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits clearly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Reduces hardcoded paths, improves customization"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-installer-validation",
      children: "4.4 Installer Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Approach:"
      }), " No validation, Epic mashup not prevented", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Improved Approach:"
      }), " Comprehensive validation, prevention"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add Epic numbering validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for Epic mashup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate canonical vs project-specific conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevent installation if conflicts detected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Prevents Epic mashup and framework drift"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-learning-summary",
      children: "5. Learning Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-what-to-implement",
      children: "5.1 What to Implement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Adoption"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-context task naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story checklist pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config-driven approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-how-to-harden",
      children: "5.2 How to Harden"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Hardening"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effort"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fix Epic 9 mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add installer validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add source frameworks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce task naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-what-not-to-do",
      children: "5.3 What NOT to Do"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Anti-Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic mashup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix Epic 9, add validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoded paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promote config-driven"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Poor documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Make lifecycle required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source gaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add source frameworks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-what-to-do-differently",
      children: "5.4 What to Do Differently"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Improvement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Improved"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Installation instructions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unclear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear separation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template separation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear separation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Installer validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-implementation-roadmap",
      children: "6. Implementation Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-critical-fixes-immediate",
      children: "Phase 1: Critical Fixes (Immediate)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix Epic 9 mismatch in source"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add installer validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add source repository frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-pattern-promotion-short-term",
      children: "Phase 2: Pattern Promotion (Short-Term)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce full-context task naming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make lifecycle metadata required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-documentation-short-term",
      children: "Phase 3: Documentation (Short-Term)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve installation instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate templates from actual Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-framework-enhancement-long-term",
      children: "Phase 4: Framework Enhancement (Long-Term)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support legacy patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continuous improvement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-related-documentation",
      children: "7. Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation Analysis Report:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-implementation-analysis-report.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation Patterns:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-implementation-patterns.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift Analysis:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-drift-analysis.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mashup Issues:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-mashup-issues.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardening Recommendations:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-hardening-recommendations.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good/Bad Practices:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-good-bad-practices.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern/Anti-Pattern Identification:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-patterns-anti-patterns.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-18T00:00:00Z", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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