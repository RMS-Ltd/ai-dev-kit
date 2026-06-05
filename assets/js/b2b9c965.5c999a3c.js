"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["88744"], {
83324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_2_s_01_t_15_specification_md_b2b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-2-s-01-t-15-specification-md-b2b.json
var site_docs_implementation_cycles_icw_e_2_s_01_t_15_specification_md_b2b_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E2S01T15-specification","title":"ICW-E2S1T15-Specification: FR-049 Canonical RW Step SoT Hardening","description":"TaskS01:T15","source":"@site/../docs/implementation-cycles/ICW-E2S01T15-specification.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E2S01T15-specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S01T15-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E2S01T15-specification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-09T12:55:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW-E2S1T15-Implementation-Plan: FR-049 Canonical RW Step SoT","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S01T15-implementation-plan"},"next":{"title":"ICW-E2S1T15-Test-Design: FR-049 Canonical RW Step SoT","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S01T15-test-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E2S01T15-specification.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-09T12:55:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW-E2S1T15-Specification: FR-049 Canonical RW Step SoT Hardening';

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
  "value": "Functional Invariants (Specification)",
  "id": "functional-invariants-specification",
  "level": 2
}, {
  "value": "Acceptance Assertions",
  "id": "acceptance-assertions",
  "level": 2
}, {
  "value": "Governance Alignment",
  "id": "governance-alignment",
  "level": 2
}, {
  "value": "Maintenance Notes",
  "id": "maintenance-notes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
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
        id: "icw-e2s1t15-specification-fr-049-canonical-rw-step-sot-hardening",
        children: "ICW-E2S1T15-Specification: FR-049 Canonical RW Step SoT Hardening"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E2:S01", ":T15", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related FR:"
      }), " FR-049", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T15-canonical-rw-step-list-single-source-of-truth-fr049",
        children: "T15-canonical-rw-step-list-single-source-of-truth-fr049.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-09"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This specification defines the durable planning baseline for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E2:S01:T15"
      }), " so canonical RW step definitions remain single-source, non-duplicated, and anti-drift across workflow runtime and documentation surfaces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RW step metadata can drift when duplicated across multiple files (", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow_orchestrator"
      }), ", rules, readme, references). Even after implementation, maintenance edits can reintroduce divergence unless invariants are explicitly specified and tested."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In scope:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical RW step source-of-truth invariants for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-049"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "T15"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planning artifacts needed for Implementation Cycle Step 3a/3b."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traceability checks tying FR/task/story and canonical-step consumers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Out of scope:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New trigger types beyond established RW/RW -k/RW -d behavior."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-RW workflow redesign."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functional-invariants-specification",
      children: "Functional Invariants (Specification)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical-definition invariant:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW step metadata is authored in one canonical source."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consumer-consistency invariant:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Runtime and documentation consumers reference canonical definitions without conflicting hardcoded step lists."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Step-13 clarity invariant:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Step 13 semantics retain explicit housekeeping wording in all relevant references."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Traceability invariant:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "FR, task, and story checklist links remain bidirectional and resolvable."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Release-marker invariant:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task and FR fields (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Status"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Version"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Version Anchor"
            }), ") remain coherent after release updates."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-assertions",
      children: "Acceptance Assertions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "FR-049"
        }), " points to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S01:T15"
        }), " as implementing task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T15"
        }), " is housed in Story 001 and references ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-049"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story checklist row for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T15"
        }), " exists with FR linkage."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical RW step intent is documented as SoT and anti-drift oriented."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "governance-alignment",
      children: "Governance Alignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KG-R2 (atomic intake/wiring):"
        }), " Preserved via explicit FR/task/story cross-link contract."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KG-R6 (semantic hosting):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T15"
        }), " remains under RW Story 001, aligned to domain responsibility."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintenance-notes",
      children: "Maintenance Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For future change sets touching canonical RW steps, update the canonical source first, then verify consumer consistency and traceability fields in the same cycle to prevent split-brain step definitions."
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