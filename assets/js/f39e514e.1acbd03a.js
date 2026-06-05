"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["41084"], {
77433(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_7_s_06_t_10_t_16_test_design_md_f39_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-7-s-06-t-10-t-16-test-design-md-f39.json
var site_docs_implementation_cycles_icw_e_7_s_06_t_10_t_16_test_design_md_f39_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E7S06-T10-T16-test-design","title":"ICW Test Design: E7:S06:T10-T16 – Workflow Windsurf Impact Reviews","description":"ICW Instance: ICW-E7S06-T10-T16","source":"@site/../docs/implementation-cycles/ICW-E7S06-T10-T16-test-design.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E7S06-T10-T16-test-design","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-test-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E7S06-T10-T16-test-design.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"ICW Specification: E7:S06:T10-T16 – Workflow Windsurf Impact Reviews","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-specification"},"next":{"title":"ICW E7:S06:T18 — Implementation plan (UXR-007)","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06T18-implementation-plan"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E7S06-T10-T16-test-design.md


const frontMatter = {};
const contentTitle = 'ICW Test Design: E7:S06 – Workflow Windsurf Impact Reviews';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Test Strategy",
  "id": "test-strategy",
  "level": 2
}, {
  "value": "Objectives",
  "id": "objectives",
  "level": 3
}, {
  "value": "Scope",
  "id": "scope",
  "level": 3
}, {
  "value": "Completeness Checks",
  "id": "completeness-checks",
  "level": 2
}, {
  "value": "REV-001: Windsurf Impact Section",
  "id": "rev-001-windsurf-impact-section",
  "level": 3
}, {
  "value": "REV-002: Skill Mappings Section",
  "id": "rev-002-skill-mappings-section",
  "level": 3
}, {
  "value": "REV-003: Migration Plan Section",
  "id": "rev-003-migration-plan-section",
  "level": 3
}, {
  "value": "REV-004: Anti-Pattern Findings Section",
  "id": "rev-004-anti-pattern-findings-section",
  "level": 3
}, {
  "value": "REV-005: Inputs Consulted",
  "id": "rev-005-inputs-consulted",
  "level": 3
}, {
  "value": "REV-006: Migration Plan References",
  "id": "rev-006-migration-plan-references",
  "level": 3
}, {
  "value": "REV-007: Anti-Pattern Addresses Deterministic vs Agentic",
  "id": "rev-007-anti-pattern-addresses-deterministic-vs-agentic",
  "level": 3
}, {
  "value": "Correctness Checks",
  "id": "correctness-checks",
  "level": 2
}, {
  "value": "REV-008: Skill Mappings Match .windsurf Contents",
  "id": "rev-008-skill-mappings-match-windsurf-contents",
  "level": 3
}, {
  "value": "REV-009: Migration Plan Feasibility",
  "id": "rev-009-migration-plan-feasibility",
  "level": 3
}, {
  "value": "REV-010: Findings Traceable",
  "id": "rev-010-findings-traceable",
  "level": 3
}, {
  "value": "Pass Criteria",
  "id": "pass-criteria",
  "level": 2
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "icw-test-design-e7s06--workflow-windsurf-impact-reviews",
        children: ["ICW Test Design: E7:S06", ":T10-T16", " – Workflow Windsurf Impact Reviews"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ICW Instance:"
      }), " ICW-E7S06-T10-T16\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Tasks:"
      }), " E7:S06", ":T10", " through E7:S06", ":T16", "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase:"
      }), " Test Design\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-03-18\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Specification Reference:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-specification",
        children: "ICW-E7S06-T10-T16 Specification"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Complete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test design validates the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "review deliverable"
      }), " (document), not code. All checks are checklist-style or document-structure validation. Each review document produced by T10-T16 must pass the applicable REV-N checks before the task is considered complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "test-strategy",
      children: "Test Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectives",
      children: "Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify review documents contain all required sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify skill mappings are complete and correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify migration plans are actionable and reference T01"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify anti-pattern vigilance findings are documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In scope:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document structure (sections present)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completeness of skill mappings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration plan feasibility and traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anti-pattern section coverage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated test execution (manual checklist)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-document consistency across T10-T16"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "completeness-checks",
      children: "Completeness Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rev-001-windsurf-impact-section",
      children: "REV-001: Windsurf Impact Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Result"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REV-001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review doc contains \"Windsurf Impact\" section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review document exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search for section header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section present with content"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rev-002-skill-mappings-section",
      children: "REV-002: Skill Mappings Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Result"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REV-002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review doc contains \"Skill Mappings\" section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review document exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search for section; verify at least one mapping or \"no relevant skills\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section present; either lists mappings or states no relevant skills"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Note:"
      }), " For T13, T14, T16, \"no relevant skills\" is acceptable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rev-003-migration-plan-section",
      children: "REV-003: Migration Plan Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Result"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REV-003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review doc contains \"Migration Plan\" section with actionable steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review document exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search for section; verify steps reference T01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section present with ordered steps for T01"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rev-004-anti-pattern-findings-section",
      children: "REV-004: Anti-Pattern Findings Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Result"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REV-004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review doc contains \"Anti-Pattern Findings\" section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review document exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search for section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Section present; contains findings or \"none observed\""
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rev-005-inputs-consulted",
      children: "REV-005: Inputs Consulted"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Result"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REV-005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All inputs from task doc were consulted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc available"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify review references .cursorrules, .windsurf, workflow YAML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence that all inputs were analyzed"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rev-006-migration-plan-references",
      children: "REV-006: Migration Plan References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Result"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REV-006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration plan references T01 and .cursor/skills/ or .cursorrules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration plan section exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search for T01, .cursor/skills/, .cursorrules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All referenced"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rev-007-anti-pattern-addresses-deterministic-vs-agentic",
      children: "REV-007: Anti-Pattern Addresses Deterministic vs Agentic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Result"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REV-007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-pattern section addresses deterministic vs agentic concern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-pattern section exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify content discusses scripts vs agentic reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concern explicitly addressed"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "correctness-checks",
      children: "Correctness Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rev-008-skill-mappings-match-windsurf-contents",
      children: "REV-008: Skill Mappings Match .windsurf Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Result"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REV-008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skill mappings list matches .windsurf/skills/ contents for that workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mapping table from spec; .windsurf/skills/ exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare review's skill list to spec table and actual .windsurf/skills/"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No omissions; no false positives"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Note:"
      }), " N/A for T13, T14, T16 if \"no relevant skills.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rev-009-migration-plan-feasibility",
      children: "REV-009: Migration Plan Feasibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Result"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REV-009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration plan is feasible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration plan exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify target paths exist; no circular dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paths valid; steps executable"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rev-010-findings-traceable",
      children: "REV-010: Findings Traceable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preconditions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Result"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REV-010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Findings are traceable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review has findings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify \"skill X does Y\" has file reference or clear provenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each finding has traceability"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pass-criteria",
      children: "Pass Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All applicable REV-N checks pass per task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasks with no .windsurf skills (T13, T14, T16): REV-002 accepts \"no relevant skills\"; REV-008 is N/A"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One failure = review not complete; fix and re-check"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-specification",
          children: "Specification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-implementation-plan",
          children: "Implementation Plan"
        })
      }), "\n"]
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