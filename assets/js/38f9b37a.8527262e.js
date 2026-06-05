"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["91381"], {
23239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_code_review_standards_and_guidelines_md_38f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-code-review-standards-and-guidelines-md-38f.json
var site_docs_architecture_standards_and_adrs_code_review_standards_and_guidelines_md_38f_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/code-review-standards-and-guidelines","title":"Code Review Standards and Guidelines","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/code-review-standards-and-guidelines.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/code-review-standards-and-guidelines","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-review-standards-and-guidelines","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/code-review-standards-and-guidelines.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-05T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Code Review Kanban Integration","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-review-kanban-integration"},"next":{"title":"Code Review Workflow Processes","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/code-review-workflow-processes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/code-review-standards-and-guidelines.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-05T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Code Review Standards and Guidelines';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Code Review Standards",
  "id": "code-review-standards",
  "level": 2
}, {
  "value": "Code Quality Criteria",
  "id": "code-quality-criteria",
  "level": 3
}, {
  "value": "Readability",
  "id": "readability",
  "level": 4
}, {
  "value": "Maintainability",
  "id": "maintainability",
  "level": 4
}, {
  "value": "Performance",
  "id": "performance",
  "level": 4
}, {
  "value": "Correctness",
  "id": "correctness",
  "level": 4
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 3
}, {
  "value": "Input Validation",
  "id": "input-validation",
  "level": 4
}, {
  "value": "Authentication and Authorization",
  "id": "authentication-and-authorization",
  "level": 4
}, {
  "value": "Data Protection",
  "id": "data-protection",
  "level": 4
}, {
  "value": "Vulnerability Prevention",
  "id": "vulnerability-prevention",
  "level": 4
}, {
  "value": "Testing Requirements",
  "id": "testing-requirements",
  "level": 3
}, {
  "value": "Test Coverage",
  "id": "test-coverage",
  "level": 4
}, {
  "value": "Test Quality",
  "id": "test-quality",
  "level": 4
}, {
  "value": "Test Execution",
  "id": "test-execution",
  "level": 4
}, {
  "value": "Documentation Standards",
  "id": "documentation-standards",
  "level": 3
}, {
  "value": "Code Documentation",
  "id": "code-documentation",
  "level": 4
}, {
  "value": "User Documentation",
  "id": "user-documentation",
  "level": 4
}, {
  "value": "Technical Documentation",
  "id": "technical-documentation",
  "level": 4
}, {
  "value": "Style and Formatting Guidelines",
  "id": "style-and-formatting-guidelines",
  "level": 3
}, {
  "value": "Code Style",
  "id": "code-style",
  "level": 4
}, {
  "value": "Naming Conventions",
  "id": "naming-conventions",
  "level": 4
}, {
  "value": "Code Organization",
  "id": "code-organization",
  "level": 4
}, {
  "value": "Architecture and Design Principles",
  "id": "architecture-and-design-principles",
  "level": 3
}, {
  "value": "Architectural Alignment",
  "id": "architectural-alignment",
  "level": 4
}, {
  "value": "Design Quality",
  "id": "design-quality",
  "level": 4
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 4
}, {
  "value": "Reviewer Guidelines",
  "id": "reviewer-guidelines",
  "level": 2
}, {
  "value": "Review Focus Areas",
  "id": "review-focus-areas",
  "level": 3
}, {
  "value": "Primary Focus",
  "id": "primary-focus",
  "level": 4
}, {
  "value": "Review Depth",
  "id": "review-depth",
  "level": 4
}, {
  "value": "Feedback Best Practices",
  "id": "feedback-best-practices",
  "level": 3
}, {
  "value": "Constructive Feedback",
  "id": "constructive-feedback",
  "level": 4
}, {
  "value": "Positive Reinforcement",
  "id": "positive-reinforcement",
  "level": 4
}, {
  "value": "Question-Based Feedback",
  "id": "question-based-feedback",
  "level": 4
}, {
  "value": "Communication Guidelines",
  "id": "communication-guidelines",
  "level": 3
}, {
  "value": "Review Comments",
  "id": "review-comments",
  "level": 4
}, {
  "value": "Response Expectations",
  "id": "response-expectations",
  "level": 4
}, {
  "value": "Escalation Procedures",
  "id": "escalation-procedures",
  "level": 3
}, {
  "value": "When to Escalate",
  "id": "when-to-escalate",
  "level": 4
}, {
  "value": "Resolution Approaches",
  "id": "resolution-approaches",
  "level": 4
}, {
  "value": "Review Criteria by Change Type",
  "id": "review-criteria-by-change-type",
  "level": 2
}, {
  "value": "Feature Additions",
  "id": "feature-additions",
  "level": 3
}, {
  "value": "Bug Fixes",
  "id": "bug-fixes",
  "level": 3
}, {
  "value": "Refactoring",
  "id": "refactoring",
  "level": 3
}, {
  "value": "Documentation Updates",
  "id": "documentation-updates",
  "level": 3
}, {
  "value": "Configuration Changes",
  "id": "configuration-changes",
  "level": 3
}, {
  "value": "Integration with Development Workflow",
  "id": "integration-with-development-workflow",
  "level": 2
}, {
  "value": "Pre-Review Preparation",
  "id": "pre-review-preparation",
  "level": 3
}, {
  "value": "Review Process",
  "id": "review-process",
  "level": 3
}, {
  "value": "Post-Review Actions",
  "id": "post-review-actions",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "For Authors",
  "id": "for-authors",
  "level": 3
}, {
  "value": "For Reviewers",
  "id": "for-reviewers",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Good Review Feedback",
  "id": "example-1-good-review-feedback",
  "level": 3
}, {
  "value": "Example 2: Security Review Feedback",
  "id": "example-2-security-review-feedback",
  "level": 3
}, {
  "value": "Example 3: Test Coverage Feedback",
  "id": "example-3-test-coverage-feedback",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Decision Record",
  "id": "decision-record",
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
    h4: "h4",
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
        id: "code-review-standards-and-guidelines",
        children: "Code Review Standards and Guidelines"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 7 - Codebase Maintenance and Review", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 2 - Code Review Standards and Processes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E7:S02", ":T01", " - Document code review standards and guidelines", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Maintenance Workflow Processes, Kanban Governance Policy, Release Workflow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive code review standards and guidelines"
      }), " for the AI Dev Kit project. It establishes criteria for code quality, security, testing, documentation, style, and architecture, along with guidelines for reviewers to ensure consistent, high-quality code reviews."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality First:"
        }), " Code reviews prioritize code quality, maintainability, and correctness"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Conscious:"
        }), " Reviews include security considerations and best practices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test-Driven:"
        }), " Reviews verify adequate testing coverage and quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Complete:"
        }), " Reviews ensure code is well-documented and understandable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistent Standards:"
        }), " Reviews apply consistent style and formatting guidelines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architectural Alignment:"
        }), " Reviews verify code aligns with architectural principles"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-review-standards",
      children: "Code Review Standards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-quality-criteria",
      children: "Code Quality Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "readability",
      children: "Readability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code is clear and self-documenting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Variable and function names are descriptive and meaningful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code structure is logical and easy to follow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comments explain \"why\" not \"what\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex logic is broken down into smaller, understandable pieces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can a new developer understand this code?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are naming conventions consistent?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is the code structure intuitive?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are comments helpful and necessary?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "maintainability",
      children: "Maintainability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code follows DRY (Don't Repeat Yourself) principles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functions and classes have single responsibilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code is modular and loosely coupled"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies are minimal and well-defined"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code can be extended without major refactoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is code duplication minimized?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are responsibilities clearly separated?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can this code be easily modified?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are dependencies appropriate and minimal?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "performance",
      children: "Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code performs efficiently for expected use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Algorithms and data structures are appropriate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource usage (memory, CPU, I/O) is reasonable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance-critical paths are optimized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No obvious performance bottlenecks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is performance acceptable for the use case?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are algorithms and data structures appropriate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are there obvious performance issues?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is optimization premature or necessary?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "correctness",
      children: "Correctness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code implements requirements correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge cases are handled appropriately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error handling is comprehensive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input validation is present where needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Business logic is correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does code meet requirements?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are edge cases handled?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is error handling adequate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is input validated?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is business logic correct?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "input-validation",
      children: "Input Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All user inputs are validated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input validation occurs at boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation rules are appropriate and comprehensive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Invalid inputs are handled gracefully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No trust assumptions about input sources"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are all inputs validated?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is validation comprehensive?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are validation errors handled?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are there trust assumptions?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "authentication-and-authorization",
      children: "Authentication and Authorization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authentication is required where appropriate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization checks are present and correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Permission checks occur at appropriate boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No privilege escalation vulnerabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security-sensitive operations are protected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is authentication required?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are authorization checks correct?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are permissions checked appropriately?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are security-sensitive operations protected?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "data-protection",
      children: "Data Protection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensitive data is handled securely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data encryption is used where appropriate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secrets and credentials are not hardcoded"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data transmission is secure (HTTPS, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data storage follows security best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is sensitive data protected?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are secrets handled securely?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is data transmission secure?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is data storage secure?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vulnerability-prevention",
      children: "Vulnerability Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common vulnerabilities are prevented (SQL injection, XSS, CSRF, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies are up-to-date and secure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security best practices are followed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No obvious security vulnerabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security considerations are documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are common vulnerabilities prevented?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are dependencies secure?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are security best practices followed?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are there obvious vulnerabilities?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testing-requirements",
      children: "Testing Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "test-coverage",
      children: "Test Coverage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New code includes appropriate tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical paths have comprehensive test coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge cases are tested"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error conditions are tested"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration points are tested"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is test coverage adequate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are critical paths tested?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are edge cases covered?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are error conditions tested?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "test-quality",
      children: "Test Quality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests are clear and maintainable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests are independent and isolated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests use appropriate assertions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test data is realistic and representative"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests follow testing best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are tests clear and maintainable?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are tests independent?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are assertions appropriate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is test data realistic?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "test-execution",
      children: "Test Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests pass consistently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests run in reasonable time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests are part of CI/CD pipeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test failures are actionable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flaky tests are addressed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do tests pass consistently?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are tests part of CI/CD?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are test failures actionable?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation-standards",
      children: "Documentation Standards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-documentation",
      children: "Code Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functions and classes have docstrings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex logic has inline comments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public APIs are documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation is accurate and current"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation follows project standards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is code documented appropriately?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are docstrings present and accurate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is documentation current?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does documentation follow standards?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "user-documentation",
      children: "User Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User-facing changes include documentation updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation is clear and accurate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples are provided where helpful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes are documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guides are provided when needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is user documentation updated?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is documentation clear?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are examples provided?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are breaking changes documented?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "technical-documentation",
      children: "Technical Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture changes are documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design decisions are recorded (ADRs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API changes are documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration changes are documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process changes are documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is technical documentation updated?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are design decisions documented?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are API changes documented?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "style-and-formatting-guidelines",
      children: "Style and Formatting Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-style",
      children: "Code Style"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code follows project style guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formatting is consistent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting rules are followed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Style violations are addressed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Style is automated where possible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does code follow style guide?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is formatting consistent?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are linting rules followed?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "naming-conventions",
      children: "Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naming follows project conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Names are descriptive and meaningful"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Abbreviations are used appropriately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naming is consistent across codebase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Names follow language conventions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do names follow conventions?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are names descriptive?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is naming consistent?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-organization",
      children: "Code Organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code is organized logically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related code is grouped together"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Imports are organized and minimal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File structure follows conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module boundaries are clear"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is code organized logically?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are imports organized?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does structure follow conventions?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-and-design-principles",
      children: "Architecture and Design Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "architectural-alignment",
      children: "Architectural Alignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code aligns with project architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design patterns are used appropriately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architectural principles are followed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No architectural violations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture changes are intentional"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does code align with architecture?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are design patterns appropriate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are principles followed?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are there architectural violations?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "design-quality",
      children: "Design Quality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design is appropriate for requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design is extensible and maintainable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design follows SOLID principles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design patterns are used correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design is documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is design appropriate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is design extensible?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are SOLID principles followed?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are patterns used correctly?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standards:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies are appropriate and minimal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency versions are specified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies are up-to-date and secure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Circular dependencies are avoided"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency injection is used where appropriate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Focus:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are dependencies appropriate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are versions specified?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are dependencies secure?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are circular dependencies avoided?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reviewer-guidelines",
      children: "Reviewer Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-focus-areas",
      children: "Review Focus Areas"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "primary-focus",
      children: "Primary Focus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Must Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functional correctness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security implications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test coverage and quality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical business logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error handling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Should Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code quality and readability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation completeness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance considerations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architecture alignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Style and formatting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Could Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimization opportunities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code organization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naming conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "review-depth",
      children: "Review Depth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comprehensive Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical changes (security, core functionality)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large changes (significant refactoring, new features)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex changes (algorithmic changes, architectural changes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High-risk changes (breaking changes, migrations)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Normal feature development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Light Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple bug fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor documentation updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Style-only changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trivial changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feedback-best-practices",
      children: "Feedback Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "constructive-feedback",
      children: "Constructive Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be respectful and professional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus on code, not the person"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide specific, actionable feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the \"why\" behind suggestions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Offer alternatives when appropriate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ \"This function could be simplified by extracting the validation logic into a separate function.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ \"This code is bad.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ \"Consider using a dictionary here for O(1) lookup instead of a list.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ \"This is inefficient.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "positive-reinforcement",
      children: "Positive Reinforcement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Acknowledge good practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Highlight well-designed code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encourage good patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build on strengths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ \"Great use of error handling here!\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ \"This abstraction makes the code much more maintainable.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ \"Excellent test coverage for this feature.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "question-based-feedback",
      children: "Question-Based Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ask questions to understand intent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarify requirements and assumptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explore alternatives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify edge cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify understanding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"What happens if this input is None?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Have we considered the case where the list is empty?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Would it make sense to extract this into a utility function?\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "communication-guidelines",
      children: "Communication Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "review-comments",
      children: "Review Comments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be clear and concise"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use appropriate tone"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to relevant documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use code examples when helpful"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blocking:"
        }), " Issues that must be addressed before merge"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Suggestions:"
        }), " Improvements that are recommended but not required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Questions:"
        }), " Clarifications needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Praise:"
        }), " Recognition of good practices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "response-expectations",
      children: "Response Expectations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidelines:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Respond to all comments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address blocking issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider suggestions thoughtfully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ask for clarification when needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update reviewers on changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blocking Issues:"
        }), " Address within 1-2 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Suggestions:"
        }), " Address within 3-5 days"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Questions:"
        }), " Respond within 1 day"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow-ups:"
        }), " Respond within 2 days"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "escalation-procedures",
      children: "Escalation Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "when-to-escalate",
      children: "When to Escalate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Escalate When:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security concerns are identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architectural violations are significant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code quality is severely compromised"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements are unclear or conflicting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review is blocked by external factors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Escalation Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document the concern clearly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag appropriate stakeholders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide context and impact assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propose resolution options"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow up on resolution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "resolution-approaches",
      children: "Resolution Approaches"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Direct Discussion:"
        }), " Discuss with author directly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Team Discussion:"
        }), " Bring to team for input"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architecture Review:"
        }), " Escalate to architecture team"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Review:"
        }), " Escalate to security team"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Product Review:"
        }), " Escalate to product team"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review-criteria-by-change-type",
      children: "Review Criteria by Change Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-additions",
      children: "Feature Additions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Focus Areas:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requirements are met"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design is appropriate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests are comprehensive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation is updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration is correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Questions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does this feature meet the requirements?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is the design appropriate and extensible?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are edge cases handled?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is documentation updated?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does it integrate correctly with existing code?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Focus Areas:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root cause is addressed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix is correct and complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests cover the bug and prevent regression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No new bugs introduced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation is updated if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Questions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does this fix address the root cause?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are tests added to prevent regression?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Could this fix introduce new bugs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is the fix complete?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "refactoring",
      children: "Refactoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Focus Areas:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functionality is preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code quality is improved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests still pass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No performance regressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation is updated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Questions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is functionality preserved?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is code quality improved?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do all tests still pass?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are there performance regressions?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation-updates",
      children: "Documentation Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Focus Areas:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation is accurate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation is clear"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples are correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Links are valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formatting is correct"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Questions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is documentation accurate?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is it clear and understandable?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are examples correct?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are links valid?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-changes",
      children: "Configuration Changes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Focus Areas:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration is correct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changes are documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impact is understood"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback is possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security is considered"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Questions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is configuration correct?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Are changes documented?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is impact understood?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can changes be rolled back?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-with-development-workflow",
      children: "Integration with Development Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-review-preparation",
      children: "Pre-Review Preparation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Author Responsibilities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code is complete and tested"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests pass locally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation is updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code follows style guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-review is completed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reviewer Preparation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the change context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review related documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for related changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-process",
      children: "Review Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initial Review:"
        }), " Quick pass for overall understanding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detailed Review:"
        }), " Thorough examination of code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Review:"
        }), " Verify test coverage and quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Review:"
        }), " Check documentation completeness"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Final Review:"
        }), " Verify all concerns addressed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IDE/Editor for code examination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing tools for test verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting tools for style checks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security scanners for security review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation tools for doc review"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "post-review-actions",
      children: "Post-Review Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Author Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address all blocking issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider and respond to suggestions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update code based on feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-request review when ready"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reviewer Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify blocking issues are resolved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-review updated code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approve when all concerns addressed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide final feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-authors",
      children: "For Authors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before Submitting:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete self-review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run all tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix obvious issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow style guide"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "During Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Respond to feedback promptly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Address blocking issues first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider suggestions thoughtfully"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ask for clarification when needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update reviewers on progress"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After Review:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn from feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply learnings to future code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share knowledge with team"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-reviewers",
      children: "For Reviewers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review promptly (within 1-2 days)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be thorough but efficient"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus on important issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide constructive feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize good practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Quality:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand context before reviewing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check requirements and design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify tests and documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider security and performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Think about maintainability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Communication:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be respectful and professional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide specific, actionable feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain reasoning behind suggestions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ask questions to understand intent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Acknowledge good work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-good-review-feedback",
      children: "Example 1: Good Review Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def process_data(data):\n    result = []\n    for item in data:\n        if item > 0:\n            result.append(item * 2)\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Feedback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ \"Consider using a list comprehension here for better readability: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return [item * 2 for item in data if item > 0]"
        }), "\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ \"What should happen if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), "? Consider adding a None check.\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ \"Great function name - it's clear what this does!\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-security-review-feedback",
      children: "Example 2: Security Review Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "query = f\"SELECT * FROM users WHERE id = {user_id}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Feedback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Blocking:"
        }), " \"This is vulnerable to SQL injection. Use parameterized queries: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "query = 'SELECT * FROM users WHERE id = ?'"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursor.execute(query, (user_id,))"
        }), "\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ \"See our security guidelines: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/security-guidelines.md"
        }), "\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-test-coverage-feedback",
      children: "Example 3: Test Coverage Feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def calculate_total(items):\n    return sum(item.price for item in items)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review Feedback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ \"Good implementation! Consider adding tests for edge cases: empty list, None items, negative prices.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ \"Tests should verify the function handles these cases appropriately.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Workflow Processes:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/maintenance-workflow-processes.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Governance Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/release-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 7:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/epic-07.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/story-02-code-review-standards-and-processes.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision Record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Implement comprehensive code review standards covering quality, security, testing, documentation, style, and architecture, with clear reviewer guidelines."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures consistent code quality across the project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides clear criteria for reviewers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Covers all important aspects of code review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports systematic review processes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables high-quality codebase maintenance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives Considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimal standards (insufficient coverage)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool-only reviews (lacks human judgment)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ad-hoc reviews (inconsistent quality)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overly prescriptive standards (too rigid)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires initial setup and documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standards may need refinement based on experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides foundation for systematic reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables consistent, high-quality code reviews"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2026-01-05 (v0.7.2.1+0 – Code review standards and guidelines documented)"
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