"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["94212"], {
56209(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_06_s_09_t_12_br_083_rw_install_pattern_defaults_md_90e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-06-s-09-t-12-br-083-rw-install-pattern-defaults-md-90e.json
var site_docs_implementation_cycles_ipp_e_06_s_09_t_12_br_083_rw_install_pattern_defaults_md_90e_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults","title":"E06:S09:T12 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS09:T12)","source":"@site/../docs/implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-03T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E06:S09:T11 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight"},"next":{"title":"E06:S09:T13 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T13-br084-rw-config-generation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-03T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E06:S09 — Planning: Spec, Tests, Implementation Plan (IPW)';

const assets = {

};



const toc = [{
  "value": "1. Requirements",
  "id": "1-requirements",
  "level": 2
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "7. Success criteria",
  "id": "7-success-criteria",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e06s09--planning-spec-tests-implementation-plan-ipw",
        children: ["E06:S09", ":T12", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T12-rw-install-pattern-defaults-br083",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T12-rw-install-pattern-defaults-br083.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E06:S09", ":T12", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout",
        children: "BR-083"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/15",
        children: "GitHub #15"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Implemented (2026-06-03 — pending user verification / RW)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements",
      children: "1. Requirements"
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
            children: ["Mode C defaults/detect ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-\\{epic\\}/Epic-\\{epic\\}.md"
            }), " when fresh kanban present"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-083"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mode C defaults/detect ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-\\{epic\\}/Story-{story:03d}-*.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-083"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Install doc copy-paste ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config"
            }), " kanban keys"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-083 AC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " as board default when present"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book dry-run"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Out of scope (E06:S09", ":T13", " / #16):"]
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_doc_pattern"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "generate_rw_config_yaml"
      }), ", “use anyway” persistence guardrails."]
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
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T12 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TODO → IN PROGRESS"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "detect_kanban_doc_patterns()"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "detect_kanban_board_default()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire mode C prompts to detected defaults + suggestion order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), " + workflow mgt README"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Extend ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_install_release_workflow_patterns.py"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Status reconcile + ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["RW E06:S09", ":T12", " --art"]
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success-criteria",
      children: "7. Success criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Fresh kanban → mode C epic/story prompts show ≥1 match without manual pattern edit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Book replay confirms #15"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout",
          children: "BR-083"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern",
          children: "BR-084"
        }), " (follow-on)"]
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