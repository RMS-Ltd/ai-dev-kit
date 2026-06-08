"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["8074"], {
3134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_repo_structure_for_adopters_md_d66_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-repo-structure-for-adopters-md-d66.json
var site_docs_documentation_user_docs_repo_structure_for_adopters_md_d66_namespaceObject = JSON.parse('{"id":"documentation/user-docs/repo-structure-for-adopters","title":"Repository Structure for Adopters","description":"Purpose: This document explains the ai-dev-kit repository structure from an adopter\'s perspective, clarifying which parts are frameworks (to copy/adopt), which are dev-kit-specific examples, and which are book/authoring content.","source":"@site/../docs/documentation/user-docs/repo-structure-for-adopters.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/repo-structure-for-adopters","permalink":"/ai-dev-kit/docs/documentation/user-docs/repo-structure-for-adopters","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/repo-structure-for-adopters.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"AI Dev Kit Installation Receipt Reference","permalink":"/ai-dev-kit/docs/documentation/user-docs/install-receipt-reference"},"next":{"title":"IDE command whitelist","permalink":"/ai-dev-kit/docs/developer-tools/ide-whitelist-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/repo-structure-for-adopters.md


const frontMatter = {};
const contentTitle = 'Repository Structure for Adopters';

const assets = {

};



const toc = [{
  "value": "Framework Packages (Canonical - Copy These)",
  "id": "framework-packages-canonical---copy-these",
  "level": 2
}, {
  "value": "Numbering &amp; Versioning Framework",
  "id": "numbering--versioning-framework",
  "level": 3
}, {
  "value": "Workflow Management Framework",
  "id": "workflow-management-framework",
  "level": 3
}, {
  "value": "Kanban Framework",
  "id": "kanban-framework",
  "level": 3
}, {
  "value": "Dev-Kit Local Specialisations (Examples - Reference Only)",
  "id": "dev-kit-local-specialisations-examples---reference-only",
  "level": 2
}, {
  "value": "Versioning Policy",
  "id": "versioning-policy",
  "level": 3
}, {
  "value": "Changelog Policies",
  "id": "changelog-policies",
  "level": 3
}, {
  "value": "Kanban Instance",
  "id": "kanban-instance",
  "level": 3
}, {
  "value": "Book / authoring content (not in this repository)",
  "id": "book--authoring-content-not-in-this-repository",
  "level": 2
}, {
  "value": "Adoption entry points (greenfield vs brownfield)",
  "id": "adoption-entry-points-greenfield-vs-brownfield",
  "level": 2
}, {
  "value": "Scripts",
  "id": "scripts",
  "level": 2
}, {
  "value": "Framework Scripts (Copy These)",
  "id": "framework-scripts-copy-these",
  "level": 3
}, {
  "value": "Project Utilities (Reference Only)",
  "id": "project-utilities-reference-only",
  "level": 3
}, {
  "value": "Project Root",
  "id": "project-root",
  "level": 2
}, {
  "value": "Configuration Files",
  "id": "configuration-files",
  "level": 2
}, {
  "value": "rw-config.yaml",
  "id": "rw-configyaml",
  "level": 3
}, {
  "value": "semver-registry.yaml",
  "id": "semver-registryyaml",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
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
        id: "repository-structure-for-adopters",
        children: "Repository Structure for Adopters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " This document explains the ai-dev-kit repository structure from an adopter's perspective, clarifying which parts are frameworks (to copy/adopt), which are dev-kit-specific examples, and which are book/authoring content."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-packages-canonical---copy-these",
      children: "Framework Packages (Canonical - Copy These)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These are the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonical framework packages"
      }), " that adopters should copy or install:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbering--versioning-framework",
      children: "Numbering & Versioning Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical docs:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-policy.md"
            }), " - Primary schema definition (RC.EPIC.STORY.TASK+BUILD)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-strategy.md"
            }), " - Comprehensive strategy (ordering, timestamps, traceability)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            }), " - Package overview"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What to copy:"
        }), " Entire package directory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-management-framework",
      children: "Workflow Management Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical docs:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
            }), " - RW agent execution guide"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md"
            }), " - UKW agent execution guide"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md"
            }), " - PVW agent execution guide"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/*"
            }), " - Branch context, changelog, version validators"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/version/semver_converter.py"
            }), " - SemVer mapping logic"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/changelog/cmw.py"
            }), " - Changelog Management Workflow"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What to copy:"
        }), " Entire package directory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-framework",
      children: "Kanban Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical docs:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "policies/kanban-governance-policy.md"
            }), " - Framework-level governance"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "templates/*"
            }), " - Epic/story/task and board guide templates"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What to copy:"
        }), " Entire package directory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dev-kit-local-specialisations-examples---reference-only",
      children: "Dev-Kit Local Specialisations (Examples - Reference Only)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dev-kit-specific applications"
      }), " of the frameworks. Adopters should create their own specialisations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "versioning-policy",
      children: "Versioning Policy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Dev-kit's application of the versioning framework (fixes Epic space 1-4+, documents dev-kit-specific SemVer mapping)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework SoT:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For adopters:"
        }), " Create your own policy that references the framework SoT and documents your project's Epic ranges and adaptations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "changelog-policies",
      children: "Changelog Policies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paths:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/changelog-management-policy.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/changelog-archival-policy.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Dev-kit's application of CMW patterns (latest-only mode, archival thresholds)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework SoT:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/changelog-management-workflow.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For adopters:"
        }), " Reference these as examples, but create your own policies based on your project's needs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-instance",
      children: "Kanban Instance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/kanban/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Dev-kit's actual Kanban board, epics, stories, tasks (an instance of the framework)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework SoT:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For adopters:"
        }), " Use the framework templates to create your own Kanban structure; don't copy dev-kit's actual epics/stories"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "book--authoring-content-not-in-this-repository",
      children: "Book / authoring content (not in this repository)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Manuscript, proposals, and book-project Kanban (formerly Epic 24) live in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "private companion repository"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit-book"
      }), ", not in the public AI Dev Kit tree. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md",
        children: "ADR-006"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "For adopters:"
      }), " Ignore book-specific paths if you encounter them in older forks or changelogs; use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        })
      }), " for framework adoption only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adoption-entry-points-greenfield-vs-brownfield",
      children: "Adoption entry points (greenfield vs brownfield)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Installer-driven adoption is documented from repository root ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Greenfield (FR-080):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#greenfield-install-specification-wave-1-lock",
          children: "Greenfield Install Specification"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md",
          children: "IPW-E6S9T1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brownfield (FR-081):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories",
          children: "Brownfield adoption"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md",
          children: "IPP-E6S9T2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Policy: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md",
        children: "ADR-003"
      }), ". Host projects ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "map"
      }), " ADK contracts to their own trees; reference layouts in this repo are not mandatory for brownfield adopters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scripts",
      children: "Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-scripts-copy-these",
      children: "Framework Scripts (Copy These)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Core workflow validators, converters, changelog management, Kanban installation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For adopters:"
        }), " Copy these scripts when installing frameworks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-utilities-reference-only",
      children: "Project Utilities (Reference Only)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Dev-kit-specific utilities (framework package build/publish, documentation health monitoring, internal tooling)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For adopters:"
        }), " These are useful examples but not required for framework adoption"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-root",
      children: "Project Root"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The project root is kept minimal. Only the following belong there:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "README.md"
        }), " – Project overview and quick start"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CHANGELOG.md"
        }), " – Main changelog (Keep a Changelog)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CONTRIBUTING.md"
        }), " – Contribution guidelines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), " – How to install frameworks (adopter-facing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DEPENDENCIES.md"
        }), " (optional) – Upstream doc/style register; copy template from ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/examples/adopter-upstream-register",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "examples/adopter-upstream-register.md"
          })
        }), " — see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/adopter-external-resource-dependency-tracking",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "adopter-external-resource-dependency-tracking.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config files"
        }), " – e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintainer runbooks"
      }), " (build packages, upload to releases, etc.) live in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/"
        })
      }), ", not in root. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/maintenance/README.md",
        children: "docs/maintenance/README.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-files",
      children: "Configuration Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rw-configyaml",
      children: "rw-config.yaml"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " Project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " Release Workflow configuration (paths, schema, Kanban integration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For adopters:"
        }), " Create your own ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " using the framework's config schema"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "semver-registryyaml",
      children: "semver-registry.yaml"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " Project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purpose:"
        }), " SemVer mapping registry (epic/story → MINOR/PATCH assignments)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For adopters:"
        }), " Create your own registry when adopting the versioning framework"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Adopter Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frameworks (SoT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy entire packages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dev-kit policies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference as examples, create your own"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dev-kit Kanban"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/kanban/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use framework templates, don't copy dev-kit's epics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Framework scripts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/*/scripts/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy when installing frameworks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Project utilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional reference only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Book content"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/knowledge/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignore (book project only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maintainer runbooks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference only (build/upload; not for adoption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Upstream doc register (optional)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DEPENDENCIES.md"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/upstream-register.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Copy ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/examples/adopter-upstream-register",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "examples/adopter-upstream-register.md"
              })
            }), "; track Best-README / Keep a Changelog / Shields per ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/adopter-external-resource-dependency-tracking",
              children: "adopter-external-resource-dependency-tracking.md"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " Frameworks (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/*"
      }), ") are the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonical source of truth"
      }), ". Dev-kit-local docs (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/*"
      }), ") are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "specialisations"
      }), " that show how to apply the frameworks in a specific project context."]
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