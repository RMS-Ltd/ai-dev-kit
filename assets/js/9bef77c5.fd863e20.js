"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["99242"], {
49809(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_doc_lifecycle_metadata_spec_md_9be_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-doc-lifecycle-metadata-spec-md-9be.json
var site_docs_architecture_standards_and_adrs_doc_lifecycle_metadata_spec_md_9be_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/doc-lifecycle-metadata-spec","title":"Document Lifecycle Metadata Specification","description":"Version: 1.0.0","source":"@site/../docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/doc-lifecycle-metadata-spec","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Doc-Init (+0) Migration Guide for Existing Projects","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/doc-init-migration-guide"},"next":{"title":"Document Lifecycle Policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-policy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md


const frontMatter = {};
const contentTitle = 'Document Lifecycle Metadata Specification';

const assets = {

};



const toc = [{
  "value": "📋 Overview",
  "id": "-overview",
  "level": 2
}, {
  "value": "🎯 Goals",
  "id": "-goals",
  "level": 2
}, {
  "value": "📐 Metadata Schema",
  "id": "-metadata-schema",
  "level": 2
}, {
  "value": "Required Fields",
  "id": "required-fields",
  "level": 3
}, {
  "value": "Field Definitions",
  "id": "field-definitions",
  "level": 3
}, {
  "value": "<code>lifecycle</code> (required, enum)",
  "id": "lifecycle-required-enum",
  "level": 4
}, {
  "value": "<code>ttl_days</code> (required, integer | null)",
  "id": "ttl_days-required-integer--null",
  "level": 4
}, {
  "value": "<code>created_at</code> (required, ISO 8601 datetime)",
  "id": "created_at-required-iso-8601-datetime",
  "level": 4
}, {
  "value": "<code>expires_at</code> (required, ISO 8601 datetime | null)",
  "id": "expires_at-required-iso-8601-datetime--null",
  "level": 4
}, {
  "value": "<code>housekeeping_policy</code> (required, enum)",
  "id": "housekeeping_policy-required-enum",
  "level": 4
}, {
  "value": "📊 Document Type → Lifecycle Mapping",
  "id": "-document-type--lifecycle-mapping",
  "level": 2
}, {
  "value": "Default Classifications",
  "id": "default-classifications",
  "level": 3
}, {
  "value": "Agent Decision Tree",
  "id": "agent-decision-tree",
  "level": 3
}, {
  "value": "🔄 Lifecycle Transitions",
  "id": "-lifecycle-transitions",
  "level": 2
}, {
  "value": "Promotion (Upgrade Lifecycle)",
  "id": "promotion-upgrade-lifecycle",
  "level": 3
}, {
  "value": "Demotion (Downgrade Lifecycle)",
  "id": "demotion-downgrade-lifecycle",
  "level": 3
}, {
  "value": "🛡️ Protection Rules",
  "id": "️-protection-rules",
  "level": 2
}, {
  "value": "Reference-Based Protection",
  "id": "reference-based-protection",
  "level": 3
}, {
  "value": "Immutable Evidence Protection",
  "id": "immutable-evidence-protection",
  "level": 3
}, {
  "value": "📝 Examples",
  "id": "-examples",
  "level": 2
}, {
  "value": "Example 1: Evergreen Standard",
  "id": "example-1-evergreen-standard",
  "level": 3
}, {
  "value": "Example 2: Timeboxed Analysis",
  "id": "example-2-timeboxed-analysis",
  "level": 3
}, {
  "value": "Example 3: Transient Renumbering Plan",
  "id": "example-3-transient-renumbering-plan",
  "level": 3
}, {
  "value": "🔗 Related Documents",
  "id": "-related-documents",
  "level": 2
}, {
  "value": "📚 References",
  "id": "-references",
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
    h4: "h4",
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
        id: "document-lifecycle-metadata-specification",
        children: "Document Lifecycle Metadata Specification"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Draft", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-policy",
        children: "Document Lifecycle Policy"
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/kb-structure-overview",
        children: "KB Structure Overview"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-overview",
      children: "📋 Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This specification defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "metadata fields"
      }), " that control document lifecycle management in the Knowledge Base (KB). Documents can be marked as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "evergreen"
      }), " (persistent), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "timeboxed"
      }), " (archive after period), or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "transient"
      }), " (delete after period), enabling automated housekeeping to prevent documentation bloat."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lifecycle classification:"
        }), " Documents are classified by their intended persistence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTL-based expiration:"
        }), " Time-to-live (TTL) determines when documents become eligible for housekeeping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference-aware cleanup:"
        }), " Documents referenced from evergreen sources are protected from deletion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent-driven management:"
        }), " AI agents create and maintain lifecycle metadata automatically"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-goals",
      children: "🎯 Goals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prevent documentation bloat"
        }), " by identifying and managing temporary documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preserve evergreen content"
        }), " while allowing cleanup of obsolete planning/implementation docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable automated housekeeping"
        }), " through clear, machine-readable metadata"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintain audit trails"
        }), " by archiving (not deleting) historically significant temporary docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support agent-driven workflows"
        }), " with explicit lifecycle rules and defaults"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-metadata-schema",
      children: "📐 Metadata Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-fields",
      children: "Required Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All KB documents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " include the following front-matter fields:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: evergreen | timeboxed | transient\nttl_days: <integer> | null\ncreated_at: <ISO 8601 datetime>\nexpires_at: <ISO 8601 datetime> | null\nhousekeeping_policy: keep | archive | delete\n---\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "field-definitions",
      children: "Field Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "lifecycle-required-enum",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "lifecycle"
      }), " (required, enum)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Classifies the document's intended persistence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Values:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "evergreen"
          })
        }), " – Permanent, canonical documentation (standards, ADRs, core how-tos, Kanban Epics/Stories)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "timeboxed"
          })
        }), " – Temporarily useful, archive after period (design spikes, exploratory analysis, refactoring plans)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "transient"
          })
        }), " – Operational scratch, delete after period (implementation plans, renumbering sequences, one-time scripts)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Default:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "evergreen"
      }), " (if omitted, assume permanent)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Rule:"
      }), " Agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lifecycle"
      }), " when creating KB documents. If uncertain, default to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "evergreen"
      }), " and let user override."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "ttl_days-required-integer--null",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ttl_days"
      }), " (required, integer | null)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Time-to-live in days from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "created_at"
      }), " until ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expires_at"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Values:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integer"
        }), " (1-3650) – Number of days until expiration (only meaningful for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timeboxed"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transient"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "null"
          })
        }), " – No expiration (required for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: evergreen"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Default by Lifecycle:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "evergreen"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "timeboxed"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "90"
        }), " (3 months)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "transient"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "14"
        }), " (2 weeks) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "30"
        }), " (1 month) depending on doc type"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Rule:"
      }), " Agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ttl_days"
      }), " based on lifecycle. For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "evergreen"
      }), ", set to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), ". For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "timeboxed"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "transient"
      }), ", use defaults unless explicitly overridden."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "created_at-required-iso-8601-datetime",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "created_at"
      }), " (required, ISO 8601 datetime)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Timestamp when document was created."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYY-MM-DDTHH:MM:SSZ"
      }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2025-12-04T11:30:00Z"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Rule:"
      }), " Agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "created_at"
      }), " to current UTC time when creating documents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "expires_at-required-iso-8601-datetime--null",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "expires_at"
      }), " (required, ISO 8601 datetime | null)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Calculated expiration timestamp (", (0,jsx_runtime.jsx)(_components.code, {
        children: "created_at + ttl_days"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYY-MM-DDTHH:MM:SSZ"
      }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2025-12-18T11:30:00Z"
      }), ") or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Calculation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at = null"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), " is integer → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at = created_at + ttl_days days"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Rule:"
      }), " Agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " calculate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expires_at"
      }), " from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "created_at + ttl_days"
      }), " when creating documents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "housekeeping_policy-required-enum",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "housekeeping_policy"
      }), " (required, enum)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Determines action when document expires."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Values:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "keep"
          })
        }), " – Never delete or archive (required for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: evergreen"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "archive"
          })
        }), " – Move to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/Archive/"
        }), " when expired (typical for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timeboxed"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "delete"
          })
        }), " – Remove from KB when expired (typical for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transient"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Default by Lifecycle:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "evergreen"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "keep"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "timeboxed"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "archive"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "transient"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "delete"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Rule:"
      }), " Agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "housekeeping_policy"
      }), " based on lifecycle defaults unless explicitly overridden."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-document-type--lifecycle-mapping",
      children: "📊 Document Type → Lifecycle Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "default-classifications",
      children: "Default Classifications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Document Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TTL (days)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Housekeeping Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standards & ADRs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "evergreen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "keep"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical technical standards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kanban Epics/Stories"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "evergreen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "keep"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project management artifacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Core How-Tos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "evergreen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "keep"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-facing guides"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Design Spikes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "timeboxed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "90"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "archive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploratory analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refactoring Plans"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "timeboxed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "90"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "archive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation planning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Renumbering Plans"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "transient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "14"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-time operational docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation Sequences"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "transient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "30"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step-by-step execution plans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analysis Documents"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "timeboxed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "90"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "archive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Research, impact analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent-decision-tree",
      children: "Agent Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When creating a KB document, agents should:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify document type"
        }), " from context (task description, file path, content)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Map to lifecycle"
        }), " using table above"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply defaults"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculate"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "created_at + ttl_days"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set all fields"
        }), " in front-matter"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: transient\nttl_days: 14\ncreated_at: 2025-12-04T11:30:00Z\nexpires_at: 2025-12-18T11:30:00Z\nhousekeeping_policy: delete\n---\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-lifecycle-transitions",
      children: "🔄 Lifecycle Transitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "promotion-upgrade-lifecycle",
      children: "Promotion (Upgrade Lifecycle)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Documents can be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "promoted"
      }), " to longer lifecycle:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "transient → timeboxed"
          })
        }), " – If document turns out more useful than expected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "timeboxed → evergreen"
          })
        }), " – If document becomes canonical reference"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle"
        }), " field"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), " (set to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " if promoting to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "evergreen"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        }), " (recalculate or set to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        }), " (if needed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log promotion"
        }), " in changelog or Story task notes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Rule:"
      }), " Agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST NOT"
      }), " silently promote documents. Promotion should be explicit and logged."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "demotion-downgrade-lifecycle",
      children: "Demotion (Downgrade Lifecycle)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Documents can be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "demoted"
      }), " to shorter lifecycle (rare):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "evergreen → timeboxed"
          })
        }), " – If document becomes obsolete but historically valuable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "timeboxed → transient"
          })
        }), " – If document is less useful than expected"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle"
        }), " field"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set appropriate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recalculate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log demotion"
        }), " with reason"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Rule:"
      }), " Demotion should be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "explicit and rare"
      }), ". Consider archiving instead of demoting evergreen docs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-protection-rules",
      children: "🛡️ Protection Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reference-based-protection",
      children: "Reference-Based Protection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Documents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST NOT"
      }), " be deleted if they are:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Referenced from evergreen docs"
        }), " – Links from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: evergreen"
        }), " documents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Referenced in changelogs"
        }), " – Mentioned in released changelog entries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Referenced in git history"
        }), " – Committed in git (always preserved via git)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Housekeeping Workflow Rule:"
      }), " Before deleting, scan for references. If found, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "auto-upgrade"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "archive"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "immutable-evidence-protection",
      children: "Immutable Evidence Protection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Documents that serve as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "audit trail evidence"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST NOT"
      }), " be deleted:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents referenced from released changelogs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents that document completed work (even if transient)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents that contain unique historical context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "housekeeping_policy: archive"
      }), " even for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transient"
      }), " docs if they serve as evidence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-examples",
      children: "📝 Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-evergreen-standard",
      children: "Example 1: Evergreen Standard"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: evergreen\nttl_days: null\ncreated_at: 2025-12-04T11:30:00Z\nexpires_at: null\nhousekeeping_policy: keep\n---\n# Document Lifecycle Metadata Specification\n\nThis document defines the metadata fields...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-timeboxed-analysis",
      children: "Example 2: Timeboxed Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: timeboxed\nttl_days: 90\ncreated_at: 2025-12-04T11:30:00Z\nexpires_at: 2025-03-04T11:30:00Z\nhousekeeping_policy: archive\n---\n# T01 – RW Adoption Friction Analysis\n\nThis analysis documents current friction points...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-transient-renumbering-plan",
      children: "Example 3: Transient Renumbering Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: transient\nttl_days: 14\ncreated_at: 2025-12-04T11:30:00Z\nexpires_at: 2025-12-18T11:30:00Z\nhousekeeping_policy: delete\n---\n# E2:S04:T05 – Renumbering Plan\n\n## Steps to Renumber Story IDs\n\n1. Update epic-02.md...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-related-documents",
      children: "🔗 Related Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-policy",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "doc-lifecycle-policy.md"
          })
        }), " – Governance and enforcement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/doc-housekeeping-workflow.yaml"
        }), " – Automated housekeeping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KB Structure:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/kb-structure-overview",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kb-structure-overview.md"
          })
        }), " – KB organization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-references",
      children: "📚 References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ISO 8601:"
        }), " Date/time format standard"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTL Pattern:"
        }), " Network protocol time-to-live concept"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Lifecycle:"
        }), " Information lifecycle management principles"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Draft – Awaiting review and adoption"]
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