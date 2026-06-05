"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["3610"], {
31025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_014_repository_abstract_space_fr_072_approach_d_md_fc0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-014-repository-abstract-space-fr-072-approach-d-md-fc0.json
var site_docs_architecture_standards_and_adrs_adr_014_repository_abstract_space_fr_072_approach_d_md_fc0_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d","title":"ADR-014: Repository vs abstract-space Kanban model (FR-072 Approach D)","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-01T18:35:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-013: IDE command allowlist catalog and enforcement","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement"},"next":{"title":"ADR-015: Kanban epic/story path lowercase convention","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-01T18:35:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-014: Repository vs abstract-space Kanban model (FR-072 Approach D)';

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
  "value": "S00 / repository table (ai-dev-kit)",
  "id": "s00--repository-table-ai-dev-kit",
  "level": 2
}, {
  "value": "Migration phases (Approach D)",
  "id": "migration-phases-approach-d",
  "level": 2
}, {
  "value": "Redirect table (representative)",
  "id": "redirect-table-representative",
  "level": 2
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Compliance",
  "id": "compliance",
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
        id: "adr-014-repository-vs-abstract-space-kanban-model-fr-072-approach-d",
        children: "ADR-014: Repository vs abstract-space Kanban model (FR-072 Approach D)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-06-01", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " Maintainer (via E04:S19", ":T08", ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules",
        children: "FR-072"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-021-fr-br-uxr-repository-stories",
        children: "FR-021"
      }), " (superseded for new intake), ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/governance/standards/dev-kit-versioning-policy",
        children: "dev-kit-versioning-policy.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Epic 5, 6, and 7 used ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story 0"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repository stories"
      }), " inconsistently. FR-021 introduced dedicated FR/BR/UXR repo stories; FR-072 selects ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach D"
      }), ": phased migration to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S00 abstract-only"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "semantic delivery-story"
      }), " intake without mass coordinate renumbering."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["E7", ":S00", " detasking (", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T10-e7-s00-detasking-abstract-space-enforcement-br076",
        children: ["E04:S19", ":T10"]
      }), ") completed the E7 slice. ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E04:S19", ":T08"]
      }), " completes D2–D4 globally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S00"
        }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "abstract space only"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.\\{epic\\}.0.0+0"
        }), ") — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no concrete tasks"
        }), " on any epic’s S00 story."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E5", ":S01"]
        }), " (CLOSED), ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6", ":S01"]
        }), " (and former E7", ":S00", " registry paths) are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "historical registries"
        }), " — valid forensic anchors, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " primary homes for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "new"
        }), " intake."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New intake"
        }), " (FR-072 D2): primary implementing tasks MUST be filed under the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "semantic delivery story"
        }), " (KG-R6). Optional numeric symmetry (FR-047 → T47) is not required."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-021"
        }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "superseded for new intake"
        }), "; historical 1:1 repo-story mapping remains linkable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validators and RW"
        }), " accept ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "legacy repository coordinates"
        }), " as historical-valid; they must not ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "require"
        }), " new work on repository stories."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "s00--repository-table-ai-dev-kit",
      children: "S00 / repository table (ai-dev-kit)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Epic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "S00"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Repository / registry story"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New intake primary task"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-00-fr-repo",
              children: "story-00-fr-repo"
            }), " abstract"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo",
              children: "story-01-fr-repo"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CLOSED"
            }), " historical"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Delivery epic/story (e.g. E4, E5", ":S09", ", E6, E7", ":S01", ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "story-000 abstract"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-01-br-repo",
              children: "story-01-br-repo"
            }), " historical"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delivery epic/story"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo",
              children: "story-00-uxr-repo"
            }), " abstract"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T01–T06 under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "story-00-uxr-repo/"
            }), " historical only"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E7", ":S01", ", E7", ":S05", ", host epic story"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-phases-approach-d",
      children: "Migration phases (Approach D)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "This repo"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical model published"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-072 decision memo + this ADR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic intake cutover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake skill, FR_BR_INTAKE_GUIDE, KG-R6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical labeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "story-001 / story-000 banners, T72/T21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator/workflow alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW/UKW guides, versioning policy § S00"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "redirect-table-representative",
      children: "Redirect table (representative)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy anchor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary delivery / notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S01", ":T72"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-072 registry task"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E04:S19", ":T08"]
            }), " implements FR-072"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "(retired)"
            }), " E05:S01", ":T76"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deleted — never use"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E05:S09", ":T12"]
            }), " (UXR-018 changelog pillar + portal IA)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S01", ":T21"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-021 registry"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E04:S19", ":T07"]
            }), " merged into ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T08"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E07:S00", ":T01", "–T06"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR registry anchors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical; see story-00-uxr-repo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E07:S00", ":T05", " (UXR-005)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split registry"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E07:S01", ":T09"]
            }), " implementing"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open FBUs on fbuboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active work"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Semantic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E:S:T"
            }), " on row (2026-05-29 batch + T08)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Full FR-level history remains on each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr-br/*.md"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task"
      }), " line; completed FRs may still cite ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E05:S01:Tnn"
      }), " as historical registry coordinates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Positive:"
        }), " One place to answer “What is S00?”; adopters get phased migration without Epic 7 renumbering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative:"
        }), " Mixed coordinates during transition; grep audits required for open board rows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow-on:"
        }), " Optional automated S00 intake validator (not in T08)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compliance",
      children: "Compliance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Intake: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md",
          children: ".cursor/skills/intake-process/SKILL.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md",
          children: "FR_BR_INTAKE_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IPP: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S19T08-fr072-approach-d-d2-d4-migration-and-doc-sweep",
          children: "IPP-E4S19T8"
        })]
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