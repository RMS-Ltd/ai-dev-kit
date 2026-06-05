"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["69785"], {
92924(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_task_template_generator_design_md_08d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-task-template-generator-design-md-08d.json
var site_docs_architecture_standards_and_adrs_task_template_generator_design_md_08d_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/task-template-generator-design","title":"Task Template Generator Design","description":"Purpose: Design document for procedural task template generator","source":"@site/../docs/architecture/standards-and-adrs/task-template-generator-design.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/task-template-generator-design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-template-generator-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/task-template-generator-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-22T09:20:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Standard Operating Procedure: Task Template Cross-Wiring","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-template-cross-wiring-sop"},"next":{"title":"ADR: Hybrid Task Template System (Concrete Templates + Procedural Generation)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-template-system-hybrid-adr"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/task-template-generator-design.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-22T09:20:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Task Template Generator Design';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Input Format",
  "id": "input-format",
  "level": 2
}, {
  "value": "Source Document: <code>COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md</code>",
  "id": "source-document-comprehensive_canonical_est_structuremd",
  "level": 3
}, {
  "value": "Output Format",
  "id": "output-format",
  "level": 2
}, {
  "value": "Generated Task Template Files",
  "id": "generated-task-template-files",
  "level": 3
}, {
  "value": "Mapping Rules",
  "id": "mapping-rules",
  "level": 2
}, {
  "value": "Epic/Story/Task → File Path",
  "id": "epicstorytask--file-path",
  "level": 3
}, {
  "value": "Task Content Generation",
  "id": "task-content-generation",
  "level": 3
}, {
  "value": "Placeholder Population",
  "id": "placeholder-population",
  "level": 2
}, {
  "value": "Contextualization Placeholders",
  "id": "contextualization-placeholders",
  "level": 3
}, {
  "value": "Safety and Overwrite Behavior",
  "id": "safety-and-overwrite-behavior",
  "level": 2
}, {
  "value": "File Existence Checks",
  "id": "file-existence-checks",
  "level": 3
}, {
  "value": "Validation",
  "id": "validation",
  "level": 3
}, {
  "value": "CLI Interface",
  "id": "cli-interface",
  "level": 2
}, {
  "value": "Command Structure",
  "id": "command-structure",
  "level": 3
}, {
  "value": "Options",
  "id": "options",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 3
}, {
  "value": "Validation Routine",
  "id": "validation-routine",
  "level": 2
}, {
  "value": "Comparison Against Concrete Templates",
  "id": "comparison-against-concrete-templates",
  "level": 3
}, {
  "value": "Implementation Considerations",
  "id": "implementation-considerations",
  "level": 2
}, {
  "value": "Parsing Strategy",
  "id": "parsing-strategy",
  "level": 3
}, {
  "value": "Content Generation",
  "id": "content-generation",
  "level": 3
}, {
  "value": "Task Description Enhancement",
  "id": "task-description-enhancement",
  "level": 3
}, {
  "value": "Error Handling",
  "id": "error-handling",
  "level": 2
}, {
  "value": "Parse Errors",
  "id": "parse-errors",
  "level": 3
}, {
  "value": "Generation Errors",
  "id": "generation-errors",
  "level": 3
}, {
  "value": "Recovery",
  "id": "recovery",
  "level": 3
}, {
  "value": "Future Enhancements",
  "id": "future-enhancements",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "task-template-generator-design",
        children: "Task Template Generator Design"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Design document for procedural task template generator", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " E4:S15", ":T02", " - Design procedural task template generator", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADR:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task-template-system-hybrid-adr.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR:"
      }), " FR-029"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The task template generator reads the canonical E/S/T structure document (", (0,jsx_runtime.jsx)(_components.code, {
        children: "COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
      }), ") and generates task template files that match the structure and quality of manually-created concrete templates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input-format",
      children: "Input Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "source-document-comprehensive_canonical_est_structuremd",
      children: ["Source Document: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Markdown document with hierarchical structure"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic sections: heading ", (0,jsx_runtime.jsx)(_components.code, {
          children: "### Epic N: …"
        }), " with a placeholder name (see pattern below)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story sections: heading ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#### Story N: …"
        }), " with a placeholder name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task lists: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Typical Tasks:**"
        }), " followed by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- TNN: …"
        }), " with task description"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "### Epic N: {Name}\n#### Story N: {Name}\n**Typical Tasks:**\n- TNN: {Task Description}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "### Epic 1: {PROJECT_NAME} Core\n\n#### Story 1: Project Foundation and Setup\n**Purpose:** Establish project foundation, structure, and initial configuration.\n\n**Typical Tasks:**\n- T01: Define project structure and directory layout\n- T02: Set up version control and repository configuration\n- T03: Configure development environment and tooling\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parsing Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parse markdown using regex or markdown parser"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract Epic number, name, and description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract Story number, name, purpose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract Task number and description from task list"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build hierarchical structure: Epic → Story → Task"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-format",
      children: "Output Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generated-task-template-files",
      children: "Generated Task Template Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File Path Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "templates/tasks/Epic-{epic}/Story-{story}/T{task:02d}-{kebab-case-description}.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "templates/tasks/epic-01/story-001/T01-Define-Project-Structure-and-Directory-Layout.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK_TEMPLATE.md"
        }), " structure exactly"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All sections populated with appropriate content"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Placeholders preserved for contextualization (", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{PROJECT_NAME\\}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{PROJECT_TYPE\\}"
        }), ", etc.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mapping-rules",
      children: "Mapping Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epicstorytask--file-path",
      children: "Epic/Story/Task → File Path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic Number:"
        }), " Extract from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "### Epic N:"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-\\{N\\}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story Number:"
        }), " Extract from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#### Story N:"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-\\{N\\}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Number:"
        }), " Extract from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- TNN:"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " + two-digit task number (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Description:"
        }), " Extract from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- TNN: …"
        }), " → Convert to kebab-case for filename"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Input: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- T01: Define project structure and directory layout"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Output: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01-Define-Project-Structure-and-Directory-Layout.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-content-generation",
      children: "Task Content Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Frontmatter:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lifecycle: evergreen"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ttl_days: null"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "created_at: [YYYY-MM-DD]"
            }), " (placeholder)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expires_at: null"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "housekeeping_policy: keep"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Header:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Title: task title line with epic/story/task numbers and human-readable description (see generator output)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Status: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TODO"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Priority: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HIGH"
            }), " (default, can be customized)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version: internal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.E.S.T+0"
            }), " pattern for template creation (zero abstract space)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Code: zero-padded ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "S"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " code field"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task ID Section:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Format: full ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E:S:T"
            }), " IDs with literal epic/story/task numbers"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Full Task ID: zero-padded numeric epic/story/task in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E..:S..:T.."
            }), " form"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Scope:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate from task description"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Template: prose combining task description, project name placeholder, and story/epic context"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Input:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate generic inputs based on task type/pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include story/epic dependencies"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Include ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{PROJECT_NAME\\}"
            }), " placeholder"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deliverable:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate generic deliverables based on task description"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use action verbs from task description"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Acceptance Criteria:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate 3-5 criteria based on task description"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use measurable, testable language"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Approach:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generate 5-7 step approach based on task description"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use action verbs and clear steps"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dependencies:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Depends On:"
            }), " Previous tasks in same story (e.g. prior ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Txx"
            }), " in checklist)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocks:"
            }), " Next tasks in same story (e.g. subsequent ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Txx"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallel Development Candidacy:"
            }), " Determine based on dependencies"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Related Work:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related Tasks: Other tasks in same story"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related Stories: Current story reference"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Version Anchor:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Standard forensic marker format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Instructions for completion"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Notes, Completion Summary, References, Next Actions:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Standard template placeholders"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placeholder-population",
      children: "Placeholder Population"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contextualization-placeholders",
      children: "Contextualization Placeholders"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preserved Placeholders:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\\{PROJECT_NAME\\}"
        }), " - Project name (to be replaced during contextualization)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\\{PROJECT_TYPE\\}"
        }), " - Project type (to be replaced during contextualization)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\\{DOMAIN\\}"
        }), " - Domain/industry (to be replaced during contextualization)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "[YYYY-MM-DD]"
        }), " - Date placeholders (to be replaced when task is created)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generated Content:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task descriptions use placeholders where appropriate"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scope, Input, Deliverable sections reference ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{PROJECT_NAME\\}"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "safety-and-overwrite-behavior",
      children: "Safety and Overwrite Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-existence-checks",
      children: "File Existence Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Default Behavior (Safe Mode):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skip existing files:"
        }), " If template file already exists, skip generation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Report skipped files:"
        }), " Log which files were skipped"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate missing only:"
        }), " Only generate templates that don't exist"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overwrite Mode (Explicit):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "--overwrite"
          }), " flag:"]
        }), " Explicitly allow overwriting existing files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "--force"
          }), " flag:"]
        }), " Overwrite without confirmation (use with caution)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup option:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--backup"
        }), " creates backup before overwriting"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation",
      children: "Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Generation Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify structure document is parseable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify output directory exists or can be created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify no conflicting files (if overwrite disabled)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Generation Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify all generated files are valid markdown"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify file structure matches ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify placeholders are preserved correctly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cli-interface",
      children: "CLI Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "command-structure",
      children: "Command Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python generate_task_templates.py [OPTIONS]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--structure-file PATH"
        }), " - Path to structure document (default: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--template-file PATH"
        }), " - Path to task template structure (default: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK_TEMPLATE.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--output-dir PATH"
        }), " - Output directory for generated templates (default: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "templates/tasks/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--epic N"
        }), " - Generate templates for specific epic only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--story N"
        }), " - Generate templates for specific story only (requires ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--epic"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--overwrite"
        }), " - Allow overwriting existing files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " - Show what would be generated without creating files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--validate"
        }), " - Validate generated templates against concrete templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--verbose"
        }), " - Verbose output"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate all missing task templates\npython generate_task_templates.py\n\n# Generate templates for Epic 1 only\npython generate_task_templates.py --epic 1\n\n# Generate templates for Epic 1, Story 1 only\npython generate_task_templates.py --epic 1 --story 1\n\n# Dry run (show what would be generated)\npython generate_task_templates.py --dry-run\n\n# Overwrite existing templates (with backup)\npython generate_task_templates.py --overwrite --backup\n\n# Validate generated templates\npython generate_task_templates.py --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation-routine",
      children: "Validation Routine"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-against-concrete-templates",
      children: "Comparison Against Concrete Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task Coverage:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify all tasks from structure document have corresponding template files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Report missing templates"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "File Paths:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify file paths match expected pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify directory structure is correct"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Core Structural Sections:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify frontmatter matches template"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify required sections exist (Scope, Input, Deliverable, Acceptance Criteria, Approach, Dependencies)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify section order matches template"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Content Quality:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify placeholders are preserved"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify task descriptions are included"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify dependencies are correctly inferred"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Output:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report discrepancies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate diff for structural differences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide recommendations for fixes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-considerations",
      children: "Implementation Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parsing-strategy",
      children: "Parsing Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 1: Regex-Based Parsing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: Simple, no dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cons: Fragile, may break with format changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 2: Markdown Parser"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: Robust, handles edge cases"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cons: Requires dependency (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "markdown"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mistune"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Start with regex-based parsing, migrate to markdown parser if needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "content-generation",
      children: "Content Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 1: Template-Based"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Jinja2 or similar templating engine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: Flexible, easy to modify"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cons: Requires template files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 2: String Formatting"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Python string formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pros: No dependencies, simple"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cons: Less flexible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use template-based approach with Jinja2 for flexibility."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-description-enhancement",
      children: "Task Description Enhancement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current State:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structure document has minimal task descriptions (just names)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enhancement Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern Matching:"
        }), " Use task name patterns to infer content"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Template Library:"
        }), " Maintain library of task type templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI Enhancement:"
        }), " Use LLM to generate richer content (future)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Start with pattern matching and template library, consider AI enhancement later."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "error-handling",
      children: "Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parse-errors",
      children: "Parse Errors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invalid Structure:"
        }), " Report error, skip problematic epic/story/task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing Sections:"
        }), " Use defaults or report warning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format Issues:"
        }), " Report warning, attempt to recover"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generation-errors",
      children: "Generation Errors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Write Errors:"
        }), " Report error, continue with other files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Directory Creation Errors:"
        }), " Report error, abort"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation Errors:"
        }), " Report errors, provide recommendations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recovery",
      children: "Recovery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partial Generation:"
        }), " Support resuming from last successful task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup/Restore:"
        }), " Support backing up before overwrite"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback:"
        }), " Support rolling back to previous state"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "future-enhancements",
      children: "Future Enhancements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI-Enhanced Content:"
        }), " Use LLM to generate richer task descriptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom Templates:"
        }), " Support project-specific template customizations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Incremental Updates:"
        }), " Update only changed templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diff Generation:"
        }), " Generate diffs between generated and concrete templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Metrics:"
        }), " Measure quality of generated templates vs concrete templates"]
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
          disabled: true
        }), " ", "Generator can parse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Generator can create all canonical task templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Generated templates match ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK_TEMPLATE.md"
        }), " structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Generated templates preserve placeholders"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Generator supports dry-run mode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Generator supports overwrite protection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Validation routine can compare generated vs concrete templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "CLI interface is intuitive and well-documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
        }), " - Source structure document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/TASK_TEMPLATE.md"
        }), " - Task template structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/tasks/"
        }), " - Concrete task templates (reference set)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md"
        }), " - ADR"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2025-12-22 (v0.4.15.0+1 – Generator design document created)"
      })
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