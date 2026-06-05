"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["60122"], {
63577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_docusaurus_ci_dedup_verification_evidence_e_05_s_09_t_14_wave_2_md_61b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-docusaurus-ci-dedup-verification-evidence-e-05-s-09-t-14-wave-2-md-61b.json
var site_docs_maintenance_docusaurus_ci_dedup_verification_evidence_e_05_s_09_t_14_wave_2_md_61b_namespaceObject = JSON.parse('{"id":"maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2","title":"Docusaurus CI dedup verification evidence — E05:S09:T14 Wave 2","description":"TaskS09 BR-093","source":"@site/../docs/maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md","sourceDirName":"maintenance","slug":"/maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2","permalink":"/ai-dev-kit/docs/maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md","tags":[],"version":"current","frontMatter":{"lifecycle":"timeboxed","ttl_days":90,"created_at":"2026-06-05T19:00:00.000Z","expires_at":null,"housekeeping_policy":"archive"},"sidebar":"docsSidebar","previous":{"title":"Coordinate remediation: UXR-018 → E05:S09:T12 (T76 retired)","permalink":"/ai-dev-kit/docs/maintenance/coordinate-remediation-uxr018-e05s09t12"},"next":{"title":"Docusaurus corpus triage (FR-067 / E5:S09:T03)","permalink":"/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md


const frontMatter = {
	lifecycle: 'timeboxed',
	ttl_days: 90,
	created_at: new Date('2026-06-05T19:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'archive'
};
const contentTitle = 'Docusaurus CI dedup verification evidence — E05:S09 Wave 2';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "V1–V4 — Local pytest",
  "id": "v1v4--local-pytest",
  "level": 2
}, {
  "value": "V5 — GitHub Actions forensics (<code>main</code>)",
  "id": "v5--github-actions-forensics-main",
  "level": 2
}, {
  "value": "V4 — Retired workflow file",
  "id": "v4--retired-workflow-file",
  "level": 2
}, {
  "value": "V6 — Deferred",
  "id": "v6--deferred",
  "level": 2
}, {
  "value": "Sign-off",
  "id": "sign-off",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "docusaurus-ci-dedup-verification-evidence--e05s09-wave-2",
        children: ["Docusaurus CI dedup verification evidence — E05:S09", ":T14", " Wave 2"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E05:S09", ":T14", " · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FBU:"
      }), " BR-093", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix release:"
      }), " v0.5.9.14+2", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification date:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch context:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "53ad629"
      }), " (post-merge topology)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verdict"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1 — BR-093 pytest T1–T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V2 — FR-069 regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V3 — FR-070 deploy contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V4 — No duplicate deploy workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["V5 — Actions fail-fast on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V6 — Green deploy smoke"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DEFERRED"
            }), " (portal MDX; not BR-093 scope)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conclusion:"
      }), " BR-093 structural acceptance criteria satisfied. FBU may close without green ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v1v4--local-pytest",
      children: "V1–V4 — Local pytest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pytest tests/test_portal_br093_ci_deduplication.py tests/test_portal_fr069_ci.py tests/test_portal_fr070_deployment.py -q\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "20 passed"
      }), " (2026-06-05)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Modules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_portal_br093_ci_deduplication.py"
        }), " — T1 single build topology, T2 fail-fast ", (0,jsx_runtime.jsx)(_components.code, {
          children: "needs:"
        }), ", T3 PR gate, T4 artifact handoff, no duplicate deploy workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_portal_fr069_ci.py"
        }), " — FR-069 CI gate regression"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_portal_fr070_deployment.py"
        }), " — FR-070 cross-job deploy contract"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "v5--github-actions-forensics-main",
      children: ["V5 — GitHub Actions forensics (", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Run ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "26989204716"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Docusaurus site build"
            }), " (single workflow — no parallel ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Docusaurus deploy"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "53ad6298608dabb4f1b75c70194f18d25184e238"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/26989204716",
              children: "https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/26989204716"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "build"
            }), " job"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "failure"
            }), " (MDX broken markdown links — corpus issue)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deploy"
            }), " job"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "skipped"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "needs: build"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      }), " One ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm ci"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), " per qualifying ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " push; deploy does not run when build fails. This satisfies BR-093 AC1–AC2 regardless of corpus green state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v4--retired-workflow-file",
      children: "V4 — Retired workflow file"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "test ! -f .github/workflows/docusaurus-deploy.yml && echo OK\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docusaurus-deploy.yml"
      }), " absent (deleted Wave 1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v6--deferred",
      children: "V6 — Deferred"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Green-run smoke (one successful build + deploy on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ") blocked by portal MDX failures (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow-initiation-cheatsheet.md"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/rw.md"
      }), "). Track under BR-090 / residual MDX intake — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " blocking BR-093 closure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sign-off",
      children: "Sign-off"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V1–V5 PASS — Wave 2 verification complete"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Authorized for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E05:S09:T14 --art --doc-policy-zero"
        }), " FBU closure"]
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