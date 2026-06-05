"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["63600"], {
44679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_012_agent_bootstrap_and_task_routing_md_30a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-012-agent-bootstrap-and-task-routing-md-30a.json
var site_docs_architecture_standards_and_adrs_adr_012_agent_bootstrap_and_task_routing_md_30a_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing","title":"ADR-012: Agent bootstrap and task routing","description":"Version 0.0.1","source":"@site/../docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T21:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-011: Workflow Step Tracker and Agent Run Log","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log"},"next":{"title":"ADR-013: IDE command allowlist catalog and enforcement","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T21:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-012: Agent bootstrap and task routing';

const assets = {

};



const toc = [{
  "value": "Version 0.0.1",
  "id": "version-001",
  "level": 3
}, {
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Decision",
  "id": "decision",
  "level": 2
}, {
  "value": "Layer 1 — Intro (always load)",
  "id": "layer-1--intro-always-load",
  "level": 3
}, {
  "value": "Layer 2 — Triage (cold start, scan only)",
  "id": "layer-2--triage-cold-start-scan-only",
  "level": 3
}, {
  "value": "Layer 3 — Detail (lazy load)",
  "id": "layer-3--detail-lazy-load",
  "level": 3
}, {
  "value": "IDE integration",
  "id": "ide-integration",
  "level": 3
}, {
  "value": "Generated vs static manifest sections",
  "id": "generated-vs-static-manifest-sections",
  "level": 3
}, {
  "value": "Routing coverage rule",
  "id": "routing-coverage-rule",
  "level": 3
}, {
  "value": "Alternatives considered",
  "id": "alternatives-considered",
  "level": 2
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Positive",
  "id": "positive",
  "level": 3
}, {
  "value": "Negative",
  "id": "negative",
  "level": 3
}, {
  "value": "Compliance checks",
  "id": "compliance-checks",
  "level": 3
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
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
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
        id: "adr-012-agent-bootstrap-and-task-routing",
        children: "ADR-012: Agent bootstrap and task routing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-001",
      children: "Version 0.0.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial decision — layered agent onboarding, triage routing, lazy context loading."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-05-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " User (Ruari Mears)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103",
        children: ["E02:S16", ":T17"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning package:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T17-agent-bootstrap-and-task-routing-fr103",
        children: "IPP-E2S16T17"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing",
        children: "FR-103"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "README.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AGENTS.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-agent-manifest.json"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-agent-index.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This project is large enough that a cold-started AI agent cannot afford to read the full documentation tree, register, or codebase on every session. Undirected exploration is expensive, slow, and inconsistent. Operators start ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new chats per task"
      }), " to control token cost; each new chat loses implicit context unless the repo provides a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cheap, deterministic bootstrap path"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We need:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "short project intro"
        }), " (always safe to read)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "triage layer"
        }), " that maps user intent → specific files to load next."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lazy depth"
        }), " — standards and large artifacts load only when the task requires them."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopt a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "three-layer agent context model"
      }), " with two repo entrypoints (human + machine) and explicit routing tables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-1--intro-always-load",
      children: "Layer 1 — Intro (always load)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File:"
      }), " repo-root ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target size:"
      }), " ≤ 150 lines. Sections: project summary, bootstrap steps, use-case table, binding-rule pointers, ascertainment rule, anti-patterns. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Must not"
      }), " contain full workflow prose."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-2--triage-cold-start-scan-only",
      children: "Layer 2 — Triage (cold start, scan only)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              target: "_blank",
              "data-noBrokenLinkCheck": true,
              href: (__webpack_require__(17870)/* ["default"] */.A) + "",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/project-agent-manifest.json"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Machine-readable routing, protocol IDs, canon index, open work snapshot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-agent-index",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/project-agent-index.md"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable mirror"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bootstrap behaviour (binding for agents):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "AGENTS.md"
          }), " only"]
        }), " on cold start — it embeds the routing table (keywords + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "loadFirst"
        }), "), binding rules, and open-work snapshot."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Match keywords → load only listed ", (0,jsx_runtime.jsx)(_components.code, {
          children: "loadFirst"
        }), " paths."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no match: one clarifying question — do not explore the whole repo."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "project-agent-manifest.json"
          })
        }), " is a machine mirror for validators; do not require a second agent read at session start. Keep manifest in sync when editing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), " routing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Schema: ", (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(15759)/* ["default"] */.A) + "",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-agent-manifest.schema.json"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-3--detail-lazy-load",
      children: "Layer 3 — Detail (lazy load)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Governance, registers, journals, and application source load ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "only after"
      }), " triage identifies track + task."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ide-integration",
      children: "IDE integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cursor / Claude: bootstrap pointers in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          })
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CLAUDE.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CLAUDE.md"
          })
        }), "; full workflow SoT remains ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " / slash commands."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skills: invoke-only (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/skills/"
        }), "), not cold-load."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Encouraged operator format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Track: … | File: … | Task: …"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generated-vs-static-manifest-sections",
      children: "Generated vs static manifest sections"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Maintenance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "introduction"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protocol"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "taskRouting"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tracks"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static — PR review"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "canon[]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "openWork[]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curated v1; generator optional later"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "routing-coverage-rule",
      children: "Routing coverage rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every recurring operator task type must gain a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "taskRouting[]"
      }), " row within one week of becoming routine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternatives-considered",
      children: "Alternatives considered"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Alternative"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why not"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single mega ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full token cost every chat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "README only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No routing or protocol IDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full register every session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not scale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic search only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-deterministic; misses binding rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One eternal chat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "History bloat"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positive",
      children: "Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cold starts: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "O(intro + manifest scan + 2–4 entry files)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stable bootstrap across new chats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Human/machine alignment (index + manifest)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "negative",
      children: "Negative"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upfront authoring tax; drift if routes lag new workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intro + manifest must stay consistent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compliance-checks",
      children: "Compliance checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), " ≤ 150 lines (E02:S16", ":T17", ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Manifest validates; ≥5 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "taskRouting[]"
        }), " rows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project-agent-index.md"
        }), " documents read order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Workspace rules reference bootstrap"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Anti-patterns explicit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Cold-start simulations in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/guides/agent-cold-start-checklist",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "agent-cold-start-checklist.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions",
          children: "Michael Nygard — Documenting Architecture Decisions"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-022-policy-docs-machine-readable-salience",
          children: "FR-022"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "protocol[]"
        }), " pointers complement policy salience work"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "AI Dev Kit | ADR-012 Agent bootstrap and task routing | v0.0.1"
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
17870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/project-agent-manifest-a0f9c386dfdd0d9a41f56c23f1217428.json");

},
15759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/project-agent-manifest.schema-d4e947cd787203345c3504a14dd8cf8b.json");

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