"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["88289"], {
75213(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_analysis_meta_analysis_workflows_md_f73_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-analysis-meta-analysis-workflows-md-f73.json
var site_docs_knowledge_analysis_meta_analysis_workflows_md_f73_namespaceObject = JSON.parse('{"id":"knowledge/analysis/meta-analysis-workflows","title":"Meta-Analysis: Workflows","description":"Purpose: Synthesize workflow structure analysis into comprehensive meta-analysis for \\"ultimate\\" canonical workflow structure","source":"@site/../docs/knowledge/analysis/meta-analysis-workflows.md","sourceDirName":"knowledge/analysis","slug":"/knowledge/analysis/meta-analysis-workflows","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-workflows","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/analysis/meta-analysis-workflows.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-17T16:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Meta-Analysis: Pattern/Anti-Pattern Identification","permalink":"/ai-dev-kit/docs/knowledge/analysis/meta-analysis-patterns-anti-patterns"},"next":{"title":"Outstanding Work Summary","permalink":"/ai-dev-kit/docs/knowledge/analysis/outstanding-work-summary"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/analysis/meta-analysis-workflows.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-17T16:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Meta-Analysis: Workflows';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Synthesis: Workflow File Patterns",
  "id": "1-synthesis-workflow-file-patterns",
  "level": 2
}, {
  "value": "1.1 File Naming Convergence",
  "id": "11-file-naming-convergence",
  "level": 3
}, {
  "value": "1.2 File Location Convergence",
  "id": "12-file-location-convergence",
  "level": 3
}, {
  "value": "2. Synthesis: Release Workflow Patterns",
  "id": "2-synthesis-release-workflow-patterns",
  "level": 2
}, {
  "value": "2.1 Step Count Convergence",
  "id": "21-step-count-convergence",
  "level": 3
}, {
  "value": "2.2 Branch Safety Check Convergence",
  "id": "22-branch-safety-check-convergence",
  "level": 3
}, {
  "value": "2.3 Configuration Convergence",
  "id": "23-configuration-convergence",
  "level": 3
}, {
  "value": "3. Synthesis: Workflow Execution Patterns",
  "id": "3-synthesis-workflow-execution-patterns",
  "level": 2
}, {
  "value": "3.1 Execution Pattern Convergence",
  "id": "31-execution-pattern-convergence",
  "level": 3
}, {
  "value": "3.2 Progress Tracking Convergence",
  "id": "32-progress-tracking-convergence",
  "level": 3
}, {
  "value": "3.3 Validation Convergence",
  "id": "33-validation-convergence",
  "level": 3
}, {
  "value": "4. Critical Issues Identified",
  "id": "4-critical-issues-identified",
  "level": 2
}, {
  "value": "4.1 Branch Safety Check Adoption (CRITICAL)",
  "id": "41-branch-safety-check-adoption-critical",
  "level": 3
}, {
  "value": "4.2 Config-Driven Approach Adoption (HIGH)",
  "id": "42-config-driven-approach-adoption-high",
  "level": 3
}, {
  "value": "4.3 RW Trigger Adoption (HIGH)",
  "id": "43-rw-trigger-adoption-high",
  "level": 3
}, {
  "value": "5. Recommendations for &quot;Ultimate&quot; Canonical Workflow Structure",
  "id": "5-recommendations-for-ultimate-canonical-workflow-structure",
  "level": 2
}, {
  "value": "5.1 Workflow File Structure",
  "id": "51-workflow-file-structure",
  "level": 3
}, {
  "value": "5.2 Release Workflow Structure",
  "id": "52-release-workflow-structure",
  "level": 3
}, {
  "value": "5.3 Configuration Structure",
  "id": "53-configuration-structure",
  "level": 3
}, {
  "value": "5.4 Execution Pattern",
  "id": "54-execution-pattern",
  "level": 3
}, {
  "value": "5.5 Validation Structure",
  "id": "55-validation-structure",
  "level": 3
}, {
  "value": "6. Summary: &quot;Ultimate&quot; Canonical Workflow Structure",
  "id": "6-summary-ultimate-canonical-workflow-structure",
  "level": 2
}, {
  "value": "6.1 File Structure",
  "id": "61-file-structure",
  "level": 3
}, {
  "value": "6.2 Release Workflow",
  "id": "62-release-workflow",
  "level": 3
}, {
  "value": "6.3 Configuration",
  "id": "63-configuration",
  "level": 3
}, {
  "value": "6.4 Execution",
  "id": "64-execution",
  "level": 3
}, {
  "value": "6.5 Validation",
  "id": "65-validation",
  "level": 3
}, {
  "value": "7. Next Steps",
  "id": "7-next-steps",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "meta-analysis-workflows",
        children: "Meta-Analysis: Workflows"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Synthesize workflow structure analysis into comprehensive meta-analysis for \"ultimate\" canonical workflow structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "comprehensive meta-analysis"
      }), " of workflow structures across all 10 analyzed projects (9 client implementations + ai-dev-kit source), synthesizing:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow structure analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern frequency tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convergence/divergence maps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical vs legacy matrices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Moderate convergence"
        }), " on RW trigger adoption (50%, ai-dev-kit has workflow YAML but no cursorrules)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low adoption"
        }), " of config-driven approach (30%, ai-dev-kit has example only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL gap:"
        }), " Branch safety check adoption is low (40%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Moderate convergence"
        }), " on 11-step/12-step RW (50%)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Sources:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-structure-analysis.md"
        }), " - Granular workflow analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-pattern-frequency-tables.md"
        }), " - Pattern frequency data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-convergence-divergence-maps.md"
        }), " - Convergence/divergence analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-canonical-vs-legacy-matrices.md"
        }), " - Canonical vs legacy comparison"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "10 project analysis reports (9 client implementations + ai-dev-kit source)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-synthesis-workflow-file-patterns",
      children: "1. Synthesis: Workflow File Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-file-naming-convergence",
      children: "1.1 File Naming Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "YAML Workflow Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{name\\}-workflow.yaml"
        }), " (canonical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 30% (3/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternative:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{name\\}.yaml"
        }), " - 20% (2/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Moderate convergence"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script-Based Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".py"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: ".sh"
        }), " scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 20% (2/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Legacy pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Embedded Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " RW trigger in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 50% (5/10 projects, ai-dev-kit has workflow YAML but no cursorrules)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Moderate convergence"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " YAML workflow files are canonical (30%), but embedded RW trigger is more common (50%). Note: ai-dev-kit (source) has workflow YAML but no ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-file-location-convergence",
      children: "1.2 File Location Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Package Location:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 30% (3/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ ADK pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Root Location:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 20% (2/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Project-specific pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " File location patterns diverge, requiring flexible support."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-synthesis-release-workflow-patterns",
      children: "2. Synthesis: Release Workflow Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-step-count-convergence",
      children: "2.1 Step Count Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12-Step RW (Canonical):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 20% (2/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects:"
        }), " ai-dev-kit, agentic-ide-rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Low adoption"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "11-Step RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 30% (3/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects:"
        }), " been-there, dev-toolkit, confidentia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Moderate adoption (before Step 6 added)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "10-Step RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 10% (1/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects:"
        }), " starborn_legacy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Custom pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "13-Step RW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 10% (1/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects:"
        }), " agentic-ide-rules (extended with PDCA)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Extended pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "No RW Trigger:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 40% (4/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects:"
        }), " fynd.deals, free-party-promoter, vwmp, qa-kb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ❌ CRITICAL GAP"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " RW step count varies significantly (10-step to 13-step), but 11-step/12-step combined is 56% (moderate convergence)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-branch-safety-check-convergence",
      children: "2.2 Branch Safety Check Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch Safety Check Present:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 40% (4/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ❌ CRITICAL GAP - Low adoption"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " CRITICAL - Prevents cross-epic contamination"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch Safety Check Missing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 50% (5/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ❌ CRITICAL GAP"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Branch safety check adoption is low (44%), requiring immediate promotion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-configuration-convergence",
      children: "2.3 Configuration Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Config-Driven (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 30% (3/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects:"
        }), " been-there, dev-toolkit, agentic-ide-rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Low adoption"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardcoded Paths:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 20% (2/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects:"
        }), " fynd.deals, confidentia (some)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Legacy pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "No Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 40% (4/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects:"
        }), " starborn_legacy, free-party-promoter, vwmp, qa-kb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ No workflow adoption"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Config-driven approach adoption is low (33%), requiring promotion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-synthesis-workflow-execution-patterns",
      children: "3. Synthesis: Workflow Execution Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-execution-pattern-convergence",
      children: "3.1 Execution Pattern Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent-Driven (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 50% (5/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Moderate convergence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " ADK canonical pattern, intelligent execution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script-Based:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 20% (2/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Legacy pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 20% (2/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ No workflow adoption"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Agent-driven execution is canonical (56%), but script-based and manual patterns exist."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-progress-tracking-convergence",
      children: "3.2 Progress Tracking Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cursor TODOs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 50% (5/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Moderate convergence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " ADK canonical pattern, user visibility"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 40% (4/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ No TODO tracking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Cursor TODO tracking adoption is moderate (56%), requiring promotion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-validation-convergence",
      children: "3.3 Validation Convergence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Present:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 50% (5/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ Moderate convergence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validators:"
        }), " Branch context, changelog format"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Missing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frequency:"
        }), " 40% (4/10 projects)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ⚠️ No validation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Validation adoption is moderate (56%), requiring promotion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-critical-issues-identified",
      children: "4. Critical Issues Identified"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-branch-safety-check-adoption-critical",
      children: "4.1 Branch Safety Check Adoption (CRITICAL)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 44% adoption (4/9 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " CRITICAL - Prevents cross-epic contamination", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " Branch safety check not enforced, benefits not documented"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Promotion Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce branch safety check in RW (mandatory, blocking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document benefits and risks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples of contamination prevention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make branch safety check part of installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-config-driven-approach-adoption-high",
      children: "4.2 Config-Driven Approach Adoption (HIGH)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 33% adoption (3/9 projects)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Hardcoded paths reduce flexibility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " Config benefits not documented, migration path unclear"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Promotion Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document config benefits (flexibility, maintainability)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guide from hardcoded paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make config part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show examples of config-driven customization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-rw-trigger-adoption-high",
      children: "4.3 RW Trigger Adoption (HIGH)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " 56% adoption (5/9 projects), 44% missing", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - No standardized release workflow", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause:"
      }), " RW trigger not part of installation, benefits not documented"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Promotion Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document RW trigger benefits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples and templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make RW trigger part of installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show standardized release process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-recommendations-for-ultimate-canonical-workflow-structure",
      children: "5. Recommendations for \"Ultimate\" Canonical Workflow Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-workflow-file-structure",
      children: "5.1 Workflow File Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: YAML Workflow Files"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{workflow-name}-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/"
        }), " directory (project root) or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/"
        }), " (framework)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{name\\}.yaml"
        }), " format, script-based workflows (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".py"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: ".sh"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YAML workflow files are canonical (33%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedded RW trigger is more common (56%), but YAML files provide better structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support legacy script-based workflows during migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-release-workflow-structure",
      children: "5.2 Release Workflow Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: 12-Step RW (Canonical)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "🚨 MANDATORY BLOCKING: Branch Safety Check"
        }), " - CRITICAL: Prevents cross-epic contamination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bump Version"
        }), " - Update version file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Detailed Changelog"
        }), " - Generate detailed changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Main Changelog"
        }), " - Add summary entry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update README"
        }), " - Update version badge (optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update BR/FR Docs"
        }), " - Document fix attempts (optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-update Kanban Docs"
        }), " - Update Epic/Story docs with version markers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage Files"
        }), " - Stage all modified files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run Validators"
        }), " - Execute branch context and changelog format validators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit Changes"
        }), " - Create git commit with versioned message"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Git Tag"
        }), " - Create annotated tag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push to Remote"
        }), " - Push branch and tags"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Steps:"
      }), "\n13. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PDCA Verification"
      }), " - Optional CHECK phase\n14. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary"
      }), " - Optional ACT phase"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Legacy Support:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support 10-step/11-step RW variants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support 13-step RW with PDCA extension"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "12-step RW is canonical (22% adoption, but ADK standard)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "11-step/12-step combined is 56% (moderate convergence)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support legacy step counts during migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-configuration-structure",
      children: "5.3 Configuration Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Config-Driven Approach"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Config File:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Config:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version_file: src/{project}/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Config:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "use_kanban: true\nkanban_root: docs/project-management/kanban\nepic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md\nstory_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Legacy Support:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support hardcoded paths during migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support projects without config (fallback to defaults)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config-driven approach is canonical (33% adoption, but ADK standard)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides flexibility and maintainability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support hardcoded paths during migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-execution-pattern",
      children: "5.4 Execution Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Agent-Driven Execution"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern:"
      }), " ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Progress Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Required:"
        }), " Cursor TODOs for all steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " User visibility, agent organization, error recovery"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Atomicity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Required:"
        }), " Complete all steps or explicitly abort"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Prevents partial releases, maintains consistency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Legacy Support:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support script-based execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support manual execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent-driven execution is canonical (56% adoption)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides intelligent execution, user visibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support legacy execution patterns during migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-validation-structure",
      children: "5.5 Validation Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended: Required Validation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch Context:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py --strict"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_changelog_format.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation adoption is moderate (56%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents invalid releases, maintains quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support optional validation during migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-summary-ultimate-canonical-workflow-structure",
      children: "6. Summary: \"Ultimate\" Canonical Workflow Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-file-structure",
      children: "6.1 File Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{workflow-name}-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/"
        }), " directory (project root) or framework location"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{name\\}.yaml"
        }), ", script-based workflows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-release-workflow",
      children: "6.2 Release Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step Count:"
        }), " 12 steps (canonical) + 2 optional steps", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Reference Implementation:"
            }), " ai-dev-kit source has comprehensive 12-step workflow YAML definitions"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1:"
        }), " Branch Safety Check (mandatory, blocking) - CRITICAL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Steps 2-12:"
        }), " Standard RW steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " 10-step/11-step/13-step variants"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " ai-dev-kit source demonstrates workflow YAML structure but lacks ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file (should be added)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-configuration",
      children: "6.3 Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " (config-driven approach)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Required Config:"
        }), " Version file, changelog paths, scripts path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional Config:"
        }), " Kanban integration, custom patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Hardcoded paths during migration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-execution",
      children: "6.4 Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern:"
        }), " Agent-driven (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress Tracking:"
        }), " Cursor TODOs (required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomicity:"
        }), " Complete all steps or abort (required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Script-based, manual execution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-validation",
      children: "6.5 Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Required:"
        }), " Branch context validation, changelog format validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Legacy Support:"
        }), " Optional validation during migration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-next-steps",
      children: "7. Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This workflow structure meta-analysis informs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ultimate Canonical Workflow Structure Design"
        }), " (final deliverable)"]
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
          children: "workflow-structure-analysis.md"
        }), " - Source granular analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-pattern-frequency-tables.md"
        }), " - Pattern frequency data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-convergence-divergence-maps.md"
        }), " - Convergence/divergence analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "meta-analysis-canonical-vs-legacy-matrices.md"
        }), " - Canonical vs legacy comparison"]
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