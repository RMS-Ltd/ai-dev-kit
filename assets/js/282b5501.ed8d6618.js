"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["39559"], {
76724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_knowledge_documentation_structure_analysis_md_282_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-knowledge-documentation-structure-analysis-md-282.json
var site_docs_knowledge_analysis_knowledge_documentation_structure_analysis_md_282_namespaceObject = JSON.parse('{"id":"knowledge/analysis/knowledge-documentation-structure-analysis","title":"Knowledge/Documentation Structure Analysis","description":"Purpose: Comprehensive knowledge base and documentation structure analysis across all projects to inform the \\"ultimate\\" canonical docs/documentation structure","source":"@site/../docs/knowledge/analysis/knowledge-documentation-structure-analysis.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/knowledge-documentation-structure-analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/knowledge-documentation-structure-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/knowledge-documentation-structure-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-17T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Debug Path Framework Analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/debug-path-framework-analysis"},"next":{"title":"Meta-Analysis: Canonical vs Legacy Matrices","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-canonical-vs-legacy-matrices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/knowledge-documentation-structure-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-17T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Knowledge/Documentation Structure Analysis';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. docs/documentation Directory Naming Conventions",
  "id": "1-docsdocumentation-directory-naming-conventions",
  "level": 2
}, {
  "value": "1.1 Root Directory Naming Patterns",
  "id": "11-root-directory-naming-patterns",
  "level": 3
}, {
  "value": "1.2 Directory Naming Summary",
  "id": "12-directory-naming-summary",
  "level": 3
}, {
  "value": "2. KB Directory Organization Patterns",
  "id": "2-kb-directory-organization-patterns",
  "level": 2
}, {
  "value": "2.1 ADK Canonical Structure (5 Pillars)",
  "id": "21-adk-canonical-structure-5-pillars",
  "level": 3
}, {
  "value": "2.2 Complex Multi-Pillar Structure (15+ Pillars)",
  "id": "22-complex-multi-pillar-structure-15-pillars",
  "level": 3
}, {
  "value": "2.3 Pre-ADK Structure (Custom Organization)",
  "id": "23-pre-adk-structure-custom-organization",
  "level": 3
}, {
  "value": "2.4 Hybrid Structure (KB + docs/)",
  "id": "24-hybrid-structure-kb--docs",
  "level": 3
}, {
  "value": "2.5 Directory Organization Summary",
  "id": "25-directory-organization-summary",
  "level": 3
}, {
  "value": "3. Document Structure Patterns",
  "id": "3-document-structure-patterns",
  "level": 2
}, {
  "value": "3.1 Frontmatter Patterns",
  "id": "31-frontmatter-patterns",
  "level": 3
}, {
  "value": "3.2 Document Lifecycle Metadata Usage",
  "id": "32-document-lifecycle-metadata-usage",
  "level": 3
}, {
  "value": "3.3 Document Section Patterns",
  "id": "33-document-section-patterns",
  "level": 3
}, {
  "value": "4. Navigation and Index Patterns",
  "id": "4-navigation-and-index-patterns",
  "level": 2
}, {
  "value": "4.1 Index File Naming",
  "id": "41-index-file-naming",
  "level": 3
}, {
  "value": "4.2 Navigation Structure Patterns",
  "id": "42-navigation-structure-patterns",
  "level": 3
}, {
  "value": "5. Cross-Referencing Patterns",
  "id": "5-cross-referencing-patterns",
  "level": 2
}, {
  "value": "5.1 Link Format Patterns",
  "id": "51-link-format-patterns",
  "level": 3
}, {
  "value": "5.2 Cross-Reference Patterns",
  "id": "52-cross-reference-patterns",
  "level": 3
}, {
  "value": "6. Document Type Patterns",
  "id": "6-document-type-patterns",
  "level": 2
}, {
  "value": "6.1 Document Type Classifications",
  "id": "61-document-type-classifications",
  "level": 3
}, {
  "value": "6.2 Document Type → Lifecycle Mapping",
  "id": "62-document-type--lifecycle-mapping",
  "level": 3
}, {
  "value": "7. Template Usage Patterns",
  "id": "7-template-usage-patterns",
  "level": 2
}, {
  "value": "7.1 Template Location Patterns",
  "id": "71-template-location-patterns",
  "level": 3
}, {
  "value": "7.2 Template Usage Patterns",
  "id": "72-template-usage-patterns",
  "level": 3
}, {
  "value": "8. Documentation Governance Patterns",
  "id": "8-documentation-governance-patterns",
  "level": 2
}, {
  "value": "8.1 Governance Structure Patterns",
  "id": "81-governance-structure-patterns",
  "level": 3
}, {
  "value": "8.2 Documentation Review Patterns",
  "id": "82-documentation-review-patterns",
  "level": 3
}, {
  "value": "9. Recommendations for &quot;Ultimate&quot; Canonical Structure",
  "id": "9-recommendations-for-ultimate-canonical-structure",
  "level": 2
}, {
  "value": "9.1 KB Root Directory",
  "id": "91-kb-root-directory",
  "level": 3
}, {
  "value": "9.2 Directory Organization",
  "id": "92-directory-organization",
  "level": 3
}, {
  "value": "9.3 Document Structure",
  "id": "93-document-structure",
  "level": 3
}, {
  "value": "9.4 Navigation",
  "id": "94-navigation",
  "level": 3
}, {
  "value": "9.5 Cross-Referencing",
  "id": "95-cross-referencing",
  "level": 3
}, {
  "value": "9.6 Template System",
  "id": "96-template-system",
  "level": 3
}, {
  "value": "10. Summary: &quot;Ultimate&quot; Canonical docs/documentation Structure",
  "id": "10-summary-ultimate-canonical-docsdocumentation-structure",
  "level": 2
}, {
  "value": "10.1 Root Directory",
  "id": "101-root-directory",
  "level": 3
}, {
  "value": "10.2 Directory Organization",
  "id": "102-directory-organization",
  "level": 3
}, {
  "value": "10.3 Document Structure",
  "id": "103-document-structure",
  "level": 3
}, {
  "value": "10.4 Navigation",
  "id": "104-navigation",
  "level": 3
}, {
  "value": "10.5 Cross-Referencing",
  "id": "105-cross-referencing",
  "level": 3
}, {
  "value": "10.6 Template System",
  "id": "106-template-system",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "knowledgedocumentation-structure-analysis",
        children: "Knowledge/Documentation Structure Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Comprehensive knowledge base and documentation structure analysis across all projects to inform the \"ultimate\" canonical docs/documentation structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detailed knowledge/documentation structure analysis"
      }), " of KB and documentation patterns across all analyzed projects. Without this granular data, we cannot determine the \"ultimate\" canonical docs/documentation structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Questions Addressed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What docs/documentation naming conventions exist across projects?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How are docs/documentation directories organized (structure patterns)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What document structure details exist (frontmatter, sections, metadata)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What patterns emerge for document lifecycle, cross-referencing, and navigation?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the \"ultimate\" canonical structure based on real-world usage?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-docsdocumentation-directory-naming-conventions",
      children: "1. docs/documentation Directory Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-root-directory-naming-patterns",
      children: "1.1 Root Directory Naming Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " (Most Common)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " (uppercase, abbreviation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " been-there, dev-toolkit, agentic-ide-rules, confidentia, starborn_legacy, free-party-promoter, vwmp, qa-kb, ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Most common pattern (9/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Clear abbreviation, standard convention"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/"
        }), " (Pre-ADK)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/"
        }), " (lowercase, full word)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals (", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/fynd_deals/"
        }), "), confidentia (legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/"
        }), " in branch 21)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Less common, pre-ADK structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Full word, descriptive, Obsidian-friendly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " (Alternative)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " (lowercase, abbreviation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " starborn_legacy (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), "), fynd.deals (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/fynd_deals/"
        }), "), qa-kb (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Common for supplementary documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Standard convention, often used alongside ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-directory-naming-summary",
      children: "1.2 Directory Naming Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Project"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary KB Root"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Secondary Docs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "been-there"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard ADK structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge/fynd_deals/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/fynd_deals/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-ADK, Obsidian-oriented"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dev-toolkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard ADK structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard ADK structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge_restored/knowledge/"
            }), " (branch 21)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-branch, legacy preservation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "free-party-promoter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard ADK structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vwmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard ADK structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical structure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " as canonical root directory name."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-kb-directory-organization-patterns",
      children: "2. KB Directory Organization Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-adk-canonical-structure-5-pillars",
      children: "2.1 ADK Canonical Structure (5 Pillars)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern: 5-Pillar Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── Architecture/                      # Technical standards, ADRs\n├── changelog-and-release-notes/      # Release documentation\n├── project-management/                 # Project management, Kanban\n├── Guides/                           # User-facing documentation\n└── Documentation/                    # Developer documentation (optional)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard ADK structure (4/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pillar Purposes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture:"
        }), " Technical standards, ADRs, integration docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "changelog-and-release-notes:"
        }), " Release notes, changelogs, version history"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "project-management:"
        }), " Kanban, governance, rituals, epics/stories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guides:"
        }), " Getting started, framework consumption, how-tos"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " User docs, developer docs (optional)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-complex-multi-pillar-structure-15-pillars",
      children: "2.2 Complex Multi-Pillar Structure (15+ Pillars)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern: Comprehensive Enterprise Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── Architecture/                      # System design, C4 views, ADRs\n├── changelog-and-release-notes/      # Release documentation\n├── Contribution_Guide/               # KB contribution standards\n├── Customer_Enablement/              # Customer-facing docs\n├── Data_and_Insights/                # Analytics, ML, reporting\n├── Documentation/                    # Developer documentation\n├── engineering-and-platform/         # Engineering standards\n├── Governance_and_Process/            # Governance, decision records\n├── Monitoring_and_Observability/     # Alerts, dashboards\n├── Onboarding_and_Enablement/       # Onboarding, training\n├── Operations_and_SRE/               # Runbooks, operations\n├── project-management/                 # Project management\n├── Product_and_Experience/           # Product docs\n├── Security_and_Compliance/          # Security, compliance\n├── Testing/                          # Test documentation\n└── Tooling_and_Integrations/         # Tool catalogs, integrations\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Enterprise-level structure (1/9 projects)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Comprehensive organization for large, mature projects"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-pre-adk-structure-custom-organization",
      children: "2.3 Pre-ADK Structure (Custom Organization)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern: Custom Pre-ADK Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "knowledge/fynd_deals/\n├── Kanban/                           # Epic/story documentation\n├── debugging/                         # Debug paths, issues, patterns\n├── specs/                            # Module specifications\n├── use-cases/                        # Use case documentation\n├── templates/                        # Documentation templates\n├── learning/                         # Learning resources\n└── processes/                        # Process documentation\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Pre-ADK custom structure (1/9 projects)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Obsidian-oriented, custom organization"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-hybrid-structure-kb--docs",
      children: "2.4 Hybrid Structure (KB + docs/)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern: Dual Documentation Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/                                  # ADK structure\n├── Architecture/\n├── project-management/\n└── ...\n\ndocs/                                # Supplementary documentation\n├── kanban-overhaul/\n├── KANBAN_EPICS.md\n├── KANBAN_GOVERNANCE.md\n└── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " starborn_legacy, qa-kb\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Hybrid pattern (2/9 projects)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Separation of concerns, legacy preservation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-directory-organization-summary",
      children: "2.5 Directory Organization Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommendation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADK Canonical (5 pillars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (4/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Recommended for standard projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex Multi-Pillar (15+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (1/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Acceptable for enterprise projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-ADK Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (1/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Migration needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid (KB + docs/)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (2/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Acceptable for legacy projects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standard Projects:"
        }), " Use ADK canonical 5-pillar structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enterprise Projects:"
        }), " Support extension to multi-pillar structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Projects:"
        }), " Support hybrid structure during migration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-document-structure-patterns",
      children: "3. Document Structure Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-frontmatter-patterns",
      children: "3.1 Frontmatter Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: ADK Lifecycle Metadata (Standard)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: evergreen | timeboxed | transient\nttl_days: <integer> | null\ncreated_at: <ISO 8601 datetime>\nexpires_at: <ISO 8601 datetime> | null\nhousekeeping_policy: keep | archive | delete\n---\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard ADK pattern (4/9 projects)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fields:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle"
        }), ": Document persistence classification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), ": Time-to-live in days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), ": Creation timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        }), ": Expiration timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        }), ": Cleanup action"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Minimal Frontmatter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\ntitle: Architecture\nowner: Architecture Guild\nreview_cadence: quarterly\n---\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Custom pattern (1/9 projects)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fields:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "title"
        }), ": Document title"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "owner"
        }), ": Document owner"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "review_cadence"
        }), ": Review frequency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: No Frontmatter"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals (most docs), starborn_legacy (some docs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Pre-ADK pattern (2/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Pre-ADK structure, no lifecycle management"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-document-lifecycle-metadata-usage",
      children: "3.2 Document Lifecycle Metadata Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Values:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "evergreen"
          }), ":"]
        }), " Permanent documentation (standards, ADRs, Kanban Epics/Stories)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "timeboxed"
          }), ":"]
        }), " Temporarily useful (design spikes, refactoring plans)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "transient"
          }), ":"]
        }), " Operational scratch (implementation plans, renumbering sequences)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TTL Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "evergreen"
          }), ":"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days: null"
        }), " (no expiration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "timeboxed"
          }), ":"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days: 90"
        }), " (3 months default)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "transient"
          }), ":"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days: 14"
        }), " (2 weeks) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "30"
        }), " (1 month)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Housekeeping Policies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "keep"
          }), ":"]
        }), " Never delete (for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "evergreen"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "archive"
          }), ":"]
        }), " Move to archive when expired (for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timeboxed"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "delete"
          }), ":"]
        }), " Remove when expired (for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transient"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage Summary:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects with Lifecycle Metadata:"
        }), " been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit (4/9)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects without Lifecycle Metadata:"
        }), " fynd.deals, confidentia (most docs), starborn_legacy (some docs) (5/9)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-document-section-patterns",
      children: "3.3 Document Section Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Standard ADK Sections"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Document Title\n\n**Status:** [Status]  \n**Priority:** [Priority]  \n**Last updated:** [Date] (v[version])  \n**Estimated Effort:** [Effort]  \n**Version:** v[version]  \n**Code:** [Epic/Story code]\n\n---\n\n## Overview\n\n[Document overview]\n\n---\n\n## Goals\n\n[Document goals]\n\n---\n\n## [Content Sections]\n\n[Document content]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, agentic-ide-rules\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard ADK pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Minimal Sections"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Document Title\n\n[Document content without structured sections]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals, starborn_legacy (some docs)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Pre-ADK pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Comprehensive Sections"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Document Title\n\n**Status:** [Status]  \n**Owner:** [Owner]  \n**Last Updated:** [Date]  \n**Related:** [Related documents]\n\n---\n\n## Executive Summary\n\n[Summary]\n\n---\n\n## [Detailed Sections]\n\n[Content]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Enterprise pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-navigation-and-index-patterns",
      children: "4. Navigation and Index Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-index-file-naming",
      children: "4.1 Index File Naming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " (Most Common)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " Root of each directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " been-there, dev-toolkit, agentic-ide-rules, confidentia, ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Most common (5/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Directory overview and navigation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        }), " (Obsidian/Confidentia)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " Root of each directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " confidentia (branch 03), fynd.deals (some directories)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Less common (2/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Obsidian-friendly index files"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Pattern 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Kanban Board.md"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Kanban Board.md"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " Kanban directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, been-there"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Kanban-specific (2/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Kanban board overview"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 4: No Index Files"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " starborn_legacy (some directories), qa-kb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Less common (2/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Minimal structure, no navigation files"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-navigation-structure-patterns",
      children: "4.2 Navigation Structure Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Hierarchical READMEs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── README.md                         # Root navigation\n├── Architecture/\n│   └── README.md                     # Architecture navigation\n├── project-management/\n│   └── README.md                     # PM navigation\n└── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Standard ADK pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Comprehensive Index Files"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── README.md                         # Root navigation\n├── Architecture/\n│   └── _index.md                     # Architecture index with inventory table\n├── project-management/\n│   └── _index.md                     # PM index with inventory table\n└── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Enterprise pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Hub-Based Navigation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "knowledge/fynd_deals/\n├── README.md                         # Entry point\n├── Knowledge Base.md                  # Canonical KB hub (Obsidian)\n├── Kanban/\n│   └── Kanban Board.md               # Kanban hub\n└── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Obsidian-oriented pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-cross-referencing-patterns",
      children: "5. Cross-Referencing Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-link-format-patterns",
      children: "5.1 Link Format Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Markdown Links (Standard)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "[Link Text](path/to/file.md)\n[Link Text](../relative/path.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " All projects\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Universal\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Standard markdown"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Obsidian Links"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "[[Link Text]]\n[[path/to/file]]\n[[Link Text|Display Text]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Obsidian-specific (1/9 projects)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Obsidian wiki-link syntax"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Reference Links"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "[Link Text][ref-id]\n\n[ref-id]: path/to/file.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " Less common\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Rare\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Less common markdown pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-cross-reference-patterns",
      children: "5.2 Cross-Reference Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Explicit Cross-References"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Related:** [Document Lifecycle Policy](../../architecture/standards-and-adrs/doc-lifecycle-policy.md) | [KB Structure Overview](../../architecture/standards-and-adrs/kb-structure-overview.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit, dev-toolkit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Inline References"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "See [Epic 20](epic-20.md) for details.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " All projects\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Universal"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Hub-Based References"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- [[Kanban/epic-01/epic-01.md]] — Epic 1\n- [[Kanban/epic-02/epic-02.md]] — Epic 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Obsidian pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-document-type-patterns",
      children: "6. Document Type Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-document-type-classifications",
      children: "6.1 Document Type Classifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADK Document Types:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standards & ADRs"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: evergreen"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Epics/Stories"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: evergreen"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core How-Tos"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: evergreen"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design Spikes"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: timeboxed"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactoring Plans"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: timeboxed"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Renumbering Plans"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: transient"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation Sequences"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: transient"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analysis Documents"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: timeboxed"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Document Types Found:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture:"
        }), " ADRs, C4 views, specifications, integration docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban:"
        }), " Epics, Stories, Tasks, Bug Reports, Feature Requests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog:"
        }), " Release notes, changelog archives"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guides:"
        }), " Getting started, framework consumption, how-tos"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " User docs, developer docs, API references"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Debug Paths:"
        }), " Debug paths, issues, patterns (fynd.deals)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specs:"
        }), " Module specifications, API specs (fynd.deals)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Cases:"
        }), " Use case documentation (fynd.deals)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-document-type--lifecycle-mapping",
      children: "6.2 Document Type → Lifecycle Mapping"
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
            children: "Projects Using"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standards & ADRs"
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
            children: "All ADK projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban Epics/Stories"
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
            children: "All ADK projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core How-Tos"
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
            children: "All ADK projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design Spikes"
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
            children: "ai-dev-kit, dev-toolkit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Refactoring Plans"
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
            children: "ai-dev-kit, confidentia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Renumbering Plans"
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
            children: "ai-dev-kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation Sequences"
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
            children: "ai-dev-kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Analysis Documents"
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
            children: "ai-dev-kit, dev-toolkit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-template-usage-patterns",
      children: "7. Template Usage Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-template-location-patterns",
      children: "7.1 Template Location Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Templates in KB Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── project-management/\n│   └── kanban/\n│       └── templates/\n│           ├── EPIC_TEMPLATE.md\n│           └── STORY_TEMPLATE.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit, dev-toolkit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Templates in Framework Package"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/templates/\n├── EPIC_TEMPLATE.md\n├── STORY_TEMPLATE.md\n└── TASK_TEMPLATE.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " ai-dev-kit (framework package)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Framework pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: Templates in Knowledge Base"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "knowledge/fynd_deals/templates/\n├── learning.md\n├── use_case.md\n└── Templates-How-To.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " fynd.deals\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Pre-ADK pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-template-usage-patterns",
      children: "7.2 Template Usage Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Template Enforcement"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals (Epic 16: Template Usage and Enforcement)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Advanced pattern (1/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Features:"
        }), " Template validation scripts, agent rules, versioning system"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Template Guidelines"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " ai-dev-kit, dev-toolkit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Standard pattern (2/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Features:"
        }), " Template documentation, usage guidelines"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: No Template System"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " starborn_legacy, qa-kb, free-party-promoter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Basic pattern (3/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Minimal structure, no template enforcement"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-documentation-governance-patterns",
      children: "8. Documentation Governance Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-governance-structure-patterns",
      children: "8.1 Governance Structure Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Governance in KB Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── Governance_and_Process/\n│   ├── decision-records/\n│   ├── change-management/\n│   ├── quality-gates/\n│   └── templates/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Enterprise pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Governance in PM Structure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/\n├── project-management/\n│   └── rituals/\n│       └── policy/\n│           └── kanban-governance-policy.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " ADK pattern (4/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: No Explicit Governance"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, starborn_legacy, qa-kb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Pre-ADK pattern (3/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " No formal governance structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-documentation-review-patterns",
      children: "8.2 Documentation Review Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1: Review Cadence Metadata"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nreview_cadence: quarterly\nowner: Architecture Guild\n---\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Using:"
      }), " confidentia (branch 03)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Enterprise pattern (1/9 projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2: Review in Governance Policy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " ai-dev-kit, dev-toolkit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " ADK pattern (2/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Features:"
        }), " Documentation review workflow, review triggers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3: No Review System"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects Using:"
        }), " fynd.deals, starborn_legacy, qa-kb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " Basic pattern (3/9 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " No formal review process"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-recommendations-for-ultimate-canonical-structure",
      children: "9. Recommendations for \"Ultimate\" Canonical Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-kb-root-directory",
      children: "9.1 KB Root Directory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " (uppercase, abbreviation)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Most common pattern, clear abbreviation, standard convention"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support:"
        }), " Also support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/"
        }), " for pre-ADK projects during migration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-directory-organization",
      children: "9.2 Directory Organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Flexible Pillar Structure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standard Projects:"
        }), " ADK canonical 5-pillar structure", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Architecture/"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "changelog-and-release-notes/"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "project-management/"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Guides/"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Documentation/"
            }), " (optional)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enterprise Projects:"
        }), " Support extension to multi-pillar structure", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Allow additional pillars (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Security_and_Compliance/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Operations_and_SRE/"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maintain core 5 pillars as foundation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-document-structure",
      children: "9.3 Document Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: ADK Lifecycle Metadata"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "---\nlifecycle: evergreen | timeboxed | transient\nttl_days: <integer> | null\ncreated_at: <ISO 8601 datetime>\nexpires_at: <ISO 8601 datetime> | null\nhousekeeping_policy: keep | archive | delete\n---\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle"
        }), ": Document persistence classification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days"
        }), ": Time-to-live in days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), ": Creation timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "expires_at"
        }), ": Expiration timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy"
        }), ": Cleanup action"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-navigation",
      children: "9.4 Navigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Hierarchical READMEs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Root ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/README.md"
        }), " for top-level navigation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Section ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " files for each pillar"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Directory-level ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " files for major subdirectories"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative:"
      }), " Support ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_index.md"
      }), " for Obsidian compatibility"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-cross-referencing",
      children: "9.5 Cross-Referencing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Standard Markdown Links"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Link Text](path/to/file.md)"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support relative paths (", (0,jsx_runtime.jsx)(_components.code, {
          children: "../relative/path.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Support Obsidian links (", (0,jsx_runtime.jsx)(_components.code, {
          children: "[[Link Text]]"
        }), ") for Obsidian projects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-template-system",
      children: "9.6 Template System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Template Enforcement"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Templates in framework package: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Templates in KB structure: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/templates/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template validation scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent rules for template usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template versioning system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-summary-ultimate-canonical-docsdocumentation-structure",
      children: "10. Summary: \"Ultimate\" Canonical docs/documentation Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-root-directory",
      children: "10.1 Root Directory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " (uppercase, abbreviation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support:"
        }), " Also support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/"
        }), " for pre-ADK projects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-directory-organization",
      children: "10.2 Directory Organization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standard:"
        }), " ADK canonical 5-pillar structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enterprise:"
        }), " Support extension to multi-pillar structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy:"
        }), " Support hybrid structure (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), ") during migration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-document-structure",
      children: "10.3 Document Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontmatter:"
        }), " ADK lifecycle metadata (5 required fields)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sections:"
        }), " Standard ADK sections (Overview, Goals, Content)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lifecycle:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "evergreen"
        }), " (default), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timeboxed"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transient"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-navigation",
      children: "10.4 Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index Files:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " (standard), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        }), " (Obsidian support)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " Hierarchical READMEs at each level"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-cross-referencing",
      children: "10.5 Cross-Referencing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " Standard markdown links ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Text](path.md)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support:"
        }), " Obsidian links ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[[Text]]"
        }), " for Obsidian projects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-template-system",
      children: "10.6 Template System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " Framework package + KB structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enforcement:"
        }), " Template validation, agent rules, versioning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Completed:"
      }), " 2025-12-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Steps:"
      }), " Use this analysis to finalize canonical docs/documentation structure in ADK frameworks"]
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