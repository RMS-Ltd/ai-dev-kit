"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["41116"], {
77192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_agentic_template_generator_design_md_790_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-agentic-template-generator-design-md-790.json
var site_docs_architecture_standards_and_adrs_agentic_template_generator_design_md_790_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/agentic-template-generator-design","title":"Agentic Template Generator Design","description":"Status: IMPLEMENTED","source":"@site/../docs/architecture/standards-and-adrs/agentic-template-generator-design.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/agentic-template-generator-design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/agentic-template-generator-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/agentic-template-generator-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-22T11:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Cursor Sandbox Network Access: Issue, Environment, and Solution","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations"},"next":{"title":"AI Dev Kit Project Review (Repository Hygiene & Legacy Clean-Up)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ai-dev-kit-project-review"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/agentic-template-generator-design.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-22T11:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Agentic Template Generator Design';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Design Goals",
  "id": "design-goals",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 2
}, {
  "value": "Components",
  "id": "components",
  "level": 3
}, {
  "value": "Generation Flow",
  "id": "generation-flow",
  "level": 2
}, {
  "value": "LLM Integration",
  "id": "llm-integration",
  "level": 2
}, {
  "value": "Provider Support",
  "id": "provider-support",
  "level": 3
}, {
  "value": "Prompt Design",
  "id": "prompt-design",
  "level": 3
}, {
  "value": "Post-Processing",
  "id": "post-processing",
  "level": 2
}, {
  "value": "Error Handling",
  "id": "error-handling",
  "level": 2
}, {
  "value": "Usage Patterns",
  "id": "usage-patterns",
  "level": 2
}, {
  "value": "With LLM (Recommended)",
  "id": "with-llm-recommended",
  "level": 3
}, {
  "value": "Without LLM (Fallback)",
  "id": "without-llm-fallback",
  "level": 3
}, {
  "value": "Comparison: Procedural vs Agentic",
  "id": "comparison-procedural-vs-agentic",
  "level": 2
}, {
  "value": "Future Enhancements",
  "id": "future-enhancements",
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
    em: "em",
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
        id: "agentic-template-generator-design",
        children: "Agentic Template Generator Design"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " E4 (Kanban Framework)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " S15 (Procedural Task Template Generation and Hybrid Strategy)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " Agentic Generation Enhancement", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " E4", ":S15", ", FR-029"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The agentic template generator enhances the procedural template generator with AI/LLM capabilities to generate rich, contextual templates for Epics, Stories, and Tasks. It uses AI to understand context and generate high-quality content while maintaining a procedural fallback for reliability."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "design-goals",
      children: "Design Goals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rich Content Generation:"
        }), " Use AI to generate contextual, high-quality template content"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliability:"
        }), " Maintain procedural fallback for when LLM is unavailable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexibility:"
        }), " Support multiple LLM providers (OpenAI, Anthropic, local)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completeness:"
        }), " Generate Epic, Story, and Task templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context-Aware:"
        }), " Use Epic/Story/Task hierarchy for better content"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "components",
      children: "Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. LLMClient"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Abstraction layer for different LLM providers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports OpenAI, Anthropic, and local models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles API calls, error handling, and fallback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. AgenticTemplateGenerator"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Main generator class"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Orchestrates template generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates LLM and procedural generation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Template Generation Methods"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "generate_epic_template()"
        }), " - Epic template generation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "generate_story_template()"
        }), " - Story template generation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "generate_task_template()"
        }), " - Task template generation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Content Generation Strategies"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agentic:"
        }), " Uses LLM to generate rich content"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Procedural:"
        }), " Fallback with basic template filling"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generation-flow",
      children: "Generation Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────┐\n│  Parse Structure Document           │\n│  (COMPREHENSIVE_CANONICAL_EST...)   │\n└──────────────┬──────────────────────┘\n               │\n               ▼\n┌─────────────────────────────────────┐\n│  Load Template Structure             │\n│  (EPIC_TEMPLATE.md, etc.)           │\n└──────────────┬──────────────────────┘\n               │\n               ▼\n┌─────────────────────────────────────┐\n│  Build Context                       │\n│  (Epic/Story/Task data)              │\n└──────────────┬──────────────────────┘\n               │\n               ▼\n┌─────────────────────────────────────┐\n│  Try LLM Generation                  │\n│  (if LLM available)                  │\n└──────────────┬──────────────────────┘\n               │\n        ┌──────┴──────┐\n        │             │\n        ▼             ▼\n   Success?      Failed/None?\n        │             │\n        │             ▼\n        │    ┌────────────────────┐\n        │    │ Procedural         │\n        │    │ Fallback           │\n        │    └────────────────────┘\n        │             │\n        └──────┬───────┘\n               │\n               ▼\n┌─────────────────────────────────────┐\n│  Post-Process Template               │\n│  (Replace placeholders, format)      │\n└──────────────┬──────────────────────┘\n               │\n               ▼\n┌─────────────────────────────────────┐\n│  Write Template File                 │\n│  (or dry-run output)                │\n└─────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "llm-integration",
      children: "LLM Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "provider-support",
      children: "Provider Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenAI:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "openai"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API Key: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OPENAI_API_KEY"
        }), " env var"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Models: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gpt-4"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gpt-3.5-turbo"
        }), ", etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anthropic:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "anthropic"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API Key: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ANTHROPIC_API_KEY"
        }), " env var"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Models: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "claude-3-opus"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "claude-3-sonnet"
        }), ", etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Local:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Placeholder for local model integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Future enhancement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "None:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Procedural fallback only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No LLM required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prompt-design",
      children: "Prompt Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Template Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generate a comprehensive Epic template for:\nEpic {N}: {Name}\n\nStories in this Epic:\n- Story 1: {Name}\n- Story 2: {Name}\n...\n\nGenerate:\n1. Overview: One paragraph describing the epic's purpose, scope, and motivation\n2. Goals: 3-5 high-level goals for this epic\n3. Story summaries: Brief 1-2 sentence summaries for each story\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Template Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generate a comprehensive Story template for:\nEpic {N}: {Epic Name}\nStory {N}: {Story Name}\n\nTasks in this Story:\n- Task 1: {Description}\n- Task 2: {Description}\n...\n\nGenerate:\n1. Overview: One sentence describing what this story accomplishes\n2. Goals: 3-5 goals for this story\n3. Task summaries: Brief summaries for each task\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Template Prompt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generate a comprehensive Task template for:\nEpic {N}: {Epic Name}\nStory {N}: {Story Name}\nTask {N}: {Task Description}\n\nGenerate:\n1. Scope: Clear description of what this task accomplishes\n2. Input: What is required to start this task\n3. Deliverable: What is produced by this task\n4. Acceptance Criteria: 3-5 measurable, testable criteria\n5. Approach: Step-by-step approach (5-7 steps)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "post-processing",
      children: "Post-Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After LLM generation, templates are post-processed to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replace Placeholders:"
        }), " Ensure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{PROJECT_NAME\\}"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{PROJECT_TYPE\\}"
        }), " are preserved"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format Task IDs:"
        }), " Ensure proper ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Frontmatter:"
        }), " Ensure proper YAML frontmatter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Structure:"
        }), " Ensure template structure matches expected format"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "error-handling",
      children: "Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LLM Failures:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gracefully fall back to procedural generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log warnings but continue execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No blocking errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Generation Failures:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report errors in result object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue with other templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide detailed error messages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File System Errors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle missing directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle permission errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide clear error messages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage-patterns",
      children: "Usage Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "with-llm-recommended",
      children: "With LLM (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate Epic template with OpenAI\npython3 agentic_template_generator.py \\\n  --type epic \\\n  --epic 1 \\\n  --provider openai \\\n  --model gpt-4\n\n# Generate all templates with Anthropic\npython3 agentic_template_generator.py \\\n  --type all \\\n  --provider anthropic \\\n  --model claude-3-opus \\\n  --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "without-llm-fallback",
      children: "Without LLM (Fallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Procedural generation (no LLM)\npython3 agentic_template_generator.py \\\n  --type task \\\n  --epic 1 \\\n  --story 1 \\\n  --task 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparison-procedural-vs-agentic",
      children: "Comparison: Procedural vs Agentic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Procedural"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Agentic"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Content Quality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic, generic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich, contextual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context Awareness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dependencies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM API required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (API calls)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reliability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (API dependent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Procedural"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "future-enhancements",
      children: "Future Enhancements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local Model Support:"
        }), " Integrate local LLM models (Ollama, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caching:"
        }), " Cache LLM responses for repeated generations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batch Processing:"
        }), " Optimize API calls with batching"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Template Refinement:"
        }), " Use concrete templates as examples for few-shot learning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality Validation:"
        }), " Compare agentic vs procedural output quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost Optimization:"
        }), " Track and optimize API usage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Procedural Generator:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "generate_task_templates.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid Strategy ADR:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task-template-system-hybrid-adr.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generator Design:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task-template-generator-design.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-029:"
        }), " Procedural Task Template Generation (Hybrid Strategy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E4:S15:"
        }), " Procedural Task Template Generation and Hybrid Strategy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This design document is part of Epic 4 Story 15. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-15-procedural-task-template-generation-and-hybrid-strategy.md"
        }), " for complete story context."]
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