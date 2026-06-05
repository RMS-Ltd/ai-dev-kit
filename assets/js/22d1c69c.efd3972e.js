"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["25214"], {
97888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_017_docusaurus_ci_build_deploy_topology_md_22d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-017-docusaurus-ci-build-deploy-topology-md-22d.json
var site_docs_architecture_standards_and_adrs_adr_017_docusaurus_ci_build_deploy_topology_md_22d_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology","title":"ADR-017: Docusaurus CI build/deploy topology (single workflow, artifact handoff)","description":"Version 0.0.1","source":"@site/../docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T00:25:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-016: Install/setup error code taxonomy (ADK-*)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy"},"next":{"title":"ADR-018: Single kanban board consolidation (retire active fbuboard)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T00:25:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-017: Docusaurus CI build/deploy topology (single workflow, artifact handoff)';

const assets = {

};



const toc = [{
  "value": "Version 0.0.1",
  "id": "version-001",
  "level": 3
}, {
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Decision",
  "id": "decision",
  "level": 2
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Alternatives rejected",
  "id": "alternatives-rejected",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "adr-017-docusaurus-ci-builddeploy-topology-single-workflow-artifact-handoff",
        children: "ADR-017: Docusaurus CI build/deploy topology (single workflow, artifact handoff)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-001",
      children: "Version 0.0.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.0.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial decision — Option 2 from BR-093; merged build + deploy jobs."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " User (Ruari Mears)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093",
        children: ["E05:S09", ":T14"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning package:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication",
        children: "IPP-E5S9T14"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste",
        children: "BR-093"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate",
        children: "FR-069"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting",
        children: "FR-070"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste",
        children: "BR-093"
      }), " — two independent workflows each run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm ci"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), " on every qualifying ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " push, doubling CI minutes and failure noise."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prior layout:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Workflow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Build"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Docusaurus site build"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/workflows/docusaurus-build.yml"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "npm ci"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Docusaurus deploy to GitHub Pages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/workflows/docusaurus-deploy.yml"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "npm ci"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            }), " + publish"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 2"
      }), " from BR-093 — extend ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/docusaurus-build.yml"
        })
      }), " with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "build"
          }), " job"]
        }), " — unchanged FR-069 contract; adds ", (0,jsx_runtime.jsx)(_components.code, {
          children: "actions/upload-artifact@v4"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/build"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "deploy"
          }), " job"]
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "needs: build"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if:"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " push or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_dispatch"
        }), "; downloads artifact; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "peaceiris/actions-gh-pages@v4"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh-pages"
        }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/docusaurus-deploy.yml"
        }), " to remove duplicate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "push"
        }), " trigger."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Supersedes:"
      }), " FR-070 executable spec ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S7"
      }), " (“publish step after build in the same job”) — freshness is preserved because deploy consumes the artifact from the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "same workflow run"
      }), ", not a prior commit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["One production build per ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " commit (portal/docs paths)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deploy automatically skipped when build fails (", (0,jsx_runtime.jsx)(_components.code, {
          children: "needs:"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PR gate unchanged (deploy job ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " excludes pull requests)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "test_portal_fr070_deployment.py"
        }), " S3/S7 assertions updated for cross-job topology."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflow display name remains ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Docusaurus site build"
        }), " (branch protection / Dependabot references)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternatives-rejected",
      children: "Alternatives rejected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 1 (reusable workflow + workflow_run):"
        }), " Extra workflow file and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_run"
        }), " latency; more moving parts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 3 (workflow_run gate only):"
        }), " Keeps two workflow files; harder to reason about dispatch and permissions."]
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