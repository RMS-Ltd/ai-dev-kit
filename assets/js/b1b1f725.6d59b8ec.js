"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["65178"], {
93171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_076_ukw_fbuboard_scope_and_drift_concurrency_controls_md_b1b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-076-ukw-fbuboard-scope-and-drift-concurrency-controls-md-b1b.json
var site_docs_project_management_kanban_fr_br_fr_076_ukw_fbuboard_scope_and_drift_concurrency_controls_md_b1b_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls","title":"Feature Request: UKW scope expansion to fbuboard with concurrency and temporal-drift controls","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-09T11:20:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: ICW — Durable planning artifacts in the documentation system","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system"},"next":{"title":"FR-077: IPW-built task status transition and kboard synchronization","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-09T11:20:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: UKW scope expansion to fbuboard with concurrency and temporal-drift controls';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem",
  "id": "problem",
  "level": 2
}, {
  "value": "Proposed solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Acceptance criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Implementation evidence",
  "id": "implementation-evidence",
  "level": 2
}, {
  "value": "Out of scope",
  "id": "out-of-scope",
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
        id: "feature-request-ukw-scope-expansion-to-fbuboard-with-concurrency-and-temporal-drift-controls",
        children: "Feature Request: UKW scope expansion to fbuboard with concurrency and temporal-drift controls"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-076", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-04-09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " RMS (AI Dev Kit)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.6.7.110+1"
      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E06:S07:T110 --art"
      }), ") — wired as Bucket-D6 predecessor of ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
        children: "FR-092"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
        children: ["E06:S07", ":T110"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predecessor of FR-092 (2026-04-27):"
        }), " FR-076 expanded UKW to fbuboard scope with concurrency / drift controls. FR-092 (Wave 4) shares the divergence/drift framework and corpus-level normalization model. FR-076 remains valid as historical predecessor."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization",
        children: "FR-050"
      }), "; ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050",
        children: ["E06:S07", ":T108"]
      }), "; ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
        children: ["E02:S16", ":T03"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Upgrade UKW so ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " (\"fbuboard\") is first-class in scope, and enforce the same active-row integrity protections recently applied manually: stale completed-row pruning, timestamp normalization, concurrency-safe update order, and temporal-drift detection/resolution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem",
      children: "Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UKW currently treats fbuboard synchronization as partial/inconsistent compared to kanban board handling. In practice, active MoSCOW sections can drift from source FR/BR/UXR statuses, especially after overlapping RW/UKW activity. This causes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stale completed/implemented/fixed items to remain in active sections,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "row timestamps to diverge from board metadata,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nondeterministic outcomes when concurrent updates touch the same board files."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extend UKW documentation, execution logic, and validation behavior so fbuboard receives the same integrity workflow already expected for kanban board sync:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include fbuboard in UKW default scope (not best-effort only)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a deterministic stale-row audit/removal pass for active MoSCOW sections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add concurrency-safe ordering and conflict-aware reconciliation semantics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add temporal-drift checks for board-level metadata vs row-level timestamps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Emit explicit resolution logs (what was removed/normalized and why)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-076", ":R01", " (Scope):"]
        }), " UKW comprehensive runs must include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " synchronization and cleanup as a required step."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-076", ":R02", " (Stale Active Rows):"]
        }), " Remove active rows whose linked FR/BR/UXR doc status is terminal (", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETED"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IMPLEMENTED"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FIXED"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RESOLVED"
        }), "), with documented exceptions where status text explicitly indicates unresolved product verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-076", ":R03", " (Concurrency Guard):"]
        }), " UKW must use deterministic read/check/write sequencing and conflict-aware revalidation before final write when board files changed during the run."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-076", ":R04", " (Temporal Drift Check):"]
        }), " Validate and normalize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last Updated"
        }), "/row timestamp consistency to avoid stale metadata after sync."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-076", ":R05", " (Forensic Traceability):"]
        }), " UKW output must report audited rows, removals, exceptions kept active, and normalized timestamps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-076", ":R06", " (Policy/Docs):"]
        }), " Update UKW execution docs and workflow guidance to define fbuboard parity expectations and reconciliation rules."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "UKW comprehensive run updates fbuboard in the same pass as kanban board and reports both outcomes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "At least one regression case proves stale completed fbuboard rows are removed automatically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Concurrency revalidation prevents stale writes when file content changes mid-run."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Temporal-drift check updates metadata deterministically and reports applied normalization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "UKW docs/rules clearly state fbuboard parity and integrity checks as required behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-evidence",
      children: "Implementation evidence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Script behavior implemented in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "deterministic terminal-status pruning in active fbuboard sections,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "exception guard for unresolved verification contexts,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "header + row timestamp normalization,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "pre-write revalidation/re-apply flow when file drift is detected."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Regression test added and passing:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_4_3_fbuboard_reconciliation_prunes_and_keeps_exception"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_update_kanban_docs.py"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Documentation/rules updated:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ukw-sync/SKILL.md"
            }), ","]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "update-kanban-workflow-agent-execution.md"
            }), ","]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "out-of-scope",
      children: "Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-prioritizing all fbuboard items each run when no status drift exists."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rewriting historical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        }), " entries beyond consistency fixes required by the new checks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Board: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "update-kanban-workflow-agent-execution.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Governance: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/rituals/policy/kanban-governance-policy",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-governance-policy.md"
          })
        })]
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