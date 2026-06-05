"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["90401"], {
31389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_016_install_setup_error_code_taxonomy_md_bb3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-016-install-setup-error-code-taxonomy-md-bb3.json
var site_docs_architecture_standards_and_adrs_adr_016_install_setup_error_code_taxonomy_md_bb3_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy","title":"ADR-016: Install/setup error code taxonomy (ADK-*)","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-04T19:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-015: Kanban epic/story path lowercase convention","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention"},"next":{"title":"ADR-017: Docusaurus CI build/deploy topology (single workflow, artifact handoff)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-04T19:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-016: Install/setup error code taxonomy (ADK-*)';

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
  "value": "1. Code shape",
  "id": "1-code-shape",
  "level": 3
}, {
  "value": "2. Registry as single source of truth",
  "id": "2-registry-as-single-source-of-truth",
  "level": 3
}, {
  "value": "3. Stability and deprecation",
  "id": "3-stability-and-deprecation",
  "level": 3
}, {
  "value": "4. Relationship to FR-078 install events",
  "id": "4-relationship-to-fr-078-install-events",
  "level": 3
}, {
  "value": "5. Process allocation (v1)",
  "id": "5-process-allocation-v1",
  "level": 3
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
    h3: "h3",
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
        id: "adr-016-installsetup-error-code-taxonomy-adk-",
        children: "ADR-016: Install/setup error code taxonomy (ADK-*)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-06-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-108-install-setup-error-code-registry-and-emission",
        children: "FR-108"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality",
        children: "FR-078"
      }), ", ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T20-install-setup-error-code-registry-fr108",
        children: ["E06:S09", ":T20"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Install and setup failures in adopter repositories are logged (FR-078) and described in prose, but alpha testers and book readers need ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stable symbols"
      }), " that work without knowing repo layout. Multiple installers (greenfield orchestrator, RW, Kanban, sign-off, CLI) must share one vocabulary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-code-shape",
      children: "1. Code shape"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-{DOMAIN}{PROCESS}[.{SUB}][:{QUALIFIER}]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Part"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v1 values"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOMAIN"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "I"
            }), " install/setup, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "V"
            }), " validate (reserved), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "R"
            }), " runtime (reserved)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle area"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROCESS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Two digits, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "01"
            }), "–", (0,jsx_runtime.jsx)(_components.code, {
              children: "04"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named installer or gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUB"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Letter + two digits, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E04"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S01"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failure class within process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QUALIFIER"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ":W01"
            }), " warning, ", (0,jsx_runtime.jsx)(_components.code, {
              children: ":R01"
            }), " recoverable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional non-fatal modifier"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-I03.E04"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-I01.S01"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-I03.E90:W01"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Codes are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "locale-neutral"
      }), " and must not embed file paths or secrets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-registry-as-single-source-of-truth",
      children: "2. Registry as single source of truth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/config/install-error-codes.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fields per code: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "summary"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "symptom"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remediation[]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "see_also[]"
        }), " (BR/FR ids), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "introduced_in_adk_semver"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "registry_version"
        }), " semver for feedback/JSON payloads (", (0,jsx_runtime.jsx)(_components.code, {
          children: "error_registry_version"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Human-facing stderr/stdout ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first line"
      }), " is derived from the registry via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "adk_install_errors.emit_install_error"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-stability-and-deprecation",
      children: "3. Stability and deprecation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never reassign"
        }), " a code to a different meaning in the same ", (0,jsx_runtime.jsx)(_components.code, {
          children: "registry_version"
        }), " minor line."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Semantic change → new sub-code (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E13"
        }), "); mark old code ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deprecated: true"
        }), " in YAML with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "superseded_by"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bump ", (0,jsx_runtime.jsx)(_components.code, {
          children: "registry_version"
        }), " minor when adding codes; bump major only if shape or required fields change."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-relationship-to-fr-078-install-events",
      children: "4. Relationship to FR-078 install events"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On failed install steps (", (0,jsx_runtime.jsx)(_components.code, {
        children: "result.status"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "failed"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "result.adk_error_code"
        }), " — must exist in registry when emitted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "result.error_registry_version"
        }), " — matches registry file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CLI JSONL and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prepare-feedback-payload"
      }), " (FR-079 contract ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.1.0"
      }), ") may aggregate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "primary_adk_error_codes"
      }), " from ERROR log lines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Standalone Python installers (RW, greenfield) emit stderr codes in v1; JSONL is required on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "adk install"
        })
      }), " path."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-process-allocation-v1",
      children: "5. Process allocation (v1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Installer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_greenfield_path.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_kanban_framework.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_release_workflow.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_github_issue_signoff.py"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Future processes require ADR update or FR intake."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Positive:"
        }), " Paste-and-triage for alpha; book appendix can link ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#adk-i03-e04"
        }), " without repo state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative:"
        }), " Maintainers must update registry + generated docs when adding failure classes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing:"
        }), " Emitters must use registered codes only (CI guard)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/install-error-codes.yaml",
          children: "install-error-codes.yaml"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/adk_install_errors.py",
          children: "adk_install_errors.py"
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