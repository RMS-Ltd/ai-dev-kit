"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["343"], {
63(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_ecc_adk_integration_cheatsheet_md_4cf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-ecc-adk-integration-cheatsheet-md-4cf.json
var site_docs_documentation_user_docs_ecc_adk_integration_cheatsheet_md_4cf_namespaceObject = JSON.parse('{"id":"documentation/user-docs/ecc-adk-integration-cheatsheet","title":"ECC + AI Dev Kit — integration cheatsheet","description":"Quick reference for adopters who want ECC (harness execution) alongside AI Dev Kit (project governance). ECC is optional; ADK works without it.","source":"@site/../docs/documentation/user-docs/ecc-adk-integration-cheatsheet.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/ecc-adk-integration-cheatsheet","permalink":"/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/ecc-adk-integration-cheatsheet.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T16:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ai-dev-kit CLI Usage Examples","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-usage-examples"},"next":{"title":"Upstream documentation register (copy to your repository)","permalink":"/ai-dev-kit/docs/documentation/user-docs/examples/adopter-upstream-register"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/ecc-adk-integration-cheatsheet.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T16:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ECC + AI Dev Kit — integration cheatsheet';

const assets = {

};



const toc = [{
  "value": "1. One-line mental model",
  "id": "1-one-line-mental-model",
  "level": 2
}, {
  "value": "2. Who owns what (don’t fight the stack)",
  "id": "2-who-owns-what-dont-fight-the-stack",
  "level": 2
}, {
  "value": "3. Five-minute setup (brownfield ADK repo)",
  "id": "3-five-minute-setup-brownfield-adk-repo",
  "level": 2
}, {
  "value": "Throwaway branch playbook (end-to-end)",
  "id": "throwaway-branch-playbook-end-to-end",
  "level": 3
}, {
  "value": "Step A — ADK already installed",
  "id": "step-a--adk-already-installed",
  "level": 3
}, {
  "value": "Step B — Phase 0 sanity check (recommended)",
  "id": "step-b--phase-0-sanity-check-recommended",
  "level": 3
}, {
  "value": "Step C — Bridge config",
  "id": "step-c--bridge-config",
  "level": 3
}, {
  "value": "Step D — Install ECC (when ready)",
  "id": "step-d--install-ecc-when-ready",
  "level": 3
}, {
  "value": "Step E — ADK workflow skill pack (ECC-format pointers)",
  "id": "step-e--adk-workflow-skill-pack-ecc-format-pointers",
  "level": 3
}, {
  "value": "Step F — Validate skill pack + bridge (maintainers / CI)",
  "id": "step-f--validate-skill-pack--bridge-maintainers--ci",
  "level": 3
}, {
  "value": "Step G — Hooks (Phase 3 defaults)",
  "id": "step-g--hooks-phase-3-defaults",
  "level": 3
}, {
  "value": "4. Daily workflow cheat sheet",
  "id": "4-daily-workflow-cheat-sheet",
  "level": 2
}, {
  "value": "Command quick reference",
  "id": "command-quick-reference",
  "level": 3
}, {
  "value": "Phase 5.0 reminder (FR-100)",
  "id": "phase-50-reminder-fr-100",
  "level": 3
}, {
  "value": "5. Conflict rules (memorize these four)",
  "id": "5-conflict-rules-memorize-these-four",
  "level": 2
}, {
  "value": "6. Getting the most from ECC (without bloat)",
  "id": "6-getting-the-most-from-ecc-without-bloat",
  "level": 2
}, {
  "value": "Do",
  "id": "do",
  "level": 3
}, {
  "value": "Don’t",
  "id": "dont",
  "level": 3
}, {
  "value": "7. Context budget tips",
  "id": "7-context-budget-tips",
  "level": 2
}, {
  "value": "8. Troubleshooting",
  "id": "8-troubleshooting",
  "level": 2
}, {
  "value": "9. Where to read more",
  "id": "9-where-to-read-more",
  "level": 2
}, {
  "value": "10. Phase roadmap (what’s shipped vs next)",
  "id": "10-phase-roadmap-whats-shipped-vs-next",
  "level": 2
}, {
  "value": "11. Layered architecture and book positioning (FR-098-F6)",
  "id": "11-layered-architecture-and-book-positioning-fr-098-f6",
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
        id: "ecc--ai-dev-kit--integration-cheatsheet",
        children: "ECC + AI Dev Kit — integration cheatsheet"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Quick reference for adopters who want ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ECC"
      }), " (harness execution) alongside ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Dev Kit"
      }), " (project governance). ECC is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optional"
      }), "; ADK works without it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Normative detail:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md",
        children: "ECC ↔ ADK integration specification"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 0 evidence:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md",
        children: "Phase 0 evaluation"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upstream ECC:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/affaan-m/ECC",
        children: "https://github.com/affaan-m/ECC"
      }), " (MIT)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-one-line-mental-model",
      children: "1. One-line mental model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "You use it for"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "What"
            }), " to build, ", (0,jsx_runtime.jsx)(_components.em, {
              children: "how"
            }), " it is tracked, ", (0,jsx_runtime.jsx)(_components.em, {
              children: "how"
            }), " it ships (Kanban, FR/BR, IPW, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW"
            }), ", UKW, validators, versioning)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ECC"
            }), " (optional)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "How well"
            }), " the agent codes (domain skills, TDD patterns, language craft, optional security scan skills, hooks)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Plan and ship with ADK; execute implementation sessions with ECC domain skills loaded — but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "never let ECC override ADK git or planning gates."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-who-owns-what-dont-fight-the-stack",
      children: "2. Who owns what (don’t fight the stack)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use this"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Not this"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Release / version / changelog"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "adk-release-workflow"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ECC ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git-workflow"
            }), " auto-commit advice"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban / boards / FR closure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "adk-kanban-sync"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ECC ", (0,jsx_runtime.jsx)(_components.code, {
              children: "project-flow-ops"
            }), " (GitHub/Linear triage only)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spec + tests + IPP before code"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IPW"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "adk-implementation-planning"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ECC ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/plan"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "plan-orchestrate"
            }), " alone"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR/BR/UXR → tasks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Intake + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "adk-intake-fr-br-uxr"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad-hoc task files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Internal version ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.E.S.T+B"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "adk-version-bump"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic SemVer-only workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python/React/TDD craft"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ECC domain skills (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "python-patterns"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tdd-guide"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Re-implementing in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-commit security scan (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC AgentShield-style skills"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replacing RW Step 9 validators"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-five-minute-setup-brownfield-adk-repo",
      children: "3. Five-minute setup (brownfield ADK repo)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "throwaway-branch-playbook-end-to-end",
      children: "Throwaway branch playbook (end-to-end)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use this ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "once per project"
      }), " before you run a real ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ecc-install"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ". The goal is to review ECC’s footprint without polluting your canonical branch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Work only on a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "disposable branch"
        }), " (never dogfood on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " for ai-dev-kit maintainers)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Default pass is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dry-run + validators"
        }), " — not a full ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/"
        }), " overlay merge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ai-dev-kit"
        }), " itself: record findings; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "do not"
        }), " merge hundreds of ECC files into the framework repo unless explicitly approved."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Copy-paste sequence"
      }), " (from repo root; adjust branch name):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1) Branch (from your ADK baseline, e.g. dev)\ngit checkout dev\ngit pull\nBR=\"throwaway/ecc-dogfood-$(date +%Y%m%d)\"\ngit checkout -b \"$BR\"\n\n# 2) Phase 0 dry-run — review planned paths (expect ~300+ ops on core profile)\nnpx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks --dry-run\n\n# 3) Bridge (local file; gitignored in ai-dev-kit — see repo .gitignore)\n\"packages/frameworks/workflow-mgt/scripts/install/install_ecc_harness_optional.sh\" --copy-bridge\npython \"packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py\" --bridge ecc-adk-bridge.yaml\npython \"packages/frameworks/workflow-mgt/scripts/validation/validate_adk_ecc_skill_pack.py\"\n\n# 4) Optional: only after dry-run review — real install ON THIS BRANCH ONLY\n# npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks\n# Or: install_ecc_harness_optional.sh --copy-bridge --execute   # runs npx ecc-install\n\n# 5) When done — discard branch (do not merge ECC tree into canonical ADK repo)\ngit checkout dev\ngit branch -D \"$BR\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry-run review checklist"
      }), " (before any ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--execute"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass criteria"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADK skill pack"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No overwrite of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/skills/adk-*"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADK governance skills"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Existing project ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/skills/"
            }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version-bump"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ukw-sync"
            }), ") not replaced unintentionally"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hooks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Even with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--without baseline:hooks"
            }), ", plan may still list ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/hooks/*"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hooks.json"
            }), " — treat as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "risk"
            }), " until reviewed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git / RW policy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Flag ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common-git-workflow.mdc"
            }), " (or similar) — must not override ADK ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW-only"
            }), " commit/push"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Install path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single path only (no plugin + full installer stacking)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcomes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next step"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dry-run + validators ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            }), ", risks acceptable"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run step 4 on throwaway; tune ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-adk-bridge.yaml"
            }), "; then adopt on a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "project"
            }), " repo (not necessarily ai-dev-kit)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hooks/git rules in plan"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Keep hooks off; extend ", (0,jsx_runtime.jsx)(_components.code, {
              children: "disabled_hooks"
            }), " in bridge; re-dry-run"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Too many collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stay ADK-only; ECC optional path documented but not enabled"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maintainer evidence: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098.md",
        children: "T06 dogfood notes"
      }), " (dry-run on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "throwaway/ecc-dogfood-e6s09t06"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "342"
      }), " ops, validators PASS, no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--execute"
      }), " on canonical repo)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-a--adk-already-installed",
      children: "Step A — ADK already installed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You should already have:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/kanban/"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflow scripts under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-b--phase-0-sanity-check-recommended",
      children: "Step B — Phase 0 sanity check (recommended)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prefer the full sequence in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "§3 Throwaway branch playbook"
      }), " above. Minimal dry-run only:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Review the planned paths. Confirm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no collision"
      }), " with existing ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/skills/"
      }), ". See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md",
        children: "Phase 0 evaluation §6"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-c--bridge-config",
      children: "Step C — Bridge config"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cp \"packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template\" ecc-adk-bridge.yaml\npython \"packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py\" --bridge ecc-adk-bridge.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or use the install helper (dry-run + optional copy):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\"packages/frameworks/workflow-mgt/scripts/install/install_ecc_harness_optional.sh\" --copy-bridge\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edit:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "harness_layer.enabled: true"
        }), " only after Phase 0 passes on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "your"
        }), " project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ecc_version_pin"
        }), " — record the npm/git ref you actually tested"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "hook_profile: minimal"
        }), " (default for ADK adopters)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "excluded_components: [baseline:hooks]"
        }), " until you deliberately enable hooks (Phase 3)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-d--install-ecc-when-ready",
      children: "Step D — Install ECC (when ready)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one"
      }), " install path only (plugin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "or"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ecc-install"
      }), ", not both). Prefer hooks off initially:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Environment knobs (low context):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "export ECC_HOOK_PROFILE=minimal\nexport ECC_SESSION_START_CONTEXT=off\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-e--adk-workflow-skill-pack-ecc-format-pointers",
      children: "Step E — ADK workflow skill pack (ECC-format pointers)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Copy or symlink ADK’s portable skills into the harness (paths on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        })
      }), " after FR-098 Phase 1):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/skills/"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill folder"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger / use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK command"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "adk-release-workflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version, changelog, commit, tag, push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E#:S#:T#"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "adk-kanban-sync"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board + doc consistency"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -u"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "adk-implementation-planning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP before implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW E#:S#:T#"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "adk-intake-fr-br-uxr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR/BR/UXR → tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake workflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "adk-version-bump"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), " semantics"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inside RW Step 2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These skills are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thin"
      }), ": they point at KB guides and ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), "; they do not duplicate full RW prose."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "adk_skill_pack_path"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ecc-adk-bridge.yaml"
      }), " to that directory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-f--validate-skill-pack--bridge-maintainers--ci",
      children: "Step F — Validate skill pack + bridge (maintainers / CI)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python \"packages/frameworks/workflow-mgt/scripts/validation/validate_adk_ecc_skill_pack.py\"\npython \"packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-g--hooks-phase-3-defaults",
      children: "Step G — Hooks (Phase 3 defaults)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hook_profile: minimal"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "excluded_components: [baseline:hooks]"
        }), " until you review SessionStart / pre-RW behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Populate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disabled_hooks"
        }), " from the bridge template examples (RW/git conflicts)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-RW advisory:"
        }), " Any ECC pre-RW quality hook is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-blocking"
        }), "; ADK ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 10"
        }), " validators remain authoritative (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/ecc-agentshield-rw-step9-bridge.md",
          children: "AgentShield bridge doc"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-daily-workflow-cheat-sheet",
      children: "4. Daily workflow cheat sheet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typical feature flow with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "both"
      }), " layers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Intake     → FR/BR doc + E:S:T task (ADK)\n2. IPW        → IPP in docs/implementation-cycles/ (ADK gate — blocks implementation)\n3. Implement  → ECC domain skills + tests (ECC craft; ADK task status IN PROGRESS)\n4. UKW        → Optional drift repair between releases (ADK)\n5. RW         → Only path to commit/push/tag (ADK)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "command-quick-reference",
      children: "Command quick reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Goal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Say / run"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan a task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW E2:S16:T12"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement (after IPP linked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal agent session; invoke ECC skills by name for language/TDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sync boards"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -u"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Release work"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RW E2:S16:T12"
            }), " (add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--art"
            }), " if intentional anchor adoption)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docs-only release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d E…:S…:T…"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban init row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -k E…:S…:T…"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-50-reminder-fr-100",
      children: "Phase 5.0 reminder (FR-100)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPW"
      }), " run scores ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md",
        children: "ADR necessity"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "before"
      }), " doc inventory. ECC planning skills do not replace that gate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-conflict-rules-memorize-these-four",
      children: "5. Conflict rules (memorize these four)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configured in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ecc-adk-bridge.yaml"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "conflict_rules"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ECC surface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ADK wins because"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git-workflow"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RW-only"
            }), " commit/push (", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "plan"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "plan-orchestrate"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "IPW"
            }), " + IPP under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "project-flow-ops"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Exclude"
            }), " — not ADK Kanban"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(version text)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ADK ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version-bump"
            }), " + validators"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the agent suggests ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git commit"
      }), " outside RW, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stop"
      }), " and run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW"
      }), " with the correct ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E:S:T"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-getting-the-most-from-ecc-without-bloat",
      children: "6. Getting the most from ECC (without bloat)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "do",
      children: "Do"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ECC for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "language-specific"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TDD"
        }), " skills during implementation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "hooks minimal"
        }), " until you have reviewed SessionStart / pre-commit behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ECC install ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dry-run"
        }), " before writing to ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pin ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ecc_version_pin"
        }), " in the bridge file and re-run Phase 0 when upgrading ECC."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Let ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 9"
        }), " remain the release validator suite; treat ECC security skills as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "extra"
        }), " signal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dont",
      children: "Don’t"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Install full ECC overlay + Claude marketplace plugin + manual copy (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single install path"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ECC ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project-flow-ops"
        }), " instead of UKW for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip IPW because ECC offered a generic plan."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bump SemVer MINOR “because we added ECC” — FR-098 phases are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH-only"
        }), "; MINOR is Epic 6 sign-off."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merge ECC’s ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/"
        }), " tree into ai-dev-kit canonical repos without namespace review."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-context-budget-tips",
      children: "7. Context budget tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ECC ", (0,jsx_runtime.jsx)(_components.code, {
        children: "core"
      }), " profile can add ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hundreds"
      }), " of skill files. ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " is already large."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Profile"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "minimal"
            }), " hooks + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ECC_SESSION_START_CONTEXT=off"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default for ADK repos"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "standard"
            }), " / hooks on"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only after Phase 3 hook alignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full ECC catalog"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Greenfield app repos ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "without"
            }), " ADK Kanban, or selective skill install"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prefer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "namespaced"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "adk-*"
      }), " skills for governance and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ECC"
      }), " skills for domain work — avoid duplicating RW/UKW/IPW text in both places."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-troubleshooting",
      children: "8. Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Likely cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent commits outside RW"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ECC ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git-workflow"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reinforce ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), "; bridge ", (0,jsx_runtime.jsx)(_components.code, {
              children: "defer_to: adk-release-workflow"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Planning with no IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC plan skill"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW E:S:T"
            }), "; link IPP from task"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/skills"
            }), " explosion"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-install"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--without baseline:hooks"
            }), "; dry-run first"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dry-run still lists ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/hooks/*"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--without baseline:hooks"
            }), " excludes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hooks-runtime"
            }), " module, not all hook file drops"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inspect dry-run plan; do not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--execute"
            }), " until hook + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common-git-workflow.mdc"
            }), " risk reviewed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version mismatch on branch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wrong epic in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW Step 1 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_branch_context.py --strict"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate triggers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin + installer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["One install path; check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-adk-bridge.yaml"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "single_install_path"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback:"
      }), " ECC upstream ", (0,jsx_runtime.jsx)(_components.code, {
        children: "uninstall"
      }), " dry-run, or remove paths listed in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/ecc-install-state.json"
      }), " (see integration spec §8)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-where-to-read-more",
      children: "9. Where to read more"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Document"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md",
              children: "Integration specification"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GO/NO-GO matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md",
              children: "Phase 0 evaluation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR scope / phases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md",
              children: "FR-098"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throwaway dogfood (E2E)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["§3 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Throwaway branch playbook"
            }), " (this doc)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greenfield install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
              children: "INSTALL_IN_YOUR_PROJECT.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW detail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/.../release-workflow-agent-execution.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-phase-roadmap-whats-shipped-vs-next",
      children: "10. Phase roadmap (what’s shipped vs next)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What you get today"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Spec, evaluation, bridge template — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "done"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "adk-*"
            }), " skill pack + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_adk_ecc_skill_pack.py"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "done"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md",
              children: "T05"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "install_ecc_harness_optional.sh"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ecc_adk_bridge.py"
            }), ", INSTALL optional step — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "done"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098.md",
              children: "T06"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hook defaults in bridge template + cheatsheet §3G — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "done"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/ecc-agentshield-rw-step9-bridge.md",
              children: "AgentShield RW add-on doc"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "done"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Layered architecture + book sidebar (§11) — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "done"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "adk-*"
      }), " skills are missing on your branch, merge ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " or copy the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "skills/"
      }), " tree from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md",
        children: "T05"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-layered-architecture-and-book-positioning-fr-098-f6",
      children: "11. Layered architecture and book positioning (FR-098-F6)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ADK = project operating system"
      }), " — Kanban, FR/BR/UXR, IPW gate, RW/UKW, forensic versioning, validators.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ECC = harness execution layer"
      }), " — domain skills, TDD craft, optional hooks and security scan skills."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cross-links:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/ai-dev-kit-vision-and-purpose",
          children: "AI Dev Kit vision and purpose"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md",
          children: "Integration specification"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Book sidebar (Head First AI-Assisted Development):"
      }), " Position ECC as an optional ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "15-minute harness sidebar"
      }), " after the ADK full-stack install — same mental model as §1 above. Readers install ADK first; ECC augments agent craft without replacing governance workflows."]
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
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
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