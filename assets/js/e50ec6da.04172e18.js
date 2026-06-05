"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["34975"], {
67679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_journals_readme_md_e50_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-journals-readme-md-e50.json
var site_docs_journals_readme_md_e50_namespaceObject = JSON.parse('{"id":"journals/README","title":"RW Journals","description":"This directory contains per-run journals, recovery reports, and rollback artifacts produced by the Release Workflow (RW).","source":"@site/../docs/journals/README.md","sourceDirName":"journals","slug":"/journals/","permalink":"/ai-dev-kit/docs/journals/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/journals/README.md","tags":[],"version":"current","frontMatter":{}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/journals/README.md


const frontMatter = {};
const contentTitle = 'RW Journals';

const assets = {

};



const toc = [{
  "value": "Directory Layout",
  "id": "directory-layout",
  "level": 2
}, {
  "value": "Quick Start for Operators",
  "id": "quick-start-for-operators",
  "level": 2
}, {
  "value": "Journal File Format",
  "id": "journal-file-format",
  "level": 2
}, {
  "value": "Safety Notes",
  "id": "safety-notes",
  "level": 2
}, {
  "value": "Committing Journals",
  "id": "committing-journals",
  "level": 2
}, {
  "value": "Housekeeping",
  "id": "housekeeping",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "rw-journals",
        children: "RW Journals"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This directory contains per-run journals, recovery reports, and rollback artifacts produced by the Release Workflow (RW)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "directory-layout",
      children: "Directory Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/journals/\n├── README.md                          (this file)\n├── JOURNAL_SCHEMA.md                  (JSON schema reference)\n├── RECOVERY_PROCEDURE.md              (operator rerun guide)\n├── ROLLBACK_CONTRACT.md               (automatic vs manual rollback)\n└── rw-{run_id}-{timestamp}.json      (per-run journal)\n├── rw-{run_id}-{timestamp}-recovery.md   (human-readable recovery report)\n└── rw-{run_id}-{timestamp}-recovery.json (machine-readable recovery report)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-start-for-operators",
      children: "Quick Start for Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A run failed."
        }), " Locate the latest recovery report:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python -m \"packages/frameworks/workflow-mgt/scripts/journal\" list\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read the recovery report"
        }), " to see which step failed and what artifacts were touched."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Follow ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RECOVERY_PROCEDURE.md"
          })]
        }), " for deterministic rerun guidance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Review ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ROLLBACK_CONTRACT.md"
          })]
        }), " before attempting any automatic revert steps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "journal-file-format",
      children: "Journal File Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".json"
      }), " journal is a single immutable record of one RW execution. It contains:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "run_id"
        }), ": UUIDv4 identifying this run."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "started_at"
        }), ": ISO-8601 timestamp when the run began."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ended_at"
        }), ": ISO-8601 timestamp when the run finished (or null if aborted)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "status"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"success\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"failed\""
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"aborted\""
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "task_id"
        }), ": The E:S", ":T", " token that triggered this run (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S06:T63"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "steps"
        }), ": Ordered list of step records, each with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "status"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit_code"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "commands"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "touched_files"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timestamp"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOURNAL_SCHEMA.md"
      }), " for the full schema definition and versioning policy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "safety-notes",
      children: "Safety Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Journal files are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "append-only during a run"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "immutable after"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recovery reports ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "never contain secrets"
        }), " (tokens, credentials)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rollback guidance ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "never recommends force-push or destructive remote history changes"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/"
        }), " is unwritable, the RW continues with a warning; recovery artifacts must then be reconstructed from agent session logs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "committing-journals",
      children: "Committing Journals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Do not commit runtime ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rw-*"
          }), " artifacts to version control."]
        }), " The operator docs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JOURNAL_SCHEMA.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RECOVERY_PROCEDURE.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ROLLBACK_CONTRACT.md"
        }), ") are the only files in this directory that belong in version control."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), " exclusions are in place at the repository root for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/rw-*.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/rw-*-recovery.json"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/rw-*-recovery.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you run tests or manual simulations that write to this directory, verify no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-*"
        }), " files are staged before committing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "housekeeping",
      children: "Housekeeping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Old journal files are not automatically purged. Add a CI job or cron rule if retention limits are needed."
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