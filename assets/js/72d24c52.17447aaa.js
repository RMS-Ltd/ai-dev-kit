"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["89941"], {
7261(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_087_e_6_s_07_default_housing_root_cause_and_closure_decision_md_72d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-087-e-6-s-07-default-housing-root-cause-and-closure-decision-md-72d.json
var site_docs_project_management_kanban_fr_br_fr_087_e_6_s_07_default_housing_root_cause_and_closure_decision_md_72d_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision","title":"FR-087: Investigate E6:S07 default-housing drift, codification points, and closure decision","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-20T17:20:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-086: Canonical supporting Kanban/FBU doc naming and FBU collective terminology","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology"},"next":{"title":"FR-088: Dedicated story for perpetual ongoing tasks","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-20T17:20:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-087: Investigate E6:S07 default-housing drift, codification points, and closure decision';

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
  "value": "Scope Analysis",
  "id": "scope-analysis",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "fr-087-investigate-e6s07-default-housing-drift-codification-points-and-closure-decision",
        children: ["FR-087: Investigate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S07"
        }), " default-housing drift, codification points, and closure decision"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-087", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-04-20", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User forensic governance request", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087",
        children: ["E04:S19", ":T03"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPP:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E4S19T3-e6s07-default-housing-drift-investigation.md"
        })
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Investigation report:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "E4S19T03-e6s07-default-housing-investigation-report.md"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Investigate why ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E6:S07"
      }), " keeps being used as a default home for unrelated tasks, identify where this behavior is codified (if anywhere), recover the original intended scope of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S07"
      }), ", and produce a closure/partition decision with enforceable governance guardrails."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "E6:S07"
      }), " has accumulated heterogeneous work far beyond its original charter, and intake/placement behavior is repeatedly drifting toward ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S07"
      }), " as a catch-all destination. This degrades semantic traceability, overloads one story, and obscures accountability for governance and delivery ownership."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The project needs an evidence-backed explanation of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " became a go-to default."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether this is hard-coded in tooling, policy, templates, or habitual operator behavior."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " originally existed to do."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Whether ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " should be closed, split, or narrowed with explicit routing rules."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-087-F1:"
        }), " Produce a forensic origin analysis of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S07"
        }), " (initial charter, historical evolution, inflection points). ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Report §1)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-087-F2:"
        }), " Identify all codification points (scripts, validators, templates, policies, workflow docs, rules, prompts) that bias or permit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " as default housing. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Report §3)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-087-F3:"
        }), " Classify existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " tasks by semantic fit (", (0,jsx_runtime.jsx)(_components.code, {
          children: "in-scope"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "borderline"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "out-of-scope"
        }), ") and quantify drift. ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Report §4; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "drift_ratio ≈ 0.67"
          }), ")"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-087-F4:"
        }), " Provide closure decision options for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "close"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "keep-open-narrowed"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "split/re-house"
        }), ") with impact/risk analysis. ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Report §5 — recommends ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "split/re-house"
            })
          }), ")"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["[~] ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-087-F5:"
        }), " Define enforceable placement guardrails to prevent future default-housing drift. ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Report §6 — specified; ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "implementation tasks not yet filed"
          }), "; Wave 4 §8: S07 In/Out of Scope + active re-housings landed)"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-087-F6:"
        }), " Define and enforce explicit re-housing protocol for misfiled tasks (including required board/story/FBU rewiring and rationale capture) so Story 007 cannot silently re-accumulate catch-all work."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-087-NF1:"
        }), " Findings must cite primary repository evidence (docs/policy/script locations) for each conclusion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-087-NF2:"
        }), " Recommendations must preserve backward traceability and avoid breaking existing links/history."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-087-NF3:"
        }), " Governance outputs must be actionable and testable in workflow validation."]
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
          disabled: true
        }), " ", "Investigation report traces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " intent from story charter to current usage pattern."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Codification inventory explicitly distinguishes hard-coded behavior vs social/process habit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "A disposition is chosen for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S07"
        }), " with clear success criteria and transition plan."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Guardrails are documented as concrete policy/validator changes for follow-up implementation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "At least one mis-housed task is re-housed using the protocol to verify practical enforcement and traceability preservation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "FR/task/story/boards are fully cross-wired for deterministic traceability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-analysis",
      children: "Scope Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Domain:"
      }), " Intake/governance drift and semantic task placement", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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
        }), " ", "Story charter and task-placement governance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Workflow/policy/template/validator routing surfaces"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Kanban/FBU traceability quality and maintenance burden"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Runtime feature implementation behavior (out of scope for this intake)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Simple (1-3 days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Medium (1 week)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Complex (2+ weeks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Very Complex (1+ month)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology",
          children: "FR-086"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership",
          children: "FR-084"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance",
          children: "FR-041"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management",
          children: "Story 007"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake",
          children: "Story 019"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069"
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