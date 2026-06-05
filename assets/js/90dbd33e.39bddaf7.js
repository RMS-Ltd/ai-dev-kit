"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["17242"], {
12645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_package_versioning_criteria_md_90d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-package-versioning-criteria-md-90d.json
var site_docs_architecture_standards_and_adrs_package_versioning_criteria_md_90d_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/package-versioning-criteria","title":"Package Versioning Criteria (Guidance)","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/package-versioning-criteria.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/package-versioning-criteria","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-versioning-criteria","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/package-versioning-criteria.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-08T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Package Management Design Specification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-management-design"},"next":{"title":"Policy Comparison: Starborn Legacy vs AI Dev Kit — Proposal for Updates","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/policy-comparison-starborn-vs-ai-dev-kit-proposal"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/package-versioning-criteria.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-08T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Package Versioning Criteria (Guidance)';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "MAJOR Version Bump (X.0.0) - Guidance",
  "id": "major-version-bump-x00---guidance",
  "level": 2
}, {
  "value": "Typical Indicators",
  "id": "typical-indicators",
  "level": 3
}, {
  "value": "Agent Analysis Pattern",
  "id": "agent-analysis-pattern",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 3
}, {
  "value": "MINOR Version Bump (x.Y.0) - Guidance",
  "id": "minor-version-bump-xy0---guidance",
  "level": 2
}, {
  "value": "Typical Indicators",
  "id": "typical-indicators-1",
  "level": 3
}, {
  "value": "Agent Analysis Pattern",
  "id": "agent-analysis-pattern-1",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples-1",
  "level": 3
}, {
  "value": "PATCH Version Bump (x.y.Z) - Guidance",
  "id": "patch-version-bump-xyz---guidance",
  "level": 2
}, {
  "value": "Typical Indicators",
  "id": "typical-indicators-2",
  "level": 3
}, {
  "value": "Agent Analysis Pattern",
  "id": "agent-analysis-pattern-2",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples-2",
  "level": 3
}, {
  "value": "Version Bump Decision Matrix",
  "id": "version-bump-decision-matrix",
  "level": 2
}, {
  "value": "Agent Decision-Making Process",
  "id": "agent-decision-making-process",
  "level": 2
}, {
  "value": "Step 1: Analyze Changes",
  "id": "step-1-analyze-changes",
  "level": 3
}, {
  "value": "Step 2: Apply Criteria (Guidance)",
  "id": "step-2-apply-criteria-guidance",
  "level": 3
}, {
  "value": "Step 3: Document Reasoning",
  "id": "step-3-document-reasoning",
  "level": 3
}, {
  "value": "Key Principles",
  "id": "key-principles",
  "level": 2
}, {
  "value": "Criteria as Guidance",
  "id": "criteria-as-guidance",
  "level": 3
}, {
  "value": "Agent Decision-Making",
  "id": "agent-decision-making",
  "level": 3
}, {
  "value": "Documentation",
  "id": "documentation",
  "level": 3
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
        id: "package-versioning-criteria-guidance",
        children: "Package Versioning Criteria (Guidance)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-08", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 3 - Numbering & Versioning Framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 2 - Versioning Cookbook & Examples", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Package Version Workflow (PVW), Dual-Versioning Guide"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "version bump criteria as guidance"
      }), " for the Package Version Workflow (PVW). These criteria are used by intelligent agents to inform decisions, not as hard rules that must be followed mechanically."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " Criteria provide guidance for intelligent decision-making. Agents analyze actual changes, consider context and impact, and make informed decisions using these criteria as reference points."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "major-version-bump-x00---guidance",
      children: "MAJOR Version Bump (X.0.0) - Guidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typical-indicators",
      children: "Typical Indicators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Structure Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing or renaming core files/directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing required file locations or names"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing templates or core components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing package directory structure significantly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Policy Changes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing core policy rules that break existing implementations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing policy options or requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing mandatory vs. optional requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing integration patterns that break existing setups"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking API Changes (for script packages):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing command-line arguments or options"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing script behavior in incompatible ways"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing functions or classes from public API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing return types or signatures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent-analysis-pattern",
      children: "Agent Analysis Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Should:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze actual changes: What files changed? What was removed?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider impact: Will this break existing implementations?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate context: Is this truly breaking, or can it be handled gracefully?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Decision Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Change: Removed `EPIC_TEMPLATE.md`\nAnalysis:\n  - File removed: ✅ Breaking change indicator\n  - Impact: Consumers may depend on this template\n  - Context: No migration path provided\nDecision: MAJOR bump (breaking change)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ MAJOR Bump:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Removing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC_TEMPLATE.md"
        }), " (breaking - consumers depend on it)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " location requirement (breaking - breaks existing configs)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing support for old version format (breaking - breaks existing projects)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing required integration pattern (breaking - breaks existing setups)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "❌ NOT MAJOR:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new templates (MINOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new optional features (MINOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifying documentation (PATCH)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing typos (PATCH)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "minor-version-bump-xy0---guidance",
      children: "MINOR Version Bump (x.Y.0) - Guidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typical-indicators-1",
      children: "Typical Indicators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new templates or guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new integration patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new optional features or capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new examples or use cases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enhancements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expanding existing templates with new sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new policy options (non-breaking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new configuration options"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new validation rules (non-breaking)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new guides or tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new examples or case studies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new integration documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new troubleshooting guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent-analysis-pattern-1",
      children: "Agent Analysis Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Should:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze actual changes: What was added? Is it new functionality?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider compatibility: Is this backward compatible?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate significance: Is this substantial enough for MINOR?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Decision Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Change: Added `integration/kanban-integration.md`\nAnalysis:\n  - New file added: ✅ New feature indicator\n  - Compatibility: No breaking changes\n  - Significance: Substantial new documentation\nDecision: MINOR bump (new feature, backward compatible)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "examples-1",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ MINOR Bump:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adding new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MIGRATION_GUIDE.md"
        }), " (new feature)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new template variant (new feature)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new integration pattern (new feature)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expanding existing guide with new sections (enhancement)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "❌ NOT MINOR:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing broken links (PATCH)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting typos (PATCH)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifying ambiguous text (PATCH)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing features (MAJOR)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "patch-version-bump-xyz---guidance",
      children: "PATCH Version Bump (x.y.Z) - Guidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typical-indicators-2",
      children: "Typical Indicators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug Fixes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing broken links or references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting incorrect examples or code snippets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing formatting or rendering issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing validation script bugs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Corrections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting typos or grammatical errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting factual errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting version numbers or dates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting file paths or references"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Clarifications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifying ambiguous language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding missing context or explanations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improving readability without changing meaning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding cross-references or links"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Minor Improvements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improving formatting or structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updating outdated information (non-breaking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improving code examples (non-breaking)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor refactoring of documentation structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent-analysis-pattern-2",
      children: "Agent Analysis Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Should:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze actual changes: What was fixed? What was corrected?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider impact: Does this add functionality or just fix issues?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate scope: Is this a minor change or substantial?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Decision Process:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Change: Fixed broken link in README\nAnalysis:\n  - Link fixed: ✅ Bug fix indicator\n  - Impact: No new functionality\n  - Scope: Minor correction\nDecision: PATCH bump (bug fix, no new functionality)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "examples-2",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ PATCH Bump:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing broken link to external resource"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting typo in template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifying ambiguous policy statement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing code example syntax error"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "❌ NOT PATCH:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new template (MINOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing feature (MAJOR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing structure (MAJOR)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-bump-decision-matrix",
      children: "Version Bump Decision Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Change Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MAJOR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MINOR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PATCH"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Breaking Changes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "New Features"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enhancements"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bug Fixes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Corrections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clarifications"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Minor Improvements"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agent-decision-making-process",
      children: "Agent Decision-Making Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-analyze-changes",
      children: "Step 1: Analyze Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read package files and structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze git diff for actual changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify changes (added/removed/modified)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess impact (breaking/new feature/bug fix/clarification)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-apply-criteria-guidance",
      children: "Step 2: Apply Criteria (Guidance)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review criteria for each bump type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match changes against criteria patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider context and impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make intelligent decision (not mechanical)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-document-reasoning",
      children: "Step 3: Document Reasoning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document bump type chosen"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why this bump type was chosen"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference specific changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain impact assessment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### Justification\n\n**Bump Type:** MINOR\n\n**Reason:** Added new integration guide for Workflow Management package.\n\n**Changes:**\n- Added `integration/workflow-management-integration.md`\n- Added new integration pattern examples\n- Expanded integration documentation section\n\n**Criteria Reference:** Section 3.2 - MINOR Version Bump\n- ✅ New feature: New integration guide\n- ✅ Enhancement: Expanded documentation\n\n**Impact Assessment:** None - backward compatible addition\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-principles",
      children: "Key Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "criteria-as-guidance",
      children: "Criteria as Guidance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Guidance, Not Rules:"
        }), " Criteria inform decisions, not dictate them"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Intelligent Application:"
        }), " Agent applies criteria intelligently based on context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Context-Aware:"
        }), " Agent considers package type, impact, and context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptive:"
        }), " Agent handles edge cases intelligently"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent-decision-making",
      children: "Agent Decision-Making"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Intelligent Analysis:"
        }), " Agent analyzes actual changes, not mechanical rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Context-Aware:"
        }), " Agent considers package type, impact, and context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Reasoning:"
        }), " Agent documents decisions clearly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptive:"
        }), " Agent handles edge cases intelligently"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation",
      children: "Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear Reasoning:"
        }), " Agent documents why bump type was chosen"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Change Reference:"
        }), " Agent references specific changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact Assessment:"
        }), " Agent explains impact on consumers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Criteria Application:"
        }), " Agent documents how criteria were applied"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Version Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent-Driven Execution:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual-Versioning Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dual-versioning-package-managers.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-08", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version:"
      }), " 1.0.0"]
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