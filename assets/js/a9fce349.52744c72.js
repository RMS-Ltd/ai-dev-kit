"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["41346"], {
91579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_015_kanban_epic_story_path_lowercase_convention_md_a9f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-015-kanban-epic-story-path-lowercase-convention-md-a9f.json
var site_docs_architecture_standards_and_adrs_adr_015_kanban_epic_story_path_lowercase_convention_md_a9f_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention","title":"ADR-015: Kanban epic/story path lowercase convention","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-04T14:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-014: Repository vs abstract-space Kanban model (FR-072 Approach D)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d"},"next":{"title":"ADR-016: Install/setup error code taxonomy (ADK-*)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-04T14:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-015: Kanban epic/story path lowercase convention';

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
  "value": "Alternatives considered",
  "id": "alternatives-considered",
  "level": 2
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
        id: "adr-015-kanban-epicstory-path-lowercase-convention",
        children: "ADR-015: Kanban epic/story path lowercase convention"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-06-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " Maintainer (via E04:S19", ":T11", " / UXR-017)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming",
        children: "UXR-017"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup",
        children: "UXR-011"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/epic-story-path-migration-guide",
        children: "epic-story-path-migration-guide.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout",
        children: "BR-083"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kanban installs (including Expenses Tracker) emit ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pascal-case"
      }), " path segments (", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic-01/"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "story-01-*.md"
      }), "). Task files already use lowercase ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T01-"
      }), " slugs (UXR-011). Adopters expect ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kebab-case structural tokens"
      }), " aligned with branch naming (", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/6-…"
      }), ") and case-sensitive filesystems treat ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic-01"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic-01"
      }), " as distinct paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Write-default (new installs and new paths):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epics/epic-{nn}/epic-{nn}.md"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2-digit"
            }), " epic segment when epic ≤ 99 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-04"
            }), "); ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3-digit"
            }), " when epic > 99."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epics/epic-{nn}/story-{nn}-\\{slug\\}.md"
            }), " and matching ", (0,jsx_runtime.jsx)(_components.code, {
              children: "story-{nn}-\\{slug\\}/"
            }), " directories — same ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2-digit / >99 → 3-digit"
            }), " rule for story numbers."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task files: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T{nn}-*.md"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2-digit"
            }), " when task ≤ 99 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T01"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T11"
            }), "); ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3-digit"
            }), " when task > 99 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101+"
            }), ", perpetual UKW/CMW tasks)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Inline ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E:S:T"
            }), " tokens remain ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "UXR-014"
            }), " two-digit in prose (", (0,jsx_runtime.jsx)(_components.code, {
              children: "E04:S19:T11"
            }), "); path segments follow the rules above."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Read-tolerance (transition):"
          }), " Tooling MUST resolve ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "both"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "epic-"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "story-"
          }), " and legacy ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Epic-"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "Story-"
          }), " until the host project completes migration. Prefer lowercase when both exist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Out of scope:"
          }), " Changing H1 titles (“Epic 4” in prose); task filename prefix ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Txx-"
          }), " (UXR-011)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implementation source of truth:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/scripts/kanban_paths.py"
          }), " — patterns and resolvers consumed by kanban + workflow mgt scripts."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Phased rollout (ai-dev-kit):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave 1:"
            }), " Framework templates, install/migrate emit lowercase; validators warn on capitalised segments in adopters."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave 2:"
            }), " ai-dev-kit corpus rename + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " lowercase patterns; validator errors on capitalised segments under host ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/epics/"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternatives-considered",
      children: "Alternatives considered"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rejected because"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Keep ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "Story-"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter UX friction; case-sensitive FS drift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Big-bang global rename in one commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High blast radius without install tolerance window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Only document lowercase; no script changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install would keep emitting wrong paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Positive:"
        }), " Consistent path tokens; install/RW detection align with on-disk layout."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative:"
        }), " Large link sweep in ai-dev-kit (Wave 2); adopters must update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " or re-run migration guide."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supersedes:"
        }), " Capitalised path examples in kanban governance policy and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config-schema"
        }), " defaults (content updated in Wave 1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming",
          children: "IPP-E4S19T11"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017",
          children: ["E04:S19", ":T11"]
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