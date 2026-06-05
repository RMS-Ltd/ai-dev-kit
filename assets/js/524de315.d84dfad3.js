"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["29873"], {
55208(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_047_install_logging_for_framework_dependencies_md_524_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-047-install-logging-for-framework-dependencies-md-524.json
var site_docs_project_management_kanban_fr_br_fr_047_install_logging_for_framework_dependencies_md_524_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-047-install-logging-for-framework-dependencies","title":"Feature Request: Install Logging for Framework Dependencies","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-047-install-logging-for-framework-dependencies.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-047-install-logging-for-framework-dependencies","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-047-install-logging-for-framework-dependencies","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-047-install-logging-for-framework-dependencies.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-02-27T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: Dual-Version Mode Requires Task-Touch SemVer in RW","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode"},"next":{"title":"Feature Request: ICW Task Identifier Argument","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-048-icw-task-identifier-argument"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-047-install-logging-for-framework-dependencies.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-02-27T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: Install Logging for Framework Dependencies';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Description",
  "id": "description",
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
  "value": "Scope Analysis",
  "id": "scope-analysis",
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
  "value": "Implementation Notes (Phase 1–2)",
  "id": "implementation-notes-phase-12",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "Archive note",
  "id": "archive-note",
  "level": 2
}, {
  "value": "Intake Decision",
  "id": "intake-decision",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "feature-request-install-logging-for-framework-dependencies",
        children: "Feature Request: Install Logging for Framework Dependencies"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-047", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-02-27", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " earlution", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T47-install-logging-for-framework-dependencies",
        children: ["E05:S01", ":T47"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add detailed, per-framework install logging for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit install"
      }), " (and framework-specific installers) so that every install run is captured in a durable log for post-install analysis, debugging, and forensic traceability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When installing frameworks (e.g. Kanban, Workflow Management, Numbering & Versioning) into consumer projects, it is currently difficult to reconstruct ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exactly what happened"
      }), " during installation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which frameworks and versions were requested."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which backend and source were used (e.g. git-submodule, git-subtree)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What scripts ran after dependency installation (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What warnings and validation messages were produced (e.g. Epic mashup warnings, “copied ai-dev-kit’s actual Kanban”)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This lack of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "persistent install log"
      }), " makes it hard to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Diagnose issues like ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-037 – Kanban Install Consumer Board Contamination"
        }), " after the fact."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correlate consumer project states with specific ai-dev-kit framework releases or behaviours."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provide clear guidance to adopters when something goes wrong during ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit install"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This FR proposes adding ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "structured install logging"
      }), " so that each invocation of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit install"
      }), " (and key post-install scripts) writes a detailed log file per run, suitable for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Developer troubleshooting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow analysis (what steps ran, which validations fired)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forensic reconstruction when something goes badly wrong."
      }), "\n"]
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-047-F1:"
          }), " Each invocation of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ai-dev-kit install <framework>[@version]"
          }), " must produce an install log file under a deterministic, project-local path (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "logs/ai-dev-kit/install/"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-047-F2:"
          }), " The log must record, at minimum:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework names and requested versions."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Selected backend and install path."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Source URL or identifier (where safe to log)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "High-level steps with timestamps (init, backend operations, framework-specific scripts, validation)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exit codes and summary status for each step."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-047-F3:"
          }), " For frameworks with their own installers (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "install_kanban_framework.py"
          }), "), key steps and validation results must be captured in the same log (or a clearly linked sub-log)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-047-F4:"
          }), " Install logging must be ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "enabled by default"
          }), " in new projects, with configuration in ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".ai-dev-kit.yaml"
          }), " to:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enable/disable logging."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Control log directory."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configure simple retention (e.g. keep last N logs)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-047-F5:"
          }), " CLI options must allow on-demand overrides:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--log-path PATH"
            }), " to override log directory."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--no-install-log"
            }), " to explicitly disable logging for a specific run (if needed)."]
          }), "\n"]
        }), "\n"]
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
          children: "FR-047-NF1:"
        }), " Logs must avoid recording secrets (tokens, passwords, environment values) and should redact obvious credentials in error output where feasible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-047-NF2:"
        }), " Logging must add minimal overhead to install time and not significantly degrade performance for typical installs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-047-NF3:"
        }), " Log format should be human-readable (plain text with timestamps and levels) and amenable to later extension with machine-readable (JSON) formats."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-047-NF4:"
        }), " Logging must be robust in failure scenarios: partial logs should still be written even if an install step fails."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-analysis",
      children: "Scope Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem Domain:"
      }), " Framework dependency installation and debugging", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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
        }), " ", "CLI / Backend (ai-dev-kit install)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Framework-specific installers (e.g. Kanban)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Testing"]
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
        }), " ", "Simple (1-3 days)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Medium (1 week)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Complex (2+ weeks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Very Complex (1+ month)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Use Case:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A user runs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit install kanban workflow-mgmt numbering-versioning"
        }), " in a consumer project."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Something goes wrong (e.g. unexpected Kanban structure, validation warnings)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User (or support) inspects the latest ", (0,jsx_runtime.jsx)(_components.code, {
          children: "logs/ai-dev-kit/install/install-YYYYMMDD-HHMMSS.log"
        }), " to see:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exactly which frameworks and versions were installed."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backend configuration and target paths."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Output from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_kanban_framework.py"
            }), " and other scripts."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validation warnings and errors (e.g. Epic mashup detected)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Post-mortem analysis for bugs like BR-037, where we need to reconstruct how a board got into a contaminated state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifying that a CI job or automation ran the correct install commands with expected options."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Providing reproducible reports when filing FRs/BRs against ai-dev-kit frameworks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "AC-1:"
          }), " Running ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ai-dev-kit install <framework>"
          }), " in a project that has been ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ai-dev-kit init"
          }), "’d produces a log file under a configured ", (0,jsx_runtime.jsx)(_components.code, {
            children: "logs/ai-dev-kit/install/"
          }), " directory, with a timestamped filename."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "AC-2:"
          }), " The log file clearly shows:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Requested frameworks and versions."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backend, source, and install path for each framework."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Entry/exit for each major step (backend install, framework-specific scripts, validation)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "AC-3:"
          }), " For Kanban installs, the log includes the key phases of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "install_kanban_framework.py"
          }), " (detection, analysis, migration mode, validation) and any Epic mashup / contamination warnings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "AC-4:"
          }), " Logging behaviour is configurable via ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".ai-dev-kit.yaml"
          }), " and CLI flags as described, with sane defaults for new projects."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "AC-5:"
          }), " Automated tests exist that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit install"
            }), " in a temp project."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assert that a log file is created with at least the required fields present."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-notes-phase-12",
      children: "Implementation Notes (Phase 1–2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log location:"
        }), " Logs are per-run and per-project. When ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit install"
        }), " is run from a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "consumer repo root"
        }), " (where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get_project_root()"
        }), " resolves to that repo), the log file is created under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "logs/ai-dev-kit/install/"
        }), " in that repo, with a timestamped filename ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install-YYYYMMDD-HHMMSS.log"
        }), ". Running the CLI from inside a framework checkout (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit/"
        }), ") will place logs under that checkout; for consumer-project logs, run the install from the consumer repo root."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log format (text/JSON):"
        }), " Per-run logs are plain-text by default (", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_logging.format: text"
        }), "), using the prefix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[ISO8601 UTC] [LEVEL] [context] message"
        }), ". Projects can opt into a machine-readable format via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_logging.format: json"
        }), ", which emits one JSON object per line with fields like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timestamp_utc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "level"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "context"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "message"
        }), ", and an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_run_id"
        }), " to correlate events."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework integration:"
        }), " When the CLI has logging enabled, it sets the environment variable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AI_DEV_KIT_INSTALL_LOG_PATH"
        }), " to the current log file path before invoking framework installers. The Kanban installer (", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), ") appends phase-tagged lines to that file when the variable is set: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[KANBAN_MODE]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[KANBAN_DETECT]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[KANBAN_ANALYZE]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[KANBAN_VALIDATE]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[KANBAN_MIGRATE]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[KANBAN_FRESH_INSTALL]"
        }), ". Other framework installers (e.g. Workflow Management’s ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_release_workflow.py"
        }), ") append ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[workflow_mgt.install]"
        }), " lines to the same log file when the env var is present. This allows a single per-run log to contain both CLI and framework-level events."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Install history:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit logs install-history"
        }), " command reads ", (0,jsx_runtime.jsx)(_components.code, {
          children: "logs/ai-dev-kit/install/"
        }), " (text or JSON logs) and prints a compact summary of recent runs (timestamp, frameworks, backend, status, log file) to support quick forensic analysis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation (test installs):"
        }), " Disposable test-project installs confirm that the consumer Kanban board is clean (canonical epics only, no Epic 24) and that Phase 1–2 logging and framework integrations behave as intended."]
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
        children: "Future debugging and analysis workflows that rely on install logs (e.g. automated triage tools for contaminated boards)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None identified; can be implemented independently within the CLI and framework packages."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR-037 – Kanban Install Delivers Mixed Dev Kit Backlog and Templates into Consumer Boards."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E6", ":S07", " – ai-dev-kit CLI Tool (framework dependency management and install flows)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "archive-note",
      children: "Archive note"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FR-047"
      }), " remains the canonical requirement anchor, but implementation is complete and historical. Successor deepening work is delivered under:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E06:S07:T111"
        }), " (comprehensive install event-contract logging quality)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E06:S07:T112"
        }), " (install feedback submission path and governance)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " PENDING", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2026-02-27", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake By:"
      }), " [TBD]"]
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
          disabled: true
        }), " ", "Story Match Found: [Epic 6, Story 7] → Task [T]"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "New Story Created: [Epic X, Story Y] → Task 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Repo Story Mapping: Epic 5, Story 1 (FR Repo) → Task 47 (FR-047 – Install logging for framework dependencies)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To (Proposed):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: Epic 5 – Documentation Management and Maintenance (FR Repo anchoring)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story: Story 1 – FR Repo (PERPETUAL)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: E05:S01", ":T47", " – Install Logging for Framework Dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.47+0"
        }), " (abstract space, to be set when first implementation task runs RW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epic-05.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-01-fr-repo.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T47-install-logging-for-framework-dependencies",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T47 – Install logging"
          })
        })]
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