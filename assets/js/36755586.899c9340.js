"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["91529"], {
72712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_fr_099_phase_4_rewire_and_verify_md_367_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-fr-099-phase-4-rewire-and-verify-md-367.json
var site_docs_maintenance_fr_099_phase_4_rewire_and_verify_md_367_namespaceObject = JSON.parse('{"id":"maintenance/fr099-phase4-rewire-and-verify","title":"FR-099 Phase 4 — Rewire & verify (E1:S04:T07)","description":"TaskS04:T07","source":"@site/../docs/maintenance/fr099-phase4-rewire-and-verify.md","sourceDirName":"maintenance","slug":"/maintenance/fr099-phase4-rewire-and-verify","permalink":"/ai-dev-kit/docs/maintenance/fr099-phase4-rewire-and-verify","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/fr099-phase4-rewire-and-verify.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T16:10:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-099 Phase 3 — Public RMS-Ltd/ai-dev-kit bootstrap","permalink":"/ai-dev-kit/docs/maintenance/fr099-phase3-public-repo-bootstrap"},"next":{"title":"Markdown Maintenance Workflow Log – 2026-03-16","permalink":"/ai-dev-kit/docs/maintenance/logs/mmw/MMW-2026-03-16"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/fr099-phase4-rewire-and-verify.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T16:10:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-099 Phase 4 — Rewire & verify (E1:S04)';

const assets = {

};



const toc = [{
  "value": "Rewire checklist (AC7)",
  "id": "rewire-checklist-ac7",
  "level": 2
}, {
  "value": "Verify (AC6)",
  "id": "verify-ac6",
  "level": 2
}, {
  "value": "Sync private → public (post-rewire)",
  "id": "sync-private--public-post-rewire",
  "level": 2
}, {
  "value": "Dual-remote maintainer setup",
  "id": "dual-remote-maintainer-setup",
  "level": 2
}, {
  "value": "Wave E (optional)",
  "id": "wave-e-optional",
  "level": 2
}, {
  "value": "FR-099 closure",
  "id": "fr-099-closure",
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
    li: "li",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "fr-099-phase-4--rewire--verify-e1s04",
        children: ["FR-099 Phase 4 — Rewire & verify (E1:S04", ":T07", ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E1:S04", ":T07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Depends on:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/fr099-phase3-public-repo-bootstrap",
        children: "Phase 3 bootstrap"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config SoT:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/rw-config.yaml",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        })
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "canonical_public_repo"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maintainer_private_repo"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rewire-checklist-ac7",
      children: "Rewire checklist (AC7)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Surface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public/private repo URLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_package_from_release.py"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--repo RMS-Ltd/ai-dev-kit"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PACKAGE_INSTALLATION_GUIDE.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Release URLs → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical repository table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "repo-structure-for-adopters.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter INSTALL links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter vs maintainer callout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/docusaurus.config.js"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rms-ltd.github.io"
            }), " base"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://rms-ltd.github.io/ai-dev-kit/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Deploy from ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "public"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " after sync"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verify-ac6",
      children: "Verify (AC6)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "chmod +x scripts/fr099_install_smoke_test.sh scripts/fr099_sync_public_from_private.sh\n./scripts/fr099_install_smoke_test.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Smoke test shallow-clones ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "public"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " and asserts:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/book-proj/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-24/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-24"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sync-private--public-post-rewire",
      children: "Sync private → public (post-rewire)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Public ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit"
      }), " uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "replay history"
      }), " (Phase 3 bootstrap), not the private repo’s full object graph. A direct ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git push"
      }), " of private ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " to public ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "will fail"
      }), "; use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bootstrap replay"
      }), " instead:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "./scripts/fr099_bootstrap_public_ai_dev_kit.sh\n# or (falls back to bootstrap on push failure):\n./scripts/fr099_sync_public_from_private.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E1:S04:T07"
      }), " commits rewire changes on private ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " so public ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_package_from_release.py"
      }), " default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dual-remote-maintainer-setup",
      children: "Dual-remote maintainer setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git remote rename origin private   # optional naming\ngit remote add public https://github.com/RMS-Ltd/ai-dev-kit.git\ngit remote add private https://github.com/RMS-Ltd/ai-dev-kit-book.git\n# Work on private; push public after FR-099 sync / release\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wave-e-optional",
      children: "Wave E (optional)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098",
        children: "IPP-E6S9T6 §8"
      }), " ECC validation on a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fresh clone"
      }), " of public ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit"
      }), " after sync."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fr-099-closure",
      children: "FR-099 closure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When AC6 and AC7 pass and this doc is linked from T07, mark ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-099"
      }), " IMPLEMENTED via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E1:S04:T07"
      }), "."]
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