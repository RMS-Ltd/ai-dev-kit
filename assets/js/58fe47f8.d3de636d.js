"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["74675"], {
25188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_articles_readme_md_58f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-articles-readme-md-58f.json
var site_docs_knowledge_articles_readme_md_58f_namespaceObject = JSON.parse('{"id":"knowledge/articles/README","title":"Articles","description":"Purpose: In-depth blog posts, articles, and comprehensive write-ups on framework topics, patterns, and lessons learned.","source":"@site/../docs/knowledge/articles/README.md","sourceDirName":"knowledge/articles","slug":"/knowledge/articles/","permalink":"/ai-dev-kit/docs/knowledge/articles/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/articles/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-22T10:50:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Workflow Structure Analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/workflow-structure-analysis"},"next":{"title":"Scaling long-running autonomous coding","permalink":"/ai-dev-kit/docs/knowledge/articles/cursor-scaling-long-running-autonomous-coding-agents"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/articles/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-22T10:50:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Articles';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Articles",
  "id": "articles-1",
  "level": 2
}, {
  "value": "Internal Articles",
  "id": "internal-articles",
  "level": 3
}, {
  "value": "Hybrid Task Template System",
  "id": "hybrid-task-template-system",
  "level": 4
}, {
  "value": "External Sources",
  "id": "external-sources",
  "level": 3
}, {
  "value": "Multi-Agent Coordination Research",
  "id": "multi-agent-coordination-research",
  "level": 4
}, {
  "value": "Article Guidelines",
  "id": "article-guidelines",
  "level": 2
}, {
  "value": "When to Create an Article",
  "id": "when-to-create-an-article",
  "level": 3
}, {
  "value": "Article Structure",
  "id": "article-structure",
  "level": 3
}, {
  "value": "Naming Convention",
  "id": "naming-convention",
  "level": 3
}, {
  "value": "Lifecycle Metadata",
  "id": "lifecycle-metadata",
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
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "articles",
        children: "Articles"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " In-depth blog posts, articles, and comprehensive write-ups on framework topics, patterns, and lessons learned."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Framework users, maintainers, developers, technical writers"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This directory contains comprehensive articles and blog-style posts covering:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework design decisions and rationale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation stories and lessons learned"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical deep-dives and patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best practices and anti-patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world case studies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "articles-1",
      children: "Articles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "internal-articles",
      children: "Internal Articles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hybrid-task-template-system",
      children: "Hybrid Task Template System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/articles/hybrid-task-template-system-building-better-templates",
            children: "Building Better Templates: How We Solved the 300-Template Problem with a Hybrid Approach"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Published:"
            }), " 2025-12-22"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Version:"
            }), " v0.4.15.5+1"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic:"
            }), " E4 (Kanban Framework)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Story:"
            }), " S15 (Procedural Task Template Generation and Hybrid Strategy)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Summary:"
            }), " Comprehensive deep-dive into solving template management at scale, balancing quality with maintainability through a hybrid approach combining concrete templates with procedural generation."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "external-sources",
      children: "External Sources"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "multi-agent-coordination-research",
      children: "Multi-Agent Coordination Research"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/articles/cursor-scaling-long-running-autonomous-coding-agents",
            children: "Scaling long-running autonomous coding"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Published:"
            }), " 2026-01-14"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Author:"
            }), " Wilson Lin (Cursor)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Source:"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://cursor.com/blog/scaling-agents",
              children: "cursor.com/blog/scaling-agents"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Summary:"
            }), " Research findings from Cursor's experiments with hundreds of concurrent agents working on large-scale projects. Covers planner/worker architecture, coordination mechanisms, model selection, and lessons learned from running agents for weeks on ambitious projects (browser from scratch, Solid→React migration, etc.)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Related:"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-031-multi-agent-coordination-feasibility-investigation",
              children: "FR-031: Multi-Agent Coordination Feasibility Investigation"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "article-guidelines",
      children: "Article Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-create-an-article",
      children: "When to Create an Article"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create an article when you have:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A comprehensive story to tell about a framework feature or decision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lessons learned worth sharing broadly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical deep-dives that go beyond standard documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world case studies with valuable insights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "article-structure",
      children: "Article Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Articles should include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Engaging title and introduction"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem statement"
        }), " (what challenge was being solved)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Journey/analysis"
        }), " (how the problem was approached)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution"
        }), " (what was implemented)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Benefits and trade-offs"
        }), " (what worked, what didn't)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lessons learned"
        }), " (key takeaways)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "References"
        }), " (links to related documentation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "naming-convention",
      children: "Naming Convention"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use kebab-case: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[topic]-[descriptive-title].md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be descriptive and searchable"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hybrid-task-template-system-building-better-templates.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "framework-adoption-lessons-learned.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-schema-evolution-deep-dive.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lifecycle-metadata",
      children: "Lifecycle Metadata"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Articles are typically ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "evergreen"
      }), " (permanent documentation):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: evergreen"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days: null"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy: keep"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/knowledge/",
          children: "Knowledge Base README"
        }), " - Complete KB structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/knowledge/analysis/meta-analysis-executive-summary",
          children: "Analysis Documents"
        }), " - Analysis reports and investigations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/knowledge/guides/",
          children: "Guides"
        }), " - How-to guides and tutorials"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/knowledge/use-cases/discovered/",
          children: "Use Cases"
        }), " - Discovered use cases (see also ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/use-cases/canonical/",
          children: "architecture canonical use cases"
        }), ")"]
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