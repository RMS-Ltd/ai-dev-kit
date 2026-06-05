"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["76735"], {
84650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_semver_registry_collision_repair_2026_06_04_md_3dc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-semver-registry-collision-repair-2026-06-04-md-3dc.json
var site_docs_maintenance_semver_registry_collision_repair_2026_06_04_md_3dc_namespaceObject = JSON.parse('{"id":"maintenance/semver-registry-collision-repair-2026-06-04","title":"SemVer registry collision repair (2026-06-04)","description":"TaskS02:T12 · FR-045 / FR-046 / BR-061","source":"@site/../docs/maintenance/semver-registry-collision-repair-2026-06-04.md","sourceDirName":"maintenance","slug":"/maintenance/semver-registry-collision-repair-2026-06-04","permalink":"/ai-dev-kit/docs/maintenance/semver-registry-collision-repair-2026-06-04","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/semver-registry-collision-repair-2026-06-04.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","created_at":"2026-06-04T22:30:00.000Z","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Release Runbook","permalink":"/ai-dev-kit/docs/maintenance/release-runbook"},"next":{"title":"SemVer verification evidence — E03:S02:T12 wave 3","permalink":"/ai-dev-kit/docs/maintenance/semver-verification-evidence-E03S02T12-wave3"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/semver-registry-collision-repair-2026-06-04.md


const frontMatter = {
	lifecycle: 'evergreen',
	created_at: new Date('2026-06-04T22:30:00.000Z'),
	housekeeping_policy: 'keep'
};
const contentTitle = 'SemVer registry collision repair (2026-06-04)';

const assets = {

};



const toc = [{
  "value": "Policy",
  "id": "policy",
  "level": 2
}, {
  "value": "Before",
  "id": "before",
  "level": 2
}, {
  "value": "Actions applied",
  "id": "actions-applied",
  "level": 2
}, {
  "value": "After",
  "id": "after",
  "level": 2
}, {
  "value": "Tooling",
  "id": "tooling",
  "level": 2
}, {
  "value": "Converter hardening (wave 2)",
  "id": "converter-hardening-wave-2",
  "level": 2
}, {
  "value": "Wave 3 verification addendum (2026-06-05)",
  "id": "wave-3-verification-addendum-2026-06-05",
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
        id: "semver-registry-collision-repair-2026-06-04",
        children: "SemVer registry collision repair (2026-06-04)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E03:S02", ":T12", " · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-045"
      }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-046"
      }), " / **BR-061", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manifest:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(74639)/* ["default"] */.A) + "",
        children: "semver-registry-collision-repair-manifest.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "policy",
      children: "Policy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Registry and converter fixes only (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RF7"
      }), "). Remote Git tags are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " moved. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.870"
      }), " may still point at commit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d6053e5"
      }), " (UXR-018) while canonical internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.9.17+1"
      }), " maps to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.4.870+1"
      }), " at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a492597"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before",
      children: "Before"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Internal versions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "789"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.2.16.4+8"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.2.16.10+1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "806"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.9.5+4"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.9.6+1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "869"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.1.76+2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.9.12+2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "870"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.9.12+3"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.9.17+1"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actions-applied",
      children: "Actions applied"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove duplicate orphan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.1.76+2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dropped (same semver as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.9.12+2"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reassign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.2.16.4+8"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PATCH 789 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "871"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.871+8"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reassign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.9.5+4"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PATCH 806 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "872"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.872+4"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reassign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.9.12+3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PATCH 870 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "873"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.873+3"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keep canonical"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.2.16.10+1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.9.6+1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.5.9.12+2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.9.17+1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unchanged"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch_counter"
        }), ":"]
      }), " 870 → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "873"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "after",
      children: "After"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Audit: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0"
      }), " PATCH/core collisions (", (0,jsx_runtime.jsx)(_components.code, {
        children: "audit_semver_registry_collisions.py"
      }), " exit 0)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tooling",
      children: "Tooling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python \"packages/frameworks/workflow-mgt/scripts/version/audit_semver_registry_collisions.py\"\npython \"packages/frameworks/workflow-mgt/scripts/version/repair_semver_registry_collisions.py\" \\\n  --manifest docs/maintenance/semver-registry-collision-repair-manifest.yaml\npython \"packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "converter-hardening-wave-2",
      children: "Converter hardening (wave 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "semver_converter.py"
      }), " finalize now rejects duplicate ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SemVer core"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      }), "), not only full ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver+BUILD"
      }), " strings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wave-3-verification-addendum-2026-06-05",
      children: "Wave 3 verification addendum (2026-06-05)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Re-verified on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "70b7242"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_semver_registry_injective.py"
        }), " — exit 0 (173 entries, counter ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "903"
        }), ", no PATCH/core collisions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "audit_semver_registry_collisions.py"
        }), " — exit 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read-only convert: counter unchanged at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "903"
        }), " after 5× ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finalize=False"
        }), " calls"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest task-touch + registry injective — 17/17 pass"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Evidence: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/semver-verification-evidence-E03S02T12-wave3",
        children: "semver-verification-evidence-E03S02T12-wave3.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag misalignment:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.870"
      }), " remote tag position unchanged (RF7). Registry mapping is canonical SoT. FBU closure pending maintainer sign-off per IPP §8.4."]
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
74639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/semver-registry-collision-repair-manifest-2593271c38365215d5664f4d516f73f7.yaml");

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