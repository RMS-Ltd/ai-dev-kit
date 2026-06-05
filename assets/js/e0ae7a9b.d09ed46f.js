"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["48928"], {
49298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_task_template_cross_wiring_sop_md_e0a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-task-template-cross-wiring-sop-md-e0a.json
var site_docs_architecture_standards_and_adrs_task_template_cross_wiring_sop_md_e0a_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/task-template-cross-wiring-sop","title":"Standard Operating Procedure: Task Template Cross-Wiring","description":"Version: 1.0","source":"@site/../docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/task-template-cross-wiring-sop","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-template-cross-wiring-sop","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-16T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Task Naming Migration Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-naming-migration-guide"},"next":{"title":"Task Template Generator Design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-template-generator-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-16T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Standard Operating Procedure: Task Template Cross-Wiring';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose",
  "level": 2
}, {
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Roles &amp; Responsibilities",
  "id": "roles--responsibilities",
  "level": 2
}, {
  "value": "Core Principles",
  "id": "core-principles",
  "level": 2
}, {
  "value": "1. Bidirectional Wiring (Mandatory)",
  "id": "1-bidirectional-wiring-mandatory",
  "level": 3
}, {
  "value": "2. Contextual Relationships (Required)",
  "id": "2-contextual-relationships-required",
  "level": 3
}, {
  "value": "3. Relationship Types (Standardized)",
  "id": "3-relationship-types-standardized",
  "level": 3
}, {
  "value": "Procedure",
  "id": "procedure",
  "level": 2
}, {
  "value": "Step 1: Identify Related Tasks",
  "id": "step-1-identify-related-tasks",
  "level": 3
}, {
  "value": "Step 2: Add Cross-Wiring Section",
  "id": "step-2-add-cross-wiring-section",
  "level": 3
}, {
  "value": "Step 3: Ensure Bidirectional Links",
  "id": "step-3-ensure-bidirectional-links",
  "level": 3
}, {
  "value": "Step 4: Provide Context",
  "id": "step-4-provide-context",
  "level": 3
}, {
  "value": "Step 5: Review and Validate",
  "id": "step-5-review-and-validate",
  "level": 3
}, {
  "value": "Template Structure",
  "id": "template-structure",
  "level": 2
}, {
  "value": "Enhanced Task Template Section",
  "id": "enhanced-task-template-section",
  "level": 3
}, {
  "value": "Relationship Types",
  "id": "relationship-types",
  "level": 2
}, {
  "value": "Complements",
  "id": "complements",
  "level": 3
}, {
  "value": "Coordinates With",
  "id": "coordinates-with",
  "level": 3
}, {
  "value": "Informs",
  "id": "informs",
  "level": 3
}, {
  "value": "Follows",
  "id": "follows",
  "level": 3
}, {
  "value": "Precedes",
  "id": "precedes",
  "level": 3
}, {
  "value": "Related To",
  "id": "related-to",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "1. Keep Cross-Wiring Focused",
  "id": "1-keep-cross-wiring-focused",
  "level": 3
}, {
  "value": "2. Use Consistent Format",
  "id": "2-use-consistent-format",
  "level": 3
}, {
  "value": "3. Maintain Links Actively",
  "id": "3-maintain-links-actively",
  "level": 3
}, {
  "value": "4. Provide Meaningful Context",
  "id": "4-provide-meaningful-context",
  "level": 3
}, {
  "value": "5. Review Periodically",
  "id": "5-review-periodically",
  "level": 3
}, {
  "value": "Tools &amp; Resources",
  "id": "tools--resources",
  "level": 2
}, {
  "value": "Revision History",
  "id": "revision-history",
  "level": 2
}, {
  "value": "Review Schedule",
  "id": "review-schedule",
  "level": 2
}, {
  "value": "Validation",
  "id": "validation",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Appendix: Research Sources",
  "id": "appendix-research-sources",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
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
        id: "standard-operating-procedure-task-template-cross-wiring",
        children: "Standard Operating Procedure: Task Template Cross-Wiring"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework:"
      }), " Kanban Framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TASK_TEMPLATE.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BIDIRECTIONAL_WIRING_PRINCIPLE.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FR-035-task-template-cross-wiring-section.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This SoP defines the standard procedure for cross-wiring (interconnecting) tasks in task documentation, ensuring bidirectional traceability, clear relationship context, and maintainable links between related work items."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " Every relationship between tasks must be bidirectional and contextualized. If Task A links to Task B, Task B must link back to Task A, and both should explain why they are related."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why This SoP Exists:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures consistent cross-wiring patterns across all task documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides clear guidance on when and how to link related tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains bidirectional traceability between interconnected work items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents one-way links that create discoverability gaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables impact analysis when tasks change"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This SoP Covers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-wiring section structure in task templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relationship types and when to use them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidirectional linking requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context guidance for task relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance and review procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This SoP Does NOT Cover:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task dependencies (blocking/depends-on relationships) - covered in \"Dependencies\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR/FR intake and assignment - covered in intake workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning and release procedures - covered in Release Workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applies To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All task documents created using the Kanban Framework"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task template (", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK_TEMPLATE.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-wiring between tasks within same epic/story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-wiring between tasks across different epics/stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-wiring between tasks and BR/FR documents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Does NOT Apply To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies (blocking/depends-on) - use \"Dependencies\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story-level relationships - use Story document structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic-level relationships - use Epic document structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "roles--responsibilities",
      children: "Roles & Responsibilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Author:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify related/interconnected tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add cross-wiring section to task document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure bidirectional links (add links to related tasks, update related tasks to link back)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide context for why tasks are related"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use appropriate relationship types"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Reviewer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify cross-wiring section is complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check bidirectional links are present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate relationship types are appropriate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure context is clear and meaningful"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Maintainer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task template with cross-wiring guidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain bidirectional wiring principle documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples and best practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review and update SoP as needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "core-principles",
      children: "Core Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-bidirectional-wiring-mandatory",
      children: "1. Bidirectional Wiring (Mandatory)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Every cross-wire must be bidirectional."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task E9:S01", ":T08", " links to Task E9:S01", ":T01"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task E9:S01", ":T01", " must link back to Task E9:S01", ":T08"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both links must be present and maintained"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables navigation from any starting point"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents discoverability gaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains knowledge preservation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures consistency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-contextual-relationships-required",
      children: "2. Contextual Relationships (Required)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Every cross-wire must include context explaining why tasks are related."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Not: \"Related Task: E9:S01", ":T01", "\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Yes: \"Related Task: E9:S01", ":T01", " (complements - both analyze RC readiness gaps)\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Helps readers understand relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables better decision-making"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents weak or outdated links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improves knowledge transfer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-relationship-types-standardized",
      children: "3. Relationship Types (Standardized)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Use standardized relationship types to categorize cross-wires."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationship Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complements:"
        }), " Tasks that work together to achieve a goal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coordinates With:"
        }), " Tasks that need to be synchronized"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Informs:"
        }), " Tasks that provide context or information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follows:"
        }), " Tasks that logically come after (non-blocking)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Precedes:"
        }), " Tasks that logically come before (non-blocking)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related To:"
        }), " General relationship (use when specific type doesn't fit)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides semantic meaning to relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables better filtering and grouping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improves understanding of task connections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automation and tooling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "procedure",
      children: "Procedure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-identify-related-tasks",
      children: "Step 1: Identify Related Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " During task creation or when task scope changes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review task scope and deliverables"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identify tasks that:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Work together to achieve a goal"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Need coordination or synchronization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide context or information"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Are logically related (follow/precede)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Modify same documents or systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consider tasks in:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Same story"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Same epic (different stories)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different epics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related BR/FR documents"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " List of related task IDs with relationship types"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-add-cross-wiring-section",
      children: "Step 2: Add Cross-Wiring Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " After identifying related tasks"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add \"Cross-Wiring\" section to task document (after \"Dependencies\" section, before \"Version Anchor\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use standardized format (see Template Structure below)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each related task:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Include full task ID (E{epic}", ":S", "{story}", ":T", "{task})"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include task title"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include relationship type"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include context (why related)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include link to task document"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Cross-Wiring\n\n**Related Tasks:**\n\n- **[EXX:SYY:TZZ: Task Title](path/to/task.md)** - **Relationship Type:** [Complements/Coordinates With/Informs/Follows/Precedes/Related To] - **Context:** [Why tasks are related]\n\n**Related BR/FR Documents:**\n\n- **[BR-XXX: Bug Report Title](path/to/BR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]\n\n- **[FR-XXX: Feature Request Title](path/to/FR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Cross-wiring section added to task document"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-ensure-bidirectional-links",
      children: "Step 3: Ensure Bidirectional Links"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " After adding cross-wiring section"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each related task listed:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Open related task document"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check if it links back to current task"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If not, add bidirectional link to related task's cross-wiring section"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use same relationship type and context (or complementary context)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each BR/FR document listed:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Open BR/FR document"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check if it links to current task"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If not, add link in BR/FR's \"Related Work\" or \"Kanban Links\" section"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " All cross-wires are bidirectional"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-provide-context",
      children: "Step 4: Provide Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " When adding each cross-wire"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each relationship, explain:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Why tasks are related"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "How they work together"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What information or context is shared"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Any coordination requirements"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use clear, concise language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid generic statements (e.g., \"related task\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be specific about the relationship"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Complements - Both tasks analyze RC readiness gaps from different perspectives\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Coordinates With - Both tasks modify the same versioning policy document\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Informs - This task provides analysis that informs the other task's design decisions\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Context provided for all cross-wires"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-review-and-validate",
      children: "Step 5: Review and Validate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " Before task completion or during review"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review cross-wiring section:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All related tasks identified?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All links bidirectional?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Context clear and meaningful?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Relationship types appropriate?"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validate links:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All task IDs correct?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All links resolve to valid documents?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "All BR/FR links present?"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check for stale links:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related tasks still exist?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task IDs haven't changed?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documents haven't moved?"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Cross-wiring section validated and complete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-structure",
      children: "Template Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enhanced-task-template-section",
      children: "Enhanced Task Template Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " After \"Dependencies\" section, before \"Version Anchor\" section"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Cross-Wiring\n\n> **Bidirectional Wiring Required:** Every cross-wire must be bidirectional. If Task A links to Task B, Task B must link back to Task A.\n> \n> **Context Required:** Every cross-wire must include context explaining why tasks are related.\n> \n> **See:** [`bidirectional-wiring-principle.md`](../../governance/principles/bidirectional-wiring-principle.md) for complete guidance.\n\n**Related Tasks:**\n\n- **[EXX:SYY:TZZ: Task Title](path/to/task.md)** - **Relationship Type:** [Complements/Coordinates With/Informs/Follows/Precedes/Related To] - **Context:** [Why tasks are related]\n\n**Related BR/FR Documents:**\n\n- **[BR-XXX: Bug Report Title](path/to/BR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]\n\n- **[FR-XXX: Feature Request Title](path/to/FR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]\n\n**Cross-Wiring Notes:**\n\n[Additional notes about cross-wiring, coordination requirements, or relationship context]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "relationship-types",
      children: "Relationship Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complements",
      children: "Complements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Tasks that work together to achieve a goal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that are part of the same solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that address different aspects of the same problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that combine to deliver a complete feature"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task E9:S01", ":T01", " (Current State Inventory) complements Task E9:S01", ":T03", " (Gap Analysis)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both work together to understand RC readiness gaps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coordinates-with",
      children: "Coordinates With"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Tasks that need to be synchronized."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that modify the same documents or systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that need to be executed in coordination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that share resources or dependencies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task E9:S01", ":T08", " (Repository Story Analysis) coordinates with Task E9:S01", ":T07", " (Roadmap)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both modify versioning and Kanban policies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "informs",
      children: "Informs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Tasks that provide context or information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that provide analysis or research"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that inform design decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that provide context for other tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task E9:S01", ":T02", " (RC=1 Criteria Definition) informs Task E9:S01", ":T03", " (Gap Analysis)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Criteria definition provides context for gap analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "follows",
      children: "Follows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Tasks that logically come after (non-blocking)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that build on previous work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that use outputs from previous tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sequential tasks that don't block each other"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task E9:S01", ":T07", " (Roadmap) follows Task E9:S01", ":T06", " (Checklist Creation)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Roadmap uses checklist as input"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "precedes",
      children: "Precedes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Tasks that logically come before (non-blocking)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that provide inputs for later tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that set up context for later work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sequential tasks that don't block each other"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task E9:S01", ":T01", " (Current State Inventory) precedes Task E9:S01", ":T03", " (Gap Analysis)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inventory provides input for gap analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "related-to",
      children: "Related To"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " General relationship (use when specific type doesn't fit)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that are related but don't fit other categories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks with complex or multi-faceted relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks that share themes or domains"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task E9:S01", ":T08", " (Repository Story Analysis) related to Task E9", ":S05", " (Canonical E/S/T Review)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both address structural issues but in different contexts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-keep-cross-wiring-focused",
      children: "1. Keep Cross-Wiring Focused"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline:"
      }), " Only include tasks that are directly related. Avoid weak or tangential relationships."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents clutter and cognitive overload"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains meaningful relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easier to maintain and review"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Include: Tasks that work together on same problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Exclude: Tasks that are vaguely related or share only themes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-use-consistent-format",
      children: "2. Use Consistent Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline:"
      }), " Always use full task ID format (E{epic}", ":S", "{story}", ":T", "{task}) and include task title."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables parsing and automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improves readability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents ambiguity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Good: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[E9:S01:T08: Repository Story Abstract Space Contradiction](path/to/task.md)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Bad: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T08"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Repository Story Analysis"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-maintain-links-actively",
      children: "3. Maintain Links Actively"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline:"
      }), " When tasks change, update cross-wiring sections in related tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents stale links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains accuracy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures discoverability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If Task E9:S01", ":T08", " is renumbered to T09, update all tasks that link to it"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-provide-meaningful-context",
      children: "4. Provide Meaningful Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline:"
      }), " Context should be specific and actionable, not generic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Helps readers understand relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables better decision-making"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents weak links"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Good: \"Complements - Both tasks analyze RC readiness gaps from different perspectives\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Bad: \"Related task\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-review-periodically",
      children: "5. Review Periodically"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline:"
      }), " Review cross-wiring sections during task reviews and updates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Catches stale links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identifies missing relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains accuracy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review cross-wiring when task status changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review cross-wiring when task scope changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review cross-wiring during epic/story reviews"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tools--resources",
      children: "Tools & Resources"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task Template: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/TASK_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bidirectional Wiring Principle: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/principles/bidirectional-wiring-principle.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This SoP: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link validation tools (if available)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference checking scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency graph visualization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-history",
      children: "Revision History"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version 1.0 (2026-01-16):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initial SoP created based on web research and best practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Defines cross-wiring procedure and relationship types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establishes bidirectional wiring requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides template structure and examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-schedule",
      children: "Review Schedule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Frequency:"
      }), " Quarterly or when task template changes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review cross-wiring usage across recent tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify patterns or issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update SoP if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task template if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Communicate changes to framework users"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Review Due:"
      }), " 2026-04-16"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation",
      children: "Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SoP Compliance Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Cross-wiring section present in task document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All related tasks identified"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All links bidirectional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Context provided for all relationships"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Relationship types appropriate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Links resolve to valid documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No stale or broken links"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enforcement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task reviewers should verify cross-wiring compliance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework maintainers should provide guidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated tools (if available) should validate links"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-035:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-035-task-template-cross-wiring-section",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "FR-035-task-template-cross-wiring-section.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bidirectional Wiring Principle:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/principles/bidirectional-wiring-principle",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bidirectional-wiring-principle.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Template:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/TASK_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-research-sources",
      children: "Appendix: Research Sources"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Research Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SOP Template Best Practices (Asana, ClickUp, Smartsheet, Scribe, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task Relationship Documentation Patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidirectional Linking Best Practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-Reference Maintenance Procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most SOP templates include \"Related Work\" or \"Related Documents\" sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidirectional linking is critical for traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relationship types improve semantic meaning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context is essential for understanding relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular review prevents stale links"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This SoP is part of the Kanban Framework. See ", (0,jsx_runtime.jsx)(_components.code, {
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