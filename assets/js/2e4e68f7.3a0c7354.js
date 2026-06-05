"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["41099"], {
77153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_meta_analysis_patterns_anti_patterns_md_2e4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-meta-analysis-patterns-anti-patterns-md-2e4.json
var site_docs_knowledge_analysis_meta_analysis_patterns_anti_patterns_md_2e4_namespaceObject = JSON.parse('{"id":"knowledge/analysis/meta-analysis-patterns-anti-patterns","title":"Meta-Analysis: Pattern/Anti-Pattern Identification","description":"Purpose: Identify recurring patterns (good practices) and anti-patterns (bad practices) across 10 projects (9 client implementations + ai-dev-kit source)","source":"@site/../docs/knowledge/analysis/meta-analysis-patterns-anti-patterns.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/meta-analysis-patterns-anti-patterns","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-patterns-anti-patterns","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/meta-analysis-patterns-anti-patterns.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-17T22:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Meta-Analysis: Pattern Frequency Tables","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-pattern-frequency-tables"},"next":{"title":"Meta-Analysis: Workflows","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-workflows"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/meta-analysis-patterns-anti-patterns.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-17T22:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Meta-Analysis: Pattern/Anti-Pattern Identification';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Patterns (Recurring Good Practices)",
  "id": "1-patterns-recurring-good-practices",
  "level": 2
}, {
  "value": "1.1 Perfect KB Directory Naming Pattern",
  "id": "11-perfect-kb-directory-naming-pattern",
  "level": 3
}, {
  "value": "1.2 Perfect E/S/T Hierarchy Pattern",
  "id": "12-perfect-est-hierarchy-pattern",
  "level": 3
}, {
  "value": "1.3 Full-Context Task Naming Pattern",
  "id": "13-full-context-task-naming-pattern",
  "level": 3
}, {
  "value": "1.4 Story Checklist Pattern",
  "id": "14-story-checklist-pattern",
  "level": 3
}, {
  "value": "1.5 Document Frontmatter Pattern",
  "id": "15-document-frontmatter-pattern",
  "level": 3
}, {
  "value": "1.6 Config-Driven Customization Pattern",
  "id": "16-config-driven-customization-pattern",
  "level": 3
}, {
  "value": "1.7 Agent-Driven Workflow Execution Pattern",
  "id": "17-agent-driven-workflow-execution-pattern",
  "level": 3
}, {
  "value": "1.8 Perfect 5-Pillar KB Structure Pattern",
  "id": "18-perfect-5-pillar-kb-structure-pattern",
  "level": 3
}, {
  "value": "2. Anti-Patterns (Recurring Bad Practices)",
  "id": "2-anti-patterns-recurring-bad-practices",
  "level": 2
}, {
  "value": "2.1 Epic Mashup Anti-Pattern (CRITICAL)",
  "id": "21-epic-mashup-anti-pattern-critical",
  "level": 3
}, {
  "value": "2.2 Epic 9 Mismatch Anti-Pattern (CRITICAL - in Source)",
  "id": "22-epic-9-mismatch-anti-pattern-critical---in-source",
  "level": 3
}, {
  "value": "2.3 Missing Cursorrules Anti-Pattern (CRITICAL - in Source)",
  "id": "23-missing-cursorrules-anti-pattern-critical---in-source",
  "level": 3
}, {
  "value": "2.4 Missing RW Trigger Anti-Pattern",
  "id": "24-missing-rw-trigger-anti-pattern",
  "level": 3
}, {
  "value": "2.5 Missing Branch Safety Check Anti-Pattern (CRITICAL)",
  "id": "25-missing-branch-safety-check-anti-pattern-critical",
  "level": 3
}, {
  "value": "2.6 Hardcoded Paths Anti-Pattern",
  "id": "26-hardcoded-paths-anti-pattern",
  "level": 3
}, {
  "value": "2.7 Missing Config File Anti-Pattern",
  "id": "27-missing-config-file-anti-pattern",
  "level": 3
}, {
  "value": "2.8 Missing Document Lifecycle Management Anti-Pattern",
  "id": "28-missing-document-lifecycle-management-anti-pattern",
  "level": 3
}, {
  "value": "2.9 Missing Git Workflow Restrictions Anti-Pattern",
  "id": "29-missing-git-workflow-restrictions-anti-pattern",
  "level": 3
}, {
  "value": "2.10 Source Repository Not Using Own Frameworks Anti-Pattern (CRITICAL)",
  "id": "210-source-repository-not-using-own-frameworks-anti-pattern-critical",
  "level": 3
}, {
  "value": "3. Summary: Pattern vs Anti-Pattern Frequency",
  "id": "3-summary-pattern-vs-anti-pattern-frequency",
  "level": 2
}, {
  "value": "3.1 Pattern Adoption Rates",
  "id": "31-pattern-adoption-rates",
  "level": 3
}, {
  "value": "3.2 Anti-Pattern Frequency",
  "id": "32-anti-pattern-frequency",
  "level": 3
}, {
  "value": "4. Root Cause Analysis",
  "id": "4-root-cause-analysis",
  "level": 2
}, {
  "value": "4.1 Epic Mashup Root Cause",
  "id": "41-epic-mashup-root-cause",
  "level": 3
}, {
  "value": "4.2 Low Adoption Root Causes",
  "id": "42-low-adoption-root-causes",
  "level": 3
}, {
  "value": "5. Recommendations",
  "id": "5-recommendations",
  "level": 2
}, {
  "value": "5.1 Immediate Actions (CRITICAL)",
  "id": "51-immediate-actions-critical",
  "level": 3
}, {
  "value": "5.2 Short-Term Actions (HIGH)",
  "id": "52-short-term-actions-high",
  "level": 3
}, {
  "value": "5.3 Long-Term Actions (MEDIUM)",
  "id": "53-long-term-actions-medium",
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
        id: "meta-analysis-patternanti-pattern-identification",
        children: "Meta-Analysis: Pattern/Anti-Pattern Identification"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Identify recurring patterns (good practices) and anti-patterns (bad practices) across 10 projects (9 client implementations + ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part of:"
      }), " E6:S06", ":T06", " – Cross-project meta-analysis and canonical framework design"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "10 project analysis reports (9 client implementations + ai-dev-kit source)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "7 meta-analysis documents (pattern frequency, convergence/divergence, canonical vs legacy, 4 structure-specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4 granular structure analyses (task-level Kanban, docs/documentation, workflows, cursorrules)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document identifies ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "patterns"
      }), " (recurring good practices) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "anti-patterns"
      }), " (recurring bad practices) across all analyzed projects, including the ai-dev-kit source repository. Each pattern/anti-pattern includes frequency data, impact assessment, root cause analysis, prevention strategies, and examples."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perfect Patterns:"
        }), " 2 (KB directory naming 100%, E/S/T hierarchy 100%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strong Patterns:"
        }), " 3 (task naming 60%, story checklists 90%, document frontmatter 90%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Anti-Patterns:"
        }), " 3 (Epic mashup 30%, Epic 9 mismatch in source, missing cursorrules in source)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Causes:"
        }), " Epic 9 mismatch in ai-dev-kit source is root cause of Epic mashup"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-patterns-recurring-good-practices",
      children: "1. Patterns (Recurring Good Practices)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-perfect-kb-directory-naming-pattern",
      children: "1.1 Perfect KB Directory Naming Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " (uppercase, abbreviation) as root directory for knowledge base", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 100% (10/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Perfect convergence", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All projects use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " as root directory for knowledge base"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perfect convergence across all analyzed projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Universal pattern, no exceptions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's a Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perfect convergence (100% adoption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Universal pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear and concise"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to identify knowledge base"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["been-there: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["dev-toolkit: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["agentic-ide-rules: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["confidentia: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(all 10 projects)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Promote ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " as canonical pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " part of installation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " as standard"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " directory naming"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-perfect-est-hierarchy-pattern",
      children: "1.2 Perfect E/S/T Hierarchy Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Use Epic → Story → Task hierarchy for Kanban organization", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 100% (10/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Perfect convergence", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All projects use Epic → Story → Task hierarchy"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consistent nesting: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-\\{N\\}/Story-{NNN}/Task-{YYY}.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear parent-child relationships"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's a Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perfect convergence (100% adoption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides clear organizational structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables hierarchical navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated tooling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-\\{N\\}/Story-{NNN}/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["been-there: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-\\{N\\}/Story-{NNN}/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["dev-toolkit: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/Epic-\\{N\\}/Story-{NNN}/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(all 10 projects)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote E/S/T hierarchy as canonical pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make E/S/T hierarchy part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document E/S/T hierarchy as standard"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source demonstrates perfect E/S/T hierarchy"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-full-context-task-naming-pattern",
      children: "1.3 Full-Context Task Naming Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
      }), " format for task naming", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 60% (6/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Excellent traceability", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "STRONG PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects use full-context task naming (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E1:S01:T01"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S06:T01"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides full context without needing to navigate to parent documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables easy cross-referencing and traceability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's a Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong convergence (60% adoption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides excellent traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes task identification unambiguous"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated tooling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["been-there: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E1:S01:T01"
        }), " format consistently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["dev-toolkit: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S06:T01"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["agentic-ide-rules: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E1:S01:T01"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["confidentia: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E1:S01:T01"
        }), " format"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote full-context task naming as canonical pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make full-context naming part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document full-context naming as standard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide templates with full-context naming"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source uses full-context task naming consistently"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-story-checklist-pattern",
      children: "1.4 Story Checklist Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Use story checklists in Epic documents for progress tracking", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 90% (9/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Excellent progress tracking", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "STRONG PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects use story checklists in Epic documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checklists include version markers for completed stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear status tracking (TODO, IN PROGRESS, COMPLETE)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's a Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong convergence (90% adoption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides quick overview of story progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables version tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes epic-level progress visible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "been-there: Story checklists in Epic documents with version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dev-toolkit: Story checklists with status tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "agentic-ide-rules: Story checklists with completion markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source: Story checklists consistently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote story checklist pattern as canonical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make story checklists part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document story checklist pattern as standard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide templates with story checklists"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source uses story checklists consistently"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-document-frontmatter-pattern",
      children: "1.5 Document Frontmatter Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Use YAML frontmatter with lifecycle metadata in documents", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 90% (9/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Essential for metadata-driven management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "STRONG PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects use YAML frontmatter in documents"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Frontmatter includes lifecycle metadata (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables automated document lifecycle management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's a Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong convergence (90% adoption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables metadata-driven document management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated lifecycle management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides document classification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source: Frontmatter with lifecycle metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "been-there: Frontmatter with lifecycle metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dev-toolkit: Frontmatter with lifecycle metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(9/10 projects)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote document frontmatter as canonical pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make frontmatter part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document frontmatter pattern as standard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide templates with frontmatter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source uses frontmatter consistently"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-config-driven-customization-pattern",
      children: "1.6 Config-Driven Customization Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " for workflow configuration instead of hardcoded paths", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 30% (3/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Best practice", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EMERGING PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " for workflow configuration"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config file defines version file, changelog paths, scripts path"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No hardcoded paths in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's a Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best practice (30% adoption, but recommended)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides flexibility and maintainability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces hardcoded paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables easy customization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["agentic-ide-rules: Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " for workflow configuration"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dev-toolkit: Uses config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "confidentia: Uses config-driven approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote config-driven approach as canonical pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make config part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document config benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guide from hardcoded paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " ai-dev-kit source has example config but not active config in project root"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-agent-driven-workflow-execution-pattern",
      children: "1.7 Agent-Driven Workflow Execution Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Use agent-driven execution (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 56% (5/9 projects with workflows)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - User visibility and control", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MODERATE PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects use agent-driven execution for workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cursor TODO tracking for progress visibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User approval at each step"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's a Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Moderate convergence (56% adoption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides user visibility and control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables intelligent execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports progress tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects with agent-driven execution use Cursor TODOs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User approval at each workflow step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Progress tracking throughout workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote agent-driven execution as canonical pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make agent-driven execution part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-perfect-5-pillar-kb-structure-pattern",
      children: "1.8 Perfect 5-Pillar KB Structure Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " Use 5-pillar KB structure (Architecture, Changelog, PM, Guides, Documentation)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 40% (4/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Excellent organization", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "REFERENCE PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects use 5-pillar KB structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear separation of concerns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standardized organization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's a Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference implementation (40% adoption, but ai-dev-kit source demonstrates perfect implementation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear separation of concerns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standardized organization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy navigation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source: Perfect 5-pillar structure (Architecture, Changelog, PM, Guides, Documentation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "been-there: 5-pillar structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dev-toolkit: 5-pillar structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote 5-pillar structure as canonical pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make 5-pillar structure part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document 5-pillar structure as standard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ai-dev-kit source as reference implementation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source demonstrates perfect 5-pillar canonical structure"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-anti-patterns-recurring-bad-practices",
      children: "2. Anti-Patterns (Recurring Bad Practices)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-epic-mashup-anti-pattern-critical",
      children: "2.1 Epic Mashup Anti-Pattern (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Copying ai-dev-kit's actual Kanban structure instead of using canonical templates", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 30% (3/10 projects: been-there, dev-toolkit, agentic-ide-rules)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Confusion about canonical vs project-specific epics", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🔴 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL ANTI-PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects copy ai-dev-kit's actual Kanban structure (including project-specific epics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Results in inappropriate epics (e.g., \"Book Related Work\" in non-book projects)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confuses canonical epics with project-specific epics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's an Anti-Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ROOT CAUSE:"
        }), " Epic 9 mismatch in ai-dev-kit source (project-specific \"Book Related Work\" vs canonical \"User Management and Authentication\")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confuses canonical epics with project-specific epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clutters Kanban boards with irrelevant epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes it unclear what actual project work is"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undermines framework adoption quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 9 mismatch in ai-dev-kit source repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unclear installation instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinction between canonical templates and ai-dev-kit's actual Kanban not clear"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual copy too easy (just copy-paste)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "been-there: Has Epic 9 \"Book Related Work\" (inappropriate for mobile app project)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dev-toolkit: Has Epic 9 \"Book Related Work\" (inappropriate for dev tools project)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "agentic-ide-rules: Has Epic 9 \"Book Related Work\" (inappropriate for IDE rules project)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Fix Epic 9 mismatch in ai-dev-kit source (rename to Epic 24+)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make installer primary/only method for installing Kanban structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add installer validation to prevent Epic mashup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clearly distinguish canonical templates from ai-dev-kit's actual Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve installation instructions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "30% of projects affected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusion about canonical vs project-specific epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clutters Kanban boards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undermines framework adoption quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-epic-9-mismatch-anti-pattern-critical---in-source",
      children: "2.2 Epic 9 Mismatch Anti-Pattern (CRITICAL - in Source)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " ai-dev-kit source Epic 9 \"Book Related Work\" conflicts with canonical Epic 9 \"User Management and Authentication\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Root cause of Epic mashup issue", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🔴 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL ANTI-PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source uses Epic 9 for project-specific work (\"Book Related Work\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical templates define Epic 9 as \"User Management and Authentication\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When projects copy ai-dev-kit's actual Kanban, they get wrong Epic 9"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's an Anti-Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ROOT CAUSE"
        }), " of Epic mashup issue affecting 30% of client projects"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates internal inconsistency between ai-dev-kit's actual Kanban and canonical templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propagates incorrect Epic 9 to client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undermines framework adoption quality"
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
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source: Epic 9 \"Book Related Work\" (project-specific epic for \"Vibe Coding For Dummies\" book)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical template: Epic 9 \"User Management and Authentication\" (canonical ancillary epic)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Rename ai-dev-kit's Epic 9 \"Book Related Work\" to Epic 24+ (project-specific range)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OR: Clearly document that Epic 9 in ai-dev-kit is project-specific, not canonical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all Epic 9 references in ai-dev-kit source"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add installer validation to prevent Epic mashup"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root cause of Epic mashup issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "30% of client projects affected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusion about canonical vs project-specific epics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-missing-cursorrules-anti-pattern-critical---in-source",
      children: "2.3 Missing Cursorrules Anti-Pattern (CRITICAL - in Source)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Source repository doesn't have ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Source doesn't demonstrate own framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🔴 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL ANTI-PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source repository doesn't have ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot demonstrate RW trigger to client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source repository doesn't use own framework"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's an Anti-Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Source repository doesn't demonstrate own framework"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot show RW trigger to client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undermines framework credibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces framework adoption quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source repository not fully adopting its own framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW executed manually or by convention"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file to trigger agent-driven execution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source: No ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Has comprehensive workflow YAML definitions but no ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " trigger"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file to ai-dev-kit source"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include comprehensive RW trigger section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrate own framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add config-driven approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source repository doesn't demonstrate own framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot show RW trigger to client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undermines framework credibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-missing-rw-trigger-anti-pattern",
      children: "2.4 Missing RW Trigger Anti-Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Projects don't have RW trigger in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 40% (4/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - No standardized release workflow", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🟠 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HIGH ANTI-PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects don't have RW trigger in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No standardized release workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual release process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's an Anti-Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No standardized release workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual release process prone to errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent release practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces framework adoption quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW trigger not part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Benefits not documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No examples or templates provided"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects without RW trigger have no standardized release process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual release process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent release practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make RW trigger part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document RW trigger benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples and templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show standardized release process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No standardized release workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual release process prone to errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent release practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-missing-branch-safety-check-anti-pattern-critical",
      children: "2.5 Missing Branch Safety Check Anti-Pattern (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Projects don't have mandatory branch safety check in Release Workflow", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 60% (6/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Risk of branch contamination", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🔴 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL ANTI-PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects don't have mandatory branch safety check in Release Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of accidental commits to wrong branches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No validation of branch context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's an Anti-Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Risk of cross-epic contamination"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No validation of branch context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of versioning errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces framework adoption quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch safety check not enforced in RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Benefits not documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No examples provided"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects without branch safety check risk accidental commits to wrong branches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No validation of branch context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of versioning errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce branch safety check in RW (mandatory, blocking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits and risks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples of contamination prevention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make branch safety check part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of cross-epic contamination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No validation of branch context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of versioning errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-hardcoded-paths-anti-pattern",
      children: "2.6 Hardcoded Paths Anti-Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Projects use hardcoded paths in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " instead of config", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 20% (2/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - Reduced flexibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🟡 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MODERATE ANTI-PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects use hardcoded paths in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded version file paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded changelog paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's an Anti-Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded paths reduce flexibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficult to maintain and update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent configuration patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces framework adoption quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not using config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config benefits not documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration path unclear"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects with hardcoded paths use hardcoded version file paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded changelog paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No config file"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make config part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document config benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guide from hardcoded paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced flexibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficult to maintain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent configuration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-missing-config-file-anti-pattern",
      children: "2.7 Missing Config File Anti-Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Projects don't have ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " for workflow configuration", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 70% (7/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Hardcoded paths reduce flexibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🟠 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HIGH ANTI-PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects don't have ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " for workflow configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use hardcoded paths in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No config-driven approach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's an Anti-Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded paths reduce flexibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficult to maintain and update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent configuration patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces framework adoption quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config-driven approach not promoted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config benefits not documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration path unclear"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects without config file use hardcoded paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficult to maintain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make config part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document config benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guide"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded paths reduce flexibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficult to maintain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent configuration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " ai-dev-kit source has example config but not active config in project root"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-missing-document-lifecycle-management-anti-pattern",
      children: "2.8 Missing Document Lifecycle Management Anti-Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Projects don't use document lifecycle management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 70% (7/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - No automated document management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🟡 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MODERATE ANTI-PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects don't use document lifecycle management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automated document cleanup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual document cleanup required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's an Anti-Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automated document lifecycle management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual cleanup required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents may become stale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces documentation quality over time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifecycle management not part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Benefits not documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No examples provided"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects without lifecycle management have no automated document cleanup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual cleanup required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents may become stale"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote document lifecycle management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make lifecycle management part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automated document management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual cleanup required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents may become stale"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-missing-git-workflow-restrictions-anti-pattern",
      children: "2.9 Missing Git Workflow Restrictions Anti-Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Projects don't have git workflow restrictions in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 70% (7/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - No workflow enforcement", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🟡 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MODERATE ANTI-PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects don't have git workflow restrictions in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allow manual git operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of workflow violations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's an Anti-Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No workflow enforcement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of workflow violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent git practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces framework adoption quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git restrictions not part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Benefits not documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No examples provided"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects without git restrictions allow manual git operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of workflow violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent git practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote git workflow restrictions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make git restrictions part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No workflow enforcement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of workflow violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistent git practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "210-source-repository-not-using-own-frameworks-anti-pattern-critical",
      children: "2.10 Source Repository Not Using Own Frameworks Anti-Pattern (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Pattern:"
      }), " Source repository doesn't use its own frameworks", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Undermines framework credibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " 🔴 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL ANTI-PATTERN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source repository doesn't use its own frameworks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root (only example exists)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Legacy version file path (", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's an Anti-Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Source repository doesn't use own frameworks"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot demonstrate frameworks to client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undermines framework credibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces framework adoption quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source repository not fully adopting its own framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW executed manually or by convention"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file to trigger agent-driven execution"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy paths from previous project"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source: Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source: Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root (only example exists)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source: Legacy version file path (", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file to ai-dev-kit source"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " to project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate version file path to canonical location"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure source repository uses own frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source repository doesn't demonstrate own framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot show frameworks to client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undermines framework credibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-summary-pattern-vs-anti-pattern-frequency",
      children: "3. Summary: Pattern vs Anti-Pattern Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-pattern-adoption-rates",
      children: "3.1 Pattern Adoption Rates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Adoption Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["KB directory naming (", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect Pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E/S/T hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect Pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story checklist pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong Pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document frontmatter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong Pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-context task naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate Pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-driven execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate Pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate Pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config-driven approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Emerging Pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive RW trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Emerging Pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5-pillar KB structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Reference Pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-anti-pattern-frequency",
      children: "3.2 Anti-Pattern Frequency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Anti-Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic mashup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔴 CRITICAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic 9 mismatch (source)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔴 CRITICAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing cursorrules (source)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔴 CRITICAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing RW trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟠 HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing branch safety check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔴 CRITICAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing config file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟠 HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing document lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 MODERATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing git restrictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 MODERATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoded paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 MODERATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source not using own frameworks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 project"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔴 CRITICAL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-root-cause-analysis",
      children: "4. Root Cause Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-epic-mashup-root-cause",
      children: "4.1 Epic Mashup Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Root Cause:"
      }), " Epic 9 mismatch in ai-dev-kit source repository"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Happened:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit uses Epic 9 for project-specific work (\"Book Related Work\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical templates define Epic 9 as \"User Management and Authentication\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No clear separation between ai-dev-kit's actual Kanban and canonical templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unclear installation instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual copy too easy (just copy-paste)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "30% of projects affected (been-there, dev-toolkit, agentic-ide-rules)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusion about canonical vs project-specific epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clutters Kanban boards with irrelevant epics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Fix Epic 9 mismatch in ai-dev-kit source"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make installer primary/only method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add installer validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clearly distinguish canonical templates from ai-dev-kit's actual Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-low-adoption-root-causes",
      children: "4.2 Low Adoption Root Causes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lack of Source Dogfooding:"
        }), " ai-dev-kit itself not fully adopting its own frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insufficient Tooling/Automation:"
        }), " Manual installation processes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inadequate Documentation/Guidance:"
        }), " Lack of clear instructions on best practices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Inertia:"
        }), " Existing project structures resisting adoption"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low adoption of config-driven approach (30%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low adoption of comprehensive RW trigger (20%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low adoption of document lifecycle management (30%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low adoption of git restrictions (30%)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source repository must use own frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve tooling and automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide better documentation and guidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support legacy patterns during migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-recommendations",
      children: "5. Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-immediate-actions-critical",
      children: "5.1 Immediate Actions (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fix Epic 9 Mismatch in ai-dev-kit Source"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rename Epic 9 \"Book Related Work\" to Epic 24+"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update all references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add installer validation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " File to ai-dev-kit Source"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include comprehensive RW trigger section"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Demonstrate own framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add config-driven approach"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " to ai-dev-kit Source"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create active config file in project root"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure for ai-dev-kit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Demonstrate config-driven approach"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-short-term-actions-high",
      children: "5.2 Short-Term Actions (HIGH)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Promote Config-Driven Approach"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make config part of installation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document config benefits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide migration guide"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enforce Branch Safety Check"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make mandatory and blocking"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document benefits and risks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Promote Comprehensive RW Trigger"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make part of installation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document benefits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide examples and templates"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-long-term-actions-medium",
      children: "5.3 Long-Term Actions (MEDIUM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Promote Lifecycle Metadata"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make required"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document benefits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide templates"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Legacy Patterns"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document migration paths"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide conversion tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support during transition"
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