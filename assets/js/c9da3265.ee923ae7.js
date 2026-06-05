"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["51343"], {
35054(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_037_kanban_install_consumer_board_contamination_md_c9d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-037-kanban-install-consumer-board-contamination-md-c9d.json
var site_docs_project_management_kanban_fr_br_br_037_kanban_install_consumer_board_contamination_md_c9d_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-037-kanban-install-consumer-board-contamination","title":"BR-037 – Kanban Install Consumer Board Contamination","description":"Summary","source":"@site/../docs/project-management/kanban/fr-br/BR-037-kanban-install-consumer-board-contamination.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-037-kanban-install-consumer-board-contamination","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-037-kanban-install-consumer-board-contamination","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-037-kanban-install-consumer-board-contamination.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-05T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report: RW Step 7 Board Update Bugs","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-036-rw-step-7-board-update-bugs"},"next":{"title":"Bug Report BR-038 – Release Workflow Micromanagement and Tool Discovery Issues","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-037-kanban-install-consumer-board-contamination.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-05T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'BR-037 – Kanban Install Consumer Board Contamination';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Context and Impact",
  "id": "context-and-impact",
  "level": 2
}, {
  "value": "Expected Behaviour (Post-Fix)",
  "id": "expected-behaviour-post-fix",
  "level": 2
}, {
  "value": "Current Behaviour (Fixed)",
  "id": "current-behaviour-fixed",
  "level": 2
}, {
  "value": "Symptoms &amp; Diagnosis",
  "id": "symptoms--diagnosis",
  "level": 2
}, {
  "value": "Proposed Fixes (Implemented)",
  "id": "proposed-fixes-implemented",
  "level": 2
}, {
  "value": "F1 – Fix fresh Kanban installs (PREVENTION)",
  "id": "f1--fix-fresh-kanban-installs-prevention",
  "level": 3
}, {
  "value": "F2 – Contamination detector (DETECTION)",
  "id": "f2--contamination-detector-detection",
  "level": 3
}, {
  "value": "F3 – Remediation engine (CLEAN-UP)",
  "id": "f3--remediation-engine-clean-up",
  "level": 3
}, {
  "value": "F4 – Validator integration and docs",
  "id": "f4--validator-integration-and-docs",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 2
}, {
  "value": "Status",
  "id": "status",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "br-037--kanban-install-consumer-board-contamination",
        children: "BR-037 – Kanban Install Consumer Board Contamination"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Early versions of the Kanban framework installer allowed consumer projects to accidentally import ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), "’s own Kanban backlog (epics/stories/tasks) instead of a clean, project-agnostic template tree. This led to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contaminated consumer boards"
      }), " where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "AI Dev Kit – Kanban Board"
        }), " appeared as the board title."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dev-kit specific epics (e.g., ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 24: Book Related Work"
        }), ") and BR/FR repositories showed up in consumer projects."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consumer tasks and dev-kit’s internal backlog were mixed in the same tree, making forensic tracking and project management unreliable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BR-037 tracks both ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prevention"
      }), " (fresh installs) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "remediation"
      }), " (clean-up for already‑contaminated boards)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context-and-impact",
      children: "Context and Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Affected consumer projects (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "xoforge"
          }), ") ended up with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dev-kit epics and stories mixed into their own Kanban trees."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Dev-kit FR/BR repo documents under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Confusing status signals on boards and stories, breaking the Epic/Story/Task coordination model."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["This violated the design goal that ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "framework templates"
          }), " must be clearly separated from ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "consumer project content"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "It also undermined the forensic guarantees of the Kanban + RW stack (version markers, BR/FR traceability, etc.)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behaviour-post-fix",
      children: "Expected Behaviour (Post-Fix)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After the full BR-037 resolution:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fresh installs"
          }), " of the Kanban framework:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Produce a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "clean, project-agnostic"
            }), " Kanban tree rooted at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Never claim the board title ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AI Dev Kit – Kanban Board"
            }), " in consumer projects."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Install only the canonical epic skeleton and guidance, not dev-kit’s live backlog."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Emit structured install logs (via FR-047) with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[KANBAN_*]"
            }), " markers for validation."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detection and remediation"
          }), " for existing projects:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "contamination detector"
            }), " can scan a consumer Kanban tree and classify each file as:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "template"
                }), " – expected consumer template/structure."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "devkit_reference"
                }), " – legitimate reference material (when present in dev-kit itself)."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "contaminated"
                }), " – dev-kit backlog artefacts that must not live in consumer boards."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "unknown"
                }), " – files that don’t match any known rule."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "remediation tool"
            }), " can:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Run in ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "dry-run"
                }), " mode to show exactly what would be archived or deleted."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Run in ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "archive"
                }), " mode to move contaminated files into a ", (0,jsx_runtime.jsx)(_components.code, {
                  children: ".contaminated/"
                }), " subtree, preserving structure."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Optionally run in ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "delete"
                }), " mode for irreversible clean-up once archived copies are confirmed safe to remove."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validators"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The Kanban installation validator fails when contamination is detected and points to the remediation tool as the recovery path."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "current-behaviour-fixed",
      children: "Current Behaviour (Fixed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As of the remediation work for ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E06:S01", ":T37"]
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fresh installs"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The installer’s ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--mode fresh"
            }), " path now generates a clean consumer tree and has tests asserting:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "No Epic 24 contamination in the consumer epics directory."
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Consumer boards do ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "not"
                }), " advertise ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "AI Dev Kit – Kanban Board"
                }), " as the title."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Install runs are logged via FR-047, including Kanban-specific markers (", (0,jsx_runtime.jsx)(_components.code, {
              children: "[KANBAN_FRESH_INSTALL]"
            }), ", etc.)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Contamination detection"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A dedicated contamination detector walks ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/"
            }), " and:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Flags dev-kit boards and BR/FR repo docs that appear in consumer trees."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Flags non-canonical epics (e.g. dev-kit project epics copied into consumers)."
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Produces a machine-readable classification (", (0,jsx_runtime.jsx)(_components.code, {
                  children: "template"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "devkit_reference"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "contaminated"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "unknown"
                }), ") along with reasons."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Remediation tooling"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A remediation script:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Runs a detector scan and prints a CSV-style summary of all findings."
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Supports a ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "dry-run"
                }), " mode that only prints planned actions (archive/delete) with no filesystem changes."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "archive"
                }), " mode, moves contaminated files under ", (0,jsx_runtime.jsx)(_components.code, {
                  children: ".contaminated/"
                }), " beneath the Kanban root."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "delete"
                }), " mode, removes contaminated files outright."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Is tested for ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "idempotency"
                }), ": running it multiple times on the same tree is a no-op after the first clean-up."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validator integration"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The Kanban installation validator invokes the detector and:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Fails validation if any ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "contaminated"
                }), " files are found."]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Emits an explicit message instructing users to run the remediation tool to clean up their Kanban tree."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "symptoms--diagnosis",
      children: "Symptoms & Diagnosis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Historical symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Board titled ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AI Dev Kit – Kanban Board"
        }), " in a consumer repository."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Presence of dev-kit specific epics (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-24/epic-24.md – Book Related Work"
        }), ") in a consumer project."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dev-kit FR/BR repo structure (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-0xx-*.md"
        }), ") inside consumer trees."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban install logs (before FR-047) lacking enough detail to reconstruct what happened."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-fix diagnosis path:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check install logs"
        }), " (FR-047) under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "logs/ai-dev-kit/install/"
        }), " for Kanban runs and markers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run the contamination detector"
        }), " over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review findings"
        }), " by classification and reason to understand the scope of contamination."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run remediation"
        }), " in dry-run mode first, then archive/delete as appropriate."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-fixes-implemented",
      children: "Proposed Fixes (Implemented)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "f1--fix-fresh-kanban-installs-prevention",
      children: "F1 – Fix fresh Kanban installs (PREVENTION)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Introduce a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "fresh install"
          }), " path that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creates only the canonical consumer epics and board skeleton."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Avoids copying dev-kit’s live backlog or project-specific epics."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Asserts via tests that canonical invariants hold (no Epic 24 in consumer epics, board title not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AI Dev Kit – Kanban Board"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Integrate with FR-047 logging to make fresh install behaviour observable."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Implemented and covered by tests."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "f2--contamination-detector-detection",
      children: "F2 – Contamination detector (DETECTION)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a detector that:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Walks the Kanban tree and classifies each file with a clear reason."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Encodes rules for:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Dev-kit board titles."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Dev-kit FR/BR repo docs leaking into consumer trees."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Non-canonical epic numbers/content copied from dev-kit."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Exposes a simple API for use by validators and tooling."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Implemented, with unit tests for classification rules."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "f3--remediation-engine-clean-up",
      children: "F3 – Remediation engine (CLEAN-UP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a remediation tool that:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses the detector to find contaminated files."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Supports ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "dry-run"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "archive"
            }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "delete"
            }), " workflows."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Preserves structure when archiving, under ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".contaminated/"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Is explicitly tested for idempotency."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Implemented with both unit and end-to-end tests."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "f4--validator-integration-and-docs",
      children: "F4 – Validator integration and docs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Wire the detector into the Kanban installation validator so that:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validation fails when contamination is present."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The validator output clearly points to the remediation command as the next step."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Update:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task document ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S01:T37"
            }), " with the final remediation design and acceptance criteria."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban board and guide with a short pointer to the detection/remediation tools and their relationship to install logs (FR-047)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Implemented in code; docs and Kanban entries updated as part of this BR."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Safety-first operation"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "dry-run"
            }), " for remediation; require an explicit flag to mutate files."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Archive before delete to allow manual inspection/recovery where needed."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Idempotency"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Multiple remediation runs should be safe and converge quickly (no repeated archives or inconsistent states)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Forensic traceability"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detection and remediation should integrate with install logging (FR-047) to support end-to-end troubleshooting of installs."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Consumer focus"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tooling should be safe to run in real consumer projects and never introduce new dev-kit artefacts."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "status",
      children: "Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " CHANGE IMPLEMENTED – AWAITING VERIFICATION"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary Task:"
        }), " E06:S01", ":T37", " – Kanban Install Consumer Board Contamination (detector + remediation implemented, pending release RW and consumer verification)"]
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