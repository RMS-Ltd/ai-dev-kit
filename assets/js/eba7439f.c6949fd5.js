"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["90293"], {
22136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_077_documented_python_38_contradicts_repo_310_requirement_md_eba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-077-documented-python-38-contradicts-repo-310-requirement-md-eba.json
var site_docs_project_management_kanban_fr_br_br_077_documented_python_38_contradicts_repo_310_requirement_md_eba_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement","title":"Bug Report BR-077: Documented Python 3.8+ Contradicts Repo Scripts Requiring 3.10+","description":"Bug ID: BR-077","source":"@site/../docs/project-management/kanban/fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-076: E7:S00 must not host concrete tasks (S00 abstract-only)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks"},"next":{"title":"Bug Report BR-078: Kanban Fresh Install — KANBAN_STRUCTURE_TEMPLATE.md Not Found","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-078-kanban-fresh-install-structure-template-missing"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-077: Documented Python 3.8+ Contradicts Repo Scripts Requiring 3.10+';

const assets = {

};



const toc = [{
  "value": "Bug Summary",
  "id": "bug-summary",
  "level": 2
}, {
  "value": "Problem Description",
  "id": "problem-description",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 3
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior",
  "level": 3
}, {
  "value": "Impact",
  "id": "impact",
  "level": 3
}, {
  "value": "Steps to Reproduce",
  "id": "steps-to-reproduce",
  "level": 2
}, {
  "value": "Proposed Resolution",
  "id": "proposed-resolution",
  "level": 2
}, {
  "value": "Related Work",
  "id": "related-work",
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
        id: "bug-report-br-077-documented-python-38-contradicts-repo-scripts-requiring-310",
        children: "Bug Report BR-077: Documented Python 3.8+ Contradicts Repo Scripts Requiring 3.10+"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-077", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E08:S03", ":T05", " (with FR-104)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH (Must Have — MoSCOW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "M"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " LOW (misleading docs/metadata; runtime failure only when running affected scripts on 3.8/3.9)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.8.3.5+2"
      }), " — ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E08:S03", ":T05"]
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python_requires>=3.11"
      }), ")   (kanban init ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.8.3.5+1"
      }), " — ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E08:S03", ":T05"]
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T05-python-minimum-version-fr104-br077",
        children: ["E08:S03", ":T05"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Feature Request:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-104-python-minimum-version-policy-alignment",
        children: "FR-104"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification:"
      }), " Documentation + packaging metadata"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-summary",
      children: "Bug Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The repository advertises ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python 3.8+"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "setup.py"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python_requires"
      }), ", README badge, install guides) while multiple ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first-party scripts"
      }), " use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PEP 604"
      }), " union syntax (", (0,jsx_runtime.jsx)(_components.code, {
        children: "X | Y"
      }), ") without postponed annotations, which requires ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python 3.10+"
      }), ". Contributors on 3.8/3.9 hit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SyntaxError"
      }), " when running KB/migration scripts even though the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI package"
      }), " itself would run."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Declared minimum Python version should match what the repo actually runs for validators, workflow scripts, and documented contributor workflows."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "States"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/setup.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "setup.py"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "python_requires=\">=3.8\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/README.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "README.md"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python 3.8+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scripts (examples)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Path | None"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dict | None"
            }), " without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "from __future__ import annotations"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CI reference:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/framework-release.yml",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "framework-release.yml"
        })
      }), " uses Python ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.11"
      }), " — further drift from “3.8+” messaging."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wasted time debugging ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SyntaxError"
        }), " on older interpreters."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "False confidence for adopters copying README prerequisites."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packaged CLI may install on 3.8 while adjacent scripts in the same clone do not run."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to Reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use Python ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3.9"
        }), " (or 3.8)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 scripts/kb_stub_sweep.py"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/kb_push_to_notion.py"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SyntaxError"
        }), " on union type annotations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-resolution",
      children: "Proposed Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Delivered via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-104"
      }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E08:S03", ":T05"]
      }), " (raise floor to 3.10+ and update docs, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "or"
      }), " retrofit scripts + split CLI vs full-repo docs)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit",
          children: ["E07:S06", ":T08"]
        }), " — dependency audit (2026-03-25)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-104-python-minimum-version-policy-alignment",
          children: "FR-104"
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