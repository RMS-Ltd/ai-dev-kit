"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["67235"], {
8624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_03_additional_workflows_and_examples_t_01_workflow_taxonomy_md_aeb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-03-additional-workflows-and-examples-t-01-workflow-taxonomy-md-aeb.json
var site_docs_project_management_kanban_epics_epic_02_story_03_additional_workflows_and_examples_t_01_workflow_taxonomy_md_aeb_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-03-additional-workflows-and-examples/T01-workflow-taxonomy","title":"Workflow Taxonomy","description":"Task IDS03:T01","source":"@site/../docs/project-management/kanban/epics/epic-02/story-03-additional-workflows-and-examples/T01-workflow-taxonomy.md","sourceDirName":"project-management/kanban/epics/epic-02/story-03-additional-workflows-and-examples","slug":"/project-management/kanban/epics/epic-02/story-03-additional-workflows-and-examples/T01-workflow-taxonomy","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-03-additional-workflows-and-examples/T01-workflow-taxonomy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-03-additional-workflows-and-examples/T01-workflow-taxonomy.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Story 002 – PDCA Integration into Release Workflow","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-02-pdca-integration-into-release-workflow"},"next":{"title":"Epic 2, Story 3, Task 2: Create Refactor Workflow example","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-03-additional-workflows-and-examples/T02-create-refactor-workflow-example"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-03-additional-workflows-and-examples/T01-workflow-taxonomy.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Workflow Taxonomy';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Workflow Categories",
  "id": "workflow-categories",
  "level": 2
}, {
  "value": "1. Code Quality Workflows",
  "id": "1-code-quality-workflows",
  "level": 3
}, {
  "value": "2. Migration Workflows",
  "id": "2-migration-workflows",
  "level": 3
}, {
  "value": "3. Testing Workflows",
  "id": "3-testing-workflows",
  "level": 3
}, {
  "value": "4. Deployment Workflows",
  "id": "4-deployment-workflows",
  "level": 3
}, {
  "value": "5. Maintenance Workflows",
  "id": "5-maintenance-workflows",
  "level": 3
}, {
  "value": "Workflow Pattern Analysis",
  "id": "workflow-pattern-analysis",
  "level": 2
}, {
  "value": "Common Pattern Elements",
  "id": "common-pattern-elements",
  "level": 3
}, {
  "value": "Workflow Complexity Levels",
  "id": "workflow-complexity-levels",
  "level": 2
}, {
  "value": "Simple Workflows (3-5 steps)",
  "id": "simple-workflows-3-5-steps",
  "level": 3
}, {
  "value": "Medium Workflows (6-10 steps)",
  "id": "medium-workflows-6-10-steps",
  "level": 3
}, {
  "value": "Complex Workflows (11+ steps)",
  "id": "complex-workflows-11-steps",
  "level": 3
}, {
  "value": "Use Case Analysis",
  "id": "use-case-analysis",
  "level": 2
}, {
  "value": "Use Case 1: Code Refactoring",
  "id": "use-case-1-code-refactoring",
  "level": 3
}, {
  "value": "Use Case 2: Dependency Upgrade",
  "id": "use-case-2-dependency-upgrade",
  "level": 3
}, {
  "value": "Use Case 3: Test Suite Execution",
  "id": "use-case-3-test-suite-execution",
  "level": 3
}, {
  "value": "Workflow Selection Criteria",
  "id": "workflow-selection-criteria",
  "level": 2
}, {
  "value": "When to Use Each Workflow Type",
  "id": "when-to-use-each-workflow-type",
  "level": 3
}, {
  "value": "Workflow Template Structure",
  "id": "workflow-template-structure",
  "level": 2
}, {
  "value": "Standard Workflow Template",
  "id": "standard-workflow-template",
  "level": 3
}, {
  "value": "Integration with Agent-Driven Execution",
  "id": "integration-with-agent-driven-execution",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
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
        id: "workflow-taxonomy",
        children: "Workflow Taxonomy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E02:S03", ":T01", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E02:S03", ":T01", " – Analyze workflow types and create workflow taxonomy", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2025-12-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 3 - Additional Workflows & Examples"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document defines a taxonomy of workflow types that can be implemented using the agent-driven workflow execution pattern. The taxonomy categorizes workflows by purpose, complexity, and common use cases."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-categories",
      children: "Workflow Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-code-quality-workflows",
      children: "1. Code Quality Workflows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Maintain and improve code quality"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor Workflow:"
        }), " Systematic code refactoring with validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Review Workflow:"
        }), " Automated code review process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linting Workflow:"
        }), " Code style and quality checks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Workflow:"
        }), " Code documentation generation and updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze current state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute refactoring/documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-migration-workflows",
      children: "2. Migration Workflows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Migrate code, data, or infrastructure"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database Migration Workflow:"
        }), " Database schema migrations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency Migration Workflow:"
        }), " Upgrading dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Migration Workflow:"
        }), " Migrating between frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infrastructure Migration Workflow:"
        }), " Cloud or infrastructure changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze source and target states"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan migration strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute migration steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback plan (if needed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-testing-workflows",
      children: "3. Testing Workflows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Execute and manage testing processes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Suite Workflow:"
        }), " Run and manage test suites"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Test Workflow:"
        }), " Integration testing process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance Test Workflow:"
        }), " Performance testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Test Workflow:"
        }), " Security testing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze test requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare test environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report findings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-deployment-workflows",
      children: "4. Deployment Workflows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Deploy applications and services"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application Deployment Workflow:"
        }), " Deploy application to production"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infrastructure Deployment Workflow:"
        }), " Deploy infrastructure changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback Workflow:"
        }), " Rollback deployments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blue-Green Deployment Workflow:"
        }), " Blue-green deployment pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze deployment requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare deployment environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor and verify"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-maintenance-workflows",
      children: "5. Maintenance Workflows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Regular maintenance tasks"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency Update Workflow:"
        }), " Update project dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Patch Workflow:"
        }), " Apply security patches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cleanup Workflow:"
        }), " Clean up unused code/resources"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Archive Workflow:"
        }), " Archive old code/data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze maintenance needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan maintenance tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute maintenance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-pattern-analysis",
      children: "Workflow Pattern Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pattern-elements",
      children: "Common Pattern Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All workflows following the agent-driven execution pattern share:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ANALYZE Phase:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Understand current state"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify requirements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assess constraints"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "DETERMINE Phase:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Decide on approach"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Plan steps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify dependencies"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "EXECUTE Phase:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Perform actions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Make changes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update state"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "VALIDATE Phase:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check outcomes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate changes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "PROCEED Phase:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Move to next step"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete workflow"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-complexity-levels",
      children: "Workflow Complexity Levels"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "simple-workflows-3-5-steps",
      children: "Simple Workflows (3-5 steps)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single purpose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimal dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quick execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation Generation Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple Test Workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medium-workflows-6-10-steps",
      children: "Medium Workflows (6-10 steps)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple phases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some parallel execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Moderate dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Medium execution time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refactor Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration Test Workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complex-workflows-11-steps",
      children: "Complex Workflows (11+ steps)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple phases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallel and sequential steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Long execution time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow (13 steps)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full Deployment Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete Migration Workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-analysis",
      children: "Use Case Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-1-code-refactoring",
      children: "Use Case 1: Code Refactoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Refactor a module to improve structure and maintainability"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Type:"
      }), " Code Quality - Refactor Workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze current code structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan refactoring approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create refactoring branch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute refactoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create pull request"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review and merge"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-2-dependency-upgrade",
      children: "Use Case 2: Dependency Upgrade"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Upgrade a major dependency version"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Type:"
      }), " Migration - Dependency Migration Workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze current dependency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan upgrade strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update dependency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run test suite"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-3-test-suite-execution",
      children: "Use Case 3: Test Suite Execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Run comprehensive test suite before release"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Type:"
      }), " Testing - Test Suite Workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze test requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare test environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run unit tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run integration tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run e2e tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate test report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document results"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-selection-criteria",
      children: "Workflow Selection Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-each-workflow-type",
      children: "When to Use Each Workflow Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Quality Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improving code structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintaining code standards"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updating documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Moving between versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upgrading infrastructure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validating changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensuring quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployment Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Releasing to production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Infrastructure changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance Workflows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regular updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security patches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cleanup tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workflow-template-structure",
      children: "Workflow Template Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standard-workflow-template",
      children: "Standard Workflow Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: [Workflow Name]\nversion: 1.0.0\ntype: [workflow_type]\ndescription: [Description]\n\nconfig:\n  # Workflow-level configuration\n\nsteps:\n  - id: step-1\n    name: [Step Name]\n    type: [step_type]\n    handler: [handler_function]\n    required: true\n    dependencies: []\n    config:\n      # Step-specific configuration\n\nparameters:\n  - name: [parameter_name]\n    type: [parameter_type]\n    required: true\n    description: [Description]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-with-agent-driven-execution",
      children: "Integration with Agent-Driven Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All workflows in this taxonomy follow the agent-driven execution pattern:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent analyzes"
        }), " each step before executing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent determines"
        }), " appropriate actions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent executes"
        }), " actions intelligently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent validates"
        }), " results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent documents"
        }), " and proceeds"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This ensures workflows adapt to project context and handle edge cases intelligently."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Based on this taxonomy, the following workflow examples will be created:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor Workflow"
        }), " (Code Quality)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Workflow"
        }), " (Migration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing Workflow"
        }), " (Testing)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each will include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete YAML definition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent execution guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples and use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customization guidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent-Driven Execution:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow YAML:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/release-workflow.yaml"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This taxonomy serves as the foundation for creating additional workflow examples."
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