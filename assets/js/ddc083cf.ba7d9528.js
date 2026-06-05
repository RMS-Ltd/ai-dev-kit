"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["40483"], {
89168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_guides_building_persistent_knowledge_md_ddc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-guides-building-persistent-knowledge-md-ddc.json
var site_docs_knowledge_guides_building_persistent_knowledge_md_ddc_namespaceObject = JSON.parse('{"id":"knowledge/guides/building-persistent-knowledge","title":"Building Persistent Knowledge in Cursor","description":"How can you leverage Cursor\'s existing architecture to build permanent knowledge bases to increase breadth for developers?","source":"@site/../docs/knowledge/guides/building-persistent-knowledge.md","sourceDirName":"knowledge/guides","slug":"/knowledge/guides/building-persistent-knowledge","permalink":"/ai-dev-kit/docs/knowledge/guides/building-persistent-knowledge","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/guides/building-persistent-knowledge.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Badge Setup for Private Repositories","permalink":"/ai-dev-kit/docs/knowledge/guides/badge-setup-for-private-repos"},"next":{"title":"Package Maintenance and Release","permalink":"/ai-dev-kit/docs/knowledge/guides/package-maintenance-and-release"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/guides/building-persistent-knowledge.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Building Persistent Knowledge in Cursor';

const assets = {

};



const toc = [{
  "value": "GitHub Repo: cursor-knowledge",
  "id": "github-repo-cursor-knowledge",
  "level": 2
}, {
  "value": "Insight",
  "id": "insight",
  "level": 2
}, {
  "value": "Agentic Knowledge Management",
  "id": "agentic-knowledge-management",
  "level": 2
}, {
  "value": "@knowledgebuilder",
  "id": "knowledgebuilder",
  "level": 2
}, {
  "value": "@knowledge",
  "id": "knowledge",
  "level": 2
}, {
  "value": "Expansion",
  "id": "expansion",
  "level": 2
}, {
  "value": "Standard Operating Procedure (SoP): Taxonomical Standards for Structuring Knowledge",
  "id": "standard-operating-procedure-sop-taxonomical-standards-for-structuring-knowledge",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose",
  "level": 2
}, {
  "value": "Principles",
  "id": "principles",
  "level": 2
}, {
  "value": "Canonical Directory Structure",
  "id": "canonical-directory-structure",
  "level": 2
}, {
  "value": "File Naming Conventions",
  "id": "file-naming-conventions",
  "level": 2
}, {
  "value": "Versioning and Updates",
  "id": "versioning-and-updates",
  "level": 2
}, {
  "value": "Update &amp; Curation Workflow",
  "id": "update--curation-workflow",
  "level": 2
}, {
  "value": "Example Directory",
  "id": "example-directory",
  "level": 2
}, {
  "value": "Compliance",
  "id": "compliance",
  "level": 2
}, {
  "value": "Key Knowledge Artifacts",
  "id": "key-knowledge-artifacts",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "building-persistent-knowledge-in-cursor",
        children: "Building Persistent Knowledge in Cursor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How can you leverage Cursor's existing architecture to build permanent knowledge bases to increase breadth for developers?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cursor is an AI-first code editor that helps build software faster. It's an editor designed for pair programming with AI. It performs well for so many tasks, and has already improved my workflow. I found myself using the web search tool a lot across different sessions and workspaces to import external information or documentation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The issue is that its web search and indexing function is tied to individual chats or workspaces, and the results of the agentic process of searching, scraping, and indexing the webpages to build a knowledgebase is lost between sessions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agents and Multi-Agent Systems, paired with appropriate web and file tools, can enhance UX and improve cursor's breadth of capacity. The @Web search is great for small and simple tasks, but why not curate and store the more important knowledge and simply import it into workspaces for recurring tasks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Video:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.youtube.com/watch?v=wuSoM0DlXXk",
        children: "Building a Persistent Local Knowledgebase with CrewAI for Cursor (YouTube)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Transcript: not stored in this repository; use captions on the video if needed."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "github-repo-cursor-knowledge",
      children: "GitHub Repo: cursor-knowledge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/philippe-page/cursor-knowledge",
        children: "https://github.com/philippe-page/cursor-knowledge"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insight",
      children: "Insight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cursor already has a super smooth and effective indexing, vectorization and search capabilities making it possible to manage whole directories of different files with LLMs. This allows Cursor to query and examine relevant code across multiple files."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Figure: Frame 819 — screenshot from source article; image not bundled in this repo.)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Context management is a major challenge in pair-programming with AI. I think there's a huge opportunity here to build in-editor knowledge management systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agentic-knowledge-management",
      children: "Agentic Knowledge Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A multi-agent system with web search and file save capabilities would allow users to enter a query on which developer docs to search and study, and what specifically to focus on. Agents then can search the web for those docs, and scrape a few of the websites to build an understanding and save it as a local file, which can then be drawn in to a workspace and re-indexed to update the workspace with the new information in the knowledge file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Figure: Frame 126 — screenshot from source article; image not bundled in this repo.)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you ask a question across the codebase, Cursor can then see the file in its folder, and choose to read it based on its relevance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledgebuilder",
      children: "@knowledgebuilder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Figure: Frame 870 — screenshot from source article; image not bundled in this repo.)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the example video, I use this to demonstrate how to leverage Cursor to build or at least start a Crew file. Since this is recurring work I do, having this saved to my permanent files allows me to drag it into Cursor when necessary and add to the knowledge base's complexity. This enables users to bring in whatever existing research context they want whenever they need to."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledge",
      children: "@knowledge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Figure: Frame 871 — screenshot from source article; image not bundled in this repo.)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expansion",
      children: "Expansion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Programming, simply put, is really just a means to an end; people want to build! (software). Multi-agent-systems enable recursive agentic tasks to be carried out right in the editor."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Over time, the knowledgebase becomes a curated asset that each Cursor user can curate and build to match what they need to use frequently. Game devs might cultivate a deep knowledgebase on game mechanics and add to it with any new updates, where other devs may be working on a smaller project that integrates with a few less common APIs. With this setup, Cursor can just search the local knowledgebase."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Figure: Frame 820 — screenshot from source article; image not bundled in this repo.)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These can be updated and refreshed whenever, effectively forming a small agentic library system, where agents search, acquire, collect, document, save, store, as well as cull and remove outdated or incorrect information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Figure: Frame 821b — screenshot from source article; image not bundled in this repo.)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The overall idea is that these systems could be operating as a feature enabling a knowledge management system to make Cursor the smartest and best integrated code-editor that's always informed with high-quality and up to date contextual information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "his feature makes knowledge expandable and more permanent rather than ephemeral, and enables users to curate a knowledge base that is best suited to their needs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Figures: cursor_crew_graph_lg, network_lg — diagrams from source article; images not bundled in this repo.)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "standard-operating-procedure-sop-taxonomical-standards-for-structuring-knowledge",
      children: "Standard Operating Procedure (SoP): Taxonomical Standards for Structuring Knowledge"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To ensure all knowledge in the fynd.deals knowledge base is organized, discoverable, maintainable, and process-compliant, this SoP defines canonical standards for taxonomy, directory structure, file naming, and update workflows."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "principles",
      children: "Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discoverability:"
        }), " Knowledge must be easy to find via logical, hierarchical structure and standard naming."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintainability:"
        }), " Structure must support easy updates, versioning, and curation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process Compliance:"
        }), " All changes must be documented with real timestamps and rationale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separation of Concerns:"
        }), " Each directory/file should have a clear, single responsibility."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "canonical-directory-structure",
      children: "Canonical Directory Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Top-level: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/fynd_deals/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Major categories: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "debug-paths/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "use-cases/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "building-persistent-knowledge/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "templates/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "debugging/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "learning/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Subcategories: Use lowercase, hyphen-separated names (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "core-system-stability/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All directories must contain a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " describing their purpose and structure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "file-naming-conventions",
      children: "File Naming Conventions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use lowercase, hyphen-separated names (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "process-overview.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefix with context if needed (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-02-core-system-stability.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For SoPs: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sop-taxonomy.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sop-debugging.md"
        }), ", etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For templates: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "template-<purpose>.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "versioning-and-updates",
      children: "Versioning and Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Major changes require a new versioned file or a clear changelog section at the end of the file."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All edits must be timestamped (system-derived, not fabricated) and attributed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deprecated files must be clearly marked and linked to their replacements."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update--curation-workflow",
      children: "Update & Curation Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propose changes in a draft file or branch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review for compliance with this SoP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upon approval, update the canonical file and document the change in a changelog section."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Announce major taxonomy changes in the project communication channel."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "example-directory",
      children: "Example Directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "knowledge/fynd_deals/\n  epics/\n    README.md\n    epic-02-core-system-stability.md\n  building-persistent-knowledge/\n    README.md\n    sop-taxonomy.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compliance",
      children: "Compliance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All contributors must follow this SoP for any new knowledge or structural changes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-compliant files/dirs will be flagged for review and correction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-knowledge-artifacts",
      children: "Key Knowledge Artifacts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disciplined Debugging & Type Checking Workflow"
        }), " ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(legacy fynd.deals artifact; no in-corpus doc — add a guide under ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/knowledge/guides/"
          }), " if revived)"]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#standard-operating-procedure-sop-taxonomical-standards-for-structuring-knowledge",
          children: "Standard Operating Procedure (SoP): Taxonomical Standards for Structuring Knowledge"
        }), ": Canonical standards for structuring and organizing knowledge in the KB."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2025-12-18T00:00:00Z"
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