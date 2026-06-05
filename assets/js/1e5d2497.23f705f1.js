"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["95785"], {
12147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_adk_drift_analysis_md_1e5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-adk-drift-analysis-md-1e5.json
var site_docs_knowledge_analysis_adk_drift_analysis_md_1e5_namespaceObject = JSON.parse('{"id":"knowledge/analysis/adk-drift-analysis","title":"ADK Framework Drift Analysis","description":"Purpose: Comprehensive analysis of framework drift across all ADK implementations","source":"@site/../docs/knowledge/analysis/adk-drift-analysis.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/adk-drift-analysis","permalink":"/ai-dev-kit/docs/knowledge/analysis/adk-drift-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/adk-drift-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Abstract Anti-Pattern: Use Case Exposed Design Flaw","permalink":"/ai-dev-kit/docs/knowledge/analysis/abstract-anti-patterns-use-case-exposed-design-flaw"},"next":{"title":"ADK Framework Hardening Recommendations","permalink":"/ai-dev-kit/docs/knowledge/analysis/adk-hardening-recommendations"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/adk-drift-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADK Framework Drift Analysis';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Drift Severity Classification",
  "id": "1-drift-severity-classification",
  "level": 2
}, {
  "value": "1.1 None/Minor Drift (67% - 7/10 projects)",
  "id": "11-noneminor-drift-67---710-projects",
  "level": 3
}, {
  "value": "1.2 Major Drift (30% - 3/10 projects)",
  "id": "12-major-drift-30---310-projects",
  "level": 3
}, {
  "value": "1.3 Critical Drift (3% - 1 project)",
  "id": "13-critical-drift-3---1-project",
  "level": 3
}, {
  "value": "2. Drift Patterns by Framework Dimension",
  "id": "2-drift-patterns-by-framework-dimension",
  "level": 2
}, {
  "value": "2.1 Kanban Structure Drift",
  "id": "21-kanban-structure-drift",
  "level": 3
}, {
  "value": "2.2 docs/documentation Structure Drift",
  "id": "22-docsdocumentation-structure-drift",
  "level": 3
}, {
  "value": "2.3 Workflow Structure Drift",
  "id": "23-workflow-structure-drift",
  "level": 3
}, {
  "value": "2.4 Cursorrules Structure Drift",
  "id": "24-cursorrules-structure-drift",
  "level": 3
}, {
  "value": "3. Root Causes of Drift",
  "id": "3-root-causes-of-drift",
  "level": 2
}, {
  "value": "3.1 Epic 9 Mismatch in Source (CRITICAL)",
  "id": "31-epic-9-mismatch-in-source-critical",
  "level": 3
}, {
  "value": "3.2 Unclear Installation Instructions",
  "id": "32-unclear-installation-instructions",
  "level": 3
}, {
  "value": "3.3 Missing Installer Validation",
  "id": "33-missing-installer-validation",
  "level": 3
}, {
  "value": "3.4 Framework Customization",
  "id": "34-framework-customization",
  "level": 3
}, {
  "value": "3.5 Source Repository Gaps",
  "id": "35-source-repository-gaps",
  "level": 3
}, {
  "value": "4. Drift Prevention Strategies",
  "id": "4-drift-prevention-strategies",
  "level": 2
}, {
  "value": "4.1 Immediate Actions (CRITICAL)",
  "id": "41-immediate-actions-critical",
  "level": 3
}, {
  "value": "4.2 Short-Term Actions (HIGH)",
  "id": "42-short-term-actions-high",
  "level": 3
}, {
  "value": "4.3 Long-Term Actions (MEDIUM)",
  "id": "43-long-term-actions-medium",
  "level": 3
}, {
  "value": "5. Drift Metrics",
  "id": "5-drift-metrics",
  "level": 2
}, {
  "value": "5.1 Overall Drift Distribution",
  "id": "51-overall-drift-distribution",
  "level": 3
}, {
  "value": "5.2 Drift by Framework Dimension",
  "id": "52-drift-by-framework-dimension",
  "level": 3
}, {
  "value": "6. Related Documentation",
  "id": "6-related-documentation",
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
        id: "adk-framework-drift-analysis",
        children: "ADK Framework Drift Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Comprehensive analysis of framework drift across all ADK implementations", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis Date:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part of:"
      }), " E6:S06", ":T01", " – Comprehensive ADK implementation analysis across all projects"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "10 project analysis reports (9 client implementations + ai-dev-kit source)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meta-analysis: Convergence/Divergence Maps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meta-analysis: Canonical vs Legacy Matrices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern frequency tables"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document analyzes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "framework drift"
      }), " - the divergence of client project implementations from ADK canonical structures. Drift occurs when projects customize frameworks, work around issues, or copy incorrect structures. This analysis identifies drift patterns, severity levels, root causes, and prevention strategies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "None/Minor Drift:"
        }), " 67% of projects (7/10)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Major Drift:"
        }), " 30% of projects (3/10) - Epic mashup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Critical Drift:"
        }), " 3% (1 project) - ai-dev-kit source Epic 9 mismatch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Epic 9 mismatch in ai-dev-kit source is primary cause of major drift"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-drift-severity-classification",
      children: "1. Drift Severity Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-noneminor-drift-67---710-projects",
      children: "1.1 None/Minor Drift (67% - 7/10 projects)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "confidentia"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "fynd-deals"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "starborn-legacy"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "free-party-promoter"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "qa-kb"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "vwmp"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit"
        }), " (source, except Epic 9 issue)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using canonical structures correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor customizations that don't break compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper E/S/T hierarchy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correct KB structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper workflow usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom epic names but correct numbering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor task structure variations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom workflow steps but correct structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-major-drift-30---310-projects",
      children: "1.2 Major Drift (30% - 3/10 projects)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Projects:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "been-there"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "dev-toolkit"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "agentic-ide-rules"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic mashup (copying ai-dev-kit's actual Kanban)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 9 \"Book Related Work\" instead of canonical Epic 9 \"User Management and Authentication\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic numbering conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework structure conflicts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual copy of ai-dev-kit's actual Kanban structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 9 mismatch in ai-dev-kit source"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unclear installation instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No installer validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects have inappropriate epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic numbering conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework drift and confusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot use canonical templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-critical-drift-3---1-project",
      children: "1.3 Critical Drift (3% - 1 project)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit"
        }), " (source repository)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 9 \"Book Related Work\" conflicts with canonical Epic 9 \"User Management and Authentication\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy version file path"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root cause of Epic mashup in 30% of client projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot serve as reference implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source doesn't use own frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-drift-patterns-by-framework-dimension",
      children: "2. Drift Patterns by Framework Dimension"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-kanban-structure-drift",
      children: "2.1 Kanban Structure Drift"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Naming Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-\\{N\\}"
        }), " (hyphen)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic \\{N\\}"
        }), " (space) - 22%, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{N\\}"
        }), " (abbreviated) - 33%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Minor (legacy support needed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Mashup Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " Use canonical templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " Copy ai-dev-kit's actual Kanban - 30%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Major (CRITICAL issue)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause:"
        }), " Epic 9 mismatch in source"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Naming Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " (full context)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T\\{task\\}"
        }), " (standalone) - 11%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Minor (acceptable in checklists)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Padding Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " 2-digit (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " 3-digit (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T001"
        }), ") - 33%, mixed - 33%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Minor (legacy support needed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-docsdocumentation-structure-drift",
      children: "2.2 docs/documentation Structure Drift"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Directory Naming:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " None (100% convergence)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " None (perfect convergence)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KB Organization Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " 5-pillar structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " Multi-pillar (15+) - 10%, hybrid - 40%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Minor (legacy support needed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Frontmatter Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " YAML frontmatter with lifecycle metadata"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " Missing frontmatter - 10%, missing lifecycle - 40%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Minor (promote to required)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-workflow-structure-drift",
      children: "2.3 Workflow Structure Drift"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config Usage Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " (config-driven)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " Hardcoded paths - 50%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Moderate (promote config-driven)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Step Count Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " 12-step RW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " 10-step - 20%, 11-step - 30%, 13-step - 10%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Minor (legacy support needed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " Mandatory branch safety check"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " Skipping validation - 20%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Moderate (enforce validation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-cursorrules-structure-drift",
      children: "2.4 Cursorrules Structure Drift"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File Presence Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file in project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " Missing file - 10% (ai-dev-kit source)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Critical (source repository gap)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Trigger Drift:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical:"
        }), " Comprehensive 12-step RW trigger"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift:"
        }), " Minimal trigger - 30%, missing trigger - 10%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " Moderate (promote comprehensive trigger)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-root-causes-of-drift",
      children: "3. Root Causes of Drift"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-epic-9-mismatch-in-source-critical",
      children: "3.1 Epic 9 Mismatch in Source (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit's Epic 9 \"Book Related Work\" conflicts with canonical Epic 9 \"User Management and Authentication\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects copying ai-dev-kit's actual Kanban get wrong Epic 9"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "30% of client projects affected (Epic mashup)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework drift and confusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot use canonical templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rename ai-dev-kit's Epic 9 to Epic 24+ (project-specific range)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all Epic 9 references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document as project-specific, not canonical"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-unclear-installation-instructions",
      children: "3.2 Unclear Installation Instructions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects don't understand difference between canonical templates and ai-dev-kit's actual Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No clear guidance on which to use"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects copying wrong structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic mashup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework drift"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clearly distinguish templates from actual Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide clear installation examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document Epic mashup prevention"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-missing-installer-validation",
      children: "3.3 Missing Installer Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No validation to prevent Epic mashup during installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No checks for canonical vs project-specific epic conflicts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic mashup not prevented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework drift not caught early"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add installer validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for Epic numbering conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate canonical vs project-specific epics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-framework-customization",
      children: "3.4 Framework Customization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects customizing frameworks to work around issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each customization creates drift from source"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework drift accumulates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continued development increases divergence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better framework design (fewer issues to work around)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear customization guidelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for legitimate customizations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-source-repository-gaps",
      children: "3.5 Source Repository Gaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ai-dev-kit source doesn't use own frameworks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy version file path"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot serve as reference implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source doesn't demonstrate frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects can't learn from source"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file to source"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " to project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate version file path to canonical location"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-drift-prevention-strategies",
      children: "4. Drift Prevention Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-immediate-actions-critical",
      children: "4.1 Immediate Actions (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fix Epic 9 Mismatch in Source"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rename Epic 9 to Epic 24+"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update all references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document as project-specific"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Installer Validation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate Epic numbering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prevent Epic mashup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check canonical vs project-specific conflicts"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Source Repository Frameworks"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " to root"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migrate version file path"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-short-term-actions-high",
      children: "4.2 Short-Term Actions (HIGH)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Improve Installation Instructions"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clearly distinguish templates from actual Kanban"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document Epic mashup prevention"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide clear examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Promote Config-Driven Approach"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Better documentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Simpler examples"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clearer benefits"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-long-term-actions-medium",
      children: "4.3 Long-Term Actions (MEDIUM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Support Legacy Patterns"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document migration paths"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provide conversion tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Support during transition"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Hardening"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reduce issues requiring workarounds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Better framework design"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear customization guidelines"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-drift-metrics",
      children: "5. Drift Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-overall-drift-distribution",
      children: "5.1 Overall Drift Distribution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Percentage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None/Minor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "confidentia, fynd-deals, starborn-legacy, free-party-promoter, qa-kb, vwmp, ai-dev-kit (partial)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Major"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "been-there, dev-toolkit, agentic-ide-rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ai-dev-kit (Epic 9)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-drift-by-framework-dimension",
      children: "5.2 Drift by Framework Dimension"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "None/Minor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Major"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Critical"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30% (Epic mashup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3% (Epic 9 mismatch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "docs/documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cursorrules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10% (missing in source)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-related-documentation",
      children: "6. Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convergence/Divergence Maps:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-convergence-divergence-maps.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical vs Legacy Matrices:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-canonical-vs-legacy-matrices.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Analysis Reports:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "projects/*-adk-analysis.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mashup Issues:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-mashup-issues.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-18T00:00:00Z", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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