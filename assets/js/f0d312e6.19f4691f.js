"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["12751"], {
59241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_010_ukw_archive_completed_c_flag_md_f0d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-010-ukw-archive-completed-c-flag-md-f0d.json
var site_docs_architecture_standards_and_adrs_adr_010_ukw_archive_completed_c_flag_md_f0d_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag","title":"ADR-010: UKW standalone archive completed (-c)","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T23:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-009: UKW standalone deep reprioritization (--rp)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag"},"next":{"title":"ADR-011: Workflow Step Tracker and Agent Run Log","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T23:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-010: UKW standalone archive completed (-c)';

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
  "value": "Flag boundary",
  "id": "flag-boundary",
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
        id: "adr-010-ukw-standalone-archive-completed--c",
        children: ["ADR-010: UKW standalone archive completed (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
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
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T16-ukw-archive-completed-board-rows-fr102",
        children: ["E02:S16", ":T16"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Origin FR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows",
        children: "FR-102"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning package:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102",
        children: "IPP-E2S16T16"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Active MoSCOW rows on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " can show ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), " (or terminal FBU) work while source task/FBU docs are already closed. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls",
        children: "FR-076"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update_kanban_docs.py"
      }), " hygiene could ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "remove"
      }), " such rows without appending to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kanban-completed",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "kanban-completed.md"
        })
      }), " or ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/intake-completed",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "intake-completed.md"
        })
      }), " — losing the ledger-first contract operators expect."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Operators need a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fast, explicit"
      }), " UKW path: “clean the boards” means ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "archive then remove"
      }), ", not silent deletion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add optional flag ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-c"
            }), " (archive completed)"]
          }), " to UKW. Default UKW without ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-c"
          }), " is unchanged."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c"
            }), " is standalone"]
          }), " — not combinable with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-u"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-p"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-a"
          }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--rp"
          }), ". Agents ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MUST"
          }), " reject combined flag sets."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Invocation context:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-c"
          }), " runs only under ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "standalone"
          }), " user invocation. Agents ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MUST NOT"
          }), " use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-c"
          }), " during RW Step 7 (", (0,jsx_runtime.jsx)(_components.code, {
            children: "rw_step_7"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Source of truth:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "kboard:"
            }), " linked ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "task document"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Status:**"
            }), " (terminal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " / equivalent), not row text alone."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "fbuboard:"
            }), " linked ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR/BR/UXR"
            }), " document status (terminal per FR-076 rules; keep unresolved-verification exceptions)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ledger-before-removal (mandatory):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Tasks → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_completed_update"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/skills/kanban-completed-update/SKILL.md",
              children: "kanban-completed-update skill"
            }), " before row removal."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["FBUs → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr_br_uxr_completed_update"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/skills/fr-br-uxr-completed-update/SKILL.md",
              children: "fr-br-uxr-completed-update skill"
            }), " before row removal."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Step scope for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-c"
            }), ":"]
          }), " Run Steps 1, 2 (archive scan), 6 (archive + prune), 7–9. Skip 2.5, 3–5. Step 9 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "must"
          }), " include ", (0,jsx_runtime.jsx)(_components.code, {
            children: "## Archive completed summary"
          }), " (archived / skipped / already-in-ledger counts)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Idempotency:"
          }), " Re-run with unchanged inputs → no duplicate ledger entries; active rows already absent are no-ops."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-097:"
          }), " Row removal is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "structure"
          }), " change; document structure-prune evidence when pre-commit stamp diff runs. Do not batch-fabricate unrelated row stamps."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["RW / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            }), " (Option A):"]
          }), " Deterministic board update paths ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "do not"
          }), " delete-only prune COMPLETE active MoSCOW rows. Operators run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c"
            })
          }), " after releases to archive completes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flag-boundary",
      children: "Flag boundary"
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
              children: "-c"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW --rp"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Deep reprioritization only (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag",
              children: "ADR-009"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Archive completed"
            }), " — ledger append then active MoSCOW removal"]
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
        }), " Clear operator command; forensic ledgers stay authoritative; fixes RW ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-k"
        }), " delete-only prune gap."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative:"
        }), " Extra step after releases; terminal rows may linger until ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), " runs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintainers:"
        }), " Keep ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " UKW block and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-ukw-trigger-section.md"
        }), " aligned when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), " semantics change."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows",
          children: "FR-102"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag",
          children: "ADR-009"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls",
          children: "FR-076"
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