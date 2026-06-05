"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["22492"], {
11264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_06_story_09_ai_dev_kit_installation_and_adopter_integration_t_06_ecc_harness_phases_2_5_fr_098_md_5b4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-06-story-09-ai-dev-kit-installation-and-adopter-integration-t-06-ecc-harness-phases-2-5-fr-098-md-5b4.json
var site_docs_project_management_kanban_epics_epic_06_story_09_ai_dev_kit_installation_and_adopter_integration_t_06_ecc_harness_phases_2_5_fr_098_md_5b4_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098","title":"Epic 6, Story 9, Task 6: ECC harness phases 2–5 (installer, hooks, AgentShield, positioning)","description":"Task IDS09:T06","source":"@site/../docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098.md","sourceDirName":"project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration","slug":"/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T17:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 6, Story 9, Task 5: ADK workflow skill pack for ECC harness layer (FR-098 Phase 1)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098"},"next":{"title":"Epic 6, Story 9, Task 7: Kanban fresh install — structure template missing (BR-078)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T07-kanban-fresh-install-structure-template-missing-br078"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T17:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Epic 6, Story 9, Task 6: ECC harness phases 2–5 (installer, hooks, AgentShield, positioning)';

const assets = {

};



const toc = [{
  "value": "Version Anchor",
  "id": "version-anchor",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "In scope (by sub-phase)",
  "id": "in-scope-by-sub-phase",
  "level": 3
}, {
  "value": "Out of scope",
  "id": "out-of-scope",
  "level": 3
}, {
  "value": "Deliverable",
  "id": "deliverable",
  "level": 2
}, {
  "value": "Input",
  "id": "input",
  "level": 2
}, {
  "value": "Implementation notes",
  "id": "implementation-notes",
  "level": 2
}, {
  "value": "Dogfood checklist (T8 — branch <code>throwaway/ecc-dogfood-E06S09T06</code>, 2026-05-26)",
  "id": "dogfood-checklist-t8--branch-throwawayecc-dogfood-e06s09t06-2026-05-26",
  "level": 3
}, {
  "value": "Shipped paths",
  "id": "shipped-paths",
  "level": 3
}, {
  "value": "Release / SemVer (inherits FR-098)",
  "id": "release--semver-inherits-fr-098",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Phase 2 — Installer + bridge",
  "id": "phase-2--installer--bridge",
  "level": 3
}, {
  "value": "Phase 3 — Hooks",
  "id": "phase-3--hooks",
  "level": 3
}, {
  "value": "Phase 4 — AgentShield bridge",
  "id": "phase-4--agentshield-bridge",
  "level": 3
}, {
  "value": "Phase 5 — Positioning + architecture docs",
  "id": "phase-5--positioning--architecture-docs",
  "level": 3
}, {
  "value": "Cross-cutting",
  "id": "cross-cutting",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
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
        id: "epic-6-story-9-task-6-ecc-harness-phases-25-installer-hooks-agentshield-positioning",
        children: "Epic 6, Story 9, Task 6: ECC harness phases 2–5 (installer, hooks, AgentShield, positioning)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E06:S09", ":T06", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.6+3"
      }), " — phases 2–5 + dogfood T8)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " Large", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-05-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-26 (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.6+5"
      }), " — IPP Wave E public-repo validation plan; functional ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.6+3"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E06S09T06"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-anchor",
      children: "Version Anchor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.6.9.6+3"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Upstream:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration",
        children: "FR-098 - Optional ECC harness layer integration"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098",
          children: ["E06:S09", ":T04", " — Phase 0 evaluation"]
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GO"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098",
          children: ["E06:S09", ":T05", " — Phase 1 skill pack"]
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "shipped"
        }), " v0.6.9.5+4)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Delivered FR-098 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "phases 2–5"
      }), ": optional ECC installer/bridge path, hook alignment docs, AgentShield RW add-on spec, and adopter positioning (cheatsheet §11, INSTALL optional step). Validators and install helper ship under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "in-scope-by-sub-phase",
      children: "In scope (by sub-phase)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Sub-phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FR trace"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional greenfield/brownfield ECC install step; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-adk-bridge.yaml"
            }), " workflow; bridge validator"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-098-F5"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hook profile defaults (", (0,jsx_runtime.jsx)(_components.code, {
              children: "minimal"
            }), " / hooks-off); ", (0,jsx_runtime.jsx)(_components.code, {
              children: "disabled_hooks"
            }), "; SessionStart + pre-RW advisory gate docs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roadmap §10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AgentShield optional RW Step 10 add-on (documented; does not replace ADK validators)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roadmap §10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Layered architecture user-docs (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-098-F6"
            }), "); book/public positioning sidebar"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-098-F6"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "out-of-scope",
      children: "Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Re-shipping Phase 1 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-*"
        }), " skills (owned by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T05"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ECC Pro / paid upstream products"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mandatory ECC for ADK correctness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replacing RW Step 10 blocking validators with AgentShield"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ecc_adk_bridge.py"
        }), " + pytest; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_ecc_harness_optional.sh"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " default)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bridge template ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disabled_hooks"
        }), " examples + cheatsheet hook guidance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ecc-agentshield-rw-step9-bridge.md"
        }), " + release-workflow cross-link"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "INSTALL + cheatsheet + integration spec §11 updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPP implementation evidence (validators PASS)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "Input"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098",
          children: ["IPP (planning package — §7 closed; §8 Wave E plan ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "v0.6.9.6+5"
          }), ")"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification",
          children: "Integration specification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation",
          children: "Phase 0 evaluation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet",
          children: "ECC + ADK cheatsheet"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template",
          children: "Bridge template"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098",
          children: "IPP-E6S9T5 (Phase 1)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080",
          children: "T01 greenfield install (FR-080)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-notes",
      children: "Implementation notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dogfood-checklist-t8--branch-throwawayecc-dogfood-e06s09t06-2026-05-26",
      children: ["Dogfood checklist (T8 — branch ", (0,jsx_runtime.jsx)(_components.code, {
        children: "throwaway/ecc-dogfood-E06S09T06"
      }), ", 2026-05-26)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical E2E steps:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet#throwaway-branch-playbook-end-to-end",
        children: "ECC + ADK cheatsheet §3 Throwaway branch playbook"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.6+4"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Phase 0 dry-run: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks --dry-run"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "342"
        }), " planned ops; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "note:"
        }), " hook scripts + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hooks.json"
        }), " still listed despite ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baseline:hooks"
        }), " excluded (review before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--execute"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_ecc_harness_optional.sh --copy-bridge"
        }), " — bridge copied; validators PASS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ecc_adk_bridge.py --bridge ecc-adk-bridge.yaml"
        }), " — PASS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_adk_ecc_skill_pack.py"
        }), " — PASS (ADK-only skill pack unchanged)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not"
        }), " run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--execute"
        }), " on canonical ai-dev-kit repo (dry-run only); ADK RW/git policy preserved without ECC overlay"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shipped-paths",
      children: "Shipped paths"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/test_validate_ecc_adk_bridge.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/install/install_ecc_harness_optional.sh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/ecc-agentshield-rw-step9-bridge.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release--semver-inherits-fr-098",
      children: "Release / SemVer (inherits FR-098)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ship via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E06:S09:T06"
        })
      }), " when ready to release implementation (", (0,jsx_runtime.jsx)(_components.code, {
        children: "--art"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2--installer--bridge",
      children: "Phase 2 — Installer + bridge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Optional ECC install step documented in greenfield path (FR-080) and brownfield guidance (FR-081 cross-link); ADK-only path unchanged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Adopter can copy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ecc-adk-bridge.yaml.template"
        }), " → project-root ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ecc-adk-bridge.yaml"
        }), " with documented pins (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ecc_version_pin"
        }), ", profile naming)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ecc_adk_bridge.py"
        }), " PASS on canonical template + pytest negatives"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-F5"
        }), " closable when install docs merged"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3--hooks",
      children: "Phase 3 — Hooks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hook_profile: minimal"
        }), " and hooks-off install discipline documented in cheatsheet + spec"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disabled_hooks"
        }), " list populated from Phase 0 conflict-resolve table (RW/git surfaces)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Pre-RW advisory hook contract documented (non-blocking; ADK Step 10 validators remain authoritative)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4--agentshield-bridge",
      children: "Phase 4 — AgentShield bridge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Optional AgentShield integration documented as RW Step 10 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "add-on"
        }), " (complements validators; non-blocking on failure)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "No duplicate RW/UKW/IPW triggers introduced by default ECC install"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-5--positioning--architecture-docs",
      children: "Phase 5 — Positioning + architecture docs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-098-F6"
        }), " layered architecture (ADK = project OS; ECC = harness OS) in user-docs with vision cross-links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Book/public positioning sidebar copy (Head First AI-Assisted Development) stub or section linked from cheatsheet"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-cutting",
      children: "Cross-cutting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP linked from this task (bidirectional) before implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Integration spec §10–§11 lists ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S09", ":T06"]
        }), " for phases 2–5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Dogfood checklist recorded (T8 — see Implementation notes; dry-run on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "throwaway/ecc-dogfood-E06S09T06"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098",
          children: "IPP-E6S9T6 (planning package)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration",
          children: "FR-098"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098",
          children: "T04 Phase 0"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098",
          children: "T05 Phase 1"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003 greenfield vs brownfield"
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