"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["89877"], {
1609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_094_ipw_slash_command_and_task_state_transition_mandate_md_32f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-094-ipw-slash-command-and-task-state-transition-mandate-md-32f.json
var site_docs_project_management_kanban_fr_br_fr_094_ipw_slash_command_and_task_state_transition_mandate_md_32f_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate","title":"FR-094: /ipw slash command for Claude Code + mandatory task state transition in IPP","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-13T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-093: /ukw slash command for Claude Code","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-093-ukw-slash-command-claude-code"},"next":{"title":"FR-095: Auto-detect GitHub remote repository in create_github_release.py","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-095-auto-detect-github-remote-in-release-script"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-13T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-094: /ipw slash command for Claude Code + mandatory task state transition in IPP';

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
  "value": "Recurring TODO drift after IPW",
  "id": "recurring-todo-drift-after-ipw",
  "level": 3
}, {
  "value": "No <code>/ipw</code> slash command",
  "id": "no-ipw-slash-command",
  "level": 3
}, {
  "value": "Phase structure is implicit",
  "id": "phase-structure-is-implicit",
  "level": 3
}, {
  "value": "Proposed Solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "Part 1 — <code>/ipw</code> slash command",
  "id": "part-1--ipw-slash-command",
  "level": 3
}, {
  "value": "Part 2 — Mandatory task state transition steps in IPP",
  "id": "part-2--mandatory-task-state-transition-steps-in-ipp",
  "level": 3
}, {
  "value": "Part 3 — Documentation scope",
  "id": "part-3--documentation-scope",
  "level": 3
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Relationship to Existing FRs",
  "id": "relationship-to-existing-frs",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "fr-094-ipw-slash-command-for-claude-code--mandatory-task-state-transition-in-ipp",
        children: ["FR-094: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " slash command for Claude Code + mandatory task state transition in IPP"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-094", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-13", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User — recurring TODO drift after IPW runs; parity request with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/rw"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ukw"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED — v0.2.16.9+1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094",
        children: ["E02:S16", ":T09"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two tightly coupled requirements:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " slash command"]
          }), " — Add a dedicated ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".claude/commands/ipw.md"
          }), " slash command for Claude Code that invokes the Implementation Planning Workflow, on parity with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/rw"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/ukw"
          }), ". IPW ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["must run under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/plan"
            }), " mode"]
          }), " and execute its four distinct phases sequentially."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mandatory task state transitions in the IPP"
          }), " — The implementation plan document (IPP artifact) produced by every IPW run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "must"
          }), " include task state transition steps as the first and final items in its implementation plan section. This makes the state contract explicit and executor-enforced, eliminating the recurrent pattern where tasks are found in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TODO"
          }), " after IPW completion."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Both requirements are in scope together because the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ipw"
      }), " command is the canonical enforcement point for the phase structure and the IPP template amendment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recurring-todo-drift-after-ipw",
      children: "Recurring TODO drift after IPW"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FR-077 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S01:T17"
      }), ") codified ownership of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TODO → IN PROGRESS"
      }), " as \"implementation execution (first non-planning code/doc change)\" and added drift validators. Despite this, the pattern recurs:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tasks are routinely found in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), " state after IPW packages are completed and implementation begins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The validator (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_status_drift.py"
        }), ") correctly catches drift at RW gate, but only after the fact — causing RW blocks, manual intervention, and context-switching cost."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The root cause is that transition timing is implicit guidance in documentation, not a prescribed first step of the execution artefact the implementer is actually following (the IPP)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The fix:"
      }), " Make the transition explicit inside the artefact. If the IPP's first prescribed step is \"transition task to IN PROGRESS\" and the final step is \"reconcile task status to actual implementation state\", no documentation reading is required — the implementer follows the plan they already have."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "no-ipw-slash-command",
      children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ipw"
      }), " slash command"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["IPW is invokable via plain-text ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPW"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " / Cursor only) or informal instruction. Claude Code sessions have no dedicated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ipw"
      }), " slash command, meaning:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Invocation is inconsistent across session types."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan mode is not formally enforced at the command entry point."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There is no self-contained execution guide equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/rw"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), ") or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ukw"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ukw.md"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-structure-is-implicit",
      children: "Phase structure is implicit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The four IPW phases (Ascertain Requirements → Define Specification → Design Tests → Plan Implementation) are documented in the agent execution guide but are not enforced at the command invocation level. Agents may skip or compress phases without a formal phase-gate structure."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed Solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "part-1--ipw-slash-command",
      children: ["Part 1 — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ipw"
      }), " slash command"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/ipw.md"
      }), " as a self-contained IPW execution guide, following the established pattern of ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/rw.md"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/ukw.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical constraint:"
      }), " The command ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must enforce plan mode."
      }), " IPW is a planning-only workflow. If the session is not in plan mode, the command must either refuse to proceed or explicitly instruct the agent to enter plan mode before any IPW step is executed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command syntax:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " — infer host task from current context."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " — explicit host task (formats: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S16:T08"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02S16T08"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw E\\{epic\\}:S\\{story\\}:T\\{task\\} --skip-tests"
        }), " — doc/config-only tasks where test design is not applicable (must be explicitly justified in the plan doc)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The command must enforce the four sequential phases with phase gates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gate to proceed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify host task"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc exists and E:S", ":T", " token confirmed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ascertain requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functional + non-functional requirements consolidated from task, FR/BR/UXR context, and ACs; gaps resolved with user before proceeding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define specification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Goal, F-requirements, NF-requirements, out-of-scope section complete; user confirms scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design tests"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Test cases mapped to spec coverage; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--skip-tests"
            }), " explicitly justified if absent"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan implementation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ordered steps, files, dependencies — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must include state transition steps (see Part 2)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create plan doc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Written from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PLAN_DOC_TEMPLATE.md"
            }), "; Host Task header set"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire to host task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic with Phase 5 — task doc Input + References updated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional wiring confirmed; required sections present; state transition steps present in Phase 4 output"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase gates are mandatory."
      }), " The command must not skip from Phase 1 directly to Phase 4, or produce a plan doc without completing all required phases. Each phase must be documented before the next begins."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CLAUDE.md update:"
      }), " Add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "## IPW Trigger Routing"
      }), " section routing plain-text ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPW"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ipw"
      }), " (case-insensitive) to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ipw"
      }), ", mirroring the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UKW"
      }), " routing sections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-2--mandatory-task-state-transition-steps-in-ipp",
      children: "Part 2 — Mandatory task state transition steps in IPP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every implementation plan section produced by IPW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must"
      }), " include these two prescribed steps, regardless of task type:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 (always first):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Transition task ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " status from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " in task document. Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last updated"
        }), " date."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final step (always last):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Reconcile task ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " status with actual implementation state. If all acceptance criteria are satisfied with evidence → transition to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), " and add forensic marker ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v{version})"
        }), "; if implementation is ongoing → confirm status remains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), "; if blocked → transition to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BLOCKED"
        }), " with documented reason. Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last updated"
        }), " date."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These steps are executor-prescribed and therefore fall naturally inside implementation execution — consistent with FR-077's ownership contract. IPW does not execute them; the plan it produces mandates them."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " The state transition is not owned by IPW (planning) — it is owned by implementation execution (following the plan). By encoding the transitions as the first and last steps of the plan, the contract is embedded in the artefact the implementer is working from. This eliminates ambiguity without changing ownership."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-3--documentation-scope",
      children: "Part 3 — Documentation scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following documents must be updated to reflect this new mandate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Document"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required change"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " slash command invocation; add plan-mode enforcement requirement; update Phase 4 to mandate state transition steps; update Status transition ownership section to reference IPP-prescribed transitions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add prescribed Step 1 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "TODO → IN PROGRESS"
            }), ") and final step (status reconciliation to actual implementation state) as fixed placeholders in the Implementation Plan section"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " → IPW trigger section"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reference ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " as canonical invocation; add plan-mode enforcement note; cross-reference IPP state transition mandate"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CLAUDE.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "## IPW Trigger Routing"
            }), " section"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update IPW references to reflect ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " slash command and state transition mandate"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/"
            }), " — any relevant ADR"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update or add ADR capturing the IPP state transition contract as a formal decision record"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-077"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add cross-reference to FR-094 as the mechanism that embeds the transition contract inside the IPP artefact"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-F1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), " exists and is self-contained; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw [E:S:T]"
        }), " is a valid Claude Code slash command."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-F2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " enforces plan mode; execution is blocked or explicitly escalated if not in plan mode."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-F3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " executes the four IPW phases (Ascertain → Specify → Test Design → Plan Impl) with phase gates; phases cannot be skipped without explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--skip-tests"
        }), " justification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-F4:"
        }), " Every IPP produced by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " includes Step 1 = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO → IN PROGRESS"
        }), " transition and final step = status reconciliation to actual implementation state (", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), " if all ACs satisfied, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " if ongoing, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BLOCKED"
        }), " if blocked) as mandatory prescribed items."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-F5:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PLAN_DOC_TEMPLATE.md"
        }), " is updated with the state transition placeholders in the Implementation Plan section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-F6:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation-planning-workflow-agent-execution.md"
        }), " is updated to reflect the slash command, plan-mode requirement, phase gates, and IPP state transition mandate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-F7:"
        }), " CLAUDE.md ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## IPW Trigger Routing"
        }), " section routes plain-text ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ipw"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-F8:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " IPW trigger section updated to cross-reference ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " and the IPP state transition mandate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-F9:"
        }), " AGENTS.md updated to reflect the above."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-F10:"
        }), " Relevant ADR created or updated to record the IPP state transition contract as a formal architectural decision."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-NF1:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " command structure mirrors ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ukw.md"
        }), " for consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-NF2:"
        }), " State transition mandate does not change FR-077 ownership contract — transitions remain owned by implementation execution; the IPP is the vehicle that prescribes them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-094-NF3:"
        }), " Plan-mode enforcement is explicit in the command file, not implied by documentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), " exists, is self-contained, and invocable as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " enforces or requires plan mode before any phase begins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " enforces four sequential phases with gates; no phase may be silently skipped."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " Every IPW run produces an IPP whose Implementation Plan section contains Step 1 = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO → IN PROGRESS"
        }), " and a final status reconciliation step that updates the task to its actual state (", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BLOCKED"
        }), ") — not a forced transition to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PLAN_DOC_TEMPLATE.md"
        }), " updated with mandatory state transition placeholders."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC6:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation-planning-workflow-agent-execution.md"
        }), " updated (slash command, plan mode, phase gates, IPP state transitions)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC7:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## IPW Trigger Routing"
        }), " section present and routes correctly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC8:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " IPW section cross-references ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " and IPP state transition mandate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC9:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), " updated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC10:"
        }), " ADR created or updated recording the IPP state transition contract."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC11:"
        }), " FR-077 cross-references FR-094 as the mechanism embedding the state contract in IPP artefacts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC12:"
        }), " FR-094 and implementing task are bidirectionally linked."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In scope:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), " (new file)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " IPW routing section (new section)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PLAN_DOC_TEMPLATE.md"
        }), " (amendment)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "implementation-planning-workflow-agent-execution.md"
        }), " (amendment)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " IPW trigger section (amendment)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), " (amendment)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR for IPP state transition contract (new or updated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-077 cross-reference update (minor amendment)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changes to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_status_drift.py"
        }), " or other validators (existing drift detection remains as-is)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changes to RW Step 1c drift detection behaviour"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ICW deprecation (already governed by FR-042)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changes to FR-077's ownership contract — ownership stays with implementation execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "relationship-to-existing-frs",
      children: "Relationship to Existing FRs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "FR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relationship"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
              children: "FR-042"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Canonical IPW definition; FR-094 extends it with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " slash command and IPP state mandate"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync",
              children: "FR-077"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Established ownership contract; FR-094 embeds the contract inside the IPP artefact without changing ownership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract",
              children: "FR-083"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global IPW gate; FR-094 adds the command-level enforcement point"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-093-ukw-slash-command-claude-code",
              children: "FR-093"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pattern reference for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ukw"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " follows same structure"]
          })]
        })]
      })]
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