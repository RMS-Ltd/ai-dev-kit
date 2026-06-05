"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["56574"], {
77548(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_governance_principles_bidirectional_wiring_principle_md_dc1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-governance-principles-bidirectional-wiring-principle-md-dc1.json
var site_docs_governance_principles_bidirectional_wiring_principle_md_dc1_namespaceObject = JSON.parse('{"id":"governance/principles/bidirectional-wiring-principle","title":"Bidirectional Wiring Principle: BR/FR ↔ Task ↔ Documentation","description":"Purpose: This document defines the principle of bidirectional wiring between Bug Reports (BR), Feature Requests (FR), Tasks, and documentation, ensuring traceability and discoverability across the knowledge base.","source":"@site/../docs/governance/principles/bidirectional-wiring-principle.md","sourceDirName":"governance/principles","slug":"/governance/principles/bidirectional-wiring-principle","permalink":"/ai-dev-kit/docs/governance/principles/bidirectional-wiring-principle","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/governance/principles/bidirectional-wiring-principle.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T14:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/governance/principles/bidirectional-wiring-principle.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-16T14:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bidirectional Wiring Principle: BR/FR ↔ Task ↔ Documentation';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Core Principle",
  "id": "core-principle",
  "level": 2
}, {
  "value": "Wiring Patterns",
  "id": "wiring-patterns",
  "level": 2
}, {
  "value": "Pattern 1: BR/FR → Task",
  "id": "pattern-1-brfr--task",
  "level": 3
}, {
  "value": "Pattern 2: Task → Documentation",
  "id": "pattern-2-task--documentation",
  "level": 3
}, {
  "value": "Pattern 3: BR/FR → Documentation",
  "id": "pattern-3-brfr--documentation",
  "level": 3
}, {
  "value": "Use Case Discovery Pattern",
  "id": "use-case-discovery-pattern",
  "level": 2
}, {
  "value": "When Work Reveals a Pattern",
  "id": "when-work-reveals-a-pattern",
  "level": 3
}, {
  "value": "Wiring Checklist",
  "id": "wiring-checklist",
  "level": 2
}, {
  "value": "For BR/FR:",
  "id": "for-brfr",
  "level": 3
}, {
  "value": "For Task:",
  "id": "for-task",
  "level": 3
}, {
  "value": "For Documentation:",
  "id": "for-documentation",
  "level": 3
}, {
  "value": "Link Format Standards",
  "id": "link-format-standards",
  "level": 2
}, {
  "value": "Anchor Links for Tasks",
  "id": "anchor-links-for-tasks",
  "level": 3
}, {
  "value": "Relative Paths",
  "id": "relative-paths",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: BR-002 and Task T06",
  "id": "example-1-br-002-and-task-t06",
  "level": 3
}, {
  "value": "Use Case: Work → Pattern Discovery → Documentation → Wiring",
  "id": "use-case-work--pattern-discovery--documentation--wiring",
  "level": 2
}, {
  "value": "Scenario",
  "id": "scenario",
  "level": 3
}, {
  "value": "Process",
  "id": "process",
  "level": 3
}, {
  "value": "Result",
  "id": "result",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Anti-Patterns to Avoid",
  "id": "anti-patterns-to-avoid",
  "level": 2
}, {
  "value": "Validation",
  "id": "validation",
  "level": 2
}, {
  "value": "Manual Validation Checklist",
  "id": "manual-validation-checklist",
  "level": 3
}, {
  "value": "Automated Validation (Future)",
  "id": "automated-validation-future",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}, {
  "value": "Examples in Codebase",
  "id": "examples-in-codebase",
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
        id: "bidirectional-wiring-principle-brfr--task--documentation",
        children: "Bidirectional Wiring Principle: BR/FR ↔ Task ↔ Documentation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " This document defines the principle of bidirectional wiring between Bug Reports (BR), Feature Requests (FR), Tasks, and documentation, ensuring traceability and discoverability across the knowledge base."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Project maintainers, developers, agents, and anyone creating or linking work items"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bidirectional wiring"
      }), " means that every link between work items goes both ways:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If BR-002 links to Task E2:S01", ":T06", ", then Task E2:S01", ":T06", " must link back to BR-002"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If Task references documentation, documentation should reference the Task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If documentation references a BR/FR, the BR/FR should reference the documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This principle ensures:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability:"
        }), " Can navigate from any work item to related items"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Discoverability:"
        }), " Can find related work from any starting point"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency:"
        }), " Links stay synchronized and accurate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Knowledge Preservation:"
        }), " Relationships are preserved over time"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "core-principle",
      children: "Core Principle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Every relationship must be bidirectional:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BR/FR ←→ Task ←→ Documentation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BR/FR → Task (one-way only)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiring-patterns",
      children: "Wiring Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-1-brfr--task",
      children: "Pattern 1: BR/FR → Task"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR/FR Side (BR_TEMPLATE.md / FR_TEMPLATE.md):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Intake Decision\n\n**Kanban Links:**\n- Epic: [`docs/.../Epic-X.md`](../epics/Epic-X/Epic-X.md)\n- Story: [`docs/.../Story-XXX.md`](../epics/Epic-X/Story-XXX.md)\n- Task: [E2:S01:T06 - Task Title](../epics/Epic-X/Story-XXX.md#e2s01t06--task-title) (with anchor link)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Side (Story document):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### E2:S01:T06 – Task Title\n\n**Input:**  \n- **Bug Report:** [BR-002: Bug Title](../../fr-br/BR-002-bug-title.md) (or Feature Request: FR-XXX)\n\n**Related:**\n- **Bug Report:** [BR-002: Bug Title](../../fr-br/BR-002-bug-title.md)\n- **Documentation:** [Guide Title](../../guides/guide-title.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-2-task--documentation",
      children: "Pattern 2: Task → Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Side:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Related:**\n- **Documentation:** [Guide Title](../../guides/guide-title.md) - Explains the pattern\n- **Use Case:** [Use Case Title](../../use-cases/use-case-title.md) - Documents the pattern\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Side:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Related Work\n\n- **Task:** [E2:S01:T06 - Task Title](../../epics/Epic-X/Story-XXX.md#e2s01t06--task-title) - Implements this pattern\n- **Bug Report:** [BR-002: Bug Title](../fr-br/BR-002-bug-title.md) - Discovered this pattern\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-3-brfr--documentation",
      children: "Pattern 3: BR/FR → Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR/FR Side:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## References\n\n- [Guide Title](../../guides/guide-title.md) - Documents the pattern discovered\n- [Use Case Title](../../use-cases/use-case-title.md) - Use case that prompted this BR\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Side:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Examples\n\n- **BR-002:** [Changelog Validator Ordering Bug](../../project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md) - Example of this pattern\n- **Task:** [E2:S01:T06](../../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md#e2s01t06--fix-changelog-validator-ordering-bug--reopened) - Implements this pattern\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-discovery-pattern",
      children: "Use Case Discovery Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-work-reveals-a-pattern",
      children: "When Work Reveals a Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " While working on a task, you discover a pattern, use case, or best practice that should be documented."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Recognize the Pattern:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify that the work reveals a reusable pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Determine if it's a use case, best practice, or anti-pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assess if it should be documented"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Documentation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create guide, use case doc, or pattern document"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document the pattern clearly with examples"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reference the work that revealed it"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Wire Everything Together:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BR/FR → Documentation:"
            }), " Add documentation to BR/FR References section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Task → Documentation:"
            }), " Add documentation to Task Related section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Documentation → BR/FR:"
            }), " Add BR/FR to documentation Examples/Related Work"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Documentation → Task:"
            }), " Add Task to documentation Examples/Related Work"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Work on Task → Discover Pattern → Create Documentation → Wire All Links\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Concrete Example (BR-002 Re-opening):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work:"
        }), " Re-opening BR-002 and Task T06"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern Discovered:"
        }), " Re-opening BRs/tasks instead of creating new ones"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Created:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REOPENING_BR_AND_TASKS_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wiring:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BR-002 → References → REOPENING_BR_AND_TASKS_GUIDE.md"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task T06 → Related → REOPENING_BR_AND_TASKS_GUIDE.md"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "REOPENING_BR_AND_TASKS_GUIDE.md → Examples → BR-002, Task T06"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "REOPENING_BR_AND_TASKS_GUIDE.md → References → BR-002, Task T06"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiring-checklist",
      children: "Wiring Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When creating or updating work items, ensure bidirectional wiring:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-brfr",
      children: "For BR/FR:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "BR/FR has \"Kanban Links\" section linking to Task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Task has \"Input\" or \"Related\" section linking back to BR/FR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "If documentation exists, BR/FR references it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation references BR/FR"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-task",
      children: "For Task:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Task has \"Input\" section linking to BR/FR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "BR/FR has \"Kanban Links\" section linking to Task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "If documentation exists, Task references it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation references Task"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-documentation",
      children: "For Documentation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation references related BR/FR in Examples/Related Work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation references related Tasks in Examples/Related Work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "BR/FR references documentation in References"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Tasks reference documentation in Related section"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "link-format-standards",
      children: "Link Format Standards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anchor-links-for-tasks",
      children: "Anchor Links for Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use anchor links for tasks in story documents:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- Task: [E2:S01:T06 - Task Title](../epics/Epic-X/Story-XXX.md#e2s01t06--task-title)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anchor Format:"
      }), " Convert task title to lowercase, replace spaces with hyphens, remove special characters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S01:T06 – Fix changelog validator ordering bug"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Anchor: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#e2s01t06--fix-changelog-validator-ordering-bug"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relative-paths",
      children: "Relative Paths"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use relative paths from the document location:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- From `docs/project-management/kanban/fr-br/BR-002.md`:\n  - To Epic: `../epics/epic-02/epic-02.md`\n  - To Story: `../epics/epic-02/story-01-rw-agent-execution-and-docs.md`\n  - To Task: `../epics/epic-02/story-01-rw-agent-execution-and-docs.md#e2s01t06--fix-changelog-validator-ordering-bug`\n\n\n- From `docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md`:\n  - To BR: `../../fr-br/BR-002-changelog-validator-ordering-bug.md`\n  - To Documentation: `../../fr-br/REOPENING_BR_AND_TASKS_GUIDE.md`\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-br-002-and-task-t06",
      children: "Example 1: BR-002 and Task T06"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["BR-002 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Intake Decision\n\n**Kanban Links:**\n- Epic: [`docs/project-management/kanban/epics/epic-02/epic-02.md`](../../project-management/kanban/epics/epic-02/epic-02.md)\n- Story: [`docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md`](../../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md)\n- Task: [E2:S01:T06 - Fix changelog validator ordering bug](../../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md#e2s01t06--fix-changelog-validator-ordering-bug--reopened) (🔄 REOPENED)\n\n## References\n\n- [REOPENING_BR_AND_TASKS_GUIDE.md](../../project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md) - Guide for reopening BRs/tasks (this BR is an example)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Task T06 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### E2:S01:T06 – Fix changelog validator ordering bug 🔄 REOPENED\n\n**Input:**  \n- **Bug Report:** [BR-002: Changelog Validator Ordering Bug](../../project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md) (REOPENED)\n\n**Related:**\n- **Bug Report:** [BR-002: Changelog Validator Ordering Bug](../../project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md) (REOPENED)\n- **Documentation:** [REOPENING_BR_AND_TASKS_GUIDE.md](../../project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md) - Guide for reopening BRs/tasks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Documentation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Example: BR-002 Re-opening\n\nSee [`BR-002-changelog-validator-ordering-bug.md`](../../project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md) for a complete example\n\n## Example: Task Re-opening\n\nSee [`docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md`](../../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md) Task T06 for an example\n\n## Related Documentation\n\n- [`BR-002-changelog-validator-ordering-bug.md`](../../project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md) - Example reopened BR\n- [`docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md`](../../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md) - Example reopened task\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-work--pattern-discovery--documentation--wiring",
      children: "Use Case: Work → Pattern Discovery → Documentation → Wiring"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario",
      children: "Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "While working on re-opening BR-002 and Task T06, you discover:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " Re-opening BRs/tasks is better than creating new ones"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Case:"
        }), " When bugs persist despite fix attempts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best Practice:"
        }), " Document the pattern for future use"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process",
      children: "Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Work Phase:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Re-open BR-002"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Re-open Task T06"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add context and evidence"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pattern Recognition:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Recognize this is a reusable pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify it should be documented"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation Creation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "REOPENING_BR_AND_TASKS_GUIDE.md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document the pattern, process, examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Wiring Phase:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-002 → Documentation:"
            }), " Add to References section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Task T06 → Documentation:"
            }), " Add to Related section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Documentation → BR-002:"
            }), " Add to Examples section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Documentation → Task T06:"
            }), " Add to Examples section"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-002 ↔ Task T06:"
            }), " Ensure bidirectional links exist"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "result",
      children: "Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All work items are now bidirectionally wired:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR-002 ↔ Task T06 ↔ Documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can navigate from any starting point to related items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern is discoverable and reusable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Always Wire Bidirectionally:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If A links to B, B must link back to A"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use consistent link formats"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify links work (test anchor links)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Wire During Creation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't defer wiring - do it immediately"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include wiring in task completion checklist"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify wiring before marking complete"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Wire When Discovering Patterns:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When work reveals a pattern, document it"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wire the documentation to the work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wire the work to the documentation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maintain Wiring:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update links when moving/renaming files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify links during reviews"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fix broken links immediately"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Consistent Formats:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Follow link format standards"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use relative paths consistently"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use anchor links for tasks"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "anti-patterns-to-avoid",
      children: "Anti-Patterns to Avoid"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Way Links:"
      }), " BR links to Task but Task doesn't link back", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing Documentation Links:"
      }), " Pattern documented but not linked from work", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Broken Links:"
      }), " Links that don't resolve (wrong paths, missing anchors)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deferred Wiring:"
      }), " \"I'll add links later\" (they get forgotten)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inconsistent Formats:"
      }), " Different link formats in different places"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation",
      children: "Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-validation-checklist",
      children: "Manual Validation Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Every BR/FR has links to its Task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Every Task has links back to its BR/FR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Documentation references related BR/FR/Tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "BR/FR/Tasks reference related documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All links resolve correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Anchor links work (for tasks)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-validation-future",
      children: "Automated Validation (Future)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider creating a validation script that:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checks for bidirectional links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validates link paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reports missing links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suggests link additions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE",
          children: "REOPENING_BR_AND_TASKS_GUIDE.md"
        }), " - Example of pattern discovery and wiring"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/knowledge/USE_CASE_METHODOLOGY.md",
          children: "USE_CASE_METHODOLOGY.md"
        }), " - Use case methodology (includes wiring)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/knowledge/use-cases/discovered/UC-D-002-bidirectional-wiring.md",
          children: "UC-D-002: Bidirectional Wiring"
        }), " - Discovered use case (promoted to canonical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md",
          children: "FR_BR_INTAKE_GUIDE.md (source)"
        }), " - Intake process (includes linking)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/BR_TEMPLATE.md",
          children: "BR_TEMPLATE.md (source)"
        }), " - BR template (includes Kanban Links section)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/FR_TEMPLATE.md",
          children: "FR_TEMPLATE.md (source)"
        }), " - FR template (includes Kanban Links section)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples-in-codebase",
      children: "Examples in Codebase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Good Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BR-002 ↔ Task E2:S01", ":T06", " ↔ REOPENING_BR_AND_TASKS_GUIDE.md (fully wired)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BR-003 ↔ Task E2:S01", ":T07", " (BR references task, task references BR)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern to Follow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always ensure bidirectional links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document patterns discovered during work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wire documentation to the work that revealed it"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This principle applies to all BR/FR, Tasks, and documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use this guide when creating or updating work items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify bidirectional wiring before marking work complete"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This document is part of the Kanban Framework. See ", (0,jsx_runtime.jsx)(_components.code, {
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