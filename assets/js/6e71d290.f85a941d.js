"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["42162"], {
99886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_082_installation_distribution_canonical_repo_alignment_md_6e7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-082-installation-distribution-canonical-repo-alignment-md-6e7.json
var site_docs_project_management_kanban_fr_br_fr_082_installation_distribution_canonical_repo_alignment_md_6e7_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment","title":"FR-082: Installation distribution canonical repository alignment","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-081: Brownfield modular adopter integration","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration"},"next":{"title":"FR-083: Global IPW-gated implementation contract","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-082: Installation distribution canonical repository alignment';

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
        id: "fr-082-installation-distribution-canonical-repository-alignment",
        children: "FR-082: Installation distribution canonical repository alignment"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-082", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-04-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " Maintainer (design session)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " LOW", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED (2026-05-28 — E06:S09", ":T03", "; public bootstrap ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082",
        children: ["E06:S09", ":T03"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Align ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "installation scripts, defaults, and documentation examples"
      }), " with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonical GitHub repository"
      }), " for AI Dev Kit (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit"
      }), ") so adopters do not download from incorrect or placeholder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "owner/repo"
      }), " values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "install_package_from_release.py"
      }), " and some package installation docs use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "placeholder"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "incorrect"
      }), " GitHub coordinates (e.g. defaults or examples pointing at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit/ai-dev-kit"
      }), "). That creates ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "silent wrong-target"
      }), " risk for automated installs and undermines trust in the greenfield path (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
        children: "FR-080"
      }), ")."]
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
          children: "FR-082-F1:"
        }), " Set ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["default ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--repo"
          })]
        }), " (and any equivalent config) on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_package_from_release.py"
        }), " to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "canonical"
        }), " public repository, or require an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "explicit"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--repo"
        }), " with no unsafe default (decision recorded in task)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-082-F2:"
        }), " Audit and fix ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PACKAGE_INSTALLATION_GUIDE"
        }), " and related user-facing URLs so release examples resolve to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "real"
        }), " release locations for this monorepo."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-082-F3:"
        }), " Align ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cross-references"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), " / quick starts so ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python install_package_from_release.py"
        }), " examples use working defaults or copy-paste-safe explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--repo RMS-Ltd/ai-dev-kit"
        }), "."]
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
          children: "FR-082-NF1:"
        }), " Changes must not break adopters who intentionally mirror to a fork (override path remains documented)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "implementation-evidence-e06s09",
      children: ["Implementation evidence (E06:S09", ":T03", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_package_from_release.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "install_package_from_release.py"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default='RMS-Ltd/ai-dev-kit'"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--repo"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GITHUB_REPOSITORY"
        }), " override documented in help."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PACKAGE_INSTALLATION_GUIDE.md"
          })
        }), " — examples use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), " release URLs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        }), " — GitHub Releases example includes explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--repo RMS-Ltd/ai-dev-kit"
        }), "; submodule URL canonical."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/scripts/fr099_install_smoke_test.sh",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "scripts/fr099_install_smoke_test.sh"
          })
        }), " — guards against ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit/ai-dev-kit"
        }), " default regression on public clone."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward compatibility:"
        }), " Default changed from unsafe placeholder to canonical public repo; forks use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--repo owner/fork"
        }), " (recorded in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082",
          children: "T03"
        }), " delivery notes)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deferral (not FR-082):"
      }), " Publishing framework release tarballs on GitHub Releases → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-062-github-release-installation-experience",
        children: "FR-062"
      }), "."]
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
        }), " ", "A clean download using documented default flags targets the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "intended"
        }), " public repo (or fails fast with a clear message if no default is chosen)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Guide examples do not contain ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "known-bad"
        }), " org/repo URLs in primary install paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task documents any ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "backward-compatibility"
        }), " note if default behavior changes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-analysis",
      children: "Scope Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Domain:"
      }), " Tooling hygiene, documentation accuracy", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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
          children: "packages/frameworks/workflow-mgt/scripts/install_package_from_release.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), " (as needed)"]
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
          checked: true,
          disabled: true
        }), " ", "Simple (1-3 days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
          children: "FR-080"
        }), " — Greenfield process (consumer of correct defaults)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md",
          children: "PACKAGE_INSTALLATION_GUIDE.md"
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