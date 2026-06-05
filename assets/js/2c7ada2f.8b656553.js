"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["97580"], {
20182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_ecc_adk_harness_layer_integration_specification_md_2c7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-ecc-adk-harness-layer-integration-specification-md-2c7.json
var site_docs_architecture_standards_and_adrs_ecc_adk_harness_layer_integration_specification_md_2c7_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification","title":"ECC ↔ AI Dev Kit harness layer integration specification","description":"Status: Active (Phase 0 — normative contract)","source":"@site/../docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Dual-Versioning: RC.EPIC.STORY.TASK+BUILD + Package Manager SemVer","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dual-versioning-package-managers"},"next":{"title":"ECC ↔ AI Dev Kit — Phase 0 compatibility evaluation","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ECC ↔ AI Dev Kit harness layer integration specification';

const assets = {

};



const toc = [{
  "value": "1. Third-party attribution",
  "id": "1-third-party-attribution",
  "level": 2
}, {
  "value": "2. Purpose and non-goals",
  "id": "2-purpose-and-non-goals",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose",
  "level": 3
}, {
  "value": "Non-goals",
  "id": "non-goals",
  "level": 3
}, {
  "value": "3. Layered architecture",
  "id": "3-layered-architecture",
  "level": 2
}, {
  "value": "4. Integration boundaries",
  "id": "4-integration-boundaries",
  "level": 2
}, {
  "value": "5. Disposition vocabulary",
  "id": "5-disposition-vocabulary",
  "level": 2
}, {
  "value": "6. Known conflict rules (initial)",
  "id": "6-known-conflict-rules-initial",
  "level": 2
}, {
  "value": "7. Bridge configuration",
  "id": "7-bridge-configuration",
  "level": 2
}, {
  "value": "8. Install discipline",
  "id": "8-install-discipline",
  "level": 2
}, {
  "value": "9. Release and SemVer (ADK <code>task_touch</code>)",
  "id": "9-release-and-semver-adk-task_touch",
  "level": 2
}, {
  "value": "10. Phase roadmap (FR-098)",
  "id": "10-phase-roadmap-fr-098",
  "level": 2
}, {
  "value": "11. Phase 2–5 implementation artifacts (E6:S09)",
  "id": "11-phase-25-implementation-artifacts-e6s09",
  "level": 2
}, {
  "value": "12. References",
  "id": "12-references",
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
        id: "ecc--ai-dev-kit-harness-layer-integration-specification",
        children: "ECC ↔ AI Dev Kit harness layer integration specification"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active (Phase 0 — normative contract)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-05-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098",
        children: ["E6:S09", ":T04"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration",
        children: "FR-098"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Empirical evidence:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation",
        children: "Phase 0 evaluation"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-third-party-attribution",
      children: "1. Third-party attribution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI Dev Kit optionally integrates with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/affaan-m/ECC",
          children: "ECC"
        })
      }), " (MIT License), the open-source harness-native operator system by ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/affaan-m",
        children: "Affaan Mustafa"
      }), " and contributors. ECC is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " part of AI Dev Kit, is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " required for ADK correctness, and is installed separately via upstream tooling (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx -p ecc-universal ecc-install"
      }), "). AI Dev Kit does not fork or redistribute ECC; adopters obtain ECC directly from the upstream repository under its MIT license."]
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
              children: "Project"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC (Execution Consistency Contract)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Upstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/affaan-m/ECC",
              children: "https://github.com/affaan-m/ECC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "License"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MIT (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/affaan-m/ECC/blob/main/LICENSE",
              children: "upstream LICENSE"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "npm installer"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-universal"
            }), " (bin: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-install"
            }), ") — distinct from Claude marketplace id ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc@ecc"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Commercial boundary"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://ecc.tools",
              children: "ECC Pro"
            }), " / GitHub App are ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "separate"
            }), " upstream offerings; ADK OSS integration docs reference the MIT OSS path only"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-purpose-and-non-goals",
      children: "2. Purpose and non-goals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define how an adopter may ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optionally"
      }), " combine:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI Dev Kit (ADK)"
        }), " — project governance (Kanban, FR/BR/UXR, RW/UKW/IPW, forensic versioning, validators)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ECC"
        }), " — harness execution (domain skills, hooks, security scanning, cross-IDE portability)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-goals",
      children: "Non-goals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ADK does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " require ECC for correct operation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ECC does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " replace ADK workflows (RW, UKW, IPW, intake, Kanban)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ADK does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " vendor-fork or ship ECC source in-tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This specification does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " endorse or bundle ECC Pro / paid upstream products."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-layered-architecture",
      children: "3. Layered architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responsibility"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Project governance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI Dev Kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work structure, release process, traceability, validators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Harness execution (optional)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC (upstream)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coding craft, TDD, language patterns, harness hooks, security scan skills"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Agent runtime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor / Claude Code / etc."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loads rules, skills, hooks from both layers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ADK answers ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what"
      }), " work exists and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "how"
      }), " it ships. ECC answers ", (0,jsx_runtime.jsx)(_components.em, {
        children: "how well"
      }), " agents execute domain tasks. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation",
        children: "Phase 0 evaluation"
      }), " for empirical compatibility evidence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-integration-boundaries",
      children: "4. Integration boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authoritative source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW / UKW / IPW triggers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ADK ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git commit and push"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ADK RW-only policy (", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version schema"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ADK ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), ", version file)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban / FR/BR/UXR intake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK Kanban framework"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPW implementation gate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK IPP / task doc linkage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Release validators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ADK ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domain TDD / language skills"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC (optional)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session hooks (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC — advisory unless explicitly promoted to CI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security scan skill (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC AgentShield — complements, does not replace RW Step 9"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-disposition-vocabulary",
      children: "5. Disposition vocabulary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When mapping ADK surfaces to ECC in the compatibility matrix:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Disposition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "keep"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK surface remains sole authority; ECC not used for this concern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "merge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both may coexist with explicit bridge rules (rare in Phase 0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "exclude"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Do not enable corresponding ECC surface when using ADK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "conflict-resolve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC surface exists but ADK rule wins via bridge config"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-known-conflict-rules-initial",
      children: "6. Known conflict rules (initial)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Subject to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation",
        children: "Phase 0 validation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ADK rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ECC surface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Commits/pushes ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW-only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git-workflow"
            }), " skill"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "conflict-resolve"
            }), ": defer to ADK RW; disable ECC auto-commit guidance in bridge"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPW gate + IPP artifacts"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/plan"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "plan-orchestrate"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "conflict-resolve"
            }), ": IPW/IPK mandatory for ADK tasks; ECC plan is generic only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internal version schema"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SemVer section in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git-workflow"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "conflict-resolve"
            }), ": ADK ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version-bump"
            }), " skill + validators"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban UKW / intake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "project-flow-ops"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "exclude"
            }), " for Kanban; ECC skill is GitHub/Linear triage only"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-bridge-configuration",
      children: "7. Bridge configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Template: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopters copy to project root as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ecc-adk-bridge.yaml"
      }), " (optional). Fields:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ecc_version_pin"
        }), " — npm or git ref evaluated against upstream"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "hook_profile"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "minimal"
        }), " | ", (0,jsx_runtime.jsx)(_components.code, {
          children: "standard"
        }), " | ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strict"
        }), " (ECC env); default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "minimal"
        }), " for ADK adopters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "disabled_hooks"
        }), " — list of ECC hook IDs that conflict with RW/git policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "conflict_rules"
        }), " — map ECC skill/command → ADK authority"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "adk_skill_pack_path"
        }), " — placeholder for Phase 1 ADK workflow skills in ECC format"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-install-discipline",
      children: "8. Install discipline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single install path"
        }), " — do not stack Claude plugin + full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ecc-install"
        }), " + manual copy (per ECC README)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate before merge"
        }), " — run Phase 0 procedure on a disposable branch; do not merge ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/"
        }), " ECC overlay into ADK repos without bridge review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profile naming"
        }), " — GitHub ECC ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v2.0.0-rc.1"
        }), " documents ", (0,jsx_runtime.jsx)(_components.code, {
          children: "minimal"
        }), " profile; npm ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ecc-universal@1.10.0"
        }), " uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "core"
        }), " profile. Pin and document the package actually used."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hooks"
        }), " — prefer hooks-off or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ECC_HOOK_PROFILE=minimal"
        }), " until Phase 3 hook alignment is validated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node scripts/ecc.js uninstall --dry-run"
        }), " from ECC clone, or remove ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/ecc-install-state.json"
        }), " and ECC-managed paths listed in install state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Canonical procedure: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation",
        children: "Phase 0 evaluation §3"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "9-release-and-semver-adk-task_touch",
      children: ["9. Release and SemVer (ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_touch"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ECC integration does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " change ADK version schema or RW bump rules. Under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver_mapping_strategy: task_touch"
      }), " (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
        children: "dev-kit-versioning-policy"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Each FR-098 phase"
        }), " ships via normal RW on its task anchor → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH"
        }), " increment only (", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch_counter"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not"
        }), " hand-bump SemVer ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " for optional ECC phases (Phase 0–4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " advances when ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 6"
        }), " is signed off (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic_count"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), ") — integration epic complete, not “ECC added.”"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR"
        }), " only if integration becomes mandatory or breaks existing adopters."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Communicate harness-layer availability in release notes and install docs; SemVer PATCH monotonicity is sufficient for package consumers."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-phase-roadmap-fr-098",
      children: "10. Phase roadmap (FR-098)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compatibility matrix + bridge template + this spec"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E6:S09", ":T04"]
            }), " (complete)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ADK workflow skill pack (", (0,jsx_runtime.jsx)(_components.code, {
              children: "adk-*"
            }), " in ECC ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SKILL.md"
            }), " format)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E6:S09", ":T05"]
            }), " (complete)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional greenfield installer step + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-adk-bridge.yaml"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E6:S09", ":T06"]
            }), " (shipped)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hook alignment (SessionStart context, pre-RW quality gate)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E6:S09", ":T06"]
            }), " (shipped)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AgentShield optional RW Step 10 add-on"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E6:S09", ":T06"]
            }), " (shipped)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book / public positioning sidebar"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E6:S09", ":T06"]
            }), " (shipped)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "11-phase-25-implementation-artifacts-e6s09",
      children: ["11. Phase 2–5 implementation artifacts (E6:S09", ":T06", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge validator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optional install helper"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/install/install_ecc_harness_optional.sh"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "--dry-run"
            }), " default)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AgentShield add-on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/ecc-agentshield-rw-step9-bridge.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter quick-start"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet",
              children: "ECC + ADK integration cheatsheet"
            }), " §3, §11"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hook policy: default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hook_profile: minimal"
      }), ", hooks-off install, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "disabled_hooks"
      }), " examples in bridge template; pre-RW ECC hooks are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "advisory"
      }), " only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-references",
      children: "12. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet",
            children: "ECC + ADK integration cheatsheet"
          })
        }), " — quick-start for adopters (workflows, conflicts, setup)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/affaan-m/ECC",
          children: "ECC repository"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/affaan-m/ECC/blob/main/docs/architecture/cross-harness.md",
          children: "ECC cross-harness architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration",
          children: "FR-098"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003 — Greenfield vs brownfield adoption"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098",
          children: "IPP-E6S9T4"
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