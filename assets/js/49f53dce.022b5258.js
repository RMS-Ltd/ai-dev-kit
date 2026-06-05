"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["95925"], {
78560(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_003_greenfield_vs_brownfield_adoption_md_49f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-003-greenfield-vs-brownfield-adoption-md-49f.json
var site_docs_architecture_standards_and_adrs_adr_003_greenfield_vs_brownfield_adoption_md_49f_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption","title":"ADR-003: Greenfield vs Brownfield Adoption (Respect for Host Architecture)","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-002: Task-Touch Derived Mapping (Kanban → SemVer)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping"},"next":{"title":"ADR-004: Mandatory IPP State Transition Steps","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-003: Greenfield vs Brownfield Adoption (Respect for Host Architecture)';

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
  "value": "1. Dual stance (by adoption context)",
  "id": "1-dual-stance-by-adoption-context",
  "level": 3
}, {
  "value": "2. Brownfield: abstraction at the boundary",
  "id": "2-brownfield-abstraction-at-the-boundary",
  "level": 3
}, {
  "value": "3. Greenfield: simplicity without claiming universal truth",
  "id": "3-greenfield-simplicity-without-claiming-universal-truth",
  "level": 3
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Positive",
  "id": "positive",
  "level": 3
}, {
  "value": "Negative / follow-up",
  "id": "negative--follow-up",
  "level": 3
}, {
  "value": "Related",
  "id": "related",
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
        id: "adr-003-greenfield-vs-brownfield-adoption-respect-for-host-architecture",
        children: "ADR-003: Greenfield vs Brownfield Adoption (Respect for Host Architecture)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-04-19"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI Dev Kit is installed into other repositories. Two situations differ sharply:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Greenfield:"
        }), " A new or template-based project with little existing structure to preserve. A clear, opinionated path is appropriate and low-risk."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brownfield:"
        }), " An existing system with its own architecture, directories, conventions, and governance. The maintainers of that system are the authority on their context."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Treating both the same would either over-constrain experienced teams (brownfield) or leave new projects without enough guidance (greenfield). The kit must remain useful to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "advanced adopters"
      }), " who want composable primitives, not only to teams that adopt the canonical dev-kit layout wholesale."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-dual-stance-by-adoption-context",
      children: "1. Dual stance (by adoption context)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Greenfield"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Provide a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "documented happy path"
            }), ": defaults, suggested tree, and installers that produce a coherent baseline quickly."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Brownfield"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Assume and respect"
            }), " that the host project owns architecture and design. Do not normatively impose dev-kit folder shapes, processes, or scope beyond what the adopter chooses."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-brownfield-abstraction-at-the-boundary",
      children: "2. Brownfield: abstraction at the boundary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For brownfield adoption, AI Dev Kit is treated as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modular and abstract at integration seams"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contracts"
        }), " (for example configuration keys, validator expectations, optional modules) are documented so adopters can ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "map"
        }), " them to their own paths and workflows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical layouts"
        }), " in this repository describe ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "the dev-kit reference implementation"
        }), ", not a moral requirement on external repos."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Documentation and tooling should distinguish ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "required for a chosen surface"
        }), " (e.g. RW with task identification where adopted) from ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "recommended"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "optional"
        }), " (e.g. full Kanban epics/stories as in the reference repo)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Experienced users should be able to take ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "only what they need"
      }), " and wire it into their project without fighting assumptions baked into the kit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-greenfield-simplicity-without-claiming-universal-truth",
      children: "3. Greenfield: simplicity without claiming universal truth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Greenfield documentation may be opinionated for speed and clarity. That does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " extend a claim that the same layout is correct for every organization. Brownfield guidance remains explicit that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tradeoffs belong to the host team"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positive",
      children: "Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Clear product story: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fast onboarding"
        }), " where we own the blank slate; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "respectful integration"
        }), " where we do not."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stronger fit for senior architects who need ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "primitives and contracts"
        }), ", not a prescribed monolith."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduces tension between “framework defaults” and “tenant sovereignty” in docs and installers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "negative--follow-up",
      children: "Negative / follow-up"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installers and guides must ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "label"
        }), " greenfield vs brownfield steps and avoid implying that optional packages are mandatory for brownfield."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Brownfield tradeoffs (what we truly require vs recommend for each workflow) still need concrete matrices per framework; this ADR sets policy only."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/framework-dependency-architecture",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-dependency-architecture.md"
          })
        }), " — dependency and packaging direction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        }), " — adopt-facing entry (should reflect greenfield happy path vs brownfield modular adoption over time)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "rw-validators-consumer-layout.md"
          })
        }), " — example of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "contract-first"
        }), " integration for vendored workflow management."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration",
          children: ["E6", ":S09", " — AI Dev Kit installation and adopter integration"]
        }), " — Kanban story for FR-080–082."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
          children: "FR-080"
        }), " — delivery: end-to-end greenfield installation process."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration",
          children: "FR-081"
        }), " — delivery: brownfield modular adopter integration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment",
          children: "FR-082"
        }), " — tooling/docs: canonical GitHub repo alignment for install assets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification",
          children: "ECC ↔ ADK harness integration specification"
        }), " — optional third-party harness (MIT ECC); modular surface for greenfield and brownfield adopters (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration",
          children: "FR-098"
        }), ")."]
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