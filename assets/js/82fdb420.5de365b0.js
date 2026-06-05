"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["53504"], {
22216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_use_case_methodology_md_82f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-use-case-methodology-md-82f.json
var site_docs_knowledge_use_case_methodology_md_82f_namespaceObject = JSON.parse('{"id":"knowledge/USE_CASE_METHODOLOGY","title":"Use Case Methodology: Canonical vs Discovered Use Cases","description":"Purpose: This document defines the methodology for organizing, categorizing, and managing use cases in the Knowledge Base, distinguishing between canonical (design-phase) and discovered (implementation-phase) use cases.","source":"@site/../docs/knowledge/USE_CASE_METHODOLOGY.md","sourceDirName":"knowledge","slug":"/knowledge/USE_CASE_METHODOLOGY","permalink":"/ai-dev-kit/docs/knowledge/USE_CASE_METHODOLOGY","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/USE_CASE_METHODOLOGY.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T14:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Use Cases Knowledge Base","permalink":"/ai-dev-kit/docs/knowledge/"},"next":{"title":"Abstract Anti-Pattern: Use Case Exposed Design Flaw","permalink":"/ai-dev-kit/docs/knowledge/analysis/abstract-anti-patterns-use-case-exposed-design-flaw"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/USE_CASE_METHODOLOGY.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-16T14:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Use Case Methodology: Canonical vs Discovered Use Cases';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Use Case Categories",
  "id": "use-case-categories",
  "level": 2
}, {
  "value": "Canonical Use Cases",
  "id": "canonical-use-cases",
  "level": 3
}, {
  "value": "Discovered Use Cases",
  "id": "discovered-use-cases",
  "level": 3
}, {
  "value": "Use Case Lifecycle",
  "id": "use-case-lifecycle",
  "level": 2
}, {
  "value": "Canonical Use Cases",
  "id": "canonical-use-cases-1",
  "level": 3
}, {
  "value": "Discovered Use Cases",
  "id": "discovered-use-cases-1",
  "level": 3
}, {
  "value": "Use Case Template",
  "id": "use-case-template",
  "level": 2
}, {
  "value": "Canonical Use Case Template",
  "id": "canonical-use-case-template",
  "level": 3
}, {
  "value": "Discovered Use Case Template",
  "id": "discovered-use-case-template",
  "level": 3
}, {
  "value": "Directory Structure",
  "id": "directory-structure",
  "level": 2
}, {
  "value": "Use Case Identification Process",
  "id": "use-case-identification-process",
  "level": 2
}, {
  "value": "For Canonical Use Cases",
  "id": "for-canonical-use-cases",
  "level": 3
}, {
  "value": "For Discovered Use Cases",
  "id": "for-discovered-use-cases",
  "level": 3
}, {
  "value": "Use Case Indexing",
  "id": "use-case-indexing",
  "level": 2
}, {
  "value": "Canonical Use Case Index",
  "id": "canonical-use-case-index",
  "level": 3
}, {
  "value": "Discovered Use Case Index",
  "id": "discovered-use-case-index",
  "level": 3
}, {
  "value": "Promotion Process",
  "id": "promotion-process",
  "level": 2
}, {
  "value": "When to Promote Discovered → Canonical",
  "id": "when-to-promote-discovered--canonical",
  "level": 3
}, {
  "value": "Wiring Use Cases",
  "id": "wiring-use-cases",
  "level": 2
}, {
  "value": "Use Case → BR/FR/Task/Documentation",
  "id": "use-case--brfrtaskdocumentation",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Canonical Use Case",
  "id": "example-1-canonical-use-case",
  "level": 3
}, {
  "value": "Example 2: Discovered Use Case",
  "id": "example-2-discovered-use-case",
  "level": 3
}, {
  "value": "Example 3: Promotion",
  "id": "example-3-promotion",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
        id: "use-case-methodology-canonical-vs-discovered-use-cases",
        children: "Use Case Methodology: Canonical vs Discovered Use Cases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " This document defines the methodology for organizing, categorizing, and managing use cases in the Knowledge Base, distinguishing between canonical (design-phase) and discovered (implementation-phase) use cases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Project maintainers, designers, developers, and anyone documenting or discovering use cases"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use cases in the Knowledge Base fall into two categories:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical Use Cases:"
        }), " Planned, designed use cases identified during the design phase before implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovered Use Cases:"
        }), " Patterns, practices, or scenarios discovered during actual work/implementation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both are valuable and should be documented, but they serve different purposes and have different characteristics."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-categories",
      children: "Use Case Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-use-cases",
      children: "Canonical Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Use cases identified and documented during the design/planning phase, before implementation begins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Planned and intentional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Part of original design/architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Documented before implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Represent intended usage patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Stable and well-defined"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Part of framework/product design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework adoption patterns (Template → All Packages, Existing → Some Packages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow execution patterns (Release Workflow, Intake Workflow)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning patterns (Canonical ordering, Doc-init builds)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban organization patterns (3-tier structure, discrete task docs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/use-cases/canonical/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naming Convention:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UC-XXX-[descriptive-title].md"
      }), " (UC implies canonical)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metadata:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "use_case_type: canonical\ndesign_phase: true\ndiscovered_during_work: false\nstatus: active|deprecated|superseded\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discovered-use-cases",
      children: "Discovered Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Use cases, patterns, or practices discovered during actual work, implementation, or problem-solving."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Emergent from real work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Discovered during implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Represent actual patterns that emerged"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ May reveal gaps in original design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Often documented after the fact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Can inform future canonical design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-opening BRs/tasks instead of creating new ones"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidirectional wiring between BR/FR, Tasks, and documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern discovery during work → documentation → wiring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workaround patterns that became best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/knowledge/use-cases/discovered/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naming Convention:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UC-D-XXX-[descriptive-title].md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metadata:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "use_case_type: discovered\ndesign_phase: false\ndiscovered_during_work: true\ndiscovery_date: YYYY-MM-DD\ndiscovered_in: [Task/BR/FR reference]\nstatus: active|deprecated|promoted_to_canonical\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-lifecycle",
      children: "Use Case Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-use-cases-1",
      children: "Canonical Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Design Phase → Document → Implement → Validate → Maintain\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design:"
        }), " Identified during design/planning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documented:"
        }), " Written up before implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implemented:"
        }), " Built according to use case"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validated:"
        }), " Verified through usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintained:"
        }), " Updated as needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discovered-use-cases-1",
      children: "Discovered Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Work → Pattern Recognition → Document → Wire → Validate → (Optional) Promote to Canonical\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " Actual work reveals pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recognition:"
        }), " Pattern identified and recognized"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Pattern documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wiring:"
        }), " Linked to related BR/FR, Tasks, documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Verified through usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Promotion (Optional):"
        }), " May become canonical if widely applicable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-template",
      children: "Use Case Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-use-case-template",
      children: "Canonical Use Case Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "---\nlifecycle: evergreen\nttl_days: null\ncreated_at: [YYYY-MM-DD]\nexpires_at: null\nhousekeeping_policy: keep\nuse_case_type: canonical\ndesign_phase: true\ndiscovered_during_work: false\nstatus: active\n---\n\n# Use Case: [Title]\n\n**Type:** Canonical Use Case  \n**ID:** UC-XXX  \n**Created:** [YYYY-MM-DD] (Design Phase)  \n**Status:** Active  \n**Domain:** [Framework/Component/Pattern]\n\n---\n\n## Summary\n\n[One sentence description of the use case]\n\n---\n\n## Context\n\n**When to Use:**\n- [Scenario 1]\n- [Scenario 2]\n\n**When NOT to Use:**\n- [Anti-scenario 1]\n- [Anti-scenario 2]\n\n---\n\n## Use Case Description\n\n**Actor:** [Who/what uses this]  \n**Goal:** [What they want to achieve]  \n**Preconditions:** [What must be true before]  \n**Postconditions:** [What is true after]\n\n**Main Flow:**\n1. Step 1\n2. Step 2\n3. Step 3\n\n**Alternative Flows:**\n- Flow A: [Description]\n- Flow B: [Description]\n\n---\n\n## Design Rationale\n\n**Why This Use Case:**\n- [Reason 1]\n- [Reason 2]\n\n**Design Decisions:**\n- [Decision 1]\n- [Decision 2]\n\n---\n\n## Implementation\n\n**Related Work:**\n- **Epic:** [Epic X]\n- **Story:** [Story Y]\n- **Tasks:** [Task references]\n- **FR/BR:** [Related FR/BR]\n\n**Implementation Status:**\n- [ ] Designed\n- [ ] Implemented\n- [ ] Validated\n- [ ] Documented\n\n---\n\n## Examples\n\n**Example 1:** [Description]\n- [Link to example]\n\n**Example 2:** [Description]\n- [Link to example]\n\n---\n\n## Related Use Cases\n\n- [Related canonical use case]\n- [Related discovered use case]\n\n---\n\n## References\n\n- [Design documents]\n- [Implementation docs]\n- [Related documentation]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discovered-use-case-template",
      children: "Discovered Use Case Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "---\nlifecycle: evergreen\nttl_days: null\ncreated_at: [YYYY-MM-DD]\nexpires_at: null\nhousekeeping_policy: keep\nuse_case_type: discovered\ndesign_phase: false\ndiscovered_during_work: true\ndiscovery_date: [YYYY-MM-DD]\ndiscovered_in: [Task/BR/FR reference]\nstatus: active\n---\n\n# Use Case: [Title]\n\n**Type:** Discovered Use Case  \n**ID:** UC-D-XXX  \n**Discovered:** [YYYY-MM-DD]  \n**Status:** Active  \n**Domain:** [Framework/Component/Pattern]\n\n---\n\n## Summary\n\n[One sentence description of the discovered use case]\n\n---\n\n## Discovery Context\n\n**How Discovered:**\n- [What work revealed this]\n- [What problem it solved]\n- [What pattern emerged]\n\n**Discovered During:**\n- **Work:** [Task/BR/FR reference]\n- **Date:** [YYYY-MM-DD]\n- **Context:** [What was being worked on]\n\n**Pattern Recognition:**\n- [What pattern was recognized]\n- [Why it's valuable]\n- [How it differs from original design]\n\n---\n\n## Use Case Description\n\n**Actor:** [Who/what uses this]  \n**Goal:** [What they want to achieve]  \n**Preconditions:** [What must be true before]  \n**Postconditions:** [What is true after]\n\n**Main Flow:**\n1. Step 1\n2. Step 2\n3. Step 3\n\n**Alternative Flows:**\n- Flow A: [Description]\n- Flow B: [Description]\n\n---\n\n## Discovery Rationale\n\n**Why This Pattern Emerged:**\n- [Reason 1]\n- [Reason 2]\n\n**Gap in Original Design:**\n- [What wasn't covered]\n- [What this fills]\n\n**Lessons Learned:**\n- [Lesson 1]\n- [Lesson 2]\n\n---\n\n## Implementation\n\n**Related Work:**\n- **Task:** [Task that discovered it]\n- **BR/FR:** [Related BR/FR]\n- **Documentation:** [Documentation created]\n- **Epic/Story:** [Related Epic/Story]\n\n**Wiring:**\n- [Links to related BR/FR, Tasks, documentation]\n\n**Implementation Status:**\n- [x] Discovered\n- [x] Documented\n- [x] Wired to related work\n- [ ] Validated\n- [ ] Promoted to Canonical (if applicable)\n\n---\n\n## Examples\n\n**Example 1:** [Description]\n- [Link to example]\n\n**Example 2:** [Description]\n- [Link to example]\n\n---\n\n## Promotion to Canonical\n\n**Promotion Criteria:**\n- [ ] Widely applicable across projects\n- [ ] Validated through multiple uses\n- [ ] Represents best practice\n- [ ] Should be part of framework design\n\n**Promotion Status:**\n- [ ] Not yet promoted\n- [ ] Under consideration\n- [ ] Promoted to UC-XXX\n\n---\n\n## Related Use Cases\n\n- [Related canonical use case]\n- [Related discovered use case]\n\n---\n\n## References\n\n- [Work that discovered it]\n- [Documentation created]\n- [Related BR/FR]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "directory-structure",
      children: "Directory Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/use-cases/\n├── README.md                          # Use case index and navigation\n├── USE_CASE_METHODOLOGY.md            # This document\n├── Canonical/\n│   ├── README.md                      # Canonical use cases index\n│   ├── UC-001-framework-adoption-patterns.md\n│   ├── UC-002-workflow-execution-patterns.md\n│   ├── UC-003-versioning-patterns.md\n│   └── ...\n├── Discovered/\n│   ├── README.md                      # Discovered use cases index\n│   ├── UC-D-001-reopening-br-tasks.md\n│   ├── UC-D-002-bidirectional-wiring.md\n│   ├── UC-D-003-pattern-discovery-workflow.md\n│   └── ...\n└── Templates/\n    ├── CANONICAL_USE_CASE_TEMPLATE.md\n    └── DISCOVERED_USE_CASE_TEMPLATE.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-identification-process",
      children: "Use Case Identification Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-canonical-use-cases",
      children: "For Canonical Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Design Phase:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify use cases during design/planning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document before implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include in design documents"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create use case document"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link to design documents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reference in Epic/Story planning"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Implementation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement according to use case"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate against use case"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update use case with findings"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-discovered-use-cases",
      children: "For Discovered Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Recognition:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify pattern during work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recognize it's a reusable use case"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assess if it should be documented"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create discovered use case document"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document discovery context"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link to work that revealed it"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Wiring:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wire to related BR/FR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wire to related Tasks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wire to related documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure bidirectional links"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use in multiple contexts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate pattern holds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Promotion (Optional):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assess if should be canonical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Promote if widely applicable"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update canonical use cases"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-indexing",
      children: "Use Case Indexing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-use-case-index",
      children: "Canonical Use Case Index"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Quick reference to all canonical use cases"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Canonical Use Cases Index\n\n## By Domain\n\n### Framework Adoption\n- UC-001: Framework Adoption Patterns\n- UC-002: Template Usage Patterns\n\n### Workflow Management\n- UC-010: Release Workflow Execution\n- UC-011: Intake Workflow Execution\n\n### Versioning\n- UC-020: Canonical Versioning\n- UC-021: Doc-Init Build Patterns\n\n## By Status\n\n### Active\n- [List active canonical use cases]\n\n### Deprecated\n- [List deprecated canonical use cases]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discovered-use-case-index",
      children: "Discovered Use Case Index"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Quick reference to all discovered use cases"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Discovered Use Cases Index\n\n## By Discovery Date\n\n### 2025-12\n- UC-D-001: Re-opening BRs/Tasks (2025-12-16)\n- UC-D-002: Bidirectional Wiring (2025-12-16)\n\n## By Domain\n\n### Kanban Management\n- UC-D-001: Re-opening BRs/Tasks\n- UC-D-002: Bidirectional Wiring\n\n## By Promotion Status\n\n### Active (Not Promoted)\n- [List active discovered use cases]\n\n### Promoted to Canonical\n- UC-D-002 → UC-050 (Bidirectional Wiring)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promotion-process",
      children: "Promotion Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-promote-discovered--canonical",
      children: "When to Promote Discovered → Canonical"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Use case is widely applicable across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Pattern validated through multiple uses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Represents best practice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Should be part of framework design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Stable and well-understood"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Assessment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review discovered use case"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Evaluate against promotion criteria"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Get consensus on promotion"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Promotion:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create canonical use case document"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reference original discovered use case"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update canonical index"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mark discovered use case as \"Promoted\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integration:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include in framework design docs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update templates if needed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update documentation references"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discovered: UC-D-002 (Bidirectional Wiring)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promoted to: UC-050 (Bidirectional Wiring Principle)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Original discovered use case marked as promoted"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiring-use-cases",
      children: "Wiring Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case--brfrtaskdocumentation",
      children: "Use Case → BR/FR/Task/Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case Document:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Related Work\n\n**Implementation:**\n- **Task:** [E2:S01:T06](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/epics/epic-02/story-01-rw-agent-execution-and-docs.md#e2s01t06)\n- **BR/FR:** [BR-002](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/fr-br/BR-002-changelog-validator-ordering-bug.md)\n- **Documentation:** [Guide Title](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/guides/guide-title.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR/FR/Task/Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Related Use Cases\n\n- **Canonical:** [UC-XXX](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/use-cases/canonical/UC-XXX.md)\n- **Discovered:** [UC-D-XXX](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/use-cases/discovered/UC-D-XXX.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Document Early:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Canonical: Document during design phase"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Discovered: Document when pattern recognized"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Wire Bidirectionally:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use case links to related work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related work links to use case"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maintain Indexes:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Keep canonical index updated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Keep discovered index updated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cross-reference between indexes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Promote When Appropriate:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't promote prematurely"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate before promotion"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update all references"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Consistent Naming:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Follow naming conventions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use descriptive titles"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include domain in title"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-canonical-use-case",
      children: "Example 1: Canonical Use Case"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UC-001: Framework Adoption Patterns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created during design phase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents intended adoption patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Part of framework design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stable and well-defined"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-discovered-use-case",
      children: "Example 2: Discovered Use Case"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UC-D-001: Re-opening BRs/Tasks"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discovered during BR-002 reopening work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern recognized: re-open vs create new"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documented after discovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wired to BR-002, Task T06, documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-promotion",
      children: "Example 3: Promotion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UC-D-002: Bidirectional Wiring"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discovered during BR-002/T06 wiring work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern validated through usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Promoted to UC-050"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Now part of framework design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE",
          children: "BIDIRECTIONAL_WIRING_PRINCIPLE.md"
        }), " - Example of discovered use case"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE",
          children: "REOPENING_BR_AND_TASKS_GUIDE.md"
        }), " - Example of discovered use case"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md",
          children: "FR_BR_INTAKE_GUIDE.md (source)"
        }), " - Intake process (includes use case references)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use canonical template for design-phase use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use discovered template for implementation-phase use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow wiring principles for all use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain indexes for discoverability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This methodology is part of the Kanban Framework. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/"
        }), " for complete framework documentation."]
      })
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