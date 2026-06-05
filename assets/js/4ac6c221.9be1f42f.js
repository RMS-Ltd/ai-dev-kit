"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["81534"], {
64694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_4_s_08_t_07_specification_md_4ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-4-s-08-t-07-specification-md-4ac.json
var site_docs_implementation_cycles_icw_e_4_s_08_t_07_specification_md_4ac_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E4S08T07-specification","title":"ICW-E4S8T7-Specification: FR-011 Multi-Epic Task Splitting","description":"TaskS08:T07","source":"@site/../docs/implementation-cycles/ICW-E4S08T07-specification.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E4S08T07-specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S08T07-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E4S08T07-specification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-09T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW-E4S8T7-Implementation-Plan: FR-011 Multi-Epic Task Splitting","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S08T07-implementation-plan"},"next":{"title":"ICW-E4S8T7-Test-Design: FR-011 Multi-Epic Task Splitting","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S08T07-test-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E4S08T07-specification.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-09T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW-E4S8T7-Specification: FR-011 Multi-Epic Task Splitting';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Functional Invariants",
  "id": "functional-invariants",
  "level": 2
}, {
  "value": "FR-011 Requirement Mapping",
  "id": "fr-011-requirement-mapping",
  "level": 2
}, {
  "value": "Non-Functional Constraints",
  "id": "non-functional-constraints",
  "level": 2
}, {
  "value": "Edge Cases and Boundaries",
  "id": "edge-cases-and-boundaries",
  "level": 2
}, {
  "value": "Acceptance Assertions",
  "id": "acceptance-assertions",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
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
        id: "icw-e4s8t7-specification-fr-011-multi-epic-task-splitting",
        children: "ICW-E4S8T7-Specification: FR-011 Multi-Epic Task Splitting"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E4:S08", ":T07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related FR:"
      }), " FR-011", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-08-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011",
        children: "T07-task-splitting-across-multiple-canonical-epics-fr-011.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-09"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define the planning baseline for implementing multi-epic task splitting when one source epic partially matches multiple canonical epics. The implementation must preserve explainability and deterministic reference updates."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Current migration logic favors a single best epic match, which can misplace tasks for mixed-responsibility epics. FR-011 requires task-level assignment across multiple canonical epics with clear rationale and consistent identifier updates."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In scope:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect multi-epic partial-match scenarios from epic-level semantic analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform task-level assignment to canonical epic/story targets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produce migration/split plans with human-readable rationale."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remap task identifiers and update references deterministically."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Out of scope:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frontend/UI workflows for split-plan review."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-migration product features unrelated to canonical adoption."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full runtime implementation details beyond planning and test definition."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functional-invariants",
      children: "Functional Invariants"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-match detection invariant"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "When multiple canonical epics meet split-eligibility thresholds, the system classifies the source epic as split-candidate."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Task assignment invariant"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Every source task receives exactly one canonical assignment decision for a given split-plan run."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explainability invariant"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Each assignment includes explicit rationale (signals, confidence, and tie-break outcomes)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deterministic remap invariant"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Given identical input and configuration, output task IDs and reference rewrites are stable and repeatable."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reference integrity invariant"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "After remap, no stale references to pre-split task IDs remain in declared migration targets."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fr-011-requirement-mapping",
      children: "FR-011 Requirement Mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-1 / AC-1:"
        }), " Multi-epic partial-match detection rules and thresholds documented."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-2 / AC-2:"
        }), " Task-content analysis strategy documented for per-task epic assignment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-3 / AC-3:"
        }), " Split assignment behavior specified for multi-epic outcomes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-4 / AC-4:"
        }), " Migration plan output contract includes split mappings and rationale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-5 / AC-5:"
        }), " Task ID remap contract specified with deterministic tie-breaking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-6 / AC-6:"
        }), " Reference update scope and verification contract defined."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "non-functional-constraints",
      children: "Non-Functional Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transparency:"
        }), " Split decisions must be auditable by operators."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Usability:"
        }), " Plan output must support human confirmation workflows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliability:"
        }), " Deterministic mode must avoid non-reproducible assignment drift."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edge-cases-and-boundaries",
      children: "Edge Cases and Boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple equally strong canonical matches for the same task."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing canonical stories under a selected target epic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conflicting ID spaces during remap."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy references in markdown/prose that are not machine-structured."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boundary policy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use explicit deterministic tie-breakers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Emit unresolved-reference reports instead of silent mutation for ambiguous prose."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-assertions",
      children: "Acceptance Assertions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planning artifacts define testable checks for all FR-011 requirements and ACs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split-plan output schema and remap rules are specified before coding."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Host task and FR remain bidirectionally linked to all planning artifacts."
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