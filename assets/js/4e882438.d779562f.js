"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["4510"], {
1241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_framework_dependency_use_cases_md_4e8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-framework-dependency-use-cases-md-4e8.json
var site_docs_documentation_user_docs_framework_dependency_use_cases_md_4e8_namespaceObject = JSON.parse('{"id":"documentation/user-docs/framework-dependency-use-cases","title":"Framework Dependency Use Cases","description":"Status: Active","source":"@site/../docs/documentation/user-docs/framework-dependency-use-cases.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/framework-dependency-use-cases","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/framework-dependency-use-cases.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2025-12-07T14:30:00Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Dependency Usage Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-usage-guide"},"next":{"title":"GitHub Issue install sign-off","permalink":"/ai-dev-kit/docs/documentation/user-docs/github-issue-install-signoff"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/framework-dependency-use-cases.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2025-12-07T14:30:00Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Dependency Use Cases';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Canonical first-run pointer",
  "id": "canonical-first-run-pointer",
  "level": 3
}, {
  "value": "Primary Use Cases",
  "id": "primary-use-cases",
  "level": 2
}, {
  "value": "Use Case 1: Template → All Packages",
  "id": "use-case-1-template--all-packages",
  "level": 3
}, {
  "value": "Use Case 2: Template → Some Packages",
  "id": "use-case-2-template--some-packages",
  "level": 3
}, {
  "value": "Use Case 3: Existing Project → All Packages",
  "id": "use-case-3-existing-project--all-packages",
  "level": 3
}, {
  "value": "Use Case 4: Existing Project → Some Packages",
  "id": "use-case-4-existing-project--some-packages",
  "level": 3
}, {
  "value": "Additional Use Cases",
  "id": "additional-use-cases",
  "level": 2
}, {
  "value": "Use Case 5: Reference/Learning Only",
  "id": "use-case-5-referencelearning-only",
  "level": 3
}, {
  "value": "Use Case 6: Monorepo/Multi-Project Setup",
  "id": "use-case-6-monorepomulti-project-setup",
  "level": 3
}, {
  "value": "Use Case 7: Gradual/Migratory Adoption",
  "id": "use-case-7-gradualmigratory-adoption",
  "level": 3
}, {
  "value": "Use Case 8: Fork and Customize",
  "id": "use-case-8-fork-and-customize",
  "level": 3
}, {
  "value": "Use Case 9: Non-GitHub Git Repositories",
  "id": "use-case-9-non-github-git-repositories",
  "level": 3
}, {
  "value": "Use Case 10: Local-Only Projects",
  "id": "use-case-10-local-only-projects",
  "level": 3
}, {
  "value": "Use Case 11: CI/CD Only Usage",
  "id": "use-case-11-cicd-only-usage",
  "level": 3
}, {
  "value": "Use Case 12: Educational/Training Context",
  "id": "use-case-12-educationaltraining-context",
  "level": 3
}, {
  "value": "Use Case Selection Matrix",
  "id": "use-case-selection-matrix",
  "level": 2
}, {
  "value": "Version Updates Across All Use Cases",
  "id": "version-updates-across-all-use-cases",
  "level": 2
}, {
  "value": "Choosing Your Use Case",
  "id": "choosing-your-use-case",
  "level": 2
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}, {
  "value": "Support",
  "id": "support",
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
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "framework-dependency-use-cases",
        children: "Framework Dependency Use Cases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 5 - Documentation Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 4 - Framework Documentation Management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E05:S04", ":T05", " - Create comprehensive user documentation for Epic 6 framework dependency architecture"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides a comprehensive overview of all use cases for adopting ai-dev-kit frameworks. It helps users identify which adoption pattern best fits their needs and provides guidance on implementation approaches."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-first-run-pointer",
      children: "Canonical first-run pointer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a new/template repository following the current greenfield-first policy (FR-080 / E6:S09", ":T01", "), start with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md",
          children: "IPW-E6S9T1"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For brownfield modular integration boundaries, see:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories",
          children: "INSTALL_IN_YOUR_PROJECT.md — Brownfield adoption"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md",
          children: "ADR-003"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/FR-081-brownfield-modular-adopter-integration.md",
          children: "FR-081"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md",
          children: "IPP-E6S9T2"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "primary-use-cases",
      children: "Primary Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-1-template--all-packages",
      children: "Use Case 1: Template → All Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Create a new GitHub project using ai-dev-kit as a template, installing all bundled packages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Starting a new project from scratch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want complete ai-dev-kit structure and all frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need full KB organization, workflows, and tooling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Book readers following complete setup"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete starting structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All frameworks pre-configured"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full KB organization included"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ready to use immediately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All frameworks benefit from version updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create repository from ai-dev-kit template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All frameworks included automatically"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide",
          children: "Post-Template Setup Guide"
        }), " to customize"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receive updates for all frameworks via version numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#alternative-use-ai-dev-kit-as-a-github-template",
          children: "Installation Guide - Template Usage"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide",
          children: "Post-Template Setup Guide"
        }), " - Essential customization steps"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-2-template--some-packages",
      children: "Use Case 2: Template → Some Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Create a new GitHub project using ai-dev-kit as a template, installing one or more (but not all) bundled packages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Starting a new project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only need specific frameworks (e.g., just Kanban, or Kanban + Versioning)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want KB structure but not all frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefer selective adoption"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete KB structure included"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only install what you need"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customize to your requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Selected frameworks benefit from version updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create repository from ai-dev-kit template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove unused frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep only frameworks you need"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receive updates for selected frameworks via version numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#alternative-use-ai-dev-kit-as-a-github-template",
          children: "Installation Guide - Template Usage"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#selective-framework-installation",
          children: "Installation Guide - Selective Installation"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-3-existing-project--all-packages",
      children: "Use Case 3: Existing Project → All Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Install all ai-dev-kit packages into a pre-existing GitHub project."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have an existing project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want to adopt all ai-dev-kit frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need to integrate with existing structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrating from manual processes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add frameworks to existing project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate with current workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All frameworks benefit from version updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain existing project structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install frameworks using Git submodules, CLI tool, or package managers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate with existing project structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure frameworks for your project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receive updates for all frameworks via version numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#installation-methods",
          children: "Installation Guide - Installation Methods"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
          children: "Integration Guide"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-4-existing-project--some-packages",
      children: "Use Case 4: Existing Project → Some Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Install one or more (but not all) ai-dev-kit packages into a pre-existing GitHub project."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have an existing project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only need specific frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradual adoption approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Selective framework integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add only what you need"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incremental adoption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flexible integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Selected frameworks benefit from version updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install selected frameworks using preferred method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate with existing project structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add more frameworks as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receive updates for installed frameworks via version numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#installation-methods",
          children: "Installation Guide - Installation Methods"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide#selective-framework-adoption",
          children: "Integration Guide - Selective Adoption"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-use-cases",
      children: "Additional Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-5-referencelearning-only",
      children: "Use Case 5: Reference/Learning Only"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Use ai-dev-kit documentation, examples, and patterns without installing frameworks as dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learning AI-assisted development practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Studying framework patterns and approaches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copying specific templates or snippets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference material for project planning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No dependency management overhead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Study patterns without commitment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy specific components as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Educational and research purposes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browse documentation and examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy templates or code snippets manually"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Study patterns and best practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No installation required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See framework READMEs in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/README.md",
          children: "Architecture overview"
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/kb-structure-overview.md",
          children: "KB structure / integration pointers"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/tree/main/packages/frameworks",
          children: "Framework Templates (repository)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-6-monorepomulti-project-setup",
      children: "Use Case 6: Monorepo/Multi-Project Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Single ai-dev-kit installation shared across multiple projects in a monorepo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Managing multiple related projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want centralized framework management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need version consistency across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monorepo architecture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single installation point"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Centralized framework management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version consistency across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shared KB structure (optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install frameworks at monorepo root"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects reference shared frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Centralized update management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All projects benefit from updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#monorepo-setup",
          children: "Installation Guide - Monorepo Setup"
        }), " (to be added)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide#monorepo-integration",
          children: "Integration Guide - Multi-Project"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-7-gradualmigratory-adoption",
      children: "Use Case 7: Gradual/Migratory Adoption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Start with one framework, add more over time, or migrate from copy-paste to dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing frameworks before full adoption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrating from copy-paste approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incremental workflow improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Risk-averse adoption strategy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low-risk adoption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test before committing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradual workflow improvement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid approach during transition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with one framework (e.g., Kanban)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test and validate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add more frameworks incrementally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate from copy-paste as needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide#migration-from-copy-paste-to-dependencies",
          children: "Integration Guide - Migration from Copy-Paste"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide#gradual-adoption",
          children: "Integration Guide - Gradual Adoption"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-8-fork-and-customize",
      children: "Use Case 8: Fork and Customize"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Fork the entire ai-dev-kit repository for heavy customization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need significant framework modifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organization-specific requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want to maintain custom versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not planning to use automatic updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full control over frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom modifications allowed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organization-specific adaptations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Independent versioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Considerations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "May not benefit from automatic updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires maintaining fork"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More maintenance overhead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider contributing back to upstream"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.github.com/en/get-started/quickstart/fork-a-repo",
          children: "GitHub Forking Guide"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CONTRIBUTING.md",
          children: "Contributing Guidelines"
        }), " (if exists)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-9-non-github-git-repositories",
      children: "Use Case 9: Non-GitHub Git Repositories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Use ai-dev-kit frameworks in GitLab, Bitbucket, or self-hosted Git repositories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using GitLab, Bitbucket, or other Git hosts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-hosted Git infrastructure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organization-specific Git hosting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works with any Git repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same dependency mechanisms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework updates still available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flexible hosting options"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template feature may not be available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual setup required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "May need to adapt instructions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Git submodules (works with any Git host)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual template setup if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow installation guide (adapt for your Git host)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receive updates via Git tags"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#method-1-git-submodules-phase-1---available-now",
          children: "Installation Guide - Git Submodules"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-faq#can-i-use-frameworks-with-non-github-repositories",
          children: "FAQ - Non-GitHub Repositories"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-10-local-only-projects",
      children: "Use Case 10: Local-Only Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Use frameworks in local Git repository without remote repository."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Personal projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local development only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No remote collaboration needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Privacy/security requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No remote repository required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local-only development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full framework functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Privacy and security"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No remote backup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No collaboration features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual update process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No CI/CD integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize local Git repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install frameworks using Git submodules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work locally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual updates as needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#setting-up-a-git-repository",
          children: "Installation Guide - Local Setup"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-11-cicd-only-usage",
      children: "Use Case 11: CI/CD Only Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Use frameworks in build/CI processes without local development installation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frameworks used only in automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD pipeline integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build-time framework usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frameworks in automation only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No local development overhead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated workflow integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build-time framework usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install frameworks in CI/CD environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use frameworks in build scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated workflow execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework updates in CI/CD"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide#cicd-integration",
          children: "Integration Guide - CI/CD Integration"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "See framework-specific CI/CD examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-12-educationaltraining-context",
      children: "Use Case 12: Educational/Training Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Use ai-dev-kit for teaching, workshops, or training materials."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Teaching AI-assisted development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workshop/training materials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Students following book examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Educational consistency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent starting point"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template for all students"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standardized examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use template for all students"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide standardized setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent learning environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Easy updates for course materials"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#alternative-use-ai-dev-kit-as-a-github-template",
          children: "Installation Guide - Template Usage"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "Installation Guide — getting started"
        }), " (closest quick-start coverage today)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-selection-matrix",
      children: "Use Case Selection Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New Project"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Existing Project"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "All Frameworks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Some Frameworks"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Template Available"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Remote Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1. Template → All"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2. Template → Some"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3. Existing → All"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4. Existing → Some"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5. Reference Only"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6. Monorepo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7. Gradual Adoption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8. Fork & Customize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "9. Non-GitHub Git"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10. Local Only"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "11. CI/CD Only"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "12. Educational"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-updates-across-all-use-cases",
      children: "Version Updates Across All Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " All use cases (except Use Case 5: Reference Only and Use Case 8: Fork & Customize) benefit from version-based framework updates:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic Update Notifications:"
        }), " When frameworks are updated, you receive notifications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Pinning:"
        }), " Pin to specific framework versions for stability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Control:"
        }), " Choose when to update frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Tracking:"
        }), " Track which framework versions you're using"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Guides:"
        }), " Get guidance for major version updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Mechanisms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Git submodules: Update via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git submodule update"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CLI tool: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit update <framework>"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package managers: Standard update commands (npm update, pip install --upgrade)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "choosing-your-use-case",
      children: "Choosing Your Use Case"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Start Here:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New project?"
        }), " → Consider Use Cases 1 or 2 (Template)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existing project?"
        }), " → Consider Use Cases 3 or 4 (Install into existing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Just learning?"
        }), " → Use Case 5 (Reference Only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple projects?"
        }), " → Use Case 6 (Monorepo)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Want to test first?"
        }), " → Use Case 7 (Gradual Adoption)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Then:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the use case details above"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the implementation steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the linked documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with one framework, expand as needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "Installation Guide"
        }), " - Detailed installation instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-usage-guide",
          children: "Usage Guide"
        }), " - How to use installed frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
          children: "Integration Guide"
        }), " - Integrating frameworks into projects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-faq",
          children: "FAQ"
        }), " - Frequently asked questions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-cli-reference",
          children: "CLI Reference"
        }), " - CLI tool commands"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "support",
      children: "Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you're unsure which use case fits your needs, or need help implementing a specific use case:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review this document and related guides"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-faq",
          children: "FAQ"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open an issue on ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/issues",
          children: "GitHub"
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