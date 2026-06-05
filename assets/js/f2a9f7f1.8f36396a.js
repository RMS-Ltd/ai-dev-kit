"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["58200"], {
2040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_021_greenfield_install_ghcr_delivery_channel_md_f2a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-021-greenfield-install-ghcr-delivery-channel-md-f2a.json
var site_docs_architecture_standards_and_adrs_adr_021_greenfield_install_ghcr_delivery_channel_md_f2a_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel","title":"ADR-021: Greenfield lean tree delivery via GitHub Container Registry","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-020: Kanban row-transform entrypoint contract + rw_config_loader unification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification"},"next":{"title":"ADR: OpenClaw process sentinel skill (agent orphan detection)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-openclaw-process-sentinel-skill"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-021: Greenfield lean tree delivery via GitHub Container Registry';

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
  "value": "1. Primary registry channel: <code>ghcr.io</code>",
  "id": "1-primary-registry-channel-ghcrio",
  "level": 3
}, {
  "value": "2. Tag alignment",
  "id": "2-tag-alignment",
  "level": 3
}, {
  "value": "3. Publish integrity (single pipeline)",
  "id": "3-publish-integrity-single-pipeline",
  "level": 3
}, {
  "value": "4. Dual-publish (optional FR-110-F5)",
  "id": "4-dual-publish-optional-fr-110-f5",
  "level": 3
}, {
  "value": "5. Visibility",
  "id": "5-visibility",
  "level": 3
}, {
  "value": "6. Adopter extract flow",
  "id": "6-adopter-extract-flow",
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
        id: "adr-021-greenfield-lean-tree-delivery-via-github-container-registry",
        children: "ADR-021: Greenfield lean tree delivery via GitHub Container Registry"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E06:S09", ":T23", " / UXR-021"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The lean adopter tree (", (0,jsx_runtime.jsx)(_components.code, {
        children: "greenfield-install/"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle",
        children: "FR-110"
      }), ") is validated by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sync_greenfield_install.py --check"
      }), " and CI smoke. Adopters today acquire it via sparse submodule or manual copy (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
        children: "INSTALL_IN_YOUR_PROJECT.md"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-021-greenfield-install-github-packages-delivery-channel",
        children: "UXR-021"
      }), " identified teams that block submodules or lack git in deploy images. GitHub Packages (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ghcr.io"
      }), ") can surface versioned artifacts without changing the lean layout contract: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vendor/ai-dev-kit/"
      }), " = contents of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "greenfield-install/"
      }), " at a pinned version."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alternatives considered:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["OCI container (", (0,jsx_runtime.jsx)(_components.code, {
                children: "ghcr.io"
              }), ")"]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docker pull"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docker cp"
            }), "; semver tags; Packages tab discoverability"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires Docker in adopter CI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "npm static package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node-native teams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong primary ecosystem; extra wrapper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Release tarball only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No registry account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No Packages tab; overlaps FR-062 per-slug assets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1-primary-registry-channel-ghcrio",
      children: ["1. Primary registry channel: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ghcr.io"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Publish ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ghcr.io/rms-ltd/ai-dev-kit-greenfield"
        })
      }), " (lowercase org per GHCR rules) containing the CI-validated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "greenfield-install/"
      }), " tree at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "/opt/adk/"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build context is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "greenfield-install/"
      }), " directory; Dockerfile lives at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "greenfield-install/Dockerfile"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-tag-alignment",
      children: "2. Tag alignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image tags use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "external SemVer core"
      }), " from RW ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_touch"
      }), " primary tags (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.963"
      }), " → image tag ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.963"
      }), "). Internal traceability tags (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.6.9.23+*"
      }), ") do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " trigger publish workflows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-publish-integrity-single-pipeline",
      children: "3. Publish integrity (single pipeline)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release publish runs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "only after"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sync_greenfield_install.py --check"
      }), " passes. No maintainer hand-built images or secondary content pipeline."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Workflow trigger: SemVer core tag push matching ", (0,jsx_runtime.jsx)(_components.code, {
        children: "^v[0-9]+\\.[0-9]+\\.[0-9]+$"
      }), " (excludes framework slug tags like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow-mgt-v2.0.0"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-dual-publish-optional-fr-110-f5",
      children: "4. Dual-publish (optional FR-110-F5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["From the same validated tree, optionally upload ", (0,jsx_runtime.jsx)(_components.code, {
        children: "greenfield-install-v{semver}.tar.gz"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".sha256"
      }), " to the GitHub Release for the tag. Submodule/copy remain the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "documented default"
      }), "; registry and tarball are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "alternate"
      }), " acquisition paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-visibility",
      children: "5. Visibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Package visibility defaults to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "public"
      }), " so anonymous ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker pull"
      }), " works for open-source adopters. Org admins may override; install docs note visibility requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-adopter-extract-flow",
      children: "6. Adopter extract flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker pull ghcr.io/rms-ltd/ai-dev-kit-greenfield:v0.4.963\ncid=$(docker create ghcr.io/rms-ltd/ai-dev-kit-greenfield:v0.4.963)\ndocker cp \"$cid:/opt/adk/.\" vendor/ai-dev-kit/\ndocker rm \"$cid\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_greenfield_path.py"
      }), " from the host project root as today."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Positive:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transport-agnostic lean contract preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semver-pinned acquisition for constrained CI environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages tab discoverability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drift gate prevents publishing stale trees"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Negative:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintainers need ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages: write"
        }), " on tag workflows"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adopters need Docker for this path"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Additional CI job (container smoke) on PRs touching greenfield paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-021-greenfield-install-github-packages-delivery-channel",
          children: "UXR-021"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle",
          children: "FR-110"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/package-management-design",
          children: "package-management-design.md"
        }), " — Releases primary; registry as complementary layer"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T23-greenfield-install-github-packages-delivery-uxr021",
          children: "IPP-E06S09T23"
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