"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["884"], {
4738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_translation_management_tools_md_f65_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-translation-management-tools-md-f65.json
var site_docs_documentation_user_docs_translation_management_tools_md_f65_namespaceObject = JSON.parse('{"id":"documentation/user-docs/translation-management-tools","title":"Translation management tools","description":"Maintainer-facing CLI tools for FR-006 locale corpus hygiene (E21T05–T06). Contributors should also run validation before opening translation PRs — see contributing-translations.md.","source":"@site/../docs/documentation/user-docs/translation-management-tools.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/translation-management-tools","permalink":"/ai-dev-kit/docs/documentation/user-docs/translation-management-tools","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/translation-management-tools.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2026-06-08T23:00:00Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Repository Structure for Adopters","permalink":"/ai-dev-kit/docs/documentation/user-docs/repo-structure-for-adopters"},"next":{"title":"IDE command whitelist","permalink":"/ai-dev-kit/docs/developer-tools/ide-whitelist-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/translation-management-tools.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2026-06-08T23:00:00Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'Translation management tools';

const assets = {

};



const toc = [{
  "value": "Tool suite",
  "id": "tool-suite",
  "level": 2
}, {
  "value": "validate_locale_translations.py",
  "id": "validate_locale_translationspy",
  "level": 2
}, {
  "value": "sync_locale_keys.py",
  "id": "sync_locale_keyspy",
  "level": 2
}, {
  "value": "scaffold_locale_trees.py",
  "id": "scaffold_locale_treespy",
  "level": 2
}, {
  "value": "report_locale_completeness.py",
  "id": "report_locale_completenesspy",
  "level": 2
}, {
  "value": "Recommended maintainer workflow",
  "id": "recommended-maintainer-workflow",
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
        id: "translation-management-tools",
        children: "Translation management tools"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maintainer-facing CLI tools for FR-006 locale corpus hygiene (E21:S03", ":T05", "–T06). Contributors should also run validation before opening translation PRs — see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/contributing-translations",
        children: "contributing-translations.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical workflow policy:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md",
        children: "translation-workflow-and-review.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tool-suite",
      children: "Tool suite"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_locale_translations.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural validation (YAML, manifest paths, key parity, placeholders)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sync_locale_keys.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add missing keys from en-GB into a target locale (incremental)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scaffold_locale_trees.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bootstrap or rebuild full locale trees from en-GB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "report_locale_completeness.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Completeness metrics, tier breakdown, and missing-translation alerts (T06)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All commands assume repository root as the working directory. Scripts live under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validate_locale_translationspy",
      children: "validate_locale_translations.py"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py --package all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--package kanban|workflow-mgt|all"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Scope packages (default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "all"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--locale CODE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeatable; default all on-disk locales in manifest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--strict"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit 1 on key parity or placeholder mismatches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--verbose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List interim-copy advisories (identical to en-GB on scaffold locales)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Default exit code:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), " unless hard structural errors (YAML parse failure, missing manifest asset path)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strict mode:"
      }), " Use in CI or pre-merge checks when you want key parity enforced."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sync_locale_keyspy",
      children: "sync_locale_keys.py"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/sync_locale_keys.py --target es --package all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--target CODE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Required"
            }), " — locale to update"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--package kanban|workflow-mgt|all"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Scope packages (default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "all"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--dry-run"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report keys that would be added without writing files"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Copies ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "missing"
      }), " keys from en-GB with en-GB string values. Does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " overwrite existing target translations. Updates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_meta.locale"
      }), " when keys are added."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use after en-GB key catalogs grow (new installer/CLI strings). For new locale trees, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scaffold_locale_trees.py"
      }), " instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scaffold_locale_treespy",
      children: "scaffold_locale_trees.py"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/scaffold_locale_trees.py --package all [--dry-run]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Copies entire en-GB locale trees to target locales and registers manifest blocks. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Destructive"
      }), " for existing target trees — prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sync_locale_keys.py"
      }), " for incremental key updates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "report_locale_completenesspy",
      children: "report_locale_completeness.py"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/report_locale_completeness.py --package all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--package kanban|workflow-mgt|all"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Scope packages (default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "all"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--locale CODE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Repeatable; default all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scaffold_locales"
            }), " from registry"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--format table|json|markdown"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Output format (default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "table"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--fail-under PCT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit 1 when combined linguistic % is below threshold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--alert-on missing|interim|any"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit 1 when matching alerts exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--update-registry"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "linguistic_status"
            }), " in registry when threshold met"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--registry-threshold PCT"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["% required for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "linguistic_status: complete"
            }), " (default 100)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--dry-run"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--update-registry"
            }), ", report changes without writing"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--verbose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List all interim-copy advisories"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reads ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translatable-content-registry.yaml",
        children: "translatable-content-registry.yaml"
      }), " for locale scope. Reports structural vs linguistic completeness per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/locale-rollout-matrix.md",
        children: "locale-rollout-matrix.md"
      }), " tiers (P0–P3 keys, P2 whole files)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-maintainer-workflow",
      children: "Recommended maintainer workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After adding en-GB keys: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sync_locale_keys.py --target <code> --dry-run"
        }), ", then apply."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Before merge: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_locale_translations.py --package all"
        }), " (add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--strict"
        }), " when enforcing parity)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Track progress: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "report_locale_completeness.py --locale <code>"
        }), " (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--format json"
        }), " for automation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Regression: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest -m fr006"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md",
          children: "translation-workflow-and-review.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/contributing-translations",
          children: "contributing-translations.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPP-E21S03T05-translation-management-tools.md",
          children: "IPP-E21S03T05"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPP-E21S03T06-translation-completeness-tracking.md",
          children: "IPP-E21S03T06"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md",
          children: "ADR-024"
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