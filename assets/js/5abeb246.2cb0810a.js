"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["27993"], {
69783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_meta_analysis_canonical_vs_legacy_matrices_md_5ab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-meta-analysis-canonical-vs-legacy-matrices-md-5ab.json
var site_docs_knowledge_analysis_meta_analysis_canonical_vs_legacy_matrices_md_5ab_namespaceObject = JSON.parse('{"id":"knowledge/analysis/meta-analysis-canonical-vs-legacy-matrices","title":"Meta-Analysis: Canonical vs Legacy Matrices","description":"Purpose: Compare ADK canonical structures to real-world patterns, identifying gaps, over-engineering, and legacy support needs","source":"@site/../docs/knowledge/analysis/meta-analysis-canonical-vs-legacy-matrices.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/meta-analysis-canonical-vs-legacy-matrices","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-canonical-vs-legacy-matrices","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/meta-analysis-canonical-vs-legacy-matrices.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-17T15:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Knowledge/Documentation Structure Analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/knowledge-documentation-structure-analysis"},"next":{"title":"Meta-Analysis: Convergence/Divergence Maps","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-convergence-divergence-maps"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/meta-analysis-canonical-vs-legacy-matrices.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-17T15:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Meta-Analysis: Canonical vs Legacy Matrices';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Kanban Structure: Canonical vs Legacy Matrix",
  "id": "1-kanban-structure-canonical-vs-legacy-matrix",
  "level": 2
}, {
  "value": "1.1 Epic Structure Comparison",
  "id": "11-epic-structure-comparison",
  "level": 3
}, {
  "value": "1.2 Story Structure Comparison",
  "id": "12-story-structure-comparison",
  "level": 3
}, {
  "value": "1.3 Task Structure Comparison",
  "id": "13-task-structure-comparison",
  "level": 3
}, {
  "value": "2. docs/documentation Structure: Canonical vs Legacy Matrix",
  "id": "2-docsdocumentation-structure-canonical-vs-legacy-matrix",
  "level": 2
}, {
  "value": "2.1 Root Directory Comparison",
  "id": "21-root-directory-comparison",
  "level": 3
}, {
  "value": "2.2 Organization Pattern Comparison",
  "id": "22-organization-pattern-comparison",
  "level": 3
}, {
  "value": "2.3 Document Structure Comparison",
  "id": "23-document-structure-comparison",
  "level": 3
}, {
  "value": "3. Workflow Structure: Canonical vs Legacy Matrix",
  "id": "3-workflow-structure-canonical-vs-legacy-matrix",
  "level": 2
}, {
  "value": "3.1 Workflow File Comparison",
  "id": "31-workflow-file-comparison",
  "level": 3
}, {
  "value": "3.2 Release Workflow Comparison",
  "id": "32-release-workflow-comparison",
  "level": 3
}, {
  "value": "3.3 Workflow Execution Comparison",
  "id": "33-workflow-execution-comparison",
  "level": 3
}, {
  "value": "4. Cursorrules Structure: Canonical vs Legacy Matrix",
  "id": "4-cursorrules-structure-canonical-vs-legacy-matrix",
  "level": 2
}, {
  "value": "4.1 File Structure Comparison",
  "id": "41-file-structure-comparison",
  "level": 3
}, {
  "value": "4.2 RW Trigger Comparison",
  "id": "42-rw-trigger-comparison",
  "level": 3
}, {
  "value": "4.3 Document Lifecycle Management Comparison",
  "id": "43-document-lifecycle-management-comparison",
  "level": 3
}, {
  "value": "5. Version Schema: Canonical vs Legacy Matrix",
  "id": "5-version-schema-canonical-vs-legacy-matrix",
  "level": 2
}, {
  "value": "5.1 Schema Format Comparison",
  "id": "51-schema-format-comparison",
  "level": 3
}, {
  "value": "6. Summary: Gaps, Over-Engineering, and Legacy Support",
  "id": "6-summary-gaps-over-engineering-and-legacy-support",
  "level": 2
}, {
  "value": "6.1 Critical Gaps (Must Address)",
  "id": "61-critical-gaps-must-address",
  "level": 3
}, {
  "value": "6.2 Moderate Gaps (Should Address)",
  "id": "62-moderate-gaps-should-address",
  "level": 3
}, {
  "value": "6.3 Legacy Support Needed",
  "id": "63-legacy-support-needed",
  "level": 3
}, {
  "value": "6.4 Over-Engineering (None Identified)",
  "id": "64-over-engineering-none-identified",
  "level": 3
}, {
  "value": "7. Recommendations",
  "id": "7-recommendations",
  "level": 2
}, {
  "value": "7.1 Address Critical Gaps",
  "id": "71-address-critical-gaps",
  "level": 3
}, {
  "value": "7.2 Support Legacy Patterns",
  "id": "72-support-legacy-patterns",
  "level": 3
}, {
  "value": "8. Next Steps",
  "id": "8-next-steps",
  "level": 2
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
        id: "meta-analysis-canonical-vs-legacy-matrices",
        children: "Meta-Analysis: Canonical vs Legacy Matrices"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Compare ADK canonical structures to real-world patterns, identifying gaps, over-engineering, and legacy support needs", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part of:"
      }), " E6:S06", ":T06", " – Cross-project meta-analysis and canonical framework design"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonical vs legacy matrices"
      }), " comparing ADK's canonical structures to real-world patterns found across all 9 analyzed projects. This analysis identifies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gaps:"
        }), " What's missing in canonical (should be added)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-engineering:"
        }), " What's unnecessary in canonical (should be simplified)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy patterns:"
        }), " What needs backward compatibility support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convergence opportunities:"
        }), " What should become canonical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADK canonical structures (from framework packages)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world patterns (from 10 project analysis reports: 9 client implementations + ai-dev-kit source)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern frequency tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convergence/divergence maps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kanban-structure-canonical-vs-legacy-matrix",
      children: "1. Kanban Structure: Canonical vs Legacy Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-epic-structure-comparison",
      children: "1.1 Epic Structure Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Naming"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-\\{N\\}"
            }), " (hyphen)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-\\{N\\}"
            }), " (44%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{N\\}"
            }), " (22%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{N\\}"
            }), " (33%)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["⚠️ Gap: Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{N\\}"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{N\\}"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{N\\}"
            }), " (space)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Numbering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-23 (canonical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-23 + project-specific (24+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Canonical supports extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support project-specific epics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Mashup Prevention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Not enforced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30% projects have mashup (root cause: Epic 9 mismatch in ai-dev-kit source)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ CRITICAL GAP: No prevention + source has Epic 9 mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Add installer validation + fix Epic 9 in source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-\\{N\\}/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-\\{N\\}/"
            }), " (67%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic \\{N\\}/"
            }), " (22%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support space format"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{N\\}"
            }), " format"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Template"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (67%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Template adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support template customization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Epic mashup prevention is CRITICAL (33% of projects affected)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic \\{N\\}"
        }), " (space) format (22% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-story-structure-comparison",
      children: "1.2 Story Structure Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Story Naming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Story-{NNN}-\\{description\\}"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Story-{NNN}-{desc}"
            }), " (33%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Story \\{N\\}"
            }), " (22%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S\\{N\\}"
            }), " (33%)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["⚠️ Gap: Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S\\{N\\}"
            }), " format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support abbreviated format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Story Numbering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-padded (3-digit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-digit (33%), 3-digit (33%), mixed (33%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support 2-digit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support 2-digit padding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Story Directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Story-{NNN}-*/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Story-{NNN}-*/"
            }), " (33%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Story \\{N\\}/"
            }), " (22%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support space format"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Story \\{N\\}"
            }), " format"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Story Checklist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (89%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Checklist adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support checklist customization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Story Template"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (67%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Template adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support template customization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Story naming format needs flexibility (support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S\\{N\\}"
        }), " format)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story \\{N\\}"
        }), " (space) format (22% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-task-structure-comparison",
      children: "1.3 Task Structure Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task Naming"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            }), " (full context)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            }), " (67%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T\\{task\\}"
            }), " (11%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Full context enforced"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support standalone ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T\\{task\\}"
            }), " in checklists"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task Padding"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2-digit (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T01"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-digit (33%), 3-digit (33%), mixed (33%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support 3-digit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support 3-digit padding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task Organization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate files (recommended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate files (67%), embedded (33%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Separate files preferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support embedded format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (78%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Structure adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support optional fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task Checklist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (89%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Checklist adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support checklist customization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Task padding needs flexibility (support 3-digit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support embedded task format (33% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-docsdocumentation-structure-canonical-vs-legacy-matrix",
      children: "2. docs/documentation Structure: Canonical vs Legacy Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-root-directory-comparison",
      children: "2.1 Root Directory Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Directory"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " (uppercase)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " (100%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect - Universal convergence"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge/"
            }), " for pre-ADK"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secondary Docs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " (33%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge/"
            }), " (22%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support dual structure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " hybrid"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Directory Naming"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Uppercase ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " (100%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect - Universal convergence"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["❌ No - ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " is universal"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Need to support dual structure (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), ") for migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/"
        }), " for pre-ADK projects (22%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-organization-pattern-comparison",
      children: "2.2 Organization Pattern Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Organization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-pillar structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-pillar (44%), multi-pillar (11%), hybrid (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support multi-pillar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support 15+ pillar structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pillar Names"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture, Changelog, PM, Guides, Documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard (44%), custom (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support custom pillars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support custom pillar names"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pillar Depth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-level default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-level (67%), 4-level (22%), mixed (11%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - 3-level is standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support 4-level depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Navigation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            }), " (78%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            }), " (22%)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["⚠️ Gap: Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support Obsidian ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Need to support multi-pillar structure (11% enterprise projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        }), " for Obsidian (22% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-document-structure-comparison",
      children: "2.3 Document Structure Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frontmatter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (5 fields)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (89%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Frontmatter adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support optional frontmatter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifecycle Metadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (67%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Promote lifecycle metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support documents without lifecycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard (67%), custom (33%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Standard types work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support custom document types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-Referencing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markdown links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markdown (78%), Obsidian (22%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support Obsidian links"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[[Link]]"
            }), " format"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Lifecycle metadata adoption is moderate (67%), needs promotion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support Obsidian links (22% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-workflow-structure-canonical-vs-legacy-matrix",
      children: "3. Workflow Structure: Canonical vs Legacy Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-workflow-file-comparison",
      children: "3.1 Workflow File Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Naming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{name\\}-workflow.yaml"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\\{name\\}-workflow.yaml"
            }), " (33%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{name\\}.yaml"
            }), " (22%)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["⚠️ Gap: Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{name\\}.yaml"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".yaml"
            }), " without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-workflow"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Location"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "workflows/"
            }), " directory"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "workflows/"
            }), " (33%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/workflows/"
            }), " (33%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support framework location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support framework package location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Script-Based"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not recommended"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".py"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: ".sh"
            }), " scripts (22%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support script-based workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support legacy script workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Need to support alternative file naming (", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{name\\}.yaml"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support script-based workflows (22% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-release-workflow-comparison",
      children: "3.2 Release Workflow Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Step Count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12-step RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12-step (22%), 11-step (33%), 10-step (11%), 13-step (11%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support 10-step/11-step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support 10-step/11-step variants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Step 1 (Branch Safety)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory, blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ CRITICAL GAP: Low adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Promote branch safety checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config-driven (33%), hardcoded (22%), none (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ CRITICAL GAP: Low config adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support hardcoded paths during migration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Progress Tracking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor TODOs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Promote TODO tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support manual progress tracking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Branch safety check adoption is low (44%), needs promotion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Config-driven approach adoption is low (33%), needs promotion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support hardcoded paths during migration (22% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-workflow-execution-comparison",
      children: "3.3 Workflow Execution Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execution Pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-driven (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-driven (56%), script-based (22%), manual (22%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Agent-driven is standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support script-based execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Validation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (branch context, changelog format)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Promote validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support optional validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (all steps or abort)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (67%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Atomicity adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support partial execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Validation adoption is moderate (56%), needs promotion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support script-based execution (22% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-cursorrules-structure-canonical-vs-legacy-matrix",
      children: "4. Cursorrules Structure: Canonical vs Legacy Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-file-structure-comparison",
      children: "4.1 File Structure Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Naming"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " (root)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " (100%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect - Universal convergence"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support branch-specific ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root (89%), branch-specific (11%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good - Root is standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support branch-specific location"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Section Order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow-First"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow-First (33%), Project-First (22%), Minimal (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Promote Workflow-First"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support Project-First structure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Workflow-First structure adoption is low (33%), needs promotion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support branch-specific ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (11% multi-branch projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-rw-trigger-comparison",
      children: "4.2 RW Trigger Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW Trigger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive (12-step)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive (22%), standard (22%), minimal (11%), none (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ CRITICAL GAP: Low adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support minimal RW trigger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Step Definitions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed (all 12 steps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed (22%), standard (22%), minimal (11%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Promote detailed definitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support minimal step definitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Progress Tracking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor TODOs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Promote TODO tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support manual progress tracking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " RW trigger adoption is low (56% have trigger, 44% don't)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Comprehensive RW trigger adoption is very low (22%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support minimal RW trigger (11% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-document-lifecycle-management-comparison",
      children: "4.3 Document Lifecycle Management Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document Lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (33%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ CRITICAL GAP: Very low adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support projects without lifecycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifecycle Rules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (22%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ CRITICAL GAP: Very low adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support manual lifecycle management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Document lifecycle adoption is very low (33%), needs significant promotion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support projects without lifecycle management (67% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-version-schema-canonical-vs-legacy-matrix",
      children: "5. Version Schema: Canonical vs Legacy Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-schema-format-comparison",
      children: "5.1 Schema Format Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap/Over-Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Support Needed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " (56%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.MAJOR.MINOR.PATCH+BUILD"
            }), " (11%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.PATCH"
            }), " (11%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Support legacy formats"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.PATCH"
            }), " (grandfathered)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Version File"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "src/\\{project\\}/version.py"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "src/\\{project\\}/version.py"
            }), " (44%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION"
            }), " file (11%), none (44%)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["⚠️ Gap: Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION"
            }), " file"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Yes - Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION"
            }), " file format"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Version Bumping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In RW (56%), manual (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Gap: Promote RW version bumping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes - Support manual version bumping"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap:"
        }), " Version schema adoption is moderate (56%), needs promotion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.PATCH"
        }), " format (11% grandfathered)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Need to support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION"
        }), " file format (11% of projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Over-Engineering:"
        }), " None identified"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-summary-gaps-over-engineering-and-legacy-support",
      children: "6. Summary: Gaps, Over-Engineering, and Legacy Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-critical-gaps-must-address",
      children: "6.1 Critical Gaps (Must Address)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gap"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Affected"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Mashup Prevention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33% (3/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔴 CRITICAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Branch Safety Check Adoption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔴 CRITICAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW Trigger Adoption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟠 HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Config-Driven Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67% missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟠 HIGH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document Lifecycle Adoption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67% missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟠 HIGH"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-moderate-gaps-should-address",
      children: "6.2 Moderate Gaps (Should Address)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gap"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Affected"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic/Story Naming Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MODERATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22-33%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 MODERATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task Padding Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MODERATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 MODERATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KB Organization Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MODERATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 MODERATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workflow Step Count Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MODERATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 MODERATE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-legacy-support-needed",
      children: "6.3 Legacy Support Needed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Support Strategy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{N\\}"
            }), " (space format)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22%"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Support both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-\\{N\\}"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{N\\}"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge/"
            }), " directory"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22%"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge/"
            }), " during migration"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " secondary directory"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33%"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " hybrid structure"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            }), " navigation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22%"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Support both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.PATCH"
            }), " schema"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Support grandfathered format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION"
            }), " file"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11%"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION"
            }), " file format"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoded paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Support during migration to config"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-over-engineering-none-identified",
      children: "6.4 Over-Engineering (None Identified)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " No over-engineering identified in ADK canonical structures. All canonical patterns are justified by real-world usage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-recommendations",
      children: "7. Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-address-critical-gaps",
      children: "7.1 Address Critical Gaps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic Mashup Prevention (CRITICAL)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make installer primary/only method"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add installer validation to prevent mashup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Improve installation instructions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Branch Safety Check Promotion (CRITICAL)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enforce branch safety check in RW"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document benefits and risks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RW Trigger Promotion (HIGH)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document RW trigger benefits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide examples and templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make RW trigger part of installation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Config-Driven Approach Promotion (HIGH)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document config benefits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide migration guide from hardcoded paths"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make config part of installation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Document Lifecycle Promotion (HIGH)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document lifecycle benefits"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide examples and templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make lifecycle part of installation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-support-legacy-patterns",
      children: "7.2 Support Legacy Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Naming Flexibility"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{N\\}"
            }), " (space) format"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S\\{N\\}"
            }), " (abbreviated) format"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support 2-digit and 3-digit task padding"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "KB Structure Flexibility"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge/"
            }), " directory during migration"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " hybrid structure"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support multi-pillar organization (15+ pillars)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow Flexibility"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support 10-step/11-step RW variants"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support script-based workflows"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support hardcoded paths during migration"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Version Schema Flexibility"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.PATCH"
            }), " (grandfathered)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION"
            }), " file format"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support manual version bumping"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-next-steps",
      children: "8. Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This canonical vs legacy analysis informs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ultimate Canonical Framework Designs"
        }), " (final deliverables)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Hardening Recommendations"
        }), " (in good/bad practice catalog)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "See Also:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-pattern-frequency-tables.md"
        }), " - Pattern frequency data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-convergence-divergence-maps.md"
        }), " - Convergence/divergence analysis"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Individual project analysis reports - Source data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE"]
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