"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["54001"], {
63784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_fr_099_phase_3_public_repo_bootstrap_md_1fe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-fr-099-phase-3-public-repo-bootstrap-md-1fe.json
var site_docs_maintenance_fr_099_phase_3_public_repo_bootstrap_md_1fe_namespaceObject = JSON.parse('{"id":"maintenance/fr099-phase3-public-repo-bootstrap","title":"FR-099 Phase 3 — Public RMS-Ltd/ai-dev-kit bootstrap","description":"TaskS04S09:T03 (2026-05-28 canonical org correction)","source":"@site/../docs/maintenance/fr099-phase3-public-repo-bootstrap.md","sourceDirName":"maintenance","slug":"/maintenance/fr099-phase3-public-repo-bootstrap","permalink":"/ai-dev-kit/docs/maintenance/fr099-phase3-public-repo-bootstrap","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/fr099-phase3-public-repo-bootstrap.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T16:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Docusaurus corpus triage (FR-067 / E5:S09:T03)","permalink":"/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067"},"next":{"title":"FR-099 Phase 4 — Rewire & verify (E1:S04:T07)","permalink":"/ai-dev-kit/docs/maintenance/fr099-phase4-rewire-and-verify"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/fr099-phase3-public-repo-bootstrap.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T16:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-099 Phase 3 — Public RMS-Ltd/ai-dev-kit bootstrap';

const assets = {

};



const toc = [{
  "value": "Bootstrap decision (ADR-006 open question)",
  "id": "bootstrap-decision-adr-006-open-question",
  "level": 2
}, {
  "value": "Genesis commit",
  "id": "genesis-commit",
  "level": 2
}, {
  "value": "Repository roles after Phase 3",
  "id": "repository-roles-after-phase-3",
  "level": 2
}, {
  "value": "GitHub rename redirect (critical)",
  "id": "github-rename-redirect-critical",
  "level": 2
}, {
  "value": "Run bootstrap",
  "id": "run-bootstrap",
  "level": 2
}, {
  "value": "Post-bootstrap (Phase 4 — E1:S04) ✅",
  "id": "post-bootstrap-phase-4--e1s04-",
  "level": 2
}, {
  "value": "Clone policy",
  "id": "clone-policy",
  "level": 2
}, {
  "value": "Ongoing sync (after private <code>dev</code> moves)",
  "id": "ongoing-sync-after-private-dev-moves",
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
        id: "fr-099-phase-3--public-rms-ltdai-dev-kit-bootstrap",
        children: ["FR-099 Phase 3 — Public ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), " bootstrap"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E1:S04", ":T06", " (initial bootstrap); ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["FR-082 / E6:S09", ":T03"]
      }), " (2026-05-28 canonical org correction)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
        children: "ADR-006"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/scripts/fr099_bootstrap_public_ai_dev_kit.sh",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/fr099_bootstrap_public_ai_dev_kit.sh"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bootstrap-decision-adr-006-open-question",
      children: "Bootstrap decision (ADR-006 open question)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orphan root vs genesis-SHA replay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orphan root + cherry-pick replay"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Public remote receives only objects on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "public-bootstrap"
            }), "; history starts at genesis tree; post-genesis commits replayed without pre-genesis parents"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "main"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Framework consumers and GitHub Pages expect ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "dev"
              })
            }), " mirrored for maintainer parity with private line"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Changelog archive on public"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Full replay"
            }), " (Phase 3)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-genesis changelog entries ship with replayed commits; pre-genesis book-era entries are not reachable on public remote"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "genesis-commit",
      children: "Genesis commit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f21bac102"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tag / release"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "v0.1.4.3+1"
            }), " — FR-099 Phase 2 book extraction"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/book-proj/"
            }), ", no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/epic-24/"
            }), " on tree"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "repository-roles-after-phase-3",
      children: "Repository roles after Phase 3"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Remote"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "URL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private (maintainer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://github.com/RMS-Ltd/ai-dev-kit-book.git"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full history + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "book/epic-24"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public (adopters)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://github.com/RMS-Ltd/ai-dev-kit.git"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework-only from genesis forward"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " An interim bootstrap to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit"
      }), " (2026-05-26) was superseded when the empty org placeholder ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        })
      }), " received the canonical replay (2026-05-28)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "github-rename-redirect-critical",
      children: "GitHub rename redirect (critical)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After Phase 1, pushes to old ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " URLs may ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["redirect to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit-book"
        })]
      }), " until a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new"
      }), " public repository exists under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit"
      }), ". The bootstrap script verifies ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private=false"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "repos/RMS-Ltd/ai-dev-kit"
      }), " before pushing. If a mistaken force-push occurs, restore the private remote from the local full-history ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " tip (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git push origin <local-dev-sha>:dev --force"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "run-bootstrap",
      children: "Run bootstrap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# From private clone on dev, with gh auth for RMS-Ltd org\nchmod +x scripts/fr099_bootstrap_public_ai_dev_kit.sh\n./scripts/fr099_bootstrap_public_ai_dev_kit.sh\n\n# Dry-run (local replay only)\nDRY_RUN=1 ./scripts/fr099_bootstrap_public_ai_dev_kit.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defaults: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PUBLIC_ORG=RMS-Ltd"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PUBLIC_REPO=ai-dev-kit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "post-bootstrap-phase-4--e1s04-",
      children: ["Post-bootstrap (Phase 4 — E1:S04", ":T07", ") ✅"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/fr099-phase4-rewire-and-verify",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "fr099-phase4-rewire-and-verify.md"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rewire ", (0,jsx_runtime.jsx)(_components.code, {
          children: "origin"
        }), " for public contributors vs private maintainers (document dual-remote)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update badges, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), ", hardcoded ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), " URLs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Install smoke (FR-080) and optional ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098",
          children: "IPP Wave E"
        }), " on public clone"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clone-policy",
      children: "Clone policy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adopters:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone https://github.com/RMS-Ltd/ai-dev-kit.git"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintainers (book + frameworks):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone https://github.com/RMS-Ltd/ai-dev-kit-book.git"
        }), " — do not publish book paths to public remote"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "ongoing-sync-after-private-dev-moves",
      children: ["Ongoing sync (after private ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " moves)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "./scripts/fr099_sync_public_from_private.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pushes private ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " tip to public ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), ", or re-runs bootstrap if histories diverge."]
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