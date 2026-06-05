"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["63692"], {
56026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_framework_dependency_faq_md_943_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-framework-dependency-faq-md-943.json
var site_docs_documentation_user_docs_framework_dependency_faq_md_943_namespaceObject = JSON.parse('{"id":"documentation/user-docs/framework-dependency-faq","title":"Framework Dependency FAQ","description":"Status: Active","source":"@site/../docs/documentation/user-docs/framework-dependency-faq.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/framework-dependency-faq","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-faq","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/framework-dependency-faq.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-07T11:40:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Dependency CLI Reference","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-cli-reference"},"next":{"title":"Framework Dependency Installation Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/framework-dependency-faq.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-07T11:40:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Dependency FAQ';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Scope (greenfield vs brownfield)",
  "id": "scope-greenfield-vs-brownfield",
  "level": 3
}, {
  "value": "General Questions",
  "id": "general-questions",
  "level": 2
}, {
  "value": "What is the difference between copy-paste and dependency-based installation?",
  "id": "what-is-the-difference-between-copy-paste-and-dependency-based-installation",
  "level": 3
}, {
  "value": "Which installation method should I use?",
  "id": "which-installation-method-should-i-use",
  "level": 3
}, {
  "value": "Can I use frameworks without installing as dependencies?",
  "id": "can-i-use-frameworks-without-installing-as-dependencies",
  "level": 3
}, {
  "value": "Do I need to install all frameworks?",
  "id": "do-i-need-to-install-all-frameworks",
  "level": 3
}, {
  "value": "Use Case Questions",
  "id": "use-case-questions",
  "level": 2
}, {
  "value": "What are the different ways I can use ai-dev-kit frameworks?",
  "id": "what-are-the-different-ways-i-can-use-ai-dev-kit-frameworks",
  "level": 3
}, {
  "value": "Which use case should I choose?",
  "id": "which-use-case-should-i-choose",
  "level": 3
}, {
  "value": "Can I use frameworks with non-GitHub repositories?",
  "id": "can-i-use-frameworks-with-non-github-repositories",
  "level": 3
}, {
  "value": "Can I use frameworks in a local-only project (no remote repository)?",
  "id": "can-i-use-frameworks-in-a-local-only-project-no-remote-repository",
  "level": 3
}, {
  "value": "Can I use frameworks in a monorepo with multiple projects?",
  "id": "can-i-use-frameworks-in-a-monorepo-with-multiple-projects",
  "level": 3
}, {
  "value": "Can I start with one framework and add more later?",
  "id": "can-i-start-with-one-framework-and-add-more-later",
  "level": 3
}, {
  "value": "Can I use frameworks for learning without installing?",
  "id": "can-i-use-frameworks-for-learning-without-installing",
  "level": 3
}, {
  "value": "Installation Questions",
  "id": "installation-questions",
  "level": 2
}, {
  "value": "How do I install frameworks in a new project?",
  "id": "how-do-i-install-frameworks-in-a-new-project",
  "level": 3
}, {
  "value": "Can I install frameworks in an existing project?",
  "id": "can-i-install-frameworks-in-an-existing-project",
  "level": 3
}, {
  "value": "What are the system requirements?",
  "id": "what-are-the-system-requirements",
  "level": 3
}, {
  "value": "Do I need to update paths after installation?",
  "id": "do-i-need-to-update-paths-after-installation",
  "level": 3
}, {
  "value": "Update Questions",
  "id": "update-questions",
  "level": 2
}, {
  "value": "How do I know when frameworks are updated?",
  "id": "how-do-i-know-when-frameworks-are-updated",
  "level": 3
}, {
  "value": "Should I update immediately when notified?",
  "id": "should-i-update-immediately-when-notified",
  "level": 3
}, {
  "value": "What if an update breaks my project?",
  "id": "what-if-an-update-breaks-my-project",
  "level": 3
}, {
  "value": "Can I pin frameworks to specific versions?",
  "id": "can-i-pin-frameworks-to-specific-versions",
  "level": 3
}, {
  "value": "Configuration Questions",
  "id": "configuration-questions",
  "level": 2
}, {
  "value": "Where is the configuration file?",
  "id": "where-is-the-configuration-file",
  "level": 3
}, {
  "value": "How do I configure update notifications?",
  "id": "how-do-i-configure-update-notifications",
  "level": 3
}, {
  "value": "Can I use different backends for different frameworks?",
  "id": "can-i-use-different-backends-for-different-frameworks",
  "level": 3
}, {
  "value": "Version Questions",
  "id": "version-questions",
  "level": 2
}, {
  "value": "What versioning scheme do frameworks use?",
  "id": "what-versioning-scheme-do-frameworks-use",
  "level": 3
}, {
  "value": "How do I check framework versions?",
  "id": "how-do-i-check-framework-versions",
  "level": 3
}, {
  "value": "What if frameworks have version conflicts?",
  "id": "what-if-frameworks-have-version-conflicts",
  "level": 3
}, {
  "value": "Git Submodule Questions",
  "id": "git-submodule-questions",
  "level": 2
}, {
  "value": "How do I update Git submodules?",
  "id": "how-do-i-update-git-submodules",
  "level": 3
}, {
  "value": "What if submodule is not initialized?",
  "id": "what-if-submodule-is-not-initialized",
  "level": 3
}, {
  "value": "Can I use Git subtrees instead of submodules?",
  "id": "can-i-use-git-subtrees-instead-of-submodules",
  "level": 3
}, {
  "value": "CLI Tool Questions",
  "id": "cli-tool-questions",
  "level": 2
}, {
  "value": "When will the CLI tool be available?",
  "id": "when-will-the-cli-tool-be-available",
  "level": 3
}, {
  "value": "How do I install the CLI tool?",
  "id": "how-do-i-install-the-cli-tool",
  "level": 3
}, {
  "value": "What if CLI command is not found?",
  "id": "what-if-cli-command-is-not-found",
  "level": 3
}, {
  "value": "Framework Functionality Questions",
  "id": "framework-functionality-questions",
  "level": 2
}, {
  "value": "How do I use the Release Workflow (RW)?",
  "id": "how-do-i-use-the-release-workflow-rw",
  "level": 3
}, {
  "value": "What if RW fails validation?",
  "id": "what-if-rw-fails-validation",
  "level": 3
}, {
  "value": "How do I enable the &quot;RW&quot; trigger in Cursor?",
  "id": "how-do-i-enable-the-rw-trigger-in-cursor",
  "level": 3
}, {
  "value": "How do I update Kanban documentation?",
  "id": "how-do-i-update-kanban-documentation",
  "level": 3
}, {
  "value": "Migration Questions",
  "id": "migration-questions",
  "level": 2
}, {
  "value": "How do I migrate from copy-paste to dependencies?",
  "id": "how-do-i-migrate-from-copy-paste-to-dependencies",
  "level": 3
}, {
  "value": "Will my customizations be lost?",
  "id": "will-my-customizations-be-lost",
  "level": 3
}, {
  "value": "Can I migrate gradually?",
  "id": "can-i-migrate-gradually",
  "level": 3
}, {
  "value": "CI/CD Questions",
  "id": "cicd-questions",
  "level": 2
}, {
  "value": "How do I integrate with CI/CD?",
  "id": "how-do-i-integrate-with-cicd",
  "level": 3
}, {
  "value": "Can I automate framework updates?",
  "id": "can-i-automate-framework-updates",
  "level": 3
}, {
  "value": "Troubleshooting Questions",
  "id": "troubleshooting-questions",
  "level": 2
}, {
  "value": "Framework installation fails. What do I do?",
  "id": "framework-installation-fails-what-do-i-do",
  "level": 3
}, {
  "value": "Update doesn&#39;t work. How do I fix it?",
  "id": "update-doesnt-work-how-do-i-fix-it",
  "level": 3
}, {
  "value": "Configuration errors. How do I fix them?",
  "id": "configuration-errors-how-do-i-fix-them",
  "level": 3
}, {
  "value": "Best Practices Questions",
  "id": "best-practices-questions",
  "level": 2
}, {
  "value": "Should I pin framework versions?",
  "id": "should-i-pin-framework-versions",
  "level": 3
}, {
  "value": "How often should I check for updates?",
  "id": "how-often-should-i-check-for-updates",
  "level": 3
}, {
  "value": "Should I commit framework files to Git?",
  "id": "should-i-commit-framework-files-to-git",
  "level": 3
}, {
  "value": "Support Questions",
  "id": "support-questions",
  "level": 2
}, {
  "value": "Where can I get help?",
  "id": "where-can-i-get-help",
  "level": 3
}, {
  "value": "How do I report a bug?",
  "id": "how-do-i-report-a-bug",
  "level": 3
}, {
  "value": "Can I contribute improvements?",
  "id": "can-i-contribute-improvements",
  "level": 3
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
        id: "framework-dependency-faq",
        children: "Framework Dependency FAQ"
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
      children: "Frequently asked questions about installing, updating, and using AI Dev Kit frameworks as dependencies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope-greenfield-vs-brownfield",
      children: "Scope (greenfield vs brownfield)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Greenfield / new-template first run (FR-080):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080",
          children: "IPW-E6S9T1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brownfield SoT:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories",
          children: "INSTALL — Brownfield adoption"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration",
          children: "FR-081"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "general-questions",
      children: "General Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-the-difference-between-copy-paste-and-dependency-based-installation",
      children: "What is the difference between copy-paste and dependency-based installation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Copy-paste:"
      }), " Frameworks are manually copied into your project. Updates require manually copying new versions. No automatic update mechanism."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency-based:"
      }), " Frameworks are installed as dependencies (Git submodules, CLI tool, or package managers). Updates can be automatic or semi-automatic with notifications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits of dependency-based:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic update notifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent framework versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard dependency management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "which-installation-method-should-i-use",
      children: "Which installation method should I use?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Submodules (Phase 1):"
      }), " Use if you want immediate availability, full control, and don't mind manual update steps."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Tool (Phase 2):"
      }), " Use if you want a unified interface, automated updates, and easier management. (Coming soon)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Managers (Phase 3):"
      }), " Use if you prefer standard npm/pip workflows and automatic dependency resolution. (Future)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Start with Git submodules, migrate to CLI tool when available."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-use-frameworks-without-installing-as-dependencies",
      children: "Can I use frameworks without installing as dependencies?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes. You can still copy-paste frameworks manually. However, you won't get automatic update notifications or version tracking benefits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "do-i-need-to-install-all-frameworks",
      children: "Do I need to install all frameworks?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No. Frameworks are modular. Install only what you need:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management:"
        }), " For Release Workflow (RW) automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban:"
        }), " For project management and work tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering & Versioning:"
        }), " For version management"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can use them standalone or together."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-questions",
      children: "Use Case Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-are-the-different-ways-i-can-use-ai-dev-kit-frameworks",
      children: "What are the different ways I can use ai-dev-kit frameworks?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are 12 primary use cases for adopting ai-dev-kit frameworks:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Template → All Packages:"
        }), " New project from template with all frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Template → Some Packages:"
        }), " New project from template with selected frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existing Project → All Packages:"
        }), " Install all frameworks into existing project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existing Project → Some Packages:"
        }), " Install selected frameworks into existing project"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional Use Cases:"
      }), "\n5. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference/Learning Only:"
      }), " Use documentation and examples without installing\n6. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monorepo/Multi-Project:"
      }), " Single installation shared across multiple projects\n7. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradual/Migratory Adoption:"
      }), " Start with one framework, add more over time\n8. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fork and Customize:"
      }), " Fork repository for heavy customization\n9. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-GitHub Git Repositories:"
      }), " Use with GitLab, Bitbucket, or self-hosted Git\n10. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Local-Only Projects:"
      }), " Use frameworks in local Git repository only\n11. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI/CD Only Usage:"
      }), " Use frameworks in build/CI processes only\n12. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Educational/Training Context:"
      }), " Use for teaching, workshops, or training"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases",
        children: "Use Cases Guide"
      }), " for detailed information about each use case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "which-use-case-should-i-choose",
      children: "Which use case should I choose?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If you're starting a new project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Template → All Packages"
        }), " (Use Case 1) if you want everything"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Template → Some Packages"
        }), " (Use Case 2) if you want selective adoption"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If you have an existing project:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Existing Project → All Packages"
        }), " (Use Case 3) if you want all frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Existing Project → Some Packages"
        }), " (Use Case 4) if you want selective adoption"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If you're just learning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference/Learning Only"
        }), " (Use Case 5) to study without installing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If you're managing multiple projects:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Monorepo/Multi-Project"
        }), " (Use Case 6) for centralized management"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases",
        children: "Use Cases Guide"
      }), " for a selection matrix and detailed guidance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-use-frameworks-with-non-github-repositories",
      children: "Can I use frameworks with non-GitHub repositories?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yes. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case 9: Non-GitHub Git Repositories"
      }), " covers this scenario."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supported:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitLab repositories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bitbucket repositories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-hosted Git servers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Any Git-compatible repository"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template feature may not be available (depends on your Git host)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual setup required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "May need to adapt instructions for your Git host"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Git submodules (works with any Git host)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow installation guide, adapting for your Git host"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework updates still work via Git tags"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-9-non-github-git-repositories",
        children: "Use Cases Guide - Non-GitHub Git Repositories"
      }), " for details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-use-frameworks-in-a-local-only-project-no-remote-repository",
      children: "Can I use frameworks in a local-only project (no remote repository)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yes. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case 10: Local-Only Projects"
      }), " covers this scenario."]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize local Git repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install frameworks using Git submodules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work locally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual updates as needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-10-local-only-projects",
        children: "Use Cases Guide - Local-Only Projects"
      }), " for details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-use-frameworks-in-a-monorepo-with-multiple-projects",
      children: "Can I use frameworks in a monorepo with multiple projects?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yes. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case 6: Monorepo/Multi-Project Setup"
      }), " covers this scenario."]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install frameworks at monorepo root"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects reference shared frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Centralized update management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All projects benefit from updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-6-monorepomulti-project-setup",
        children: "Use Cases Guide - Monorepo Setup"
      }), " for details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-start-with-one-framework-and-add-more-later",
      children: "Can I start with one framework and add more later?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yes. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case 7: Gradual/Migratory Adoption"
      }), " covers this scenario."]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with one framework (e.g., Kanban)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test and validate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add more frameworks incrementally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate from copy-paste as needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-7-gradualmigratory-adoption",
        children: "Use Cases Guide - Gradual Adoption"
      }), " for details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-use-frameworks-for-learning-without-installing",
      children: "Can I use frameworks for learning without installing?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yes. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Case 5: Reference/Learning Only"
      }), " covers this scenario."]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-5-referencelearning-only",
        children: "Use Cases Guide - Reference Only"
      }), " for details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-questions",
      children: "Installation Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-install-frameworks-in-a-new-project",
      children: "How do I install frameworks in a new project?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ai-dev-kit: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit init"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Install frameworks: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit install workflow-mgmt@2.0.0"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure frameworks: Update paths and settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test installation: Run validation scripts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
        children: "Installation Guide"
      }), " for detailed steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-install-frameworks-in-an-existing-project",
      children: "Can I install frameworks in an existing project?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes. You can migrate from copy-paste to dependencies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup current frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove copied frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install as dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Restore customizations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
        children: "Integration Guide"
      }), " for migration steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-are-the-system-requirements",
      children: "What are the system requirements?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git"
        }), " (required for all methods)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Python 3.11+"
        }), " (for CLI tool, validators, and frameworks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Node.js 16+"
        }), " (if using npm package manager)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unix-like system (Linux, macOS) or Windows with Git Bash/WSL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "do-i-need-to-update-paths-after-installation",
      children: "Do I need to update paths after installation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes. Frameworks contain example paths that need to be updated for your project:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Find example paths\ngrep -r \"src/confidentia\" frameworks/workflow-mgmt/\n\n# Replace with your paths\nfind . -type f -exec sed -i '' 's/src\\/confidentia/src\\/yourproject/g' {} \\;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-usage-guide",
        children: "Usage Guide"
      }), " for configuration steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-questions",
      children: "Update Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-know-when-frameworks-are-updated",
      children: "How do I know when frameworks are updated?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Tool:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit check\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Submodules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd .ai-dev-kit\ngit fetch origin --tags\ngit tag | grep workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Managers:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm outdated  # npm\npip list --outdated  # pip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can also configure automatic checking and notifications."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "should-i-update-immediately-when-notified",
      children: "Should I update immediately when notified?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH updates (2.0.0 → 2.0.1):"
      }), " Usually safe to update immediately (bug fixes, security patches)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MINOR updates (2.0.0 → 2.1.0):"
      }), " Review changelog, test in development, then update (new features, improvements)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MAJOR updates (2.0.0 → 3.0.0):"
      }), " Review breaking changes, plan migration, test thoroughly before updating."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-if-an-update-breaks-my-project",
      children: "What if an update breaks my project?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit update workflow-mgmt@2.0.0  # Previous version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Or:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd .ai-dev-kit\ngit checkout workflow-mgmt-v2.0.0\ncd ..\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always test updates in a development branch before applying to production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-pin-frameworks-to-specific-versions",
      children: "Can I pin frameworks to specific versions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yes. In ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit.yaml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "frameworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    pin: true  # Prevents automatic updates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or use Git tags to pin submodule versions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-questions",
      children: "Configuration Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "where-is-the-configuration-file",
      children: "Where is the configuration file?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configuration file: ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit.yaml"
      }), " in your project root."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Framework-specific configuration:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflow Management: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks/workflow-mgmt/rw-config.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban: Framework-specific configs in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks/kanban/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-configure-update-notifications",
      children: "How do I configure update notifications?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enable automatic checking\nai-dev-kit config set auto_check true\nai-dev-kit config set check_interval daily\n\n# Configure notification channel\nai-dev-kit config set notification_channel console\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-use-different-backends-for-different-frameworks",
      children: "Can I use different backends for different frameworks?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes. Each framework can use a different backend:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "frameworks:\n  workflow-mgmt:\n    backend: git-submodule\n  kanban:\n    backend: npm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-questions",
      children: "Version Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-versioning-scheme-do-frameworks-use",
      children: "What versioning scheme do frameworks use?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Frameworks use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantic Versioning (SemVer):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR:"
        }), " Breaking changes (2.0.0 → 3.0.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR:"
        }), " New features, backward compatible (2.0.0 → 2.1.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH:"
        }), " Bug fixes, backward compatible (2.0.0 → 2.0.1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-check-framework-versions",
      children: "How do I check framework versions?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# CLI tool\nai-dev-kit status\n\n# Git submodules\ncd .ai-dev-kit\ngit describe --tags\n\n# Package managers\nnpm list @ai-dev-kit/workflow-mgmt  # npm\npip show ai-dev-kit-workflow-mgmt  # pip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-if-frameworks-have-version-conflicts",
      children: "What if frameworks have version conflicts?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check compatibility\nai-dev-kit check-compatibility\n\n# Resolve conflicts\nai-dev-kit update --resolve-conflicts\n\n# Or update specific framework\nai-dev-kit update workflow-mgmt@2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "git-submodule-questions",
      children: "Git Submodule Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-update-git-submodules",
      children: "How do I update Git submodules?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd .ai-dev-kit\ngit fetch origin\ngit checkout workflow-mgmt-v2.1.0\ncd ..\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "./scripts/update-frameworks.sh workflow-mgmt 2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-if-submodule-is-not-initialized",
      children: "What if submodule is not initialized?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize submodules\ngit submodule update --init --recursive\n\n# Or clone with submodules\ngit clone --recurse-submodules <repo-url>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-use-git-subtrees-instead-of-submodules",
      children: "Can I use Git subtrees instead of submodules?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes. The CLI tool supports Git subtrees:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit install workflow-mgmt --backend git-subtree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subtrees merge framework code directly into your repository (no separate submodule directory)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cli-tool-questions",
      children: "CLI Tool Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-will-the-cli-tool-be-available",
      children: "When will the CLI tool be available?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CLI tool is planned for Phase 2 (short-term). Git submodules (Phase 1) are available now."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-install-the-cli-tool",
      children: "How do I install the CLI tool?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Via pip (when available)\npip install ai-dev-kit\n\n# From source\ngit clone https://github.com/RMS-Ltd/ai-dev-kit.git\ncd ai-dev-kit/cli\npip install -e .\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-if-cli-command-is-not-found",
      children: "What if CLI command is not found?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check installation\npip show ai-dev-kit\n\n# Install if missing\npip install ai-dev-kit\n\n# Check PATH\necho $PATH\n\n# Use Python module\npython3 -m vibe_dev_kit install workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-functionality-questions",
      children: "Framework Functionality Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-use-the-release-workflow-rw",
      children: "How do I use the Release Workflow (RW)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure you're on correct branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git branch --show-current"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update version file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vim src/yourproject/version.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In your AI assistant, send ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "RW"
          }), " with a task id in the same message"]
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-060"
        }), "), e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E5S01T01"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E5:S01:T01"
        }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " alone)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW runs its configured steps automatically (see your ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " / agent execution guide)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-usage-guide",
        children: "Usage Guide"
      }), " for details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-if-rw-fails-validation",
      children: "What if RW fails validation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check branch context\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\n\n# Check changelog format\npython3 scripts/validation/validate_changelog_format.py\n\n# Fix issues and retry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-enable-the-rw-trigger-in-cursor",
      children: "How do I enable the \"RW\" trigger in Cursor?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " You need to add the RW trigger section to your ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick Setup:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use the RW installer (recommended):"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python frameworks/workflow-mgmt/scripts/install_release_workflow.py\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["This automatically creates/updates ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          }), " with the RW trigger section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Or manually add the section:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Open ", (0,jsx_runtime.jsx)(_components.code, {
              children: "frameworks/workflow-mgmt/cursorrules-rw-trigger-section.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Copy the section from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "### 🚀 RELEASE WORKFLOW (RW) TRIGGER"
            }), " to the end"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Paste into your project's ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file (create it if it doesn't exist)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update file paths in the section to match your project structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Restart Cursor"
          }), " to reload ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Test:"
          }), " In Cursor chat, send e.g. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RW E5S01T01"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RW E5:S01:T01"
          }), " — the agent should recognize the trigger (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-060"
          }), " requires a parseable ", (0,jsx_runtime.jsx)(_components.code, {
            children: "E…S…T…"
          }), " in the same message as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RW"
          }), ")"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ":"]
      }), " The RW trigger is not active. You'll need to manually run workflow steps."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#4-enable-rw-trigger-in-cursorrules-workflow-management-framework-only",
        children: "Installation Guide"
      }), " for detailed instructions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-update-kanban-documentation",
      children: "How do I update Kanban documentation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run update script\ncd frameworks/kanban\npython3 scripts/update-kanban-docs.py\n\n# Or use RW (automatically updates Kanban when configured)\n# e.g. RW E5S01T01 or RW E5:S01:T01 in AI assistant (FR-060)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-questions",
      children: "Migration Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-migrate-from-copy-paste-to-dependencies",
      children: "How do I migrate from copy-paste to dependencies?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup current frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document customizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove copied frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install as dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Restore customizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test functionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
        children: "Integration Guide"
      }), " for detailed migration steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "will-my-customizations-be-lost",
      children: "Will my customizations be lost?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No. Document your customizations before migration, then restore them after installing as dependencies."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common customizations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path updates (src/confidentia → src/yourproject)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration changes (rw-config.yaml)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-migrate-gradually",
      children: "Can I migrate gradually?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes. You can migrate one framework at a time:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate workflow-mgmt first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test thoroughly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate kanban next"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue with other frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cicd-questions",
      children: "CI/CD Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-integrate-with-cicd",
      children: "How do I integrate with CI/CD?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Actions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "- name: Check for updates\n  run: ai-dev-kit check --notify\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitLab CI:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "check-updates:\n  script:\n    - ai-dev-kit check --notify\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
        children: "Integration Guide"
      }), " for complete examples."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-automate-framework-updates",
      children: "Can I automate framework updates?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes, but use with caution:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for updates automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create PR with update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Require manual approval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test before merging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-update-guide",
        children: "Update Guide"
      }), " for update automation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-questions",
      children: "Troubleshooting Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-installation-fails-what-do-i-do",
      children: "Framework installation fails. What do I do?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check framework name: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit list"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify version exists: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit list --versions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check network: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git ls-remote https://github.com/RMS-Ltd/ai-dev-kit.git"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check permissions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ls -la frameworks/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Try different backend: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit install workflow-mgmt --backend git-submodule"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
        children: "Troubleshooting Guide"
      }), " for detailed solutions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-doesnt-work-how-do-i-fix-it",
      children: "Update doesn't work. How do I fix it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check version availability: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit list --versions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check compatibility: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit check --compatibility"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resolve Git conflicts: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git status"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Force update: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit update workflow-mgmt --force"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
        children: "Troubleshooting Guide"
      }), " for more solutions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-errors-how-do-i-fix-them",
      children: "Configuration errors. How do I fix them?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Validate configuration\nai-dev-kit validate-config\n\n# Auto-fix if possible\nai-dev-kit validate-config --fix\n\n# Or reinitialize\nai-dev-kit init\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices-questions",
      children: "Best Practices Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "should-i-pin-framework-versions",
      children: "Should I pin framework versions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Development:"
      }), " Pin to specific versions for stability, update regularly for new features."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Production:"
      }), " Pin to stable versions, test updates in development first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "frameworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    pin: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-often-should-i-check-for-updates",
      children: "How often should I check for updates?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH updates:"
        }), " Check weekly, apply immediately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR updates:"
        }), " Check monthly, review and apply quarterly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR updates:"
        }), " Check quarterly, plan migration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Set automatic checking\nai-dev-kit config set check_interval weekly\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "should-i-commit-framework-files-to-git",
      children: "Should I commit framework files to Git?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Submodules:"
      }), " Commit submodule reference, not framework files (they're in submodule)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Tool/Package Managers:"
      }), " Framework files are managed by dependency system, commit configuration only."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Customizations:"
      }), " Commit your customizations (path updates, config changes)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "support-questions",
      children: "Support Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "where-can-i-get-help",
      children: "Where can I get help?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " See guides in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/user-docs/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Troubleshooting Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
          children: "framework-dependency-troubleshooting-guide.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Issues:"
        }), " Create issue with diagnostic information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Help:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit --help"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit <command> --help"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-do-i-report-a-bug",
      children: "How do I report a bug?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Use CLI to report\nai-dev-kit report-issue \\\n  --framework workflow-mgmt \\\n  --version 2.0.0 \\\n  --description \"Error description\"\n\n# Or create GitHub issue with:\n# - Framework name and version\n# - Error message\n# - Steps to reproduce\n# - Diagnostic information\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-i-contribute-improvements",
      children: "Can I contribute improvements?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yes. Contributions are welcome:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fork the repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test thoroughly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submit pull request"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases",
          children: "Use Cases Guide"
        }), " - Comprehensive use case overview"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "Installation Guide"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide",
          children: "Post-Template Setup Guide"
        }), " - Setup steps after creating from template"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-template-enablement-instructions",
          children: "Template Enablement Instructions"
        }), " - How to enable repository as template"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-usage-guide",
          children: "Usage Guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-update-guide",
          children: "Update Guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
          children: "Integration Guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-cli-reference",
          children: "CLI Reference"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
          children: "Troubleshooting Guide"
        })
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