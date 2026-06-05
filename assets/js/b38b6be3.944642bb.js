"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["8449"], {
14890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_readme_md_b38_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-readme-md-b38.json
var site_docs_maintenance_readme_md_b38_namespaceObject = JSON.parse('{"id":"maintenance/README","title":"Maintainer Runbooks","description":"Operational guides for building and publishing framework packages. Not for adopters — these are for ai-dev-kit maintainers and CI.","source":"@site/../docs/maintenance/README.md","sourceDirName":"maintenance","slug":"/maintenance/","permalink":"/ai-dev-kit/docs/maintenance/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Build Framework Packages - Ready to Execute","permalink":"/ai-dev-kit/docs/maintenance/BUILD_PACKAGES_COMMANDS"},"next":{"title":"Upload Framework Packages to GitHub Releases","permalink":"/ai-dev-kit/docs/maintenance/UPLOAD_PACKAGES"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/README.md


const frontMatter = {};
const contentTitle = 'Maintainer Runbooks';

const assets = {

};



const toc = [{
  "value": "Guides",
  "id": "guides",
  "level": 2
}, {
  "value": "Release Automation Resources",
  "id": "release-automation-resources",
  "level": 2
}, {
  "value": "See also",
  "id": "see-also",
  "level": 2
}, {
  "value": "🚨 Critical Policy",
  "id": "-critical-policy",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "maintainer-runbooks",
        children: "Maintainer Runbooks"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Operational guides for building and publishing framework packages. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not for adopters"
      }), " — these are for ai-dev-kit maintainers and CI."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All commands assume you are in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "project root"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "guides",
      children: "Guides"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Document"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/release-runbook",
              children: "Release Runbook"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NEW"
            }), " Comprehensive release procedures with exact commands for both registry and task-touch SemVer modes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/BUILD_AND_UPLOAD",
              children: "BUILD_AND_UPLOAD.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end: build → tag → upload to GitHub Releases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/BUILD_PACKAGES",
              children: "BUILD_PACKAGES.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build quick start and individual package commands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/BUILD_PACKAGES_COMMANDS",
              children: "BUILD_PACKAGES_COMMANDS.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-paste command reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/UPLOAD_PACKAGES",
              children: "UPLOAD_PACKAGES.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upload to GitHub Releases (prereqs, scripts, troubleshooting)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release-automation-resources",
      children: "Release Automation Resources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Document"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/release-quick-reference",
              children: "Release Quick Reference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-page command summaries for common release scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/release-checklist-templates",
              children: "Release Checklist Templates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Printable pre/post release checklists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/release-configuration-examples",
              children: "Release Configuration Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample rw-config.yaml files for different scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/release-integration-guides",
              children: "Release Integration Guides"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions and CI/CD pipeline integration examples"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "see-also",
      children: "See also"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/analysis/phase3-package-distribution-plan",
          children: "Phase 3 package distribution plan"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework scripts: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/"
        }), " (build_package.py, upload_all_packages.py, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Release Workflow documentation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-critical-policy",
      children: "🚨 Critical Policy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NEVER use manual git commit/push commands!"
      }), " Always use Release Workflow (RW) automation for all release operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy:"
        }), " \"No manual commit/push\" - use RW automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Command:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " (triggers full 17-step release workflow)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/release-runbook",
          children: "Release Runbook"
        }), " for complete procedures"]
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