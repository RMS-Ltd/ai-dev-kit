"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["84773"], {
21421(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_agent_index_md_ad1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-agent-index-md-ad1.json
var site_docs_project_agent_index_md_ad1_namespaceObject = JSON.parse('{"id":"project-agent-index","title":"Project agent index (human bootstrap mirror)","description":"Machine contract project-agent-manifest.schema.json · ADR: ADR-012","source":"@site/../docs/project-agent-index.md","sourceDirName":".","slug":"/project-agent-index","permalink":"/ai-dev-kit/docs/project-agent-index","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-agent-index.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T21:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-agent-index.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T21:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Project agent index (human bootstrap mirror)';

const assets = {

};



const toc = [{
  "value": "Read order (cold start)",
  "id": "read-order-cold-start",
  "level": 2
}, {
  "value": "Tracks (summary)",
  "id": "tracks-summary",
  "level": 2
}, {
  "value": "Anti-patterns (do not cold-load)",
  "id": "anti-patterns-do-not-cold-load",
  "level": 2
}, {
  "value": "Validate manifest",
  "id": "validate-manifest",
  "level": 2
}, {
  "value": "Maintenance",
  "id": "maintenance",
  "level": 2
}, {
  "value": "Cold-start verification",
  "id": "cold-start-verification",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "project-agent-index-human-bootstrap-mirror",
        children: "Project agent index (human bootstrap mirror)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Machine contract:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(17870)/* ["default"] */.A) + "",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "project-agent-manifest.json"
        })
      }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(15759)/* ["default"] */.A) + "",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "project-agent-manifest.schema.json"
        })
      }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing",
        children: "ADR-012"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "read-order-cold-start",
      children: "Read order (cold start)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One step for agents:"
      }), " read repo-root ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        })
      }), " through the ascertainment rule. Routing, keywords, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "loadFirst"
      }), ", binding rules, and open-work snapshot live there — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " in a second manifest read."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(17870)/* ["default"] */.A) + "",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "project-agent-manifest.json"
        })
      }), " is the machine mirror for validators and automation. Keep it aligned when editing the routing table in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AGENTS.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Skip triage when the operator provides:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Track: <id> | File: <path> | Task: E##:S##:T##"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tracks-summary",
      children: "Tracks (summary)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Track ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Label"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Entry"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflows"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW, UKW, IPW, CMW, PVW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
              children: "Workflow cheatsheet"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boards + intake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/kboard",
              children: "kboard.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "governance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policies + ADRs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/governance/",
              children: "docs/governance/README.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "frameworks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packaged frameworks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/README.md",
              children: "workflow mgt README"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "planning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW / IPP / ICW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ipw.md",
              children: ".claude/commands/ipw.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "meta"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bootstrap architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing",
              children: "ADR-012"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Full routing table: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        })
      }), " § Task routing (mirror: manifest ", (0,jsx_runtime.jsx)(_components.code, {
        children: "taskRouting[]"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "anti-patterns-do-not-cold-load",
      children: "Anti-patterns (do not cold-load)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Entire ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CHANGELOG.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CHANGELOG.md"
          })
        }), " archive tree or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/"
        }), " unless doing changelog work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "journals",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/journals/"
          })
        }), " unless forensic/RW recovery is routed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Full ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fbuboard.md"
          })
        }), " MoSCOW scan unless kanban/FBU track matched."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent transcripts or plan folders outside the repo."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Full ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          })
        }), " ingest before reading ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AGENTS.md"
          })
        }), " — load workflow sections when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows"
        }), " track matches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(17870)/* ["default"] */.A) + "",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "project-agent-manifest.json"
          })
        }), " on cold start (routing is in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validate-manifest",
      children: "Validate manifest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Syntax\npython3 -m json.tool docs/project-agent-manifest.json > /dev/null\n\n# Schema (requires jsonschema: pip install jsonschema)\npython3 -c \"\nimport json\nfrom pathlib import Path\ntry:\n    import jsonschema\nexcept ImportError:\n    raise SystemExit('pip install jsonschema')\nmanifest = json.loads(Path('docs/project-agent-manifest.json').read_text())\nschema = json.loads(Path('docs/project-agent-manifest.schema.json').read_text())\njsonschema.validate(manifest, schema)\nprint('OK')\n\"\n\n# Path existence (from repo root)\npython3 scripts/validate-project-agent-manifest-paths.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintenance",
      children: "Maintenance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Manifest section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to update"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "introduction"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protocol"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "taskRouting"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tracks"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Edit JSON in PR; keep aligned with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            }), " track table"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "canon[]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "openWork[]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual curation v1; generator deferred (FR-103)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When adding a recurring operator workflow, add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "taskRouting[]"
      }), " row within one week (ADR-012)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cold-start-verification",
      children: "Cold-start verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/guides/agent-cold-start-checklist",
        children: "agent-cold-start-checklist.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing",
          children: "FR-103"
        }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103",
          children: ["E02:S16", ":T17"]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/AGENTS",
          children: "Kanban workflow agents"
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
17870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/project-agent-manifest-a0f9c386dfdd0d9a41f56c23f1217428.json");

},
15759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/project-agent-manifest.schema-d4e947cd787203345c3504a14dd8cf8b.json");

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