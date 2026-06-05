"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["630"], {
46252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_2_s_01_t_22_rw_perpetual_version_py_build_br_075_md_773_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-2-s-01-t-22-rw-perpetual-version-py-build-br-075-md-773.json
var site_docs_implementation_cycles_ipp_e_2_s_01_t_22_rw_perpetual_version_py_build_br_075_md_773_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075","title":"E2:S01:T22 — Planning: BR-075 perpetual RW version.py BUILD (IPP)","description":"Host TaskS01:T22)","source":"@site/../docs/implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","created_at":"2026-05-29T12:00:00.000Z","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E1:S04 — Planning: FR-099 book/private/public repository migration (ADR-006)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E1S04-fr099-book-private-public-migration"},"next":{"title":"E02:S01:T23 — Planning: Tool-agnostic workflow step tracking + persisted run logs (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075.md


const frontMatter = {
	lifecycle: 'evergreen',
	created_at: new Date('2026-05-29T12:00:00.000Z'),
	housekeeping_policy: 'keep'
};
const contentTitle = 'E2:S01 — Planning: BR-075 perpetual RW version.py BUILD (IPP)';

const assets = {

};



const toc = [{
  "value": "1. Requirements",
  "id": "1-requirements",
  "level": 2
}, {
  "value": "2. Specification",
  "id": "2-specification",
  "level": 2
}, {
  "value": "2.4 Status transition intent",
  "id": "24-status-transition-intent",
  "level": 3
}, {
  "value": "3. Test design",
  "id": "3-test-design",
  "level": 2
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "5. Documentation deliverables",
  "id": "5-documentation-deliverables",
  "level": 2
}, {
  "value": "6. Documentation housing",
  "id": "6-documentation-housing",
  "level": 2
}, {
  "value": "7. Success criteria",
  "id": "7-success-criteria",
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
        id: "e2s01--planning-br-075-perpetual-rw-versionpy-build-ipp",
        children: ["E2:S01", ":T22", " — Planning: BR-075 perpetual RW ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " BUILD (IPP)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T22-rw-perpetual-task-version-py-build-increment-br075.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E2:S01", ":T22", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py",
        children: "BR-075"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: ["Fail closed when same-task perpetual RW leaves ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_BUILD"
            }), " unchanged in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version_file"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-075, AC1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_init"
            }), " / Step 7 reads version from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version_file"
            }), " after Step 2"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW guide + ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " document Step 2 before Step 7 for perpetual / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -k"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "version-bump"
            }), " skill uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version_file"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pytest regression for perpetual BUILD increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope:"
      }), " Changing perpetual placement guardrails (E2:S16", ":T01", ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_perpetual_build_increment()"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_version_bump.py"
      }), ": when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--requested"
      }), " task is perpetual and version E/S/T unchanged, require staged ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version_file"
      }), " BUILD > baseline (unless ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--doc-policy-zero"
      }), "). Wire into main() before exit 0."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update_kanban_docs.py"
      }), " to load version via shared helper reading ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " when stamping kanban."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent",
      children: "2.4 Status transition intent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IN PROGRESS"
        }), " at IPP publish; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " after RW ships fix and BR-075 RESOLVED."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pytest: perpetual same-task, BUILD unchanged → validator non-zero"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pytest: perpetual same-task, BUILD +1 → pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py --strict --requested E2:S01:T22 --art"
            }), " PASS after impl"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Host task ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TODO → IN PROGRESS"
            }), "; link IPP"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement validator + kanban version read helper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update skill + RW agent doc + ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " note"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add tests in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump.py"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RW E2:S01:T22 --art"
            }), "; BR-075 RESOLVED; reconcile status COMPLETE"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-documentation-deliverables",
      children: "5. Documentation deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW agent execution Step 2/9 perpetual BUILD note"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR-075 status + fix version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-documentation-housing",
      children: "6. Documentation housing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IPP: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Policy cross-ref: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev-kit-versioning-policy.md"
        }), " § perpetual"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success-criteria",
      children: "7. Success criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC1–AC5 on host task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_publication_wiring.py --requested E2:S01:T22"
        }), " PASS"]
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