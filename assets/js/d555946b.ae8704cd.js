"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["78296"], {
8004(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_098_ecc_optional_harness_layer_integration_md_d55_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-098-ecc-optional-harness-layer-integration-md-d55.json
var site_docs_project_management_kanban_fr_br_fr_098_ecc_optional_harness_layer_integration_md_d55_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration","title":"FR-098: Optional ECC harness layer integration for AI Dev Kit adopters","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-097: Board stamp authority, blocking validation, and forensic timestamp recovery","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery"},"next":{"title":"FR-099: Spin off book epic to a private repository","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-098: Optional ECC harness layer integration for AI Dev Kit adopters';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 3
}, {
  "value": "Release / SemVer strategy (maintainer decision — 2026-05-26)",
  "id": "release--semver-strategy-maintainer-decision--2026-05-26",
  "level": 2
}, {
  "value": "Scope Analysis",
  "id": "scope-analysis",
  "level": 2
}, {
  "value": "Phased Delivery",
  "id": "phased-delivery",
  "level": 2
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "Intake Decision",
  "id": "intake-decision",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
  "level": 2
}, {
  "value": "Phase 0 implementation evidence (E06:S09)",
  "id": "phase-0-implementation-evidence-e06s09",
  "level": 3
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
    input: "input",
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
        id: "fr-098-optional-ecc-harness-layer-integration-for-ai-dev-kit-adopters",
        children: "FR-098: Optional ECC harness layer integration for AI Dev Kit adopters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-098", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " Maintainer (architecture review session)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH (delivered — phases 0–5 complete ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.6+3"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " LOW", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Tasks:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098",
        children: ["E06:S09", ":T04"]
      }), " (Phase 0), ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098",
        children: ["E06:S09", ":T05"]
      }), " (Phase 1), ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098",
        children: ["E06:S09", ":T06"]
      }), " (Phases 2–5)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define and deliver an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optional, complementary integration"
      }), " between AI Dev Kit (project governance layer) and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/affaan-m/ECC",
        children: "ECC"
      }), " (harness execution layer) so adopters can augment agent performance without duplicating or conflicting with ADK workflows (RW, UKW, IPW, Kanban, forensic versioning)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI Dev Kit provides a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thin harness surface"
      }), " (seven project-specific skills, ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " workflow triggers, Claude slash commands) focused on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "project infrastructure and governance"
      }), ". ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/affaan-m/ECC",
        children: "ECC"
      }), " provides a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "broad harness execution layer"
      }), " (246+ skills, hooks, instincts, security scanning, cross-IDE portability) focused on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "agent performance and coding craft"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These systems are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "genuinely complementary"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ADK owns ", (0,jsx_runtime.jsx)(_components.em, {
          children: "what"
        }), " work exists, ", (0,jsx_runtime.jsx)(_components.em, {
          children: "how"
        }), " it is governed, and ", (0,jsx_runtime.jsx)(_components.em, {
          children: "how"
        }), " it ships."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ECC owns ", (0,jsx_runtime.jsx)(_components.em, {
          children: "how well"
        }), " agents execute domain work in the harness."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Today there is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no documented integration path"
      }), ", no compatibility contract, and no ADK-authored workflow skills in ECC's portable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SKILL.md"
      }), " format. Adopters who install both stacks risk ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "context bloat"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "duplicate triggers"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conflicting git rules"
      }), " (ECC generic commit workflow vs ADK RW-only commit/push policy)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-F1:"
        }), " Execute ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 0 compatibility evaluation"
        }), " on ai-dev-kit (and document reproducible procedure for adopters) using ECC minimal profile without hooks-first stacking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-F2:"
        }), " Produce a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "compatibility matrix"
        }), " classifying ADK vs ECC surfaces as ", (0,jsx_runtime.jsx)(_components.em, {
          children: "keep"
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: "merge"
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: "exclude"
        }), ", or ", (0,jsx_runtime.jsx)(_components.em, {
          children: "conflict-resolve"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-F3:"
        }), " Define ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ecc-adk-bridge.yaml"
          })
        }), " template (hook profile, disabled hooks, conflict rules, ADK skill pack path, pinned ECC version)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-F4:"
        }), " Publish ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ADK workflow skill pack"
        }), " in ECC-compatible ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SKILL.md"
        }), " format (minimum: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-release-workflow"
        }), "; target set: RW, UKW, IPW, intake, version bump). — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.5+2"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-F5:"
        }), " Extend ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "greenfield/brownfield install docs"
        }), " with optional \"Harness Execution Layer (ECC)\" step—clearly optional, not required for ADK correctness. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IMPLEMENTED"
        }), " (E06:S09", ":T06", ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-F6:"
        }), " Document ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "layered architecture"
        }), " (ADK = project OS; ECC = harness OS) in adopter-facing user-docs and vision cross-links. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IMPLEMENTED"
        }), " (cheatsheet §11, E06:S09", ":T06", ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-NF1:"
        }), " Integration must remain ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "optional"
        }), "; full ADK adoption must not require ECC."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-NF2:"
        }), " ADK validators and IPW/RW gates remain ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "authoritative"
        }), "; ECC hooks are advisory or pre-flight unless explicitly promoted to CI."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-NF3:"
        }), " Do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " vendor-fork ECC; reference upstream MIT repo and pin version in bridge config."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-NF4:"
        }), " Follow ECC install discipline (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single install path"
        }), "; no plugin + full installer stacking)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-NF5:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer discipline (task_touch):"
        }), " ECC integration releases use normal ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH"
        }), " advancement per RW (", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch_counter"
        }), "); do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " hand-bump ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " for optional ECC phases alone. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " advances only at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 6 sign-off"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic_count"
        }), " increment in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), ") or a separate ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "product milestone"
        }), " (e.g. public ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit"
        }), " genesis per FR-099), not per FR-098 phase."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release--semver-strategy-maintainer-decision--2026-05-26",
      children: "Release / SemVer strategy (maintainer decision — 2026-05-26)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ADK uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_mapping_strategy: task_touch"
        })
      }), " (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
        children: "dev-kit-versioning-policy"
      }), ", ADR-002):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SemVer part"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Driver"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ECC integration guidance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PATCH"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "task_touch_counter"
            }), " (+1 per RW)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each shipped FR-098 phase (T04, T05, installer bridge, …) releases via RW → PATCH only (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.796"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.4.797"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MINOR"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epic_count"
            }), " (epics signed off)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bump when ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic 6"
            }), " (installation & adopter integration) is signed off — signals “integration epic complete,” not “ECC optional layer added.”"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAJOR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RC / breaking policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved for breaking adoption or governance changes (e.g. ECC becomes required, RW rules change)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " ECC is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optional and backward-compatible"
      }), ". Release notes and install docs carry the harness-layer signal; SemVer PATCH reflects incremental delivery without inflating MINOR for every phase."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope for FR-098 SemVer:"
      }), " Public repo rebirth (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
        children: "FR-099"
      }), " Phase 3) — version that cut on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new public"
      }), " repo policy, not as an ECC MINOR bump on the private lineage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-analysis",
      children: "Scope Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Domain:"
      }), " Framework adoption, harness/agent integration, installation ergonomics", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Areas:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Installation and adopter integration (Epic 6, Story 9)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Workflow management skills and agent execution guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/skills/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "User-docs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), ", framework dependency guides)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Kanban/versioning core logic (unchanged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "ECC upstream repository (reference only)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Simple (1-3 days) — Phase 0 only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Medium (1–2 weeks) — Phase 0 + bridge template + initial skill pack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Complex (2+ weeks) — full installer orchestration + AgentShield bridge + hook integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Very Complex (1+ month)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phased-delivery",
      children: "Phased Delivery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary deliverable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task anchor"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compatibility spike"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compatibility matrix + procedure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E06:S09", ":T04"]
            }), " (this intake)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK workflow skill pack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC-format skills for RW/UKW/IPW/intake"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E06:S09", ":T05"]
            }), " (shipped)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installer bridge"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional greenfield step + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-adk-bridge.yaml"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E06:S09", ":T06"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hook alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SessionStart context, quality-gate pre-RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E06:S09", ":T06"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AgentShield bridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional RW Step 9 security scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E06:S09", ":T06"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book / public positioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Head First AI-Assisted Development sidebar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E06:S09", ":T06"]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary use case:"
      }), " A greenfield adopter installs ADK (Kanban + RW + validators), then optionally adds ECC minimal profile for TDD, language patterns, and harness hooks—without breaking RW-only git policy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional use cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing ADK project adds ECC for agent performance without re-homing Kanban governance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Book/tutorial reader follows ADK full stack, then optional 15-minute ECC harness sidebar."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintainer dogfoods combined stack on ai-dev-kit before documenting for adopters."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " Phase 0 compatibility matrix exists with explicit conflict resolutions (git, planning, release)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " ADK remains fully functional with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zero ECC install"
        }), " (regression documented)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " Optional ECC path documented; adopters can reproduce Phase 0 on a scratch branch."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " ADK workflow skills (", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-release-workflow"
        }), " + full Phase 1 target set) exist in ECC-compatible format — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.5+2"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " No duplicate RW/UKW/IPW triggers introduced by default ECC minimal install."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional harness-layer installer step (FR-098-F5) should not block FR-080/FR-081 closure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None for Phase 0."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
          children: "FR-080"
        }), " — Greenfield install (optional ECC step extends this)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration",
          children: "FR-081"
        }), " — Brownfield modular adoption (ECC as optional surface)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-windsurf-investigate-agents-skills-for-workflows",
          children: "FR-041"
        }), " — Prior harness/skills investigation (CLOSED; Cursor skills pattern)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003"
        }), " — Adoption policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["External: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/affaan-m/ECC",
          children: "affaan-m/ECC"
        }), " (MIT, harness-native operator system)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " ACCEPTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2026-05-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake By:"
      }), " Agent (maintainer-directed intake)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Flow Results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Story Match Found: Epic 6, Story 9 (AI Dev Kit installation and adopter integration) → Task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T04"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: Epic 6 — Framework Management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story: Story 9 — AI Dev Kit installation and adopter integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task: T04 — ECC harness layer Phase 0 compatibility evaluation (FR-098)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.5+1"
        }), " (intermediate doc release — SemVer strategy; E06:S09", ":T05", " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-management/kanban/epics/epic-06/epic-06.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T04-ecc-harness-layer-phase0-compatibility-fr098.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ECC does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " provide equivalent skills to ADK's seven governance skills (", (0,jsx_runtime.jsx)(_components.code, {
          children: "version-bump"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ukw-sync"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-process"
        }), ", etc.); integration is additive."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Closest ECC surfaces (", (0,jsx_runtime.jsx)(_components.code, {
          children: "git-workflow"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/plan"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project-flow-ops"
        }), ") are generic and may ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "conflict"
        }), " with ADK rules—bridge config must defer to ADK for git and release semantics."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ECC Pro / GitHub App is out of scope for OSS integration docs unless explicitly requested later."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "phase-0-implementation-evidence-e06s09",
      children: ["Phase 0 implementation evidence (E06:S09", ":T04", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification",
          children: "Integration specification"
        }), " — normative contract + MIT attribution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation",
          children: "Phase 0 evaluation"
        }), " — matrix, procedure, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GO"
        }), " for Phase 1"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template",
          children: "Bridge template"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098",
          children: "IPP-E6S9T4"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Phase 1 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098",
          children: ["E06:S09", ":T05"]
        }), " — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098",
          children: "IPP-E6S9T5"
        }), "; five ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-*"
        }), " skills + validator on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " (consolidated from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " 2026-05-26)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adopter quick-start: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet",
          children: "ECC + ADK integration cheatsheet"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phases 2–5:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098",
          children: ["E06:S09", ":T06"]
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.6+3"
        }), " (dogfood T8 on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "throwaway/ecc-dogfood-E06S09T06"
        }), "; dry-run only)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
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
          href: "/ai-dev-kit/docs/documentation/ai-dev-kit-vision-and-purpose",
          children: "AI Dev Kit vision and purpose"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: "INSTALL_IN_YOUR_PROJECT.md"
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