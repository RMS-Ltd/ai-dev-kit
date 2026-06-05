"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["11795"], {
54751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_use_cases_discovered_uc_d_002_bidirectional_wiring_md_a47_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-use-cases-discovered-uc-d-002-bidirectional-wiring-md-a47.json
var site_docs_knowledge_use_cases_discovered_uc_d_002_bidirectional_wiring_md_a47_namespaceObject = JSON.parse('{"id":"knowledge/use-cases/discovered/UC-D-002-bidirectional-wiring","title":"Use Case: Bidirectional Wiring Between BR/FR, Tasks, and Documentation","description":"Type: Discovered Use Case (Promoted to Canonical)","source":"@site/../docs/knowledge/use-cases/discovered/UC-D-002-bidirectional-wiring.md","sourceDirName":"knowledge/use-cases/discovered","slug":"/knowledge/use-cases/discovered/UC-D-002-bidirectional-wiring","permalink":"/ai-dev-kit/docs/knowledge/use-cases/discovered/UC-D-002-bidirectional-wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/use-cases/discovered/UC-D-002-bidirectional-wiring.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T14:30:00.000Z","expires_at":null,"housekeeping_policy":"keep","use_case_type":"discovered","design_phase":false,"discovered_during_work":true,"discovery_date":"2025-12-16T00:00:00.000Z","discovered_in":"BR-002/T06 wiring work","status":"active","promoted_to":"UC-050","promotion_date":"2025-12-16T00:00:00.000Z"},"sidebar":"docsSidebar","previous":{"title":"Use Case: Re-opening BRs/Tasks Instead of Creating New","permalink":"/ai-dev-kit/docs/knowledge/use-cases/discovered/UC-D-001-reopening-br-tasks"},"next":{"title":"Use Case: Pattern Discovery Workflow (Work → Pattern → Documentation → Wiring)","permalink":"/ai-dev-kit/docs/knowledge/use-cases/discovered/UC-D-003-pattern-discovery-workflow"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/use-cases/discovered/UC-D-002-bidirectional-wiring.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-16T14:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep',
	use_case_type: 'discovered',
	design_phase: false,
	discovered_during_work: true,
	discovery_date: new Date('2025-12-16T00:00:00.000Z'),
	discovered_in: 'BR-002/T06 wiring work',
	status: 'active',
	promoted_to: 'UC-050',
	promotion_date: new Date('2025-12-16T00:00:00.000Z')
};
const contentTitle = 'Use Case: Bidirectional Wiring Between BR/FR, Tasks, and Documentation';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Discovery Context",
  "id": "discovery-context",
  "level": 2
}, {
  "value": "Use Case Description",
  "id": "use-case-description",
  "level": 2
}, {
  "value": "Discovery Rationale",
  "id": "discovery-rationale",
  "level": 2
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Promotion to Canonical",
  "id": "promotion-to-canonical",
  "level": 2
}, {
  "value": "Related Use Cases",
  "id": "related-use-cases",
  "level": 2
}, {
  "value": "References",
  "id": "references",
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
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "use-case-bidirectional-wiring-between-brfr-tasks-and-documentation",
        children: "Use Case: Bidirectional Wiring Between BR/FR, Tasks, and Documentation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Discovered Use Case (Promoted to Canonical)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " UC-D-002 → UC-050", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discovered:"
      }), " 2025-12-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Promoted:"
      }), " 2025-12-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active (Promoted)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Domain:"
      }), " Knowledge Base Management"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every link between work items (BR/FR, Tasks, Documentation) must be bidirectional. If BR links to Task, Task must link back to BR. This ensures traceability and discoverability across the knowledge base."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "discovery-context",
      children: "Discovery Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How Discovered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While wiring BR-002 to Task T06, recognized need for bidirectional links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User question: \"is there wiring between the BR, task, and documentation?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern recognized: One-way links aren't sufficient for discoverability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discovered During:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " BR-002/T06 wiring work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date:"
        }), " 2025-12-16"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context:"
        }), " Ensuring all related work items are discoverable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern Recognition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidirectional links enable navigation from any starting point"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One-way links create discoverability gaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern should be documented as principle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-description",
      children: "Use Case Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Actor:"
      }), " Project maintainers, developers, agents, knowledge base users", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Ensure traceability and discoverability across all work items", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preconditions:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR/FR, Task, or Documentation exists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related work items exist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Postconditions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All relationships are bidirectional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can navigate from any work item to related items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Links are consistent and accurate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Main Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create or update BR/FR, Task, or Documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify related work items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add links from current item to related items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add links from related items back to current item"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify all links resolve correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document wiring principle (if not already documented)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative Flows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow A:"
        }), " New BR → Create Task → Wire both directions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow B:"
        }), " Discovered pattern → Create Documentation → Wire to work that revealed it"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "discovery-rationale",
      children: "Discovery Rationale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why This Pattern Emerged:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One-way links limit discoverability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need to navigate from any starting point"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency requires bidirectional links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge preservation requires complete relationships"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap in Original Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Original design didn't explicitly require bidirectional links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No principle documented for wiring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern wasn't part of framework design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons Learned:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidirectional links are essential for discoverability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern should be documented as principle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should be part of framework design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation needed to ensure links exist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs",
          children: ["E2:S01", ":T06", " - Fix changelog validator ordering bug"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug",
          children: "BR-002: Changelog Validator Ordering Bug"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE",
          children: "BIDIRECTIONAL_WIRING_PRINCIPLE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story:"
        }), " Epic 2, Story 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wiring:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ BR-002 links to Task T06"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Task T06 links to BR-002"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Documentation links to BR-002 and Task T06"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ BR-002 and Task T06 link to documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Use case links to all related work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Status:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Discovered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Wired to related work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Promoted to Canonical (UC-050)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: BR-002 ↔ Task T06 ↔ Documentation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-002:"
        }), " Links to Task T06 and Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task T06:"
        }), " Links back to BR-002 and Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Links to BR-002 and Task T06"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " Fully bidirectional, navigable from any starting point"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Pattern Discovery → Documentation → Wiring"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " BR-002/T06 wiring work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " Bidirectional wiring principle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " BIDIRECTIONAL_WIRING_PRINCIPLE.md created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wiring:"
        }), " All items bidirectionally linked"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promotion-to-canonical",
      children: "Promotion to Canonical"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Promotion Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Widely applicable across projects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validated through usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Represents best practice"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Should be part of framework design"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Promotion Status:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Not yet promoted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Under consideration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Promoted to UC-050"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Promotion Notes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Promoted:"
        }), " 2025-12-16"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Widely applicable, represents best practice, essential for knowledge base management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical Use Case:"
        }), " UC-050 (Bidirectional Wiring Principle)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " Now part of framework design"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-use-cases",
      children: "Related Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " UC-050 (Bidirectional Wiring Principle) - Promoted version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovered:"
        }), " UC-D-001 (Re-opening BRs/Tasks) - Related pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovered:"
        }), " UC-D-003 (Pattern Discovery Workflow) - How this pattern was discovered"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE",
          children: "BIDIRECTIONAL_WIRING_PRINCIPLE.md"
        }), " - Complete principle document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug",
          children: "BR-002: Changelog Validator Ordering Bug"
        }), " - Example BR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs",
          children: ["Task E2:S01", ":T06"]
        }), " - Example task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This use case follows the Discovered Use Case template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrates promotion to canonical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shows bidirectional wiring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This use case is part of the Use Cases Knowledge Base. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/use-cases/USE_CASE_METHODOLOGY.md"
        }), " for methodology."]
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