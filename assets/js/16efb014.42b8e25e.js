"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["67107"], {
21097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_index_md_16e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-index-md-16e.json
var site_docs_project_management_kanban_index_md_16e_namespaceObject = JSON.parse('{"id":"project-management/kanban/_index","title":"AI Dev Kit – Kanban Board (Quick View)","description":"Last Updated: 2025-12-18","source":"@site/../docs/project-management/kanban/_index.md","sourceDirName":"project-management/kanban","slug":"/project-management/kanban/_index","permalink":"/ai-dev-kit/docs/project-management/kanban/_index","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/_index.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:02:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Kanban Workflow Agents","permalink":"/ai-dev-kit/docs/project-management/kanban/AGENTS"},"next":{"title":"Epic 1: AI Dev Kit Core","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/_index.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:02:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'AI Dev Kit – Kanban Board (Quick View)';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Epics Summary",
  "id": "epics-summary",
  "level": 2
}, {
  "value": "How to Add Work",
  "id": "how-to-add-work",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "ai-dev-kit--kanban-board-quick-view",
        children: "AI Dev Kit – Kanban Board (Quick View)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.6.6.7+6"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Epics 1, 3 are COMPLETE ✅. Epics 2, 4, 5, 6, 7, 8, 21 are IN PROGRESS or TODO. ", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["(Epic 24 book work: private ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit-book"
        }), " — see ADR-006.)"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quick reference board for all Kanban work. For detailed views, see:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), " (MoSCOW prioritized tasks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-structure",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-structure.md"
          })
        }), " (Epic/Story/Task structure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-board-guide",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban-board-guide.md"
          })
        }), " (rules and explanations)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      }), " All Kanban docs live under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic overviews: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/Epic-X.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story documents: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-X/Story-XXX-*.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board views: This file (quick), kboard.md (tasks), kanban-structure.md (epics), and kanban-board-guide.md (guide)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "epics-summary",
      children: "Epics Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Epic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Title"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stories"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Progress"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI Dev Kit Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPLETE ✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow Management Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IN PROGRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7/11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbering & Versioning Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPLETE ✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IN PROGRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10/13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentation Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IN PROGRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPLETE ✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Codebase Maintenance and Review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IN PROGRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling & Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TODO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internationalization and Localization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TODO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Docs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/epic-01/epic-01.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/epic-02/epic-02.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/epic-03/epic-03.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/epic-04/epic-04.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/epic-05/epic-05.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/epic-06/epic-06.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/epic-07/epic-07.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-08/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/epic-08/epic-08.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-21/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epics/epic-21/Epic-21.md"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-add-work",
      children: "How to Add Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Epic"
          }), " (if needed):"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Epic-X.md"
            }), " (Epic overview)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update this board (", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            }), "), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-structure.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Story"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Story-XXX-short-slug.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update Epic doc (", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-X/Epic-X.md"
            }), ") with Story reference"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update this board (", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            }), "), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-structure.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Track Progress"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Story status in Story doc"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Epic doc with version markers as work completes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update board views as needed"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })
      }), " for full structure details and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
      }), " for governance."]
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