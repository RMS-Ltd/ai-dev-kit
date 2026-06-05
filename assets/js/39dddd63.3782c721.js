"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["77003"], {
23819(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipw_e_6_s_07_t_112_install_feedback_submission_governance_md_39d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipw-e-6-s-07-t-112-install-feedback-submission-governance-md-39d.json
var site_docs_implementation_cycles_ipw_e_6_s_07_t_112_install_feedback_submission_governance_md_39d_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPW-E6S07T112-install-feedback-submission-governance","title":"E6:S07:T112 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS07:T112)","source":"@site/../docs/implementation-cycles/IPW-E6S07T112-install-feedback-submission-governance.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPW-E6S07T112-install-feedback-submission-governance","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E6S07T112-install-feedback-submission-governance","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPW-E6S07T112-install-feedback-submission-governance.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-10T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"IPW-E6S07T103-release-workflow-maintenance-perpetual","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual"},"next":{"title":"E6:S07:T113 - Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E6S07T113-rw-step-12-5-github-release-parser-hardening"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPW-E6S07T112-install-feedback-submission-governance.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-10T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E6:S07 — Planning: Spec, Tests, Implementation Plan (IPW)';

const assets = {

};



const toc = [{
  "value": "1. Specification",
  "id": "1-specification",
  "level": 2
}, {
  "value": "1.1 Goal",
  "id": "11-goal",
  "level": 3
}, {
  "value": "1.2 Functional requirements",
  "id": "12-functional-requirements",
  "level": 3
}, {
  "value": "1.3 Non-functional requirements",
  "id": "13-non-functional-requirements",
  "level": 3
}, {
  "value": "1.4 Out of scope",
  "id": "14-out-of-scope",
  "level": 3
}, {
  "value": "1.5 Constraints",
  "id": "15-constraints",
  "level": 3
}, {
  "value": "2. Test design",
  "id": "2-test-design",
  "level": 2
}, {
  "value": "3. Implementation plan",
  "id": "3-implementation-plan",
  "level": 2
}, {
  "value": "3.1 Files to create or modify",
  "id": "31-files-to-create-or-modify",
  "level": 3
}, {
  "value": "3.2 Dependency order",
  "id": "32-dependency-order",
  "level": 3
}, {
  "value": "4. Success / verification criteria",
  "id": "4-success--verification-criteria",
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
    h3: "h3",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e6s07--planning-spec-tests-implementation-plan-ipw",
        children: ["E6:S07", ":T112", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T112-install-feedback-submission-path-and-governance",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T112-install-feedback-submission-path-and-governance.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E6:S07", ":T112", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance",
        children: "FR-079"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Draft"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-specification",
      children: "1. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-goal",
      children: "1.1 Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define and implement a deterministic feedback submission path that transforms local install telemetry into safe, validated, and triage-ready maintainer input, without overlapping T111 responsibility for local event production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-functional-requirements",
      children: "1.2 Functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F1:"
        }), " Define canonical submission artifact schema and schema versioning for outbound feedback payloads. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Source: FR-079-F1, T112 scope(1))"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F2:"
        }), " Provide a deterministic user submission workflow path (CLI and documented process). ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Source: FR-079-F2, T112 scope(2))"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F3:"
        }), " Include provenance/correlation fields (", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_run_id"
        }), ", framework/version context, environment summary). ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Source: FR-079-F3)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F4:"
        }), " Add preflight validation (required fields, schema compatibility, payload completeness). ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Source: FR-079-F4, T112 AC1)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F5:"
        }), " Define deterministic submission outcomes and diagnostics (", (0,jsx_runtime.jsx)(_components.code, {
          children: "accepted"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rejected"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "needs-redaction"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "needs-more-context"
        }), "). ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Source: FR-079-F5, T112 AC2)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F6:"
        }), " Document maintainer intake mapping from payload content to FR/BR workflows and reproducibility steps. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Source: FR-079-F6, T112 AC3)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F7:"
        }), " Explicitly enforce boundary: T111 owns local install event contract/logging; T112 owns outbound packaging/submission/governance only. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Source: FR-079-NF4, T112 AC5)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-non-functional-requirements",
      children: "1.3 Non-functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N1:"
        }), " Enforce privacy/redaction-safe defaults for payloads; never submit secrets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N2:"
        }), " Deterministic retry guidance and behavior for transient submission failures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N3:"
        }), " Keep submission UX concise while preserving sufficient forensic context for maintainers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N4:"
        }), " Maintain compatibility with T111 output contracts and versioned schema evolution policy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-out-of-scope",
      children: "1.4 Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collecting local install telemetry itself (owned by T111/FR-078)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementing remote maintainer ticketing backend infrastructure beyond submission contract and intake guidance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Closing FR/BR items automatically from submissions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-constraints",
      children: "1.5 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must consume T111 artifacts as authoritative input shape."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must support deterministic outcomes in offline or blocked-network scenarios with actionable local diagnostics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must preserve existing CLI logging/redaction conventions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-test-design",
      children: "2. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T1 — Schema contract validation:"
        }), " Valid payload passes schema/version checks; malformed payload fails with targeted diagnostics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T2 — Boundary enforcement (T111 vs T112):"
        }), " Submission path rejects inputs that bypass required T111 artifact structure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T3 — Redaction/security preflight:"
        }), " Known secret patterns are detected/redacted or submission blocked with deterministic guidance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T4 — Deterministic outcomes:"
        }), " Submission command returns one of defined terminal states with stable messaging and exit behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T5 — Retry behavior:"
        }), " Transient failure yields deterministic retry instructions and does not corrupt payload state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T6 — Maintainer triage mapping:"
        }), " Sample payload maps to reproducible FR/BR intake guidance documented in user/admin docs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T7 — Compatibility evolution:"
        }), " Older/newer schema versions are handled with explicit compatibility diagnostics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-implementation-plan",
      children: "3. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Define submission payload schema + version field + boundary contract to T111 artifacts.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " Versioned schema definition and compatibility notes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Implement payload builder/packager from T111 install artifacts.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " Deterministic local packaging flow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Implement preflight validator (schema, completeness, redaction/security checks).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " Validation module with actionable diagnostics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Implement submission command/path and deterministic outcome handling.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " CLI/documented submission workflow with exit semantics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Document maintainer intake mapping and triage protocol.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " Triage guidance for FR/BR conversion and reproduction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Add tests for contract, failures, retry, and security behavior.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " Automated test coverage aligned to T112 AC1-AC5."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-files-to-create-or-modify",
      children: "3.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cli/commands/logs.py"
        }), " (or dedicated feedback command module if split is cleaner)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cli/logging.py"
        }), " (shared schema helpers if needed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tests/cli/"
        }), " new or expanded feedback submission tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/user-docs/"
        }), " submission guidance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance.md"
        }), " traceability updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T112-install-feedback-submission-path-and-governance.md"
        }), " status/AC progress updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-dependency-order",
      children: "3.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lock schema/boundary contract."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build preflight validator."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build packaging + deterministic outcome surface."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add retry/error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add tests."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update docs and task/FR traceability."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-success--verification-criteria",
      children: "4. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Users can package and validate feedback payloads from T111 install artifacts (AC1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Submission path returns deterministic outcomes with actionable diagnostics (AC2)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Maintainers can map payloads to reproducible investigation and FR/BR intake actions (AC3)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Redaction/security and retry behavior are covered by tests (AC4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "T111/T112 scope boundary is explicit in code/docs and enforced by validation (AC5)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T112-install-feedback-submission-path-and-governance",
          children: ["Host Task E6:S07", ":T112"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance",
          children: "FR-079"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality",
          children: "FR-078"
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