"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["5997"], {
3018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_developer_tools_ide_whitelist_guide_md_4fc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developer-tools-ide-whitelist-guide-md-4fc.json
var site_docs_developer_tools_ide_whitelist_guide_md_4fc_namespaceObject = JSON.parse('{"id":"developer-tools/ide-whitelist-guide","title":"IDE command whitelist guide","description":"Version ADR-013 · TaskS07:T107","source":"@site/../docs/developer-tools/ide-whitelist-guide.md","sourceDirName":"developer-tools","slug":"/developer-tools/ide-whitelist-guide","permalink":"/ai-dev-kit/docs/developer-tools/ide-whitelist-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/developer-tools/ide-whitelist-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-07T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Translation management tools","permalink":"/ai-dev-kit/docs/documentation/user-docs/translation-management-tools"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/developer-tools/ide-whitelist-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-07T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'IDE command whitelist guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Friction analysis (AC1)",
  "id": "friction-analysis-ac1",
  "level": 2
}, {
  "value": "Cursor integration (enforcement truth)",
  "id": "cursor-integration-enforcement-truth",
  "level": 2
}, {
  "value": "One-time setup (this machine)",
  "id": "one-time-setup-this-machine",
  "level": 3
}, {
  "value": "Running the validator",
  "id": "running-the-validator",
  "level": 2
}, {
  "value": "Pattern catalog highlights",
  "id": "pattern-catalog-highlights",
  "level": 2
}, {
  "value": "Python validation (RW Step 9)",
  "id": "python-validation-rw-step-9",
  "level": 3
}, {
  "value": "Git (RW Steps 8–12)",
  "id": "git-rw-steps-812",
  "level": 3
}, {
  "value": "Project find",
  "id": "project-find",
  "level": 3
}, {
  "value": "Maintainer workflow",
  "id": "maintainer-workflow",
  "level": 2
}, {
  "value": "Security guidelines",
  "id": "security-guidelines",
  "level": 2
}, {
  "value": "Implementation status",
  "id": "implementation-status",
  "level": 2
}, {
  "value": "Support",
  "id": "support",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "ide-command-whitelist-guide",
        children: "IDE command whitelist guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.1 (2026-05-30) · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md",
        children: "ADR-013"
      }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md",
        children: ["E06:S07", ":T107"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide explains the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pattern catalog + validator + Cursor playbook"
      }), " model for reducing agent terminal approval friction. It does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " claim that YAML alone auto-approves commands in Cursor."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/whitelist-patterns.yaml",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: ".cursor/whitelist-patterns.yaml"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regex SoT with examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor apply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/permissions.json",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: ".cursor/permissions.json"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Terminal allowlist"
            }), " Cursor loads automatically (prefix rules)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_whitelist_patterns.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures patterns compile and examples match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Playbook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This guide"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tune ", (0,jsx_runtime.jsx)(_components.code, {
              children: "permissions.json"
            }), "; optional IDE UI for gaps"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/developer-tools/ide-whitelist-uat-log.md",
              children: "ide-whitelist-uat-log.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UAT and integration spike entries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md",
        children: "BR-039"
      }), " (Cascade/Windsurf vendor whitelist). See ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-06-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md",
        children: ["E06:S06", ":T57"]
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "friction-analysis-ac1",
      children: "Friction analysis (AC1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Friction class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why it hurts"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concrete storage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_branch_context.py --strict"
            }), " vs same script without flag"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each variant is a new approval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version tokens"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tags/changelog strings with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.7.101+33"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique strings per release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path variants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Absolute paths vs repo-relative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicated allowlist rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter drift"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--requested \"E06:S07:T107\""
            }), " vs other E:S", ":T"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW guard scripts need per-task strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Product behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor stores literal approved strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No import of repo YAML by default"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cursor-integration-enforcement-truth",
      children: "Cursor integration (enforcement truth)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Does Cursor load ", (0,jsx_runtime.jsx)(_components.code, {
              children: "whitelist-patterns.yaml"
            }), "?"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            }), " — regex catalog is repo SoT only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Does Cursor load ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/permissions.json"
            }), "?"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            }), " — ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://cursor.com/docs/reference/permissions",
              children: "permissions.json reference"
            }), ". Terminal entries use ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "prefix"
            }), " matching on the full command string."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "What should maintainers do?"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1) Enable ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run Mode → Allowlist"
            }), " (or Allowlist with Sandbox). 2) Commit/use ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/permissions.json",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: ".cursor/permissions.json"
              })
            }), " (already mapped from the catalog). 3) After catalog changes, update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "permissions.json"
            }), " prefixes and re-run the validator."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "What does the repo automate?"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_whitelist_patterns.py"
            }), " — YAML coherence; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "permissions.json"
            }), " is maintained alongside the catalog (see maintainer workflow)."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-time-setup-this-machine",
      children: "One-time setup (this machine)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Open the correct settings panel"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Panel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Shortcut (macOS)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Has Run Mode / Agents?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cursor Settings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cmd+Shift+J"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            }), " — use this one"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Editor Settings (VS Code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Cmd+,"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No — fonts, format on save, etc."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cursor Settings"
      }), ", use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "left sidebar"
      }), " (not General / Privacy only). Scroll until you see ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agents"
      }), " (sometimes under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Beta"
      }), ", depending on version)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run Mode (Cursor 3.6+)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Use with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "permissions.json"
            }), "?"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Auto-review"
            }), " (common default)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            }), " — allowlisted terminal commands run immediately; others go to classifier"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allowlist"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            }), " — strictest; only allowlisted commands auto-run"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allowlist (with Sandbox)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            }), " — allowlisted outside sandbox; rest sandboxed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run Everything"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowlist still defined but everything runs (not recommended)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " have to switch away from Auto-review if that is already selected. The repo ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/permissions.json",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/permissions.json"
        })
      }), " supplies the terminal allowlist in all modes above except deprecated “Ask every time”."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If you still cannot find Agents"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings search"
        }), " (top of Cursor Settings) → type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Run Mode"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "allowlist"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "terminal"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Cursor"
        }), " to 3.6+ (Help → Check for Updates)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify the file loaded:"
        }), " with this repo open, Agent runs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git status"
        }), " — use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add to allowlist"
        }), " on the prompt once; if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "permissions.json"
        }), " is active, Settings should note allowlist is file-controlled."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fallback:"
        }), " only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.cursor/permissions.json"
        }), " + repo file merge; no UI section required for prefixes to apply once Run Mode is enabled."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Terminal allowlist shows entries from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "permissions.json"
        }), " (read-only in UI when file defines ", (0,jsx_runtime.jsx)(_components.code, {
          children: "terminalAllowlist"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Smoke test: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python \"packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py\" --strict"
        }), " from repo root."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "running-the-validator",
      children: "Running the validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From repository root:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python \"packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With explicit root:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python \"packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py\" --project-root /path/to/ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pytest (global ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pytest-django"
      }), " from other projects must be blocked — plain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python -m pytest …/test_validate_*.py"
      }), " may fail):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "bash \"packages/frameworks/workflow-mgt/scripts/validation/run_isolated_pytest.sh\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or any of:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python \"packages/frameworks/workflow-mgt/scripts/validation/test_validate_whitelist_patterns.py\"\npython \"packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py\" --run-tests\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All of the above set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PYTEST_DISABLE_PLUGIN_AUTOLOAD=1"
      }), " and skip ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pytest_django"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pattern-catalog-highlights",
      children: "Pattern catalog highlights"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-validation-rw-step-9",
      children: "Python validation (RW Step 9)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "python_validation_scripts:\n  pattern: '^python \"packages/frameworks/workflow-mgt/scripts/validation/validate_[a-z0-9_]+\\.py\"(\\s+.*)?$'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Covers all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_*.py"
      }), " invocations with optional flags (", (0,jsx_runtime.jsx)(_components.code, {
        children: "--strict"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--requested"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--art"
      }), ", etc.)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-rw-steps-812",
      children: "Git (RW Steps 8–12)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "git_rw_operations:\n  pattern: '^git (add|status|commit|push|tag|checkout|branch|log|diff|restore|show|merge|pull|fetch)(\\s+.*)?$'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security:"
      }), " Do not add blanket ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git push --force"
      }), " to Cursor allowlist. Review force-push manually."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-find",
      children: "Project find"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{PROJECT_ROOT}"
      }), " in examples — substitute your clone path when configuring IDE rules:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "find {PROJECT_ROOT} -name \"validate_*.py\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintainer-workflow",
      children: "Maintainer workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add or refine a pattern in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/whitelist-patterns.yaml"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "examples"
        }), " and optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "negative_examples"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_whitelist_patterns.py"
        }), " (must pass)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add matching ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "prefix"
        }), " line(s) to ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/permissions.json"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "terminalAllowlist"
        }), " (see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://cursor.com/docs/reference/permissions#terminal-allowlist-format",
          children: "Cursor prefix rules"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Append a row to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/developer-tools/ide-whitelist-uat-log.md",
          children: "ide-whitelist-uat-log.md"
        }), " if measuring prompt counts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Release via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " on the host task when changing catalog or permissions in a versioned delivery."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-guidelines",
      children: "Security guidelines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Forbidden in catalog: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^.*$"
        }), ", maintainer home paths (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/Users/…"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefer narrow script paths over generic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python .*"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Group patterns in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "contexts"
        }), " (high / medium / low) when deciding Cursor approval tiers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-status",
      children: "Implementation status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Configuration file (catalog v1.1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Core patterns for validation, git, semver, find, pytest"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documentation (this guide + ADR-013)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Automated validator + pytest"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Integration spike documented (UAT log)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Repo ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/permissions.json"
        }), " (prefix allowlist from catalog)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Live prompt-count UAT (maintainer — Entry 002 in UAT log)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Team training (optional walkthrough)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "support",
      children: "Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This guide and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md",
          children: "ADR-013"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md",
          children: "IPP-E6S7T107"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md",
          children: "T107 task doc"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-30"]
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