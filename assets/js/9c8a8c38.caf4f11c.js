"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["73125"], {
66553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipw_publication_backfill_inventory_md_9c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipw-publication-backfill-inventory-md-9c8.json
var site_docs_implementation_cycles_ipw_publication_backfill_inventory_md_9c8_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY","title":"IPW Publication Backfill Inventory (BR-066)","description":"Method","source":"@site/../docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-14T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E7:S06:T18 — IPW index (canonical split)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E7S06T18-interactive-installer-kanban-pattern-clarity"},"next":{"title":"PM-AGENT-002 Execution Summary: Could Have Tasks Resolution","permalink":"/ai-dev-kit/docs/implementation-cycles/PM-AGENT-002-COULD-HAVE-EXECUTION-SUMMARY"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-14T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'IPW Publication Backfill Inventory (BR-066)';

const assets = {

};



const toc = [{
  "value": "Method",
  "id": "method",
  "level": 2
}, {
  "value": "Phase 1 baseline (2026-04-14)",
  "id": "phase-1-baseline-2026-04-14",
  "level": 2
}, {
  "value": "Phase 1 missing wiring sample",
  "id": "phase-1-missing-wiring-sample",
  "level": 3
}, {
  "value": "Phase 2 targeted backfill (2026-06-02)",
  "id": "phase-2-targeted-backfill-2026-06-02",
  "level": 2
}, {
  "value": "Post–Phase 2 audit",
  "id": "postphase-2-audit",
  "level": 2
}, {
  "value": "Phased plan (ongoing)",
  "id": "phased-plan-ongoing",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ipw-publication-backfill-inventory-br-066",
        children: "IPW Publication Backfill Inventory (BR-066)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "method",
      children: "Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scanned ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        }), " for task-addressed planning artifacts matching ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E*S*T*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW-E*S*T*"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E*S*T*"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scanned task docs under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/**"
        }), " for explicit markdown links to those artifact basenames."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Marked artifacts as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "missing wiring"
        }), " when basename was not referenced by any kanban task doc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Phase 2 (2026-06-02): run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_publication_wiring.py --audit-inventory"
        }), " for authoritative unwired list."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-1-baseline-2026-04-14",
      children: "Phase 1 baseline (2026-04-14)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task-addressed artifacts scanned: 45"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing task-doc wiring references: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "16"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-missing-wiring-sample",
      children: "Phase 1 missing wiring sample"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E10S1T1-specification.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E11S1T1-specification.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E1S6T1-specification.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E4S11T7-specification.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E5S1T35-implementation-plan.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E5S1T35-package-summary.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E5S1T35-specification.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E5S1T35-test-design.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E5S1T46-specification.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E5S1T46-test-design.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E6S7T106-specification.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E6S7T18-specification.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E7S1T7-implementation-plan.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E7S1T7-specification.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E7S1T7-test-design.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E8S4T1-specification.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-2-targeted-backfill-2026-06-02",
      children: "Phase 2 targeted backfill (2026-06-02)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wired the Phase 1 sample set from host task docs or story task anchors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Host surface"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E5S1T35-*"
            }), " (+ package-summary)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-05/story-01-fr-repo/T35-task-template-cross-wiring-section.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E5S1T46-*"
            }), " (+ existing IPP plan)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-05/story-01-fr-repo/T46-rw-semver-tag-task-touch-mode.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E6S7T106-specification.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-06/.../T106-windsurf-migration-cursorrules-to-workflows.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E6S7T18-specification.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-06/.../T18-tool-agnostic-workflow-step-tracking-and-runlogs.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E7S1T7-*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-07/.../T07-markdown-maintenance-workflow.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E1S6T1-specification.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-01/.../T01-setup-byob-badges-for-private-repository.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E4S11T7-specification.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-04/.../T07-planning-spec-tests-impl.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E10S1T1-specification.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epic-10/story-01-document-lifecycle-package-implementation-review.md"
            }), " (T01 anchor)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E11S1T1-specification.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epic-11/story-01-debug-path-package-implementation-review.md"
            }), " (T01 anchor)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E8S4T1-specification.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epic-08/story-04-tooling-automation-package-implementation-review.md"
            }), " (T01 anchor)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick win (Phase 1):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S01:T17"
      }), " ICW trio already wired in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "postphase-2-audit",
      children: "Post–Phase 2 audit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Re-run from repo root:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python \"packages/frameworks/workflow-mgt/scripts/validation/validate_ipw_publication_wiring.py\" --audit-inventory\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Record the printed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scanned"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "missing wiring"
      }), " counts below after each maintenance wave."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scanned"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unwired"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2026-06-02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "109"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 1 sample (16 rows) wired; audit uses EST+kind alias matching (padded vs unpadded link targets). Remaining 28 unwired artifacts need future waves."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2026-06-03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "114"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Phase 3 corpus tail (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3",
              children: "IPP-E2S15T1-br066-corpus-tail-phase3.md"
            }), "): bulk host wiring + relative-path repair; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-066 RESOLVED"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phased-plan-ongoing",
      children: "Phased plan (ongoing)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 1 (complete):"
        }), " Contract + single-task validator + inventory baseline."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 2 (complete):"
        }), " Bulk audit mode, tests, targeted wiring for inventory sample (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3",
          children: "IPP-E2S15T1-br066-publication-backfill-phase2.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 3 (complete):"
        }), " Corpus tail closure — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " unwired (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3",
          children: "IPP-E2S15T1-br066-corpus-tail-phase3.md"
        }), "); optional blocking RW gate still EXEMPT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 4 (maintenance):"
        }), " Periodic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--audit-inventory"
        }), " in UKW/RW ops cadence."]
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