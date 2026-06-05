"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["30636"], {
86199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_doc_lifecycle_policy_md_564_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-doc-lifecycle-policy-md-564.json
var site_docs_architecture_standards_and_adrs_doc_lifecycle_policy_md_564_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/doc-lifecycle-policy","title":"Document Lifecycle Policy","description":"Version: 1.0.0","source":"@site/../docs/architecture/standards-and-adrs/doc-lifecycle-policy.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/doc-lifecycle-policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/doc-lifecycle-policy.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Document Lifecycle Metadata Specification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec"},"next":{"title":"Documentation Health Monitoring","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/documentation-health-monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/doc-lifecycle-policy.md


const frontMatter = {};
const contentTitle = 'Document Lifecycle Policy';

const assets = {

};



const toc = [{
  "value": "📋 Overview",
  "id": "-overview",
  "level": 2
}, {
  "value": "🎯 Policy Principles",
  "id": "-policy-principles",
  "level": 2
}, {
  "value": "1. Default to Evergreen",
  "id": "1-default-to-evergreen",
  "level": 3
}, {
  "value": "2. Lifecycle Must Be Explicit",
  "id": "2-lifecycle-must-be-explicit",
  "level": 3
}, {
  "value": "3. Reference-Aware Cleanup",
  "id": "3-reference-aware-cleanup",
  "level": 3
}, {
  "value": "4. Audit Trail Preservation",
  "id": "4-audit-trail-preservation",
  "level": 3
}, {
  "value": "5. Agent-Driven Management",
  "id": "5-agent-driven-management",
  "level": 3
}, {
  "value": "📐 Classification Rules",
  "id": "-classification-rules",
  "level": 2
}, {
  "value": "Evergreen Documents",
  "id": "evergreen-documents",
  "level": 3
}, {
  "value": "Timeboxed Documents",
  "id": "timeboxed-documents",
  "level": 3
}, {
  "value": "Transient Documents",
  "id": "transient-documents",
  "level": 3
}, {
  "value": "🧹 Housekeeping Process",
  "id": "-housekeeping-process",
  "level": 2
}, {
  "value": "Automated Housekeeping Workflow",
  "id": "automated-housekeeping-workflow",
  "level": 3
}, {
  "value": "Manual Housekeeping",
  "id": "manual-housekeeping",
  "level": 3
}, {
  "value": "Housekeeping Exceptions",
  "id": "housekeeping-exceptions",
  "level": 3
}, {
  "value": "🔄 Lifecycle Management",
  "id": "-lifecycle-management",
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
  "value": "📋 Agent Requirements",
  "id": "-agent-requirements",
  "level": 2
}, {
  "value": "Document Creation",
  "id": "document-creation",
  "level": 3
}, {
  "value": "Document Updates",
  "id": "document-updates",
  "level": 3
}, {
  "value": "Lifecycle Changes",
  "id": "lifecycle-changes",
  "level": 3
}, {
  "value": "🛡️ Enforcement",
  "id": "️-enforcement",
  "level": 2
}, {
  "value": "Validation",
  "id": "validation",
  "level": 3
}, {
  "value": "Monitoring",
  "id": "monitoring",
  "level": 3
}, {
  "value": "📚 Related Documents",
  "id": "-related-documents",
  "level": 2
}, {
  "value": "🔗 Integration with Workflows",
  "id": "-integration-with-workflows",
  "level": 2
}, {
  "value": "Release Workflow (RW)",
  "id": "release-workflow-rw",
  "level": 3
}, {
  "value": "Doc Housekeeping Workflow",
  "id": "doc-housekeeping-workflow",
  "level": 3
}, {
  "value": "📝 Examples",
  "id": "-examples",
  "level": 2
}, {
  "value": "Example 1: Creating a Transient Renumbering Plan",
  "id": "example-1-creating-a-transient-renumbering-plan",
  "level": 3
}, {
  "value": "Example 2: Creating a Timeboxed Analysis",
  "id": "example-2-creating-a-timeboxed-analysis",
  "level": 3
}, {
  "value": "Example 3: Promoting Transient to Timeboxed",
  "id": "example-3-promoting-transient-to-timeboxed",
  "level": 3
}, {
  "value": "🎯 Success Criteria",
  "id": "-success-criteria",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "document-lifecycle-policy",
        children: "Document Lifecycle Policy"
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
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec",
        children: "Document Lifecycle Metadata Spec"
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/kb-structure-overview",
        children: "KB Structure Overview"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-overview",
      children: "📋 Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This policy governs the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lifecycle management"
      }), " of Knowledge Base (KB) documents, defining when documents should be classified as evergreen, timeboxed, or transient, and how housekeeping should be performed to prevent documentation bloat while preserving valuable content."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All documents in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " directory tree"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent-created planning, analysis, and implementation documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standards, ADRs, and canonical documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goals:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevent documentation bloat from obsolete temporary documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve evergreen content and historically significant artifacts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable automated housekeeping through clear lifecycle rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain audit trails for completed work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-policy-principles",
      children: "🎯 Policy Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-default-to-evergreen",
      children: "1. Default to Evergreen"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " When in doubt, classify documents as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "evergreen"
      }), ". It's easier to archive later than to recreate lost content."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exception:"
      }), " Explicitly temporary documents (renumbering plans, one-time implementation sequences) should be marked ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transient"
      }), " from creation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-lifecycle-must-be-explicit",
      children: "2. Lifecycle Must Be Explicit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " All KB documents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " include lifecycle metadata in front-matter. Agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " set lifecycle when creating documents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enforcement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agents should validate front-matter before committing KB documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Housekeeping workflow should flag documents missing lifecycle metadata"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-reference-aware-cleanup",
      children: "3. Reference-Aware Cleanup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Documents referenced from evergreen sources ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST NOT"
      }), " be deleted, even if marked ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transient"
      }), " or expired."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Protection Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Links from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: evergreen"
        }), " documents"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "References in released changelogs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git commit history (always preserved)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Auto-upgrade ", (0,jsx_runtime.jsx)(_components.code, {
        children: "housekeeping_policy"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "archive"
      }), " if references found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-audit-trail-preservation",
      children: "4. Audit Trail Preservation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Documents that serve as evidence of completed work ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SHOULD"
      }), " be archived, not deleted, even if transient."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Renumbering plans that document completed migrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analysis documents referenced in Story completions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation plans that led to released features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "housekeeping_policy: archive"
      }), " for transient docs that document completed work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-agent-driven-management",
      children: "5. Agent-Driven Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " AI agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " create and maintain lifecycle metadata according to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec",
        children: "Document Lifecycle Metadata Spec"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set lifecycle based on document type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply default TTL and housekeeping policy"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Calculate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "created_at + ttl_days"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log lifecycle promotions/demotions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-classification-rules",
      children: "📐 Classification Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evergreen-documents",
      children: "Evergreen Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lifecycle: evergreen"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical technical standards and ADRs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban Epics and Stories (project management artifacts)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Core how-to guides and user-facing documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework documentation and API references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Governance policies and rituals"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metadata:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "lifecycle: evergreen\nttl_days: null\nhousekeeping_policy: keep\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Housekeeping:"
      }), " Never deleted or archived."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timeboxed-documents",
      children: "Timeboxed Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lifecycle: timeboxed"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design spikes and exploratory analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refactoring plans and migration strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impact analysis documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research documents that inform decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents that may be useful historically but not actively maintained"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metadata:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "lifecycle: timeboxed\nttl_days: 90  # Default: 3 months\nhousekeeping_policy: archive\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Housekeeping:"
      }), " Archived to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/Archive/"
      }), " after expiration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transient-documents",
      children: "Transient Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lifecycle: transient"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Renumbering plans and one-time operational sequences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation step-by-step plans (can be recreated by agents)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Temporary planning documents for completed tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents with low unique value, easily regenerated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metadata:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "lifecycle: transient\nttl_days: 14  # Default: 2 weeks (or 30 for implementation plans)\nhousekeeping_policy: delete\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Housekeeping:"
      }), " Deleted after expiration (unless referenced or evidence)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-housekeeping-process",
      children: "🧹 Housekeeping Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-housekeeping-workflow",
      children: "Automated Housekeeping Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " Periodic (weekly/monthly) or manual execution"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scan:"
        }), " Walk ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/**"
        }), " and parse front-matter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Filter:"
        }), " Find documents where:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "lifecycle in {timeboxed, transient}"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "AND"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expires_at <= now()"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze References:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Search for links/back-references to each expired document"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check if referenced from evergreen docs or changelogs"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Determine Action:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If referenced → Auto-upgrade to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "archive"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "housekeeping_policy: delete"
            }), " and no references → Delete"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "housekeeping_policy: archive"
            }), " → Archive"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete:"
            }), " Remove from KB (or move to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/_graveyard/"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Archive:"
            }), " Move to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/Archive/{original_path}"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log:"
        }), " Create changelog entry documenting housekeeping actions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-housekeeping",
      children: "Manual Housekeeping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " User-initiated cleanup or lifecycle promotion/demotion"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review expired documents (housekeeping workflow can generate report)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decide on action (archive, delete, promote)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update lifecycle metadata if promoting/demoting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute housekeeping action"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log in changelog or Story task notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "housekeeping-exceptions",
      children: "Housekeeping Exceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documents that MUST NOT be deleted:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Referenced from evergreen docs"
        }), " – Auto-upgrade to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "archive"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Referenced in changelogs"
        }), " – Always archive, never delete"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence of completed work"
        }), " – Archive even if transient"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documents with unique historical context"
        }), " – Archive instead of delete"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documents that CAN be deleted:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unreferenced transient docs"
        }), " – After expiration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regenerable implementation plans"
        }), " – If no unique value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Obsolete planning docs"
        }), " – If task completed and no references"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-lifecycle-management",
      children: "🔄 Lifecycle Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "promotion-upgrade-lifecycle",
      children: "Promotion (Upgrade Lifecycle)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " Document becomes more valuable than initially classified"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transient renumbering plan → Timeboxed (if referenced in Story completion)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timeboxed analysis → Evergreen (if becomes canonical reference)"
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
        children: ["Recalculate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        }), " if needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log promotion"
        }), " in changelog or Story notes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Rule:"
      }), " Promotions ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " be explicit and logged. Never silently promote."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "demotion-downgrade-lifecycle",
      children: "Demotion (Downgrade Lifecycle)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " Document becomes less valuable (rare)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evergreen doc becomes obsolete → Timeboxed (archive after period)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timeboxed doc less useful → Transient (delete after period)"
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
      id: "-agent-requirements",
      children: "📋 Agent Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "document-creation",
      children: "Document Creation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When creating KB documents, agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify document type"
        }), " from context (task description, file path, content)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Map to lifecycle"
        }), " using classification rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply defaults"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
            children: "created_at"
          })]
        }), " to current UTC time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Calculate ", (0,jsx_runtime.jsx)(_components.code, {
            children: "expires_at"
          })]
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "created_at + ttl_days"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Include all metadata"
        }), " in front-matter"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      }), " Agents should validate front-matter before committing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "document-updates",
      children: "Document Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When updating KB documents, agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SHOULD"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preserve lifecycle metadata"
        }), " unless explicitly changing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
            children: "created_at"
          })]
        }), " only if document is being rewritten (not edited)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Recalculate ", (0,jsx_runtime.jsx)(_components.code, {
            children: "expires_at"
          })]
        }), " if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), " changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log lifecycle changes"
        }), " in changelog or Story notes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lifecycle-changes",
      children: "Lifecycle Changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When promoting/demoting documents, agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update lifecycle metadata"
        }), " explicitly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log change"
        }), " with reason"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update related references"
        }), " if lifecycle affects housekeeping policy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-enforcement",
      children: "🛡️ Enforcement"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation",
      children: "Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Commit:"
      }), " Agents should validate lifecycle metadata before committing KB documents:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All required fields present"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle"
        }), " is valid enum value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), " matches lifecycle (null for evergreen, integer for others)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        }), " calculated correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        }), " matches lifecycle defaults (unless overridden)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Housekeeping Workflow:"
      }), " Should flag documents missing lifecycle metadata for manual review."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitoring",
      children: "Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metrics to Track:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Number of documents by lifecycle (", (0,jsx_runtime.jsx)(_components.code, {
          children: "evergreen"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timeboxed"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transient"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of expired documents pending housekeeping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of documents archived/deleted per housekeeping run"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of lifecycle promotions/demotions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reports:"
      }), " Housekeeping workflow should generate reports of expired documents and proposed actions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-related-documents",
      children: "📚 Related Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specification:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "doc-lifecycle-metadata-spec.md"
          })
        }), " – Metadata schema and field definitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/doc-housekeeping-workflow.yaml"
        }), " – Automated housekeeping workflow"]
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
      id: "-integration-with-workflows",
      children: "🔗 Integration with Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-workflow-rw",
      children: "Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When:"
      }), " Completing tasks that create temporary documents"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Ensure temporary documents have correct lifecycle metadata:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Renumbering plans → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transient"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days: 14"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy: delete"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Analysis documents → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timeboxed"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days: 90"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy: archive"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up:"
      }), " Create maintenance task for housekeeping expired docs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doc-housekeeping-workflow",
      children: "Doc Housekeeping Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Automated cleanup of expired documents"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " Periodic (weekly/monthly) or manual"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      }), " See \"Automated Housekeeping Workflow\" section above"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Changelog entry documenting housekeeping actions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-examples",
      children: "📝 Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-creating-a-transient-renumbering-plan",
      children: "Example 1: Creating a Transient Renumbering Plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " Task \"E2:S04", ":T05", " – Renumber Story IDs\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Action:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: transient\nttl_days: 14\ncreated_at: 2025-12-04T11:30:00Z\nexpires_at: 2025-12-18T11:30:00Z\nhousekeeping_policy: delete\n---\n# E2:S04:T05 – Renumbering Plan\n\n## Steps to Renumber Story IDs\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " One-time operational document, easily regenerated, low unique value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-creating-a-timeboxed-analysis",
      children: "Example 2: Creating a Timeboxed Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " Task \"E2:S04", ":T01", " – Analyze RW Adoption Friction\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Action:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: timeboxed\nttl_days: 90\ncreated_at: 2025-12-04T11:30:00Z\nexpires_at: 2025-03-04T11:30:00Z\nhousekeeping_policy: archive\n---\n# T01 – RW Adoption Friction Analysis\n\nThis analysis documents current friction points...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Informative analysis, may be useful historically, but not actively maintained."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-promoting-transient-to-timeboxed",
      children: "Example 3: Promoting Transient to Timeboxed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " Renumbering plan completed, referenced in Story completion"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Action:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update lifecycle metadata:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: timeboxed  # Changed from transient\nttl_days: 90          # Changed from 14\ncreated_at: 2025-12-04T11:30:00Z\nexpires_at: 2025-03-04T11:30:00Z  # Recalculated\nhousekeeping_policy: archive      # Changed from delete\n---\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log promotion in Story task notes:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Lifecycle Promotion:** Renumbering plan promoted from `transient` to `timeboxed` \nbecause it documents completed work and is referenced in Story completion.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-success-criteria",
      children: "🎯 Success Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy is successful if:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All KB documents have lifecycle metadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Expired transient/timeboxed docs are cleaned up regularly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Evergreen docs are never deleted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Referenced docs are protected from deletion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Housekeeping actions are logged and auditable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Documentation bloat is prevented without losing valuable content"
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