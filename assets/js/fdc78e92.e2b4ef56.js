"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["144"], {
6287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_install_receipt_reference_md_fdc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-install-receipt-reference-md-fdc.json
var site_docs_documentation_user_docs_install_receipt_reference_md_fdc_namespaceObject = JSON.parse('{"id":"documentation/user-docs/install-receipt-reference","title":"AI Dev Kit Installation Receipt Reference","description":"Status: Draft (FR-062)","source":"@site/../docs/documentation/user-docs/install-receipt-reference.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/install-receipt-reference","permalink":"/ai-dev-kit/docs/documentation/user-docs/install-receipt-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/install-receipt-reference.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2026-03-18T00:00:00Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"GitHub Issue install sign-off","permalink":"/ai-dev-kit/docs/documentation/user-docs/github-issue-install-signoff"},"next":{"title":"Repository Structure for Adopters","permalink":"/ai-dev-kit/docs/documentation/user-docs/repo-structure-for-adopters"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/install-receipt-reference.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2026-03-18T00:00:00Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'AI Dev Kit Installation Receipt Reference';

const assets = {

};



const toc = [{
  "value": "Purpose",
  "id": "purpose",
  "level": 2
}, {
  "value": "Scope (greenfield vs brownfield)",
  "id": "scope-greenfield-vs-brownfield",
  "level": 3
}, {
  "value": "Receipt Location &amp; Lifecycle",
  "id": "receipt-location--lifecycle",
  "level": 2
}, {
  "value": "JSON Schema (v1)",
  "id": "json-schema-v1",
  "level": 2
}, {
  "value": "Client Submission Workflow",
  "id": "client-submission-workflow",
  "level": 2
}, {
  "value": "Receipt Signing",
  "id": "receipt-signing",
  "level": 2
}, {
  "value": "AI Agent Guidance",
  "id": "ai-agent-guidance",
  "level": 2
}, {
  "value": "References",
  "id": "references",
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
        id: "ai-dev-kit-installation-receipt-reference",
        children: "AI Dev Kit Installation Receipt Reference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Draft (FR-062)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applies To:"
      }), " GitHub Release installations performed via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_package_from_release.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Installation receipts provide a tamper-evident record of every framework install run. They allow:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consumers to prove which frameworks/versions were installed and whether validations passed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI Dev Kit maintainers to reproduce or audit installation issues."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automation to ingest telemetry without scraping raw logs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Receipts complement FR-047 (install logging) by capturing a structured summary that a client AI agent can submit back to the ai-dev-kit team."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope-greenfield-vs-brownfield",
      children: "Scope (greenfield vs brownfield)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Canonical ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "greenfield"
      }), " installer narrative and ordering live in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        })
      }), " with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md",
        children: "ADR-003"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md",
        children: "FR-081"
      }), ", and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md",
        children: "IPW-E6S9T1"
      }), ". Receipts may attach to release-based installs; align evidence with that policy boundary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "receipt-location--lifecycle",
      children: "Receipt Location & Lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "logs/ai-dev-kit/install/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filename format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "receipt-<timestamp>-<run_id>.json"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Producer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "install_package_from_release.py"
            }), " (CLI)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consumers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client AI agents, support tooling, telemetry pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Controlled by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_logging.keep"
            }), " (same as install logs)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Receipts are generated only when installs are performed from a consumer repo (project root contains ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit.yaml"
      }), "). Framework installers append their own sections via the shared ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AI_DEV_KIT_INSTALL_LOG_PATH"
      }), " env var."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "json-schema-v1",
      children: "JSON Schema (v1)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsonc",
        children: "{\n  \"schema_version\": \"1.0.0\",\n  \"install_run_id\": \"2026-03-18T12:00:35Z_3f8c2c\",\n  \"project\": {\n    \"name\": \"xoforge\",\n    \"repo\": \"git@github.com:example/xoforge.git\",\n    \"branch\": \"main\"\n  },\n  \"frameworks\": [\n    {\n      \"name\": \"workflow-mgmt\",\n      \"requested_version\": \"2.1.4\",\n      \"source\": \"https://github.com/RMS-Ltd/ai-dev-kit/releases/download/workflow-mgmt-v2.1.4/...\",\n      \"hash\": \"sha256:...\",\n      \"status\": \"installed\"\n    },\n    {\n      \"name\": \"kanban\",\n      \"requested_version\": \"2.1.0\",\n      \"source\": \"https://github.com/RMS-Ltd/ai-dev-kit/releases/download/kanban-v2.1.0/...\",\n      \"hash\": \"sha256:...\",\n      \"status\": \"installed\"\n    }\n  ],\n  \"validation\": {\n    \"workflow_installer\": {\n      \"status\": \"success\",\n      \"warnings\": []\n    },\n    \"kanban_installer\": {\n      \"status\": \"success\",\n      \"warnings\": [\n        \"Detected existing Kanban docs, switched to migration mode\"\n      ]\n    }\n  },\n  \"log_paths\": {\n    \"combined\": \"logs/ai-dev-kit/install/install-20260318-1200.log\",\n    \"cli\": \"logs/ai-dev-kit/install/install-20260318-1200.log\",\n    \"framework\": \"logs/ai-dev-kit/install/install-20260318-1200.log\"\n  },\n  \"nonce\": \"be9d06c6b7fb4d0b\",\n  \"signature\": \"hmac-sha256:4b1c…\",\n  \"submitted\": false\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key requirements:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "install_run_id"
        }), " is globally unique (timestamp + random suffix)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "nonce"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "signature"
        }), " allow the maintainer API to detect tampering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "submitted"
        }), " flips to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), " when the client agent successfully reports the receipt back."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "client-submission-workflow",
      children: "Client Submission Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Install frameworks"
        }), " via GitHub Release (see installation guide)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Locate receipt"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "logs/ai-dev-kit/install/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate install telemetry first"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit logs validate-install-log --limit 1"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "This ensures the latest JSON install log has required event-contract and correlation fields before submission."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create feedback payload from install telemetry"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit logs prepare-feedback-payload"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Optional: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--install-log <path>"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--output <path>"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate feedback payload"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit logs validate-feedback-payload --file logs/ai-dev-kit/feedback/payload-*.json"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Submit payload through deterministic submission path"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit logs submit-feedback-payload --file logs/ai-dev-kit/feedback/payload-*.json"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outcome handling"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "accepted"
            }), ": local submission receipt written under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "logs/ai-dev-kit/feedback/submissions/"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "needs-redaction"
            }), ": payload rejected until sensitive content is removed"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "needs-more-context"
            }), ": payload rejected until required troubleshooting context is included"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rejected"
            }), ": schema invalid; fix validation errors then retry"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "receipt-signing",
      children: "Receipt Signing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Default signer: HMAC-SHA256 using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_logging.receipt_key"
        }), " value in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects should rotate keys via standard secret management. Future versions may support asymmetric signatures (Ed25519)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If no key is configured, receipts are generated but flagged ", (0,jsx_runtime.jsx)(_components.code, {
          children: "signature: null"
        }), " and rejected by the maintainer API."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai-agent-guidance",
      children: "AI Agent Guidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When your agent completes an install run:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse the newest receipt file."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Summarize the run in the project log or PR comment."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Submit the receipt via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit receipt submit …"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If submission fails, retry up to 3 times and attach the failure reason to the PR."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assistants integrating with other orchestration tools should map this to whatever “post-install verification” hook they expose."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-062 – GitHub Release Installation Experience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-047 – Install Logging for Framework Dependencies."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: E5:S01", ":T62", " – GitHub Release Installation Experience."]
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