"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["33286"], {
20604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_103_agent_bootstrap_and_task_routing_md_8c3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-103-agent-bootstrap-and-task-routing-md-8c3.json
var site_docs_project_management_kanban_fr_br_fr_103_agent_bootstrap_and_task_routing_md_8c3_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing","title":"FR-103: Agent bootstrap and task routing (three-layer context model)","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-102: UKW archive-completed use case (-c) — kboard + fbuboard → completed ledgers","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows"},"next":{"title":"Feature Request: Python Minimum Version Policy Alignment","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-104-python-minimum-version-policy-alignment"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-103: Agent bootstrap and task routing (three-layer context model)';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Proposed Solution",
  "id": "proposed-solution",
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
  "value": "Optional automation",
  "id": "optional-automation",
  "level": 3
}, {
  "value": "Framework packaging (adopter surface)",
  "id": "framework-packaging-adopter-surface",
  "level": 3
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Functional",
  "id": "functional",
  "level": 3
}, {
  "value": "Non-functional",
  "id": "non-functional",
  "level": 3
}, {
  "value": "Scope Analysis",
  "id": "scope-analysis",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "Intake Decision",
  "id": "intake-decision",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
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
        id: "fr-103-agent-bootstrap-and-task-routing-three-layer-context-model",
        children: "FR-103: Agent bootstrap and task routing (three-layer context model)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-103", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User (ADR intake — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ADR-agent-bootstrap-and-task-routing.md"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.16.17+2 (SemVer v0.4.843+2)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103",
        children: ["E02:S16", ":T17"]
      }), " (v0.2.16.17+2)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-windsurf-investigate-agents-skills-for-workflows",
        children: "FR-041"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-022-policy-docs-machine-readable-salience",
        children: "FR-022"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-028-cursor-ide-performance-considerations-awareness",
        children: "FR-028"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-015-workflow-initiation-cheatsheet",
        children: "UXR-015"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-071-rw-trigger-routing-not-executing-from-chat-session",
        children: "BR-071"
      }), ", draft ADR at repo root ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/ADR-agent-bootstrap-and-task-routing.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ADR-agent-bootstrap-and-task-routing.md"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "three-layer agent context model"
      }), " (intro → triage manifest → lazy detail) so cold-started agents bootstrap in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(intro + manifest scan + few entry files)"
      }), " instead of unbounded repo exploration, with deterministic keyword routing and explicit “do not load unless routed” guardrails."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The AI Dev Kit repository is large enough that cold-started agents cannot read the full documentation tree, kanban corpus, or codebase every session. Undirected exploration is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expensive"
        }), " — growing chat history plus ad hoc file reads every turn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slow"
        }), " — repeated grepping until conventions are found."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inconsistent"
        }), " — different sessions load different subsets and miss binding rules (RW/IPW/UKW gates, commit policy, kanban four-surface contract)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Operators also start ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new chats per task"
      }), " to control token cost; each new chat loses implicit context unless the repo provides a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cheap, deterministic bootstrap path"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Today:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Root ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Role-oriented agent definitions + IPW gate — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " a ≤150-line intro with use-case routing table"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CLAUDE.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full workflow prose — correct as agent SoT but ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "too heavy"
            }), " for cold-start scan"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-agent-manifest.json"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing"
            }), " — no machine-readable ", (0,jsx_runtime.jsx)(_components.code, {
              children: "taskRouting[]"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protocol[]"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-agent-index.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing"
            }), " — no human-readable bootstrap mirror"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cheatsheet (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-015-workflow-initiation-cheatsheet",
              children: "UXR-015"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-oriented workflow triggers — complementary, not a substitute for manifest routing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed Solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopt the architecture in draft ADR ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ADR-agent-bootstrap-and-task-routing.md"
        })
      }), " (register as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADR-012"
      }), " under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/"
      }), " during implementation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-1--intro-always-load",
      children: "Layer 1 — Intro (always load)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Refactor or split root ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AGENTS.md"
          })
        }), " to ≤ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "150 lines"
        }), ": project summary, numbered bootstrap steps, use-case/track table, 5–10 binding-rule pointers, ascertainment rule, anti-patterns (“do not read X unless routed”)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep full workflow prose in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " / framework docs — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pointers only"
        }), " in intro."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-2--triage-cold-start-scan-only",
      children: "Layer 2 — Triage (cold start, scan only)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-agent-manifest.json"
          })
        }), " validated against ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-agent-manifest.schema.json"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-agent-index.md"
          })
        }), " mirroring bootstrap order and regenerate commands."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bootstrap contract (binding for agents):"
        }), " read intro → load manifest → scan ", (0,jsx_runtime.jsx)(_components.code, {
          children: "protocol[]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "taskRouting[]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "openWork[]"
        }), " → match keywords → load only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "loadFirst[]"
        }), " (+ one clarifying question if ambiguous)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Minimum routes for ai-dev-kit (seed at implementation):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Intent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example keywords"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Typical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "loadFirst"
            })]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflows (RW/UKW/IPW)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "release"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/guides/workflow-initiation-cheatsheet.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " RW/UKW/IPW sections (pointers)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban / intake"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FR"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UXR"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/kboard.md"
            }), ", intake guide (pointers)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Governance / ADR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ADR"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "governance"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "policy"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/"
            }), " index + relevant standard"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Framework / code"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "package"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validator"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "script"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Relevant path under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation planning"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IPP"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "plan"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["IPW command + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-3--detail-lazy-load",
      children: "Layer 3 — Detail (lazy load)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Full governance, registers, journals, and application source load ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only after"
        }), " triage identifies track + task."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ide-integration",
      children: "IDE integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure Cursor / Claude workspace rules ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "point"
        }), " to slim ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), " as bootstrap entry; skills remain invoke-only (not cold-load)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Encourage operator first message: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Track: … | File: … | Task: …"
        }), " to skip triage when known."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optional-automation",
      children: "Optional automation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "scripts/generate-project-agent-manifest.sh"
          })
        }), " (or Python equivalent) to populate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "canon[]"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "openWork[]"
        }), " from kanban/FBU index when feasible; manual curation acceptable until register automation exists."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-packaging-adopter-surface",
      children: "Framework packaging (adopter surface)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provide portable templates under workflow-management or kanban framework package so adopters can copy manifest schema + ADR pattern (align with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration",
          children: "FR-081"
        }), " distribution story)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional",
      children: "Functional"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Register ADR as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ADR-012"
        }), "; supersede placeholder numbering in draft file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Slim bootstrap ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AGENTS.md"
          })
        }), " (≤150 lines) with use-case table and anti-patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "project-agent-manifest.json"
          })
        }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "schema"
        }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "project-agent-index.md"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "taskRouting[]"
          })
        }), " with ≥ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "5"
        }), " rows covering workflows, kanban/intake, governance, framework code, IPW/planning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "protocol[]"
          })
        }), " entries for non-negotiables (IPW gate, RW-only commit, FR-060 task token, four-surface RW Step 7, padded E/S/T) with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sourcePath"
        }), " pointers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Wire ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " to reference bootstrap path without duplicating full manifest."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document regenerate/validate commands in index (JSON schema validation in CI or pre-commit ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "recommended"
        }), ", not blocking for v1 unless low cost)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional",
      children: "Non-functional"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Cold-start simulation: three prompts (workflows, intake, governance) each resolve to correct ", (0,jsx_runtime.jsx)(_components.code, {
          children: "loadFirst[]"
        }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "≤5"
        }), " files before substantive work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Manifest ", (0,jsx_runtime.jsx)(_components.code, {
          children: "schemaVersion"
        }), " semver; idempotent manual edits for static sections."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-analysis",
      children: "Scope Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Domain:"
      }), " Agent ergonomics, documentation topology, IDE bootstrap", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Areas:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documentation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-agent-*"
        }), ", ADR register)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Tooling (optional manifest generator script)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Framework templates (adopter copy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Application runtime code (out of scope unless validator added)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Testing (simulated cold-start checklist in task AC)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Complexity:"
      }), " Medium (1 week) — refactor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AGENTS.md"
      }), " without losing IPW/RW pointers is the main risk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " ADR-012 published; draft root ADR relocated or redirected with stable link."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), " ≤150 lines; passes compliance checklist in ADR “Consequences” section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " Manifest validates against schema; ≥5 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "taskRouting[]"
        }), " rows; ≥6 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "protocol[]"
        }), " rows with real ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sourcePath"
        }), " values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-agent-index.md"
        }), " documents read order, manifest fields, and validate/regenerate commands."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " Workspace bootstrap references documented (Cursor ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC6:"
        }), " Three documented cold-start simulations (workflows / intake / governance) with file-read counts ≤5 pre-work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC7:"
        }), " FR-103 ↔ E02:S16", ":T17", " bidirectional links; story checklist + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fbuboard"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kboard"
        }), " rows present."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      }), " None (intake complete)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      }), " Deeper automation of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "openWork[]"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "canon[]"
      }), " from kanban (may follow under FR-019 or UKW tooling)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-windsurf-investigate-agents-skills-for-workflows",
          children: "FR-041"
        }), " — skills vs bootstrap layering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-022-policy-docs-machine-readable-salience",
          children: "FR-022"
        }), " — overlaps ", (0,jsx_runtime.jsx)(_components.code, {
          children: "protocol[]"
        }), "; coordinate to avoid duplicate SoT"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-015-workflow-initiation-cheatsheet",
          children: "UXR-015"
        }), " — linked from workflow ", (0,jsx_runtime.jsx)(_components.code, {
          children: "taskRouting"
        }), " row"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " ACCEPTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2026-05-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake By:"
      }), " Agent (atomic intake)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implemented:"
      }), " 2026-05-30 — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.16.17+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Flow Results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Story Match Found: Epic 2, Story 016 (perpetual workflow operations) → Task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T17"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: Epic 2 — Workflow Management Framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story: Story 016 — Perpetual Ongoing Workflow Operations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: E02:S16", ":T17", " — Agent bootstrap and task routing (FR-103)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.2.16.17+2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-management/kanban/epics/epic-02/epic-02.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-16-perpetual-ongoing-workflow-operations.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T17-agent-bootstrap-and-task-routing-fr103.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Source decision doc: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/ADR-agent-bootstrap-and-task-routing.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ADR-agent-bootstrap-and-task-routing.md"
          })
        }), " (repo root; v0.0.1 Proposed)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implementation should run ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW"
        }), " on ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S16", ":T17"]
        }), " before code/docs execution (global gate)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Splitting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), " may require moving current role definitions to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/AGENTS.md"
        }), " (already exists) or a dedicated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/agents/"
        }), " index — IPP should decide housing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/ADR-agent-bootstrap-and-task-routing.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ADR-agent-bootstrap-and-task-routing.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AGENTS.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/guides/workflow-initiation-cheatsheet.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
          children: "Kanban governance policy"
        })
      }), "\n"]
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