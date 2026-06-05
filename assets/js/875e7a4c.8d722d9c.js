"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["4614"], {
12346(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_081_brownfield_modular_adopter_integration_md_875_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-081-brownfield-modular-adopter-integration-md-875.json
var site_docs_project_management_kanban_fr_br_fr_081_brownfield_modular_adopter_integration_md_875_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration","title":"FR-081: Brownfield modular adopter integration","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-080: End-to-end greenfield installation process","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process"},"next":{"title":"FR-082: Installation distribution canonical repository alignment","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-081: Brownfield modular adopter integration';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 3
}, {
  "value": "Implementation evidence (E06:S09)",
  "id": "implementation-evidence-e06s09",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Scope Analysis",
  "id": "scope-analysis",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "fr-081-brownfield-modular-adopter-integration",
        children: "FR-081: Brownfield modular adopter integration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-081", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-04-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " Maintainer (design session)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED (2026-05-29 — E06:S09", ":T02", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081",
        children: ["E06:S09", ":T02"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Operationalize ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003"
        })
      }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "brownfield"
      }), " repositories: treat host projects as owning their architecture; expose AI Dev Kit as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modular surfaces"
      }), " with explicit ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contracts"
      }), " (configuration, validators, optional frameworks)—not as an imposed canonical directory tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Brownfield teams need to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compose"
      }), " workflows, Kanban, versioning, and docs lifecycle ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "selectively"
      }), " and map them onto existing paths and governance. Without a tracked deliverable, policy in ADR-003 risks staying ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "philosophical only"
      }), ", while installers and docs may still read as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one-size-fits-all"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-081-F1:"
        }), " Publish a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "brownfield adoption guide"
        }), " (or major section of the installation guide) that states ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-goals"
        }), " (we do not require replacing the host ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " tree or PM process) and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "integration seams"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts_path"
        }), ", optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "use_kanban"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-081-F2:"
        }), " Provide ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "required vs optional vs recommended"
        }), " matrices ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "per framework surface"
        }), " (minimum viable RW-only adoption vs full stack), suitable for experienced architects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-081-F3:"
        }), " Align ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "installer UX"
        }), " messaging so brownfield runs do not imply copying ai-dev-kit’s reference Kanban epics wholesale; reinforce installer-first and contract-first patterns (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "rw-validators-consumer-layout.md"
          })
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-081-F4:"
        }), " Capture ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "explicit tradeoff decisions"
        }), " (deferred choices) in Kanban tasks or ADR supplements so future work does not lose context."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-081-NF1:"
        }), " Documentation tone must ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "respect host-project sovereignty"
        }), " (aligns with ADR-003 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision §2"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-081-NF2:"
        }), " Changes must remain consistent with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
            children: "FR-080"
          })
        }), " greenfield narrative by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cross-linking"
        }), ", not merging incompatible instructions into one undifferentiated path."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "implementation-evidence-e06s09",
      children: ["Implementation evidence (E06:S09", ":T02", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        }), " — brownfield SoT: non-goals, matrices, RW-only path, worked example, tradeoff table, ADR-003 anchor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPP-E6S9T2"
          })
        }), " — planning package and §8 deferrals."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User-docs cross-links (installation guide, rollout checklist, repo-structure, scope stubs)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/README.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/README.md"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/README.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/README.md"
          })
        }), " — brownfield messaging."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installers: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_release_workflow.py"
        }), " epilog; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), " fresh-mode brownfield warning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_install_brownfield_docs.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tests/test_install_brownfield_docs.py"
          })
        }), " — structural regression (TD7)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Brownfield adopters can answer: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "what must I wire"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "what can I skip"
        }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "what validators apply"
        }), " for their chosen surfaces."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "ADR-003 is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "referenced"
        }), " from installation docs as the policy anchor for brownfield behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "At least one ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "worked example"
        }), " (hypothetical or anonymized) of partial adoption is documented."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-analysis",
      children: "Scope Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Domain:"
      }), " Adoption architecture, documentation, optional tooling prompts", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Areas:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/user-docs/"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Framework packages’ consumer-facing README sections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Implementation-only changes (installer epilog + Kanban fresh-mode warning)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Simple (1-3 days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Medium (1 week)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Complex (2+ weeks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Very Complex (1+ month)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
          children: "FR-080"
        }), " — Greenfield process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment",
          children: "FR-082"
        }), " — Canonical repo alignment"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/framework-dependency-architecture",
          children: "framework-dependency-architecture.md"
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