"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["23103"], {
88845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_009_ukw_deep_reprioritization_rp_flag_md_37b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-009-ukw-deep-reprioritization-rp-flag-md-37b.json
var site_docs_architecture_standards_and_adrs_adr_009_ukw_deep_reprioritization_rp_flag_md_37b_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag","title":"ADR-009: UKW standalone deep reprioritization (--rp)","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T22:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-008: Workflow Forensic Logging and Checkpoint Model","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints"},"next":{"title":"ADR-010: UKW standalone archive completed (-c)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T22:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-009: UKW standalone deep reprioritization (--rp)';

const assets = {

};



const toc = [{
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Decision",
  "id": "decision",
  "level": 2
}, {
  "value": "Flag boundary (vs existing UKW flags)",
  "id": "flag-boundary-vs-existing-ukw-flags",
  "level": 3
}, {
  "value": "Consequences",
  "id": "consequences",
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
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "adr-009-ukw-standalone-deep-reprioritization---rp",
        children: ["ADR-009: UKW standalone deep reprioritization (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-05-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " User (Ruari Mears)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085",
        children: ["E02:S16", ":T06"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Origin FR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag",
        children: "FR-085"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning package:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T06-ukw-rp-flag-fr085",
        children: "IPP-E2S16T6"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UKW supports MoSCOW maintenance via comprehensive runs, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-p"
      }), " (update priorities), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-a"
      }), " (assign to targets). None of these provide an explicit ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deep reprioritization"
      }), " mode that systematically reorders ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " from evidence across intent, dependencies, blockers, and delivery impact, with an audit trail."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode",
        children: "FR-038"
      }), " reserves ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "narrow"
      }), " MoSCOW for RW Step 7 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw_step_7"
      }), "). Whole-board priority realignment belongs in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "standalone"
      }), " UKW, not release-scope sync."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add optional flag ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "RePrioritise"
            }), ")"]
          }), " to UKW. Default UKW invocations without ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--rp"
          }), " are unchanged."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW --rp"
            }), " is standalone"]
          }), " — not combinable as an augment to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-u"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-p"
          }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-a"
          }), ". Operators run ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UKW --rp"
          }), " explicitly when deep realignment is needed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Invocation context:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--rp"
          }), " runs only under ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "standalone"
            })
          }), " user invocation. Agents ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MUST NOT"
          }), " use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--rp"
          }), " during RW Step 7 (", (0,jsx_runtime.jsx)(_components.code, {
            children: "rw_step_7"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Step scope for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), ":"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Run: Step 1 (perpetual wiring), Step 2 (evidence scan), Step 6 (deep MoSCOW on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), "), Step 6.5 (fbuboard terminal prune per FR-076), Step 7–9."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Skip: Step 2.5, Steps 3–5 (unless status mismatch blocks reprioritization — fix and document in Step 9)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Evidence categories"
          }), " (mandatory in rationale for each moved row): ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "intent"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "dependencies"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "blockers"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "impact"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Idempotency:"
          }), " Identical inputs → zero MoSCOW moves on repeat run; Step 9 reports ", (0,jsx_runtime.jsx)(_components.code, {
            children: "No priority changes."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-097:"
          }), " Reprioritization may reorder MoSCOW rows only; ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "no"
          }), " batch rewrite of row ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Last modified"
          }), " stamps."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flag-boundary-vs-existing-ukw-flags",
      children: "Flag boundary (vs existing UKW flags)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Invocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-u"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-a"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unchanged; does ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " imply ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -p"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MoSCOW ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "update"
            }), " sub-workflow"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW --rp"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Deep RePrioritise"
            }), " — standalone whole-board evidence-based reorder + rationale"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Positive:"
        }), " Explicit operator path for priority drift correction; auditable rationale; default-off safety."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative:"
        }), " Another flag to learn; risk of confusion with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-p"
        }), " — mitigated by cheatsheet disambiguation and ADR-009 as precedent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintainers:"
        }), " Keep root ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " UKW block and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-ukw-trigger-section.md"
        }), " aligned when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), " semantics change."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag",
          children: "FR-085"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode",
          children: "FR-038"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery",
          children: "FR-097"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
          children: "Workflow initiation cheatsheet"
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