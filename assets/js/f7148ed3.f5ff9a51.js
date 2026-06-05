"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["31740"], {
62292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_journals_journal_schema_md_f71_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-journals-journal-schema-md-f71.json
var site_docs_journals_journal_schema_md_f71_namespaceObject = JSON.parse('{"id":"journals/JOURNAL_SCHEMA","title":"RW Journal JSON Schema Reference","description":"Schema version: 1.0.0","source":"@site/../docs/journals/JOURNAL_SCHEMA.md","sourceDirName":"journals","slug":"/journals/JOURNAL_SCHEMA","permalink":"/ai-dev-kit/docs/journals/JOURNAL_SCHEMA","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/journals/JOURNAL_SCHEMA.md","tags":[],"version":"current","frontMatter":{}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/journals/JOURNAL_SCHEMA.md


const frontMatter = {};
const contentTitle = 'RW Journal JSON Schema Reference';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "File Naming Convention",
  "id": "file-naming-convention",
  "level": 2
}, {
  "value": "Top-Level Object",
  "id": "top-level-object",
  "level": 2
}, {
  "value": "Step Object",
  "id": "step-object",
  "level": 2
}, {
  "value": "Example Journal",
  "id": "example-journal",
  "level": 2
}, {
  "value": "Versioning Policy",
  "id": "versioning-policy",
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
        id: "rw-journal-json-schema-reference",
        children: "RW Journal JSON Schema Reference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema version:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1.0.0"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applies to:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/journal/rw_journal.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each RW execution produces exactly one journal file in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/journals/"
      }), ". The file is written atomically when the run finishes (success, failure, or abort). During the run, the journal is held in memory and appended step-by-step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "file-naming-convention",
      children: "File Naming Convention"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-{run_id}-{started_at}.json\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "run_id"
        }), " — UUIDv4, no hyphens stripped."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "started_at"
        }), " — ISO-8601 timestamp with colons replaced by dashes for filesystem safety."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-a1b2c3d4-e5f6-7890-abcd-ef1234567890-2026-05-17T15-30-00Z.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "top-level-object",
      children: "Top-Level Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "run_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UUIDv4 identifying this run."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "task_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The E:S", ":T", " token (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E6:S06:T63"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "started_at"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string (ISO-8601)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When the run began."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ended_at"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string | null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When the run finished."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"started\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"success\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"failed\""
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"aborted\""
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "version_before"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string | null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version string before the run."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "version_after"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string | null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version string after the run."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "steps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array of Step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered list of step records."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-object",
      children: "Step Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable step name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"started\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"success\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"failed\""
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"aborted\""
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "timestamp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string (ISO-8601)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When this step was logged."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "exit_code"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "integer | null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit code if a subprocess ran."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "commands"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array of string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commands executed in this step."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "touched_files"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array of string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relative paths of files modified."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "notes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free-form operator or agent notes."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "example-journal",
      children: "Example Journal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"run_id\": \"a1b2c3d4-e5f6-7890-abcd-ef1234567890\",\n  \"task_id\": \"E6:S06:T63\",\n  \"started_at\": \"2026-05-17T15:30:00Z\",\n  \"ended_at\": \"2026-05-17T15:31:45Z\",\n  \"status\": \"failed\",\n  \"version_before\": \"0.6.1.38+3\",\n  \"version_after\": null,\n  \"steps\": [\n    {\n      \"name\": \"Step 1d — Task Intent Guard\",\n      \"status\": \"success\",\n      \"timestamp\": \"2026-05-17T15:30:02Z\",\n      \"exit_code\": 0,\n      \"commands\": [\n        \"python validate_rw_task_intent.py --requested E6:S06:T63 --art\"\n      ],\n      \"touched_files\": [],\n      \"notes\": \"\"\n    },\n    {\n      \"name\": \"Step 2 — Bump Version\",\n      \"status\": \"success\",\n      \"timestamp\": \"2026-05-17T15:30:05Z\",\n      \"exit_code\": 0,\n      \"commands\": [\n        \"python bump_version.py\"\n      ],\n      \"touched_files\": [\n        \"src/ai_dev_kit/version.py\"\n      ],\n      \"notes\": \"\"\n    },\n    {\n      \"name\": \"Step 3 — Create Detailed Changelog\",\n      \"status\": \"failed\",\n      \"timestamp\": \"2026-05-17T15:31:45Z\",\n      \"exit_code\": 1,\n      \"commands\": [\n        \"python update_changelog.py\"\n      ],\n      \"touched_files\": [],\n      \"notes\": \"Missing changelog template for task E6:S06:T63\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "versioning-policy",
      children: "Versioning Policy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Schema version ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0.0"
        }), " is current."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Future fields may be added; old fields will not be removed without a major version bump."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consumers must ignore unknown fields (tolerant reader pattern)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recovery report JSON schema is versioned independently (", (0,jsx_runtime.jsx)(_components.code, {
          children: "recovery_report.RECOVERY_SCHEMA_VERSION"
        }), ")."]
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