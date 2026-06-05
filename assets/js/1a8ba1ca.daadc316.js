"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["23326"], {
39483(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_use_cases_discovered_uc_d_001_reopening_br_tasks_md_1a8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-use-cases-discovered-uc-d-001-reopening-br-tasks-md-1a8.json
var site_docs_knowledge_use_cases_discovered_uc_d_001_reopening_br_tasks_md_1a8_namespaceObject = JSON.parse('{"id":"knowledge/use-cases/discovered/UC-D-001-reopening-br-tasks","title":"Use Case: Re-opening BRs/Tasks Instead of Creating New","description":"Type: Discovered Use Case","source":"@site/../docs/knowledge/use-cases/discovered/UC-D-001-reopening-br-tasks.md","sourceDirName":"knowledge/use-cases/discovered","slug":"/knowledge/use-cases/discovered/UC-D-001-reopening-br-tasks","permalink":"/ai-dev-kit/docs/knowledge/use-cases/discovered/UC-D-001-reopening-br-tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/use-cases/discovered/UC-D-001-reopening-br-tasks.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T14:30:00.000Z","expires_at":null,"housekeeping_policy":"keep","use_case_type":"discovered","design_phase":false,"discovered_during_work":true,"discovery_date":"2025-12-16T00:00:00.000Z","discovered_in":"BR-002 reopening work, Task E2:S01:T06","status":"active"},"sidebar":"docsSidebar","previous":{"title":"Discovered Use Cases Index","permalink":"/ai-dev-kit/docs/knowledge/use-cases/discovered/"},"next":{"title":"Use Case: Bidirectional Wiring Between BR/FR, Tasks, and Documentation","permalink":"/ai-dev-kit/docs/knowledge/use-cases/discovered/UC-D-002-bidirectional-wiring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/use-cases/discovered/UC-D-001-reopening-br-tasks.md


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
	discovered_in: 'BR-002 reopening work, Task E2:S01:T06',
	status: 'active'
};
const contentTitle = 'Use Case: Re-opening BRs/Tasks Instead of Creating New';

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
        id: "use-case-re-opening-brstasks-instead-of-creating-new",
        children: "Use Case: Re-opening BRs/Tasks Instead of Creating New"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Discovered Use Case", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " UC-D-001", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discovered:"
      }), " 2025-12-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Domain:"
      }), " Kanban Management"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a bug persists despite a previous fix attempt, re-open the existing BR and task rather than creating new ones. This approach reduces noise, maintains continuity, and preserves context."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "discovery-context",
      children: "Discovery Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How Discovered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While re-opening BR-002 and Task E2:S01", ":T06", ", recognized this as a reusable pattern"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User feedback: \"New BR adds noise. Re-open BR-02. If BR-02 had a task, re-open that too with the new context.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern recognized: Re-opening is better than creating duplicates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discovered During:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " BR-002 reopening, Task E2:S01", ":T06", " reopening"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date:"
        }), " 2025-12-16"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context:"
        }), " Bug persisted despite previous fix attempt (v0.2.1.6+2)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern Recognition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-opening maintains continuity of bug history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoids duplicate BR/task proliferation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserves context and lessons learned"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces administrative overhead"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-description",
      children: "Use Case Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Actor:"
      }), " Project maintainers, developers, agents handling bug fixes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Maintain bug history continuity while addressing persistent bugs", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preconditions:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug report exists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Previous fix attempt exists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug persists despite fix"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Postconditions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR re-opened with new context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task re-opened with new context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "History preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New context documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Main Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify bug persists despite previous fix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-open existing BR (don't create new)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add reopening context and evidence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-open related task (if exists)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task with reopening context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document the pattern (if not already documented)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wire everything bidirectionally"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative Flows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow A:"
        }), " No previous task exists → Create new task, link to re-opened BR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flow B:"
        }), " Multiple related bugs → Re-open all related BRs/tasks together"]
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
        children: "Creating new BRs for same bug creates noise"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duplicate BRs/tasks make tracking difficult"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-opening preserves valuable history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context continuity is important"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap in Original Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Original design didn't explicitly address bug persistence scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No guidance on re-opening vs creating new"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern wasn't documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons Learned:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-opening is cleaner than creating duplicates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "History preservation is valuable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern should be documented for reuse"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Administrative overhead should be minimized"
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
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE",
          children: "REOPENING_BR_AND_TASKS_GUIDE.md"
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
        }), " ", "Validated (used successfully)"]
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
        children: "Example 1: BR-002 Re-opening"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR:"
        }), " BR-002 (Changelog Validator Ordering Bug)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous Fix:"
        }), " E2:S01", ":T06", " (v0.2.1.6+2) - marked complete"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reopening:"
        }), " BR-002 and Task T06 re-opened with new context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Result:"
        }), " Clean history, preserved context, documented pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Pattern Documentation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " BR-002 reopening work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " Re-opening BRs/tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " REOPENING_BR_AND_TASKS_GUIDE.md created"]
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
        children: "Pattern is widely applicable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Represents best practice for bug management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Should be part of Kanban framework governance"
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
        }), " UC-030 (3-Tier Kanban Structure) - Related to Kanban organization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovered:"
        }), " UC-D-002 (Bidirectional Wiring) - Related wiring pattern"]
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
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE",
          children: "REOPENING_BR_AND_TASKS_GUIDE.md"
        }), " - Complete guide for this pattern"]
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
        children: "Demonstrates pattern discovery and documentation"
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