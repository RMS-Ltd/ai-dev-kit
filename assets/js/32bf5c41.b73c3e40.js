"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["51634"], {
87168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_guides_readme_md_32b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-guides-readme-md-32b.json
var site_docs_knowledge_guides_readme_md_32b_namespaceObject = JSON.parse('{"id":"knowledge/guides/README","title":"Knowledge Base Guides","description":"Purpose: How-to guides, tutorials, and Standard Operating Procedures (SoPs) for framework usage and best practices.","source":"@site/../docs/knowledge/guides/README.md","sourceDirName":"knowledge/guides","slug":"/knowledge/guides/","permalink":"/ai-dev-kit/docs/knowledge/guides/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/guides/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-16T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Building Better Templates: How We Solved the 300-Template Problem with a Hybrid Approach","permalink":"/ai-dev-kit/docs/knowledge/articles/hybrid-task-template-system-building-better-templates"},"next":{"title":"Badge Setup for Private Repositories","permalink":"/ai-dev-kit/docs/knowledge/guides/badge-setup-for-private-repos"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/guides/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-16T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Knowledge Base Guides';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Standard Operating Procedures (SoPs)",
  "id": "standard-operating-procedures-sops",
  "level": 2
}, {
  "value": "Task Management &amp; Cross-Wiring",
  "id": "task-management--cross-wiring",
  "level": 3
}, {
  "value": "Bug Report &amp; Feature Request Management",
  "id": "bug-report--feature-request-management",
  "level": 3
}, {
  "value": "Framework Usage Guides",
  "id": "framework-usage-guides",
  "level": 2
}, {
  "value": "Package Management",
  "id": "package-management",
  "level": 3
}, {
  "value": "Knowledge Management",
  "id": "knowledge-management",
  "level": 3
}, {
  "value": "Repository Setup",
  "id": "repository-setup",
  "level": 3
}, {
  "value": "How to Use This Section",
  "id": "how-to-use-this-section",
  "level": 2
}, {
  "value": "Finding Guides",
  "id": "finding-guides",
  "level": 3
}, {
  "value": "Creating Guides",
  "id": "creating-guides",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "knowledge-base-guides",
        children: "Knowledge Base Guides"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " How-to guides, tutorials, and Standard Operating Procedures (SoPs) for framework usage and best practices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Developers, project managers, framework users, AI agents"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section contains practical guides and Standard Operating Procedures (SoPs) for using the AI Dev Kit framework, managing projects, and following best practices. Guides are organized by topic and provide step-by-step instructions for common tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "standard-operating-procedures-sops",
      children: "Standard Operating Procedures (SoPs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SoPs define standardized processes and procedures for consistent execution of workflows and tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-management--cross-wiring",
      children: "Task Management & Cross-Wiring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/task-template-cross-wiring-sop",
            children: "Task Template Cross-Wiring SoP"
          })
        }), " - Standard procedure for cross-wiring tasks, emphasizing bidirectional linking and contextual relationships between interconnected tasks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bug-report--feature-request-management",
      children: "Bug Report & Feature Request Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/mixed-br-fr-scope-sop",
            children: "Mixed BR/FR Scope Handling SoP"
          })
        }), " - Standard procedure for handling mixed-scope Bug Reports and Feature Requests, including when to split documents and how to maintain traceability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-usage-guides",
      children: "Framework Usage Guides"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "package-management",
      children: "Package Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/package-maintenance-and-release",
            children: "Package Maintenance and Release"
          })
        }), " - Guide for maintaining and releasing packages in the framework."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "knowledge-management",
      children: "Knowledge Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/guides/building-persistent-knowledge",
            children: "Building Persistent Knowledge"
          })
        }), " - Guide for building and maintaining persistent knowledge bases in Cursor."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repository-setup",
      children: "Repository Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/guides/badge-setup-for-private-repos",
            children: "Badge Setup for Private Repos"
          })
        }), " - Guide for setting up badges in private repositories."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-this-section",
      children: "How to Use This Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-guides",
      children: "Finding Guides"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "By Topic:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task Management: Check SoP section"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Package Management: Check Framework Usage Guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Knowledge Management: Check Framework Usage Guides"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "By Type:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SoPs: Standard Operating Procedures (process definitions)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Guides: How-to guides and tutorials"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-guides",
      children: "Creating Guides"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "SoP Document:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Follow naming convention: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[topic]-sop.md"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[topic]-[descriptive-name]-sop.md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include lifecycle metadata (evergreen recommended)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link from this README"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reference from related FR/BR documents"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Usage Guide:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/knowledge/guides/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Follow naming convention: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[topic]-[descriptive-title].md"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include lifecycle metadata"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link from this README"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide step-by-step instructions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture Standards:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/"
        }), " - All SoP documents and ADRs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Requests:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/"
        }), " - FRs that may reference SoPs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Templates:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/"
        }), " - Templates that implement SoP guidance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This section is part of the Knowledge Base. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/knowledge/README.md"
        }), " for complete KB structure."]
      })
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