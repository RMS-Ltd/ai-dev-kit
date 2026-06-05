"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["9965"], {
66873(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_meta_analysis_convergence_divergence_maps_md_ef2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-meta-analysis-convergence-divergence-maps-md-ef2.json
var site_docs_knowledge_analysis_meta_analysis_convergence_divergence_maps_md_ef2_namespaceObject = JSON.parse('{"id":"knowledge/analysis/meta-analysis-convergence-divergence-maps","title":"Meta-Analysis: Convergence/Divergence Maps","description":"Purpose: Map what patterns projects converge on vs diverge from ADK canonical","source":"@site/../docs/knowledge/analysis/meta-analysis-convergence-divergence-maps.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/meta-analysis-convergence-divergence-maps","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-convergence-divergence-maps","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/meta-analysis-convergence-divergence-maps.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-17T14:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Meta-Analysis: Canonical vs Legacy Matrices","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-canonical-vs-legacy-matrices"},"next":{"title":"Meta-Analysis: Cursorrules Use/Mis-use","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-cursorrules-use-misuse"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/meta-analysis-convergence-divergence-maps.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-17T14:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Meta-Analysis: Convergence/Divergence Maps';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Kanban Structure Convergence/Divergence Map",
  "id": "1-kanban-structure-convergencedivergence-map",
  "level": 2
}, {
  "value": "1.1 Convergence Patterns (What Projects Converge On)",
  "id": "11-convergence-patterns-what-projects-converge-on",
  "level": 3
}, {
  "value": "1.2 Divergence Patterns (What Projects Diverge From ADK)",
  "id": "12-divergence-patterns-what-projects-diverge-from-adk",
  "level": 3
}, {
  "value": "1.3 Convergence/Divergence Matrix: Kanban Structure",
  "id": "13-convergencedivergence-matrix-kanban-structure",
  "level": 3
}, {
  "value": "2. docs/documentation Structure Convergence/Divergence Map",
  "id": "2-docsdocumentation-structure-convergencedivergence-map",
  "level": 2
}, {
  "value": "2.1 Convergence Patterns (What Projects Converge On)",
  "id": "21-convergence-patterns-what-projects-converge-on",
  "level": 3
}, {
  "value": "2.2 Divergence Patterns (What Projects Diverge From ADK)",
  "id": "22-divergence-patterns-what-projects-diverge-from-adk",
  "level": 3
}, {
  "value": "2.3 Convergence/Divergence Matrix: KB Structure",
  "id": "23-convergencedivergence-matrix-kb-structure",
  "level": 3
}, {
  "value": "3. Workflow Structure Convergence/Divergence Map",
  "id": "3-workflow-structure-convergencedivergence-map",
  "level": 2
}, {
  "value": "3.1 Convergence Patterns (What Projects Converge On)",
  "id": "31-convergence-patterns-what-projects-converge-on",
  "level": 3
}, {
  "value": "3.2 Divergence Patterns (What Projects Diverge From ADK)",
  "id": "32-divergence-patterns-what-projects-diverge-from-adk",
  "level": 3
}, {
  "value": "3.3 Convergence/Divergence Matrix: Workflow Structure",
  "id": "33-convergencedivergence-matrix-workflow-structure",
  "level": 3
}, {
  "value": "4. Cursorrules Structure Convergence/Divergence Map",
  "id": "4-cursorrules-structure-convergencedivergence-map",
  "level": 2
}, {
  "value": "4.1 Convergence Patterns (What Projects Converge On)",
  "id": "41-convergence-patterns-what-projects-converge-on",
  "level": 3
}, {
  "value": "4.2 Divergence Patterns (What Projects Diverge From ADK)",
  "id": "42-divergence-patterns-what-projects-diverge-from-adk",
  "level": 3
}, {
  "value": "4.3 Convergence/Divergence Matrix: Cursorrules Structure",
  "id": "43-convergencedivergence-matrix-cursorrules-structure",
  "level": 3
}, {
  "value": "5. Version Schema Convergence/Divergence Map",
  "id": "5-version-schema-convergencedivergence-map",
  "level": 2
}, {
  "value": "5.1 Convergence Patterns (What Projects Converge On)",
  "id": "51-convergence-patterns-what-projects-converge-on",
  "level": 3
}, {
  "value": "5.2 Divergence Patterns (What Projects Diverge From ADK)",
  "id": "52-divergence-patterns-what-projects-diverge-from-adk",
  "level": 3
}, {
  "value": "5.3 Convergence/Divergence Matrix: Version Schema",
  "id": "53-convergencedivergence-matrix-version-schema",
  "level": 3
}, {
  "value": "6. Critical Divergence Issues",
  "id": "6-critical-divergence-issues",
  "level": 2
}, {
  "value": "6.1 Epic Mashup (CRITICAL)",
  "id": "61-epic-mashup-critical",
  "level": 3
}, {
  "value": "6.2 Low Workflow Configuration Adoption",
  "id": "62-low-workflow-configuration-adoption",
  "level": 3
}, {
  "value": "6.3 Low RW Trigger Adoption",
  "id": "63-low-rw-trigger-adoption",
  "level": 3
}, {
  "value": "7. Summary: Convergence vs Divergence",
  "id": "7-summary-convergence-vs-divergence",
  "level": 2
}, {
  "value": "7.1 High Convergence Areas (≥67%)",
  "id": "71-high-convergence-areas-67",
  "level": 3
}, {
  "value": "7.2 Moderate Convergence Areas (33-66%)",
  "id": "72-moderate-convergence-areas-33-66",
  "level": 3
}, {
  "value": "7.3 Critical Divergence Areas (&lt;33%)",
  "id": "73-critical-divergence-areas-33",
  "level": 3
}, {
  "value": "8. Recommendations",
  "id": "8-recommendations",
  "level": 2
}, {
  "value": "8.1 Enforce High Convergence Patterns",
  "id": "81-enforce-high-convergence-patterns",
  "level": 3
}, {
  "value": "8.2 Promote Moderate Convergence Patterns",
  "id": "82-promote-moderate-convergence-patterns",
  "level": 3
}, {
  "value": "8.3 Address Critical Divergence Issues",
  "id": "83-address-critical-divergence-issues",
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
        id: "meta-analysis-convergencedivergence-maps",
        children: "Meta-Analysis: Convergence/Divergence Maps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Map what patterns projects converge on vs diverge from ADK canonical", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "convergence/divergence maps"
      }), " showing what patterns projects converge on (common across projects) vs diverge from ADK canonical (customizations, drift). This analysis informs the \"ultimate\" canonical framework designs by identifying:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convergence patterns:"
        }), " What works well and is widely adopted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divergence patterns:"
        }), " What causes drift and needs better support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convergence/divergence matrices:"
        }), " Visual maps of pattern adoption"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern frequency tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "10 project analysis reports (9 client implementations + ai-dev-kit source)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Granular structure analyses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kanban-structure-convergencedivergence-map",
      children: "1. Kanban Structure Convergence/Divergence Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-convergence-patterns-what-projects-converge-on",
      children: "1.1 Convergence Patterns (What Projects Converge On)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            }), " task naming"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60% (6/10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, confidentia, fynd.deals, starborn_legacy, dev-toolkit, ai-dev-kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic/Story/Task hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% (10/10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested directory structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90% (9/10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All except qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story checklist pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90% (9/10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All except qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Projects strongly converge on hierarchical E/S/T structure and full-context task naming."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-divergence-patterns-what-projects-diverge-from-adk",
      children: "1.2 Divergence Patterns (What Projects Diverge From ADK)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Divergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Root Cause"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Mashup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30% (3/10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit, agentic-ide-rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ CRITICAL: Manual copy of ai-dev-kit's actual Kanban (root cause: Epic 9 mismatch in ai-dev-kit source)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Epic naming (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-\\{N\\}"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{N\\}"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% vs 22%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate divergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task padding (2-digit vs 3-digit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33% vs 33%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate divergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story file naming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33% vs 33%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate divergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Epic mashup is the most critical divergence (33% of projects), caused by unclear installation instructions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-convergencedivergence-matrix-kanban-structure",
      children: "1.3 Convergence/Divergence Matrix: Kanban Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Converged Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diverged Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Task Naming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T\\{task\\}"
            }), " (standalone)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67% ✅"
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
            children: "Mixed (2-digit/3-digit)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3-digit (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T001"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Naming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-\\{N\\}"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-\\{N\\}"
            }), " (44%)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Epic \\{N\\}"
            }), " (22%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{N\\}"
            }), " (33%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Story Naming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Story-{NNN}-{desc}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Various formats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic Mashup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Never"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ No mashup (67%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Epic mashup (33%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67% ⚠️"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Enforce ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
      }), " format (67% convergence), prevent Epic mashup (critical issue)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-docsdocumentation-structure-convergencedivergence-map",
      children: "2. docs/documentation Structure Convergence/Divergence Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-convergence-patterns-what-projects-converge-on",
      children: "2.1 Convergence Patterns (What Projects Converge On)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
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
            children: "100% (9/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document frontmatter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "89% (8/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All except qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67% (6/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-referencing patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78% (7/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " naming is universal (100%), indicating perfect convergence on ADK canonical."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-divergence-patterns-what-projects-diverge-from-adk",
      children: "2.2 Divergence Patterns (What Projects Diverge From ADK)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Divergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Root Cause"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KB organization (5-pillar vs multi-pillar)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% vs 11%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate divergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge/"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22% (2/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, confidentia (legacy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Pre-ADK legacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dual structure (", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% (4/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate divergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex multi-pillar (15+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11% (1/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia (branch 03)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Enterprise pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " KB organization patterns diverge significantly (5-pillar vs multi-pillar), but root naming converges perfectly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-convergencedivergence-matrix-kb-structure",
      children: "2.3 Convergence/Divergence Matrix: KB Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Converged Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diverged Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Root Directory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "knowledge/"
            }), " (22%), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " (33%)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Organization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-pillar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-pillar (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-pillar (11%), Hybrid (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontmatter + sections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frontmatter (89%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (11%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "89% ✅"
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
            children: "Missing (33%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Navigation"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_index.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed (78%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Various"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78% ⚠️"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Maintain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " as canonical (100% convergence), support flexible organization patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-workflow-structure-convergencedivergence-map",
      children: "3. Workflow Structure Convergence/Divergence Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-convergence-patterns-what-projects-converge-on",
      children: "3.1 Convergence Patterns (What Projects Converge On)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW trigger in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% (5/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules, starborn_legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11-step or 12-step RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% (5/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version schema definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% (5/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Branch safety checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% (4/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " RW trigger adoption is moderate (56%), indicating need for better promotion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-divergence-patterns-what-projects-diverge-from-adk",
      children: "3.2 Divergence Patterns (What Projects Diverge From ADK)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Divergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Root Cause"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No RW trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% (4/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ No ADK workflow adoption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom step counts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% (4/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Various"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Customization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67% (6/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Low config adoption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoded paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22% (2/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Not using config"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Workflow configuration adoption is low (33%), indicating need for better promotion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-convergencedivergence-matrix-workflow-structure",
      children: "3.3 Convergence/Divergence Matrix: Workflow Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Converged Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diverged Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW Trigger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Step Count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12-step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11-step/12-step (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% ⚠️"
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
            children: "Config-driven (33%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoded (22%), None (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Version Schema"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Branch Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% ⚠️"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Promote RW trigger adoption (56% is moderate), promote config-driven approach (33% is low)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-cursorrules-structure-convergencedivergence-map",
      children: "4. Cursorrules Structure Convergence/Divergence Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-convergence-patterns-what-projects-converge-on",
      children: "4.1 Convergence Patterns (What Projects Converge On)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file naming"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% (9/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW trigger section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% (5/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version schema definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% (5/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git workflow restrictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% (4/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " naming is universal (100%), but RW trigger adoption is moderate (56%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-divergence-patterns-what-projects-diverge-from-adk",
      children: "4.2 Divergence Patterns (What Projects Diverge From ADK)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Divergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Root Cause"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No RW trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% (4/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ No ADK workflow adoption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% (4/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starborn_legacy, free-party-promoter, vwmp, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Minimal adoption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project overview first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22% (2/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals, confidentia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Different organization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No document lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67% (6/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Low adoption"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Cursorrules structure patterns diverge significantly, with many projects using minimal structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-convergencedivergence-matrix-cursorrules-structure",
      children: "4.3 Convergence/Divergence Matrix: Cursorrules Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Converged Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diverged Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
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
              children: ".cursorrules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch-specific (11%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100% ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Section Order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow-First"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow-First (33%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project-First (22%), Minimal (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW Trigger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehensive (12-step)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document Lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (33%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing (67%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Git Restrictions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% ⚠️"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Promote comprehensive cursorrules structure (33% adoption is low), maintain ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " naming (100% convergence)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-version-schema-convergencedivergence-map",
      children: "5. Version Schema Convergence/Divergence Map"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-convergence-patterns-what-projects-converge-on",
      children: "5.1 Convergence Patterns (What Projects Converge On)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " schema"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% (5/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules, starborn_legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version file location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% (4/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version bumping in RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% (5/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK projects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Moderate convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Version schema adoption is moderate (56%), indicating good convergence on ADK canonical."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-divergence-patterns-what-projects-diverge-from-adk",
      children: "5.2 Divergence Patterns (What Projects Diverge From ADK)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Divergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Root Cause"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Different schema format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33% (3/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "free-party-promoter, fynd.deals, vwmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Pre-ADK or custom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No version file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% (4/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia, starborn_legacy, free-party-promoter, qa-kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ No versioning adoption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11% (1/9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fynd.deals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Grandfathered"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Version schema divergence is moderate (33%), with some projects using pre-ADK formats."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-convergencedivergence-matrix-version-schema",
      children: "5.3 Convergence/Divergence Matrix: Version Schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK Canonical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Converged Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diverged Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different (33%), Missing (11%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% ⚠️"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing (44%), Different (11%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44% ⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Version Bumping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present (56%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing (44%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56% ⚠️"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Promote version schema adoption (56% is moderate), support legacy formats for migration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-critical-divergence-issues",
      children: "6. Critical Divergence Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-epic-mashup-critical",
      children: "6.1 Epic Mashup (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Divergence Rate:"
      }), " 33% (3/9 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Affected:"
      }), " been-there, dev-toolkit, agentic-ide-rules", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " Manual copy of ai-dev-kit's actual Kanban structure instead of using installer", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Projects have inappropriate epics (e.g., \"Book Related Work\" in non-book projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Make installer primary/only method, improve installation instructions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-low-workflow-configuration-adoption",
      children: "6.2 Low Workflow Configuration Adoption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Divergence Rate:"
      }), " 67% (6/9 projects don't use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Affected:"
      }), " Most projects", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " Low promotion, unclear benefits", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Moderate - Hardcoded paths, less flexibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Promote config-driven approach, document benefits"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-low-rw-trigger-adoption",
      children: "6.3 Low RW Trigger Adoption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Divergence Rate:"
      }), " 44% (4/9 projects have no RW trigger)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects Affected:"
      }), " fynd.deals, free-party-promoter, vwmp, qa-kb", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " No ADK workflow adoption", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Moderate - No standardized release workflow", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Promote RW trigger, provide examples"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-summary-convergence-vs-divergence",
      children: "7. Summary: Convergence vs Divergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-high-convergence-areas-67",
      children: "7.1 High Convergence Areas (≥67%)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
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
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file naming"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task naming (", (0,jsx_runtime.jsx)(_components.code, {
              children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document frontmatter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "89%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E/S/T hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-moderate-convergence-areas-33-66",
      children: "7.2 Moderate Convergence Areas (33-66%)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW trigger adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KB organization (5-pillar)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cursorrules structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-critical-divergence-areas-33",
      children: "7.3 Critical Divergence Areas (<33%)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Divergence Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic mashup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ CRITICAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Low adoption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Document lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67% missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Low adoption"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-recommendations",
      children: "8. Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-enforce-high-convergence-patterns",
      children: "8.1 Enforce High Convergence Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "docs/"
          }), " naming:"]
        }), " Already universal (100%), maintain as canonical"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task naming:"
        }), " Strong convergence (67%), enforce ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E/S/T hierarchy:"
        }), " Perfect convergence (100%), maintain as canonical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-promote-moderate-convergence-patterns",
      children: "8.2 Promote Moderate Convergence Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version schema:"
        }), " Moderate convergence (56%), promote adoption"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW trigger:"
        }), " Moderate convergence (56%), promote adoption"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow configuration:"
        }), " Low adoption (33%), promote config-driven approach"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-address-critical-divergence-issues",
      children: "8.3 Address Critical Divergence Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic mashup:"
        }), " CRITICAL (33%), make installer primary/only method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow configuration:"
        }), " Low adoption (67%), document benefits"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document lifecycle:"
        }), " Low adoption (67%), promote lifecycle management"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-next-steps",
      children: "9. Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This convergence/divergence analysis informs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
          children: "meta-analysis-pattern-frequency-tables.md"
        }), " - Pattern frequency data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-canonical-vs-legacy-matrices.md"
        }), " - Canonical vs legacy comparison"]
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