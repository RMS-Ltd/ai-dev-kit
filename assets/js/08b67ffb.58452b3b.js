"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["4469"], {
3554(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_guides_adopter_install_attempt_preflight_md_08b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-guides-adopter-install-attempt-preflight-md-08b.json
var site_docs_guides_adopter_install_attempt_preflight_md_08b_namespaceObject = JSON.parse('{"id":"guides/adopter-install-attempt-preflight","title":"Adopter install attempt preflight","description":"Purpose: Shared checklist before SBL attempt 10, fynd.deals attempt 1, or Confidentia attempt 1.","source":"@site/../docs/guides/adopter-install-attempt-preflight.md","sourceDirName":"guides","slug":"/guides/adopter-install-attempt-preflight","permalink":"/ai-dev-kit/docs/guides/adopter-install-attempt-preflight","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/guides/adopter-install-attempt-preflight.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2026-06-15T14:30:00Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADK install — Expenses Tracker (fresh repository)","permalink":"/ai-dev-kit/docs/guides/adk-install-expenses-tracker-fresh-repo"},"next":{"title":"Agent cold-start checklist","permalink":"/ai-dev-kit/docs/guides/agent-cold-start-checklist"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/guides/adopter-install-attempt-preflight.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2026-06-15T14:30:00Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'Adopter install attempt preflight';

const assets = {

};



const toc = [{
  "value": "1. Choose adoption path (ADR-030)",
  "id": "1-choose-adoption-path-adr-030",
  "level": 2
}, {
  "value": "2. Pin ADK version",
  "id": "2-pin-adk-version",
  "level": 2
}, {
  "value": "3. Phase 0 kit gates (all paths)",
  "id": "3-phase-0-kit-gates-all-paths",
  "level": 2
}, {
  "value": "4. Path-specific prep",
  "id": "4-path-specific-prep",
  "level": 2
}, {
  "value": "Arm B (SBL attempt 10)",
  "id": "arm-b-sbl-attempt-10",
  "level": 3
}, {
  "value": "Arm A (fynd.deals / Confidentia attempt 1)",
  "id": "arm-a-fynddeals--confidentia-attempt-1",
  "level": 3
}, {
  "value": "5. Orchestrator invocation",
  "id": "5-orchestrator-invocation",
  "level": 2
}, {
  "value": "6. Install RC (install-complete gate)",
  "id": "6-install-rc-install-complete-gate",
  "level": 2
}, {
  "value": "7. FR-079 feedback package",
  "id": "7-fr-079-feedback-package",
  "level": 2
}, {
  "value": "8. Synthesis timeline",
  "id": "8-synthesis-timeline",
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
    input: "input",
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
        id: "adopter-install-attempt-preflight",
        children: "Adopter install attempt preflight"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Shared checklist before ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SBL attempt 10"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fynd.deals attempt 1"
      }), ", or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confidentia attempt 1"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Programme:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-029-adk-install-path-experiment.md",
        children: "UXR-029"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md",
        children: "T36"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/52",
        children: "#52"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-choose-adoption-path-adr-030",
      children: "1. Choose adoption path (ADR-030)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Repo"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Profile"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Starborn Legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shell + KMA (messy mature + git)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arm-b"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-place brownfield"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arm-a"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-place brownfield (governance-heavy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arm-a"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty / template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greenfield FR-080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "greenfield"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Full selector: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#adopter-path-selector-mature-repositories",
        children: "INSTALL_IN_YOUR_PROJECT.md — Adopter Path Selector"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-pin-adk-version",
      children: "2. Pin ADK version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Record in attempt README:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ADK git tag (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.1166+1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vendor SHA or lean bundle receipt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Host repo branch + HEAD at install start"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-phase-0-kit-gates-all-paths",
      children: "3. Phase 0 kit gates (all paths)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DOCUMENTATION_SCHEMA.md"
        }), " published and linked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release_state_backend: sqlite"
        }), " → DB exists ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "before"
        }), " first RW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Install RC validator available (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_install_rc.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Comprehension doc planned (", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPREHENSION.md"
        }), " or install receipt)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-path-specific-prep",
      children: "4. Path-specific prep"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arm-b-sbl-attempt-10",
      children: "Arm B (SBL attempt 10)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Legacy PM archived (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs-pre-ai-dev-kit/"
        }), " or equivalent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Kit KMA ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "first pass blind"
        }), " — no operator on proposal/synthesise; no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KMA-REFERENCE-EST-TREE"
        }), " in agent context (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/52",
          children: "#52"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Post-KMA: score kit tree vs held-out reference (maintainer/operator only); minimal tweaks → SBL ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FB-ADK-KMA-KANBAN-MIGRATION.md"
        }), " §4"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Target: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " ad-hoc KMA scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Preflight index: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/adk-install-into-sbl/attempt-10/README.md",
          children: "adk-install-into-sbl/attempt-10/README.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arm-a-fynddeals--confidentia-attempt-1",
      children: "Arm A (fynd.deals / Confidentia attempt 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recon only"
      }), " before full install:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Map existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " vs proposed ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_root"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Inventory production tags / version truth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Decide: incremental KMA vs aligned topology (in-place RW+Kanban)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document continuity risks in task doc (no forced archive)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-orchestrator-invocation",
      children: "5. Orchestrator invocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py \\\n  --project-root /path/to/adopter \\\n  --vendor-root /path/to/vendor/ai-dev-kit \\\n  --non-interactive \\\n  --adoption-path arm-b \\\n  --init-sqlite \\\n  --catalog v4 \\\n  --run-install-rc \\\n  --install-rc-strict\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Replace ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--adoption-path"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arm-a"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "greenfield"
      }), " as appropriate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-install-rc-install-complete-gate",
      children: "6. Install RC (install-complete gate)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_install_rc.py \\\n  --project-root /path/to/adopter \\\n  --profile arm-b \\\n  --strict \\\n  --report-json /tmp/install-rc-report.json\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Do not run first domain RW"
      }), " until RC passes (unless documented waiver)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Human-readable rows: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/install-rc-checklist.md",
        children: "install-rc-checklist.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-fr-079-feedback-package",
      children: "7. FR-079 feedback package"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Per attempt, submit to ai-dev-kit:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub issue (programme tracker)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "feedback-payload.json"
        }), " + diary"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install RC JSON report"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Link to maintainer index (", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-install-into-sbl/attempt-NN/"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-synthesis-timeline",
      children: "8. Synthesis timeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Phase 0 — Kit fixes (this repo)\nPhase 1 — SBL attempt 10 (Arm B validation)\nPhase 2 — fynd.deals + Confidentia recon\nPhase 3 — Arm A full attempts\nPhase 4 — Programme synthesis → Install RC at release candidate\n"
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
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
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