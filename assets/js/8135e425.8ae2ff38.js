"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["4059"], {
67934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_use_cases_discovered_uc_d_003_pattern_discovery_workflow_md_813_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-use-cases-discovered-uc-d-003-pattern-discovery-workflow-md-813.json
var site_docs_knowledge_use_cases_discovered_uc_d_003_pattern_discovery_workflow_md_813_namespaceObject = JSON.parse('{"id":"knowledge/use-cases/discovered/UC-D-003-pattern-discovery-workflow","title":"Use Case: Pattern Discovery Workflow (Work → Pattern → Documentation → Wiring)","description":"Type: Discovered Use Case","source":"@site/../docs/knowledge/use-cases/discovered/UC-D-003-pattern-discovery-workflow.md","sourceDirName":"knowledge/use-cases/discovered","slug":"/knowledge/use-cases/discovered/UC-D-003-pattern-discovery-workflow","permalink":"/ai-dev-kit/docs/knowledge/use-cases/discovered/UC-D-003-pattern-discovery-workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/use-cases/discovered/UC-D-003-pattern-discovery-workflow.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T14:30:00.000Z","expires_at":null,"housekeeping_policy":"keep","use_case_type":"discovered","design_phase":false,"discovered_during_work":true,"discovery_date":"2025-12-16T00:00:00.000Z","discovered_in":"BR-002 reopening and wiring work","status":"active"},"sidebar":"docsSidebar","previous":{"title":"Use Case: Bidirectional Wiring Between BR/FR, Tasks, and Documentation","permalink":"/ai-dev-kit/docs/knowledge/use-cases/discovered/UC-D-002-bidirectional-wiring"},"next":{"title":"Discovered Use Case: Story + Task Docs Batch Creation","permalink":"/ai-dev-kit/docs/knowledge/use-cases/discovered/UC-D-004-story-task-docs-batch-creation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/use-cases/discovered/UC-D-003-pattern-discovery-workflow.md


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
	discovered_in: 'BR-002 reopening and wiring work',
	status: 'active'
};
const contentTitle = 'Use Case: Pattern Discovery Workflow (Work → Pattern → Documentation → Wiring)';

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
        id: "use-case-pattern-discovery-workflow-work--pattern--documentation--wiring",
        children: "Use Case: Pattern Discovery Workflow (Work → Pattern → Documentation → Wiring)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Discovered Use Case", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " UC-D-003", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discovered:"
      }), " 2025-12-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Domain:"
      }), " Knowledge Management"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When work reveals a reusable pattern, document it and wire it bidirectionally to the work that revealed it. This creates a discoverable knowledge base of patterns and practices."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "discovery-context",
      children: "Discovery Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How Discovered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While working on BR-002 reopening, recognized the pattern of re-opening vs creating new"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User request: \"We should probably document this use case in the KB...\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern recognized: Work → Pattern Recognition → Documentation → Wiring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discovered During:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " BR-002 reopening, bidirectional wiring work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date:"
        }), " 2025-12-16"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context:"
        }), " Multiple patterns discovered during same work session"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern Recognition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern discovery is itself a pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should be documented as a workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables systematic pattern capture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-description",
      children: "Use Case Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Actor:"
      }), " Project maintainers, developers, agents", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Systematically capture and document patterns discovered during work", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preconditions:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work is being performed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern emerges from work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern is recognized as reusable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Postconditions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern wired to work that revealed it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern discoverable in knowledge base"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Main Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " Perform work (BR/FR, Task, implementation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern Recognition:"
        }), " Identify reusable pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Create use case or guide document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wiring:"
        }), " Wire bidirectionally:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Work → Documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation → Work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related BR/FR/Tasks → Documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation → Related BR/FR/Tasks"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Indexing:"
        }), " Add to appropriate use case index"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Use pattern in future work"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative Flows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow A:"
        }), " Pattern discovered → Create discovered use case → Wire"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow B:"
        }), " Pattern validated → Promote to canonical use case → Update indexes"]
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
        children: "Patterns discovered during work are valuable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need systematic way to capture patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation without wiring isn't discoverable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern discovery is itself a pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap in Original Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No explicit workflow for pattern discovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern documentation wasn't systematized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wiring wasn't part of pattern capture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons Learned:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern discovery should be systematic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation must be wired to be discoverable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern discovery workflow should be documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables knowledge base growth"
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
          children: "Tasks:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs",
              children: ["E2:S01", ":T06", " - Fix changelog validator ordering bug"]
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/Task-010-Investigate-CHANGELOG-Entry-Removal-and-Harden-Processes",
              children: ["E2:S11", ":T10", " - Investigate CHANGELOG Entry Removal"]
            })
          }), "\n"]
        }), "\n"]
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
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE",
              children: "REOPENING_BR_AND_TASKS_GUIDE.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE",
              children: "BIDIRECTIONAL_WIRING_PRINCIPLE.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/knowledge/USE_CASE_METHODOLOGY",
              children: "USE_CASE_METHODOLOGY.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic/Story:"
        }), " Epic 2, Stories 1 and 11"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wiring:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Work items link to documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Documentation links to work items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Use cases link to related work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Related work links to use cases"
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
        }), " ", "Validated (used to document other patterns)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Promoted to Canonical (under consideration)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: BR-002 Re-opening Pattern"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " BR-002 reopening"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " Re-opening BRs/tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " REOPENING_BR_AND_TASKS_GUIDE.md"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wiring:"
        }), " BR-002 ↔ Task T06 ↔ Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Case:"
        }), " UC-D-001"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Bidirectional Wiring Pattern"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " BR-002/T06 wiring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " Bidirectional wiring principle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " BIDIRECTIONAL_WIRING_PRINCIPLE.md"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wiring:"
        }), " All items bidirectionally linked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Case:"
        }), " UC-D-002 (promoted to UC-050)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Use Case Methodology"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " Pattern discovery work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " Use case organization (canonical vs discovered)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " USE_CASE_METHODOLOGY.md"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wiring:"
        }), " Methodology ↔ Use Cases ↔ Work Items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Case:"
        }), " This use case (UC-D-003)"]
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
          disabled: true
        }), " ", "Should be part of framework design (under consideration)"]
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
          checked: true,
          disabled: true
        }), " ", "Under consideration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Promoted to UC-XXX"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Promotion Notes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern discovery workflow is essential for knowledge management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should be part of framework design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider promoting after more validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-use-cases",
      children: "Related Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " UC-050 (Bidirectional Wiring Principle) - Related principle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovered:"
        }), " UC-D-001 (Re-opening BRs/Tasks) - Example of this workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovered:"
        }), " UC-D-002 (Bidirectional Wiring) - Example of this workflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/knowledge/USE_CASE_METHODOLOGY",
          children: "USE_CASE_METHODOLOGY.md"
        }), " - Methodology that includes this workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE",
          children: "BIDIRECTIONAL_WIRING_PRINCIPLE.md"
        }), " - Related principle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE",
          children: "REOPENING_BR_AND_TASKS_GUIDE.md"
        }), " - Example documentation created through this workflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This use case follows the Discovered Use Case template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrates the pattern discovery workflow itself"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shows how patterns are captured and wired"
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