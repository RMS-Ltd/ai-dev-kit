"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["654"], {
7446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_2_s_16_t_09_ipw_slash_command_and_ipp_state_transition_md_4cf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-2-s-16-t-09-ipw-slash-command-and-ipp-state-transition-md-4cf.json
var site_docs_implementation_cycles_ipp_e_2_s_16_t_09_ipw_slash_command_and_ipp_state_transition_md_4cf_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition","title":"E2:S16:T09 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS16:T09)","source":"@site/../docs/implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-14T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E2:S16:T07 — Planning: FR-050 UKW FBU temporal sync (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T07-ukw-fbu-temporal-tracking-fr050"},"next":{"title":"E2:S16:T12 — Planning: IPW ADR necessity checklist (FR-100)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T12-ipw-adr-necessity-checklist-fr100"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E2S16T09-ipw-slash-command-and-ipp-state-transition.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-14T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E2:S16 — Planning: Spec, Tests, Implementation Plan (IPW)';

const assets = {

};



const toc = [{
  "value": "1. Requirements (Ascertained Baseline)",
  "id": "1-requirements-ascertained-baseline",
  "level": 2
}, {
  "value": "1.1 Functional requirements (ascertained)",
  "id": "11-functional-requirements-ascertained",
  "level": 3
}, {
  "value": "1.2 Non-functional requirements (ascertained)",
  "id": "12-non-functional-requirements-ascertained",
  "level": 3
}, {
  "value": "1.3 Invariants and boundaries",
  "id": "13-invariants-and-boundaries",
  "level": 3
}, {
  "value": "2. Specification",
  "id": "2-specification",
  "level": 2
}, {
  "value": "2.1 Goal",
  "id": "21-goal",
  "level": 3
}, {
  "value": "2.2 Specification mapping",
  "id": "22-specification-mapping",
  "level": 3
}, {
  "value": "2.3 Constraints",
  "id": "23-constraints",
  "level": 3
}, {
  "value": "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)",
  "id": "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
  "level": 3
}, {
  "value": "3. Test Design",
  "id": "3-test-design",
  "level": 2
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "4.1 Files to create",
  "id": "41-files-to-create",
  "level": 3
}, {
  "value": "4.2 Files to modify",
  "id": "42-files-to-modify",
  "level": 3
}, {
  "value": "4.3 Dependency order",
  "id": "43-dependency-order",
  "level": 3
}, {
  "value": "5. Success / verification criteria",
  "id": "5-success--verification-criteria",
  "level": 2
}, {
  "value": "References",
  "id": "references",
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
        id: "e2s16--planning-spec-tests-implementation-plan-ipw",
        children: ["E2:S16", ":T09", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T09-ipw-slash-command-claude-code-fr094.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E2:S16", ":T09", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate",
        children: "FR-094"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Approved"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW (Implementation Planning Workflow):"
        }), " This document was produced by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw E2:S16:T09"
        }), " under plan mode. It is the canonical IPP artefact for E2:S16", ":T09", ", bidirectionally wired to the host task doc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements-ascertained-baseline",
      children: "1. Requirements (Ascertained Baseline)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-functional-requirements-ascertained",
      children: "1.1 Functional requirements (ascertained)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ipw.md"
            }), " exists and is self-contained; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw [E:S:T]"
            }), " is a valid slash command"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-F1 / AC1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " enforces plan mode; blocked if not in plan mode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-F2 / AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Eight sequential phases (0–7) with mandatory gates; no phase silently skippable; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--skip-tests"
            }), " requires explicit justification"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-F3 / AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Every IPP includes Step 1 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "TODO → IN PROGRESS"
            }), ") and a final status reconciliation step (not a forced ", (0,jsx_runtime.jsx)(_components.code, {
              children: "→ COMPLETE"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-F4 / AC4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PLAN_DOC_TEMPLATE.md"
            }), " Section 4 updated with mandatory state transition placeholders"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-F5 / AC5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "implementation-planning-workflow-agent-execution.md"
            }), " updated: slash command, plan-mode enforcement, phase gates, IPP state transition mandate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-F6 / AC6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CLAUDE.md"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "## IPW Trigger Routing"
            }), " section routes plain-text ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "ipw"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-F7 / AC7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " IPW section cross-references ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " and IPP state transition mandate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-F8 / AC8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            }), " updated to reflect ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " slash command"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-F9 / AC9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-004 created recording the IPP state transition contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-F10 / AC10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FR-077"
            }), " cross-references FR-094"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-094 ↔ E2:S16", ":T09", " bidirectionally linked"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC12"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-non-functional-requirements-ascertained",
      children: "1.2 Non-functional requirements (ascertained)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " structure mirrors ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ukw.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-NF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-077 ownership contract unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-NF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan-mode enforcement explicit in command file, not implied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-094-NF3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-invariants-and-boundaries",
      children: "1.3 Invariants and boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PLAN_DOC_TEMPLATE.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation-planning-workflow-agent-execution.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " IPW section, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), ", ADR-004, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-077"
        }), " cross-reference, formal IPP artifact"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_status_drift.py"
        }), "; RW Step 1c drift detection; ICW deprecation; FR-077 ownership contract changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/ipw.md"
      }), " as the canonical Claude Code invocation point for IPW, enforcing plan mode and eight sequential phase gates. Update all dependent documents to mandate that every IPP artefact prescribes task state reconciliation steps as its first and final Implementation Plan items, eliminating the source of TODO drift without changing the FR-077 ownership model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping",
      children: "2.2 Specification mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All RF1–RF12 requirements map directly to the ten deliverable files listed in Section 4. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ipw"
      }), " command (RF1–RF4) is the primary enforcement point; the document updates (RF5–RF11) propagate the mandate to all surfaces that define or describe IPW behaviour."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Plan-mode enforcement must be the first check in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ipw.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The final IPP reconciliation step must be a conditional state reconciliation, not a forced ", (0,jsx_runtime.jsx)(_components.code, {
          children: "→ COMPLETE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--skip-tests"
        }), " requires explicit justification text in the plan doc"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
      children: "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " IN PROGRESS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to IN PROGRESS:"
        }), " First implementation step (T09 task doc status update) — Step 1 of the implementation plan."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " All AC1–AC12 satisfied with evidence; RW committed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc status and kboard row status update in the same RW session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution (this session)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--skip-tests"
        }), " justification:"]
      }), " All deliverables are markdown/config files with no executable code paths. Verification is structural inspection: file existence, required sections present, cross-link resolution, and AC checklist sign-off. Automated unit tests are not applicable for this task."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verification"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ipw.md"
            }), " exists; invoking ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " in a plan session runs the command"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Running ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " outside plan mode produces ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW BLOCKED: plan mode required"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ipw.md"
            }), " contains all 8 phases (0–7) with explicit gate text"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ipw.md"
            }), " Phase 4 mandates Step 1 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "TODO → IN PROGRESS"
            }), ") and final reconciliation step; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PLAN_DOC_TEMPLATE.md"
            }), " Section 4 has both placeholders"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC4, AC5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "implementation-planning-workflow-agent-execution.md"
            }), " updated: Trigger has ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), "; Mode has plan-mode enforcement; Phase table has gates; status transition section has IPP mandate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CLAUDE.md"
            }), " contains ", (0,jsx_runtime.jsx)(_components.code, {
              children: "## IPW Trigger Routing"
            }), " with plain-text routing and blocked-session text"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " Global Gate section and ICW trigger section reference ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " and IPP state transition mandate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            }), " Global Implementation Gate mentions ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ADR-004-ipp-state-transition-contract.md"
            }), " exists with accepted status"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FR-077"
            }), " Related section contains FR-094 cross-reference"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-094 has ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Implementing Task: E2:S16:T09"
            }), "; T09 doc links this IPP"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC12"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Transition task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T09"
              }), " status ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TODO → IN PROGRESS"
              })]
            }), " in task doc. Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), " date."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Status"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ipw.md"
            }), " — self-contained IPW slash command with plan-mode check, environment check, argument parsing, 8-phase structure with gates, abort/completion protocol"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ipw.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CLAUDE.md"
            }), " — add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "## IPW Trigger Routing"
            }), " section after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "## UKW Trigger Routing"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CLAUDE.md"
            }), " updated"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PLAN_DOC_TEMPLATE.md"
            }), " Section 4 — add mandatory Step 1 and final-step placeholders to the implementation plan table"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PLAN_DOC_TEMPLATE.md"
            }), " updated"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "implementation-planning-workflow-agent-execution.md"
            }), " — Trigger: add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), "; Mode: plan-mode enforcement; Phase table: explicit gates; Status transition: add IPP state transition mandate section"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "implementation-planning-workflow-agent-execution.md"
            }), " updated"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " — Global Gate section: add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " canonical invocation and IPP mandate; ICW trigger section: add Claude Code ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw"
            }), " note"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " updated"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            }), " — Global Implementation Gate: add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw [E:S:T]"
            }), " as canonical Claude Code invocation"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            }), " updated"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ADR-004"
            }), " exists"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-077"
            }), " — add FR-094 cross-reference in Related section"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FR-077"
            }), " updated"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create this IPP artifact at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S16T9-ipw-slash-command-and-ipp-state-transition.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update T09 task doc ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Input"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "References"
            }), " to link this IPP"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T09 wired to IPP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/rw E2:S16:T09"
            }), " to commit all changes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release committed and pushed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "13"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Reconcile E2:S16", ":T09", " status"]
            }), " — if all ACs satisfied: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), "; otherwise ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), ". Handled by RW Step 7 kanban reconciliation."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc status correct"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create",
      children: "4.1 Files to create"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E2S16T9-ipw-slash-command-and-ipp-state-transition.md"
        }), " (this file)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-files-to-modify",
      children: "4.2 Files to modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-dependency-order",
      children: "4.3 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T09 task doc status update → 2. ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), " → 3–4 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PLAN_DOC_TEMPLATE.md"
        }), " (parallel) → 5–9 remaining docs (parallel, after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " content finalised) → 10–11 IPP + T09 wiring → 12 RW"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-success--verification-criteria",
      children: "5. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), " exists, self-contained, invocable as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC2: Plan mode check is first in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ipw.md"
        }), "; blocked outside plan mode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC3: All 8 phases with gates present in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ipw.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC4: Phase 4 mandates Step 1 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO → IN PROGRESS"
        }), ") and final reconciliation step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC5: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PLAN_DOC_TEMPLATE.md"
        }), " Section 4 has mandatory placeholder rows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC6: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation-planning-workflow-agent-execution.md"
        }), " fully updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC7: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## IPW Trigger Routing"
        }), " section present and correct"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC8: ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " cross-references ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " and IPP state transition mandate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC9: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), " mentions ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC10: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ADR-004-ipp-state-transition-contract.md"
        }), " exists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC11: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-077"
        }), " cross-references FR-094"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC12: Bidirectional wiring FR-094 ↔ E2:S16", ":T09", " ↔ this IPP"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094",
          children: ["Host Task E2:S16", ":T09"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate",
          children: "FR-094"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync",
          children: "FR-077"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract",
          children: "ADR-004"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md"
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