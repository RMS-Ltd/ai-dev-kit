"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["1772"], {
81975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_analysis_perpetual_task_range_options_analysis_md_818_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-analysis-perpetual-task-range-options-analysis-md-818.json
var site_docs_analysis_perpetual_task_range_options_analysis_md_818_namespaceObject = JSON.parse('{"id":"analysis/perpetual-task-range-options-analysis","title":"Analysis: Perpetual Task Range Options","description":"Date: 2026-01-16","source":"@site/../docs/analysis/perpetual-task-range-options-analysis.md","sourceDirName":"analysis","slug":"/analysis/perpetual-task-range-options-analysis","permalink":"/ai-dev-kit/docs/analysis/perpetual-task-range-options-analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/analysis/perpetual-task-range-options-analysis.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-16T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Package Management Prioritization Review","permalink":"/ai-dev-kit/docs/analysis/package-management-prioritization-review"},"next":{"title":"Phase 3: Package Distribution Implementation Plan","permalink":"/ai-dev-kit/docs/analysis/phase3-package-distribution-plan"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/analysis/perpetual-task-range-options-analysis.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-16T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Analysis: Perpetual Task Range Options';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Option 1: Low Range (T01-T09)",
  "id": "option-1-low-range-t01-t09",
  "level": 2
}, {
  "value": "Option 2: High Range (T91-T99)",
  "id": "option-2-high-range-t91-t99",
  "level": 2
}, {
  "value": "Option 3: Extended Low Range (T01-T19)",
  "id": "option-3-extended-low-range-t01-t19",
  "level": 2
}, {
  "value": "Option 4: Extended High Range (T81-T99)",
  "id": "option-4-extended-high-range-t81-t99",
  "level": 2
}, {
  "value": "Option 5: Three-Digit Range (T101+)",
  "id": "option-5-three-digit-range-t101",
  "level": 2
}, {
  "value": "Option 6: Middle Range (T41-T59)",
  "id": "option-6-middle-range-t41-t59",
  "level": 2
}, {
  "value": "Comparison Matrix",
  "id": "comparison-matrix",
  "level": 2
}, {
  "value": "Recommended Approach: T01-T19 (Extended Low Range)",
  "id": "recommended-approach-t01-t19-extended-low-range",
  "level": 2
}, {
  "value": "Alternative: T91-T99 (High Range) - If Low Range Conflicts",
  "id": "alternative-t91-t99-high-range---if-low-range-conflicts",
  "level": 2
}, {
  "value": "Implementation Notes",
  "id": "implementation-notes",
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
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "analysis-perpetual-task-range-options",
        children: "Analysis: Perpetual Task Range Options"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-01-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Analysis", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " E9:S01", ":T08", " (Repository Story Abstract Space Contradiction)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document analyzes different approaches for reserving task number ranges for perpetual tasks (e.g., UKW, CMW) within stories. Each approach has trade-offs in terms of scalability, clarity, migration complexity, and alignment with design principles."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Design Principle:"
      }), " Stories with 100+ tasks should be split into epics. This provides a natural upper bound for task numbering."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Number Format:"
      }), " 2-digit (01-99), providing 99 possible task numbers per story."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "option-1-low-range-t01-t09",
      children: "Option 1: Low Range (T01-T09)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reserved Range:"
      }), " Tasks 01-09 (9 tasks reserved)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T01-T09:"
        }), " Perpetual tasks (reserved)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T10-T99:"
        }), " Regular tasks (90 tasks available)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW: E6:S06", ":T08", " (perpetual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CMW: E6:S06", ":T12", " (regular, but should be T09 or lower)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-001: E5:S01", ":T10", " (first repository task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear separation:"
        }), " Low numbers clearly indicate special/perpetual tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy to remember:"
        }), " T01-T09 is intuitive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Early allocation:"
        }), " Perpetual tasks get \"first\" numbers, emphasizing importance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration friendly:"
        }), " Existing perpetual tasks (T08, T12) can be moved to T01-T09 range"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Visual clarity:"
        }), " Low numbers stand out in task lists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conventional:"
        }), " Matches common practice of reserving low numbers for special items"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Limited capacity:"
        }), " Only 9 perpetual tasks per story (may be insufficient)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration complexity:"
        }), " Existing perpetual tasks need renumbering (T08 → T01-T09)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential conflicts:"
        }), " If story already has T01-T09 used for regular tasks, conflicts arise"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Renumbering cascade:"
        }), " Moving tasks may require updating all references"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Per Story:"
        }), " 9 perpetual tasks max"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If Exhausted:"
        }), " Create new story for additional perpetual tasks, or expand range"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium:"
        }), " Existing perpetual tasks (T08, T12) need renumbering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T08", " (UKW) → E6:S06", ":T01", " (UKW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T12", " (CMW) → E6:S06", ":T02", " (CMW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "option-2-high-range-t91-t99",
      children: "Option 2: High Range (T91-T99)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reserved Range:"
      }), " Tasks 91-99 (9 tasks reserved)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T01-T90:"
        }), " Regular tasks (90 tasks available)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T91-T99:"
        }), " Perpetual tasks (reserved)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW: E6:S06", ":T91", " (perpetual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CMW: E6:S06", ":T92", " (perpetual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-001: E5:S01", ":T01", " (first repository task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "No early conflicts:"
        }), " Regular tasks can use T01-T90 without conflicts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear separation:"
        }), " High numbers clearly indicate special/perpetual tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy to remember:"
        }), " T91-T99 is intuitive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration friendly:"
        }), " Existing perpetual tasks can be moved to T91-T99"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Visual clarity:"
        }), " High numbers stand out in task lists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Natural boundary:"
        }), " T99 is the upper limit, making it a natural \"special\" range"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Limited capacity:"
        }), " Only 9 perpetual tasks per story (may be insufficient)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration complexity:"
        }), " Existing perpetual tasks need renumbering (T08 → T91-T99)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential conflicts:"
        }), " If story already has T91-T99 used for regular tasks, conflicts arise"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Renumbering cascade:"
        }), " Moving tasks may require updating all references"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Less intuitive:"
        }), " High numbers may be less obvious as \"special\" than low numbers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Per Story:"
        }), " 9 perpetual tasks max"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If Exhausted:"
        }), " Create new story for additional perpetual tasks, or expand range"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium:"
        }), " Existing perpetual tasks (T08, T12) need renumbering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T08", " (UKW) → E6:S06", ":T91", " (UKW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T12", " (CMW) → E6:S06", ":T92", " (CMW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "option-3-extended-low-range-t01-t19",
      children: "Option 3: Extended Low Range (T01-T19)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reserved Range:"
      }), " Tasks 01-19 (19 tasks reserved)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T01-T19:"
        }), " Perpetual tasks (reserved)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T20-T99:"
        }), " Regular tasks (80 tasks available)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW: E6:S06", ":T08", " (perpetual, already in range)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CMW: E6:S06", ":T12", " (perpetual, already in range)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-001: E5:S01", ":T20", " (first repository task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Higher capacity:"
        }), " 19 perpetual tasks per story (more than T01-T09)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration friendly:"
        }), " Existing perpetual tasks (T08, T12) already in range"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear separation:"
        }), " Low numbers clearly indicate special/perpetual tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimal migration:"
        }), " Existing perpetual tasks may not need renumbering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Visual clarity:"
        }), " Low numbers stand out in task lists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Room for growth:"
        }), " 19 tasks provides buffer for future perpetual tasks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduced regular capacity:"
        }), " Only 80 regular tasks per story (vs. 90)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential conflicts:"
        }), " If story already has T01-T19 used for regular tasks, conflicts arise"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Less conventional:"
        }), " T01-T19 is less standard than T01-T09 or T91-T99"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "May be excessive:"
        }), " 19 perpetual tasks per story may be more than needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Per Story:"
        }), " 19 perpetual tasks max"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If Exhausted:"
        }), " Create new story for additional perpetual tasks, or expand range"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Low:"
        }), " Existing perpetual tasks (T08, T12) already in range"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T08", " (UKW) → No change needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T12", " (CMW) → No change needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "option-4-extended-high-range-t81-t99",
      children: "Option 4: Extended High Range (T81-T99)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reserved Range:"
      }), " Tasks 81-99 (19 tasks reserved)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T01-T80:"
        }), " Regular tasks (80 tasks available)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T81-T99:"
        }), " Perpetual tasks (reserved)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW: E6:S06", ":T81", " (perpetual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CMW: E6:S06", ":T82", " (perpetual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-001: E5:S01", ":T01", " (first repository task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Higher capacity:"
        }), " 19 perpetual tasks per story (more than T91-T99)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "No early conflicts:"
        }), " Regular tasks can use T01-T80 without conflicts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear separation:"
        }), " High numbers clearly indicate special/perpetual tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Natural boundary:"
        }), " T81-T99 is near upper limit, making it a natural \"special\" range"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Room for growth:"
        }), " 19 tasks provides buffer for future perpetual tasks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduced regular capacity:"
        }), " Only 80 regular tasks per story (vs. 90)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration complexity:"
        }), " Existing perpetual tasks need renumbering (T08 → T81-T99)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential conflicts:"
        }), " If story already has T81-T99 used for regular tasks, conflicts arise"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Renumbering cascade:"
        }), " Moving tasks may require updating all references"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Less intuitive:"
        }), " High numbers may be less obvious as \"special\" than low numbers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Per Story:"
        }), " 19 perpetual tasks max"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If Exhausted:"
        }), " Create new story for additional perpetual tasks, or expand range"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High:"
        }), " Existing perpetual tasks (T08, T12) need renumbering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T08", " (UKW) → E6:S06", ":T81", " (UKW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T12", " (CMW) → E6:S06", ":T82", " (CMW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "option-5-three-digit-range-t101",
      children: "Option 5: Three-Digit Range (T101+)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reserved Range:"
      }), " Tasks 101+ (unlimited, but violates 2-digit format)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T01-T99:"
        }), " Regular tasks (99 tasks available)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T101+:"
        }), " Perpetual tasks (unlimited, but requires 3-digit format)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW: E6:S06", ":T101", " (perpetual, 3-digit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CMW: E6:S06", ":T102", " (perpetual, 3-digit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-001: E5:S01", ":T01", " (first repository task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Unlimited capacity:"
        }), " No upper bound for perpetual tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "No conflicts:"
        }), " Regular tasks use T01-T99, perpetual tasks use T101+"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear separation:"
        }), " 3-digit numbers clearly indicate special/perpetual tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "No migration needed:"
        }), " Existing regular tasks unaffected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Future-proof:"
        }), " Can accommodate unlimited perpetual tasks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Format violation:"
        }), " Requires 3-digit task numbers (T101+), breaking 2-digit format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning complexity:"
        }), " Version format ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " assumes 2-digit TASK"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy inconsistency:"
        }), " Breaks versioning policy (TASK is 2-digit: 01-99)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration complexity:"
        }), " Versioning system needs updates to support 3-digit tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Less intuitive:"
        }), " 3-digit numbers may be confusing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Design principle violation:"
        }), " If story has 100+ tasks, it should be an epic"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Per Story:"
        }), " Unlimited perpetual tasks (but violates 100-task principle)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If Exhausted:"
        }), " Not applicable (unlimited)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very High:"
        }), " Requires versioning system changes to support 3-digit tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T08", " (UKW) → E6:S06", ":T101", " (UKW, 3-digit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " Version format change: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.6.101+1"
        }), " (3-digit TASK)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "option-6-middle-range-t41-t59",
      children: "Option 6: Middle Range (T41-T59)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reserved Range:"
      }), " Tasks 41-59 (19 tasks reserved)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T01-T40:"
        }), " Regular tasks (40 tasks available)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T41-T59:"
        }), " Perpetual tasks (reserved)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T60-T99:"
        }), " Regular tasks (40 tasks available)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW: E6:S06", ":T41", " (perpetual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CMW: E6:S06", ":T42", " (perpetual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-001: E5:S01", ":T01", " (first repository task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Higher capacity:"
        }), " 19 perpetual tasks per story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Balanced allocation:"
        }), " Regular tasks split between low and high ranges"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear separation:"
        }), " Middle range clearly indicates special/perpetual tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Room for growth:"
        }), " 19 tasks provides buffer for future perpetual tasks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduced regular capacity:"
        }), " Only 80 regular tasks per story (split range)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Less intuitive:"
        }), " Middle range is less conventional than low or high ranges"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration complexity:"
        }), " Existing perpetual tasks need renumbering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Potential conflicts:"
        }), " If story already has T41-T59 used for regular tasks, conflicts arise"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Confusing:"
        }), " Split regular task range (T01-T40, T60-T99) may be confusing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Per Story:"
        }), " 19 perpetual tasks max"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "If Exhausted:"
        }), " Create new story for additional perpetual tasks, or expand range"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High:"
        }), " Existing perpetual tasks (T08, T12) need renumbering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T08", " (UKW) → E6:S06", ":T41", " (UKW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " E6:S06", ":T12", " (CMW) → E6:S06", ":T42", " (CMW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparison-matrix",
      children: "Comparison Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capacity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regular Tasks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Migration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intuitive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T01-T09"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-digit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T91-T99"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-digit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T01-T19"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low Extended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Low"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-digit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐⭐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T81-T99"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High Extended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-digit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T101+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very High"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3-digit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T41-T59"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80 (split)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-digit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Legend:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⭐⭐⭐⭐ = Highly Recommended"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⭐⭐⭐ = Recommended"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⭐⭐ = Acceptable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⭐ = Not Recommended"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ = Not Viable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-approach-t01-t19-extended-low-range",
      children: "Recommended Approach: T01-T19 (Extended Low Range)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Friendly:"
        }), " Existing perpetual tasks (T08, T12) already in range - minimal migration needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sufficient Capacity:"
        }), " 19 perpetual tasks per story is likely more than enough (current: 2-3 perpetual tasks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear Separation:"
        }), " Low numbers clearly indicate special/perpetual tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conventional:"
        }), " Low numbers for special items is common practice"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format Compliant:"
        }), " Maintains 2-digit format (T01-T19)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design Principle Aligned:"
        }), " 80 regular tasks + 19 perpetual = 99 total (within 100-task limit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visual Clarity:"
        }), " Low numbers stand out in task lists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Future-Proof:"
        }), " 19 tasks provides buffer for growth"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If Exhausted:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create new story for additional perpetual tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or expand range to T01-T29 (if needed, but 19 should be sufficient)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing perpetual tasks (T08, T12) already in range - no renumbering needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular tasks using T01-T19 need to be moved to T20+"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repository tasks start at T20 (E5:S01", ":T20", " = FR-001)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternative-t91-t99-high-range---if-low-range-conflicts",
      children: "Alternative: T91-T99 (High Range) - If Low Range Conflicts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case:"
      }), " If T01-T19 conflicts with existing regular tasks, use T91-T99 instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No early conflicts with regular tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear separation (high numbers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Natural boundary (T99 is upper limit)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "9 tasks may be sufficient (if fewer perpetual tasks expected)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-notes",
      children: "Implementation Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Definition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reserved range: T01-T19 for perpetual tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular tasks: T20-T99 (80 tasks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perpetual tasks: T01-T19 (19 tasks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If story exceeds 100 tasks total, split into epic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Maintains 2-digit format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.6.8+21"
        }), " (UKW = E6:S06", ":T08", ", perpetual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.20+0"
        }), " (FR-001 = E5:S01", ":T20", ", repository)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing perpetual tasks (T08, T12) remain in range"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular tasks in T01-T19 need renumbering to T20+"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repository tasks start at T20"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E9:S01:T08:"
        }), " Repository Story Abstract Space Contradiction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analysis Document:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/analysis/repository-story-abstract-space-contradiction-analysis.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This analysis is part of Epic 9: Release Candidate Readiness. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-09/epic-09.md"
        }), " for epic context."]
      })
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