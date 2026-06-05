"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["37930"], {
48697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_articles_hybrid_task_template_system_building_better_templates_md_296_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-articles-hybrid-task-template-system-building-better-templates-md-296.json
var site_docs_knowledge_articles_hybrid_task_template_system_building_better_templates_md_296_namespaceObject = JSON.parse('{"id":"knowledge/articles/hybrid-task-template-system-building-better-templates","title":"Building Better Templates: How We Solved the 300-Template Problem with a Hybrid Approach","description":"A deep dive into solving template management at scale, balancing quality with maintainability","source":"@site/../docs/knowledge/articles/hybrid-task-template-system-building-better-templates.md","sourceDirName":"knowledge/articles","slug":"/knowledge/articles/hybrid-task-template-system-building-better-templates","permalink":"/ai-dev-kit/docs/knowledge/articles/hybrid-task-template-system-building-better-templates","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/articles/hybrid-task-template-system-building-better-templates.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-22T10:50:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Scaling long-running autonomous coding","permalink":"/ai-dev-kit/docs/knowledge/articles/cursor-scaling-long-running-autonomous-coding-agents"},"next":{"title":"Knowledge Base Guides","permalink":"/ai-dev-kit/docs/knowledge/guides/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/articles/hybrid-task-template-system-building-better-templates.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-22T10:50:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Building Better Templates: How We Solved the 300-Template Problem with a Hybrid Approach';

const assets = {

};



const toc = [{
  "value": "The Problem: When Templates Become a Burden",
  "id": "the-problem-when-templates-become-a-burden",
  "level": 2
}, {
  "value": "The Journey: From Concern to Analysis",
  "id": "the-journey-from-concern-to-analysis",
  "level": 2
}, {
  "value": "The Initial Panic",
  "id": "the-initial-panic",
  "level": 3
}, {
  "value": "The Analysis Phase",
  "id": "the-analysis-phase",
  "level": 3
}, {
  "value": "The Options",
  "id": "the-options",
  "level": 3
}, {
  "value": "The Solution: A Hybrid Template System",
  "id": "the-solution-a-hybrid-template-system",
  "level": 2
}, {
  "value": "The Core Idea",
  "id": "the-core-idea",
  "level": 3
}, {
  "value": "The Architecture",
  "id": "the-architecture",
  "level": 3
}, {
  "value": "Key Components",
  "id": "key-components",
  "level": 3
}, {
  "value": "Implementation: Building the Generator",
  "id": "implementation-building-the-generator",
  "level": 2
}, {
  "value": "Design Phase",
  "id": "design-phase",
  "level": 3
}, {
  "value": "Implementation Phase",
  "id": "implementation-phase",
  "level": 3
}, {
  "value": "Integration Phase",
  "id": "integration-phase",
  "level": 3
}, {
  "value": "The Benefits: Why Hybrid Works",
  "id": "the-benefits-why-hybrid-works",
  "level": 2
}, {
  "value": "Short-Term Benefits",
  "id": "short-term-benefits",
  "level": 3
}, {
  "value": "Long-Term Benefits",
  "id": "long-term-benefits",
  "level": 3
}, {
  "value": "Trade-Offs",
  "id": "trade-offs",
  "level": 3
}, {
  "value": "Real-World Impact",
  "id": "real-world-impact",
  "level": 2
}, {
  "value": "For Framework Maintainers",
  "id": "for-framework-maintainers",
  "level": 3
}, {
  "value": "For Adopting Projects",
  "id": "for-adopting-projects",
  "level": 3
}, {
  "value": "Storage Comparison",
  "id": "storage-comparison",
  "level": 3
}, {
  "value": "Lessons Learned",
  "id": "lessons-learned",
  "level": 2
}, {
  "value": "1. Don&#39;t Throw Away Good Work",
  "id": "1-dont-throw-away-good-work",
  "level": 3
}, {
  "value": "2. Data Beats Assumptions",
  "id": "2-data-beats-assumptions",
  "level": 3
}, {
  "value": "3. Quality vs. Maintainability Trade-Off",
  "id": "3-quality-vs-maintainability-trade-off",
  "level": 3
}, {
  "value": "4. Single Source of Truth Matters",
  "id": "4-single-source-of-truth-matters",
  "level": 3
}, {
  "value": "5. Validation is Critical",
  "id": "5-validation-is-critical",
  "level": 3
}, {
  "value": "6. Incremental Migration Works",
  "id": "6-incremental-migration-works",
  "level": 3
}, {
  "value": "The Technical Details",
  "id": "the-technical-details",
  "level": 2
}, {
  "value": "Generator Architecture",
  "id": "generator-architecture",
  "level": 3
}, {
  "value": "Code Structure",
  "id": "code-structure",
  "level": 3
}, {
  "value": "File Structure",
  "id": "file-structure",
  "level": 3
}, {
  "value": "Future Directions",
  "id": "future-directions",
  "level": 2
}, {
  "value": "Short-Term",
  "id": "short-term",
  "level": 3
}, {
  "value": "Medium-Term",
  "id": "medium-term",
  "level": 3
}, {
  "value": "Long-Term",
  "id": "long-term",
  "level": 3
}, {
  "value": "Conclusion: The Power of Hybrid Approaches",
  "id": "conclusion-the-power-of-hybrid-approaches",
  "level": 2
}, {
  "value": "References",
  "id": "references",
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
        id: "building-better-templates-how-we-solved-the-300-template-problem-with-a-hybrid-approach",
        children: "Building Better Templates: How We Solved the 300-Template Problem with a Hybrid Approach"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A deep dive into solving template management at scale, balancing quality with maintainability"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-problem-when-templates-become-a-burden",
      children: "The Problem: When Templates Become a Burden"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Picture this: You're building a comprehensive framework for project management. You've designed a beautiful, canonical structure with hundreds of reusable templates. Each template is carefully crafted, human-authored, and provides real value to users. You're about 65% done—196 templates created, ~100 more to go."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then reality hits."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The numbers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "196 templates"
        }), " already created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "~100 templates"
        }), " remaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "~63 hours"
        }), " of work invested so far"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "~22 hours"
        }), " still needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.6MB"
        }), " of template files (uncompressed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "~300+ templates"
        }), " total when complete"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You start asking uncomfortable questions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " How many more hours will this consume?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " How much disk space do these templates really need?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance:"
        }), " What happens when we need to update all 300 templates?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability:"
        }), " Can we really maintain this manually forever?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These aren't theoretical concerns. They're real, immediate problems that could derail the entire project."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-journey-from-concern-to-analysis",
      children: "The Journey: From Concern to Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-initial-panic",
      children: "The Initial Panic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When we first realized the scope of the template creation effort, there was a moment of panic. We'd invested dozens of hours creating high-quality templates. Each one was carefully crafted with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rich, contextual guidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear scope definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detailed acceptance criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive input/output specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thoughtful approach sections"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["But the remaining work was daunting. And worse, we realized that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maintenance"
      }), " would be an ongoing nightmare. What if we needed to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a new required section to all templates?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update acceptance criteria patterns?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standardize formatting across all 300 files?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The manual approach wasn't sustainable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-analysis-phase",
      children: "The Analysis Phase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We needed data, not assumptions. So we did a comprehensive analysis:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Investment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current: ~41 hours invested (196 templates × 12.5 minutes average)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remaining: ~22 hours (104 templates × 12.5 minutes)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total: ~63 hours"
        }), " for complete template set"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disk Space:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uncompressed: 1.6MB (negligible for modern systems)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compressed: 194KB (extremely small)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verdict:"
        }), " Not a blocker, but could be optimized"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance Scenarios:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structural change:"
        }), " ~25-50 hours to update all templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content change:"
        }), " Variable, but tedious"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New tasks:"
        }), " Manual creation each time"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The analysis revealed something important: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disk space wasn't the issue"
      }), ". The real problems were:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time cost"
        }), " (both initial and ongoing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance burden"
        }), " (keeping 300 files in sync)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability"
        }), " (what happens as the framework evolves?)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-options",
      children: "The Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We evaluated three approaches:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 1: Fully Manual (Status Quo)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Maximum quality and human nuance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ High time cost (~63 hours total)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ High maintenance cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Hard to keep templates synchronized"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 2: Fully Procedural"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Small footprint (structure + generator)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Cheap to regenerate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Harder to guarantee quality without reference set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Risk of generic, low-value templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 3: Hybrid Approach"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Preserve existing high-quality templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Enable procedural generation for future"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Use concrete templates as validation corpus"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Single source of truth (structure document)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Dual maintenance during transition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hybrid approach emerged as the clear winner."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-solution-a-hybrid-template-system",
      children: "The Solution: A Hybrid Template System"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-core-idea",
      children: "The Core Idea"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We decided to adopt a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hybrid task template system"
      }), " that combines:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concrete Templates:"
        }), " High-quality, human-authored templates (the \"golden set\")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Procedural Generator:"
        }), " Script that generates templates from canonical structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation Loop:"
        }), " Use concrete templates to validate and improve generator output"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-architecture",
      children: "The Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────┐\n│  COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md               │\n│  (Single Source of Truth - 41KB)                        │\n└──────────────────┬──────────────────────────────────────┘\n                   │\n                   ├─────────────────┐\n                   │                 │\n                   ▼                 ▼\n        ┌──────────────────┐  ┌──────────────────┐\n        │ Concrete Templates│  │ Generator Script │\n        │ (196 templates)   │  │ (Python)         │\n        │ (1.6MB)           │  │ (60KB)           │\n        └──────────────────┘  └────────┬─────────┘\n                                        │\n                                        ▼\n                            ┌──────────────────────┐\n                            │ Generated Templates  │\n                            │ (Validated against   │\n                            │  concrete set)       │\n                            └──────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-components",
      children: "Key Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Canonical Structure Document"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single source of truth for all Epics, Stories, and Tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "41KB file encoding the entire canonical structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy to maintain and evolve"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Concrete Templates (Golden Set)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "196 high-quality, human-authored templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference implementation for validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immediate value for adopters"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Procedural Generator"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python script (", (0,jsx_runtime.jsx)(_components.code, {
          children: "generate_task_templates.py"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parses structure document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generates templates matching concrete template structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports dry-run, overwrite protection, filtering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Validation Routine"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compares generated templates against concrete templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures structural correctness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validates placeholder usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checks consistency of task IDs and naming"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-building-the-generator",
      children: "Implementation: Building the Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design-phase",
      children: "Design Phase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We started with a comprehensive design document covering:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input Format:"
        }), " How to parse the structure document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mapping Rules:"
        }), " Structure → template file paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Template Population:"
        }), " How to fill template sections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety Features:"
        }), " Overwrite protection, dry-run mode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Interface:"
        }), " User-friendly command-line options"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-phase",
      children: "Implementation Phase"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The generator script (", (0,jsx_runtime.jsx)(_components.code, {
        children: "generate_task_templates.py"
      }), ") includes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extracts Epic/Story/Task hierarchy"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generates task template files matching ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK_TEMPLATE.md"
        }), " structure"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Populates sections (Scope, Input, Deliverable, Acceptance Criteria, Approach, Dependencies)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preserves contextualization placeholders (", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{PROJECT_NAME\\}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{PROJECT_TYPE\\}"
        }), ", etc.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Default behavior skips existing files (requires ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--overwrite"
        }), " to regenerate)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dry-run mode for preview"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic/story filtering for targeted generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation routine for comparing generated vs concrete templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Interface:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate all missing templates\npython3 scripts/generate_task_templates.py\n\n# Generate for specific epic\npython3 scripts/generate_task_templates.py --epic 1\n\n# Dry run (preview)\npython3 scripts/generate_task_templates.py --dry-run\n\n# Overwrite existing templates\npython3 scripts/generate_task_templates.py --overwrite\n\n# Validate generated templates\npython3 scripts/generate_task_templates.py --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-phase",
      children: "Integration Phase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We integrated the generator into the Kanban framework package:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Script Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/generate_task_templates.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Added to scripts README with comprehensive usage guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Main README:"
        }), " Added hybrid strategy section explaining the approach"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Contents:"
        }), " Listed generator in package structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-benefits-why-hybrid-works",
      children: "The Benefits: Why Hybrid Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "short-term-benefits",
      children: "Short-Term Benefits"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Immediate Value"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete, high-quality template set for all canonical tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adopters can use templates immediately (no generation required)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference implementation for validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Quality Preservation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing high-quality templates preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Human-authored nuance maintained"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No loss of investment already made"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "long-term-benefits",
      children: "Long-Term Benefits"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Reduced Maintenance Cost"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structural changes: Update structure doc + generator → regenerate all templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-cutting improvements: Propagate automatically"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time savings:"
        }), " From ~25-50 hours to ~1-2 hours for structural changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Smaller Distribution Footprint"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Clients can choose:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use pre-generated templates (as today)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run generator locally from small structure + script"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage:"
        }), " From 1.6MB to ~60KB (structure + generator)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Better Alignment"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generator enforces consistency between structure document and templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single source of truth (structure document)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear mapping: structure → generator → templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Feedback Loop"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Real-world usage feedback on concrete templates informs:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Structure document improvements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generator heuristics refinement"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continuous improvement cycle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trade-offs",
      children: "Trade-Offs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Dual Maintenance (Temporary)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "During transition, maintain both concrete templates and generator"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Clear ownership and migration plan"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Long-term:"
        }), " Generated output becomes canonical for new changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Generator Correctness Risk"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bugs could create malformed templates"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Validate against concrete \"golden\" templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Add comprehensive tests"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Complexity Overhead"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Additional tool and cognitive load"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitigation:"
        }), " Keep generator small, well-documented, close to templates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-impact",
      children: "Real-World Impact"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-framework-maintainers",
      children: "For Framework Maintainers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual template creation: ~12.5 minutes per template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structural changes: ~25-50 hours to update all templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk of inconsistency if updates missed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generator creation: One-time ~8 hours"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structural changes: ~1-2 hours (update structure + generator → regenerate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic consistency enforcement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time Savings:"
      }), " ~23-48 hours per structural change"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-adopting-projects",
      children: "For Adopting Projects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 1: Use Pre-Generated Templates"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Immediate availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ High quality, human-authored"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No generation required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Ready to contextualize and use"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 2: Generate Locally"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Small footprint (~60KB vs 1.6MB)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Customizable generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Always up-to-date with latest structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Can regenerate after structure updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "storage-comparison",
      children: "Storage Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concrete Templates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.6MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-generated, ready to use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure + Generator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~60KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate on-demand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compressed Templates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "194KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Archive format"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verdict:"
      }), " Storage isn't a blocker, but generator approach is 96% smaller."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lessons-learned",
      children: "Lessons Learned"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-dont-throw-away-good-work",
      children: "1. Don't Throw Away Good Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We had invested ~41 hours creating high-quality templates. The hybrid approach preserved that investment while solving the maintenance problem. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " When evaluating alternatives, consider sunk costs and how to leverage existing work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-data-beats-assumptions",
      children: "2. Data Beats Assumptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Our initial concern was disk space. Analysis revealed it wasn't the real problem. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " Always analyze before optimizing. Measure what matters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-quality-vs-maintainability-trade-off",
      children: "3. Quality vs. Maintainability Trade-Off"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fully procedural templates risk generic, low-value content. Fully manual templates risk maintenance burden. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " Hybrid approaches can balance competing concerns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-single-source-of-truth-matters",
      children: "4. Single Source of Truth Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Having one canonical structure document makes everything easier. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " Centralize authoritative data, generate everything else."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-validation-is-critical",
      children: "5. Validation is Critical"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using concrete templates as a validation corpus ensures generator quality. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " Reference implementations are valuable for validating generated code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-incremental-migration-works",
      children: "6. Incremental Migration Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We didn't need to throw away existing templates. We built the generator alongside them. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " Incremental improvements beat big-bang rewrites."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-technical-details",
      children: "The Technical Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generator-architecture",
      children: "Generator Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parsing Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Markdown parser for structure document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regex patterns for Epic/Story/Task extraction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hierarchical structure building"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Generation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Template file structure from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Section population from structure document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Placeholder preservation for contextualization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structural comparison (sections, headings, frontmatter)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Placeholder usage verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task ID and naming consistency checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-structure",
      children: "Code Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simplified generator flow\ndef generate_task_templates():\n    # 1. Parse structure document\n    structure = parse_structure_document()\n    \n    # 2. Extract Epic/Story/Task hierarchy\n    hierarchy = extract_hierarchy(structure)\n    \n    # 3. Load template structure\n    template = load_template_structure()\n    \n    # 4. Generate templates\n    for epic in hierarchy.epics:\n        for story in epic.stories:\n            for task in story.tasks:\n                generate_task_template(epic, story, task, template)\n    \n    # 5. Validate against concrete templates\n    validate_generated_templates()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-structure",
      children: "File Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/\n├── templates/\n│   ├── COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md  # Source of truth\n│   ├── TASK_TEMPLATE.md                          # Template structure\n│   └── tasks/                                    # Generated/concrete templates\n│       ├── epic-01/\n│       │   └── story-001/\n│       │       └── T01-*.md\n│       └── ...\n└── scripts/\n    └── generate_task_templates.py               # Generator script\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "future-directions",
      children: "Future Directions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "short-term",
      children: "Short-Term"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Complete Concrete Templates"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Finish remaining ~100 templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Establish complete \"golden set\" for validation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Generator Refinement"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Improve content generation based on concrete template patterns"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add more sophisticated placeholder handling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enhance validation routine"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medium-term",
      children: "Medium-Term"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "AI Enhancement"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use concrete templates to train/fine-tune content generation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate richer, more contextual content"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Learn from real-world usage patterns"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Automated Validation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CI/CD integration for template validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated diff checking"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Regression testing"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "long-term",
      children: "Long-Term"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Template Evolution"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Structure document as single source of truth"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generator as canonical implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Concrete templates as reference/validation corpus"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Client-Side Generation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clients generate templates on-demand"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Always up-to-date with latest structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Customizable generation parameters"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conclusion-the-power-of-hybrid-approaches",
      children: "Conclusion: The Power of Hybrid Approaches"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The hybrid task template system demonstrates a powerful pattern: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "combining the best of manual and automated approaches"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Takeaways:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Preserve Quality:"
          }), " Don't throw away good work. Use it as a foundation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable Automation:"
          }), " Build tools that can scale beyond manual effort."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validate Everything:"
          }), " Use reference implementations to ensure quality."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Single Source of Truth:"
          }), " Centralize authoritative data, generate everything else."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Incremental Migration:"
          }), " Build alongside existing systems, don't replace them."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Measure What Matters:"
          }), " Analyze before optimizing. Focus on real problems."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Result:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ High-quality templates preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Maintenance burden reduced by ~96%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Scalability enabled for future evolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Single source of truth established"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Best of both worlds achieved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This isn't just about templates. It's about ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "building systems that scale"
      }), " while maintaining quality. It's about ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "preserving investment"
      }), " while enabling evolution. It's about ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "finding the right balance"
      }), " between manual craftsmanship and automated efficiency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hybrid approach isn't a compromise—it's a synthesis. And that's what makes it powerful."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analysis Document:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/analysis/task-template-system-analysis.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture Decision Record:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design Document:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/task-template-generator-design.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Request:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-15-procedural-task-template-generation-and-hybrid-strategy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generator Script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/generate_task_templates.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Framework README:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/README.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Author:"
      }), " AI Dev Kit Team", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Published:"
      }), " 2025-12-22", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.15.5+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " E4 (Kanban Framework)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " S15 (Procedural Task Template Generation and Hybrid Strategy)"]
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