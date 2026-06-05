"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["14992"], {
51421(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_versioning_quick_reference_md_af5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-versioning-quick-reference-md-af5.json
var site_docs_architecture_standards_and_adrs_versioning_quick_reference_md_af5_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/versioning-quick-reference","title":"Versioning Quick Reference","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/versioning-quick-reference.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/versioning-quick-reference","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/versioning-quick-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/versioning-quick-reference.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Versioning Error Reference Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/versioning-error-reference-guide"},"next":{"title":"Release Workflow Flaws Reference Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-flaws-reference-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/versioning-quick-reference.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Versioning Quick Reference';

const assets = {

};



const toc = [{
  "value": "Version Schema",
  "id": "version-schema",
  "level": 2
}, {
  "value": "Quick Decision Flow",
  "id": "quick-decision-flow",
  "level": 2
}, {
  "value": "Common Scenarios",
  "id": "common-scenarios",
  "level": 2
}, {
  "value": "Scenario 1: New Epic",
  "id": "scenario-1-new-epic",
  "level": 3
}, {
  "value": "Scenario 2: New Story",
  "id": "scenario-2-new-story",
  "level": 3
}, {
  "value": "Scenario 3: New Task",
  "id": "scenario-3-new-task",
  "level": 3
}, {
  "value": "Scenario 4: Same Task (Bugfix/Hotfix)",
  "id": "scenario-4-same-task-bugfixhotfix",
  "level": 3
}, {
  "value": "Critical Rules",
  "id": "critical-rules",
  "level": 2
}, {
  "value": "✅ DO",
  "id": "-do",
  "level": 3
}, {
  "value": "❌ DON&#39;T",
  "id": "-dont",
  "level": 3
}, {
  "value": "Version Comparison (Canonical Ordering)",
  "id": "version-comparison-canonical-ordering",
  "level": 2
}, {
  "value": "RW Step 2: Version Bump Logic",
  "id": "rw-step-2-version-bump-logic",
  "level": 2
}, {
  "value": "Changelog Ordering",
  "id": "changelog-ordering",
  "level": 2
}, {
  "value": "Common Anti-Patterns",
  "id": "common-anti-patterns",
  "level": 2
}, {
  "value": "Version File Format",
  "id": "version-file-format",
  "level": 2
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
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
        id: "versioning-quick-reference",
        children: "Versioning Quick Reference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Owner:"
      }), " AI Dev Kit / Book Project Lead", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " Epic 3, Story 2, Task 5 (E3:S02", ":T05", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "For:"
      }), " Developers, AI agents, and project maintainers", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Quick lookup for common versioning scenarios and rules"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-schema",
      children: "Version Schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When It Changes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When It Resets"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entering RC phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EPIC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting new epic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "3"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "STORY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting new story"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When EPIC changes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TASK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting new task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When STORY changes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BUILD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When TASK changes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "3"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-decision-flow",
      children: "Quick Decision Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Starting new work?\n├─ New Epic? → Set EPIC, STORY=1, TASK=1, BUILD=1\n├─ New Story? → Keep EPIC, Set STORY, TASK=1, BUILD=1\n├─ New Task? → Keep EPIC/STORY, Set TASK, BUILD=1\n└─ Same Task? → Keep EPIC/STORY/TASK, Increment BUILD\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-scenarios",
      children: "Common Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-1-new-epic",
      children: "Scenario 1: New Epic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "If:"
      }), " Starting work on a completely new epic", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Then:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.{NEW_EPIC}.1.1+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Current: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.4.9+3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New Epic 3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.1+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-2-new-story",
      children: "Scenario 2: New Story"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "If:"
      }), " Starting a new story within current epic", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Then:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.\\{EPIC\\}.{NEW_STORY}.1+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Current: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.1.6+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New Story 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-3-new-task",
      children: "Scenario 3: New Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "If:"
      }), " Starting a new task within current story", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Then:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.\\{EPIC\\}.\\{STORY\\}.{NEW_TASK}+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Current: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.4+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New Task 5: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.5+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-4-same-task-bugfixhotfix",
      children: "Scenario 4: Same Task (Bugfix/Hotfix)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "If:"
      }), " Releasing another build of the same task", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Then:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.\\{EPIC\\}.\\{STORY\\}.\\{TASK\\}+{BUILD+1}"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Current: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.4+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Next build: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.4+2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "critical-rules",
      children: "Critical Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-do",
      children: "✅ DO"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always use full format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E3:S02:T05"
        }), " (never standalone ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T05"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Order by version number:"
        }), " Changelog entries ordered by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), ", not timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reset BUILD to 1:"
        }), " When moving to a new TASK"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read Story file:"
        }), " Before bumping version to identify completed task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare task numbers:"
        }), " Completed task vs. current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), " to detect transitions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-dont",
      children: "❌ DON'T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never increment BUILD for new task:"
        }), " Always increment TASK and reset BUILD"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never use chronological ordering:"
        }), " Use canonical ordering (by version number)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never skip task numbers:"
        }), " Tasks must be sequential within a story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Never assume same task:"
        }), " Always verify by reading Story file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-comparison-canonical-ordering",
      children: "Version Comparison (Canonical Ordering)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ordering:"
      }), " RC → EPIC → STORY → TASK → BUILD"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.4.9+3"
        }), " < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.4+1"
        }), " (Epic 2 < Epic 3)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.1+1"
        }), " < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.2+1"
        }), " (Task 1 < Task 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.4+1"
        }), " < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.2.4+2"
        }), " (Build 1 < Build 2)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Lower version numbers appear first in changelog, regardless of commit time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rw-step-2-version-bump-logic",
      children: "RW Step 2: Version Bump Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MANDATORY 6-Step Procedure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "READ"
        }), " current version from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IDENTIFY"
        }), " completed task from Story file (find ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE"
        }), " marker)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPARE"
        }), " completed task number vs. current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "completed > current"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "NEW TASK"
            }), " → Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK = completed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_BUILD = 1"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "completed == current"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SAME TASK"
            }), " → Keep ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK"
            }), ", increment ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_BUILD"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "completed < current"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ERROR"
            }), " → Stop and report"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VALIDATE"
        }), " before updating"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPDATE"
        }), " version file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VALIDATE"
        }), " after updating"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changelog-ordering",
      children: "Changelog Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL:"
      }), " Changelog entries must be ordered by version number, NOT by insertion time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Step 4 Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read ALL existing changelog entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract version numbers from each entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare new version with existing versions using canonical ordering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find correct insertion point (not necessarily at top)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert at correct position"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate ordering after insertion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validator:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_changelog_format.py"
      }), " checks canonical ordering automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-anti-patterns",
      children: "Common Anti-Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Anti-Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BUILD incremented for new task"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.2.4+2"
            }), " when Task 5 completed"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Should be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.3.2.5+1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Changelog chronological order"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newer versions at top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order by version number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standalone task reference"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T05"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E3:S02:T05"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use full format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing task transition detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUILD incremented instead of TASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read Story file to identify completed task"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-file-format",
      children: "Version File Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3\nVERSION_STORY = 2\nVERSION_TASK = 6\nVERSION_BUILD = 1\nVERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\"\n# Result: \"0.3.2.6+1\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full Cookbook:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Strategy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Execution Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Reference:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/versioning-error-reference-guide.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.3.2.6+1"]
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