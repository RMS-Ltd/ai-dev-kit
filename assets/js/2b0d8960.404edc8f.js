"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["58857"], {
55864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_004_ipp_state_transition_contract_md_2b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-004-ipp-state-transition-contract-md-2b0.json
var site_docs_architecture_standards_and_adrs_adr_004_ipp_state_transition_contract_md_2b0_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract","title":"ADR-004: Mandatory IPP State Transition Steps","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-14T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-003: Greenfield vs Brownfield Adoption (Respect for Host Architecture)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption"},"next":{"title":"ADR-005: Ollama Model Ecosystem for Multi-Domain AI Workloads","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-005-ollama-model-ecosystem"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-14T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-004: Mandatory IPP State Transition Steps';

const assets = {

};



const toc = [{
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Recurrence evidence",
  "id": "recurrence-evidence",
  "level": 3
}, {
  "value": "Decision",
  "id": "decision",
  "level": 2
}, {
  "value": "Enforcement Points",
  "id": "enforcement-points",
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
  "value": "Negative / Trade-offs",
  "id": "negative--trade-offs",
  "level": 3
}, {
  "value": "Neutral",
  "id": "neutral",
  "level": 3
}, {
  "value": "Alternatives Considered",
  "id": "alternatives-considered",
  "level": 2
}, {
  "value": "Alternative 1: Validator-only approach (rejected)",
  "id": "alternative-1-validator-only-approach-rejected",
  "level": 3
}, {
  "value": "Alternative 2: Forced <code>→ COMPLETE</code> as the final step (rejected)",
  "id": "alternative-2-forced--complete-as-the-final-step-rejected",
  "level": 3
}, {
  "value": "Alternative 3: Separate &quot;transition checklist&quot; document (rejected)",
  "id": "alternative-3-separate-transition-checklist-document-rejected",
  "level": 3
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
        id: "adr-004-mandatory-ipp-state-transition-steps",
        children: "ADR-004: Mandatory IPP State Transition Steps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-05-14", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " User (Ruari Mears)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094",
        children: ["E2:S16", ":T09"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Origin FR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate",
        children: "FR-094"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync",
        children: "FR-077"
      }), " — established the ownership contract that this ADR embeds in the IPP artefact"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync",
        children: "FR-077"
      }), " established that task state transitions (", (0,jsx_runtime.jsx)(_components.code, {
        children: "TODO → IN PROGRESS"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IN PROGRESS → COMPLETE"
      }), ") are owned by implementation execution — not IPW (planning). Validators (", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_ipw_status_drift.py"
      }), ", RW Step 1c) correctly detect TODO drift after implementation begins, but only after the fact, causing RW gate failures and manual intervention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The root cause is that the ownership contract exists in documentation, not in the artefact the implementer is directly following: the IPP (Implementation Plan document produced by IPW). Implementers who work from the IPP without re-reading ownership docs will naturally skip the transition unless it is a prescribed step in the plan they are following."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recurrence-evidence",
      children: "Recurrence evidence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Multiple incidents recorded in FR-077: tasks found in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TODO"
      }), " state after IPW completion and substantial implementation work, blocking RW gating at Step 1c. The validator correctly catches drift — but the fix is preventive (encode the step), not reactive (keep the validator as-is)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Every IPP (Implementation Plan document) produced by IPW must include two mandatory prescribed steps in its Implementation Plan section (Section 4), regardless of task type:"
      })
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
        }), " status with actual implementation state: if all acceptance criteria are satisfied with evidence → transition to ", (0,jsx_runtime.jsx)(_components.code, {
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These steps are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "executor-prescribed"
      }), ": IPW (planning) writes them into the plan, but implementation execution runs them. This preserves the FR-077 ownership contract while making compliance automatic for any implementer following the plan."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The final step is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state reconciliation"
      }), ", not a forced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "→ COMPLETE"
      }), ". A task that spans multiple implementation sessions legitimately ends those sessions in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IN PROGRESS"
      }), " until all ACs are satisfied."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enforcement-points",
      children: "Enforcement Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "PLAN_DOC_TEMPLATE.md"
          }), " Section 4"]
        }), " — mandatory placeholder rows for Step 1 and final step. Implementers using the template will see them immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".claude/commands/ipw.md"
          })
        }), " — Phase 4 gate requires both steps to be present before the phase is complete."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "implementation-planning-workflow-agent-execution.md"
          })
        }), " — Phase 4 mandate documented in the canonical IPW agent execution guide."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positive",
      children: "Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminates the root cause of TODO drift without adding new validators or changing the FR-077 ownership contract."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementers following the IPP see the state contract as the first and last prescribed actions — no documentation lookup required."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The final reconciliation step correctly handles partial implementations (ongoing → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), ") rather than forcing closure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "negative--trade-offs",
      children: "Negative / Trade-offs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPPs for trivial tasks will include two \"bookkeeping\" steps that feel redundant. This is intentional: the cost of including them is negligible; the cost of omitting them is recurring drift."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing IPPs (pre-ADR-004) do not have these steps. They are grandfathered — this ADR applies to all new IPW runs only."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "neutral",
      children: "Neutral"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing validators (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_status_drift.py"
        }), ", RW Step 1c) remain unchanged. They are complementary — they catch drift that still occurs (e.g. from non-IPW execution paths). This ADR reduces their trigger frequency but does not replace them."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-077's ownership contract is unchanged. Implementation execution owns the transitions. The IPP prescribes; execution acts."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternatives-considered",
      children: "Alternatives Considered"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alternative-1-validator-only-approach-rejected",
      children: "Alternative 1: Validator-only approach (rejected)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Strengthen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_ipw_status_drift.py"
      }), " to block earlier. Rejected because: (a) the validator is already working correctly; (b) it is reactive — it catches drift after it has occurred; (c) the root cause (transition not prescribed in the IPP) remains."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "alternative-2-forced--complete-as-the-final-step-rejected",
      children: ["Alternative 2: Forced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "→ COMPLETE"
      }), " as the final step (rejected)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Make the final step always transition to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COMPLETE"
      }), ". Rejected because: tasks that legitimately span multiple IPW runs or partial releases should stay ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IN PROGRESS"
      }), " between sessions. A forced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "→ COMPLETE"
      }), " would create false-positive completions. The correct behaviour is reconciliation to actual state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alternative-3-separate-transition-checklist-document-rejected",
      children: "Alternative 3: Separate \"transition checklist\" document (rejected)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a separate checklist document linked from each IPP. Rejected because: adding indirection creates the same problem FR-077 solved — implementers have one more document to read separately from the plan they are following. The transition steps must live inside the artefact, not alongside it."
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