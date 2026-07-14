"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["6668"], {
7748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_contributing_translations_md_df7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-contributing-translations-md-df7.json
var site_docs_documentation_user_docs_contributing_translations_md_df7_namespaceObject = JSON.parse('{"id":"documentation/user-docs/contributing-translations","title":"Contributing translations","description":"Thank you for helping translate AI Dev Kit framework content. This guide is a quick start; the canonical policy is translation-workflow-and-review.md.","source":"@site/../docs/documentation/user-docs/contributing-translations.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/contributing-translations","permalink":"/ai-dev-kit/docs/documentation/user-docs/contributing-translations","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/contributing-translations.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-08T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ai-dev-kit CLI Usage Examples","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-usage-examples"},"next":{"title":"ECC + AI Dev Kit — integration cheatsheet","permalink":"/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/contributing-translations.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-08T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Contributing translations';

const assets = {

};



const toc = [{
  "value": "What you can translate",
  "id": "what-you-can-translate",
  "level": 2
}, {
  "value": "Quick workflow",
  "id": "quick-workflow",
  "level": 2
}, {
  "value": "Review expectations",
  "id": "review-expectations",
  "level": 2
}, {
  "value": "Guidelines (summary)",
  "id": "guidelines-summary",
  "level": 2
}, {
  "value": "Package READMEs",
  "id": "package-readmes",
  "level": 2
}, {
  "value": "Maintainer tools",
  "id": "maintainer-tools",
  "level": 2
}, {
  "value": "References",
  "id": "references",
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
    ol: "ol",
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
        id: "contributing-translations",
        children: "Contributing translations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thank you for helping translate AI Dev Kit framework content. This guide is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "quick start"
      }), "; the canonical policy is ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md",
        children: "translation-workflow-and-review.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-you-can-translate",
      children: "What you can translate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Framework locale content lives under:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/locales/{lang}/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/locales/{lang}/"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two artifact types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "YAML keys"
        }), " — short CLI, installer, and error strings (", (0,jsx_runtime.jsx)(_components.code, {
          children: "keys/cli.yaml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "keys/installer.yaml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "keys/errors.yaml"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Markdown files"
        }), " — kanban intake templates and setup scaffolds (", (0,jsx_runtime.jsx)(_components.code, {
          children: "templates/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scaffolds/"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nine target locales are scaffolded (", (0,jsx_runtime.jsx)(_components.code, {
        children: "es"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "de"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pt"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "zh-CN"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "zh-TW"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ja"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ru"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ar"
      }), "). Content currently uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "en-GB interim copy"
      }), " until translated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-workflow",
      children: "Quick workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fork"
          }), " the repository and create a branch."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pick a locale and tier"
          }), " — see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/locale-rollout-matrix.md",
            children: "locale-rollout-matrix.md"
          }), " (P0 = language selection prompts first)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit locale files"
          }), " — use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "en-GB"
          }), " as the reference; keep all YAML keys; do not remove ", (0,jsx_runtime.jsx)(_components.code, {
            children: "{{placeholders}}"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run validation and tests:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py --package all\npytest -m fr006\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Open a pull request"
          }), " with title ", (0,jsx_runtime.jsx)(_components.code, {
            children: "locale({lang}): <description>"
          }), " and note the priority tier in the description."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Translation PRs do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " need Release Workflow — a maintainer will review and merge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-expectations",
      children: "Review expectations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Required:"
        }), " Maintainer review before merge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommended:"
        }), " Native or professional review for setup prompts and installer strings (P0/P1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the full ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md#review-process",
        children: "review checklist"
      }), " in the governance standard."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "guidelines-summary",
      children: "Guidelines (summary)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Do"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Don't"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Preserve ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{{placeholder}}"
            }), " tokens"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translate file paths or code identifiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keep YAML key names identical to en-GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete or rename keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use UTF-8 encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mix en-GB and en-US spelling in one locale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Leave ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E21:S03:T04"
            }), "-style task tokens in English"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run RW for translation-only changes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Full guidelines: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md#translation-guidelines",
        children: "translation-workflow-and-review.md § Translation guidelines"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "package-readmes",
      children: "Package READMEs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/locales/README.md",
          children: "Kanban locales README"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/locales/README.md",
          children: "Workflow-mgt locales README"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintainer-tools",
      children: "Maintainer tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/translation-management-tools",
        children: "translation-management-tools.md"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_locale_translations.py"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sync_locale_keys.py"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scaffold_locale_trees.py"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md",
          children: "translation-workflow-and-review.md"
        }), " — canonical workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translatable-content-inventory.md",
          children: "translatable-content-inventory.md"
        }), " — what is translatable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/locale-key-conventions.md",
          children: "locale-key-conventions.md"
        }), " — key naming rules"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md",
          children: "FR-006"
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