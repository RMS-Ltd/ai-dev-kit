"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["24397"], {
65964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_workflow_hardening_guide_md_7e0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-workflow-hardening-guide-md-7e0.json
var site_docs_architecture_standards_and_adrs_workflow_hardening_guide_md_7e0_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/workflow-hardening-guide","title":"Workflow Hardening Guide for Agent‑Driven Release Processes","description":"Audience:","source":"@site/../docs/architecture/standards-and-adrs/workflow-hardening-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/workflow-hardening-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-hardening-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/workflow-hardening-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:47.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Release Workflow Flaws Reference Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-flaws-reference-guide"},"next":{"title":"Canonical Use Cases","permalink":"/ai-dev-kit/docs/architecture/use-cases/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/workflow-hardening-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:47.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Workflow Hardening Guide for Agent‑Driven Release Processes';

const assets = {

};



const toc = [{
  "value": "1. Problem Pattern",
  "id": "1-problem-pattern",
  "level": 2
}, {
  "value": "2. Core Principles",
  "id": "2-core-principles",
  "level": 2
}, {
  "value": "2.1 Atomicity",
  "id": "21-atomicity",
  "level": 3
}, {
  "value": "2.2 Minimal, Predictable Tool Use",
  "id": "22-minimal-predictable-tool-use",
  "level": 3
}, {
  "value": "2.3 Single Source of Truth per Step",
  "id": "23-single-source-of-truth-per-step",
  "level": 3
}, {
  "value": "3. Generic Release Workflow Template",
  "id": "3-generic-release-workflow-template",
  "level": 2
}, {
  "value": "4. Execution Pattern for Agents",
  "id": "4-execution-pattern-for-agents",
  "level": 2
}, {
  "value": "4.1 Pre‑Flight",
  "id": "41-preflight",
  "level": 3
}, {
  "value": "4.2 Step Discipline (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)",
  "id": "42-step-discipline-analyze--determine--execute--validate--proceed",
  "level": 3
}, {
  "value": "4.3 TODO List as a State Machine (Critical)",
  "id": "43-todo-list-as-a-state-machine-critical",
  "level": 3
}, {
  "value": "5. Blocked State Contract",
  "id": "5-blocked-state-contract",
  "level": 2
}, {
  "value": "5.1 When to Declare “RW BLOCKED”",
  "id": "51-when-to-declare-rw-blocked",
  "level": 3
}, {
  "value": "5.2 When <em>Not</em> to Stop",
  "id": "52-when-not-to-stop",
  "level": 3
}, {
  "value": "6. Tooling Rules (Implementation‑Level)",
  "id": "6-tooling-rules-implementationlevel",
  "level": 2
}, {
  "value": "6.1 Recommended Tools for RW",
  "id": "61-recommended-tools-for-rw",
  "level": 3
}, {
  "value": "6.2 Tools to Avoid During RW",
  "id": "62-tools-to-avoid-during-rw",
  "level": 3
}, {
  "value": "7. Consistency Checks",
  "id": "7-consistency-checks",
  "level": 2
}, {
  "value": "7.1 Pre‑Commit Check",
  "id": "71-precommit-check",
  "level": 3
}, {
  "value": "7.2 Post‑RW Check",
  "id": "72-postrw-check",
  "level": 3
}, {
  "value": "8. How to Integrate This into a New Project",
  "id": "8-how-to-integrate-this-into-a-new-project",
  "level": 2
}, {
  "value": "9. Summary",
  "id": "9-summary",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "workflow-hardening-guide-for-agentdriven-release-processes",
        children: "Workflow Hardening Guide for Agent‑Driven Release Processes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects using AI/agent assistance for release workflows and documentation updates."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Intended to be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "project‑agnostic"
        }), ", so you can copy this into any repo (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit"
        }), ", application repos) and customize file paths and step names."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goals:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make release workflows ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "atomic, predictable, and low‑friction"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimize user intervention (\"proceed\", manual nudging)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduce wasted compute and cognitive overhead from tool churn and partial updates."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-problem-pattern",
      children: "1. Problem Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When agents run multi‑step workflows (e.g. a 10‑step Release Workflow – \"RW\"), common failure modes are:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mid‑workflow pauses:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "The agent stops after partial work and waits for more user input, leaving the system in a half‑updated state."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tool churn:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "The agent uses too many tools (some irrelevant), repeatedly reads/writes the same files, or experiments during RW instead of executing a crisp plan."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inconsistent state:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Version file, changelog, Kanban/epic/story docs, and git history don’t all line up with the same release."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unclear blocked state:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "The user can’t easily tell if RW is complete, partially done, or abandoned without reading a long trace of actions."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Result: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "wasted time, wasted compute, and reduced trust"
      }), " in the automation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide encodes patterns and safeguards to avoid that."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-core-principles",
      children: "2. Core Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-atomicity",
      children: "2.1 Atomicity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "One RW invocation = one atomic attempt."
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "For a given release version, the agent must:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Either ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "complete all steps"
            }), " (e.g. Steps 1–10), or"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Stop once in a clear ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "\"RW BLOCKED at Step X\""
            }), " state."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No soft pauses."
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "The user should not have to repeatedly type \"proceed\" to finish a single RW for one version."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-minimal-predictable-tool-use",
      children: "2.2 Minimal, Predictable Tool Use"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prefer a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "small, stable set of tools"
          }), " for RW:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["File operations: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read_file"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "apply_patch"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Git / commands: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "run_terminal_cmd"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Progress tracking: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-step-tracker-contract.md",
              children: "Workflow Step Tracker Contract"
            }), " (Cursor ", (0,jsx_runtime.jsx)(_components.code, {
              children: "todo_write"
            }), " or Windsurf ", (0,jsx_runtime.jsx)(_components.code, {
              children: "todo_list"
            }), " adapter)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Avoid during RW:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Irrelevant language‑server tools."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Notebook editors for plain text files."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Placeholder or experimental commands."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-single-source-of-truth-per-step",
      children: "2.3 Single Source of Truth per Step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For each RW step, define ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one authoritative artifact"
      }), ", and normalize all related files to that source:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version bump:"
        }), " version file/package metadata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog:"
        }), " top entry in the changelog + matching archive file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban/epic/story docs:"
        }), " authoritative story file; epic and board must match it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git state:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git status"
        }), " is authoritative for what’s staged/committed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-generic-release-workflow-template",
      children: "3. Generic Release Workflow Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This template assumes a 10‑step RW. Adjust step names/paths for your project."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bump Version"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Read version file and story/task docs."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify the completed task number."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Decide if this is a new task or a new build for the same task."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update version components and version string accordingly."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Changelog"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add a new entry at the top of the main changelog for the new version."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optionally create a per‑version archive changelog file."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Kanban Board"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update epic/story status, version, and task counts on the main board."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Epic Docs"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update epic‑level doc (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-\\{N\\}.md"
            }), ") so header, story checklist, and detailed story sections all match the story file."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update README / Other Surface Docs (Optional)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update any version badges or references if used."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Stage Files"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git add -A"
            }), " (or a curated subset)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run Validators"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Branch context check (e.g. correct branch for epic)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Changelog format validator."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optional: Kanban/epic consistency validator."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Commit Changes"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git commit -m \"Release {version}\""
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Git Tag"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Annotated tag ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v{version}"
            }), " with message ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Release {version}"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Push to Remote"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Push branch and tags to remote (or provide commands if sandboxed)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-execution-pattern-for-agents",
      children: "4. Execution Pattern for Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each RW invocation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-preflight",
      children: "4.1 Pre‑Flight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before making changes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirm target:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic / story / task identifiers."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Which task has just been completed."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Lock plan:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Decide: \"I will attempt Steps 1–10 in this invocation.\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If some step cannot be performed (e.g. network push), note up front where the workflow will legitimately stop."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Initialize RW TODOs:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create or reset a 10‑item todo list:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "rw-step-1"
                }), " … ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "rw-step-10"
                }), " with ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "pending"
                }), " status."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-step-discipline-analyze--determine--execute--validate--proceed",
      children: "4.2 Step Discipline (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each step:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ANALYZE:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Read only the necessary files (version, story, changelog, etc.)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DETERMINE:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Decide exactly what needs to change to satisfy the step."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "EXECUTE:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Apply the minimum required edits using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "apply_patch"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "write"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "run_terminal_cmd"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "VALIDATE:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Re‑read or check status (e.g. re‑read file, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git status"
          }), ") to confirm the step succeeded."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PROCEED:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Update the corresponding ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rw-step-*"
          }), " todo item and move on."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Crucially:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " exit a step because of minor tooling friction (e.g. patch context mismatch) if you can fix it autonomously by re‑reading and adjusting."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Only escalate to the user when ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "blocked by missing information or environment limitations"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-todo-list-as-a-state-machine-critical",
      children: "4.3 TODO List as a State Machine (Critical)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The RW TODO list (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rw-step-1 … rw-step-10"
      }), ") ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must be treated as a state machine"
      }), ", not a loose checklist:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Single active RW:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["At most ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "one RW todo set"
            }), " may be active at any time for a given project/branch."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Starting a new RW requires that all previous RW steps are ", (0,jsx_runtime.jsx)(_components.code, {
              children: "completed"
            }), " or explicitly ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cancelled"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monotonic progression:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Step states may only move forward in this order:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
              children: "pending → in_progress → completed"
            }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pending → cancelled"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "in_progress → cancelled"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Never revert a step from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "completed"
            }), " back to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "in_progress"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "pending"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "One step “in_progress” at a time:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["At any moment, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "at most one"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-step-*"
            }), " should be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "in_progress"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Before starting the next step, mark the current one ", (0,jsx_runtime.jsx)(_components.code, {
              children: "completed"
            }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "blocked"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "cancelled"
            }), " if you use those states)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "State = reality:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A step may only be marked ", (0,jsx_runtime.jsx)(_components.code, {
              children: "completed"
            }), " when all of its required artifacts are consistent (e.g., version + changelog + docs for that step)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If reality and TODO state ever diverge, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "fix the artifacts first"
            }), ", then update the TODO to match."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RW BLOCKED handling:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If RW must stop, mark the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "current step"
            }), " as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "blocked"
            }), " (or leave as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "in_progress"
            }), " and clearly report it), and mark all later steps as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pending"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cancelled"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " start a new RW until the blocked state is resolved or explicitly abandoned."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These rules ensure the TODO list can be read as a reliable, linear history of the workflow, and that agents (and humans) can safely resume, audit, or replicate RW behavior across projects."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-blocked-state-contract",
      children: "5. Blocked State Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-when-to-declare-rw-blocked",
      children: "5.1 When to Declare “RW BLOCKED”"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Declare a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "blocked"
      }), " state only when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You need ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "information the user must supply"
        }), " (e.g. which task was actually completed, story file missing or ambiguous)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy prohibits"
        }), " continuing (e.g. on the wrong branch, policy forbids RW on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infrastructure limitations"
        }), " prevent proceeding (e.g. no network access to push)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In that case, respond clearly with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Step number & name:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "\"RW BLOCKED at Step 10: Push to Remote.\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reason:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "\"Cannot reach remote Git host from this environment.\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Required user actions/commands:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["\"Please run:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
              children: "git push origin epic/11-architecture-refactoring"
            }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
              children: "git push origin v0.11.3.2+1"
            }), "\""]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Status reminder:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "\"RW is otherwise complete; this final push must be done manually.\""
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "52-when-not-to-stop",
      children: ["5.2 When ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Not"
      }), " to Stop"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " pause RW for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Patch context mismatches you can fix by re‑reading the file and adjusting the patch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transient tooling errors where a retry with corrected context is viable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal experiments (avoid these entirely during RW)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-tooling-rules-implementationlevel",
      children: "6. Tooling Rules (Implementation‑Level)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-recommended-tools-for-rw",
      children: "6.1 Recommended Tools for RW"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adapt the names to your environment, but conceptually:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "File inspection:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "read_file"
            }), " for any file (version, docs, changelog)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "File modification:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "apply_patch"
            }), " for structured diffs."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "write"
            }), " for creating new files or entire replacements."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Shell / Git / Validators:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "run_terminal_cmd"
            }), " for:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "git status"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "git diff"
                }), "."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "git add"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "git commit"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "git tag"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "git push"
                }), "."]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Project validators (branch context, changelog format, tests)."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Progress tracking:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-step-tracker-contract.md",
              children: "Workflow Step Tracker Contract"
            }), " for RW steps (not Cursor-specific)."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-tools-to-avoid-during-rw",
      children: "6.2 Tools to Avoid During RW"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Language‑server or platform‑specific tools unrelated to the project’s primary stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notebook editing tools for regular source/markdown files."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arbitrary placeholder commands or “scratch” tooling from inside the RW session."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Keep RW tooling ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "boring and predictable"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-consistency-checks",
      children: "7. Consistency Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-precommit-check",
      children: "7.1 Pre‑Commit Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git commit"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Version alignment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version file reports the intended version (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.11.3.2+1"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Changelog alignment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Top changelog entry is for that version."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Matching archive file exists (", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG_v{version}.md"
            }), " or equivalent)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kanban alignment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic’s line on the Kanban board references the correct version and status."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story line shows correct progress (e.g. \"2/10 tasks complete\")."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic/story docs alignment:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic doc story section matches the story doc (status, version, tasks)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story doc includes correct forensic markers/version references."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Git cleanliness:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git status --short"
            }), " shows exactly the expected files staged."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-postrw-check",
      children: "7.2 Post‑RW Check"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After commit/tag (and push if possible):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Briefly summarize:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version released."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task(s) completed."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Key files updated (by category: code, version, changelog, docs)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Any manual steps remaining (e.g. if push was blocked)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-how-to-integrate-this-into-a-new-project",
      children: "8. How to Integrate This into a New Project"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To use this guide in another repo (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " or any application):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy this file"
        }), " into the new project (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/WORKFLOW-HARDENING-GUIDE.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define project‑specific artifacts"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version file(s) (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "package.json"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pyproject.toml"
            }), ", etc.)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Changelog path."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban/epic/story documentation structure (markdown, Jira, etc.)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validators and scripts."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instantiate the 10 RW steps"
        }), " for that project:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Keep the semantics (version → changelog → docs → validation → git), but adapt names and file paths."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enforce the atomic RW contract"
        }), " in your agent configuration:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["On ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            }), " command, the agent must:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Initialize the 10‑step todo set."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Attempt all steps sequentially in one invocation."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Only stop early in a clearly reported “BLOCKED” state."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optionally add automated tests"
        }), " or CI checks to:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify that version/changelog/docs stay in sync."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fail a pipeline if they diverge."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-summary",
      children: "9. Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key to robust, agent‑driven workflows is not more complexity, but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "disciplined simplicity"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic"
        }), " RW per release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimal"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "predictable"
        }), " tools."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear single sources of truth"
        }), " per step."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Honest blocked states"
        }), " with explicit user actions when necessary."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By following this guide, you can reuse the same hardened RW pattern across multiple projects (both documentation‑heavy frameworks like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " and application repos), while avoiding the time and resource waste that comes from repeated partial workflows and tool thrashing."]
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