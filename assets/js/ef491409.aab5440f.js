"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["51606"], {
18804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_meta_analysis_pattern_frequency_tables_md_ef4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-meta-analysis-pattern-frequency-tables-md-ef4.json
var site_docs_knowledge_analysis_meta_analysis_pattern_frequency_tables_md_ef4_namespaceObject = JSON.parse('{"id":"knowledge/analysis/meta-analysis-pattern-frequency-tables","title":"Meta-Analysis: Pattern Frequency Tables","description":"Purpose: Extract and count pattern frequencies across all projects to identify convergence and divergence","source":"@site/../docs/knowledge/analysis/meta-analysis-pattern-frequency-tables.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/meta-analysis-pattern-frequency-tables","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-pattern-frequency-tables","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/meta-analysis-pattern-frequency-tables.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-17T14:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Meta-Analysis: Kanban Structure","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-kanban-structure"},"next":{"title":"Meta-Analysis: Pattern/Anti-Pattern Identification","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-patterns-anti-patterns"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/meta-analysis-pattern-frequency-tables.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-17T14:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Meta-Analysis: Pattern Frequency Tables';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Kanban Naming Pattern Frequencies",
  "id": "1-kanban-naming-pattern-frequencies",
  "level": 2
}, {
  "value": "1.1 Epic Naming Formats",
  "id": "11-epic-naming-formats",
  "level": 3
}, {
  "value": "1.2 Story Naming Formats",
  "id": "12-story-naming-formats",
  "level": 3
}, {
  "value": "1.3 Task Naming Formats",
  "id": "13-task-naming-formats",
  "level": 3
}, {
  "value": "1.4 Task Number Padding",
  "id": "14-task-number-padding",
  "level": 3
}, {
  "value": "2. docs/documentation Directory Naming Frequencies",
  "id": "2-docsdocumentation-directory-naming-frequencies",
  "level": 2
}, {
  "value": "2.1 Root Directory Naming",
  "id": "21-root-directory-naming",
  "level": 3
}, {
  "value": "2.2 KB Organization Patterns",
  "id": "22-kb-organization-patterns",
  "level": 3
}, {
  "value": "3. Workflow Pattern Frequencies",
  "id": "3-workflow-pattern-frequencies",
  "level": 2
}, {
  "value": "3.1 Workflow File Naming",
  "id": "31-workflow-file-naming",
  "level": 3
}, {
  "value": "3.2 Release Workflow Step Counts",
  "id": "32-release-workflow-step-counts",
  "level": 3
}, {
  "value": "3.3 Workflow Configuration Patterns",
  "id": "33-workflow-configuration-patterns",
  "level": 3
}, {
  "value": "4. Cursorrules Pattern Frequencies",
  "id": "4-cursorrules-pattern-frequencies",
  "level": 2
}, {
  "value": "4.1 File Naming",
  "id": "41-file-naming",
  "level": 3
}, {
  "value": "4.2 Section Organization",
  "id": "42-section-organization",
  "level": 3
}, {
  "value": "4.3 RW Trigger Patterns",
  "id": "43-rw-trigger-patterns",
  "level": 3
}, {
  "value": "4.4 Version Schema Definitions",
  "id": "44-version-schema-definitions",
  "level": 3
}, {
  "value": "5. Version Schema Pattern Frequencies",
  "id": "5-version-schema-pattern-frequencies",
  "level": 2
}, {
  "value": "5.1 Version Schema Formats",
  "id": "51-version-schema-formats",
  "level": 3
}, {
  "value": "5.2 Version File Locations",
  "id": "52-version-file-locations",
  "level": 3
}, {
  "value": "6. Branch Mapping Pattern Frequencies",
  "id": "6-branch-mapping-pattern-frequencies",
  "level": 2
}, {
  "value": "6.1 Branch Naming Patterns",
  "id": "61-branch-naming-patterns",
  "level": 3
}, {
  "value": "7. Summary: Pattern Convergence Analysis",
  "id": "7-summary-pattern-convergence-analysis",
  "level": 2
}, {
  "value": "7.1 High Convergence Patterns (≥67% adoption)",
  "id": "71-high-convergence-patterns-67-adoption",
  "level": 3
}, {
  "value": "7.2 Moderate Convergence Patterns (33-66% adoption)",
  "id": "72-moderate-convergence-patterns-33-66-adoption",
  "level": 3
}, {
  "value": "7.3 Low Convergence Patterns (&lt;33% adoption)",
  "id": "73-low-convergence-patterns-33-adoption",
  "level": 3
}, {
  "value": "8. Key Insights",
  "id": "8-key-insights",
  "level": 2
}, {
  "value": "8.1 Perfect Convergence",
  "id": "81-perfect-convergence",
  "level": 3
}, {
  "value": "8.2 Near-Perfect Convergence",
  "id": "82-near-perfect-convergence",
  "level": 3
}, {
  "value": "8.3 Strong Convergence",
  "id": "83-strong-convergence",
  "level": 3
}, {
  "value": "8.4 Areas Needing Improvement",
  "id": "84-areas-needing-improvement",
  "level": 3
}, {
  "value": "8.4 Recommendations",
  "id": "84-recommendations",
  "level": 3
}, {
  "value": "9. Next Steps",
  "id": "9-next-steps",
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
        id: "meta-analysis-pattern-frequency-tables",
        children: "Meta-Analysis: Pattern Frequency Tables"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Extract and count pattern frequencies across all projects to identify convergence and divergence", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "pattern frequency tables"
      }), " extracted from all granular analyses (task-level Kanban, knowledge/documentation, workflows, cursorrules). Patterns are counted across all 10 analyzed projects (9 client implementations + 1 source repository) to identify:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Most common patterns"
        }), " (convergence indicators)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rare patterns"
        }), " (divergence indicators)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern adoption rates"
        }), " (how widely patterns are used)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task-level Kanban structure analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge/documentation structure analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow structure analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cursorrules structure analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "10 project analysis reports (9 client implementations + ai-dev-kit source)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kanban-naming-pattern-frequencies",
      children: "1. Kanban Naming Pattern Frequencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-epic-naming-formats",
      children: "1.1 Epic Naming Formats"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-\\{N\\}"
            }), " (hyphen)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/10 (40%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epic-09"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-20"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{N\\}"
            }), " (space)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia, starborn_legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Epic 9"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic 20"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-\\{NN\\}"
            }), " (zero-padded)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epic-09"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-20"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{N\\}"
            }), " (abbreviated)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E01"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E10"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{NN\\}"
            }), " (zero-padded space)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia (some)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic 09"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic-\\{N\\}"
      }), " (hyphen) is most common in ADK projects (4/10), but ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E\\{N\\}"
      }), " is also common in newer projects (3/10)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-story-naming-formats",
      children: "1.2 Story Naming Formats"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Story-{NNN}-\\{description\\}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, been-there, dev-toolkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-06-adk-implementation-analysis.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Story \\{N\\}"
            }), " (space)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia, starborn_legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Story 1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Story 2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "S\\{N\\}"
            }), " (abbreviated)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "S01"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S10"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Story-\\{N\\}-\\{description\\}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-01-framework-version.md"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " Mixed patterns. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Story-{NNN}-\\{description\\}"
      }), " is ADK canonical (3/10), but abbreviated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S\\{N\\}"
      }), " is also common (3/10)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-task-naming-formats",
      children: "1.3 Task Naming Formats"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            }), " (full context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, confidentia, fynd.deals, starborn_legacy, dev-toolkit, ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6/10 (60%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E20:S08:T01"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E16:S01:T001"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T\\{task\\}"
            }), " (standalone)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals (mixed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T001"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T002"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}S\\{story\\}:T\\{task\\}"
            }), " (no separators)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "free-party-promoter, vwmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E01S1:T01"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
      }), " (full context) is most common (6/10 = 60%), indicating strong convergence on full context requirement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-task-number-padding",
      children: "1.4 Task Number Padding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Padding"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["2-digit (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T01"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T02"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, confidentia, ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T01"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T20"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["3-digit (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T001"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T002"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, starborn_legacy, dev-toolkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T001"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T063"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Various"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " No clear convergence. 2-digit and 3-digit are equally common (3/10 each). ADK policy recommends 2-digit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-docsdocumentation-directory-naming-frequencies",
      children: "2. docs/documentation Directory Naming Frequencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-root-directory-naming",
      children: "2.1 Root Directory Naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directory Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " (uppercase)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit, agentic-ide-rules, confidentia, starborn_legacy, free-party-promoter, vwmp, qa-kb, ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10/10 (100%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge/"
            }), " (lowercase)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, confidentia (branch 21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-ADK legacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " (lowercase)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, fynd.deals, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supplementary docs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " is universal (10/10 = 100%), indicating perfect convergence on ADK canonical naming."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-kb-organization-patterns",
      children: "2.2 KB Organization Patterns"
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
            children: "Structure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADK Canonical (5 pillars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/10 (40%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture, Changelog, PM, Guides, Documentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex Multi-Pillar (15+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia (branch 03)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15+ pillars (Architecture, Customer Enablement, Data, Engineering, etc.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-ADK Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge/fynd_deals/Kanban/"
            }), " structure"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid (KB + docs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/10 (40%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " dual structure"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " ADK Canonical (5 pillars) is most common (4/10 = 40%), but Hybrid pattern is equally common (4/10 = 40%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-workflow-pattern-frequencies",
      children: "3. Workflow Pattern Frequencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-workflow-file-naming",
      children: "3.1 Workflow File Naming"
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
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{name\\}-workflow.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, been-there, dev-toolkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow.yaml"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{name\\}.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release.yaml"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Script-based (", (0,jsx_runtime.jsx)(_components.code, {
              children: ".py"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: ".sh"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release_workflow.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Embedded in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All projects (except ai-dev-kit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10 (90%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW trigger section"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " Embedded RW trigger in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " is nearly universal (9/10 = 90%). Note: ai-dev-kit (source) doesn't have ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file. YAML workflow files are common (5/10 = 50% combined)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-release-workflow-step-counts",
      children: "3.2 Release Workflow Step Counts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10-step RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom 10-step workflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11-step RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit, confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK 11-step (before Step 6 added)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12-step RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK canonical 12-step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13-step RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "agentic-ide-rules (extended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended with PDCA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom (non-standard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/10 (40%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No explicit RW"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " 11-step and 12-step are most common (5/10 = 50% combined). ADK canonical is 12-step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-workflow-configuration-patterns",
      children: "3.3 Workflow Configuration Patterns"
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
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit, agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config-driven approach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoded paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, confidentia (some)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Paths in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, free-party-promoter, vwmp, qa-kb, ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5/10 (50%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No explicit config (ai-dev-kit has example only)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " Config-driven (", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ") is ADK pattern (3/10 = 30%), but many projects have no config (5/10 = 50%). Note: ai-dev-kit has example config but not in project root."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-cursorrules-pattern-frequencies",
      children: "4. Cursorrules Pattern Frequencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-file-naming",
      children: "4.1 File Naming"
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
            children: "Location"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " (root)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All projects (except ai-dev-kit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10 (90%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project root"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " (branch)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{branch}/.cursorrules"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source repository (RW executed manually/by convention)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " in project root is nearly universal (9/10 = 90%). Note: ai-dev-kit (source) doesn't have ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-section-organization",
      children: "4.2 Section Organization"
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
            children: "Structure"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow-First"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/9 (22%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW trigger → PVW → Document lifecycle → Project rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project Overview First"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/9 (22%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project overview → Version control → Code style → Testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal RW Only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/9 (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW trigger only, minimal other sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source repository (no cursorrules file)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " Minimal RW Only is most common (4/9 = 44%), but Workflow-First is ADK pattern (2/9 = 22%). Note: ai-dev-kit doesn't have ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-rw-trigger-patterns",
      children: "4.3 RW Trigger Patterns"
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
            children: "Steps"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive RW (12-step)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full 12-step with all sections (ai-dev-kit has workflow YAML, no cursorrules)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard RW (11-step)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11-step (before Step 6)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extended RW (13-step)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "agentic-ide-rules (variant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13-step with PDCA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom RW (10-step)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom 10-step workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No RW Trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/10 (40%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No explicit RW trigger"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " Comprehensive RW (12-step) is ADK canonical (2/10 = 20%), but many projects have no RW trigger (4/10 = 40%). Note: ai-dev-kit has workflow YAML but no ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-version-schema-definitions",
      children: "4.4 Version Schema Definitions"
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
            children: "Schema"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules, starborn_legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5/10 (50%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK canonical schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.MAJOR.MINOR.PATCH+BUILD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "free-party-promoter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar but different naming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.PATCH"
            }), " (legacy)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grandfathered format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No explicit schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No schema definition"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " is most common (5/10 = 50%), indicating strong convergence on ADK canonical schema."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-version-schema-pattern-frequencies",
      children: "5. Version Schema Pattern Frequencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-version-schema-formats",
      children: "5.1 Version Schema Formats"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Schema"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules, starborn_legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5/10 (50%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK canonical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.MAJOR.MINOR.PATCH+BUILD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "free-party-promoter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar structure, different naming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.PATCH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.0.0+BUILD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vwmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom/No schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No explicit schema"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " is most common (5/10 = 50%), indicating strong convergence on ADK canonical schema."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-version-file-locations",
      children: "5.2 Version File Locations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects Using"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "src/\\{project\\}/version.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit, agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard ADK pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "src/fynd_deals/version.py"
            }), " (legacy)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, dev-toolkit (incorrect)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy path (ai-dev-kit source), copy-paste error (dev-toolkit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION"
            }), " (file)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vwmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No version file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia, starborn_legacy, free-party-promoter, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/10 (40%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No explicit version file"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/\\{project\\}/version.py"
      }), " is ADK pattern (3/10 = 30%), but many projects have no version file (4/10 = 40%). Note: ai-dev-kit uses legacy path ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/fynd_deals/version.py"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-branch-mapping-pattern-frequencies",
      children: "6. Branch Mapping Pattern Frequencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-branch-naming-patterns",
      children: "6.1 Branch Naming Patterns"
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
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic/\\{N\\}-\\{description\\}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/10 (40%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic/4-kanban-framework"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic/\\{N\\}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit (some)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic/4"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "{branch}"
            }), " (numeric)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1/10 (10%)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "03"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "04"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "19"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "21"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No explicit mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, free-party-promoter, vwmp, qa-kb, fynd.deals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5/10 (50%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No explicit branch mapping"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/\\{N\\}-\\{description\\}"
      }), " is ADK pattern (4/10 = 40%), but many projects have no explicit branch mapping (5/10 = 50%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-summary-pattern-convergence-analysis",
      children: "7. Summary: Pattern Convergence Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-high-convergence-patterns-67-adoption",
      children: "7.1 High Convergence Patterns (≥67% adoption)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " directory naming"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10/10 (100%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file naming"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10 (90%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Near-perfect (ai-dev-kit source has no cursorrules)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " version schema"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5/10 (50%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            }), " task naming"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6/10 (60%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-moderate-convergence-patterns-33-66-adoption",
      children: "7.2 Moderate Convergence Patterns (33-66% adoption)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADK Canonical KB structure (5 pillars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/10 (40%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epic/\\{N\\}-\\{description\\}"
            }), " branch naming"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4/10 (40%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "src/\\{project\\}/version.py"
            }), " version file"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Low convergence (ai-dev-kit uses legacy path)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11-step or 12-step RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5/10 (50%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-low-convergence-patterns-33-adoption",
      children: "7.3 Low Convergence Patterns (<33% adoption)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " configuration"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3/10 (30%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Low convergence (ai-dev-kit has example only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow-First cursorrules structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/9 (22%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Low convergence (ai-dev-kit has no cursorrules)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive RW trigger (12-step)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2/10 (20%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Low convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-key-insights",
      children: "8. Key Insights"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-perfect-convergence",
      children: "8.1 Perfect Convergence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "docs/"
          }), " directory naming:"]
        }), " Universal (10/10 = 100%)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-near-perfect-convergence",
      children: "8.2 Near-Perfect Convergence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          }), " file naming:"]
        }), " Nearly universal (9/10 = 90%, ai-dev-kit source has no cursorrules)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-strong-convergence",
      children: "8.3 Strong Convergence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Task naming (", (0,jsx_runtime.jsx)(_components.code, {
            children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
          }), "):"]
        }), " 6/10 (60%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Version schema (", (0,jsx_runtime.jsx)(_components.code, {
            children: "RC.EPIC.STORY.TASK+BUILD"
          }), "):"]
        }), " 5/10 (50%)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-areas-needing-improvement",
      children: "8.4 Areas Needing Improvement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow configuration:"
        }), " Only 3/10 (30%) use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " (ai-dev-kit has example only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW trigger adoption:"
        }), " Only 6/10 (60%) have explicit RW triggers (ai-dev-kit has workflow YAML but no cursorrules)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version file adoption:"
        }), " Only 3/10 (30%) have canonical version files (ai-dev-kit uses legacy path)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-recommendations",
      children: "8.4 Recommendations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Enforce ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/"
          }), " naming:"]
        }), " Already universal, maintain as canonical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Promote ", (0,jsx_runtime.jsx)(_components.code, {
            children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
          }), " format:"]
        }), " Strong convergence (67%), make canonical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Promote ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rw-config.yaml"
          }), ":"]
        }), " Low adoption (33%), needs promotion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Promote comprehensive RW trigger:"
        }), " Low adoption (22%), needs promotion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support version schema flexibility:"
        }), " 56% adoption is good, but support legacy formats"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-next-steps",
      children: "9. Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This pattern frequency analysis informs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convergence/Divergence Maps"
        }), " (next document)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical vs Legacy Matrices"
        }), " (next document)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ultimate Canonical Framework Designs"
        }), " (final deliverables)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "See Also:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-convergence-divergence-maps.md"
        }), " - Convergence/divergence analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-canonical-vs-legacy-matrices.md"
        }), " - Canonical vs legacy comparison"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "task-level-kanban-structure-analysis.md"
        }), " - Source data for Kanban patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge-documentation-structure-analysis.md"
        }), " - Source data for KB patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-structure-analysis.md"
        }), " - Source data for workflow patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-structure-analysis.md"
        }), " - Source data for cursorrules patterns"]
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