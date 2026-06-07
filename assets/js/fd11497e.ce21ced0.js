"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["9551"], {
9645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_templates_story_pir_template_md_fd1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-templates-story-pir-template-md-fd1.json
var site_docs_documentation_templates_story_pir_template_md_fd1_namespaceObject = JSON.parse('{"id":"documentation/templates/story-pir-template","title":"Post-Implementation Review: Story &lbrace;N&rbrace;","description":"Story: &lbrace;Story Name&rbrace;","source":"@site/../docs/documentation/templates/story-pir-template.md","sourceDirName":"documentation/templates","slug":"/documentation/templates/story-pir-template","permalink":"/ai-dev-kit/docs/documentation/templates/story-pir-template","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/templates/story-pir-template.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":["YYYY-MM-DD"],"expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Post-Implementation Review: Epic &lbrace;N&rbrace;","permalink":"/ai-dev-kit/docs/documentation/templates/epic-pir-template"},"next":{"title":"Existing Project Rollout Checklist","permalink":"/ai-dev-kit/docs/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/templates/story-pir-template.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: [
		'YYYY-MM-DD'
	],
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Post-Implementation Review: Story {N}';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Goals Assessment",
  "id": "goals-assessment",
  "level": 2
}, {
  "value": "Tasks Review",
  "id": "tasks-review",
  "level": 2
}, {
  "value": "Task {N}: {Task Name}",
  "id": "task-n-task-name",
  "level": 3
}, {
  "value": "Technical Assessment",
  "id": "technical-assessment",
  "level": 2
}, {
  "value": "Implementation Approach",
  "id": "implementation-approach",
  "level": 3
}, {
  "value": "Code Quality",
  "id": "code-quality",
  "level": 3
}, {
  "value": "Documentation",
  "id": "documentation",
  "level": 3
}, {
  "value": "Testing",
  "id": "testing",
  "level": 3
}, {
  "value": "Lessons Learned",
  "id": "lessons-learned",
  "level": 2
}, {
  "value": "What Went Well",
  "id": "what-went-well",
  "level": 3
}, {
  "value": "What Could Be Improved",
  "id": "what-could-be-improved",
  "level": 3
}, {
  "value": "Patterns Identified",
  "id": "patterns-identified",
  "level": 3
}, {
  "value": "Anti-Patterns Identified",
  "id": "anti-patterns-identified",
  "level": 3
}, {
  "value": "Follow-Up Actions",
  "id": "follow-up-actions",
  "level": 2
}, {
  "value": "Knowledge Capture",
  "id": "knowledge-capture",
  "level": 2
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 3
}, {
  "value": "Lessons for Future Stories",
  "id": "lessons-for-future-stories",
  "level": 3
}, {
  "value": "Documentation Recommendations",
  "id": "documentation-recommendations",
  "level": 3
}, {
  "value": "Metrics",
  "id": "metrics",
  "level": 2
}, {
  "value": "Related Work",
  "id": "related-work",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "post-implementation-review-story-n",
        children: "Post-Implementation Review: Story {N}"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " {Story Name}", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " {Epic Name}", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Date:"
      }), " {YYYY-MM-DD}", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reviewer:"
      }), " {Name/Username}", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " {Version}", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PIR Version:"
      }), " 1.0.0"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[One paragraph summary of Story outcomes, key achievements, and overall assessment]"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goals-assessment",
      children: "Goals Assessment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Goal 1:"
          }), " {Goal Description}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Status:"
            }), " {Achieved/Partially Achieved/Not Achieved}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Assessment:"
            }), " {Detailed assessment of goal achievement}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Evidence:"
            }), " {Supporting evidence or metrics}"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Goal 2:"
          }), " {Goal Description}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Status:"
            }), " {Achieved/Partially Achieved/Not Achieved}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Assessment:"
            }), " {Detailed assessment of goal achievement}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Evidence:"
            }), " {Supporting evidence or metrics}"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tasks-review",
      children: "Tasks Review"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[Review each Task in the Story]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-n-task-name",
      children: "Task {N}: {Task Name}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " COMPLETE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version:"
        }), " {Version}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality:"
        }), " {Excellent/Good/Satisfactory/Needs Improvement}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Findings:"
        }), " {Summary of task outcomes}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverables:"
        }), " {List deliverables}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issues Encountered:"
        }), " {List any issues or blockers}"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "technical-assessment",
      children: "Technical Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-approach",
      children: "Implementation Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "{Description of the technical approach taken for this Story}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach:"
        }), " {Description}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " {Why this approach was chosen}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternatives Considered:"
        }), " {Other approaches considered}"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-quality",
      children: "Code Quality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overall Assessment:"
        }), " {Excellent/Good/Satisfactory/Needs Improvement}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Review Coverage:"
        }), " {Percentage or description}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Debt Introduced:"
        }), " {Description of any technical debt}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Quality Metrics:"
        }), " {Any metrics available}"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation",
      children: "Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completeness:"
        }), " {Excellent/Good/Satisfactory/Needs Improvement}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Created:"
        }), " {List key documents}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Gaps:"
        }), " {Any gaps identified}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Quality:"
        }), " {Assessment}"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testing",
      children: "Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Coverage:"
        }), " {Percentage or description}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Quality:"
        }), " {Excellent/Good/Satisfactory/Needs Improvement}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Types:"
        }), " {Unit/Integration/E2E/etc.}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Results:"
        }), " {Summary of test outcomes}"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lessons-learned",
      children: "Lessons Learned"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-went-well",
      children: "What Went Well"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Item 1: Description of what worked well and why}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Item 2: Description of what worked well and why}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Item 3: Description of what worked well and why}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-could-be-improved",
      children: "What Could Be Improved"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Item 1: Description of what could be improved and how}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Item 2: Description of what could be improved and how}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Item 3: Description of what could be improved and how}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "patterns-identified",
      children: "Patterns Identified"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern 1:"
        }), " {Description of pattern}", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Context:"
            }), " {When/where this pattern appears}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Value:"
            }), " {Why this pattern is valuable}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " {How to leverage this pattern}"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anti-patterns-identified",
      children: "Anti-Patterns Identified"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anti-Pattern 1:"
        }), " {Description of anti-pattern}", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Context:"
            }), " {When/where this anti-pattern appears}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact:"
            }), " {Negative impact of this anti-pattern}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation:"
            }), " {How to avoid this anti-pattern}"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "follow-up-actions",
      children: "Follow-Up Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[Actions identified during review that should be tracked as Kanban tasks]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Action 1:"
          }), " {Description}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " {High/Medium/Low}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Owner:"
            }), " {Assigned to}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Related Work:"
            }), " {Link to related Epic/Story/Task}"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            disabled: true
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Action 2:"
          }), " {Description}"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority:"
            }), " {High/Medium/Low}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Owner:"
            }), " {Assigned to}"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Related Work:"
            }), " {Link to related Epic/Story/Task}"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledge-capture",
      children: "Knowledge Capture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[Key knowledge items to preserve for future reference]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Best practice 1: Description and context}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Best practice 2: Description and context}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lessons-for-future-stories",
      children: "Lessons for Future Stories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Lesson 1: Description and application}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Lesson 2: Description and application}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation-recommendations",
      children: "Documentation Recommendations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Recommendation 1: What documentation should be created/updated}"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{Recommendation 2: What documentation should be created/updated}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metrics",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duration:"
        }), " {Start Date} to {End Date}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tasks Completed:"
        }), " {Count} / {Total}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versions Released:"
        }), " {Count} (Range: {Start Version} to {End Version})"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time to Completion:"
        }), " {Duration in days/weeks}"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic:"
        }), " Template path under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project-management/kanban/epics/Epic-\\{N\\}/Epic-\\{N\\}.md"
        }), " (replace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{N\\}"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story:"
        }), " Template path: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project-management/kanban/epics/Epic-\\{N\\}/Story-\\{N\\}-\\{name\\}.md"
        }), " (replace placeholders; avoid raw ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{N\\}"
        }), " in link targets)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tasks:"
        }), " {Links to all tasks in Story}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Related PIRs:"
        }), " {Links to any related PIR reports}"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow-Up Tasks:"
        }), " {Links to Kanban tasks created from this PIR}"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Analysis/PIR-workflow-planning.md",
          children: "PIR Workflow Planning (source)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/pir-workflow-reference.md",
          children: "PIR Workflow Reference (source)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md",
          children: "Release Workflow (source)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy this template when creating a Story PIR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fill in all relevant sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Story document with PIR summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create follow-up Kanban tasks for identified actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link PIR to Story document bidirectionally"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This template is part of the Workflow Management Framework. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/"
        }), " for complete framework documentation."]
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