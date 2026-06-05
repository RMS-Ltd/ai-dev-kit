"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["78105"], {
75999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_meta_analysis_good_bad_practices_md_06f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-meta-analysis-good-bad-practices-md-06f.json
var site_docs_knowledge_analysis_meta_analysis_good_bad_practices_md_06f_namespaceObject = JSON.parse('{"id":"knowledge/analysis/meta-analysis-good-bad-practices","title":"Meta-Analysis: Good/Bad Practice Catalog","description":"Purpose: Comprehensive catalog of good and bad practices identified across 10 projects (9 client implementations + ai-dev-kit source)","source":"@site/../docs/knowledge/analysis/meta-analysis-good-bad-practices.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/meta-analysis-good-bad-practices","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-good-bad-practices","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/meta-analysis-good-bad-practices.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-17T22:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Meta-Analysis Executive Summary: Proposed Canonical Framework Designs","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-executive-summary"},"next":{"title":"Meta-Analysis: Kanban Structure","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-kanban-structure"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/meta-analysis-good-bad-practices.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-17T22:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Meta-Analysis: Good/Bad Practice Catalog';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Kanban Framework: Good/Bad Practices",
  "id": "1-kanban-framework-goodbad-practices",
  "level": 2
}, {
  "value": "1.1 Good Practices ✅",
  "id": "11-good-practices-",
  "level": 3
}, {
  "value": "1.1.1 Full-Context Task Naming (<code>E\\{epic\\}:S\\{story\\}:T\\{task\\}</code>)",
  "id": "111-full-context-task-naming-eepicsstoryttask",
  "level": 4
}, {
  "value": "1.1.2 Proper E/S/T Hierarchy",
  "id": "112-proper-est-hierarchy",
  "level": 4
}, {
  "value": "1.1.3 Story Checklist Pattern",
  "id": "113-story-checklist-pattern",
  "level": 4
}, {
  "value": "1.1.4 Comprehensive Template System",
  "id": "114-comprehensive-template-system",
  "level": 4
}, {
  "value": "1.1.5 Task Organization (Hybrid Approach)",
  "id": "115-task-organization-hybrid-approach",
  "level": 4
}, {
  "value": "1.2 Bad Practices ❌",
  "id": "12-bad-practices-",
  "level": 3
}, {
  "value": "1.2.1 Epic Mashup (CRITICAL)",
  "id": "121-epic-mashup-critical",
  "level": 4
}, {
  "value": "1.2.2 Epic 9 Mismatch in Source (CRITICAL)",
  "id": "122-epic-9-mismatch-in-source-critical",
  "level": 4
}, {
  "value": "1.2.3 Inconsistent Epic Naming",
  "id": "123-inconsistent-epic-naming",
  "level": 4
}, {
  "value": "1.2.4 Inconsistent Task Padding",
  "id": "124-inconsistent-task-padding",
  "level": 4
}, {
  "value": "2. docs/documentation Framework: Good/Bad Practices",
  "id": "2-docsdocumentation-framework-goodbad-practices",
  "level": 2
}, {
  "value": "2.1 Good Practices ✅",
  "id": "21-good-practices-",
  "level": 3
}, {
  "value": "2.1.1 Perfect KB Directory Naming (<code>docs/</code>)",
  "id": "211-perfect-kb-directory-naming-docs",
  "level": 4
}, {
  "value": "2.1.2 Perfect 5-Pillar KB Structure",
  "id": "212-perfect-5-pillar-kb-structure",
  "level": 4
}, {
  "value": "2.1.3 Document Frontmatter Usage",
  "id": "213-document-frontmatter-usage",
  "level": 4
}, {
  "value": "2.1.4 Hierarchical README Navigation",
  "id": "214-hierarchical-readme-navigation",
  "level": 4
}, {
  "value": "2.1.5 Lifecycle Metadata Usage",
  "id": "215-lifecycle-metadata-usage",
  "level": 4
}, {
  "value": "2.2 Bad Practices ❌",
  "id": "22-bad-practices-",
  "level": 3
}, {
  "value": "2.2.1 Missing Lifecycle Metadata",
  "id": "221-missing-lifecycle-metadata",
  "level": 4
}, {
  "value": "2.2.2 Inconsistent KB Organization",
  "id": "222-inconsistent-kb-organization",
  "level": 4
}, {
  "value": "2.2.3 Missing Obsidian Support",
  "id": "223-missing-obsidian-support",
  "level": 4
}, {
  "value": "3. Workflow Framework: Good/Bad Practices",
  "id": "3-workflow-framework-goodbad-practices",
  "level": 2
}, {
  "value": "3.1 Good Practices ✅",
  "id": "31-good-practices-",
  "level": 3
}, {
  "value": "3.1.1 Config-Driven Approach (<code>rw-config.yaml</code>)",
  "id": "311-config-driven-approach-rw-configyaml",
  "level": 4
}, {
  "value": "3.1.2 Comprehensive 12-Step Release Workflow",
  "id": "312-comprehensive-12-step-release-workflow",
  "level": 4
}, {
  "value": "3.1.3 Mandatory Branch Safety Check",
  "id": "313-mandatory-branch-safety-check",
  "level": 4
}, {
  "value": "3.1.4 Agent-Driven Execution Pattern",
  "id": "314-agent-driven-execution-pattern",
  "level": 4
}, {
  "value": "3.1.5 Cursor TODO Progress Tracking",
  "id": "315-cursor-todo-progress-tracking",
  "level": 4
}, {
  "value": "3.2 Bad Practices ❌",
  "id": "32-bad-practices-",
  "level": 3
}, {
  "value": "3.2.1 Missing RW Trigger (CRITICAL)",
  "id": "321-missing-rw-trigger-critical",
  "level": 4
}, {
  "value": "3.2.2 Missing Config File (HIGH)",
  "id": "322-missing-config-file-high",
  "level": 4
}, {
  "value": "3.2.3 Missing Branch Safety Check (CRITICAL)",
  "id": "323-missing-branch-safety-check-critical",
  "level": 4
}, {
  "value": "3.2.4 Missing Progress Tracking",
  "id": "324-missing-progress-tracking",
  "level": 4
}, {
  "value": "3.2.5 Missing Workflow YAML Files (in Source)",
  "id": "325-missing-workflow-yaml-files-in-source",
  "level": 4
}, {
  "value": "4. Cursorrules Framework: Good/Bad Practices",
  "id": "4-cursorrules-framework-goodbad-practices",
  "level": 2
}, {
  "value": "4.1 Good Practices ✅",
  "id": "41-good-practices-",
  "level": 3
}, {
  "value": "4.1.1 Standard <code>.cursorrules</code> File Naming",
  "id": "411-standard-cursorrules-file-naming",
  "level": 4
}, {
  "value": "4.1.2 Comprehensive RW Trigger Section",
  "id": "412-comprehensive-rw-trigger-section",
  "level": 4
}, {
  "value": "4.1.3 Config-Driven Approach in Cursorrules",
  "id": "413-config-driven-approach-in-cursorrules",
  "level": 4
}, {
  "value": "4.1.4 Document Lifecycle Management Section",
  "id": "414-document-lifecycle-management-section",
  "level": 4
}, {
  "value": "4.1.5 Git Workflow Restrictions Section",
  "id": "415-git-workflow-restrictions-section",
  "level": 4
}, {
  "value": "4.2 Bad Practices ❌",
  "id": "42-bad-practices-",
  "level": 3
}, {
  "value": "4.2.1 Missing <code>.cursorrules</code> File (CRITICAL - in Source)",
  "id": "421-missing-cursorrules-file-critical---in-source",
  "level": 4
}, {
  "value": "4.2.2 Missing RW Trigger Section",
  "id": "422-missing-rw-trigger-section",
  "level": 4
}, {
  "value": "4.2.3 Hardcoded Paths in Cursorrules",
  "id": "423-hardcoded-paths-in-cursorrules",
  "level": 4
}, {
  "value": "4.2.4 Missing Document Lifecycle Management",
  "id": "424-missing-document-lifecycle-management",
  "level": 4
}, {
  "value": "4.2.5 Missing Git Workflow Restrictions",
  "id": "425-missing-git-workflow-restrictions",
  "level": 4
}, {
  "value": "5. Cross-Cutting Good/Bad Practices",
  "id": "5-cross-cutting-goodbad-practices",
  "level": 2
}, {
  "value": "5.1 Good Practices ✅",
  "id": "51-good-practices-",
  "level": 3
}, {
  "value": "5.1.1 Source Repository as Reference Implementation",
  "id": "511-source-repository-as-reference-implementation",
  "level": 4
}, {
  "value": "5.1.2 Proper Versioning Integration",
  "id": "512-proper-versioning-integration",
  "level": 4
}, {
  "value": "5.2 Bad Practices ❌",
  "id": "52-bad-practices-",
  "level": 3
}, {
  "value": "5.2.1 Source Repository Not Using Own Frameworks (CRITICAL)",
  "id": "521-source-repository-not-using-own-frameworks-critical",
  "level": 4
}, {
  "value": "5.2.2 Legacy Version File Path (in Source)",
  "id": "522-legacy-version-file-path-in-source",
  "level": 4
}, {
  "value": "6. Summary: Practice Adoption Rates",
  "id": "6-summary-practice-adoption-rates",
  "level": 2
}, {
  "value": "6.1 Good Practices Adoption",
  "id": "61-good-practices-adoption",
  "level": 3
}, {
  "value": "6.2 Bad Practices Frequency",
  "id": "62-bad-practices-frequency",
  "level": 3
}, {
  "value": "7. Recommendations",
  "id": "7-recommendations",
  "level": 2
}, {
  "value": "7.1 Immediate Actions (CRITICAL)",
  "id": "71-immediate-actions-critical",
  "level": 3
}, {
  "value": "7.2 Short-Term Actions (HIGH)",
  "id": "72-short-term-actions-high",
  "level": 3
}, {
  "value": "7.3 Long-Term Actions (MEDIUM)",
  "id": "73-long-term-actions-medium",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "meta-analysis-goodbad-practice-catalog",
        children: "Meta-Analysis: Good/Bad Practice Catalog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Comprehensive catalog of good and bad practices identified across 10 projects (9 client implementations + ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      children: ["This catalog synthesizes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "good practices"
      }), " (what works well) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bad practices"
      }), " (what causes issues) identified across all analyzed projects, including the ai-dev-kit source repository. Practices are organized by framework dimension (Kanban, docs/documentation, workflows, cursorrules) and include frequency data, impact assessment, and examples."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perfect Convergence Practices:"
        }), " 1 (KB directory naming - 100%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strong Convergence Practices:"
        }), " 3 (task naming 60%, E/S/T hierarchy 100%, story checklists 90%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Bad Practices:"
        }), " 3 (Epic mashup 30%, Epic 9 mismatch in source, missing cursorrules in source)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source Repository Gaps:"
        }), " 3 (missing cursorrules, missing rw-config, legacy version path)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kanban-framework-goodbad-practices",
      children: "1. Kanban Framework: Good/Bad Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-good-practices-",
      children: "1.1 Good Practices ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "111-full-context-task-naming-eepicsstoryttask",
      children: ["1.1.1 Full-Context Task Naming (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 60% (6/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Excellent traceability and context", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "been-there"
        }), ": Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E1:S01:T01"
        }), " format consistently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dev-toolkit"
        }), ": Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S06:T01"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agentic-ide-rules"
        }), ": Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E1:S01:T01"
        }), " format"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides full context without needing to navigate to parent documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables easy cross-referencing and traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes task identification unambiguous"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated tooling and validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source uses full-context task naming consistently"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "112-proper-est-hierarchy",
      children: "1.1.2 Proper E/S/T Hierarchy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 100% (10/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Clear organization and structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
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
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides clear organizational structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables hierarchical navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated tooling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes project structure intuitive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source demonstrates perfect E/S/T hierarchy"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "113-story-checklist-pattern",
      children: "1.1.3 Story Checklist Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 90% (9/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Excellent progress tracking", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "been-there"
        }), ": Story checklists in Epic documents with version markers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dev-toolkit"
        }), ": Story checklists with status tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agentic-ide-rules"
        }), ": Story checklists with completion markers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides quick overview of story progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables version tracking (version markers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports status tracking (TODO, IN PROGRESS, COMPLETE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes epic-level progress visible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source uses story checklists consistently"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "114-comprehensive-template-system",
      children: "1.1.4 Comprehensive Template System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Enables consistent structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source: 21 epic templates, 62+ story templates, 193+ task templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Templates properly contextualized with placeholders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear distinction between core (1-8) and ancillary (9-21) epics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides standardized starting points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures consistency across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces setup time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables best practices from the start"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source has comprehensive template system"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "115-task-organization-hybrid-approach",
      children: "1.1.5 Task Organization (Hybrid Approach)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 67% embedded, 33% separate files", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - Flexible for different task sizes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small tasks: Embedded in Story document (most common)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Large tasks: Separate files in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-XXX/T\\{task\\}-*.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always: Task checklist in Story document"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flexibility for different task sizes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains context for related tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports granular documentation when needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Matches real-world usage patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-bad-practices-",
      children: "1.2 Bad Practices ❌"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-epic-mashup-critical",
      children: "1.2.1 Epic Mashup (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 30% (3/10 projects: been-there, dev-toolkit, agentic-ide-rules)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Confusion about canonical vs project-specific epics", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " Epic 9 mismatch in ai-dev-kit source (project-specific \"Book Related Work\" vs canonical \"User Management and Authentication\")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "been-there"
        }), ": Has Epic 9 \"Book Related Work\" (inappropriate for mobile app project)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dev-toolkit"
        }), ": Has Epic 9 \"Book Related Work\" (inappropriate for dev tools project)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agentic-ide-rules"
        }), ": Has Epic 9 \"Book Related Work\" (inappropriate for IDE rules project)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confuses canonical epics with project-specific epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clutters Kanban boards with irrelevant epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes it unclear what actual project work is"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undermines framework adoption quality"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " ai-dev-kit source Epic 9 \"Book Related Work\" conflicts with canonical Epic 9"]
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
        children: "Add installer validation to prevent Epic mashup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clearly distinguish canonical templates from ai-dev-kit's actual Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve installation instructions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-epic-9-mismatch-in-source-critical",
      children: "1.2.2 Epic 9 Mismatch in Source (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Root cause of Epic mashup issue", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source: Epic 9 \"Book Related Work\" (project-specific epic for \"Vibe Coding For Dummies\" book)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical template: Epic 9 \"User Management and Authentication\" (canonical ancillary epic)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ROOT CAUSE"
        }), " of Epic mashup issue affecting 30% of client projects"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When projects copy ai-dev-kit's actual Kanban structure, they get wrong Epic 9"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates internal inconsistency between ai-dev-kit's actual Kanban and canonical templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propagates incorrect Epic 9 to client projects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Action:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rename ai-dev-kit's Epic 9 \"Book Related Work\" to Epic 24+ (project-specific range)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OR: Clearly document that Epic 9 in ai-dev-kit is project-specific, not canonical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all Epic 9 references in ai-dev-kit source"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "123-inconsistent-epic-naming",
      children: "1.2.3 Inconsistent Epic Naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 44% ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic-\\{N\\}"
      }), ", 22% ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic \\{N\\}"
      }), ", 33% ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E\\{N\\}"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - Reduces consistency", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mixed usage across projects"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Some projects use hyphen (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-01"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Some projects use space (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic 1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Some projects use abbreviated (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces consistency across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes automated tooling harder"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates confusion about canonical format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hinders cross-project collaboration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Promote canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-\\{N\\}"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support legacy formats during migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document canonical format clearly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "124-inconsistent-task-padding",
      children: "1.2.4 Inconsistent Task Padding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 50% 2-digit (", (0,jsx_runtime.jsx)(_components.code, {
        children: "T01"
      }), "), 50% 3-digit (", (0,jsx_runtime.jsx)(_components.code, {
        children: "T001"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - Reduces consistency", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Some projects use 2-digit padding (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T02"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Some projects use 3-digit padding (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T001"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T002"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces consistency across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes automated tooling harder"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates confusion about canonical format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Promote canonical 2-digit padding (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support legacy 3-digit padding during migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document canonical format clearly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-docsdocumentation-framework-goodbad-practices",
      children: "2. docs/documentation Framework: Good/Bad Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-good-practices-",
      children: "2.1 Good Practices ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "211-perfect-kb-directory-naming-docs",
      children: ["2.1.1 Perfect KB Directory Naming (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 100% (10/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Perfect convergence", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All projects use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " (uppercase, abbreviation)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent across all analyzed projects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " directory naming"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "212-perfect-5-pillar-kb-structure",
      children: "2.1.2 Perfect 5-Pillar KB Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 40% (4/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Excellent organization", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source: Perfect 5-pillar structure (Architecture, Changelog, PM, Guides, Documentation)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "been-there"
        }), ": 5-pillar structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dev-toolkit"
        }), ": 5-pillar structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear separation of concerns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standardized organization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated tooling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source demonstrates perfect 5-pillar canonical structure"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "213-document-frontmatter-usage",
      children: "2.1.3 Document Frontmatter Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 90% (9/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Essential for metadata-driven management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most projects use YAML frontmatter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent metadata structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifecycle metadata present"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables metadata-driven document management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated lifecycle management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides document classification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables tooling and automation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source uses frontmatter consistently"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "214-hierarchical-readme-navigation",
      children: "2.1.4 Hierarchical README Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 78% (7/9 projects with KB)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - Good navigation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Root ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/README.md"
        }), " for top-level navigation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Section ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " files for each pillar"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Directory-level ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " files"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides clear navigation structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables hierarchical browsing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard markdown format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to maintain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source uses hierarchical READMEs"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "215-lifecycle-metadata-usage",
      children: "2.1.5 Lifecycle Metadata Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 60% (6/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - Enables automated management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated document expiration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables document persistence classification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables automated document lifecycle management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports document expiration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides document persistence classification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces manual maintenance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source uses lifecycle metadata"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-bad-practices-",
      children: "2.2 Bad Practices ❌"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "221-missing-lifecycle-metadata",
      children: "2.2.1 Missing Lifecycle Metadata"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 40% (4/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - No automated document management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some projects don't use lifecycle metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents don't have expiration dates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual document cleanup required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
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
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote lifecycle metadata usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make lifecycle metadata required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide templates with lifecycle metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits of automated management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "222-inconsistent-kb-organization",
      children: "2.2.2 Inconsistent KB Organization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 40% 5-pillar, 10% multi-pillar, 40% hybrid, 10% other", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - Reduces consistency", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some projects use 5-pillar structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some projects use multi-pillar (15+ pillars)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Some projects use hybrid (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some projects use legacy structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces consistency across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Makes automated tooling harder"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates confusion about canonical format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hinders cross-project collaboration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote canonical 5-pillar structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support multi-pillar for enterprise projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support hybrid during migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document when to use which pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "223-missing-obsidian-support",
      children: "2.2.3 Missing Obsidian Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 78% use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "README.md"
      }), ", 22% use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_index.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " LOW - Limits Obsidian compatibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Most projects use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Some Obsidian projects need ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing Obsidian links (", (0,jsx_runtime.jsx)(_components.code, {
          children: "[[Link]]"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limits Obsidian compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces cross-referencing capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hinders Obsidian-based workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support Obsidian links (", (0,jsx_runtime.jsx)(_components.code, {
          children: "[[Link]]"
        }), ") for Obsidian projects"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document Obsidian compatibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-workflow-framework-goodbad-practices",
      children: "3. Workflow Framework: Good/Bad Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-good-practices-",
      children: "3.1 Good Practices ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "311-config-driven-approach-rw-configyaml",
      children: ["3.1.1 Config-Driven Approach (", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 30% (3/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Best practice", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agentic-ide-rules"
        }), ": Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " for workflow configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dev-toolkit"
        }), ": Uses config-driven approach"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config file defines version file, changelog paths, scripts path"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides flexibility and maintainability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces hardcoded paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables easy customization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports project-specific configuration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make config part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document config benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guide from hardcoded paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "312-comprehensive-12-step-release-workflow",
      children: "3.1.2 Comprehensive 12-Step Release Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 20% (2/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Best practice", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agentic-ide-rules"
        }), ": Comprehensive 12-step RW trigger"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source: Comprehensive 12-step workflow YAML definitions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides complete release workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes mandatory branch safety check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports all standard RW steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables standardized release process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference Implementation:"
      }), " ai-dev-kit source has comprehensive 12-step workflow YAML definitions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "313-mandatory-branch-safety-check",
      children: "3.1.3 Mandatory Branch Safety Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 40% (4/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Prevents branch contamination", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects with branch safety check prevent accidental commits to wrong branches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validates branch context before proceeding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocks workflow if branch mismatch detected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Prevents cross-epic contamination"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validates branch context before proceeding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blocks workflow if branch mismatch detected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces risk of versioning errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce branch safety check in RW (mandatory, blocking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits and risks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples of contamination prevention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make branch safety check part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "314-agent-driven-execution-pattern",
      children: "3.1.4 Agent-Driven Execution Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 56% (5/9 projects with workflows)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - User visibility and control", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects use agent-driven execution (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cursor TODO tracking for progress visibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User approval at each step"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides user visibility and control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables intelligent execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports progress tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces risk of errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote agent-driven execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make agent-driven execution part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "315-cursor-todo-progress-tracking",
      children: "3.1.5 Cursor TODO Progress Tracking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 50% (5/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - User visibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects use Cursor TODOs for workflow progress tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides visibility into workflow execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables user monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides user visibility into workflow execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables progress monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports user control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces uncertainty"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote Cursor TODO tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make progress tracking part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-bad-practices-",
      children: "3.2 Bad Practices ❌"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "321-missing-rw-trigger-critical",
      children: "3.2.1 Missing RW Trigger (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 40% (4/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - No standardized release workflow", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
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
        children: "Why It's Bad:"
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
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make RW trigger part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document RW trigger benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples and templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show standardized release process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "322-missing-config-file-high",
      children: "3.2.2 Missing Config File (HIGH)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 70% (7/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Hardcoded paths reduce flexibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " use hardcoded paths in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded version file paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded changelog paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
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
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make config part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document config benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guide from hardcoded paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "323-missing-branch-safety-check-critical",
      children: "3.2.3 Missing Branch Safety Check (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 60% (6/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Risk of branch contamination", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
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
        children: "Why It's Bad:"
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
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce branch safety check in RW (mandatory, blocking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits and risks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples of contamination prevention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make branch safety check part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "324-missing-progress-tracking",
      children: "3.2.4 Missing Progress Tracking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 50% (5/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - No user visibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects without Cursor TODO tracking have no workflow progress visibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No user monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uncertainty about workflow execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No user visibility into workflow execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No progress monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uncertainty about workflow execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces user confidence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote Cursor TODO tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make progress tracking part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "325-missing-workflow-yaml-files-in-source",
      children: "3.2.5 Missing Workflow YAML Files (in Source)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source has YAML but no ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Source doesn't demonstrate own framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source: Has comprehensive workflow YAML definitions but no ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot demonstrate RW trigger to client projects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source repository doesn't demonstrate own framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot show RW trigger to client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undermines framework credibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces framework adoption quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Action:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file to ai-dev-kit source"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include comprehensive RW trigger section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrate own framework"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-cursorrules-framework-goodbad-practices",
      children: "4. Cursorrules Framework: Good/Bad Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-good-practices-",
      children: "4.1 Good Practices ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "411-standard-cursorrules-file-naming",
      children: ["4.1.1 Standard ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " File Naming"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 90% (9/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Perfect convergence", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All projects with cursorrules use ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (dot-prefixed, lowercase)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard Cursor IDE convention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Universal pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perfect convergence (90% adoption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard Cursor IDE convention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Universal pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to identify"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " ai-dev-kit source missing ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file (gap)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "412-comprehensive-rw-trigger-section",
      children: "4.1.2 Comprehensive RW Trigger Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 20% (2/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Best practice", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "agentic-ide-rules"
        }), ": Comprehensive 12-step RW trigger"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All 12 steps defined with detailed descriptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mandatory branch safety check (Step 1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides complete release workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes mandatory branch safety check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports all standard RW steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables standardized release process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote comprehensive RW trigger"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples and templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make comprehensive trigger part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "413-config-driven-approach-in-cursorrules",
      children: "4.1.3 Config-Driven Approach in Cursorrules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 30% (3/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Best practice", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " for workflow configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Load config in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " RW trigger"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No hardcoded paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides flexibility and maintainability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces hardcoded paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables easy customization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports project-specific configuration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make config part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document config benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guide from hardcoded paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "414-document-lifecycle-management-section",
      children: "4.1.4 Document Lifecycle Management Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 30% (3/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - Automated document management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects use document lifecycle management based on frontmatter metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated expiration and housekeeping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy salience parsing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables automated document lifecycle management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports document expiration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides document persistence classification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces manual maintenance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote document lifecycle management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make lifecycle management part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "415-git-workflow-restrictions-section",
      children: "4.1.5 Git Workflow Restrictions Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 30% (3/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Workflow enforcement", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects use strict git restrictions (commits only via RW, push only via RW)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch isolation enforced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-commit validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforces workflow compliance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents manual git operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces risk of errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains workflow integrity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote git workflow restrictions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make git restrictions part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-bad-practices-",
      children: "4.2 Bad Practices ❌"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "421-missing-cursorrules-file-critical---in-source",
      children: ["4.2.1 Missing ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " File (CRITICAL - in Source)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Source doesn't demonstrate own framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source: No ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot demonstrate RW trigger to client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source repository doesn't use own framework"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
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
        children: "Required Action:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file to ai-dev-kit source"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include comprehensive RW trigger section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrate own framework"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "422-missing-rw-trigger-section",
      children: "4.2.2 Missing RW Trigger Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 40% (4/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - No standardized release workflow", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
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
        children: "Why It's Bad:"
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
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make RW trigger part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document RW trigger benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples and templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show standardized release process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "423-hardcoded-paths-in-cursorrules",
      children: "4.2.3 Hardcoded Paths in Cursorrules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 20% (2/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - Reduced flexibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projects use hardcoded paths in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " instead of config"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded version file paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardcoded changelog paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
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
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote config-driven approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make config part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document config benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guide from hardcoded paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "424-missing-document-lifecycle-management",
      children: "4.2.4 Missing Document Lifecycle Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 70% (7/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - No automated document management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects without document lifecycle management have no automated document cleanup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual document cleanup required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents may become stale"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
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
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote document lifecycle management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make lifecycle management part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "425-missing-git-workflow-restrictions",
      children: "4.2.5 Missing Git Workflow Restrictions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 70% (7/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - No workflow enforcement", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
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
        children: "Why It's Bad:"
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
        children: "Prevention Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promote git workflow restrictions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make git restrictions part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-cross-cutting-goodbad-practices",
      children: "5. Cross-Cutting Good/Bad Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-good-practices-",
      children: "5.1 Good Practices ✅"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "511-source-repository-as-reference-implementation",
      children: "5.1.1 Source Repository as Reference Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Demonstrates best practices", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source: Perfect 5-pillar KB structure, comprehensive workflow YAML definitions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides reference implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrates best practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shows canonical structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables learning from source"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " ai-dev-kit source missing ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file (should be added)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "512-proper-versioning-integration",
      children: "5.1.2 Proper Versioning Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 50% (5/10 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Enables traceability", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects integrate versioning with Kanban (Epic/Story/Task numbers in version string)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version bumping integrated with Release Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version markers in Kanban documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Good:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables forensic traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates versioning with Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automated version bumping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides version context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-bad-practices-",
      children: "5.2 Bad Practices ❌"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "521-source-repository-not-using-own-frameworks-critical",
      children: "5.2.1 Source Repository Not Using Own Frameworks (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Undermines framework credibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })]
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
        children: "Why It's Bad:"
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
        children: "Required Action:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file to ai-dev-kit source"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " to project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate version file path to canonical location"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "522-legacy-version-file-path-in-source",
      children: "5.2.2 Legacy Version File Path (in Source)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 1 project (ai-dev-kit source)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MODERATE - Inconsistency", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ai-dev-kit source: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " (legacy path from previous project)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Should be: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/ai_dev_kit/version.py"
        }), " (canonical path)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It's Bad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inconsistency in source repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy path from previous project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Doesn't match canonical structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates confusion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Action:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Migrate version file path to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/ai_dev_kit/version.py"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Align with canonical structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-summary-practice-adoption-rates",
      children: "6. Summary: Practice Adoption Rates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-good-practices-adoption",
      children: "6.1 Good Practices Adoption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
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
            children: "✅ Perfect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E/S/T hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story checklist pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document frontmatter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full-context task naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config-driven approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive RW trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document lifecycle management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git workflow restrictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-bad-practices-frequency",
      children: "6.2 Bad Practices Frequency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Practice"
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
            children: "Missing RW trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔴 CRITICAL"
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
            children: "🟠 HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing git restrictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟠 HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing progress tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 MODERATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inconsistent epic naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 MODERATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inconsistent task padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 MODERATE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-recommendations",
      children: "7. Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-immediate-actions-critical",
      children: "7.1 Immediate Actions (CRITICAL)"
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
      id: "72-short-term-actions-high",
      children: "7.2 Short-Term Actions (HIGH)"
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
      id: "73-long-term-actions-medium",
      children: "7.3 Long-Term Actions (MEDIUM)"
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