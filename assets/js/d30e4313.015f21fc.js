"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["955"], {
75604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_013_ide_command_allowlist_catalog_and_enforcement_md_d30_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-013-ide-command-allowlist-catalog-and-enforcement-md-d30.json
var site_docs_architecture_standards_and_adrs_adr_013_ide_command_allowlist_catalog_and_enforcement_md_d30_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement","title":"ADR-013: IDE command allowlist catalog and enforcement","description":"Version 0.0.1","source":"@site/../docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T23:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-012: Agent bootstrap and task routing","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing"},"next":{"title":"ADR-014: Repository vs abstract-space Kanban model (FR-072 Approach D)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T23:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-013: IDE command allowlist catalog and enforcement';

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
  "value": "Security rules",
  "id": "security-rules",
  "level": 3
}, {
  "value": "Portability",
  "id": "portability",
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
  "value": "Negative",
  "id": "negative",
  "level": 3
}, {
  "value": "Compliance",
  "id": "compliance",
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
        id: "adr-013-ide-command-allowlist-catalog-and-enforcement",
        children: "ADR-013: IDE command allowlist catalog and enforcement"
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
            children: "Initial decision — catalog + validator + Cursor maintainer playbook; BR-039 boundary."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-05-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " User (Ruari Mears)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization",
        children: ["E06:S07", ":T107"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning package:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization",
        children: "IPP-E6S7T107"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker",
        children: "BR-039"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/developer-tools/ide-whitelist-guide",
        children: "ide-whitelist-guide.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/whitelist-patterns.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maintainers run ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UKW"
      }), ", and validation scripts through Cursor agents. Cursor stores ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "concrete"
      }), " approved commands; small changes (paths, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--requested"
      }), " values, version strings in tags) trigger repeated approval prompts. A draft pattern catalog existed without product integration or automated proof that patterns were coherent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker",
        children: "BR-039"
      }), " tracks ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vendor"
      }), " whitelist failures (Cascade/Windsurf). That is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "orthogonal"
      }), " to this ADR."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopt a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "three-layer enforcement model"
      }), " for ai-dev-kit (Cursor-primary):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Catalog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Version-controlled regex SoT with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "examples"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "negative_examples"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_whitelist_patterns.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/local check that patterns compile and examples match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Playbook"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-guide.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["How maintainers map patterns into ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cursor Settings → Auto-Run / command allowlist"
            }), " (manual; product does not load YAML automatically)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Catalog only"
        }), " — rejected: no regression signal when patterns drift from RW commands."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hook automation"
        }), " — deferred: no stable Cursor hook API documented for auto-approval from YAML at implementation time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vendor fix only (BR-039)"
        }), " — insufficient for Cursor maintainer workflows."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-rules",
      children: "Security rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No unbounded ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^.*$"
        }), " patterns in the catalog."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Destructive operations (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rm"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push --force"
        }), ") are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " pre-approved via broad git patterns; document explicit review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{PROJECT_ROOT}"
        }), " placeholder instead of maintainer-specific absolute paths in committed YAML."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "portability",
      children: "Portability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopters may copy ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/whitelist-patterns.yaml"
      }), " and substitute ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{PROJECT_ROOT}"
      }), "; run the validator from repo root."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positive",
      children: "Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeatable RW/UKW command shapes documented and testable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Honest boundary with BR-039 (repo vs product)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "negative",
      children: "Negative"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintainers must still configure Cursor allowlist UI manually until product supports pattern import."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regex maintenance cost when script paths change."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compliance",
      children: "Compliance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New terminal-heavy tasks should add patterns + examples to the catalog and run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_whitelist_patterns.py"
        }), " before release."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog language for IDE behavior: “attempted” / “change implemented” until maintainer confirms prompt reduction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization",
          children: "IPP-E6S7T107"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization",
          children: "T107"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist.md"
        }), " — §2.5 REQUIRED for T107"]
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