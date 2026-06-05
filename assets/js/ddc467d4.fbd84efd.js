"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["46432"], {
32570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_v_band_verification_scan_2026_06_05_md_ddc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-v-band-verification-scan-2026-06-05-md-ddc.json
var site_docs_maintenance_v_band_verification_scan_2026_06_05_md_ddc_namespaceObject = JSON.parse('{"id":"maintenance/v-band-verification-scan-2026-06-05","title":"V-band verification scan — 2026-06-05","description":"Scope: Six Verification (V) rows on kboard.md (task shipped, FBU open).","source":"@site/../docs/maintenance/v-band-verification-scan-2026-06-05.md","sourceDirName":"maintenance","slug":"/maintenance/v-band-verification-scan-2026-06-05","permalink":"/ai-dev-kit/docs/maintenance/v-band-verification-scan-2026-06-05","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/v-band-verification-scan-2026-06-05.md","tags":[],"version":"current","frontMatter":{"lifecycle":"timeboxed","ttl_days":90,"created_at":"2026-06-05T18:00:00.000Z","expires_at":null,"housekeeping_policy":"archive"},"sidebar":"docsSidebar","previous":{"title":"SemVer verification evidence — E03:S02:T12 wave 3","permalink":"/ai-dev-kit/docs/maintenance/semver-verification-evidence-E03S02T12-wave3"},"next":{"title":"CMW Ordering Flaw Analysis","permalink":"/ai-dev-kit/docs/analysis/cmw-ordering-flaw-analysis"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/v-band-verification-scan-2026-06-05.md


const frontMatter = {
	lifecycle: 'timeboxed',
	ttl_days: 90,
	created_at: new Date('2026-06-05T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'archive'
};
const contentTitle = 'V-band verification scan — 2026-06-05';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "E07:S07 / BR-091 — PASS",
  "id": "e07s07--br-091--pass",
  "level": 2
}, {
  "value": "E05:S09 / BR-090 — HOLD",
  "id": "e05s09--br-090--hold",
  "level": 2
}, {
  "value": "E05:S09 / BR-093 — HOLD",
  "id": "e05s09--br-093--hold",
  "level": 2
}, {
  "value": "E02:S13 / FR-106 — HOLD",
  "id": "e02s13--fr-106--hold",
  "level": 2
}, {
  "value": "E06:S09 / BR-082 — CLOSED",
  "id": "e06s09--br-082--closed",
  "level": 2
}, {
  "value": "E06:S09 / BR-088 — CLOSED",
  "id": "e06s09--br-088--closed",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "v-band-verification-scan--2026-06-05",
        children: "V-band verification scan — 2026-06-05"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Six ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification (V)"
      }), " rows on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " (task shipped, FBU open).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method:"
      }), " GitHub Actions API (", (0,jsx_runtime.jsx)(_components.code, {
        children: "gh run list"
      }), "), local pytest, branch comparison ", (0,jsx_runtime.jsx)(_components.code, {
        children: "origin/main"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "origin/dev"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FBU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verdict"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next gate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E07:S07", ":T03"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-091"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS — close"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CI green ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), "; local 105/105 pytest"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S09", ":T13"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-090"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HOLD"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Docusaurus site build"
            }), " still ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FAIL"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " (MDX broken links)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E05:S09", ":T14"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-093"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HOLD"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dedup workflow on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), "; same MDX failure blocks green run"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E02:S13", ":T08"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CLOSED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operator sign-off 2026-06-05 → IMPLEMENTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E06:S09", ":T11"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-082"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CLOSED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#14 closed; operator verification 2026-06-05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["E06:S09", ":T19"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-088"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CLOSED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#18 closed; operator verification 2026-06-05"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "e07s07--br-091--pass",
      children: ["E07:S07", ":T03", " / BR-091 — PASS"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix release:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.7.7.3+1"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "dca91d4"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Workflow scripts pytest (", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ success"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "26990632033"
            }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "70b7242"
            }), " (2026-06-05 01:54 UTC)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Workflow scripts pytest (", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ success"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "26989204694"
            }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "53ad629"
            }), " (2026-06-05 01:09 UTC)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Local ", (0,jsx_runtime.jsx)(_components.code, {
              children: "run_workflow_scripts_ci_pytest.sh"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ 105 passed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-06-05 scan"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " BR-091 → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FIXED"
      }), "; prune V-band row; ledger ", (0,jsx_runtime.jsx)(_components.code, {
        children: "intake-completed.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "e05s09--br-090--hold",
      children: ["E05:S09", ":T13", " / BR-090 — HOLD"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix release:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.5.9.13+1"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "portal/package.json"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/faster"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ present"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.10.1 aligned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Docusaurus site build"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ failure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "26989204716"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ERR_MODULE_NOT_FOUND"
            }), "; MDX broken markdown links"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocker (current):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow-initiation-cheatsheet.md"
      }), " link to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "../../.claude/commands/rw.md"
      }), " unresolved in portal plugin scope."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Keep OPEN until ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "full"
      }), " Docusaurus build passes on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "e05s09--br-093--hold",
      children: ["E05:S09", ":T14", " / BR-093 — HOLD"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix release:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.5.9.14+2"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docusaurus-build.yml"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No diff vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " for workflow file"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Post-merge Actions verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot confirm dedup savings until build green"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Keep OPEN; structural fix shipped; verification blocked by same MDX failures as BR-090."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "e02s13--fr-106--hold",
      children: ["E02:S13", ":T08", " / FR-106 — HOLD"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix release:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.2.13.8+2"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc sync report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ surfaces listed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate-workflow-docs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ exit 0 (per task doc, 2026-06-03)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User sign-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ not recorded"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " ✅ Closed 2026-06-05 — operator sign-off; FR-106 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPLEMENTED"
      }), "; V-band pruned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "e06s09--br-082--closed",
      children: ["E06:S09", ":T11", " / BR-082 — CLOSED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix release:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.6.9.11+2"
      }), " · Issue ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "#14"
      }), " CLOSED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " ✅ Closed 2026-06-05 — operator confirmed expenses-tracker install path resolved; V-band pruned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "e06s09--br-088--closed",
      children: ["E06:S09", ":T19", " / BR-088 — CLOSED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix release:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.6.9.19+1"
      }), " · Issue ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "#18"
      }), " CLOSED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " ✅ Closed 2026-06-05 — operator confirmed greenfield scaffold; V-band pruned."]
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