"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["55365"], {
92832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_ecc_adk_harness_layer_phase_0_evaluation_md_d85_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-ecc-adk-harness-layer-phase-0-evaluation-md-d85.json
var site_docs_architecture_standards_and_adrs_ecc_adk_harness_layer_phase_0_evaluation_md_d85_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation","title":"ECC ↔ AI Dev Kit — Phase 0 compatibility evaluation","description":"Status: Complete (Phase 0)","source":"@site/../docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ECC ↔ AI Dev Kit harness layer integration specification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification"},"next":{"title":"Standard Operating Procedure: Environment Variables","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/environment-variables-sop"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ECC ↔ AI Dev Kit — Phase 0 compatibility evaluation';

const assets = {

};



const toc = [{
  "value": "1. Executive summary",
  "id": "1-executive-summary",
  "level": 2
}, {
  "value": "2. Evaluation metadata",
  "id": "2-evaluation-metadata",
  "level": 2
}, {
  "value": "3. Reproducible procedure",
  "id": "3-reproducible-procedure",
  "level": 2
}, {
  "value": "3.1 Baseline (no ECC)",
  "id": "31-baseline-no-ecc",
  "level": 3
}, {
  "value": "3.2 ECC install plan (dry-run — recommended first)",
  "id": "32-ecc-install-plan-dry-run--recommended-first",
  "level": 3
}, {
  "value": "3.3 Optional live install (disposable branch only)",
  "id": "33-optional-live-install-disposable-branch-only",
  "level": 3
}, {
  "value": "3.4 Rollback",
  "id": "34-rollback",
  "level": 3
}, {
  "value": "4. Compatibility matrix",
  "id": "4-compatibility-matrix",
  "level": 2
}, {
  "value": "5. Checklist evidence (summary)",
  "id": "5-checklist-evidence-summary",
  "level": 2
}, {
  "value": "6. Context load assessment",
  "id": "6-context-load-assessment",
  "level": 2
}, {
  "value": "7. Recommendations and follow-on tasks",
  "id": "7-recommendations-and-follow-on-tasks",
  "level": 2
}, {
  "value": "Phase 1 prerequisites",
  "id": "phase-1-prerequisites",
  "level": 3
}, {
  "value": "Follow-on task",
  "id": "follow-on-task",
  "level": 3
}, {
  "value": "Deferred",
  "id": "deferred",
  "level": 3
}, {
  "value": "8. Attribution",
  "id": "8-attribution",
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
        id: "ecc--ai-dev-kit--phase-0-compatibility-evaluation",
        children: "ECC ↔ AI Dev Kit — Phase 0 compatibility evaluation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Complete (Phase 0)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-05-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098",
        children: ["E6:S09", ":T04"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Normative spec:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification",
        children: "Integration specification"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attribution:"
      }), " See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification#1-third-party-attribution",
        children: "spec §1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-executive-summary",
      children: "1. Executive summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1 decision: GO"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI Dev Kit and ECC are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "genuinely complementary"
      }), ". Phase 0 found ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no ADK skill name collisions"
      }), " with ECC's catalog, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no ECC equivalents"
      }), " for ADK governance workflows (RW/UKW/IPW/intake), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "documented, bridgeable conflicts"
      }), " (git workflow, planning gates, version schema). ADK validators pass without ECC installed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proceed to Phase 1"
      }), " (ADK workflow skill pack in ECC ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SKILL.md"
      }), " format) as ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E6:S09", ":T05"]
      }), ", subject to: namespaced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "adk-*"
      }), " skills, bridge config adoption, and install-path discipline (no blind merge of 342-file ECC overlay into ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/"
      }), " without review)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blockers:"
      }), " None for Phase 1 planning. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Caution:"
      }), " npm ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ecc-universal@1.10.0"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--profile core --without baseline:hooks"
      }), " dry-run still plans hook adapter files and 342 operations under ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/"
      }), ", overlapping ADK's existing ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/skills/"
      }), " tree — Phase 1/2 must define namespace or selective install strategy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-evaluation-metadata",
      children: "2. Evaluation metadata"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Executor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent (implementation session)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Harness target"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Branch"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " (evaluation via dry-run; no ECC files written to repo)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ECC npm package"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-universal@1.10.0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ECC GitHub reference"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/affaan-m/ECC",
              children: "affaan-m/ECC"
            }), " (v2.0.0-rc.1 documented upstream; npm pin may lag)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Install command tested"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks --dry-run"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK baseline validator"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_branch_context.py --strict"
            }), " → exit 0 on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.13.7+2"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-reproducible-procedure",
      children: "3. Reproducible procedure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-baseline-no-ecc",
      children: "3.1 Baseline (no ECC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git checkout dev\npython \"packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py\" --strict\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expected: exit 0."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-ecc-install-plan-dry-run--recommended-first",
      children: "3.2 ECC install plan (dry-run — recommended first)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Review planned operations under ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Do not apply"
      }), " until bridge strategy is defined."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: GitHub ECC docs reference ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--profile minimal"
      }), "; npm ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1.10.0"
      }), " profiles are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "core"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "developer"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "security"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "research"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "full"
      }), ". Pin the package you use."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-optional-live-install-disposable-branch-only",
      children: "3.3 Optional live install (disposable branch only)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git checkout -b spike/ecc-adk-phase0\nnpx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks\n# evaluate, then rollback:\n# npx -p ecc-universal ecc doctor  # if available\n# remove paths listed in .cursor/ecc-install-state.json\ngit checkout dev && git branch -D spike/ecc-adk-phase0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-rollback",
      children: "3.4 Rollback"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discard spike branch."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remove ECC install-state and files listed in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/ecc-install-state.json"
        }), " if live install was performed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ADK ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/skills/"
        }), " (7 ADK skills) must remain authoritative."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-compatibility-matrix",
      children: "4. Compatibility matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ADK surface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ECC nearest equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Same?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disposition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "version-bump"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git-workflow"
            }), " (SemVer section)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "conflict-resolve"
            }), " → ADK"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Internal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " schema"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ukw-sync"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "project-flow-ops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "exclude"
            }), " ECC for Kanban"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC is GitHub/Linear triage, not E/S/T boards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "(none)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic FR/BR/UXR intake is ADK-specific"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmw-maintain"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git-workflow"
            }), " (changelog gen)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMW archive ordering and immutability rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "readme-update"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "doc-updater"
            }), " agent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW Step 5 SemVer via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_converter"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed-update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "(none)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK board hygiene"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-completed-update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "(none)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FBU completed ledger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " RW trigger"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "(none)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC has no RW workflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " UKW / IPW"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/plan"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "plan-orchestrate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "conflict-resolve"
            }), " → ADK IPW"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP gate and task linkage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " RW-only git"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git-workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "conflict-resolve"
            }), " → ADK RW"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal git/PR workflow vs RW-only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/rw.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC legacy shims"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw"
            }), " namespace collision in ECC catalog"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ukw.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "(none)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ipw.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "(none)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "(none)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            }), " ADK"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator path SoT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domain TDD / language craft"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tdd-workflow"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "python-patterns"
            }), ", etc."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "merge"
            }), " (optional)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Net-new ECC value; no ADK equivalent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Skill name collision scan:"
      }), " 0 collisions (ADK 7 skills vs ECC 246 skills on GitHub ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-checklist-evidence-summary",
      children: "5. Checklist evidence (summary)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Full tables with evidence in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098",
        children: "T04 task doc"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            }), " Environment"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PASS (dry-run); A2 profile note: use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "core"
            }), " on npm 1.10.0"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            }), " ADK governance"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS — ECC does not define RW/UKW/IPW; conflicts documented"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            }), " Complementarity"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS — C1 PASS, C2 PASS, C3 PASS (zero collisions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            }), " Triggers/commands"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS — no rw/ukw/ipw shim collision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "E"
            }), " Context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PASS (qualitative) — dual layer increases ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/"
            }), " surface; hooks-off + selective install recommended"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "F"
            }), " Validators"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS — baseline validator exit 0 without ECC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "G"
            }), " Outputs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS — this doc + spec + bridge template"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-context-load-assessment",
      children: "6. Context load assessment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ADK ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " is large (RW/UKW/IPW/Cmw/PVW triggers)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ECC ", (0,jsx_runtime.jsx)(_components.code, {
          children: "core"
        }), " profile dry-run: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "342 file operations"
        }), " into ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/"
        }), " including many skills and hook adapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Default adopters ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "hooks minimal/off"
        }), "; do not install full ECC overlay on ADK canonical repos without Phase 1 namespace strategy (", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-*"
        }), " skills separate from ECC domain skills)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ECC ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ECC_HOOK_PROFILE=minimal"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ECC_SESSION_START_CONTEXT=off"
        }), " documented upstream for low-context setups."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-recommendations-and-follow-on-tasks",
      children: "7. Recommendations and follow-on tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-prerequisites",
      children: "Phase 1 prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Publish ADK workflow skills as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-release-workflow"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-kanban-sync"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-implementation-planning"
        }), ", etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define install strategy: ECC domain skills vs ADK skills coexistence under ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/skills/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adopt ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ecc-adk-bridge.yaml.template"
          })
        }), " in adopters."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "follow-on-task",
      children: "Follow-on task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S09", ":T05"]
        }), " — ADK workflow skill pack (FR-098 Phase 1) — stub filed in Story 009."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deferred",
      children: "Deferred"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Greenfield installer step (FR-098-F5) — Phase 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full user-doc narrative (FR-098-F6) — partial via spec + installation guide pointer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-attribution",
      children: "8. Attribution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ECC is third-party MIT software. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification#1-third-party-attribution",
        children: "integration specification §1"
      }), "."]
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