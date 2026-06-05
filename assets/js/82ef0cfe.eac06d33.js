"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["95417"], {
89815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_semver_mapping_proposal_md_82e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-semver-mapping-proposal-md-82e.json
var site_docs_architecture_standards_and_adrs_semver_mapping_proposal_md_82e_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/semver-mapping-proposal","title":"SemVer Mapping Proposal: RC.E.S.T+B → MAJOR.MINOR.PATCH+BUILD","description":"Status: Proposal","source":"@site/../docs/architecture/standards-and-adrs/semver-mapping-proposal.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/semver-mapping-proposal","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/semver-mapping-proposal","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/semver-mapping-proposal.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-17T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"SemVer Mapping Implementation Impact Analysis","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/semver-mapping-implementation-impact"},"next":{"title":"SemVer Tag Collision Incident Log (2026-03-07)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/semver-mapping-proposal.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-17T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'SemVer Mapping Proposal: RC.E.S.T+B → MAJOR.MINOR.PATCH+BUILD';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Proposed Solution: Hierarchical Cumulative Mapping",
  "id": "proposed-solution-hierarchical-cumulative-mapping",
  "level": 2
}, {
  "value": "Core Algorithm",
  "id": "core-algorithm",
  "level": 3
}, {
  "value": "Mapping Formula",
  "id": "mapping-formula",
  "level": 3
}, {
  "value": "Implementation Details",
  "id": "implementation-details",
  "level": 3
}, {
  "value": "Example Progression",
  "id": "example-progression",
  "level": 3
}, {
  "value": "Alternative Approach: Global Sequence Number",
  "id": "alternative-approach-global-sequence-number",
  "level": 2
}, {
  "value": "✅ RECOMMENDED: Hybrid Approach (Option 3)",
  "id": "-recommended-hybrid-approach-option-3",
  "level": 2
}, {
  "value": "How It Works (Simple Version)",
  "id": "how-it-works-simple-version",
  "level": 3
}, {
  "value": "Implementation (Hybrid Approach)",
  "id": "implementation-hybrid-approach",
  "level": 2
}, {
  "value": "Simple Algorithm",
  "id": "simple-algorithm",
  "level": 3
}, {
  "value": "Visual Example (Step by Step)",
  "id": "visual-example-step-by-step",
  "level": 3
}, {
  "value": "Implementation Considerations",
  "id": "implementation-considerations",
  "level": 2
}, {
  "value": "Registry Storage",
  "id": "registry-storage",
  "level": 3
}, {
  "value": "Version Conversion Script",
  "id": "version-conversion-script",
  "level": 3
}, {
  "value": "Integration with Release Workflow",
  "id": "integration-with-release-workflow",
  "level": 3
}, {
  "value": "Comparison of Approaches",
  "id": "comparison-of-approaches",
  "level": 2
}, {
  "value": "Migration Path",
  "id": "migration-path",
  "level": 2
}, {
  "value": "Phase 1: Analysis",
  "id": "phase-1-analysis",
  "level": 3
}, {
  "value": "Phase 2: Implementation",
  "id": "phase-2-implementation",
  "level": 3
}, {
  "value": "Phase 3: Rollout",
  "id": "phase-3-rollout",
  "level": 3
}, {
  "value": "Phase 4: Verification",
  "id": "phase-4-verification",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 2
}, {
  "value": "Epic Ordering",
  "id": "epic-ordering",
  "level": 3
}, {
  "value": "RC Transitions",
  "id": "rc-transitions",
  "level": 3
}, {
  "value": "Returning to Previous Epic/Story",
  "id": "returning-to-previous-epicstory",
  "level": 3
}, {
  "value": "Decisions Made (Hybrid Approach)",
  "id": "decisions-made-hybrid-approach",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
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
        id: "semver-mapping-proposal-rcestb--majorminorpatchbuild",
        children: "SemVer Mapping Proposal: RC.E.S.T+B → MAJOR.MINOR.PATCH+BUILD"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Proposal", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Release Strategy, Versioning Policy", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v1.0.0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal Versioning:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.7.12+3"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This Kanban-based versioning is semantically meaningful internally but has a critical flaw for external releases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When switching between epics/stories/tasks, the version can ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "appear to regress"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.12+3"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.6.9+1"
        }), " looks like a regression (0.6.7 → 0.4.6)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is problematic for GitHub releases, package managers, and user perception"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep internal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.E.S.T+B"
        }), " versioning unchanged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate SemVer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH+BUILD"
        }), " for releases that ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only increases"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain semantic meaning where possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure tier resets (PATCH resets on MINOR increment, BUILD resets on PATCH increment)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution-hierarchical-cumulative-mapping",
      children: "Proposed Solution: Hierarchical Cumulative Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-algorithm",
      children: "Core Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cumulative counters"
      }), " that track first appearance of each tier combination, ensuring monotonic increases while preserving tier reset semantics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mapping-formula",
      children: "Mapping Formula"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR = RC\n\nMINOR = Cumulative count of unique (RC, Epic) combinations seen across all releases\n        (resets when RC increments, but cumulative within RC)\n\nPATCH = Cumulative count of unique (RC, Epic, Story) combinations seen across all releases\n        (resets when (RC, Epic) changes, but cumulative within same RC+Epic)\n\nBUILD = Original BUILD from internal version\n        (preserved for semantic meaning)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-details",
      children: "Implementation Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Track First Appearance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maintain a registry of first-seen combinations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "(RC, Epic)"
        }), " → assigned sequential MINOR number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "(RC, Epic, Story)"
        }), " → assigned sequential PATCH number within MINOR"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Calculate SemVer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For internal version ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.E.S.T+B"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR = RC"
        }), " (direct mapping)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR = Lookup or assign"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(RC, E)"
        }), " combination in MINOR registry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH = Lookup or assign"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(RC, E, S)"
        }), " combination in PATCH registry (within MINOR scope)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD = B"
        }), " (preserved from internal version)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Registry Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The registry persists across releases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(RC, Epic)"
        }), " combination → Increment MINOR counter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(RC, Epic, Story)"
        }), " combination → Increment PATCH counter (within that MINOR)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same combinations → Reuse assigned numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-progression",
      children: "Example Progression"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Starting fresh, working through multiple epics/stories"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Internal Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "(RC,Epic)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "(RC,Epic,Story)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SemVer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.7.12+1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6)"
            }), " → MINOR=1"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6,7)"
            }), " → PATCH=1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First epic/story"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.7.12+2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6)"
            }), " → MINOR=1"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6,7)"
            }), " → PATCH=1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1+2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same story"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.8.5+1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6)"
            }), " → MINOR=1"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6,8)"
            }), " → PATCH=2"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.2+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New story"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.6.9+1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,4)"
            }), " → MINOR=2"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,4,6)"
            }), " → PATCH=3"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.2.3+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New epic, appears higher"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.9.1.8+1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,9)"
            }), " → MINOR=3"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,9,1)"
            }), " → PATCH=4"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.4+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New epic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.7.12+3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6)"
            }), " → MINOR=1"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6,7)"
            }), " → PATCH=1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1+3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back to original, BUILD=3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ SemVer always increases: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1+1"
        }), " < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1+2"
        }), " < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.2+1"
        }), " < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.3+1"
        }), " < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.4+1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Returning to same epic/story uses same MINOR/PATCH (maintains semantic continuity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ New epics/stories get new sequential numbers (monotonic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ BUILD number preserved for task-level granularity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternative-approach-global-sequence-number",
      children: "Alternative Approach: Global Sequence Number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If registry management is too complex, use a simpler ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "global sequence number"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR = RC\n\nMINOR = Floor(global_release_sequence / 1000)\n        (increments every 1000 releases)\n\nPATCH = (global_release_sequence % 1000) / 10\n        (resets every 100 releases within MINOR)\n\nBUILD = global_release_sequence % 10\n        (resets every 10 releases within PATCH)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple (no registry needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guaranteed monotonic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Loses all semantic meaning from Epic/Story/Task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version numbers grow large quickly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Less meaningful for developers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-recommended-hybrid-approach-option-3",
      children: "✅ RECOMMENDED: Hybrid Approach (Option 3)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Simple, intuitive mapping that preserves semantic meaning:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR = RC                          (direct mapping: 0 → 0, 1 → 1, etc.)\n\nMINOR = First-seen Epic number      (Epic 6 first → MINOR=1, Epic 9 next → MINOR=2)\n        (sequential based on first appearance, resets when RC increments)\n\nPATCH = First-seen Story number     (Story 7 in Epic 6 → PATCH=1, Story 8 next → PATCH=2)\n        (sequential based on first appearance, resets when RC increments)\n\nBUILD = Internal BUILD number       (preserved from internal version)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works-simple-version",
      children: "How It Works (Simple Version)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of it like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first-come, first-served numbering"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Each RC has its own counter"
        }), " starting at 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "First Epic you see"
        }), " in RC=0 → MINOR=1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next new Epic"
        }), " → MINOR=2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return to previous Epic"
        }), " → Use its original MINOR (reuse, don't reassign)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Same for Stories"
        }), " → First seen gets next PATCH number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD stays the same"
        }), " → Just copy it over"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (Simple):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "See Epic 6 first → MINOR=1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "See Epic 9 next → MINOR=2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Back to Epic 6 → MINOR=1 (reuse original)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Result: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.*+*"
        }), " < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.*+*"
        }), " < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.*+*"
        }), " BUT SemVer keeps increasing because you've moved to new work"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Registry:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple lookup: \"Have I seen Epic 6 in RC=0 before?\" → Yes → MINOR=1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple lookup: \"Have I seen Story 7 in Epic 6?\" → Yes → PATCH=1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy to understand"
        }), " - First appearance = sequential number"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer only increases"
        }), " - New combinations always get higher numbers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintains semantic meaning"
        }), " - Same epic → same MINOR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD preserved"
        }), " - Task-level granularity maintained"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Simple registry"
        }), " - Only track within RC scope"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-hybrid-approach",
      children: "Implementation (Hybrid Approach)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "simple-algorithm",
      children: "Simple Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Registry structure (simple dictionaries)\nrc_minor_registry = {}  # Maps (RC, Epic) → MINOR number\nrc_patch_registry = {}  # Maps (RC, Epic, Story) → PATCH number\n\ndef convert_to_semver(rc, epic, story, task, build):\n    \"\"\"Convert internal RC.E.S.T+B to SemVer MAJOR.MINOR.PATCH+BUILD\"\"\"\n    \n    # MAJOR = RC (direct mapping)\n    major = rc\n    \n    # MINOR = First-seen Epic number (sequential)\n    key_minor = (rc, epic)\n    if key_minor not in rc_minor_registry:\n        # New epic - assign next MINOR number\n        rc_minor_registry[key_minor] = max(rc_minor_registry.values()) + 1 if rc_minor_registry else 1\n    minor = rc_minor_registry[key_minor]\n    \n    # PATCH = First-seen Story number (sequential within RC)\n    key_patch = (rc, epic, story)\n    if key_patch not in rc_patch_registry:\n        # New story - assign next PATCH number within this RC\n        existing_patches = [v for k, v in rc_patch_registry.items() if k[0] == rc]\n        rc_patch_registry[key_patch] = max(existing_patches) + 1 if existing_patches else 1\n    patch = rc_patch_registry[key_patch]\n    \n    # BUILD = Preserved from internal version\n    build_semver = build\n    \n    return f\"{major}.{minor}.{patch}+{build_semver}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "visual-example-step-by-step",
      children: "Visual Example (Step by Step)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Starting from scratch (RC=0):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Internal Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "(RC,Epic)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MINOR"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "(RC,Epic,Story)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SemVer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happened"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.7.12+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6,7)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic 6 first → MINOR=1, Story 7 first → PATCH=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.7.12+2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6,7)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1+2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same epic/story → reuse MINOR=1, PATCH=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.9.1.8+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0,9)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0,9,1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.2.2+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic 9 new → MINOR=2, Story 1 new → PATCH=2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.6.9+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0,4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0,4,6)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.3+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic 4 new → MINOR=3, Story 6 new → PATCH=3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.6.7.12+3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0,6,7)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1.1+3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back to Epic 6 → reuse MINOR=1, PATCH=1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Point:"
      }), " Even though we return to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.1.1+*"
      }), ", the SemVer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "increased"
      }), " because we went through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.2.2+1"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.3.3+1"
      }), " first. The BUILD number ensures uniqueness: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.1.1+1"
      }), " < ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.1.1+2"
      }), " < ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.2.2+1"
      }), " < ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.1.1+3"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-considerations",
      children: "Implementation Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry-storage",
      children: "Registry Storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["✅ RECOMMENDED: Registry File (", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), ")"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simple YAML structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "rc_0:\n  epic_to_minor:\n    6: 1    # Epic 6 → MINOR 1 (first appearance)\n    9: 2    # Epic 9 → MINOR 2 (second appearance)\n    4: 3    # Epic 4 → MINOR 3 (third appearance)\n  story_to_patch:\n    (6, 7): 1    # Epic 6, Story 7 → PATCH 1\n    (9, 1): 2    # Epic 9, Story 1 → PATCH 2\n    (4, 6): 3    # Epic 4, Story 6 → PATCH 3\n\nrc_1:\n  epic_to_minor: {}    # Empty until RC=1 releases start\n  story_to_patch: {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Tags:"
        }), " Extract from existing tags (rebuild on demand)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog:"
        }), " Parse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " to extract first appearances"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-conversion-script",
      children: "Version Conversion Script"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Function:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "convert_internal_to_semver(internal_version: str) -> str"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"0.6.7.12+3\""
      }), " (internal RC.E.S.T+B)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"0.1.1+3\""
      }), " (SemVer MAJOR.MINOR.PATCH+BUILD)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Simple Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parse internal version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(RC=0, E=6, S=7, T=12, B=3)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load registry for RC=0"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR:"
        }), " Lookup ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(0, 6)"
        }), " in registry → Not found? Assign 1, store it → MINOR=1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH:"
        }), " Lookup ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(0, 6, 7)"
        }), " in registry → Not found? Assign 1, store it → PATCH=1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD:"
        }), " Use B=3 directly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f\"{RC}.{MINOR}.{PATCH}+\\{B\\}\""
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"0.1.1+3\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Save updated registry to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-with-release-workflow",
      children: "Integration with Release Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 11: Create Git Tag"
      }), " (enhanced)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate SemVer from internal version"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create two tags:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Internal: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.7.12+3"
            }), " (for internal tracking)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.1.1+3"
            }), " (for GitHub releases)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Release uses SemVer tag"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Releases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Primary tag: SemVer (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.1.1+3"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference internal version in release notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain backward compatibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparison-of-approaches",
      children: "Comparison of Approaches"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Semantic Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Monotonic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Registry Needed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ease of Understanding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hierarchical Cumulative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (preserves Epic/Story)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Global Sequence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Simple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "✅ Hybrid (Recommended)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium-Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (preserves Epic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes (simplified)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intuitive"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ RECOMMENDED: Hybrid Approach"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best balance"
        }), " of simplicity and semantic meaning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intuitive"
        }), " - First appearance = sequential number (easy to grasp)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintains Epic-level"
        }), " semantic continuity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Registry scoped"
        }), " to RC (simpler than full registry)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD preserved"
        }), " for task granularity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-path",
      children: "Migration Path"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-analysis",
      children: "Phase 1: Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse all existing git tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build initial registry from historical releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate SemVer mapping produces monotonic sequence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-implementation",
      children: "Phase 2: Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "convert_internal_to_semver()"
        }), " function"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add registry update logic to RW Step 11"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create validation script to verify monotonicity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-rollout",
      children: "Phase 3: Rollout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate SemVer for all historical releases (for reference)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start dual-tagging: internal + SemVer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update GitHub Release automation to use SemVer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document SemVer in README (keep internal version as primary)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-verification",
      children: "Phase 4: Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify SemVer increases across all future releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for edge cases (Epic switching, RC transitions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation and tooling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epic-ordering",
      children: "Epic Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Epics can be worked on out of order (e.g., Epic 9 before Epic 7)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Registry assigns MINOR based on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first appearance"
      }), ", not Epic number"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 9 seen first → MINOR=1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 7 seen later → MINOR=2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SemVer increases: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.*.*"
        }), " < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.*.*"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rc-transitions",
      children: "RC Transitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " When RC=0 → RC=1, registry should reset", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Registry scoped per RC"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RC=0 registry: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{Epic: MINOR}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{(Epic,Story): PATCH}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RC=1 registry: New registry, starts from MINOR=1, PATCH=1"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SemVer transitions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.*.*.*"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.1.1+*"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "returning-to-previous-epicstory",
      children: "Returning to Previous Epic/Story"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Revisit Epic 6 Story 7 after working on Epic 9", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Reuse registry assignments"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["First appearance: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(0,6,7)"
        }), " → PATCH=1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return later: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(0,6,7)"
        }), " → still PATCH=1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SemVer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.1.1+*"
        }), " (maintains continuity)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decisions-made-hybrid-approach",
      children: "Decisions Made (Hybrid Approach)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "✅ Registry Persistence:"
          }), " File-based (", (0,jsx_runtime.jsx)(_components.code, {
            children: "semver-registry.yaml"
          }), ")"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Simple YAML file, easy to read/update"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Persists across releases"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version controlled with codebase"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "✅ BUILD Number:"
          }), " Preserve internal BUILD"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maintains task-level semantic meaning"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No need to track separate BUILD sequence"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "✅ RC Transitions:"
          }), " MINOR/PATCH reset when RC increments"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fresh start for RC=1+ makes sense"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Each RC has its own registry scope"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "✅ Git Tags:"
          }), " Dual tags (internal + SemVer)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Internal tag: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.7.12+3"
            }), " (for tracking)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["SemVer tag: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.1.1+3"
            }), " (for GitHub releases)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Both tags reference same commit"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "✅ Documentation:"
          }), " Internal version primary, SemVer for releases"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Developers use internal version (semantic meaning)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GitHub releases use SemVer (monotonic)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release notes reference both versions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review this proposal"
        }), " - Confirm approach and address concerns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement proof of concept"
        }), " - Build ", (0,jsx_runtime.jsx)(_components.code, {
          children: "convert_internal_to_semver()"
        }), " with sample data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate against historical releases"
        }), " - Generate SemVer for all existing tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement registry management"
        }), " - Add to RW Step 11"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update documentation"
        }), " - Document dual versioning strategy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer Specification:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://semver.org/",
          children: "https://semver.org/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Releases:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.github.com/en/repositories/releasing-projects-on-github",
          children: "https://docs.github.com/en/repositories/releasing-projects-on-github"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This proposal is part of the versioning policy evolution. See related documents for context."
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