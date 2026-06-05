"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["3012"], {
86899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_reviews_pir_readme_md_218_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-reviews-pir-readme-md-218.json
var site_docs_knowledge_reviews_pir_readme_md_218_namespaceObject = JSON.parse('{"id":"knowledge/reviews/pir/README","title":"Post-Implementation Review (PIR) Reports","description":"Purpose: Central repository for all Post-Implementation Review reports for completed Epics and Stories.","source":"@site/../docs/knowledge/reviews/pir/README.md","sourceDirName":"knowledge/reviews/pir","slug":"/knowledge/reviews/pir/","permalink":"/ai-dev-kit/docs/knowledge/reviews/pir/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/reviews/pir/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-16T16:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"KB to Notion Migration Log","permalink":"/ai-dev-kit/docs/knowledge/kb-migration-log"},"next":{"title":"Post-Implementation Review: Epic 2 (TEST)","permalink":"/ai-dev-kit/docs/knowledge/reviews/pir/Epic-2/PIR-Epic-2-TEST-v0.2.5.10+1"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/reviews/pir/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-16T16:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Post-Implementation Review (PIR) Reports';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Directory Structure",
  "id": "directory-structure",
  "level": 2
}, {
  "value": "PIR Report Naming Convention",
  "id": "pir-report-naming-convention",
  "level": 2
}, {
  "value": "PIR Workflow",
  "id": "pir-workflow",
  "level": 2
}, {
  "value": "When PIR Reports Are Created",
  "id": "when-pir-reports-are-created",
  "level": 3
}, {
  "value": "PIR Report Contents",
  "id": "pir-report-contents",
  "level": 3
}, {
  "value": "Using PIR Reports",
  "id": "using-pir-reports",
  "level": 2
}, {
  "value": "Finding PIR Reports",
  "id": "finding-pir-reports",
  "level": 3
}, {
  "value": "Creating PIR Reports",
  "id": "creating-pir-reports",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "post-implementation-review-pir-reports",
        children: "Post-Implementation Review (PIR) Reports"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Central repository for all Post-Implementation Review reports for completed Epics and Stories."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Project maintainers, reviewers, and anyone conducting or referencing PIR reports"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This directory contains Post-Implementation Review (PIR) reports for completed Epics and Stories. PIR reports capture lessons learned, identify improvements, and ensure quality standards are met through systematic review of completed work."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "directory-structure",
      children: "Directory Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Reviews/pir/\n├── README.md                          # This file\n├── Epic-{N}/                          # Epic-level PIR reports\n│   ├── PIR-Epic-{N}-v{version}.md    # Individual Epic PIR reports\n│   └── ...\n└── Story-{N}/                          # Story-level PIR reports\n    ├── PIR-Story-{N}-v{version}.md    # Individual Story PIR reports\n    └── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pir-report-naming-convention",
      children: "PIR Report Naming Convention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic PIR Reports:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PIR-Epic-\\{N\\}-v{version}.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PIR-epic-02-v0.2.11.9+3.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story PIR Reports:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PIR-Story-\\{N\\}-v{version}.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PIR-story-01-v0.2.1.6+4.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses project versioning schema: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.11.9+3"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pir-workflow",
      children: "PIR Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-pir-reports-are-created",
      children: "When PIR Reports Are Created"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic-Level PIR:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger:"
            }), " Auto-triggered when Epic is marked COMPLETE"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Frequency:"
            }), " Always (every Epic receives a PIR)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Location:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/Reviews/pir/Epic-\\{N\\}/"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Story-Level PIR:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger:"
            }), " Auto-triggered when Story is marked COMPLETE (only for significant Stories)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Frequency:"
            }), " Selective (only significant Stories)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Location:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/Reviews/pir/Story-\\{N\\}/"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pir-report-contents",
      children: "PIR Report Contents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each PIR report includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Executive summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Goals assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work items review (Stories for Epic, Tasks for Story)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lessons learned (what went well, what could be improved)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Patterns and anti-patterns identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow-up actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge capture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "using-pir-reports",
      children: "Using PIR Reports"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-pir-reports",
      children: "Finding PIR Reports"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "By Epic/Story:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Navigate to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-\\{N\\}/"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Story-\\{N\\}/"
            }), " directory"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Find PIR report by version number"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "By Version:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PIR reports are named with version numbers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Search by version in file names"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "By Date:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "created_at"
            }), " in frontmatter"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sort by modification date"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-pir-reports",
      children: "Creating PIR Reports"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use Templates:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Epic PIR: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/templates/epic-pir-template.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Story PIR: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/templates/story-pir-template.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Follow Workflow:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/pir-workflow-reference.md",
              children: "PIR Workflow Reference (source)"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Analysis/PIR-workflow-planning.md",
              children: "PIR Workflow Planning (source)"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Link to Work Items:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link PIR report to Epic/Story document (bidirectional)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reference version numbers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create follow-up Kanban tasks from findings"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Analysis/PIR-workflow-planning.md",
          children: "PIR Workflow Planning (source)"
        }), " - Complete planning document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/pir-workflow-reference.md",
          children: "PIR Workflow Reference (source)"
        }), " - Workflow reference (when available)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/templates/epic-pir-template",
          children: "Epic PIR template"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/templates/story-pir-template",
          children: "Story PIR template"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md",
          children: "Release Workflow (source)"
        }), " - RW integration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This directory is part of the Knowledge Base. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/README.md"
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